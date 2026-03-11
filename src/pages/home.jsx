import React from 'react';

function Home() {
  const backgroundStyle = {
    // Replace the URL below with your actual image link
    backgroundImage: `url('https://wallpapercave.com/w/wp12581258.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh', // Full height of the browser window
    width: '100vw',  // Full width
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white', // Text color for contrast
    fontSize: '3rem',
    fontWeight: 'bold'
  };

  return (
    <div style={backgroundStyle}>
      <h1>Home</h1>
    </div>
  );
}

export default Home;