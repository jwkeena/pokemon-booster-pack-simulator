const neoGenesisCards = [
    {
      id: 'neo1-1',
      name: 'Ampharos',
      nationalPokedexNumber: 181,
      imageUrl: 'https://images.pokemontcg.io/neo1/1.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo1/1_hires.png',
      types: [
        'Lightning'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 2',
      evolvesFrom: 'Flaaffy',
      hp: '80',
      retreatCost: [
        'Colorless',
        'Colorless'
      ],
      convertedRetreatCost: 2,
      number: '1',
      artist: 'Ken Sugimori',
      rarity: 'Holo Rare',
      series: 'Neo',
      set: 'Neo Genesis',
      setCode: 'neo1',
      attacks: [
        {
          cost: [
            'Lightning',
            'Lightning',
            'Lightning'
          ],
          name: 'Gigaspark',
          text: 'Flip a coin. If heads, the Defending Pokémon is now Paralyzed and this attack does 10 damage to each of your opponent\'s Benched Pokémon. (Don\'t apply Weakness and Resistance for Benched Pokémon.)',
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
      id: 'neo1-2',
      name: 'Azumarill',
      nationalPokedexNumber: 184,
      imageUrl: 'https://images.pokemontcg.io/neo1/2.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo1/2_hires.png',
      types: [
        'Water'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 1',
      evolvesFrom: 'Marill',
      hp: '70',
      retreatCost: [
        'Colorless'
      ],
      convertedRetreatCost: 1,
      number: '2',
      artist: 'Ken Sugimori',
      rarity: 'Holo Rare',
      series: 'Neo',
      set: 'Neo Genesis',
      setCode: 'neo1',
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
            'Water',
            'Water',
            'Water'
          ],
          name: 'Bubble Shower',
          text: 'Flip a coin. If heads, the Defending Pokémon is now Paralyzed and this attack does 10 damage to each of your opponent\'s Benched Pokémon. (Don\'t apply Weakness and Resistance for Benched Pokémon.)',
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
      id: 'neo1-3',
      name: 'Bellossom',
      nationalPokedexNumber: 182,
      imageUrl: 'https://images.pokemontcg.io/neo1/3.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo1/3_hires.png',
      types: [
        'Grass'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 2',
      evolvesFrom: 'Gloom',
      hp: '70',
      retreatCost: [
        'Colorless',
        'Colorless'
      ],
      convertedRetreatCost: 2,
      number: '3',
      artist: 'Atsuko Nishida',
      rarity: 'Holo Rare',
      series: 'Neo',
      set: 'Neo Genesis',
      setCode: 'neo1',
      attacks: [
        {
          cost: [
            'Grass'
          ],
          name: 'Sweet Nectar',
          text: 'Flip a coin. If heads, remove all damage counters from 1 of your Pokémon.',
          damage: '',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Grass',
            'Grass',
            'Colorless'
          ],
          name: 'Flower Dance',
          text: 'Does 30 damage times the number of cards with Bellossom in their names that you have in play (including this one).',
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
      id: 'neo1-4',
      name: 'Feraligatr',
      nationalPokedexNumber: 160,
      imageUrl: 'https://images.pokemontcg.io/neo1/4.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo1/4_hires.png',
      types: [
        'Water'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 2',
      evolvesFrom: 'Croconaw',
      ability: {
        name: 'Berserk',
        text: 'When you play Feraligatr from your hand, flip a coin. If heads, discard the top 5 cards from your opponent\'s deck. If tails, discard the top 5 cards from your deck.',
        type: 'Pokémon Power'
      },
      hp: '100',
      retreatCost: [
        'Colorless',
        'Colorless',
        'Colorless'
      ],
      convertedRetreatCost: 3,
      number: '4',
      artist: 'Ken Sugimori',
      rarity: 'Holo Rare',
      series: 'Neo',
      set: 'Neo Genesis',
      setCode: 'neo1',
      attacks: [
        {
          cost: [
            'Water',
            'Water',
            'Water',
            'Water'
          ],
          name: 'Chomp',
          text: 'Flip a number of coins equal to the number of damage counters on Feraligatr. This attack does 50 damage plus 10 more damage for each heads.',
          damage: '50+',
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
      id: 'neo1-5',
      name: 'Feraligatr',
      nationalPokedexNumber: 160,
      imageUrl: 'https://images.pokemontcg.io/neo1/5.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo1/5_hires.png',
      types: [
        'Water'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 2',
      evolvesFrom: 'Croconaw',
      hp: '120',
      retreatCost: [
        'Colorless',
        'Colorless',
        'Colorless'
      ],
      convertedRetreatCost: 3,
      number: '5',
      artist: 'Ken Sugimori',
      rarity: 'Holo Rare',
      series: 'Neo',
      set: 'Neo Genesis',
      setCode: 'neo1',
      attacks: [
        {
          cost: [
            'Water',
            'Water',
            'Water'
          ],
          name: 'Riptide',
          text: 'Does 10 damage plus 10 damage times the number of Water Energy cards in your discard pile. Then, shuffle all Water Energy cards from your discard pile into your deck.',
          damage: '10+',
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
      id: 'neo1-6',
      name: 'Heracross',
      nationalPokedexNumber: 214,
      imageUrl: 'https://images.pokemontcg.io/neo1/6.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo1/6_hires.png',
      types: [
        'Grass'
      ],
      supertype: 'Pokémon',
      subtype: 'Basic',
      ability: {
        name: 'Final Blow',
        text: 'If Heracross\'s remaining HP are 20 or less, you may make its Megahorn attack\'s base damage 120 instead of 60. This power can\'t be used if Heracross is Asleep, Confused, or Paralyzed.',
        type: 'Pokémon Power'
      },
      hp: '60',
      retreatCost: [
        'Colorless',
        'Colorless'
      ],
      convertedRetreatCost: 2,
      number: '6',
      artist: 'Ken Sugimori',
      rarity: 'Holo Rare',
      series: 'Neo',
      set: 'Neo Genesis',
      setCode: 'neo1',
      attacks: [
        {
          cost: [
            'Grass',
            'Grass',
            'Grass'
          ],
          name: 'Megahorn',
          text: 'Flip a coin. If tails, this attack does nothing.',
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
      id: 'neo1-7',
      name: 'Jumpluff',
      nationalPokedexNumber: 189,
      imageUrl: 'https://images.pokemontcg.io/neo1/7.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo1/7_hires.png',
      types: [
        'Grass'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 2',
      evolvesFrom: 'Skiploom',
      hp: '70',
      number: '7',
      artist: 'Atsuko Nishida',
      rarity: 'Holo Rare',
      series: 'Neo',
      set: 'Neo Genesis',
      setCode: 'neo1',
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
            'Grass'
          ],
          name: 'Leech Seed',
          text: 'If this attack damages the Defending Pokémon (after applying Weakness and Resistance), remove 1 damage counter from Jumpluff, if it has any.',
          damage: '20',
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
          type: 'Fire',
          value: '×2'
        }
      ]
    },
    {
      id: 'neo1-8',
      name: 'Kingdra',
      nationalPokedexNumber: 230,
      imageUrl: 'https://images.pokemontcg.io/neo1/8.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo1/8_hires.png',
      types: [
        'Water'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 2',
      evolvesFrom: 'Seadra',
      hp: '90',
      retreatCost: [
        'Colorless',
        'Colorless'
      ],
      convertedRetreatCost: 2,
      number: '8',
      artist: 'Ken Sugimori',
      rarity: 'Holo Rare',
      series: 'Neo',
      set: 'Neo Genesis',
      setCode: 'neo1',
      attacks: [
        {
          cost: [
            'Water',
            'Water',
            'Colorless'
          ],
          name: 'Agility',
          text: 'Flip a coin. If heads, during your opponent\'s next turn, prevent all effects of attacks, including damage, done to Kingdra.',
          damage: '30',
          convertedEnergyCost: 3
        },
        {
          cost: [
            'Water',
            'Water',
            'Water',
            'Water'
          ],
          name: 'Dragon Tornado',
          text: 'If this attack doesn\'t Knock Out the Defending Pokémon, and if there are any Pokémon on your opponent\'s Bench, choose 1 of them and switch it with the Defending Pokémon.',
          damage: '50',
          convertedEnergyCost: 4
        }
      ]
    },
    {
      id: 'neo1-9',
      name: 'Lugia',
      nationalPokedexNumber: 249,
      imageUrl: 'https://images.pokemontcg.io/neo1/9.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo1/9_hires.png',
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
      number: '9',
      artist: 'Hironobu Yoshida',
      rarity: 'Holo Rare',
      series: 'Neo',
      set: 'Neo Genesis',
      setCode: 'neo1',
      attacks: [
        {
          cost: [
            'Fire',
            'Water',
            'Lightning'
          ],
          name: 'Elemental Blast',
          text: 'Discard a Fire Energy card, a Water Energy card, and a Lightning Energy card attached to Lugia in order to use this attack.',
          damage: '90',
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
      id: 'neo1-10',
      name: 'Meganium',
      nationalPokedexNumber: 154,
      imageUrl: 'https://images.pokemontcg.io/neo1/10.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo1/10_hires.png',
      types: [
        'Grass'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 2',
      evolvesFrom: 'Bayleef',
      ability: {
        name: 'Herbal Scent',
        text: 'When you play Meganium from your hand, you may flip a coin. If heads, remove all damage counters from all Grass Pokémon in play.',
        type: 'Pokémon Power'
      },
      hp: '100',
      retreatCost: [
        'Colorless',
        'Colorless',
        'Colorless'
      ],
      convertedRetreatCost: 3,
      number: '10',
      artist: 'Ken Sugimori',
      rarity: 'Holo Rare',
      series: 'Neo',
      set: 'Neo Genesis',
      setCode: 'neo1',
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
      id: 'neo1-11',
      name: 'Meganium',
      nationalPokedexNumber: 154,
      imageUrl: 'https://images.pokemontcg.io/neo1/11.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo1/11_hires.png',
      types: [
        'Grass'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 2',
      evolvesFrom: 'Bayleef',
      ability: {
        name: 'Wild Growth',
        text: 'As long as Meganium is in play, each Grass Energy card attached to your Grass Pokémon instead provides GrassGrass. This power stops working while Meganium is Asleep, Confused, or Paralyzed.',
        type: 'Pokémon Power'
      },
      hp: '100',
      retreatCost: [
        'Colorless',
        'Colorless',
        'Colorless'
      ],
      convertedRetreatCost: 3,
      number: '11',
      artist: 'Ken Sugimori',
      rarity: 'Holo Rare',
      series: 'Neo',
      set: 'Neo Genesis',
      setCode: 'neo1',
      attacks: [
        {
          cost: [
            'Grass',
            'Grass',
            'Grass',
            'Grass'
          ],
          name: 'Soothing Scent',
          text: 'The Defending Pokémon is now Asleep.',
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
      id: 'neo1-12',
      name: 'Pichu',
      nationalPokedexNumber: 172,
      imageUrl: 'https://images.pokemontcg.io/neo1/12.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo1/12_hires.png',
      types: [
        'Lightning'
      ],
      supertype: 'Pokémon',
      subtype: 'Basic',
      hp: '30',
      number: '12',
      artist: 'Ken Sugimori',
      rarity: 'Holo Rare',
      series: 'Neo',
      set: 'Neo Genesis',
      setCode: 'neo1',
      text: [
        'If this Baby Pokémon is your Active Pokémon and your opponent tries to attack, your opponent flips a coin (before doing anything else required in order to use that attack). If tails, your opponent\'s turn ends without an attack.'
      ],
      attacks: [
        {
          cost: [
            'Colorless'
          ],
          name: 'Zzzap',
          text: 'Does 20 damage to each Pokémon in play that has a Pokémon Power. Don\'t apply Weakness and Resistance.',
          damage: '',
          convertedEnergyCost: 1
        }
      ]
    },
    {
      id: 'neo1-13',
      name: 'Skarmory',
      nationalPokedexNumber: 227,
      imageUrl: 'https://images.pokemontcg.io/neo1/13.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo1/13_hires.png',
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
      number: '13',
      artist: 'Ken Sugimori',
      rarity: 'Holo Rare',
      series: 'Neo',
      set: 'Neo Genesis',
      setCode: 'neo1',
      attacks: [
        {
          cost: [
            'Colorless'
          ],
          name: 'Claw',
          text: 'Flip a coin. If tails, this attack does nothing.',
          damage: '',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Metal',
            'Colorless',
            'Colorless'
          ],
          name: 'Steel Wing',
          text: 'Flip a coin. If heads, all damage done by attacks to Skarmory during your opponent\'s next turn is reduced by 20 (after applying Weakness and Resistance).',
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
      id: 'neo1-14',
      name: 'Slowking',
      nationalPokedexNumber: 199,
      imageUrl: 'https://images.pokemontcg.io/neo1/14.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo1/14_hires.png',
      types: [
        'Psychic'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 1',
      evolvesFrom: 'Slowpoke',
      ability: {
        name: 'Mind Games',
        text: 'Whenever your opponent plays a Trainer card, you may flip a coin. If heads, that card does nothing. Put it on top of your opponent\'s deck. This power can\'t be used if Slowking is Asleep, Confused, or Paralyzed.',
        type: 'Pokémon Power'
      },
      hp: '80',
      retreatCost: [
        'Colorless',
        'Colorless',
        'Colorless'
      ],
      convertedRetreatCost: 3,
      number: '14',
      artist: 'Ken Sugimori',
      rarity: 'Holo Rare',
      series: 'Neo',
      set: 'Neo Genesis',
      setCode: 'neo1',
      attacks: [
        {
          cost: [
            'Psychic',
            'Psychic',
            'Psychic'
          ],
          name: 'Mind Blast',
          text: 'Flip a coin. If heads, this attack does 20 damage plus 10 more damage and the Defending Pokémon is now Confused. If tails, this attack does 20 damage.',
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
      id: 'neo1-15',
      name: 'Steelix',
      nationalPokedexNumber: 208,
      imageUrl: 'https://images.pokemontcg.io/neo1/15.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo1/15_hires.png',
      types: [
        'Metal'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 1',
      evolvesFrom: 'Onix',
      hp: '110',
      retreatCost: [
        'Colorless',
        'Colorless',
        'Colorless',
        'Colorless'
      ],
      convertedRetreatCost: 4,
      number: '15',
      artist: 'Ken Sugimori',
      rarity: 'Holo Rare',
      series: 'Neo',
      set: 'Neo Genesis',
      setCode: 'neo1',
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
            'Metal',
            'Colorless',
            'Colorless'
          ],
          name: 'Tail Crush',
          text: 'Flip a coin. If heads, this attack does 30 damage plus 20 more damage; if tails, this attack does 30 damage.',
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
      id: 'neo1-16',
      name: 'Togetic',
      nationalPokedexNumber: 176,
      imageUrl: 'https://images.pokemontcg.io/neo1/16.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo1/16_hires.png',
      types: [
        'Colorless'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 1',
      evolvesFrom: 'Togepi',
      hp: '60',
      number: '16',
      artist: 'Ken Sugimori',
      rarity: 'Holo Rare',
      series: 'Neo',
      set: 'Neo Genesis',
      setCode: 'neo1',
      attacks: [
        {
          cost: [
            'Colorless'
          ],
          name: 'Super Metronome',
          text: 'Flip a coin. If heads, choose an attack of 1 of your opponent\'s Pokémon. Super Metronome copies that attack except for its Energy cost. (You must still do anything else in order to use that attack.) (No matter what type the Defending Pokémon is, Togetic\'s type is still .) Togetic performs that attack. (Togetic can make that attack even if it does not have the appropriate number or type of Energy attached to it necessary to make the attack.)',
          damage: '',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Colorless',
            'Colorless',
            'Colorless'
          ],
          name: 'Fly',
          text: 'Flip a coin. If heads, during your opponent\'s next turn, prevent all effects of attacks, including damage, done to Togetic; if tails, this attack does nothing (not even damage).',
          damage: '30',
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
      id: 'neo1-17',
      name: 'Typhlosion',
      nationalPokedexNumber: 157,
      imageUrl: 'https://images.pokemontcg.io/neo1/17.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo1/17_hires.png',
      types: [
        'Fire'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 2',
      evolvesFrom: 'Quilava',
      ability: {
        name: 'Fire Recharge',
        text: 'Once during your turn (before your attack), you may flip a coin. If heads, attach a Fire Energy card from your discard pile to 1 of your Fire Pokémon. This power can\'t be used if Typhlosion is Asleep, Confused, or Paralyzed.',
        type: 'Pokémon Power'
      },
      hp: '100',
      retreatCost: [
        'Colorless',
        'Colorless'
      ],
      convertedRetreatCost: 2,
      number: '17',
      artist: 'Shin-ichi Yoshida',
      rarity: 'Holo Rare',
      series: 'Neo',
      set: 'Neo Genesis',
      setCode: 'neo1',
      attacks: [
        {
          cost: [
            'Fire',
            'Fire',
            'Fire',
            'Fire'
          ],
          name: 'Flame Burst',
          text: 'Flip a coin. If heads, this attack does 60 damage plus 20 more damage and does 20 damage to Typhlosion. If tails, this attack does 60 damage.',
          damage: '60+',
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
      id: 'neo1-18',
      name: 'Typhlosion',
      nationalPokedexNumber: 157,
      imageUrl: 'https://images.pokemontcg.io/neo1/18.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo1/18_hires.png',
      types: [
        'Fire'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 2',
      evolvesFrom: 'Quilava',
      ability: {
        name: 'Fire Boost',
        text: 'When you play Typhlosion from your hand, you may flip a coin. If heads, search your deck for up to 4 Fire Energy cards and attach them to Typhlosion. Shuffle your deck afterward.',
        type: 'Pokémon Power'
      },
      hp: '100',
      retreatCost: [
        'Colorless',
        'Colorless'
      ],
      convertedRetreatCost: 2,
      number: '18',
      artist: 'Ken Sugimori',
      rarity: 'Holo Rare',
      series: 'Neo',
      set: 'Neo Genesis',
      setCode: 'neo1',
      attacks: [
        {
          cost: [
            'Fire',
            'Fire',
            'Fire',
            'Fire'
          ],
          name: 'Flame Wheel',
          text: 'Discard 3 Energy cards attached to Typhlosion in order to use this attack. Do 20 damage to each Benched Pokémon (yours and your opponent\'s). (Don\'t apply Weakness and Resistance for Benched Pokémon.)',
          damage: '80',
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
      id: 'neo1-19',
      name: 'Metal Energy',
      imageUrl: 'https://images.pokemontcg.io/neo1/19.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo1/19_hires.png',
      supertype: 'Energy',
      subtype: 'Special',
      number: '19',
      artist: 'Milky Isobe',
      rarity: 'Holo Rare',
      series: 'Neo',
      set: 'Neo Genesis',
      setCode: 'neo1',
      text: [
        'Damage done to Pokémon Metal Energy is attached to is reduced by 10 (after applying Weakness and Resistance). If the Pokémon Metal Energy is attached to isn\'t Metal, whenever it damages a Pokémon, reduce that damage by 10 (before applying Weakness and Resistance). Metal Energy provides Metal Energy. (Doesn\'t count as a basic Energy card.)'
      ]
    },
    {
      id: 'neo1-20',
      name: 'Cleffa',
      nationalPokedexNumber: 173,
      imageUrl: 'https://images.pokemontcg.io/neo1/20.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo1/20_hires.png',
      types: [
        'Colorless'
      ],
      supertype: 'Pokémon',
      subtype: 'Basic',
      hp: '30',
      number: '20',
      artist: 'Kagemaru Himeno',
      rarity: 'Rare',
      series: 'Neo',
      set: 'Neo Genesis',
      setCode: 'neo1',
      text: [
        'If this Baby Pokémon is your Active Pokémon and your opponent tries to attack, your opponent flips a coin (before doing anything else required in order to use that attack). If tails, your opponent\'s turn ends without an attack.'
      ],
      attacks: [
        {
          cost: [
            'Colorless'
          ],
          name: 'Eeeeeeek',
          text: 'Shuffle your hand into your deck, then draw 7 cards.',
          damage: '',
          convertedEnergyCost: 1
        }
      ]
    },
    {
      id: 'neo1-21',
      name: 'Donphan',
      nationalPokedexNumber: 232,
      imageUrl: 'https://images.pokemontcg.io/neo1/21.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo1/21_hires.png',
      types: [
        'Fighting'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 1',
      evolvesFrom: 'Phanpy',
      hp: '70',
      retreatCost: [
        'Colorless',
        'Colorless',
        'Colorless'
      ],
      convertedRetreatCost: 3,
      number: '21',
      artist: 'Ken Sugimori',
      rarity: 'Rare',
      series: 'Neo',
      set: 'Neo Genesis',
      setCode: 'neo1',
      attacks: [
        {
          cost: [
            'Fighting'
          ],
          name: 'Flail',
          text: 'Does 10 damage times the number of damage counters on Donphan.',
          damage: '10×',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Fighting',
            'Fighting',
            'Fighting'
          ],
          name: 'Rapid Spin',
          text: 'If your opponent has any Benched Pokémon, he or she chooses 1 of them and switches it with his or her Active Pokémon, then, if you have any Benched Pokémon, you switch 1 of them with your Active Pokémon. (Do the damage before switching the Pokémon.)',
          damage: '50',
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
      id: 'neo1-22',
      name: 'Elekid',
      nationalPokedexNumber: 239,
      imageUrl: 'https://images.pokemontcg.io/neo1/22.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo1/22_hires.png',
      types: [
        'Lightning'
      ],
      supertype: 'Pokémon',
      subtype: 'Basic',
      ability: {
        name: 'Playful Punch',
        text: 'Once during your turn (before your attack), you may flip a coin. If heads, do 20 damage to your opponent\'s Active Pokémon. (Apply Weakness and Resistance.) Either way, this ends your turn. This power can\'t be used if Elekid is Asleep, Confused, or Paralyzed.',
        type: 'Poké-Power'
      },
      hp: '30',
      number: '22',
      artist: 'Miki Tanaka',
      rarity: 'Rare',
      series: 'Neo',
      set: 'Neo Genesis',
      setCode: 'neo1',
      text: [
        'If this Baby Pokémon is your Active Pokémon and your opponent tries to attack, your opponent flips a coin (before doing anything else required in order to use that attack). If tails, your opponent\'s turn ends without an attack.'
      ]
    },
    {
      id: 'neo1-23',
      name: 'Magby',
      nationalPokedexNumber: 240,
      imageUrl: 'https://images.pokemontcg.io/neo1/23.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo1/23_hires.png',
      types: [
        'Fire'
      ],
      supertype: 'Pokémon',
      subtype: 'Basic',
      hp: '30',
      number: '23',
      artist: 'Ken Sugimori',
      rarity: 'Rare',
      series: 'Neo',
      set: 'Neo Genesis',
      setCode: 'neo1',
      text: [
        'If this Baby Pokémon is your Active Pokémon and your opponent tries to attack, your opponent flips a coin (before doing anything else required in order to use that attack). If tails, your opponent\'s turn ends without an attack.'
      ],
      attacks: [
        {
          cost: [
            'Colorless'
          ],
          name: 'Sputter',
          text: 'All Pokémon Powers stop working until the end of your next turn.',
          damage: '10',
          convertedEnergyCost: 1
        }
      ]
    },
    {
      id: 'neo1-24',
      name: 'Murkrow',
      nationalPokedexNumber: 198,
      imageUrl: 'https://images.pokemontcg.io/neo1/24.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo1/24_hires.png',
      types: [
        'Darkness'
      ],
      supertype: 'Pokémon',
      subtype: 'Basic',
      hp: '50',
      number: '24',
      artist: 'Shin-ichi Yoshida',
      rarity: 'Rare',
      series: 'Neo',
      set: 'Neo Genesis',
      setCode: 'neo1',
      attacks: [
        {
          cost: [
            'Darkness'
          ],
          name: 'Mean Look',
          text: 'The Defending Pokémon can\'t retreat as long as Murkrow remains your Active Pokémon. (Benching or evolving either Pokémon ends this effect.)',
          damage: '',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Darkness',
            'Colorless'
          ],
          name: 'Feint Attack',
          text: 'Choose 1 of your opponent\'s Pokémon. This attack does 20 damage to that Pokémon. This attack\'s damage isn\'t affected by Weakness, Resistance, Pokémon Powers, or any other effects on the Defending Pokémon.',
          damage: '20',
          convertedEnergyCost: 2
        }
      ],
      resistances: [
        {
          type: 'Psychic',
          value: '-30'
        }
      ]
    },
    {
      id: 'neo1-25',
      name: 'Sneasel',
      nationalPokedexNumber: 215,
      imageUrl: 'https://images.pokemontcg.io/neo1/25.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo1/25_hires.png',
      types: [
        'Darkness'
      ],
      supertype: 'Pokémon',
      subtype: 'Basic',
      hp: '60',
      number: '25',
      artist: 'Ken Sugimori',
      rarity: 'Rare',
      series: 'Neo',
      set: 'Neo Genesis',
      setCode: 'neo1',
      attacks: [
        {
          cost: [
            'Colorless'
          ],
          name: 'Fury Swipes',
          text: 'Flip 3 coins. This attack does 10 damage times the number of heads.',
          damage: '10×',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Darkness',
            'Darkness'
          ],
          name: 'Beat Up',
          text: 'Flip a coin for each of your Pokémon in play (including this one). This attack does 20 damage times the number of heads.',
          damage: '20×',
          convertedEnergyCost: 2
        }
      ],
      resistances: [
        {
          type: 'Psychic',
          value: '-30'
        }
      ]
    },
    {
      id: 'neo1-26',
      name: 'Aipom',
      nationalPokedexNumber: 190,
      imageUrl: 'https://images.pokemontcg.io/neo1/26.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo1/26_hires.png',
      types: [
        'Colorless'
      ],
      supertype: 'Pokémon',
      subtype: 'Basic',
      hp: '40',
      number: '26',
      artist: 'Hironobu Yoshida',
      rarity: 'Uncommon',
      series: 'Neo',
      set: 'Neo Genesis',
      setCode: 'neo1',
      attacks: [
        {
          cost: [
            'Colorless'
          ],
          name: 'Pilfer',
          text: 'Shuffle Aipom and all cards attached to it into your deck. Flip a coin. If heads, shuffle a card from your discard pile into your deck.',
          damage: '',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Colorless'
          ],
          name: 'Tail Rap',
          text: 'Flip 2 coins. This attack does 10 damage times the number of heads.',
          damage: '10×',
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
      id: 'neo1-27',
      name: 'Ariados',
      nationalPokedexNumber: 168,
      imageUrl: 'https://images.pokemontcg.io/neo1/27.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo1/27_hires.png',
      types: [
        'Grass'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 1',
      evolvesFrom: 'Spinarak',
      hp: '60',
      retreatCost: [
        'Colorless'
      ],
      convertedRetreatCost: 1,
      number: '27',
      artist: 'Ken Sugimori',
      rarity: 'Uncommon',
      series: 'Neo',
      set: 'Neo Genesis',
      setCode: 'neo1',
      attacks: [
        {
          cost: [
            'Grass'
          ],
          name: 'Spider Web',
          text: 'Flip a coin. If heads, the Defending Pokémon can\'t retreat. (Benching or evolving that Pokémon ends this effect.)',
          damage: '',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Grass',
            'Grass',
            'Grass'
          ],
          name: 'Poison Bite',
          text: 'If this attack damages the Defending Pokémon, the Defending Pokémon is now Poisoned and you remove a number of damage counters from Ariados equal to half that damage (rounded up to the nearest 10). If Ariados has fewer damage counters than that, remove all of them.',
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
      id: 'neo1-28',
      name: 'Bayleef',
      nationalPokedexNumber: 153,
      imageUrl: 'https://images.pokemontcg.io/neo1/28.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo1/28_hires.png',
      types: [
        'Grass'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 1',
      evolvesFrom: 'Chikorita',
      hp: '70',
      number: '28',
      artist: 'Ken Sugimori',
      rarity: 'Uncommon',
      series: 'Neo',
      set: 'Neo Genesis',
      setCode: 'neo1',
      attacks: [
        {
          cost: [
            'Grass',
            'Colorless'
          ],
          name: 'Poisonpowder',
          text: 'Flip a coin. If heads, the Defending Pokémon is now Poisoned.',
          damage: '',
          convertedEnergyCost: 2
        },
        {
          cost: [
            'Grass',
            'Grass',
            'Colorless'
          ],
          name: 'Pollen Shield',
          text: 'During your opponent\'s next turn, Bayleef can\'t become Asleep, Confused, Paralyzed, or Poisoned. (All other effects of attacks, Pokémon Powers, and Trainer cards still happen.)',
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
      id: 'neo1-29',
      name: 'Bayleef',
      nationalPokedexNumber: 153,
      imageUrl: 'https://images.pokemontcg.io/neo1/29.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo1/29_hires.png',
      types: [
        'Grass'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 1',
      evolvesFrom: 'Chikorita',
      hp: '80',
      retreatCost: [
        'Colorless',
        'Colorless'
      ],
      convertedRetreatCost: 2,
      number: '29',
      artist: 'Ken Sugimori',
      rarity: 'Uncommon',
      series: 'Neo',
      set: 'Neo Genesis',
      setCode: 'neo1',
      attacks: [
        {
          cost: [
            'Grass'
          ],
          name: 'Sweet Scent',
          text: 'Flip a coin. If heads and if any of your Pokémon have any damage counters on them, then remove 2 damage counters from 1 of them (or 1 if it only has 1). If tails and if any of your opponent\'s Pokémon have any damage counters on them, choose 1 of them and remove 2 damage counters from it (or 1 if it only has 1).',
          damage: '',
          convertedEnergyCost: 1
        },
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
      id: 'neo1-30',
      name: 'Clefairy',
      nationalPokedexNumber: 35,
      imageUrl: 'https://images.pokemontcg.io/neo1/30.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo1/30_hires.png',
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
      number: '30',
      artist: 'Sumiyoshi Kizuki',
      rarity: 'Uncommon',
      series: 'Neo',
      set: 'Neo Genesis',
      setCode: 'neo1',
      attacks: [
        {
          cost: [
            'Colorless',
            'Colorless'
          ],
          name: 'Doubleslap',
          text: 'Flip 2 coins. This attack does 10 damage times the number of heads.',
          damage: '10×',
          convertedEnergyCost: 2
        },
        {
          cost: [
            'Colorless',
            'Colorless',
            'Colorless'
          ],
          name: 'Squaredance',
          text: 'Flip a number of coins equal to the total number of Pokémon in play. For each heads, you may search your deck for a basic Energy card, show it to your opponent, and put it into your hand. Shuffle your deck afterward.',
          damage: '',
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
      id: 'neo1-31',
      name: 'Croconaw',
      nationalPokedexNumber: 159,
      imageUrl: 'https://images.pokemontcg.io/neo1/31.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo1/31_hires.png',
      types: [
        'Water'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 1',
      evolvesFrom: 'Totodile',
      hp: '70',
      retreatCost: [
        'Colorless',
        'Colorless'
      ],
      convertedRetreatCost: 2,
      number: '31',
      artist: 'Ken Sugimori',
      rarity: 'Uncommon',
      series: 'Neo',
      set: 'Neo Genesis',
      setCode: 'neo1',
      attacks: [
        {
          cost: [
            'Colorless'
          ],
          name: 'Screech',
          text: 'Until the end of your next turn, if an attack damages the Defending Pokémon (after applying Weakness and Resistance), that attack does 20 more damage to the Defending Pokémon.',
          damage: '',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Water',
            'Water',
            'Colorless'
          ],
          name: 'Jaw Clamp',
          text: 'Until the end of your opponent\'s next turn, as long as Croconaw is your Active Pokémon, the Defending Pokémon can\'t retreat, and if the effect of an attack, Pokémon Power, or Trainer card would change that player\'s Active Pokémon, that part of the effect does nothing.',
          damage: '30',
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
      id: 'neo1-32',
      name: 'Croconaw',
      nationalPokedexNumber: 159,
      imageUrl: 'https://images.pokemontcg.io/neo1/32.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo1/32_hires.png',
      types: [
        'Water'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 1',
      evolvesFrom: 'Totodile',
      hp: '80',
      retreatCost: [
        'Colorless',
        'Colorless'
      ],
      convertedRetreatCost: 2,
      number: '32',
      artist: 'Ken Sugimori',
      rarity: 'Uncommon',
      series: 'Neo',
      set: 'Neo Genesis',
      setCode: 'neo1',
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
            'Water',
            'Water',
            'Colorless'
          ],
          name: 'Sweep Away',
          text: 'Discard the top 3 cards from your deck.',
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
      id: 'neo1-33',
      name: 'Electabuzz',
      nationalPokedexNumber: 125,
      imageUrl: 'https://images.pokemontcg.io/neo1/33.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo1/33_hires.png',
      types: [
        'Lightning'
      ],
      supertype: 'Pokémon',
      subtype: 'Basic',
      hp: '70',
      retreatCost: [
        'Colorless'
      ],
      convertedRetreatCost: 1,
      number: '33',
      artist: 'Shin-ichi Yoshida',
      rarity: 'Uncommon',
      series: 'Neo',
      set: 'Neo Genesis',
      setCode: 'neo1',
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
            'Lightning',
            'Lightning',
            'Lightning'
          ],
          name: 'Swift',
          text: 'This attack\'s damage isn\'t affected by Weakness, Resistance, Pokémon Powers, or any other effects on the Defending Pokémon.',
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
      id: 'neo1-34',
      name: 'Flaaffy',
      nationalPokedexNumber: 180,
      imageUrl: 'https://images.pokemontcg.io/neo1/34.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo1/34_hires.png',
      types: [
        'Lightning'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 1',
      evolvesFrom: 'Mareep',
      hp: '60',
      retreatCost: [
        'Colorless'
      ],
      convertedRetreatCost: 1,
      number: '34',
      artist: 'Ken Sugimori',
      rarity: 'Uncommon',
      series: 'Neo',
      set: 'Neo Genesis',
      setCode: 'neo1',
      attacks: [
        {
          cost: [
            'Lightning'
          ],
          name: 'Discharge',
          text: 'Discard all Lightning Energy cards attached to Flaaffy in order to use this attack. Flip a number of coins equal to the number of Lightning Energy cards you discarded. This attack does 30 damage times the number of heads.',
          damage: '30×',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Lightning',
            'Lightning'
          ],
          name: 'Electric Current',
          text: 'Take 1 Lightning Energy card attached to Flaaffy and attach it to 1 of your Benched Pokémon. If you have no Benched Pokémon, discard that Energy card.',
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
      id: 'neo1-35',
      name: 'Furret',
      nationalPokedexNumber: 162,
      imageUrl: 'https://images.pokemontcg.io/neo1/35.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo1/35_hires.png',
      types: [
        'Colorless'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 1',
      evolvesFrom: 'Sentret',
      hp: '60',
      retreatCost: [
        'Colorless'
      ],
      convertedRetreatCost: 1,
      number: '35',
      artist: 'Ken Sugimori',
      rarity: 'Uncommon',
      series: 'Neo',
      set: 'Neo Genesis',
      setCode: 'neo1',
      attacks: [
        {
          cost: [
            'Colorless',
            'Colorless'
          ],
          name: 'Quick Attack',
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
          name: 'Slam',
          text: 'Flip 2 coins. This attack does 30 damage times the number of heads.',
          damage: '30×',
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
      id: 'neo1-36',
      name: 'Gloom',
      nationalPokedexNumber: 44,
      imageUrl: 'https://images.pokemontcg.io/neo1/36.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo1/36_hires.png',
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
      number: '36',
      artist: 'Mitsuhiro Arita',
      rarity: 'Uncommon',
      series: 'Neo',
      set: 'Neo Genesis',
      setCode: 'neo1',
      attacks: [
        {
          cost: [
            'Grass',
            'Colorless'
          ],
          name: 'Strange Powder',
          text: 'Flip a coin. If heads, the Defending Pokémon is now Confused; if tails, the Defending Pokémon is now Asleep.',
          damage: '20',
          convertedEnergyCost: 2
        },
        {
          cost: [
            'Grass',
            'Grass',
            'Colorless'
          ],
          name: 'Sticky Nectar',
          text: 'Flip a coin. If heads, this attack does 20 damage plus 10 more damage and, until the end of your opponent\'s next turn, as long as Gloom is your Active Pokémon, the Defending Pokémon can\'t retreat, and if the effect of an attack, Pokémon Power, or Trainer card would change that player\'s Active Pokémon, that part of the effect does nothing. If tails, this attack does 20 damage.',
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
      id: 'neo1-37',
      name: 'Granbull',
      nationalPokedexNumber: 210,
      imageUrl: 'https://images.pokemontcg.io/neo1/37.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo1/37_hires.png',
      types: [
        'Colorless'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 1',
      evolvesFrom: 'Snubbull',
      hp: '70',
      retreatCost: [
        'Colorless',
        'Colorless'
      ],
      convertedRetreatCost: 2,
      number: '37',
      artist: 'Ken Sugimori',
      rarity: 'Uncommon',
      series: 'Neo',
      set: 'Neo Genesis',
      setCode: 'neo1',
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
          name: 'Raging Charge',
          text: 'This attack does 10 damage plus 10 damage for each damage counter on Granbull. Then, Granbull does 20 damage to itself.',
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
      id: 'neo1-38',
      name: 'Lanturn',
      nationalPokedexNumber: 171,
      imageUrl: 'https://images.pokemontcg.io/neo1/38.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo1/38_hires.png',
      types: [
        'Lightning'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 1',
      ability: {
        name: 'Hydroelectric Power',
        text: 'You may make Floodlight do 10 more damage for each Water Energy attached to Lanturn but not used to pay for Floodlight\'s Energy cost. This power can\'t be used if Lanturn is Asleep, Confused, or Paralyzed.',
        type: 'Pokémon Power'
      },
      hp: '70',
      retreatCost: [
        'Colorless',
        'Colorless'
      ],
      convertedRetreatCost: 2,
      number: '38',
      artist: 'Ken Sugimori',
      rarity: 'Uncommon',
      series: 'Neo',
      set: 'Neo Genesis',
      setCode: 'neo1',
      attacks: [
        {
          cost: [
            'Lightning',
            'Lightning'
          ],
          name: 'Floodlight',
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
      id: 'neo1-39',
      name: 'Ledian',
      nationalPokedexNumber: 166,
      imageUrl: 'https://images.pokemontcg.io/neo1/39.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo1/39_hires.png',
      types: [
        'Grass'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 1',
      evolvesFrom: 'Ledyba',
      hp: '60',
      number: '39',
      artist: 'Ken Sugimori',
      rarity: 'Uncommon',
      series: 'Neo',
      set: 'Neo Genesis',
      setCode: 'neo1',
      attacks: [
        {
          cost: [
            'Grass',
            'Grass'
          ],
          name: 'Baton Pass',
          text: 'If you have any Pokémon on your Bench, remove all Energy cards from Ledian and attach them to 1 of those Pokémon, then switch Ledian with that Pokémon.',
          damage: '30',
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
      id: 'neo1-40',
      name: 'Magmar',
      nationalPokedexNumber: 126,
      imageUrl: 'https://images.pokemontcg.io/neo1/40.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo1/40_hires.png',
      types: [
        'Fire'
      ],
      supertype: 'Pokémon',
      subtype: 'Basic',
      hp: '70',
      retreatCost: [
        'Colorless',
        'Colorless'
      ],
      convertedRetreatCost: 2,
      number: '40',
      artist: 'Naoyo Kimura',
      rarity: 'Uncommon',
      series: 'Neo',
      set: 'Neo Genesis',
      setCode: 'neo1',
      attacks: [
        {
          cost: [
            'Colorless',
            'Colorless'
          ],
          name: 'Tail Slap',
          text: '',
          damage: '20',
          convertedEnergyCost: 2
        },
        {
          cost: [
            'Fire',
            'Fire',
            'Colorless'
          ],
          name: 'Magma Punch',
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
      id: 'neo1-41',
      name: 'Miltank',
      nationalPokedexNumber: 241,
      imageUrl: 'https://images.pokemontcg.io/neo1/41.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo1/41_hires.png',
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
      number: '41',
      artist: 'Ken Sugimori',
      rarity: 'Uncommon',
      series: 'Neo',
      set: 'Neo Genesis',
      setCode: 'neo1',
      attacks: [
        {
          cost: [
            'Colorless'
          ],
          name: 'Milk Drink',
          text: 'Flip 2 coins. Remove 2 damage counters times the number of heads from Miltank. If it has fewer damage counters than that, remove all of them.',
          damage: '',
          convertedEnergyCost: 1
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
      id: 'neo1-42',
      name: 'Noctowl',
      nationalPokedexNumber: 164,
      imageUrl: 'https://images.pokemontcg.io/neo1/42.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo1/42_hires.png',
      types: [
        'Colorless'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 1',
      evolvesFrom: 'Hoothoot',
      ability: {
        name: 'Glaring Gaze',
        text: 'Once during your turn (before your attack), you may flip a coin. If heads, look at your opponent\'s hand. If your opponent has any Trainer cards there, choose 1 of them. Your opponent shuffles that card into his or her deck. This power can\'t be used if Noctowl is Asleep, Confused, or Paralyzed.',
        type: 'Pokémon Power'
      },
      hp: '60',
      number: '42',
      artist: 'Ken Sugimori',
      rarity: 'Uncommon',
      series: 'Neo',
      set: 'Neo Genesis',
      setCode: 'neo1',
      attacks: [
        {
          cost: [
            'Colorless',
            'Colorless',
            'Colorless'
          ],
          name: 'Wing Attack',
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
          type: 'Lightning',
          value: '×2'
        }
      ]
    },
    {
      id: 'neo1-43',
      name: 'Phanpy',
      nationalPokedexNumber: 231,
      imageUrl: 'https://images.pokemontcg.io/neo1/43.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo1/43_hires.png',
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
      number: '43',
      artist: 'Ken Sugimori',
      rarity: 'Uncommon',
      series: 'Neo',
      set: 'Neo Genesis',
      setCode: 'neo1',
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
            'Fighting'
          ],
          name: 'Endure',
          text: 'Flip a coin. If heads, then if, during your opponent\'s next turn, Phanpy would be Knocked Out by an attack, Phanpy isn\'t Knocked Out and its remaining HP become 10 instead.',
          damage: '',
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
      id: 'neo1-44',
      name: 'Piloswine',
      nationalPokedexNumber: 221,
      imageUrl: 'https://images.pokemontcg.io/neo1/44.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo1/44_hires.png',
      types: [
        'Water'
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
      number: '44',
      artist: 'Ken Sugimori',
      rarity: 'Uncommon',
      series: 'Neo',
      set: 'Neo Genesis',
      setCode: 'neo1',
      attacks: [
        {
          cost: [
            'Water',
            'Water'
          ],
          name: 'Freeze',
          text: 'Flip a coin. If heads, the Defending Pokémon can\'t attack. (Benching or evolving the Defending Pokémon ends this effect.)',
          damage: '10',
          convertedEnergyCost: 2
        },
        {
          cost: [
            'Water',
            'Water',
            'Water'
          ],
          name: 'Blizzard',
          text: 'Flip a coin. If heads, this attack does 10 damage to each of your opponent\'s Benched Pokémon. If tails, this attack does 10 damage to each of your own Benched Pokémon. (Don\'t apply Weakness and Resistance for Benched Pokémon.)',
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
      id: 'neo1-45',
      name: 'Quagsire',
      nationalPokedexNumber: 195,
      imageUrl: 'https://images.pokemontcg.io/neo1/45.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo1/45_hires.png',
      types: [
        'Water'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 1',
      evolvesFrom: 'Wooper',
      hp: '70',
      retreatCost: [
        'Colorless',
        'Colorless'
      ],
      convertedRetreatCost: 2,
      number: '45',
      artist: 'Atsuko Nishida',
      rarity: 'Uncommon',
      series: 'Neo',
      set: 'Neo Genesis',
      setCode: 'neo1',
      attacks: [
        {
          cost: [
            'Water',
            'Water'
          ],
          name: 'Surf',
          text: '',
          damage: '30',
          convertedEnergyCost: 2
        },
        {
          cost: [
            'Fighting',
            'Fighting',
            'Colorless',
            'Colorless'
          ],
          name: 'Earthquake',
          text: 'Does 10 damage to each of your own Benched Pokémon. (Don\'t apply Weakness and Resistance for Benched Pokémon.)',
          damage: '60',
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
      id: 'neo1-46',
      name: 'Quilava',
      nationalPokedexNumber: 156,
      imageUrl: 'https://images.pokemontcg.io/neo1/46.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo1/46_hires.png',
      types: [
        'Fire'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 1',
      evolvesFrom: 'Cyndaquil',
      hp: '60',
      retreatCost: [
        'Colorless'
      ],
      convertedRetreatCost: 1,
      number: '46',
      artist: 'Ken Sugimori',
      rarity: 'Uncommon',
      series: 'Neo',
      set: 'Neo Genesis',
      setCode: 'neo1',
      attacks: [
        {
          cost: [
            'Fire',
            'Colorless'
          ],
          name: 'Ember',
          text: 'Discard 1 Fire Energy card attached to Quilava in order to use this attack.',
          damage: '30',
          convertedEnergyCost: 2
        },
        {
          cost: [
            'Fire',
            'Fire'
          ],
          name: 'Fire Wind',
          text: 'If your opponent has any Benched Pokémon, choose 1 of them. Flip 2 coins. For each heads, this attack does 10 damage to that Pokémon. (Don\'t apply Weakness and Resistance.)',
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
      id: 'neo1-47',
      name: 'Quilava',
      nationalPokedexNumber: 156,
      imageUrl: 'https://images.pokemontcg.io/neo1/47.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo1/47_hires.png',
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
      number: '47',
      artist: 'Ken Sugimori',
      rarity: 'Uncommon',
      series: 'Neo',
      set: 'Neo Genesis',
      setCode: 'neo1',
      attacks: [
        {
          cost: [
            'Fire',
            'Fire'
          ],
          name: 'Smokescreen',
          text: 'If the Defending Pokémon tries to attack during your opponent\'s next turn, your opponent flips a coin. If tails, that attack does nothing.',
          damage: '20',
          convertedEnergyCost: 2
        },
        {
          cost: [
            'Fire',
            'Fire',
            'Fire'
          ],
          name: 'Char',
          text: 'If the Defending Pokémon doesn\'t have a Char counter on it, flip a coin. If heads, put a Char counter on it. A Char counter requires your opponent to flip a coin after every turn. If tails, put 2 damage counters on the Pokémon with that Char counter. (Char counters stay on the Pokémon as long as it\'s in play.)',
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
      id: 'neo1-48',
      name: 'Seadra',
      nationalPokedexNumber: 117,
      imageUrl: 'https://images.pokemontcg.io/neo1/48.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo1/48_hires.png',
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
      number: '48',
      artist: 'Shin-ichi Yoshida',
      rarity: 'Uncommon',
      series: 'Neo',
      set: 'Neo Genesis',
      setCode: 'neo1',
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
            'Water'
          ],
          name: 'Mud Splash',
          text: 'If your opponent has any Benched Pokémon, choose 1 of them and flip a coin. If heads, this attack does 10 damage to that Pokémon. (Don\'t apply Weakness and Resistance for Benched Pokémon.)',
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
      id: 'neo1-49',
      name: 'Skiploom',
      nationalPokedexNumber: 188,
      imageUrl: 'https://images.pokemontcg.io/neo1/49.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo1/49_hires.png',
      types: [
        'Grass'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 1',
      evolvesFrom: 'Hoppip',
      hp: '60',
      number: '49',
      artist: 'Atsuko Nishida',
      rarity: 'Uncommon',
      series: 'Neo',
      set: 'Neo Genesis',
      setCode: 'neo1',
      attacks: [
        {
          cost: [
            'Grass'
          ],
          name: 'Poisonpowder',
          text: 'The Defending Pokémon is now Poisoned.',
          damage: '20',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Grass'
          ],
          name: 'Stun Spore',
          text: 'Flip a coin. If heads, the Defending Pokémon is now Paralyzed.',
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
          type: 'Fire',
          value: '×2'
        }
      ]
    },
    {
      id: 'neo1-50',
      name: 'Sunflora',
      nationalPokedexNumber: 192,
      imageUrl: 'https://images.pokemontcg.io/neo1/50.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo1/50_hires.png',
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
      number: '50',
      artist: 'Kagemaru Himeno',
      rarity: 'Uncommon',
      series: 'Neo',
      set: 'Neo Genesis',
      setCode: 'neo1',
      attacks: [
        {
          cost: [
            'Grass',
            'Grass',
            'Grass'
          ],
          name: 'Petal Dance',
          text: 'Flip 3 coins. This attack does 30 damage times the number of heads. Sunflora is now Confused (after doing damage).',
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
      id: 'neo1-51',
      name: 'Togepi',
      nationalPokedexNumber: 175,
      imageUrl: 'https://images.pokemontcg.io/neo1/51.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo1/51_hires.png',
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
      artist: 'Naoyo Kimura',
      rarity: 'Uncommon',
      series: 'Neo',
      set: 'Neo Genesis',
      setCode: 'neo1',
      attacks: [
        {
          cost: [
            'Colorless',
            'Colorless'
          ],
          name: 'Poison Barb',
          text: 'The Defending Pokémon is now Poisoned.',
          damage: '20',
          convertedEnergyCost: 2
        }
      ],
      resistances: [
        {
          type: 'Psychic',
          value: '-30'
        }
      ]
    },
    {
      id: 'neo1-52',
      name: 'Xatu',
      nationalPokedexNumber: 178,
      imageUrl: 'https://images.pokemontcg.io/neo1/52.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo1/52_hires.png',
      types: [
        'Psychic'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 1',
      evolvesFrom: 'Natu',
      hp: '80',
      number: '52',
      artist: 'Ken Sugimori',
      rarity: 'Uncommon',
      series: 'Neo',
      set: 'Neo Genesis',
      setCode: 'neo1',
      attacks: [
        {
          cost: [
            'Psychic'
          ],
          name: 'Prophecy',
          text: 'Look at the top 3 cards of either player\'s deck and rearrange them as you like.',
          damage: '',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Psychic',
            'Psychic',
            'Psychic'
          ],
          name: 'Confuse Ray',
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
      id: 'neo1-53',
      name: 'Chikorita',
      nationalPokedexNumber: 152,
      imageUrl: 'https://images.pokemontcg.io/neo1/53.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo1/53_hires.png',
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
      number: '53',
      artist: 'Naoyo Kimura',
      rarity: 'Common',
      series: 'Neo',
      set: 'Neo Genesis',
      setCode: 'neo1',
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
            'Grass'
          ],
          name: 'Deflector',
          text: 'During your opponent\'s next turn, whenever Chikorita takes damage, divide that damage in half (rounded down to the nearest 10). (Any other effects still happen.)',
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
      id: 'neo1-54',
      name: 'Chikorita',
      nationalPokedexNumber: 152,
      imageUrl: 'https://images.pokemontcg.io/neo1/54.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo1/54_hires.png',
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
      number: '54',
      artist: 'Ken Sugimori',
      rarity: 'Common',
      series: 'Neo',
      set: 'Neo Genesis',
      setCode: 'neo1',
      attacks: [
        {
          cost: [
            'Colorless'
          ],
          name: 'Growl',
          text: 'If the Defending Pokémon attacks Chikorita during your opponent\'s next turn, any damage done to Chikorita is reduced by 10 (before applying Weakness and Resistance). (Benching or evolving either Pokémon ends this effect.)',
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
      id: 'neo1-55',
      name: 'Chinchou',
      nationalPokedexNumber: 170,
      imageUrl: 'https://images.pokemontcg.io/neo1/55.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo1/55_hires.png',
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
      number: '55',
      artist: 'Ken Sugimori',
      rarity: 'Common',
      series: 'Neo',
      set: 'Neo Genesis',
      setCode: 'neo1',
      attacks: [
        {
          cost: [
            'Lightning'
          ],
          name: 'Supersonic',
          text: 'Flip a coin. If heads, the Defending Pokémon is now Confused.',
          damage: '',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Water'
          ],
          name: 'Flail',
          text: 'Does 10 damage times the number of damage counters on Chinchou.',
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
      id: 'neo1-56',
      name: 'Cyndaquil',
      nationalPokedexNumber: 155,
      imageUrl: 'https://images.pokemontcg.io/neo1/56.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo1/56_hires.png',
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
      number: '56',
      artist: 'Ken Sugimori',
      rarity: 'Common',
      series: 'Neo',
      set: 'Neo Genesis',
      setCode: 'neo1',
      attacks: [
        {
          cost: [
            'Colorless'
          ],
          name: 'Leer',
          text: 'Flip a coin. If heads, the Defending Pokémon can\'t attack Cyndaquil during your opponent\'s next turn. (Benching or evolving either Pokémon ends this effect.)',
          damage: '',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Fire',
            'Colorless'
          ],
          name: 'Swift',
          text: 'This attack\'s damage isn\'t affected by Weakness, Resistance, Pokémon Powers, or any other effects on the Defending Pokémon.',
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
      id: 'neo1-57',
      name: 'Cyndaquil',
      nationalPokedexNumber: 155,
      imageUrl: 'https://images.pokemontcg.io/neo1/57.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo1/57_hires.png',
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
      number: '57',
      artist: 'Shin-ichi Yoshida',
      rarity: 'Common',
      series: 'Neo',
      set: 'Neo Genesis',
      setCode: 'neo1',
      attacks: [
        {
          cost: [
            'Fire'
          ],
          name: 'Fireworks',
          text: 'Flip a coin. If tails, discard 1 Energy card attached to Cyndaquil.',
          damage: '20',
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
      weaknesses: [
        {
          type: 'Water',
          value: '×2'
        }
      ]
    },
    {
      id: 'neo1-58',
      name: 'Girafarig',
      nationalPokedexNumber: 203,
      imageUrl: 'https://images.pokemontcg.io/neo1/58.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo1/58_hires.png',
      types: [
        'Psychic'
      ],
      supertype: 'Pokémon',
      subtype: 'Basic',
      hp: '60',
      number: '58',
      artist: 'Ken Sugimori',
      rarity: 'Common',
      series: 'Neo',
      set: 'Neo Genesis',
      setCode: 'neo1',
      attacks: [
        {
          cost: [
            'Colorless',
            'Colorless'
          ],
          name: 'Agility',
          text: 'Flip a coin. If heads, during your opponent\'s next turn, prevent all effects of attacks, including damage, done to Girafarig.',
          damage: '10',
          convertedEnergyCost: 2
        },
        {
          cost: [
            'Psychic',
            'Psychic'
          ],
          name: 'Psybeam',
          text: 'Flip a coin. If heads, the Defending Pokémon is now Confused.',
          damage: '20',
          convertedEnergyCost: 2
        }
      ]
    },
    {
      id: 'neo1-59',
      name: 'Gligar',
      nationalPokedexNumber: 207,
      imageUrl: 'https://images.pokemontcg.io/neo1/59.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo1/59_hires.png',
      types: [
        'Fighting'
      ],
      supertype: 'Pokémon',
      subtype: 'Basic',
      hp: '60',
      number: '59',
      artist: 'Hironobu Yoshida',
      rarity: 'Common',
      series: 'Neo',
      set: 'Neo Genesis',
      setCode: 'neo1',
      attacks: [
        {
          cost: [
            'Fighting'
          ],
          name: 'Poison Sting',
          text: 'Flip a coin. If heads, the Defending Pokémon is now Poisoned.',
          damage: '',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Colorless',
            'Colorless'
          ],
          name: 'Slash',
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
          type: 'Grass',
          value: '×2'
        }
      ]
    },
    {
      id: 'neo1-60',
      name: 'Hoothoot',
      nationalPokedexNumber: 163,
      imageUrl: 'https://images.pokemontcg.io/neo1/60.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo1/60_hires.png',
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
      number: '60',
      artist: 'Sumiyoshi Kizuki',
      rarity: 'Common',
      series: 'Neo',
      set: 'Neo Genesis',
      setCode: 'neo1',
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
            'Colorless',
            'Colorless'
          ],
          name: 'Peck',
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
      id: 'neo1-61',
      name: 'Hoppip',
      nationalPokedexNumber: 187,
      imageUrl: 'https://images.pokemontcg.io/neo1/61.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo1/61_hires.png',
      types: [
        'Grass'
      ],
      supertype: 'Pokémon',
      subtype: 'Basic',
      hp: '50',
      number: '61',
      artist: 'Atsuko Nishida',
      rarity: 'Common',
      series: 'Neo',
      set: 'Neo Genesis',
      setCode: 'neo1',
      attacks: [
        {
          cost: [
            'Colorless'
          ],
          name: 'Hop',
          text: '',
          damage: '10',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Grass'
          ],
          name: 'Sprout',
          text: 'Search your deck for a Basic Pokémon named Hoppip and put it onto your Bench. Shuffle your deck afterward. (You can\'t use this attack if your Bench is full.)',
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
          type: 'Fire',
          value: '×2'
        }
      ]
    },
    {
      id: 'neo1-62',
      name: 'Horsea',
      nationalPokedexNumber: 116,
      imageUrl: 'https://images.pokemontcg.io/neo1/62.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo1/62_hires.png',
      types: [
        'Water'
      ],
      supertype: 'Pokémon',
      subtype: 'Basic',
      hp: '50',
      number: '62',
      artist: 'Miki Tanaka',
      rarity: 'Common',
      series: 'Neo',
      set: 'Neo Genesis',
      setCode: 'neo1',
      attacks: [
        {
          cost: [
            'Water',
            'Water'
          ],
          name: 'Fin Slap',
          text: 'If an attack damaged Horsea during your opponent\'s last turn, this attack does 20 damage plus 10 more damage. If not, this attack does 20 damage.',
          damage: '20+',
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
      id: 'neo1-63',
      name: 'Ledyba',
      nationalPokedexNumber: 165,
      imageUrl: 'https://images.pokemontcg.io/neo1/63.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo1/63_hires.png',
      types: [
        'Grass'
      ],
      supertype: 'Pokémon',
      subtype: 'Basic',
      hp: '40',
      number: '63',
      artist: 'Sumiyoshi Kizuki',
      rarity: 'Common',
      series: 'Neo',
      set: 'Neo Genesis',
      setCode: 'neo1',
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
            'Grass'
          ],
          name: 'Comet Punch',
          text: 'Flip 4 coins. This attack does 10 damage times the number of heads.',
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
          type: 'Fire',
          value: '×2'
        }
      ]
    },
    {
      id: 'neo1-64',
      name: 'Mantine',
      nationalPokedexNumber: 226,
      imageUrl: 'https://images.pokemontcg.io/neo1/64.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo1/64_hires.png',
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
      number: '64',
      artist: 'Ken Sugimori',
      rarity: 'Common',
      series: 'Neo',
      set: 'Neo Genesis',
      setCode: 'neo1',
      attacks: [
        {
          cost: [
            'Water',
            'Water'
          ],
          name: 'Undulate',
          text: 'Flip a coin. If heads, during your opponent\'s next turn, prevent all effects of attacks, including damage, done to Mantine.',
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
      id: 'neo1-65',
      name: 'Mareep',
      nationalPokedexNumber: 179,
      imageUrl: 'https://images.pokemontcg.io/neo1/65.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo1/65_hires.png',
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
      number: '65',
      artist: 'Ken Sugimori',
      rarity: 'Common',
      series: 'Neo',
      set: 'Neo Genesis',
      setCode: 'neo1',
      attacks: [
        {
          cost: [
            'Lightning'
          ],
          name: 'Static Electricity',
          text: 'For each Mareep in play, you may search your deck for a Lightning Energy card and attach it to Mareep. Shuffle your deck afterward.',
          damage: '',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Lightning',
            'Lightning'
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
      id: 'neo1-66',
      name: 'Marill',
      nationalPokedexNumber: 183,
      imageUrl: 'https://images.pokemontcg.io/neo1/66.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo1/66_hires.png',
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
      number: '66',
      artist: 'Atsuko Nishida',
      rarity: 'Common',
      series: 'Neo',
      set: 'Neo Genesis',
      setCode: 'neo1',
      attacks: [
        {
          cost: [
            'Colorless'
          ],
          name: 'Defense Curl',
          text: 'Flip a coin. If heads, prevent all damage done to Marill during your opponent\'s next turn. (Any other effects of attacks still happen.)',
          damage: '',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Water',
            'Water'
          ],
          name: 'Bubble Bomb',
          text: 'Flip a coin. If heads, the Defending Pokémon is now Paralyzed. If tails, Marill does 10 damage to itself.',
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
      id: 'neo1-67',
      name: 'Natu',
      nationalPokedexNumber: 177,
      imageUrl: 'https://images.pokemontcg.io/neo1/67.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo1/67_hires.png',
      types: [
        'Psychic'
      ],
      supertype: 'Pokémon',
      subtype: 'Basic',
      hp: '30',
      number: '67',
      artist: 'Ken Sugimori',
      rarity: 'Common',
      series: 'Neo',
      set: 'Neo Genesis',
      setCode: 'neo1',
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
            'Psychic',
            'Psychic'
          ],
          name: 'Telekinesis',
          text: 'Choose 1 of your opponent\'s Pokémon. This attack does 20 damage to that Pokémon. Don\'t apply Weakness and Resistance for this attack. (Any other effects that would happen after applying Weakness and Resistance still happen.)',
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
          type: 'Psychic',
          value: '×2'
        }
      ]
    },
    {
      id: 'neo1-68',
      name: 'Oddish',
      nationalPokedexNumber: 43,
      imageUrl: 'https://images.pokemontcg.io/neo1/68.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo1/68_hires.png',
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
      artist: 'Sumiyoshi Kizuki',
      rarity: 'Common',
      series: 'Neo',
      set: 'Neo Genesis',
      setCode: 'neo1',
      attacks: [
        {
          cost: [
            'Colorless'
          ],
          name: 'Hide',
          text: 'Flip a coin. If heads, during your opponent\'s next turn, prevent all effects of attacks, including damage, done to Oddish.',
          damage: '',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Grass',
            'Grass'
          ],
          name: 'Absorb',
          text: 'Remove a number of damage counters from Oddish equal to half the damage done to the Defending Pokémon (after applying Weakness and Resistance) (rounded up to the nearest 10). If Oddish has fewer damage counters than that, remove all of them.',
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
      id: 'neo1-69',
      name: 'Onix',
      nationalPokedexNumber: 95,
      imageUrl: 'https://images.pokemontcg.io/neo1/69.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo1/69_hires.png',
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
      number: '69',
      artist: 'Mitsuhiro Arita',
      rarity: 'Common',
      series: 'Neo',
      set: 'Neo Genesis',
      setCode: 'neo1',
      attacks: [
        {
          cost: [
            'Colorless'
          ],
          name: 'Screech',
          text: 'Until the end of your next turn, if an attack damages the Defending Pokémon (after applying Weakness and Resistance), that attack does 20 more damage to the Defending Pokémon.',
          damage: '',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Fighting',
            'Fighting'
          ],
          name: 'Rage',
          text: 'Does 10 damage plus 10 more damage for each damage counter on Onix.',
          damage: '10+',
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
      id: 'neo1-70',
      name: 'Pikachu',
      nationalPokedexNumber: 25,
      imageUrl: 'https://images.pokemontcg.io/neo1/70.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo1/70_hires.png',
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
      number: '70',
      artist: 'Naoyo Kimura',
      rarity: 'Common',
      series: 'Neo',
      set: 'Neo Genesis',
      setCode: 'neo1',
      attacks: [
        {
          cost: [
            'Colorless'
          ],
          name: 'Quick Attack',
          text: 'Flip a coin. If heads, this attack does 10 damage plus 20 more damage; if tails, this attack does 10 damage.',
          damage: '10+',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Lightning',
            'Lightning',
            'Colorless'
          ],
          name: 'Agility',
          text: 'Flip a coin. If heads, during your opponent\'s next turn, prevent all effects of attacks, including damage, done to Pikachu.',
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
      id: 'neo1-71',
      name: 'Sentret',
      nationalPokedexNumber: 161,
      imageUrl: 'https://images.pokemontcg.io/neo1/71.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo1/71_hires.png',
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
      number: '71',
      artist: 'Ken Sugimori',
      rarity: 'Common',
      series: 'Neo',
      set: 'Neo Genesis',
      setCode: 'neo1',
      attacks: [
        {
          cost: [
            'Colorless'
          ],
          name: 'Fury Swipes',
          text: 'Flip 3 coins. This attack does 10 damage times the number of heads.',
          damage: '10×',
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
      id: 'neo1-72',
      name: 'Shuckle',
      nationalPokedexNumber: 213,
      imageUrl: 'https://images.pokemontcg.io/neo1/72.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo1/72_hires.png',
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
      number: '72',
      artist: 'Ken Sugimori',
      rarity: 'Common',
      series: 'Neo',
      set: 'Neo Genesis',
      setCode: 'neo1',
      attacks: [
        {
          cost: [
            'Grass'
          ],
          name: 'Withdraw',
          text: 'Flip a coin. If heads, prevent all damage done to Shuckle during your opponent\'s next turn. (Any other effects of attacks still happen.)',
          damage: '',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Grass',
            'Grass'
          ],
          name: 'Wrap',
          text: 'Flip a coin. If heads, the Defending Pokémon is now Paralyzed.',
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
      id: 'neo1-73',
      name: 'Slowpoke',
      nationalPokedexNumber: 79,
      imageUrl: 'https://images.pokemontcg.io/neo1/73.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo1/73_hires.png',
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
      number: '73',
      artist: 'Tomokazu Komiya',
      rarity: 'Common',
      series: 'Neo',
      set: 'Neo Genesis',
      setCode: 'neo1',
      attacks: [
        {
          cost: [
            'Psychic'
          ],
          name: 'Psyshock',
          text: 'Flip a coin. If heads, the Defending Pokémon is now Paralyzed.',
          damage: '10',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Water'
          ],
          name: 'Water Gun',
          text: 'Does 10 damage plus 10 more damage for each Energy attached to Slowpoke but not used to pay for this attack\'s Energy cost. You can\'t add more than 20 damage in this way.',
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
      id: 'neo1-74',
      name: 'Snubbull',
      nationalPokedexNumber: 209,
      imageUrl: 'https://images.pokemontcg.io/neo1/74.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo1/74_hires.png',
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
      number: '74',
      artist: 'Mitsuhiro Arita',
      rarity: 'Common',
      series: 'Neo',
      set: 'Neo Genesis',
      setCode: 'neo1',
      attacks: [
        {
          cost: [
            'Colorless'
          ],
          name: 'Roar',
          text: 'Flip a coin. If heads and if your opponent has any Benched Pokémon, he or she chooses 1 of them and switches it with the Defending Pokémon. (Do the damage before switching the Pokémon.)',
          damage: '',
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
      id: 'neo1-75',
      name: 'Spinarak',
      nationalPokedexNumber: 167,
      imageUrl: 'https://images.pokemontcg.io/neo1/75.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo1/75_hires.png',
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
      number: '75',
      artist: 'Ken Sugimori',
      rarity: 'Common',
      series: 'Neo',
      set: 'Neo Genesis',
      setCode: 'neo1',
      attacks: [
        {
          cost: [
            'Colorless'
          ],
          name: 'Scary Face',
          text: 'Flip a coin. If heads, until the end of your opponent\'s next turn the Defending Pokémon can\'t attack or retreat.',
          damage: '',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Grass'
          ],
          name: 'String Shot',
          text: 'Flip a coin. If heads, the Defending Pokémon is now Paralyzed.',
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
      id: 'neo1-76',
      name: 'Stantler',
      nationalPokedexNumber: 234,
      imageUrl: 'https://images.pokemontcg.io/neo1/76.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo1/76_hires.png',
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
      number: '76',
      artist: 'Ken Sugimori',
      rarity: 'Common',
      series: 'Neo',
      set: 'Neo Genesis',
      setCode: 'neo1',
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
          name: 'Mystifying Horns',
          text: 'Flip a coin. If heads, the Defending Pokémon is now Confused.',
          damage: '20',
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
      id: 'neo1-77',
      name: 'Sudowoodo',
      nationalPokedexNumber: 185,
      imageUrl: 'https://images.pokemontcg.io/neo1/77.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo1/77_hires.png',
      types: [
        'Fighting'
      ],
      supertype: 'Pokémon',
      subtype: 'Basic',
      hp: '60',
      retreatCost: [
        'Colorless',
        'Colorless',
        'Colorless'
      ],
      convertedRetreatCost: 3,
      number: '77',
      artist: 'Ken Sugimori',
      rarity: 'Common',
      series: 'Neo',
      set: 'Neo Genesis',
      setCode: 'neo1',
      attacks: [
        {
          cost: [
            'Fighting'
          ],
          name: 'Flail',
          text: 'Does 10 damage times the number of damage counters on Sudowoodo.',
          damage: '10×',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Fighting',
            'Colorless'
          ],
          name: 'Rock Throw',
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
      id: 'neo1-78',
      name: 'Sunkern',
      nationalPokedexNumber: 191,
      imageUrl: 'https://images.pokemontcg.io/neo1/78.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo1/78_hires.png',
      types: [
        'Grass'
      ],
      supertype: 'Pokémon',
      subtype: 'Basic',
      hp: '40',
      retreatCost: [
        'Colorless',
        'Colorless'
      ],
      convertedRetreatCost: 2,
      number: '78',
      artist: 'Kagemaru Himeno',
      rarity: 'Common',
      series: 'Neo',
      set: 'Neo Genesis',
      setCode: 'neo1',
      attacks: [
        {
          cost: [
            'Grass'
          ],
          name: 'Growth',
          text: 'Flip a coin. If heads, you may attach up to 2 Grass Energy cards from your hand to Sunkern.',
          damage: '',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Grass',
            'Grass',
            'Grass'
          ],
          name: 'Mega Drain',
          text: 'Remove a number of damage counters from Sunkern equal to half the damage done to the Defending Pokémon (after applying Weakness and Resistance) (rounded up to the nearest 10). If Sunkern has fewer damage counters than that, remove all of them.',
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
      id: 'neo1-79',
      name: 'Swinub',
      nationalPokedexNumber: 220,
      imageUrl: 'https://images.pokemontcg.io/neo1/79.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo1/79_hires.png',
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
      number: '79',
      artist: 'Ken Sugimori',
      rarity: 'Common',
      series: 'Neo',
      set: 'Neo Genesis',
      setCode: 'neo1',
      attacks: [
        {
          cost: [
            'Water'
          ],
          name: 'Powder Snow',
          text: 'The Defending Pokémon is now Asleep.',
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
      id: 'neo1-80',
      name: 'Totodile',
      nationalPokedexNumber: 158,
      imageUrl: 'https://images.pokemontcg.io/neo1/80.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo1/80_hires.png',
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
      number: '80',
      artist: 'Ken Sugimori',
      rarity: 'Common',
      series: 'Neo',
      set: 'Neo Genesis',
      setCode: 'neo1',
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
            'Water',
            'Colorless'
          ],
          name: 'Rage',
          text: 'Does 10 damage plus 10 more damage for each damage counter on Totodile.',
          damage: '10+',
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
      id: 'neo1-81',
      name: 'Totodile',
      nationalPokedexNumber: 158,
      imageUrl: 'https://images.pokemontcg.io/neo1/81.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo1/81_hires.png',
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
      number: '81',
      artist: 'Hironobu Yoshida',
      rarity: 'Common',
      series: 'Neo',
      set: 'Neo Genesis',
      setCode: 'neo1',
      attacks: [
        {
          cost: [
            'Colorless'
          ],
          name: 'Leer',
          text: 'Flip a coin. If heads, the Defending Pokémon can\'t attack Totodile during your opponent\'s next turn. (Benching or evolving either Pokémon ends this effect.)',
          damage: '',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Water'
          ],
          name: 'Fury Swipes',
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
      id: 'neo1-82',
      name: 'Wooper',
      nationalPokedexNumber: 194,
      imageUrl: 'https://images.pokemontcg.io/neo1/82.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo1/82_hires.png',
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
      number: '82',
      artist: 'Miki Tanaka',
      rarity: 'Common',
      series: 'Neo',
      set: 'Neo Genesis',
      setCode: 'neo1',
      attacks: [
        {
          cost: [
            'Water'
          ],
          name: 'Amnesia',
          text: 'Choose 1 of the Defending Pokémon\'s attacks. That Pokémon can\'t use that attack during your opponent\'s next turn.',
          damage: '',
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
      id: 'neo1-83',
      name: 'Arcade Game',
      imageUrl: 'https://images.pokemontcg.io/neo1/83.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo1/83_hires.png',
      supertype: 'Trainer',
      subtype: '',
      number: '83',
      artist: 'K. Hoshiba, CR CG gangs',
      rarity: 'Rare',
      series: 'Neo',
      set: 'Neo Genesis',
      setCode: 'neo1',
      text: [
        'Shuffle your deck, then reveal the top 3 cards of it. If at least 2 of those cards share the same name, put all of the ones with that name into your hand and shuffle the rest into your deck. If none of them do, shuffle all 3 into your deck.'
      ]
    },
    {
      id: 'neo1-84',
      name: 'Ecogym',
      imageUrl: 'https://images.pokemontcg.io/neo1/84.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo1/84_hires.png',
      supertype: 'Trainer',
      subtype: 'Stadium',
      number: '84',
      artist: 'Shin-ichi Yoshikawa, CR CG gangs',
      rarity: 'Rare',
      series: 'Neo',
      set: 'Neo Genesis',
      setCode: 'neo1',
      text: [
        'Whenever an attack, Pokémon Power, or Trainer card discards another player\'s non- Energy card from a Pokémon, return that Energy card to its owner\'s hand. (Energy cards that are discarded when that Pokémon is Knocked Out don\'t count.)'
      ]
    },
    {
      id: 'neo1-85',
      name: 'Energy Charge',
      imageUrl: 'https://images.pokemontcg.io/neo1/85.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo1/85_hires.png',
      supertype: 'Trainer',
      subtype: '',
      number: '85',
      artist: 'Keiji Kinebuchi',
      rarity: 'Rare',
      series: 'Neo',
      set: 'Neo Genesis',
      setCode: 'neo1',
      text: [
        'Flip a coin. If heads, shuffle up to 2 Energy cards from your discard pile into your deck.'
      ]
    },
    {
      id: 'neo1-86',
      name: 'Focus Band',
      imageUrl: 'https://images.pokemontcg.io/neo1/86.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo1/86_hires.png',
      supertype: 'Trainer',
      subtype: 'Pokémon Tool',
      number: '86',
      artist: 'Tomokazu Komiya',
      rarity: 'Rare',
      series: 'Neo',
      set: 'Neo Genesis',
      setCode: 'neo1',
      text: [
        'If the Pokémon Focus Band is attached to would be Knocked Out by your opponent\'s attack, flip a coin. If heads, that Pokémon is not Knocked Out and its remaining HP become 10 instead. Then, discard Focus Band.'
      ]
    },
    {
      id: 'neo1-87',
      name: 'Mary',
      imageUrl: 'https://images.pokemontcg.io/neo1/87.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo1/87_hires.png',
      supertype: 'Trainer',
      subtype: '',
      number: '87',
      artist: 'Ken Sugimori',
      rarity: 'Rare',
      series: 'Neo',
      set: 'Neo Genesis',
      setCode: 'neo1',
      text: [
        'Draw 2 cards. Then, shuffle 2 cards from your hand into your deck.'
      ]
    },
    {
      id: 'neo1-88',
      name: 'PokéGear',
      imageUrl: 'https://images.pokemontcg.io/neo1/88.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo1/88_hires.png',
      supertype: 'Trainer',
      subtype: '',
      number: '88',
      artist: 'Katsura Tabata, CR CG gangs',
      rarity: 'Rare',
      series: 'Neo',
      set: 'Neo Genesis',
      setCode: 'neo1',
      text: [
        'Look at the top 7 cards of your deck. If any of them are Trainer cards, you may show 1 of them to your opponent and put it into your hand. Shuffle your deck afterward. You can\'t play any more Trainer cards this turn.'
      ]
    },
    {
      id: 'neo1-89',
      name: 'Super Energy Retrieval',
      imageUrl: 'https://images.pokemontcg.io/neo1/89.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo1/89_hires.png',
      supertype: 'Trainer',
      subtype: '',
      number: '89',
      artist: 'Keiji Kinebuchi',
      rarity: 'Rare',
      series: 'Neo',
      set: 'Neo Genesis',
      setCode: 'neo1',
      text: [
        'Trade 2 of the other cards in your hand for 4 basic Energy cards from your discard pile. If you have fewer than 4 basic Energy cards there, take all of them.'
      ]
    },
    {
      id: 'neo1-90',
      name: 'Time Capsule',
      imageUrl: 'https://images.pokemontcg.io/neo1/90.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo1/90_hires.png',
      supertype: 'Trainer',
      subtype: '',
      number: '90',
      artist: '"Big Mama" Tagawa, CR CG gangs',
      rarity: 'Rare',
      series: 'Neo',
      set: 'Neo Genesis',
      setCode: 'neo1',
      text: [
        'Your opponent may choose 5 Basic Pokémon, Evolution, and/or basic Energy cards in his or her discard pile. (If your opponent doesn\'t have that many, he or she chooses all or none of them.) If your opponent chooses any cards, he or she shuffles them into his or her deck. Either way, you may do the same, and you can\'t play any more Trainer cards this turn.'
      ]
    },
    {
      id: 'neo1-91',
      name: 'Bill\'s Teleporter',
      imageUrl: 'https://images.pokemontcg.io/neo1/91.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo1/91_hires.png',
      supertype: 'Trainer',
      subtype: '',
      number: '91',
      artist: 'Keiji Kinebuchi',
      rarity: 'Uncommon',
      series: 'Neo',
      set: 'Neo Genesis',
      setCode: 'neo1',
      text: [
        'Flip a coin. If heads, draw 4 cards.'
      ]
    },
    {
      id: 'neo1-92',
      name: 'Card-Flip Game',
      imageUrl: 'https://images.pokemontcg.io/neo1/92.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo1/92_hires.png',
      supertype: 'Trainer',
      subtype: '',
      number: '92',
      artist: 'K. Hoshiba, CR CG gangs',
      rarity: 'Uncommon',
      series: 'Neo',
      set: 'Neo Genesis',
      setCode: 'neo1',
      text: [
        'Choose 1 of your opponent\'s face-down Prizes. Guess whether it is an Energy card, a Trainer card, or a Pokémon (Basic or Evolution) card. Flip the card face up (and leave it face up). If you guessed right, draw 2 cards.'
      ]
    },
    {
      id: 'neo1-93',
      name: 'Gold Berry',
      imageUrl: 'https://images.pokemontcg.io/neo1/93.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo1/93_hires.png',
      supertype: 'Trainer',
      subtype: 'Pokémon Tool',
      number: '93',
      artist: 'Ryuta Kusumi, CR CG gangs',
      rarity: 'Uncommon',
      series: 'Neo',
      set: 'Neo Genesis',
      setCode: 'neo1',
      text: [
        'At any time between turns, if there are at least 4 damage counters on the Pokémon Gold Berry is attached to, you may remove 4 of them and discard Gold Berry. At the start of each turn, if there are at least 4 damage counters on the Pokémon Gold Berry is attached to, remove 4 of them and discard Gold Berry.'
      ]
    },
    {
      id: 'neo1-94',
      name: 'Miracle Berry',
      imageUrl: 'https://images.pokemontcg.io/neo1/94.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo1/94_hires.png',
      supertype: 'Trainer',
      subtype: 'Pokémon Tool',
      number: '94',
      artist: 'Yousuke Hirata, CR CG gangs',
      rarity: 'Uncommon',
      series: 'Neo',
      set: 'Neo Genesis',
      setCode: 'neo1',
      text: [
        'At any time between turns, if the Pokémon Miracle Berry is attached to is Asleep, Confused, Paralyzed, or Poisoned, you may remove all of those effects from that Pokémon and discard Miracle Berry. At the start of each turn, if the Pokémon Miracle Berry is attached to is Asleep, Confused, Paralyzed, or Poisoned, remove all of those effects from that Pokémon and discard Miracle Berry.'
      ]
    },
    {
      id: 'neo1-95',
      name: 'New Pokédex',
      imageUrl: 'https://images.pokemontcg.io/neo1/95.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo1/95_hires.png',
      supertype: 'Trainer',
      subtype: '',
      number: '95',
      artist: 'Keiji Kinebuchi',
      rarity: 'Uncommon',
      series: 'Neo',
      set: 'Neo Genesis',
      setCode: 'neo1',
      text: [
        'Shuffle your deck. Then, look at up to 5 cards from the top of your deck and rearrange them as you like.'
      ]
    },
    {
      id: 'neo1-96',
      name: 'Professor Elm',
      imageUrl: 'https://images.pokemontcg.io/neo1/96.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo1/96_hires.png',
      supertype: 'Trainer',
      subtype: '',
      number: '96',
      artist: 'Ken Sugimori',
      rarity: 'Uncommon',
      series: 'Neo',
      set: 'Neo Genesis',
      setCode: 'neo1',
      text: [
        'Shuffle your hand into your deck. Then, draw 7 cards. You can\'t play any more Trainer cards this turn.'
      ]
    },
    {
      id: 'neo1-97',
      name: 'Sprout Tower',
      imageUrl: 'https://images.pokemontcg.io/neo1/97.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo1/97_hires.png',
      supertype: 'Trainer',
      subtype: 'Stadium',
      number: '97',
      artist: 'Hiromichi Sugiyama, CR CG gangs',
      rarity: 'Uncommon',
      series: 'Neo',
      set: 'Neo Genesis',
      setCode: 'neo1',
      text: [
        'All damage done by Pokémon\'s attacks is reduced by 30 (after applying Weakness and Resistance).'
      ]
    },
    {
      id: 'neo1-98',
      name: 'Super Scoop Up',
      imageUrl: 'https://images.pokemontcg.io/neo1/98.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo1/98_hires.png',
      supertype: 'Trainer',
      subtype: '',
      number: '98',
      artist: 'Keiji Kinebuchi',
      rarity: 'Uncommon',
      series: 'Neo',
      set: 'Neo Genesis',
      setCode: 'neo1',
      text: [
        'Flip a coin. If heads, return 1 of your Pokémon and all cards attached to it to your hand.'
      ]
    },
    {
      id: 'neo1-99',
      name: 'Berry',
      imageUrl: 'https://images.pokemontcg.io/neo1/99.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo1/99_hires.png',
      supertype: 'Trainer',
      subtype: 'Pokémon Tool',
      number: '99',
      artist: 'Yousuke Hirata, CR CG gangs',
      rarity: 'Common',
      series: 'Neo',
      set: 'Neo Genesis',
      setCode: 'neo1',
      text: [
        'At any time between turns, if there are at least 2 damage counters on the Pokémon Berry is attached to, you may remove 2 of them and discard Berry. At the start of each turn, if there are at least 2 damage counters on the Pokémon Berry is attached to, remove 2 of them and discard Berry.'
      ]
    },
    {
      id: 'neo1-100',
      name: 'Double Gust',
      imageUrl: 'https://images.pokemontcg.io/neo1/100.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo1/100_hires.png',
      supertype: 'Trainer',
      subtype: '',
      number: '100',
      artist: 'Tomokazu Komiya',
      rarity: 'Common',
      series: 'Neo',
      set: 'Neo Genesis',
      setCode: 'neo1',
      text: [
        'If you have any Benched Pokémon, your opponent chooses 1 of them and switches it with your Active Pokémon. Then, if your opponent has any Benched Pokémon, choose 1 of them and switch it with his or her Active Pokémon.'
      ]
    },
    {
      id: 'neo1-101',
      name: 'Moo-Moo Milk',
      imageUrl: 'https://images.pokemontcg.io/neo1/101.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo1/101_hires.png',
      supertype: 'Trainer',
      subtype: '',
      number: '101',
      artist: 'Tomokazu Komiya',
      rarity: 'Common',
      series: 'Neo',
      set: 'Neo Genesis',
      setCode: 'neo1',
      text: [
        'Choose 1 of your Pokémon. Flip 2 coins. Remove 2 damage counters times the number of heads from that Pokémon. If the Pokémon has fewer damage counters than that, remove all of them.'
      ]
    },
    {
      id: 'neo1-102',
      name: 'Pokémon March',
      imageUrl: 'https://images.pokemontcg.io/neo1/102.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo1/102_hires.png',
      supertype: 'Trainer',
      subtype: '',
      number: '102',
      artist: 'Tomokazu Komiya',
      rarity: 'Common',
      series: 'Neo',
      set: 'Neo Genesis',
      setCode: 'neo1',
      text: [
        'Your opponent may search his or her deck for 1 Basic Pokémon card and put it onto his or her Bench. Then, you may search your deck for 1 Basic Pokémon card and put it onto your Bench. Then, each player shuffles his or her deck. (A player can\'t do any of this if his or her Bench is full.)'
      ]
    },
    {
      id: 'neo1-103',
      name: 'Super Rod',
      imageUrl: 'https://images.pokemontcg.io/neo1/103.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo1/103_hires.png',
      supertype: 'Trainer',
      subtype: '',
      number: '103',
      artist: 'Keiji Kinebuchi',
      rarity: 'Common',
      series: 'Neo',
      set: 'Neo Genesis',
      setCode: 'neo1',
      text: [
        'Flip a coin. If heads, put an Evolution card from your discard pile, if any, into your hand. If tails, put a Basic Pokémon card from your discard pile, if any, into your hand.'
      ]
    },
    {
      id: 'neo1-104',
      name: 'Darkness Energy',
      imageUrl: 'https://images.pokemontcg.io/neo1/104.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo1/104_hires.png',
      supertype: 'Energy',
      subtype: 'Special',
      number: '104',
      artist: 'Milky Isobe',
      rarity: 'Rare',
      series: 'Neo',
      set: 'Neo Genesis',
      setCode: 'neo1',
      text: [
        'If the Pokémon Darkness Energy is attached to damages the Defending Pokémon (after applying Weakness and Resistance), the attack does 10 more damage to the Defending Pokémon. At the end of every turn, put 1 damage counter on the Pokémon Darkness Energy is attached to, unless it\'s Darkness or has Dark in its name. Darkness Energy provides Darkness Energy. (Doesn\'t count as a basic Energy card.)'
      ]
    },
    {
      id: 'neo1-105',
      name: 'Recycle Energy',
      imageUrl: 'https://images.pokemontcg.io/neo1/105.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo1/105_hires.png',
      supertype: 'Energy',
      subtype: 'Special',
      number: '105',
      artist: 'Hideki Kazama',
      rarity: 'Rare',
      series: 'Neo',
      set: 'Neo Genesis',
      setCode: 'neo1',
      text: [
        'Recycle Energy provides Colorless Energy. (Doesn\'t count as a basic Energy card.) If this card is put into your discard pile from play, return it to your hand.'
      ]
    },
    {
      id: 'neo1-106',
      name: 'Fighting Energy',
      imageUrl: 'https://images.pokemontcg.io/neo1/106.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo1/106_hires.png',
      supertype: 'Energy',
      subtype: 'Basic',
      number: '106',
      artist: 'Keiji Kinebuchi',
      rarity: 'Common',
      series: 'Neo',
      set: 'Neo Genesis',
      setCode: 'neo1'
    },
    {
      id: 'neo1-107',
      name: 'Fire Energy',
      imageUrl: 'https://images.pokemontcg.io/neo1/107.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo1/107_hires.png',
      supertype: 'Energy',
      subtype: 'Basic',
      number: '107',
      artist: 'Keiji Kinebuchi',
      rarity: 'Common',
      series: 'Neo',
      set: 'Neo Genesis',
      setCode: 'neo1'
    },
    {
      id: 'neo1-108',
      name: 'Grass Energy',
      imageUrl: 'https://images.pokemontcg.io/neo1/108.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo1/108_hires.png',
      supertype: 'Energy',
      subtype: 'Basic',
      number: '108',
      artist: 'Keiji Kinebuchi',
      rarity: 'Common',
      series: 'Neo',
      set: 'Neo Genesis',
      setCode: 'neo1'
    },
    {
      id: 'neo1-109',
      name: 'Lightning Energy',
      imageUrl: 'https://images.pokemontcg.io/neo1/109.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo1/109_hires.png',
      supertype: 'Energy',
      subtype: 'Basic',
      number: '109',
      artist: 'Keiji Kinebuchi',
      rarity: 'Common',
      series: 'Neo',
      set: 'Neo Genesis',
      setCode: 'neo1'
    },
    {
      id: 'neo1-110',
      name: 'Psychic Energy',
      imageUrl: 'https://images.pokemontcg.io/neo1/110.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo1/110_hires.png',
      supertype: 'Energy',
      subtype: 'Basic',
      number: '110',
      artist: 'Keiji Kinebuchi',
      rarity: 'Common',
      series: 'Neo',
      set: 'Neo Genesis',
      setCode: 'neo1'
    },
    {
      id: 'neo1-111',
      name: 'Water Energy',
      imageUrl: 'https://images.pokemontcg.io/neo1/111.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo1/111_hires.png',
      supertype: 'Energy',
      subtype: 'Basic',
      number: '111',
      artist: 'Keiji Kinebuchi',
      rarity: 'Common',
      series: 'Neo',
      set: 'Neo Genesis',
      setCode: 'neo1'
    }
  ]