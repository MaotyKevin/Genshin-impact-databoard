const gladiator = 'https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/reliquary/Gladiator\'s%2520Finale/flower_of_life_icon.png'

const paleFlame = 'https://wiki.hoyolab.com/_ipx/f_webp/https://bbs.hoyolab.com/hoyowiki/picture/reliquary/Pale%2520Flame/flower_of_life_icon.png'



export const artefactsProfiles = [
   {
      id: 1,
      name: 'Gladiator\'s Finale',
      domain: 'Mondstat',
      rarity: 5,
      descri: {
         2: "Increases Normal Attack DMG by 15%.",
         4: "When a character equipped with this set uses a Skill, they gain a 15% increase in their Normal Attack DMG for 10s."
      },
      appearance: gladiator
   },
    {
        id: 2,
        name: 'Pale Flame',
        domain: 'Linue',
        rarity: 5,
        descri: {
           2: "Increases Physical DMG by 25%.",
           4: "When an Elemental Skill hits an opponent, the character equipping this set increases their ATK by 9% for 7s. This effect can stack up to 2 times and can be triggered once every 0.3s. Once 2 stacks are reached, the set effect will be consumed to grant the character a 25% increase in Physical DMG for 15s."
        },
        appearance: paleFlame
     }
]
