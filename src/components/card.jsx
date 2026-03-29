import { useNavigate } from 'react-router-dom';

function Card({ id, name, type, rarity, picture, ultimateVideo, skillVideo,skillIcon ,ultIcon,idleAnimation1, idleAnimation2 ,constellation , skill }) {
   const navigate = useNavigate();

   const handlePictureClick = () => {
      navigate(`/card/${id}`, { state: { name, type, rarity, picture, ultimateVideo , skillVideo, skillIcon, ultIcon, idleAnimation1, idleAnimation2, constellation, skill  } });
   };

   const typeColors = {
         pyro: '#e2311d',   // Red
         hydro: '#1e90ff',  // Blue
         anemo: '#00d2d3',  // Teal/Green
         electro: '#a55eea', // Purple
         geo: '#ffa502',    // Gold/Yellow
         cryo: '#74b9ff',   // Light Blue
         dendro: '#2ed573'  // Green
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
   textDecoration: 'underline',
   textDecorationColor: typeColors[type?.toLowerCase()] || '#fff',
   textUnderlineOffset: '4px'
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