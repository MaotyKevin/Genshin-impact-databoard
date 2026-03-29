import arlecchino from '../assets/Arlecchino_Icon.webp'
import neuvillette from '../assets/Neuvillette_Icon.webp'
import benett from '../assets/Bennett_Icon.webp'

import arlecchinoVideo from '../assets/arlecchino-genshin-impact.gif'
import arlecchinoSkillVideo from '../assets/arlecchino-skill.gif'
import arlecchinoUltIcon from '../assets/Talent_Balemoon_Rising.webp'
import arlecchinoIdle1 from '../assets/arlecchino-idle1.gif'
import arlecchinoIdle2 from '../assets/arlecchino-idle2.gif'
import arlecchinoConstellation from '../assets/arlecchino-cons.webp'
import arlecchinoSkillIcon from '../assets/Talent_All_Is_Ash.webp'

import neuvilletteVideo from '../assets/neuvillette-burst.gif'
import neuvilletteSkillVideo from '../assets/neuvillette-skill.gif'
import neuvilletteUltIcon from '../assets/Talent_O_Tides,_I_Have_Returned.webp'
import neuvilletteSkillIcon from '../assets/Talent_O_Tears,_I_Shall_Repay.webp'
import neuvilletteIdle1 from '../assets/neuvillette-idle1.gif'
import neuvilletteIdle2 from '../assets/neuvillette-idle2.gif'
import neuvilletteConstellation from '../assets/neuvillette-cons.webp'

import benettVideo from '../assets/benett-burst.gif'
import benettSkillVideo from '../assets/benett-skill.gif'
import benettUltIcon from '../assets/Talent_Fantastic_Voyage.webp'
import benettSkillIcon from '../assets/Talent_Passion_Overload.webp'
import benettIdle1 from '../assets/benett-idle1.gif'
import benettIdle2 from '../assets/benett-idle2.gif'
import benettConstellation from '../assets/benett-cons.webp'


export const caractersProfiles = [
   {
    id: 1,
      name: 'arlecchino',
      type: 'pyro',
      picture: arlecchino,
      rarity: '5',
      ultimateVideo: arlecchinoVideo,
      skillVideo: arlecchinoSkillVideo,
      ultIcon : arlecchinoUltIcon,
      skillIcon: arlecchinoSkillIcon,
      idleAnimation1: arlecchinoIdle1,
      idleAnimation2: arlecchinoIdle2,
      constellation: arlecchinoConstellation,
      skill : {
         title: "All Is Ash",
         intro: "Summons forth Balemoon Bloodfire, dealing Pyro DMG to multiple nearby opponents and performing a dash-cleave against one of them, dealing AoE Pyro DMG.Opponents hit by the aforementioned attack will have a Blood-Debt Directive applied to them.",
         subTitle: "Blood-Debt Directive",
         effects: [
      "Lasts 30s. Every 5s, it will deal 1 instance of Pyro DMG to the opponent. Max 2 instances. This DMG will be considered Elemental Skill DMG",
      "When Arlecchino uses a Charged Attack or her Elemental Burst, Balemoon Rising, she will absorb and clear nearby Blood-Debt Directives. Each Directive absorbed grants her a Bond of Life worth 65% of her Max HP","The maximum value of the Bond of Life she can be granted through Blood-Debt Directives within 35s after using her Elemental Skill is 145% of her Max HP. Using the Elemental Skill again during this duration will restart the count on duration and the limit on the value of Bond of Life she may gain from Blood-Debt Directives."
    ]
      }
   },
   {
      id: 2,
      name: 'benett',
      type: 'pyro',
      picture: benett,
      rarity: '4',
      ultimateVideo: benettVideo,
      skillVideo: benettSkillVideo,
      skillIcon: benettSkillIcon,
      ultIcon: benettUltIcon,
      idleAnimation1: benettIdle1,
      idleAnimation2: benettIdle2,
      constellation: benettConstellation,
      skill : {
         title: "Fantastic Voyage",
         intro: "Bennett performs a jumping attack that deals Pyro DMG, creating an Inspiration Field.",
         subTitle: "Inspiration Field",
         effects: [
            "If the health of a character within the AoE is equal to or falls below 70%, their health will continuously regenerate. The amount of HP restored scales off Bennett's Max HP.",
            "If the health of a character within the AoE is higher than 70%, they gain an ATK Bonus that is based on Bennett's Base ATK.",
            "Imbues characters within the AoE with Pyro."
         ]
      }
   },
   {   
    id: 3,
      name: 'neuvillette',
      type: 'hydro',
      picture: neuvillette,
      rarity: '5',
      ultimateVideo: neuvilletteVideo,
      skillVideo: neuvilletteSkillVideo,
      skillIcon: neuvilletteSkillIcon,
      ultIcon: neuvilletteUltIcon,
      idleAnimation1: neuvilletteIdle1,
      idleAnimation2: neuvilletteIdle2,
      constellation: neuvilletteConstellation,
      skill : {
         title: "Waterkick",
         intro: "Neuvillette performs a swift kick that deals Hydro DMG. If the attack hits an opponent, Neuvillette will gain the following effects:",
         subTitle: "Hydro Infusion",
         effects: [
            "Increases Neuvillette's resistance to interruption and grants him the ability to walk on water for 10s.",
            "When Neuvillette is under the effect of Hydro Infusion, his Normal and Charged Attacks will deal Hydro DMG instead of Physical DMG. Additionally, his Charged Attack will have its DMG increased by 15% and will not consume Stamina."
         ]
      }
   },
]