//import { useNavigate } from 'react-router-dom';
import { useNavigate } from "react-router";
import "../css/artefact.css"

function Artefact({ id, name, domain, rarity, descri, appearance}) {
   const navigate = useNavigate();

   const handlePictureClick = () => {
      navigate(`/artefact/${id}`, { state: { name, domain, rarity, descri, appearance } });
   };

   return (
      <div style={{ display: 'flex', flexDirection: 'column', padding: 15 }}>
         
         <img 
            src={appearance} 
            alt="artefact" 
            height={80} 
            width={80} 
            onClick={handlePictureClick}
            style={{ cursor: 'pointer' }}
         /><br/>

         <span className="name-style">{name}</span>

      </div>
   );
}

export default Artefact