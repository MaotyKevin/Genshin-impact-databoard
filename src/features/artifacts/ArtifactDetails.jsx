import { useParams, useNavigate } from "react-router-dom";
import { artifacts } from './artifacts';

import "../../css/cardDetails.css";

export default function ArtifactDetails() {
   const { id } = useParams();
   const navigate = useNavigate();
   const artifact = artifacts.find((profile) => String(profile.id) === String(id));

   if (!artifact) {
      return (
         <div className="details-container">
            <h1>Artifact not found</h1>
            <button className="details-button" onClick={() => navigate('/artifacts')}>Back to artifacts</button>
         </div>
      );
   }

   const { name, domain, rarity, descri, appearance } = artifact;

   return (
      <div className="details-container">
         <div className="details-card">
            <h1 className="details-title">#{id}</h1>
            <img src={appearance} alt={`${name} artifact set`} className="details-image" loading="lazy" decoding="async" />
            <p className="details-info"><strong>{name}</strong> | {domain} | {rarity} Stars</p>
            <ul className="details-list">
               <li className="details-description">2 pieces : {descri[2]}</li><br />
               <li className="details-description">4 pieces : {descri[4]}</li>
            </ul>
            <div className="button-group">
               <button className="details-button" onClick={() => navigate(-1)}>Return</button>
               <button className="details-button" onClick={() => navigate('/')}>Home</button>
            </div>
         </div>
      </div>
   );
}