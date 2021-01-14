const expeditionBaseSetCards = [
  {
    id: 'ecard1-1',
    name: 'Alakazam',
    nationalPokedexNumber: 65,
    imageUrl: 'https://images.pokemontcg.io/ecard1/1.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/1_hires.png',
    types: [
      'Psychic'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 2',
    evolvesFrom: 'Kadabra',
    ability: {
      name: 'Psymimic',
      text: 'Once during your turn, instead of Alakazam\'s normal attack, you may choose 1 of your opponent\'s Pokémon\'s attack. Alakazam copies that attack including its Energy costs and anything else required in order to use that attack, such as discarding Energy cards. (No matter what type that Pokémon is, Alakazam\'s type is still Psychic.) This power can\'t be used if Alakazam is affected by a Special Condition.',
      type: 'Poké-Power'
    },
    hp: '100',
    retreatCost: [
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 2,
    number: '1',
    artist: 'Hajime Kusajima',
    rarity: 'Holo Rare',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    attacks: [
      {
        cost: [
          'Psychic',
          'Colorless',
          'Colorless'
        ],
        name: 'Syncroblast',
        text: 'If Alakazam and the Defending Pokémon don\'t have the same number of Energy cards on them, this attack\'s base damage is 20 instead of 80.',
        damage: '',
        convertedEnergyCost: 3
      }
    ],
    weaknesses: [
      {
        type: 'Psychic',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard1-2',
    name: 'Ampharos',
    nationalPokedexNumber: 181,
    imageUrl: 'https://images.pokemontcg.io/ecard1/2.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/2_hires.png',
    types: [
      'Lightning'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 2',
    evolvesFrom: 'Flaaffy',
    ability: {
      name: 'Energy Connect',
      text: 'Once during your turn (before you attack), you make take one basic Energy cards attached to one of your Benched Pokémon and attach it to your Active Pokémon. This power can\'t be used if Ampharos is affected by a Special Condition.',
      type: 'Poké-Power'
    },
    hp: '100',
    retreatCost: [
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 2,
    number: '2',
    artist: 'Atsuko Nishida',
    rarity: 'Holo Rare',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    attacks: [
      {
        cost: [
          'Lightning',
          'Lightning',
          'Colorless',
          'Colorless'
        ],
        name: 'Lightning Strike',
        text: 'You may discard all Lightning Energy cards attached to Ampharos. If you do, this attack\'s base damage is 80 instead of 40.',
        damage: '',
        convertedEnergyCost: 4
      }
    ],
    weaknesses: [
      {
        type: 'Fighting',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard1-3',
    name: 'Arbok',
    nationalPokedexNumber: 24,
    imageUrl: 'https://images.pokemontcg.io/ecard1/3.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/3_hires.png',
    types: [
      'Grass'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Ekans',
    hp: '70',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '3',
    artist: 'Kyoko Umemoto',
    rarity: 'Holo Rare',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    attacks: [
      {
        cost: [
          'Grass'
        ],
        name: 'Poison Spray',
        text: 'The Defending Pokémon is now Poisoned.',
        damage: '10',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Colorless',
          'Colorless'
        ],
        name: 'Poison Reaction',
        text: 'If the Defending Pokémon is Poisoned, this attack does 20 damage plus 20 more damage.',
        damage: '20+',
        convertedEnergyCost: 2
      }
    ],
    weaknesses: [
      {
        type: 'Psychic',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard1-4',
    name: 'Blastoise',
    nationalPokedexNumber: 9,
    imageUrl: 'https://images.pokemontcg.io/ecard1/4.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/4_hires.png',
    types: [
      'Water'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 2',
    evolvesFrom: 'Wartortle',
    ability: {
      name: 'Jet Stream',
      text: 'Once during your turn (before you attack), if Blastoise is your Active Pokémon, you may flip a coin. If heads, discard an Energy card attached to Blastoise, if any. Then, if there are any Energy cards attached to the Defending Pokémon, choose one of them and discard it. This power can\'t be used if Blastoise is affected by a Special Condition.',
      type: 'Poké-Power'
    },
    hp: '100',
    retreatCost: [
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 2,
    number: '4',
    artist: 'Kimiya Masago',
    rarity: 'Holo Rare',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    attacks: [
      {
        cost: [
          'Water',
          'Water',
          'Colorless'
        ],
        name: 'Energy Cannon',
        text: 'Does 40 damage plus 10 more damage for each Energy attached to Blastoise but not used to pay for this attack\'s Energy cost. You can\'t add more than 20 damage in this way.',
        damage: '40+',
        convertedEnergyCost: 3
      }
    ],
    weaknesses: [
      {
        type: 'Lightning',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard1-5',
    name: 'Butterfree',
    nationalPokedexNumber: 12,
    imageUrl: 'https://images.pokemontcg.io/ecard1/5.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/5_hires.png',
    types: [
      'Grass'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 2',
    evolvesFrom: 'Metapod',
    ability: {
      name: 'Miraculous Powder',
      text: 'Once during your turn (before you attack), you may remove all Special Conditions from your Active Pokémon. This power can\'t be used if Butterfree is affected by a Special Condition.',
      type: 'Poké-Power'
    },
    hp: '80',
    number: '5',
    artist: 'Sumiyoshi Kizuki',
    rarity: 'Holo Rare',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    attacks: [
      {
        cost: [
          'Grass',
          'Colorless',
          'Colorless'
        ],
        name: 'Spiral Drain',
        text: 'Flip a coin. If heads, remove 2 damage counters from Butterfree.',
        damage: '40',
        convertedEnergyCost: 3
      }
    ],
    weaknesses: [
      {
        type: 'Fire',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard1-6',
    name: 'Charizard',
    nationalPokedexNumber: 6,
    imageUrl: 'https://images.pokemontcg.io/ecard1/6.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/6_hires.png',
    types: [
      'Fire'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 2',
    evolvesFrom: 'Charmeleon',
    ability: {
      name: 'Burning Energy',
      text: 'Once during your turn (before you attack), you may turn all basic Energy attached to all of your Pokémon into Fire Energy for the rest of the turn. This power can\'t be used if Charizard is affected by a Special Condition.',
      type: 'Poké-Power'
    },
    hp: '120',
    retreatCost: [
      'Colorless',
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 3,
    number: '6',
    artist: 'Hiromichi Sugiyama',
    rarity: 'Holo Rare',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    attacks: [
      {
        cost: [
          'Fire',
          'Fire',
          'Fire',
          'Fire'
        ],
        name: 'Scorching Whirlwind',
        text: 'Flip 2 coins. If 1 of them is tails, discards 3 Energy cards attached to Charizard. If both of them are tails, discard all Energy cards attached to Charizard.',
        damage: '120',
        convertedEnergyCost: 4
      }
    ],
    weaknesses: [
      {
        type: 'Water',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard1-7',
    name: 'Clefable',
    nationalPokedexNumber: 36,
    imageUrl: 'https://images.pokemontcg.io/ecard1/7.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/7_hires.png',
    types: [
      'Colorless'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Clefairy',
    ability: {
      name: 'Moonlight',
      text: 'Once during your turn (before you attack), you may put a card from your hand back on your deck. If you do so, search your deck for a basic Energy card, show it to your opponent, and put it into your hand. Shuffle your deck afterward. This power can\'t be used if Clefable is affected by a Special Condition.',
      type: 'Poké-Power'
    },
    hp: '70',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '7',
    artist: 'Kagemaru Himeno',
    rarity: 'Holo Rare',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    attacks: [
      {
        cost: [
          'Colorless',
          'Colorless'
        ],
        name: 'Doubleslap',
        text: 'Flip 2 coins. This attack does 20 damage times the number of heads.',
        damage: '20×',
        convertedEnergyCost: 2
      }
    ],
    weaknesses: [
      {
        type: 'Fighting',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard1-8',
    name: 'Cloyster',
    nationalPokedexNumber: 91,
    imageUrl: 'https://images.pokemontcg.io/ecard1/8.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/8_hires.png',
    types: [
      'Water'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Shellder',
    hp: '80',
    retreatCost: [
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 2,
    number: '8',
    artist: 'Kyoko Umemoto',
    rarity: 'Holo Rare',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    attacks: [
      {
        cost: [
          'Colorless',
          'Colorless'
        ],
        name: 'Lick',
        text: 'Flip a coin. If heads, the Defending Pokémon is now Paralyzed.',
        damage: '10',
        convertedEnergyCost: 2
      },
      {
        cost: [
          'Water',
          'Colorless',
          'Colorless'
        ],
        name: 'Auto Fire',
        text: 'Flip 4 coins. This attack does 20 damage times the number of heads.',
        damage: '20×',
        convertedEnergyCost: 3
      }
    ],
    weaknesses: [
      {
        type: 'Metal',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard1-9',
    name: 'Dragonite',
    nationalPokedexNumber: 149,
    imageUrl: 'https://images.pokemontcg.io/ecard1/9.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/9_hires.png',
    types: [
      'Colorless'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 2',
    evolvesFrom: 'Dragonair',
    ability: {
      name: 'Tailwind',
      text: 'Once during your turn (before you attack), if Dragonite is on your Bench, you may reduce your Active Pokémon\'s Retreat cost to 0.',
      type: 'Poké-Power'
    },
    hp: '100',
    retreatCost: [
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 2,
    number: '9',
    artist: 'Kagemaru Himeno',
    rarity: 'Holo Rare',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    attacks: [
      {
        cost: [
          'Water',
          'Lightning',
          'Fighting'
        ],
        name: 'Dragon Tail',
        text: 'Flip 2 coins. This attack does 40 damage times the number of heads.',
        damage: '40×',
        convertedEnergyCost: 3
      }
    ]
  },
  {
    id: 'ecard1-10',
    name: 'Dugtrio',
    nationalPokedexNumber: 51,
    imageUrl: 'https://images.pokemontcg.io/ecard1/10.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/10_hires.png',
    types: [
      'Fighting'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Diglett',
    hp: '70',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '10',
    artist: 'Masako Yamashita',
    rarity: 'Holo Rare',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    attacks: [
      {
        cost: [
          'Fighting'
        ],
        name: 'Mud Slap',
        text: '',
        damage: '20',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Fighting',
          'Colorless',
          'Colorless'
        ],
        name: 'Magnitude',
        text: 'Does 10 damage to each Benched Pokémon (yours and your opponent\'s). (Don\'t apply Weakness and resistance for Benched Pokémon.)',
        damage: '40',
        convertedEnergyCost: 3
      }
    ],
    resistances: [
      {
        type: 'Lightning',
        value: '-30'
      }
    ],
    weaknesses: [
      {
        type: 'Grass',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard1-11',
    name: 'Fearow',
    nationalPokedexNumber: 22,
    imageUrl: 'https://images.pokemontcg.io/ecard1/11.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/11_hires.png',
    types: [
      'Colorless'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Spearow',
    hp: '70',
    number: '11',
    artist: 'Kyoko Umemoto',
    rarity: 'Holo Rare',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    attacks: [
      {
        cost: [
          'Colorless',
          'Colorless'
        ],
        name: 'Clutch',
        text: 'The Defending Pokémon can\'t retreat during you opponent\'s next turn.',
        damage: '20',
        convertedEnergyCost: 2
      },
      {
        cost: [
          'Colorless',
          'Colorless',
          'Colorless'
        ],
        name: 'Supersonic Flight',
        text: 'Flip a coin. If tails, this attack does nothing.',
        damage: '',
        convertedEnergyCost: 3
      }
    ],
    resistances: [
      {
        type: 'Fighting',
        value: '-30'
      }
    ],
    weaknesses: [
      {
        type: 'Lightning',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard1-12',
    name: 'Feraligatr',
    nationalPokedexNumber: 160,
    imageUrl: 'https://images.pokemontcg.io/ecard1/12.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/12_hires.png',
    types: [
      'Water'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 2',
    evolvesFrom: 'Croconaw',
    ability: {
      name: 'Major Tsunami',
      text: 'Once during your turn (before you attack), if Feraligatr is your Active Pokémon and if your opponent has any Benched Pokémon, your opponent switches his or her Active Pokémon with 1 of his or her Benched Pokémon. Either way, if you have any Benched Pokémon, switch Feraligatr with 1 of them. This power can\'t be used if Feraligatr is affected by a Special Condition.',
      type: 'Poké-Power'
    },
    hp: '120',
    retreatCost: [
      'Colorless',
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 3,
    number: '12',
    artist: 'Mitsuhiro Arita',
    rarity: 'Holo Rare',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    attacks: [
      {
        cost: [
          'Water',
          'Water',
          'Colorless',
          'Colorless'
        ],
        name: 'Rending Jaws',
        text: 'If there are no damage counters on the Defending Pokémon, this attack\'s base damage is 40 instead of 70.',
        damage: '',
        convertedEnergyCost: 4
      }
    ],
    weaknesses: [
      {
        type: 'Lightning',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard1-13',
    name: 'Gengar',
    nationalPokedexNumber: 94,
    imageUrl: 'https://images.pokemontcg.io/ecard1/13.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/13_hires.png',
    types: [
      'Psychic'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 2',
    evolvesFrom: 'Haunter',
    ability: {
      name: 'Chaos Move',
      text: 'Once during your turn (before you attack), if your opponent has 3 or fewer Prizes, you may move 1 damage counter from 1 Pokémon (yours or your opponent\'s) to another (even if it would Knock Out the other Pokémon). This power can\'t be used if Gengar is affected by a Special Condition.',
      type: 'Poké-Power'
    },
    hp: '90',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '13',
    artist: 'Yukiko Baba',
    rarity: 'Holo Rare',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    attacks: [
      {
        cost: [
          'Psychic',
          'Psychic',
          'Colorless'
        ],
        name: 'Hide in Shadows',
        text: 'Switch Gengar with one of your Benched Pokémon.',
        damage: '40',
        convertedEnergyCost: 3
      }
    ],
    resistances: [
      {
        type: 'Fighting',
        value: '-30'
      }
    ],
    weaknesses: [
      {
        type: 'Dark',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard1-14',
    name: 'Golem',
    nationalPokedexNumber: 76,
    imageUrl: 'https://images.pokemontcg.io/ecard1/14.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/14_hires.png',
    types: [
      'Fighting'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 2',
    evolvesFrom: 'Graveler',
    ability: {
      name: 'Rock Body',
      text: 'All Damage done by attacks to Golem is reduced by 10 (after applying Weakness and Resistance).',
      type: 'Poké-Body'
    },
    hp: '100',
    retreatCost: [
      'Colorless',
      'Colorless',
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 4,
    number: '14',
    artist: 'Aya Kusube',
    rarity: 'Holo Rare',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    attacks: [
      {
        cost: [
          'Fighting',
          'Fighting',
          'Colorless',
          'Colorless'
        ],
        name: 'Rock Tumble',
        text: 'Don\'t apply Resistance.',
        damage: '60',
        convertedEnergyCost: 4
      }
    ],
    weaknesses: [
      {
        type: 'Water',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard1-15',
    name: 'Kingler',
    nationalPokedexNumber: 99,
    imageUrl: 'https://images.pokemontcg.io/ecard1/15.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/15_hires.png',
    types: [
      'Water'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Krabby',
    hp: '80',
    retreatCost: [
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 2,
    number: '15',
    artist: 'Shin-ichi Yoshida',
    rarity: 'Holo Rare',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    attacks: [
      {
        cost: [
          'Water'
        ],
        name: 'Bubble',
        text: 'Flip a coin. If heads, the Defending Pokémon is now Paralyzed.',
        damage: '10',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Water',
          'Water',
          'Colorless'
        ],
        name: 'Giant Claw',
        text: 'Flip a coin. If tails, this attack does nothing.',
        damage: '',
        convertedEnergyCost: 3
      }
    ],
    weaknesses: [
      {
        type: 'Lightning',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard1-16',
    name: 'Machamp',
    nationalPokedexNumber: 68,
    imageUrl: 'https://images.pokemontcg.io/ecard1/16.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/16_hires.png',
    types: [
      'Fighting'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 2',
    evolvesFrom: 'Machoke',
    ability: {
      name: 'Terraforming',
      text: 'Once during your turn (before you attack), you may look at the top 4 cards of your deck and rearrange them as you like. This power can\'t be used if Machamp is affected by a Special Condition.',
      type: 'Poké-Power'
    },
    hp: '120',
    retreatCost: [
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 2,
    number: '16',
    artist: 'Shin-ichi Yoshida',
    rarity: 'Holo Rare',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    attacks: [
      {
        cost: [
          'Fighting',
          'Fighting',
          'Colorless',
          'Colorless'
        ],
        name: 'Iron Fist',
        text: 'Count the number of Pokémon you have in play with damage counters on them. Flip a coin. If heads, this attack does 50 damage plus 10 more damage for each of those Pokémon.',
        damage: '50+',
        convertedEnergyCost: 4
      }
    ],
    weaknesses: [
      {
        type: 'Psychic',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard1-17',
    name: 'Magby',
    nationalPokedexNumber: 240,
    imageUrl: 'https://images.pokemontcg.io/ecard1/17.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/17_hires.png',
    types: [
      'Fire'
    ],
    supertype: 'Pokémon',
    subtype: 'Basic',
    hp: '30',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '17',
    artist: 'Mitsuhiro Arita',
    rarity: 'Holo Rare',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    text: [
      'If this Baby Pokémon is your Active Pokémon and your opponent tries to attack, your opponent flips a coin (before doing anything else required in order to use that attack). If tails, your opponent\'s turn ends without an attack.'
    ],
    attacks: [
      {
        cost: [
          'Fire'
        ],
        name: 'Energy Catch',
        text: 'Flip a coin. If heads, put a basic Energy cards from your discard pile into your hand.',
        damage: '',
        convertedEnergyCost: 1
      }
    ]
  },
  {
    id: 'ecard1-18',
    name: 'Meganium',
    nationalPokedexNumber: 154,
    imageUrl: 'https://images.pokemontcg.io/ecard1/18.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/18_hires.png',
    types: [
      'Grass'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 2',
    evolvesFrom: 'Bayleef',
    ability: {
      name: 'Soothing Aroma',
      text: 'Once during your turn (before your attack), you may flip a coin. If heads, remove 1 damage counter from each of your Pokémon that has any. This power can\'t be used if Meganium is affected by a Special Condition.',
      type: 'Poké-Power'
    },
    hp: '100',
    retreatCost: [
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 2,
    number: '18',
    artist: 'Hajime Kusajima',
    rarity: 'Holo Rare',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    attacks: [
      {
        cost: [
          'Grass',
          'Grass',
          'Colorless',
          'Colorless'
        ],
        name: 'Poisonpowder',
        text: 'The Defending Pokémon is now Poisoned.',
        damage: '40',
        convertedEnergyCost: 4
      }
    ],
    resistances: [
      {
        type: 'Water',
        value: '-30'
      }
    ],
    weaknesses: [
      {
        type: 'Fire',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard1-19',
    name: 'Mew',
    nationalPokedexNumber: 151,
    imageUrl: 'https://images.pokemontcg.io/ecard1/19.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/19_hires.png',
    types: [
      'Psychic'
    ],
    supertype: 'Pokémon',
    subtype: 'Basic',
    hp: '50',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '19',
    artist: 'Hajime Kusajima',
    rarity: 'Holo Rare',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    attacks: [
      {
        cost: [
          'Psychic',
          'Colorless'
        ],
        name: 'Super Psywave',
        text: 'Choose one of you opponent\'s Pokémon. Count the number of Energy cards attached to that Pokémon. Put that many damage counters on the Pokémon.',
        damage: '',
        convertedEnergyCost: 2
      }
    ],
    weaknesses: [
      {
        type: 'Psychic',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard1-20',
    name: 'Mewtwo',
    nationalPokedexNumber: 150,
    imageUrl: 'https://images.pokemontcg.io/ecard1/20.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/20_hires.png',
    types: [
      'Psychic'
    ],
    supertype: 'Pokémon',
    subtype: 'Basic',
    hp: '70',
    retreatCost: [
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 2,
    number: '20',
    artist: 'Kimiya Masago',
    rarity: 'Holo Rare',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Hypnosis',
        text: 'Flip a coin. If heads, the Defending Pokémon is now Asleep.',
        damage: '',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Psychic',
          'Psychic',
          'Colorless'
        ],
        name: 'Psychic',
        text: 'This attack does 20 damage plus 10 more damage for each Energy card attached to the Defending Pokémon.',
        damage: '20+',
        convertedEnergyCost: 3
      }
    ],
    weaknesses: [
      {
        type: 'Psychic',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard1-21',
    name: 'Ninetales',
    nationalPokedexNumber: 38,
    imageUrl: 'https://images.pokemontcg.io/ecard1/21.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/21_hires.png',
    types: [
      'Fire'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Vulpix',
    hp: '80',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '21',
    artist: 'Atsuko Nishida',
    rarity: 'Holo Rare',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    attacks: [
      {
        cost: [
          'Fire',
          'Colorless'
        ],
        name: 'Mislead',
        text: 'Flip 2 coins. If either of them is heads, the Defending Pokémon is now Confused.',
        damage: '',
        convertedEnergyCost: 2
      },
      {
        cost: [
          'Colorless',
          'Colorless',
          'Colorless'
        ],
        name: 'Ethereal Flame',
        text: 'Discard all Fire Energy cards attached to Ninetales. This attack does 30 damage plus 10 more damage for each cards discarded this way.',
        damage: '30+',
        convertedEnergyCost: 3
      }
    ],
    weaknesses: [
      {
        type: 'Water',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard1-22',
    name: 'Pichu',
    nationalPokedexNumber: 172,
    imageUrl: 'https://images.pokemontcg.io/ecard1/22.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/22_hires.png',
    types: [
      'Lightning'
    ],
    supertype: 'Pokémon',
    subtype: 'Basic',
    hp: '30',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '22',
    artist: 'Atsuko Nishida',
    rarity: 'Holo Rare',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    text: [
      'If this Baby Pokémon is your Active Pokémon and your opponent tries to attack, your opponent flips a coin (before doing anything else required in order to use that attack). If tails, your opponent\'s turn ends without an attack.'
    ],
    attacks: [
      {
        cost: [
          'Lightning'
        ],
        name: 'Energy Patch',
        text: 'Take an Energy card attached to one of your Pokémon and attach it to another of your Pokémon.',
        damage: '',
        convertedEnergyCost: 1
      }
    ]
  },
  {
    id: 'ecard1-23',
    name: 'Pidgeot',
    nationalPokedexNumber: 18,
    imageUrl: 'https://images.pokemontcg.io/ecard1/23.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/23_hires.png',
    types: [
      'Colorless'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 2',
    evolvesFrom: 'Pidgeotto',
    ability: {
      name: 'Beating Wings',
      text: 'Once during your turn (before your attack), If Pidgeot is your Active Pokémon, you may shuffle 1 of your Benched Pokémon and all cards attached to it in your deck. This power can\'t be used if Pidgeot is affected by a Special Condition.',
      type: 'Poké-Power'
    },
    hp: '80',
    number: '23',
    artist: 'Tomokazu Komiya',
    rarity: 'Holo Rare',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    attacks: [
      {
        cost: [
          'Colorless',
          'Colorless',
          'Colorless'
        ],
        name: 'Sharp Beak',
        text: 'Flip a coin. If heads, this attack does 20 damage plus 30 more damage.',
        damage: '20+',
        convertedEnergyCost: 3
      }
    ],
    resistances: [
      {
        type: 'Fighting',
        value: '-30'
      }
    ],
    weaknesses: [
      {
        type: 'Lightning',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard1-24',
    name: 'Poliwrath',
    nationalPokedexNumber: 62,
    imageUrl: 'https://images.pokemontcg.io/ecard1/24.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/24_hires.png',
    types: [
      'Water'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 2',
    evolvesFrom: 'Poliwhirl',
    ability: {
      name: 'Plunge',
      text: 'Once during your turn (before you attack), if Poliwrath is on your Bench, you may flip a coin. If heads, take all Energy cards attached to your Active Pokémon, if any, and attach them to Poliwrath. Then switch Poliwrath with your Active Pokémon.',
      type: 'Poké-Power'
    },
    hp: '100',
    retreatCost: [
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 2,
    number: '24',
    artist: 'Yuka Morii',
    rarity: 'Holo Rare',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    attacks: [
      {
        cost: [
          'Water',
          'Water',
          'Colorless',
          'Colorless'
        ],
        name: 'Water Punch',
        text: 'Flip a number of coins equal to the amount of Water Energy cards attached to Poliwrath. This attack does 40 damage plus 10 more damage for each heads.',
        damage: '40+',
        convertedEnergyCost: 4
      }
    ],
    weaknesses: [
      {
        type: 'Lightning',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard1-25',
    name: 'Raichu',
    nationalPokedexNumber: 26,
    imageUrl: 'https://images.pokemontcg.io/ecard1/25.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/25_hires.png',
    types: [
      'Lightning'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Pikachu',
    hp: '80',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '25',
    artist: 'Atsuko Nishida',
    rarity: 'Holo Rare',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Plasma',
        text: 'If there are any Lightning Energy cards in your discard pile, flip a coin. If heads, attach one of them to Raichu.',
        damage: '10',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Lightning',
          'Lightning',
          'Colorless'
        ],
        name: 'Shock Bolt',
        text: 'Discard all Lightning Energy cards attached to Raichu or this attack does nothing.',
        damage: '60',
        convertedEnergyCost: 3
      }
    ],
    weaknesses: [
      {
        type: 'Fighting',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard1-26',
    name: 'Rapidash',
    nationalPokedexNumber: 78,
    imageUrl: 'https://images.pokemontcg.io/ecard1/26.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/26_hires.png',
    types: [
      'Fire'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Ponyta',
    hp: '70',
    number: '26',
    artist: 'Kagemaru Himeno',
    rarity: 'Holo Rare',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    attacks: [
      {
        cost: [
          'Colorless',
          'Colorless'
        ],
        name: 'Overrun',
        text: 'If your opponent has any Benched Pokémon, flip a coin. If heads, choose 1 of them and this attack does 10 damage to it. (Don\'t apply Weakness and Resistance for Benched Pokémon.)',
        damage: '20',
        convertedEnergyCost: 2
      },
      {
        cost: [
          'Fire',
          'Fire',
          'Colorless'
        ],
        name: 'Flame Tail',
        text: '',
        damage: '40',
        convertedEnergyCost: 3
      }
    ],
    weaknesses: [
      {
        type: 'Water',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard1-27',
    name: 'Skarmory',
    nationalPokedexNumber: 227,
    imageUrl: 'https://images.pokemontcg.io/ecard1/27.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/27_hires.png',
    types: [
      'Metal'
    ],
    supertype: 'Pokémon',
    subtype: 'Basic',
    hp: '60',
    retreatCost: [
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 2,
    number: '27',
    artist: 'Kimiya Masago',
    rarity: 'Holo Rare',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    attacks: [
      {
        cost: [
          'Metal',
          'Colorless'
        ],
        name: 'Steel Beak',
        text: 'Flip a coin. If heads, this attack does 20 damage plus 10 more damage.',
        damage: '20+',
        convertedEnergyCost: 2
      },
      {
        cost: [
          'Colorless',
          'Colorless',
          'Colorless'
        ],
        name: 'Air Cutter',
        text: 'Flip a coin. If tails, this attack does nothing.',
        damage: '',
        convertedEnergyCost: 3
      }
    ],
    resistances: [
      {
        type: 'Grass',
        value: '-30'
      }
    ],
    weaknesses: [
      {
        type: 'Fire',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard1-28',
    name: 'Typhlosion',
    nationalPokedexNumber: 157,
    imageUrl: 'https://images.pokemontcg.io/ecard1/28.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/28_hires.png',
    types: [
      'Fire'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 2',
    evolvesFrom: 'Quilava',
    ability: {
      name: 'Heat Up',
      text: 'Once during your turn (before you attack), You may count the total number of Energy cards attached to all of your Pokémon and all of your opponent\'s Pokémon. If your opponent has more total energy cards attached, you may search your deck for 1 Fire Energy card and attach it to one of your Benched Pokémon, if any. Shuffle your deck afterward. This power can\'t be used if Typhlosion is affected by a Special Condition.',
      type: 'Poké-Power'
    },
    hp: '100',
    retreatCost: [
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 2,
    number: '28',
    artist: 'K. Hoshiba',
    rarity: 'Holo Rare',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    attacks: [
      {
        cost: [
          'Fire',
          'Fire',
          'Colorless',
          'Colorless'
        ],
        name: 'Super Singe',
        text: 'Flip a coin. If heads, the Defending Pokémon is now Burned.',
        damage: '50',
        convertedEnergyCost: 4
      }
    ],
    weaknesses: [
      {
        type: 'Water',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard1-29',
    name: 'Tyranitar',
    nationalPokedexNumber: 248,
    imageUrl: 'https://images.pokemontcg.io/ecard1/29.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/29_hires.png',
    types: [
      'Darkness'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 2',
    evolvesFrom: 'Pupitar',
    ability: {
      name: 'Dark Aura',
      text: 'All Energy attached to Tyranitar is Dark instead of its usual type.',
      type: 'Poké-Body'
    },
    hp: '120',
    retreatCost: [
      'Colorless',
      'Colorless',
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 4,
    number: '29',
    artist: 'Kimiya Masago',
    rarity: 'Holo Rare',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    attacks: [
      {
        cost: [
          'Darkness',
          'Darkness',
          'Darkness',
          'Darkness'
        ],
        name: 'Stamp',
        text: 'Flip a coin. If heads, this attack does 50 damage plus 10 more damage and does 10 damage to each of your opponent\'s Benched Pokémon, if any. (Don\'t apply Weakness and Resistance for Benched Pokémon.)',
        damage: '50+',
        convertedEnergyCost: 4
      }
    ],
    resistances: [
      {
        type: 'Psychic',
        value: '-30'
      }
    ],
    weaknesses: [
      {
        type: 'Fighting',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard1-30',
    name: 'Venusaur',
    nationalPokedexNumber: 3,
    imageUrl: 'https://images.pokemontcg.io/ecard1/30.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/30_hires.png',
    types: [
      'Grass'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 2',
    evolvesFrom: 'Ivysaur',
    ability: {
      name: 'Harvest Bounty',
      text: 'Once during your turn (before you attack), If you attach an Energy card from your hand to your Active Pokémon as part of your turn, you may attach an additional Energy card to that Pokémon at the same time. This power can\'t be used if Venusaur is affected by a Special Condition.',
      type: 'Poké-Power'
    },
    hp: '100',
    retreatCost: [
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 2,
    number: '30',
    artist: 'Shin-ichi Yoshida',
    rarity: 'Holo Rare',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    attacks: [
      {
        cost: [
          'Grass',
          'Grass',
          'Colorless',
          'Colorless'
        ],
        name: 'Body Slam',
        text: 'Flip a coin. If heads, the Defending Pokémon is now Paralyzed.',
        damage: '40',
        convertedEnergyCost: 4
      }
    ],
    weaknesses: [
      {
        type: 'Fire',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard1-31',
    name: 'Vileplume',
    nationalPokedexNumber: 45,
    imageUrl: 'https://images.pokemontcg.io/ecard1/31.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/31_hires.png',
    types: [
      'Grass'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 2',
    evolvesFrom: 'Gloom',
    ability: {
      name: 'Poison Pollen',
      text: 'Once during your turn (before you attack), you may flip a coin. If heads, the Defending Pokémon is now Poisoned. This power can\'t be used if Vileplume is affected by a Special Condition.',
      type: 'Poké-Power'
    },
    hp: '90',
    retreatCost: [
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 2,
    number: '31',
    artist: 'Miki Tanaka',
    rarity: 'Holo Rare',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    attacks: [
      {
        cost: [
          'Grass',
          'Colorless'
        ],
        name: 'Petal Dance',
        text: 'Flip 3 coins. This attack does 30 damage times the number of heads. Vileplume is now Confused.',
        damage: '30×',
        convertedEnergyCost: 2
      }
    ],
    weaknesses: [
      {
        type: 'Psychic',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard1-32',
    name: 'Weezing',
    nationalPokedexNumber: 110,
    imageUrl: 'https://images.pokemontcg.io/ecard1/32.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/32_hires.png',
    types: [
      'Grass'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Koffing',
    hp: '80',
    retreatCost: [
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 2,
    number: '32',
    artist: 'Hajime Kusajima',
    rarity: 'Holo Rare',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    attacks: [
      {
        cost: [
          'Grass',
          'Colorless'
        ],
        name: 'Foul Gas',
        text: 'Flip a coin. If heads, the Defending Pokémon is now Poisoned. If tails, the Defending Pokémon is now Confused.',
        damage: '',
        convertedEnergyCost: 2
      },
      {
        cost: [
          'Grass',
          'Grass',
          'Colorless'
        ],
        name: 'Misfire',
        text: 'Flip a coin. If tails, put 6 damage counters on Weezing.',
        damage: '60',
        convertedEnergyCost: 3
      }
    ],
    weaknesses: [
      {
        type: 'Psychic',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard1-33',
    name: 'Alakazam',
    nationalPokedexNumber: 65,
    imageUrl: 'https://images.pokemontcg.io/ecard1/33.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/33_hires.png',
    types: [
      'Psychic'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 2',
    evolvesFrom: 'Kadabra',
    ability: {
      name: 'Psymimic',
      text: 'Once during your turn, instead of Alakazam\'s normal attack, you may choose 1 of your opponent\'s Pokémon\'s attack. Alakazam copies that attack including its Energy costs and anything else required in order to use that attack, such as discarding Energy cards. (No matter what type that Pokémon is, Alakazam\'s type is still Psychic.) This power can\'t be used if Alakazam is affected by a Special Condition.',
      type: 'Poké-Power'
    },
    hp: '100',
    retreatCost: [
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 2,
    number: '33',
    artist: 'Hajime Kusajima',
    rarity: 'Rare',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    attacks: [
      {
        cost: [
          'Psychic',
          'Colorless',
          'Colorless'
        ],
        name: 'Syncroblast',
        text: 'If Alakazam and the Defending Pokémon don\'t have the same number of Energy cards on them, this attack\'s base damage is 20 instead of 80.',
        damage: '',
        convertedEnergyCost: 3
      }
    ],
    weaknesses: [
      {
        type: 'Psychic',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard1-34',
    name: 'Ampharos',
    nationalPokedexNumber: 181,
    imageUrl: 'https://images.pokemontcg.io/ecard1/34.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/34_hires.png',
    types: [
      'Lightning'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 2',
    evolvesFrom: 'Flaaffy',
    ability: {
      name: 'Energy Connect',
      text: 'Once during your turn (before you attack), you make take one basic Energy cards attached to one of your Benched Pokémon and attach it to your Active Pokémon. This power can\'t be used if Ampharos is affected by a Special Condition.',
      type: 'Poké-Power'
    },
    hp: '100',
    retreatCost: [
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 2,
    number: '34',
    artist: 'Atsuko Nishida',
    rarity: 'Rare',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    attacks: [
      {
        cost: [
          'Lightning',
          'Lightning',
          'Colorless',
          'Colorless'
        ],
        name: 'Lightning Strike',
        text: 'You may discard all Lightning Energy cards attached to Ampharos. If you do, this attack\'s base damage is 80 instead of 40.',
        damage: '',
        convertedEnergyCost: 4
      }
    ],
    weaknesses: [
      {
        type: 'Fighting',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard1-35',
    name: 'Arbok',
    nationalPokedexNumber: 24,
    imageUrl: 'https://images.pokemontcg.io/ecard1/35.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/35_hires.png',
    types: [
      'Grass'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    hp: '70',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '35',
    artist: 'Kyoko Umemoto',
    rarity: 'Rare',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    attacks: [
      {
        cost: [
          'Grass'
        ],
        name: 'Poison Spray',
        text: 'The Defending Pokémon is now Poisoned.',
        damage: '10',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Colorless',
          'Colorless'
        ],
        name: 'Poison Reaction',
        text: 'If the Defending Pokémon is Poisoned, this attack does 20 damage plus 20 more damage.',
        damage: '20+',
        convertedEnergyCost: 2
      }
    ],
    weaknesses: [
      {
        type: 'Psychic',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard1-36',
    name: 'Blastoise',
    nationalPokedexNumber: 9,
    imageUrl: 'https://images.pokemontcg.io/ecard1/36.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/36_hires.png',
    types: [
      'Water'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 2',
    evolvesFrom: 'Wartortle',
    hp: '100',
    retreatCost: [
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 2,
    number: '36',
    artist: 'Hiromichi Sugiyama',
    rarity: 'Rare',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    attacks: [
      {
        cost: [
          'Water'
        ],
        name: 'Bubble',
        text: 'Flip a coin. If heads, the Defending Pokémon is now Paralyzed.',
        damage: '20',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Colorless',
          'Colorless',
          'Colorless'
        ],
        name: 'Double Cannon',
        text: 'Flip 2 coins. This attack does 40 damage times the number of heads.',
        damage: '40×',
        convertedEnergyCost: 3
      }
    ],
    weaknesses: [
      {
        type: 'Lightning',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard1-37',
    name: 'Blastoise',
    nationalPokedexNumber: 9,
    imageUrl: 'https://images.pokemontcg.io/ecard1/37.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/37_hires.png',
    types: [
      'Water'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 2',
    ability: {
      name: 'Jet Stream',
      text: 'Once during your turn (before you attack), if Blastoise is your Active Pokémon, you may flip a coin. If heads, discard an Energy card attached to Blastoise, if any. Then, if there are any Energy cards attached to the Defending Pokémon, choose one of them and discard it. This power can\'t be used if Blastoise is affected by a Special Condition.',
      type: 'Poké-Power'
    },
    hp: '100',
    retreatCost: [
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 2,
    number: '37',
    artist: 'Kimiya Masago',
    rarity: 'Rare',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    attacks: [
      {
        cost: [
          'Water',
          'Water',
          'Colorless'
        ],
        name: 'Energy Cannon',
        text: 'Does 40 damage plus 10 more damage for each Energy attached to Blastoise but not used to pay for this attack\'s Energy cost. You can\'t add more than 20 damage in this way.',
        damage: '40+',
        convertedEnergyCost: 3
      }
    ],
    weaknesses: [
      {
        type: 'Lightning',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard1-38',
    name: 'Butterfree',
    nationalPokedexNumber: 12,
    imageUrl: 'https://images.pokemontcg.io/ecard1/38.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/38_hires.png',
    types: [
      'Grass'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 2',
    evolvesFrom: 'Metapod',
    ability: {
      name: 'Miraculous Powder',
      text: 'Once during your turn (before you attack), you may remove all Special Conditions from your Active Pokémon. This power can\'t be used if Butterfree is affected by a Special Condition.',
      type: 'Poké-Power'
    },
    hp: '80',
    number: '38',
    artist: 'Sumiyoshi Kizuki',
    rarity: 'Rare',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    attacks: [
      {
        cost: [
          'Grass',
          'Colorless',
          'Colorless'
        ],
        name: 'Spiral Drain',
        text: 'Flip a coin. If heads, remove 2 damage counters from Butterfree.',
        damage: '40',
        convertedEnergyCost: 3
      }
    ],
    weaknesses: [
      {
        type: 'Fire',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard1-39',
    name: 'Charizard',
    nationalPokedexNumber: 6,
    imageUrl: 'https://images.pokemontcg.io/ecard1/39.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/39_hires.png',
    types: [
      'Fire'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 2',
    evolvesFrom: 'Charmeleon',
    hp: '100',
    retreatCost: [
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 2,
    number: '39',
    artist: 'Atsuko Nishida',
    rarity: 'Rare',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Tail Smash',
        text: 'Flip a coin. If heads, this attack does nothing.',
        damage: '',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Fire',
          'Fire',
          'Colorless'
        ],
        name: 'Flamethrower',
        text: 'Discard 1 Fire Energy card attached to Charizard.',
        damage: '60',
        convertedEnergyCost: 3
      }
    ],
    weaknesses: [
      {
        type: 'Water',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard1-40',
    name: 'Charizard',
    nationalPokedexNumber: 6,
    imageUrl: 'https://images.pokemontcg.io/ecard1/40.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/40_hires.png',
    types: [
      'Fire'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 2',
    evolvesFrom: 'Charmeleon',
    ability: {
      name: 'Burning Energy',
      text: 'Once during your turn (before you attack), you may turn all basic Energy attached to all of your Pokémon into Fire Energy for the rest of the turn. This power can\'t be used if Charizard is affected by a Special Condition.',
      type: 'Poké-Power'
    },
    hp: '120',
    retreatCost: [
      'Colorless',
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 3,
    number: '40',
    artist: 'Hiromichi Sugiyama',
    rarity: 'Rare',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    attacks: [
      {
        cost: [
          'Fire',
          'Fire',
          'Fire',
          'Fire'
        ],
        name: 'Scorching Whirlwind',
        text: 'Flip 2 coins. If 1 of them is tails, discards 3 Energy cards attached to Charizard. If both of them are tails, discard all Energy cards attached to Charizard.',
        damage: '120',
        convertedEnergyCost: 4
      }
    ],
    weaknesses: [
      {
        type: 'Water',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard1-41',
    name: 'Clefable',
    nationalPokedexNumber: 36,
    imageUrl: 'https://images.pokemontcg.io/ecard1/41.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/41_hires.png',
    types: [
      'Colorless'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Clefairy',
    ability: {
      name: 'Moonlight',
      text: 'Once during your turn (before you attack), you may put a card from your hand back on your deck. If you do so, search your deck for a basic Energy card, show it to your opponent, and put it into your hand. Shuffle your deck afterward. This power can\'t be used if Clefable is affected by a Special Condition.',
      type: 'Poké-Power'
    },
    hp: '70',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '41',
    artist: 'Kagemaru Himeno',
    rarity: 'Rare',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    attacks: [
      {
        cost: [
          'Colorless',
          'Colorless'
        ],
        name: 'Doubleslap',
        text: 'Flip 2 coins. This attack does 20 damage times the number of heads.',
        damage: '20×',
        convertedEnergyCost: 2
      }
    ],
    weaknesses: [
      {
        type: 'Fighting',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard1-42',
    name: 'Cloyster',
    nationalPokedexNumber: 91,
    imageUrl: 'https://images.pokemontcg.io/ecard1/42.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/42_hires.png',
    types: [
      'Water'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Shellder',
    hp: '80',
    retreatCost: [
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 2,
    number: '42',
    artist: 'Kyoko Umemoto',
    rarity: 'Rare',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    attacks: [
      {
        cost: [
          'Colorless',
          'Colorless'
        ],
        name: 'Lick',
        text: 'Flip a coin. If heads, the Defending Pokémon is now Paralyzed.',
        damage: '10',
        convertedEnergyCost: 2
      },
      {
        cost: [
          'Water',
          'Colorless',
          'Colorless'
        ],
        name: 'Auto Fire',
        text: 'Flip 4 coins. This attack does 20 damage times the number of heads.',
        damage: '20×',
        convertedEnergyCost: 3
      }
    ],
    weaknesses: [
      {
        type: 'Metal',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard1-43',
    name: 'Dragonite',
    nationalPokedexNumber: 149,
    imageUrl: 'https://images.pokemontcg.io/ecard1/43.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/43_hires.png',
    types: [
      'Colorless'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 2',
    evolvesFrom: 'Dragonair',
    ability: {
      name: 'Tailwind',
      text: 'Once during your turn (before you attack), if Dragonite is on your Bench, you may reduce your Active Pokémon\'s Retreat cost to 0.',
      type: 'Poké-Power'
    },
    hp: '100',
    retreatCost: [
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 2,
    number: '43',
    artist: 'Kagemaru Himeno',
    rarity: 'Rare',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    attacks: [
      {
        cost: [
          'Water',
          'Lightning',
          'Fighting'
        ],
        name: 'Dragon Tail',
        text: 'Flip 2 coins. This attack does 40 damage times the number of heads.',
        damage: '40×',
        convertedEnergyCost: 3
      }
    ]
  },
  {
    id: 'ecard1-44',
    name: 'Dugtrio',
    nationalPokedexNumber: 51,
    imageUrl: 'https://images.pokemontcg.io/ecard1/44.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/44_hires.png',
    types: [
      'Fighting'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Diglett',
    hp: '70',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '44',
    artist: 'Masako Yamashita',
    rarity: 'Rare',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    attacks: [
      {
        cost: [
          'Fighting'
        ],
        name: 'Mud Slap',
        text: '',
        damage: '20',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Fighting',
          'Colorless',
          'Colorless'
        ],
        name: 'Magnitude',
        text: 'Does 10 damage to each Benched Pokémon (yours and your opponent\'s). (Don\'t apply Weakness and resistance for Benched Pokémon.)',
        damage: '40',
        convertedEnergyCost: 3
      }
    ],
    resistances: [
      {
        type: 'Lightning',
        value: '-30'
      }
    ],
    weaknesses: [
      {
        type: 'Grass',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard1-45',
    name: 'Fearow',
    nationalPokedexNumber: 22,
    imageUrl: 'https://images.pokemontcg.io/ecard1/45.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/45_hires.png',
    types: [
      'Colorless'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Spearow',
    hp: '70',
    number: '45',
    artist: 'Kyoko Umemoto',
    rarity: 'Rare',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    attacks: [
      {
        cost: [
          'Colorless',
          'Colorless'
        ],
        name: 'Clutch',
        text: 'The Defending Pokémon can\'t retreat during you opponent\'s next turn.',
        damage: '20',
        convertedEnergyCost: 2
      },
      {
        cost: [
          'Colorless',
          'Colorless',
          'Colorless'
        ],
        name: 'Supersonic Flight',
        text: 'Flip a coin. If tails, this attack does nothing.',
        damage: '',
        convertedEnergyCost: 3
      }
    ],
    resistances: [
      {
        type: 'Fighting',
        value: '-30'
      }
    ],
    weaknesses: [
      {
        type: 'Lightning',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard1-46',
    name: 'Feraligatr',
    nationalPokedexNumber: 160,
    imageUrl: 'https://images.pokemontcg.io/ecard1/46.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/46_hires.png',
    types: [
      'Water'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 2',
    evolvesFrom: 'Croconaw',
    hp: '100',
    retreatCost: [
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 2,
    number: '46',
    artist: 'Hiromichi Sugiyama',
    rarity: 'Rare',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Slash',
        text: '',
        damage: '20',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Water',
          'Water',
          'Colorless'
        ],
        name: 'Double Claw',
        text: 'Flip 2 coins. This attack does 30 damage plus 20 more damage for each heads.',
        damage: '30+',
        convertedEnergyCost: 3
      }
    ],
    weaknesses: [
      {
        type: 'Lightning',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard1-47',
    name: 'Feraligatr',
    nationalPokedexNumber: 160,
    imageUrl: 'https://images.pokemontcg.io/ecard1/47.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/47_hires.png',
    types: [
      'Water'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 2',
    evolvesFrom: 'Croconaw',
    ability: {
      name: 'Major Tsunami',
      text: 'Once during your turn (before you attack), if Feraligatr is your Active Pokémon and if your opponent has any Benched Pokémon, your opponent switches his or her Active Pokémon with 1 of his or her Benched Pokémon. Either way, if you have any Benched Pokémon, switch Feraligatr with 1 of them. This power can\'t be used if Feraligatr is affected by a Special Condition.',
      type: 'Poké-Power'
    },
    hp: '120',
    retreatCost: [
      'Colorless',
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 3,
    number: '47',
    artist: 'Mitsuhiro Arita',
    rarity: 'Rare',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    attacks: [
      {
        cost: [
          'Water',
          'Water',
          'Colorless',
          'Colorless'
        ],
        name: 'Rending Jaws',
        text: 'If there are no damage counters on the Defending Pokémon, this attack\'s base damage is 40 instead of 70.',
        damage: '',
        convertedEnergyCost: 4
      }
    ],
    weaknesses: [
      {
        type: 'Lightning',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard1-48',
    name: 'Gengar',
    nationalPokedexNumber: 94,
    imageUrl: 'https://images.pokemontcg.io/ecard1/48.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/48_hires.png',
    types: [
      'Psychic'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 2',
    evolvesFrom: 'Haunter',
    ability: {
      name: 'Chaos Move',
      text: 'Once during your turn (before you attack), if your opponent has 3 or fewer Prizes, you may move 1 damage counter from 1 Pokémon (yours or your opponent\'s) to another (even if it would Knock Out the other Pokémon). This power can\'t be used if Gengar is affected by a Special Condition.',
      type: 'Poké-Power'
    },
    hp: '90',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '48',
    artist: 'Yukiko Baba',
    rarity: 'Rare',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    attacks: [
      {
        cost: [
          'Psychic',
          'Psychic',
          'Colorless'
        ],
        name: 'Hide in Shadows',
        text: 'Switch Gengar with one of your Benched Pokémon.',
        damage: '40',
        convertedEnergyCost: 3
      }
    ],
    resistances: [
      {
        type: 'Fighting',
        value: '-30'
      }
    ],
    weaknesses: [
      {
        type: 'Dark',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard1-49',
    name: 'Golem',
    nationalPokedexNumber: 76,
    imageUrl: 'https://images.pokemontcg.io/ecard1/49.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/49_hires.png',
    types: [
      'Fighting'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 2',
    evolvesFrom: 'Graveler',
    ability: {
      name: 'Rock Body',
      text: 'All Damage done by attacks to Golem is reduced by 10 (after applying Weakness and Resistance).',
      type: 'Poké-Body'
    },
    hp: '100',
    retreatCost: [
      'Colorless',
      'Colorless',
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 4,
    number: '49',
    artist: 'Aya Kusube',
    rarity: 'Rare',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    attacks: [
      {
        cost: [
          'Fighting',
          'Fighting',
          'Colorless',
          'Colorless'
        ],
        name: 'Rock Tumble',
        text: 'Don\'t apply Resistance.',
        damage: '60',
        convertedEnergyCost: 4
      }
    ],
    weaknesses: [
      {
        type: 'Water',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard1-50',
    name: 'Kingler',
    nationalPokedexNumber: 99,
    imageUrl: 'https://images.pokemontcg.io/ecard1/50.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/50_hires.png',
    types: [
      'Water'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Krabby',
    hp: '80',
    retreatCost: [
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 2,
    number: '50',
    artist: 'Shin-ichi Yoshida',
    rarity: 'Rare',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    attacks: [
      {
        cost: [
          'Water'
        ],
        name: 'Bubble',
        text: 'Flip a coin. If heads, the Defending Pokémon is now Paralyzed.',
        damage: '10',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Water',
          'Water',
          'Colorless'
        ],
        name: 'Giant Claw',
        text: 'Flip a coin. If tails, this attack does nothing.',
        damage: '',
        convertedEnergyCost: 3
      }
    ],
    weaknesses: [
      {
        type: 'Lightning',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard1-51',
    name: 'Machamp',
    nationalPokedexNumber: 68,
    imageUrl: 'https://images.pokemontcg.io/ecard1/51.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/51_hires.png',
    types: [
      'Fighting'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 2',
    evolvesFrom: 'Machoke',
    ability: {
      name: 'Terraforming',
      text: 'Once during your turn (before you attack), you may look at the top 4 cards of your deck and rearrange them as you like. This power can\'t be used if Machamp is affected by a Special Condition.',
      type: 'Poké-Power'
    },
    hp: '120',
    retreatCost: [
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 2,
    number: '51',
    artist: 'Shin-ichi Yoshida',
    rarity: 'Rare',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    attacks: [
      {
        cost: [
          'Fighting',
          'Fighting',
          'Colorless',
          'Colorless'
        ],
        name: 'Iron Fist',
        text: 'Count the number of Pokémon you have in play with damage counters on them. Flip a coin. If heads, this attack does 50 damage plus 10 more damage for each of those Pokémon.',
        damage: '50+',
        convertedEnergyCost: 4
      }
    ],
    weaknesses: [
      {
        type: 'Psychic',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard1-52',
    name: 'Magby',
    nationalPokedexNumber: 240,
    imageUrl: 'https://images.pokemontcg.io/ecard1/52.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/52_hires.png',
    types: [
      'Fire'
    ],
    supertype: 'Pokémon',
    subtype: 'Basic',
    hp: '30',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '52',
    artist: 'Mitsuhiro Arita',
    rarity: 'Rare',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    text: [
      'If this Baby Pokémon is your Active Pokémon and your opponent tries to attack, your opponent flips a coin (before doing anything else required in order to use that attack). If tails, your opponent\'s turn ends without an attack.'
    ],
    attacks: [
      {
        cost: [
          'Fire'
        ],
        name: 'Energy Catch',
        text: 'Flip a coin. If heads, put a basic Energy cards from your discard pile into your hand.',
        damage: '',
        convertedEnergyCost: 1
      }
    ]
  },
  {
    id: 'ecard1-53',
    name: 'Meganium',
    nationalPokedexNumber: 154,
    imageUrl: 'https://images.pokemontcg.io/ecard1/53.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/53_hires.png',
    types: [
      'Grass'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 2',
    evolvesFrom: 'Bayleef',
    hp: '100',
    retreatCost: [
      'Colorless',
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 3,
    number: '53',
    artist: 'Kagemaru Himeno',
    rarity: 'Rare',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    attacks: [
      {
        cost: [
          'Grass'
        ],
        name: 'Sleep Powder',
        text: 'The Defending Pokémon is now Asleep.',
        damage: '20',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Grass',
          'Grass',
          'Colorless'
        ],
        name: 'Solarbeam',
        text: '',
        damage: '50',
        convertedEnergyCost: 3
      }
    ],
    resistances: [
      {
        type: 'Water',
        value: '-30'
      }
    ],
    weaknesses: [
      {
        type: 'Fire',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard1-54',
    name: 'Meganium',
    nationalPokedexNumber: 154,
    imageUrl: 'https://images.pokemontcg.io/ecard1/54.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/54_hires.png',
    types: [
      'Grass'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 2',
    evolvesFrom: 'Bayleef',
    ability: {
      name: 'Soothing Aroma',
      text: 'Once during your turn (before your attack), you may flip a coin. If heads, remove 1 damage counter from each of your Pokémon that has any. This power can\'t be used if Meganium is affected by a Special Condition.',
      type: 'Poké-Power'
    },
    hp: '100',
    retreatCost: [
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 2,
    number: '54',
    artist: 'Hajime Kusajima',
    rarity: 'Rare',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    attacks: [
      {
        cost: [
          'Grass',
          'Grass',
          'Colorless',
          'Colorless'
        ],
        name: 'Poisonpowder',
        text: 'The Defending Pokémon is now Poisoned.',
        damage: '40',
        convertedEnergyCost: 4
      }
    ],
    resistances: [
      {
        type: 'Water',
        value: '-30'
      }
    ],
    weaknesses: [
      {
        type: 'Fire',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard1-55',
    name: 'Mew',
    nationalPokedexNumber: 151,
    imageUrl: 'https://images.pokemontcg.io/ecard1/55.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/55_hires.png',
    types: [
      'Psychic'
    ],
    supertype: 'Pokémon',
    subtype: 'Basic',
    hp: '50',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '55',
    artist: 'Hajime Kusajima',
    rarity: 'Rare',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    attacks: [
      {
        cost: [
          'Psychic',
          'Colorless'
        ],
        name: 'Super Psywave',
        text: 'Choose one of you opponent\'s Pokémon. Count the number of Energy cards attached to that Pokémon. Put that many damage counters on the Pokémon.',
        damage: '',
        convertedEnergyCost: 2
      }
    ],
    weaknesses: [
      {
        type: 'Psychic',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard1-56',
    name: 'Mewtwo',
    nationalPokedexNumber: 150,
    imageUrl: 'https://images.pokemontcg.io/ecard1/56.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/56_hires.png',
    types: [
      'Psychic'
    ],
    supertype: 'Pokémon',
    subtype: 'Basic',
    hp: '70',
    retreatCost: [
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 2,
    number: '56',
    artist: 'Kimiya Masago',
    rarity: 'Rare',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Hypnosis',
        text: 'Flip a coin. If heads, the Defending Pokémon is now Asleep.',
        damage: '',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Psychic',
          'Psychic',
          'Colorless'
        ],
        name: 'Psychic',
        text: 'This attack does 20 damage plus 10 more damage for each Energy card attached to the Defending Pokémon.',
        damage: '20+',
        convertedEnergyCost: 3
      }
    ],
    weaknesses: [
      {
        type: 'Psychic',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard1-57',
    name: 'Ninetales',
    nationalPokedexNumber: 38,
    imageUrl: 'https://images.pokemontcg.io/ecard1/57.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/57_hires.png',
    types: [
      'Fire'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Vulpix',
    hp: '80',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '57',
    artist: 'Atsuko Nishida',
    rarity: 'Rare',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    attacks: [
      {
        cost: [
          'Fire',
          'Colorless'
        ],
        name: 'Mislead',
        text: 'Flip 2 coins. If either of them is heads, the Defending Pokémon is now Confused.',
        damage: '',
        convertedEnergyCost: 2
      },
      {
        cost: [
          'Colorless',
          'Colorless',
          'Colorless'
        ],
        name: 'Ethereal Flame',
        text: 'Discard all Fire Energy cards attached to Ninetales. This attack does 30 damage plus 10 more damage for each cards discarded this way.',
        damage: '30+',
        convertedEnergyCost: 3
      }
    ],
    weaknesses: [
      {
        type: 'Water',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard1-58',
    name: 'Pichu',
    nationalPokedexNumber: 172,
    imageUrl: 'https://images.pokemontcg.io/ecard1/58.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/58_hires.png',
    types: [
      'Lightning'
    ],
    supertype: 'Pokémon',
    subtype: 'Basic',
    hp: '30',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '58',
    artist: 'Atsuko Nishida',
    rarity: 'Rare',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    text: [
      'If this Baby Pokémon is your Active Pokémon and your opponent tries to attack, your opponent flips a coin (before doing anything else required in order to use that attack). If tails, your opponent\'s turn ends without an attack.'
    ],
    attacks: [
      {
        cost: [
          'Lightning'
        ],
        name: 'Energy Patch',
        text: 'Take an Energy card attached to one of your Pokémon and attach it to another of your Pokémon.',
        damage: '',
        convertedEnergyCost: 1
      }
    ]
  },
  {
    id: 'ecard1-59',
    name: 'Pidgeot',
    nationalPokedexNumber: 18,
    imageUrl: 'https://images.pokemontcg.io/ecard1/59.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/59_hires.png',
    types: [
      'Colorless'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 2',
    evolvesFrom: 'Pidgeotto',
    ability: {
      name: 'Beating Wings',
      text: 'Once during your turn (before your attack), If Pidgeot is your Active Pokémon, you may shuffle 1 of your Benched Pokémon and all cards attached to it in your deck. This power can\'t be used if Pidgeot is affected by a Special Condition.',
      type: 'Poké-Power'
    },
    hp: '80',
    number: '59',
    artist: 'Tomokazu Komiya',
    rarity: 'Rare',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    attacks: [
      {
        cost: [
          'Colorless',
          'Colorless',
          'Colorless'
        ],
        name: 'Sharp Beak',
        text: 'Flip a coin. If heads, this attack does 20 damage plus 30 more damage.',
        damage: '20+',
        convertedEnergyCost: 3
      }
    ],
    resistances: [
      {
        type: 'Fighting',
        value: '-30'
      }
    ],
    weaknesses: [
      {
        type: 'Lightning',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard1-60',
    name: 'Poliwrath',
    nationalPokedexNumber: 62,
    imageUrl: 'https://images.pokemontcg.io/ecard1/60.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/60_hires.png',
    types: [
      'Water'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 2',
    evolvesFrom: 'Poliwhirl',
    ability: {
      name: 'Plunge',
      text: 'Once during your turn (before you attack), if Poliwrath is on your Bench, you may flip a coin. If heads, take all Energy cards attached to your Active Pokémon, if any, and attach them to Poliwrath. Then switch Poliwrath with your Active Pokémon.',
      type: 'Poké-Power'
    },
    hp: '100',
    retreatCost: [
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 2,
    number: '60',
    artist: 'Yuka Morii',
    rarity: 'Rare',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    attacks: [
      {
        cost: [
          'Water',
          'Water',
          'Colorless',
          'Colorless'
        ],
        name: 'Water Punch',
        text: 'Flip a number of coins equal to the amount of Water Energy cards attached to Poliwrath. This attack does 40 damage plus 10 more damage for each heads.',
        damage: '40+',
        convertedEnergyCost: 4
      }
    ],
    weaknesses: [
      {
        type: 'Lightning',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard1-61',
    name: 'Raichu',
    nationalPokedexNumber: 26,
    imageUrl: 'https://images.pokemontcg.io/ecard1/61.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/61_hires.png',
    types: [
      'Lightning'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Pikachu',
    hp: '80',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '61',
    artist: 'Atsuko Nishida',
    rarity: 'Rare',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Plasma',
        text: 'If there are any Lightning Energy cards in your discard pile, flip a coin. If heads, attach one of them to Raichu.',
        damage: '10',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Lightning',
          'Lightning',
          'Colorless'
        ],
        name: 'Shock Bolt',
        text: 'Discard all Lightning Energy cards attached to Raichu or this attack does nothing.',
        damage: '60',
        convertedEnergyCost: 3
      }
    ],
    weaknesses: [
      {
        type: 'Fighting',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard1-62',
    name: 'Rapidash',
    nationalPokedexNumber: 78,
    imageUrl: 'https://images.pokemontcg.io/ecard1/62.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/62_hires.png',
    types: [
      'Fire'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Ponyta',
    hp: '70',
    number: '62',
    artist: 'Kagemaru Himeno',
    rarity: 'Rare',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    attacks: [
      {
        cost: [
          'Colorless',
          'Colorless'
        ],
        name: 'Overrun',
        text: 'If your opponent has any Benched Pokémon, flip a coin. If heads, choose 1 of them and this attack does 10 damage to it. (Don\'t apply Weakness and Resistance for Benched Pokémon.)',
        damage: '20',
        convertedEnergyCost: 2
      },
      {
        cost: [
          'Fire',
          'Fire',
          'Colorless'
        ],
        name: 'Flame Tail',
        text: '',
        damage: '40',
        convertedEnergyCost: 3
      }
    ],
    weaknesses: [
      {
        type: 'Water',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard1-63',
    name: 'Skarmory',
    nationalPokedexNumber: 227,
    imageUrl: 'https://images.pokemontcg.io/ecard1/63.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/63_hires.png',
    types: [
      'Metal'
    ],
    supertype: 'Pokémon',
    subtype: 'Basic',
    hp: '60',
    retreatCost: [
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 2,
    number: '63',
    artist: 'Kimiya Masago',
    rarity: 'Rare',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    attacks: [
      {
        cost: [
          'Metal',
          'Colorless'
        ],
        name: 'Steel Beak',
        text: 'Flip a coin. If heads, this attack does 20 damage plus 10 more damage.',
        damage: '20+',
        convertedEnergyCost: 2
      },
      {
        cost: [
          'Colorless',
          'Colorless',
          'Colorless'
        ],
        name: 'Air Cutter',
        text: 'Flip a coin. If tails, this attack does nothing.',
        damage: '',
        convertedEnergyCost: 3
      }
    ],
    resistances: [
      {
        type: 'Grass',
        value: '-30'
      }
    ],
    weaknesses: [
      {
        type: 'Fire',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard1-64',
    name: 'Typhlosion',
    nationalPokedexNumber: 157,
    imageUrl: 'https://images.pokemontcg.io/ecard1/64.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/64_hires.png',
    types: [
      'Fire'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 2',
    evolvesFrom: 'Quilava',
    hp: '100',
    retreatCost: [
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 2,
    number: '64',
    artist: 'Hiroaki Ito',
    rarity: 'Rare',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Quick Attack',
        text: 'Flip a coin. If heads, this attack does 10 damage plus 20 more damage.',
        damage: '10+',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Fire',
          'Fire',
          'Colorless'
        ],
        name: 'Thermal Blast',
        text: 'Flip a coin. If heads, this attack does 10 damage to each of your opponent\'s Benched Pokémon, if any. (Don\'t apply Weakness and Resistance for Benched Pokémon.',
        damage: '40',
        convertedEnergyCost: 3
      }
    ],
    weaknesses: [
      {
        type: 'Water',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard1-65',
    name: 'Typhlosion',
    nationalPokedexNumber: 157,
    imageUrl: 'https://images.pokemontcg.io/ecard1/65.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/65_hires.png',
    types: [
      'Fire'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 2',
    evolvesFrom: 'Quilava',
    ability: {
      name: 'Heat Up',
      text: 'Once during your turn (before you attack), You may count the total number of Energy cards attached to all of your Pokémon and all of your opponent\'s Pokémon. If your opponent has more total energy cards attached, you may search your deck for 1 Fire Energy card and attach it to one of your Benched Pokémon, if any. Shuffle your deck afterward. This power can\'t be used if Typhlosion is affected by a Special Condition.',
      type: 'Poké-Power'
    },
    hp: '100',
    retreatCost: [
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 2,
    number: '65',
    artist: 'K. Hoshiba',
    rarity: 'Rare',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    attacks: [
      {
        cost: [
          'Fire',
          'Fire',
          'Colorless',
          'Colorless'
        ],
        name: 'Super Singe',
        text: 'Flip a coin. If heads, the Defending Pokémon is now Burned.',
        damage: '50',
        convertedEnergyCost: 4
      }
    ],
    weaknesses: [
      {
        type: 'Water',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard1-66',
    name: 'Tyranitar',
    nationalPokedexNumber: 248,
    imageUrl: 'https://images.pokemontcg.io/ecard1/66.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/66_hires.png',
    types: [
      'Darkness'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 2',
    evolvesFrom: 'Pupitar',
    ability: {
      name: 'Dark Aura',
      text: 'All Energy attached to Tyranitar is Dark instead of its usual type.',
      type: 'Poké-Body'
    },
    hp: '120',
    retreatCost: [
      'Colorless',
      'Colorless',
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 4,
    number: '66',
    artist: 'Kimiya Masago',
    rarity: 'Rare',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    attacks: [
      {
        cost: [
          'Darkness',
          'Darkness',
          'Darkness',
          'Darkness'
        ],
        name: 'Stamp',
        text: 'Flip a coin. If heads, this attack does 50 damage plus 10 more damage and does 10 damage to each of your opponent\'s Benched Pokémon, if any. (Don\'t apply Weakness and Resistance for Benched Pokémon.)',
        damage: '50+',
        convertedEnergyCost: 4
      }
    ],
    resistances: [
      {
        type: 'Psychic',
        value: '-30'
      }
    ],
    weaknesses: [
      {
        type: 'Fighting',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard1-67',
    name: 'Venusaur',
    nationalPokedexNumber: 3,
    imageUrl: 'https://images.pokemontcg.io/ecard1/67.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/67_hires.png',
    types: [
      'Grass'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 2',
    evolvesFrom: 'Ivysaur',
    hp: '100',
    retreatCost: [
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 2,
    number: '67',
    artist: 'Atsuko Nishida',
    rarity: 'Rare',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    attacks: [
      {
        cost: [
          'Grass'
        ],
        name: 'Leech Seed',
        text: 'If this attack damages the Defending Pokémon (after applying Weakness and Resistance), remove 1 damage counter from Venusaur, is it has any.',
        damage: '20',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Grass',
          'Colorless',
          'Colorless'
        ],
        name: 'Fury Swipes',
        text: 'Flip 3 coins. This attack does 30 damage times the number of heads.',
        damage: '30×',
        convertedEnergyCost: 3
      }
    ],
    weaknesses: [
      {
        type: 'Fire',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard1-68',
    name: 'Venusaur',
    nationalPokedexNumber: 3,
    imageUrl: 'https://images.pokemontcg.io/ecard1/68.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/68_hires.png',
    types: [
      'Grass'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 2',
    evolvesFrom: 'Ivysaur',
    ability: {
      name: 'Harvest Bounty',
      text: 'Once during your turn (before you attack), If you attach an Energy card from your hand to your Active Pokémon as part of your turn, you may attach an additional Energy card to that Pokémon at the same time. This power can\'t be used if Venusaur is affected by a Special Condition.',
      type: 'Poké-Power'
    },
    hp: '100',
    retreatCost: [
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 2,
    number: '68',
    artist: 'Shin-ichi Yoshida',
    rarity: 'Rare',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    attacks: [
      {
        cost: [
          'Grass',
          'Grass',
          'Colorless',
          'Colorless'
        ],
        name: 'Body Slam',
        text: 'Flip a coin. If heads, the Defending Pokémon is now Paralyzed.',
        damage: '40',
        convertedEnergyCost: 4
      }
    ],
    weaknesses: [
      {
        type: 'Fire',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard1-69',
    name: 'Vileplume',
    nationalPokedexNumber: 45,
    imageUrl: 'https://images.pokemontcg.io/ecard1/69.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/69_hires.png',
    types: [
      'Grass'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 2',
    evolvesFrom: 'Gloom',
    ability: {
      name: 'Poison Pollen',
      text: 'Once during your turn (before you attack), you may flip a coin. If heads, the Defending Pokémon is now Poisoned. This power can\'t be used if Vileplume is affected by a Special Condition.',
      type: 'Poké-Power'
    },
    hp: '90',
    retreatCost: [
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 2,
    number: '69',
    artist: 'Miki Tanaka',
    rarity: 'Rare',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    attacks: [
      {
        cost: [
          'Grass',
          'Colorless'
        ],
        name: 'Petal Dance',
        text: 'Flip 3 coins. This attack does 30 damage times the number of heads. Vileplume is now Confused.',
        damage: '30×',
        convertedEnergyCost: 2
      }
    ],
    weaknesses: [
      {
        type: 'Psychic',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard1-70',
    name: 'Weezing',
    nationalPokedexNumber: 110,
    imageUrl: 'https://images.pokemontcg.io/ecard1/70.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/70_hires.png',
    types: [
      'Grass'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Koffing',
    hp: '80',
    retreatCost: [
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 2,
    number: '70',
    artist: 'Hajime Kusajima',
    rarity: 'Rare',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    attacks: [
      {
        cost: [
          'Grass',
          'Colorless'
        ],
        name: 'Foul Gas',
        text: 'Flip a coin. If heads, the Defending Pokémon is now Poisoned. If tails, the Defending Pokémon is now Confused.',
        damage: '',
        convertedEnergyCost: 2
      },
      {
        cost: [
          'Grass',
          'Grass',
          'Colorless'
        ],
        name: 'Misfire',
        text: 'Flip a coin. If tails, put 6 damage counters on Weezing.',
        damage: '60',
        convertedEnergyCost: 3
      }
    ],
    weaknesses: [
      {
        type: 'Psychic',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard1-71',
    name: 'Bayleef',
    nationalPokedexNumber: 153,
    imageUrl: 'https://images.pokemontcg.io/ecard1/71.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/71_hires.png',
    types: [
      'Grass'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Chikorita',
    hp: '70',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '71',
    artist: 'Mitsuhiro Arita',
    rarity: 'Uncommon',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Mysterious Powder',
        text: 'Flip a coin. If heads, the Defending Pokémon is now Confused.',
        damage: '',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Grass',
          'Colorless'
        ],
        name: 'Razor Leaf',
        text: '',
        damage: '30',
        convertedEnergyCost: 2
      }
    ],
    resistances: [
      {
        type: 'Water',
        value: '-30'
      }
    ],
    weaknesses: [
      {
        type: 'Fire',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard1-72',
    name: 'Chansey',
    nationalPokedexNumber: 113,
    imageUrl: 'https://images.pokemontcg.io/ecard1/72.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/72_hires.png',
    types: [
      'Colorless'
    ],
    supertype: 'Pokémon',
    subtype: 'Basic',
    hp: '90',
    retreatCost: [
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 2,
    number: '72',
    artist: 'Sumiyoshi Kizuki',
    rarity: 'Uncommon',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    attacks: [
      {
        cost: [
          'Colorless',
          'Colorless'
        ],
        name: 'Bind Wound',
        text: 'Flip a coin. If heads, remove 2 damage counters from 1 of your Pokémon (1 if it has only 1).',
        damage: '',
        convertedEnergyCost: 2
      },
      {
        cost: [
          'Colorless',
          'Colorless',
          'Colorless'
        ],
        name: 'Dogpile',
        text: 'Count the number for Pokémon on your Bench. This attack does 10 times that number to the Defending Pokémon, and Chansey does 10 times that number of damage to itself.',
        damage: '',
        convertedEnergyCost: 3
      }
    ],
    weaknesses: [
      {
        type: 'Fighting',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard1-73',
    name: 'Charmeleon',
    nationalPokedexNumber: 5,
    imageUrl: 'https://images.pokemontcg.io/ecard1/73.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/73_hires.png',
    types: [
      'Fire'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Charmander',
    hp: '80',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '73',
    artist: 'Tomokazu Komiya',
    rarity: 'Uncommon',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    attacks: [
      {
        cost: [
          'Colorless',
          'Colorless'
        ],
        name: 'Double Scratch',
        text: 'Flip 2 coins. This attack does 20 damage times the number of heads.',
        damage: '20×',
        convertedEnergyCost: 2
      },
      {
        cost: [
          'Fire',
          'Colorless',
          'Colorless'
        ],
        name: 'Flamethrower',
        text: 'Discard 1 Fire Energy card attached to Charmeleon.',
        damage: '50',
        convertedEnergyCost: 3
      }
    ],
    weaknesses: [
      {
        type: 'Water',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard1-74',
    name: 'Croconaw',
    nationalPokedexNumber: 159,
    imageUrl: 'https://images.pokemontcg.io/ecard1/74.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/74_hires.png',
    types: [
      'Water'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Totodile',
    hp: '80',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '74',
    artist: 'Kagemaru Himeno',
    rarity: 'Uncommon',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    attacks: [
      {
        cost: [
          'Colorless',
          'Colorless'
        ],
        name: 'Tackle',
        text: '',
        damage: '20',
        convertedEnergyCost: 2
      },
      {
        cost: [
          'Colorless',
          'Colorless',
          'Colorless'
        ],
        name: 'Take Down',
        text: 'Croconaw does 10 damage to itself.',
        damage: '40',
        convertedEnergyCost: 3
      }
    ],
    weaknesses: [
      {
        type: 'Lightning',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard1-75',
    name: 'Dragonair',
    nationalPokedexNumber: 148,
    imageUrl: 'https://images.pokemontcg.io/ecard1/75.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/75_hires.png',
    types: [
      'Colorless'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Dratini',
    hp: '70',
    retreatCost: [
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 2,
    number: '75',
    artist: 'Kagemaru Himeno',
    rarity: 'Uncommon',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    attacks: [
      {
        cost: [
          'Water',
          'Lightning'
        ],
        name: 'Spiral Wave',
        text: 'Flip a coin until you get tails. This attack does 20 damage times the number of heads.',
        damage: '20×',
        convertedEnergyCost: 2
      }
    ]
  },
  {
    id: 'ecard1-76',
    name: 'Electabuzz',
    nationalPokedexNumber: 125,
    imageUrl: 'https://images.pokemontcg.io/ecard1/76.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/76_hires.png',
    types: [
      'Lightning'
    ],
    supertype: 'Pokémon',
    subtype: 'Basic',
    hp: '60',
    retreatCost: [
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 2,
    number: '76',
    artist: 'Hiroaki Ito',
    rarity: 'Uncommon',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Energy Draw',
        text: 'Search your deck for a basic Energy card and attach it to Electabuzz. Shuffle your deck afterward.',
        damage: '',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Lightning',
          'Colorless'
        ],
        name: 'Reflect Energy',
        text: 'If you have any Benched Pokémon and if there are any basic Energy cards attached to Electabuzz, take 1 of those Energy cards and attach it to 1 of those Pokémon.',
        damage: '20',
        convertedEnergyCost: 2
      }
    ],
    weaknesses: [
      {
        type: 'Fighting',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard1-77',
    name: 'Flaaffy',
    nationalPokedexNumber: 180,
    imageUrl: 'https://images.pokemontcg.io/ecard1/77.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/77_hires.png',
    types: [
      'Lightning'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Mareep',
    hp: '80',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '77',
    artist: 'Mitsuhiro Arita',
    rarity: 'Uncommon',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    attacks: [
      {
        cost: [
          'Colorless',
          'Colorless'
        ],
        name: 'Headbutt',
        text: '',
        damage: '20',
        convertedEnergyCost: 2
      },
      {
        cost: [
          'Lightning',
          'Lightning',
          'Colorless'
        ],
        name: 'Thunder Jolt',
        text: 'Flip a coin. If tails, Flaaffy does 20 damage to itself.',
        damage: '50',
        convertedEnergyCost: 3
      }
    ],
    weaknesses: [
      {
        type: 'Fighting',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard1-78',
    name: 'Gloom',
    nationalPokedexNumber: 44,
    imageUrl: 'https://images.pokemontcg.io/ecard1/78.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/78_hires.png',
    types: [
      'Grass'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Oddish',
    hp: '70',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '78',
    artist: 'Yuichi Sawayama',
    rarity: 'Uncommon',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    attacks: [
      {
        cost: [
          'Grass',
          'Colorless'
        ],
        name: 'Razor Leaf',
        text: '',
        damage: '20',
        convertedEnergyCost: 2
      },
      {
        cost: [
          'Grass',
          'Colorless',
          'Colorless'
        ],
        name: 'Foul Odor',
        text: 'Both the Defending Pokémon and Gloom are now Confused (after doing damage).',
        damage: '30',
        convertedEnergyCost: 3
      }
    ],
    weaknesses: [
      {
        type: 'Psychic',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard1-79',
    name: 'Graveler',
    nationalPokedexNumber: 75,
    imageUrl: 'https://images.pokemontcg.io/ecard1/79.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/79_hires.png',
    types: [
      'Fighting'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Geodude',
    hp: '80',
    retreatCost: [
      'Colorless',
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 3,
    number: '79',
    artist: 'Aya Kusube',
    rarity: 'Uncommon',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    attacks: [
      {
        cost: [
          'Fighting',
          'Colorless'
        ],
        name: 'Rock Hurl',
        text: 'Don\'t apply Resistance.',
        damage: '20',
        convertedEnergyCost: 2
      },
      {
        cost: [
          'Fighting',
          'Fighting',
          'Colorless'
        ],
        name: 'Rock Slide',
        text: 'Chose 2 of your opponent\'s Pokémon (1 if he or she has only 1). This attack does 10 damage to each of those Pokémon. (Don\'t apply Weakness and Resistance for those Pokémon.',
        damage: '30',
        convertedEnergyCost: 3
      }
    ],
    weaknesses: [
      {
        type: 'Water',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard1-80',
    name: 'Haunter',
    nationalPokedexNumber: 93,
    imageUrl: 'https://images.pokemontcg.io/ecard1/80.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/80_hires.png',
    types: [
      'Psychic'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Gastly',
    hp: '70',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '80',
    artist: 'Yukiko Baba',
    rarity: 'Uncommon',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    attacks: [
      {
        cost: [
          'Psychic',
          'Colorless'
        ],
        name: 'Nightmare',
        text: 'The Defending Pokémon is now Asleep.',
        damage: '20',
        convertedEnergyCost: 2
      },
      {
        cost: [
          'Psychic',
          'Colorless'
        ],
        name: 'Dream Eater',
        text: 'If the Defending Pokémon isn\'t Asleep, this attack does nothing.',
        damage: '',
        convertedEnergyCost: 2
      }
    ],
    resistances: [
      {
        type: 'Fighting',
        value: '-30'
      }
    ],
    weaknesses: [
      {
        type: 'Dark',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard1-81',
    name: 'Hitmonlee',
    nationalPokedexNumber: 106,
    imageUrl: 'https://images.pokemontcg.io/ecard1/81.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/81_hires.png',
    types: [
      'Fighting'
    ],
    supertype: 'Pokémon',
    subtype: 'Basic',
    hp: '60',
    retreatCost: [
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 2,
    number: '81',
    artist: 'Atsuko Nishida',
    rarity: 'Uncommon',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Smash Kick',
        text: '',
        damage: '10',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Fighting',
          'Fighting',
          'Colorless'
        ],
        name: 'Stretch Kick',
        text: 'If your opponent has any Benched Pokémon, chose 1 of them and this attack does 30 damage to it. (Don\'t apply Weakness and Resistance for Benched Pokémon.',
        damage: '30',
        convertedEnergyCost: 3
      }
    ],
    weaknesses: [
      {
        type: 'Psychic',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard1-82',
    name: 'Ivysaur',
    nationalPokedexNumber: 2,
    imageUrl: 'https://images.pokemontcg.io/ecard1/82.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/82_hires.png',
    types: [
      'Grass'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Bulbasaur',
    hp: '80',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '82',
    artist: 'Miki Tanaka',
    rarity: 'Uncommon',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    attacks: [
      {
        cost: [
          'Grass',
          'Colorless'
        ],
        name: 'Sleep Seed',
        text: 'The Defending Pokémon is now Asleep.',
        damage: '20',
        convertedEnergyCost: 2
      },
      {
        cost: [
          'Grass',
          'Colorless',
          'Colorless'
        ],
        name: 'Vine Whip',
        text: '',
        damage: '40',
        convertedEnergyCost: 3
      }
    ],
    weaknesses: [
      {
        type: 'Fire',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard1-83',
    name: 'Jynx',
    nationalPokedexNumber: 124,
    imageUrl: 'https://images.pokemontcg.io/ecard1/83.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/83_hires.png',
    types: [
      'Water'
    ],
    supertype: 'Pokémon',
    subtype: 'Basic',
    hp: '60',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '83',
    artist: 'Sumiyoshi Kizuki',
    rarity: 'Uncommon',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    attacks: [
      {
        cost: [
          'Water',
          'Colorless'
        ],
        name: 'Ice Punch',
        text: 'Flip a coin. If heads, the Defending Pokémon is now Paralyzed.',
        damage: '10',
        convertedEnergyCost: 2
      },
      {
        cost: [
          'Water',
          'Colorless',
          'Colorless'
        ],
        name: 'Powder Snow',
        text: 'The Defending Pokémon is now Asleep.',
        damage: '20',
        convertedEnergyCost: 3
      }
    ],
    weaknesses: [
      {
        type: 'Metal',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard1-84',
    name: 'Kadabra',
    nationalPokedexNumber: 64,
    imageUrl: 'https://images.pokemontcg.io/ecard1/84.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/84_hires.png',
    types: [
      'Psychic'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Abra',
    hp: '70',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '84',
    artist: 'Hajime Kusajima',
    rarity: 'Uncommon',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Energy Recall',
        text: 'Attach 2 basic Energy cards from your discard pile to Kadabra (1 if you have only 1).',
        damage: '',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Psychic',
          'Colorless'
        ],
        name: 'Confuse Ray',
        text: 'Flip a coin. If heads, the Defending Pokémon is now Confused.',
        damage: '20',
        convertedEnergyCost: 2
      }
    ],
    weaknesses: [
      {
        type: 'Psychic',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard1-85',
    name: 'Machoke',
    nationalPokedexNumber: 67,
    imageUrl: 'https://images.pokemontcg.io/ecard1/85.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/85_hires.png',
    types: [
      'Fighting'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Machop',
    hp: '80',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '85',
    artist: 'Shin-ichi Yoshida',
    rarity: 'Uncommon',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    attacks: [
      {
        cost: [
          'Colorless',
          'Colorless'
        ],
        name: 'Punch',
        text: '',
        damage: '20',
        convertedEnergyCost: 2
      },
      {
        cost: [
          'Fighting',
          'Fighting',
          'Colorless'
        ],
        name: 'Mega Kick',
        text: '',
        damage: '50',
        convertedEnergyCost: 3
      }
    ],
    weaknesses: [
      {
        type: 'Psychic',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard1-86',
    name: 'Magmar',
    nationalPokedexNumber: 126,
    imageUrl: 'https://images.pokemontcg.io/ecard1/86.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/86_hires.png',
    types: [
      'Fire'
    ],
    supertype: 'Pokémon',
    subtype: 'Basic',
    hp: '60',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '86',
    artist: 'Miki Tanaka',
    rarity: 'Uncommon',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    attacks: [
      {
        cost: [
          'Fire',
          'Colorless'
        ],
        name: 'Flaming Punch',
        text: 'Flip a coin. If heads, the Defending Pokémon is now Burned.',
        damage: '10',
        convertedEnergyCost: 2
      },
      {
        cost: [
          'Fire',
          'Colorless',
          'Colorless'
        ],
        name: 'Thrash',
        text: 'Flip a coin. If heads, this attack does 30 damage plus 10 more damage. If tails, Magmar does 10 damage to itself.',
        damage: '30+',
        convertedEnergyCost: 3
      }
    ],
    weaknesses: [
      {
        type: 'Water',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard1-87',
    name: 'Metapod',
    nationalPokedexNumber: 11,
    imageUrl: 'https://images.pokemontcg.io/ecard1/87.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/87_hires.png',
    types: [
      'Grass'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Caterpie',
    ability: {
      name: 'Exoskeleton',
      text: 'All damage done to Metapod is reduced by 20 (after applying Weakness and Resistance).',
      type: 'Poké-Body'
    },
    hp: '60',
    retreatCost: [
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 2,
    number: '87',
    artist: 'Yuichi Sawayama',
    rarity: 'Uncommon',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Rollout',
        text: '',
        damage: '10',
        convertedEnergyCost: 1
      }
    ],
    weaknesses: [
      {
        type: 'Fire',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard1-88',
    name: 'Pidgeotto',
    nationalPokedexNumber: 17,
    imageUrl: 'https://images.pokemontcg.io/ecard1/88.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/88_hires.png',
    types: [
      'Colorless'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Pidgey',
    hp: '90',
    number: '88',
    artist: 'Tomokazu Komiya',
    rarity: 'Uncommon',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    attacks: [
      {
        cost: [
          'Colorless',
          'Colorless'
        ],
        name: 'Whirlwind',
        text: 'If your opponent has any Benched Pokémon, he or she chooses 1 of them and switches the Defending Pokémon with it. (Do the damage before switching the Pokémon.',
        damage: '20',
        convertedEnergyCost: 2
      }
    ],
    resistances: [
      {
        type: 'Fighting',
        value: '-30'
      }
    ],
    weaknesses: [
      {
        type: 'Lightning',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard1-89',
    name: 'Poliwhirl',
    nationalPokedexNumber: 61,
    imageUrl: 'https://images.pokemontcg.io/ecard1/89.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/89_hires.png',
    types: [
      'Water'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Poliwag',
    hp: '70',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '89',
    artist: 'Yuka Morii',
    rarity: 'Uncommon',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    attacks: [
      {
        cost: [
          'Colorless',
          'Colorless'
        ],
        name: 'Punch',
        text: '',
        damage: '20',
        convertedEnergyCost: 2
      },
      {
        cost: [
          'Water',
          'Colorless',
          'Colorless'
        ],
        name: 'Bubblebeam',
        text: 'Flip a coin. If heads, the Defending Pokémon is now Paralyzed.',
        damage: '30',
        convertedEnergyCost: 3
      }
    ],
    weaknesses: [
      {
        type: 'Lightning',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard1-90',
    name: 'Pupitar',
    nationalPokedexNumber: 247,
    imageUrl: 'https://images.pokemontcg.io/ecard1/90.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/90_hires.png',
    types: [
      'Fighting'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Larvitar',
    hp: '70',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '90',
    artist: 'Yukiko Baba',
    rarity: 'Uncommon',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    attacks: [
      {
        cost: [
          'Fighting'
        ],
        name: 'Headbutt',
        text: '',
        damage: '20',
        convertedEnergyCost: 1
      }
    ],
    weaknesses: [
      {
        type: 'Water',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard1-91',
    name: 'Quilava',
    nationalPokedexNumber: 156,
    imageUrl: 'https://images.pokemontcg.io/ecard1/91.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/91_hires.png',
    types: [
      'Fire'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Cyndaquil',
    hp: '70',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '91',
    artist: 'Asuka Iwashita',
    rarity: 'Uncommon',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    attacks: [
      {
        cost: [
          'Fire',
          'Colorless'
        ],
        name: 'Super Singe',
        text: 'Flip a coin. If heads, the Defending Pokémon is now Burned.',
        damage: '20',
        convertedEnergyCost: 2
      },
      {
        cost: [
          'Colorless',
          'Colorless',
          'Colorless'
        ],
        name: 'Tackle',
        text: '',
        damage: '30',
        convertedEnergyCost: 3
      }
    ],
    weaknesses: [
      {
        type: 'Water',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard1-92',
    name: 'Wartortle',
    nationalPokedexNumber: 8,
    imageUrl: 'https://images.pokemontcg.io/ecard1/92.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/92_hires.png',
    types: [
      'Water'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Squirtle',
    hp: '80',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '92',
    artist: 'Atsuko Nishida',
    rarity: 'Uncommon',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Doubleslap',
        text: 'Flip 2 coins. This attack does 10 damage times the number of heads.',
        damage: '10×',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Water',
          'Water'
        ],
        name: 'Giant Wave',
        text: 'Wartortle can\'t attack during your next turn.',
        damage: '40',
        convertedEnergyCost: 2
      }
    ],
    weaknesses: [
      {
        type: 'Lightning',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard1-93',
    name: 'Abra',
    nationalPokedexNumber: 63,
    imageUrl: 'https://images.pokemontcg.io/ecard1/93.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/93_hires.png',
    types: [
      'Psychic'
    ],
    supertype: 'Pokémon',
    subtype: 'Basic',
    hp: '40',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '93',
    artist: 'Hajime Kusajima',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Scratch',
        text: '',
        damage: '10',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Psychic'
        ],
        name: 'Confuse Ray',
        text: 'Flip a coin. If heads, the Defending Pokémon is now Confused.',
        damage: '',
        convertedEnergyCost: 1
      }
    ],
    weaknesses: [
      {
        type: 'Psychic',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard1-94',
    name: 'Bulbasaur',
    nationalPokedexNumber: 1,
    imageUrl: 'https://images.pokemontcg.io/ecard1/94.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/94_hires.png',
    types: [
      'Grass'
    ],
    supertype: 'Pokémon',
    subtype: 'Basic',
    hp: '50',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '94',
    artist: 'Sachi Matoba',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Tackle',
        text: '',
        damage: '10',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Grass',
          'Colorless'
        ],
        name: 'Poison Seed',
        text: 'Flip a coin. If heads, the Defending Pokémon is now Poisoned.',
        damage: '',
        convertedEnergyCost: 2
      }
    ],
    weaknesses: [
      {
        type: 'Fire',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard1-95',
    name: 'Bulbasaur',
    nationalPokedexNumber: 1,
    imageUrl: 'https://images.pokemontcg.io/ecard1/95.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/95_hires.png',
    types: [
      'Grass'
    ],
    supertype: 'Pokémon',
    subtype: 'Basic',
    hp: '40',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '95',
    artist: 'Tomokazu Komiya',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Sleep Seed',
        text: 'The Defending Pokémon is now Asleep.',
        damage: '',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Grass',
          'Colorless'
        ],
        name: 'Vine Whip',
        text: '',
        damage: '20',
        convertedEnergyCost: 2
      }
    ],
    weaknesses: [
      {
        type: 'Fire',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard1-96',
    name: 'Caterpie',
    nationalPokedexNumber: 10,
    imageUrl: 'https://images.pokemontcg.io/ecard1/96.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/96_hires.png',
    types: [
      'Grass'
    ],
    supertype: 'Pokémon',
    subtype: 'Basic',
    hp: '40',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '96',
    artist: 'Miki Tanaka',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Headbutt',
        text: '',
        damage: '10',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Colorless',
          'Colorless'
        ],
        name: 'Entangling Thread',
        text: 'Flip a coin. If heads, the Defending Pokémon is now Paralyzed.',
        damage: '10',
        convertedEnergyCost: 2
      }
    ],
    weaknesses: [
      {
        type: 'Fire',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard1-97',
    name: 'Charmander',
    nationalPokedexNumber: 4,
    imageUrl: 'https://images.pokemontcg.io/ecard1/97.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/97_hires.png',
    types: [
      'Fire'
    ],
    supertype: 'Pokémon',
    subtype: 'Basic',
    hp: '50',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '97',
    artist: 'Masako Yamashita',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Tail Rap',
        text: 'Flip 2 coins. This attack does 10 damage times the number of heads.',
        damage: '10×',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Fire',
          'Colorless'
        ],
        name: 'Flare',
        text: '',
        damage: '20',
        convertedEnergyCost: 2
      }
    ],
    weaknesses: [
      {
        type: 'Water',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard1-98',
    name: 'Charmander',
    nationalPokedexNumber: 4,
    imageUrl: 'https://images.pokemontcg.io/ecard1/98.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/98_hires.png',
    types: [
      'Fire'
    ],
    supertype: 'Pokémon',
    subtype: 'Basic',
    hp: '50',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '98',
    artist: 'Yuichi Sawayama',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Gnaw',
        text: '',
        damage: '10',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Fire',
          'Colorless'
        ],
        name: 'Searing Flame',
        text: 'Flip a coin. If heads, the Defending Pokémon is now Burned.',
        damage: '10',
        convertedEnergyCost: 2
      }
    ],
    weaknesses: [
      {
        type: 'Water',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard1-99',
    name: 'Chikorita',
    nationalPokedexNumber: 152,
    imageUrl: 'https://images.pokemontcg.io/ecard1/99.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/99_hires.png',
    types: [
      'Grass'
    ],
    supertype: 'Pokémon',
    subtype: 'Basic',
    hp: '40',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '99',
    artist: 'Miki Tanaka',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Hypnotic Gaze',
        text: 'The Defending Pokémon is now Asleep.',
        damage: '',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Grass',
          'Colorless'
        ],
        name: 'Double Scratch',
        text: 'Flip 2 coins. This attack does 20 damage times the number of heads.',
        damage: '20×',
        convertedEnergyCost: 2
      }
    ],
    resistances: [
      {
        type: 'Water',
        value: '-30'
      }
    ],
    weaknesses: [
      {
        type: 'Fire',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard1-100',
    name: 'Chikorita',
    nationalPokedexNumber: 152,
    imageUrl: 'https://images.pokemontcg.io/ecard1/100.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/100_hires.png',
    types: [
      'Grass'
    ],
    supertype: 'Pokémon',
    subtype: 'Basic',
    hp: '50',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '100',
    artist: 'Motofumi Fujiwara',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    attacks: [
      {
        cost: [
          'Grass'
        ],
        name: 'Razor Leaf',
        text: '',
        damage: '10',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Colorless',
          'Colorless'
        ],
        name: 'Sleep Powder',
        text: 'The Defending Pokémon is now Asleep.',
        damage: '10',
        convertedEnergyCost: 2
      }
    ],
    resistances: [
      {
        type: 'Water',
        value: '-30'
      }
    ],
    weaknesses: [
      {
        type: 'Fire',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard1-101',
    name: 'Clefairy',
    nationalPokedexNumber: 35,
    imageUrl: 'https://images.pokemontcg.io/ecard1/101.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/101_hires.png',
    types: [
      'Colorless'
    ],
    supertype: 'Pokémon',
    subtype: 'Basic',
    hp: '50',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '101',
    artist: 'Tomokazu Komiya',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Shining Fingers',
        text: 'The Defending Pokémon is now Asleep.',
        damage: '',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Colorless'
        ],
        name: 'Slap',
        text: '',
        damage: '10',
        convertedEnergyCost: 1
      }
    ],
    weaknesses: [
      {
        type: 'Fighting',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard1-102',
    name: 'Corsola',
    nationalPokedexNumber: 222,
    imageUrl: 'https://images.pokemontcg.io/ecard1/102.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/102_hires.png',
    types: [
      'Water'
    ],
    supertype: 'Pokémon',
    subtype: 'Basic',
    hp: '60',
    retreatCost: [
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 2,
    number: '102',
    artist: 'Miki Tanaka',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    attacks: [
      {
        cost: [
          'Water',
          'Colorless'
        ],
        name: 'Tackle',
        text: '',
        damage: '20',
        convertedEnergyCost: 2
      },
      {
        cost: [
          'Water',
          'Colorless',
          'Colorless'
        ],
        name: 'Spike Cannon',
        text: 'Flip 3 coins. This attack does 20 damage times the number of heads.',
        damage: '20×',
        convertedEnergyCost: 3
      }
    ],
    weaknesses: [
      {
        type: 'Grass',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard1-103',
    name: 'Cubone',
    nationalPokedexNumber: 104,
    imageUrl: 'https://images.pokemontcg.io/ecard1/103.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/103_hires.png',
    types: [
      'Fighting'
    ],
    supertype: 'Pokémon',
    subtype: 'Basic',
    hp: '40',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '103',
    artist: 'Tomokazu Komiya',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Beat',
        text: '',
        damage: '10',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Fighting',
          'Colorless'
        ],
        name: 'Bone Smash',
        text: 'Flip a coin. If tails, this attack does nothing.',
        damage: '',
        convertedEnergyCost: 2
      }
    ],
    resistances: [
      {
        type: 'Lightning',
        value: '-30'
      }
    ],
    weaknesses: [
      {
        type: 'Grass',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard1-104',
    name: 'Cyndaquil',
    nationalPokedexNumber: 155,
    imageUrl: 'https://images.pokemontcg.io/ecard1/104.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/104_hires.png',
    types: [
      'Fire'
    ],
    supertype: 'Pokémon',
    subtype: 'Basic',
    hp: '40',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '104',
    artist: 'Sachi Matoba',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    attacks: [
      {
        cost: [
          'Fire'
        ],
        name: 'Singe',
        text: 'Flip a coin. If heads, the Defending Pokémon is now Burned.',
        damage: '',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Colorless',
          'Colorless'
        ],
        name: 'Quick Attack',
        text: 'Flip a coin. If heads, this attack does 10 damage plus 20 more damage.',
        damage: '10+',
        convertedEnergyCost: 2
      }
    ],
    weaknesses: [
      {
        type: 'Water',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard1-105',
    name: 'Cyndaquil',
    nationalPokedexNumber: 155,
    imageUrl: 'https://images.pokemontcg.io/ecard1/105.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/105_hires.png',
    types: [
      'Fire'
    ],
    supertype: 'Pokémon',
    subtype: 'Basic',
    hp: '50',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '105',
    artist: 'Kyoko Umemoto',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Tackle',
        text: '',
        damage: '10',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Fire',
          'Colorless'
        ],
        name: 'Ember',
        text: 'Discard a Fire Energy card attached to Cyndaquil.',
        damage: '30',
        convertedEnergyCost: 2
      }
    ],
    weaknesses: [
      {
        type: 'Water',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard1-106',
    name: 'Diglett',
    nationalPokedexNumber: 50,
    imageUrl: 'https://images.pokemontcg.io/ecard1/106.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/106_hires.png',
    types: [
      'Fighting'
    ],
    supertype: 'Pokémon',
    subtype: 'Basic',
    hp: '40',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '106',
    artist: 'Masako Yamashita',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    attacks: [
      {
        cost: [
          'Fighting'
        ],
        name: 'Fury Headbutt',
        text: 'Flip 3 coins. This attack does 10 damage times the number of heads.',
        damage: '10×',
        convertedEnergyCost: 1
      }
    ],
    resistances: [
      {
        type: 'Lightning',
        value: '-30'
      }
    ],
    weaknesses: [
      {
        type: 'Grass',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard1-107',
    name: 'Dratini',
    nationalPokedexNumber: 147,
    imageUrl: 'https://images.pokemontcg.io/ecard1/107.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/107_hires.png',
    types: [
      'Colorless'
    ],
    supertype: 'Pokémon',
    subtype: 'Basic',
    hp: '40',
    number: '107',
    artist: 'Kagemaru Himeno',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    attacks: [
      {
        cost: [
          'Water',
          'Lightning'
        ],
        name: 'Dragon Smash',
        text: 'Flip a coin. If tails, this attack does nothing.',
        damage: '',
        convertedEnergyCost: 2
      }
    ]
  },
  {
    id: 'ecard1-108',
    name: 'Ekans',
    nationalPokedexNumber: 23,
    imageUrl: 'https://images.pokemontcg.io/ecard1/108.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/108_hires.png',
    types: [
      'Grass'
    ],
    supertype: 'Pokémon',
    subtype: 'Basic',
    hp: '50',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '108',
    artist: 'Kyoko Umemoto',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    attacks: [
      {
        cost: [
          'Grass'
        ],
        name: 'Poison Sting',
        text: 'Flip a coin. If heads, the Defending Pokémon is now Poisoned.',
        damage: '',
        convertedEnergyCost: 1
      }
    ],
    weaknesses: [
      {
        type: 'Psychic',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard1-109',
    name: 'Gastly',
    nationalPokedexNumber: 92,
    imageUrl: 'https://images.pokemontcg.io/ecard1/109.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/109_hires.png',
    types: [
      'Psychic'
    ],
    supertype: 'Pokémon',
    subtype: 'Basic',
    hp: '40',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '109',
    artist: 'Yukiko Baba',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    attacks: [
      {
        cost: [
          'Psychic'
        ],
        name: 'Bad Dream',
        text: 'Flip a coin. If heads the Defending Pokémon is now Asleep. If tails, the Defending Pokémon is now Confused.',
        damage: '',
        convertedEnergyCost: 1
      }
    ],
    resistances: [
      {
        type: 'Fighting',
        value: '-30'
      }
    ],
    weaknesses: [
      {
        type: 'Dark',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard1-110',
    name: 'Geodude',
    nationalPokedexNumber: 74,
    imageUrl: 'https://images.pokemontcg.io/ecard1/110.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/110_hires.png',
    types: [
      'Fighting'
    ],
    supertype: 'Pokémon',
    subtype: 'Basic',
    hp: '50',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '110',
    artist: 'Aya Kusube',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    attacks: [
      {
        cost: [
          'Fighting'
        ],
        name: 'Rock Hurl',
        text: 'Don\'t apply Resistance.',
        damage: '10',
        convertedEnergyCost: 1
      }
    ],
    weaknesses: [
      {
        type: 'Water',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard1-111',
    name: 'Goldeen',
    nationalPokedexNumber: 118,
    imageUrl: 'https://images.pokemontcg.io/ecard1/111.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/111_hires.png',
    types: [
      'Water'
    ],
    supertype: 'Pokémon',
    subtype: 'Basic',
    hp: '50',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '111',
    artist: 'Masako Yamashita',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Splash',
        text: '',
        damage: '10',
        convertedEnergyCost: 1
      }
    ],
    weaknesses: [
      {
        type: 'Lightning',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard1-112',
    name: 'Hoppip',
    nationalPokedexNumber: 187,
    imageUrl: 'https://images.pokemontcg.io/ecard1/112.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/112_hires.png',
    types: [
      'Grass'
    ],
    supertype: 'Pokémon',
    subtype: 'Basic',
    hp: '40',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '112',
    artist: 'Toshinao Aoki',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    attacks: [
      {
        cost: [
          'Grass'
        ],
        name: 'Sleep Powder',
        text: 'Flip a coin. If heads, the Defending Pokémon is now Asleep.',
        damage: '10',
        convertedEnergyCost: 1
      }
    ],
    resistances: [
      {
        type: 'Water',
        value: '-30'
      }
    ],
    weaknesses: [
      {
        type: 'Fire',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard1-113',
    name: 'Houndour',
    nationalPokedexNumber: 228,
    imageUrl: 'https://images.pokemontcg.io/ecard1/113.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/113_hires.png',
    types: [
      'Darkness'
    ],
    supertype: 'Pokémon',
    subtype: 'Basic',
    hp: '50',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '113',
    artist: 'Mitsuhiro Arita',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Bite',
        text: '',
        damage: '10',
        convertedEnergyCost: 1
      }
    ],
    resistances: [
      {
        type: 'Psychic',
        value: '-30'
      }
    ],
    weaknesses: [
      {
        type: 'Fighting',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard1-114',
    name: 'Koffing',
    nationalPokedexNumber: 109,
    imageUrl: 'https://images.pokemontcg.io/ecard1/114.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/114_hires.png',
    types: [
      'Grass'
    ],
    supertype: 'Pokémon',
    subtype: 'Basic',
    hp: '50',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '114',
    artist: 'Hajime Kusajima',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Ram',
        text: '',
        damage: '10',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Grass'
        ],
        name: 'Confusion Gas',
        text: 'Flip a coin. If heads, the Defending Pokémon is now Confused.',
        damage: '',
        convertedEnergyCost: 1
      }
    ],
    weaknesses: [
      {
        type: 'Psychic',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard1-115',
    name: 'Krabby',
    nationalPokedexNumber: 98,
    imageUrl: 'https://images.pokemontcg.io/ecard1/115.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/115_hires.png',
    types: [
      'Water'
    ],
    supertype: 'Pokémon',
    subtype: 'Basic',
    hp: '50',
    retreatCost: [
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 2,
    number: '115',
    artist: 'Shin-ichi Yoshida',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    attacks: [
      {
        cost: [
          'Grass',
          'Grass'
        ],
        name: 'Crabhammer',
        text: '',
        damage: '30',
        convertedEnergyCost: 2
      }
    ],
    weaknesses: [
      {
        type: 'Lightning',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard1-116',
    name: 'Larvitar',
    nationalPokedexNumber: 246,
    imageUrl: 'https://images.pokemontcg.io/ecard1/116.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/116_hires.png',
    types: [
      'Fighting'
    ],
    supertype: 'Pokémon',
    subtype: 'Basic',
    hp: '50',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '116',
    artist: 'Yukiko Baba',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    attacks: [
      {
        cost: [
          'Fighting'
        ],
        name: 'Bite',
        text: '',
        damage: '10',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Fighting',
          'Colorless'
        ],
        name: 'Mud Slap',
        text: '',
        damage: '20',
        convertedEnergyCost: 2
      }
    ],
    weaknesses: [
      {
        type: 'Water',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard1-117',
    name: 'Machop',
    nationalPokedexNumber: 66,
    imageUrl: 'https://images.pokemontcg.io/ecard1/117.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/117_hires.png',
    types: [
      'Fighting'
    ],
    supertype: 'Pokémon',
    subtype: 'Basic',
    hp: '50',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '117',
    artist: 'Shin-ichi Yoshida',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    attacks: [
      {
        cost: [
          'Fighting'
        ],
        name: 'Punch',
        text: '',
        damage: '10',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Colorless',
          'Colorless'
        ],
        name: 'Double Chop',
        text: 'Flip 2 coins. This attack does 20 damage times the number of heads.',
        damage: '20×',
        convertedEnergyCost: 2
      }
    ],
    weaknesses: [
      {
        type: 'Psychic',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard1-118',
    name: 'Magikarp',
    nationalPokedexNumber: 129,
    imageUrl: 'https://images.pokemontcg.io/ecard1/118.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/118_hires.png',
    types: [
      'Water'
    ],
    supertype: 'Pokémon',
    subtype: 'Basic',
    hp: '30',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '118',
    artist: 'Tomokazu Komiya',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Flail',
        text: 'This attack does 10 damage times the number of damage counters on Magikarp.',
        damage: '10×',
        convertedEnergyCost: 1
      }
    ],
    weaknesses: [
      {
        type: 'Lightning',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard1-119',
    name: 'Mareep',
    nationalPokedexNumber: 179,
    imageUrl: 'https://images.pokemontcg.io/ecard1/119.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/119_hires.png',
    types: [
      'Lightning'
    ],
    supertype: 'Pokémon',
    subtype: 'Basic',
    hp: '40',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '119',
    artist: 'Sumiyoshi Kizuki',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    attacks: [
      {
        cost: [
          'Lightning'
        ],
        name: 'Thundershock',
        text: 'Flip a coin. If heads, the Defending Pokémon is now Paralyzed.',
        damage: '10',
        convertedEnergyCost: 1
      }
    ],
    weaknesses: [
      {
        type: 'Fighting',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard1-120',
    name: 'Marill',
    nationalPokedexNumber: 183,
    imageUrl: 'https://images.pokemontcg.io/ecard1/120.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/120_hires.png',
    types: [
      'Water'
    ],
    supertype: 'Pokémon',
    subtype: 'Basic',
    hp: '60',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '120',
    artist: 'Satoshi Ohta',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    attacks: [
      {
        cost: [
          'Water'
        ],
        name: 'Bubble',
        text: 'Flip a coin. If heads, the Defending Pokémon is now Paralyzed.',
        damage: '10',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Colorless',
          'Colorless'
        ],
        name: 'Tail Slap',
        text: '',
        damage: '20',
        convertedEnergyCost: 2
      }
    ],
    weaknesses: [
      {
        type: 'Lightning',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard1-121',
    name: 'Meowth',
    nationalPokedexNumber: 52,
    imageUrl: 'https://images.pokemontcg.io/ecard1/121.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/121_hires.png',
    types: [
      'Colorless'
    ],
    supertype: 'Pokémon',
    subtype: 'Basic',
    hp: '50',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '121',
    artist: 'Hironobu Yoshida',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Double Scratch',
        text: 'Flip 2 coins. This attack does 10 damage times the number of heads.',
        damage: '10×',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Colorless',
          'Colorless'
        ],
        name: 'Pay Day',
        text: 'Flip a coin. If heads, draw a card.',
        damage: '10',
        convertedEnergyCost: 2
      }
    ],
    weaknesses: [
      {
        type: 'Fighting',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard1-122',
    name: 'Oddish',
    nationalPokedexNumber: 43,
    imageUrl: 'https://images.pokemontcg.io/ecard1/122.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/122_hires.png',
    types: [
      'Grass'
    ],
    supertype: 'Pokémon',
    subtype: 'Basic',
    hp: '50',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '122',
    artist: 'Masako Yamashita',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Tackle',
        text: '',
        damage: '10',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Grass',
          'Colorless'
        ],
        name: 'Sleep Seed',
        text: 'The Defending Pokémon is now Asleep.',
        damage: '10',
        convertedEnergyCost: 2
      }
    ],
    weaknesses: [
      {
        type: 'Psychic',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard1-123',
    name: 'Pidgey',
    nationalPokedexNumber: 16,
    imageUrl: 'https://images.pokemontcg.io/ecard1/123.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/123_hires.png',
    types: [
      'Colorless'
    ],
    supertype: 'Pokémon',
    subtype: 'Basic',
    hp: '40',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '123',
    artist: 'Tomokazu Komiya',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Peck',
        text: '',
        damage: '10',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Colorless',
          'Colorless'
        ],
        name: 'Fury Strikes',
        text: 'Flip 3 coins. This attack does 10 damage times the number of heads.',
        damage: '10×',
        convertedEnergyCost: 2
      }
    ],
    resistances: [
      {
        type: 'Fighting',
        value: '-30'
      }
    ],
    weaknesses: [
      {
        type: 'Lightning',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard1-124',
    name: 'Pikachu',
    nationalPokedexNumber: 25,
    imageUrl: 'https://images.pokemontcg.io/ecard1/124.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/124_hires.png',
    types: [
      'Lightning'
    ],
    supertype: 'Pokémon',
    subtype: 'Basic',
    hp: '50',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '124',
    artist: 'Atsuko Nishida',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Lightning Tail',
        text: 'Flip a coin. If heads, the Defending Pokémon is now Paralyzed.',
        damage: '',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Lightning',
          'Colorless'
        ],
        name: 'Tackle',
        text: '',
        damage: '20',
        convertedEnergyCost: 2
      }
    ],
    weaknesses: [
      {
        type: 'Fighting',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard1-125',
    name: 'Poliwag',
    nationalPokedexNumber: 60,
    imageUrl: 'https://images.pokemontcg.io/ecard1/125.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/125_hires.png',
    types: [
      'Water'
    ],
    supertype: 'Pokémon',
    subtype: 'Basic',
    hp: '50',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '125',
    artist: 'Yuka Morii',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Headbutt',
        text: '',
        damage: '10',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Water',
          'Colorless'
        ],
        name: 'Rollout',
        text: '',
        damage: '20',
        convertedEnergyCost: 2
      }
    ],
    weaknesses: [
      {
        type: 'Lightning',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard1-126',
    name: 'Ponyta',
    nationalPokedexNumber: 77,
    imageUrl: 'https://images.pokemontcg.io/ecard1/126.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/126_hires.png',
    types: [
      'Fire'
    ],
    supertype: 'Pokémon',
    subtype: 'Basic',
    hp: '40',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '126',
    artist: 'Kagemaru Himeno',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    attacks: [
      {
        cost: [
          'Fire'
        ],
        name: 'Singe',
        text: 'Flip a coin. If heads, the Defending Pokémon is now Burned.',
        damage: '',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Colorless',
          'Colorless'
        ],
        name: 'Smash Kick',
        text: '',
        damage: '20',
        convertedEnergyCost: 2
      }
    ],
    weaknesses: [
      {
        type: 'Water',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard1-127',
    name: 'Qwilfish',
    nationalPokedexNumber: 211,
    imageUrl: 'https://images.pokemontcg.io/ecard1/127.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/127_hires.png',
    types: [
      'Water'
    ],
    supertype: 'Pokémon',
    subtype: 'Basic',
    hp: '60',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '127',
    artist: 'Toshinao Aoki',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    attacks: [
      {
        cost: [
          'Water',
          'Water'
        ],
        name: 'Stun Needle',
        text: 'Flip a coin. If heads, the Defending Pokémon is now Paralyzed.',
        damage: '20',
        convertedEnergyCost: 2
      }
    ],
    weaknesses: [
      {
        type: 'Lightning',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard1-128',
    name: 'Rattata',
    nationalPokedexNumber: 19,
    imageUrl: 'https://images.pokemontcg.io/ecard1/128.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/128_hires.png',
    types: [
      'Colorless'
    ],
    supertype: 'Pokémon',
    subtype: 'Basic',
    hp: '30',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '128',
    artist: 'Yuka Morii',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Quick Attack',
        text: 'Flip a coin. If heads, this attack does 10 damage plus 20 more damage.',
        damage: '10+',
        convertedEnergyCost: 1
      }
    ],
    weaknesses: [
      {
        type: 'Fighting',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard1-129',
    name: 'Shellder',
    nationalPokedexNumber: 90,
    imageUrl: 'https://images.pokemontcg.io/ecard1/129.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/129_hires.png',
    types: [
      'Water'
    ],
    supertype: 'Pokémon',
    subtype: 'Basic',
    hp: '50',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '129',
    artist: 'Sumiyoshi Kizuki',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    attacks: [
      {
        cost: [
          'Water'
        ],
        name: 'Irongrip',
        text: '',
        damage: '10',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Colorless',
          'Colorless'
        ],
        name: 'Lick',
        text: 'Flip a coin. If heads, the Defending Pokémon is now Paralyzed.',
        damage: '10',
        convertedEnergyCost: 2
      }
    ],
    weaknesses: [
      {
        type: 'Lightning',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard1-130',
    name: 'Spearow',
    nationalPokedexNumber: 21,
    imageUrl: 'https://images.pokemontcg.io/ecard1/130.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/130_hires.png',
    types: [
      'Colorless'
    ],
    supertype: 'Pokémon',
    subtype: 'Basic',
    hp: '40',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '130',
    artist: 'Kyoko Umemoto',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Razor Wind',
        text: 'Flip a coin. If tails, this attack does nothing.',
        damage: '',
        convertedEnergyCost: 1
      }
    ],
    resistances: [
      {
        type: 'Fighting',
        value: '-30'
      }
    ],
    weaknesses: [
      {
        type: 'Lightning',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard1-131',
    name: 'Squirtle',
    nationalPokedexNumber: 7,
    imageUrl: 'https://images.pokemontcg.io/ecard1/131.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/131_hires.png',
    types: [
      'Water'
    ],
    supertype: 'Pokémon',
    subtype: 'Basic',
    hp: '50',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '131',
    artist: 'Yuka Morii',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    attacks: [
      {
        cost: [
          'Water'
        ],
        name: 'Wave Splash',
        text: '',
        damage: '10',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Water',
          'Colorless'
        ],
        name: 'Doubleslap',
        text: 'Flip 2 coins. This attack does 20 damage times the number of heads.',
        damage: '20×',
        convertedEnergyCost: 2
      }
    ],
    weaknesses: [
      {
        type: 'Lightning',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard1-132',
    name: 'Squirtle',
    nationalPokedexNumber: 7,
    imageUrl: 'https://images.pokemontcg.io/ecard1/132.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/132_hires.png',
    types: [
      'Water'
    ],
    supertype: 'Pokémon',
    subtype: 'Basic',
    hp: '40',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '132',
    artist: 'Kyoko Umemoto',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Headbutt',
        text: '',
        damage: '10',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Water',
          'Water'
        ],
        name: 'Bubblebeam',
        text: 'Flip a coin. If heads, the Defending Pokémon is now Paralyzed.',
        damage: '20',
        convertedEnergyCost: 2
      }
    ],
    weaknesses: [
      {
        type: 'Lightning',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard1-133',
    name: 'Tauros',
    nationalPokedexNumber: 128,
    imageUrl: 'https://images.pokemontcg.io/ecard1/133.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/133_hires.png',
    types: [
      'Colorless'
    ],
    supertype: 'Pokémon',
    subtype: 'Basic',
    hp: '70',
    retreatCost: [
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 2,
    number: '133',
    artist: 'Yuichi Sawayama',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    attacks: [
      {
        cost: [
          'Colorless',
          'Colorless'
        ],
        name: 'Horn Hazard',
        text: 'Flip a coin. If tails, this attack does nothing.',
        damage: '',
        convertedEnergyCost: 2
      },
      {
        cost: [
          'Colorless',
          'Colorless'
        ],
        name: 'Take Down',
        text: 'Tauros does 20 Damage to itself.',
        damage: '30',
        convertedEnergyCost: 2
      }
    ],
    weaknesses: [
      {
        type: 'Fighting',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard1-134',
    name: 'Totodile',
    nationalPokedexNumber: 158,
    imageUrl: 'https://images.pokemontcg.io/ecard1/134.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/134_hires.png',
    types: [
      'Water'
    ],
    supertype: 'Pokémon',
    subtype: 'Basic',
    hp: '50',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '134',
    artist: 'Mitsuhiro Arita',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    attacks: [
      {
        cost: [
          'Water'
        ],
        name: 'Surf',
        text: '',
        damage: '10',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Colorless',
          'Colorless'
        ],
        name: 'Double Scratch',
        text: 'Flip 2 coins. This attack does 20 damage times the number of heads.',
        damage: '20×',
        convertedEnergyCost: 2
      }
    ],
    weaknesses: [
      {
        type: 'Lightning',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard1-135',
    name: 'Totodile',
    nationalPokedexNumber: 158,
    imageUrl: 'https://images.pokemontcg.io/ecard1/135.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/135_hires.png',
    types: [
      'Water'
    ],
    supertype: 'Pokémon',
    subtype: 'Basic',
    hp: '50',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '135',
    artist: 'Aimi Tomita',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Paralyzing Gaze',
        text: 'Flip a coin. If heads, the Defending Pokémon is now Paralyzed.',
        damage: '',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Water',
          'Colorless'
        ],
        name: 'Bite',
        text: '',
        damage: '20',
        convertedEnergyCost: 2
      }
    ],
    weaknesses: [
      {
        type: 'Lightning',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard1-136',
    name: 'Vulpix',
    nationalPokedexNumber: 37,
    imageUrl: 'https://images.pokemontcg.io/ecard1/136.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/136_hires.png',
    types: [
      'Fire'
    ],
    supertype: 'Pokémon',
    subtype: 'Basic',
    hp: '50',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '136',
    artist: 'Yuka Morii',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Tail Shake',
        text: 'The Defending Pokémon is now Asleep.',
        damage: '',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Fire',
          'Colorless'
        ],
        name: 'Flare',
        text: '',
        damage: '20',
        convertedEnergyCost: 2
      }
    ],
    weaknesses: [
      {
        type: 'Water',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard1-137',
    name: 'Bill\'s Maintenance',
    imageUrl: 'https://images.pokemontcg.io/ecard1/137.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/137_hires.png',
    supertype: 'Trainer',
    subtype: 'Supporter',
    number: '137',
    artist: 'Ken Sugimori',
    rarity: 'Uncommon',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    text: [
      'If you have any cards in your hand, shuffle 1 of them into your deck, then draw 3 cards.'
    ]
  },
  {
    id: 'ecard1-138',
    name: 'Copycat',
    imageUrl: 'https://images.pokemontcg.io/ecard1/138.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/138_hires.png',
    supertype: 'Trainer',
    subtype: 'Supporter',
    number: '138',
    artist: 'Ken Sugimori',
    rarity: 'Uncommon',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    text: [
      'Shuffle your hand into your deck. Then, count the number of cards in your opponent\'s hand and draw that many cards.'
    ]
  },
  {
    id: 'ecard1-139',
    name: 'Dual Ball',
    imageUrl: 'https://images.pokemontcg.io/ecard1/139.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/139_hires.png',
    supertype: 'Trainer',
    subtype: '',
    number: '139',
    artist: '"Big Mama" Tagawa',
    rarity: 'Uncommon',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    text: [
      'Flip 2 coins. For each heads, search your deck for a Basic Pokémon card other than a Baby Pokémon card, show it to your opponent, and put it into your hand. Shuffle your deck afterward.'
    ]
  },
  {
    id: 'ecard1-140',
    name: 'Energy Removal 2',
    imageUrl: 'https://images.pokemontcg.io/ecard1/140.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/140_hires.png',
    supertype: 'Trainer',
    subtype: '',
    number: '140',
    artist: 'Keiji Kinebuchi',
    rarity: 'Uncommon',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    text: [
      'Flip a coin. If heads, choose 1 Energy card attached to 1 of your opponent\'s Pokémon and discard it.'
    ]
  },
  {
    id: 'ecard1-141',
    name: 'Energy Restore',
    imageUrl: 'https://images.pokemontcg.io/ecard1/141.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/141_hires.png',
    supertype: 'Trainer',
    subtype: '',
    number: '141',
    artist: 'Hideyuki Nakajima',
    rarity: 'Uncommon',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    text: [
      'Flip 3 coins. For each heads, put a basic Energy card from your discard pile into your hand. If you don\'t have that many basic Energy cards in your discard pile, put all of them into your hand.'
    ]
  },
  {
    id: 'ecard1-142',
    name: 'Mary\'s Impulse',
    imageUrl: 'https://images.pokemontcg.io/ecard1/142.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/142_hires.png',
    supertype: 'Trainer',
    subtype: 'Supporter',
    number: '142',
    artist: 'Ken Sugimori',
    rarity: 'Uncommon',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    text: [
      'Flip a coin until you get tails. For each heads, draw 2 cards.'
    ]
  },
  {
    id: 'ecard1-143',
    name: 'Master Ball',
    imageUrl: 'https://images.pokemontcg.io/ecard1/143.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/143_hires.png',
    supertype: 'Trainer',
    subtype: '',
    number: '143',
    artist: 'Keiji Kinebuchi',
    rarity: 'Uncommon',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    text: [
      'Look at 7 cards from the top of your deck. You may choose a Basic Pokémon or Evolution card from those cards, show it to your opponent, and put it into your hand. Shuffle the rest into your deck.'
    ]
  },
  {
    id: 'ecard1-144',
    name: 'Multi Technical Machine 01',
    imageUrl: 'https://images.pokemontcg.io/ecard1/144.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/144_hires.png',
    supertype: 'Trainer',
    subtype: 'Technical Machine',
    number: '144',
    artist: '"Big Mama" Tagawa',
    rarity: 'Uncommon',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    text: [
      'The Defending Pokémon is now Paralyzed.'
    ]
  },
  {
    id: 'ecard1-145',
    name: 'Pokémon Nurse',
    imageUrl: 'https://images.pokemontcg.io/ecard1/145.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/145_hires.png',
    supertype: 'Trainer',
    subtype: 'Supporter',
    number: '145',
    artist: 'Ken Sugimori',
    rarity: 'Uncommon',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    text: [
      'Remove all damage counters from one of your Pokémon. Then discard all Energy cards attached to it, if any.'
    ]
  },
  {
    id: 'ecard1-146',
    name: 'Pokémon Reversal',
    imageUrl: 'https://images.pokemontcg.io/ecard1/146.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/146_hires.png',
    supertype: 'Trainer',
    subtype: '',
    number: '146',
    artist: '"Big Mama" Tagawa',
    rarity: 'Uncommon',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    text: [
      'Choose one of your opponent\'s Benched Pokémon. Flip a coin. If heads, switch that Pokémon with the Defending Pokémon.'
    ]
  },
  {
    id: 'ecard1-147',
    name: 'Power Charge',
    imageUrl: 'https://images.pokemontcg.io/ecard1/147.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/147_hires.png',
    supertype: 'Trainer',
    subtype: '',
    number: '147',
    artist: 'Keiji Kinebuchi',
    rarity: 'Uncommon',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    text: [
      'Flip a coin. If heads, shuffle 2 Energy cards from your discard pile into your deck (1 if you have only 1).'
    ]
  },
  {
    id: 'ecard1-148',
    name: 'Professor Elm\'s Training Method',
    imageUrl: 'https://images.pokemontcg.io/ecard1/148.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/148_hires.png',
    supertype: 'Trainer',
    subtype: 'Supporter',
    number: '148',
    artist: 'Ken Sugimori',
    rarity: 'Uncommon',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    text: [
      'Search your deck for an Evolution card, show it to your opponent, and put it into your hand. Shuffle your deck afterward.'
    ]
  },
  {
    id: 'ecard1-149',
    name: 'Professor Oak\'s Research',
    imageUrl: 'https://images.pokemontcg.io/ecard1/149.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/149_hires.png',
    supertype: 'Trainer',
    subtype: 'Supporter',
    number: '149',
    artist: 'Ken Sugimori',
    rarity: 'Uncommon',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    text: [
      'Shuffle your hand into your deck, then draw 5 cards.'
    ]
  },
  {
    id: 'ecard1-150',
    name: 'Strength Charm',
    imageUrl: 'https://images.pokemontcg.io/ecard1/150.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/150_hires.png',
    supertype: 'Trainer',
    subtype: 'Pokémon Tool',
    number: '150',
    artist: 'Keiji Kinebuchi',
    rarity: 'Uncommon',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    text: [
      'Whenever an attack from the Pokémon that Strength Charm is attached to does damage (after applying Weakness and Resistance), the attack does 10 more damage. At the end of the turn in which this happens, discard Strength Charm.'
    ]
  },
  {
    id: 'ecard1-151',
    name: 'Super Scoop Up',
    imageUrl: 'https://images.pokemontcg.io/ecard1/151.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/151_hires.png',
    supertype: 'Trainer',
    subtype: '',
    number: '151',
    artist: 'Keiji Kinebuchi',
    rarity: 'Uncommon',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    text: [
      'Flip a coin. If heads, return 1 of your Pokémon and all cards attached to it to your hand.'
    ]
  },
  {
    id: 'ecard1-152',
    name: 'Warp Point',
    imageUrl: 'https://images.pokemontcg.io/ecard1/152.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/152_hires.png',
    supertype: 'Trainer',
    subtype: '',
    number: '152',
    artist: 'Keiji Kinebuchi',
    rarity: 'Uncommon',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    text: [
      'Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon, if any; then you switch your Active Pokémon with 1 of your Benched Pokémon, if any.'
    ]
  },
  {
    id: 'ecard1-153',
    name: 'Energy Search',
    imageUrl: 'https://images.pokemontcg.io/ecard1/153.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/153_hires.png',
    supertype: 'Trainer',
    subtype: '',
    number: '153',
    artist: 'Kai Ishikawa',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    text: [
      'Search your deck for a basic Energy card, show it to your opponent, and put it into your hand. Shuffle your deck afterward.'
    ]
  },
  {
    id: 'ecard1-154',
    name: 'Full Heal',
    imageUrl: 'https://images.pokemontcg.io/ecard1/154.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/154_hires.png',
    supertype: 'Trainer',
    subtype: '',
    number: '154',
    artist: 'Keiji Kinebuchi',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    text: [
      'Remove all Special Conditions from your Active Pokémon.'
    ]
  },
  {
    id: 'ecard1-155',
    name: 'Moo-Moo Milk',
    imageUrl: 'https://images.pokemontcg.io/ecard1/155.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/155_hires.png',
    supertype: 'Trainer',
    subtype: '',
    number: '155',
    artist: 'Tomokazu Komiya',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    text: [
      'Choose 1 of your Pokémon. Flip 2 coins. Remove 2 damage counters times the number of heads from that Pokémon. If the Pokémon has fewer damage counters than that, remove all of them.'
    ]
  },
  {
    id: 'ecard1-156',
    name: 'Potion',
    imageUrl: 'https://images.pokemontcg.io/ecard1/156.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/156_hires.png',
    supertype: 'Trainer',
    subtype: '',
    number: '156',
    artist: 'Keiji Kinebuchi',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    text: [
      'Remove 2 damage counters from 1 of your Pokémon (1 if it has only 1).'
    ]
  },
  {
    id: 'ecard1-157',
    name: 'Switch',
    imageUrl: 'https://images.pokemontcg.io/ecard1/157.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/157_hires.png',
    supertype: 'Trainer',
    subtype: '',
    number: '157',
    artist: 'Keiji Kinebuchi',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    text: [
      'Switch your Active Pokémon with 1 of your Benched Pokémon.'
    ]
  },
  {
    id: 'ecard1-158',
    name: 'Darkness Energy',
    imageUrl: 'https://images.pokemontcg.io/ecard1/158.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/158_hires.png',
    supertype: 'Energy',
    subtype: 'Special',
    number: '158',
    artist: 'Milky Isobe',
    rarity: 'Rare',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    text: [
      'If the Pokémon Darkness Energy is attached to does damage with an attack (after applying Weakness and Resistance), the attack does 10 more damage. At the end of every turn, put 1 damage counter on the Pokémon Darkness Energy is attached to, unless it\'s Darkness or has Dark in its name. Darkness Energy provides Darkness Energy. (Doesn\'t count as a basic Energy card.)'
    ]
  },
  {
    id: 'ecard1-159',
    name: 'Metal Energy',
    imageUrl: 'https://images.pokemontcg.io/ecard1/159.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/159_hires.png',
    supertype: 'Energy',
    subtype: 'Special',
    number: '159',
    artist: 'Milky Isobe',
    rarity: 'Rare',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1',
    text: [
      'Damage done by attacks to the Pokémon Metal Energy is attached to is reduced by 10 (after applying Weakness and Resistance). If the Pokémon Metal Energy is attached to isn\'t Metal, whenever it damages a Pokémon by an attack, reduce that damage by 10 (after applying Weakness and Resistance). Metal Energy provides Metal Energy. (Doesn\'t count as a basic Energy card.)'
    ]
  },
  {
    id: 'ecard1-160',
    name: 'Fighting Energy',
    imageUrl: 'https://images.pokemontcg.io/ecard1/160.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/160_hires.png',
    supertype: 'Energy',
    subtype: 'Basic',
    number: '160',
    artist: 'Keiji Kinebuchi',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1'
  },
  {
    id: 'ecard1-161',
    name: 'Fire Energy',
    imageUrl: 'https://images.pokemontcg.io/ecard1/161.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/161_hires.png',
    supertype: 'Energy',
    subtype: 'Basic',
    number: '161',
    artist: 'Keiji Kinebuchi',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1'
  },
  {
    id: 'ecard1-162',
    name: 'Grass Energy',
    imageUrl: 'https://images.pokemontcg.io/ecard1/162.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/162_hires.png',
    supertype: 'Energy',
    subtype: 'Basic',
    number: '162',
    artist: 'Keiji Kinebuchi',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1'
  },
  {
    id: 'ecard1-163',
    name: 'Lightning Energy',
    imageUrl: 'https://images.pokemontcg.io/ecard1/163.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/163_hires.png',
    supertype: 'Energy',
    subtype: 'Basic',
    number: '163',
    artist: 'Keiji Kinebuchi',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1'
  },
  {
    id: 'ecard1-164',
    name: 'Psychic Energy',
    imageUrl: 'https://images.pokemontcg.io/ecard1/164.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/164_hires.png',
    supertype: 'Energy',
    subtype: 'Basic',
    number: '164',
    artist: 'Keiji Kinebuchi',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1'
  },
  {
    id: 'ecard1-165',
    name: 'Water Energy',
    imageUrl: 'https://images.pokemontcg.io/ecard1/165.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard1/165_hires.png',
    supertype: 'Energy',
    subtype: 'Basic',
    number: '165',
    artist: 'Keiji Kinebuchi',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Expedition Base Set',
    setCode: 'ecard1'
  }
]