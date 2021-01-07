const gymChallengeCards = [
  {
    id: 'gym2-1',
    name: 'Blaine\'s Arcanine',
    nationalPokedexNumber: 59,
    imageUrl: 'https://images.pokemontcg.io/gym2/1.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/gym2/1_hires.png',
    types: [
      'Fire'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Growlithe',
    hp: '90',
    retreatCost: [
      'Colorless',
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 3,
    number: '1',
    artist: 'Ken Sugimori',
    rarity: 'Holo Rare',
    series: 'Gym',
    set: 'Gym Challenge',
    setCode: 'gym2',
    attacks: [
      {
        cost: [
          'Fire',
          'Colorless',
          'Colorless'
        ],
        name: 'Heat Tackle',
        text: 'Blaine\'s Arcanine does 10 damage to itself.',
        damage: '40',
        convertedEnergyCost: 3
      },
      {
        cost: [
          'Fire',
          'Fire',
          'Fire',
          'Fire'
        ],
        name: 'Firestorm',
        text: 'Discard 3 Energy cards attached to Blaine\'s Arcanine in order to use this attack.',
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
    id: 'gym2-2',
    name: 'Blaine\'s Charizard',
    nationalPokedexNumber: 6,
    imageUrl: 'https://images.pokemontcg.io/gym2/2.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/gym2/2_hires.png',
    types: [
      'Fire'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 2',
    evolvesFrom: 'Charmeleon',
    hp: '100',
    retreatCost: [
      'Colorless',
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 3,
    number: '2',
    artist: 'Ken Sugimori',
    rarity: 'Holo Rare',
    series: 'Gym',
    set: 'Gym Challenge',
    setCode: 'gym2',
    attacks: [
      {
        cost: [
          'Fire'
        ],
        name: 'Roaring Flames',
        text: 'Discard all Fighting Energy cards attached to Blaine\'s Charizard. If all Energy cards attached to Blaine\'s Charizard provide 2 Fire Energy, discard all of them. This attack does 20 damage plus 20 more damage for each Fire Energy discarded in this way. ERRATA: Discard all Fire Energy cards attached to Blaine\'s Charizard except 1.',
        damage: '20+',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Fire',
          'Fire'
        ],
        name: 'Flame Jet',
        text: 'Flip a coin. If heads, choose 1 of your opponent\'s Pokémon. This attack does 40 damage to that Pokémon. Don\'t apply Weakness and Resistance for this attack. (Any other effects that would happen after applying Weakness and Resistance still happen.)',
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
        type: 'Water',
        value: '×2'
      }
    ]
  },
  {
    id: 'gym2-3',
    name: 'Brock\'s Ninetales',
    nationalPokedexNumber: 38,
    imageUrl: 'https://images.pokemontcg.io/gym2/3.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/gym2/3_hires.png',
    types: [
      'Fire'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Vulpix',
    ability: {
      name: 'Shapeshift',
      text: 'Once during your turn (before your attack), you may attach an Evolution card from your hand to Brock\'s Ninetales. (This doesn\'t count as evolving Brock\'s Ninetales.) Treat Brock\'s Ninetales as if it were that Pokémon instead. It can\'t evolve, devolve, or use the Pokémon Power of that Pokémon. During your turn, you may discard the Evolution card attached to Brock\'s Ninetales. This power can\'t be used if Brock\'s Ninetales is Asleep, Confused, or Paralyzed. If Brock\'s Ninetales becomes Asleep, Confused, or Paralyzed, discard all Evolution cards attached to it.',
      type: 'Pokémon Power'
    },
    hp: '70',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '3',
    artist: 'Ken Sugimori',
    rarity: 'Holo Rare',
    series: 'Gym',
    set: 'Gym Challenge',
    setCode: 'gym2',
    attacks: [
      {
        cost: [
          'Fire',
          'Fire'
        ],
        name: 'Will-o\'-the-wisp',
        text: '',
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
    id: 'gym2-4',
    name: 'Erika\'s Venusaur',
    nationalPokedexNumber: 3,
    imageUrl: 'https://images.pokemontcg.io/gym2/4.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/gym2/4_hires.png',
    types: [
      'Grass'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 2',
    evolvesFrom: 'Ivysaur',
    hp: '90',
    retreatCost: [
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 2,
    number: '4',
    artist: 'Ken Sugimori',
    rarity: 'Holo Rare',
    series: 'Gym',
    set: 'Gym Challenge',
    setCode: 'gym2',
    attacks: [
      {
        cost: [
          'Grass'
        ],
        name: 'Growth',
        text: 'Flip a coin. If heads, you may attach up to 2 Grass Energy cards from your hand to Erika\'s Venusaur.',
        damage: '',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Grass',
          'Grass',
          'Grass',
          'Grass'
        ],
        name: 'Wide Solarbeam',
        text: 'If your opponent has any Benched Pokémon, choose 2 of them (or 1 if he or she has only 1). This attack does 20 damage to each of them. (Don\'t apply Weakness and Resistance for Benched Pokémon.)',
        damage: '20',
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
    id: 'gym2-5',
    name: 'Giovanni\'s Gyarados',
    nationalPokedexNumber: 130,
    imageUrl: 'https://images.pokemontcg.io/gym2/5.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/gym2/5_hires.png',
    types: [
      'Water'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Magikarp',
    hp: '90',
    retreatCost: [
      'Colorless',
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 3,
    number: '5',
    artist: 'Ken Sugimori',
    rarity: 'Holo Rare',
    series: 'Gym',
    set: 'Gym Challenge',
    setCode: 'gym2',
    attacks: [
      {
        cost: [
          'Water'
        ],
        name: 'Summon Storm',
        text: 'Flip 2 coins. If both of them are heads, this attack does 20 damage to each other Pokémon (even your own). Don\'t apply Weakness and Resistance for this attack.',
        damage: '',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Water',
          'Water',
          'Colorless',
          'Colorless'
        ],
        name: 'Dragon Tornado',
        text: 'Unless this attack Knocks Out the Defending Pokémon, choose 1 of your opponent\'s Benched Pokémon and switch it with the Defending Pokémon.',
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
        type: 'Grass',
        value: '×2'
      }
    ]
  },
  {
    id: 'gym2-6',
    name: 'Giovanni\'s Machamp',
    nationalPokedexNumber: 68,
    imageUrl: 'https://images.pokemontcg.io/gym2/6.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/gym2/6_hires.png',
    types: [
      'Fighting'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 2',
    evolvesFrom: 'Machoke',
    ability: {
      name: 'Fortitude',
      text: 'If Giovanni\'s Machamp would be Knocked Out by an opponent\'s attack, flip a coin. If heads, Giovanni\'s Machamp is not Knocked Out and its remaining HP become 10 instead. This power can\'t be used if Giovanni\'s Machamp is already Asleep, Confused, or Paralyzed.',
      type: 'Pokémon Power'
    },
    hp: '100',
    retreatCost: [
      'Colorless',
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 3,
    number: '6',
    artist: 'Ken Sugimori',
    rarity: 'Holo Rare',
    series: 'Gym',
    set: 'Gym Challenge',
    setCode: 'gym2',
    attacks: [
      {
        cost: [
          'Fighting',
          'Fighting',
          'Fighting',
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
    id: 'gym2-7',
    name: 'Giovanni\'s Nidoking',
    nationalPokedexNumber: 34,
    imageUrl: 'https://images.pokemontcg.io/gym2/7.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/gym2/7_hires.png',
    types: [
      'Grass'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 2',
    evolvesFrom: 'Nidorino',
    hp: '120',
    retreatCost: [
      'Colorless',
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 3,
    number: '7',
    artist: 'Ken Sugimori',
    rarity: 'Holo Rare',
    series: 'Gym',
    set: 'Gym Challenge',
    setCode: 'gym2',
    attacks: [
      {
        cost: [
          'Grass'
        ],
        name: 'Intimidate',
        text: 'If the Defending Pokémon\'s maximum HP is 50 or less, it can\'t attack Giovanni\'s Nidoking during your opponent\'s next turn. (Benching or evolving either Pokémon ends this effect.)',
        damage: '',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Grass',
          'Grass',
          'Grass',
          'Colorless'
        ],
        name: 'Tumbling Attack',
        text: 'Flip a coin. If heads, this attack does 40 damage plus 30 more damage; if tails, this attack does 40 damage.',
        damage: '40+',
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
    id: 'gym2-8',
    name: 'Giovanni\'s Persian',
    nationalPokedexNumber: 53,
    imageUrl: 'https://images.pokemontcg.io/gym2/8.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/gym2/8_hires.png',
    types: [
      'Colorless'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Meowth',
    ability: {
      name: 'Call the Boss',
      text: 'When you play Giovanni\'s Persian from your hand, you may search your deck for the Trainer card named Giovanni, show it to your opponent, and put it into your hand. Shuffle your deck afterward.',
      type: 'Pokémon Power'
    },
    hp: '60',
    number: '8',
    artist: 'Ken Sugimori',
    rarity: 'Holo Rare',
    series: 'Gym',
    set: 'Gym Challenge',
    setCode: 'gym2',
    attacks: [
      {
        cost: [
          'Colorless',
          'Colorless',
          'Colorless'
        ],
        name: 'Ambush',
        text: 'Flip a coin. If heads, this attack does 20 damage plus 20 more damage; if tails, this attack does 20 damage.',
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
    id: 'gym2-9',
    name: 'Koga\'s Beedrill',
    nationalPokedexNumber: 15,
    imageUrl: 'https://images.pokemontcg.io/gym2/9.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/gym2/9_hires.png',
    types: [
      'Grass'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 2',
    evolvesFrom: 'Kakuna',
    hp: '80',
    number: '9',
    artist: 'Ken Sugimori',
    rarity: 'Holo Rare',
    series: 'Gym',
    set: 'Gym Challenge',
    setCode: 'gym2',
    attacks: [
      {
        cost: [
          'Grass',
          'Grass'
        ],
        name: 'Nerve Poison',
        text: 'Flip a coin. If heads, the Defending Pokémon is now Paralyzed and Poisoned.',
        damage: '20',
        convertedEnergyCost: 2
      },
      {
        cost: [
          'Colorless',
          'Colorless',
          'Colorless'
        ],
        name: 'Hyper Needle',
        text: 'Flip a coin. If tails, this attack does nothing. Either way, you can\'t use this attack again as long as Koga\'s Beedrill stays in play (even putting Koga\'s Beedrill on the Bench won\'t let you use it again).',
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
        type: 'Fire',
        value: '×2'
      }
    ]
  },
  {
    id: 'gym2-10',
    name: 'Koga\'s Ditto',
    nationalPokedexNumber: 132,
    imageUrl: 'https://images.pokemontcg.io/gym2/10.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/gym2/10_hires.png',
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
    number: '10',
    artist: 'Ken Sugimori',
    rarity: 'Holo Rare',
    series: 'Gym',
    set: 'Gym Challenge',
    setCode: 'gym2',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Giant Growth',
        text: 'Flip a coin. If heads, Koga\'s Ditto\'s maximum HP is now 80 and Koga\'s Ditto\'s Pound attack\'s base damage is 30 instead of 10. (Benching Koga\'s Ditto ends this effect.)',
        damage: '',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Colorless'
        ],
        name: 'Pound',
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
    id: 'gym2-11',
    name: 'Lt. Surge\'s Raichu',
    nationalPokedexNumber: 26,
    imageUrl: 'https://images.pokemontcg.io/gym2/11.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/gym2/11_hires.png',
    types: [
      'Lightning'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Pikachu',
    hp: '80',
    retreatCost: [
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 2,
    number: '11',
    artist: 'Ken Sugimori',
    rarity: 'Holo Rare',
    series: 'Gym',
    set: 'Gym Challenge',
    setCode: 'gym2',
    attacks: [
      {
        cost: [
          'Lightning',
          'Lightning'
        ],
        name: 'Kerzap',
        text: 'Flip a coin. If heads, this attack does 20 damage plus 30 more damage to the Defending Pokémon and discard all Lightning Energy cards attached to Lt. Surge\'s Raichu. If tails, this attack does 20 damage.',
        damage: '20+',
        convertedEnergyCost: 2
      },
      {
        cost: [
          'Lightning',
          'Lightning',
          'Colorless',
          'Colorless'
        ],
        name: 'Thundertackle',
        text: 'Flip a coin. If heads, the Defending Pokémon is now Paralyzed. If tails, Lt. Surge\'s Raichu does 20 damage to itself.',
        damage: '40',
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
    id: 'gym2-12',
    name: 'Misty\'s Golduck',
    nationalPokedexNumber: 55,
    imageUrl: 'https://images.pokemontcg.io/gym2/12.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/gym2/12_hires.png',
    types: [
      'Water'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Psyduck',
    hp: '70',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '12',
    artist: 'Ken Sugimori',
    rarity: 'Holo Rare',
    series: 'Gym',
    set: 'Gym Challenge',
    setCode: 'gym2',
    attacks: [
      {
        cost: [
          'Water',
          'Colorless'
        ],
        name: 'Electro Beam',
        text: 'Flip a coin. If tails, discard all Energy cards attached to Misty\'s Golduck.',
        damage: '40',
        convertedEnergyCost: 2
      },
      {
        cost: [
          'Psychic',
          'Colorless'
        ],
        name: 'Super Removal',
        text: 'Flip a coin. If heads, choose 1 Energy card attached to each of your opponent\'s Pokémon that has any Energy cards and discard those Energy cards.',
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
    id: 'gym2-13',
    name: 'Misty\'s Gyarados',
    nationalPokedexNumber: 130,
    imageUrl: 'https://images.pokemontcg.io/gym2/13.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/gym2/13_hires.png',
    types: [
      'Water'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Magikarp',
    ability: {
      name: 'Rebellion',
      text: 'Whenever Misty\'s Gyarados attacks, flip 2 coins. If both of them are tails, that attack does nothing. Instead, shuffle Misty\'s Gyarados and all cards attached to it into your deck. (This power works even if Misty\'s Gyarados is Confused.)',
      type: 'Pokémon Power'
    },
    hp: '100',
    retreatCost: [
      'Colorless',
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 3,
    number: '13',
    artist: 'Ken Sugimori',
    rarity: 'Holo Rare',
    series: 'Gym',
    set: 'Gym Challenge',
    setCode: 'gym2',
    attacks: [
      {
        cost: [
          'Water',
          'Water',
          'Water',
          'Water'
        ],
        name: 'Tidal Wave',
        text: '',
        damage: '70',
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
        type: 'Grass',
        value: '×2'
      }
    ]
  },
  {
    id: 'gym2-14',
    name: 'Rocket\'s Mewtwo',
    nationalPokedexNumber: 150,
    imageUrl: 'https://images.pokemontcg.io/gym2/14.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/gym2/14_hires.png',
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
    number: '14',
    artist: 'Shin-ichi Yoshida',
    rarity: 'Holo Rare',
    series: 'Gym',
    set: 'Gym Challenge',
    setCode: 'gym2',
    attacks: [
      {
        cost: [
          'Psychic'
        ],
        name: 'Juxtapose',
        text: 'Flip a coin. If heads, switch the number of damage counters on Rocket\'s Mewtwo with the number of damage counters on the Defending Pokémon (even if it would Knock Out either Pokémon). (It\'s okay if 1 of the Pokémon has no damage counters on it.)',
        damage: '',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Psychic',
          'Psychic'
        ],
        name: 'Hypnoblast',
        text: 'Flip a coin. If heads, the Defending Pokémon is now Asleep.',
        damage: '20',
        convertedEnergyCost: 2
      },
      {
        cost: [
          'Psychic',
          'Psychic',
          'Psychic',
          'Colorless'
        ],
        name: 'Psyburn',
        text: '',
        damage: '60',
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
    id: 'gym2-15',
    name: 'Rocket\'s Zapdos',
    nationalPokedexNumber: 145,
    imageUrl: 'https://images.pokemontcg.io/gym2/15.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/gym2/15_hires.png',
    types: [
      'Lightning'
    ],
    supertype: 'Pokémon',
    subtype: 'Basic',
    hp: '70',
    retreatCost: [
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 2,
    number: '15',
    artist: 'Shin-ichi Yoshida',
    rarity: 'Holo Rare',
    series: 'Gym',
    set: 'Gym Challenge',
    setCode: 'gym2',
    attacks: [
      {
        cost: [
          'Lightning'
        ],
        name: 'Plasma',
        text: 'If there are any Lightning Energy cards in your discard pile, attach 1 of them to Rocket\'s Zapdos.',
        damage: '20',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Lightning',
          'Lightning',
          'Lightning',
          'Colorless'
        ],
        name: 'Electroburn',
        text: 'Rocket\'s Zapdos does damage to itself equal to 10 times the number of Lightning Energy cards attached to it.',
        damage: '70',
        convertedEnergyCost: 4
      }
    ],
    resistances: [
      {
        type: 'Fighting',
        value: '-30'
      }
    ]
  },
  {
    id: 'gym2-16',
    name: 'Sabrina\'s Alakazam',
    nationalPokedexNumber: 65,
    imageUrl: 'https://images.pokemontcg.io/gym2/16.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/gym2/16_hires.png',
    types: [
      'Psychic'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 2',
    evolvesFrom: 'Kadabra',
    ability: {
      name: 'Psylink',
      text: 'Sabrina\'s Alakazam always has a copy of every attack your Psychic Pokémon in play have (including their Energy costs and anything else required in order to use those attacks, such as discarding Energy cards). This power can\'t be used if Sabrina\'s Alakazam is Asleep, Confused, or Paralyzed.',
      type: 'Pokémon Power'
    },
    hp: '80',
    retreatCost: [
      'Colorless',
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 3,
    number: '16',
    artist: 'Ken Sugimori',
    rarity: 'Holo Rare',
    series: 'Gym',
    set: 'Gym Challenge',
    setCode: 'gym2',
    attacks: [
      {
        cost: [
          'Psychic',
          'Colorless',
          'Colorless',
          'Colorless'
        ],
        name: 'Mega Burn',
        text: 'You can\'t use this attack during your next turn.',
        damage: '60',
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
    id: 'gym2-17',
    name: 'Blaine',
    imageUrl: 'https://images.pokemontcg.io/gym2/17.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/gym2/17_hires.png',
    supertype: 'Trainer',
    subtype: '',
    number: '17',
    artist: 'Ken Sugimori',
    rarity: 'Holo Rare',
    series: 'Gym',
    set: 'Gym Challenge',
    setCode: 'gym2',
    text: [
      'During this turn, instead of attaching your free Energy card, you may instead attach 2 Fire Energy cards to 1 of your Pokémon with Blaine in its name. (Playing additional copies of this card this turn has no effect.)'
    ]
  },
  {
    id: 'gym2-18',
    name: 'Giovanni',
    imageUrl: 'https://images.pokemontcg.io/gym2/18.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/gym2/18_hires.png',
    supertype: 'Trainer',
    subtype: '',
    number: '18',
    artist: 'Ken Sugimori',
    rarity: 'Holo Rare',
    series: 'Gym',
    set: 'Gym Challenge',
    setCode: 'gym2',
    text: [
      'Choose 1 of your Pokémon in play with Giovanni in its name. For the rest of your turn, you may evolve that Pokémon even if you just played or evolved it this turn or if this is your first turn. This effect also applies to the Pokémon it evolves into.'
    ]
  },
  {
    id: 'gym2-19',
    name: 'Koga',
    imageUrl: 'https://images.pokemontcg.io/gym2/19.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/gym2/19_hires.png',
    supertype: 'Trainer',
    subtype: '',
    number: '19',
    artist: 'Ken Sugimori',
    rarity: 'Holo Rare',
    series: 'Gym',
    set: 'Gym Challenge',
    setCode: 'gym2',
    text: [
      'If an attack from a Pokémon with Koga in its name does damage to a Defending Pokémon this turn, that Pokémon is then Poisoned.'
    ]
  },
  {
    id: 'gym2-20',
    name: 'Sabrina',
    imageUrl: 'https://images.pokemontcg.io/gym2/20.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/gym2/20_hires.png',
    supertype: 'Trainer',
    subtype: '',
    number: '20',
    artist: 'Ken Sugimori',
    rarity: 'Holo Rare',
    series: 'Gym',
    set: 'Gym Challenge',
    setCode: 'gym2',
    text: [
      'Take all Energy cards attached to 1 of your Pokémon with Sabrina in its name and attach them to another 1 of your Pokémon with Sabrina in its name.'
    ]
  },
  {
    id: 'gym2-21',
    name: 'Blaine\'s Ninetales',
    nationalPokedexNumber: 38,
    imageUrl: 'https://images.pokemontcg.io/gym2/21.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/gym2/21_hires.png',
    types: [
      'Fire'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Vulpix',
    ability: {
      name: 'Healing Fire',
      text: 'Whenever you attach a Fire Energy card from your hand to Blaine\'s Ninetales, remove 1 damage counter from it, if it has any. This power stops working while Blaine\'s Ninetales is Asleep, Confused, or Paralyzed.',
      type: 'Pokémon Power'
    },
    hp: '60',
    retreatCost: [
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 2,
    number: '21',
    artist: 'Ken Sugimori',
    rarity: 'Rare',
    series: 'Gym',
    set: 'Gym Challenge',
    setCode: 'gym2',
    attacks: [
      {
        cost: [
          'Fire',
          'Fire'
        ],
        name: 'Burn Up',
        text: 'Flip a coin. If tails, discard all Fire Energy cards attached to Blaine\'s Ninetales.',
        damage: '50',
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
    id: 'gym2-22',
    name: 'Brock\'s Dugtrio',
    nationalPokedexNumber: 51,
    imageUrl: 'https://images.pokemontcg.io/gym2/22.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/gym2/22_hires.png',
    types: [
      'Fighting'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Diglett',
    hp: '60',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '22',
    artist: 'Ken Sugimori',
    rarity: 'Rare',
    series: 'Gym',
    set: 'Gym Challenge',
    setCode: 'gym2',
    attacks: [
      {
        cost: [
          'Fighting'
        ],
        name: 'Lie Low',
        text: 'All damage done to Brock\'s Dugtrio during your opponent\'s next turn is reduced by 20 (after applying Weakness and Resistance).',
        damage: '',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Fighting',
          'Fighting',
          'Colorless'
        ],
        name: 'Earthdrill',
        text: 'This attack can\'t be used unless Brock\'s Dugtrio used its Lie Low attack last turn.',
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
    id: 'gym2-23',
    name: 'Giovanni\'s Nidoqueen',
    nationalPokedexNumber: 31,
    imageUrl: 'https://images.pokemontcg.io/gym2/23.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/gym2/23_hires.png',
    types: [
      'Grass'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 2',
    evolvesFrom: 'Nidorina',
    hp: '100',
    retreatCost: [
      'Colorless',
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 3,
    number: '23',
    artist: 'Ken Sugimori',
    rarity: 'Rare',
    series: 'Gym',
    set: 'Gym Challenge',
    setCode: 'gym2',
    attacks: [
      {
        cost: [
          'Grass',
          'Grass',
          'Colorless'
        ],
        name: 'Mega Kick',
        text: '',
        damage: '40',
        convertedEnergyCost: 3
      },
      {
        cost: [
          'Grass',
          'Grass',
          'Colorless',
          'Colorless'
        ],
        name: 'Love Lariat',
        text: 'Flip a coin. If heads, this attack does 50 damage plus 50 more damage if you have at least 1 Giovanni\'s Nidoking on your Bench. If tails, this attack does nothing.',
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
    id: 'gym2-24',
    name: 'Giovanni\'s Pinsir',
    nationalPokedexNumber: 127,
    imageUrl: 'https://images.pokemontcg.io/gym2/24.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/gym2/24_hires.png',
    types: [
      'Grass'
    ],
    supertype: 'Pokémon',
    subtype: 'Basic',
    hp: '70',
    retreatCost: [
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 2,
    number: '24',
    artist: 'Ken Sugimori',
    rarity: 'Rare',
    series: 'Gym',
    set: 'Gym Challenge',
    setCode: 'gym2',
    attacks: [
      {
        cost: [
          'Grass',
          'Colorless'
        ],
        name: 'Snapping Pincers',
        text: 'Flip a coin. If heads, this attack does 10 damage plus 10 more damage; if tails, this attack does 10 damage.',
        damage: '10+',
        convertedEnergyCost: 2
      },
      {
        cost: [
          'Grass',
          'Colorless',
          'Colorless'
        ],
        name: 'Overhead Toss',
        text: 'If you have any Benched Pokémon, flip a coin. If tails, choose 1 of your Benched Pokémon. This attack does 20 damage to that Pokémon. (Don\'t apply Weakness and Resistance for Benched Pokémon.)',
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
    id: 'gym2-25',
    name: 'Koga\'s Arbok',
    nationalPokedexNumber: 24,
    imageUrl: 'https://images.pokemontcg.io/gym2/25.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/gym2/25_hires.png',
    types: [
      'Grass'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Ekans',
    hp: '90',
    retreatCost: [
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 2,
    number: '25',
    artist: 'Ken Sugimori',
    rarity: 'Rare',
    series: 'Gym',
    set: 'Gym Challenge',
    setCode: 'gym2',
    attacks: [
      {
        cost: [
          'Grass'
        ],
        name: 'Poison Buildup',
        text: 'Koga\'s Arbok is now Poisoned.',
        damage: '',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Grass',
          'Grass'
        ],
        name: 'Poison Powder',
        text: 'If Koga\'s Arbok is Poisoned, this attack\'s base damage is 40 instead of 20 and the Defending Pokémon is now Poisoned.',
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
    id: 'gym2-26',
    name: 'Koga\'s Muk',
    nationalPokedexNumber: 89,
    imageUrl: 'https://images.pokemontcg.io/gym2/26.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/gym2/26_hires.png',
    types: [
      'Grass'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Grimer',
    ability: {
      name: 'Energy Drain',
      text: 'If an opponent\'s attack does damage to Koga\'s Muk (even if Koga\'s Muk is Knocked Out), flip a coin. If heads and it has any, choose 1 Energy card attached to the attacking Pokémon and discard it. This power can\'t be used if Koga\'s Muk is already Asleep, Confused, or Paralyzed when your opponent attacks.',
      type: 'Pokémon Power'
    },
    hp: '80',
    retreatCost: [
      'Colorless',
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 3,
    number: '26',
    artist: 'Ken Sugimori',
    rarity: 'Rare',
    series: 'Gym',
    set: 'Gym Challenge',
    setCode: 'gym2',
    attacks: [
      {
        cost: [
          'Grass',
          'Grass',
          'Colorless'
        ],
        name: 'Sludge Whirlpool',
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
    id: 'gym2-27',
    name: 'Koga\'s Pidgeotto',
    nationalPokedexNumber: 17,
    imageUrl: 'https://images.pokemontcg.io/gym2/27.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/gym2/27_hires.png',
    types: [
      'Colorless'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Pidgey',
    hp: '60',
    number: '27',
    artist: 'Ken Sugimori',
    rarity: 'Rare',
    series: 'Gym',
    set: 'Gym Challenge',
    setCode: 'gym2',
    attacks: [
      {
        cost: [
          'Colorless',
          'Colorless',
          'Colorless'
        ],
        name: 'Quick Turn',
        text: 'Flip 2 coins. This attack does 30 damage times the number of heads.',
        damage: '30×',
        convertedEnergyCost: 3
      },
      {
        cost: [
          'Colorless',
          'Colorless',
          'Colorless',
          'Colorless'
        ],
        name: 'Aerial Maneuvers',
        text: 'Flip a coin. If heads, this attack does 10 damage plus 30 more damage, and, during your opponent\'s next turn, prevent all effects of attacks, including damage, done to Koga\'s Pidgeotto. If tails, this attack does 10 damage.',
        damage: '10+',
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
    id: 'gym2-28',
    name: 'Lt. Surge\'s Jolteon',
    nationalPokedexNumber: 135,
    imageUrl: 'https://images.pokemontcg.io/gym2/28.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/gym2/28_hires.png',
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
    number: '28',
    artist: 'Ken Sugimori',
    rarity: 'Rare',
    series: 'Gym',
    set: 'Gym Challenge',
    setCode: 'gym2',
    attacks: [
      {
        cost: [
          'Lightning',
          'Colorless'
        ],
        name: 'High Voltage',
        text: 'Flip a coin. If heads, your opponent can\'t play Trainer cards during his or her next turn.',
        damage: '20',
        convertedEnergyCost: 2
      },
      {
        cost: [
          'Lightning',
          'Lightning',
          'Lightning'
        ],
        name: 'Thunder Flare',
        text: 'Does 30 damage plus 10 damage times the number of damage counters on Lt. Surge\'s Jolteon, then flip a coin. If tails, Lt. Surge\'s Jolteon does 30 damage to itself.',
        damage: '30+',
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
    id: 'gym2-29',
    name: 'Sabrina\'s Gengar',
    nationalPokedexNumber: 94,
    imageUrl: 'https://images.pokemontcg.io/gym2/29.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/gym2/29_hires.png',
    types: [
      'Psychic'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 2',
    evolvesFrom: 'Haunter',
    hp: '90',
    retreatCost: [
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 2,
    number: '29',
    artist: 'Ken Sugimori',
    rarity: 'Rare',
    series: 'Gym',
    set: 'Gym Challenge',
    setCode: 'gym2',
    attacks: [
      {
        cost: [
          'Psychic',
          'Psychic'
        ],
        name: 'Dark Wave',
        text: 'All Pokémon Powers stop working until the end of your opponent\'s next turn.',
        damage: '20',
        convertedEnergyCost: 2
      },
      {
        cost: [
          'Psychic',
          'Psychic',
          'Psychic'
        ],
        name: 'Shadow Bind',
        text: 'The Defending Pokémon can\'t retreat during your opponent\'s next turn.',
        damage: '40',
        convertedEnergyCost: 3
      }
    ],
    resistances: [
      {
        type: 'Fighting',
        value: '-30'
      }
    ]
  },
  {
    id: 'gym2-30',
    name: 'Sabrina\'s Golduck',
    nationalPokedexNumber: 55,
    imageUrl: 'https://images.pokemontcg.io/gym2/30.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/gym2/30_hires.png',
    types: [
      'Water'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Psyduck',
    hp: '70',
    retreatCost: [
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 2,
    number: '30',
    artist: 'Ken Sugimori',
    rarity: 'Rare',
    series: 'Gym',
    set: 'Gym Challenge',
    setCode: 'gym2',
    attacks: [
      {
        cost: [
          'Psychic',
          'Psychic'
        ],
        name: 'Damage Shift',
        text: 'Move 1 damage counter from each of your Pokémon that has any on it to the Defending Pokémon. (Don\'t apply Weakness and Resistance.)',
        damage: '',
        convertedEnergyCost: 2
      },
      {
        cost: [
          'Water',
          'Colorless',
          'Colorless'
        ],
        name: 'Water Spray',
        text: 'Flip a coin. If heads, this attack does 20 damage plus 20 more damage; if tails, this attack does 20 damage.',
        damage: '20+',
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
    id: 'gym2-31',
    name: 'Blaine\'s Charmeleon',
    nationalPokedexNumber: 5,
    imageUrl: 'https://images.pokemontcg.io/gym2/31.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/gym2/31_hires.png',
    types: [
      'Fire'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Charmander',
    hp: '70',
    retreatCost: [
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 2,
    number: '31',
    artist: 'Ken Sugimori',
    rarity: 'Uncommon',
    series: 'Gym',
    set: 'Gym Challenge',
    setCode: 'gym2',
    attacks: [
      {
        cost: [
          'Fire',
          'Fire'
        ],
        name: 'Fire Claws',
        text: '',
        damage: '30',
        convertedEnergyCost: 2
      },
      {
        cost: [
          'Fire',
          'Fire',
          'Fire'
        ],
        name: 'Bonfire',
        text: 'Flip 3 coins. For each heads, discard 1 Fire Energy card attached to Blaine\'s Charmeleon. If you can\'t discard Energy cards, this attack does nothing. This attack does 10 damage times the number of heads to each of your opponent\'s Pokémon. Don\'t apply Weakness and Resistance for this attack. (Any other effects that would happen after applying Weakness and Resistance still happen.)',
        damage: '',
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
    id: 'gym2-32',
    name: 'Blaine\'s Dodrio',
    nationalPokedexNumber: 85,
    imageUrl: 'https://images.pokemontcg.io/gym2/32.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/gym2/32_hires.png',
    types: [
      'Colorless'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Doduo',
    hp: '70',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '32',
    artist: 'Ken Sugimori',
    rarity: 'Uncommon',
    series: 'Gym',
    set: 'Gym Challenge',
    setCode: 'gym2',
    attacks: [
      {
        cost: [
          'Colorless',
          'Colorless'
        ],
        name: 'Mega Peck',
        text: 'Flip a coin. If tails, this attack does nothing.',
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
        type: 'Lightning',
        value: '×2'
      }
    ]
  },
  {
    id: 'gym2-33',
    name: 'Blaine\'s Rapidash',
    nationalPokedexNumber: 78,
    imageUrl: 'https://images.pokemontcg.io/gym2/33.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/gym2/33_hires.png',
    types: [
      'Fire'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Ponyta',
    hp: '70',
    number: '33',
    artist: 'Ken Sugimori',
    rarity: 'Uncommon',
    series: 'Gym',
    set: 'Gym Challenge',
    setCode: 'gym2',
    attacks: [
      {
        cost: [
          'Fire'
        ],
        name: 'Fire Mane',
        text: '',
        damage: '20',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Fire',
          'Colorless',
          'Colorless'
        ],
        name: 'Stamp',
        text: 'Flip a coin. If heads, this attack does 30 damage plus 10 more damage (to the Defending Pokémon) and 10 damage to each of your opponent\'s Benched Pokémon. (Don\'t apply Weakness and Resistance for Benched Pokémon.) If tails, this attack does 30 damage (to the Defending Pokémon.)',
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
    id: 'gym2-34',
    name: 'Brock\'s Graveler',
    nationalPokedexNumber: 75,
    imageUrl: 'https://images.pokemontcg.io/gym2/34.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/gym2/34_hires.png',
    types: [
      'Fighting'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Geodude',
    hp: '70',
    retreatCost: [
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 2,
    number: '34',
    artist: 'Atsuko Nishida',
    rarity: 'Uncommon',
    series: 'Gym',
    set: 'Gym Challenge',
    setCode: 'gym2',
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
          'Fighting',
          'Fighting',
          'Fighting'
        ],
        name: 'Detonate',
        text: 'Does 10 damage to each Pokémon on each player\'s bench. (Don\'t apply Weakness and Resistance for Benched Pokémon.) Brock\'s Graveler does 50 damage to itself. If there is a Stadium card in play, discard it.',
        damage: '50',
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
    id: 'gym2-35',
    name: 'Brock\'s Primeape',
    nationalPokedexNumber: 57,
    imageUrl: 'https://images.pokemontcg.io/gym2/35.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/gym2/35_hires.png',
    types: [
      'Fighting'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Mankey',
    ability: {
      name: 'Scram',
      text: 'If Brock\'s Primeape ever has exactly 10 HP left, shuffle it and all cards attached to it into your deck. This power stops working while Brock\'s Primeape is Asleep, Confused, or Paralyzed.',
      type: 'Pokémon Power'
    },
    hp: '70',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '35',
    artist: 'Ken Sugimori',
    rarity: 'Uncommon',
    series: 'Gym',
    set: 'Gym Challenge',
    setCode: 'gym2',
    attacks: [
      {
        cost: [
          'Fighting',
          'Fighting',
          'Fighting'
        ],
        name: 'Mega Thrash',
        text: 'Brock\'s Primeape does 20 damage to itself. If there is a Stadium card in play, discard it.',
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
    id: 'gym2-36',
    name: 'Brock\'s Sandslash',
    nationalPokedexNumber: 28,
    imageUrl: 'https://images.pokemontcg.io/gym2/36.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/gym2/36_hires.png',
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
    number: '36',
    artist: 'Atsuko Nishida',
    rarity: 'Uncommon',
    series: 'Gym',
    set: 'Gym Challenge',
    setCode: 'gym2',
    attacks: [
      {
        cost: [
          'Fighting',
          'Colorless'
        ],
        name: 'Swift',
        text: 'This attack\'s damage isn\'t affected by Weakness, Resistance, Pokémon Powers, or any other effects on the Defending Pokémon.',
        damage: '20',
        convertedEnergyCost: 2
      },
      {
        cost: [
          'Fighting',
          'Fighting'
        ],
        name: 'Needle Ball',
        text: 'Flip a coin. If heads, the Defending Pokémon is now Poisoned.',
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
    id: 'gym2-37',
    name: 'Brock\'s Vulpix',
    nationalPokedexNumber: 37,
    imageUrl: 'https://images.pokemontcg.io/gym2/37.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/gym2/37_hires.png',
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
    number: '37',
    artist: 'Ken Sugimori',
    rarity: 'Uncommon',
    series: 'Gym',
    set: 'Gym Challenge',
    setCode: 'gym2',
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
          'Fire',
          'Fire'
        ],
        name: 'Fire Ring',
        text: 'If your opponent has any Benched Pokémon, choose 1 of them and this attack does 10 damage to it. (Don\'t apply Weakness and Resistance for Benched Pokémon.)',
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
    id: 'gym2-38',
    name: 'Erika\'s Bellsprout',
    nationalPokedexNumber: 69,
    imageUrl: 'https://images.pokemontcg.io/gym2/38.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/gym2/38_hires.png',
    types: [
      'Grass'
    ],
    supertype: 'Pokémon',
    subtype: 'Basic',
    ability: {
      name: 'Soak Up',
      text: 'Once during your turn (before your attack), you may take up to 2 Grass Energy cards attached to other Pokémon and attach them to Erika\'s Bellsprout. This power can\'t be used if Erika\'s Bellsprout is Asleep, Confused, or Paralyzed.',
      type: 'Pokémon Power'
    },
    hp: '40',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '38',
    artist: 'Ken Sugimori',
    rarity: 'Uncommon',
    series: 'Gym',
    set: 'Gym Challenge',
    setCode: 'gym2',
    attacks: [
      {
        cost: [
          'Grass'
        ],
        name: 'Stretch Vine',
        text: 'Choose 1 of your opponent\'s Benched Pokémon, and this attack does 10 damage to it. (Don\'t apply Weakness and resistance for Benched Pokémon.)',
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
    id: 'gym2-39',
    name: 'Erika\'s Bulbasaur',
    nationalPokedexNumber: 1,
    imageUrl: 'https://images.pokemontcg.io/gym2/39.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/gym2/39_hires.png',
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
    number: '39',
    artist: 'Ken Sugimori',
    rarity: 'Uncommon',
    series: 'Gym',
    set: 'Gym Challenge',
    setCode: 'gym2',
    attacks: [
      {
        cost: [
          'Grass'
        ],
        name: 'Sleep Seed',
        text: 'The Defending Pokémon is now Asleep.',
        damage: '10',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Grass',
          'Grass'
        ],
        name: 'Errand-Running',
        text: 'Flip a coin. If heads, you may search your deck for a Trainer card. Show it to your opponent and put it into your hand. Shuffle your deck afterward.',
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
    id: 'gym2-40',
    name: 'Erika\'s Clefairy',
    nationalPokedexNumber: 35,
    imageUrl: 'https://images.pokemontcg.io/gym2/40.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/gym2/40_hires.png',
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
    number: '40',
    artist: 'Atsuko Nishida',
    rarity: 'Uncommon',
    series: 'Gym',
    set: 'Gym Challenge',
    setCode: 'gym2',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Lunar Power',
        text: 'Flip a coin. If heads, search your deck for a card that evolves from 1 of your Benched Pokémon and put that card on that Pokémon. (This counts as evolving that Pokémon.) Shuffle your deck afterward.',
        damage: '',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Colorless',
          'Colorless'
        ],
        name: 'Moon Kick',
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
    id: 'gym2-41',
    name: 'Erika\'s Ivysaur',
    nationalPokedexNumber: 2,
    imageUrl: 'https://images.pokemontcg.io/gym2/41.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/gym2/41_hires.png',
    types: [
      'Grass'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Bulbasaur',
    ability: {
      name: 'Relaxing Scent',
      text: 'As long as Erika\'s Ivysaur is your Active Pokémon, whenever an attack (even your own) does damage to any Pokémon (after applying Weakness and Resistance), that attack only does half the damage to that Pokémon (rounded up to the nearest 10). (Any other effects of attacks still happen.) This power stops working while Erika\'s Ivysaur is Asleep, Confused, or Paralyzed.',
      type: 'Pokémon Power'
    },
    hp: '60',
    retreatCost: [
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 2,
    number: '41',
    artist: 'Ken Sugimori',
    rarity: 'Uncommon',
    series: 'Gym',
    set: 'Gym Challenge',
    setCode: 'gym2',
    attacks: [
      {
        cost: [
          'Grass',
          'Grass',
          'Grass'
        ],
        name: 'Double Razor Leaf',
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
    id: 'gym2-42',
    name: 'Giovanni\'s Machoke',
    nationalPokedexNumber: 67,
    imageUrl: 'https://images.pokemontcg.io/gym2/42.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/gym2/42_hires.png',
    types: [
      'Fighting'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Machop',
    hp: '80',
    retreatCost: [
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 2,
    number: '42',
    artist: 'Ken Sugimori',
    rarity: 'Uncommon',
    series: 'Gym',
    set: 'Gym Challenge',
    setCode: 'gym2',
    attacks: [
      {
        cost: [
          'Fighting'
        ],
        name: 'Risky Attack',
        text: 'Flip a coin. If tails, this attack does no damage to the Defending Pokémon and Giovanni\'s Machoke does 100 damage to itself.',
        damage: '',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Fighting',
          'Fighting',
          'Colorless'
        ],
        name: 'Headlock',
        text: 'Flip a coin. If heads, this attack does 20 damage plus 20 more damage and the Defending Pokémon is now Paralyzed. If tails, this attack does 20 damage.',
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
    id: 'gym2-43',
    name: 'Giovanni\'s Meowth',
    nationalPokedexNumber: 52,
    imageUrl: 'https://images.pokemontcg.io/gym2/43.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/gym2/43_hires.png',
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
    number: '43',
    artist: 'Atsuko Nishida',
    rarity: 'Uncommon',
    series: 'Gym',
    set: 'Gym Challenge',
    setCode: 'gym2',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'False Charity',
        text: 'Flip a coin. If heads, look at the top card of your opponent\'s deck. If it\'s a Trainer card, put it in your opponent\'s discard pile; otherwise, put it into his or her hand.',
        damage: '',
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
    id: 'gym2-44',
    name: 'Giovanni\'s Nidorina',
    nationalPokedexNumber: 30,
    imageUrl: 'https://images.pokemontcg.io/gym2/44.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/gym2/44_hires.png',
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
    number: '44',
    artist: 'Ken Sugimori',
    rarity: 'Uncommon',
    series: 'Gym',
    set: 'Gym Challenge',
    setCode: 'gym2',
    attacks: [
      {
        cost: [
          'Grass',
          'Colorless'
        ],
        name: 'Poison Sting Tackle',
        text: 'Giovanni\'s Nidorina does 20 damage to itself. Flip a coin. If heads, the Defending Pokémon is now Poisoned.',
        damage: '',
        convertedEnergyCost: 2
      },
      {
        cost: [
          'Grass',
          'Colorless',
          'Colorless'
        ],
        name: 'Body Slam',
        text: 'Flip a coin. If heads, the Defending Pokémon is now Paralyzed.',
        damage: '20',
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
    id: 'gym2-45',
    name: 'Giovanni\'s Nidorino',
    nationalPokedexNumber: 33,
    imageUrl: 'https://images.pokemontcg.io/gym2/45.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/gym2/45_hires.png',
    types: [
      'Grass'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Nidoran♂',
    hp: '70',
    retreatCost: [
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 2,
    number: '45',
    artist: 'Ken Sugimori',
    rarity: 'Uncommon',
    series: 'Gym',
    set: 'Gym Challenge',
    setCode: 'gym2',
    attacks: [
      {
        cost: [
          'Grass',
          'Colorless',
          'Colorless'
        ],
        name: 'Rend',
        text: 'If the Defending Pokémon already has any damage counters on it, this attack does 20 damage plus 20 more damage. If not, this attack does 20 damage.',
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
    id: 'gym2-46',
    name: 'Koga\'s Golbat',
    nationalPokedexNumber: 42,
    imageUrl: 'https://images.pokemontcg.io/gym2/46.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/gym2/46_hires.png',
    types: [
      'Grass'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Zubat',
    hp: '60',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '46',
    artist: 'Ken Sugimori',
    rarity: 'Uncommon',
    series: 'Gym',
    set: 'Gym Challenge',
    setCode: 'gym2',
    attacks: [
      {
        cost: [
          'Colorless',
          'Colorless'
        ],
        name: 'Bite',
        text: '',
        damage: '20',
        convertedEnergyCost: 2
      },
      {
        cost: [
          'Grass',
          'Grass',
          'Grass'
        ],
        name: 'Sonic Scream',
        text: 'Flip a coin. If heads, the Defending Pokémon is now Confused.',
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
        type: 'Psychic',
        value: '×2'
      }
    ]
  },
  {
    id: 'gym2-47',
    name: 'Koga\'s Kakuna',
    nationalPokedexNumber: 14,
    imageUrl: 'https://images.pokemontcg.io/gym2/47.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/gym2/47_hires.png',
    types: [
      'Grass'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Weedle',
    ability: {
      name: 'Emerge',
      text: 'Once during your turn (before your attack), you may flip a coin. If heads, search your deck for an Evolution card named Koga\'s Beedrill and put it on Koga\'s Kakuna. (This counts as evolving Koga\'s Kakuna.) Shuffle your deck afterward. This power can\'t be used if Koga\'s Kakuna is Asleep, Confused, or Paralyzed.',
      type: 'Pokémon Power'
    },
    hp: '60',
    retreatCost: [
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 2,
    number: '47',
    artist: 'Ken Sugimori',
    rarity: 'Uncommon',
    series: 'Gym',
    set: 'Gym Challenge',
    setCode: 'gym2',
    attacks: [
      {
        cost: [
          'Grass'
        ],
        name: 'Toxic Secretion',
        text: 'Flip a coin. If heads, the Defending Pokémon is now Poisoned. It takes 20 Poison damage instead of 10 after each player\'s turn (even if it was already Poisoned).',
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
    id: 'gym2-48',
    name: 'Koga\'s Koffing',
    nationalPokedexNumber: 109,
    imageUrl: 'https://images.pokemontcg.io/gym2/48.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/gym2/48_hires.png',
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
    number: '48',
    artist: 'Ken Sugimori',
    rarity: 'Uncommon',
    series: 'Gym',
    set: 'Gym Challenge',
    setCode: 'gym2',
    attacks: [
      {
        cost: [
          'Grass'
        ],
        name: 'Smokescreen',
        text: 'If the Defending Pokémon tries to attack during your opponent\'s next turn, your opponent flips a coin. If tails, that attack does nothing.',
        damage: '10',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Grass',
          'Colorless'
        ],
        name: 'Obscuring Gas',
        text: 'Flip a coin. If heads, shuffle Koga\'s Koffing and all cards attached to it into your deck (after doing damage).',
        damage: '30',
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
    id: 'gym2-49',
    name: 'Koga\'s Pidgey',
    nationalPokedexNumber: 16,
    imageUrl: 'https://images.pokemontcg.io/gym2/49.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/gym2/49_hires.png',
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
    number: '49',
    artist: 'Atsuko Nishida',
    rarity: 'Uncommon',
    series: 'Gym',
    set: 'Gym Challenge',
    setCode: 'gym2',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Messenger',
        text: 'Put Koga\'s Pidgey and all cards attached to it on top of your deck. Then search your deck for any Basic Pokémon or Evolution card not named Koga\'s Pidgey. Show that card to your opponent, then put it into your hand. Shuffle your deck afterward.',
        damage: '',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Colorless',
          'Colorless'
        ],
        name: 'Wing Attack',
        text: '',
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
    id: 'gym2-50',
    name: 'Koga\'s Weezing',
    nationalPokedexNumber: 110,
    imageUrl: 'https://images.pokemontcg.io/gym2/50.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/gym2/50_hires.png',
    types: [
      'Grass'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Koffing',
    hp: '70',
    retreatCost: [
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 2,
    number: '50',
    artist: 'Ken Sugimori',
    rarity: 'Uncommon',
    series: 'Gym',
    set: 'Gym Challenge',
    setCode: 'gym2',
    attacks: [
      {
        cost: [
          'Grass',
          'Grass'
        ],
        name: 'Spontaneous Explosion',
        text: 'Flip a coin. If heads, this attack does 10 damage plus 30 more damage and Koga\'s Weezing does 30 damage to itself; if tails, this attack does 10 damage.',
        damage: '10+',
        convertedEnergyCost: 2
      },
      {
        cost: [
          'Grass',
          'Grass',
          'Colorless'
        ],
        name: 'Toxic Cloud',
        text: 'Flip a coin. If heads, the Defending Pokémon is now Poisoned. It now takes 20 Poison damage instead of 10 after each player\'s turn (even if it was already Poisoned).',
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
    id: 'gym2-51',
    name: 'Lt. Surge\'s Eevee',
    nationalPokedexNumber: 133,
    imageUrl: 'https://images.pokemontcg.io/gym2/51.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/gym2/51_hires.png',
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
    number: '51',
    artist: 'Ken Sugimori',
    rarity: 'Uncommon',
    series: 'Gym',
    set: 'Gym Challenge',
    setCode: 'gym2',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Surprise',
        text: 'Look at a random card from your opponent\'s hand. Your opponent shuffles that card into his or her deck.',
        damage: '',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Colorless',
          'Colorless'
        ],
        name: 'Scratch',
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
    id: 'gym2-52',
    name: 'Lt. Surge\'s Electrode',
    nationalPokedexNumber: 101,
    imageUrl: 'https://images.pokemontcg.io/gym2/52.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/gym2/52_hires.png',
    types: [
      'Lightning'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Voltorb',
    ability: {
      name: 'Shock Blast',
      text: 'If Lt. Surge\'s Electrode is your Active Pokémon and gets damaged (even if it\'s Knocked Out), flip a coin. If tails, this power does 20 damage to each Active Pokémon. This power works even if Lt. Surge\'s Electrode is already Asleep, Confused, or Paralyzed when it takes damage.',
      type: 'Pokémon Power'
    },
    hp: '70',
    retreatCost: [
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 2,
    number: '52',
    artist: 'Ken Sugimori',
    rarity: 'Uncommon',
    series: 'Gym',
    set: 'Gym Challenge',
    setCode: 'gym2',
    attacks: [
      {
        cost: [
          'Lightning',
          'Lightning',
          'Colorless'
        ],
        name: 'Power Ball',
        text: 'Flip 3 coins. This attack does 30 damage plus 10 more damage for each heads.',
        damage: '30+',
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
    id: 'gym2-53',
    name: 'Lt. Surge\'s Raticate',
    nationalPokedexNumber: 20,
    imageUrl: 'https://images.pokemontcg.io/gym2/53.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/gym2/53_hires.png',
    types: [
      'Colorless'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Rattata',
    hp: '60',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '53',
    artist: 'Ken Sugimori',
    rarity: 'Uncommon',
    series: 'Gym',
    set: 'Gym Challenge',
    setCode: 'gym2',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Focus Energy',
        text: 'During your next turn, Lt. Surge\'s Raticate\'s Double',
        damage: '',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Colorless',
          'Colorless'
        ],
        name: 'Double-edge',
        text: 'Lt. Surge\'s Raticate does 20 damage to itself.',
        damage: '40',
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
    id: 'gym2-54',
    name: 'Misty\'s Dewgong',
    nationalPokedexNumber: 87,
    imageUrl: 'https://images.pokemontcg.io/gym2/54.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/gym2/54_hires.png',
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
    number: '54',
    artist: 'Ken Sugimori',
    rarity: 'Uncommon',
    series: 'Gym',
    set: 'Gym Challenge',
    setCode: 'gym2',
    attacks: [
      {
        cost: [
          'Water',
          'Water'
        ],
        name: 'Ice Throw',
        text: 'If the Defending Pokémon is Fighting, this attack\'s base damage is doubled.',
        damage: '',
        convertedEnergyCost: 2
      },
      {
        cost: [
          'Water',
          'Colorless',
          'Colorless',
          'Colorless'
        ],
        name: 'Take Down',
        text: 'Misty\'s Dewgong does 20 damage to itself.',
        damage: '60',
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
    id: 'gym2-55',
    name: 'Sabrina\'s Haunter',
    nationalPokedexNumber: 93,
    imageUrl: 'https://images.pokemontcg.io/gym2/55.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/gym2/55_hires.png',
    types: [
      'Psychic'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Gastly',
    hp: '70',
    number: '55',
    artist: 'Ken Sugimori',
    rarity: 'Uncommon',
    series: 'Gym',
    set: 'Gym Challenge',
    setCode: 'gym2',
    attacks: [
      {
        cost: [
          'Psychic',
          'Psychic'
        ],
        name: 'Nightmare',
        text: 'The Defending Pokémon is now Asleep.',
        damage: '20',
        convertedEnergyCost: 2
      },
      {
        cost: [
          'Psychic',
          'Psychic',
          'Psychic'
        ],
        name: 'Shadow Attack',
        text: 'Flip a coin. If heads, and if your opponent has any Benched Pokémon, choose 1 of them and this attack does 30 damage to it. (Don\'t apply Weakness and Resistance for Benched Pokémon.)',
        damage: '',
        convertedEnergyCost: 3
      }
    ],
    resistances: [
      {
        type: 'Fighting',
        value: '-30'
      }
    ]
  },
  {
    id: 'gym2-56',
    name: 'Sabrina\'s Hypno',
    nationalPokedexNumber: 97,
    imageUrl: 'https://images.pokemontcg.io/gym2/56.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/gym2/56_hires.png',
    types: [
      'Psychic'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Drowzee',
    hp: '70',
    retreatCost: [
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 2,
    number: '56',
    artist: 'Ken Sugimori',
    rarity: 'Uncommon',
    series: 'Gym',
    set: 'Gym Challenge',
    setCode: 'gym2',
    attacks: [
      {
        cost: [
          'Psychic'
        ],
        name: 'Invigorate',
        text: 'Choose 1 Basic Pokémon in any player\'s discard pile. Put it onto that player\'s Bench. Put a number of damage counters on that Pokémon equal to half its HP (rounded down to the nearest 10). (You can\'t put a Pokémon on a Bench that\'s full.)',
        damage: '',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Psychic',
          'Psychic'
        ],
        name: 'Pendulum Curse',
        text: 'Flip a number of coins equal to the number of damage counters on the Defending Pokémon. This attack does 20 damage times the number of heads.',
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
    id: 'gym2-57',
    name: 'Sabrina\'s Jynx',
    nationalPokedexNumber: 124,
    imageUrl: 'https://images.pokemontcg.io/gym2/57.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/gym2/57_hires.png',
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
    number: '57',
    artist: 'Atsuko Nishida',
    rarity: 'Uncommon',
    series: 'Gym',
    set: 'Gym Challenge',
    setCode: 'gym2',
    attacks: [
      {
        cost: [
          'Psychic'
        ],
        name: 'Helping Hand',
        text: 'Choose 1 of your opponent\'s Pokémon. Remove any number of damage counters from that Pokémon, then draw that many cards.',
        damage: '',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Psychic',
          'Colorless'
        ],
        name: 'Hug',
        text: 'Flip a coin. If heads, the Defending Pokémon can\'t retreat during your opponent\'s next turn.',
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
    id: 'gym2-58',
    name: 'Sabrina\'s Kadabra',
    nationalPokedexNumber: 64,
    imageUrl: 'https://images.pokemontcg.io/gym2/58.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/gym2/58_hires.png',
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
    number: '58',
    artist: 'Ken Sugimori',
    rarity: 'Uncommon',
    series: 'Gym',
    set: 'Gym Challenge',
    setCode: 'gym2',
    attacks: [
      {
        cost: [
          'Psychic'
        ],
        name: 'Life Drain',
        text: 'Flip a coin. If heads, put a number of damage counters on the Defending Pokémon so that its remaining HP are 10.',
        damage: '',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Psychic',
          'Colorless',
          'Colorless'
        ],
        name: 'Psyshot',
        text: '',
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
    id: 'gym2-59',
    name: 'Sabrina\'s Mr. Mime',
    nationalPokedexNumber: 122,
    imageUrl: 'https://images.pokemontcg.io/gym2/59.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/gym2/59_hires.png',
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
    number: '59',
    artist: 'Ken Sugimori',
    rarity: 'Uncommon',
    series: 'Gym',
    set: 'Gym Challenge',
    setCode: 'gym2',
    attacks: [
      {
        cost: [
          'Psychic',
          'Colorless'
        ],
        name: 'Magic Darts',
        text: 'Choose 1 of your opponent\'s Pokémon and flip 3 coins. This attack does 10 damage times the number of heads to that Pokémon. Don\'t apply Weakness and Resistance for this attack.',
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
    id: 'gym2-60',
    name: 'Blaine\'s Charmander',
    nationalPokedexNumber: 4,
    imageUrl: 'https://images.pokemontcg.io/gym2/60.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/gym2/60_hires.png',
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
    number: '60',
    artist: 'Ken Sugimori',
    rarity: 'Common',
    series: 'Gym',
    set: 'Gym Challenge',
    setCode: 'gym2',
    attacks: [
      {
        cost: [
          'Fire'
        ],
        name: 'Fire Tail Slap',
        text: 'Use this attack only if there are any Fire Energy cards attached to Blaine\'s Charmander. Flip a coin. If tails, discard 1 of those cards.',
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
    id: 'gym2-61',
    name: 'Blaine\'s Doduo',
    nationalPokedexNumber: 84,
    imageUrl: 'https://images.pokemontcg.io/gym2/61.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/gym2/61_hires.png',
    types: [
      'Colorless'
    ],
    supertype: 'Pokémon',
    subtype: 'Basic',
    hp: '50',
    number: '61',
    artist: 'Ken Sugimori',
    rarity: 'Common',
    series: 'Gym',
    set: 'Gym Challenge',
    setCode: 'gym2',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Wild Kick',
        text: 'Flip a coin. If tails, this attack does nothing.',
        damage: '',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Colorless',
          'Colorless'
        ],
        name: 'Retaliate',
        text: 'Does 10 damage times the number of damage counters on Blaine\'s Doduo.',
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
    id: 'gym2-62',
    name: 'Blaine\'s Growlithe',
    nationalPokedexNumber: 58,
    imageUrl: 'https://images.pokemontcg.io/gym2/62.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/gym2/62_hires.png',
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
    number: '62',
    artist: 'Ken Sugimori',
    rarity: 'Common',
    series: 'Gym',
    set: 'Gym Challenge',
    setCode: 'gym2',
    attacks: [
      {
        cost: [
          'Fire'
        ],
        name: 'Stoke',
        text: 'Search your deck for a Fire Energy card and attach it to Blaine\'s Growlithe. Shuffle your deck afterward.',
        damage: '',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Fire',
          'Colorless',
          'Colorless'
        ],
        name: 'Body Slam',
        text: 'Flip a coin. If heads, the Defending Pokémon is now Paralyzed.',
        damage: '20',
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
    id: 'gym2-63',
    name: 'Blaine\'s Mankey',
    nationalPokedexNumber: 56,
    imageUrl: 'https://images.pokemontcg.io/gym2/63.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/gym2/63_hires.png',
    types: [
      'Fighting'
    ],
    supertype: 'Pokémon',
    subtype: 'Basic',
    hp: '40',
    number: '63',
    artist: 'Atsuko Nishida',
    rarity: 'Common',
    series: 'Gym',
    set: 'Gym Challenge',
    setCode: 'gym2',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Pranks',
        text: 'Flip a coin. If heads, choose a card from your opponent\'s discard pile and put it on top of his or her deck.',
        damage: '',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Fighting'
        ],
        name: 'Fury Swipes',
        text: 'Flip 3 coins. This attack does 10 damage times the number of heads.',
        damage: '10×',
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
    id: 'gym2-64',
    name: 'Blaine\'s Ponyta',
    nationalPokedexNumber: 77,
    imageUrl: 'https://images.pokemontcg.io/gym2/64.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/gym2/64_hires.png',
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
    number: '64',
    artist: 'Ken Sugimori',
    rarity: 'Common',
    series: 'Gym',
    set: 'Gym Challenge',
    setCode: 'gym2',
    attacks: [
      {
        cost: [
          'Colorless',
          'Colorless'
        ],
        name: 'Hind Kick',
        text: 'If you have any Benched Pokémon, flip a coin. If heads, switch Blaine\'s Ponyta with 1 of your Benched Pokémon.',
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
    id: 'gym2-65',
    name: 'Blaine\'s Rhyhorn',
    nationalPokedexNumber: 111,
    imageUrl: 'https://images.pokemontcg.io/gym2/65.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/gym2/65_hires.png',
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
    number: '65',
    artist: 'Ken Sugimori',
    rarity: 'Common',
    series: 'Gym',
    set: 'Gym Challenge',
    setCode: 'gym2',
    attacks: [
      {
        cost: [
          'Fighting'
        ],
        name: 'Horn Charge',
        text: 'Flip a coin. If tails, this attack does nothing.',
        damage: '',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Colorless',
          'Colorless',
          'Colorless'
        ],
        name: 'Overrun',
        text: 'Flip a coin. If heads and if your opponent has any Benched Pokémon, choose 1 of them and this attack does 20 damage to it. (Don\'t apply Weakness and Resistance for Benched Pokémon.)',
        damage: '20',
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
    id: 'gym2-66',
    name: 'Blaine\'s Vulpix',
    nationalPokedexNumber: 37,
    imageUrl: 'https://images.pokemontcg.io/gym2/66.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/gym2/66_hires.png',
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
    artist: 'Ken Sugimori',
    rarity: 'Common',
    series: 'Gym',
    set: 'Gym Challenge',
    setCode: 'gym2',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Bite',
        text: '',
        damage: '10',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Fire'
        ],
        name: 'Call Will-o\'-the-wisp',
        text: 'Flip 3 coins. For each heads, if you have a Fire Energy card in your discard pile, put it into your hand.',
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
    id: 'gym2-67',
    name: 'Brock\'s Diglett',
    nationalPokedexNumber: 50,
    imageUrl: 'https://images.pokemontcg.io/gym2/67.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/gym2/67_hires.png',
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
    number: '67',
    artist: 'Ken Sugimori',
    rarity: 'Common',
    series: 'Gym',
    set: 'Gym Challenge',
    setCode: 'gym2',
    attacks: [
      {
        cost: [
          'Fighting'
        ],
        name: 'Surprise Attack',
        text: 'Flip a coin. If tails, this attack does nothing.',
        damage: '',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Fighting',
          'Colorless'
        ],
        name: 'Tremor',
        text: 'Does 10 damage to each of your own Benched Pokémon. (Don\'t apply Weakness and Resistance for Benched Pokémon.)',
        damage: '40',
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
    id: 'gym2-68',
    name: 'Brock\'s Geodude',
    nationalPokedexNumber: 74,
    imageUrl: 'https://images.pokemontcg.io/gym2/68.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/gym2/68_hires.png',
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
    number: '68',
    artist: 'Ken Sugimori',
    rarity: 'Common',
    series: 'Gym',
    set: 'Gym Challenge',
    setCode: 'gym2',
    attacks: [
      {
        cost: [
          'Fighting'
        ],
        name: 'Rock Toss',
        text: 'Flip 3 coins. This attack does 10 damage times the number of heads.',
        damage: '10×',
        convertedEnergyCost: 1
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
    id: 'gym2-69',
    name: 'Erika\'s Jigglypuff',
    nationalPokedexNumber: 39,
    imageUrl: 'https://images.pokemontcg.io/gym2/69.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/gym2/69_hires.png',
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
    number: '69',
    artist: 'Ken Sugimori',
    rarity: 'Common',
    series: 'Gym',
    set: 'Gym Challenge',
    setCode: 'gym2',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Group Therapy',
        text: 'You and your opponent remove 1 damage counter from each of your Pokémon with damage counters on them.',
        damage: '',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Colorless',
          'Colorless'
        ],
        name: 'Pulled Punch',
        text: 'If the Defending Pokémon has no damage counters on it, this attack does 40 damage. If it has any damage counters on it, this attack does 10 damage.',
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
    id: 'gym2-70',
    name: 'Erika\'s Oddish',
    nationalPokedexNumber: 43,
    imageUrl: 'https://images.pokemontcg.io/gym2/70.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/gym2/70_hires.png',
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
    number: '70',
    artist: 'Ken Sugimori',
    rarity: 'Common',
    series: 'Gym',
    set: 'Gym Challenge',
    setCode: 'gym2',
    attacks: [
      {
        cost: [
          'Grass'
        ],
        name: 'Strange Powder',
        text: 'Flip a coin. If heads, the Defending Pokémon is now Confused; if tails, the Defending Pokémon is now Asleep.',
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
    id: 'gym2-71',
    name: 'Erika\'s Paras',
    nationalPokedexNumber: 46,
    imageUrl: 'https://images.pokemontcg.io/gym2/71.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/gym2/71_hires.png',
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
    number: '71',
    artist: 'Ken Sugimori',
    rarity: 'Common',
    series: 'Gym',
    set: 'Gym Challenge',
    setCode: 'gym2',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Irongrip',
        text: '',
        damage: '10',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Grass',
          'Grass'
        ],
        name: 'Poison Spore',
        text: 'Flip a coin. If heads, the Defending Pokémon is now Poisoned and this attack does 10 damage to each of your opponent\'s Benched Pokémon. (Don\'t apply Weakness and Resistance for Benched Pokémon.)',
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
    id: 'gym2-72',
    name: 'Giovanni\'s Machop',
    nationalPokedexNumber: 66,
    imageUrl: 'https://images.pokemontcg.io/gym2/72.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/gym2/72_hires.png',
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
    number: '72',
    artist: 'Ken Sugimori',
    rarity: 'Common',
    series: 'Gym',
    set: 'Gym Challenge',
    setCode: 'gym2',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Chop',
        text: '',
        damage: '10',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Fighting',
          'Fighting'
        ],
        name: 'Fury Punch',
        text: 'Flip a coin. If heads, this attack does 20 damage times the number of damage counters on Giovanni\'s Machop.',
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
    id: 'gym2-73',
    name: 'Giovanni\'s Magikarp',
    nationalPokedexNumber: 129,
    imageUrl: 'https://images.pokemontcg.io/gym2/73.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/gym2/73_hires.png',
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
    number: '73',
    artist: 'Ken Sugimori',
    rarity: 'Common',
    series: 'Gym',
    set: 'Gym Challenge',
    setCode: 'gym2',
    attacks: [
      {
        cost: [
          'Water'
        ],
        name: 'Ancestral Memory',
        text: 'Flip a coin. If tails, this attack does nothing. Either way, you can\'t use this attack again as long as Giovanni\'s Magikarp stays in play (even putting Giovanni\'s Magikarp on the Bench won\'t let you use it again).',
        damage: '',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Water',
          'Colorless'
        ],
        name: 'Flail Around',
        text: 'Flip 3 coins. This attack does 10 damage times the number of heads.',
        damage: '10×',
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
    id: 'gym2-74',
    name: 'Giovanni\'s Meowth',
    nationalPokedexNumber: 52,
    imageUrl: 'https://images.pokemontcg.io/gym2/74.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/gym2/74_hires.png',
    types: [
      'Colorless'
    ],
    supertype: 'Pokémon',
    subtype: 'Basic',
    hp: '50',
    retreatCost: [
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 2,
    number: '74',
    artist: 'Ken Sugimori',
    rarity: 'Common',
    series: 'Gym',
    set: 'Gym Challenge',
    setCode: 'gym2',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Cat Fleas',
        text: 'Flip a coin. If heads, the Defending Pokémon is now Confused.',
        damage: '',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Colorless',
          'Colorless',
          'Colorless'
        ],
        name: 'Cat Kick',
        text: '',
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
    id: 'gym2-75',
    name: 'Giovanni\'s Nidoran♀',
    nationalPokedexNumber: 29,
    imageUrl: 'https://images.pokemontcg.io/gym2/75.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/gym2/75_hires.png',
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
    number: '75',
    artist: 'Ken Sugimori',
    rarity: 'Common',
    series: 'Gym',
    set: 'Gym Challenge',
    setCode: 'gym2',
    attacks: [
      {
        cost: [
          'Grass'
        ],
        name: 'Horn Thrust',
        text: 'Flip a coin. If tails, this attack does nothing.',
        damage: '',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Colorless',
          'Colorless'
        ],
        name: 'Double-edge',
        text: 'Giovanni\'s Nidoran F does 20 damage to itself.',
        damage: '30',
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
    id: 'gym2-76',
    name: 'Giovanni\'s Nidoran♂',
    nationalPokedexNumber: 32,
    imageUrl: 'https://images.pokemontcg.io/gym2/76.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/gym2/76_hires.png',
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
    number: '76',
    artist: 'Ken Sugimori',
    rarity: 'Common',
    series: 'Gym',
    set: 'Gym Challenge',
    setCode: 'gym2',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Double Kick',
        text: 'Flip 2 coins. This attack does 10 damage times the number of heads.',
        damage: '10×',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Grass'
        ],
        name: 'Retaliation',
        text: 'You can\'t use this attack unless Giovanni\'s Nidoran M has 2 or more damage counters on it.',
        damage: '30',
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
    id: 'gym2-77',
    name: 'Koga\'s Ekans',
    nationalPokedexNumber: 23,
    imageUrl: 'https://images.pokemontcg.io/gym2/77.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/gym2/77_hires.png',
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
    number: '77',
    artist: 'Ken Sugimori',
    rarity: 'Common',
    series: 'Gym',
    set: 'Gym Challenge',
    setCode: 'gym2',
    attacks: [
      {
        cost: [
          'Grass'
        ],
        name: 'Fast',
        text: 'Acting Poison',
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
    id: 'gym2-78',
    name: 'Koga\'s Grimer',
    nationalPokedexNumber: 88,
    imageUrl: 'https://images.pokemontcg.io/gym2/78.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/gym2/78_hires.png',
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
    number: '78',
    artist: 'Ken Sugimori',
    rarity: 'Common',
    series: 'Gym',
    set: 'Gym Challenge',
    setCode: 'gym2',
    attacks: [
      {
        cost: [
          'Grass'
        ],
        name: 'Sludge Grip',
        text: 'If your opponent has any Benched Pokémon, flip a coin. If heads, choose 1 of your opponent\'s Benched Pokémon and switch it with the Defending Pokémon. The new Defending Pokémon is now Poisoned.',
        damage: '10',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Grass',
          'Colorless'
        ],
        name: 'Sludge Toss',
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
    id: 'gym2-79',
    name: 'Koga\'s Koffing',
    nationalPokedexNumber: 109,
    imageUrl: 'https://images.pokemontcg.io/gym2/79.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/gym2/79_hires.png',
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
    number: '79',
    artist: 'Ken Sugimori',
    rarity: 'Common',
    series: 'Gym',
    set: 'Gym Challenge',
    setCode: 'gym2',
    attacks: [
      {
        cost: [
          'Grass'
        ],
        name: 'Smelly Gas',
        text: 'Flip a coin. If heads, this attack does 10 damage to each Benched Pokémon (including your own). (Don\'t apply Weakness and Resistance for Benched Pokémon.)',
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
    id: 'gym2-80',
    name: 'Koga\'s Pidgey',
    nationalPokedexNumber: 16,
    imageUrl: 'https://images.pokemontcg.io/gym2/80.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/gym2/80_hires.png',
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
    number: '80',
    artist: 'Ken Sugimori',
    rarity: 'Common',
    series: 'Gym',
    set: 'Gym Challenge',
    setCode: 'gym2',
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
        name: 'Sand-attack',
        text: 'If the Defending Pokémon tries to attack during your opponent\'s next turn, your opponent flips a coin. If tails, that attack does nothing.',
        damage: '20',
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
    id: 'gym2-81',
    name: 'Koga\'s Tangela',
    nationalPokedexNumber: 114,
    imageUrl: 'https://images.pokemontcg.io/gym2/81.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/gym2/81_hires.png',
    types: [
      'Grass'
    ],
    supertype: 'Pokémon',
    subtype: 'Basic',
    hp: '50',
    retreatCost: [
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 2,
    number: '81',
    artist: 'Atsuko Nishida',
    rarity: 'Common',
    series: 'Gym',
    set: 'Gym Challenge',
    setCode: 'gym2',
    attacks: [
      {
        cost: [
          'Grass'
        ],
        name: 'Sleep Powder',
        text: 'The Defending Pokémon is now Asleep.',
        damage: '10',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Grass',
          'Colorless'
        ],
        name: 'Grasping Vine',
        text: 'Flip a coin. If heads, draw 2 cards.',
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
    id: 'gym2-82',
    name: 'Koga\'s Weedle',
    nationalPokedexNumber: 13,
    imageUrl: 'https://images.pokemontcg.io/gym2/82.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/gym2/82_hires.png',
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
    number: '82',
    artist: 'Ken Sugimori',
    rarity: 'Common',
    series: 'Gym',
    set: 'Gym Challenge',
    setCode: 'gym2',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Sting',
        text: '',
        damage: '10',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Grass',
          'Colorless'
        ],
        name: 'Sharp Stinger',
        text: 'Flip a coin. If heads, the Defending Pokémon is now Poisoned; if tails, the Defending Pokémon is now Paralyzed.',
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
    id: 'gym2-83',
    name: 'Koga\'s Zubat',
    nationalPokedexNumber: 41,
    imageUrl: 'https://images.pokemontcg.io/gym2/83.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/gym2/83_hires.png',
    types: [
      'Grass'
    ],
    supertype: 'Pokémon',
    subtype: 'Basic',
    hp: '40',
    number: '83',
    artist: 'Ken Sugimori',
    rarity: 'Common',
    series: 'Gym',
    set: 'Gym Challenge',
    setCode: 'gym2',
    attacks: [
      {
        cost: [
          'Grass',
          'Colorless'
        ],
        name: 'Group Attack',
        text: 'Does 10 damage times the number of Koga\'s Zubats you have in play. Before doing damage, you may search your deck for any number of Basic Pokémon named Koga\'s Zubat and put them onto your Bench. (You can\'t get more cards with this attack than you have room on your Bench.) If you do, shuffle your deck afterward.',
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
        type: 'Psychic',
        value: '×2'
      }
    ]
  },
  {
    id: 'gym2-84',
    name: 'Lt. Surge\'s Pikachu',
    nationalPokedexNumber: 25,
    imageUrl: 'https://images.pokemontcg.io/gym2/84.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/gym2/84_hires.png',
    types: [
      'Lightning'
    ],
    supertype: 'Pokémon',
    subtype: 'Basic',
    hp: '40',
    number: '84',
    artist: 'Atsuko Nishida',
    rarity: 'Common',
    series: 'Gym',
    set: 'Gym Challenge',
    setCode: 'gym2',
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
    id: 'gym2-85',
    name: 'Lt. Surge\'s Rattata',
    nationalPokedexNumber: 19,
    imageUrl: 'https://images.pokemontcg.io/gym2/85.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/gym2/85_hires.png',
    types: [
      'Colorless'
    ],
    supertype: 'Pokémon',
    subtype: 'Basic',
    hp: '30',
    number: '85',
    artist: 'Atsuko Nishida',
    rarity: 'Common',
    series: 'Gym',
    set: 'Gym Challenge',
    setCode: 'gym2',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Focus Energy',
        text: 'During your next turn, Lt. Surge\'s Rattata\'s Quick Attack\'s base damage is doubled.',
        damage: '',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Colorless',
          'Colorless'
        ],
        name: 'Quick Attack',
        text: 'Flip a coin. If heads, this attack does 10 damage plus 20 more damage; if tails this attack does 10 damage.',
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
    id: 'gym2-86',
    name: 'Lt. Surge\'s Voltorb',
    nationalPokedexNumber: 100,
    imageUrl: 'https://images.pokemontcg.io/gym2/86.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/gym2/86_hires.png',
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
    number: '86',
    artist: 'Atsuko Nishida',
    rarity: 'Common',
    series: 'Gym',
    set: 'Gym Challenge',
    setCode: 'gym2',
    attacks: [
      {
        cost: [
          'Lightning',
          'Colorless'
        ],
        name: 'Bouncing Ball',
        text: 'Flip a coin. If tails, Lt. Surge\'s Voltorb does 10 damage to itself.',
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
    id: 'gym2-87',
    name: 'Misty\'s Horsea',
    nationalPokedexNumber: 116,
    imageUrl: 'https://images.pokemontcg.io/gym2/87.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/gym2/87_hires.png',
    types: [
      'Water'
    ],
    supertype: 'Pokémon',
    subtype: 'Basic',
    hp: '50',
    number: '87',
    artist: 'Ken Sugimori',
    rarity: 'Common',
    series: 'Gym',
    set: 'Gym Challenge',
    setCode: 'gym2',
    attacks: [
      {
        cost: [
          'Water',
          'Water'
        ],
        name: 'Ink Spurt',
        text: 'Flip a coin. If heads, whenever the Defending Pokémon tries to attack, your opponent flips a coin. If tails, that attack does nothing. (This effect lasts until the Defending Pokémon evolves or is Benched.)',
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
    id: 'gym2-88',
    name: 'Misty\'s Magikarp',
    nationalPokedexNumber: 129,
    imageUrl: 'https://images.pokemontcg.io/gym2/88.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/gym2/88_hires.png',
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
    number: '88',
    artist: 'Ken Sugimori',
    rarity: 'Common',
    series: 'Gym',
    set: 'Gym Challenge',
    setCode: 'gym2',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Play Dead',
        text: 'Flip a coin. If heads, during your opponent\'s next turn, prevent all effects of attacks, including damage, done to Misty\'s Magikarp.',
        damage: '',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Colorless'
        ],
        name: 'Leap',
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
    id: 'gym2-89',
    name: 'Misty\'s Poliwag',
    nationalPokedexNumber: 60,
    imageUrl: 'https://images.pokemontcg.io/gym2/89.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/gym2/89_hires.png',
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
    number: '89',
    artist: 'Ken Sugimori',
    rarity: 'Common',
    series: 'Gym',
    set: 'Gym Challenge',
    setCode: 'gym2',
    attacks: [
      {
        cost: [
          'Water'
        ],
        name: 'Bubbles',
        text: 'Flip a coin. If tails, you can\'t use this attack during your next turn.',
        damage: '20',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Water',
          'Water'
        ],
        name: 'Amnesia',
        text: 'Choose 1 of the Defending Pokémon\'s attacks. That Pokémon can\'t use that attack during your opponent\'s next turn.',
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
    id: 'gym2-90',
    name: 'Misty\'s Psyduck',
    nationalPokedexNumber: 54,
    imageUrl: 'https://images.pokemontcg.io/gym2/90.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/gym2/90_hires.png',
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
    number: '90',
    artist: 'Ken Sugimori',
    rarity: 'Common',
    series: 'Gym',
    set: 'Gym Challenge',
    setCode: 'gym2',
    attacks: [
      {
        cost: [
          'Psychic'
        ],
        name: 'ESP',
        text: 'Flip 3 coins. If exactly 1 is heads, draw a card. If exactly 2 are heads, this attack does 20 damage. If all 3 are heads, choose 1 of the Defending Pokémon\'s attacks. Misty\'s Psyduck copies that attack except for its Energy costs. (No matter what type the Defending Pokémon is, Misty\'s Psyduck\'s type is still .)',
        damage: '',
        convertedEnergyCost: 1
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
    id: 'gym2-91',
    name: 'Misty\'s Seel',
    nationalPokedexNumber: 86,
    imageUrl: 'https://images.pokemontcg.io/gym2/91.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/gym2/91_hires.png',
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
    number: '91',
    artist: 'Ken Sugimori',
    rarity: 'Common',
    series: 'Gym',
    set: 'Gym Challenge',
    setCode: 'gym2',
    attacks: [
      {
        cost: [
          'Water'
        ],
        name: 'Frostbite',
        text: 'The Defending Pokémon can\'t retreat during your opponent\'s next turn.',
        damage: '10',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Water',
          'Colorless'
        ],
        name: 'Mirage',
        text: 'If the Defending Pokémon tries to attack during your opponent\'s next turn, your opponent flips a coin. If tails, that attack does nothing.',
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
    id: 'gym2-92',
    name: 'Misty\'s Staryu',
    nationalPokedexNumber: 120,
    imageUrl: 'https://images.pokemontcg.io/gym2/92.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/gym2/92_hires.png',
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
    number: '92',
    artist: 'Ken Sugimori',
    rarity: 'Common',
    series: 'Gym',
    set: 'Gym Challenge',
    setCode: 'gym2',
    attacks: [
      {
        cost: [
          'Water'
        ],
        name: 'Star Boomerang',
        text: 'Flip a coin. If heads, return Misty\'s Staryu and all cards attached to it to your hand. (Either way, this attack does its damage.)',
        damage: '20',
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
    id: 'gym2-93',
    name: 'Sabrina\'s Abra',
    nationalPokedexNumber: 63,
    imageUrl: 'https://images.pokemontcg.io/gym2/93.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/gym2/93_hires.png',
    types: [
      'Psychic'
    ],
    supertype: 'Pokémon',
    subtype: 'Basic',
    hp: '40',
    number: '93',
    artist: 'Ken Sugimori',
    rarity: 'Common',
    series: 'Gym',
    set: 'Gym Challenge',
    setCode: 'gym2',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Pound',
        text: '',
        damage: '10',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Psychic',
          'Colorless'
        ],
        name: 'Synchronize',
        text: 'This attack can\'t be used unless Sabrina\'s Abra and the Defending Pokémon have the same number of Energy cards attached to them.',
        damage: '40',
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
    id: 'gym2-94',
    name: 'Sabrina\'s Abra',
    nationalPokedexNumber: 63,
    imageUrl: 'https://images.pokemontcg.io/gym2/94.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/gym2/94_hires.png',
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
    number: '94',
    artist: 'Ken Sugimori',
    rarity: 'Common',
    series: 'Gym',
    set: 'Gym Challenge',
    setCode: 'gym2',
    attacks: [
      {
        cost: [
          'Psychic'
        ],
        name: 'Psyscan',
        text: 'Look at your opponent\'s hand.',
        damage: '',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Psychic'
        ],
        name: 'Quick Attack',
        text: 'Flip a coin. If heads, this attack does 10 damage plus 20 more damage; if tails, this attack does 10 damage.',
        damage: '10+',
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
    id: 'gym2-95',
    name: 'Sabrina\'s Drowzee',
    nationalPokedexNumber: 96,
    imageUrl: 'https://images.pokemontcg.io/gym2/95.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/gym2/95_hires.png',
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
    number: '95',
    artist: 'Ken Sugimori',
    rarity: 'Common',
    series: 'Gym',
    set: 'Gym Challenge',
    setCode: 'gym2',
    attacks: [
      {
        cost: [
          'Psychic'
        ],
        name: 'Energy Support',
        text: 'Search your deck for a Psychic Energy card. Show that card to your opponent, then put it into your hand. Shuffle your deck afterward.',
        damage: '',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Psychic',
          'Colorless'
        ],
        name: 'Mind Shock',
        text: 'Don\'t apply Weakness and Resistance for this attack. (Any other effects that would happen after applying Weakness and Resistance still happen.)',
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
    id: 'gym2-96',
    name: 'Sabrina\'s Gastly',
    nationalPokedexNumber: 92,
    imageUrl: 'https://images.pokemontcg.io/gym2/96.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/gym2/96_hires.png',
    types: [
      'Psychic'
    ],
    supertype: 'Pokémon',
    subtype: 'Basic',
    hp: '30',
    number: '96',
    artist: 'Ken Sugimori',
    rarity: 'Common',
    series: 'Gym',
    set: 'Gym Challenge',
    setCode: 'gym2',
    attacks: [
      {
        cost: [
          'Psychic'
        ],
        name: 'Lick',
        text: 'Flip a coin. If heads, the Defending Pokémon is now Paralyzed.',
        damage: '10',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Psychic',
          'Psychic'
        ],
        name: 'Fade Out',
        text: 'Return Sabrina\'s Gastly and all Energy cards attached to it to your hand. (Discard all other cards attached to Sabrina\'s Gastly.)',
        damage: '30',
        convertedEnergyCost: 2
      }
    ],
    resistances: [
      {
        type: 'Fighting',
        value: '-30'
      }
    ]
  },
  {
    id: 'gym2-97',
    name: 'Sabrina\'s Gastly',
    nationalPokedexNumber: 92,
    imageUrl: 'https://images.pokemontcg.io/gym2/97.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/gym2/97_hires.png',
    types: [
      'Psychic'
    ],
    supertype: 'Pokémon',
    subtype: 'Basic',
    ability: {
      name: 'Gaseous Form',
      text: 'Sabrina\'s Gastly gets +10 HP for each Psychic Energy card attached to it. This power works even if Sabrina\'s Gastly is Asleep, Confused, or Paralyzed.',
      type: 'Pokémon Power'
    },
    hp: '40',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '97',
    artist: 'Atsuko Nishida',
    rarity: 'Common',
    series: 'Gym',
    set: 'Gym Challenge',
    setCode: 'gym2',
    attacks: [
      {
        cost: [
          'Psychic',
          'Psychic'
        ],
        name: 'Suffocating Gas',
        text: '',
        damage: '30',
        convertedEnergyCost: 2
      }
    ],
    resistances: [
      {
        type: 'Fighting',
        value: '-30'
      }
    ]
  },
  {
    id: 'gym2-98',
    name: 'Sabrina\'s Porygon',
    nationalPokedexNumber: 137,
    imageUrl: 'https://images.pokemontcg.io/gym2/98.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/gym2/98_hires.png',
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
    number: '98',
    artist: 'Ken Sugimori',
    rarity: 'Common',
    series: 'Gym',
    set: 'Gym Challenge',
    setCode: 'gym2',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Sharp Point',
        text: '',
        damage: '10',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Colorless',
          'Colorless'
        ],
        name: 'Barrier Attack',
        text: 'All damage done by attacks to Sabrina\'s Porygon during your opponent\'s next turn is reduced by 10 (after applying Weakness and Resistance).',
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
    id: 'gym2-99',
    name: 'Sabrina\'s Psyduck',
    nationalPokedexNumber: 54,
    imageUrl: 'https://images.pokemontcg.io/gym2/99.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/gym2/99_hires.png',
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
    number: '99',
    artist: 'Ken Sugimori',
    rarity: 'Common',
    series: 'Gym',
    set: 'Gym Challenge',
    setCode: 'gym2',
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
        name: 'Random ESP',
        text: 'Flip a coin. If heads, the Defending Pokémon is now Confused. If tails, this attack does no damage and Sabrina\'s Psyduck is now Confused.',
        damage: '20',
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
    id: 'gym2-100',
    name: 'Blaine',
    imageUrl: 'https://images.pokemontcg.io/gym2/100.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/gym2/100_hires.png',
    supertype: 'Trainer',
    subtype: '',
    number: '100',
    artist: 'Ken Sugimori',
    rarity: 'Rare',
    series: 'Gym',
    set: 'Gym Challenge',
    setCode: 'gym2',
    text: [
      'During this turn, instead of attaching your free Energy card, you may instead attach 2 Fire Energy cards to 1 of your Pokémon with Blaine in its name. (Playing additional copies of this card this turn has no effect.)'
    ]
  },
  {
    id: 'gym2-101',
    name: 'Brock\'s Protection',
    imageUrl: 'https://images.pokemontcg.io/gym2/101.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/gym2/101_hires.png',
    supertype: 'Trainer',
    subtype: '',
    number: '101',
    artist: 'Ken Sugimori',
    rarity: 'Rare',
    series: 'Gym',
    set: 'Gym Challenge',
    setCode: 'gym2',
    text: [
      'Attach Brock\'s Protection to 1 of your Pokémon with Brock in its name. Energy cards attached to that Pokémon can\'t be removed by your opponent\'s attacks or Trainer cards. (This doesn\'t stop the rest of the attack or Trainer card from working normally.)'
    ]
  },
  {
    id: 'gym2-102',
    name: 'Chaos Gym',
    imageUrl: 'https://images.pokemontcg.io/gym2/102.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/gym2/102_hires.png',
    supertype: 'Trainer',
    subtype: '',
    number: '102',
    artist: 'Keiji Kinebuchi',
    rarity: 'Rare',
    series: 'Gym',
    set: 'Gym Challenge',
    setCode: 'gym2',
    text: [
      'Whenever a player plays a Trainer card other than a Stadium card, he or she flips a coin. If heads, that player plays that card normally. If tails, the player can\'t play that card. If the card isn\'t put into play, the player\'s opponent may use that card instead, if he or she does everything required in order to play that card (like discarding cards). Either way, the card goes to its owner\'s discard pile.'
    ]
  },
  {
    id: 'gym2-103',
    name: 'Erika\'s Kindness',
    imageUrl: 'https://images.pokemontcg.io/gym2/103.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/gym2/103_hires.png',
    supertype: 'Trainer',
    subtype: '',
    number: '103',
    artist: 'Ken Sugimori',
    rarity: 'Rare',
    series: 'Gym',
    set: 'Gym Challenge',
    setCode: 'gym2',
    text: [
      'Remove 2 damage counters from each Pokémon (yours and your opponent\'s) with any damage counters on it. If a Pokémon has just 1 damage counter, remove it.'
    ]
  },
  {
    id: 'gym2-104',
    name: 'Giovanni',
    imageUrl: 'https://images.pokemontcg.io/gym2/104.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/gym2/104_hires.png',
    supertype: 'Trainer',
    subtype: '',
    number: '104',
    artist: 'Ken Sugimori',
    rarity: 'Rare',
    series: 'Gym',
    set: 'Gym Challenge',
    setCode: 'gym2',
    text: [
      'Choose 1 of your Pokémon in play with Giovanni in its name. For the rest of your turn, you may evolve that Pokémon even if you just played or evolved it this turn or if this is your first turn. This effect also applies to the Pokémon it evolves into.'
    ]
  },
  {
    id: 'gym2-105',
    name: 'Giovanni\'s Last Resort',
    imageUrl: 'https://images.pokemontcg.io/gym2/105.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/gym2/105_hires.png',
    supertype: 'Trainer',
    subtype: '',
    number: '105',
    artist: 'Ken Sugimori',
    rarity: 'Rare',
    series: 'Gym',
    set: 'Gym Challenge',
    setCode: 'gym2',
    text: [
      'Remove all damage counters from 1 of your Pokémon with Giovanni in its name. Then discard your hand.'
    ]
  },
  {
    id: 'gym2-106',
    name: 'Koga',
    imageUrl: 'https://images.pokemontcg.io/gym2/106.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/gym2/106_hires.png',
    supertype: 'Trainer',
    subtype: '',
    number: '106',
    artist: 'Ken Sugimori',
    rarity: 'Rare',
    series: 'Gym',
    set: 'Gym Challenge',
    setCode: 'gym2',
    text: [
      'If an attack from a Pokémon with Koga in its name does damage to a Defending Pokémon this turn, that Pokémon is then Poisoned.'
    ]
  },
  {
    id: 'gym2-107',
    name: 'Lt. Surge\'s Secret Plan',
    imageUrl: 'https://images.pokemontcg.io/gym2/107.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/gym2/107_hires.png',
    supertype: 'Trainer',
    subtype: '',
    number: '107',
    artist: 'Ken Sugimori',
    rarity: 'Rare',
    series: 'Gym',
    set: 'Gym Challenge',
    setCode: 'gym2',
    text: [
      'Put 1 card from your hand face down onto your Bench. (You can\'t play this card if your Bench is full.) Treat that card as a Basic Pokémon as long as it\'s face down. Flip the card if either player ever needs to know what it is in order to use an attack, a Pokémon Power, or a Trainer card. Flip the card if it ever uses an attack or Pokémon Power, evolves, retreats, is damaged by an attack, or is otherwise affected by an attack. At any time during your turn, you may flip the card over. When you flip that card over, if it isn\'t a Basic Pokémon, discard it and all cards attached to it.'
    ]
  },
  {
    id: 'gym2-108',
    name: 'Misty\'s Wish',
    imageUrl: 'https://images.pokemontcg.io/gym2/108.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/gym2/108_hires.png',
    supertype: 'Trainer',
    subtype: '',
    number: '108',
    artist: 'Ken Sugimori',
    rarity: 'Rare',
    series: 'Gym',
    set: 'Gym Challenge',
    setCode: 'gym2',
    text: [
      'Look at 1 of your Prize cards. Then, ask your opponent if you may switch that card with 1 of the cards in your hand. If your opponent accepts and if you have any other cards in your hand, switch those cards. If your opponent declines, return the Prize card face down and draw a card.'
    ]
  },
  {
    id: 'gym2-109',
    name: 'Resistance Gym',
    imageUrl: 'https://images.pokemontcg.io/gym2/109.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/gym2/109_hires.png',
    supertype: 'Trainer',
    subtype: '',
    number: '109',
    artist: 'Keiji Kinebuchi',
    rarity: 'Rare',
    series: 'Gym',
    set: 'Gym Challenge',
    setCode: 'gym2',
    text: [
      'Each Pokémon\'s Resistance is reduced by 20. (If a Pokémon\'s Resistance is ~30, it becomes -10.)'
    ]
  },
  {
    id: 'gym2-110',
    name: 'Sabrina',
    imageUrl: 'https://images.pokemontcg.io/gym2/110.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/gym2/110_hires.png',
    supertype: 'Trainer',
    subtype: '',
    number: '110',
    artist: 'Ken Sugimori',
    rarity: 'Rare',
    series: 'Gym',
    set: 'Gym Challenge',
    setCode: 'gym2',
    text: [
      'Take all Energy cards attached to 1 of your Pokémon with Sabrina in its name and attach them to another 1 of your Pokémon with Sabrina in its name.'
    ]
  },
  {
    id: 'gym2-111',
    name: 'Blaine\'s Quiz #2',
    imageUrl: 'https://images.pokemontcg.io/gym2/111.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/gym2/111_hires.png',
    supertype: 'Trainer',
    subtype: '',
    number: '111',
    artist: 'Ken Sugimori',
    rarity: 'Uncommon',
    series: 'Gym',
    set: 'Gym Challenge',
    setCode: 'gym2',
    text: [
      'Put a card from your hand face down in front of you. Your opponent guesses whether it is an Energy card, a Trainer card, or a Pokémon (Basic or Evolution) card. Flip the card over. If your opponent guessed right, he or she draws 2 cards. If your opponent guessed wrong, you draw 2 cards. Either way, return the card to your hand.'
    ]
  },
  {
    id: 'gym2-112',
    name: 'Blaine\'s Quiz #3',
    imageUrl: 'https://images.pokemontcg.io/gym2/112.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/gym2/112_hires.png',
    supertype: 'Trainer',
    subtype: '',
    number: '112',
    artist: 'Ken Sugimori',
    rarity: 'Uncommon',
    series: 'Gym',
    set: 'Gym Challenge',
    setCode: 'gym2',
    text: [
      'Put a Basic Pokémon or Evolution card from your hand face down in front of you and tell your opponent the name of an attack of that card. Your opponent guesses the name of that card. Flip the card over. If your opponent guessed right, he or she draws 3 cards. If your opponent guessed wrong, you draw 3 cards. Either way, return the card to your hand.'
    ]
  },
  {
    id: 'gym2-113',
    name: 'Cinnabar City Gym',
    imageUrl: 'https://images.pokemontcg.io/gym2/113.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/gym2/113_hires.png',
    supertype: 'Trainer',
    subtype: 'Stadium',
    number: '113',
    artist: 'Keiji Kinebuchi',
    rarity: 'Uncommon',
    series: 'Gym',
    set: 'Gym Challenge',
    setCode: 'gym2',
    text: [
      'Ignore Weakness when a Pokémon does damage to a Pokémon with Blaine in its name.'
    ]
  },
  {
    id: 'gym2-114',
    name: 'Fuchsia City Gym',
    imageUrl: 'https://images.pokemontcg.io/gym2/114.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/gym2/114_hires.png',
    supertype: 'Trainer',
    subtype: 'Stadium',
    number: '114',
    artist: 'Keiji Kinebuchi',
    rarity: 'Uncommon',
    series: 'Gym',
    set: 'Gym Challenge',
    setCode: 'gym2',
    text: [
      'Once during each player\'s turn (before attacking), that player may flip a coin. If heads, that player may shuffle 1 of his or her Pokémon in play with Koga in its name and any cards attached to it into his or her deck.'
    ]
  },
  {
    id: 'gym2-115',
    name: 'Koga\'s Ninja Trick',
    imageUrl: 'https://images.pokemontcg.io/gym2/115.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/gym2/115_hires.png',
    supertype: 'Trainer',
    subtype: '',
    number: '115',
    artist: 'Sumiyoshi Kizuki',
    rarity: 'Uncommon',
    series: 'Gym',
    set: 'Gym Challenge',
    setCode: 'gym2',
    text: [
      'Attach Koga\'s Ninja Trick to your Active Pokémon with Koga in its name. If this Pokémon goes to your Bench, discard this card. When your opponent attacks, you may switch this Pokémon with 1 of your Benched Pokémon (before damage or other effects of attacks).'
    ]
  },
  {
    id: 'gym2-116',
    name: 'Master Ball',
    imageUrl: 'https://images.pokemontcg.io/gym2/116.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/gym2/116_hires.png',
    supertype: 'Trainer',
    subtype: '',
    number: '116',
    artist: 'Keiji Kinebuchi',
    rarity: 'Uncommon',
    series: 'Gym',
    set: 'Gym Challenge',
    setCode: 'gym2',
    text: [
      'Look at 7 cards from the top of your deck. You may choose a Basic Pokémon or Evolution card from those cards, show it your opponent, then put it into your hand. Shuffle the rest into your deck.'
    ]
  },
  {
    id: 'gym2-117',
    name: 'Max Revive',
    imageUrl: 'https://images.pokemontcg.io/gym2/117.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/gym2/117_hires.png',
    supertype: 'Trainer',
    subtype: '',
    number: '117',
    artist: 'Hikaru Koike',
    rarity: 'Uncommon',
    series: 'Gym',
    set: 'Gym Challenge',
    setCode: 'gym2',
    text: [
      'Discard 2 Energy cards from your hand in order to put 1 Basic Pokémon from your discard pile onto your Bench. (You can\'t play Max Revive if your Bench is full.)'
    ]
  },
  {
    id: 'gym2-118',
    name: 'Misty\'s Tears',
    imageUrl: 'https://images.pokemontcg.io/gym2/118.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/gym2/118_hires.png',
    supertype: 'Trainer',
    subtype: '',
    number: '118',
    artist: 'Ken Sugimori',
    rarity: 'Uncommon',
    series: 'Gym',
    set: 'Gym Challenge',
    setCode: 'gym2',
    text: [
      'Discard 1 of the other cards in your hand in order to search your deck for up to 2 Water Energy cards. Show those cards to your opponent, then put them into your hand. Shuffle your deck afterward.'
    ]
  },
  {
    id: 'gym2-119',
    name: 'Rocket\'s Minefield Gym',
    imageUrl: 'https://images.pokemontcg.io/gym2/119.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/gym2/119_hires.png',
    supertype: 'Trainer',
    subtype: 'Stadium',
    number: '119',
    artist: 'Keiji Kinebuchi',
    rarity: 'Uncommon',
    series: 'Gym',
    set: 'Gym Challenge',
    setCode: 'gym2',
    text: [
      'Whenever a player puts a Basic Pokémon onto his or her Bench from his or her hand, he or she flips a coin. If tails, put 2 damage counters on that Pokémon.'
    ]
  },
  {
    id: 'gym2-120',
    name: 'Rocket\'s Secret Experiment',
    imageUrl: 'https://images.pokemontcg.io/gym2/120.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/gym2/120_hires.png',
    supertype: 'Trainer',
    subtype: '',
    number: '120',
    artist: 'Ken Sugimori',
    rarity: 'Uncommon',
    series: 'Gym',
    set: 'Gym Challenge',
    setCode: 'gym2',
    text: [
      'Flip a coin. If heads, search your deck for any card and put it into your hand. Shuffle your deck afterward. If tails, you can\'t play Trainer cards until the end of your next turn.'
    ]
  },
  {
    id: 'gym2-121',
    name: 'Sabrina\'s Psychic Control',
    imageUrl: 'https://images.pokemontcg.io/gym2/121.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/gym2/121_hires.png',
    supertype: 'Trainer',
    subtype: '',
    number: '121',
    artist: 'Ken Sugimori',
    rarity: 'Uncommon',
    series: 'Gym',
    set: 'Gym Challenge',
    setCode: 'gym2',
    text: [
      'Flip a coin. If heads, choose a Trainer card in your opponent\'s discard pile that isn\'t put in play (like PlusPower or Mysterious Fossil). You may use that card as if it were in your hand, if you do everything required in order to play that card (like discarding cards). The card stays in your opponent\'s discard pile.'
    ]
  },
  {
    id: 'gym2-122',
    name: 'Saffron City Gym',
    imageUrl: 'https://images.pokemontcg.io/gym2/122.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/gym2/122_hires.png',
    supertype: 'Trainer',
    subtype: 'Stadium',
    number: '122',
    artist: 'Keiji Kinebuchi',
    rarity: 'Uncommon',
    series: 'Gym',
    set: 'Gym Challenge',
    setCode: 'gym2',
    text: [
      'As often as each player likes during his or her turn (before attacking), that player may return 1 basic Energy card attached to 1 of his or her Pokémon with Sabrina in its name to his or her hand.'
    ]
  },
  {
    id: 'gym2-123',
    name: 'Viridian City Gym',
    imageUrl: 'https://images.pokemontcg.io/gym2/123.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/gym2/123_hires.png',
    supertype: 'Trainer',
    subtype: 'Stadium',
    number: '123',
    artist: 'Keiji Kinebuchi',
    rarity: 'Uncommon',
    series: 'Gym',
    set: 'Gym Challenge',
    setCode: 'gym2',
    text: [
      'Whenever a Pokémon with Giovanni in its name evolves, its owner removes 2 damage counters from that Pokémon (or 1 if it only has 1).'
    ]
  },
  {
    id: 'gym2-124',
    name: 'Fervor',
    imageUrl: 'https://images.pokemontcg.io/gym2/124.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/gym2/124_hires.png',
    supertype: 'Trainer',
    subtype: '',
    number: '124',
    artist: 'Ken Sugimori',
    rarity: 'Common',
    series: 'Gym',
    set: 'Gym Challenge',
    setCode: 'gym2',
    text: [
      'Show the top 3 cards of your deck to all players. Put any Fire Energy cards there into your hand and discard the rest.'
    ]
  },
  {
    id: 'gym2-125',
    name: 'Transparent Walls',
    imageUrl: 'https://images.pokemontcg.io/gym2/125.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/gym2/125_hires.png',
    supertype: 'Trainer',
    subtype: '',
    number: '125',
    artist: 'Keiji Kinebuchi',
    rarity: 'Common',
    series: 'Gym',
    set: 'Gym Challenge',
    setCode: 'gym2',
    text: [
      'Until the end of your opponent\'s next turn, prevent all damage from attacks done to your Benched Pokémon. (Any other effects of attacks still happen.)'
    ]
  },
  {
    id: 'gym2-126',
    name: 'Warp Point',
    imageUrl: 'https://images.pokemontcg.io/gym2/126.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/gym2/126_hires.png',
    supertype: 'Trainer',
    subtype: '',
    number: '126',
    artist: 'Keiji Kinebuchi',
    rarity: 'Common',
    series: 'Gym',
    set: 'Gym Challenge',
    setCode: 'gym2',
    text: [
      'If your opponent has any Benched Pokémon, he or she chooses 1 of them and switches it with his or her Active Pokémon, then, if you have any Benched Pokémon, you switch 1 of them with your Active Pokémon.'
    ]
  },
  {
    id: 'gym2-127',
    name: 'Fighting Energy',
    imageUrl: 'https://images.pokemontcg.io/gym2/127.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/gym2/127_hires.png',
    supertype: 'Energy',
    subtype: 'Basic',
    number: '127',
    artist: 'Keiji Kinebuchi',
    rarity: 'Common',
    series: 'Gym',
    set: 'Gym Challenge',
    setCode: 'gym2'
  },
  {
    id: 'gym2-128',
    name: 'Fire Energy',
    imageUrl: 'https://images.pokemontcg.io/gym2/128.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/gym2/128_hires.png',
    supertype: 'Energy',
    subtype: 'Basic',
    number: '128',
    artist: 'Keiji Kinebuchi',
    rarity: 'Common',
    series: 'Gym',
    set: 'Gym Challenge',
    setCode: 'gym2'
  },
  {
    id: 'gym2-129',
    name: 'Grass Energy',
    imageUrl: 'https://images.pokemontcg.io/gym2/129.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/gym2/129_hires.png',
    supertype: 'Energy',
    subtype: 'Basic',
    number: '129',
    artist: 'Keiji Kinebuchi',
    rarity: 'Common',
    series: 'Gym',
    set: 'Gym Challenge',
    setCode: 'gym2'
  },
  {
    id: 'gym2-130',
    name: 'Lightning Energy',
    imageUrl: 'https://images.pokemontcg.io/gym2/130.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/gym2/130_hires.png',
    supertype: 'Energy',
    subtype: 'Basic',
    number: '130',
    artist: 'Keiji Kinebuchi',
    rarity: 'Common',
    series: 'Gym',
    set: 'Gym Challenge',
    setCode: 'gym2'
  },
  {
    id: 'gym2-131',
    name: 'Psychic Energy',
    imageUrl: 'https://images.pokemontcg.io/gym2/131.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/gym2/131_hires.png',
    supertype: 'Energy',
    subtype: 'Basic',
    number: '131',
    artist: 'Keiji Kinebuchi',
    rarity: 'Common',
    series: 'Gym',
    set: 'Gym Challenge',
    setCode: 'gym2'
  },
  {
    id: 'gym2-132',
    name: 'Water Energy',
    imageUrl: 'https://images.pokemontcg.io/gym2/132.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/gym2/132_hires.png',
    supertype: 'Energy',
    subtype: 'Basic',
    number: '132',
    artist: 'Keiji Kinebuchi',
    rarity: 'Common',
    series: 'Gym',
    set: 'Gym Challenge',
    setCode: 'gym2'
  }
]