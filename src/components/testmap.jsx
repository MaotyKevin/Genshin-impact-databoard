import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { CRS } from 'leaflet';
import 'leaflet/dist/leaflet.css'; // Don't forget the CSS!

const TeyvatMap = () => {
  // Replace these with the specific coordinates for your point
  const specificPoint = [-375, 125]; 

  return (
    <div style={{ height: "100vh", width: "100vw" }}> 
      <MapContainer 
        center={specificPoint} 
        zoom={2} 
        scrollWheelZoom={true}
        crs={CRS.Simple} // Tells Leaflet this is a flat image map
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="/Teyvat/{z}/{x}/{y}.png"
          noWrap={true}
          bounds={[[0, 0], [1000, 1000]]} // Adjust based on your map size
        />
        
        <Marker position={specificPoint}>
          <Popup>
            Target Location
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default TeyvatMap;