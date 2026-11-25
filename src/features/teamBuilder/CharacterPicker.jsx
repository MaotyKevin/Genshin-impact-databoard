import React, { useMemo, useState } from 'react';

const ELEMENT_OPTIONS = ['all', 'pyro', 'hydro', 'anemo', 'electro', 'cryo', 'geo', 'dendro'];
const ROLE_OPTIONS = ['all', 'On-Field DPS', 'Sub-DPS', 'Support', 'Sustain'];

export default function CharacterPicker({
  characters = [],
  team = [],
  activeSlotIndex = 0,
  onSelectCharacter
}) {
  const [search, setSearch] = useState('');
  const [elementFilter, setElementFilter] = useState('all');
  const [roleFilter, setRoleFilter] = useState('all');

  const assignedIds = useMemo(
    () => new Set(team.filter(Boolean).map((char) => char.id)),
    [team]
  );

  const filteredCharacters = useMemo(() => {
    const q = search.trim().toLowerCase();
    return characters.filter((char) => {
      const charEl = (char.type || char.element || '').toLowerCase();
      const matchesElement = elementFilter === 'all' || charEl === elementFilter;

      const charRoles = Array.isArray(char.roles) && char.roles.length > 0
        ? char.roles
        : [char.role || 'Flex'];
      const matchesRole =
        roleFilter === 'all' ||
        charRoles.includes(roleFilter) ||
        (roleFilter === 'Sustain' && Boolean(char.sustainType));

      const matchesSearch =
        !q ||
        (char.name || '').toLowerCase().includes(q) ||
        charEl.includes(q) ||
        (char.weapon || '').toLowerCase().includes(q);

      return matchesElement && matchesRole && matchesSearch;
    });
  }, [characters, search, elementFilter, roleFilter]);

  return (
    <section className="picker-panel" aria-label="Character roster picker">
      <div className="picker-header">
        <div>
          <h3>Roster Selector</h3>
          <p className="picker-subtitle">
            Assigning to <strong>Slot {activeSlotIndex + 1}</strong>
          </p>
        </div>
        <input
          type="search"
          className="picker-search"
          placeholder="Search name, element, weapon..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          aria-label="Search characters"
        />
      </div>

      <div className="picker-filters">
        <div className="filter-pills" role="group" aria-label="Filter by element">
          {ELEMENT_OPTIONS.map((el) => (
            <button
              key={el}
              type="button"
              className={`pill-btn ${elementFilter === el ? 'active' : ''}`}
              onClick={() => setElementFilter(el)}
            >
              {el === 'all' ? 'All Elements' : el.charAt(0).toUpperCase() + el.slice(1)}
            </button>
          ))}
        </div>

        <div className="filter-pills" role="group" aria-label="Filter by role">
          {ROLE_OPTIONS.map((role) => (
            <button
              key={role}
              type="button"
              className={`pill-btn ${roleFilter === role ? 'active' : ''}`}
              onClick={() => setRoleFilter(role)}
            >
              {role === 'all' ? 'All Roles' : role}
            </button>
          ))}
        </div>
      </div>

      {filteredCharacters.length === 0 ? (
        <p className="empty-roster-msg">No characters match your current filters.</p>
      ) : (
        <div className="picker-grid">
          {filteredCharacters.map((char) => {
            const isAssigned = assignedIds.has(char.id);
            const isInActiveSlot = team[activeSlotIndex]?.id === char.id;
            const charEl = (char.type || char.element || 'flex').toLowerCase();

            return (
              <button
                key={char.id}
                type="button"
                className={`picker-card ${isAssigned ? 'assigned' : ''} ${isInActiveSlot ? 'current-slot' : ''}`}
                disabled={isAssigned && !isInActiveSlot}
                onClick={() => onSelectCharacter(char)}
              >
                <img
                  src={char.picture}
                  alt={char.name}
                  className="picker-avatar"
                  loading="lazy"
                  decoding="async"
                />
                <div className="picker-meta">
                  <span className="picker-name">{char.name}</span>
                  <span className={`element-tag el-${charEl}`}>
                    {charEl.toUpperCase()} {char.weapon ? `• ${char.weapon}` : ''}
                  </span>
                  <span className="picker-role">{char.role || 'Flex'}</span>
                </div>
                <span className="picker-status">
                  {isInActiveSlot ? 'In Slot' : isAssigned ? 'On Team' : `+ Slot ${activeSlotIndex + 1}`}
                </span>
              </button>
            );
          })}
        </div>
      )}
    </section>
  );
}