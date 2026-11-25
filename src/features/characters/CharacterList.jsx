import React, { useState } from 'react';

import CharacterCard from './CharacterCard';
import { characters } from './characters';

import '../../css/cardList.css';

import GeoIcon from '../../assets/geo.webp';
import PyroIcon from '../../assets/pyro.webp';
import AnemoIcon from '../../assets/anemo.webp';
import ElectroIcon from '../../assets/electro.webp';
import DendroIcon from '../../assets/dendro.webp';
import HydroIcon from '../../assets/hydro.webp';
import CryoIcon from '../../assets/cryo.webp';
import allIcon from '../../assets/all.webp';

export default function CharacterList() {

   const [activeFilter, setActiveFilter] = useState('all');

   const elements = ['all', 'anemo', 'geo', 'electro', 'dendro', 'hydro', 'pyro', 'cryo'];

   const elementIcons = {
      geo: GeoIcon,
      pyro: PyroIcon,
      anemo: AnemoIcon,
      electro: ElectroIcon,
      dendro: DendroIcon,
      hydro: HydroIcon,
      cryo: CryoIcon,
      all: allIcon
   };

   const filteredCharacters = activeFilter === 'all'
      ? characters
      : characters.filter(character => character.type === activeFilter);

   return (
      <div className="caracter-container">
         <div className="filter-group">
            {elements.map((element) => (
               <button
                  key={element}
                  className={`filter-btn ${activeFilter === element ? 'active' : ''}`}
                  onClick={() => setActiveFilter(element)}
               >
                  <img
                     src={elementIcons[element]}
                     title={element}
                     alt={element}
                     style={{ width: '30px', height: '30px' }}
                  />
               </button>
            ))}
         </div>

         <div className="caracter-grid">
            {filteredCharacters.map((character) => (
               <CharacterCard
                  key={character.id}
                  id={character.id}
                  name={character.name}
                  picture={character.picture}
                  type={character.type}
                  rarity={character.rarity}
                  ultimateVideo={character.ultimateVideo}
                  skillVideo={character.skillVideo}
                  skillIcon={character.skillIcon}
                  ultIcon={character.ultIcon}
                  idleAnimation1={character.idleAnimation1}
                  idleAnimation2={character.idleAnimation2}
                  constellation={character.constellation}
                  skill={character.skill}
                  ult={character.ult}
               />
            ))}
         </div>
      </div>
   );
}