import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { characters } from '../characters/characters';
import { evaluateTeam } from './synergyEngine';
import CharacterPicker from './CharacterPicker';
import '../../css/teamBuilder.css';

const STORAGE_KEY = 'maoty_genshin_team_slots_v1';
const EMPTY_SLOTS = [null, null, null, null];

function loadSavedTeam() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return EMPTY_SLOTS;
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed) || parsed.length !== 4) return EMPTY_SLOTS;

    return parsed.map((item) => {
      if (!item) return null;
      const id = typeof item === 'object' ? item.id : item;
      return characters.find((c) => c.id === id) || null;
    });
  } catch {
    return EMPTY_SLOTS;
  }
}

export default function TeamBuilder() {
  const navigate = useNavigate();
  const [team, setTeam] = useState(loadSavedTeam);
  const [activeSlotIndex, setActiveSlotIndex] = useState(0);

  useEffect(() => {
    try {
      const compact = team.map((char) => (char ? { id: char.id } : null));
      localStorage.setItem(STORAGE_KEY, JSON.stringify(compact));
    } catch {
      // Ignore storage quota errors
    }
  }, [team]);

  const evaluation = useMemo(() => evaluateTeam(team), [team]);

  const handleSelectCharacter = (char) => {
    const existingIndex = team.findIndex((member) => member?.id === char.id);
    if (existingIndex !== -1 && existingIndex !== activeSlotIndex) {
      return;
    }

    setTeam((prev) => {
      const next = [...prev];
      next[activeSlotIndex] = char;
      const nextEmpty = next.findIndex((slot, idx) => idx > activeSlotIndex && slot === null);
      if (nextEmpty !== -1) {
        setActiveSlotIndex(nextEmpty);
      } else {
        const anyEmpty = next.findIndex((slot) => slot === null);
        if (anyEmpty !== -1) setActiveSlotIndex(anyEmpty);
      }
      return next;
    });
  };

  const handleRemoveSlot = (index, e) => {
    e.stopPropagation();
    setTeam((prev) => {
      const next = [...prev];
      next[index] = null;
      return next;
    });
    setActiveSlotIndex(index);
  };

  const handleClearTeam = () => {
    setTeam([...EMPTY_SLOTS]);
    setActiveSlotIndex(0);
  };

  const handleAutoFillSample = () => {
    if (characters.length === 0) return;
    const sample = EMPTY_SLOTS.map((_, idx) => characters[idx] || null);
    setTeam(sample);
  };

  return (
    <div className="team-builder-page">
      <header className="team-builder-hero">
        <div>
          <h1>Team Builder &amp; Synergy Checker</h1>
          <p>
            Assemble a 4-character party to check Elemental Resonance, reaction coverage, role balance, and team warnings.
          </p>
        </div>
        <div className="team-toolbar-actions">
          <button type="button" className="tb-btn secondary" onClick={handleAutoFillSample}>
            Sample Squad
          </button>
          <button type="button" className="tb-btn danger" onClick={handleClearTeam}>
            Clear Party
          </button>
        </div>
      </header>

      <section className="party-slots-grid" aria-label="4-character party slots">
        {team.map((member, index) => {
          const isSelectedSlot = activeSlotIndex === index;
          const elClass = member ? (member.type || member.element || 'flex').toLowerCase() : '';

          return (
            <div
              key={index}
              role="button"
              tabIndex={0}
              className={`party-slot ${member ? 'filled' : 'empty'} ${isSelectedSlot ? 'selected' : ''}`}
              onClick={() => setActiveSlotIndex(index)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setActiveSlotIndex(index);
                }
              }}
            >
              <div className="slot-top-bar">
                <span className="slot-badge">Slot {index + 1}</span>
                {member && (
                  <button
                    type="button"
                    className="slot-remove-btn"
                    onClick={(e) => handleRemoveSlot(index, e)}
                    aria-label={`Remove ${member.name} from slot ${index + 1}`}
                  >
                    ✕
                  </button>
                )}
              </div>

              {member ? (
                <div className="slot-content">
                  <img
                    src={member.picture}
                    alt={member.name}
                    className="slot-portrait"
                    loading="lazy"
                    decoding="async"
                  />
                  <h2 className="slot-char-name">{member.name}</h2>
                  <div className="slot-tags">
                    <span className={`element-tag el-${elClass}`}>
                      {elClass.toUpperCase()}
                    </span>
                    <span className="role-tag">{member.role || 'Flex'}</span>
                    {member.scalingStat && (
                      <span className="stat-tag">{member.scalingStat}</span>
                    )}
                  </div>
                  <button
                    type="button"
                    className="slot-details-link"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/characters/${member.id}`);
                    }}
                  >
                    View Kit
                  </button>
                </div>
              ) : (
                <div className="slot-empty-state">
                  <span className="plus-icon">+</span>
                  <p>{isSelectedSlot ? 'Select a character below' : 'Click slot to select'}</p>
                </div>
              )}
            </div>
          );
        })}
      </section>

      <section className="synergy-dashboard" aria-label="Team synergy evaluation">
        <div className="synergy-card">
          <h3>Elemental Resonance</h3>
          {evaluation.resonances.length === 0 ? (
            <p className="muted-copy">
              {evaluation.memberCount < 4
                ? 'Fill all 4 slots to activate Elemental Resonance.'
                : 'No matching resonance rule triggered for this lineup.'}
            </p>
          ) : (
            <ul className="resonance-list">
              {evaluation.resonances.map((res) => (
                <li key={res.id} className="resonance-item">
                  <strong>{res.name}</strong>
                  <span>{res.summary}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="synergy-card">
          <h3>Available Reactions &amp; Traits</h3>
          {evaluation.reactions.length === 0 ? (
            <p className="muted-copy">Pick characters with complementary elements to see reaction options.</p>
          ) : (
            <div className="chip-wrap">
              {evaluation.reactions.map((rxn) => (
                <span key={rxn} className="reaction-chip">{rxn}</span>
              ))}
            </div>
          )}

          {evaluation.archetypes.length > 0 && (
            <div className="archetype-block">
              <span className="mini-label">Kit Archetypes</span>
              <div className="chip-wrap">
                {evaluation.archetypes.map((arch) => (
                  <span key={arch} className="archetype-chip">{arch}</span>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="synergy-card">
          <h3>Role Coverage &amp; Synergy Notes</h3>
          <div className="role-summary-grid">
            <div><span>On-Field DPS</span><strong>{evaluation.roleBreakdown.onFieldDps}</strong></div>
            <div><span>Sub-DPS</span><strong>{evaluation.roleBreakdown.subDps}</strong></div>
            <div><span>Support</span><strong>{evaluation.roleBreakdown.support}</strong></div>
            <div><span>Sustain</span><strong>{evaluation.roleBreakdown.sustain}</strong></div>
          </div>

          {evaluation.warnings.length > 0 && (
            <ul className="warning-list">
              {evaluation.warnings.map((warn, idx) => (
                <li key={idx}>{warn}</li>
              ))}
            </ul>
          )}

          {evaluation.highlights.length > 0 && (
            <ul className="highlight-list">
              {evaluation.highlights.map((hl, idx) => (
                <li key={idx}>{hl}</li>
              ))}
            </ul>
          )}
        </div>
      </section>

      <CharacterPicker
        characters={characters}
        team={team}
        activeSlotIndex={activeSlotIndex}
        onSelectCharacter={handleSelectCharacter}
      />
    </div>
  );
}