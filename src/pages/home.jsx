import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { characters } from '../features/characters/characters';
import { artifacts } from '../features/artifacts/artifacts';
import '../css/homeMenu.css';

const STORAGE_KEY = 'maoty_genshin_team_slots_v1';

const ELEMENT_ACCENTS = [
  { id: 'default', label: 'Celestial Indigo', color: '#6c63ff' },
  { id: 'pyro', label: 'Pyro', color: '#e2311d' },
  { id: 'hydro', label: 'Hydro', color: '#1e90ff' },
  { id: 'anemo', label: 'Anemo', color: '#00d2d3' },
  { id: 'electro', label: 'Electro', color: '#a55eea' },
  { id: 'geo', label: 'Geo', color: '#ffa502' },
  { id: 'cryo', label: 'Cryo', color: '#74b9ff' },
  { id: 'dendro', label: 'Dendro', color: '#2ed573' }
];

function readSavedParty() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [null, null, null, null];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed) || parsed.length !== 4) return [null, null, null, null];

    return parsed.map((entry) => {
      if (!entry) return null;
      const id = typeof entry === 'object' ? entry.id : entry;
      return characters.find((c) => c.id === id) || null;
    });
  } catch {
    return [null, null, null, null];
  }
}

export default function Home() {
  const navigate = useNavigate();
  const [accent, setAccent] = useState(ELEMENT_ACCENTS[0]);
  const [quickQuery, setQuickQuery] = useState('');
  const [spotlightIndex, setSpotlightIndex] = useState(0);

  const savedParty = useMemo(() => readSavedParty(), []);
  const filledPartyCount = useMemo(
    () => savedParty.filter(Boolean).length,
    [savedParty]
  );

  const featuredChar = characters[spotlightIndex] || characters[0];

  const searchMatches = useMemo(() => {
    const q = quickQuery.trim().toLowerCase();
    if (!q) return [];

    const charMatches = characters
      .filter(
        (c) =>
          (c.name || '').toLowerCase().includes(q) ||
          (c.type || '').toLowerCase().includes(q) ||
          (c.role || '').toLowerCase().includes(q)
      )
      .map((c) => ({
        key: `char-${c.id}`,
        label: c.name,
        sub: `Character • ${(c.type || '').toUpperCase()}`,
        to: `/characters/${c.id}`
      }));

    const artMatches = artifacts
      .filter(
        (a) =>
          (a.name || '').toLowerCase().includes(q) ||
          (a.domain || '').toLowerCase().includes(q)
      )
      .map((a) => ({
        key: `art-${a.id}`,
        label: a.name,
        sub: `Artifact Set • ${a.domain}`,
        to: `/artifacts/${a.id}`
      }));

    return [...charMatches, ...artMatches].slice(0, 6);
  }, [quickQuery]);

  const handleQuickSubmit = (e) => {
    e.preventDefault();
    if (searchMatches.length > 0) {
      navigate(searchMatches[0].to);
    }
  };

  const handleCycleSpotlight = () => {
    if (characters.length === 0) return;
    setSpotlightIndex((prev) => (prev + 1) % characters.length);
  };

  return (
    <main
      className="home-menu-page"
      style={{ '--menu-accent': accent.color }}
    >
      {/* Hero & Quick Command Search */}
      <section className="home-hero">
        <div className="home-hero-copy">
          <span className="home-kicker">Teyvat Field Archive &amp; Party Planner</span>
          <h1 className="home-title">Maoty Impact Databoard</h1>
          <p className="home-subtitle">
            Explore character kits and previews, browse artifact set bonuses, and test 4-character team synergies in one place.
          </p>

          <form className="home-search-box" onSubmit={handleQuickSubmit}>
            <input
              type="search"
              className="home-search-input"
              placeholder="Quick jump to a character, element, or artifact set..."
              value={quickQuery}
              onChange={(e) => setQuickQuery(e.target.value)}
              aria-label="Quick search characters and artifacts"
            />
            <button type="submit" className="home-primary-btn">
              Go
            </button>
          </form>

          {searchMatches.length > 0 && (
            <ul className="home-search-results" role="listbox">
              {searchMatches.map((item) => (
                <li key={item.key}>
                  <button
                    type="button"
                    className="home-search-result-btn"
                    onClick={() => navigate(item.to)}
                  >
                    <strong>{item.label}</strong>
                    <span>{item.sub}</span>
                  </button>
                </li>
              ))}
            </ul>
          )}

          {/* Element Accent Switcher */}
          <div className="accent-switcher" aria-label="Theme accent selector">
            <span className="accent-label">Accent:</span>
            {ELEMENT_ACCENTS.map((item) => (
              <button
                key={item.id}
                type="button"
                className={`accent-dot ${accent.id === item.id ? 'active' : ''}`}
                style={{ backgroundColor: item.color }}
                title={item.label}
                aria-label={`Set theme accent to ${item.label}`}
                onClick={() => setAccent(item)}
              />
            ))}
          </div>
        </div>

        {/* Live Telemetry Summary */}
        <aside className="home-stats-panel" aria-label="Databoard overview">
          <div className="home-stat-card">
            <span className="home-stat-value">{characters.length}</span>
            <span className="home-stat-label">Tracked Characters</span>
          </div>
          <div className="home-stat-card">
            <span className="home-stat-value">{artifacts.length}</span>
            <span className="home-stat-label">Artifact Sets</span>
          </div>
          <div className="home-stat-card">
            <span className="home-stat-value">{filledPartyCount}/4</span>
            <span className="home-stat-label">Saved Party Slots</span>
          </div>
        </aside>
      </section>

      {/* Primary Feature Launchpad */}
      <section className="home-launchpad" aria-label="Main navigation modules">
        <article className="launchpad-card">
          <div className="launchpad-top">
            <span className="launchpad-badge">Roster</span>
            <h2>Characters</h2>
          </div>
          <p>
            Filter playable units by element, inspect skill and burst breakdowns, and preview animations and constellations.
          </p>
          <button
            type="button"
            className="launchpad-btn"
            onClick={() => navigate('/characters')}
          >
            Open Character Archive →
          </button>
        </article>

        <article className="launchpad-card">
          <div className="launchpad-top">
            <span className="launchpad-badge">Equipment</span>
            <h2>Artifacts</h2>
          </div>
          <p>
            Browse artifact sets by region domain and review 2-piece and 4-piece effect descriptions for character builds.
          </p>
          <button
            type="button"
            className="launchpad-btn"
            onClick={() => navigate('/artifacts')}
          >
            Browse Artifact Sets →
          </button>
        </article>

        <article className="launchpad-card">
          <div className="launchpad-top">
            <span className="launchpad-badge">Synergy</span>
            <h2>Team Builder</h2>
          </div>
          <p>
            Slot up to 4 characters to check Elemental Resonance, reaction options, role coverage, and scaling warnings.
          </p>
          <button
            type="button"
            className="launchpad-btn"
            onClick={() => navigate('/team-builder')}
          >
            Launch Team Builder →
          </button>
        </article>
      </section>

      {/* Spotlight Character + Active Saved Squad */}
      <section className="home-widgets-grid" aria-label="Featured character and saved squad">
        {featuredChar && (
          <article className="widget-box">
            <div className="widget-header">
              <div>
                <span className="widget-eyebrow">Roster Spotlight</span>
                <h2 className="widget-title">{featuredChar.name}</h2>
              </div>
              <button
                type="button"
                className="widget-ghost-btn"
                onClick={handleCycleSpotlight}
              >
                Next Unit
              </button>
            </div>

            <div className="spotlight-body">
              <img
                src={featuredChar.picture}
                alt={featuredChar.name}
                className="spotlight-portrait"
                loading="lazy"
                decoding="async"
              />
              <div className="spotlight-info">
                <div className="spotlight-pills">
                  <span className="spotlight-pill">{(featuredChar.type || 'Element').toUpperCase()}</span>
                  {featuredChar.weapon && <span className="spotlight-pill">{featuredChar.weapon}</span>}
                  {featuredChar.role && <span className="spotlight-pill">{featuredChar.role}</span>}
                </div>
                <p className="spotlight-desc">
                  {featuredChar.skill?.intro || 'Inspect full skill details, burst effects, and animation previews.'}
                </p>
                <button
                  type="button"
                  className="home-primary-btn"
                  onClick={() => navigate(`/characters/${featuredChar.id}`)}
                >
                  Inspect Full Kit
                </button>
              </div>
            </div>
          </article>
        )}

        <article className="widget-box">
          <div className="widget-header">
            <div>
              <span className="widget-eyebrow">Active Party</span>
              <h2 className="widget-title">Saved Team Slots</h2>
            </div>
            <button
              type="button"
              className="widget-ghost-btn"
              onClick={() => navigate('/team-builder')}
            >
              Edit Party
            </button>
          </div>

          <div className="mini-party-row">
            {savedParty.map((slot, idx) => (
              <div key={idx} className={`mini-party-slot ${slot ? 'filled' : 'empty'}`}>
                {slot ? (
                  <>
                    <img
                      src={slot.picture}
                      alt={slot.name}
                      className="mini-avatar"
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="mini-name">{slot.name}</span>
                    <span className="mini-el">{slot.type}</span>
                  </>
                ) : (
                  <>
                    <span className="mini-plus">+</span>
                    <span className="mini-name">Slot {idx + 1}</span>
                    <span className="mini-el">Open</span>
                  </>
                )}
              </div>
            ))}
          </div>
        </article>
      </section>
    </main>
  );
}