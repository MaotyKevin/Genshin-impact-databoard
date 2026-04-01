import arlecchino from '../assets/Arlecchino_Icon.webp'
import neuvillette from '../assets/Neuvillette_Icon.webp'
import benett from '../assets/Bennett_Icon.webp'

import arlecchinoUltIcon from '../assets/Talent_Balemoon_Rising.webp'
import arlecchinoSkillIcon from '../assets/Talent_All_Is_Ash.webp'


import neuvilletteUltIcon from '../assets/Talent_O_Tides,_I_Have_Returned.webp'
import neuvilletteSkillIcon from '../assets/Talent_O_Tears,_I_Shall_Repay.webp'


import benettUltIcon from '../assets/Talent_Fantastic_Voyage.webp'
import benettSkillIcon from '../assets/Talent_Passion_Overload.webp'



import zibaiUltIcon from '../assets/Talent_Tri-Sphere_Eminence.webp'
import zibaiSkillIcon from '../assets/Talent_Heaven_and_Earth_Made_Manifest.webp'


const arlecchinoIdle1 = 'https://act-upload.hoyoverse.com/event-ugc-hoyowiki/2024/04/30/35428890/2ab72b0e0036fc4b2868a0ec92afd300_1213585275251057431.gif'
const arlecchinoIdle2 = 'https://act-upload.hoyoverse.com/event-ugc-hoyowiki/2024/04/30/35428890/ca789a4d016cbefd510d0480eb3ca179_7590222360745429014.gif'
const arlecchinoSkillVideo = 'https://act-upload.hoyoverse.com/event-ugc-hoyowiki/2024/04/24/35428890/a8ecfb9276f38b172a6484c2d20e046b_5593868496833745165.gif'
const arlecchinoVideo = 'https://act-upload.hoyoverse.com/event-ugc-hoyowiki/2024/04/22/35428890/4ead730f49de4774c539073517b39ba0_2514743312537118649.gif'
const arlecchinoConstellation = 'https://act-upload.hoyoverse.com/event-ugc-hoyowiki/2024/04/30/35428890/e1185a0732ad771a615ee644c3a49a37_6368278175498171098.png?x-oss-process=image%2Fformat%2Cwebp'

const neuvilletteIdle1 = 'https://upload-static.hoyoverse.com/hoyolab-wiki/2023/09/27/35428890/983f58bbec89a82cb3e46ea579027632_4620199517387909247.gif'
const neuvilletteIdle2 = 'https://upload-static.hoyoverse.com/hoyolab-wiki/2023/09/27/35428890/076a8a5e15ace52b76cf7113c186f6bb_8983616827155270486.gif'
const neuvilletteConstellation = 'https://upload-static.hoyoverse.com/hoyolab-wiki/2023/09/27/35428890/cbec2a96aca08e448a92d45e2563f910_8932482024479326535.png?x-oss-process=image%2Fformat%2Cwebp'
const neuvilletteSkillVideo = 'https://upload-static.hoyoverse.com/hoyolab-wiki/2023/09/26/35428890/2117805081f3f70017975f439920ff4d_8102480149747258683.gif'
const neuvilletteVideo = 'https://upload-static.hoyoverse.com/hoyolab-wiki/2023/09/26/35428890/2a7c3eeda9a016b65ed656fc1f71dc9c_7945139733788482590.gif'

const benettIdle1 = 'https://upload-static.hoyoverse.com/hoyolab-wiki/2022/07/31/1023623/253d4d0f543836ac1d5c4dd28684c5c3_1262777856850748790.gif'
const benettIdle2 = 'https://upload-static.hoyoverse.com/hoyolab-wiki/2022/07/31/1023623/ead150a81a57c6c117778e553960d1d4_5662116647606974233.gif'
const benettConstellation = 'https://upload-static.hoyoverse.com/hoyolab-wiki/2022/11/12/35428890/0a4c5c29b24e64b08a24ca95faec62c7_6669442018915136433.png?x-oss-process=image%2Fformat%2Cwebp'
const benettSkillVideo = 'https://bbs.hoyolab.com/hoyowiki/picture/character/%E7%8F%AD%E5%B0%BC%E7%89%B9/battle_talent_1/battle_talent_1.gif'
const benettVideo = 'https://bbs.hoyolab.com/hoyowiki/picture/character/%E7%8F%AD%E5%B0%BC%E7%89%B9/battle_talent_2/battle_talent_2.gif'

const zibai = 'https://static.wikia.nocookie.net/gensin-impact/images/2/22/Zibai_Icon.png/revision/latest?cb=20260203100351'
const zibaiSkillVideo = 'https://act-webstatic.hoyoverse.com/event-static-hoyowiki-admin/2026/01/29/fed0ad1a8065ec952bc2dcdcf349bb46_5359379672418797654.gif'
const zibaiVideo = 'https://act-webstatic.hoyoverse.com/event-static-hoyowiki-admin/2026/01/29/25ce89c341ccec8db61fbe29792caf9a_8115467737723805531.gif'
const zibaiIdle1 = 'https://act-webstatic.hoyoverse.com/event-static-hoyowiki-admin/2026/01/29/3f9276f066c4a840e8f376e3c4f44c29_7144772731612011.gif'
const zibaiIdle2 = 'https://act-webstatic.hoyoverse.com/event-static-hoyowiki-admin/2026/01/29/16a13bce19e8c979424a736ff21d527b_1838655960764611197.gif'
const zibaiConstellation = 'https://act-upload.hoyoverse.com/event-ugc-hoyowiki/2026/02/24/35428890/a4c11d7ce203e9b0452892de70aef5e0_7398538137425799973.png?x-oss-process=image%2Fformat%2Cwebp'


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
      },
      ult: {
         title: "Balemoon Rising",
         intro: "Arlecchino's great wing of Balemoon Bloodfire beats as she absorbs and clears Blood-Debt Directives around her. She deals AoE Pyro DMG before clearing the CD of All Is Ash and healing herself. The healing is based on her Bond of Life value and ATK.",
     
         italianDesc : "It is commonly believed throughout Teyvat that moon phases other than the full moon are mere metaphors of ill-omen, used only by those who practice alchemy and astrology.She saw this crimson moon in her dreams many times. Were those portents of disaster? Indeed they were, but the destined catastrophes belonged to those who enraged her."
   } },
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
         title: "Passion Overload",
         intro: "Bennett puts all his fire and passion for adventuring into his sword. Results may vary based on how fired up he is...",
         subTitle: "Hold (Short)",
         effects: [
            "Level 1: Strikes twice, dealing Pyro DMG and launching opponents.",
            "Level 2: Unleashes 3 consecutive attacks that deal impressive Pyro DMG, but the last attack triggers an explosion that launches both Bennett and the enemy.",
            "Bennett takes no damage from being launched."
         ]
      },
      ult: {
         title: "Fantastic Voyage",
         intro: "Bennett performs a jumping attack that deals Pyro DMG, creating an Inspiration Field.",
         subTitle: "Inspiration Field",
         effects: [
            "If the health of a character within the AoE is equal to or falls below 70%, their health will continuously regenerate. The amount of HP restored scales off Bennett's Max HP.",
            "if the health of a character within the AoE is higher than 70%, they gain an ATK Bonus that is based on Bennett's Base ATK.",
            "Imbues characters within the AoE with Pyro."
         ],
         italianDesc : "Benny's Adventure Team's adventures are always fraught with unexpected danger. However, Bennett is more inclined to call them journeys full of wonder, excitement, and beauty."
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
      },
      ult: {
         title: "O Tides, I Have Returned",
         intro: "Unleashes waves that will deal AoE Hydro DMG based on Neuvillette's Max HP. After a short interval, 2 waterfalls will descend and deal Hydro DMG in a somewhat smaller AoE, and will generate 6 Sourcewater Droplets within an area in front.",
         italianDesc : "The law is only established after its publication, and above that, the laws of nature have governed all species and eras since ancient times."
      }
   },
   {    id: 4,
      name: 'zibai',
      type : 'geo',
      picture: zibai,
      rarity: '5',
      ultimateVideo: zibaiVideo,
      skillVideo: zibaiSkillVideo,
      ultIcon: zibaiUltIcon,
      skillIcon: zibaiSkillIcon,
      idleAnimation1: zibaiIdle1,
      idleAnimation2: zibaiIdle2,
      constellation: zibaiConstellation,
      skill : {
         title: "Heaven and Earth Made Manifest",
         intro: "Summoning a shadow of her former powers, she switches to the Lunar Phase Shift mode.In this mode, Zibai's Normal Attacks and Charged Attacks will deal Geo DMG that cannot be overridden by other infusions, and she can accrue special Phase Shift Radiance through different methods. Zibai can consume Phase Shift Radiance to unleash the special Elemental Skill Spirit Steed's Stride.",
         subTitle: "Moonsign: Ascendant Gleam",
         effects: [
            "While in the Lunar Phase Shift mode, when Zibai performs Normal Attacks, the fourth attack will deal an additional instance of Geo DMG, which is considered Lunar-Crystallize Reaction DMG."
         ]
      },
      ult: {
         title: "Tri-Sphere Eminence",
         intro: "Zibai operates the Jadelight Canopy, dealing two instances of Geo DMG, with the second damage instance being considered Lunar-Crystallize Reaction DMG.When cast, if Zibai is in the Lunar Phase Shift, the duration of the current Lunar Phase Shift will extend by an additional 1.7s.",
         subTitle: "",
         italianDesc : "Legend has it that long ago, when a rogue shooting star bright enough to illuminate the night drew near, the people of this world caught a glimpse of this treasure's radiant splendor."
      }

   }
]