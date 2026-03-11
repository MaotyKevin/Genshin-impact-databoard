import Card from './card'
import { caractersProfiles } from '../data/dummy'

import'../css/cardList.css'

export default function Caracter() {
   return (
      <div className="caracter-container">
         {/* <h1 className="caracter-title">Genshin Characters</h1> */}

         <div className="caracter-grid">
            {caractersProfiles.map((profile, index) => (
               <Card
                  key={`${profile.id}-${index}`}
                  id={profile.id}
                  name={profile.name}
                  picture={profile.picture}
                  type={profile.type}
                  rarity={profile.rarity}
                  ultimateVideo={profile.ultimateVideo}
                  skillVideo={profile.skillVideo}
               />
            ))}
         </div>
      </div>
   )
}