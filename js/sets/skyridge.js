const skyridgeCards = [
  {
    id: 'ecard3-1',
    name: 'Aerodactyl',
    nationalPokedexNumber: 142,
    imageUrl: 'https://images.pokemontcg.io/ecard3/1.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/1_hires.png',
    types: [
      'Fighting'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    ability: {
      name: 'Ancient Wind',
      text: 'Once during your turn (before you attack) if Aerodactyl is your Active Pokémon, you may ignore all Poké-Bodies until the end of your turn. This power can\'t be used if Aerodactyl is affected by a Special Condition.',
      type: 'Poké-Power'
    },
    hp: '70',
    retreatCost: [
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 2,
    number: '1',
    artist: 'Toshinao Aoki',
    rarity: 'Rare',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Fighting',
          'Colorless'
        ],
        name: 'Rising Lunge',
        text: 'Flip a coin. If heads, this attack does 20 damage plus 20 more damage.',
        damage: '20+',
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
    id: 'ecard3-2',
    name: 'Alakazam',
    nationalPokedexNumber: 65,
    imageUrl: 'https://images.pokemontcg.io/ecard3/2.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/2_hires.png',
    types: [
      'Psychic'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 2',
    evolvesFrom: 'Kadabra',
    ability: {
      name: 'Energy Jump',
      text: 'Once during your turn (before you attack) you may move an energy card from 1 of your Pokémon to another of your Pokémon. This power can\'t be used if Alakazam is affected by a Special Condition.',
      type: 'Poké-Power'
    },
    hp: '100',
    retreatCost: [
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 2,
    number: '2',
    artist: 'Kimiya Masago',
    rarity: 'Rare',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Colorless',
          'Colorless',
          'Colorless'
        ],
        name: 'Psychic',
        text: 'This attack does 30 damage plus 10 more damage for each energy card attached to the Defending Pokémon.',
        damage: '30+',
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
    id: 'ecard3-3',
    name: 'Arcanine',
    nationalPokedexNumber: 59,
    imageUrl: 'https://images.pokemontcg.io/ecard3/3.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/3_hires.png',
    types: [
      'Fire'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Growlithe',
    ability: {
      name: 'Energy Recharge',
      text: 'When you play Arcanine from your hand to evolve your Active Pokémon, you may flip 3 coins. For each heads, choose a basic energy card from your discard pile and attach it to Arcanine.',
      type: 'Poké-Power'
    },
    hp: '80',
    retreatCost: [
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 2,
    number: '3',
    artist: 'Aya Kusube',
    rarity: 'Rare',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Shake',
        text: 'Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon, if any.',
        damage: '10',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Fire',
          'Fire',
          'Colorless'
        ],
        name: 'White Flames',
        text: 'Discard all Fire Energy cards attached to Arcanine.',
        damage: '70',
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
    id: 'ecard3-4',
    name: 'Articuno',
    nationalPokedexNumber: 144,
    imageUrl: 'https://images.pokemontcg.io/ecard3/4.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/4_hires.png',
    types: [
      'Water'
    ],
    supertype: 'Pokémon',
    subtype: 'Basic',
    ability: {
      name: 'Water Immunity',
      text: 'You can\'t attach Water Energy cards from your hand to Articuno.',
      type: 'Poké-Body'
    },
    hp: '80',
    retreatCost: [
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 2,
    number: '4',
    artist: 'Hajime Kusajima',
    rarity: 'Rare',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Freeze Solid',
        text: 'If there are any Water Energy cards in your discard pile, flip a coin. If heads, attach 1 of them to Articuno.',
        damage: '10',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Water',
          'Water',
          'Colorless',
          'Colorless'
        ],
        name: 'Ice Cyclone',
        text: 'Flip a coin. If heads, this attack does 10 damage to each of your opponent\'s Benched Pokémon. If tails, this attack does 10 damage to each of your Pokémon in play. (Don\'t apply Weakness and Resistance for Benched Pokémon.)',
        damage: '50',
        convertedEnergyCost: 4
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
        type: 'Metal',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard3-5',
    name: 'Beedrill',
    nationalPokedexNumber: 15,
    imageUrl: 'https://images.pokemontcg.io/ecard3/5.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/5_hires.png',
    types: [
      'Grass'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 2',
    evolvesFrom: 'Kakuna',
    ability: {
      name: 'Venom Spray',
      text: 'When you play Beedrill from your hand to evolve your Active Pokémon, the Defending Pokémon is now Paralyzed and Poisoned.',
      type: 'Poké-Power'
    },
    hp: '80',
    number: '5',
    artist: 'Hikaru Koike',
    rarity: 'Rare',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Colorless',
          'Colorless'
        ],
        name: 'Needle Rush',
        text: 'Flip 4 coins. If you get 1 heads, this attack does 10 damage plus 10 more damage. If you get 2 heads, this attack does 10 damage plus 20 more damage. If you get 3 heads, this attack does 10 damage plus 50 more damage. If you get 4 heads, this attack does 10 damage plus 90 more damage.',
        damage: '10+',
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
    id: 'ecard3-6',
    name: 'Crobat',
    nationalPokedexNumber: 169,
    imageUrl: 'https://images.pokemontcg.io/ecard3/6.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/6_hires.png',
    types: [
      'Grass'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 2',
    evolvesFrom: 'Golbat',
    ability: {
      name: 'Carry Off',
      text: 'Once during your turn (before you attack) you may flip a coin. If heads, look at your opponent\'s hand. If your opponent has and Baby Pokémon, Basic Pokémon, of Evolution cards there, choose 1 of them. Your opponent shuffles that card into his or her deck. This power can\'t be used if Crobat is affected by a Special Condition.',
      type: 'Poké-Power'
    },
    hp: '90',
    number: '6',
    artist: 'Kimiya Masago',
    rarity: 'Rare',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Grass',
          'Colorless',
          'Colorless'
        ],
        name: 'Double Cross',
        text: 'Flip 2 coins. This attack does 40 damage times the number of heads. If both of them are tails, the defending Pokémon is now Confused and Poisoned.',
        damage: '40×',
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
    id: 'ecard3-7',
    name: 'Dewgong',
    nationalPokedexNumber: 87,
    imageUrl: 'https://images.pokemontcg.io/ecard3/7.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/7_hires.png',
    types: [
      'Water'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Seel',
    hp: '80',
    retreatCost: [
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 2,
    number: '7',
    artist: 'Kouki Saitou',
    rarity: 'Rare',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Water',
          'Colorless'
        ],
        name: 'Freeze Lock',
        text: 'Flip a coin. If heads, your opponent can\'t attach Energy cards from his or her hand to his or her Active Pokémon during his or her next turn.',
        damage: '20',
        convertedEnergyCost: 2
      },
      {
        cost: [
          'Water',
          'Water',
          'Colorless',
          'Colorless'
        ],
        name: 'Crushing Ice',
        text: 'This attack does 40 damage plus 10 more damage for each Energy in the Defending Pokémon\'s Retreat Cost. Damage is calculated using the Defending Pokémon\'s Retreat Cost after applying effects to the Retreat Cost.',
        damage: '40+',
        convertedEnergyCost: 4
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
    id: 'ecard3-8',
    name: 'Flareon',
    nationalPokedexNumber: 136,
    imageUrl: 'https://images.pokemontcg.io/ecard3/8.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/8_hires.png',
    types: [
      'Fire'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Eevee',
    ability: {
      name: 'Self Healing',
      text: 'Whenever you attach a Fire Energy card from your hand to Flareon, remove all Special Conditions affecting Flareon.',
      type: 'Poké-Body'
    },
    hp: '70',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '8',
    artist: 'Kyoko Umemoto',
    rarity: 'Rare',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Fire'
        ],
        name: 'Singe',
        text: 'The Defending Pokémon is now Burned.',
        damage: '',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Colorless',
          'Colorless',
          'Colorless'
        ],
        name: 'Burn Booster',
        text: 'Discard an Energy card attached to Flareon in order to use this attack. If the discarded card is a Fire Energy card, this attack does 40 damage plus 10 more damage.',
        damage: '40+',
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
    id: 'ecard3-9',
    name: 'Forretress',
    nationalPokedexNumber: 205,
    imageUrl: 'https://images.pokemontcg.io/ecard3/9.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/9_hires.png',
    types: [
      'Metal'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Pineco',
    hp: '70',
    retreatCost: [
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 2,
    number: '9',
    artist: 'Midori Harada',
    rarity: 'Rare',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Colorless',
          'Colorless'
        ],
        name: 'Spinning Blow',
        text: 'Flip 2 coins. This attack does 20 damage times the number of heads. If both coins are heads, switch Forretress with 1 of your Benched Pokémon.',
        damage: '20×',
        convertedEnergyCost: 2
      },
      {
        cost: [
          'Metal',
          'Colorless',
          'Colorless'
        ],
        name: 'Scatterbomb',
        text: 'Flip 2 coins. For each heads, do 10 damage to each of your opponent\'s Benched Pokémon. For each tails, do 10 damage to each of your own Benched Pokémon. (Don\'t apply Weakness or Resistance for Benched Pokémon.)',
        damage: '40',
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
    id: 'ecard3-10',
    name: 'Gengar',
    nationalPokedexNumber: 94,
    imageUrl: 'https://images.pokemontcg.io/ecard3/10.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/10_hires.png',
    types: [
      'Psychic'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 2',
    evolvesFrom: 'Haunter',
    ability: {
      name: 'Manipulate',
      text: 'When you play Gengar from your hand to evolve your Active Pokémon, you may put a Basic Pokémon (excluding Baby Pokémon) from your discard pile onto your bench. Then flip 3 coins. For each heads, choose a basic Energy card from your discard pile and attach it to that Pokémon.',
      type: 'Poké-Power'
    },
    hp: '100',
    retreatCost: [
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 2,
    number: '10',
    artist: 'Kyoko Umemoto',
    rarity: 'Rare',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Psychic',
          'Psychic',
          'Colorless',
          'Colorless'
        ],
        name: 'Hydrokinesis',
        text: 'Flip a coin. If heads, the Defending Pokémon is now Burned. If tails, the Defending Pokémon is now Confused.',
        damage: '40',
        convertedEnergyCost: 4
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
    id: 'ecard3-11',
    name: 'Gyarados',
    nationalPokedexNumber: 130,
    imageUrl: 'https://images.pokemontcg.io/ecard3/11.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/11_hires.png',
    types: [
      'Water'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Magikarp',
    ability: {
      name: 'Flame Vapor',
      text: 'When you play Gyarados from your hand to evolve your Active Pokémon, you may flip 2 coins. For each heads, discard an Energy card attached to the Defending Pokémon.',
      type: 'Poké-Power'
    },
    hp: '90',
    retreatCost: [
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 2,
    number: '11',
    artist: 'Kimiya Masago',
    rarity: 'Rare',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Water',
          'Colorless',
          'Colorless',
          'Colorless'
        ],
        name: 'Dragon\'s Vengeance',
        text: 'If Gyarados has 7 or more damage counters on it, this attack\'s base damage is 100.',
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
    id: 'ecard3-12',
    name: 'Houndoom',
    nationalPokedexNumber: 229,
    imageUrl: 'https://images.pokemontcg.io/ecard3/12.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/12_hires.png',
    types: [
      'Darkness'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Houndour',
    hp: '70',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '12',
    artist: 'Kimiya Masago',
    rarity: 'Rare',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Colorless',
          'Colorless'
        ],
        name: 'Ambush',
        text: 'Flip a coin. If heads, this attack does 10 damage plus 20 more damage.',
        damage: '10+',
        convertedEnergyCost: 2
      },
      {
        cost: [
          'Darkness',
          'Colorless',
          'Colorless'
        ],
        name: 'Lonely Fang',
        text: 'This attack does 30 damage plus 20 damage times the number of your opponent\'s Benched Pokémon minus the number of your Benched Pokémon. (For example, if your opponent has 3 Benched Pokémon and you have 1, this attack will do 30 damage plus 40 more damage.',
        damage: '30+',
        convertedEnergyCost: 3
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
    id: 'ecard3-13',
    name: 'Jolteon',
    nationalPokedexNumber: 135,
    imageUrl: 'https://images.pokemontcg.io/ecard3/13.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/13_hires.png',
    types: [
      'Lightning'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Eevee',
    ability: {
      name: 'Self Healing',
      text: 'Whenever you attach a Lightning Energy card from your hand to Jolteon, remove all Special Conditions affecting Jolteon.',
      type: 'Poké-Body'
    },
    hp: '70',
    number: '13',
    artist: 'Hikaru Koike',
    rarity: 'Rare',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Lightning'
        ],
        name: 'Thundershock',
        text: 'Flip a coin. If heads, the Defending Pokémon is now Paralyzed.',
        damage: '10',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Lightning',
          'Colorless',
          'Colorless'
        ],
        name: 'Thunderspark',
        text: 'This attack does 10 damage to each Benched Pokémon with at least 1 Energy card attached to it (yours and your opponent\'s).',
        damage: '40',
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
    id: 'ecard3-14',
    name: 'Kabutops',
    nationalPokedexNumber: 141,
    imageUrl: 'https://images.pokemontcg.io/ecard3/14.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/14_hires.png',
    types: [
      'Fighting'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 2',
    evolvesFrom: 'Kabuto',
    ability: {
      name: 'Primal Aura',
      text: 'As long as Kabutops is your Active Pokémon, neither player can play Basic Pokémon or Evolution cards from his or her hand to evolve Benched Pokémon.',
      type: 'Poké-Body'
    },
    hp: '90',
    retreatCost: [
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 2,
    number: '14',
    artist: 'Kouki Saitou',
    rarity: 'Rare',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Fighting',
          'Fighting',
          'Colorless'
        ],
        name: 'Dual Cut',
        text: 'Flip 2 coins. This attack does 50 damage times the number of heads.',
        damage: '50×',
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
    id: 'ecard3-15',
    name: 'Ledian',
    nationalPokedexNumber: 166,
    imageUrl: 'https://images.pokemontcg.io/ecard3/15.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/15_hires.png',
    types: [
      'Grass'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Ledyba',
    hp: '70',
    number: '15',
    artist: 'Hikaru Koike',
    rarity: 'Rare',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Pollen Shield',
        text: 'During your opponent\'s next turn, Ledian can\'t become affected by a Special Condition. (Any other effect of attacks, Poké',
        damage: '10',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Grass',
          'Grass',
          'Colorless'
        ],
        name: 'Swift',
        text: 'This attack\'s damage isn\'t affected by Weakness, Resistance, Poké-Powers, Poké-Bodies, or any other effects on the Defending Pokémon.',
        damage: '50',
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
    id: 'ecard3-16',
    name: 'Machamp',
    nationalPokedexNumber: 68,
    imageUrl: 'https://images.pokemontcg.io/ecard3/16.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/16_hires.png',
    types: [
      'Fighting'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 2',
    evolvesFrom: 'Machoke',
    ability: {
      name: 'Immunity',
      text: 'Prevent all effects of your opponent\'s attacks done to Machamp.',
      type: 'Poké-Body'
    },
    hp: '120',
    retreatCost: [
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 2,
    number: '16',
    artist: 'Naoyo Kimura',
    rarity: 'Rare',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Fighting',
          'Colorless'
        ],
        name: 'Drag Off',
        text: 'Before doing damage, if your opponent has any Benched Pokémon, choose 1 of them and switch it with the Defending Pokémon. If your opponent has no Benched Pokémon, ignore this effect.',
        damage: '20',
        convertedEnergyCost: 2
      },
      {
        cost: [
          'Fighting',
          'Fighting',
          'Colorless',
          'Colorless'
        ],
        name: 'Hurricane Punch',
        text: 'Flip 4 coins. This attack does 30 damage times the number of heads.',
        damage: '30×',
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
    id: 'ecard3-17',
    name: 'Magcargo',
    nationalPokedexNumber: 219,
    imageUrl: 'https://images.pokemontcg.io/ecard3/17.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/17_hires.png',
    types: [
      'Fire'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Slugma',
    hp: '80',
    retreatCost: [
      'Colorless',
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 3,
    number: '17',
    artist: 'Hajime Kusajima',
    rarity: 'Rare',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Colorless',
          'Colorless'
        ],
        name: 'Eruption',
        text: 'Each player discards the top card of his or her deck. This attack does 20 damage plus 20 more damage for each Energy card discarded in this way.',
        damage: '20+',
        convertedEnergyCost: 2
      },
      {
        cost: [
          'Fire',
          'Fire',
          'Colorless',
          'Colorless'
        ],
        name: 'Fire Stream',
        text: 'Discard a Fire Energy card attached to Magcargo in order to use this attack. If your opponent has any Benched Pokémon, this attack does 10 damage to each of them. (Don\'t apply Weakness or Resistance for Benched Pokémon.)',
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
    id: 'ecard3-18',
    name: 'Magcargo',
    nationalPokedexNumber: 219,
    imageUrl: 'https://images.pokemontcg.io/ecard3/18.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/18_hires.png',
    types: [
      'Fighting'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Slugma',
    ability: {
      name: 'Streaming Mantle',
      text: 'When you play Magcargo from your hand to evolve your Active Pokémon, you may discard the top 3 cards of your deck and then shuffle 3 basic energy cards from your discard pile into your deck. If you do, your opponent must do the same.',
      type: 'Poké-Power'
    },
    hp: '80',
    retreatCost: [
      'Colorless',
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 3,
    number: '18',
    artist: 'Mitsuhiro Arita',
    rarity: 'Rare',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Fighting',
          'Colorless',
          'Colorless'
        ],
        name: 'Crushing Lava',
        text: 'You may discard a Fire or Fighting basic Energy card attached to Magcargo. If you discard a Fire Energy card in this way, the Defending Pokémon is now Burned. If you discard a Fighting Energy card in this way, this attack does 40 damage plus 20 more damage.',
        damage: '40+',
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
    id: 'ecard3-19',
    name: 'Magneton',
    nationalPokedexNumber: 82,
    imageUrl: 'https://images.pokemontcg.io/ecard3/19.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/19_hires.png',
    types: [
      'Lightning'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Magnemite',
    ability: {
      name: 'Attract Energy',
      text: 'When you play Magneton from your hand to evolve 1 of your Pokémon, you may move any number of basic Energy cards attached to your other Pokémon to Magneton.',
      type: 'Poké-Power'
    },
    hp: '80',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '19',
    artist: 'Kouki Saitou',
    rarity: 'Rare',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Lightning',
          'Colorless',
          'Colorless'
        ],
        name: 'Electric Blast',
        text: 'You may discard all Lightning Energy cards attached to Magneton when you use this attack. If you do, put damage counters equal to the amount of Energy cards removed in this way on any number of your opponent\'s Benched Pokémon in the way you like. (For example, if you discard 3 Lightning Energy cards, you can put 1 damage counter on 1 of your opponent\'s Benched Pokémon and 2 on another.)',
        damage: '40',
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
    id: 'ecard3-20',
    name: 'Magneton',
    nationalPokedexNumber: 82,
    imageUrl: 'https://images.pokemontcg.io/ecard3/20.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/20_hires.png',
    types: [
      'Metal'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Magnemite',
    hp: '70',
    retreatCost: [
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 2,
    number: '20',
    artist: 'Kouki Saitou',
    rarity: 'Rare',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Colorless',
          'Colorless'
        ],
        name: 'Bounce Off',
        text: 'If Magneton and the Defending Pokémon don\'t have the same number of Energy cards attached to them, the player controlling the Active Pokémon with the fewest number of Energy cards attached to it switches 1 of his or her Benched Pokémon with his or her Active Pokémon.',
        damage: '20',
        convertedEnergyCost: 2
      },
      {
        cost: [
          'Metal',
          'Metal',
          'Colorless'
        ],
        name: 'Magnetic Wave',
        text: 'This attack does 30 damage plus 10 more damage times the number of your Benched Pokémon minus the number of your opponent\'s Benched Pokémon. (For example, if your opponent has 1 Benched Pokémon and you have 3, this attack will do 30 damage plus 20 more damage.)',
        damage: '30+',
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
    id: 'ecard3-21',
    name: 'Moltres',
    nationalPokedexNumber: 146,
    imageUrl: 'https://images.pokemontcg.io/ecard3/21.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/21_hires.png',
    types: [
      'Fire'
    ],
    supertype: 'Pokémon',
    subtype: 'Basic',
    ability: {
      name: 'Fire Immunity',
      text: 'You can\'t attach Fire Energy cards from your hand to Moltres.',
      type: 'Poké-Body'
    },
    hp: '80',
    retreatCost: [
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 2,
    number: '21',
    artist: 'Kouki Saitou',
    rarity: 'Rare',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Collect Fire',
        text: 'If there are any Fire Energy cards in your discard pile, flip a coin. If heads, attach 1 of them to Moltres.',
        damage: '10',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Fire',
          'Fire',
          'Colorless',
          'Colorless'
        ],
        name: 'Burning Tail',
        text: 'Flip a coin. If tails, discard a Fire Energy card attached to Moltres.',
        damage: '60',
        convertedEnergyCost: 4
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
        type: 'Water',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard3-22',
    name: 'Nidoqueen',
    nationalPokedexNumber: 31,
    imageUrl: 'https://images.pokemontcg.io/ecard3/22.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/22_hires.png',
    types: [
      'Grass'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 2',
    evolvesFrom: 'Nidorina',
    ability: {
      name: 'Evolution Helper',
      text: 'Once during your turn (before you attack) if Nidoqueen is on your bench, you may search your deck for a card that evolves from your Active Pokémon and attach it to your Active Pokémon. (this counts as evolving that Pokémon) Shuffle your deck afterward.',
      type: 'Poké-Power'
    },
    hp: '110',
    retreatCost: [
      'Colorless',
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 3,
    number: '22',
    artist: 'Mitsuhiro Arita',
    rarity: 'Rare',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Grass',
          'Colorless',
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
        type: 'Psychic',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard3-23',
    name: 'Omastar',
    nationalPokedexNumber: 139,
    imageUrl: 'https://images.pokemontcg.io/ecard3/23.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/23_hires.png',
    types: [
      'Water'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 2',
    evolvesFrom: 'Omanyte',
    ability: {
      name: 'Primal Stare',
      text: 'As long as Omastar is your Active Pokémon, your opponent can\'t play Basic Pokémon or Evolution cards from his or her hand to evolve his or her Active Pokémon.',
      type: 'Poké-Body'
    },
    hp: '90',
    retreatCost: [
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 2,
    number: '23',
    artist: 'Hajime Kusajima',
    rarity: 'Rare',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Water',
          'Water',
          'Colorless'
        ],
        name: 'Spook',
        text: 'The Defending Pokémon can\'t retreat during your opponent\'s next turn.',
        damage: '50',
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
    id: 'ecard3-24',
    name: 'Piloswine',
    nationalPokedexNumber: 221,
    imageUrl: 'https://images.pokemontcg.io/ecard3/24.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/24_hires.png',
    types: [
      'Water'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Swinub',
    hp: '90',
    retreatCost: [
      'Colorless',
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 3,
    number: '24',
    artist: 'Yuka Morii',
    rarity: 'Rare',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Water',
          'Colorless',
          'Colorless'
        ],
        name: 'Freezing Breath',
        text: 'Flip a coin. If heads, the Defending Pokémon is now Paralyzed. If tails, the Defending Pokémon is now Asleep.',
        damage: '20',
        convertedEnergyCost: 3
      },
      {
        cost: [
          'Fighting',
          'Colorless',
          'Colorless',
          'Colorless'
        ],
        name: 'Trample',
        text: 'For each Benched Pokémon (yours and your opponent\'s), flip a coin. If heads, this attack does 20 damage to that Pokémon. (Don\'t apply Weakness and Resistance for Benched Pokémon.)',
        damage: '40',
        convertedEnergyCost: 4
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
    id: 'ecard3-25',
    name: 'Politoed',
    nationalPokedexNumber: 186,
    imageUrl: 'https://images.pokemontcg.io/ecard3/25.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/25_hires.png',
    types: [
      'Water'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 2',
    evolvesFrom: 'Poliwhirl',
    hp: '110',
    retreatCost: [
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 2,
    number: '25',
    artist: 'Atsuko Nishida',
    rarity: 'Rare',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Sudden Growth',
        text: 'Attach any number of basic Energy cards from your hand to Politoed.',
        damage: '',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Water',
          'Colorless',
          'Colorless'
        ],
        name: 'Frog Hop',
        text: 'Flip a coin. If heads, this attack does 30 damage plus 20 more damage.',
        damage: '30+',
        convertedEnergyCost: 3
      },
      {
        cost: [
          'Water',
          'Water',
          'Colorless',
          'Colorless',
          'Colorless'
        ],
        name: 'Energy Splash',
        text: 'Move 2 Water Energy cards attached to Politoed to 1 or 2 of your Benched Pokémon. (You may put both on the same Pokémon, or 1 each on 2 different Pokémon.) If you have no Benched Pokémon, ignore this effect.',
        damage: '70',
        convertedEnergyCost: 5
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
    id: 'ecard3-26',
    name: 'Poliwrath',
    nationalPokedexNumber: 62,
    imageUrl: 'https://images.pokemontcg.io/ecard3/26.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/26_hires.png',
    types: [
      'Fighting'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 2',
    evolvesFrom: 'Poliwhirl',
    ability: {
      name: 'Strange Spiral',
      text: 'Once during your turn (before you attack), if Poliwrath if your Active Pokémon, you may discard a basic Energy card attached to Poliwrath. If you do, the Defending Pokémon is now Confused. This power can\'t be used if Poliwrath is affected by a Special Condition.',
      type: 'Poké-Power'
    },
    hp: '110',
    retreatCost: [
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 2,
    number: '26',
    artist: 'Naoyo Kimura',
    rarity: 'Rare',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Fighting',
          'Fighting',
          'Colorless'
        ],
        name: 'Spiral Punch',
        text: 'Flip a coin until you get tails. This attack does 40 damage plus 20 more damage for each heads.',
        damage: '40+',
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
    id: 'ecard3-27',
    name: 'Raichu',
    nationalPokedexNumber: 26,
    imageUrl: 'https://images.pokemontcg.io/ecard3/27.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/27_hires.png',
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
    number: '27',
    artist: 'Yuka Morii',
    rarity: 'Rare',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Colorless',
          'Colorless'
        ],
        name: 'Zzzap',
        text: 'This attack does 20 damage to each Pokémon with a Poké-Body or Poké-Power (yours and your opponent\'s). (Don\'t apply Weakness or Resistance.)',
        damage: '',
        convertedEnergyCost: 2
      },
      {
        cost: [
          'Lightning',
          'Colorless',
          'Colorless'
        ],
        name: 'Lightning Storm',
        text: 'Flip a coin. If tails, put 2 damage counters on Raichu.',
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
    id: 'ecard3-28',
    name: 'Raikou',
    nationalPokedexNumber: 243,
    imageUrl: 'https://images.pokemontcg.io/ecard3/28.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/28_hires.png',
    types: [
      'Lightning'
    ],
    supertype: 'Pokémon',
    subtype: 'Basic',
    ability: {
      name: 'Pure Body',
      text: 'To attach a Lightning Energy card from your hand to Raikou, you must discard an Energy card attached to Raikou. (Attach the Lightning energy, and then discard an Energy card from Raikou.)',
      type: 'Poké-Body'
    },
    hp: '70',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '28',
    artist: 'Mitsuhiro Arita',
    rarity: 'Rare',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Lightning',
          'Colorless',
          'Colorless'
        ],
        name: 'Lightning Sphere',
        text: 'You may flip a coin. If heads, discard all Lightning Energy cards attached to Raikou. This attack does 40 damage plus 20 more damage for each Energy card discarded in this way.',
        damage: '40+',
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
    id: 'ecard3-29',
    name: 'Rhydon',
    nationalPokedexNumber: 112,
    imageUrl: 'https://images.pokemontcg.io/ecard3/29.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/29_hires.png',
    types: [
      'Fighting'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Rhyhorn',
    hp: '90',
    retreatCost: [
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 2,
    number: '29',
    artist: 'Mitsuhiro Arita',
    rarity: 'Rare',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Fighting',
          'Colorless',
          'Colorless'
        ],
        name: 'Stomp',
        text: 'Flip a coin. If heads, this attack does 30 damage plus 20 more damage.',
        damage: '30+',
        convertedEnergyCost: 3
      },
      {
        cost: [
          'Fighting',
          'Fighting',
          'Colorless',
          'Colorless',
          'Colorless'
        ],
        name: 'Giant Tail',
        text: 'Flip a coin. If tails, this attack does nothing.',
        damage: '',
        convertedEnergyCost: 5
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
    id: 'ecard3-30',
    name: 'Starmie',
    nationalPokedexNumber: 121,
    imageUrl: 'https://images.pokemontcg.io/ecard3/30.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/30_hires.png',
    types: [
      'Psychic'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Staryu',
    hp: '80',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '30',
    artist: 'CR CG gangs',
    rarity: 'Rare',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Psychic'
        ],
        name: 'Energy Burst',
        text: 'Flip a coin. If heads, this attack does 10 damage times the number of Energy cards attached to Starmie and the Defending Pokémon.',
        damage: '10×',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Psychic',
          'Colorless',
          'Colorless'
        ],
        name: 'Star Back',
        text: 'Attach a basic Energy card from your discard pile to 1 of your Pokémon.',
        damage: '40',
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
    id: 'ecard3-31',
    name: 'Steelix',
    nationalPokedexNumber: 208,
    imageUrl: 'https://images.pokemontcg.io/ecard3/31.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/31_hires.png',
    types: [
      'Metal'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Onix',
    ability: {
      name: 'Rare Metal',
      text: 'All basic Energy cards attached to Steelix provide Metal Energy instead of their usual types.',
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
    number: '31',
    artist: 'Hikaru Koike',
    rarity: 'Rare',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Metal',
          'Metal',
          'Colorless'
        ],
        name: 'Squeeze',
        text: 'Flip a coin. If heads, this attack does 20 damage plus 10 more damage and the Defending Pokémon is now Paralyzed.',
        damage: '20+',
        convertedEnergyCost: 3
      },
      {
        cost: [
          'Metal',
          'Metal',
          'Metal',
          'Colorless'
        ],
        name: 'Metal Tail',
        text: 'Before doing damage, you may flip a coin. If heads, this attack does 80 damage. If tails, this attack does nothing.',
        damage: '',
        convertedEnergyCost: 4
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
    id: 'ecard3-32',
    name: 'Umbreon',
    nationalPokedexNumber: 197,
    imageUrl: 'https://images.pokemontcg.io/ecard3/32.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/32_hires.png',
    types: [
      'Darkness'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Eevee',
    ability: {
      name: 'Dark Gaze',
      text: 'As long as Umbreon is your Active Pokémon, Benched Pokémon (yours and your opponent\'s) can\'t use Poké-Powers.',
      type: 'Poké-Body'
    },
    hp: '70',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '32',
    artist: 'Atsuko Nishida',
    rarity: 'Rare',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Darkness',
          'Colorless'
        ],
        name: 'Sharp Claws',
        text: 'Flip a coin. If heads, this attack does 10 damage plus 30 more damage.',
        damage: '10+',
        convertedEnergyCost: 2
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
    id: 'ecard3-33',
    name: 'Vaporeon',
    nationalPokedexNumber: 134,
    imageUrl: 'https://images.pokemontcg.io/ecard3/33.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/33_hires.png',
    types: [
      'Water'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Eevee',
    ability: {
      name: 'Self Healing',
      text: 'Whenever you attach a Water Energy card from your hand to Vaporeon, remove all Special Conditions affecting Vaporeon.',
      type: 'Poké-Body'
    },
    hp: '70',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '33',
    artist: 'Naoyo Kimura',
    rarity: 'Rare',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Colorless',
          'Colorless'
        ],
        name: 'Hypnosplash',
        text: 'The Defending Pokémon is now Asleep.',
        damage: '10',
        convertedEnergyCost: 2
      },
      {
        cost: [
          'Water',
          'Colorless',
          'Colorless'
        ],
        name: 'Aqua Trick',
        text: 'If the Defending Pokémon has any Energy cards attached to it, flip a coin. If heads, choose 1 of those Energy cards and move it to 1 of your opponent\'s Benched Pokémon. If your opponent has no Benched Pokémon, ignore this effect.',
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
    id: 'ecard3-34',
    name: 'Wigglytuff',
    nationalPokedexNumber: 40,
    imageUrl: 'https://images.pokemontcg.io/ecard3/34.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/34_hires.png',
    types: [
      'Colorless'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Jigglypuff',
    ability: {
      name: 'Good Neighbor',
      text: 'Once during your turn (before you attack), if Wigglytuff is on your bench, you may flip a coin. If heads, each player removes up to 2 damage counters from his or her Active Pokémon. This power can\'t be used if you have already used another Wigglytuff\'s Good Neighbor Poké-Power this turn.',
      type: 'Poké-Power'
    },
    hp: '70',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '34',
    artist: 'Hizuki Misono',
    rarity: 'Rare',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Colorless',
          'Colorless',
          'Colorless'
        ],
        name: 'Do the Wave',
        text: 'Flip a coin. If heads, this attack does 10 damage times the number of Pokémon you have in play.',
        damage: '10×',
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
    id: 'ecard3-35',
    name: 'Xatu',
    nationalPokedexNumber: 178,
    imageUrl: 'https://images.pokemontcg.io/ecard3/35.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/35_hires.png',
    types: [
      'Psychic'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Natu',
    ability: {
      name: 'Synchronicity',
      text: 'You may attach any Technical Machine to Xatu.',
      type: 'Poké-Body'
    },
    hp: '80',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '35',
    artist: 'Atsuko Nishida',
    rarity: 'Rare',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Colorless',
          'Colorless',
          'Colorless'
        ],
        name: 'Warp Hole',
        text: 'Flip a coin. If heads, choose a card from your discard pile and put it on top of your deck.',
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
    id: 'ecard3-36',
    name: 'Electrode',
    nationalPokedexNumber: 101,
    imageUrl: 'https://images.pokemontcg.io/ecard3/36.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/36_hires.png',
    types: [
      'Lightning'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Voltorb',
    hp: '70',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '36',
    artist: 'Sumiyoshi Kizuki',
    rarity: 'Uncommon',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Colorless',
          'Colorless'
        ],
        name: 'Plasma',
        text: 'If there are any Lightning Energy cards in your discard pile, flip a coin. If heads, attach 1 of them to Electrode.',
        damage: '20',
        convertedEnergyCost: 2
      },
      {
        cost: [
          'Lightning',
          'Lightning',
          'Colorless',
          'Colorless'
        ],
        name: 'Self destruct',
        text: 'This attack does 20 damage to each Pokémon on each player\'s bench. (Don\'t apply Weakness and Resistance for Benched Pokémon) Electrode does 100 damage to itself.',
        damage: '100',
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
    id: 'ecard3-37',
    name: 'Kabuto',
    nationalPokedexNumber: 140,
    imageUrl: 'https://images.pokemontcg.io/ecard3/37.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/37_hires.png',
    types: [
      'Fighting'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    ability: {
      name: 'Thick Shell',
      text: 'All damage done by attacks to Kabuto from Evolved Pokémon is reduced by 10 (after applying Weakness and Resistance).',
      type: 'Poké-Body'
    },
    hp: '50',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '37',
    artist: 'Yukiko Baba',
    rarity: 'Uncommon',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Fighting',
          'Colorless'
        ],
        name: 'Scratch',
        text: '',
        damage: '30',
        convertedEnergyCost: 2
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
    id: 'ecard3-38',
    name: 'Machoke',
    nationalPokedexNumber: 67,
    imageUrl: 'https://images.pokemontcg.io/ecard3/38.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/38_hires.png',
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
    number: '38',
    artist: 'Hisao Nakamura',
    rarity: 'Uncommon',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Focus Energy',
        text: 'During your next turn, Machoke\'s Mega Punch attack\'s base damage is 80.',
        damage: '',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Fighting',
          'Colorless',
          'Colorless'
        ],
        name: 'Mega Punch',
        text: '',
        damage: '40',
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
    id: 'ecard3-39',
    name: 'Misdreavus',
    nationalPokedexNumber: 200,
    imageUrl: 'https://images.pokemontcg.io/ecard3/39.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/39_hires.png',
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
    number: '39',
    artist: 'Atsuko Nishida',
    rarity: 'Uncommon',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Psychic'
        ],
        name: 'Hypnoblast',
        text: 'Flip a coin. If heads, the Defending Pokémon is now Asleep.',
        damage: '10',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Psychic',
          'Colorless'
        ],
        name: 'Gift of Spite',
        text: 'Count the number of your Pokémon in play with damage counters on them. Put that many damage counters on the Defending Pokémon.',
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
    id: 'ecard3-40',
    name: 'Noctowl',
    nationalPokedexNumber: 164,
    imageUrl: 'https://images.pokemontcg.io/ecard3/40.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/40_hires.png',
    types: [
      'Colorless'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Hoothoot',
    ability: {
      name: 'Investigate',
      text: 'Once during your turn (before you attack) you may look at the top 2 cards of any player\'s deck or at to up 2 of any player\'s Prizes. Put any cards you looked at back in the same order. This power can\'t be used if Noctowl is affected by a Special Condition.',
      type: 'Poké-Power'
    },
    hp: '70',
    number: '40',
    artist: 'Atsuko Nishida',
    rarity: 'Uncommon',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Colorless',
          'Colorless'
        ],
        name: 'Triple Smash',
        text: 'Flip 3 coins. This attack does 10 damage plus 10 more damage for each heads.',
        damage: '10+',
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
    id: 'ecard3-41',
    name: 'Omanyte',
    nationalPokedexNumber: 138,
    imageUrl: 'https://images.pokemontcg.io/ecard3/41.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/41_hires.png',
    types: [
      'Water'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    hp: '60',
    number: '41',
    artist: 'Yukiko Baba',
    rarity: 'Uncommon',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Water of Evolution',
        text: 'Put an Omastar from your hand onto Omanyte. This counts as evolving Omanyte.',
        damage: '',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Water',
          'Colorless'
        ],
        name: 'Drag Off',
        text: 'Before doing damage, you may choose 1 of your opponent\'s Benched Pokémon and switch it with the Defending Pokémon.',
        damage: '20',
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
        type: 'Lightning',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard3-42',
    name: 'Persian',
    nationalPokedexNumber: 53,
    imageUrl: 'https://images.pokemontcg.io/ecard3/42.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/42_hires.png',
    types: [
      'Colorless'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Meowth',
    hp: '70',
    number: '42',
    artist: 'Atsuko Nishida',
    rarity: 'Uncommon',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Colorless',
          'Colorless'
        ],
        name: 'Surprise Slash',
        text: 'Flip a coin. If heads look at your opponent\'s hand. If he or she has any Trainer cards there, choose 1 of them. Your opponent shuffles that card into his or her deck.',
        damage: '20',
        convertedEnergyCost: 2
      },
      {
        cost: [
          'Colorless',
          'Colorless'
        ],
        name: 'Lunge',
        text: 'Flip a coin. If tails, this attack does nothing.',
        damage: '',
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
    id: 'ecard3-43',
    name: 'Piloswine',
    nationalPokedexNumber: 221,
    imageUrl: 'https://images.pokemontcg.io/ecard3/43.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/43_hires.png',
    types: [
      'Fighting'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Swinub',
    hp: '80',
    retreatCost: [
      'Colorless',
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 3,
    number: '43',
    artist: 'Shin-ichi Yoshida',
    rarity: 'Uncommon',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Fighting',
          'Colorless',
          'Colorless'
        ],
        name: 'Impaling Tusk',
        text: '',
        damage: '40',
        convertedEnergyCost: 3
      },
      {
        cost: [
          'Fighting',
          'Fighting',
          'Colorless',
          'Colorless'
        ],
        name: 'Continuous Charge',
        text: 'Flip 4 coins. This attack foes 30 damage plus 20 more damage for each heads. Put a damage counter on Piloswine for each heads.',
        damage: '30+',
        convertedEnergyCost: 4
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
    id: 'ecard3-44',
    name: 'Starmie',
    nationalPokedexNumber: 121,
    imageUrl: 'https://images.pokemontcg.io/ecard3/44.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/44_hires.png',
    types: [
      'Water'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Staryu',
    hp: '70',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '44',
    artist: 'Kyoko Umemoto',
    rarity: 'Uncommon',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Water'
        ],
        name: 'Water Gun',
        text: 'This attack does 10 damage plus 20 more damage for each Energy attached to Starmie but not used to pay for this attack\'s energy cost. You can\'t add more than 40 damage in this way.',
        damage: '10+',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Colorless',
          'Colorless',
          'Colorless'
        ],
        name: 'Core Blast',
        text: 'This attack does 30 damage plus 20 more damage for each Special Energy card attached to the Defending Pokémon.',
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
    id: 'ecard3-45',
    name: 'Wobbuffet',
    nationalPokedexNumber: 202,
    imageUrl: 'https://images.pokemontcg.io/ecard3/45.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/45_hires.png',
    types: [
      'Psychic'
    ],
    supertype: 'Pokémon',
    subtype: 'Basic',
    ability: {
      name: 'Mirror Coat',
      text: 'If Wobbuffet becomes Poisoned or Burned by the Defending Pokémon\'s attack during your opponent\'s turn, the Defending Pokémon becomes affected by the same Special Condition.',
      type: 'Poké-Body'
    },
    hp: '70',
    retreatCost: [
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 2,
    number: '45',
    artist: 'Kagemaru Himeno',
    rarity: 'Uncommon',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Psychic',
          'Colorless'
        ],
        name: 'Return Attack',
        text: 'Flip 2 coins. If either is heads, this attack does 10 damage times the number of damage counters on Wobbuffet.',
        damage: '10×',
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
    id: 'ecard3-46',
    name: 'Abra',
    nationalPokedexNumber: 63,
    imageUrl: 'https://images.pokemontcg.io/ecard3/46.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/46_hires.png',
    types: [
      'Psychic'
    ],
    supertype: 'Pokémon',
    subtype: 'Basic',
    ability: {
      name: 'Psychoflow',
      text: 'As long as there is a Psychic Energy card attached to Abra, its Retreat Cost is 0.',
      type: 'Poké-Body'
    },
    hp: '40',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '46',
    artist: 'Keiko Fukuyama',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
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
    id: 'ecard3-47',
    name: 'Buried Fossil',
    imageUrl: 'https://images.pokemontcg.io/ecard3/47.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/47_hires.png',
    types: [
      'Colorless'
    ],
    supertype: 'Pokémon',
    subtype: 'Basic',
    ability: {
      name: 'Reconstruction',
      text: 'Once during your turn (before your attack), if you have a basic Energy card in your hand, you may search your deck for an Omanyte or Kabuto card, show it to your opponent, and put it into your hand. Then put a basic Energy card from your hand into your deck. Shuffle your deck afterward.',
      type: 'Poké-Power'
    },
    hp: '30',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '47',
    artist: 'Atsuko Nishida',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    text: [
      'You may play a Pokémon card that evolves from Mysterious Fossil on top of Buried Fossil. (This counts as evolving Buried Fossil.) Buried Fossil can\'t be affected by Special Conditions.'
    ]
  },
  {
    id: 'ecard3-48',
    name: 'Cleffa',
    nationalPokedexNumber: 173,
    imageUrl: 'https://images.pokemontcg.io/ecard3/48.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/48_hires.png',
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
    number: '48',
    artist: 'Miki Tanaka',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    text: [
      'If this Baby Pokémon is your Active Pokémon and your opponent tries to attack, your opponent flips a coin (before doing anything else required in order to use that attack). If tails, your opponent\'s turn ends without an attack.'
    ],
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Energy Recycle',
        text: 'Shuffle a basic Energy card from your discard pile into your deck.',
        damage: '',
        convertedEnergyCost: 1
      }
    ]
  },
  {
    id: 'ecard3-49',
    name: 'Delibird',
    nationalPokedexNumber: 225,
    imageUrl: 'https://images.pokemontcg.io/ecard3/49.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/49_hires.png',
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
    number: '49',
    artist: 'Sumiyoshi Kizuki',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Limited Delivery',
        text: 'Search your deck for a Technical Machine or Pokémon Tool card show it to your opponent, and put it into your hand. Shuffle your deck afterward.',
        damage: '',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Water',
          'Colorless'
        ],
        name: 'Kick Away',
        text: 'Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon, if any. (Do the damage before switching Pokémon.)',
        damage: '20',
        convertedEnergyCost: 2
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
    id: 'ecard3-50',
    name: 'Diglett',
    nationalPokedexNumber: 50,
    imageUrl: 'https://images.pokemontcg.io/ecard3/50.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/50_hires.png',
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
    number: '50',
    artist: 'Tomokazu Komiya',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Fighting'
        ],
        name: 'Burrow',
        text: 'Flip a coin. If heads, prevent all damage done by attacks to Diglett during your opponent\'s next turn. (Any other effects of attack still happen.)',
        damage: '10',
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
    id: 'ecard3-51',
    name: 'Ditto',
    nationalPokedexNumber: 132,
    imageUrl: 'https://images.pokemontcg.io/ecard3/51.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/51_hires.png',
    types: [
      'Colorless'
    ],
    supertype: 'Pokémon',
    subtype: 'Basic',
    ability: {
      name: 'Prismatic Body',
      text: 'Each basic Energy card attached to Ditto provides every type of Energy but provides only 1 Energy at a time.',
      type: 'Poké-Body'
    },
    hp: '50',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '51',
    artist: 'Tomokazu Komiya',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Copy',
        text: 'Choose 1 of the Defending Pokémon\'s attacks. Copy copies that attack. This attack does nothing if Ditto doesn\'t have the Energy necessary to use that attack. (You must still do anything else required in order to use that attack.)',
        damage: '',
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
    id: 'ecard3-52',
    name: 'Dugtrio',
    nationalPokedexNumber: 51,
    imageUrl: 'https://images.pokemontcg.io/ecard3/52.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/52_hires.png',
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
    number: '52',
    artist: 'Tomokazu Komiya',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Fighting',
          'Colorless'
        ],
        name: 'Burrow',
        text: 'Flip a coin. If heads, prevent all damage done by attacks to Dugtrio during your opponent\'s next turn. (any other effects of attacks still happen.)',
        damage: '20',
        convertedEnergyCost: 2
      },
      {
        cost: [
          'Colorless',
          'Colorless',
          'Colorless'
        ],
        name: 'Dig Under',
        text: 'Choose 1 of your opponent\'s Pokémon. This attack does 30 damage to that Pokémon. Don\'t apply Weakness or Resistance. (any other effects that would happen after applying Weakness and Resistance still happen.)',
        damage: '30',
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
    id: 'ecard3-53',
    name: 'Dunsparce',
    nationalPokedexNumber: 206,
    imageUrl: 'https://images.pokemontcg.io/ecard3/53.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/53_hires.png',
    types: [
      'Colorless'
    ],
    supertype: 'Pokémon',
    subtype: 'Basic',
    ability: {
      name: 'Slippery Skin',
      text: 'As long as the Defending Pokémon is an Evolved Pokémon, Dunsparce\'s Retreat Cost is 0.',
      type: 'Poké-Body'
    },
    hp: '40',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '53',
    artist: 'Yuka Morii',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Tail Shake',
        text: 'The Defending Pokémon is now Asleep.',
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
    id: 'ecard3-54',
    name: 'Eevee',
    nationalPokedexNumber: 133,
    imageUrl: 'https://images.pokemontcg.io/ecard3/54.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/54_hires.png',
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
    number: '54',
    artist: 'Sumiyoshi Kizuki',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
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
          'Colorless',
          'Colorless'
        ],
        name: 'Take Down',
        text: 'Eevee does 10 damage to itself',
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
    id: 'ecard3-55',
    name: 'Farfetch\'d',
    nationalPokedexNumber: 83,
    imageUrl: 'https://images.pokemontcg.io/ecard3/55.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/55_hires.png',
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
    number: '55',
    artist: 'Midori Harada',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Whirlwind',
        text: 'Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon.',
        damage: '',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Colorless'
        ],
        name: 'Leek Rush',
        text: 'Flip a coin until you get tails. This attack does 10 damage times the number of heads.',
        damage: '10×',
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
    id: 'ecard3-56',
    name: 'Forretress',
    nationalPokedexNumber: 205,
    imageUrl: 'https://images.pokemontcg.io/ecard3/56.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/56_hires.png',
    types: [
      'Grass'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Pineco',
    ability: {
      name: 'Exoskeleton',
      text: 'All damage done by attacks to Forretress is reduced by 10 (after applying Weakness and Resistance).',
      type: 'Poké-Body'
    },
    hp: '70',
    retreatCost: [
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 2,
    number: '56',
    artist: 'Kouki Saitou',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Grass',
          'Colorless'
        ],
        name: 'Shell Rupture',
        text: 'This attack does 10 damage to each of your opponent\'s Benched Pokémon. (Don\'t apply Weakness and Resistance for Benched Pokémon.)',
        damage: '10',
        convertedEnergyCost: 2
      },
      {
        cost: [
          'Grass',
          'Colorless',
          'Colorless'
        ],
        name: 'Double Spin',
        text: 'Flip 2 coins. This attack does 40 damage times the number of heads.',
        damage: '40×',
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
    id: 'ecard3-57',
    name: 'Gastly',
    nationalPokedexNumber: 92,
    imageUrl: 'https://images.pokemontcg.io/ecard3/57.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/57_hires.png',
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
    number: '57',
    artist: 'Kyoko Umemoto',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Psychic'
        ],
        name: 'Haunt',
        text: 'Put a damage counter on the Defending Pokémon.',
        damage: '10',
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
    id: 'ecard3-58',
    name: 'Girafarig',
    nationalPokedexNumber: 203,
    imageUrl: 'https://images.pokemontcg.io/ecard3/58.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/58_hires.png',
    types: [
      'Psychic'
    ],
    supertype: 'Pokémon',
    subtype: 'Basic',
    hp: '60',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '58',
    artist: 'Yukiko Baba',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Psychic'
        ],
        name: 'Energy Patch',
        text: 'Take a basic Energy card attached to 1 of your Pokémon and attach it to another of your Pokémon.',
        damage: '',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Psychic',
          'Colorless'
        ],
        name: 'Syncroblast',
        text: 'If Girafarig and the Defending Pokémon don\'t have the same number of Energy cards attached to them, this attack\'s base damage is 10 instead of 40.',
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
    id: 'ecard3-59',
    name: 'Gligar',
    nationalPokedexNumber: 207,
    imageUrl: 'https://images.pokemontcg.io/ecard3/59.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/59_hires.png',
    types: [
      'Fighting'
    ],
    supertype: 'Pokémon',
    subtype: 'Basic',
    hp: '60',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '59',
    artist: 'Shin-ichi Yoshida',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Fighting'
        ],
        name: 'Irongrip',
        text: '',
        damage: '10',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Fighting',
          'Colorless'
        ],
        name: 'Sharp Stinger',
        text: 'Flip a coin. If heads, the Defending Pokémon is now Poisoned. If tails, the Defending Pokémon is now Paralyzed.',
        damage: '',
        convertedEnergyCost: 2
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
    id: 'ecard3-60',
    name: 'Golbat',
    nationalPokedexNumber: 42,
    imageUrl: 'https://images.pokemontcg.io/ecard3/60.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/60_hires.png',
    types: [
      'Grass'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Zubat',
    hp: '70',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '60',
    artist: 'Tomokazu Komiya',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Grass',
          'Colorless'
        ],
        name: 'Poison Sound Wave',
        text: 'Flip a coin. If heads, the Defending Pokémon is now Confused. If tails, the Defending Pokémon is now Poisoned.',
        damage: '',
        convertedEnergyCost: 2
      },
      {
        cost: [
          'Colorless',
          'Colorless',
          'Colorless'
        ],
        name: 'Strength in Numbers',
        text: 'This attack does 30 damage plus 10 more damage for each Zubat, Golbat, and Crobat on your bench.',
        damage: '30+',
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
    id: 'ecard3-61',
    name: 'Granbull',
    nationalPokedexNumber: 210,
    imageUrl: 'https://images.pokemontcg.io/ecard3/61.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/61_hires.png',
    types: [
      'Colorless'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Snubbull',
    hp: '80',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '61',
    artist: 'Tomokazu Komiya',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Colorless',
          'Colorless'
        ],
        name: 'Fling',
        text: 'Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon. (Do the damage before switching the Pokémon.)',
        damage: '20',
        convertedEnergyCost: 2
      },
      {
        cost: [
          'Colorless',
          'Colorless',
          'Colorless',
          'Colorless'
        ],
        name: 'Mega Punch',
        text: '',
        damage: '50',
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
    id: 'ecard3-62',
    name: 'Growlithe',
    nationalPokedexNumber: 58,
    imageUrl: 'https://images.pokemontcg.io/ecard3/62.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/62_hires.png',
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
    number: '62',
    artist: 'Masako Yamashita',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Fire'
        ],
        name: 'Flare',
        text: '',
        damage: '10',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Colorless',
          'Colorless'
        ],
        name: 'Double Kick',
        text: 'Flip 2 coins. This attack does 20 damage times the number of heads.',
        damage: '20×',
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
    id: 'ecard3-63',
    name: 'Haunter',
    nationalPokedexNumber: 93,
    imageUrl: 'https://images.pokemontcg.io/ecard3/63.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/63_hires.png',
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
    number: '63',
    artist: 'Kyoko Umemoto',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Colorless',
          'Colorless'
        ],
        name: 'Confuse Ray',
        text: 'Flip a coin. If heads, the Defending Pokémon is now Confused.',
        damage: '10',
        convertedEnergyCost: 2
      },
      {
        cost: [
          'Psychic',
          'Colorless',
          'Colorless'
        ],
        name: 'Shadow Hand',
        text: 'You may discard up to 2 cards from your hand. If you do, draw that many cards.',
        damage: '30',
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
    id: 'ecard3-64',
    name: 'Heracross',
    nationalPokedexNumber: 214,
    imageUrl: 'https://images.pokemontcg.io/ecard3/64.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/64_hires.png',
    types: [
      'Grass'
    ],
    supertype: 'Pokémon',
    subtype: 'Basic',
    hp: '60',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '64',
    artist: 'Kouki Saitou',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Colorless',
          'Colorless'
        ],
        name: 'Slash',
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
        name: 'Angry Horn',
        text: 'If there are 4 or more damage counters on Heracross, this attack\'s base damage is 50 instead of 30.',
        damage: '',
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
    id: 'ecard3-65',
    name: 'Hoothoot',
    nationalPokedexNumber: 163,
    imageUrl: 'https://images.pokemontcg.io/ecard3/65.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/65_hires.png',
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
    number: '65',
    artist: 'Hizuki Misono',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Hypnosis',
        text: 'The Defending Pokémon is now Asleep.',
        damage: '',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Colorless'
        ],
        name: 'Eerie Light',
        text: 'Flip a coin. If heads, the Defending Pokémon is now Confused.',
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
    id: 'ecard3-66',
    name: 'Houndour',
    nationalPokedexNumber: 228,
    imageUrl: 'https://images.pokemontcg.io/ecard3/66.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/66_hires.png',
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
    number: '66',
    artist: 'Hajime Kusajima',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Retaliate',
        text: 'This attack does 10 damage times the number of damage counters on Houndour.',
        damage: '10×',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Fire'
        ],
        name: 'Fireworks',
        text: 'Flip a coin. If tails, discard a Fire Energy card attached to Houndour.',
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
    id: 'ecard3-67',
    name: 'Igglybuff',
    nationalPokedexNumber: 174,
    imageUrl: 'https://images.pokemontcg.io/ecard3/67.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/67_hires.png',
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
    number: '67',
    artist: 'Keiko Fukuyama',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    text: [
      'If this Baby Pokémon is your Active Pokémon and your opponent tries to attack, your opponent flips a coin (before doing anything else required in order to use that attack). If tails, your opponent\'s turn ends without an attack.'
    ],
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Energy Heal',
        text: 'Choose 1 of your Pokémon with an Energy card attached to it. Remove 1 damage counter from that Pokémon.',
        damage: '',
        convertedEnergyCost: 1
      }
    ]
  },
  {
    id: 'ecard3-68',
    name: 'Jigglypuff',
    nationalPokedexNumber: 39,
    imageUrl: 'https://images.pokemontcg.io/ecard3/68.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/68_hires.png',
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
    number: '68',
    artist: 'Atsuko Nishida',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Nap',
        text: 'Remove 1 damage counter from Jigglypuff',
        damage: '',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Colorless',
          'Colorless'
        ],
        name: 'Lullaby',
        text: 'The Defending Pokémon is now Asleep.',
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
    id: 'ecard3-69',
    name: 'Kadabra',
    nationalPokedexNumber: 64,
    imageUrl: 'https://images.pokemontcg.io/ecard3/69.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/69_hires.png',
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
    number: '69',
    artist: 'Toshinao Aoki',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Nightmare',
        text: 'The Defending Pokémon is now Asleep.',
        damage: '10',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Psychic',
          'Colorless',
          'Colorless'
        ],
        name: 'Mind Shock',
        text: 'Don\'t apply Weakness and Resistance.',
        damage: '40',
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
    id: 'ecard3-70',
    name: 'Kakuna',
    nationalPokedexNumber: 14,
    imageUrl: 'https://images.pokemontcg.io/ecard3/70.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/70_hires.png',
    types: [
      'Grass'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Weedle',
    ability: {
      name: 'Exoskeleton',
      text: 'All damage done to Kakuna is reduced by 10 (after applying Weakness and Resistance).',
      type: 'Poké-Body'
    },
    hp: '70',
    retreatCost: [
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 2,
    number: '70',
    artist: 'Hisao Nakamura',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Grass'
        ],
        name: 'Poisonpowder',
        text: 'The Defending Pokémon is now Poisoned.',
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
    id: 'ecard3-71',
    name: 'Lapras',
    nationalPokedexNumber: 131,
    imageUrl: 'https://images.pokemontcg.io/ecard3/71.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/71_hires.png',
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
    number: '71',
    artist: 'Aya Kusube',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Colorless',
          'Colorless'
        ],
        name: 'Assist',
        text: 'Search your deck for a Supporter card, show it to your opponent and put it into your hand. Shuffle your deck afterward.',
        damage: '',
        convertedEnergyCost: 2
      },
      {
        cost: [
          'Water',
          'Water',
          'Colorless'
        ],
        name: 'Hypnoblast',
        text: 'Flip a coin. If heads, the Defending Pokémon is now Asleep.',
        damage: '30',
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
    id: 'ecard3-72',
    name: 'Ledyba',
    nationalPokedexNumber: 165,
    imageUrl: 'https://images.pokemontcg.io/ecard3/72.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/72_hires.png',
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
    number: '72',
    artist: 'Masako Yamashita',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Teary Eyes',
        text: 'During your opponent\'s next turn, any damage done to Ledyba is reduced by 20.',
        damage: '',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Grass'
        ],
        name: 'Quick Turn',
        text: 'Flip 2 coins. This attack does 10 damage times the number of heads.',
        damage: '10×',
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
    id: 'ecard3-73',
    name: 'Ledyba',
    nationalPokedexNumber: 165,
    imageUrl: 'https://images.pokemontcg.io/ecard3/73.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/73_hires.png',
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
    number: '73',
    artist: 'Yukiko Baba',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Grass'
        ],
        name: 'Gnaw',
        text: '',
        damage: '10',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Colorless',
          'Colorless'
        ],
        name: 'Slam',
        text: 'Flip 2 coins. This attack does 20 damage times the number of heads.',
        damage: '20×',
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
    id: 'ecard3-74',
    name: 'Machop',
    nationalPokedexNumber: 66,
    imageUrl: 'https://images.pokemontcg.io/ecard3/74.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/74_hires.png',
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
    number: '74',
    artist: 'Miki Tanaka',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Smash Punch',
        text: 'Flip a coin. If tails, this attack does nothing.',
        damage: '',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Fighting',
          'Colorless'
        ],
        name: 'Fling',
        text: 'Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon, if any. (Do the damage before switching the Pokémon.)',
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
    id: 'ecard3-75',
    name: 'Magikarp',
    nationalPokedexNumber: 129,
    imageUrl: 'https://images.pokemontcg.io/ecard3/75.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/75_hires.png',
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
    number: '75',
    artist: 'Keiko Fukuyama',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Signs of Evolution',
        text: 'Flip a coin. If heads, search your deck for a card that evolves from Magikarp, show it to your opponent, and put it into your hand. Shuffle your deck afterward.',
        damage: '',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Water'
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
    id: 'ecard3-76',
    name: 'Magnemite',
    nationalPokedexNumber: 81,
    imageUrl: 'https://images.pokemontcg.io/ecard3/76.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/76_hires.png',
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
    number: '76',
    artist: 'Shin-ichi Yoshida',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Thunder Wave',
        text: 'Flip a coin. If heads, the Defending Pokémon is now Paralyzed.',
        damage: '',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Lightning'
        ],
        name: 'Magnetic Lines',
        text: 'If the Defending Pokémon has any basic Energy cards attached to it, flip a coin. If heads, choose 1 of those Energy cards and move it to 1 of your opponent\'s Benched Pokémon. If your opponent has no Benched Pokémon, ignore this effect.',
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
    id: 'ecard3-77',
    name: 'Mantine',
    nationalPokedexNumber: 226,
    imageUrl: 'https://images.pokemontcg.io/ecard3/77.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/77_hires.png',
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
    number: '77',
    artist: 'Sumiyoshi Kizuki',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Water'
        ],
        name: 'Fin Smack',
        text: 'Flip 2 coins. This attack does 10 damage times the number of heads.',
        damage: '10×',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Water',
          'Colorless',
          'Colorless'
        ],
        name: 'Aqua Sonic',
        text: 'Don\'t apply Weakness and Resistance.',
        damage: '30',
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
    id: 'ecard3-78',
    name: 'Meowth',
    nationalPokedexNumber: 52,
    imageUrl: 'https://images.pokemontcg.io/ecard3/78.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/78_hires.png',
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
    number: '78',
    artist: 'Keiko Fukuyama',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Sudden Swipe',
        text: 'Flip a coin. If heads, look at your opponent\'s hand. If he or she has any Energy cards there, choose 1 of them. Your opponent shuffles that card into his or her deck.',
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
    id: 'ecard3-79',
    name: 'Murkrow',
    nationalPokedexNumber: 198,
    imageUrl: 'https://images.pokemontcg.io/ecard3/79.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/79_hires.png',
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
    number: '79',
    artist: 'Tomokazu Komiya',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Darkness'
        ],
        name: 'Evil Eye',
        text: 'Choose 1 of your opponent\'s Pokémon. Put a damage counter on that Pokémon.',
        damage: '10',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Colorless',
          'Colorless'
        ],
        name: 'Blindside',
        text: 'Choose 1 of your opponent\'s Pokémon that has a damage counter on it. This attack does 20 damage to that Pokémon. Don\'t apply Weakness and Resistance.',
        damage: '',
        convertedEnergyCost: 2
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
    id: 'ecard3-80',
    name: 'Natu',
    nationalPokedexNumber: 177,
    imageUrl: 'https://images.pokemontcg.io/ecard3/80.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/80_hires.png',
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
    number: '80',
    artist: 'Miki Tanaka',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Psychic'
        ],
        name: 'Foresight',
        text: 'Look at the top 3 cards of either player\'s deck and rearrange them as you like.',
        damage: '',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Colorless',
          'Colorless'
        ],
        name: 'Removal Beam',
        text: 'If the Defending Pokémon has any Energy cards attached to it, flip a coin. If heads, choose one of those Energy cards and discard it.',
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
    id: 'ecard3-81',
    name: 'Nidoran♀',
    nationalPokedexNumber: 29,
    imageUrl: 'https://images.pokemontcg.io/ecard3/81.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/81_hires.png',
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
    number: '81',
    artist: 'Masako Yamashita',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Call for Family',
        text: 'Search your deck for a Basic Pokémon card named Nidoran M or Nidoran F and put it onto your Bench. Shuffle your deck afterward. (You can\'t use this attack if your bench is full.)',
        damage: '',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Grass'
        ],
        name: 'Scratch',
        text: '',
        damage: '10',
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
    id: 'ecard3-82',
    name: 'Nidoran♀',
    nationalPokedexNumber: 29,
    imageUrl: 'https://images.pokemontcg.io/ecard3/82.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/82_hires.png',
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
    number: '82',
    artist: 'Masako Yamashita',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Colorless',
          'Colorless'
        ],
        name: 'Poison Sting',
        text: 'The Defending Pokémon is now Poisoned.',
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
    id: 'ecard3-83',
    name: 'Nidorina',
    nationalPokedexNumber: 30,
    imageUrl: 'https://images.pokemontcg.io/ecard3/83.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/83_hires.png',
    types: [
      'Grass'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Nidoran♀',
    hp: '80',
    retreatCost: [
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 2,
    number: '83',
    artist: 'Midori Harada',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
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
          'Grass',
          'Colorless',
          'Colorless'
        ],
        name: 'Poison Claws',
        text: 'Flip a coin. If heads, the Defending Pokémon is now Poisoned.',
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
    id: 'ecard3-84',
    name: 'Pikachu',
    nationalPokedexNumber: 25,
    imageUrl: 'https://images.pokemontcg.io/ecard3/84.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/84_hires.png',
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
    number: '84',
    artist: 'Yuka Morii',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Colorless',
          'Colorless'
        ],
        name: 'Max Voltage',
        text: 'Discard all Lightning Energy cards attached to Pikachu. This attack does 20 damage plus 10 more damage for each Energy card discarded in this way.',
        damage: '20+',
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
    id: 'ecard3-85',
    name: 'Pineco',
    nationalPokedexNumber: 204,
    imageUrl: 'https://images.pokemontcg.io/ecard3/85.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/85_hires.png',
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
    number: '85',
    artist: 'Mitsuhiro Arita',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Surprise Attack',
        text: 'Flip a coin. If tails, this attack does nothing.',
        damage: '',
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
    id: 'ecard3-86',
    name: 'Pineco',
    nationalPokedexNumber: 204,
    imageUrl: 'https://images.pokemontcg.io/ecard3/86.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/86_hires.png',
    types: [
      'Grass'
    ],
    supertype: 'Pokémon',
    subtype: 'Basic',
    hp: '50',
    number: '86',
    artist: 'Midori Harada',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Grass',
          'Colorless'
        ],
        name: 'Double-edge',
        text: 'Pineco does 10 damage to itself.',
        damage: '30',
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
    id: 'ecard3-87',
    name: 'Poliwag',
    nationalPokedexNumber: 60,
    imageUrl: 'https://images.pokemontcg.io/ecard3/87.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/87_hires.png',
    types: [
      'Water'
    ],
    supertype: 'Pokémon',
    subtype: 'Basic',
    hp: '40',
    number: '87',
    artist: 'Miki Tanaka',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Water'
        ],
        name: 'Sleep Bubble',
        text: 'The Defending Pokémon is now Asleep.',
        damage: '10',
        convertedEnergyCost: 1
      },
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
        type: 'Lightning',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard3-88',
    name: 'Poliwhirl',
    nationalPokedexNumber: 61,
    imageUrl: 'https://images.pokemontcg.io/ecard3/88.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/88_hires.png',
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
    number: '88',
    artist: 'Hisao Nakamura',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Twiddle',
        text: 'Flip a coin. If heads, the Defending Pokémon is now Confused. If tails, the Defending Pokémon is now Asleep.',
        damage: '',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Colorless',
          'Colorless',
          'Colorless'
        ],
        name: 'Double Kick',
        text: 'Flip 2 coins. This attack does 30 damage times the number of heads.',
        damage: '30×',
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
    id: 'ecard3-89',
    name: 'Raticate',
    nationalPokedexNumber: 20,
    imageUrl: 'https://images.pokemontcg.io/ecard3/89.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/89_hires.png',
    types: [
      'Colorless'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Rattata',
    hp: '70',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '89',
    artist: 'Kagemaru Himeno',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Scratch',
        text: '',
        damage: '20',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Colorless',
          'Colorless'
        ],
        name: 'Continuous Bite',
        text: 'Flip 3 coins. If you get 1 heads, this attack does 10 damage plus 10 more damage. If you get 2 heads, this attack does 10 damage plus 30 more damage. If you get 3 heads, this attack does 10 damage plus 60 more damage.',
        damage: '10+',
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
    id: 'ecard3-90',
    name: 'Rattata',
    nationalPokedexNumber: 19,
    imageUrl: 'https://images.pokemontcg.io/ecard3/90.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/90_hires.png',
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
    number: '90',
    artist: 'Masako Yamashita',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Call for Friends',
        text: 'Search your deck for a Baby Pokémon or Basic Pokémon and put it onto your bench. Shuffle your deck afterward. (You can\'t use this attack it your bench is full.)',
        damage: '',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Colorless'
        ],
        name: 'Body Slam',
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
    id: 'ecard3-91',
    name: 'Rhyhorn',
    nationalPokedexNumber: 111,
    imageUrl: 'https://images.pokemontcg.io/ecard3/91.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/91_hires.png',
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
    number: '91',
    artist: 'Hisao Nakamura',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Horn Attack',
        text: '',
        damage: '10',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Fighting',
          'Colorless'
        ],
        name: 'Retaliate',
        text: 'This attack does 10 damage times the number of damage counters on Rhyhorn.',
        damage: '10×',
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
    id: 'ecard3-92',
    name: 'Sandshrew',
    nationalPokedexNumber: 27,
    imageUrl: 'https://images.pokemontcg.io/ecard3/92.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/92_hires.png',
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
    number: '92',
    artist: 'Naoyo Kimura',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
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
          'Fighting'
        ],
        name: 'Dig Under',
        text: 'Choose 1 of your opponent\'s Pokémon. This attack does 10 damage to that Pokémon. Don\'t apply Weakness and Resistance. (Any other effects that would happen after applying Weakness and Resistance still happen.)',
        damage: '10',
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
    id: 'ecard3-93',
    name: 'Sandslash',
    nationalPokedexNumber: 28,
    imageUrl: 'https://images.pokemontcg.io/ecard3/93.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/93_hires.png',
    types: [
      'Fighting'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Sandshrew',
    hp: '70',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '93',
    artist: 'Miki Tanaka',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Fighting',
          'Colorless'
        ],
        name: 'Sand Trap',
        text: 'If your opponent has any Benched Pokémon, choose up to 2 of them. This attack does 10 damage to each of them. (Don\'t apply Weakness and Resistance for Benched Pokémon.)',
        damage: '10',
        convertedEnergyCost: 2
      },
      {
        cost: [
          'Fighting',
          'Colorless',
          'Colorless'
        ],
        name: 'Poison Needle Rush',
        text: 'Flip 3 coins. This attack does 20 damage times the number of heads. If you get at least 1 heads, the Defending Pokémon is now Poisoned.',
        damage: '20×',
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
    id: 'ecard3-94',
    name: 'Seel',
    nationalPokedexNumber: 86,
    imageUrl: 'https://images.pokemontcg.io/ecard3/94.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/94_hires.png',
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
    number: '94',
    artist: 'Hisao Nakamura',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Water'
        ],
        name: 'Cold Breath',
        text: 'Flip a coin. If heads, the Defending Pokémon is now Asleep.',
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
    id: 'ecard3-95',
    name: 'Seel',
    nationalPokedexNumber: 86,
    imageUrl: 'https://images.pokemontcg.io/ecard3/95.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/95_hires.png',
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
    number: '95',
    artist: 'Yukiko Baba',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Double Headbutt',
        text: 'Flip 2 coins. This attack does 10 damage times the number of heads.',
        damage: '10×',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Water',
          'Colorless'
        ],
        name: 'Ice Beam',
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
    id: 'ecard3-96',
    name: 'Shuckle',
    nationalPokedexNumber: 213,
    imageUrl: 'https://images.pokemontcg.io/ecard3/96.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/96_hires.png',
    types: [
      'Grass'
    ],
    supertype: 'Pokémon',
    subtype: 'Basic',
    ability: {
      name: 'Vase Body',
      text: 'All damage done to Shuckle is reduced by 20 (after applying Weakness and Resistance).',
      type: 'Poké-Body'
    },
    hp: '30',
    retreatCost: [
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 2,
    number: '96',
    artist: 'Sumiyoshi Kizuki',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Grass',
          'Colorless'
        ],
        name: 'Poisonous Saliva',
        text: 'The Defending Pokémon is now Poisoned.',
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
    id: 'ecard3-97',
    name: 'Skarmory',
    nationalPokedexNumber: 227,
    imageUrl: 'https://images.pokemontcg.io/ecard3/97.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/97_hires.png',
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
    number: '97',
    artist: 'Katsura Tabata',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Double Peck',
        text: 'Flip 2 coins. This attack does 10 damage times the number of heads.',
        damage: '10×',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Metal',
          'Colorless',
          'Colorless'
        ],
        name: 'Spinning Head',
        text: 'Flip a coin. If heads, switch Skarmory with 1 of your Benched Pokémon.',
        damage: '30',
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
    id: 'ecard3-98',
    name: 'Slugma',
    nationalPokedexNumber: 218,
    imageUrl: 'https://images.pokemontcg.io/ecard3/98.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/98_hires.png',
    types: [
      'Fire'
    ],
    supertype: 'Pokémon',
    subtype: 'Basic',
    hp: '50',
    retreatCost: [
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 2,
    number: '98',
    artist: 'Naoyo Kimura',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
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
          'Fire'
        ],
        name: 'Scorching Lava',
        text: 'Discard a Fire Energy card attached to Slugma in order to use this attack. The Defending Pokémon is now Burned.',
        damage: '',
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
    id: 'ecard3-99',
    name: 'Slugma',
    nationalPokedexNumber: 218,
    imageUrl: 'https://images.pokemontcg.io/ecard3/99.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/99_hires.png',
    types: [
      'Fire'
    ],
    supertype: 'Pokémon',
    subtype: 'Basic',
    hp: '50',
    retreatCost: [
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 2,
    number: '99',
    artist: 'Yukiko Baba',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Fire',
          'Colorless'
        ],
        name: 'Singe',
        text: 'The Defending Pokémon is now Burned.',
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
    id: 'ecard3-100',
    name: 'Snorlax',
    nationalPokedexNumber: 143,
    imageUrl: 'https://images.pokemontcg.io/ecard3/100.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/100_hires.png',
    types: [
      'Colorless'
    ],
    supertype: 'Pokémon',
    subtype: 'Basic',
    ability: {
      name: 'Lolling About',
      text: 'Once during your turn (before you attack) if Snorlax is your Active Pokémon, you may remove 1 damage counter from Snorlax. Snorlax is now Asleep. This power can\'t be used if Snorlax is affected by a Special Condition.',
      type: 'Poké-Power'
    },
    hp: '80',
    retreatCost: [
      'Colorless',
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 3,
    number: '100',
    artist: 'Naoyo Kimura',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Colorless',
          'Colorless',
          'Colorless'
        ],
        name: 'Continuous Tumble',
        text: 'Flip a coin until you get tails. This attack does 30 damage times the number of heads.',
        damage: '30×',
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
    id: 'ecard3-101',
    name: 'Snubbull',
    nationalPokedexNumber: 209,
    imageUrl: 'https://images.pokemontcg.io/ecard3/101.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/101_hires.png',
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
    artist: 'Hisao Nakamura',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Scary Face',
        text: 'Flip a coin. If heads, until the end of your opponent\'s next turn the Defending Pokémon can\'t Retreat.',
        damage: '',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Colorless',
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
        type: 'Fighting',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard3-102',
    name: 'Stantler',
    nationalPokedexNumber: 234,
    imageUrl: 'https://images.pokemontcg.io/ecard3/102.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/102_hires.png',
    types: [
      'Colorless'
    ],
    supertype: 'Pokémon',
    subtype: 'Basic',
    hp: '60',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '102',
    artist: 'Aya Kusube',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Threaten',
        text: 'Flip a coin. If heads, look at your opponent\'s hand. If he or she has any Trainer cards there, choose 1 of them. Your opponent shuffles that card back into his or her deck.',
        damage: '',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Colorless',
          'Colorless'
        ],
        name: 'Antler Swipe',
        text: 'Flip a coin. If heads, this attack does 20 damage to the Defending Pokémon (Don\'t apply Weakness and Resistance) If tails, your and opponent has any Benched Pokémon, choose 1 of them and this attack does 20 damage to it. (Don\'t apply Weakness and Resistance for Benched Pokémon.)',
        damage: '',
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
    id: 'ecard3-103',
    name: 'Staryu',
    nationalPokedexNumber: 120,
    imageUrl: 'https://images.pokemontcg.io/ecard3/103.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/103_hires.png',
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
    number: '103',
    artist: 'Kyoko Umemoto',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Energy Healing',
        text: 'Remove 2 damage counters from Staryu for each energy attached to it. If it has fewer damage counters than that, remove all of them.',
        damage: '',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Water'
        ],
        name: 'Doubleslap',
        text: 'Flip 2 coins. This attack does 10 damage times the number of heads.',
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
    id: 'ecard3-104',
    name: 'Staryu',
    nationalPokedexNumber: 120,
    imageUrl: 'https://images.pokemontcg.io/ecard3/104.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/104_hires.png',
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
    number: '104',
    artist: 'Keiko Fukuyama',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Slap',
        text: '',
        damage: '10',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Water',
          'Colorless'
        ],
        name: 'Confuse Ray',
        text: 'Flip a coin. If heads, the Defending Pokémon is now Confused.',
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
    id: 'ecard3-105',
    name: 'Sunflora',
    nationalPokedexNumber: 192,
    imageUrl: 'https://images.pokemontcg.io/ecard3/105.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/105_hires.png',
    types: [
      'Grass'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Sunkern',
    hp: '70',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '105',
    artist: 'Miki Tanaka',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Grass',
          'Colorless'
        ],
        name: 'Energy Plant',
        text: 'Search your deck for a basic Energy card and attach it to 1 of your Pokémon. Shuffle your deck afterward.',
        damage: '',
        convertedEnergyCost: 2
      },
      {
        cost: [
          'Grass',
          'Colorless',
          'Colorless'
        ],
        name: 'Trip Over',
        text: 'Flip a coin. If heads, this attack does 30 damage plus 30 more damage.',
        damage: '30+',
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
    id: 'ecard3-106',
    name: 'Sunkern',
    nationalPokedexNumber: 191,
    imageUrl: 'https://images.pokemontcg.io/ecard3/106.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/106_hires.png',
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
    number: '106',
    artist: 'Toshinao Aoki',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Rollout',
        text: '',
        damage: '10',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Grass'
        ],
        name: 'Blot',
        text: 'If there are any damage counters on Sunkern, remove 1 of them.',
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
    id: 'ecard3-107',
    name: 'Swinub',
    nationalPokedexNumber: 220,
    imageUrl: 'https://images.pokemontcg.io/ecard3/107.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/107_hires.png',
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
    number: '107',
    artist: 'Yuka Morii',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
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
          'Water'
        ],
        name: 'Freezing Breath',
        text: 'Flip a coin. If heads, the Defending Pokémon is now Paralyzed. If tails, the Defending Pokémon is now Asleep.',
        damage: '',
        convertedEnergyCost: 1
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
    id: 'ecard3-108',
    name: 'Swinub',
    nationalPokedexNumber: 220,
    imageUrl: 'https://images.pokemontcg.io/ecard3/108.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/108_hires.png',
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
    number: '108',
    artist: 'Toshinao Aoki',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Fighting'
        ],
        name: 'Mud Slap',
        text: '',
        damage: '10',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Colorless',
          'Colorless'
        ],
        name: 'Overrun',
        text: 'If your opponent has nay Benched Pokémon, flip a coin. If heads, choose 1 of them and this attack does 10 damage to it. (Don\'t apply Weakness and Resistance for Benched Pokémon.)',
        damage: '10',
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
    id: 'ecard3-109',
    name: 'Teddiursa',
    nationalPokedexNumber: 216,
    imageUrl: 'https://images.pokemontcg.io/ecard3/109.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/109_hires.png',
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
    number: '109',
    artist: 'Kagemaru Himeno',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Surprise Attack',
        text: 'Flip a coin. If tails, this attack does nothing.',
        damage: '',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Colorless',
          'Colorless'
        ],
        name: 'Rage',
        text: 'This attack does 10 damage plus 10 more damage for each damage counter on Teddiursa.',
        damage: '10+',
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
    id: 'ecard3-110',
    name: 'Ursaring',
    nationalPokedexNumber: 217,
    imageUrl: 'https://images.pokemontcg.io/ecard3/110.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/110_hires.png',
    types: [
      'Colorless'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Teddiursa',
    hp: '80',
    retreatCost: [
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 2,
    number: '110',
    artist: 'Mitsuhiro Arita',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Colorless',
          'Colorless',
          'Colorless'
        ],
        name: 'Bear Hug',
        text: 'The Defending Pokémon can\'t Retreat during your opponent\'s next turn.',
        damage: '30',
        convertedEnergyCost: 3
      },
      {
        cost: [
          'Colorless',
          'Colorless',
          'Colorless',
          'Colorless'
        ],
        name: 'Rend',
        text: 'If the Defending Pokémon has any damage counters on it, this attack does 40 damage plus 20 more damage. If not, this attack does 40 damage.',
        damage: '40+',
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
    id: 'ecard3-111',
    name: 'Venomoth',
    nationalPokedexNumber: 49,
    imageUrl: 'https://images.pokemontcg.io/ecard3/111.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/111_hires.png',
    types: [
      'Grass'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Venonat',
    hp: '70',
    number: '111',
    artist: 'Yukiko Baba',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Colorless',
          'Colorless'
        ],
        name: 'Healing Dust',
        text: 'Flip 2 coins. For each heads, remove 1 damage counter from each of your Pokémon. If a Pokémon has fewer damage counters than the number of heads, remove all of them.',
        damage: '',
        convertedEnergyCost: 2
      },
      {
        cost: [
          'Grass',
          'Colorless',
          'Colorless'
        ],
        name: 'Miracle Powder',
        text: 'Flip a coin. If heads, choose a Special Condition (Asleep, Burned, Confused, Paralyzed, or Poisoned). The Defending Pokémon is now affected by that Special Condition.',
        damage: '',
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
    id: 'ecard3-112',
    name: 'Venonat',
    nationalPokedexNumber: 48,
    imageUrl: 'https://images.pokemontcg.io/ecard3/112.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/112_hires.png',
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
    number: '112',
    artist: 'Tomokazu Komiya',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Double Spin',
        text: 'Flip 2 coins. This attack does 10 damage times the number of heads.',
        damage: '10×',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Grass',
          'Colorless'
        ],
        name: 'Supersonic',
        text: 'Flip a coin. If heads, the Defending Pokémon is now Confused.',
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
    id: 'ecard3-113',
    name: 'Voltorb',
    nationalPokedexNumber: 100,
    imageUrl: 'https://images.pokemontcg.io/ecard3/113.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/113_hires.png',
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
    number: '113',
    artist: 'Sumiyoshi Kizuki',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Lightning'
        ],
        name: 'Magnetic Pull',
        text: 'If your opponent has any Benched Pokémon, choose 1 of them and switch it with the Defending Pokémon.',
        damage: '',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Lightning',
          'Colorless'
        ],
        name: 'Spin Tackle',
        text: 'Voltorb does 10 damage to itself.',
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
    id: 'ecard3-114',
    name: 'Weedle',
    nationalPokedexNumber: 13,
    imageUrl: 'https://images.pokemontcg.io/ecard3/114.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/114_hires.png',
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
    number: '114',
    artist: 'Keiko Fukuyama',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Grass'
        ],
        name: 'Fury Attack',
        text: 'Flip 3 coins. This attack does 10 damage times the number of heads.',
        damage: '10×',
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
    id: 'ecard3-115',
    name: 'Weedle',
    nationalPokedexNumber: 13,
    imageUrl: 'https://images.pokemontcg.io/ecard3/115.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/115_hires.png',
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
    number: '115',
    artist: 'Sumiyoshi Kizuki',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Entangling Thread',
        text: 'Flip a coin. If heads, the Defending Pokémon is now Paralyzed.',
        damage: '',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Grass'
        ],
        name: 'Poison Horn',
        text: 'Flip a coin. If heads, the Defending Pokémon is now Poisoned.',
        damage: '',
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
    id: 'ecard3-116',
    name: 'Yanma',
    nationalPokedexNumber: 193,
    imageUrl: 'https://images.pokemontcg.io/ecard3/116.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/116_hires.png',
    types: [
      'Grass'
    ],
    supertype: 'Pokémon',
    subtype: 'Basic',
    hp: '60',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '116',
    artist: 'Miki Tanaka',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Grass',
          'Colorless'
        ],
        name: 'Agility',
        text: 'Flip a coin. If heads, during your opponent\'s next turn prevent all effects of attacks, including damage, done to Yanma.',
        damage: '10',
        convertedEnergyCost: 2
      },
      {
        cost: [
          'Grass',
          'Colorless',
          'Colorless'
        ],
        name: 'Triple Smash',
        text: 'Flip 3 coins. This attack does 20 damage plus 10 more damage for each heads.',
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
    id: 'ecard3-117',
    name: 'Zubat',
    nationalPokedexNumber: 41,
    imageUrl: 'https://images.pokemontcg.io/ecard3/117.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/117_hires.png',
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
    number: '117',
    artist: 'Hisao Nakamura',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Sound Waves',
        text: 'Flip a coin. If heads, the Defending Pokémon is now Confused.',
        damage: '',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Grass'
        ],
        name: 'Flitter',
        text: 'Choose 1 of your opponent\'s Pokémon. This attack does 10 damage to that Pokémon. Don\'t apply Weakness and Resistance. (Any other effects that would happen after applying Weakness and Resistance still happen.)',
        damage: '10',
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
    id: 'ecard3-118',
    name: 'Zubat',
    nationalPokedexNumber: 41,
    imageUrl: 'https://images.pokemontcg.io/ecard3/118.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/118_hires.png',
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
    number: '118',
    artist: 'Kyoko Umemoto',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Wing Attack',
        text: '',
        damage: '10',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Grass',
          'Colorless'
        ],
        name: 'Poison Spray',
        text: 'The Defending Pokémon is now Poisoned.',
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
    id: 'ecard3-119',
    name: 'Ancient Ruins',
    imageUrl: 'https://images.pokemontcg.io/ecard3/119.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/119_hires.png',
    supertype: 'Trainer',
    subtype: 'Stadium',
    number: '119',
    artist: 'Midori Harada',
    rarity: 'Uncommon',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    text: [
      'Once during each player\'s turn (before he or she attacks), if he or she has not played a Supporter card, that player may reveal his or her hand to his or her opponent. If that player reveals his or her hand and there is no Supporter card there, that player draws a card.'
    ]
  },
  {
    id: 'ecard3-120',
    name: 'Relic Hunter',
    imageUrl: 'https://images.pokemontcg.io/ecard3/120.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/120_hires.png',
    supertype: 'Trainer',
    subtype: 'Supporter',
    number: '120',
    artist: 'Kagemaru Himeno',
    rarity: 'Uncommon',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    text: [
      'Search your deck for up to 2 Supporter and/or Stadium cards, show them to your opponent, and put them into your hand. Shuffle your deck afterward.'
    ]
  },
  {
    id: 'ecard3-121',
    name: 'Apricorn Maker',
    imageUrl: 'https://images.pokemontcg.io/ecard3/121.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/121_hires.png',
    supertype: 'Trainer',
    subtype: 'Supporter',
    number: '121',
    artist: 'Kagemaru Himeno',
    rarity: 'Uncommon',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    text: [
      'Search your deck for up to 2 Trainer cards with Ball in their names, show them to your opponent, and put them into your hand. Shuffle your deck afterward.'
    ]
  },
  {
    id: 'ecard3-122',
    name: 'Crystal Shard',
    imageUrl: 'https://images.pokemontcg.io/ecard3/122.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/122_hires.png',
    supertype: 'Trainer',
    subtype: 'Pokémon Tool',
    number: '122',
    artist: 'Jungo Suzuki',
    rarity: 'Uncommon',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    text: [
      'As long as this card is attached to a Pokémon, that Pokémon\'s type (color) is Colorless. If that Pokémon attacks, discard this card at the end of the turn.'
    ]
  },
  {
    id: 'ecard3-123',
    name: 'Desert Shaman',
    imageUrl: 'https://images.pokemontcg.io/ecard3/123.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/123_hires.png',
    supertype: 'Trainer',
    subtype: 'Supporter',
    number: '123',
    artist: 'Kagemaru Himeno',
    rarity: 'Uncommon',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    text: [
      'Shuffle your hand into your deck and draw up to 4 cards. You opponent does the same.'
    ]
  },
  {
    id: 'ecard3-124',
    name: 'Fast Ball',
    imageUrl: 'https://images.pokemontcg.io/ecard3/124.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/124_hires.png',
    supertype: 'Trainer',
    subtype: '',
    number: '124',
    artist: 'Katsura Tabata',
    rarity: 'Uncommon',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    text: [
      'Reveal cards from your deck until you reveal an Evolution card. Show that card to your opponent and put it into your hand. Shuffle the other revealed cards into your deck. (If you don\'t reveal an Evolution card, shuffle all the revealed cards back into your deck.)'
    ]
  },
  {
    id: 'ecard3-125',
    name: 'Fisherman',
    imageUrl: 'https://images.pokemontcg.io/ecard3/125.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/125_hires.png',
    supertype: 'Trainer',
    subtype: 'Supporter',
    number: '125',
    artist: 'Kagemaru Himeno',
    rarity: 'Uncommon',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    text: [
      'Choose 4 basic Energy cards from your discard pile (if there are fewer basic Energy cards than 4, take all of them), show them to your opponent, and put them into your hand.'
    ]
  },
  {
    id: 'ecard3-126',
    name: 'Friend Ball',
    imageUrl: 'https://images.pokemontcg.io/ecard3/126.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/126_hires.png',
    supertype: 'Trainer',
    subtype: '',
    number: '126',
    artist: 'Katsura Tabata',
    rarity: 'Uncommon',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    text: [
      'Choose 1 of your opponent\'s Pokémon. Search your deck for a Baby Pokémon, Basic Pokémon, of Evolution card of the same type (color), show it to your opponent, and put it into your hand. Shuffle your deck afterward.'
    ]
  },
  {
    id: 'ecard3-127',
    name: 'Hyper Potion',
    imageUrl: 'https://images.pokemontcg.io/ecard3/127.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/127_hires.png',
    supertype: 'Trainer',
    subtype: '',
    number: '127',
    artist: 'Katsura Tabata',
    rarity: 'Uncommon',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    text: [
      'Choose 1 of your Pokémon. Discard 1 or 2 basic Energy cards attached to that Pokémon. If you discarded 1 Energy card, remove up to 3 damage counters from that Pokémon. If you discarded 2 Energy cards, remove up to 5 damage counters from that Pokémon.'
    ]
  },
  {
    id: 'ecard3-128',
    name: 'Lure Ball',
    imageUrl: 'https://images.pokemontcg.io/ecard3/128.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/128_hires.png',
    supertype: 'Trainer',
    subtype: '',
    number: '128',
    artist: 'Katsura Tabata',
    rarity: 'Uncommon',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    text: [
      'Flip 3 coins. For each heads, choose an Evolution card from your discard pile, show it to your opponent, and put it into your hand.'
    ]
  },
  {
    id: 'ecard3-129',
    name: 'Miracle Sphere Alpha',
    imageUrl: 'https://images.pokemontcg.io/ecard3/129.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/129_hires.png',
    supertype: 'Trainer',
    subtype: 'Technical Machine',
    number: '129',
    artist: 'Hiromichi Sugiyama',
    rarity: 'Uncommon',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    text: [
      'If the Pokémon using this attack has and Energy cards attached to it, the Defending Pokémon is now Confused. If the Pokémon using this attack has and basic Energy cards attached to it, this attack does 30 damage plus 10 more damage and removes 3 damage counters from the Pokémon that Miracle Sphere alpha is attached to.'
    ]
  },
  {
    id: 'ecard3-130',
    name: 'Miracle Sphere Beta',
    imageUrl: 'https://images.pokemontcg.io/ecard3/130.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/130_hires.png',
    supertype: 'Trainer',
    subtype: 'Technical Machine',
    number: '130',
    artist: 'Hiromichi Sugiyama',
    rarity: 'Uncommon',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    text: [
      'If the Pokémon using this attack has and basic Energy cards attached to it, this attack does 30 damage plus 10 more damage and the Defending Pokémon is now Burned. If the Pokémon using this attack has and basic Energy cards attached to it, choose an Energy card attached to the Defending Pokémon, if any, and your opponent shuffles that card into his or her deck.'
    ]
  },
  {
    id: 'ecard3-131',
    name: 'Miracle Sphere Gamma',
    imageUrl: 'https://images.pokemontcg.io/ecard3/131.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/131_hires.png',
    supertype: 'Trainer',
    subtype: 'Technical Machine',
    number: '131',
    artist: 'Hiromichi Sugiyama',
    rarity: 'Uncommon',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    text: [
      'If the Pokémon using this attack has and basic Energy cards attached to it, the Defending Pokémon is now Asleep and Poisoned. If the Pokémon using this attack has and basic Energy cards attached to it, this attack does 30 damage plus 10 more damage and lets you put 1 damage counter on each of your opponent\'s Benched Pokémon.'
    ]
  },
  {
    id: 'ecard3-132',
    name: 'Mirage Stadium',
    imageUrl: 'https://images.pokemontcg.io/ecard3/132.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/132_hires.png',
    supertype: 'Trainer',
    subtype: 'Stadium',
    number: '132',
    artist: 'Midori Harada',
    rarity: 'Uncommon',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    text: [
      'Whenever a player tries to Retreat a Pokémon during his or her turn, that player flips a coin. If heads, that player retreats that Pokémon (and discards Energy normally). If tails, that Pokémon can\'t Retreat this turn (the player doesn\'t discard any Energy).'
    ]
  },
  {
    id: 'ecard3-133',
    name: 'Mystery Plate Alpha',
    imageUrl: 'https://images.pokemontcg.io/ecard3/133.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/133_hires.png',
    supertype: 'Trainer',
    subtype: 'Technical Machine',
    number: '133',
    artist: 'Hiromichi Sugiyama',
    rarity: 'Uncommon',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    text: [
      'If your opponent has 5 or more Prizes, search your deck for a Trainer card, show it to your opponent, and put it into your hand. If your opponent has only 1 Prize, the Defending Pokémon is now Burned, Paralyzed, and Poisoned.'
    ]
  },
  {
    id: 'ecard3-134',
    name: 'Mystery Plate Beta',
    imageUrl: 'https://images.pokemontcg.io/ecard3/134.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/134_hires.png',
    supertype: 'Trainer',
    subtype: 'Technical Machine',
    number: '134',
    artist: 'Hiromichi Sugiyama',
    rarity: 'Uncommon',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    text: [
      'If your opponent has 5 or more Prizes, draw 3 cards. If your opponent has only 1 Prize, choose 2 Energy cards attached to the Defending Pokémon (1 if it has only 1). Your opponent shuffles those cards into his or her deck.'
    ]
  },
  {
    id: 'ecard3-135',
    name: 'Mystery Plate Gamma',
    imageUrl: 'https://images.pokemontcg.io/ecard3/135.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/135_hires.png',
    supertype: 'Trainer',
    subtype: 'Technical Machine',
    number: '135',
    artist: 'Hiromichi Sugiyama',
    rarity: 'Uncommon',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    text: [
      'If your opponent has 5 or more Prizes, shuffle your hand into your deck and then draw 6 cards. If your opponent has exactly 2 Prizes, choose 1 of your opponent\'s Evolved Pokémon. Your opponent puts the top card on that Evolved Pokémon on the bottom of his or her deck. (This counts as devolving that Pokémon.)'
    ]
  },
  {
    id: 'ecard3-136',
    name: 'Mystery Plate Delta',
    imageUrl: 'https://images.pokemontcg.io/ecard3/136.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/136_hires.png',
    supertype: 'Trainer',
    subtype: 'Technical Machine',
    number: '136',
    artist: 'Hiromichi Sugiyama',
    rarity: 'Uncommon',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    text: [
      'If your opponent has 5 or more Prizes, search your deck for up to 3 basic Energy cards, show them to your opponent, and put them into your hand. Shuffle your deck afterward. If your opponent has exactly 2 Prizes, remove all damage counters from 1 of your Pokémon.'
    ]
  },
  {
    id: 'ecard3-137',
    name: 'Mystery Zone',
    imageUrl: 'https://images.pokemontcg.io/ecard3/137.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/137_hires.png',
    supertype: 'Trainer',
    subtype: 'Stadium',
    number: '137',
    artist: 'Ken Ikuji',
    rarity: 'Uncommon',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    text: [
      'Once during each player\'s turn (before he or she attacks), if that player has an Evolution card in his or her hand, he or she may search his or her deck for a basic Energy card, show it to his or her opponent, and put it into his or her hand. Then that player chooses an Evolution card from his or her hand, shows it to his or her opponent, and puts it into his or her deck. That player shuffles his or her deck afterward.'
    ]
  },
  {
    id: 'ecard3-138',
    name: 'Oracle',
    imageUrl: 'https://images.pokemontcg.io/ecard3/138.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/138_hires.png',
    supertype: 'Trainer',
    subtype: 'Supporter',
    number: '138',
    artist: 'Kagemaru Himeno',
    rarity: 'Uncommon',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    text: [
      'Choose 2 cards from your deck and shuffle the rest of your deck. Put the chosen cards in top of your deck in any order.'
    ]
  },
  {
    id: 'ecard3-139',
    name: 'Star Piece',
    imageUrl: 'https://images.pokemontcg.io/ecard3/139.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/139_hires.png',
    supertype: 'Trainer',
    subtype: 'Pokémon Tool',
    number: '139',
    artist: 'Jungo Suzuki',
    rarity: 'Uncommon',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    text: [
      'At any time between turns, if the Pokémon this card is attached to is Benched and has 2 or more damage counters in it, search your deck for an Evolution card that Pokémon evolves into and put it on top of that Pokémon. (This counts as evolving that Pokémon.) Shuffle your deck afterward. Then, discard Star Piece.'
    ]
  },
  {
    id: 'ecard3-140',
    name: 'Underground Expedition',
    imageUrl: 'https://images.pokemontcg.io/ecard3/140.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/140_hires.png',
    supertype: 'Trainer',
    subtype: 'Supporter',
    number: '140',
    artist: 'Kagemaru Himeno',
    rarity: 'Uncommon',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    text: [
      'Look at the bottom 4 cards if your deck. Put 2 of those cards into your hand, and then return the remaining cards to the bottom of your deck in any order.'
    ]
  },
  {
    id: 'ecard3-141',
    name: 'Underground Lake',
    imageUrl: 'https://images.pokemontcg.io/ecard3/141.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/141_hires.png',
    supertype: 'Trainer',
    subtype: 'Stadium',
    number: '141',
    artist: 'Midori Harada',
    rarity: 'Uncommon',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    text: [
      'Once during each player\'s turn, that player may put an Omanyte or Kabuto card from his or her discard pile onto his or her Bench. (Cards put on the Bench in this way are considered Basic Pokémon.)'
    ]
  },
  {
    id: 'ecard3-142',
    name: 'Bounce Energy',
    imageUrl: 'https://images.pokemontcg.io/ecard3/142.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/142_hires.png',
    supertype: 'Energy',
    subtype: 'Special',
    number: '142',
    artist: 'Shin-ichi Yoshikawa',
    rarity: 'Uncommon',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    text: [
      'This card provides Colorless Colorless Energy. You can attach this card to your Pokémon that has basic Energy cards attached to it. When you play this card from your hand and attach it to 1 of your Pokémon, return a basic Energy card attached to that Pokémon to your hand.'
    ]
  },
  {
    id: 'ecard3-143',
    name: 'Cyclone Energy',
    imageUrl: 'https://images.pokemontcg.io/ecard3/143.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/143_hires.png',
    supertype: 'Energy',
    subtype: 'Special',
    number: '143',
    artist: 'Shin-ichi Yoshikawa',
    rarity: 'Uncommon',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    text: [
      'This card provides Colorless Energy. When you play this card from your hand and attach it to your Active Pokémon, your opponent switches his or her Active Pokémon with 1 of his or her Benched Pokémon.'
    ]
  },
  {
    id: 'ecard3-144',
    name: 'Retro Energy',
    imageUrl: 'https://images.pokemontcg.io/ecard3/144.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/144_hires.png',
    supertype: 'Energy',
    subtype: 'Special',
    number: '144',
    artist: 'Shin-ichi Yoshikawa',
    rarity: 'Uncommon',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    text: [
      'This card provides Colorless Energy. When you play this card from your hand and attach it to 1 of your Evolved Pokémon, you may remove up to 2 damage counters from that Pokémon and discard the top card from it. (This counts as devolving it.)'
    ]
  },
  {
    id: 'ecard3-145',
    name: 'Celebi',
    nationalPokedexNumber: 251,
    imageUrl: 'https://images.pokemontcg.io/ecard3/145.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/145_hires.png',
    types: [
      'Colorless'
    ],
    supertype: 'Pokémon',
    subtype: 'Basic',
    ability: {
      name: 'Crystal Type',
      text: 'Whenever you attach a Grass, Water, or Psychic basic Energy card from your hand to Celebi, Celebi\'s type (color) becomes the same as that type of energy until the end of the turn.',
      type: 'Poké-Body'
    },
    hp: '60',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '145',
    artist: 'Mitsuhiro Arita',
    rarity: 'Rare',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Grass',
          'Water'
        ],
        name: 'Empathetic Healing',
        text: 'Remove 2 damage counters from Celebi and each Pokémon that\'s the same type (color) as Celebi.',
        damage: '',
        convertedEnergyCost: 2
      },
      {
        cost: [
          'Grass',
          'Psychic',
          'Colorless'
        ],
        name: 'Mind Bend',
        text: 'Flip a coin. If heads, the Defending Pokémon is now Confused.',
        damage: '20',
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
    id: 'ecard3-146',
    name: 'Charizard',
    nationalPokedexNumber: 6,
    imageUrl: 'https://images.pokemontcg.io/ecard3/146.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/146_hires.png',
    types: [
      'Colorless'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 2',
    evolvesFrom: 'Charmeleon',
    ability: {
      name: 'Crystal Type',
      text: 'Whenever you attach a Fire, Lightning, or Fighting basic Energy card from your hand to Charizard, Charizard\'s type (color) becomes the same as that type of energy until the end of the turn.',
      type: 'Poké-Body'
    },
    hp: '110',
    retreatCost: [
      'Colorless',
      'Colorless',
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 4,
    number: '146',
    artist: 'Kouki Saitou',
    rarity: 'Rare',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Fighting',
          'Fire',
          'Fire'
        ],
        name: 'Fireblast',
        text: 'Discard an Energy card attached to Charizard.',
        damage: '40',
        convertedEnergyCost: 3
      },
      {
        cost: [
          'Lightning',
          'Lightning',
          'Fire',
          'Colorless'
        ],
        name: 'Dragon Tail',
        text: 'Flip 2 coins. This attack does 50 damage times the number of heads.',
        damage: '50×',
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
    id: 'ecard3-147',
    name: 'Crobat',
    nationalPokedexNumber: 169,
    imageUrl: 'https://images.pokemontcg.io/ecard3/147.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/147_hires.png',
    types: [
      'Colorless'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 2',
    evolvesFrom: 'Golbat',
    ability: {
      name: 'Crystal Type',
      text: 'Whenever you attach a Grass, Fire, or Psychic basic Energy card from your hand to Crobat, Crobat\'s type (color) becomes the same as that type of energy until the end of the turn.',
      type: 'Poké-Body'
    },
    hp: '80',
    number: '147',
    artist: 'Atsuko Nishida',
    rarity: 'Rare',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Grass',
          'Fire',
          'Colorless'
        ],
        name: 'Poison Flame',
        text: 'Flip a coin. If heads, the Defending Pokémon is now Burned and Poisoned.',
        damage: '',
        convertedEnergyCost: 3
      },
      {
        cost: [
          'Grass',
          'Psychic',
          'Psychic'
        ],
        name: 'Squared Attack',
        text: 'Flip 4 coins. This attack does 20 damage times the number of heads.',
        damage: '20×',
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
    id: 'ecard3-148',
    name: 'Golem',
    nationalPokedexNumber: 76,
    imageUrl: 'https://images.pokemontcg.io/ecard3/148.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/148_hires.png',
    types: [
      'Colorless'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 2',
    evolvesFrom: 'Graveler',
    ability: {
      name: 'Crystal Type',
      text: 'Whenever you attach a Grass, Fire, or Fighting basic Energy card from your hand to Golem, Golem\'s type (color) becomes the same as that type of energy until the end of the turn.',
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
    number: '148',
    artist: 'Mitsuhiro Arita',
    rarity: 'Rare',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Fighting',
          'Fighting',
          'Colorless'
        ],
        name: 'Rock Throw',
        text: '',
        damage: '30',
        convertedEnergyCost: 3
      },
      {
        cost: [
          'Fighting',
          'Grass',
          'Fire',
          'Colorless'
        ],
        name: 'Earth Bomb',
        text: 'Golem does 20 damage to itself. This attack also does 10 damage to each Benched Pokémon (yours and your opponents). (Don\'t apply Weakness and Resistance for Benched Pokémon.)',
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
    id: 'ecard3-149',
    name: 'Ho-oh',
    nationalPokedexNumber: 250,
    imageUrl: 'https://images.pokemontcg.io/ecard3/149.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/149_hires.png',
    types: [
      'Colorless'
    ],
    supertype: 'Pokémon',
    subtype: 'Basic',
    ability: {
      name: 'Crystal Type',
      text: 'Whenever you attach a Fire, Water, or Lightning basic Energy card from your hand to Ho-oh, Ho-oh\'s type (color) becomes the same as that type of energy until the end of the turn.',
      type: 'Poké-Body'
    },
    hp: '80',
    retreatCost: [
      'Colorless',
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 3,
    number: '149',
    artist: 'Hajime Kusajima',
    rarity: 'Rare',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Lightning',
          'Fire'
        ],
        name: 'Holy Flame',
        text: '',
        damage: '20',
        convertedEnergyCost: 2
      },
      {
        cost: [
          'Fire',
          'Water',
          'Water',
          'Colorless'
        ],
        name: 'Scalding Steam',
        text: 'Discard an Energy card attached to Ho-oh and flip a coin. If heads, the Defending Pokémon is now Burned.',
        damage: '40',
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
    id: 'ecard3-150',
    name: 'Kabutops',
    nationalPokedexNumber: 141,
    imageUrl: 'https://images.pokemontcg.io/ecard3/150.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/150_hires.png',
    types: [
      'Colorless'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 2',
    evolvesFrom: 'Kabuto',
    ability: {
      name: 'Crystal Type',
      text: 'Whenever you attach a Water, Lightning, or Fighting basic Energy card from your hand to Kabutops, Kabutop\'s type (color) becomes the same as that type of energy until the end of the turn.',
      type: 'Poké-Body'
    },
    hp: '90',
    retreatCost: [
      'Colorless',
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 3,
    number: '150',
    artist: 'Atsuko Nishida',
    rarity: 'Rare',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Water',
          'Fighting',
          'Colorless'
        ],
        name: 'Draining Cut',
        text: 'Remove a damage counter from Kabutops.',
        damage: '20',
        convertedEnergyCost: 3
      },
      {
        cost: [
          'Fighting',
          'Lightning',
          'Lightning',
          'Colorless'
        ],
        name: 'Triple Cutter',
        text: 'Flip 3 coins. This attack does 30 damage times the number of heads.',
        damage: '30×',
        convertedEnergyCost: 4
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
    id: 'ecard3-151',
    name: 'Alakazam',
    nationalPokedexNumber: 65,
    imageUrl: 'https://images.pokemontcg.io/ecard3/151.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/151_hires.png',
    types: [
      'Psychic'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 2',
    evolvesFrom: 'Kadabra',
    ability: {
      name: 'Energy Jump',
      text: 'Once during your turn (before you attack) you may move an energy card from 1 of your Pokémon to another of your Pokémon. This power can\'t be used if Alakazam is affected by a Special Condition.',
      type: 'Poké-Power'
    },
    hp: '100',
    retreatCost: [
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 2,
    number: 'H1',
    artist: 'Kimiya Masago',
    rarity: 'Holo Rare',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Colorless',
          'Colorless',
          'Colorless'
        ],
        name: 'Psychic',
        text: 'This attack does 30 damage plus 10 more damage for each energy card attached to the Defending Pokémon.',
        damage: '30+',
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
    id: 'ecard3-152',
    name: 'Arcanine',
    nationalPokedexNumber: 59,
    imageUrl: 'https://images.pokemontcg.io/ecard3/152.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/152_hires.png',
    types: [
      'Fire'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Growlithe',
    ability: {
      name: 'Energy Recharge',
      text: 'When you play Arcanine from your hand to evolve your Active Pokémon, you may flip 3 coins. For each heads, choose a basic energy card from your discard pile and attach it to Arcanine.',
      type: 'Poké-Power'
    },
    hp: '80',
    retreatCost: [
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 2,
    number: 'H2',
    artist: 'Aya Kusube',
    rarity: 'Holo Rare',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Shake',
        text: 'Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon, if any.',
        damage: '10',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Fire',
          'Fire',
          'Colorless'
        ],
        name: 'White Flames',
        text: 'Discard all Fire Energy cards attached to Arcanine.',
        damage: '70',
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
    id: 'ecard3-153',
    name: 'Articuno',
    nationalPokedexNumber: 144,
    imageUrl: 'https://images.pokemontcg.io/ecard3/153.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/153_hires.png',
    types: [
      'Water'
    ],
    supertype: 'Pokémon',
    subtype: 'Basic',
    ability: {
      name: 'Water Immunity',
      text: 'You can\'t attach Water Energy cards from your hand to Articuno.',
      type: 'Poké-Body'
    },
    hp: '80',
    retreatCost: [
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 2,
    number: 'H3',
    artist: 'Hajime Kusajima',
    rarity: 'Holo Rare',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Freeze Solid',
        text: 'If there are any Water Energy cards in your discard pile, flip a coin. If heads, attach 1 of them to Articuno.',
        damage: '10',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Water',
          'Water',
          'Colorless',
          'Colorless'
        ],
        name: 'Ice Cyclone',
        text: 'Flip a coin. If heads, this attack does 10 damage to each of your opponent\'s Benched Pokémon. If tails, this attack does 10 damage to each of your Pokémon in play. (Don\'t apply Weakness and Resistance for Benched Pokémon.)',
        damage: '50',
        convertedEnergyCost: 4
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
        type: 'Metal',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard3-154',
    name: 'Beedrill',
    nationalPokedexNumber: 15,
    imageUrl: 'https://images.pokemontcg.io/ecard3/154.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/154_hires.png',
    types: [
      'Grass'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 2',
    evolvesFrom: 'Kakuna',
    ability: {
      name: 'Venom Spray',
      text: 'When you play Beedrill from your hand to evolve your Active Pokémon, the Defending Pokémon is now Paralyzed and Poisoned.',
      type: 'Poké-Power'
    },
    hp: '80',
    number: 'H4',
    artist: 'Hikaru Koike',
    rarity: 'Holo Rare',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Colorless',
          'Colorless'
        ],
        name: 'Needle Rush',
        text: 'Flip 4 coins. If you get 1 heads, this attack does 10 damage plus 10 more damage. If you get 2 heads, this attack does 10 damage plus 20 more damage. If you get 3 heads, this attack does 10 damage plus 50 more damage. If you get 4 heads, this attack does 10 damage plus 90 more damage.',
        damage: '10+',
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
    id: 'ecard3-155',
    name: 'Crobat',
    nationalPokedexNumber: 169,
    imageUrl: 'https://images.pokemontcg.io/ecard3/155.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/155_hires.png',
    types: [
      'Grass'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 2',
    evolvesFrom: 'Golbat',
    ability: {
      name: 'Carry Off',
      text: 'Once during your turn (before you attack) you may flip a coin. If heads, look at your opponent\'s hand. If your opponent has and Baby Pokémon, Basic Pokémon, of Evolution cards there, choose 1 of them. Your opponent shuffles that card into his or her deck. This power can\'t be used if Crobat is affected by a Special Condition.',
      type: 'Poké-Power'
    },
    hp: '90',
    number: 'H5',
    artist: 'Kimiya Masago',
    rarity: 'Holo Rare',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Grass',
          'Colorless',
          'Colorless'
        ],
        name: 'Double Cross',
        text: 'Flip 2 coins. This attack does 40 damage times the number of heads. If both of them are tails, the defending Pokémon is now Confused and Poisoned.',
        damage: '40×',
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
    id: 'ecard3-156',
    name: 'Dewgong',
    nationalPokedexNumber: 87,
    imageUrl: 'https://images.pokemontcg.io/ecard3/156.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/156_hires.png',
    types: [
      'Water'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Seel',
    hp: '80',
    retreatCost: [
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 2,
    number: 'H6',
    artist: 'Kouki Saitou',
    rarity: 'Holo Rare',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Water',
          'Colorless'
        ],
        name: 'Freeze Lock',
        text: 'Flip a coin. If heads, your opponent can\'t attach Energy cards from his or her hand to his or her Active Pokémon during his or her next turn.',
        damage: '20',
        convertedEnergyCost: 2
      },
      {
        cost: [
          'Water',
          'Water',
          'Colorless',
          'Colorless'
        ],
        name: 'Crushing Ice',
        text: 'This attack does 40 damage plus 10 more damage for each Energy in the Defending Pokémon\'s Retreat Cost. Damage is calculated using the Defending Pokémon\'s Retreat Cost after applying effects to the Retreat Cost.',
        damage: '40+',
        convertedEnergyCost: 4
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
    id: 'ecard3-157',
    name: 'Flareon',
    nationalPokedexNumber: 136,
    imageUrl: 'https://images.pokemontcg.io/ecard3/157.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/157_hires.png',
    types: [
      'Fire'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Eevee',
    ability: {
      name: 'Self Healing',
      text: 'Whenever you attach a Fire Energy card from your hand to Flareon, remove all Special Conditions affecting Flareon.',
      type: 'Poké-Body'
    },
    hp: '70',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: 'H7',
    artist: 'Kyoko Umemoto',
    rarity: 'Holo Rare',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Fire'
        ],
        name: 'Singe',
        text: 'The Defending Pokémon is now Burned.',
        damage: '',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Colorless',
          'Colorless',
          'Colorless'
        ],
        name: 'Burn Booster',
        text: 'Discard an Energy card attached to Flareon in order to use this attack. If the discarded card is a Fire Energy card, this attack does 40 damage plus 10 more damage.',
        damage: '40+',
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
    id: 'ecard3-158',
    name: 'Forretress',
    nationalPokedexNumber: 205,
    imageUrl: 'https://images.pokemontcg.io/ecard3/158.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/158_hires.png',
    types: [
      'Metal'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Pineco',
    hp: '70',
    retreatCost: [
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 2,
    number: 'H8',
    artist: 'Midori Harada',
    rarity: 'Holo Rare',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Colorless',
          'Colorless'
        ],
        name: 'Spinning Blow',
        text: 'Flip 2 coins. This attack does 20 damage times the number of heads. If both coins are heads, switch Forretress with 1 of your Benched Pokémon.',
        damage: '20×',
        convertedEnergyCost: 2
      },
      {
        cost: [
          'Metal',
          'Colorless',
          'Colorless'
        ],
        name: 'Scatterbomb',
        text: 'Flip 2 coins. For each heads, do 10 damage to each of your opponent\'s Benched Pokémon. For each tails, do 10 damage to each of your own Benched Pokémon. (Don\'t apply Weakness or Resistance for Benched Pokémon.)',
        damage: '40',
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
    id: 'ecard3-159',
    name: 'Gengar',
    nationalPokedexNumber: 94,
    imageUrl: 'https://images.pokemontcg.io/ecard3/159.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/159_hires.png',
    types: [
      'Psychic'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 2',
    evolvesFrom: 'Haunter',
    ability: {
      name: 'Manipulate',
      text: 'When you play Gengar from your hand to evolve your Active Pokémon, you may put a Basic Pokémon (excluding Baby Pokémon) from your discard pile onto your bench. Then flip 3 coins. For each heads, choose a basic Energy card from your discard pile and attach it to that Pokémon.',
      type: 'Poké-Power'
    },
    hp: '100',
    retreatCost: [
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 2,
    number: 'H9',
    artist: 'Kyoko Umemoto',
    rarity: 'Holo Rare',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Psychic',
          'Psychic',
          'Colorless',
          'Colorless'
        ],
        name: 'Hydrokinesis',
        text: 'Flip a coin. If heads, the Defending Pokémon is now Burned. If tails, the Defending Pokémon is now Confused.',
        damage: '40',
        convertedEnergyCost: 4
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
    id: 'ecard3-160',
    name: 'Gyarados',
    nationalPokedexNumber: 130,
    imageUrl: 'https://images.pokemontcg.io/ecard3/160.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/160_hires.png',
    types: [
      'Water'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Magikarp',
    ability: {
      name: 'Flame Vapor',
      text: 'When you play Gyarados from your hand to evolve your Active Pokémon, you may flip 2 coins. For each heads, discard an Energy card attached to the Defending Pokémon.',
      type: 'Poké-Power'
    },
    hp: '90',
    retreatCost: [
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 2,
    number: 'H10',
    artist: 'Kimiya Masago',
    rarity: 'Holo Rare',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Water',
          'Colorless',
          'Colorless',
          'Colorless'
        ],
        name: 'Dragon\'s Vengeance',
        text: 'If Gyarados has 7 or more damage counters on it, this attack\'s base damage is 100.',
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
    id: 'ecard3-161',
    name: 'Houndoom',
    nationalPokedexNumber: 229,
    imageUrl: 'https://images.pokemontcg.io/ecard3/161.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/161_hires.png',
    types: [
      'Darkness'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Houndour',
    hp: '70',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: 'H11',
    artist: 'Kimiya Masago',
    rarity: 'Holo Rare',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Colorless',
          'Colorless'
        ],
        name: 'Ambush',
        text: 'Flip a coin. If heads, this attack does 10 damage plus 20 more damage.',
        damage: '10+',
        convertedEnergyCost: 2
      },
      {
        cost: [
          'Darkness',
          'Colorless',
          'Colorless'
        ],
        name: 'Lonely Fang',
        text: 'This attack does 30 damage plus 20 damage times the number of your opponent\'s Benched Pokémon minus the number of your Benched Pokémon. (For example, if your opponent has 3 Benched Pokémon and you have 1, this attack will do 30 damage plus 40 more damage.',
        damage: '30+',
        convertedEnergyCost: 3
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
    id: 'ecard3-162',
    name: 'Jolteon',
    nationalPokedexNumber: 135,
    imageUrl: 'https://images.pokemontcg.io/ecard3/162.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/162_hires.png',
    types: [
      'Lightning'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Eevee',
    ability: {
      name: 'Self Healing',
      text: 'Whenever you attach a Lightning Energy card from your hand to Jolteon, remove all Special Conditions affecting Jolteon.',
      type: 'Poké-Body'
    },
    hp: '70',
    number: 'H12',
    artist: 'Hikaru Koike',
    rarity: 'Holo Rare',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Lightning'
        ],
        name: 'Thundershock',
        text: 'Flip a coin. If heads, the Defending Pokémon is now Paralyzed.',
        damage: '10',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Lightning',
          'Colorless',
          'Colorless'
        ],
        name: 'Thunderspark',
        text: 'This attack does 10 damage to each Benched Pokémon with at least 1 Energy card attached to it (yours and your opponent\'s).',
        damage: '40',
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
    id: 'ecard3-163',
    name: 'Kabutops',
    nationalPokedexNumber: 141,
    imageUrl: 'https://images.pokemontcg.io/ecard3/163.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/163_hires.png',
    types: [
      'Fighting'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 2',
    evolvesFrom: 'Kabuto',
    ability: {
      name: 'Primal Aura',
      text: 'As long as Kabutops is your Active Pokémon, neither player can play Basic Pokémon or Evolution cards from his or her hand to evolve Benched Pokémon.',
      type: 'Poké-Body'
    },
    hp: '90',
    retreatCost: [
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 2,
    number: 'H13',
    artist: 'Kouki Saitou',
    rarity: 'Holo Rare',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Fighting',
          'Fighting',
          'Colorless'
        ],
        name: 'Dual Cut',
        text: 'Flip 2 coins. This attack does 50 damage times the number of heads.',
        damage: '50×',
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
    id: 'ecard3-164',
    name: 'Ledian',
    nationalPokedexNumber: 166,
    imageUrl: 'https://images.pokemontcg.io/ecard3/164.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/164_hires.png',
    types: [
      'Grass'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Ledyba',
    hp: '70',
    number: 'H14',
    artist: 'Hikaru Koike',
    rarity: 'Holo Rare',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Pollen Shield',
        text: 'During your opponent\'s next turn, Ledian can\'t become affected by a Special Condition. (Any other effect of attacks, Poké',
        damage: '10',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Grass',
          'Grass',
          'Colorless'
        ],
        name: 'Swift',
        text: 'This attack\'s damage isn\'t affected by Weakness, Resistance, Poké-Powers, Poké-Bodies, or any other effects on the Defending Pokémon.',
        damage: '50',
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
    id: 'ecard3-165',
    name: 'Machamp',
    nationalPokedexNumber: 68,
    imageUrl: 'https://images.pokemontcg.io/ecard3/165.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/165_hires.png',
    types: [
      'Fighting'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 2',
    evolvesFrom: 'Machoke',
    ability: {
      name: 'Immunity',
      text: 'Prevent all effects of your opponent\'s attacks done to Machamp.',
      type: 'Poké-Body'
    },
    hp: '120',
    retreatCost: [
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 2,
    number: 'H15',
    artist: 'Naoyo Kimura',
    rarity: 'Holo Rare',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Fighting',
          'Colorless'
        ],
        name: 'Drag Off',
        text: 'Before doing damage, if your opponent has any Benched Pokémon, choose 1 of them and switch it with the Defending Pokémon. If your opponent has no Benched Pokémon, ignore this effect.',
        damage: '20',
        convertedEnergyCost: 2
      },
      {
        cost: [
          'Fighting',
          'Fighting',
          'Colorless',
          'Colorless'
        ],
        name: 'Hurricane Punch',
        text: 'Flip 4 coins. This attack does 30 damage times the number of heads.',
        damage: '30×',
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
    id: 'ecard3-166',
    name: 'Magcargo',
    nationalPokedexNumber: 219,
    imageUrl: 'https://images.pokemontcg.io/ecard3/166.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/166_hires.png',
    types: [
      'Fire'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Slugma',
    hp: '80',
    retreatCost: [
      'Colorless',
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 3,
    number: 'H16',
    artist: 'Hajime Kusajima',
    rarity: 'Holo Rare',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Colorless',
          'Colorless'
        ],
        name: 'Eruption',
        text: 'Each player discards the top card of his or her deck. This attack does 20 damage plus 20 more damage for each Energy card discarded in this way.',
        damage: '20+',
        convertedEnergyCost: 2
      },
      {
        cost: [
          'Fire',
          'Fire',
          'Colorless',
          'Colorless'
        ],
        name: 'Fire Stream',
        text: 'Discard a Fire Energy card attached to Magcargo in order to use this attack. If your opponent has any Benched Pokémon, this attack does 10 damage to each of them. (Don\'t apply Weakness or Resistance for Benched Pokémon.)',
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
    id: 'ecard3-167',
    name: 'Magcargo',
    nationalPokedexNumber: 219,
    imageUrl: 'https://images.pokemontcg.io/ecard3/167.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/167_hires.png',
    types: [
      'Fighting'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Slugma',
    ability: {
      name: 'Streaming Mantle',
      text: 'When you play Magcargo from your hand to evolve your Active Pokémon, you may discard the top 3 cards of your deck and then shuffle 3 basic energy cards from your discard pile into your deck. If you do, your opponent must do the same.',
      type: 'Poké-Power'
    },
    hp: '80',
    retreatCost: [
      'Colorless',
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 3,
    number: 'H17',
    artist: 'Mitsuhiro Arita',
    rarity: 'Holo Rare',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Fighting',
          'Colorless',
          'Colorless'
        ],
        name: 'Crushing Lava',
        text: 'You may discard a Fire or Fighting basic Energy card attached to Magcargo. If you discard a Fire Energy card in this way, the Defending Pokémon is now Burned. If you discard a Fighting Energy card in this way, this attack does 40 damage plus 20 more damage.',
        damage: '40+',
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
    id: 'ecard3-168',
    name: 'Magneton',
    nationalPokedexNumber: 82,
    imageUrl: 'https://images.pokemontcg.io/ecard3/168.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/168_hires.png',
    types: [
      'Lightning'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Magnemite',
    ability: {
      name: 'Attract Energy',
      text: 'When you play Magneton from your hand to evolve 1 of your Pokémon, you may move any number of basic Energy cards attached to your other Pokémon to Magneton.',
      type: 'Poké-Power'
    },
    hp: '80',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: 'H18',
    artist: 'Hajime Kusajima',
    rarity: 'Holo Rare',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Lightning',
          'Colorless',
          'Colorless'
        ],
        name: 'Electric Blast',
        text: 'You may discard all Lightning Energy cards attached to Magneton when you use this attack. If you do, put damage counters equal to the amount of Energy cards removed in this way on any number of your opponent\'s Benched Pokémon in the way you like. (For example, if you discard 3 Lightning Energy cards, you can put 1 damage counter on 1 of your opponent\'s Benched Pokémon and 2 on another.)',
        damage: '40',
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
    id: 'ecard3-169',
    name: 'Magneton',
    nationalPokedexNumber: 82,
    imageUrl: 'https://images.pokemontcg.io/ecard3/169.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/169_hires.png',
    types: [
      'Lightning'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Magnemite',
    hp: '80',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: 'H19',
    artist: 'Hajime Kusajima',
    rarity: 'Holo Rare',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Colorless',
          'Colorless'
        ],
        name: 'Bounce Off',
        text: 'If Magneton and the Defending Pokémon don\'t have the same number of Energy cards attached to them, the player controlling the Active Pokémon with the fewest number of Energy cards attached to it switches 1 of his or her Benched Pokémon with his or her Active Pokémon.',
        damage: '20',
        convertedEnergyCost: 2
      },
      {
        cost: [
          'Metal',
          'Metal',
          'Colorless'
        ],
        name: 'Magnetic Wave',
        text: 'This attack does 30 damage plus 10 more damage times the number of your Benched Pokémon minus the number of your opponent\'s Benched Pokémon. (For example, if your opponent has 1 Benched Pokémon and you have 3, this attack will do 30 damage plus 20 more damage.)',
        damage: '30+',
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
        type: 'Fighting',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard3-170',
    name: 'Moltres',
    nationalPokedexNumber: 146,
    imageUrl: 'https://images.pokemontcg.io/ecard3/170.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/170_hires.png',
    types: [
      'Fire'
    ],
    supertype: 'Pokémon',
    subtype: 'Basic',
    ability: {
      name: 'Fire Immunity',
      text: 'You can\'t attach Fire Energy cards from your hand to Moltres.',
      type: 'Poké-Body'
    },
    hp: '80',
    retreatCost: [
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 2,
    number: 'H20',
    artist: 'Kouki Saitou',
    rarity: 'Holo Rare',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Collect Fire',
        text: 'If there are any Fire Energy cards in your discard pile, flip a coin. If heads, attach 1 of them to Moltres.',
        damage: '10',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Fire',
          'Fire',
          'Colorless',
          'Colorless'
        ],
        name: 'Burning Tail',
        text: 'Flip a coin. If tails, discard a Fire Energy card attached to Moltres.',
        damage: '60',
        convertedEnergyCost: 4
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
        type: 'Water',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard3-171',
    name: 'Nidoqueen',
    nationalPokedexNumber: 31,
    imageUrl: 'https://images.pokemontcg.io/ecard3/171.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/171_hires.png',
    types: [
      'Grass'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 2',
    evolvesFrom: 'Nidorina',
    ability: {
      name: 'Evolution Helper',
      text: 'Once during your turn (before you attack) if Nidoqueen is on your bench, you may search your deck for a card that evolves from your Active Pokémon and attach it to your Active Pokémon. (this counts as evolving that Pokémon) Shuffle your deck afterward.',
      type: 'Poké-Power'
    },
    hp: '110',
    retreatCost: [
      'Colorless',
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 3,
    number: 'H21',
    artist: 'Mitsuhiro Arita',
    rarity: 'Holo Rare',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Grass',
          'Colorless',
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
        type: 'Psychic',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard3-172',
    name: 'Piloswine',
    nationalPokedexNumber: 221,
    imageUrl: 'https://images.pokemontcg.io/ecard3/172.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/172_hires.png',
    types: [
      'Water'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Swinub',
    hp: '90',
    retreatCost: [
      'Colorless',
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 3,
    number: 'H22',
    artist: 'Yuka Morii',
    rarity: 'Holo Rare',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Water',
          'Colorless',
          'Colorless'
        ],
        name: 'Freezing Breath',
        text: 'Flip a coin. If heads, the Defending Pokémon is now Paralyzed. If tails, the Defending Pokémon is now Asleep.',
        damage: '20',
        convertedEnergyCost: 3
      },
      {
        cost: [
          'Fighting',
          'Colorless',
          'Colorless',
          'Colorless'
        ],
        name: 'Trample',
        text: 'For each Benched Pokémon (yours and your opponent\'s), flip a coin. If heads, this attack does 20 damage to that Pokémon. (Don\'t apply Weakness and Resistance for Benched Pokémon.)',
        damage: '40',
        convertedEnergyCost: 4
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
    id: 'ecard3-173',
    name: 'Politoed',
    nationalPokedexNumber: 186,
    imageUrl: 'https://images.pokemontcg.io/ecard3/173.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/173_hires.png',
    types: [
      'Water'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 2',
    evolvesFrom: 'Poliwhirl',
    hp: '110',
    retreatCost: [
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 2,
    number: 'H23',
    artist: 'Atsuko Nishida',
    rarity: 'Holo Rare',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Sudden Growth',
        text: 'Attach any number of basic Energy cards from your hand to Politoed.',
        damage: '',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Water',
          'Colorless',
          'Colorless'
        ],
        name: 'Frog Hop',
        text: 'Flip a coin. If heads, this attack does 30 damage plus 20 more damage.',
        damage: '30+',
        convertedEnergyCost: 3
      },
      {
        cost: [
          'Water',
          'Water',
          'Colorless',
          'Colorless',
          'Colorless'
        ],
        name: 'Energy Splash',
        text: 'Move 2 Energy cards attached to Politoed to 1 or 2 of your Benched Pokémon. (You may put both on the same Pokémon, or 1 each on 2 different Pokémon.) If you have no Benched Pokémon, ignore this effect.',
        damage: '70',
        convertedEnergyCost: 5
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
    id: 'ecard3-174',
    name: 'Poliwrath',
    nationalPokedexNumber: 62,
    imageUrl: 'https://images.pokemontcg.io/ecard3/174.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/174_hires.png',
    types: [
      'Fighting'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 2',
    evolvesFrom: 'Poliwhirl',
    ability: {
      name: 'Strange Spiral',
      text: 'Once during your turn (before you attack), if Poliwrath if your Active Pokémon, you may discard a basic Energy card attached to Poliwrath. If you do, the Defending Pokémon is now Confused. This power can\'t be used if Poliwrath is affected by a Special Condition.',
      type: 'Poké-Power'
    },
    hp: '110',
    retreatCost: [
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 2,
    number: 'H24',
    artist: 'Naoyo Kimura',
    rarity: 'Holo Rare',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Fighting',
          'Fighting',
          'Colorless'
        ],
        name: 'Spiral Punch',
        text: 'Flip a coin until you get tails. This attack does 40 damage plus 20 more damage for each heads.',
        damage: '40+',
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
    id: 'ecard3-175',
    name: 'Raichu',
    nationalPokedexNumber: 26,
    imageUrl: 'https://images.pokemontcg.io/ecard3/175.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/175_hires.png',
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
    number: 'H25',
    artist: 'Yuka Morii',
    rarity: 'Holo Rare',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Colorless',
          'Colorless'
        ],
        name: 'Zzzap',
        text: 'This attack does 20 damage to each Pokémon with a Poké',
        damage: '',
        convertedEnergyCost: 2
      },
      {
        cost: [
          'Lightning',
          'Colorless',
          'Colorless'
        ],
        name: 'Lightning Storm',
        text: 'Flip a coin. If tails, put 2 damage counters on Raichu.',
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
    id: 'ecard3-176',
    name: 'Raikou',
    nationalPokedexNumber: 243,
    imageUrl: 'https://images.pokemontcg.io/ecard3/176.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/176_hires.png',
    types: [
      'Lightning'
    ],
    supertype: 'Pokémon',
    subtype: 'Basic',
    ability: {
      name: 'Pure Body',
      text: 'To attach a Lightning Energy card from your hand to Raikou, you must discard an Energy card attached to Raikou. (Attach the Lightning energy, and then discard an Energy card from Raikou.)',
      type: 'Poké-Body'
    },
    hp: '70',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: 'H26',
    artist: 'Mitsuhiro Arita',
    rarity: 'Holo Rare',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Lightning',
          'Colorless',
          'Colorless'
        ],
        name: 'Lightning Sphere',
        text: 'You may flip a coin. If heads, discard all Energy cards attached to Raikou. This attack does 40 damage plus 20 more damage for each Energy card discarded in this way.',
        damage: '40+',
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
    id: 'ecard3-177',
    name: 'Rhydon',
    nationalPokedexNumber: 112,
    imageUrl: 'https://images.pokemontcg.io/ecard3/177.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/177_hires.png',
    types: [
      'Fighting'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Rhyhorn',
    hp: '90',
    retreatCost: [
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 2,
    number: 'H27',
    artist: 'Mitsuhiro Arita',
    rarity: 'Holo Rare',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Fighting',
          'Colorless',
          'Colorless'
        ],
        name: 'Stomp',
        text: 'Flip a coin. If heads, this attack does 30 damage plus 20 more damage.',
        damage: '30+',
        convertedEnergyCost: 3
      },
      {
        cost: [
          'Fighting',
          'Fighting',
          'Colorless',
          'Colorless',
          'Colorless'
        ],
        name: 'Giant Tail',
        text: 'Flip a coin. If tails, this attack does nothing.',
        damage: '',
        convertedEnergyCost: 5
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
    id: 'ecard3-178',
    name: 'Starmie',
    nationalPokedexNumber: 121,
    imageUrl: 'https://images.pokemontcg.io/ecard3/178.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/178_hires.png',
    types: [
      'Psychic'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Staryu',
    hp: '80',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: 'H28',
    artist: 'Hajime Kusajima',
    rarity: 'Holo Rare',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Psychic'
        ],
        name: 'Energy Burst',
        text: 'Flip a coin. If heads, this attack does 10 damage times the number of Energy cards attached to Starmie and the Defending Pokémon.',
        damage: '10×',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Psychic',
          'Colorless',
          'Colorless'
        ],
        name: 'Star Back',
        text: 'Attach a basic Energy card from your discard pile to 1 of your Pokémon.',
        damage: '40',
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
    id: 'ecard3-179',
    name: 'Steelix',
    nationalPokedexNumber: 208,
    imageUrl: 'https://images.pokemontcg.io/ecard3/179.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/179_hires.png',
    types: [
      'Metal'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Onix',
    ability: {
      name: 'Rare Metal',
      text: 'All basic Energy cards attached to Steelix provide Metal Energy instead of their usual types.',
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
    number: 'H29',
    artist: 'Hikaru Koike',
    rarity: 'Holo Rare',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Metal',
          'Metal',
          'Colorless'
        ],
        name: 'Squeeze',
        text: 'Flip a coin. If heads, this attack does 20 damage plus 10 more damage and the Defending Pokémon is now Paralyzed.',
        damage: '20+',
        convertedEnergyCost: 3
      },
      {
        cost: [
          'Metal',
          'Metal',
          'Metal',
          'Colorless'
        ],
        name: 'Metal Tail',
        text: 'Before doing damage, you may flip a coin. If heads, this attack does 80 damage. If tails, this attack does nothing.',
        damage: '',
        convertedEnergyCost: 4
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
    id: 'ecard3-180',
    name: 'Umbreon',
    nationalPokedexNumber: 197,
    imageUrl: 'https://images.pokemontcg.io/ecard3/180.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/180_hires.png',
    types: [
      'Darkness'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Eevee',
    ability: {
      name: 'Dark Gaze',
      text: 'As long as Umbreon is your Active Pokémon, Benched Pokémon (yours and your opponent\'s) can\'t use Poké-Powers.',
      type: 'Poké-Body'
    },
    hp: '70',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: 'H30',
    artist: 'Atsuko Nishida',
    rarity: 'Holo Rare',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Darkness',
          'Colorless'
        ],
        name: 'Sharp Claws',
        text: 'Flip a coin. If heads, this attack does 10 damage plus 30 more damage.',
        damage: '10+',
        convertedEnergyCost: 2
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
    id: 'ecard3-181',
    name: 'Vaporeon',
    nationalPokedexNumber: 134,
    imageUrl: 'https://images.pokemontcg.io/ecard3/181.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/181_hires.png',
    types: [
      'Water'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Eevee',
    ability: {
      name: 'Self Healing',
      text: 'Whenever you attach a Water Energy card from your hand to Vaporeon, remove all Special Conditions affecting Vaporeon.',
      type: 'Poké-Body'
    },
    hp: '70',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: 'H31',
    artist: 'Naoyo Kimura',
    rarity: 'Holo Rare',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Colorless',
          'Colorless'
        ],
        name: 'Hypnosplash',
        text: 'The Defending Pokémon is now Asleep.',
        damage: '10',
        convertedEnergyCost: 2
      },
      {
        cost: [
          'Water',
          'Colorless',
          'Colorless'
        ],
        name: 'Aqua Trick',
        text: 'If the Defending Pokémon has any Energy cards attached to it, flip a coin. If heads, choose 1 of those Energy cards and move it to 1 of your opponent\'s Benched Pokémon. If your opponent has no Benched Pokémon, ignore this effect.',
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
    id: 'ecard3-182',
    name: 'Xatu',
    nationalPokedexNumber: 178,
    imageUrl: 'https://images.pokemontcg.io/ecard3/182.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard3/182_hires.png',
    types: [
      'Psychic'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Natu',
    ability: {
      name: 'Synchronicity',
      text: 'You may attach any Technical Machine to Xatu.',
      type: 'Poké-Body'
    },
    hp: '80',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: 'H32',
    artist: 'Atsuko Nishida',
    rarity: 'Holo Rare',
    series: 'E-Card',
    set: 'Skyridge',
    setCode: 'ecard3',
    attacks: [
      {
        cost: [
          'Colorless',
          'Colorless',
          'Colorless'
        ],
        name: 'Warp Hole',
        text: 'Flip a coin. If heads, choose a card from your discard pile and put it on top of your deck.',
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
  }
]