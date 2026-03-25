import React, { useState } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';

import "../css/cardDetails.css";

export default function CardDetails() {
   const { id } = useParams();
   const location = useLocation();
   const navigate = useNavigate();
   const { name, type, rarity, picture, skill, skillVideo, ultimateVideo, constellation, idleAnimation1, idleAnimation2 } = location.state || {};

   // Single state to manage what's being hovered
   const [activeTab, setActiveTab] = useState(null);

   const handleToggle = (tabId) => {
      setActiveTab(prev => prev === tabId ? null : tabId);
   };

   if (!id) return <div className="details-container"><h1>Card not found</h1></div>;

   // Configuration for buttons to keep JSX clean
   const controls = [
      { id: 'const', label: 'C', data: constellation, title: 'Constellation' },
      { id: 'idle1', label: '1', data: idleAnimation1, title: 'Idle 1' },
      { id: 'idle2', label: '2', data: idleAnimation2, title: 'Idle 2' },
      { id: 'skill', label: 'E', data: skillVideo, title: 'Elemental Skill' },
      { id: 'ult', label: 'Q', data: ultimateVideo, title: 'Ultimate' },
   ];

   return (
      <div className="details-container" onClick={() => setActiveTab(null)}>
         {/* LEFT SIDE: Description Text */}
         <div className="side-panel left-part">
            {activeTab === 'skill' && skill && (
               <div className="description-card fadeIn" onClick={(e) => e.stopPropagation()}>
                  <h2 className="skill-main-title">{skill.title}</h2>
                  <p className="skill-intro">{skill.intro}</p>
                  <ul className="skill-list">
                     {skill.effects.map((eff, i) => <li key={i}>{eff}</li>)}
                  </ul>
               </div>
            )}
         </div>

         {/* CENTER: Main Card */}
         <div className="details-card" onClick={(e) => e.stopPropagation()}>
            <div className="ability-controls">
               {controls.map((ctrl) => (
                  <div 
                     key={ctrl.id}
                     className={`control-trigger ${activeTab === ctrl.id ? 'active' : ''}`}
                     onClick={() => handleToggle(ctrl.id)}
                  >
                     {ctrl.label}
                  </div>
               ))}
            </div>

            <h1 className="details-title">#{id}</h1>
            <img src={picture} alt={name} className="details-image" />
            <p className="details-info"><strong>{name}</strong> | {type}</p>
            
            {/* Action Buttons */}
            <div className="button-group">
               <button className="details-button" onClick={() => navigate(-1)}>Return</button>
               <button className="details-button" onClick={() => navigate('/')}>Home</button>
            </div>

          
            {activeTab && (
               <div className="preview-popup">
                  <img src={controls.find(c => c.id === activeTab)?.data} alt="Preview" />
               </div>
            )}
         </div>

         <div className="side-panel right-part">
            <p>Character Stats or Lore</p>
         </div>
      </div>
   );
}