import React, { useState } from 'react';

import Artefact from './artefact'
import { artefactsProfiles } from '../data/sets'


import'../css/cardList.css'

const Monsdtat = 'https://static.wikia.nocookie.net/gensin-impact/images/c/ce/Mondstadt_Emblem_Night.png/revision/latest?cb=20231103102409'

const Linue = 'https://static.wikia.nocookie.net/gensin-impact/images/c/c3/Liyue_Emblem_Night.png/revision/latest?cb=20231103102407'

const Inazuma = 'https://static.wikia.nocookie.net/gensin-impact/images/a/a5/Inazuma_Emblem_Night.png/revision/latest?cb=20231103102405'

const Sumeru = 'https://static.wikia.nocookie.net/gensin-impact/images/e/ef/Sumeru_Emblem_Night.png/revision/latest?cb=20231103102413'

const Fontaine = 'https://static.wikia.nocookie.net/gensin-impact/images/0/06/Fontaine_Emblem_Night.png/revision/latest?cb=20231103102400'

const Natlan = 'https://static.wikia.nocookie.net/gensin-impact/images/3/34/Natlan_Emblem_Night.png/revision/latest?cb=20240828233634'

const Nodkrai = 'https://static.wikia.nocookie.net/gensin-impact/images/4/4e/Nod-Krai_Emblem_Night.png/revision/latest?cb=20250911093401'

const allIcon = 'https://static.wikia.nocookie.net/gensin-impact/images/b/b0/Emblem_Nation_Unknown.png/revision/latest/scale-to-width-down/60?cb=20231104144317'



export default function ArtefactList() {

   const [activeFilter, setActiveFilter] = useState('all');

   const elements = ['all', 'Mondstat', 'Linue', 'Inazuma', 'Sumeru', 'Fontaine', 'Natlan', 'NodKrai'];

    const elementIcons = {
    Mondstat: Monsdtat,
    Linue: Linue,
    Inazuma: Inazuma,
    Sumeru: Sumeru,
    Fontaine: Fontaine,
    Natlan: Natlan,
    NodKrai: Nodkrai,
    all: allIcon
};


   const filteredArtefact = activeFilter === 'all' 
      ? artefactsProfiles 
      : artefactsProfiles.filter(artefact => artefact.domain === activeFilter);


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
            {filteredArtefact.map((profile, index) => (
               <Artefact
                  key={`${profile.id}-${index}`}
                  id={profile.id}
                  name={profile.name}
                  domain={profile.domain}
                  rarity={profile.rarity}
                  descri={profile.descri}
                  appearance={profile.appearance}
               />
            ))}
                  
        
         </div>
      </div>
   )
}