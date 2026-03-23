import arlecchino from '../assets/Arlecchino_Icon.webp'
import neuvillette from '../assets/Neuvillette_Icon.webp'
import benett from '../assets/Bennett_Icon.webp'

import arlecchinoVideo from '../assets/arlecchino-genshin-impact.gif'
import arlecchinoSkillVideo from '../assets/arlecchino-skill.gif'

import neuvilletteVideo from '../assets/neuvillette-burst.gif'

export const caractersProfiles = [
   {
    id: 1,
      name: 'arlecchino',
      type: 'pyro damage dealer',
      picture: arlecchino,
      rarity: '5',
      ultimateVideo: arlecchinoVideo,
      skillVideo: arlecchinoSkillVideo
   },
   {
      id: 2,
      name: 'benett',
      type: 'support',
      picture: benett,
      rarity: '4',
      ultimateVideo: 'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHJueHBsZzR0bXN6ZzR0ZzR0ZzR0ZzR0ZzR0ZzR0ZzR0JmImVwaWNfcmVhbHRpbWUiOnRydWV9/3o7TKMGpxxX5F3Pwqc/giphy.gif',
      skillVideo: 'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHJueHBsZzR0bXN6ZzR0ZzR0ZzR0ZzR0ZzR0ZzR0ZzR0JmImVwaWNfcmVhbHRpbWUiOnRydWV9/3o7TKMGpxxX5F3Pwqc/giphy.gif'
   },
   {   
    id: 3,
      name: 'neuvillette',
      type: 'hydro damage dealer',
      picture: neuvillette,
      rarity: '5',
      ultimateVideo: neuvilletteVideo,
      skillVideo: neuvilletteVideo
   },
]