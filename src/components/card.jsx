import { useNavigate } from 'react-router-dom';

function Card({ id, name, type, rarity, picture, ultimateVideo, skillVideo,skillIcon ,ultIcon,idleAnimation1, idleAnimation2 ,constellation , skill }) {
   const navigate = useNavigate();

   const handlePictureClick = () => {
      navigate(`/card/${id}`, { state: { name, type, rarity, picture, ultimateVideo , skillVideo, skillIcon, ultIcon, idleAnimation1, idleAnimation2, constellation, skill  } });
   };

   const nameStyle = {  

   fontWeight: '550', 
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
            src={picture} 
            alt="freelancer" 
            height={80} 
            width={80} 
            onClick={handlePictureClick}
            style={{ cursor: 'pointer' }}
         /><br/>

         <span style={nameStyle}>{name}</span>

      </div>
   );
}

export default Card