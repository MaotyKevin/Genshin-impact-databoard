import { Link } from 'react-router-dom'

export default function Header() {
   const navStyle = {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 2rem',
      backgroundColor: '#2c3e50',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      position: 'sticky',
      top: 0,
      zIndex: 1000
   };

   const brandStyle = {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: '#ecf0f1',
      textDecoration: 'none',
      letterSpacing: '1px'
   };

   const navLinksStyle = {
      display: 'flex',
      gap: '2rem',
      listStyle: 'none',
      margin: 0,
      padding: 0
   };

   const linkStyle = {
      color: '#ecf0f1',
      textDecoration: 'none',
      fontSize: '1.1rem',
      fontWeight: '500',
      padding: '0.5rem 1rem',
      borderRadius: '4px',
      transition: 'all 0.3s ease'
   };

   return (
      <nav style={navStyle}>
         <Link to="/" style={brandStyle}>
            Maoty impact
         </Link>
         <ul style={navLinksStyle}>
            <li>
               <Link 
                  to="/" 
                  style={linkStyle}
                  onMouseEnter={(e) => {
                     e.target.style.backgroundColor = '#34495e';
                     e.target.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                     e.target.style.backgroundColor = 'transparent';
                     e.target.style.transform = 'translateY(0)';
                  }}
               >
                  Home
               </Link>
            </li>
            <li>
               <Link 
                  to="/caracter" 
                  style={linkStyle}
                  onMouseEnter={(e) => {
                     e.target.style.backgroundColor = '#34495e';
                     e.target.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                     e.target.style.backgroundColor = 'transparent';
                     e.target.style.transform = 'translateY(0)';
                  }}
               >
                  Characters
               </Link>
            </li>
            
         </ul>
      </nav>
   )
}
