import { useLocation, useNavigate, useParams } from 'react-router-dom';
import '../css/cardDetails.css';
import { useState } from 'react';


export default function CardDetails() {
   const { id } = useParams();
   const location = useLocation();
   const navigate = useNavigate();

   const { name, type, rarity, picture, ultimateVideo , skillVideo} = location.state || {};

   const [showUltimate, setShowUltimate] = useState(false);
   const [showSkill, setShowSkill] = useState(false);
   

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

{/* The Q Button */}
            <div 
               className="ultimate-trigger"
               onMouseEnter={() => setShowUltimate(true)}
               onMouseLeave={() => setShowUltimate(false)}
            >
               Q
            </div>

{/* The E Button */}
            <div 
               className="skill-trigger"
               onMouseEnter={() => setShowSkill(true)}
               onMouseLeave={() => setShowSkill(false)}
            >
               E
            </div>

            {/* The Popup Video/GIF */}
            {showUltimate && (
               <div className="ultimate-popup">
                  <img 
                     src={ultimateVideo} 
                     alt="Ultimate Ability" 
                  />
               </div>
            )}

                        {/* The Popup Video/GIF */}
            {showSkill && (
               <div className="ultimate-popup">
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