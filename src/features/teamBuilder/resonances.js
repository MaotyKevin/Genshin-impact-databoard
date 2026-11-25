export const RESONANCE_BY_ELEMENT = {
  pyro: {
    name: 'Fervent Flames',
    element: 'Pyro',
    summary: '+25% ATK; Cryo aura duration reduced by 40%.'
  },
  hydro: {
    name: 'Soothing Waters',
    element: 'Hydro',
    summary: '+25% Max HP; Pyro aura duration reduced by 40%.'
  },
  anemo: {
    name: 'Impetuous Winds',
    element: 'Anemo',
    summary: '-15% Stamina consumption, +10% Movement SPD, -5% Skill cooldown.'
  },
  electro: {
    name: 'High Voltage',
    element: 'Electro',
    summary: 'Triggering Electro reactions can generate an Electro particle (5s CD); Hydro aura duration reduced by 40%.'
  },
  cryo: {
    name: 'Shattering Ice',
    element: 'Cryo',
    summary: '+15% CRIT Rate against enemies affected by Cryo or Frozen; Electro aura duration reduced by 40%.'
  },
  geo: {
    name: 'Enduring Rock',
    element: 'Geo',
    summary: '+15% Shield Strength; shielded characters gain +15% DMG and reduce Geo RES on hit enemies.'
  },
  dendro: {
    name: 'Sprawling Greenery',
    element: 'Dendro',
    summary: '+50 Base Elemental Mastery, plus bonus team EM upon triggering Dendro reactions.'
  }
};

export const RAINBOW_RESONANCE = {
  id: 'rainbow',
  name: 'Protective Canopy',
  element: 'All Unique',
  summary: '+15% All Elemental RES and Physical RES when all 4 slots have distinct elements.'
};