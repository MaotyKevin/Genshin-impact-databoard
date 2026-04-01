import { useParams, useLocation, useNavigate } from "react-router";

import "../css/cardDetails.css";

export default function ArtefactDetails() {
   const { id } = useParams();
   const location = useLocation();
   const navigate = useNavigate();

const {
      name,
      domain,
      rarity,
      descri,
      appearance
   } = location.state || {};


   if (!id) {
      return (
         <div className="details-container">
            <h1>Card not found</h1>
         </div>
      );
   }

   return (
        <div className="details-container">
         <div
            className="details-card">
           
            <h1 className="details-title">#{id}</h1>
            <img src={appearance} alt={name} className="details-image" />
            <p className="details-info">
               <strong>{name}</strong> | {domain} | {rarity} Stars
            </p>
            
            <ul className="details-list">
               
                 <li className="details-description">2 pieces : {descri[2]}</li><br/>

            <li className="details-description">4 pieces : {descri[4]}</li>

            </ul>


            {/* Buttons */}
            <div className="button-group">
               <button
                  className="details-button"
                  onClick={() => navigate(-1)}
               >
                  Return
               </button>
               <button
                  className="details-button"
                  onClick={() => navigate('/')}
               >
                  Home
               </button>
            </div>

         </div>

        
      </div>
   );
}