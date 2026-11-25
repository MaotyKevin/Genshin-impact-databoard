import { RESONANCE_BY_ELEMENT, RAINBOW_RESONANCE } from './resonances';

const REACTION_RULES = [
  { name: 'Vaporize', check: (has) => has('pyro') && has('hydro') },
  { name: 'Melt', check: (has) => has('pyro') && has('cryo') },
  { name: 'Overloaded', check: (has) => has('pyro') && has('electro') },
  { name: 'Electro-Charged', check: (has) => has('hydro') && has('electro') },
  { name: 'Frozen', check: (has) => has('hydro') && has('cryo') },
  { name: 'Superconduct', check: (has) => has('cryo') && has('electro') },
  {
    name: 'Swirl',
    check: (has) => has('anemo') && ['pyro', 'hydro', 'electro', 'cryo'].some(has)
  },
  {
    name: 'Crystallize',
    check: (has) => has('geo') && ['pyro', 'hydro', 'electro', 'cryo'].some(has)
  },
  { name: 'Quicken / Aggravate', check: (has) => has('dendro') && has('electro') },
  { name: 'Bloom', check: (has) => has('dendro') && has('hydro') },
  { name: 'Hyperbloom', check: (has) => has('dendro') && has('hydro') && has('electro') },
  { name: 'Burgeon', check: (has) => has('dendro') && has('hydro') && has('pyro') },
  { name: 'Burning', check: (has) => has('dendro') && has('pyro') }
];

export function evaluateTeam(team = []) {
  const members = team.filter(Boolean);
  const elements = members
    .map((c) => (c.type || c.element || '').toLowerCase())
    .filter(Boolean);

  const elementCounts = elements.reduce((acc, el) => {
    acc[el] = (acc[el] || 0) + 1;
    return acc;
  }, {});

  const resonances = [];
  if (members.length === 4) {
    const uniqueElements = Object.keys(elementCounts);
    if (uniqueElements.length === 4) {
      resonances.push({ ...RAINBOW_RESONANCE });
    } else {
      for (const [el, count] of Object.entries(elementCounts)) {
        if (count >= 2 && RESONANCE_BY_ELEMENT[el]) {
          resonances.push({
            id: el,
            ...RESONANCE_BY_ELEMENT[el]
          });
        }
      }
    }
  }

  const has = (el) => Boolean(elementCounts[el]);
  const reactions = REACTION_RULES.filter((rule) => rule.check(has)).map((r) => r.name);

  const archetypes = Array.from(
    new Set(members.flatMap((c) => (Array.isArray(c.archetypes) ? c.archetypes : [])))
  );

  const roleBreakdown = members.reduce(
    (acc, char) => {
      const roles = Array.isArray(char.roles) && char.roles.length > 0
        ? char.roles
        : [char.role || 'Flex'];
      if (roles.includes('On-Field DPS')) acc.onFieldDps += 1;
      if (roles.includes('Sub-DPS')) acc.subDps += 1;
      if (roles.includes('Support')) acc.support += 1;
      if (roles.includes('Sustain') || char.sustainType) acc.sustain += 1;
      return acc;
    },
    { onFieldDps: 0, subDps: 0, support: 0, sustain: 0 }
  );

  const warnings = [];
  const highlights = [];

  if (members.length < 4) {
    warnings.push(
      `Add ${4 - members.length} more character${4 - members.length === 1 ? '' : 's'} to complete a 4-slot party and unlock Elemental Resonance.`
    );
  }

  if (members.length === 4 && roleBreakdown.onFieldDps === 0) {
    warnings.push('No dedicated On-Field DPS in the party—confirm which character stays active during buff windows.');
  }

  if (roleBreakdown.onFieldDps > 1) {
    warnings.push(`${roleBreakdown.onFieldDps} On-Field DPS units selected—they may compete for active field time.`);
  }

  if (members.length >= 3 && roleBreakdown.sustain === 0) {
    warnings.push('No healer or shielder detected—consider adding sustain for survivability and comfort.');
  }

  const hasAtkBuff = members.some((c) => c.name?.toLowerCase() === 'benett' || c.archetypes?.includes('ATK Buffer'));
  const hasHpScaler = members.some((c) => c.scalingStat === 'HP');
  const hasDefScaler = members.some((c) => c.scalingStat === 'DEF');

  if (hasAtkBuff && (hasHpScaler || hasDefScaler)) {
    warnings.push('Flat ATK buffs help less for HP- or DEF-scaling carries—check whether an element/DMG or utility buffer fits better.');
  }

  if (resonances.length > 0) {
    highlights.push(`Active resonance: ${resonances.map((r) => r.name).join(', ')}.`);
  }

  if (reactions.length > 0) {
    highlights.push(`Reaction access: ${reactions.join(', ')}.`);
  }

  return {
    memberCount: members.length,
    resonances,
    reactions,
    archetypes,
    roleBreakdown,
    warnings,
    highlights
  };
}