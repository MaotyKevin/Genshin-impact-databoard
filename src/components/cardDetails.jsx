import { useLocation, useNavigate, useParams } from 'react-router-dom';
import '../css/cardDetails.css';
import { useState } from 'react';


export default function CardDetails() {
   const { id } = useParams();
   const location = useLocation();
   const navigate = useNavigate();

   const { name, type, rarity, picture, ultimateVideo , skillVideo, idleAnimation1, idleAnimation2 , constellation , skill} = location.state || {};

   const [showUltimate, setShowUltimate] = useState(false);
   const [showSkill, setShowSkill] = useState(false);
   const [showIdleAnimation1 , setShowIdleAnimation1] = useState(false);
   const [showIdleAnimation2 , setShowIdleAnimation2] = useState(false);
   const [showConstellation, setShowConstellation] = useState(false);
   

// Helper function to render stars
   const renderStars = (count) => {
      // Ensure count is a number and fallback to 0 if undefined
      const starCount = parseInt(count) || 0;
      const starColor = starCount >= 5 ? '#f1c40f' : '#987654';
      
      // Create an array with 'starCount' elements and map to icons
      return Array.from({ length: starCount }, (_, index) => (
         <span key={index} className="star-icon" style={{ color: starColor }} >★</span>
      ));
   };

   if (!id) {
      return (
         <div className="details-container">
            <div className="details-card">
               <h1 className="details-title">Card not found</h1>
               <button 
                  className="details-button"
                  onClick={() => navigate('/')}
               >
                  Back to Home
               </button>
            </div>
         </div>
      );
   }

   return (
      <div className="details-container">

      <div className="left-part">
      
      <p>LEFT PART</p>

      </div>


         <div className="details-card">
            <div className="ability-controls">

               {/* Constellation Triggers */}
               <div 
                  className="constellation-trigger"
                  onMouseEnter={() => setShowConstellation(true)}
                  onMouseLeave={() => setShowConstellation(false)}
               >
                  C
               </div>

               {/* Idle Animation1 Triggers */}
               <div 
                  className="idle1-trigger"
                  onMouseEnter={() => setShowIdleAnimation1(true)}
                  onMouseLeave={() => setShowIdleAnimation1(false)}
               >1
               </div>
               
               {/* Idle Animation2 Triggers */}
               <div 
                  className="idle2-trigger"
                  onMouseEnter={() => setShowIdleAnimation2(true)}
                  onMouseLeave={() => setShowIdleAnimation2(false)}
               >2
               </div>

{/* The E Button */}
            <div 
               className="skill-trigger"
               onMouseEnter={() => setShowSkill(true)}
               onMouseLeave={() => setShowSkill(false)}
            >
               E
            </div>

{/* The Q Button */}
            <div 
               className="ultimate-trigger"
               onMouseEnter={() => setShowUltimate(true)}
               onMouseLeave={() => setShowUltimate(false)}
            >
               Q
            </div>

            {/* The Idle1 Animation Popup */}
            {showIdleAnimation1 && (
               <div className="ultimate-popup">
                  <img 
                     src={idleAnimation1} 
                     alt="Idle Animation 1" 
                  />
               </div>
            )}

            {/* The Idle2 Animation Popup */}
            {showIdleAnimation2 && (
               <div className="ultimate-popup">
                  <img 
                     src={idleAnimation2} 
                     alt="Idle Animation 2" 
                  />
               </div>
            )}

            {/* The Constellation Popup */}
            {showConstellation && (
               <div className="ultimate-popup">
                  <div>
                     <h3>Constellation</h3>
                     <p>Hovering over the "Cons" button shows this video/GIF.</p>
                     <p>It demonstrates the character's constellation effects.</p>
                  </div>
                  <img 
                     src={constellation} 
                     alt="Constellation" 
                  />
               </div>
            )}



            {/* The Popup Video/GIF */}
            {showUltimate && (
               <div className="ultimate-popup">
                  <div>
                     <h3>Ultimate Ability</h3>
                     <p>Hovering over the "Q" button shows this video/GIF.</p>
                     <p>It demonstrates the character's ultimate ability in action.</p>
                  </div>
                  <img 
                     src={ultimateVideo} 
                     alt="Ultimate Ability" 
                  />
               </div>
            )}

                        {/* The Popup Video/GIF */}
            {showSkill && (
               <div className="ultimate-popup">

                 

                  <div className="skill-card">
                        {/* Main Header */}
                        <h2 className="skill-main-title">{skill.title}</h2>
                        
                        {/* Intro Text */}
                        <p className="skill-intro">{skill.intro}</p>

                        {/* Sub-section (Inspiration Field) */}
                        <div className="skill-sub-section">
                        <h3 className="skill-sub-title">{skill.subTitle}</h3>
                        <ul className="skill-list">
                           {skill.effects.map((effect, index) => (
                              <li key={index} className="skill-list-item">
                              {effect}
                              </li>
                           ))}
                        </ul>
                        </div>
                     </div>
  

                 
                  
                  <img 
                     src={skillVideo} 
                     alt="Skill Ability" 
                  />
               </div>
            )}



            <h1 className="details-title">#{id}</h1>

            <p className="details-info"><strong>Name:</strong> {name}</p>
            <p className="details-info"><strong>Type:</strong> {type}</p>

            <p className="details-info">
               <strong>Rarity:</strong> 
               <span className="stars-container">
                  {renderStars(rarity)}
               </span>
            </p>

            <img 
               src={picture} 
               alt={name} 
               className="details-image"
            /><br/>

               <button 
                  className="details-button"
                  onClick={() => navigate('/caracter')}
               >
                  Return
               </button>

            <button 
               className="details-button"
               onClick={() => navigate('/')}
            >Back to Home
            </button>
         </div>
      </div>

      <div className="right-part">
      
      <p>RIGHT PART</p>

      </div>

      </div>
   );
}