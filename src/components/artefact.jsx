//import { useNavigate } from 'react-router-dom';
import { useNavigate } from "react-router";

function Artefact({ id, name, domain, rarity, descri, appearance}) {
   const navigate = useNavigate();

   const handlePictureClick = () => {
      navigate(`/artefact/${id}`, { state: { name, domain, rarity, descri, appearance } });
   };


   const nameStyle = {  

   fontWeight: '520', 
   color: '#fff',
   padding: '12px',
   textTransform: 'uppercase',
   fontSize: '0.85rem',
   marginTop: '5px',
   textAlign: 'center',
   width: 'fit-content',
   }

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

         <span style={nameStyle}>{name}</span>

      </div>
   );
}

export default Artefact