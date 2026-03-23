import React, { useState } from 'react';

import Card from './card'
import { caractersProfiles } from '../data/dummy'

import'../css/cardList.css'

import GeoIcon from '../assets/geo.webp';
import PyroIcon from '../assets/pyro.webp'; 
import AnemoIcon from '../assets/anemo.webp';
import ElectroIcon from '../assets/electro.webp';
import DendroIcon from '../assets/dendro.webp';
import HydroIcon from '../assets/hydro.webp';
import CryoIcon from '../assets/cryo.webp';
import allIcon from '../assets/all.webp';

export default function Caracter() {

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
      ? caractersProfiles 
      : caractersProfiles.filter(char => char.type === activeFilter);


   return (
      <div className="caracter-container">

         {/*Elemental Filter UI */}
         <div className="filter-group">
            {elements.map((element) => (
               <button 
                  key={element}
                  className={`filter-btn ${activeFilter === element ? 'active' : ''}`}
                  onClick={() => setActiveFilter(element)}
               >
         

            <img 
               src={elementIcons[element]} 
               alt={element} 
               style={{ width: '30px', height: '30px' }} 
            />

               </button>
            ))}
         </div>

         <div className="caracter-grid">
            {filteredCharacters.map((profile, index) => (
               <Card
                  key={`${profile.id}-${index}`}
                  id={profile.id}
                  name={profile.name}
                  picture={profile.picture}
                  type={profile.type}
                  rarity={profile.rarity}
                  ultimateVideo={profile.ultimateVideo}
                  skillVideo={profile.skillVideo} 
                  idleAnimation1={profile.idleAnimation1}
                  idleAnimation2={profile.idleAnimation2}
               />
            ))}
         </div>
      </div>
   )
}