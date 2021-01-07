const neoRevelationCards = [
    {
      id: 'neo3-1',
      name: 'Ampharos',
      nationalPokedexNumber: 181,
      imageUrl: 'https://images.pokemontcg.io/neo3/1.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo3/1_hires.png',
      types: [
        'Lightning'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 2',
      evolvesFrom: 'Flaaffy',
      hp: '90',
      retreatCost: [
        'Colorless',
        'Colorless',
        'Colorless'
      ],
      convertedRetreatCost: 3,
      number: '1',
      artist: 'Toshinao Aoki',
      rarity: 'Holo Rare',
      series: 'Neo',
      set: 'Neo Revelation',
      setCode: 'neo3',
      attacks: [
        {
          cost: [
            'Lightning'
          ],
          name: 'Attract Current',
          text: 'Flip 3 coins. For each heads, you may search your deck for a Lightning Energy card and attach it to 1 of your Lightning Pokémon. Shuffle your deck afterward.',
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
          name: 'Gigavolt',
          text: 'Flip a coin. If heads, this attack does 40 damage plus 20 more damage. If tails, this attack does 40 damage and the Defending Pokémon is now Paralyzed.',
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
      id: 'neo3-2',
      name: 'Blissey',
      nationalPokedexNumber: 242,
      imageUrl: 'https://images.pokemontcg.io/neo3/2.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo3/2_hires.png',
      types: [
        'Colorless'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 1',
      evolvesFrom: 'Chansey',
      ability: {
        name: 'Softboiled',
        text: 'When you play Blissey from your hand, you may flip a coin. If heads, remove 8 damage counters from Blissey. If tails, remove 4 damage counters from Blissey. Either way, if Blissey has fewer damage counters than that, remove all of them.',
        type: 'Pokémon Power'
      },
      hp: '120',
      retreatCost: [
        'Colorless',
        'Colorless'
      ],
      convertedRetreatCost: 2,
      number: '2',
      artist: 'Yuka Morii',
      rarity: 'Holo Rare',
      series: 'Neo',
      set: 'Neo Revelation',
      setCode: 'neo3',
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
      id: 'neo3-3',
      name: 'Celebi',
      nationalPokedexNumber: 251,
      imageUrl: 'https://images.pokemontcg.io/neo3/3.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo3/3_hires.png',
      types: [
        'Psychic'
      ],
      supertype: 'Pokémon',
      subtype: 'Basic',
      ability: {
        name: 'Time Travel',
        text: 'If an opponent\'s attack would Knock Out Celebi, flip a coin. If heads, Celebi is not Knocked Out and you shuffle it and all cards attached to it into your deck. This power doesn\'t work if Celebi is already Asleep, Confused, or Paralyzed.',
        type: 'Pokémon Power'
      },
      hp: '50',
      retreatCost: [
        'Colorless'
      ],
      convertedRetreatCost: 1,
      number: '3',
      artist: 'Hironobu Yoshida',
      rarity: 'Holo Rare',
      series: 'Neo',
      set: 'Neo Revelation',
      setCode: 'neo3',
      attacks: [
        {
          cost: [
            'Psychic'
          ],
          name: 'Psychic Damage',
          text: 'Flip 3 coins. For each heads, put 1 damage counter on the Defending Pokémon.',
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
      id: 'neo3-4',
      name: 'Crobat',
      nationalPokedexNumber: 169,
      imageUrl: 'https://images.pokemontcg.io/neo3/4.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo3/4_hires.png',
      types: [
        'Grass'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 2',
      evolvesFrom: 'Golbat',
      hp: '90',
      number: '4',
      artist: 'Shin-ichi Yoshida',
      rarity: 'Holo Rare',
      series: 'Neo',
      set: 'Neo Revelation',
      setCode: 'neo3',
      attacks: [
        {
          cost: [
            'Grass'
          ],
          name: 'Triggered Poison',
          text: 'If your opponent attaches an Energy card to the Defending Pokémon during his or her next turn, that Pokémon becomes Poisoned.',
          damage: '',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Grass',
            'Grass',
            'Colorless'
          ],
          name: 'Cross Attack',
          text: 'Flip 4 coins. This attack does 20 damage times the number of heads. If you get 2 or more heads, the Defending Pokémon is now Confused.',
          damage: '20×',
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
      id: 'neo3-5',
      name: 'Delibird',
      nationalPokedexNumber: 225,
      imageUrl: 'https://images.pokemontcg.io/neo3/5.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo3/5_hires.png',
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
      number: '5',
      artist: 'Tomokazu Komiya',
      rarity: 'Holo Rare',
      series: 'Neo',
      set: 'Neo Revelation',
      setCode: 'neo3',
      attacks: [
        {
          cost: [
            'Colorless',
            'Colorless'
          ],
          name: 'Present',
          text: 'Flip 3 coins. If exactly 1 is heads, this attack does 40 damage. If exactly 2 are heads, remove 3 damage counters from the Defending Pokémon. If the Defending Pokémon has fewer damage counters than that, remove all of them. If all 3 are heads, this attack does 60 damage. If all 3 are tails, remove all damage counters from the Defending Pokémon.',
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
      id: 'neo3-6',
      name: 'Entei',
      nationalPokedexNumber: 244,
      imageUrl: 'https://images.pokemontcg.io/neo3/6.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo3/6_hires.png',
      types: [
        'Fire'
      ],
      supertype: 'Pokémon',
      subtype: 'Basic',
      ability: {
        name: 'Howl',
        text: 'When you play Entei from your hand, you may discard the top 5 cards from your deck. (if you have fewer cards in your deck than that, discard all of them.) If any of those are Fire Energy cards, attach them to any of your Fire Pokémon of your choice. Using this power ends your turn.',
        type: 'Pokémon Power'
      },
      hp: '80',
      retreatCost: [
        'Colorless'
      ],
      convertedRetreatCost: 1,
      number: '6',
      artist: 'Ken Sugimori',
      rarity: 'Holo Rare',
      series: 'Neo',
      set: 'Neo Revelation',
      setCode: 'neo3',
      attacks: [
        {
          cost: [
            'Fire',
            'Fire',
            'Fire'
          ],
          name: 'Searing Flames',
          text: 'Discard 2 Fire Energy cards attached to Entei or this attack does nothing.',
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
      id: 'neo3-7',
      name: 'Ho-oh',
      nationalPokedexNumber: 250,
      imageUrl: 'https://images.pokemontcg.io/neo3/7.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo3/7_hires.png',
      types: [
        'Fire'
      ],
      supertype: 'Pokémon',
      subtype: 'Basic',
      hp: '90',
      retreatCost: [
        'Colorless',
        'Colorless'
      ],
      convertedRetreatCost: 2,
      number: '7',
      artist: 'Kimiya Masago',
      rarity: 'Holo Rare',
      series: 'Neo',
      set: 'Neo Revelation',
      setCode: 'neo3',
      attacks: [
        {
          cost: [
            'Fire'
          ],
          name: 'Stoke',
          text: 'You may search your deck for a Fire Energy card and attach it to Ho-oh',
          damage: '',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Fire',
            'Fire',
            'Fire'
          ],
          name: 'Sacred Fire',
          text: 'Flip a coin. If heads, choose 1 of your opponent\'s Pokémon. This attack does 40 damage to that Pokémon. Don\'t apply Weakness and Resistance.',
          damage: '',
          convertedEnergyCost: 3
        },
        {
          cost: [
            'Fire',
            'Fire',
            'Fire',
            'Fire',
            'Fire'
          ],
          name: 'Dive Bomb',
          text: 'Flip a coin. If tails, this attack does nothing.',
          damage: '',
          convertedEnergyCost: 5
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
      id: 'neo3-8',
      name: 'Houndoom',
      nationalPokedexNumber: 229,
      imageUrl: 'https://images.pokemontcg.io/neo3/8.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo3/8_hires.png',
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
      number: '8',
      artist: 'Mitsuhiro Arita',
      rarity: 'Holo Rare',
      series: 'Neo',
      set: 'Neo Revelation',
      setCode: 'neo3',
      attacks: [
        {
          cost: [
            'Fire'
          ],
          name: 'Dark Flame',
          text: 'Discard 1 Fire Energy card attached to Houndoom or this attack does nothing. If there are any Darkness Energy cards in your discard pile, attach 1 of them to Houndoom.',
          damage: '20',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Darkness',
            'Colorless',
            'Colorless'
          ],
          name: 'Black Fang',
          text: 'Flip a number of coins equal to the number of Darkness Energy attached to Houndoom. This attack does 30 damage plus 10 more damage for each heads.',
          damage: '30+',
          convertedEnergyCost: 3
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
      id: 'neo3-9',
      name: 'Jumpluff',
      nationalPokedexNumber: 189,
      imageUrl: 'https://images.pokemontcg.io/neo3/9.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo3/9_hires.png',
      types: [
        'Grass'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 2',
      evolvesFrom: 'Skiploom',
      hp: '70',
      number: '9',
      artist: 'Kagemaru Himeno',
      rarity: 'Holo Rare',
      series: 'Neo',
      set: 'Neo Revelation',
      setCode: 'neo3',
      attacks: [
        {
          cost: [
            'Grass'
          ],
          name: 'Evolutionary Spore',
          text: 'Choose any number of your Hoppips and Skiplooms. Then, for each Pokémon you chose in this way, you may search your deck for a card that evolves from that Pokémon and attach it to that Pokémon. (This counts as evolving those Pokémon.) Shuffle your deck afterward.',
          damage: '',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Grass'
          ],
          name: 'Solarbeam',
          text: '',
          damage: '30',
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
      id: 'neo3-10',
      name: 'Magneton',
      nationalPokedexNumber: 82,
      imageUrl: 'https://images.pokemontcg.io/neo3/10.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo3/10_hires.png',
      types: [
        'Metal'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 1',
      evolvesFrom: 'Magnemite',
      ability: {
        name: 'Electromagnetic Power',
        text: 'As often as you like during your turn (before your attack), you may take 1 Energy card attached to 1 of your Magnemites, Magnetons, or Dark Magnetons and attach it to a different 1 of your Magnemites, Magnetons, or Dark Magnetons. This power can\'t be used if Magneton is Asleep, Confused, or Paralyzed.',
        type: 'Pokémon Power'
      },
      hp: '80',
      retreatCost: [
        'Colorless',
        'Colorless'
      ],
      convertedRetreatCost: 2,
      number: '10',
      artist: '"Big Mama" Tagawa, CR CG gangs',
      rarity: 'Holo Rare',
      series: 'Neo',
      set: 'Neo Revelation',
      setCode: 'neo3',
      attacks: [
        {
          cost: [
            'Lightning',
            'Lightning',
            'Colorless'
          ],
          name: 'Plasma',
          text: 'If there are any Lightning Energy cards in your discard pile, attach 1 of them to Magneton.',
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
      id: 'neo3-11',
      name: 'Misdreavus',
      nationalPokedexNumber: 200,
      imageUrl: 'https://images.pokemontcg.io/neo3/11.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo3/11_hires.png',
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
      number: '11',
      artist: 'Ken Sugimori',
      rarity: 'Holo Rare',
      series: 'Neo',
      set: 'Neo Revelation',
      setCode: 'neo3',
      attacks: [
        {
          cost: [
            'Psychic'
          ],
          name: 'Night Eyes',
          text: 'The Defending Pokémon is now Asleep.',
          damage: '',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Psychic',
            'Psychic',
            'Psychic'
          ],
          name: 'Perish Song',
          text: 'If the Defending Pokémon is Asleep, and was attacked with Night Eyes during your last turn, it is Knocked Out.',
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
      id: 'neo3-12',
      name: 'Porygon2',
      nationalPokedexNumber: 233,
      imageUrl: 'https://images.pokemontcg.io/neo3/12.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo3/12_hires.png',
      types: [
        'Colorless'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 1',
      evolvesFrom: 'Porygon',
      ability: {
        name: 'Energy Converter',
        text: 'Once during your turn (before your attack), you may choose 1 Basic Energy card attached to 1 of your Pokémon and choose an Energy type. Treat that Energy card as that type until the end is your turn. This power can\'t be used if Porygon2 is Asleep, Confused, or Paralyzed. If Porygon2 becomes Asleep, Confused, or Paralyzed, the Energy card goes back to its original type.',
        type: 'Pokémon Power'
      },
      hp: '70',
      retreatCost: [
        'Colorless'
      ],
      convertedRetreatCost: 1,
      number: '12',
      artist: 'Keiji Kinebuchi',
      rarity: 'Holo Rare',
      series: 'Neo',
      set: 'Neo Revelation',
      setCode: 'neo3',
      attacks: [
        {
          cost: [
            'Colorless',
            'Colorless',
            'Colorless'
          ],
          name: 'Delta Beam',
          text: 'Flip a coin. If heads, choose whether the Defending Pokémon becomes Asleep, Confused, or Paralyzed.',
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
      id: 'neo3-13',
      name: 'Raikou',
      nationalPokedexNumber: 243,
      imageUrl: 'https://images.pokemontcg.io/neo3/13.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo3/13_hires.png',
      types: [
        'Lightning'
      ],
      supertype: 'Pokémon',
      subtype: 'Basic',
      ability: {
        name: 'Lightning Burst',
        text: 'Whenever you attach a Lightning Energy card from your hand to Raikou, if your opponent has any Benched Pokémon, he or she chooses 1 of them and switches it with the Defending Pokémon. This power stops working while Raikou is Asleep, Confused, or Paralyzed.',
        type: 'Pokémon Power'
      },
      hp: '80',
      retreatCost: [
        'Colorless'
      ],
      convertedRetreatCost: 1,
      number: '13',
      artist: 'Ken Sugimori',
      rarity: 'Holo Rare',
      series: 'Neo',
      set: 'Neo Revelation',
      setCode: 'neo3',
      attacks: [
        {
          cost: [
            'Lightning',
            'Lightning',
            'Lightning'
          ],
          name: 'Lightning Tackle',
          text: 'Flip a coin. If tails, Raikou does 20 damage to itself.',
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
      id: 'neo3-14',
      name: 'Suicune',
      nationalPokedexNumber: 245,
      imageUrl: 'https://images.pokemontcg.io/neo3/14.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo3/14_hires.png',
      types: [
        'Water'
      ],
      supertype: 'Pokémon',
      subtype: 'Basic',
      ability: {
        name: 'Crystal Body',
        text: 'Prevent all effects of your opponent\'s attacks, other than damage, done to Suicune. This power stops working while Suicune is Asleep, Confused, or Paralyzed.',
        type: 'Pokémon Power'
      },
      hp: '70',
      retreatCost: [
        'Colorless'
      ],
      convertedRetreatCost: 1,
      number: '14',
      artist: 'Ken Sugimori',
      rarity: 'Holo Rare',
      series: 'Neo',
      set: 'Neo Revelation',
      setCode: 'neo3',
      attacks: [
        {
          cost: [
            'Water',
            'Water',
            'Water'
          ],
          name: 'Aurora Wave',
          text: 'Flip 2 coins. If both are heads, the Defending Pokémon is now Paralyzed. If only 1 is heads, the Defending Pokémon is now Asleep.',
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
      id: 'neo3-15',
      name: 'Aerodactyl',
      nationalPokedexNumber: 142,
      imageUrl: 'https://images.pokemontcg.io/neo3/15.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo3/15_hires.png',
      types: [
        'Fighting'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 1',
      ability: {
        name: 'Prehistoric Memory',
        text: 'Whenever an Evolved Pokémon attacks (even if it\'s your opponent\'s), it can use any attack from its Basic card or any Evolution card attached to it. It still has to pay for that attack\'s Energy cost. This power stops working while Aerodactyl is Asleep, Confused, or Paralyzed.',
        type: 'Pokémon Power'
      },
      hp: '60',
      retreatCost: [
        'Colorless',
        'Colorless'
      ],
      convertedRetreatCost: 2,
      number: '15',
      artist: 'Shin-ichi Yoshida',
      rarity: 'Rare',
      series: 'Neo',
      set: 'Neo Revelation',
      setCode: 'neo3',
      attacks: [
        {
          cost: [
            'Colorless',
            'Colorless',
            'Colorless'
          ],
          name: 'Fly',
          text: 'Flip a coin. If heads, during your opponent\'s next turn, prevent all effects of attacks, including damage, done to Aerodactyl. If tails, this attack does nothing (not even damage).',
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
          type: 'Grass',
          value: '×2'
        }
      ]
    },
    {
      id: 'neo3-16',
      name: 'Celebi',
      nationalPokedexNumber: 251,
      imageUrl: 'https://images.pokemontcg.io/neo3/16.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo3/16_hires.png',
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
      number: '16',
      artist: 'Sumiyoshi Kizuki',
      rarity: 'Rare',
      series: 'Neo',
      set: 'Neo Revelation',
      setCode: 'neo3',
      attacks: [
        {
          cost: [
            'Grass',
            'Grass'
          ],
          name: 'Psychic Leaf',
          text: 'Flip a coin for each Energy attached to the Defending Pokémon. This attack does 10 damage plus 10 more damage for each heads. Remove a number of damage counters from Celebi equal to the damage done to the Defending Pokémon (after applying Weakness and Resistance). If Celebi has fewer damage counters than that, remove all of them.',
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
      id: 'neo3-17',
      name: 'Entei',
      nationalPokedexNumber: 244,
      imageUrl: 'https://images.pokemontcg.io/neo3/17.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo3/17_hires.png',
      types: [
        'Fire'
      ],
      supertype: 'Pokémon',
      subtype: 'Basic',
      ability: {
        name: 'Legendary Body',
        text: 'As long as Entei is your Active Pokémon, Entei and Energy cards attached to it aren\'t affected by effects from Trainer cards other than Trainer cards other than Stadium cards. As long as this power is active, discard all Trainer cards attached to Entei. (This power works even if Entei is Asleep, Confused, or Paralyzed.)',
        type: 'Pokémon Power'
      },
      hp: '60',
      number: '17',
      artist: 'Naoyo Kimura',
      rarity: 'Rare',
      series: 'Neo',
      set: 'Neo Revelation',
      setCode: 'neo3',
      attacks: [
        {
          cost: [
            'Fire',
            'Fire',
            'Fire'
          ],
          name: 'Mega Flame',
          text: 'Flip 2 coins. For each tails, discard 1 Fire Energy card from Entei, if it has any.',
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
      id: 'neo3-18',
      name: 'Ho-oh',
      nationalPokedexNumber: 250,
      imageUrl: 'https://images.pokemontcg.io/neo3/18.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo3/18_hires.png',
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
      number: '18',
      artist: 'Aya Kusube',
      rarity: 'Rare',
      series: 'Neo',
      set: 'Neo Revelation',
      setCode: 'neo3',
      attacks: [
        {
          cost: [
            'Colorless',
            'Colorless',
            'Colorless',
            'Colorless'
          ],
          name: 'Rainbow Burn',
          text: 'This attack does 30 damage plus 10 more for each type of Basic Energy card if any, attached to Ho-oh',
          damage: '30+',
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
      id: 'neo3-19',
      name: 'Kingdra',
      nationalPokedexNumber: 230,
      imageUrl: 'https://images.pokemontcg.io/neo3/19.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo3/19_hires.png',
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
      number: '19',
      artist: 'Mitsuhiro Arita',
      rarity: 'Rare',
      series: 'Neo',
      set: 'Neo Revelation',
      setCode: 'neo3',
      attacks: [
        {
          cost: [
            'Colorless'
          ],
          name: 'Genetic Memory',
          text: 'Use any attack from Kingdra\'s Basic Pokémon card or Evolution card. (Kingdra doesn\'t have to pay for that attack\'s Energy cost.)',
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
          name: 'Twister',
          text: 'Flip 2 coins. For each heads, choose an Energy card attached to the Defending Pokémon, if any, and discard it. If both are tails, this attack does nothing (not even damage).',
          damage: '',
          convertedEnergyCost: 4
        }
      ]
    },
    {
      id: 'neo3-20',
      name: 'Lugia',
      nationalPokedexNumber: 249,
      imageUrl: 'https://images.pokemontcg.io/neo3/20.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo3/20_hires.png',
      types: [
        'Psychic'
      ],
      supertype: 'Pokémon',
      subtype: 'Basic',
      hp: '90',
      retreatCost: [
        'Colorless',
        'Colorless'
      ],
      convertedRetreatCost: 2,
      number: '20',
      artist: 'Aya Kusube',
      rarity: 'Rare',
      series: 'Neo',
      set: 'Neo Revelation',
      setCode: 'neo3',
      attacks: [
        {
          cost: [
            'Colorless',
            'Colorless',
            'Colorless',
            'Colorless'
          ],
          name: 'Aerowing',
          text: 'You may flip a coin. If heads, this attack does 80 damage. If tails, this attack does nothing.',
          damage: '',
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
          type: 'Psychic',
          value: '×2'
        }
      ]
    },
    {
      id: 'neo3-21',
      name: 'Raichu',
      nationalPokedexNumber: 26,
      imageUrl: 'https://images.pokemontcg.io/neo3/21.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo3/21_hires.png',
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
      number: '21',
      artist: 'Masako Yamashita',
      rarity: 'Rare',
      series: 'Neo',
      set: 'Neo Revelation',
      setCode: 'neo3',
      attacks: [
        {
          cost: [
            'Lightning',
            'Colorless'
          ],
          name: 'Thundershock',
          text: 'Flip a coin. If heads, the Defending Pokémon is now Paralyzed.',
          damage: '20',
          convertedEnergyCost: 2
        },
        {
          cost: [
            'Lightning',
            'Lightning',
            'Lightning'
          ],
          name: 'Lightning Strike',
          text: 'You may discard all Lightning Energy cards attached to Raichu. If you do, this attack does 80 damage.',
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
      id: 'neo3-22',
      name: 'Raikou',
      nationalPokedexNumber: 243,
      imageUrl: 'https://images.pokemontcg.io/neo3/22.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo3/22_hires.png',
      types: [
        'Lightning'
      ],
      supertype: 'Pokémon',
      subtype: 'Basic',
      ability: {
        name: 'Legendary Body',
        text: 'As long as Raikou is your Active Pokémon, Raikou and Energy cards attached to it aren\'t affected by effects from Trainer cards other than Trainer cards other than Stadium cards. As long as this power is active, discard all Trainer cards attached to Raikou. (This power works even if Raikou is Asleep, Confused, or Paralyzed.)',
        type: 'Pokémon Power'
      },
      hp: '60',
      number: '22',
      artist: 'Naoyo Kimura',
      rarity: 'Rare',
      series: 'Neo',
      set: 'Neo Revelation',
      setCode: 'neo3',
      attacks: [
        {
          cost: [
            'Lightning',
            'Lightning',
            'Lightning'
          ],
          name: 'Lightning Spark',
          text: 'If your opponent has any Benched Pokémon, flip a coin. If heads, choose 1 of them and this attack does 20 damage to it. (Don\'t apply Weakness and Resistance for Benched Pokémon.)',
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
      id: 'neo3-23',
      name: 'Skarmory',
      nationalPokedexNumber: 227,
      imageUrl: 'https://images.pokemontcg.io/neo3/23.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo3/23_hires.png',
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
      number: '23',
      artist: 'Aya Kusube',
      rarity: 'Rare',
      series: 'Neo',
      set: 'Neo Revelation',
      setCode: 'neo3',
      attacks: [
        {
          cost: [
            'Colorless'
          ],
          name: 'Fury Attack',
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
          name: 'Agility',
          text: 'Flip a coin. If heads, during your opponent\'s next turn, prevent all effects of attacks, including damage, done to Skarmory.',
          damage: '20',
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
      id: 'neo3-24',
      name: 'Sneasel',
      nationalPokedexNumber: 215,
      imageUrl: 'https://images.pokemontcg.io/neo3/24.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo3/24_hires.png',
      types: [
        'Darkness'
      ],
      supertype: 'Pokémon',
      subtype: 'Basic',
      hp: '60',
      number: '24',
      artist: 'Sumiyoshi Kizuki',
      rarity: 'Rare',
      series: 'Neo',
      set: 'Neo Revelation',
      setCode: 'neo3',
      attacks: [
        {
          cost: [
            'Darkness'
          ],
          name: 'Swipe',
          text: 'Flip a coin. If heads, discard all Trainer cards attached to your opponent\'s Pokémon.',
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
      resistances: [
        {
          type: 'Psychic',
          value: '-30'
        }
      ]
    },
    {
      id: 'neo3-25',
      name: 'Starmie',
      nationalPokedexNumber: 121,
      imageUrl: 'https://images.pokemontcg.io/neo3/25.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo3/25_hires.png',
      types: [
        'Psychic'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 1',
      evolvesFrom: 'Staryu',
      hp: '70',
      retreatCost: [
        'Colorless'
      ],
      convertedRetreatCost: 1,
      number: '25',
      artist: 'Keita Komatsuya, CR CG gangs',
      rarity: 'Rare',
      series: 'Neo',
      set: 'Neo Revelation',
      setCode: 'neo3',
      attacks: [
        {
          cost: [
            'Water'
          ],
          name: 'Confuse Ray',
          text: 'Flip a coin. If heads, the Defending Pokémon is now Confused.',
          damage: '10',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Psychic',
            'Psychic',
            'Colorless'
          ],
          name: 'Core Stream',
          text: 'Choose an Energy type other than Colorless. This attack does 20 damage to each of your opponent\'s Pokémon with any Energy cards of that type attached to it. Don\'t apply Weakness and Resistance.',
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
      id: 'neo3-26',
      name: 'Sudowoodo',
      nationalPokedexNumber: 185,
      imageUrl: 'https://images.pokemontcg.io/neo3/26.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo3/26_hires.png',
      types: [
        'Fighting'
      ],
      supertype: 'Pokémon',
      subtype: 'Basic',
      ability: {
        name: 'Mimic',
        text: 'As long as Sudowoodo is your Active Pokémon, it copies all of the Defending Pokémon\'s attacks, including their costs. This power can\'t be used if Sudowoodo is Asleep, Confused, or Paralyzed.',
        type: 'Pokémon Power'
      },
      hp: '60',
      retreatCost: [
        'Colorless',
        'Colorless',
        'Colorless'
      ],
      convertedRetreatCost: 3,
      number: '26',
      artist: 'Sumiyoshi Kizuki',
      rarity: 'Rare',
      series: 'Neo',
      set: 'Neo Revelation',
      setCode: 'neo3',
      attacks: [
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
          type: 'Water',
          value: '×2'
        }
      ]
    },
    {
      id: 'neo3-27',
      name: 'Suicune',
      nationalPokedexNumber: 245,
      imageUrl: 'https://images.pokemontcg.io/neo3/27.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo3/27_hires.png',
      types: [
        'Water'
      ],
      supertype: 'Pokémon',
      subtype: 'Basic',
      ability: {
        name: 'Legendary Body',
        text: 'As long as Suicune is your Active Pokémon, Suicune and Energy cards attached to it aren\'t affected by effects from Trainer cards other than Trainer cards other than Stadium cards. As long as this power is active, discard all Trainer cards attached to Suicune. (This power works even if Suicune is Asleep, Confused, or Paralyzed.)',
        type: 'Pokémon Power'
      },
      hp: '60',
      number: '27',
      artist: 'Naoyo Kimura',
      rarity: 'Rare',
      series: 'Neo',
      set: 'Neo Revelation',
      setCode: 'neo3',
      attacks: [
        {
          cost: [
            'Water',
            'Water',
            'Water'
          ],
          name: 'Crystal Wave',
          text: 'Flip a coin. If heads, this attack does 30 damage plus 10 more damage. If tails, this attack does 30 damage and, if your opponent has any Benched Pokémon, he or she chooses 1 of them and switches it with the Defending Pokémon. (Do the damage before switching the Pokémon.)',
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
      id: 'neo3-28',
      name: 'Flaaffy',
      nationalPokedexNumber: 180,
      imageUrl: 'https://images.pokemontcg.io/neo3/28.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo3/28_hires.png',
      types: [
        'Lightning'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 1',
      evolvesFrom: 'Mareep',
      hp: '70',
      retreatCost: [
        'Colorless'
      ],
      convertedRetreatCost: 1,
      number: '28',
      artist: 'Toshinao Aoki',
      rarity: 'Uncommon',
      series: 'Neo',
      set: 'Neo Revelation',
      setCode: 'neo3',
      attacks: [
        {
          cost: [
            'Lightning'
          ],
          name: 'Electric Punch',
          text: '',
          damage: '20',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Lightning',
            'Colorless',
            'Colorless'
          ],
          name: 'Tail Shock',
          text: 'Flip a coin. If heads, this attack does 10 damage to each of your opponent\'s Benched Pokémon. (Don\'t apply Weakness and Resistance for Benched Pokémon.)',
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
      id: 'neo3-29',
      name: 'Golbat',
      nationalPokedexNumber: 42,
      imageUrl: 'https://images.pokemontcg.io/neo3/29.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo3/29_hires.png',
      types: [
        'Grass'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 1',
      evolvesFrom: 'Zubat',
      hp: '60',
      number: '29',
      artist: 'Masako Yamashita',
      rarity: 'Uncommon',
      series: 'Neo',
      set: 'Neo Revelation',
      setCode: 'neo3',
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
            'Grass',
            'Colorless'
          ],
          name: 'Poison Bite',
          text: 'If this attack damages the Defending Pokémon, the Defending Pokémon is now Poisoned and you remove a number of damage counters from Golbat equal to half that damage (rounded up to the nearest 10). If Golbat has fewer damage counters than that, remove all of them. Either way, the Defending Pokémon is now Poisoned.',
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
          type: 'Grass',
          value: '×2'
        }
      ]
    },
    {
      id: 'neo3-30',
      name: 'Graveler',
      nationalPokedexNumber: 75,
      imageUrl: 'https://images.pokemontcg.io/neo3/30.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo3/30_hires.png',
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
      number: '30',
      artist: 'Yukiko Baba',
      rarity: 'Uncommon',
      series: 'Neo',
      set: 'Neo Revelation',
      setCode: 'neo3',
      attacks: [
        {
          cost: [
            'Fighting',
            'Colorless'
          ],
          name: 'Earthquake',
          text: 'Does 10 damage to each of your own Benched Pokémon. (Don\'t apply Weakness and Resistance for Benched Pokémon.)',
          damage: '40',
          convertedEnergyCost: 2
        },
        {
          cost: [
            'Fighting',
            'Fighting',
            'Fighting'
          ],
          name: 'Rock Tumble',
          text: 'Don\'t apply Resistance.',
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
      id: 'neo3-31',
      name: 'Jynx',
      nationalPokedexNumber: 124,
      imageUrl: 'https://images.pokemontcg.io/neo3/31.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo3/31_hires.png',
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
      number: '31',
      artist: 'Tomokazu Komiya',
      rarity: 'Uncommon',
      series: 'Neo',
      set: 'Neo Revelation',
      setCode: 'neo3',
      attacks: [
        {
          cost: [
            'Water'
          ],
          name: 'Freezing Kiss Goodnight',
          text: 'The Defending Pokémon is now Asleep.',
          damage: '',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Psychic',
            'Psychic',
            'Colorless'
          ],
          name: 'Strange Dance',
          text: 'Flip a coin. If heads, this attack does 20 damage plus 20 more damage and the Defending Pokémon is now Confused. If tails, this attack does 20 damage.',
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
      id: 'neo3-32',
      name: 'Lanturn',
      nationalPokedexNumber: 171,
      imageUrl: 'https://images.pokemontcg.io/neo3/32.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo3/32_hires.png',
      types: [
        'Lightning'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 1',
      evolvesFrom: 'Chinchou',
      ability: {
        name: 'Submerge',
        text: 'Once during your turn (before your attack), you may change Lanturn\'s type to Water until the end of your turn. This power can\'t be used if Lanturn is Asleep, Confused, or Paralyzed. If Lanturn becomes Asleep, Confused, or Paralyzed after you have used this power, its type changes back to Lightning.',
        type: 'Pokémon Power'
      },
      hp: '80',
      retreatCost: [
        'Colorless',
        'Colorless'
      ],
      convertedRetreatCost: 2,
      number: '32',
      artist: 'Kagemaru Himeno',
      rarity: 'Uncommon',
      series: 'Neo',
      set: 'Neo Revelation',
      setCode: 'neo3',
      attacks: [
        {
          cost: [
            'Lightning',
            'Colorless',
            'Colorless'
          ],
          name: 'Blinding Light',
          text: 'Flip a coin. If heads, the Defending Pokémon is now Confused.',
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
      id: 'neo3-33',
      name: 'Magcargo',
      nationalPokedexNumber: 219,
      imageUrl: 'https://images.pokemontcg.io/neo3/33.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo3/33_hires.png',
      types: [
        'Fire'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 1',
      evolvesFrom: 'Slugma',
      ability: {
        name: 'Magma Pool',
        text: 'If Magcargo is your Active Pokémon and moves to the Bench, remove 1 Fire Energy card attached to Magcargo, if any, and attach it to the new Active Pokémon. (You can\'t use an Energy card that you used to pay for the Retreat Cost.)',
        type: 'Pokémon Power'
      },
      hp: '80',
      retreatCost: [
        'Colorless',
        'Colorless',
        'Colorless'
      ],
      convertedRetreatCost: 3,
      number: '33',
      artist: 'Shin-ichi Yoshida',
      rarity: 'Uncommon',
      series: 'Neo',
      set: 'Neo Revelation',
      setCode: 'neo3',
      attacks: [
        {
          cost: [
            'Fire',
            'Fire',
            'Fire'
          ],
          name: 'Lava Flow',
          text: 'You may discard any number of Fire Energy cards attached to Magcargo when you use this attack. If you do, this attack does 40 damage plus 20 more damage for each Fire Energy card you discarded in this way.',
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
      id: 'neo3-34',
      name: 'Octillery',
      nationalPokedexNumber: 224,
      imageUrl: 'https://images.pokemontcg.io/neo3/34.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo3/34_hires.png',
      types: [
        'Water'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 1',
      evolvesFrom: 'Remoraid',
      hp: '80',
      retreatCost: [
        'Colorless',
        'Colorless'
      ],
      convertedRetreatCost: 2,
      number: '34',
      artist: 'Tomokazu Komiya',
      rarity: 'Uncommon',
      series: 'Neo',
      set: 'Neo Revelation',
      setCode: 'neo3',
      attacks: [
        {
          cost: [
            'Water'
          ],
          name: 'Constrict',
          text: 'Flip a coin. If heads, the Defending Pokémon is now Paralyzed.',
          damage: '10',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Water',
            'Water',
            'Water'
          ],
          name: 'Octazooka',
          text: 'Flip a coin. If heads, whenever the Defending Pokémon attacks, your opponent flips a coin. If tails that attack does nothing. (Benching or evolving that Pokémon ends this effect.)',
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
      id: 'neo3-35',
      name: 'Parasect',
      nationalPokedexNumber: 47,
      imageUrl: 'https://images.pokemontcg.io/neo3/35.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo3/35_hires.png',
      types: [
        'Grass'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 1',
      evolvesFrom: 'Paras',
      hp: '60',
      retreatCost: [
        'Colorless',
        'Colorless'
      ],
      convertedRetreatCost: 2,
      number: '35',
      artist: 'Atsuko Nishida',
      rarity: 'Uncommon',
      series: 'Neo',
      set: 'Neo Revelation',
      setCode: 'neo3',
      attacks: [
        {
          cost: [
            'Grass',
            'Grass'
          ],
          name: 'Sleep Pinchers',
          text: 'Flip a coin. If heads, the Defending Pokémon is now Asleep.',
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
      id: 'neo3-36',
      name: 'Piloswine',
      nationalPokedexNumber: 221,
      imageUrl: 'https://images.pokemontcg.io/neo3/36.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo3/36_hires.png',
      types: [
        'Fighting'
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
      number: '36',
      artist: 'Atsuko Nishida',
      rarity: 'Uncommon',
      series: 'Neo',
      set: 'Neo Revelation',
      setCode: 'neo3',
      attacks: [
        {
          cost: [
            'Colorless',
            'Colorless'
          ],
          name: 'Nap',
          text: 'Remove 3 damage counters from Piloswine. If it has fewer damage counters than that, remove all of them.',
          damage: '',
          convertedEnergyCost: 2
        },
        {
          cost: [
            'Fighting',
            'Fighting',
            'Colorless',
            'Colorless'
          ],
          name: 'High-Speed Charge',
          text: 'Piloswine does 30 damage to itself. Piloswine can\'t use this attack during your next turn.',
          damage: '80',
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
      id: 'neo3-37',
      name: 'Seaking',
      nationalPokedexNumber: 119,
      imageUrl: 'https://images.pokemontcg.io/neo3/37.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo3/37_hires.png',
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
      number: '37',
      artist: 'Miki Tanaka',
      rarity: 'Uncommon',
      series: 'Neo',
      set: 'Neo Revelation',
      setCode: 'neo3',
      attacks: [
        {
          cost: [
            'Water'
          ],
          name: 'Rising Lunge',
          text: 'Flip a coin. If heads, this attack does 10 damage plus 10 more damage. If tails, this attack does 10 damage.',
          damage: '10+',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Water',
            'Water'
          ],
          name: 'Horn Swipe',
          text: 'Flip 2 coins. If both are heads, this attack does 20 damage plus 40 more damage. If 1 or both are tails, this attack does 20 damage.',
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
      id: 'neo3-38',
      name: 'Stantler',
      nationalPokedexNumber: 234,
      imageUrl: 'https://images.pokemontcg.io/neo3/38.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo3/38_hires.png',
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
      number: '38',
      artist: 'Yukiko Baba',
      rarity: 'Uncommon',
      series: 'Neo',
      set: 'Neo Revelation',
      setCode: 'neo3',
      attacks: [
        {
          cost: [
            'Colorless'
          ],
          name: 'Terrorize',
          text: 'If the Defending Pokémon is a Basic, choose 1 of its attacks. That Pokémon can\'t use that attack during your opponent\'s next turn.',
          damage: '',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Colorless',
            'Colorless',
            'Colorless'
          ],
          name: 'Overhead Toss',
          text: 'If you have any Benched Pokémon, flip a coin. If tails, this attack does 10 damage to 1 of them. (Don\'t apply Weakness and Resistance for Benched Pokémon.)',
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
      id: 'neo3-39',
      name: 'Unown [B]',
      nationalPokedexNumber: 201,
      imageUrl: 'https://images.pokemontcg.io/neo3/39.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo3/39_hires.png',
      types: [
        'Psychic'
      ],
      supertype: 'Pokémon',
      subtype: 'Basic',
      ability: {
        name: '[Bear]',
        text: 'Once during your turn (before your attack), you may move 1 damage counter from 1 of your Pokémon with Unown in its name to Unown B. This power can\'t be used if Unown B has 10 HP left. This power can be used even if Unown B is Asleep, Confused, or Paralyzed.',
        type: 'Pokémon Power'
      },
      hp: '50',
      retreatCost: [
        'Colorless'
      ],
      convertedRetreatCost: 1,
      number: '39',
      artist: 'CR CG gangs',
      rarity: 'Uncommon',
      series: 'Neo',
      set: 'Neo Revelation',
      setCode: 'neo3',
      attacks: [
        {
          cost: [
            'Psychic'
          ],
          name: 'Hidden Power',
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
      id: 'neo3-40',
      name: 'Unown [Y]',
      nationalPokedexNumber: 201,
      imageUrl: 'https://images.pokemontcg.io/neo3/40.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo3/40_hires.png',
      types: [
        'Psychic'
      ],
      supertype: 'Pokémon',
      subtype: 'Basic',
      ability: {
        name: '[Yield]',
        text: 'Once during your turn (before your attack), you may flip a coin. If heads, search your deck for a Psychic Energy card and attach it to 1 of your Pokémon with Unown in its name. Shuffle your deck afterward. This power can be used even if Unown Y is Asleep, Confused, or Paralyzed.',
        type: 'Pokémon Power'
      },
      hp: '40',
      retreatCost: [
        'Colorless'
      ],
      convertedRetreatCost: 1,
      number: '40',
      artist: 'CR CG gangs',
      rarity: 'Uncommon',
      series: 'Neo',
      set: 'Neo Revelation',
      setCode: 'neo3',
      attacks: [
        {
          cost: [
            'Psychic'
          ],
          name: 'Hidden Power',
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
      id: 'neo3-41',
      name: 'Aipom',
      nationalPokedexNumber: 190,
      imageUrl: 'https://images.pokemontcg.io/neo3/41.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo3/41_hires.png',
      types: [
        'Colorless'
      ],
      supertype: 'Pokémon',
      subtype: 'Basic',
      hp: '40',
      number: '41',
      artist: 'Sumiyoshi Kizuki',
      rarity: 'Common',
      series: 'Neo',
      set: 'Neo Revelation',
      setCode: 'neo3',
      attacks: [
        {
          cost: [
            'Colorless'
          ],
          name: 'Grab',
          text: 'Choose a Trainer card attached to 1 of your opponent\'s Pokémon. Your opponent shuffles that card into his or her deck.',
          damage: '',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Colorless',
            'Colorless'
          ],
          name: 'Tail Punch',
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
      id: 'neo3-42',
      name: 'Chinchou',
      nationalPokedexNumber: 170,
      imageUrl: 'https://images.pokemontcg.io/neo3/42.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo3/42_hires.png',
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
      number: '42',
      artist: 'Atsuko Nishida',
      rarity: 'Common',
      series: 'Neo',
      set: 'Neo Revelation',
      setCode: 'neo3',
      attacks: [
        {
          cost: [
            'Lightning'
          ],
          name: 'Positive Ion',
          text: 'Flip a coin. If heads, this attack does 10 damage plus 10 more damage. If tails, this attack does 10 damage.',
          damage: '10+',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Water'
          ],
          name: 'Negative Ion',
          text: 'If the Defending Pokémon attacks Chinchou during your opponent\'s next turn, any damage done to Chinchou is reduced by 10 (before applying Weakness and Resistance). (Benching either Pokémon ends this effect.)',
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
      id: 'neo3-43',
      name: 'Farfetch\'d',
      nationalPokedexNumber: 83,
      imageUrl: 'https://images.pokemontcg.io/neo3/43.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo3/43_hires.png',
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
      number: '43',
      artist: 'Miki Tanaka',
      rarity: 'Common',
      series: 'Neo',
      set: 'Neo Revelation',
      setCode: 'neo3',
      attacks: [
        {
          cost: [
            'Colorless'
          ],
          name: 'Gust',
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
          name: 'Leek Jab',
          text: 'This attack can\'t be used during your next turn. (Benching Farfetch\'d ends this effect.)',
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
          type: 'Lightning',
          value: '×2'
        }
      ]
    },
    {
      id: 'neo3-44',
      name: 'Geodude',
      nationalPokedexNumber: 74,
      imageUrl: 'https://images.pokemontcg.io/neo3/44.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo3/44_hires.png',
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
      number: '44',
      artist: 'Masako Yamashita',
      rarity: 'Common',
      series: 'Neo',
      set: 'Neo Revelation',
      setCode: 'neo3',
      attacks: [
        {
          cost: [
            'Fighting'
          ],
          name: 'Knuckle Punch',
          text: '',
          damage: '20',
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
      id: 'neo3-45',
      name: 'Goldeen',
      nationalPokedexNumber: 118,
      imageUrl: 'https://images.pokemontcg.io/neo3/45.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo3/45_hires.png',
      types: [
        'Water'
      ],
      supertype: 'Pokémon',
      subtype: 'Basic',
      hp: '40',
      number: '45',
      artist: 'Yuka Morii',
      rarity: 'Common',
      series: 'Neo',
      set: 'Neo Revelation',
      setCode: 'neo3',
      attacks: [
        {
          cost: [
            'Colorless'
          ],
          name: 'Fin Smack',
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
      id: 'neo3-46',
      name: 'Murkrow',
      nationalPokedexNumber: 198,
      imageUrl: 'https://images.pokemontcg.io/neo3/46.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo3/46_hires.png',
      types: [
        'Darkness'
      ],
      supertype: 'Pokémon',
      subtype: 'Basic',
      hp: '40',
      number: '46',
      artist: 'Hironobu Yoshida',
      rarity: 'Common',
      series: 'Neo',
      set: 'Neo Revelation',
      setCode: 'neo3',
      attacks: [
        {
          cost: [
            'Colorless'
          ],
          name: 'Call for Family',
          text: 'Search your deck for a card named Murkrow and put it onto your Bench. Shuffle your deck afterward. (You can\'t use this attack if your Bench is full.)',
          damage: '',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Colorless',
            'Colorless'
          ],
          name: 'Flock Attack',
          text: 'Flip a number of coins equal to the number of Murkrows on your Bench. This attack does 10 damage plus 10 more damage for each heads.',
          damage: '10+',
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
      id: 'neo3-47',
      name: 'Paras',
      nationalPokedexNumber: 46,
      imageUrl: 'https://images.pokemontcg.io/neo3/47.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo3/47_hires.png',
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
      number: '47',
      artist: 'Kagemaru Himeno',
      rarity: 'Common',
      series: 'Neo',
      set: 'Neo Revelation',
      setCode: 'neo3',
      attacks: [
        {
          cost: [
            'Grass'
          ],
          name: 'Sleep Spore',
          text: 'Flip a coin. If heads, the Defending Pokémon is now Asleep.',
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
          type: 'Fire',
          value: '×2'
        }
      ]
    },
    {
      id: 'neo3-48',
      name: 'Quagsire',
      nationalPokedexNumber: 195,
      imageUrl: 'https://images.pokemontcg.io/neo3/48.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo3/48_hires.png',
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
      number: '48',
      artist: 'Yuka Morii',
      rarity: 'Common',
      series: 'Neo',
      set: 'Neo Revelation',
      setCode: 'neo3',
      attacks: [
        {
          cost: [
            'Fighting',
            'Fighting'
          ],
          name: 'Mud Slap',
          text: '',
          damage: '30',
          convertedEnergyCost: 2
        },
        {
          cost: [
            'Water',
            'Water',
            'Colorless',
            'Colorless'
          ],
          name: 'Whirlpool',
          text: 'If the Defending Pokémon has any Energy cards attached to it, choose 1 of them and discard it.',
          damage: '40',
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
      id: 'neo3-49',
      name: 'Qwilfish',
      nationalPokedexNumber: 211,
      imageUrl: 'https://images.pokemontcg.io/neo3/49.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo3/49_hires.png',
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
      number: '49',
      artist: 'Sumiyoshi Kizuki',
      rarity: 'Common',
      series: 'Neo',
      set: 'Neo Revelation',
      setCode: 'neo3',
      attacks: [
        {
          cost: [
            'Water'
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
          name: 'Needle Storm',
          text: 'Flip a coin until you get tails. This attack does 20 damage times the number of heads you get.',
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
      id: 'neo3-50',
      name: 'Remoraid',
      nationalPokedexNumber: 223,
      imageUrl: 'https://images.pokemontcg.io/neo3/50.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo3/50_hires.png',
      types: [
        'Water'
      ],
      supertype: 'Pokémon',
      subtype: 'Basic',
      hp: '40',
      number: '50',
      artist: 'Miki Tanaka',
      rarity: 'Common',
      series: 'Neo',
      set: 'Neo Revelation',
      setCode: 'neo3',
      attacks: [
        {
          cost: [
            'Water'
          ],
          name: 'Sharpshooting',
          text: 'Flip a coin. If heads, choose 1 of your opponent\'s Pokémon. This attack does 20 damage to that Pokémon. Don\'t apply Weakness and Resistance.',
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
      id: 'neo3-51',
      name: 'Shuckle',
      nationalPokedexNumber: 213,
      imageUrl: 'https://images.pokemontcg.io/neo3/51.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo3/51_hires.png',
      types: [
        'Fighting'
      ],
      supertype: 'Pokémon',
      subtype: 'Basic',
      ability: {
        name: 'Hard Shell',
        text: 'Whenever an attack (including your own) does 40 or less damage to Shuckle (after applying Weakness and Resistance), reduce that damage to 10. (Any other effects of attacks still happen.) This power stops working while Shuckle is Asleep, Confused, or Paralyzed.',
        type: 'Pokémon Power'
      },
      hp: '40',
      retreatCost: [
        'Colorless'
      ],
      convertedRetreatCost: 1,
      number: '51',
      artist: 'Yuka Morii',
      rarity: 'Common',
      series: 'Neo',
      set: 'Neo Revelation',
      setCode: 'neo3',
      attacks: [
        {
          cost: [
            'Grass',
            'Grass'
          ],
          name: 'Toxic Saliva',
          text: 'Flip a coin. If heads, the Defending Pokémon is now Poisoned. It now takes 20 Poison damage after each player\'s turn (even if it was already Poisoned).',
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
      id: 'neo3-52',
      name: 'Skiploom',
      nationalPokedexNumber: 188,
      imageUrl: 'https://images.pokemontcg.io/neo3/52.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo3/52_hires.png',
      types: [
        'Grass'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 1',
      evolvesFrom: 'Hoppip',
      hp: '60',
      retreatCost: [
        'Colorless',
        'Colorless'
      ],
      convertedRetreatCost: 2,
      number: '52',
      artist: 'Mitsuhiro Arita',
      rarity: 'Common',
      series: 'Neo',
      set: 'Neo Revelation',
      setCode: 'neo3',
      attacks: [
        {
          cost: [
            'Colorless'
          ],
          name: 'Hop',
          text: '',
          damage: '20',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Grass'
          ],
          name: 'Mysterious Powder',
          text: 'Flip a coin. If heads, the Defending Pokémon is now Confused.',
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
      id: 'neo3-53',
      name: 'Slugma',
      nationalPokedexNumber: 218,
      imageUrl: 'https://images.pokemontcg.io/neo3/53.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo3/53_hires.png',
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
      number: '53',
      artist: 'Kagemaru Himeno',
      rarity: 'Common',
      series: 'Neo',
      set: 'Neo Revelation',
      setCode: 'neo3',
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
            'Fire',
            'Fire'
          ],
          name: 'Magma Ring',
          text: 'The Defending Pokémon can\'t retreat during your opponent\'s next turn.',
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
      id: 'neo3-54',
      name: 'Smoochum',
      nationalPokedexNumber: 238,
      imageUrl: 'https://images.pokemontcg.io/neo3/54.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo3/54_hires.png',
      types: [
        'Psychic'
      ],
      supertype: 'Pokémon',
      subtype: 'Basic',
      hp: '30',
      number: '54',
      artist: 'Atsuko Nishida',
      rarity: 'Common',
      series: 'Neo',
      set: 'Neo Revelation',
      setCode: 'neo3',
      text: [
        'If this Baby Pokémon is your Active Pokémon and your opponent tries to attack, your opponent flips a coin (before doing anything else required in order to use that attack). If tails, your opponent\'s turn ends without an attack.'
      ],
      attacks: [
        {
          cost: [
            'Colorless'
          ],
          name: 'Psykiss',
          text: 'Flip a coin. If heads, choose a Special Energy card attached to 1 of your opponent\'s Pokémon. Your opponent shuffles that card into his or her deck.',
          damage: '',
          convertedEnergyCost: 1
        }
      ]
    },
    {
      id: 'neo3-55',
      name: 'Snubbull',
      nationalPokedexNumber: 209,
      imageUrl: 'https://images.pokemontcg.io/neo3/55.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo3/55_hires.png',
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
      artist: 'Tomokazu Komiya',
      rarity: 'Common',
      series: 'Neo',
      set: 'Neo Revelation',
      setCode: 'neo3',
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
            'Colorless',
            'Colorless'
          ],
          name: 'Raging Headbutt',
          text: 'Flip a coin. If heads, this attack does 10 damage plus 10 damage times the number of damage counters on Snubbull. If tails, this attack does 10 damage.',
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
      id: 'neo3-56',
      name: 'Staryu',
      nationalPokedexNumber: 120,
      imageUrl: 'https://images.pokemontcg.io/neo3/56.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo3/56_hires.png',
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
      number: '56',
      artist: 'Mitsuhiro Arita',
      rarity: 'Common',
      series: 'Neo',
      set: 'Neo Revelation',
      setCode: 'neo3',
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
            'Water'
          ],
          name: 'Bubblebeam',
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
      id: 'neo3-57',
      name: 'Swinub',
      nationalPokedexNumber: 220,
      imageUrl: 'https://images.pokemontcg.io/neo3/57.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo3/57_hires.png',
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
      number: '57',
      artist: 'Miki Tanaka',
      rarity: 'Common',
      series: 'Neo',
      set: 'Neo Revelation',
      setCode: 'neo3',
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
            'Fighting',
            'Colorless'
          ],
          name: 'Take Down',
          text: 'Swinub does 10 damage to itself.',
          damage: '30',
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
      id: 'neo3-58',
      name: 'Unown [K]',
      nationalPokedexNumber: 201,
      imageUrl: 'https://images.pokemontcg.io/neo3/58.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo3/58_hires.png',
      types: [
        'Psychic'
      ],
      supertype: 'Pokémon',
      subtype: 'Basic',
      ability: {
        name: '[Keep]',
        text: 'Your opponent\'s attacks, Pokémon Powers, and Trainer cards can\'t discard Energy cards from your Pokémon with Unown in their names. (Any other effects of attacks still happen.)',
        type: 'Pokémon Power'
      },
      hp: '40',
      retreatCost: [
        'Colorless'
      ],
      convertedRetreatCost: 1,
      number: '58',
      artist: 'CR CG gangs',
      rarity: 'Common',
      series: 'Neo',
      set: 'Neo Revelation',
      setCode: 'neo3',
      attacks: [
        {
          cost: [
            'Psychic'
          ],
          name: 'Hidden Power',
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
      id: 'neo3-59',
      name: 'Zubat',
      nationalPokedexNumber: 41,
      imageUrl: 'https://images.pokemontcg.io/neo3/59.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo3/59_hires.png',
      types: [
        'Grass'
      ],
      supertype: 'Pokémon',
      subtype: 'Basic',
      hp: '40',
      number: '59',
      artist: 'Yukiko Baba',
      rarity: 'Common',
      series: 'Neo',
      set: 'Neo Revelation',
      setCode: 'neo3',
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
            'Grass'
          ],
          name: 'Poison Spray',
          text: 'The Defending Pokémon is now Poisoned.',
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
          type: 'Psychic',
          value: '×2'
        }
      ]
    },
    {
      id: 'neo3-60',
      name: 'Balloon Berry',
      imageUrl: 'https://images.pokemontcg.io/neo3/60.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo3/60_hires.png',
      supertype: 'Trainer',
      subtype: 'Pokémon Tool',
      number: '60',
      artist: 'Keiji Kinebuchi',
      rarity: 'Uncommon',
      series: 'Neo',
      set: 'Neo Revelation',
      setCode: 'neo3',
      text: [
        'When the Pokémon Balloon Berry is attached to retreats, discard Balloon Berry instead of discarding Energy cards.'
      ]
    },
    {
      id: 'neo3-61',
      name: 'Healing Field',
      imageUrl: 'https://images.pokemontcg.io/neo3/61.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo3/61_hires.png',
      supertype: 'Trainer',
      subtype: 'Stadium',
      number: '61',
      artist: 'Keiji Kinebuchi',
      rarity: 'Uncommon',
      series: 'Neo',
      set: 'Neo Revelation',
      setCode: 'neo3',
      text: [
        'Once during each player\'s turn, he or she may flip a coin. If heads, that player removes 2 damage counters from his or her Active Pokémon (1 if it only has 1).'
      ]
    },
    {
      id: 'neo3-62',
      name: 'Pokémon Breeder Fields',
      imageUrl: 'https://images.pokemontcg.io/neo3/62.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo3/62_hires.png',
      supertype: 'Trainer',
      subtype: '',
      number: '62',
      artist: 'Ken Sugimori',
      rarity: 'Uncommon',
      series: 'Neo',
      set: 'Neo Revelation',
      setCode: 'neo3',
      text: [
        'Flip a coin for each of your non-Baby Pokémon that can evolve. For each heads, search your deck for a later-Stage card that matches that Pokémon. Then put that card into your hand. Shuffle your deck afterwards.'
      ]
    },
    {
      id: 'neo3-63',
      name: 'Rocket\'s Hideout',
      imageUrl: 'https://images.pokemontcg.io/neo3/63.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo3/63_hires.png',
      supertype: 'Trainer',
      subtype: 'Stadium',
      number: '63',
      artist: 'Keiji Kinebuchi',
      rarity: 'Uncommon',
      series: 'Neo',
      set: 'Neo Revelation',
      setCode: 'neo3',
      text: [
        'Each Pokémon in play with Dark in its name (even your opponent\'s) gets +20 HP.'
      ]
    },
    {
      id: 'neo3-64',
      name: 'Old Rod',
      imageUrl: 'https://images.pokemontcg.io/neo3/64.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo3/64_hires.png',
      supertype: 'Trainer',
      subtype: '',
      number: '64',
      artist: 'Keiji Kinebuchi',
      rarity: 'Common',
      series: 'Neo',
      set: 'Neo Revelation',
      setCode: 'neo3',
      text: [
        'Flip 2 coins. If both are heads, put a Baby Pokémon, Basic, or Evolution card from your discard pile into your hand. If both are tails, put a Trainer card from your discard pile into your hand.'
      ]
    },
    {
      id: 'neo3-65',
      name: 'Shining Gyarados',
      nationalPokedexNumber: 130,
      imageUrl: 'https://images.pokemontcg.io/neo3/65.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo3/65_hires.png',
      types: [
        'Water'
      ],
      supertype: 'Pokémon',
      subtype: 'Basic',
      hp: '100',
      retreatCost: [
        'Colorless',
        'Colorless',
        'Colorless'
      ],
      convertedRetreatCost: 3,
      number: '65',
      artist: 'Ken Sugimori',
      rarity: 'Secret Rare',
      series: 'Neo',
      set: 'Neo Revelation',
      setCode: 'neo3',
      attacks: [
        {
          cost: [
            'Fighting',
            'Fighting',
            'Water'
          ],
          name: 'Outrage',
          text: 'Flip a coin. If heads, this attack does 30 damage plus 10 more damage for each damage counter on Shining Gyarados. If tails, this attack does nothing.',
          damage: '30+',
          convertedEnergyCost: 3
        },
        {
          cost: [
            'Water',
            'Water',
            'Fire',
            'Fire'
          ],
          name: 'Devastate',
          text: 'Discard 2 Fire Energy cards attached to Shining Gyarados or this attack does nothing. This attack does 10 damage to each of your opponent\'s Benched Pokémon. (Don\'t apply Weakness and Resistance for Benched Pokémon.) Then, flip a coin. If heads, choose 1 Energy card attached to each of your opponent\'s Pokémon that has any Energy cards attached to it and discard those Energy cards.',
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
          type: 'Grass',
          value: '×2'
        }
      ]
    },
    {
      id: 'neo3-66',
      name: 'Shining Magikarp',
      nationalPokedexNumber: 129,
      imageUrl: 'https://images.pokemontcg.io/neo3/66.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo3/66_hires.png',
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
      number: '66',
      artist: 'Ken Sugimori',
      rarity: 'Secret Rare', // Technically a shining pokemon, but the code in card-logic.js treats it the same way
      series: 'Neo',
      set: 'Neo Revelation',
      setCode: 'neo3',
      attacks: [
        {
          cost: [
            'Water'
          ],
          name: 'Gold Scale',
          text: 'Your opponent may draw 2 cards. Either way, you may draw 2 cards.',
          damage: '',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Psychic'
          ],
          name: 'Dragon Bond',
          text: 'Search your deck for a card named Gyarados, Dark Gyarados, or Shining Gyarados. Show it to your opponent and put it into your hand. Shuffle your deck afterward.',
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
    }
  ]