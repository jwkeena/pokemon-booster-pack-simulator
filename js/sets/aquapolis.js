const aquapolisCards = [
  {
    id: 'ecard2-1',
    name: 'Ampharos',
    nationalPokedexNumber: 181,
    imageUrl: 'https://images.pokemontcg.io/ecard2/1.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/1_hires.png',
    types: [
      'Lightning'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 2',
    evolvesFrom: 'Flaaffy',
    hp: '100',
    retreatCost: [
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 2,
    number: '1',
    artist: 'Shin-ichi Yoshida',
    rarity: 'Rare',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    attacks: [
      {
        cost: [
          'Lightning'
        ],
        name: 'Thundershock',
        text: 'Flip a coin. If heads, the Defending Pokémon is now Paralyzed.',
        damage: '20',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Lightning',
          'Lightning',
          'Colorless'
        ],
        name: 'Reflect Energy',
        text: 'If you have any Benched Pokémon and if there are any basic Energy cards attached to Ampharos, take 1 of those Energy cards and attach it to 1 of those Pokémon.',
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
    id: 'ecard2-2',
    name: 'Arcanine',
    nationalPokedexNumber: 59,
    imageUrl: 'https://images.pokemontcg.io/ecard2/2.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/2_hires.png',
    types: [
      'Fire'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Growlithe',
    ability: {
      name: 'Extreme Speed',
      text: 'You pay Colorless less to retreat Arcanine for each Energy attached to it.',
      type: 'Poké-Body'
    },
    hp: '90',
    retreatCost: [
      'Colorless',
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 3,
    number: '2',
    artist: 'Kyoko Umemoto',
    rarity: 'Rare',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    attacks: [
      {
        cost: [
          'Colorless',
          'Colorless',
          'Colorless'
        ],
        name: 'Fire Blow',
        text: 'You may discard any number of Fire Energy cards attached to Arcanine. If you do, flip a number of coins equal to the number of Fire Energy cards you discarded in this way. This attack does 30 damage plus 30 more damage for each heads.',
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
    id: 'ecard2-3',
    name: 'Ariados',
    nationalPokedexNumber: 168,
    imageUrl: 'https://images.pokemontcg.io/ecard2/3.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/3_hires.png',
    types: [
      'Grass'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Spinarak',
    ability: {
      name: 'Gluey Slime',
      text: 'As long as Ariados is in play, each player must pay an additional Colorless to retreat his or her Active Pokémon. Gluey Slime can\'t make a player pay more than an additional Colorless to retreat a Pokémon, even if there is more than 1 Ariados in play.',
      type: 'Poké-Body'
    },
    hp: '70',
    number: '3',
    artist: 'Shin-ichi Yoshida',
    rarity: 'Rare',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    attacks: [
      {
        cost: [
          'Grass',
          'Colorless'
        ],
        name: 'Spider Force',
        text: 'Flip a coin. If heads, this attack does 20 damage plus 10 more damage. If tails, this attack does 20 damage and the Defending Pokémon is now Paralyzed.',
        damage: '20+',
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
    id: 'ecard2-4',
    name: 'Azumarill',
    nationalPokedexNumber: 184,
    imageUrl: 'https://images.pokemontcg.io/ecard2/4.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/4_hires.png',
    types: [
      'Water'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Marill',
    ability: {
      name: 'Bubble Turn',
      text: 'Once during your turn (before your attack), if Azumarill is on your bench, you may flip a coin. If heads, return Azumarill and all cards attached to it to your hand.',
      type: 'Poké-Power'
    },
    hp: '70',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '4',
    artist: 'Kagemaru Himeno',
    rarity: 'Rare',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    attacks: [
      {
        cost: [
          'Water',
          'Colorless',
          'Colorless'
        ],
        name: 'Aqua Sonic',
        text: 'Don\'t apply Resistance.',
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
    id: 'ecard2-5',
    name: 'Bellossom',
    nationalPokedexNumber: 182,
    imageUrl: 'https://images.pokemontcg.io/ecard2/5.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/5_hires.png',
    types: [
      'Grass'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 2',
    evolvesFrom: 'Gloom',
    ability: {
      name: 'Flower Supplement',
      text: 'Once during your turn (before your attack), you may flip a coin. If heads, attach 1 basic Energy card from your hand to 1 of your Benched Pokémon. This power can\'t be used if Bellossom is affected by a Special Condition.',
      type: 'Poké-Power'
    },
    hp: '90',
    retreatCost: [
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 2,
    number: '5',
    artist: 'Sumiyoshi Kizuki',
    rarity: 'Rare',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    attacks: [
      {
        cost: [
          'Grass',
          'Grass',
          'Colorless'
        ],
        name: 'Knife Leaf',
        text: 'Flip 3 coins. This attack does 30 damage times the number of heads.',
        damage: '30×',
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
    id: 'ecard2-6',
    name: 'Blissey',
    nationalPokedexNumber: 242,
    imageUrl: 'https://images.pokemontcg.io/ecard2/6.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/6_hires.png',
    types: [
      'Colorless'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Chansey',
    ability: {
      name: 'Happy Healing',
      text: 'Once during your turn (before your attack), choose 1 of your Benched Pokémon and flip a coin. If heads, count the number of Energy attached to Blissey and then remove that many damage counters from the chosen Benched Pokémon. This power can\'t be used if Blissey is affected by a Special Condition.',
      type: 'Poké-Power'
    },
    hp: '120',
    retreatCost: [
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 2,
    number: '6',
    artist: 'Naoyo Kimura',
    rarity: 'Rare',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    attacks: [
      {
        cost: [
          'Colorless',
          'Colorless',
          'Colorless'
        ],
        name: 'Smash Bomber',
        text: 'Flip a coin. If tails, this attack does nothing.',
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
    id: 'ecard2-7',
    name: 'Donphan',
    nationalPokedexNumber: 232,
    imageUrl: 'https://images.pokemontcg.io/ecard2/7.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/7_hires.png',
    types: [
      'Fighting'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Phanpy',
    hp: '80',
    retreatCost: [
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 2,
    number: '7',
    artist: 'Mitsuhiro Arita',
    rarity: 'Rare',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    attacks: [
      {
        cost: [
          'Fighting'
        ],
        name: 'Earthquake',
        text: 'Does 10 damage to each of your Benched Pokémon. (Don\'t apply Weakness and Resistance for Benched Pokémon.)',
        damage: '30',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Colorless',
          'Colorless',
          'Colorless'
        ],
        name: 'Double Stab',
        text: 'Flip 2 coins. This attack does 40 damage times the number of heads.',
        damage: '40×',
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
    id: 'ecard2-8',
    name: 'Electrode',
    nationalPokedexNumber: 101,
    imageUrl: 'https://images.pokemontcg.io/ecard2/8.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/8_hires.png',
    types: [
      'Lightning'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Voltorb',
    ability: {
      name: 'Super Dynamo',
      text: 'Once during your turn (before your attack), if Electrode is your Active Pokémon, you may flip a coin. If heads, choose a Lightning Energy card from your discard pile and attach it to 1 of your Pokémon. This power can\'t be used if Electrode is affected by a Special Condition.',
      type: 'Poké-Power'
    },
    hp: '70',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '8',
    artist: 'Shin-ichi Yoshida',
    rarity: 'Rare',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    attacks: [
      {
        cost: [
          'Lightning',
          'Colorless'
        ],
        name: 'Swift',
        text: 'This attack\'s damage isn\'t affected by Weakness, Resistance, Poké-Powers, Poké-Bodies, or any other effects on the Defending Pokémon.',
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
    id: 'ecard2-9',
    name: 'Elekid',
    nationalPokedexNumber: 239,
    imageUrl: 'https://images.pokemontcg.io/ecard2/9.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/9_hires.png',
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
    number: '9',
    artist: 'Hikaru Koike',
    rarity: 'Rare',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    text: [
      'If this Baby Pokémon is your Active Pokémon and your opponent tries to attack, your opponent flips a coin (before doing anything else required in order to use that attack). If tails, your opponent\'s turn ends without an attack.'
    ],
    attacks: [
      {
        cost: [
          'Lightning'
        ],
        name: 'Energy Kick',
        text: 'Flip a coin. If heads, choose an Energy card attached to the Defending Pokémon. Your opponent moves that card to 1 of his or her other Pokémon. (If your opponent has no Benched Pokémon, this attack does nothing.)',
        damage: '',
        convertedEnergyCost: 1
      }
    ]
  },
  {
    id: 'ecard2-10',
    name: 'Entei',
    nationalPokedexNumber: 244,
    imageUrl: 'https://images.pokemontcg.io/ecard2/10.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/10_hires.png',
    types: [
      'Fire'
    ],
    supertype: 'Pokémon',
    subtype: 'Basic',
    ability: {
      name: 'Pure Body',
      text: 'To attach a Fire Energy card from your hand to Entei, you must discard an Energy card attached to Entei. (Attach the Fire Energy, and then discard an Energy from Entei.)',
      type: 'Poké-Body'
    },
    hp: '70',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '10',
    artist: 'Atsuko Nishida',
    rarity: 'Rare',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    attacks: [
      {
        cost: [
          'Fire',
          'Colorless',
          'Colorless'
        ],
        name: 'Burning Fang',
        text: 'You may flip a coin. If heads, discard a Fire Energy card attached to Entei and the Defending Pokémon is now Burned.',
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
    id: 'ecard2-11',
    name: 'Espeon',
    nationalPokedexNumber: 196,
    imageUrl: 'https://images.pokemontcg.io/ecard2/11.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/11_hires.png',
    types: [
      'Psychic'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Eevee',
    ability: {
      name: 'Energy Return',
      text: 'As often as you like during your turn (before your attack), you may return an Energy card attached to 1 of your Pokémon to your hand. This power can\'t be used if Espeon is affected by a Special Condition.',
      type: 'Poké-Power'
    },
    hp: '80',
    number: '11',
    artist: 'Kyoko Umemoto',
    rarity: 'Rare',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    attacks: [
      {
        cost: [
          'Psychic',
          'Colorless',
          'Colorless'
        ],
        name: 'Damage Blast',
        text: 'Flip a number of coins equal to the number of damage counters on the Defending Pokémon. This attack does 30 damage plus 10 more damage for each heads.',
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
    id: 'ecard2-12',
    name: 'Exeggutor',
    nationalPokedexNumber: 103,
    imageUrl: 'https://images.pokemontcg.io/ecard2/12.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/12_hires.png',
    types: [
      'Grass'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Exeggcute',
    hp: '80',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '12',
    artist: 'Yukiko Baba',
    rarity: 'Rare',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Super Eggsplosion',
        text: 'Discard any number of Energy cards attached to any of your Pokémon. Flip a number of coins equal to the number of Energy cards discarded this way. This attack does 40 damage times the number of heads.',
        damage: '40×',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Grass'
        ],
        name: 'Called Shot',
        text: 'Choose 1 of your opponent\'s Pokémon. This attack does 10 damage times the amount of Grass Energy attached to Exeggutor. (Don\'t apply Weakness or Resistance for Benched Pokémon.)',
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
    id: 'ecard2-13',
    name: 'Exeggutor',
    nationalPokedexNumber: 103,
    imageUrl: 'https://images.pokemontcg.io/ecard2/13.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/13_hires.png',
    types: [
      'Psychic'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Exeggcute',
    hp: '80',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '13',
    artist: 'Sumiyoshi Kizuki',
    rarity: 'Rare',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Big Eggsplosion',
        text: 'Flip a number of coins equal to the number of Energy attached to Exeggutor. This attack does 20 damage times the number of heads.',
        damage: '20×',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Psychic',
          'Colorless',
          'Colorless'
        ],
        name: 'Lateral Eggsplosion',
        text: 'Flip a number of coins equal to the total number of Energy attached to your Benched Pokémon. This attack does 30 damage plus 10 more damage for each heads.',
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
    id: 'ecard2-14',
    name: 'Houndoom',
    nationalPokedexNumber: 229,
    imageUrl: 'https://images.pokemontcg.io/ecard2/14.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/14_hires.png',
    types: [
      'Fire'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Houndour',
    hp: '80',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '14',
    artist: 'Naoyo Kimura',
    rarity: 'Rare',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Smokescreen',
        text: 'If the defending Pokémon tries to attack during your opponent\'s next turn, your opponent flips a coin. If tails, that attack does nothing.',
        damage: '10',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Fire',
          'Fire',
          'Colorless'
        ],
        name: 'Burn Up',
        text: 'Flip a coin. If tails, discard all Fire Energy cards attached to Houndoom.',
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
    id: 'ecard2-15',
    name: 'Houndoom',
    nationalPokedexNumber: 229,
    imageUrl: 'https://images.pokemontcg.io/ecard2/15.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/15_hires.png',
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
    number: '15',
    artist: 'Hajime Kusajima',
    rarity: 'Rare',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    attacks: [
      {
        cost: [
          'Fire',
          'Colorless'
        ],
        name: 'Fireworks',
        text: 'Flip a coin. If tails, discard a Fire Energy card attached to Houndoom.',
        damage: '30',
        convertedEnergyCost: 2
      },
      {
        cost: [
          'Darkness',
          'Colorless',
          'Colorless'
        ],
        name: 'Dark Impact',
        text: 'The Defending Pokémon can\'t use any Poké-Powers until the end of your opponent\'s next turn.',
        damage: '40',
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
    id: 'ecard2-16',
    name: 'Hypno',
    nationalPokedexNumber: 97,
    imageUrl: 'https://images.pokemontcg.io/ecard2/16.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/16_hires.png',
    types: [
      'Psychic'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Drowzee',
    ability: {
      name: 'Sleep Pendulum',
      text: 'Once during your turn (before your attack), if Hypno is your Active Pokémon, you may use this power. The Defending Pokémon is now Asleep. This power can\'t be used if Hypno is affected by a Special Condition.',
      type: 'Poké-Power'
    },
    hp: '80',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '16',
    artist: 'Mitsuhiro Arita',
    rarity: 'Rare',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    attacks: [
      {
        cost: [
          'Psychic',
          'Colorless',
          'Colorless'
        ],
        name: 'Spiral Aura',
        text: 'Unless this attack Knocks Out the Defending Pokémon, if your opponent has any Benched Pokémon you may choose 1 of them and switch it with the Defending Pokémon. (Do the damage before switching the Pokémon.)',
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
    id: 'ecard2-17',
    name: 'Jumpluff',
    nationalPokedexNumber: 189,
    imageUrl: 'https://images.pokemontcg.io/ecard2/17.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/17_hires.png',
    types: [
      'Grass'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 2',
    evolvesFrom: 'Skiploom',
    ability: {
      name: 'Fluff',
      text: 'During your opponent\'s turn, if Jumpluff would be damaged or affected by an opponent\'s attack and it already has at least 1 damage counter on it, flip a coin. If heads, prevent all effects of that attack (including damage).',
      type: 'Poké-Body'
    },
    hp: '70',
    number: '17',
    artist: 'Yuka Morii',
    rarity: 'Rare',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    attacks: [
      {
        cost: [
          'Grass'
        ],
        name: 'Cotton Punch',
        text: 'Flip 2 coins. This attack does 30 damage times the number of heads.',
        damage: '30×',
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
    id: 'ecard2-18',
    name: 'Jynx',
    nationalPokedexNumber: 124,
    imageUrl: 'https://images.pokemontcg.io/ecard2/18.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/18_hires.png',
    types: [
      'Psychic'
    ],
    supertype: 'Pokémon',
    subtype: 'Basic',
    hp: '60',
    retreatCost: [
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 2,
    number: '18',
    artist: 'Hisao Nakamura',
    rarity: 'Rare',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    attacks: [
      {
        cost: [
          'Psychic',
          'Colorless'
        ],
        name: 'Meditate',
        text: 'This attack does 10 damage plus 10 more damage for each damage counter on the Defending Pokémon.',
        damage: '10+',
        convertedEnergyCost: 2
      },
      {
        cost: [
          'Psychic',
          'Colorless',
          'Colorless'
        ],
        name: 'Confuse Ray',
        text: 'Flip a coin. If heads, the Defending Pokémon is now Confused.',
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
    id: 'ecard2-19',
    name: 'Kingdra',
    nationalPokedexNumber: 230,
    imageUrl: 'https://images.pokemontcg.io/ecard2/19.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/19_hires.png',
    types: [
      'Water'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 2',
    evolvesFrom: 'Seadra',
    ability: {
      name: 'Water Cyclone',
      text: 'As often as you like during your turn (before your attack), you may move a Water Energy card from your Active Pokémon to 1 of your Benched Pokémon. This power can\'t be used if Kingdra is affected by a Special Condition.',
      type: 'Poké-Power'
    },
    hp: '120',
    retreatCost: [
      'Colorless',
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 3,
    number: '19',
    artist: 'Atsuko Nishida',
    rarity: 'Rare',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    attacks: [
      {
        cost: [
          'Water',
          'Water',
          'Colorless',
          'Colorless'
        ],
        name: 'Rapids',
        text: 'Flip a coin. If heads, discard 1 Energy card attached to the Defending Pokémon, if any.',
        damage: '50',
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
    id: 'ecard2-20',
    name: 'Lanturn',
    nationalPokedexNumber: 171,
    imageUrl: 'https://images.pokemontcg.io/ecard2/20.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/20_hires.png',
    types: [
      'Water'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Chinchou',
    hp: '80',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '20',
    artist: 'Mitsuhiro Arita',
    rarity: 'Rare',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    attacks: [
      {
        cost: [
          'Lightning'
        ],
        name: 'Lightning Ball',
        text: '',
        damage: '20',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Colorless',
          'Colorless',
          'Colorless'
        ],
        name: 'Conduction',
        text: 'Discard all Lightning Energy cards attached to Lanturn. Flip a number of coins equal to the number of Lightning Energy cards you discarded. This attack does 30 damage plus 40 more damage for each heads.',
        damage: '30+',
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
    id: 'ecard2-21',
    name: 'Lanturn',
    nationalPokedexNumber: 171,
    imageUrl: 'https://images.pokemontcg.io/ecard2/21.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/21_hires.png',
    types: [
      'Lightning'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Chinchou',
    ability: {
      name: 'Ion Coating',
      text: 'You may use this power once during each of your turn (before your attack). All Lightning Energy attached to your Active Pokémon becomes Water Energy for the rest of your turn. (This effect ends if your Active Pokémon retreats or is returned to your hand). This power can\'t be used if Lanturn is affected by a Special Condition.',
      type: 'Poké-Power'
    },
    hp: '80',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '21',
    artist: 'Yuka Morii',
    rarity: 'Rare',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    attacks: [
      {
        cost: [
          'Colorless',
          'Colorless'
        ],
        name: 'Electric Tackle',
        text: 'This attack does 20 damage plus 10 more damage for each Energy attached to Lanturn. Flip a coin. If tails, Lanturn does 10 damage to itself for each Energy attached to it.',
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
    id: 'ecard2-22',
    name: 'Magneton',
    nationalPokedexNumber: 82,
    imageUrl: 'https://images.pokemontcg.io/ecard2/22.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/22_hires.png',
    types: [
      'Metal'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Magnemite',
    ability: {
      name: 'Magnetic Flow',
      text: 'Once during your turn (before your attack), if Magneton is your Active Pokémon, you may flip a coin. If heads, choose 2 of your opponent\'s Pokémon that have Energy cards attached to them. Choose 1 of the Energy cards attached to each of those Pokémon and switch them between the Pokémon. This power can\'t be used if Magneton is affected by a Special Condition.',
      type: 'Poké-Power'
    },
    hp: '70',
    retreatCost: [
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 2,
    number: '22',
    artist: 'Hikaru Koike',
    rarity: 'Rare',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    attacks: [
      {
        cost: [
          'Colorless',
          'Colorless',
          'Colorless'
        ],
        name: 'Steel Wave',
        text: 'This attack does 10 damage to each of your opponent\'s Benched Pokémon that are the same type (color) as the Defending Pokémon. (Don\'t apply Weakness and Resistance for Benched Pokémon.)',
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
    id: 'ecard2-23',
    name: 'Muk',
    nationalPokedexNumber: 89,
    imageUrl: 'https://images.pokemontcg.io/ecard2/23.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/23_hires.png',
    types: [
      'Grass'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Grimer',
    ability: {
      name: 'Heavyweight',
      text: 'As long as there is a Grass Energy attached to Muk, you must pay an additional ColorlessColorless to retreat it.',
      type: 'Poké-Body'
    },
    hp: '70',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '23',
    artist: 'Hajime Kusajima',
    rarity: 'Rare',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    attacks: [
      {
        cost: [
          'Colorless',
          'Colorless'
        ],
        name: 'Burning Sludge',
        text: 'Flip a number of coins equal to the amount of Grass Energy attached to Muk. If any of them are heads, the Defending Pokémon is now Poisoned and Burned.',
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
    id: 'ecard2-24',
    name: 'Nidoking',
    nationalPokedexNumber: 34,
    imageUrl: 'https://images.pokemontcg.io/ecard2/24.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/24_hires.png',
    types: [
      'Fighting'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 2',
    evolvesFrom: 'Nidorino',
    ability: {
      name: 'Earth Rage',
      text: 'Once during your turn (before your attack), if Nidoking is your Active Pokémon, you may flip a coin. If heads, put a damage counter on each of your opponent\'s Benched Pokémon. This power can\'t be used if Nidoking is affected by a Special Condition.',
      type: 'Poké-Power'
    },
    hp: '110',
    retreatCost: [
      'Colorless',
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 3,
    number: '24',
    artist: 'Naoyo Kimura',
    rarity: 'Rare',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    attacks: [
      {
        cost: [
          'Fighting',
          'Fighting',
          'Colorless',
          'Colorless'
        ],
        name: 'Giant Horn',
        text: 'Flip a coin. If heads, this attack does 50 damage plus 30 more damage.',
        damage: '50+',
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
    id: 'ecard2-25',
    name: 'Ninetales',
    nationalPokedexNumber: 38,
    imageUrl: 'https://images.pokemontcg.io/ecard2/25.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/25_hires.png',
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
    number: '25',
    artist: 'Kagemaru Himeno',
    rarity: 'Rare',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    attacks: [
      {
        cost: [
          'Fire'
        ],
        name: 'Miracle Tail',
        text: 'Flip a coin. If heads, choose a Special Condition (Asleep, Burned, Confused, Paralyzed, or Poisoned). The Defending Pokémon is now affected by that Special Condition.',
        damage: '',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Fire',
          'Colorless',
          'Colorless'
        ],
        name: 'Roasting Heat',
        text: 'If the Defending Pokémon is Burned, this attack does 40 damage plus 20 more damage.',
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
    id: 'ecard2-26',
    name: 'Octillery',
    nationalPokedexNumber: 224,
    imageUrl: 'https://images.pokemontcg.io/ecard2/26.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/26_hires.png',
    types: [
      'Water'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Remoraid',
    ability: {
      name: 'Suction Cups',
      text: 'As long as Octillery is your Active Pokémon, whenever the Defending Pokémon retreats, discard all Energy cards attached to the Defending Pokémon when it goes to the Bench.',
      type: 'Poké-Body'
    },
    hp: '80',
    retreatCost: [
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 2,
    number: '26',
    artist: 'Kouki Saitou',
    rarity: 'Rare',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    attacks: [
      {
        cost: [
          'Water',
          'Colorless',
          'Colorless'
        ],
        name: 'Smokescreen',
        text: 'If the Defending Pokémon tries to attack during your opponent\'s next turn, your opponent flips a coin. If tails, that attack does nothing.',
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
    id: 'ecard2-27',
    name: 'Parasect',
    nationalPokedexNumber: 47,
    imageUrl: 'https://images.pokemontcg.io/ecard2/27.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/27_hires.png',
    types: [
      'Grass'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Paras',
    hp: '70',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '27',
    artist: 'Masako Yamashita',
    rarity: 'Rare',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    attacks: [
      {
        cost: [
          'Grass'
        ],
        name: 'Sleep Inducer',
        text: 'If your opponent has any Benched Pokémon, choose 1 of them and switch it with the Defending Pokémon. The new Defending Pokémon is now Asleep.',
        damage: '',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Colorless',
          'Colorless'
        ],
        name: 'Rupture Pollen',
        text: 'Flip a coin. If heads, the Defending Pokémon is now Asleep. If tails, remove 2 damage counters from Parasect.',
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
    id: 'ecard2-28',
    name: 'Porygon2',
    nationalPokedexNumber: 233,
    imageUrl: 'https://images.pokemontcg.io/ecard2/28.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/28_hires.png',
    types: [
      'Colorless'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Porygon',
    ability: {
      name: 'Backup',
      text: 'Once during your turn (before your attack), if you have 2 or fewer cards in your hand, you may draw cards until you have exactly 3 cards in your hand. This power can\'t be used if Porygon2 is affected by a Special Condition.',
      type: 'Poké-Power'
    },
    hp: '70',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '28',
    artist: 'Hikaru Koike',
    rarity: 'Rare',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    attacks: [
      {
        cost: [
          'Colorless',
          'Colorless'
        ],
        name: 'Hypnotic Ray',
        text: 'The Defending Pokémon is now Asleep.',
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
    id: 'ecard2-29',
    name: 'Primeape',
    nationalPokedexNumber: 57,
    imageUrl: 'https://images.pokemontcg.io/ecard2/29.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/29_hires.png',
    types: [
      'Fighting'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Mankey',
    hp: '80',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '29',
    artist: 'Tomokazu Komiya',
    rarity: 'Rare',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    attacks: [
      {
        cost: [
          'Fighting',
          'Colorless'
        ],
        name: 'Karate Chop',
        text: 'Damage from this attack is reduced by 10 for each damage counter on Primeape.',
        damage: '',
        convertedEnergyCost: 2
      },
      {
        cost: [
          'Fighting',
          'Colorless',
          'Colorless'
        ],
        name: 'Sudden Charge',
        text: 'Primeape does 10 damage to itself. Then, switches the Defending Pokémon with 1 of his or her Benched Pokémon, if any.',
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
    id: 'ecard2-30',
    name: 'Quagsire',
    nationalPokedexNumber: 195,
    imageUrl: 'https://images.pokemontcg.io/ecard2/30.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/30_hires.png',
    types: [
      'Water'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Wooper',
    hp: '80',
    retreatCost: [
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 2,
    number: '30',
    artist: 'Mitsuhiro Arita',
    rarity: 'Rare',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    attacks: [
      {
        cost: [
          'Water'
        ],
        name: 'Water Gun',
        text: 'This attack does 20 damage plus 10 more damage for each Energy attached to Quagsire but not used to pay for this attack\'s Energy cost. You can\'t add more than 20 damage in this way.',
        damage: '20+',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Colorless',
          'Colorless',
          'Colorless',
          'Colorless'
        ],
        name: 'Slam',
        text: 'Flip 2 coins. This attack does 50 damage times the number of heads.',
        damage: '50×',
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
    id: 'ecard2-31',
    name: 'Rapidash',
    nationalPokedexNumber: 78,
    imageUrl: 'https://images.pokemontcg.io/ecard2/31.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/31_hires.png',
    types: [
      'Fire'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Ponyta',
    hp: '70',
    number: '31',
    artist: 'Kouki Saitou',
    rarity: 'Rare',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    attacks: [
      {
        cost: [
          'Colorless',
          'Colorless'
        ],
        name: 'Agility',
        text: 'Flip a coin. If heads, during your opponent\'s next turn, prevent all effects of attacks, including damage, done to Rapidash.',
        damage: '10',
        convertedEnergyCost: 2
      },
      {
        cost: [
          'Fire',
          'Colorless',
          'Colorless'
        ],
        name: 'Gallop',
        text: 'Flip a coin. If heads, discard a Fire Energy card attached to Rapidash, and this attack does 30 damage plus 20 more damage.',
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
    id: 'ecard2-32',
    name: 'Scizor',
    nationalPokedexNumber: 212,
    imageUrl: 'https://images.pokemontcg.io/ecard2/32.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/32_hires.png',
    types: [
      'Metal'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Scyther',
    ability: {
      name: 'Poison Resistance',
      text: 'Scizor can\'t be Poisoned.',
      type: 'Poké-Body'
    },
    hp: '80',
    retreatCost: [
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 2,
    number: '32',
    artist: 'Hisao Nakamura',
    rarity: 'Rare',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    attacks: [
      {
        cost: [
          'Metal',
          'Colorless'
        ],
        name: 'Snatch',
        text: 'Before doing damage, you may choose 1 of your opponent\'s Benched Pokémon with no damage counters on it and snatch the Defending Pokémon with it.',
        damage: '20',
        convertedEnergyCost: 2
      },
      {
        cost: [
          'Colorless',
          'Colorless',
          'Colorless'
        ],
        name: 'Heavy Metal',
        text: 'Flip a number of coins equal to the number of Metal Energy attached to Scizor. This attack does 30 damage plus 20 damage times the number of heads.',
        damage: '30+',
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
    id: 'ecard2-33',
    name: 'Slowbro',
    nationalPokedexNumber: 80,
    imageUrl: 'https://images.pokemontcg.io/ecard2/33.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/33_hires.png',
    types: [
      'Water'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Slowpoke',
    ability: {
      name: 'Dense Body',
      text: 'Any damage done to Slowbro by attacks from Basic Pokémon (excluding Baby Pokémon) is reduced by 20.',
      type: 'Poké-Body'
    },
    hp: '80',
    retreatCost: [
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 2,
    number: '33',
    artist: 'Aya Kusube',
    rarity: 'Rare',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    attacks: [
      {
        cost: [
          'Water',
          'Colorless'
        ],
        name: 'Energy Cannon',
        text: 'This attack does 30 damage plus 10 more damage for each Energy attached to Slowbro but not used to pay for this attack\'s Energy cost. You can\'t add more than 20 damage this way. y.',
        damage: '30+',
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
    id: 'ecard2-34',
    name: 'Slowking',
    nationalPokedexNumber: 199,
    imageUrl: 'https://images.pokemontcg.io/ecard2/34.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/34_hires.png',
    types: [
      'Psychic'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Slowpoke',
    hp: '80',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '34',
    artist: 'Aya Kusube',
    rarity: 'Rare',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Bursting Hand',
        text: 'Look at your opponent\'s hand. This attack does 10 damage times the number of Energy cards there.',
        damage: '10×',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Psychic',
          'Colorless',
          'Colorless'
        ],
        name: 'Shuffle Attack',
        text: 'Look at a number of cards on top of your opponent\'s deck equal to the number of Energy cards attached to the Defending Pokémon. Put those cards in any order, and then put them back on top of your opponent\'s deck.',
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
    id: 'ecard2-35',
    name: 'Steelix',
    nationalPokedexNumber: 208,
    imageUrl: 'https://images.pokemontcg.io/ecard2/35.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/35_hires.png',
    types: [
      'Metal'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Onix',
    hp: '100',
    retreatCost: [
      'Colorless',
      'Colorless',
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 4,
    number: '35',
    artist: 'Hajime Kusajima',
    rarity: 'Rare',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    attacks: [
      {
        cost: [
          'Colorless',
          'Colorless'
        ],
        name: 'Earth Rift',
        text: 'This attack does 10 damage to each of your opponent\'s Benched Pokémon. (Don\'t apply Weakness or Resistance for Benched Pokémon.) Then, flip a coin. If tails, this attack can\'t be used during your next turn.',
        damage: '10',
        convertedEnergyCost: 2
      },
      {
        cost: [
          'Metal',
          'Metal',
          'Colorless',
          'Colorless'
        ],
        name: 'Iron Smash',
        text: 'Flip 2 coins. If both are heads, this attack does 50 damage plus 20 more damage. If both are tails, this attack does nothing. If 1 is heads and 1 is tails, this attack just does 50 damage.',
        damage: '50+',
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
    id: 'ecard2-36',
    name: 'Sudowoodo',
    nationalPokedexNumber: 185,
    imageUrl: 'https://images.pokemontcg.io/ecard2/36.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/36_hires.png',
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
    number: '36',
    artist: 'Kagemaru Himeno',
    rarity: 'Rare',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Copy',
        text: 'Choose 1 of the Defending Pokémon\'s attacks. Copy copies that attack. This attack does nothing if Sudowoodo doesn\'t have the Energy necessary to use that attack. (You must still do anything else required in order to use that attack.)',
        damage: '',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Fighting'
        ],
        name: 'Energy Draw',
        text: 'Search your deck for a basic Energy card and attach it to Sudowoodo. Shuffle your deck afterward.',
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
    id: 'ecard2-37',
    name: 'Suicune',
    nationalPokedexNumber: 245,
    imageUrl: 'https://images.pokemontcg.io/ecard2/37.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/37_hires.png',
    types: [
      'Water'
    ],
    supertype: 'Pokémon',
    subtype: 'Basic',
    ability: {
      name: 'Pure Body',
      text: 'To attach a Water Energy card from your hand to Suicune, you must discard an Energy card attached to Suicune. (Attach the Water Energy, and then discard an Energy card from Suicune.)',
      type: 'Poké-Body'
    },
    hp: '70',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '37',
    artist: 'Atsuko Nishida',
    rarity: 'Rare',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    attacks: [
      {
        cost: [
          'Water',
          'Colorless',
          'Colorless'
        ],
        name: 'Hypno Wave',
        text: 'Flip a coin. If heads, this attack does 30 damage plus 20 more damage. If tails, this attack does 30 damage and the Defending Pokémon is now Asleep.',
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
    id: 'ecard2-38',
    name: 'Tentacruel',
    nationalPokedexNumber: 73,
    imageUrl: 'https://images.pokemontcg.io/ecard2/38.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/38_hires.png',
    types: [
      'Water'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Tentacool',
    ability: {
      name: 'Strange Tentacles',
      text: 'Once during your turn (before your attack), as long as the number of Energy cards attached to the Defending Pokémon is less than the number of Energy cards attached to your Active Pokémon, you may choose an Energy card, if any, in your opponent\'s discard pile and attach it to the Defending Pokémon. This power can\'t be used if Tentacruel is affected by a Special Condition.',
      type: 'Poké-Power'
    },
    hp: '70',
    number: '38',
    artist: 'Hajime Kusajima',
    rarity: 'Rare',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    attacks: [
      {
        cost: [
          'Water',
          'Colorless'
        ],
        name: 'Poison Sting',
        text: 'Flip a coin. If heads, the Defending Pokémon is now Poisoned.',
        damage: '',
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
    id: 'ecard2-39',
    name: 'Togetic',
    nationalPokedexNumber: 176,
    imageUrl: 'https://images.pokemontcg.io/ecard2/39.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/39_hires.png',
    types: [
      'Colorless'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Togepi',
    ability: {
      name: 'Miracle Shift',
      text: 'Once during your turn (before your attack), discard a basic Energy card attached to 1 of your Pokémon. Then, choose a basic Energy card from your discard pile and attach it to that Pokémon. This power can\'t be used if Togetic is affected by a Special Condition.',
      type: 'Poké-Power'
    },
    hp: '60',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '39',
    artist: 'Kagemaru Himeno',
    rarity: 'Rare',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Mini-Metronome',
        text: 'Flip a coin. If heads, choose 1 of the Defending Pokémon\'s attacks. Mini-Metronome copies that attack except for its Energy cost. (You must still do anything else required in order to use that attack.) (No matter what type the Defending Pokémon is, Togetic is still ). Togetic performs the attack.',
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
    id: 'ecard2-40',
    name: 'Tyranitar',
    nationalPokedexNumber: 248,
    imageUrl: 'https://images.pokemontcg.io/ecard2/40.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/40_hires.png',
    types: [
      'Darkness'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 2',
    evolvesFrom: 'Pupitar',
    hp: '120',
    retreatCost: [
      'Colorless',
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 3,
    number: '40',
    artist: 'Naoyo Kimura',
    rarity: 'Rare',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    attacks: [
      {
        cost: [
          'Darkness'
        ],
        name: 'Destructive Roar',
        text: 'Flip a coin. If heads, discard 1 Energy card attached to 1 of your opponent\'s Pokémon.',
        damage: '',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Darkness',
          'Colorless',
          'Colorless'
        ],
        name: 'Tail Slap',
        text: '',
        damage: '30',
        convertedEnergyCost: 3
      },
      {
        cost: [
          'Darkness',
          'Darkness',
          'Colorless',
          'Colorless',
          'Colorless'
        ],
        name: 'Gigacrush',
        text: 'Each player discards the top 3 cards from his or her deck.',
        damage: '60',
        convertedEnergyCost: 5
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
    id: 'ecard2-41',
    name: 'Umbreon',
    nationalPokedexNumber: 197,
    imageUrl: 'https://images.pokemontcg.io/ecard2/41.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/41_hires.png',
    types: [
      'Darkness'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Eevee',
    ability: {
      name: 'Dark Moon',
      text: 'As long as Umbreon is your Active Pokémon and has a Dark Energy attached to it, once during your turn (before your attack), you may look at your opponent\'s hand. Choose from it a number of cards up to the number of Dark Energy attached to Umbreon and shuffle them into your opponent\'s deck. Your opponent then draws the same number of cards from his or her deck. This power can\'t be used if Umbreon is affected by a Special Condition.',
      type: 'Poké-Power'
    },
    hp: '80',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '41',
    artist: 'Mitsuhiro Arita',
    rarity: 'Rare',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    attacks: [
      {
        cost: [
          'Colorless',
          'Colorless',
          'Colorless'
        ],
        name: 'Shadow Bind',
        text: 'The Defending Pokémon can\'t retreat during your opponent\'s next turn.',
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
    id: 'ecard2-42',
    name: 'Victreebel',
    nationalPokedexNumber: 71,
    imageUrl: 'https://images.pokemontcg.io/ecard2/42.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/42_hires.png',
    types: [
      'Grass'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 2',
    evolvesFrom: 'Weepinbell',
    ability: {
      name: 'Fragrance Trap',
      text: 'Once during your turn (before your attack), you may flip a coin. If heads, choose 1 of your opponent\'s Benched Pokémon and switch the Defending Pokémon with it. This power can\'t be used if Victreebel is affected by a Special Condition.',
      type: 'Poké-Power'
    },
    hp: '90',
    retreatCost: [
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 2,
    number: '42',
    artist: 'Miki Tanaka',
    rarity: 'Rare',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    attacks: [
      {
        cost: [
          'Grass',
          'Grass',
          'Colorless'
        ],
        name: 'Corrosive Acid',
        text: 'Flip a coin. If heads, the Defending Pokémon is now Burned.',
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
    id: 'ecard2-43',
    name: 'Vileplume',
    nationalPokedexNumber: 45,
    imageUrl: 'https://images.pokemontcg.io/ecard2/43.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/43_hires.png',
    types: [
      'Grass'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 2',
    evolvesFrom: 'Gloom',
    hp: '100',
    retreatCost: [
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 2,
    number: '43',
    artist: 'Kyoko Umemoto',
    rarity: 'Rare',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    attacks: [
      {
        cost: [
          'Grass'
        ],
        name: 'Poison Scent',
        text: 'Flip a coin. If heads, the Defending Pokémon is now Poisoned and Confused. If tails, the Defending Pokémon is now Poisoned and Asleep.',
        damage: '10',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Colorless',
          'Colorless',
          'Colorless'
        ],
        name: 'Addictive Pollen',
        text: 'Flip a coin. If heads, your opponent can\'t play Supporter cards during his or her next turn.',
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
    id: 'ecard2-44',
    name: 'Zapdos',
    nationalPokedexNumber: 145,
    imageUrl: 'https://images.pokemontcg.io/ecard2/44.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/44_hires.png',
    types: [
      'Lightning'
    ],
    supertype: 'Pokémon',
    subtype: 'Basic',
    ability: {
      name: 'Anti-Lightning',
      text: 'You can\'t attach Lightning Energy cards from your hand to Zapdos.',
      type: 'Poké-Body'
    },
    hp: '80',
    retreatCost: [
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 2,
    number: '44',
    artist: 'Hajime Kusajima',
    rarity: 'Rare',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Plasma',
        text: 'If there are any Lightning Energy cards in your discard pile, flip a coin. If heads attach 1 of those Energy cards to Zapdos.',
        damage: '10',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Lightning',
          'Lightning',
          'Colorless',
          'Colorless'
        ],
        name: 'Lightning Storm',
        text: 'Flip a coin. If tails, put 2 damage counters on Zapdos.',
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
        type: 'Lightning',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard2-45',
    name: 'Bellsprout',
    nationalPokedexNumber: 69,
    imageUrl: 'https://images.pokemontcg.io/ecard2/45.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/45_hires.png',
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
    number: '45',
    artist: 'Masako Yamashita',
    rarity: 'Uncommon',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    attacks: [
      {
        cost: [
          'Grass',
          'Colorless'
        ],
        name: 'Blot',
        text: 'Remove 1 damage counter from Bellsprout, if any.',
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
    id: 'ecard2-46',
    name: 'Dodrio',
    nationalPokedexNumber: 85,
    imageUrl: 'https://images.pokemontcg.io/ecard2/46.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/46_hires.png',
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
    number: '46',
    artist: 'Yukiko Baba',
    rarity: 'Uncommon',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Tri Attack',
        text: 'Flip 3 coins. This attack does 10 damage times the number of heads.',
        damage: '10×',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Colorless',
          'Colorless'
        ],
        name: 'Peck Attack',
        text: 'Flip 2 coins. If 1 of them is heads, this attack does 20 damage. If both are heads, this attack does 50 damage. If both are tails, the Defending Pokémon is now Confused.',
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
    id: 'ecard2-47',
    name: 'Flaaffy',
    nationalPokedexNumber: 180,
    imageUrl: 'https://images.pokemontcg.io/ecard2/47.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/47_hires.png',
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
    number: '47',
    artist: 'Shin-ichi Yoshida',
    rarity: 'Uncommon',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Thundershock',
        text: 'Flip a coin. If heads, the Defending Pokémon is now Paralyzed.',
        damage: '10',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Lightning',
          'Lightning',
          'Colorless'
        ],
        name: 'Spark',
        text: 'If your opponent has any Benched Pokémon, choose 1 of them and this attack does 10 damage to it. (Don\'t apply Weakness and Resistance for Benched Pokémon.)',
        damage: '30',
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
    id: 'ecard2-48',
    name: 'Furret',
    nationalPokedexNumber: 162,
    imageUrl: 'https://images.pokemontcg.io/ecard2/48.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/48_hires.png',
    types: [
      'Colorless'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Sentret',
    ability: {
      name: 'Scavenger Hunt',
      text: 'Once during your turn (before your attack), you may put 2 cards from your hand into your deck. Then search your deck for an Energy card, show it to your opponent, and put it in your hand. Shuffle your deck afterward. This power can\'t be used if Furret is affected by a Special Condition.',
      type: 'Poké-Power'
    },
    hp: '70',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '48',
    artist: 'Atsuko Nishida',
    rarity: 'Uncommon',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    attacks: [
      {
        cost: [
          'Colorless',
          'Colorless'
        ],
        name: 'Spinning Attack',
        text: '',
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
    id: 'ecard2-49',
    name: 'Gloom',
    nationalPokedexNumber: 44,
    imageUrl: 'https://images.pokemontcg.io/ecard2/49.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/49_hires.png',
    types: [
      'Grass'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Oddish',
    ability: {
      name: 'Enervating Pollen',
      text: 'As long as Gloom is in play, Resistance on each player\'s Pokémon only reduces damage by 10.',
      type: 'Poké-Body'
    },
    hp: '70',
    retreatCost: [
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 2,
    number: '49',
    artist: 'Kyoko Umemoto',
    rarity: 'Uncommon',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    attacks: [
      {
        cost: [
          'Colorless',
          'Colorless'
        ],
        name: 'Sleep Sap',
        text: 'Both the Defending Pokémon and Gloom are now Asleep (after doing damage).',
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
    id: 'ecard2-50',
    name: 'Golduck',
    nationalPokedexNumber: 55,
    imageUrl: 'https://images.pokemontcg.io/ecard2/50.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/50_hires.png',
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
    number: '50',
    artist: 'Sumiyoshi Kizuki',
    rarity: 'Uncommon',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
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
          'Psychic',
          'Colorless',
          'Colorless'
        ],
        name: 'Distortion Beam',
        text: 'Flip a coin. If heads, the Defending Pokémon is now Asleep. If tails, the Defending Pokémon is now Confused.',
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
    id: 'ecard2-51',
    name: 'Growlithe',
    nationalPokedexNumber: 58,
    imageUrl: 'https://images.pokemontcg.io/ecard2/51.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/51_hires.png',
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
    number: '51',
    artist: 'Kyoko Umemoto',
    rarity: 'Uncommon',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    attacks: [
      {
        cost: [
          'Fire',
          'Colorless'
        ],
        name: 'Ember',
        text: 'Discard a Fire Energy card attached to Growlithe.',
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
    id: 'ecard2-52',
    name: 'Magnemite',
    nationalPokedexNumber: 81,
    imageUrl: 'https://images.pokemontcg.io/ecard2/52.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/52_hires.png',
    types: [
      'Metal'
    ],
    supertype: 'Pokémon',
    subtype: 'Basic',
    hp: '40',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '52',
    artist: 'Shin-ichi Yoshida',
    rarity: 'Uncommon',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    attacks: [
      {
        cost: [
          'Metal'
        ],
        name: 'Attract',
        text: 'Choose 1 of your opponent\'s Benched Pokémon and switch the Defending Pokémon with it.',
        damage: '',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Colorless',
          'Colorless'
        ],
        name: 'Tackle',
        text: '',
        damage: '20',
        convertedEnergyCost: 2
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
    id: 'ecard2-53',
    name: 'Marill',
    nationalPokedexNumber: 183,
    imageUrl: 'https://images.pokemontcg.io/ecard2/53.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/53_hires.png',
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
    number: '53',
    artist: 'Yukiko Baba',
    rarity: 'Uncommon',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
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
        name: 'Sleepy Ball',
        text: 'The Defending Pokémon is now Asleep.',
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
    id: 'ecard2-54',
    name: 'Marowak',
    nationalPokedexNumber: 105,
    imageUrl: 'https://images.pokemontcg.io/ecard2/54.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/54_hires.png',
    types: [
      'Fighting'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Cubone',
    hp: '70',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '54',
    artist: 'Kagemaru Himeno',
    rarity: 'Uncommon',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    attacks: [
      {
        cost: [
          'Colorless',
          'Colorless'
        ],
        name: 'Triple Bone',
        text: 'Choose 1 of your opponent\'s Benched Pokémon. Flip 3 coins. This attack does 10 damage times the number of heads to that Pokémon. Don\'t apply Weakness and Resistance.',
        damage: '',
        convertedEnergyCost: 2
      },
      {
        cost: [
          'Fighting',
          'Colorless',
          'Colorless'
        ],
        name: 'Bone Rush',
        text: 'Flip a coin until you get tails. This attack does 50 damage times the number of heads.',
        damage: '50×',
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
    id: 'ecard2-55',
    name: 'Nidorino',
    nationalPokedexNumber: 33,
    imageUrl: 'https://images.pokemontcg.io/ecard2/55.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/55_hires.png',
    types: [
      'Grass'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Nidoran♂',
    hp: '70',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '55',
    artist: 'Kagemaru Himeno',
    rarity: 'Uncommon',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    attacks: [
      {
        cost: [
          'Grass'
        ],
        name: 'Poison Horn',
        text: 'Flip a coin. If heads, the Defending Pokémon is now Poisoned.',
        damage: '',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Colorless',
          'Colorless',
          'Colorless'
        ],
        name: 'Take Down',
        text: 'Nidorino does 10 damage to itself.',
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
    id: 'ecard2-56',
    name: 'Pupitar',
    nationalPokedexNumber: 247,
    imageUrl: 'https://images.pokemontcg.io/ecard2/56.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/56_hires.png',
    types: [
      'Fighting'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Larvitar',
    hp: '80',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '56',
    artist: 'Naoyo Kimura',
    rarity: 'Uncommon',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    attacks: [
      {
        cost: [
          'Colorless',
          'Colorless',
          'Colorless'
        ],
        name: 'Thrash',
        text: 'Flip a coin. If heads, this attack does 30 damage plus 10 more damage. If tails, Pupitar does 10 damage to itself.',
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
    id: 'ecard2-57',
    name: 'Scyther',
    nationalPokedexNumber: 123,
    imageUrl: 'https://images.pokemontcg.io/ecard2/57.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/57_hires.png',
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
    artist: 'Hisao Nakamura',
    rarity: 'Uncommon',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    attacks: [
      {
        cost: [
          'Grass'
        ],
        name: 'Quick Turn',
        text: 'Flip 2 coins. This attack does 10 damage times the number of heads.',
        damage: '10×',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Colorless',
          'Colorless',
          'Colorless'
        ],
        name: 'Cross-Cut',
        text: 'If the Defending Pokémon is an Evolved Pokémon, this attack does 20 damage plus 20 more damage.',
        damage: '20+',
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
    id: 'ecard2-58',
    name: 'Seadra',
    nationalPokedexNumber: 117,
    imageUrl: 'https://images.pokemontcg.io/ecard2/58.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/58_hires.png',
    types: [
      'Water'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Horsea',
    hp: '70',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '58',
    artist: 'Mitsuhiro Arita',
    rarity: 'Uncommon',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    attacks: [
      {
        cost: [
          'Water'
        ],
        name: 'Wave Splash',
        text: '',
        damage: '20',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Colorless',
          'Colorless',
          'Colorless'
        ],
        name: 'Water Bullet',
        text: 'Flip a number of coins equal to the number of Water Energy attached to Seadra. This attack does 30 damage plus 10 more damage for each heads.',
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
    id: 'ecard2-59',
    name: 'Seaking',
    nationalPokedexNumber: 119,
    imageUrl: 'https://images.pokemontcg.io/ecard2/59.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/59_hires.png',
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
    number: '59',
    artist: 'Sumiyoshi Kizuki',
    rarity: 'Uncommon',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    attacks: [
      {
        cost: [
          'Colorless',
          'Colorless'
        ],
        name: 'Flail',
        text: 'Does 10 damage times the number of damage counters on Seaking.',
        damage: '10×',
        convertedEnergyCost: 2
      },
      {
        cost: [
          'Water',
          'Colorless',
          'Colorless'
        ],
        name: 'Undulate',
        text: 'Flip a coin. If heads, during your opponent\'s next turn, prevent all effects of attacks, including damage, done to Seaking.',
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
    id: 'ecard2-60',
    name: 'Skiploom',
    nationalPokedexNumber: 188,
    imageUrl: 'https://images.pokemontcg.io/ecard2/60.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/60_hires.png',
    types: [
      'Grass'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Hoppip',
    ability: {
      name: 'Lightweight',
      text: 'You pay Colorless less to retreat Skiploom for each Grass Energy attached to it.',
      type: 'Poké-Body'
    },
    hp: '60',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '60',
    artist: 'Yuka Morii',
    rarity: 'Uncommon',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Break Powder',
        text: 'Flip a coin. If heads, this attack does 10 damage plus 20 more damage. If tails, this attack does 10 damage and the Defending Pokémon is now Asleep.',
        damage: '10+',
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
    id: 'ecard2-61',
    name: 'Smoochum',
    nationalPokedexNumber: 238,
    imageUrl: 'https://images.pokemontcg.io/ecard2/61.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/61_hires.png',
    types: [
      'Psychic'
    ],
    supertype: 'Pokémon',
    subtype: 'Basic',
    hp: '30',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '61',
    artist: 'Kagemaru Himeno',
    rarity: 'Uncommon',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    text: [
      'If this Baby Pokémon is your Active Pokémon and your opponent tries to attack, your opponent flips a coin (before doing anything else required in order to use that attack). If tails, your opponent\'s turn ends without an attack.'
    ],
    attacks: [
      {
        cost: [
          'Psychic'
        ],
        name: 'Energy Kiss',
        text: 'Flip a number of coins equal to the number of Energy cards on the Defending Pokémon. This attack does 10 damage times the number of heads.',
        damage: '10×',
        convertedEnergyCost: 1
      }
    ]
  },
  {
    id: 'ecard2-62',
    name: 'Spinarak',
    nationalPokedexNumber: 167,
    imageUrl: 'https://images.pokemontcg.io/ecard2/62.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/62_hires.png',
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
    number: '62',
    artist: 'Masako Yamashita',
    rarity: 'Uncommon',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
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
          'Grass',
          'Colorless'
        ],
        name: 'Gooey Thread',
        text: 'The Defending Pokémon can\'t retreat during your opponent\'s next turn.',
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
    id: 'ecard2-63',
    name: 'Tyrogue',
    nationalPokedexNumber: 236,
    imageUrl: 'https://images.pokemontcg.io/ecard2/63.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/63_hires.png',
    types: [
      'Fighting'
    ],
    supertype: 'Pokémon',
    subtype: 'Basic',
    hp: '30',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '63',
    artist: 'Tomokazu Komiya',
    rarity: 'Uncommon',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    text: [
      'If this Baby Pokémon is your Active Pokémon and your opponent tries to attack, your opponent flips a coin (before doing anything else required in order to use that attack). If tails, your opponent\'s turn ends without an attack.'
    ],
    attacks: [
      {
        cost: [
          'Fighting'
        ],
        name: 'Energy Punch',
        text: 'Flip a coin. If heads, discard a Special Energy card attached to the Defending Pokémon. If tails, this attack does nothing.',
        damage: '',
        convertedEnergyCost: 1
      }
    ]
  },
  {
    id: 'ecard2-64',
    name: 'Voltorb',
    nationalPokedexNumber: 100,
    imageUrl: 'https://images.pokemontcg.io/ecard2/64.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/64_hires.png',
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
    number: '64',
    artist: 'Yukiko Baba',
    rarity: 'Uncommon',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
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
          'Lightning',
          'Colorless'
        ],
        name: 'Thundershock',
        text: 'Flip a coin. If heads, the Defending Pokémon is now Paralyzed.',
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
    id: 'ecard2-65',
    name: 'Weepinbell',
    nationalPokedexNumber: 70,
    imageUrl: 'https://images.pokemontcg.io/ecard2/65.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/65_hires.png',
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
    number: '65',
    artist: 'Miki Tanaka',
    rarity: 'Uncommon',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Growth',
        text: 'Attach up to 2 Grass Energy cards from your hand to Weepinbell.',
        damage: '',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Grass',
          'Colorless'
        ],
        name: 'Double Razor Leaf',
        text: 'Flip 2 coins. This attack does 30 damage times the number of heads.',
        damage: '30×',
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
    id: 'ecard2-66',
    name: 'Wooper',
    nationalPokedexNumber: 194,
    imageUrl: 'https://images.pokemontcg.io/ecard2/66.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/66_hires.png',
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
    number: '66',
    artist: 'Atsuko Nishida',
    rarity: 'Uncommon',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Tail Whap',
        text: '',
        damage: '10',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Water'
        ],
        name: 'Deep Dive',
        text: 'Flip 3 coins. For each heads, remove 1 damage counter from Wooper.',
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
    id: 'ecard2-67',
    name: 'Aipom',
    nationalPokedexNumber: 190,
    imageUrl: 'https://pkmncards.com/wp-content/uploads/aipom-aquapolis-aq-67.jpg',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/67_hires.png',
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
    number: '67',
    artist: 'Kagemaru Himeno',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Stretch Tail',
        text: 'Flip a coin. If heads, choose 1 of your opponent\'s Benched Pokémon and this attack does 10 damage to it. (Don\'t apply Weakness and Resistance for Benched Pokémon.)',
        damage: '',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Colorless',
          'Colorless'
        ],
        name: 'Skedaddle',
        text: 'Return Aipom and all basic Energy cards attached to it to your hand. If you have no Benched Pokémon, this attack does nothing.',
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
    id: 'ecard2-68',
    name: 'Bellsprout',
    nationalPokedexNumber: 69,
    imageUrl: 'https://images.pokemontcg.io/ecard2/68.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/68_hires.png',
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
    number: '68',
    artist: 'Keiko Fukuyama',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Poison Vine',
        text: 'Flip a coin. If heads, the Defending Pokémon is now Poisoned.',
        damage: '',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Grass'
        ],
        name: 'Sharp Leaf',
        text: 'Flip a coin. If heads, this attack does 10 damage plus 10 more damage.',
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
    id: 'ecard2-69',
    name: 'Chansey',
    nationalPokedexNumber: 113,
    imageUrl: 'https://images.pokemontcg.io/ecard2/69.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/69_hires.png',
    types: [
      'Colorless'
    ],
    supertype: 'Pokémon',
    subtype: 'Basic',
    hp: '100',
    retreatCost: [
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 2,
    number: '69',
    artist: 'Atsuko Nishida',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
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
          'Colorless',
          'Colorless',
          'Colorless'
        ],
        name: 'Double-edge',
        text: 'Chansey does 40 damage to itself.',
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
    id: 'ecard2-70',
    name: 'Chinchou',
    nationalPokedexNumber: 170,
    imageUrl: 'https://images.pokemontcg.io/ecard2/70.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/70_hires.png',
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
    number: '70',
    artist: 'Yuka Morii',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Float',
        text: 'Flip a coin. If heads, during your opponent\'s next turn, prevent all effects of attacks, including damage, done to Chinchou.',
        damage: '',
        convertedEnergyCost: 1
      },
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
        type: 'Grass',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard2-71',
    name: 'Chinchou',
    nationalPokedexNumber: 170,
    imageUrl: 'https://images.pokemontcg.io/ecard2/71.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/71_hires.png',
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
    number: '71',
    artist: 'Hisao Nakamura',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Jolt',
        text: 'Flip a coin. If heads, the Defending Pokémon is now Paralyzed.',
        damage: '',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Lightning',
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
        type: 'Fighting',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard2-72',
    name: 'Cubone',
    nationalPokedexNumber: 104,
    imageUrl: 'https://images.pokemontcg.io/ecard2/72.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/72_hires.png',
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
    number: '72',
    artist: 'Midori Harada',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Teary Eyes',
        text: 'During your opponent\'s next turn, any damage done to Cubone by attacks is reduced by 20.',
        damage: '',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Fighting'
        ],
        name: 'Tackle',
        text: '',
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
    id: 'ecard2-73',
    name: 'Doduo',
    nationalPokedexNumber: 84,
    imageUrl: 'https://images.pokemontcg.io/ecard2/73.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/73_hires.png',
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
    number: '73',
    artist: 'Yukiko Baba',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Super Speed',
        text: 'Flip a coin. If heads, during your opponent\'s next turn, prevent all effects of attacks, including damage, done to Doduo.',
        damage: '',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Colorless',
          'Colorless'
        ],
        name: 'Rear Kick',
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
    id: 'ecard2-74',
    name: 'Drowzee',
    nationalPokedexNumber: 96,
    imageUrl: 'https://images.pokemontcg.io/ecard2/74.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/74_hires.png',
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
    number: '74',
    artist: 'Hisao Nakamura',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    attacks: [
      {
        cost: [
          'Psychic'
        ],
        name: 'Sleep Inducer',
        text: 'If your opponent has any Benched Pokémon, flip a coin. If heads, choose 1 of them and switch it with the Defending Pokémon. The new Defending Pokémon is now Asleep.',
        damage: '',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Colorless',
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
        type: 'Psychic',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard2-75',
    name: 'Eevee',
    nationalPokedexNumber: 133,
    imageUrl: 'https://images.pokemontcg.io/ecard2/75.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/75_hires.png',
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
    number: '75',
    artist: 'Midori Harada',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Charge Up',
        text: 'Flip a coin. If heads, search your deck for an Energy card and attach it to Eevee. Shuffle your deck afterward.',
        damage: '',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Colorless'
        ],
        name: 'Lunge',
        text: 'Flip a coin. If tails, this attack does nothing.',
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
    id: 'ecard2-76',
    name: 'Exeggcute',
    nationalPokedexNumber: 102,
    imageUrl: 'https://images.pokemontcg.io/ecard2/76.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/76_hires.png',
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
    artist: 'Yukiko Baba',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Growth Spurt',
        text: 'Attach an Energy card from your hand to Exeggcute.',
        damage: '',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Grass'
        ],
        name: 'Sleep Powder',
        text: 'The Defending Pokémon is now Asleep.',
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
    id: 'ecard2-77',
    name: 'Exeggcute',
    nationalPokedexNumber: 102,
    imageUrl: 'https://images.pokemontcg.io/ecard2/77.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/77_hires.png',
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
    number: '77',
    artist: 'Sumiyoshi Kizuki',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Continuous Eggsplosion',
        text: 'Flip a coin until you get tails. This attack does 10 damage times the number of heads.',
        damage: '10×',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Psychic'
        ],
        name: 'Energy Support',
        text: 'Flip a coin. If heads, search your deck for a Psychic Energy card and attach it to one of your Benched Pokémon. Shuffle your deck afterward.',
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
    id: 'ecard2-78',
    name: 'Goldeen',
    nationalPokedexNumber: 118,
    imageUrl: 'https://images.pokemontcg.io/ecard2/78.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/78_hires.png',
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
    number: '78',
    artist: 'Miki Tanaka',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Knock Away',
        text: 'Flip a coin. If heads, this attack does 10 damage plus 10 more damage.',
        damage: '10+',
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
    id: 'ecard2-79',
    name: 'Grimer',
    nationalPokedexNumber: 88,
    imageUrl: 'https://images.pokemontcg.io/ecard2/79.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/79_hires.png',
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
    number: '79',
    artist: 'Keiji Kinebuchi',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Poison Sludge',
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
    id: 'ecard2-80',
    name: 'Growlithe',
    nationalPokedexNumber: 58,
    imageUrl: 'https://images.pokemontcg.io/ecard2/80.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/80_hires.png',
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
    number: '80',
    artist: 'Yukiko Baba',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Roar',
        text: 'If your opponent has any Benched Pokémon, he or she chooses 1 of them and switches the Defending Pokémon with it.',
        damage: '',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Fire'
        ],
        name: 'Firebreathing',
        text: 'Flip a coin. If heads, this attack does 10 damage plus 10 more damage.',
        damage: '10+',
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
    id: 'ecard2-81',
    name: 'Hitmonchan',
    nationalPokedexNumber: 107,
    imageUrl: 'https://images.pokemontcg.io/ecard2/81.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/81_hires.png',
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
    artist: 'Tomokazu Komiya',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    attacks: [
      {
        cost: [
          'Fighting',
          'Colorless'
        ],
        name: 'Rush',
        text: 'Flip 5 coins. This attack does 10 damage times the number of heads. Hitmonchan can\'t attack during your next turn.',
        damage: '10×',
        convertedEnergyCost: 2
      },
      {
        cost: [
          'Colorless',
          'Colorless',
          'Colorless'
        ],
        name: 'Smash Punch',
        text: 'Flip a coin. If tails, this attack does nothing.',
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
    id: 'ecard2-82',
    name: 'Hitmontop',
    nationalPokedexNumber: 237,
    imageUrl: 'https://images.pokemontcg.io/ecard2/82.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/82_hires.png',
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
    number: '82',
    artist: 'Tomokazu Komiya',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    attacks: [
      {
        cost: [
          'Colorless',
          'Colorless'
        ],
        name: 'Double Kick',
        text: 'Flip 2 coins. This attack does 20 damage times the number of heads.',
        damage: '20×',
        convertedEnergyCost: 2
      },
      {
        cost: [
          'Fighting',
          'Colorless',
          'Colorless'
        ],
        name: 'Triple Spin',
        text: 'Flip 3 coins. This attack does 20 damage times the number of heads. If you get 2 or more heads, switch Hitmontop with one of your Benched Pokémon, if any.',
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
    id: 'ecard2-83',
    name: 'Hoppip',
    nationalPokedexNumber: 187,
    imageUrl: 'https://images.pokemontcg.io/ecard2/83.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/83_hires.png',
    types: [
      'Grass'
    ],
    supertype: 'Pokémon',
    subtype: 'Basic',
    ability: {
      name: 'Lightweight',
      text: 'You pay Colorless less to retreat Hoppip for each Grass Energy attached to it.',
      type: 'Poké-Body'
    },
    hp: '40',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '83',
    artist: 'Yuka Morii',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Careless Tackle',
        text: 'Hoppip does 10 damage to itself.',
        damage: '20',
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
    id: 'ecard2-84',
    name: 'Horsea',
    nationalPokedexNumber: 116,
    imageUrl: 'https://images.pokemontcg.io/ecard2/84.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/84_hires.png',
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
    number: '84',
    artist: 'Hisao Nakamura',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    attacks: [
      {
        cost: [
          'Water'
        ],
        name: 'Bubble',
        text: 'Flip a coin. If heads, the Defending Pokémon is now Paralyzed.',
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
    id: 'ecard2-85',
    name: 'Horsea',
    nationalPokedexNumber: 116,
    imageUrl: 'https://images.pokemontcg.io/ecard2/85.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/85_hires.png',
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
    number: '85',
    artist: 'Atsuko Nishida',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    attacks: [
      {
        cost: [
          'Colorless',
          'Colorless'
        ],
        name: 'Reverse Thrust',
        text: 'Switch Horsea with 1 of your Benched Pokémon, if any.',
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
    id: 'ecard2-86',
    name: 'Houndour',
    nationalPokedexNumber: 228,
    imageUrl: 'https://images.pokemontcg.io/ecard2/86.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/86_hires.png',
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
    number: '86',
    artist: 'Midori Harada',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Singe',
        text: 'Flip a coin. If heads, the Defending Pokémon is now Burned.',
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
    id: 'ecard2-87',
    name: 'Houndour',
    nationalPokedexNumber: 228,
    imageUrl: 'https://images.pokemontcg.io/ecard2/87.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/87_hires.png',
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
    number: '87',
    artist: 'Atsuko Nishida',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    attacks: [
      {
        cost: [
          'Darkness',
          'Colorless'
        ],
        name: 'Feint Attack',
        text: 'Choose 1 of your opponent\'s Pokémon. This attack does 20 damage to that Pokémon. This attack\'s damage isn\'t affected by Weakness, Resistance, Poké-Powers, Poké-Bodies, or any other effects on that Pokémon.',
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
    id: 'ecard2-88',
    name: 'Kangaskhan',
    nationalPokedexNumber: 115,
    imageUrl: 'https://images.pokemontcg.io/ecard2/88.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/88_hires.png',
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
    number: '88',
    artist: 'Toshinao Aoki',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    attacks: [
      {
        cost: [
          'Colorless',
          'Colorless'
        ],
        name: 'Baby Outing',
        text: 'Look at the top 3 cards of your deck, and then choose 1 of those cards and put it in your hand. Shuffle the rest into your deck afterward.',
        damage: '',
        convertedEnergyCost: 2
      },
      {
        cost: [
          'Colorless',
          'Colorless',
          'Colorless'
        ],
        name: 'Mega Punch',
        text: '',
        damage: '30',
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
    id: 'ecard2-89',
    name: 'Larvitar',
    nationalPokedexNumber: 246,
    imageUrl: 'https://images.pokemontcg.io/ecard2/89.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/89_hires.png',
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
    number: '89',
    artist: 'Naoyo Kimura',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Mountain Eater',
        text: 'Your opponent discards the top card from his or her deck. Then you remove a damage counter from Larvitar.',
        damage: '',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Fighting'
        ],
        name: 'Rising Lunge',
        text: 'Flip a coin. If heads, this attack does 10 damage plus 10 more damage.',
        damage: '10+',
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
    id: 'ecard2-90',
    name: 'Lickitung',
    nationalPokedexNumber: 108,
    imageUrl: 'https://images.pokemontcg.io/ecard2/90.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/90_hires.png',
    types: [
      'Colorless'
    ],
    supertype: 'Pokémon',
    subtype: 'Basic',
    hp: '80',
    retreatCost: [
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 2,
    number: '90',
    artist: 'Yuka Morii',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    attacks: [
      {
        cost: [
          'Colorless',
          'Colorless'
        ],
        name: 'Long Tongue',
        text: 'Choose 1 of your opponent\'s Pokémon. This attack does 10 damage to that Pokémon. Don\'t apply Weakness and Resistance.',
        damage: '10',
        convertedEnergyCost: 2
      },
      {
        cost: [
          'Colorless',
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
        type: 'Fighting',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard2-91',
    name: 'Magnemite',
    nationalPokedexNumber: 81,
    imageUrl: 'https://images.pokemontcg.io/ecard2/91.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/91_hires.png',
    types: [
      'Lightning'
    ],
    supertype: 'Pokémon',
    subtype: 'Basic',
    ability: {
      name: 'Conductive Body',
      text: 'You pay Colorless less to retreat Magnemite for each Magnemite on your Bench.',
      type: 'Poké-Body'
    },
    hp: '50',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '91',
    artist: 'Hajime Kusajima',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    attacks: [
      {
        cost: [
          'Lightning',
          'Colorless'
        ],
        name: 'Magnetic Bomb',
        text: 'Flip a coin. If heads, this attack does 20 damage plus 10 more damage. If tails, Magnemite does 10 damage to itself.',
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
    id: 'ecard2-92',
    name: 'Mankey',
    nationalPokedexNumber: 56,
    imageUrl: 'https://images.pokemontcg.io/ecard2/92.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/92_hires.png',
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
    artist: 'Tomokazu Komiya',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    attacks: [
      {
        cost: [
          'Fighting'
        ],
        name: 'Mug',
        text: 'Before doing damage, discard all Trainer cards attached to the Defending Pokémon.',
        damage: '10',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Colorless',
          'Colorless'
        ],
        name: 'Rage',
        text: 'This attack does 10 damage plus 10 more damage for each damage counter on Mankey.',
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
    id: 'ecard2-93',
    name: 'Mareep',
    nationalPokedexNumber: 179,
    imageUrl: 'https://images.pokemontcg.io/ecard2/93.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/93_hires.png',
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
    number: '93',
    artist: 'Hizuki Misono',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Charge',
        text: 'Attach 1 Lightning Energy card in your discard pile to Mareep.',
        damage: '',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Lightning',
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
        type: 'Fighting',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard2-94',
    name: 'Miltank',
    nationalPokedexNumber: 241,
    imageUrl: 'https://images.pokemontcg.io/ecard2/94.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/94_hires.png',
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
    number: '94',
    artist: 'Kouki Saitou',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
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
          'Colorless'
        ],
        name: 'Continuous Tumble',
        text: 'Flip a coin until you get tails. This attack does 20 damage times the number of heads.',
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
    id: 'ecard2-95',
    name: 'Mr. Mime',
    nationalPokedexNumber: 122,
    imageUrl: 'https://images.pokemontcg.io/ecard2/95.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/95_hires.png',
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
    artist: 'Yukiko Baba',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    attacks: [
      {
        cost: [
          'Psychic',
          'Colorless'
        ],
        name: 'Mind Shock',
        text: 'Don\'t apply Weakness and Resistance.',
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
    id: 'ecard2-96',
    name: 'Nidoran♂',
    nationalPokedexNumber: 32,
    imageUrl: 'https://images.pokemontcg.io/ecard2/96.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/96_hires.png',
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
    number: '96',
    artist: 'Keiko Fukuyama',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    attacks: [
      {
        cost: [
          'Grass'
        ],
        name: 'Poison Horn',
        text: 'Flip a coin. If heads, the Defending Pokémon is now Poisoned.',
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
    weaknesses: [
      {
        type: 'Psychic',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard2-97',
    name: 'Oddish',
    nationalPokedexNumber: 43,
    imageUrl: 'https://images.pokemontcg.io/ecard2/97.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/97_hires.png',
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
    number: '97',
    artist: 'Kyoko Umemoto',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    attacks: [
      {
        cost: [
          'Grass'
        ],
        name: 'Stun Spore',
        text: 'Flip a coin. If heads, the Defending Pokémon is now Paralyzed.',
        damage: '',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Colorless',
          'Colorless'
        ],
        name: 'Ram',
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
    id: 'ecard2-98',
    name: 'Onix',
    nationalPokedexNumber: 95,
    imageUrl: 'https://images.pokemontcg.io/ecard2/98.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/98_hires.png',
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
    number: '98',
    artist: 'Hajime Kusajima',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    attacks: [
      {
        cost: [
          'Fighting',
          'Colorless'
        ],
        name: 'Crush',
        text: 'Flip a coin for each Energy attached to Onix. This attack does 20 damage times the number of heads.',
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
    id: 'ecard2-99',
    name: 'Paras',
    nationalPokedexNumber: 46,
    imageUrl: 'https://images.pokemontcg.io/ecard2/99.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/99_hires.png',
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
    number: '99',
    artist: 'Miki Tanaka',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Spore',
        text: 'The Defending Pokémon is now Asleep.',
        damage: '',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Grass',
          'Colorless'
        ],
        name: 'Spore Evolution',
        text: 'Search your deack for a card that evolves from Paras. Attach it to Paras. This counts as evolving Paras. Shuffle your deck afterwards.',
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
    id: 'ecard2-100',
    name: 'Phanpy',
    nationalPokedexNumber: 231,
    imageUrl: 'https://images.pokemontcg.io/ecard2/100.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/100_hires.png',
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
    number: '100',
    artist: 'Naoyo Kimura',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Flail',
        text: 'Does 10 damage times the number of damage counters on Phanpy.',
        damage: '10×',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Fighting',
          'Colorless'
        ],
        name: 'Rollout',
        text: '',
        damage: '20',
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
    id: 'ecard2-101',
    name: 'Pinsir',
    nationalPokedexNumber: 127,
    imageUrl: 'https://images.pokemontcg.io/ecard2/101.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/101_hires.png',
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
    number: '101',
    artist: 'Toshinao Aoki',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    attacks: [
      {
        cost: [
          'Colorless',
          'Colorless'
        ],
        name: 'Horn Grab',
        text: 'Flip a coin. If heads, the Defending Pokémon is now Paralyzed. If tails, this attack does nothing.',
        damage: '',
        convertedEnergyCost: 2
      },
      {
        cost: [
          'Grass',
          'Grass',
          'Colorless'
        ],
        name: 'Super Slice',
        text: 'Flip 2 coins. If either of them is tails, this attack does nothing.',
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
    id: 'ecard2-102',
    name: 'Ponyta',
    nationalPokedexNumber: 77,
    imageUrl: 'https://images.pokemontcg.io/ecard2/102.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/102_hires.png',
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
    number: '102',
    artist: 'Shin-ichi Yoshida',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
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
        text: 'Discard a Fire Energy card attached to Ponyta.',
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
    id: 'ecard2-103',
    name: 'Porygon',
    nationalPokedexNumber: 137,
    imageUrl: 'https://images.pokemontcg.io/ecard2/103.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/103_hires.png',
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
    number: '103',
    artist: 'Masako Yamashita',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Data Sort',
        text: 'Flip a coin. If heads, choose 1 Trainer card in your discard pile, show it to your opponent, and shuffle it into your deck.',
        damage: '',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Colorless'
        ],
        name: 'Peck',
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
    id: 'ecard2-104',
    name: 'Psyduck',
    nationalPokedexNumber: 54,
    imageUrl: 'https://images.pokemontcg.io/ecard2/104.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/104_hires.png',
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
    set: 'Aquapolis',
    setCode: 'ecard2',
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
        name: 'Scratch',
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
    id: 'ecard2-105',
    name: 'Remoraid',
    nationalPokedexNumber: 223,
    imageUrl: 'https://images.pokemontcg.io/ecard2/105.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/105_hires.png',
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
    number: '105',
    artist: 'Mitsuhiro Arita',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    attacks: [
      {
        cost: [
          'Water'
        ],
        name: 'Splatter',
        text: 'Choose 1 of your opponent\'s Pokémon. This attack does 10 damage to that Pokémon. Don\'t apply Weakness and Resistance.',
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
    id: 'ecard2-106',
    name: 'Scyther',
    nationalPokedexNumber: 123,
    imageUrl: 'https://images.pokemontcg.io/ecard2/106.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/106_hires.png',
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
    number: '106',
    artist: 'Midori Harada',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Slash',
        text: '',
        damage: '10',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Grass',
          'Colorless'
        ],
        name: 'Swift',
        text: 'This attack\'s damage isn\'t affected by Weakness, Resistance, Poké-Powers, Poké-Bodies, or any other effects on the Defending Pokémon.',
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
    id: 'ecard2-107',
    name: 'Sentret',
    nationalPokedexNumber: 161,
    imageUrl: 'https://images.pokemontcg.io/ecard2/107.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/107_hires.png',
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
    number: '107',
    artist: 'Hizuki Misono',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Spy',
        text: 'Look at the top 3 cards of your opponent\'s deck. Put them back in the same order.',
        damage: '',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Colorless'
        ],
        name: 'Double Scratch',
        text: 'Flip 2 coins. This attack does 10 damage times the number of heads.',
        damage: '10×',
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
    id: 'ecard2-108',
    name: 'Slowpoke',
    nationalPokedexNumber: 79,
    imageUrl: 'https://images.pokemontcg.io/ecard2/108.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/108_hires.png',
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
    number: '108',
    artist: 'Aya Kusube',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Fishing Tail',
        text: 'Search your discard pile for a Baby Pokémon, Basic Pokémon, Evolution card, or basic Energy card, show it to your opponent, and then put it into your hand.',
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
        type: 'Lightning',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard2-109',
    name: 'Smeargle',
    nationalPokedexNumber: 235,
    imageUrl: 'https://images.pokemontcg.io/ecard2/109.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/109_hires.png',
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
    number: '109',
    artist: 'Miki Tanaka',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Paint Trick',
        text: 'Flip a coin. If heads, the Defending Pokémon is now Confused. Then, choose 1 of your Benched Pokémon and switch Smeargle with it.',
        damage: '',
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
        type: 'Fighting',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard2-110',
    name: 'Sneasel',
    nationalPokedexNumber: 215,
    imageUrl: 'https://images.pokemontcg.io/ecard2/110.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/110_hires.png',
    types: [
      'Darkness'
    ],
    supertype: 'Pokémon',
    subtype: 'Basic',
    hp: '60',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: '110',
    artist: 'Midori Harada',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    attacks: [
      {
        cost: [
          'Darkness'
        ],
        name: 'Rob',
        text: 'Look at your opponent\'s hand. Choose all Technical Machine and Pokémon Tool cards there and put them into his or her deck. Your opponent shuffles the deck afterward.',
        damage: '',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Colorless',
          'Colorless'
        ],
        name: 'Claw',
        text: 'Flip a coin. If tails, this attack does nothing.',
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
    id: 'ecard2-111',
    name: 'Spinarak',
    nationalPokedexNumber: 167,
    imageUrl: 'https://images.pokemontcg.io/ecard2/111.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/111_hires.png',
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
    number: '111',
    artist: 'Miki Tanaka',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    attacks: [
      {
        cost: [
          'Grass'
        ],
        name: 'Sharp Stinger',
        text: 'Flip a coin. If heads, the Defending Pokémon is now Poisoned. If tails, the Defending Pokémon is now Paralyzed.',
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
    id: 'ecard2-112',
    name: 'Tangela',
    nationalPokedexNumber: 114,
    imageUrl: 'https://images.pokemontcg.io/ecard2/112.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/112_hires.png',
    types: [
      'Grass'
    ],
    supertype: 'Pokémon',
    subtype: 'Basic',
    hp: '60',
    retreatCost: [
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 2,
    number: '112',
    artist: 'Tomokazu Komiya',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    attacks: [
      {
        cost: [
          'Colorless',
          'Colorless'
        ],
        name: 'Tickling Vines',
        text: 'Flip a coin. If heads, the Defending Pokémon can\'t attack during your opponent\'s next turn.',
        damage: '10',
        convertedEnergyCost: 2
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
    id: 'ecard2-113',
    name: 'Tentacool',
    nationalPokedexNumber: 72,
    imageUrl: 'https://images.pokemontcg.io/ecard2/113.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/113_hires.png',
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
    number: '113',
    artist: 'Hajime Kusajima',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Poison Sting',
        text: 'Flip a coin. If heads, the Defending Pokémon is now Poisoned.',
        damage: '',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Water'
        ],
        name: 'Recover',
        text: 'Discard 1 Water Energy card attached to Tentacool in order to use this attack. Remove all damage counters from Tentacool.',
        damage: '',
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
    id: 'ecard2-114',
    name: 'Togepi',
    nationalPokedexNumber: 175,
    imageUrl: 'https://images.pokemontcg.io/ecard2/114.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/114_hires.png',
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
    number: '114',
    artist: 'Miki Tanaka',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Minor Errand-Running',
        text: 'Flip 2 coins. For each heads, search your deck for a basic Energy card. Show those cards to your opponent and then put them into your hand. Shuffle your deck afterward.',
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
    weaknesses: [
      {
        type: 'Fighting',
        value: '×2'
      }
    ]
  },
  {
    id: 'ecard2-115',
    name: 'Voltorb',
    nationalPokedexNumber: 100,
    imageUrl: 'https://images.pokemontcg.io/ecard2/115.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/115_hires.png',
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
    number: '115',
    artist: 'Keiji Kinebuchi',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    attacks: [
      {
        cost: [
          'Lightning'
        ],
        name: 'Swift',
        text: 'This attack\'s damage isn\'t affected by Weakness, Resistance, Poké-Powers, Poké-Bodies, or any other effects on the Defending Pokémon.',
        damage: '20',
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
    id: 'ecard2-116',
    name: 'Vulpix',
    nationalPokedexNumber: 37,
    imageUrl: 'https://images.pokemontcg.io/ecard2/116.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/116_hires.png',
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
    number: '116',
    artist: 'Keiko Fukuyama',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    attacks: [
      {
        cost: [
          'Fire'
        ],
        name: 'Collect Fire',
        text: 'If there are any Fire Energy cards in your discard pile, flip a coin. If heads, attach 1 of them to Vulpix.',
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
    id: 'ecard2-117',
    name: 'Wooper',
    nationalPokedexNumber: 194,
    imageUrl: 'https://images.pokemontcg.io/ecard2/117.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/117_hires.png',
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
    number: '117',
    artist: 'Keiko Fukuyama',
    rarity: 'Common',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
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
          'Colorless'
        ],
        name: 'Wave Splash',
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
    id: 'ecard2-118',
    name: 'Apricorn Forest',
    imageUrl: 'https://images.pokemontcg.io/ecard2/118.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/118_hires.png',
    supertype: 'Trainer',
    subtype: 'Stadium',
    number: '118',
    artist: 'Midori Harada',
    rarity: 'Rare',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    text: [
      'Once during each player\'s turn (before attacking), if that player\'s Bench isn\'t full, that player flips a coin. If heads, that player shows his or her opponent a basic Energy card from his or her hand. Then, that player searches his or her deck for a Basic Pokémon card of the same type (color) as the revealed Energy card and puts it onto his or her Bench. The player shuffles his or her deck afterward.'
    ]
  },
  {
    id: 'ecard2-119',
    name: 'Darkness Cube 01',
    imageUrl: 'https://images.pokemontcg.io/ecard2/119.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/119_hires.png',
    supertype: 'Trainer',
    subtype: 'Technical Machine',
    number: '119',
    artist: '"Big Mama" Tagawa',
    rarity: 'Uncommon',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    text: [
      'Before doing damage, discard all Trainer cards attached to the Defending Pokémon.'
    ]
  },
  {
    id: 'ecard2-120',
    name: 'Energy Switch',
    imageUrl: 'https://images.pokemontcg.io/ecard2/120.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/120_hires.png',
    supertype: 'Trainer',
    subtype: '',
    number: '120',
    artist: 'Mikio Menjo',
    rarity: 'Uncommon',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    text: [
      'Move a basic Energy card attached to 1 of your Pokémon to another of your Pokémon.'
    ]
  },
  {
    id: 'ecard2-121',
    name: 'Fighting Cube 01',
    imageUrl: 'https://images.pokemontcg.io/ecard2/121.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/121_hires.png',
    supertype: 'Trainer',
    subtype: 'Technical Machine',
    number: '121',
    artist: '"Big Mama" Tagawa',
    rarity: 'Uncommon',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    text: [
      'Flip a number of coins equal to the number of damage counters on this Pokémon. This attack does 10 damage times the number of heads.'
    ]
  },
  {
    id: 'ecard2-122',
    name: 'Fire Cube 01',
    imageUrl: 'https://images.pokemontcg.io/ecard2/122.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/122_hires.png',
    supertype: 'Trainer',
    subtype: 'Technical Machine',
    number: '122',
    artist: '"Big Mama" Tagawa',
    rarity: 'Uncommon',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    text: [
      'The Defending Pokémon is now Burned.'
    ]
  },
  {
    id: 'ecard2-123',
    name: 'Forest Guardian',
    imageUrl: 'https://images.pokemontcg.io/ecard2/123.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/123_hires.png',
    supertype: 'Trainer',
    subtype: 'Supporter',
    number: '123',
    artist: 'Ken Sugimori',
    rarity: 'Uncommon',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    text: [
      'Shuffle your deck. Then, look at the top 7 cards of your deck. Choose 1 of those cards and put it into your hand. Shuffle the rest into your deck afterward.'
    ]
  },
  {
    id: 'ecard2-124',
    name: 'Grass Cube 01',
    imageUrl: 'https://images.pokemontcg.io/ecard2/124.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/124_hires.png',
    supertype: 'Trainer',
    subtype: 'Technical Machine',
    number: '124',
    artist: '"Big Mama" Tagawa',
    rarity: 'Uncommon',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    text: [
      'The Defending Pokémon is now Asleep and Poisoned.'
    ]
  },
  {
    id: 'ecard2-125',
    name: 'Healing Berry',
    imageUrl: 'https://images.pokemontcg.io/ecard2/125.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/125_hires.png',
    supertype: 'Trainer',
    subtype: 'Pokémon Tool',
    number: '125',
    artist: 'Shin-ichi Yoshida',
    rarity: 'Uncommon',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    text: [
      'At the end of any turn, if the Pokémon this card is attached to has 20 HP or less, remove 3 damage counters from that Pokémon and discard this card.'
    ]
  },
  {
    id: 'ecard2-126',
    name: 'Juggler',
    imageUrl: 'https://images.pokemontcg.io/ecard2/126.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/126_hires.png',
    supertype: 'Trainer',
    subtype: 'Supporter',
    number: '126',
    artist: 'Ken Sugimori',
    rarity: 'Uncommon',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    text: [
      'Discard up to 2 basic Energy cards from your hand. If you discarded 1 basic Energy card, draw 3 cards. If you discarded 2 basic Energy cards, draw 5 cards.'
    ]
  },
  {
    id: 'ecard2-127',
    name: 'Lightning Cube 01',
    imageUrl: 'https://images.pokemontcg.io/ecard2/127.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/127_hires.png',
    supertype: 'Trainer',
    subtype: 'Technical Machine',
    number: '127',
    artist: '"Big Mama" Tagawa',
    rarity: 'Uncommon',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    text: [
      'Discard all Lightning Energy cards attached to this Pokémon. Then, flip a number of coins equal to the number of Energy cards discarded that way. This attack does 40 damage times the number of heads.'
    ]
  },
  {
    id: 'ecard2-128',
    name: 'Memory Berry',
    imageUrl: 'https://images.pokemontcg.io/ecard2/128.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/128_hires.png',
    supertype: 'Trainer',
    subtype: 'Pokémon Tool',
    number: '128',
    artist: 'Shin-ichi Yoshikawa',
    rarity: 'Uncommon',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    text: [
      'The Pokémon this card is attached to can use any attack from its Basic Pokémon card or any Evolution card from which the Pokémon evolved. (You still have to pay for that attack\'s Energy cost.) Discard this card at the end of any turn the Pokémon attacks.'
    ]
  },
  {
    id: 'ecard2-129',
    name: 'Metal Cube 01',
    imageUrl: 'https://images.pokemontcg.io/ecard2/129.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/129_hires.png',
    supertype: 'Trainer',
    subtype: 'Technical Machine',
    number: '129',
    artist: '"Big Mama" Tagawa',
    rarity: 'Uncommon',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    text: [
      'Before doing damage, you may choose 1 of your opponent\'s Benched Pokémon and switch it with the Defending Pokémon.'
    ]
  },
  {
    id: 'ecard2-130',
    name: 'Pokémon Fan Club',
    imageUrl: 'https://images.pokemontcg.io/ecard2/130.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/130_hires.png',
    supertype: 'Trainer',
    subtype: 'Supporter',
    number: '130',
    artist: 'Ken Sugimori',
    rarity: 'Uncommon',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    text: [
      'Search your deck for up to 2 Baby Pokémon and/or Basic Pokémon cards and put them onto your Bench. Shuffle your deck afterward.'
    ]
  },
  {
    id: 'ecard2-131',
    name: 'Pokémon Park',
    imageUrl: 'https://images.pokemontcg.io/ecard2/131.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/131_hires.png',
    supertype: 'Trainer',
    subtype: 'Stadium',
    number: '131',
    artist: 'Kazuo Yazawa',
    rarity: 'Uncommon',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    text: [
      'Once during each of his or her turns, when a player attaches an Energy card from his or her hand to 1 of his or her Benched Pokémon, he or she removes 1 damage counter, if any, from that Pokémon.'
    ]
  },
  {
    id: 'ecard2-132',
    name: 'Psychic Cube 01',
    imageUrl: 'https://images.pokemontcg.io/ecard2/132.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/132_hires.png',
    supertype: 'Trainer',
    subtype: 'Technical Machine',
    number: '132',
    artist: '"Big Mama" Tagawa',
    rarity: 'Uncommon',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    text: [
      'The Defending Pokémon is now Confused.'
    ]
  },
  {
    id: 'ecard2-133',
    name: 'Seer',
    imageUrl: 'https://images.pokemontcg.io/ecard2/133.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/133_hires.png',
    supertype: 'Trainer',
    subtype: 'Supporter',
    number: '133',
    artist: 'Ken Sugimori',
    rarity: 'Uncommon',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    text: [
      'Look at the top 6 cards of your deck. Take all basic Energy cards you find there, show them to your opponent, and then put them into your hand. Shuffle your deck afterward.'
    ]
  },
  {
    id: 'ecard2-134',
    name: 'Super Energy Removal 2',
    imageUrl: 'https://images.pokemontcg.io/ecard2/134.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/134_hires.png',
    supertype: 'Trainer',
    subtype: '',
    number: '134',
    artist: 'Keiji Kinebuchi',
    rarity: 'Uncommon',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    text: [
      'Flip 2 coins. If both are heads, discard all Energy cards attached to the Defending Pokémon. If both are tails, discard all Energy cards attached to your Active Pokémon. If 1 is heads and 1 is tails, this card does nothing.'
    ]
  },
  {
    id: 'ecard2-135',
    name: 'Time Shard',
    imageUrl: 'https://images.pokemontcg.io/ecard2/135.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/135_hires.png',
    supertype: 'Trainer',
    subtype: 'Pokémon Tool',
    number: '135',
    artist: 'Shin-ichi Yoshikawa',
    rarity: 'Uncommon',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    text: [
      'If the Pokémon this card is attached to is Knocked Out by damage from the Defending Pokémon\'s attack during your opponent\'s next turn, you may return up to 2 basic Energy cards attached to that Pokémon to your hand.'
    ]
  },
  {
    id: 'ecard2-136',
    name: 'Town Volunteers',
    imageUrl: 'https://images.pokemontcg.io/ecard2/136.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/136_hires.png',
    supertype: 'Trainer',
    subtype: 'Supporter',
    number: '136',
    artist: 'Ken Sugimori',
    rarity: 'Uncommon',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    text: [
      'Take 5 Baby Pokémon, Basic Pokémon, Evolution, and/or basic Energy cards from your discard pile and then show them to your opponent. Shuffle them into your deck.'
    ]
  },
  {
    id: 'ecard2-137',
    name: 'Traveling Salesman',
    imageUrl: 'https://images.pokemontcg.io/ecard2/137.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/137_hires.png',
    supertype: 'Trainer',
    subtype: 'Supporter',
    number: '137',
    artist: 'Ken Sugimori',
    rarity: 'Uncommon',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    text: [
      'Search your deck for up to 2 Technical Machine and/or Pokémon Tool cards, show them to your opponent, and then put them into your hand. Shuffle your deck afterward.'
    ]
  },
  {
    id: 'ecard2-138',
    name: 'Undersea Ruins',
    imageUrl: 'https://images.pokemontcg.io/ecard2/138.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/138_hires.png',
    supertype: 'Trainer',
    subtype: 'Stadium',
    number: '138',
    artist: 'Midori Harada',
    rarity: 'Uncommon',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    text: [
      'Once during each player\'s turn (before attacking), that player may flip a coin. If heads, that player chooses 1 of his or her Evolved Pokémon in play and discards the top Evolution card from that Pokémon, devolving it.'
    ]
  },
  {
    id: 'ecard2-139',
    name: 'Power Plant',
    imageUrl: 'https://images.pokemontcg.io/ecard2/139.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/139_hires.png',
    supertype: 'Trainer',
    subtype: 'Stadium',
    number: '139',
    artist: 'Kai Ishikawa',
    rarity: 'Uncommon',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    text: [
      'Once during each of his or her turns, a player may discard a basic Energy card from his or her hand. If that player does, he or she chooses a basic Energy card from his or her discard pile, shows it to his or her opponent, and then puts it into his or her hand.'
    ]
  },
  {
    id: 'ecard2-140',
    name: 'Water Cube 01',
    imageUrl: 'https://images.pokemontcg.io/ecard2/140.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/140_hires.png',
    supertype: 'Trainer',
    subtype: 'Technical Machine',
    number: '140',
    artist: '"Big Mama" Tagawa',
    rarity: 'Uncommon',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    text: [
      'Choose 1 of your opponent\'s Pokémon. This attack does 20 damage to that Pokémon. Don\'t apply Weakness and Resistance.'
    ]
  },
  {
    id: 'ecard2-141',
    name: 'Weakness Guard',
    imageUrl: 'https://images.pokemontcg.io/ecard2/141.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/141_hires.png',
    supertype: 'Trainer',
    subtype: '',
    number: '141',
    artist: 'Jungo Suzuki',
    rarity: 'Uncommon',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    text: [
      'As long as this card is attached, this Pokémon has no Weakness.'
    ]
  },
  {
    id: 'ecard2-142',
    name: 'Darkness Energy',
    imageUrl: 'https://images.pokemontcg.io/ecard2/142.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/142_hires.png',
    supertype: 'Energy',
    subtype: 'Special',
    number: '142',
    artist: 'Milky Isobe',
    rarity: 'Rare',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    text: [
      'If the Pokémon Darkness Energy is attached to damages the Defending Pokémon (after applying Weakness and Resistance), the attack does 10 more damage to the Defending Pokémon. At the end of every turn, put 1 damage counter on the Pokémon Darkness Energy is attached to, unless it\'s Darkness or has Dark in its name. Darkness Energy provides Darkness Energy. (Doesn\'t count as a basic Energy card.)'
    ]
  },
  {
    id: 'ecard2-143',
    name: 'Metal Energy',
    imageUrl: 'https://images.pokemontcg.io/ecard2/143.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/143_hires.png',
    supertype: 'Energy',
    subtype: 'Special',
    number: '143',
    artist: 'Milky Isobe',
    rarity: 'Rare',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    text: [
      'Damage done to the Pokémon Metal Energy is attached to is reduced by 10 (after applying Weakness and Resistance). If the Pokémon Metal Energy is attached to isn\'t Metal, whenever it damages a Pokémon, reduce that damage by 10 (before applying Weakness and Resistance). Metal Energy provides Metal Energy. (Doesn\'t count as a basic Energy card.)'
    ]
  },
  {
    id: 'ecard2-144',
    name: 'Rainbow Energy',
    imageUrl: 'https://images.pokemontcg.io/ecard2/144.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/144_hires.png',
    supertype: 'Energy',
    subtype: 'Special',
    number: '144',
    artist: 'Takumi Akabane',
    rarity: 'Rare',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    text: [
      'Attach Rainbow Energy to 1 of your Pokémon. While in play, Rainbow Energy provides every type of Energy but provides only 1 Energy at a time. (Has no effect other than providing Energy.) When you attach this card from your hand to 1 of your Pokémon, put 1 damage counter on that Pokémon.'
    ]
  },
  {
    id: 'ecard2-145',
    name: 'Boost Energy',
    imageUrl: 'https://images.pokemontcg.io/ecard2/145.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/145_hires.png',
    supertype: 'Energy',
    subtype: 'Special',
    number: '145',
    artist: 'Shin-ichi Yoshikawa',
    rarity: 'Uncommon',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    text: [
      'Boost Energy can be attached only to an Evolved Pokémon. Discard Boost Energy at the end of the turn it was attached. Boost Energy provides Colorless Colorless Colorless Energy. The Pokémon Boost Energy is attached to can\'t retreat. If the Pokémon Boost Energy is attached to isn\'t an Evolved Pokémon, discard Boost Energy.'
    ]
  },
  {
    id: 'ecard2-146',
    name: 'Crystal Energy',
    imageUrl: 'https://images.pokemontcg.io/ecard2/146.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/146_hires.png',
    supertype: 'Energy',
    subtype: 'Special',
    number: '146',
    artist: 'Shin-ichi Yoshikawa',
    rarity: 'Uncommon',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    text: [
      'Crystal Energy provides 1 Energy of all types (colors) of all basic Energy cards attached to the Pokémon Crystal Energy is attached to. If there are no basic Energy cards attached to the Pokémon Crystal Energy is attached to, Crystal Energy provides Colorless Energy.'
    ]
  },
  {
    id: 'ecard2-147',
    name: 'Warp Energy',
    imageUrl: 'https://images.pokemontcg.io/ecard2/147.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/147_hires.png',
    supertype: 'Energy',
    subtype: 'Special',
    number: '147',
    artist: 'Keiji Kinebuchi',
    rarity: 'Uncommon',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    text: [
      'Warp Energy provides 1 Colorless Energy. When you attach Warp Energy from your hand to your Active Pokémon, switch your Active Pokémon with 1 of your Benched Pokémon.'
    ]
  },
  {
    id: 'ecard2-148',
    name: 'Kingdra',
    nationalPokedexNumber: 230,
    imageUrl: 'https://pkmncards.com/wp-content/uploads/kingdra-aquapolis-aq-148.jpg',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/148_hires.png',
    types: [
      'Colorless'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 2',
    evolvesFrom: 'Seadra',
    ability: {
      name: 'Crystal Type',
      text: 'Whenever you attach a Water, Lightning, or Psychic basic Energy card from your hand to Kingdra, Kingdra\'s type (color) becomes the same as that Energy card type until the end of the turn.',
      type: 'Poké-Body'
    },
    hp: '110',
    retreatCost: [
      'Colorless',
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 3,
    number: '148',
    artist: 'Mikio Menjo',
    rarity: 'Secret Rare',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    attacks: [
      {
        cost: [
          'Lightning',
          'Water',
          'Water'
        ],
        name: 'Aquabomb',
        text: 'Kingdra does 10 damage to itself. (Don\'t apply Weakness or Resistance when Kingdra damages itself with this attack.)',
        damage: '40',
        convertedEnergyCost: 3
      },
      {
        cost: [
          'Lightning',
          'Psychic',
          'Psychic',
          'Colorless'
        ],
        name: 'Dual Burn',
        text: 'Flip 2 coins. For each tails, discard 1 Energy card attached to Kingdra.',
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
    id: 'ecard2-149',
    name: 'Lugia',
    nationalPokedexNumber: 249,
    imageUrl: 'https://pkmncards.com/wp-content/uploads/lugia-aquapolis-aq-149.jpg',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/149_hires.png',
    types: [
      'Colorless'
    ],
    supertype: 'Pokémon',
    subtype: 'Basic',
    ability: {
      name: 'Crystal Type',
      text: 'Whenever you attach a Fire, Water, or Psychic basic Energy card from your hand to Lugia, Lugia\'s type (color) becomes the same as that as that Energy card type until the end of the turn.',
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
    artist: 'Naoyo Kimura',
    rarity: 'Secret Rare',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    attacks: [
      {
        cost: [
          'Psychic',
          'Fire'
        ],
        name: 'Psychic',
        text: 'This attack does 10 damage times the number of Energy cards attached to the Defending Pokémon.',
        damage: '10×',
        convertedEnergyCost: 2
      },
      {
        cost: [
          'Fire',
          'Water',
          'Water',
          'Colorless'
        ],
        name: 'Steam Blast',
        text: 'Discard an Energy card attached to Lugia.',
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
    id: 'ecard2-150',
    name: 'Nidoking',
    nationalPokedexNumber: 34,
    imageUrl: 'https://pkmncards.com/wp-content/uploads/nidoking-aquapolis-aq-150.jpg',
    imageUrlHiRes: 'https://images.pokemontcg.io/ecard2/150_hires.png',
    types: [
      'Colorless'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 2',
    evolvesFrom: 'Nidorino',
    hp: '100',
    retreatCost: [
      'Colorless',
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 3,
    number: '150',
    artist: 'Hironobu Yoshida',
    rarity: 'Secret Rare',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    attacks: [
      {
        cost: [
          'Grass',
          'Grass',
          'Colorless'
        ],
        name: 'Poison Horn',
        text: 'The Defending Pokémon is now Poisoned.',
        damage: '30',
        convertedEnergyCost: 3
      },
      {
        cost: [
          'Lightning',
          'Lightning',
          'Fighting',
          'Fighting'
        ],
        name: 'Rolling Thunder',
        text: 'Flip a coin. If heads, this attack does 10 damage to each of your opponent\'s Benched Pokémon. If tails, this attack does 10 damage to each of your Benched Pokémon. (Don\'t apply Weakness and Resistance for Benched Pokémon.)',
        damage: '50',
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
    id: 'ecard2-151',
    name: 'Ampharos',
    nationalPokedexNumber: 181,
    imageUrl: 'https://pkmncards.com/wp-content/uploads/h01-ampharos-expedition.jpg',
    imageUrlHiRes: 'https://pkmncards.com/wp-content/uploads/h01-ampharos-expedition.jpg',
    types: [
      'Lightning'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 2',
    evolvesFrom: 'Flaaffy',
    hp: '100',
    retreatCost: [
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 2,
    number: 'H1',
    artist: 'Shin-ichi Yoshida',
    rarity: 'Holo Rare',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    attacks: [
      {
        cost: [
          'Lightning'
        ],
        name: 'Thundershock',
        text: 'Flip a coin. If heads, the Defending Pokémon is now Paralyzed.',
        damage: '20',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Lightning',
          'Lightning',
          'Colorless'
        ],
        name: 'Reflect Energy',
        text: 'If you have any Benched Pokémon and if there are any basic Energy cards attached to Ampharos, take 1 of those Energy cards and attach it to 1 of those Pokémon.',
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
    id: 'ecard2-152',
    name: 'Arcanine',
    nationalPokedexNumber: 59,
    imageUrl: 'https://pkmncards.com/wp-content/uploads/h02-arcanaine-expedition.jpg',
    imageUrlHiRes: 'https://pkmncards.com/wp-content/uploads/h02-arcanaine-expedition.jpg',
    types: [
      'Fire'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Growlithe',
    ability: {
      name: 'Extreme Speed',
      text: 'You pay Colorless less to retreat Arcanine for each Energy attached to it.',
      type: 'Poké-Body'
    },
    hp: '90',
    retreatCost: [
      'Colorless',
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 3,
    number: 'H2',
    artist: 'Kyoko Umemoto',
    rarity: 'Holo Rare',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    attacks: [
      {
        cost: [
          'Colorless',
          'Colorless',
          'Colorless'
        ],
        name: 'Fire Blow',
        text: 'You may discard any number of Fire Energy cards attached to Arcanine when you use this attack. If you do, flip a number of coins equal to the number of Fire Energy cards you discarded. This attack does 30 damage plus 30 more damage for each heads.',
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
    id: 'ecard2-153',
    name: 'Ariados',
    nationalPokedexNumber: 168,
    imageUrl: 'https://pkmncards.com/wp-content/uploads/h03-ariados-expedition.jpg',
    imageUrlHiRes: 'https://pkmncards.com/wp-content/uploads/h03-ariados-expedition.jpg',
    types: [
      'Grass'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Spinarak',
    ability: {
      name: 'Gluey Slime',
      text: 'As long as Ariados is in play, each player must pay an additional Colorless to retreat his or her Active Pokémon. Gluey Slime can\'t make a player pay more than an additional Colorless to retreat a Pokémon, even if there is more than 1 Ariados in play.',
      type: 'Poké-Body'
    },
    hp: '70',
    number: 'H3',
    artist: 'Shin-ichi Yoshida',
    rarity: 'Holo Rare',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    attacks: [
      {
        cost: [
          'Grass',
          'Colorless'
        ],
        name: 'Spider Force',
        text: 'Flip a coin. If heads, this attack does 20 damage plus 10 more damage. If tails, this attack does 20 damage and the Defending Pokémon is now Paralyzed.',
        damage: '20+',
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
    id: 'ecard2-154',
    name: 'Azumarill',
    nationalPokedexNumber: 184,
    imageUrl: 'https://pkmncards.com/wp-content/uploads/h04-azumarill-expedition.jpg',
    imageUrlHiRes: 'https://pkmncards.com/wp-content/uploads/h04-azumarill-expedition.jpg',
    types: [
      'Water'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Marill',
    ability: {
      name: 'Bubble Turn',
      text: 'Once during your turn (before your attack), if Azumarill is on your bench, you may flip a coin. If heads, return Azumarill and all cards attached to it to your hand.',
      type: 'Poké-Power'
    },
    hp: '70',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: 'H4',
    artist: 'Kagemaru Himeno',
    rarity: 'Holo Rare',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    attacks: [
      {
        cost: [
          'Water',
          'Colorless',
          'Colorless'
        ],
        name: 'Aqua Sonic',
        text: 'Don\'t apply Resistance.',
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
    id: 'ecard2-155',
    name: 'Bellossom',
    nationalPokedexNumber: 182,
    imageUrl: 'https://pkmncards.com/wp-content/uploads/h05-bellossom-expedition.jpg',
    imageUrlHiRes: 'https://pkmncards.com/wp-content/uploads/h05-bellossom-expedition.jpg',
    types: [
      'Grass'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 2',
    evolvesFrom: 'Gloom',
    ability: {
      name: 'Flower Supplement',
      text: 'Once during your turn (before your attack), you may flip a coin. If heads, attach 1 basic Energy card from your hand to 1 of your Benched Pokémon. This power can\'t be used if Bellossom is affected by a Special Condition.',
      type: 'Poké-Power'
    },
    hp: '90',
    retreatCost: [
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 2,
    number: 'H5',
    artist: 'Sumiyoshi Kizuki',
    rarity: 'Holo Rare',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    attacks: [
      {
        cost: [
          'Grass',
          'Grass',
          'Colorless'
        ],
        name: 'Knife Leaf',
        text: 'Flip 3 coins. This attack does 30 damage times the number of heads.',
        damage: '30×',
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
    id: 'ecard2-156',
    name: 'Blissey',
    nationalPokedexNumber: 242,
    imageUrl: 'https://pkmncards.com/wp-content/uploads/h06-blissey-expedition.jpg',
    imageUrlHiRes: 'https://pkmncards.com/wp-content/uploads/h06-blissey-expedition.jpg',
    types: [
      'Colorless'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Chansey',
    ability: {
      name: 'Happy Healing',
      text: 'Once during your turn (before your attack), choose 1 of your Benched Pokémon and flip a coin. If heads, count the number of Energy attached to Blissey and then remove that many damage counters from the chosen Benched Pokémon. This power can\'t be used if Blissey is affected by a Special Condition.',
      type: 'Poké-Power'
    },
    hp: '120',
    retreatCost: [
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 2,
    number: 'H6',
    artist: 'Naoyo Kimura',
    rarity: 'Holo Rare',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    attacks: [
      {
        cost: [
          'Colorless',
          'Colorless',
          'Colorless'
        ],
        name: 'Smash Bomber',
        text: 'Flip a coin. If tails, this attack does nothing.',
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
    id: 'ecard2-157',
    name: 'Electrode',
    nationalPokedexNumber: 101,
    imageUrl: 'https://pkmncards.com/wp-content/uploads/h07-electrode-expedition.jpg',
    imageUrlHiRes: 'https://pkmncards.com/wp-content/uploads/h07-electrode-expedition.jpg',
    types: [
      'Lightning'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Voltorb',
    ability: {
      name: 'Super Dynamo',
      text: 'Once during your turn (before your attack), if Electrode is your Active Pokémon, you may flip a coin. If heads, choose a Lightning Energy card from your discard pile and attach it to 1 of your Pokémon. This power can\'t be used if Electrode is affected by a Special Condition.',
      type: 'Poké-Power'
    },
    hp: '70',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: 'H7',
    artist: 'Shin-ichi Yoshida',
    rarity: 'Holo Rare',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    attacks: [
      {
        cost: [
          'Lightning',
          'Colorless'
        ],
        name: 'Swift',
        text: 'This attack\'s damage isn\'t affected by Weakness, Resistance, Poké-Powers, Poké-Bodies, or any other effects on the Defending Pokémon.',
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
    id: 'ecard2-158',
    name: 'Entei',
    nationalPokedexNumber: 244,
    imageUrl: 'https://pkmncards.com/wp-content/uploads/h08-entei-expedition.jpg',
    imageUrlHiRes: 'https://pkmncards.com/wp-content/uploads/h08-entei-expedition.jpg',
    types: [
      'Fire'
    ],
    supertype: 'Pokémon',
    subtype: 'Basic',
    ability: {
      name: 'Pure Body',
      text: 'To attach a Fire Energy card from your hand to Entei, you must discard an Energy card attached to Entei. (Attach the Fire Energy, and then discard an Energy from Entei.)',
      type: 'Poké-Body'
    },
    hp: '70',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: 'H8',
    artist: 'Atsuko Nishida',
    rarity: 'Holo Rare',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    attacks: [
      {
        cost: [
          'Fire',
          'Colorless',
          'Colorless'
        ],
        name: 'Burning Fang',
        text: 'You may flip a coin. If heads, discard a Fire Energy card attached to Entei and the Defending Pokémon is now Burned.',
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
    id: 'ecard2-159',
    name: 'Espeon',
    nationalPokedexNumber: 196,
    imageUrl: 'https://pkmncards.com/wp-content/uploads/h09-espeon-expedition.jpg',
    imageUrlHiRes: 'https://pkmncards.com/wp-content/uploads/h09-espeon-expedition.jpg',
    types: [
      'Psychic'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Eevee',
    ability: {
      name: 'Energy Return',
      text: 'As often as you like during your turn (before your attack), you choose an Energy card attached to 1 of your Pokémon and return to your hand. This power can\'t be used if Espeon is affected by a Special Condition.',
      type: 'Poké-Power'
    },
    hp: '80',
    number: 'H9',
    artist: 'Kyoko Umemoto',
    rarity: 'Holo Rare',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    attacks: [
      {
        cost: [
          'Psychic',
          'Colorless',
          'Colorless'
        ],
        name: 'Damage Blast',
        text: 'Flip a number of coins equal to the number of damage counters on the Defending Pokémon. This attack does 30 damage plus 10 more damage for each heads.',
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
    id: 'ecard2-160',
    name: 'Exeggutor',
    nationalPokedexNumber: 103,
    imageUrl: 'https://pkmncards.com/wp-content/uploads/h10-exeggutor-expedition.jpg',
    imageUrlHiRes: 'https://pkmncards.com/wp-content/uploads/h10-exeggutor-expedition.jpg',
    types: [
      'Grass'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Exeggcute',
    hp: '80',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: 'H10',
    artist: 'Yukiko Baba',
    rarity: 'Holo Rare',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Super Eggsplosion',
        text: 'Discard any number of Energy cards attached to any of your Pokémon. Flip a number of coins equal to the number of Energy cards discarded this way. This attack does 40 damage times the number of heads.',
        damage: '40×',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Grass'
        ],
        name: 'Called Shot',
        text: 'Choose 1 of your opponent\'s Benched Pokémon. This attack does 10 damage times the amount of Grass Energy attached to Exeggutor. (Don\'t apply Weakness or Resistance for Benched Pokémon)',
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
    id: 'ecard2-161',
    name: 'Houndoom',
    nationalPokedexNumber: 229,
    imageUrl: 'https://pkmncards.com/wp-content/uploads/h11-houndoom-expedition.jpg',
    imageUrlHiRes: 'https://pkmncards.com/wp-content/uploads/h11-houndoom-expedition.jpg',
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
    artist: 'Hajime Kusajima',
    rarity: 'Holo Rare',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    attacks: [
      {
        cost: [
          'Fire',
          'Colorless'
        ],
        name: 'Fireworks',
        text: 'Flip a coin. If tails, discard a Fire Energy card attached to Houndoom.',
        damage: '30',
        convertedEnergyCost: 2
      },
      {
        cost: [
          'Darkness',
          'Colorless',
          'Colorless'
        ],
        name: 'Dark Impact',
        text: 'The Defending Pokémon can\'t use any Poké-Powers untill the end of your opponent\'s next turn.',
        damage: '40',
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
    id: 'ecard2-162',
    name: 'Hypno',
    nationalPokedexNumber: 97,
    imageUrl: 'https://pkmncards.com/wp-content/uploads/h12-hypno-expedition.jpg',
    imageUrlHiRes: 'https://pkmncards.com/wp-content/uploads/h12-hypno-expedition.jpg',
    types: [
      'Psychic'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Drowzee',
    ability: {
      name: 'Sleep Pendulum',
      text: 'Once during your turn (before your attack), if Hypno is your Active Pokémon, you may make the Defending Pokémon Asleep. This power can\'t be used if Hypno is affected by a Special Condition.',
      type: 'Poké-Power'
    },
    hp: '80',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: 'H12',
    artist: 'Mitsuhiro Arita',
    rarity: 'Holo Rare',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    attacks: [
      {
        cost: [
          'Psychic',
          'Colorless',
          'Colorless'
        ],
        name: 'Spiral Aura',
        text: 'If the Defending Pokémon isn\'t Knocked Out by the damage from this attack, you may choose 1 of your opponent\'s Benched Pokémon and switch the Defending Pokémon with it.',
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
    id: 'ecard2-163',
    name: 'Jumpluff',
    nationalPokedexNumber: 189,
    imageUrl: 'https://pkmncards.com/wp-content/uploads/h13-jumpluff-expedition.jpg',
    imageUrlHiRes: 'https://pkmncards.com/wp-content/uploads/h13-jumpluff-expedition.jpg',
    types: [
      'Grass'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 2',
    evolvesFrom: 'Skiploom',
    ability: {
      name: 'Fluff',
      text: 'During your opponent\'s turn, if Jumpluff would be damaged or affected by an opponent\'s attack and it already has at least 1 damage counter on it, flip a coin. If heads, prevent all effects of that attack (including damage).',
      type: 'Poké-Body'
    },
    hp: '70',
    number: 'H13',
    artist: 'Yuka Morii',
    rarity: 'Holo Rare',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    attacks: [
      {
        cost: [
          'Grass'
        ],
        name: 'Cotton Punch',
        text: 'Flip 2 coins. This attack does 30 damage times the number of heads.',
        damage: '30×',
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
    id: 'ecard2-164',
    name: 'Kingdra',
    nationalPokedexNumber: 230,
    imageUrl: 'https://pkmncards.com/wp-content/uploads/h14-kingdra-expedition.jpg',
    imageUrlHiRes: 'https://pkmncards.com/wp-content/uploads/h14-kingdra-expedition.jpg',
    types: [
      'Water'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 2',
    evolvesFrom: 'Seadra',
    ability: {
      name: 'Water Cyclone',
      text: 'As often as you like during your turn (before your attack), you may move a Water Energy card from your Active Pokémon to 1 of your Benched Pokémon. This power can\'t be used if Kingdra is affected by a Special Condition.',
      type: 'Poké-Power'
    },
    hp: '120',
    retreatCost: [
      'Colorless',
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 3,
    number: 'H14',
    artist: 'Atsuko Nishida',
    rarity: 'Holo Rare',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    attacks: [
      {
        cost: [
          'Water',
          'Water',
          'Colorless',
          'Colorless'
        ],
        name: 'Rapids',
        text: 'Flip a coin. If heads, discard 1 Energy card attached to the Defending Pokémon, if any.',
        damage: '50',
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
    id: 'ecard2-165',
    name: 'Lanturn',
    nationalPokedexNumber: 171,
    imageUrl: 'https://pkmncards.com/wp-content/uploads/h15-lanturn-expedition.jpg',
    imageUrlHiRes: 'https://pkmncards.com/wp-content/uploads/h15-lanturn-expedition.jpg',
    types: [
      'Lightning'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Chinchou',
    ability: {
      name: 'Ion Coating',
      text: 'You may use this power once during each of your turn (before your attack). All Lightning Energy attached to your Active Pokémon becomes Water Energy for the rest of your turn. (This effect ends if your Active Pokémon retreats or is returned to your hand). This power can\'t be used if Lanturn is affected by a Special Condition.',
      type: 'Poké-Power'
    },
    hp: '80',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: 'H15',
    artist: 'Yuka Morii',
    rarity: 'Holo Rare',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    attacks: [
      {
        cost: [
          'Colorless',
          'Colorless'
        ],
        name: 'Electric Tackle',
        text: 'This attack does 20 damage plus 10 more damage for each Energy attached to Lanturn. Flip a coin. If tails, Lanturn does 10 damage to itself for each Energy attached to it.',
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
    id: 'ecard2-166',
    name: 'Magneton',
    nationalPokedexNumber: 82,
    imageUrl: 'https://pkmncards.com/wp-content/uploads/h16-magneton-expedition.jpg',
    imageUrlHiRes: 'https://pkmncards.com/wp-content/uploads/h16-magneton-expedition.jpg',
    types: [
      'Metal'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Magnemite',
    ability: {
      name: 'Magnetic Flow',
      text: 'Once during your turn (before your attack), if Magneton is your Active Pokémon, you may flip a coin. If heads, choose 2 of your opponent\'s Pokémon that have Energy cards attached to them. Choose 1 of the Energy cards attached to each of those Pokémon and switch them between the Pokémon. This power can\'t be used if Magneton is affected by a Special Condition.',
      type: 'Poké-Power'
    },
    hp: '70',
    retreatCost: [
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 2,
    number: 'H16',
    artist: 'Hikaru Koike',
    rarity: 'Holo Rare',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    attacks: [
      {
        cost: [
          'Colorless',
          'Colorless',
          'Colorless'
        ],
        name: 'Steel Wave',
        text: 'This attack does 10 damage to each of your opponent\'s Benched Pokémon that are the same type (color) as the Defending Pokémon. (Don\'t apply Weakness and Resistance for Benched Pokémon.)',
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
    id: 'ecard2-167',
    name: 'Muk',
    nationalPokedexNumber: 89,
    imageUrl: 'https://pkmncards.com/wp-content/uploads/h17-muk-expedition.jpg',
    imageUrlHiRes: 'https://pkmncards.com/wp-content/uploads/h17-muk-expedition.jpg',
    types: [
      'Grass'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Grimer',
    ability: {
      name: 'Heavyweight',
      text: 'As long as there is a Grass Energy attached to Muk, you must pay an additional ColorlessColorless to retreat it.',
      type: 'Poké-Body'
    },
    hp: '70',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: 'H17',
    artist: 'Hajime Kusajima',
    rarity: 'Holo Rare',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    attacks: [
      {
        cost: [
          'Colorless',
          'Colorless'
        ],
        name: 'Burning Sludge',
        text: 'Flip a number of coins equal to the amount of Grass Energy attached to Muk. If any of them are heads, the Defending Pokémon is now Poisoned and Burned.',
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
    id: 'ecard2-168',
    name: 'Nidoking',
    nationalPokedexNumber: 34,
    imageUrl: 'https://pkmncards.com/wp-content/uploads/h18-nidoking-expedition.jpg',
    imageUrlHiRes: 'https://pkmncards.com/wp-content/uploads/h18-nidoking-expedition.jpg',
    types: [
      'Fighting'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 2',
    evolvesFrom: 'Nidorino',
    ability: {
      name: 'Earth Rage',
      text: 'Once during your turn (before your attack), if Nidoking is your Active Pokémon, you may flip a coin. If heads, put a damage counter on each of your opponent\'s Benched Pokémon. This power can\'t be used if Nidoking is affected by a Special Condition.',
      type: 'Poké-Power'
    },
    hp: '110',
    retreatCost: [
      'Colorless',
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 3,
    number: 'H18',
    artist: 'Naoyo Kimura',
    rarity: 'Holo Rare',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    attacks: [
      {
        cost: [
          'Fighting',
          'Fighting',
          'Colorless',
          'Colorless'
        ],
        name: 'Giant Horn',
        text: 'Flip a coin. If heads, this attack does 50 damage plus 30 more damage.',
        damage: '50+',
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
    id: 'ecard2-169',
    name: 'Ninetales',
    nationalPokedexNumber: 38,
    imageUrl: 'https://pkmncards.com/wp-content/uploads/h19-ninetales-expedition.jpg',
    imageUrlHiRes: 'https://pkmncards.com/wp-content/uploads/h19-ninetales-expedition.jpg',
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
    number: 'H19',
    artist: 'Kagemaru Himeno',
    rarity: 'Holo Rare',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    attacks: [
      {
        cost: [
          'Fire'
        ],
        name: 'Miracle Tail',
        text: 'Flip a coin. If heads, choose a Special Condition (Asleep, Burned, Confused, Paralyzed, or Poisoned). The Defending Pokémon is now affected by that Special Condition.',
        damage: '',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Fire',
          'Colorless',
          'Colorless'
        ],
        name: 'Roasting Heat',
        text: 'If the Defending Pokémon is Burned, this attack does 40 damage plus 20 more damage.',
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
    id: 'ecard2-170',
    name: 'Octillery',
    nationalPokedexNumber: 224,
    imageUrl: 'https://pkmncards.com/wp-content/uploads/h20-octillery-expedition.jpg',
    imageUrlHiRes: 'https://pkmncards.com/wp-content/uploads/h20-octillery-expedition.jpg',
    types: [
      'Water'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Remoraid',
    ability: {
      name: 'Suction Cups',
      text: 'As long as Octillery is your Active Pokémon, whenever the Defending Pokémon retreats, discard all Energy cards attached to the Defending Pokémon when it goes to the Bench.',
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
    set: 'Aquapolis',
    setCode: 'ecard2',
    attacks: [
      {
        cost: [
          'Water',
          'Colorless',
          'Colorless'
        ],
        name: 'Smokescreen',
        text: 'If the Defending Pokémon tries to attack during your opponent\'s next turn, your opponent flips a coin. If tails, that attack does nothing.',
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
    id: 'ecard2-171',
    name: 'Scizor',
    nationalPokedexNumber: 212,
    imageUrl: 'https://pkmncards.com/wp-content/uploads/h21-scizor-expedition.jpg',
    imageUrlHiRes: 'https://pkmncards.com/wp-content/uploads/h21-scizor-expedition.jpg',
    types: [
      'Metal'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Scyther',
    ability: {
      name: 'Poison Resistance',
      text: 'Scizor can\'t be Poisoned.',
      type: 'Poké-Body'
    },
    hp: '80',
    retreatCost: [
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 2,
    number: 'H21',
    artist: 'Hisao Nakamura',
    rarity: 'Holo Rare',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    attacks: [
      {
        cost: [
          'Metal',
          'Colorless'
        ],
        name: 'Snatch',
        text: 'Before doing damage, you may choose 1 of your opponent\'s Benched Pokémon with no damage counters on it and snatch the Defending Pokémon with it.',
        damage: '20',
        convertedEnergyCost: 2
      },
      {
        cost: [
          'Colorless',
          'Colorless',
          'Colorless'
        ],
        name: 'Heavy Metal',
        text: 'Flip a number of coins equal to the number of Metal Energy attached to Scizor. This attack does 30 damage plus 20 damage times the number of heads.',
        damage: '30+',
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
    id: 'ecard2-172',
    name: 'Slowking',
    nationalPokedexNumber: 199,
    imageUrl: 'https://pkmncards.com/wp-content/uploads/h22-slowking-expedition.jpg',
    imageUrlHiRes: 'https://pkmncards.com/wp-content/uploads/h22-slowking-expedition.jpg',
    types: [
      'Psychic'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Slowpoke',
    hp: '80',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: 'H22',
    artist: 'Aya Kusube',
    rarity: 'Holo Rare',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Bursting Hand',
        text: 'Look at your opponent\'s hand. This attack does 10 damage times the number of Energy cards there.',
        damage: '10×',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Psychic',
          'Colorless',
          'Colorless'
        ],
        name: 'Shuffle Attack',
        text: 'Look at a number of cards on top of your opponent\'s deck equal to the number of Energy cards attached to the Defending Pokémon. Put those cards in any order, and then put them back on top of your opponent\'s deck.',
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
    id: 'ecard2-173',
    name: 'Steelix',
    nationalPokedexNumber: 208,
    imageUrl: 'https://pkmncards.com/wp-content/uploads/h23-steelix-expedition.jpg',
    imageUrlHiRes: 'https://pkmncards.com/wp-content/uploads/h23-steelix-expedition.jpg',
    types: [
      'Metal'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Onix',
    hp: '100',
    retreatCost: [
      'Colorless',
      'Colorless',
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 4,
    number: 'H23',
    artist: 'Hajime Kusajima',
    rarity: 'Holo Rare',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    attacks: [
      {
        cost: [
          'Colorless',
          'Colorless'
        ],
        name: 'Earth Rift',
        text: 'This attack does 10 damage to each of your opponent\'s Benched Pokémon. (Don\'t apply Weakness or Resistance for Benched Pokémon.) Then, flip a coin. If tails, this attack can\'t be used during your next turn.',
        damage: '10',
        convertedEnergyCost: 2
      },
      {
        cost: [
          'Metal',
          'Metal',
          'Colorless',
          'Colorless'
        ],
        name: 'Iron Smash',
        text: 'Flip 2 coins. If both are heads, this attack does 50 damage plus 20 more damage. If both are tails, this attack does nothing. If 1 is heads and 1 is tails, this attack just does 50 damage.',
        damage: '50+',
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
    id: 'ecard2-174',
    name: 'Sudowoodo',
    nationalPokedexNumber: 185,
    imageUrl: 'https://pkmncards.com/wp-content/uploads/h24-sudowoodo-expedition.jpg',
    imageUrlHiRes: 'https://pkmncards.com/wp-content/uploads/h24-sudowoodo-expedition.jpg',
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
    number: 'H24',
    artist: 'Kagemaru Himeno',
    rarity: 'Holo Rare',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Copy',
        text: 'Choose 1 of the Defending Pokémon\'s attacks. Copy copies that attack. This attack does nothing if Sudowoodo doesn\'t have the Energy necessary to use that attack. (You must still do anything else required in order to use that attack.)',
        damage: '',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Fighting'
        ],
        name: 'Energy Draw',
        text: 'Search your deck for a basic Energy card and attach it to Sudowoodo. Shuffle your deck afterward.',
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
    id: 'ecard2-175',
    name: 'Suicune',
    nationalPokedexNumber: 245,
    imageUrl: 'https://pkmncards.com/wp-content/uploads/h25-suicune-expedition.jpg',
    imageUrlHiRes: 'https://pkmncards.com/wp-content/uploads/h25-suicune-expedition.jpg',
    types: [
      'Water'
    ],
    supertype: 'Pokémon',
    subtype: 'Basic',
    ability: {
      name: 'Pure Body',
      text: 'To attach a Water Energy card from your hand to Suicune, you must discard an Energy card attached to Suicune. (Attach the Water Energy, and then discard an Energy card from Suicune.)',
      type: 'Poké-Body'
    },
    hp: '70',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: 'H25',
    artist: 'Atsuko Nishida',
    rarity: 'Holo Rare',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    attacks: [
      {
        cost: [
          'Water',
          'Colorless',
          'Colorless'
        ],
        name: 'Hypno Wave',
        text: 'Flip a coin. If heads, this attack does 30 damage plus 20 more damage. If tails, this attack does 30 damage and the Defending Pokémon is now Asleep.',
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
    id: 'ecard2-176',
    name: 'Tentacruel',
    nationalPokedexNumber: 73,
    imageUrl: 'https://pkmncards.com/wp-content/uploads/h26-tentacruel-expedition.jpg',
    imageUrlHiRes: 'https://pkmncards.com/wp-content/uploads/h26-tentacruel-expedition.jpg',
    types: [
      'Water'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Tentacool',
    ability: {
      name: 'Strange Tentacles',
      text: 'Once during your turn (before your attack), as long as the number of Energy cards attached to the Defending Pokémon is less than the number of Energy cards attached to your Active Pokémon, you may choose an Energy card, if any, in your opponent\'s discard pile and attach it to the Defending Pokémon. This power can\'t be used if Tentacruel is affected by a Special Condition.',
      type: 'Poké-Power'
    },
    hp: '70',
    number: 'H26',
    artist: 'Hajime Kusajima',
    rarity: 'Holo Rare',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    attacks: [
      {
        cost: [
          'Water',
          'Colorless'
        ],
        name: 'Poison Sting',
        text: 'Flip a coin. If heads, the Defending Pokémon is now Poisoned.',
        damage: '',
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
    id: 'ecard2-177',
    name: 'Togetic',
    nationalPokedexNumber: 176,
    imageUrl: 'https://pkmncards.com/wp-content/uploads/h27-togetic-expedition.jpg',
    imageUrlHiRes: 'https://pkmncards.com/wp-content/uploads/h27-togetic-expedition.jpg',
    types: [
      'Colorless'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Togepi',
    ability: {
      name: 'Miracle Shift',
      text: 'Once during your turn (before your attack), discard a basic Energy card attached to 1 of your Pokémon. Then, choose a basic Energy card from your discard pile and attach it to that Pokémon. This power can\'t be used if Togetic is affected by a Special Condition.',
      type: 'Poké-Power'
    },
    hp: '60',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: 'H27',
    artist: 'Kagemaru Himeno',
    rarity: 'Holo Rare',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Mini-Metronome',
        text: 'Flip a coin. If heads, choose 1 of the Defending Pokémon\'s attacks. Mini-Metronome copies that attack except for its Energy cost. (You must still do anything else required in order to use that attack.) (No matter what type the Defending Pokémon is, Togetic is still ). Togetic performs that attack.',
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
    id: 'ecard2-178',
    name: 'Tyranitar',
    nationalPokedexNumber: 248,
    imageUrl: 'https://pkmncards.com/wp-content/uploads/h28-tyranitar-expedition.jpg',
    imageUrlHiRes: 'https://pkmncards.com/wp-content/uploads/h28-tyranitar-expedition.jpg',
    types: [
      'Darkness'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 2',
    evolvesFrom: 'Pupitar',
    hp: '120',
    retreatCost: [
      'Colorless',
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 3,
    number: 'H28',
    artist: 'Naoyo Kimura',
    rarity: 'Holo Rare',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    attacks: [
      {
        cost: [
          'Darkness'
        ],
        name: 'Destructive Roar',
        text: 'Flip a coin. If heads, discard 1 Energy card attached to 1 of your opponent\'s Pokémon.',
        damage: '',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Darkness',
          'Colorless',
          'Colorless'
        ],
        name: 'Tail Slap',
        text: '',
        damage: '30',
        convertedEnergyCost: 3
      },
      {
        cost: [
          'Darkness',
          'Darkness',
          'Colorless',
          'Colorless',
          'Colorless'
        ],
        name: 'Gigacrush',
        text: 'Each player discards the top 3 cards from his or her deck.',
        damage: '60',
        convertedEnergyCost: 5
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
    id: 'ecard2-179',
    name: 'Umbreon',
    nationalPokedexNumber: 197,
    imageUrl: 'https://pkmncards.com/wp-content/uploads/h29-umbreon-expedition.jpg',
    imageUrlHiRes: 'https://pkmncards.com/wp-content/uploads/h29-umbreon-expedition.jpg',
    types: [
      'Darkness'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 1',
    evolvesFrom: 'Eevee',
    ability: {
      name: 'Dark Moon',
      text: 'As long as Umbreon is your Active Pokémon and has a Dark Energy attached to it, once during your turn (before your attack), you may look at your opponent\'s hand. Choose from it a number of cards up to the number of Dark Energy attached to Umbreon and shuffle them into your opponent\'s deck. Your opponent then draws the same number of cards from his or her deck. This power can\'t be used if Umbreon is affected by a Special Condition.',
      type: 'Poké-Power'
    },
    hp: '80',
    retreatCost: [
      'Colorless'
    ],
    convertedRetreatCost: 1,
    number: 'H29',
    artist: 'Mitsuhiro Arita',
    rarity: 'Holo Rare',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    attacks: [
      {
        cost: [
          'Colorless',
          'Colorless',
          'Colorless'
        ],
        name: 'Shadow Bind',
        text: 'The Defending Pokémon can\'t retreat during your opponent\'s next turn.',
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
    id: 'ecard2-180',
    name: 'Victreebel',
    nationalPokedexNumber: 71,
    imageUrl: 'https://pkmncards.com/wp-content/uploads/h30-victreebel-expedition.jpg',
    imageUrlHiRes: 'https://pkmncards.com/wp-content/uploads/h30-victreebel-expedition.jpg',
    types: [
      'Grass'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 2',
    evolvesFrom: 'Weepinbell',
    ability: {
      name: 'Fragrance Trap',
      text: 'Once during your turn (before your attack), you may flip a coin. If heads, choose 1 of your opponent\'s Benched Pokémon and switch the Defending Pokémon with it. This power can\'t be used if Victreebel is affected by a Special Condition.',
      type: 'Poké-Power'
    },
    hp: '90',
    retreatCost: [
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 2,
    number: 'H30',
    artist: 'Miki Tanaka',
    rarity: 'Holo Rare',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    attacks: [
      {
        cost: [
          'Grass',
          'Grass',
          'Colorless'
        ],
        name: 'Corrosive Acid',
        text: 'Flip a coin. If heads, the Defending Pokémon is now Burned.',
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
    id: 'ecard2-181',
    name: 'Vileplume',
    nationalPokedexNumber: 45,
    imageUrl: 'https://pkmncards.com/wp-content/uploads/h31-vileplume-expedition.jpg',
    imageUrlHiRes: 'https://pkmncards.com/wp-content/uploads/h31-vileplume-expedition.jpg',
    types: [
      'Grass'
    ],
    supertype: 'Pokémon',
    subtype: 'Stage 2',
    evolvesFrom: 'Gloom',
    hp: '100',
    retreatCost: [
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 2,
    number: 'H31',
    artist: 'Kyoko Umemoto',
    rarity: 'Holo Rare',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    attacks: [
      {
        cost: [
          'Grass'
        ],
        name: 'Poison Scent',
        text: 'Flip a coin. If heads, the Defending Pokémon is now Poisoned and Confused. If tails, the Defending Pokémon is now Poisoned and Asleep.',
        damage: '10',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Colorless',
          'Colorless',
          'Colorless'
        ],
        name: 'Addictive Pollen',
        text: 'Flip a coin. If heads, your opponent can\'t play Supporter cards during his or her next turn.',
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
    id: 'ecard2-182',
    name: 'Zapdos',
    nationalPokedexNumber: 145,
    imageUrl: 'https://pkmncards.com/wp-content/uploads/h32-zapdos-expedition.jpg',
    imageUrlHiRes: 'https://pkmncards.com/wp-content/uploads/h32-zapdos-expedition.jpg',
    types: [
      'Lightning'
    ],
    supertype: 'Pokémon',
    subtype: 'Basic',
    ability: {
      name: 'Anti-Lightning',
      text: 'You can\'t attach Lightning Energy cards to Zapdos from your hand to Zapdos.',
      type: 'Poké-Body'
    },
    hp: '80',
    retreatCost: [
      'Colorless',
      'Colorless'
    ],
    convertedRetreatCost: 2,
    number: 'H32',
    artist: 'Hajime Kusajima',
    rarity: 'Holo Rare',
    series: 'E-Card',
    set: 'Aquapolis',
    setCode: 'ecard2',
    attacks: [
      {
        cost: [
          'Colorless'
        ],
        name: 'Plasma',
        text: 'If there are any Lightning Energy cards in your discard pile, flip a coin. If heads attach 1 of them to Zapdos.',
        damage: '10',
        convertedEnergyCost: 1
      },
      {
        cost: [
          'Lightning',
          'Lightning',
          'Colorless',
          'Colorless'
        ],
        name: 'Lightning Storm',
        text: 'Flip a coin. If tails, put 2 damage counters on Zapdos.',
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
        type: 'Lightning',
        value: '×2'
      }
    ]
  }
]