import arlecchino from '../../assets/Arlecchino_Icon.webp';
import neuvillette from '../../assets/Neuvillette_Icon.webp';
import benett from '../../assets/Bennett_Icon.webp';
import zibaiIcon from '../../assets/Zibai_Icon.webp';

import arlecchinoUltIcon from '../../assets/Talent_Balemoon_Rising.webp';
import arlecchinoSkillIcon from '../../assets/Talent_All_Is_Ash.webp';

import neuvilletteUltIcon from '../../assets/Talent_O_Tides,_I_Have_Returned.webp';
import neuvilletteSkillIcon from '../../assets/Talent_O_Tears,_I_Shall_Repay.webp';

import benettUltIcon from '../../assets/Talent_Fantastic_Voyage.webp';
import benettSkillIcon from '../../assets/Talent_Passion_Overload.webp';

import zibaiUltIcon from '../../assets/Talent_Tri-Sphere_Eminence.webp';
import zibaiSkillIcon from '../../assets/Talent_Heaven_and_Earth_Made_Manifest.webp';

const arlecchinoIdle1 = 'https://act-upload.hoyoverse.com/event-ugc-hoyowiki/2024/04/30/35428890/2ab72b0e0036fc4b2868a0ec92afd300_1213585275251057431.gif';
const arlecchinoIdle2 = 'https://act-upload.hoyoverse.com/event-ugc-hoyowiki/2024/04/30/35428890/ca789a4d016cbefd510d0480eb3ca179_7590222360745429014.gif';
const arlecchinoSkillVideo = 'https://act-upload.hoyoverse.com/event-ugc-hoyowiki/2024/04/24/35428890/a8ecfb9276f38b172a6484c2d20e046b_5593868496833745165.gif';
const arlecchinoVideo = 'https://act-upload.hoyoverse.com/event-ugc-hoyowiki/2024/04/22/35428890/4ead730f49de4774c539073517b39ba0_2514743312537118649.gif';
const arlecchinoConstellation = 'https://act-upload.hoyoverse.com/event-ugc-hoyowiki/2024/04/30/35428890/e1185a0732ad771a615ee644c3a49a37_6368278175498171098.png?x-oss-process=image%2Fformat%2Cwebp';

const neuvilletteIdle1 = 'https://upload-static.hoyoverse.com/hoyolab-wiki/2023/09/27/35428890/983f58bbec89a82cb3e46ea579027632_4620199517387909247.gif';
const neuvilletteIdle2 = 'https://upload-static.hoyoverse.com/hoyolab-wiki/2023/09/27/35428890/076a8a5e15ace52b76cf7113c186f6bb_8983616827155270486.gif';
const neuvilletteConstellation = 'https://upload-static.hoyoverse.com/hoyolab-wiki/2023/09/27/35428890/cbec2a96aca08e448a92d45e2563f910_8932482024479326535.png?x-oss-process=image%2Fformat%2Cwebp';
const neuvilletteSkillVideo = 'https://upload-static.hoyoverse.com/hoyolab-wiki/2023/09/26/35428890/2117805081f3f70017975f439920ff4d_8102480149747258683.gif';
const neuvilletteVideo = 'https://upload-static.hoyoverse.com/hoyolab-wiki/2023/09/26/35428890/2a7c3eeda9a016b65ed656fc1f71dc9c_7945139733788482590.gif';

const benettIdle1 = 'https://upload-static.hoyoverse.com/hoyolab-wiki/2022/07/31/1023623/253d4d0f543836ac1d5c4dd28684c5c3_1262777856850748790.gif';
const benettIdle2 = 'https://upload-static.hoyoverse.com/hoyolab-wiki/2022/07/31/1023623/ead150a81a57c6c117778e553960d1d4_5662116647606974233.gif';
const benettConstellation = 'https://upload-static.hoyoverse.com/hoyolab-wiki/2022/11/12/35428890/0a4c5c29b24e64b08a24ca95faec62c7_6669442018915136433.png?x-oss-process=image%2Fformat%2Cwebp';
const benettSkillVideo = 'https://bbs.hoyolab.com/hoyowiki/picture/character/%E7%8F%AD%E5%B0%BC%E7%89%B9/battle_talent_1/battle_talent_1.gif';
const benettVideo = 'https://bbs.hoyolab.com/hoyowiki/picture/character/%E7%8F%AD%E5%B0%BC%E7%89%B9/battle_talent_2/battle_talent_2.gif';

const zibai = 'https://static.wikia.nocookie.net/gensin-impact/images/2/22/Zibai_Icon.png/revision/latest?cb=20260203100351';
const zibaiSkillVideo = 'https://act-webstatic.hoyoverse.com/event-static-hoyowiki-admin/2026/01/29/fed0ad1a8065ec952bc2dcdcf349bb46_5359379672418797654.gif';
const zibaiVideo = 'https://act-webstatic.hoyoverse.com/event-static-hoyowiki-admin/2026/01/29/25ce89c341ccec8db61fbe29792caf9a_8115467737723805531.gif';
const zibaiIdle1 = 'https://act-webstatic.hoyoverse.com/event-static-hoyowiki-admin/2026/01/29/3f9276f066c4a840e8f376e3c4f44c29_7144772731612011.gif';
const zibaiIdle2 = 'https://act-webstatic.hoyoverse.com/event-static-hoyowiki-admin/2026/01/29/16a13bce19e8c979424a736ff21d527b_1838655960764611197.gif';
const zibaiConstellation = 'https://act-upload.hoyoverse.com/event-ugc-hoyowiki/2026/02/24/35428890/a4c11d7ce203e9b0452892de70aef5e0_7398538137425799973.png?x-oss-process=image%2Fformat%2Cwebp';

export const characters = [
  {
    id: 1,
    name: 'arlecchino',
    type: 'pyro',
    weapon: 'Polearm',
    role: 'On-Field DPS',
    roles: ['On-Field DPS'],
    sustainType: null,
    scalingStat: 'ATK',
    archetypes: ['Bond of Life'],
    picture: arlecchino,
    rarity: '5',
    ultimateVideo: arlecchinoVideo,
    skillVideo: arlecchinoSkillVideo,
    ultIcon: arlecchinoUltIcon,
    skillIcon: arlecchinoSkillIcon,
    idleAnimation1: arlecchinoIdle1,
    idleAnimation2: arlecchinoIdle2,
    constellation: arlecchinoConstellation,
    skill: {
      title: 'All Is Ash',
      intro: 'Delivers AoE Pyro damage, dashes to strike a single target, and marks hit foes with a lingering Pyro mark.',
      subTitle: 'Mark & Bond of Life Loop',
      effects: [
        'Applies periodic Pyro ticks over duration, counting toward Elemental Skill damage.',
        'Absorbing marks via Charged Attack or Burst converts them into Bond of Life scaling off Max HP.',
        'Resets skill mark cap window when re-cast during an active mark cycle.'
      ]
    },
    ult: {
      title: 'Balemoon Rising',
      intro: 'Clears nearby marks for AoE Pyro damage, resets skill cooldown, and restores personal HP based on Bond of Life and ATK.',
      subTitle: 'Self-Recovery & Reset',
      effects: [
        'Useful as an emergency self-heal and cooldown refresh when rotating.'
      ]
    }
  },
  {
    id: 2,
    name: 'benett',
    type: 'pyro',
    weapon: 'Sword',
    role: 'Support',
    roles: ['Support', 'Sustain'],
    sustainType: 'Heal',
    scalingStat: 'ATK',
    archetypes: ['ATK Buffer', 'Healer'],
    picture: benett,
    rarity: '4',
    ultimateVideo: benettVideo,
    skillVideo: benettSkillVideo,
    skillIcon: benettSkillIcon,
    ultIcon: benettUltIcon,
    idleAnimation1: benettIdle1,
    idleAnimation2: benettIdle2,
    constellation: benettConstellation,
    skill: {
      title: 'Passion Overload',
      intro: 'Strikes with a Pyro blade slash; charging adds additional hits and knockback.',
      subTitle: 'Press vs. Charge',
      effects: [
        'Quick tap generates Pyro particles efficiently in rotations.',
        'Higher charge levels deal stronger Pyro hits and push back nearby targets.'
      ]
    },
    ult: {
      title: 'Fantastic Voyage',
      intro: 'Leaps to deal Pyro damage and leaves an Inspiration Field that heals low-HP allies or grants ATK to allies above 70% HP.',
      subTitle: 'Inspiration Field',
      effects: [
        'Heals allies at or below 70% HP based on Max HP.',
        'Grants an ATK bonus above 70% HP based on Base ATK.',
        'Applies Pyro aura to active characters inside the field.'
      ]
    }
  },
  {
    id: 3,
    name: 'neuvillette',
    type: 'hydro',
    weapon: 'Catalyst',
    role: 'On-Field DPS',
    roles: ['On-Field DPS'],
    sustainType: null,
    scalingStat: 'HP',
    archetypes: ['HP Scaling', 'Hydro Reactions'],
    picture: neuvillette,
    rarity: '5',
    ultimateVideo: neuvilletteVideo,
    skillVideo: neuvilletteSkillVideo,
    skillIcon: neuvilletteSkillIcon,
    ultIcon: neuvilletteUltIcon,
    idleAnimation1: neuvilletteIdle1,
    idleAnimation2: neuvilletteIdle2,
    constellation: neuvilletteConstellation,
    skill: {
      title: 'O Tears, I Shall Repay',
      intro: 'Unleashes a surging Hydro wave that scales with Max HP and spawns Sourcewater Droplets.',
      subTitle: 'Droplet Generation',
      effects: [
        'Creates droplets that speed up and empower Charged Attack beams.',
        'Pairs naturally with varied Hydro reactions across teammates.'
      ]
    },
    ult: {
      title: 'O Tides, I Have Returned',
      intro: 'Calls down cascading Hydro waves and waterfalls scaling with Max HP while generating Sourcewater Droplets.',
      subTitle: 'AoE Hydro Barrage',
      effects: [
        'Refreshes droplets for extended on-field Charged Attack uptime.'
      ]
    }
  },
  {
    id: 4,
    name: 'zibai',
    type: 'geo',
    weapon: 'Sword',
    role: 'On-Field DPS',
    roles: ['On-Field DPS'],
    sustainType: null,
    scalingStat: 'DEF',
    archetypes: ['Lunar-Crystallize', 'Moonsign'],
    picture: zibaiIcon,
    rarity: '5',
    ultimateVideo: zibaiVideo,
    skillVideo: zibaiSkillVideo,
    ultIcon: zibaiUltIcon,
    skillIcon: zibaiSkillIcon,
    idleAnimation1: zibaiIdle1,
    idleAnimation2: zibaiIdle2,
    constellation: zibaiConstellation,
    skill: {
      title: 'Heaven and Earth Made Manifest',
      intro: 'Enters Lunar Phase Shift mode with non-overridable Geo attacks and builds Phase Shift Radiance.',
      subTitle: 'Lunar Phase Shift',
      effects: [
        'Normal and Charged Attacks convert to Geo DMG during Lunar Phase Shift.',
        'Builds radiance stacks to unleash a special follow-up skill strike.'
      ]
    },
    ult: {
      title: 'Tri-Sphere Eminence',
      intro: 'Deploys a multi-hit Geo burst and extends an active Lunar Phase Shift window.',
      subTitle: 'Burst & Phase Extension',
      effects: [
        'Deals multi-instance Geo DMG including Lunar-Crystallize damage.',
        'Extends Lunar Phase Shift duration when cast while active.'
      ]
    }
  }
];