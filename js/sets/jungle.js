const jungleCards = [
  {
    id: 'base2-1',
    name: 'Clefable',
    nationalPokedexNumber: 36,
    imageUrl: 'https://images.pokemontcg.io/base2/1.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/base2/1_hires.png',
    types: [
      'Colorless'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Clefairy',
    hp: '70',
    retreatCost: [
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 2,
    number: '1',
    artist: 'Mitsuhiro Arita',
    rarity: 'Holo Rare',
    series: 'Base',
    set: 'Jungle',
    setCode: 'base2',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Metronome',
        text: 'Choose 1 of the Defending Pokémon\'s attacks. Metronome copies that attack except for its Energy costs and anything else required in order to use that attack, such as discarding Energy cards. (No matter what type the Defending Pokémon is, Clefable\'s type is still Colorless.)',
        damage: '',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Colorless',
          'Colorless'
        ],
        name: 'Minimize',
        text: 'All damage done by attacks to Clefable during your opponent\'s next turn is reduce by 20 (after applying Weakness and Resistance).',
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
    id: 'base2-2',
    name: 'Electrode',
    nationalPokedexNumber: 101,
    imageUrl: 'https://images.pokemontcg.io/base2/2.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/base2/2_hires.png',
    types: [
      'Lightning'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Voltorb',
    hp: '90',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '2',
    artist: 'Mitsuhiro Arita',
    rarity: 'Holo Rare',
    series: 'Base',
    set: 'Jungle',
    setCode: 'base2',
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
          'Lightning',
          'Lightning',
          'Lightning'
        ],
        name: 'Chain Lightning',
        text: 'If the Defending Pokémon isn\'t Colorless, this attack does 10 damage to each Benched Pokémon of the same type as the Defending Pokémon (including your own).',
        damage: '20',
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
    id: 'base2-3',
    name: 'Flareon',
    nationalPokedexNumber: 136,
    imageUrl: 'https://images.pokemontcg.io/base2/3.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/base2/3_hires.png',
    types: [
      'Fire'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Eevee',
    hp: '70',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '3',
    artist: 'Kagemaru Himeno',
    rarity: 'Holo Rare',
    series: 'Base',
    set: 'Jungle',
    setCode: 'base2',
    attacks: [
      {
        cost: [
          'Colorless',
          'Colorless'
        ],
        name: 'Quick Attack',
        text: 'Flip a coin. If heads, this attack does 10 damage plus 20 more damage; if tails, this attack does 10 damage.',
        damage: '10+',
        convertedEnergyCost: 2
      },
      {
        cost: [
          'Fire',
          'Fire',
          'Colorless',
          'Colorless'
        ],
        name: 'Flamethrower',
        text: 'Discard 1 Fire Energy card attached to Flareon in order to use this attack.',
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
    id: 'base2-4',
    name: 'Jolteon',
    nationalPokedexNumber: 135,
    imageUrl: 'https://images.pokemontcg.io/base2/4.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/base2/4_hires.png',
    types: [
      'Lightning'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Eevee',
    hp: '70',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '4',
    artist: 'Kagemaru Himeno',
    rarity: 'Holo Rare',
    series: 'Base',
    set: 'Jungle',
    setCode: 'base2',
    attacks: [
      {
        cost: [
          'Colorless',
          'Colorless'
        ],
        name: 'Quick Attack',
        text: 'Flip a coin. If heads, this attack does 10 damage plus 20 more damage; if tails, this attack does 10 damage.',
        damage: '10+',
        convertedEnergyCost: 2
      },
      {
        cost: [
          'Lightning',
          'Lightning',
          'Colorless'
        ],
        name: 'Pin Missile',
        text: 'Flip 4 coins. This attack does 20 damage times the number of heads.',
        damage: '20×',
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
    id: 'base2-5',
    name: 'Kangaskhan',
    nationalPokedexNumber: 115,
    imageUrl: 'https://images.pokemontcg.io/base2/5.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/base2/5_hires.png',
    types: [
      'Colorless'
    ],
    supertype: 'Pokémon',
    subtype: 'Basic',
    hp: '90',
    retreatCost: [
      'Colorless',
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 3,
    number: '5',
    artist: 'Mitsuhiro Arita',
    rarity: 'Holo Rare',
    series: 'Base',
    set: 'Jungle',
    setCode: 'base2',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Fetch',
        text: 'Draw a card.',
        damage: '',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Colorless',
          'Colorless',
          'Colorless',
          'Colorless'
        ],
        name: 'Comet Punch',
        text: 'Flip 4 coins. This attack does 20 damage times the number of heads.',
        damage: '20×',
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
    id: 'base2-6',
    name: 'Mr. Mime',
    nationalPokedexNumber: 122,
    imageUrl: 'https://images.pokemontcg.io/base2/6.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/base2/6_hires.png',
    types: [
      'Psychic'
    ],
    supertype: 'Pokémon',
    subtype: 'Basic',
    evolvesFrom: 'Mime Jr.',
    ability: {
      name: 'Invisible Wall',
      text: 'Whenever an attack (including your own) does 30 or more damage to Mr. Mime (after applying Weakness and Resistance), prevent that damage. (Any other effects of attacks still happen.) This power can\'t be used if Mr. Mime is Asleep, Confused, or Paralyzed.',
      type: 'Pokémon Power'
    },
    hp: '40',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '6',
    artist: 'Ken Sugimori',
    rarity: 'Holo Rare',
    series: 'Base',
    set: 'Jungle',
    setCode: 'base2',
    attacks: [
      {
        cost: [
          'Psychic',
          'Colorless'
        ],
        name: 'Meditate',
        text: 'Does 10 damage plus 10 more damage for each damage counter on the Defending Pokémon.',
        damage: '10+',
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
    id: 'base2-7',
    name: 'Nidoqueen',
    nationalPokedexNumber: 31,
    imageUrl: 'https://images.pokemontcg.io/base2/7.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/base2/7_hires.png',
    types: [
      'Grass'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 2',
    evolvesFrom: 'Nidorina',
    hp: '90',
    retreatCost: [
      'Colorless',
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 3,
    number: '7',
    artist: 'Ken Sugimori',
    rarity: 'Holo Rare',
    series: 'Base',
    set: 'Jungle',
    setCode: 'base2',
    attacks: [
      {
        cost: [
          'Grass',
          'Colorless'
        ],
        name: 'Boyfriends',
        text: 'Does 20 damage plus 20 more damage for each Nidoking you have in play.',
        damage: '20+',
        convertedEnergyCost: 2
      },
      {
        cost: [
          'Grass',
          'Grass',
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
        type: 'Psychic',
        value: '×2'
      }
    ]
  },
  {
    id: 'base2-8',
    name: 'Pidgeot',
    nationalPokedexNumber: 18,
    imageUrl: 'https://images.pokemontcg.io/base2/8.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/base2/8_hires.png',
    types: [
      'Colorless'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 2',
    evolvesFrom: 'Pidgeotto',
    hp: '80',
    number: '8',
    artist: 'Kagemaru Himeno',
    rarity: 'Holo Rare',
    series: 'Base',
    set: 'Jungle',
    setCode: 'base2',
    attacks: [
      {
        cost: [
          'Colorless',
          'Colorless'
        ],
        name: 'Wing Attack',
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
        name: 'Hurricane',
        text: 'Unless this attack Knocks Out the Defending Pokémon, return the Defending Pokémon and all cards attached to it to your opponent\'s hand.',
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
    id: 'base2-9',
    name: 'Pinsir',
    nationalPokedexNumber: 127,
    imageUrl: 'https://images.pokemontcg.io/base2/9.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/base2/9_hires.png',
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
    number: '9',
    artist: 'Kagemaru Himeno',
    rarity: 'Holo Rare',
    series: 'Base',
    set: 'Jungle',
    setCode: 'base2',
    attacks: [
      {
        cost: [
          'Grass',
          'Grass'
        ],
        name: 'Irongrip',
        text: 'Flip a coin. If heads, the Defending Pokémon is now Paralyzed.',
        damage: '20',
        convertedEnergyCost: 2
      },
      {
        cost: [
          'Grass',
          'Grass',
          'Colorless',
          'Colorless'
        ],
        name: 'Guillotine',
        text: '',
        damage: '50',
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
    id: 'base2-10',
    name: 'Scyther',
    nationalPokedexNumber: 123,
    imageUrl: 'https://images.pokemontcg.io/base2/10.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/base2/10_hires.png',
    types: [
      'Grass'
    ],
    supertype: 'Pokémon',
    subtype: 'Basic',
    hp: '70',
    number: '10',
    artist: 'Ken Sugimori',
    rarity: 'Holo Rare',
    series: 'Base',
    set: 'Jungle',
    setCode: 'base2',
    attacks: [
      {
        cost: [
          'Grass'
        ],
        name: 'Swords Dance',
        text: 'During your next turn, Scyther\'s Slash attack\'s base damage is 60 instead of 30.',
        damage: '',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Colorless',
          'Colorless',
          'Colorless'
        ],
        name: 'Slash',
        text: '',
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
        type: 'Fire',
        value: '×2'
      }
    ]
  },
  {
    id: 'base2-11',
    name: 'Snorlax',
    nationalPokedexNumber: 143,
    imageUrl: 'https://images.pokemontcg.io/base2/11.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/base2/11_hires.png',
    types: [
      'Colorless'
    ],
    supertype: 'Pokémon',
    subtype: 'Basic',
    evolvesFrom: 'Munchlax',
    ability: {
      name: 'Thick Skinned',
      text: 'Snorlax can\'t become Asleep, Confused, Paralyzed, or Poisoned. This power can\'t be used if Snorlax is already Asleep, Confused, or Paralyzed.',
      type: 'Pokémon Power'
    },
    hp: '90',
    retreatCost: [
      'Colorless',
      'Colorless',
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 4,
    number: '11',
    artist: 'Ken Sugimori',
    rarity: 'Holo Rare',
    series: 'Base',
    set: 'Jungle',
    setCode: 'base2',
    attacks: [
      {
        cost: [
          'Colorless',
          'Colorless',
          'Colorless',
          'Colorless'
        ],
        name: 'Body Slam',
        text: 'Flip a coin. If heads, the Defending Pokémon is now Paralyzed.',
        damage: '30',
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
    id: 'base2-12',
    name: 'Vaporeon',
    nationalPokedexNumber: 134,
    imageUrl: 'https://images.pokemontcg.io/base2/12.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/base2/12_hires.png',
    types: [
      'Water'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Eevee',
    hp: '80',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '12',
    artist: 'Kagemaru Himeno',
    rarity: 'Holo Rare',
    series: 'Base',
    set: 'Jungle',
    setCode: 'base2',
    attacks: [
      {
        cost: [
          'Colorless',
          'Colorless'
        ],
        name: 'Quick Attack',
        text: 'Flip a coin. If heads, this attack does 10 damage plus 20 more damage; if tails, this attack does 10 damage.',
        damage: '10+',
        convertedEnergyCost: 2
      },
      {
        cost: [
          'Water',
          'Water',
          'Colorless'
        ],
        name: 'Water Gun',
        text: 'Does 30 damage plus 10 more damage for each Energy attached to Vaporeon but not used to pay for this attack\'s Energy cost. Extra Energy after the 2nd doesn\'t count.',
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
    id: 'base2-13',
    name: 'Venomoth',
    nationalPokedexNumber: 49,
    imageUrl: 'https://images.pokemontcg.io/base2/13.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/base2/13_hires.png',
    types: [
      'Grass'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Venonat',
    ability: {
      name: 'Shift',
      text: 'Once during your turn (before your attack), you may change the type of Venomoth to the type of any other Pokémon in play other than Colorless. This power can\'t be used if Venomoth is Asleep, Confused, or Paralyzed.',
      type: 'Pokémon Power'
    },
    hp: '70',
    number: '13',
    artist: 'Ken Sugimori',
    rarity: 'Holo Rare',
    series: 'Base',
    set: 'Jungle',
    setCode: 'base2',
    attacks: [
      {
        cost: [
          'Grass',
          'Grass'
        ],
        name: 'Venom Powder',
        text: 'Flip a coin. If heads, the Defending Pokémon is now Confused and Poisoned.',
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
        type: 'Fire',
        value: '×2'
      }
    ]
  },
  {
    id: 'base2-14',
    name: 'Victreebel',
    nationalPokedexNumber: 71,
    imageUrl: 'https://images.pokemontcg.io/base2/14.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/base2/14_hires.png',
    types: [
      'Grass'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 2',
    evolvesFrom: 'Weepinbell',
    hp: '80',
    retreatCost: [
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 2,
    number: '14',
    artist: 'Ken Sugimori',
    rarity: 'Holo Rare',
    series: 'Base',
    set: 'Jungle',
    setCode: 'base2',
    attacks: [
      {
        cost: [
          'Grass'
        ],
        name: 'Lure',
        text: 'If your opponent has any Benched Pokémon, choose 1 of them and switch it with his or her Active Pokémon.',
        damage: '',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Grass',
          'Grass'
        ],
        name: 'Acid',
        text: 'Flip a coin. If heads, the Defending Pokémon can\'t retreat during your opponent\'s next turn.',
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
    id: 'base2-15',
    name: 'Vileplume',
    nationalPokedexNumber: 45,
    imageUrl: 'https://images.pokemontcg.io/base2/15.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/base2/15_hires.png',
    types: [
      'Grass'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 2',
    evolvesFrom: 'Gloom',
    ability: {
      name: 'Heal',
      text: 'Once during your turn (before your attack), you may flip a coin. If heads, remove 1 damage counter from 1 of your Pokémon. This power can\'t be used if Vileplume is Asleep, Confused, or Paralyzed.',
      type: 'Pokémon Power'
    },
    hp: '80',
    retreatCost: [
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 2,
    number: '15',
    artist: 'Keiji Kinebuchi',
    rarity: 'Holo Rare',
    series: 'Base',
    set: 'Jungle',
    setCode: 'base2',
    attacks: [
      {
        cost: [
          'Grass',
          'Grass',
          'Grass'
        ],
        name: 'Petal Dance',
        text: 'Flip 3 coins. This attack does 40 damage times the number of heads. Vileplume is now Confused (after doing damage).',
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
    id: 'base2-16',
    name: 'Wigglytuff',
    nationalPokedexNumber: 40,
    imageUrl: 'https://images.pokemontcg.io/base2/16.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/base2/16_hires.png',
    types: [
      'Colorless'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Jigglypuff',
    hp: '80',
    retreatCost: [
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 2,
    number: '16',
    artist: 'Mitsuhiro Arita',
    rarity: 'Holo Rare',
    series: 'Base',
    set: 'Jungle',
    setCode: 'base2',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Lullaby',
        text: 'The Defending Pokémon is now Asleep.',
        damage: '',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Colorless',
          'Colorless',
          'Colorless'
        ],
        name: 'Do the Wave',
        text: 'Does 10 damage plus 10 more damage for each of your Benched Pokémon.',
        damage: '10+',
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
    id: 'base2-17',
    name: 'Clefable',
    nationalPokedexNumber: 36,
    imageUrl: 'https://images.pokemontcg.io/base2/17.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/base2/17_hires.png',
    types: [
      'Colorless'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Clefairy',
    hp: '70',
    retreatCost: [
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 2,
    number: '17',
    artist: 'Mitsuhiro Arita',
    rarity: 'Rare',
    series: 'Base',
    set: 'Jungle',
    setCode: 'base2',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Metronome',
        text: 'Choose 1 of the Defending Pokémon\'s attacks. Metronome copies that attack except for its Energy costs and anything else required in order to use that attack, such as discarding Energy cards. (No matter what type the Defending Pokémon is, Clefable\'s type is still Colorless.)',
        damage: '',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Colorless',
          'Colorless'
        ],
        name: 'Minimize',
        text: 'All damage done by attacks to Clefable during your opponent\'s next turn is reduce by 20 (after applying Weakness and Resistance).',
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
    id: 'base2-18',
    name: 'Electrode',
    nationalPokedexNumber: 101,
    imageUrl: 'https://images.pokemontcg.io/base2/18.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/base2/18_hires.png',
    types: [
      'Lightning'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Voltorb',
    hp: '90',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '18',
    artist: 'Mitsuhiro Arita',
    rarity: 'Rare',
    series: 'Base',
    set: 'Jungle',
    setCode: 'base2',
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
          'Lightning',
          'Lightning',
          'Lightning'
        ],
        name: 'Chain Lightning',
        text: 'If the Defending Pokémon isn\'t Colorless, this attack does 10 damage to each Benched Pokémon of the same type as the Defending Pokémon (including your own).',
        damage: '20',
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
    id: 'base2-19',
    name: 'Flareon',
    nationalPokedexNumber: 136,
    imageUrl: 'https://images.pokemontcg.io/base2/19.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/base2/19_hires.png',
    types: [
      'Fire'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Eevee',
    hp: '70',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '19',
    artist: 'Kagemaru Himeno',
    rarity: 'Rare',
    series: 'Base',
    set: 'Jungle',
    setCode: 'base2',
    attacks: [
      {
        cost: [
          'Colorless',
          'Colorless'
        ],
        name: 'Quick Attack',
        text: 'Flip a coin. If heads, this attack does 10 damage plus 20 more damage; if tails, this attack does 10 damage.',
        damage: '10+',
        convertedEnergyCost: 2
      },
      {
        cost: [
          'Fire',
          'Fire',
          'Colorless',
          'Colorless'
        ],
        name: 'Flamethrower',
        text: 'Discard 1 Fire Energy card attached to Flareon in order to use this attack.',
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
    id: 'base2-20',
    name: 'Jolteon',
    nationalPokedexNumber: 135,
    imageUrl: 'https://images.pokemontcg.io/base2/20.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/base2/20_hires.png',
    types: [
      'Lightning'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Eevee',
    hp: '70',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '20',
    artist: 'Kagemaru Himeno',
    rarity: 'Rare',
    series: 'Base',
    set: 'Jungle',
    setCode: 'base2',
    attacks: [
      {
        cost: [
          'Colorless',
          'Colorless'
        ],
        name: 'Quick Attack',
        text: 'Flip a coin. If heads, this attack does 10 damage plus 20 more damage; if tails, this attack does 10 damage.',
        damage: '10+',
        convertedEnergyCost: 2
      },
      {
        cost: [
          'Lightning',
          'Lightning',
          'Colorless'
        ],
        name: 'Pin Missile',
        text: 'Flip 4 coins. This attack does 20 damage times the number of heads.',
        damage: '20×',
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
    id: 'base2-21',
    name: 'Kangaskhan',
    nationalPokedexNumber: 115,
    imageUrl: 'https://images.pokemontcg.io/base2/21.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/base2/21_hires.png',
    types: [
      'Colorless'
    ],
    supertype: 'Pokémon',
    subtype: 'Basic',
    hp: '90',
    retreatCost: [
      'Colorless',
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 3,
    number: '21',
    artist: 'Mitsuhiro Arita',
    rarity: 'Rare',
    series: 'Base',
    set: 'Jungle',
    setCode: 'base2',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Fetch',
        text: 'Draw a card.',
        damage: '',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Colorless',
          'Colorless',
          'Colorless',
          'Colorless'
        ],
        name: 'Comet Punch',
        text: 'Flip 4 coins. This attack does 20 damage times the number of heads.',
        damage: '20×',
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
    id: 'base2-22',
    name: 'Mr. Mime',
    nationalPokedexNumber: 122,
    imageUrl: 'https://images.pokemontcg.io/base2/22.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/base2/22_hires.png',
    types: [
      'Psychic'
    ],
    supertype: 'Pokémon',
    subtype: 'Basic',
    evolvesFrom: 'Mime Jr.',
    ability: {
      name: 'Invisible Wall',
      text: 'Whenever an attack (including your own) does 30 or more damage to Mr. Mime (after applying Weakness and Resistance), prevent that damage. (Any other effects of attacks still happen.) This power can\'t be used if Mr. Mime is Asleep, Confused, or Paralyzed.',
      type: 'Pokémon Power'
    },
    hp: '40',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '22',
    artist: 'Ken Sugimori',
    rarity: 'Rare',
    series: 'Base',
    set: 'Jungle',
    setCode: 'base2',
    attacks: [
      {
        cost: [
          'Psychic',
          'Colorless'
        ],
        name: 'Meditate',
        text: 'Does 10 damage plus 10 more damage for each damage counter on the Defending Pokémon.',
        damage: '10+',
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
    id: 'base2-23',
    name: 'Nidoqueen',
    nationalPokedexNumber: 31,
    imageUrl: 'https://images.pokemontcg.io/base2/23.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/base2/23_hires.png',
    types: [
      'Grass'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 2',
    evolvesFrom: 'Nidorina',
    hp: '90',
    retreatCost: [
      'Colorless',
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 3,
    number: '23',
    artist: 'Ken Sugimori',
    rarity: 'Rare',
    series: 'Base',
    set: 'Jungle',
    setCode: 'base2',
    attacks: [
      {
        cost: [
          'Grass',
          'Colorless'
        ],
        name: 'Boyfriends',
        text: 'Does 20 damage plus 20 more damage for each Nidoking you have in play.',
        damage: '20+',
        convertedEnergyCost: 2
      },
      {
        cost: [
          'Grass',
          'Grass',
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
        type: 'Psychic',
        value: '×2'
      }
    ]
  },
  {
    id: 'base2-24',
    name: 'Pidgeot',
    nationalPokedexNumber: 18,
    imageUrl: 'https://images.pokemontcg.io/base2/24.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/base2/24_hires.png',
    types: [
      'Colorless'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 2',
    evolvesFrom: 'Pidgeotto',
    hp: '80',
    number: '24',
    artist: 'Kagemaru Himeno',
    rarity: 'Rare',
    series: 'Base',
    set: 'Jungle',
    setCode: 'base2',
    attacks: [
      {
        cost: [
          'Colorless',
          'Colorless'
        ],
        name: 'Wing Attack',
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
        name: 'Hurricane',
        text: 'Unless this attack Knocks Out the Defending Pokémon, return the Defending Pokémon and all cards attached to it to your opponent\'s hand.',
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
    id: 'base2-25',
    name: 'Pinsir',
    nationalPokedexNumber: 127,
    imageUrl: 'https://images.pokemontcg.io/base2/25.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/base2/25_hires.png',
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
    number: '25',
    artist: 'Kagemaru Himeno',
    rarity: 'Rare',
    series: 'Base',
    set: 'Jungle',
    setCode: 'base2',
    attacks: [
      {
        cost: [
          'Grass',
          'Grass'
        ],
        name: 'Irongrip',
        text: 'Flip a coin. If heads, the Defending Pokémon is now Paralyzed.',
        damage: '20',
        convertedEnergyCost: 2
      },
      {
        cost: [
          'Grass',
          'Grass',
          'Colorless',
          'Colorless'
        ],
        name: 'Guillotine',
        text: '',
        damage: '50',
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
    id: 'base2-26',
    name: 'Scyther',
    nationalPokedexNumber: 123,
    imageUrl: 'https://images.pokemontcg.io/base2/26.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/base2/26_hires.png',
    types: [
      'Grass'
    ],
    supertype: 'Pokémon',
    subtype: 'Basic',
    hp: '70',
    number: '26',
    artist: 'Ken Sugimori',
    rarity: 'Rare',
    series: 'Base',
    set: 'Jungle',
    setCode: 'base2',
    attacks: [
      {
        cost: [
          'Grass'
        ],
        name: 'Swords Dance',
        text: 'During your next turn, Scyther\'s Slash attack\'s base damage is 60 instead of 30.',
        damage: '',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Colorless',
          'Colorless',
          'Colorless'
        ],
        name: 'Slash',
        text: '',
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
        type: 'Fire',
        value: '×2'
      }
    ]
  },
  {
    id: 'base2-27',
    name: 'Snorlax',
    nationalPokedexNumber: 143,
    imageUrl: 'https://images.pokemontcg.io/base2/27.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/base2/27_hires.png',
    types: [
      'Colorless'
    ],
    supertype: 'Pokémon',
    subtype: 'Basic',
    evolvesFrom: 'Munchlax',
    ability: {
      name: 'Thick Skinned',
      text: 'Snorlax can\'t become Asleep, Confused, Paralyzed, or Poisoned. This power can\'t be used if Snorlax is already Asleep, Confused, or Paralyzed.',
      type: 'Pokémon Power'
    },
    hp: '90',
    retreatCost: [
      'Colorless',
      'Colorless',
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 4,
    number: '27',
    artist: 'Ken Sugimori',
    rarity: 'Rare',
    series: 'Base',
    set: 'Jungle',
    setCode: 'base2',
    attacks: [
      {
        cost: [
          'Colorless',
          'Colorless',
          'Colorless',
          'Colorless'
        ],
        name: 'Body Slam',
        text: 'Flip a coin. If heads, the Defending Pokémon is now Paralyzed.',
        damage: '30',
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
    id: 'base2-28',
    name: 'Vaporeon',
    nationalPokedexNumber: 134,
    imageUrl: 'https://images.pokemontcg.io/base2/28.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/base2/28_hires.png',
    types: [
      'Water'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Eevee',
    hp: '80',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '28',
    artist: 'Kagemaru Himeno',
    rarity: 'Rare',
    series: 'Base',
    set: 'Jungle',
    setCode: 'base2',
    attacks: [
      {
        cost: [
          'Colorless',
          'Colorless'
        ],
        name: 'Quick Attack',
        text: 'Flip a coin. If heads, this attack does 10 damage plus 20 more damage; if tails, this attack does 10 damage.',
        damage: '10+',
        convertedEnergyCost: 2
      },
      {
        cost: [
          'Water',
          'Water',
          'Colorless'
        ],
        name: 'Water Gun',
        text: 'Does 30 damage plus 10 more damage for each Energy attached to Vaporeon but not used to pay for this attack\'s Energy cost. Extra Energy after the 2nd doesn\'t count.',
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
    id: 'base2-29',
    name: 'Venomoth',
    nationalPokedexNumber: 49,
    imageUrl: 'https://images.pokemontcg.io/base2/29.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/base2/29_hires.png',
    types: [
      'Grass'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Venonat',
    ability: {
      name: 'Shift',
      text: 'Once during your turn (before your attack), you may change the type of Venomoth to the type of any other Pokémon in play other than Colorless. This power can\'t be used if Venomoth is Asleep, Confused, or Paralyzed.',
      type: 'Pokémon Power'
    },
    hp: '70',
    number: '29',
    artist: 'Ken Sugimori',
    rarity: 'Rare',
    series: 'Base',
    set: 'Jungle',
    setCode: 'base2',
    attacks: [
      {
        cost: [
          'Grass',
          'Grass'
        ],
        name: 'Venom Powder',
        text: 'Flip a coin. If heads, the Defending Pokémon is now Confused and Poisoned.',
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
        type: 'Fire',
        value: '×2'
      }
    ]
  },
  {
    id: 'base2-30',
    name: 'Victreebel',
    nationalPokedexNumber: 71,
    imageUrl: 'https://images.pokemontcg.io/base2/30.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/base2/30_hires.png',
    types: [
      'Grass'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 2',
    evolvesFrom: 'Weepinbell',
    hp: '80',
    retreatCost: [
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 2,
    number: '30',
    artist: 'Ken Sugimori',
    rarity: 'Rare',
    series: 'Base',
    set: 'Jungle',
    setCode: 'base2',
    attacks: [
      {
        cost: [
          'Grass'
        ],
        name: 'Lure',
        text: 'If your opponent has any Benched Pokémon, choose 1 of them and switch it with his or her Active Pokémon.',
        damage: '',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Grass',
          'Grass'
        ],
        name: 'Acid',
        text: 'Flip a coin. If heads, the Defending Pokémon can\'t retreat during your opponent\'s next turn.',
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
    id: 'base2-31',
    name: 'Vileplume',
    nationalPokedexNumber: 45,
    imageUrl: 'https://images.pokemontcg.io/base2/31.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/base2/31_hires.png',
    types: [
      'Grass'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 2',
    evolvesFrom: 'Gloom',
    ability: {
      name: 'Heal',
      text: 'Once during your turn (before your attack), you may flip a coin. If heads, remove 1 damage counter from 1 of your Pokémon. This power can\'t be used if Vileplume is Asleep, Confused, or Paralyzed.',
      type: 'Pokémon Power'
    },
    hp: '80',
    retreatCost: [
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 2,
    number: '31',
    artist: 'Keiji Kinebuchi',
    rarity: 'Rare',
    series: 'Base',
    set: 'Jungle',
    setCode: 'base2',
    attacks: [
      {
        cost: [
          'Grass',
          'Grass',
          'Grass'
        ],
        name: 'Petal Dance',
        text: 'Flip 3 coins. This attack does 40 damage times the number of heads. Vileplume is now Confused (after doing damage).',
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
    id: 'base2-32',
    name: 'Wigglytuff',
    nationalPokedexNumber: 40,
    imageUrl: 'https://images.pokemontcg.io/base2/32.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/base2/32_hires.png',
    types: [
      'Colorless'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Jigglypuff',
    hp: '80',
    retreatCost: [
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 2,
    number: '32',
    artist: 'Mitsuhiro Arita',
    rarity: 'Rare',
    series: 'Base',
    set: 'Jungle',
    setCode: 'base2',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Lullaby',
        text: 'The Defending Pokémon is now Asleep.',
        damage: '',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Colorless',
          'Colorless',
          'Colorless'
        ],
        name: 'Do the Wave',
        text: 'Does 10 damage plus 10 more damage for each of your Benched Pokémon.',
        damage: '10+',
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
    id: 'base2-33',
    name: 'Butterfree',
    nationalPokedexNumber: 12,
    imageUrl: 'https://images.pokemontcg.io/base2/33.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/base2/33_hires.png',
    types: [
      'Grass'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 2',
    evolvesFrom: 'Metapod',
    hp: '70',
    number: '33',
    artist: 'Kagemaru Himeno',
    rarity: 'Uncommon',
    series: 'Base',
    set: 'Jungle',
    setCode: 'base2',
    attacks: [
      {
        cost: [
          'Colorless',
          'Colorless'
        ],
        name: 'Whirlwind',
        text: 'If your opponent has any Benched Pokémon, he or she chooses 1 of them and switches it with the Defending Pokémon. (Do the damage before switching the Pokémon.)',
        damage: '20',
        convertedEnergyCost: 2
      },
      {
        cost: [
          'Grass',
          'Grass',
          'Grass',
          'Grass'
        ],
        name: 'Mega Drain',
        text: 'Remove a number of damage counters from Butterfree equal to half the damage done to the Defending Pokémon (after applying Weakness and Resistance) (rounded up to the nearest 10).',
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
        type: 'Fire',
        value: '×2'
      }
    ]
  },
  {
    id: 'base2-34',
    name: 'Dodrio',
    nationalPokedexNumber: 85,
    imageUrl: 'https://images.pokemontcg.io/base2/34.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/base2/34_hires.png',
    types: [
      'Colorless'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Doduo',
    ability: {
      name: 'Retreat Aid',
      text: 'As long as Dodrio is Benched, pay 1 Colorless less to retreat your Active Pokémon.',
      type: 'Pokémon Power'
    },
    hp: '70',
    number: '34',
    artist: 'Mitsuhiro Arita',
    rarity: 'Uncommon',
    series: 'Base',
    set: 'Jungle',
    setCode: 'base2',
    attacks: [
      {
        cost: [
          'Colorless',
          'Colorless',
          'Colorless'
        ],
        name: 'Rage',
        text: 'Does 10 damage plus 10 more damage for each damage counter on Dodrio.',
        damage: '10+',
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
    id: 'base2-35',
    name: 'Exeggutor',
    nationalPokedexNumber: 103,
    imageUrl: 'https://images.pokemontcg.io/base2/35.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/base2/35_hires.png',
    types: [
      'Grass'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Exeggcute',
    hp: '80',
    retreatCost: [
      'Colorless',
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 3,
    number: '35',
    artist: 'Kagemaru Himeno',
    rarity: 'Uncommon',
    series: 'Base',
    set: 'Jungle',
    setCode: 'base2',
    attacks: [
      {
        cost: [
          'Psychic'
        ],
        name: 'Teleport',
        text: 'Switch Exeggutor with 1 of your Benched Pokémon.',
        damage: '',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Colorless'
        ],
        name: 'Big Eggsplosion',
        text: 'Flip a number of coins equal to the number of Energy attached to Exeggutor. This attack does 20 damage times the number of heads.',
        damage: '20×',
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
    id: 'base2-36',
    name: 'Fearow',
    nationalPokedexNumber: 22,
    imageUrl: 'https://images.pokemontcg.io/base2/36.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/base2/36_hires.png',
    types: [
      'Colorless'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Spearow',
    hp: '70',
    number: '36',
    artist: 'Mitsuhiro Arita',
    rarity: 'Uncommon',
    series: 'Base',
    set: 'Jungle',
    setCode: 'base2',
    attacks: [
      {
        cost: [
          'Colorless',
          'Colorless',
          'Colorless'
        ],
        name: 'Agility',
        text: 'Flip a coin. If heads, during your opponent\'s next turn, prevent all effects of attacks, including damage, done to Fearow.',
        damage: '20',
        convertedEnergyCost: 3
      },
      {
        cost: [
          'Colorless',
          'Colorless',
          'Colorless',
          'Colorless'
        ],
        name: 'Drill Peck',
        text: '',
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
        type: 'Lightning',
        value: '×2'
      }
    ]
  },
  {
    id: 'base2-37',
    name: 'Gloom',
    nationalPokedexNumber: 44,
    imageUrl: 'https://images.pokemontcg.io/base2/37.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/base2/37_hires.png',
    types: [
      'Grass'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Oddish',
    hp: '60',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '37',
    artist: 'Keiji Kinebuchi',
    rarity: 'Uncommon',
    series: 'Base',
    set: 'Jungle',
    setCode: 'base2',
    attacks: [
      {
        cost: [
          'Grass'
        ],
        name: 'Poisonpowder',
        text: 'The Defending Pokémon is now Poisoned.',
        damage: '10',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Grass',
          'Grass'
        ],
        name: 'Foul Odor',
        text: 'Both the Defending Pokémon and Gloom are now Confused (after doing damage).',
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
    id: 'base2-38',
    name: 'Lickitung',
    nationalPokedexNumber: 108,
    imageUrl: 'https://images.pokemontcg.io/base2/38.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/base2/38_hires.png',
    types: [
      'Colorless'
    ],
    supertype: 'Pokémon',
    subtype: 'Basic',
    hp: '90',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '38',
    artist: 'Mitsuhiro Arita',
    rarity: 'Uncommon',
    series: 'Base',
    set: 'Jungle',
    setCode: 'base2',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Tongue Wrap',
        text: 'Flip a coin. If heads, the Defending Pokémon is now Paralyzed.',
        damage: '10',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Colorless',
          'Colorless'
        ],
        name: 'Supersonic',
        text: 'Flip a coin. If heads, the Defending Pokémon is now Confused.',
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
    id: 'base2-39',
    name: 'Marowak',
    nationalPokedexNumber: 105,
    imageUrl: 'https://images.pokemontcg.io/base2/39.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/base2/39_hires.png',
    types: [
      'Fighting'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Cubone',
    hp: '60',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '39',
    artist: 'Mitsuhiro Arita',
    rarity: 'Uncommon',
    series: 'Base',
    set: 'Jungle',
    setCode: 'base2',
    attacks: [
      {
        cost: [
          'Fighting',
          'Fighting'
        ],
        name: 'Bonemerang',
        text: 'Flip 2 coins. This attack does 30 damage times the number of heads.',
        damage: '30×',
        convertedEnergyCost: 2
      },
      {
        cost: [
          'Fighting',
          'Fighting',
          'Colorless'
        ],
        name: 'Call for Friend',
        text: 'Search your deck for a Fighting Basic Pokémon card and put it onto your Bench. Shuffle your deck afterward. (You can\'t use this attack if your Bench is full.)',
        damage: '',
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
    id: 'base2-40',
    name: 'Nidorina',
    nationalPokedexNumber: 30,
    imageUrl: 'https://images.pokemontcg.io/base2/40.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/base2/40_hires.png',
    types: [
      'Grass'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Nidoran♀',
    hp: '70',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '40',
    artist: 'Ken Sugimori',
    rarity: 'Uncommon',
    series: 'Base',
    set: 'Jungle',
    setCode: 'base2',
    attacks: [
      {
        cost: [
          'Grass'
        ],
        name: 'Supersonic',
        text: 'Flip a coin. If heads, the Defending Pokémon is now Confused.',
        damage: '',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Grass',
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
        type: 'Psychic',
        value: '×2'
      }
    ]
  },
  {
    id: 'base2-41',
    name: 'Parasect',
    nationalPokedexNumber: 47,
    imageUrl: 'https://images.pokemontcg.io/base2/41.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/base2/41_hires.png',
    types: [
      'Grass'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Paras',
    hp: '60',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '41',
    artist: 'Ken Sugimori',
    rarity: 'Uncommon',
    series: 'Base',
    set: 'Jungle',
    setCode: 'base2',
    attacks: [
      {
        cost: [
          'Grass',
          'Grass'
        ],
        name: 'Spore',
        text: 'The Defending Pokémon is now Asleep.',
        damage: '',
        convertedEnergyCost: 2
      },
      {
        cost: [
          'Colorless',
          'Colorless',
          'Colorless'
        ],
        name: 'Slash',
        text: '',
        damage: '30',
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
    id: 'base2-42',
    name: 'Persian',
    nationalPokedexNumber: 53,
    imageUrl: 'https://images.pokemontcg.io/base2/42.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/base2/42_hires.png',
    types: [
      'Colorless'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Meowth',
    hp: '70',
    number: '42',
    artist: 'Kagemaru Himeno',
    rarity: 'Uncommon',
    series: 'Base',
    set: 'Jungle',
    setCode: 'base2',
    attacks: [
      {
        cost: [
          'Colorless',
          'Colorless'
        ],
        name: 'Scratch',
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
        name: 'Pounce',
        text: 'If the Defending Pokémon attacks Persian during your opponent\'s next turn, any damage done by the attack is reduce by 10 (after applying Weakness and Resistance). (Benching either Pokémon ends this effect.)',
        damage: '30',
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
    id: 'base2-43',
    name: 'Primeape',
    nationalPokedexNumber: 57,
    imageUrl: 'https://images.pokemontcg.io/base2/43.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/base2/43_hires.png',
    types: [
      'Fighting'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Mankey',
    hp: '70',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '43',
    artist: 'Kagemaru Himeno',
    rarity: 'Uncommon',
    series: 'Base',
    set: 'Jungle',
    setCode: 'base2',
    attacks: [
      {
        cost: [
          'Fighting',
          'Fighting'
        ],
        name: 'Fury Swipes',
        text: 'Flip 3 coins. This attack does 20 damage times the number of heads.',
        damage: '20×',
        convertedEnergyCost: 2
      },
      {
        cost: [
          'Fighting',
          'Fighting',
          'Colorless'
        ],
        name: 'Tantrum',
        text: 'Flip a coin. If tails, Primeape is now Confused (after doing damage).',
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
    id: 'base2-44',
    name: 'Rapidash',
    nationalPokedexNumber: 78,
    imageUrl: 'https://images.pokemontcg.io/base2/44.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/base2/44_hires.png',
    types: [
      'Fire'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Ponyta',
    hp: '70',
    number: '44',
    artist: 'Mitsuhiro Arita',
    rarity: 'Uncommon',
    series: 'Base',
    set: 'Jungle',
    setCode: 'base2',
    attacks: [
      {
        cost: [
          'Colorless',
          'Colorless'
        ],
        name: 'Stomp',
        text: 'Flip a coin. If heads, this attack does 20 damage plus 10 more damage; if tails, this attack does 20 damage.',
        damage: '20+',
        convertedEnergyCost: 2
      },
      {
        cost: [
          'Fire',
          'Fire',
          'Colorless'
        ],
        name: 'Agility',
        text: 'Flip a coin. If heads, during your opponent\'s next turn, prevent all effects of attacks, including damage, done to Rapidash.',
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
    id: 'base2-45',
    name: 'Rhydon',
    nationalPokedexNumber: 112,
    imageUrl: 'https://images.pokemontcg.io/base2/45.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/base2/45_hires.png',
    types: [
      'Fighting'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Rhyhorn',
    hp: '100',
    retreatCost: [
      'Colorless',
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 3,
    number: '45',
    artist: 'Kagemaru Himeno',
    rarity: 'Uncommon',
    series: 'Base',
    set: 'Jungle',
    setCode: 'base2',
    attacks: [
      {
        cost: [
          'Fighting',
          'Colorless',
          'Colorless'
        ],
        name: 'Horn Attack',
        text: '',
        damage: '30',
        convertedEnergyCost: 3
      },
      {
        cost: [
          'Fighting',
          'Fighting',
          'Fighting',
          'Fighting'
        ],
        name: 'Ram',
        text: 'Rhydon does 20 damage to itself. If your opponent has any Benched Pokémon, he or she chooses 1 of them and switches it with the Defending Pokémon. (Do the damage before switching the Pokémon. Switch the Pokémon even if Rhydon is knocked out.)',
        damage: '50',
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
    id: 'base2-46',
    name: 'Seaking',
    nationalPokedexNumber: 119,
    imageUrl: 'https://images.pokemontcg.io/base2/46.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/base2/46_hires.png',
    types: [
      'Water'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Goldeen',
    hp: '70',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '46',
    artist: 'Kagemaru Himeno',
    rarity: 'Uncommon',
    series: 'Base',
    set: 'Jungle',
    setCode: 'base2',
    attacks: [
      {
        cost: [
          'Water'
        ],
        name: 'Horn Attack',
        text: '',
        damage: '10',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Water',
          'Colorless'
        ],
        name: 'Waterfall',
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
    id: 'base2-47',
    name: 'Tauros',
    nationalPokedexNumber: 128,
    imageUrl: 'https://images.pokemontcg.io/base2/47.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/base2/47_hires.png',
    types: [
      'Colorless'
    ],
    supertype: 'Pokémon',
    subtype: 'Basic',
    hp: '60',
    retreatCost: [
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 2,
    number: '47',
    artist: 'Kagemaru Himeno',
    rarity: 'Uncommon',
    series: 'Base',
    set: 'Jungle',
    setCode: 'base2',
    attacks: [
      {
        cost: [
          'Colorless',
          'Colorless'
        ],
        name: 'Stomp',
        text: 'Flip a coin. If heads, this attack does 20 damage plus 10 more damage; if tails, this attack does 20 damage.',
        damage: '20+',
        convertedEnergyCost: 2
      },
      {
        cost: [
          'Colorless',
          'Colorless',
          'Colorless'
        ],
        name: 'Rampage',
        text: 'Does 20 damage plus 10 more damage for each damage counter on Tauros. Flip a coin. If tails, Tauros is now Confused (after doing damage).',
        damage: '20+',
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
    id: 'base2-48',
    name: 'Weepinbell',
    nationalPokedexNumber: 70,
    imageUrl: 'https://images.pokemontcg.io/base2/48.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/base2/48_hires.png',
    types: [
      'Grass'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Bellsprout',
    hp: '70',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '48',
    artist: 'Kagemaru Himeno',
    rarity: 'Uncommon',
    series: 'Base',
    set: 'Jungle',
    setCode: 'base2',
    attacks: [
      {
        cost: [
          'Grass'
        ],
        name: 'Poisonpowder',
        text: 'Flip a coin. If heads, the Defending Pokémon is now Poisoned.',
        damage: '',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Grass',
          'Grass'
        ],
        name: 'Razor Leaf',
        text: '',
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
    id: 'base2-49',
    name: 'Bellsprout',
    nationalPokedexNumber: 69,
    imageUrl: 'https://images.pokemontcg.io/base2/49.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/base2/49_hires.png',
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
    number: '49',
    artist: 'Kagemaru Himeno',
    rarity: 'Common',
    series: 'Base',
    set: 'Jungle',
    setCode: 'base2',
    attacks: [
      {
        cost: [
          'Grass'
        ],
        name: 'Vine Whip',
        text: '',
        damage: '10',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Grass'
        ],
        name: 'Call for Family',
        text: 'Search your deck for a Basic Pokémon named Bellsprout and put it onto your Bench. Shuffle your deck afterward. (You can\'t use this attack if your Bench is full.)',
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
    id: 'base2-50',
    name: 'Cubone',
    nationalPokedexNumber: 104,
    imageUrl: 'https://images.pokemontcg.io/base2/50.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/base2/50_hires.png',
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
    artist: 'Mitsuhiro Arita',
    rarity: 'Common',
    series: 'Base',
    set: 'Jungle',
    setCode: 'base2',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Snivel',
        text: 'If the Defending Pokémon attacks Cubone during your opponent\'s next turn, any damage done by the attack is reduced by 20 (after applying Weakness and Resistance). (Benching either Pokémon ends this effect.)',
        damage: '',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Fighting',
          'Fighting'
        ],
        name: 'Rage',
        text: 'Does 10 damage plus 10 more damage for each damage counter on Cubone.',
        damage: '10+',
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
    id: 'base2-51',
    name: 'Eevee',
    nationalPokedexNumber: 133,
    imageUrl: 'https://images.pokemontcg.io/base2/51.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/base2/51_hires.png',
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
    number: '51',
    artist: 'Kagemaru Himeno',
    rarity: 'Common',
    series: 'Base',
    set: 'Jungle',
    setCode: 'base2',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Tail Wag',
        text: 'Flip a coin. If heads, the Defending Pokémon can\'t attack Eevee during your opponent\'s next turn. (Benching either Pokémon ends this effect.)',
        damage: '',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Colorless',
          'Colorless'
        ],
        name: 'Quick Attack',
        text: 'Flip a coin. If heads, this attack does 10 damage plus 20 more damage; if tails, this attack does 10 damage.',
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
    id: 'base2-52',
    name: 'Exeggcute',
    nationalPokedexNumber: 102,
    imageUrl: 'https://images.pokemontcg.io/base2/52.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/base2/52_hires.png',
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
    number: '52',
    artist: 'Mitsuhiro Arita',
    rarity: 'Common',
    series: 'Base',
    set: 'Jungle',
    setCode: 'base2',
    attacks: [
      {
        cost: [
          'Psychic'
        ],
        name: 'Hypnosis',
        text: 'The Defending Pokémon is now Asleep.',
        damage: '',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Grass',
          'Grass'
        ],
        name: 'Leech Seed',
        text: 'Unless all damage from this attack is prevented, you may remove 1 damage counter from Exeggcute.',
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
    id: 'base2-53',
    name: 'Goldeen',
    nationalPokedexNumber: 118,
    imageUrl: 'https://images.pokemontcg.io/base2/53.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/base2/53_hires.png',
    types: [
      'Water'
    ],
    supertype: 'Pokémon',
    subtype: 'Basic',
    hp: '40',
    number: '53',
    artist: 'Kagemaru Himeno',
    rarity: 'Common',
    series: 'Base',
    set: 'Jungle',
    setCode: 'base2',
    attacks: [
      {
        cost: [
          'Water'
        ],
        name: 'Horn Attack',
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
    id: 'base2-54',
    name: 'Jigglypuff',
    nationalPokedexNumber: 39,
    imageUrl: 'https://images.pokemontcg.io/base2/54.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/base2/54_hires.png',
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
    number: '54',
    artist: 'Kagemaru Himeno',
    rarity: 'Common',
    series: 'Base',
    set: 'Jungle',
    setCode: 'base2',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Lullaby',
        text: 'The Defending Pokémon is now Asleep.',
        damage: '',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Colorless',
          'Colorless'
        ],
        name: 'Pound',
        text: '',
        damage: '20',
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
    id: 'base2-55',
    name: 'Mankey',
    nationalPokedexNumber: 56,
    imageUrl: 'https://images.pokemontcg.io/base2/55.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/base2/55_hires.png',
    types: [
      'Fighting'
    ],
    supertype: 'Pokémon',
    subtype: 'Basic',
    ability: {
      name: 'Peek',
      text: 'Once during your turn (before your attack), you may look at one of the following: the top card of either player\'s deck, a random card from your opponent\'s hand, or one of either player\'s Prizes. This power can\'t be used if Mankey is Asleep, Confused, or Paralyzed.',
      type: 'Pokémon Power'
    },
    hp: '30',
    number: '55',
    artist: 'Kagemaru Himeno',
    rarity: 'Common',
    series: 'Base',
    set: 'Jungle',
    setCode: 'base2',
    attacks: [
      {
        cost: [
          'Colorless'
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
    id: 'base2-56',
    name: 'Meowth',
    nationalPokedexNumber: 52,
    imageUrl: 'https://images.pokemontcg.io/base2/56.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/base2/56_hires.png',
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
    number: '56',
    artist: 'Mitsuhiro Arita',
    rarity: 'Common',
    series: 'Base',
    set: 'Jungle',
    setCode: 'base2',
    attacks: [
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
    id: 'base2-57',
    name: 'Nidoran♀',
    nationalPokedexNumber: 29,
    imageUrl: 'https://images.pokemontcg.io/base2/57.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/base2/57_hires.png',
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
    number: '57',
    artist: 'Ken Sugimori',
    rarity: 'Common',
    series: 'Base',
    set: 'Jungle',
    setCode: 'base2',
    attacks: [
      {
        cost: [
          'Grass'
        ],
        name: 'Fury Swipes',
        text: 'Flip 3 coins. This attack does 10 damage times the number of heads.',
        damage: '10×',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Grass',
          'Grass'
        ],
        name: 'Call for Family',
        text: 'Search your deck for a Basic Pokémon named Nidoran M or Nidoran F and put it onto your Bench. Shuffle your deck afterward. (You can\'t use this attack if your Bench is full.)',
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
    id: 'base2-58',
    name: 'Oddish',
    nationalPokedexNumber: 43,
    imageUrl: 'https://images.pokemontcg.io/base2/58.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/base2/58_hires.png',
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
    number: '58',
    artist: 'Keiji Kinebuchi',
    rarity: 'Common',
    series: 'Base',
    set: 'Jungle',
    setCode: 'base2',
    attacks: [
      {
        cost: [
          'Grass'
        ],
        name: 'Stun Spore',
        text: 'Flip a coin. If heads, the Defending Pokémon is now Paralyzed.',
        damage: '10',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Grass',
          'Grass'
        ],
        name: 'Sprout',
        text: 'Search your deck for a Basic Pokémon named Oddish and put it onto your Bench. Shuffle your deck afterward. (You can\'t use this attack if your Bench is full.)',
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
    id: 'base2-59',
    name: 'Paras',
    nationalPokedexNumber: 46,
    imageUrl: 'https://images.pokemontcg.io/base2/59.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/base2/59_hires.png',
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
    number: '59',
    artist: 'Ken Sugimori',
    rarity: 'Common',
    series: 'Base',
    set: 'Jungle',
    setCode: 'base2',
    attacks: [
      {
        cost: [
          'Colorless',
          'Colorless'
        ],
        name: 'Scratch',
        text: '',
        damage: '20',
        convertedEnergyCost: 2
      },
      {
        cost: [
          'Grass',
          'Grass'
        ],
        name: 'Spore',
        text: 'The Defending Pokémon is now Asleep.',
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
    id: 'base2-60',
    name: 'Pikachu',
    nationalPokedexNumber: 25,
    imageUrl: 'https://images.pokemontcg.io/base2/60.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/base2/60_hires.png',
    types: [
      'Lightning'
    ],
    supertype: 'Pokémon',
    subtype: 'Basic',
    evolvesFrom: 'Pichu',
    hp: '50',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '60',
    artist: 'Ken Sugimori',
    rarity: 'Common',
    series: 'Base',
    set: 'Jungle',
    setCode: 'base2',
    attacks: [
      {
        cost: [
          'Lightning',
          'Lightning'
        ],
        name: 'Spark',
        text: 'If your opponent has any Benched Pokémon, choose 1 of them and this attack does 10 damage to it. (Don\'t apply Weakness and Resistance for Benched Pokémon.)',
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
    id: 'base2-61',
    name: 'Rhyhorn',
    nationalPokedexNumber: 111,
    imageUrl: 'https://images.pokemontcg.io/base2/61.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/base2/61_hires.png',
    types: [
      'Fighting'
    ],
    supertype: 'Pokémon',
    subtype: 'Basic',
    hp: '70',
    retreatCost: [
      'Colorless',
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 3,
    number: '61',
    artist: 'Mitsuhiro Arita',
    rarity: 'Common',
    series: 'Base',
    set: 'Jungle',
    setCode: 'base2',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Leer',
        text: 'Flip a coin. If heads, the Defending Pokémon can\'t attack Rhyhorn during your opponent\'s next turn. (Benching either Pokémon ends this effect.)',
        damage: '',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Fighting',
          'Colorless',
          'Colorless'
        ],
        name: 'Horn Attack',
        text: '',
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
    id: 'base2-62',
    name: 'Spearow',
    nationalPokedexNumber: 21,
    imageUrl: 'https://images.pokemontcg.io/base2/62.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/base2/62_hires.png',
    types: [
      'Colorless'
    ],
    supertype: 'Pokémon',
    subtype: 'Basic',
    hp: '50',
    number: '62',
    artist: 'Mitsuhiro Arita',
    rarity: 'Common',
    series: 'Base',
    set: 'Jungle',
    setCode: 'base2',
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
          'Colorless',
          'Colorless'
        ],
        name: 'Mirror Move',
        text: 'If Spearow was attacked last turn, do the final result of that attack on Spearow to the Defending Pokémon.',
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
    id: 'base2-63',
    name: 'Venonat',
    nationalPokedexNumber: 48,
    imageUrl: 'https://images.pokemontcg.io/base2/63.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/base2/63_hires.png',
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
    number: '63',
    artist: 'Mitsuhiro Arita',
    rarity: 'Common',
    series: 'Base',
    set: 'Jungle',
    setCode: 'base2',
    attacks: [
      {
        cost: [
          'Grass'
        ],
        name: 'Stun Spore',
        text: 'Flip a coin. If heads, the Defending Pokémon is now Paralyzed.',
        damage: '10',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Grass',
          'Colorless'
        ],
        name: 'Leech Life',
        text: 'Remove a number of damage counters from Venonat equal to the damage done to the Defending Pokémon (after applying Weakness and Resistance).',
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
    id: 'base2-64',
    name: 'Poké Ball',
    imageUrl: 'https://images.pokemontcg.io/base2/64.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/base2/64_hires.png',
    supertype: 'Trainer',
    subtype: '',
    number: '64',
    artist: 'Keiji Kinebuchi',
    rarity: 'Common',
    series: 'Base',
    set: 'Jungle',
    setCode: 'base2',
    text: [
      'Flip a coin. If heads, you may search your deck for any Basic Pokémon or Evolution card. Show that card to your opponent, then put it into your hand. Shuffle your deck afterward.'
    ]
  }
]