const neoDiscoveryCards = [
    {
      id: 'neo2-1',
      name: 'Espeon',
      nationalPokedexNumber: 196,
      imageUrl: 'https://images.pokemontcg.io/neo2/1.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo2/1_hires.png',
      types: [
        'Psychic'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 1',
      evolvesFrom: 'Dodrio',
      hp: '80',
      number: '1',
      artist: 'Atsuko Nishida',
      rarity: 'Holo Rare',
      series: 'Neo',
      set: 'Neo Discovery',
      setCode: 'neo2',
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
            'Psychic',
            'Psychic',
            'Colorless'
          ],
          name: 'Psychic',
          text: 'Does 30 damage plus 10 more for each Energy Card attached to the Defending Pokémon.',
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
      id: 'neo2-2',
      name: 'Forretress',
      nationalPokedexNumber: 205,
      imageUrl: 'https://images.pokemontcg.io/neo2/2.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo2/2_hires.png',
      types: [
        'Metal'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 1',
      evolvesFrom: 'Pineco',
      ability: {
        name: 'Spikes',
        text: 'During your opponent\'s turn, whenever 1 of your opponent\'s Benched Pokémon becomes his or her Active Pokémon, Forretress does 10 damage to it. (Don\'t apply Weakness and Resistance.) This power stops working if Forretress is Asleep, Confused, or Paralyzed.',
        type: 'Pokémon Power'
      },
      hp: '80',
      retreatCost: [
        'Colorless',
        'Colorless',
        'Colorless'
      ],
      convertedRetreatCost: 3,
      number: '2',
      artist: 'CR CG gangs',
      rarity: 'Holo Rare',
      series: 'Neo',
      set: 'Neo Discovery',
      setCode: 'neo2',
      attacks: [
        {
          cost: [
            'Metal',
            'Colorless',
            'Colorless'
          ],
          name: 'Rapid Spin',
          text: 'If your opponent has any Benched Pokémon, he or she chooses 1 of them and switches it with their Active Pokémon; then, if you have any Benched Pokémon, you switch 1 of them with your Active Pokémon. (Do the damage before switching the Pokémon.)',
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
      id: 'neo2-3',
      name: 'Hitmontop',
      nationalPokedexNumber: 237,
      imageUrl: 'https://images.pokemontcg.io/neo2/3.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo2/3_hires.png',
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
      number: '3',
      artist: 'Sumiyoshi Kizuki',
      rarity: 'Holo Rare',
      series: 'Neo',
      set: 'Neo Discovery',
      setCode: 'neo2',
      attacks: [
        {
          cost: [
            'Fighting'
          ],
          name: 'Detect',
          text: 'Flip a coin. If heads, during your opponent\'s next turn, prevent all effects of attacks, including damage, done to Hitmontop.',
          damage: '',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Fighting',
            'Fighting',
            'Fighting'
          ],
          name: 'Triple Kick',
          text: 'Flip 3 coins. This attack does 30 times the number of heads.',
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
      id: 'neo2-4',
      name: 'Houndoom',
      nationalPokedexNumber: 229,
      imageUrl: 'https://images.pokemontcg.io/neo2/4.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo2/4_hires.png',
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
      number: '4',
      artist: 'Shin-ichi Yoshida',
      rarity: 'Holo Rare',
      series: 'Neo',
      set: 'Neo Discovery',
      setCode: 'neo2',
      attacks: [
        {
          cost: [
            'Darkness',
            'Colorless',
            'Colorless'
          ],
          name: 'Crunch',
          text: 'Until the end of your next turn, if an attack damages the Defending Pokémon (after applying Weakness and Resistance), that attack does 20 more damage to the Defending Pokémon.',
          damage: '30',
          convertedEnergyCost: 3
        },
        {
          cost: [
            'Fire',
            'Fire',
            'Colorless'
          ],
          name: 'Flamethrower',
          text: 'Discard 1 Fire Energy card attached to Houndoom or this attack does nothing.',
          damage: '50',
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
      id: 'neo2-5',
      name: 'Houndour',
      nationalPokedexNumber: 228,
      imageUrl: 'https://images.pokemontcg.io/neo2/5.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo2/5_hires.png',
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
      number: '5',
      artist: 'Aya Kusube',
      rarity: 'Holo Rare',
      series: 'Neo',
      set: 'Neo Discovery',
      setCode: 'neo2',
      attacks: [
        {
          cost: [
            'Fire'
          ],
          name: 'Smog',
          text: 'Flip a coin. If heads, the Defending Pokémon is now Poisoned.',
          damage: '',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Fire',
            'Fire'
          ],
          name: 'Collect Fire',
          text: 'If there are any Fire Energy in your discard pile, choose 1 of them and attach it to Houndour.',
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
      id: 'neo2-6',
      name: 'Kabutops',
      nationalPokedexNumber: 141,
      imageUrl: 'https://images.pokemontcg.io/neo2/6.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo2/6_hires.png',
      types: [
        'Water'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 2',
      evolvesFrom: 'Kabuto',
      hp: '90',
      retreatCost: [
        'Colorless',
        'Colorless'
      ],
      convertedRetreatCost: 2,
      number: '6',
      artist: 'Kimiya Masago',
      rarity: 'Holo Rare',
      series: 'Neo',
      set: 'Neo Discovery',
      setCode: 'neo2',
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
            'Fighting'
          ],
          name: 'Hydrocutter',
          text: 'Flip a number of coins equal to the number of Energy cards attached to Kabutops. This attack does 40 times the number of heads. You can\'t flips more than 3 coins in this way.',
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
      id: 'neo2-7',
      name: 'Magnemite',
      nationalPokedexNumber: 81,
      imageUrl: 'https://images.pokemontcg.io/neo2/7.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo2/7_hires.png',
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
      number: '7',
      artist: 'K. Hoshiba, CR CG gangs',
      rarity: 'Holo Rare',
      series: 'Neo',
      set: 'Neo Discovery',
      setCode: 'neo2',
      attacks: [
        {
          cost: [
            'Colorless'
          ],
          name: 'Lock-on',
          text: 'During your next turn, treat any tails flipped when using Magnemite\'s Electric Bolt attack on the Defending Pokémon as if they were heads. (Benching or evolving either Pokémon ends this effect.)',
          damage: '',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Lightning',
            'Colorless'
          ],
          name: 'Electric Bolt',
          text: 'Flip 2 coins. If both are heads, the Defending Pokémon is now Paralyzed. If either of them is tails, this attack does nothing (not even damage).',
          damage: '',
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
      id: 'neo2-8',
      name: 'Politoed',
      nationalPokedexNumber: 186,
      imageUrl: 'https://images.pokemontcg.io/neo2/8.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo2/8_hires.png',
      types: [
        'Water'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 2',
      evolvesFrom: 'Poliwhirl',
      ability: {
        name: 'Frog Song',
        text: 'Whenever Politoed\'s attack damages the Defending Pokémon (after applying Weakness and Resistance), if there are more than 3 Poliwags, Poliwhirls, Poliwraths, and/or Politoeds in play (including your opponent\'s), that attack does 40 more damage (no matter how many heads you get). This power stops working while Politoed is Asleep, Confused, or Paralyzed.',
        type: 'Pokémon Power'
      },
      hp: '100',
      retreatCost: [
        'Colorless',
        'Colorless',
        'Colorless'
      ],
      convertedRetreatCost: 3,
      number: '8',
      artist: 'Tomokazu Komiya',
      rarity: 'Holo Rare',
      series: 'Neo',
      set: 'Neo Discovery',
      setCode: 'neo2',
      attacks: [
        {
          cost: [
            'Water',
            'Water',
            'Colorless',
            'Colorless'
          ],
          name: 'Doubleslap',
          text: 'Flip 2 coins. This attack does 40 times the number of heads.',
          damage: '',
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
      id: 'neo2-9',
      name: 'Poliwrath',
      nationalPokedexNumber: 62,
      imageUrl: 'https://images.pokemontcg.io/neo2/9.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo2/9_hires.png',
      types: [
        'Fighting'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 2',
      evolvesFrom: 'Poliwhirl',
      hp: '90',
      retreatCost: [
        'Colorless',
        'Colorless'
      ],
      convertedRetreatCost: 2,
      number: '9',
      artist: 'Shin-ichi Yoshida',
      rarity: 'Holo Rare',
      series: 'Neo',
      set: 'Neo Discovery',
      setCode: 'neo2',
      attacks: [
        {
          cost: [
            'Fighting',
            'Colorless'
          ],
          name: 'Corkscrew Punch',
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
          name: 'Submission',
          text: 'Poliwrath does 20 damage to itself.',
          damage: '70',
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
      id: 'neo2-10',
      name: 'Scizor',
      nationalPokedexNumber: 212,
      imageUrl: 'https://images.pokemontcg.io/neo2/10.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo2/10_hires.png',
      types: [
        'Metal'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 1',
      evolvesFrom: 'Scyther',
      hp: '80',
      retreatCost: [
        'Colorless',
        'Colorless'
      ],
      convertedRetreatCost: 2,
      number: '10',
      artist: 'Kimiya Masago',
      rarity: 'Holo Rare',
      series: 'Neo',
      set: 'Neo Discovery',
      setCode: 'neo2',
      attacks: [
        {
          cost: [
            'Metal'
          ],
          name: 'False Swipe',
          text: 'Does damage equal to half the Defending Pokémon\'s remaining HP (rounded down to the nearest 10).',
          damage: '',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Colorless',
            'Colorless',
            'Colorless'
          ],
          name: 'Double Claw',
          text: 'Flip 2 coins. This attack does 20 times the number of heads.',
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
      id: 'neo2-11',
      name: 'Smeargle',
      nationalPokedexNumber: 235,
      imageUrl: 'https://images.pokemontcg.io/neo2/11.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo2/11_hires.png',
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
      number: '11',
      artist: 'Hironobu Yoshida',
      rarity: 'Holo Rare',
      series: 'Neo',
      set: 'Neo Discovery',
      setCode: 'neo2',
      attacks: [
        {
          cost: [
            'Colorless',
            'Colorless'
          ],
          name: 'Sketch',
          text: 'If the Defending Pokémon attacked last turn, and Smeargle was in play during that attack, Smeargle copies that attack except for its Energy costs and anything else required in order to use that attack.',
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
      id: 'neo2-12',
      name: 'Tyranitar',
      nationalPokedexNumber: 248,
      imageUrl: 'https://images.pokemontcg.io/neo2/12.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo2/12_hires.png',
      types: [
        'Darkness'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 2',
      evolvesFrom: 'Piloswine',
      hp: '100',
      retreatCost: [
        'Colorless',
        'Colorless',
        'Colorless'
      ],
      convertedRetreatCost: 3,
      number: '12',
      artist: 'Hironobu Yoshida',
      rarity: 'Holo Rare',
      series: 'Neo',
      set: 'Neo Discovery',
      setCode: 'neo2',
      attacks: [
        {
          cost: [
            'Colorless',
            'Colorless',
            'Colorless'
          ],
          name: 'Slam',
          text: 'Flip 2 coins. This attack does 30 times the number of heads.',
          damage: '',
          convertedEnergyCost: 3
        },
        {
          cost: [
            'Darkness',
            'Darkness',
            'Colorless',
            'Colorless'
          ],
          name: 'Trample',
          text: 'For each Benched Pokémon in play (yours and your opponent\'s), flip a coin. If heads, this attack does 30 damage to that Pokémon. (Don\'t apply Weakness and Resistance for Benched Pokémon.)',
          damage: '50',
          convertedEnergyCost: 4
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
      id: 'neo2-13',
      name: 'Umbreon',
      nationalPokedexNumber: 197,
      imageUrl: 'https://images.pokemontcg.io/neo2/13.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo2/13_hires.png',
      types: [
        'Darkness'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 1',
      evolvesFrom: 'Eevee',
      hp: '80',
      retreatCost: [
        'Colorless'
      ],
      convertedRetreatCost: 1,
      number: '13',
      artist: 'Kimiya Masago',
      rarity: 'Holo Rare',
      series: 'Neo',
      set: 'Neo Discovery',
      setCode: 'neo2',
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
            'Darkness',
            'Darkness',
            'Colorless'
          ],
          name: 'Feint Attack',
          text: 'Choose 1 of your opponent\'s Pokémon. This attack does 30 damage to that Pokémon. This attack\'s damage isn\'t affected by Weakness, Resistance, Pokémon Powers or any other effects on the Defending Pokémon.',
          damage: '30',
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
      id: 'neo2-14',
      name: 'Unown [A]',
      nationalPokedexNumber: 201,
      imageUrl: 'https://images.pokemontcg.io/neo2/14.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo2/14_hires.png',
      types: [
        'Psychic'
      ],
      supertype: 'Pokémon',
      subtype: 'Basic',
      ability: {
        name: 'Anger',
        text: 'Whenever 1 of your Pokémon with Unown in its name uses its Hidden Power attack, that attack does 10 more damage for each damage counter on Unown A. If you have more than 1 Unown A in play, use only 1 Anger for each attack.',
        type: 'Pokémon Power'
      },
      hp: '40',
      retreatCost: [
        'Colorless'
      ],
      convertedRetreatCost: 1,
      number: '14',
      artist: 'CR CG gangs',
      rarity: 'Holo Rare',
      series: 'Neo',
      set: 'Neo Discovery',
      setCode: 'neo2',
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
      id: 'neo2-15',
      name: 'Ursaring',
      nationalPokedexNumber: 217,
      imageUrl: 'https://images.pokemontcg.io/neo2/15.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo2/15_hires.png',
      types: [
        'Colorless'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 1',
      evolvesFrom: 'Teddiursa',
      hp: '80',
      retreatCost: [
        'Colorless',
        'Colorless',
        'Colorless'
      ],
      convertedRetreatCost: 3,
      number: '15',
      artist: 'Naoyo Kimura',
      rarity: 'Holo Rare',
      series: 'Neo',
      set: 'Neo Discovery',
      setCode: 'neo2',
      attacks: [
        {
          cost: [
            'Colorless',
            'Colorless'
          ],
          name: 'Headpress',
          text: 'Flip a coin. If heads, the Defending Pokémon is now Paralyzed. If tails, this attack does nothing (not even damage).',
          damage: '',
          convertedEnergyCost: 2
        },
        {
          cost: [
            'Colorless',
            'Colorless',
            'Colorless',
            'Colorless'
          ],
          name: 'Double Lariat',
          text: 'Flip 2 coins. This attack does 40 times the number of heads.',
          damage: '',
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
      id: 'neo2-16',
      name: 'Wobbuffet',
      nationalPokedexNumber: 202,
      imageUrl: 'https://images.pokemontcg.io/neo2/16.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo2/16_hires.png',
      types: [
        'Psychic'
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
      number: '16',
      artist: 'Hironobu Yoshida',
      rarity: 'Holo Rare',
      series: 'Neo',
      set: 'Neo Discovery',
      setCode: 'neo2',
      attacks: [
        {
          cost: [
            'Psychic'
          ],
          name: 'Counter',
          text: 'If an attack damages Wobbuffet during your opponent\'s next turn (even if Wobbuffet is knocked out), flip a coin. If heads, Wobbuffet attacks the Defending Pokémon for an equal amount of damage.',
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
      id: 'neo2-17',
      name: 'Yanma',
      nationalPokedexNumber: 193,
      imageUrl: 'https://images.pokemontcg.io/neo2/17.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo2/17_hires.png',
      types: [
        'Grass'
      ],
      supertype: 'Pokémon',
      subtype: 'Basic',
      hp: '60',
      number: '17',
      artist: 'Atsuko Nishida',
      rarity: 'Holo Rare',
      series: 'Neo',
      set: 'Neo Discovery',
      setCode: 'neo2',
      attacks: [
        {
          cost: [
            'Grass'
          ],
          name: 'Shockwave',
          text: 'Flip a coin. If heads, this attack does 10 damage to each of your opponent\'s Pokémon. Don\'t apply Weakness and Resistance. Then, if your opponent has any Benched Pokémon, he or she chooses 1 of them and switches it with the Defending Pokémon.',
          damage: '',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Grass',
            'Grass',
            'Grass'
          ],
          name: 'Swift',
          text: 'This attack\'s damage isn\'t affected by Weakness, Resistance, Pokémon Powers, or any other effects on the Defending Pokémon.',
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
      id: 'neo2-18',
      name: 'Beedrill',
      nationalPokedexNumber: 15,
      imageUrl: 'https://images.pokemontcg.io/neo2/18.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo2/18_hires.png',
      types: [
        'Grass'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 2',
      evolvesFrom: 'Kakuna',
      hp: '80',
      number: '18',
      artist: 'Aya Kusube',
      rarity: 'Rare',
      series: 'Neo',
      set: 'Neo Discovery',
      setCode: 'neo2',
      attacks: [
        {
          cost: [
            'Grass'
          ],
          name: 'Triple Poison',
          text: 'Flip a coin. If heads, the Defending Pokémon is now Poisoned. Your opponent now puts 3 damage counters instead of 1 after each player\'s turn (even if it was already Poisoned).',
          damage: '',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Grass',
            'Grass',
            'Colorless'
          ],
          name: 'Pin Missile',
          text: 'Flip 4 coins. This attack does 20 times the number of heads.',
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
      id: 'neo2-19',
      name: 'Butterfree',
      nationalPokedexNumber: 12,
      imageUrl: 'https://images.pokemontcg.io/neo2/19.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo2/19_hires.png',
      types: [
        'Grass'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 2',
      evolvesFrom: 'Metapod',
      hp: '80',
      retreatCost: [
        'Colorless'
      ],
      convertedRetreatCost: 1,
      number: '19',
      artist: 'Atsuko Nishida',
      rarity: 'Rare',
      series: 'Neo',
      set: 'Neo Discovery',
      setCode: 'neo2',
      attacks: [
        {
          cost: [
            'Grass',
            'Colorless'
          ],
          name: 'Magic Dust',
          text: 'Flip a coin. If heads, the Defending Pokémon is now either Asleep, Confused, Paralyzed, or Poisoned (your choice).',
          damage: '',
          convertedEnergyCost: 2
        },
        {
          cost: [
            'Grass',
            'Grass',
            'Colorless'
          ],
          name: 'Hyper Reverse',
          text: 'Does 10 damage times the number of Energy cards attached to the Defending Pokémon. After doing damage, remove a number of damage counters from Butterfree equal to the amount of damage done to the Defending Pokémon (after applying Weakness and Resistance).',
          damage: '10×',
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
      id: 'neo2-20',
      name: 'Espeon',
      nationalPokedexNumber: 196,
      imageUrl: 'https://images.pokemontcg.io/neo2/20.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo2/20_hires.png',
      types: [
        'Psychic'
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
      artist: 'Naoyo Kimura',
      rarity: 'Rare',
      series: 'Neo',
      set: 'Neo Discovery',
      setCode: 'neo2',
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
            'Psychic',
            'Psychic',
            'Colorless'
          ],
          name: 'Psybeam',
          text: 'Flip a coin. If heads, the Defending Pokémon is now Confused.',
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
      id: 'neo2-21',
      name: 'Forretress',
      nationalPokedexNumber: 205,
      imageUrl: 'https://images.pokemontcg.io/neo2/21.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo2/21_hires.png',
      types: [
        'Metal'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 1',
      evolvesFrom: 'Pineco',
      ability: {
        name: 'Spikes',
        text: 'During your opponent\'s turn, whenever 1 of your opponent\'s Benched Pokémon becomes his or her Active Pokémon, Forretress does 10 damage to it. (Don\'t apply Weakness and Resistance.) This power stops working if Forretress is Asleep, Confused, or Paralyzed.',
        type: 'Pokémon Power'
      },
      hp: '80',
      retreatCost: [
        'Colorless',
        'Colorless',
        'Colorless'
      ],
      convertedRetreatCost: 3,
      number: '21',
      artist: 'CR CG gangs',
      rarity: 'Rare',
      series: 'Neo',
      set: 'Neo Discovery',
      setCode: 'neo2',
      attacks: [
        {
          cost: [
            'Metal',
            'Colorless',
            'Colorless'
          ],
          name: 'Rapid Spin',
          text: 'If your opponent has any Benched Pokémon, he or she chooses 1 of them and switches it with their Active Pokémon; then, if you have any Benched Pokémon, you switch 1 of them with your Active Pokémon. (Do the damage before switching the Pokémon.)',
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
      id: 'neo2-22',
      name: 'Hitmontop',
      nationalPokedexNumber: 237,
      imageUrl: 'https://images.pokemontcg.io/neo2/22.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo2/22_hires.png',
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
      number: '22',
      artist: 'Sumiyoshi Kizuki',
      rarity: 'Rare',
      series: 'Neo',
      set: 'Neo Discovery',
      setCode: 'neo2',
      attacks: [
        {
          cost: [
            'Fighting'
          ],
          name: 'Detect',
          text: 'Flip a coin. If heads, during your opponent\'s next turn, prevent all effects of attacks, including damage, done to Hitmontop.',
          damage: '',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Fighting',
            'Fighting',
            'Fighting'
          ],
          name: 'Triple Kick',
          text: 'Flip 3 coins. This attack does 30 times the number of heads.',
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
      id: 'neo2-23',
      name: 'Houndoom',
      nationalPokedexNumber: 229,
      imageUrl: 'https://images.pokemontcg.io/neo2/23.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo2/23_hires.png',
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
      number: '23',
      artist: 'Shin-ichi Yoshida',
      rarity: 'Rare',
      series: 'Neo',
      set: 'Neo Discovery',
      setCode: 'neo2',
      attacks: [
        {
          cost: [
            'Darkness',
            'Colorless',
            'Colorless'
          ],
          name: 'Crunch',
          text: 'Until the end of your next turn, if an attack damages the Defending Pokémon (after applying Weakness and Resistance), that attack does 20 more damage to the Defending Pokémon.',
          damage: '30',
          convertedEnergyCost: 3
        },
        {
          cost: [
            'Fire',
            'Fire',
            'Colorless'
          ],
          name: 'Flamethrower',
          text: 'Discard 1 Fire Energy card attached to Houndoom or this attack does nothing.',
          damage: '50',
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
      id: 'neo2-24',
      name: 'Houndour',
      nationalPokedexNumber: 228,
      imageUrl: 'https://images.pokemontcg.io/neo2/24.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo2/24_hires.png',
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
      number: '24',
      artist: 'Aya Kusube',
      rarity: 'Rare',
      series: 'Neo',
      set: 'Neo Discovery',
      setCode: 'neo2',
      attacks: [
        {
          cost: [
            'Fire'
          ],
          name: 'Smog',
          text: 'Flip a coin. If heads, the Defending Pokémon is now Poisoned.',
          damage: '',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Fire',
            'Fire'
          ],
          name: 'Collect Fire',
          text: 'If there are any Fire Energy in your discard pile, choose 1 of them and attach it to Houndour.',
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
      id: 'neo2-25',
      name: 'Kabutops',
      nationalPokedexNumber: 141,
      imageUrl: 'https://images.pokemontcg.io/neo2/25.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo2/25_hires.png',
      types: [
        'Water'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 2',
      evolvesFrom: 'Kabuto',
      hp: '90',
      retreatCost: [
        'Colorless',
        'Colorless'
      ],
      convertedRetreatCost: 2,
      number: '25',
      artist: 'Kimiya Masago',
      rarity: 'Rare',
      series: 'Neo',
      set: 'Neo Discovery',
      setCode: 'neo2',
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
            'Fighting'
          ],
          name: 'Hydrocutter',
          text: 'Flip a number of coins equal to the number of Energy cards attached to Kabutops. This attack does 40 times the number of heads. You can\'t flips more than 3 coins in this way.',
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
      id: 'neo2-26',
      name: 'Magnemite',
      nationalPokedexNumber: 81,
      imageUrl: 'https://images.pokemontcg.io/neo2/26.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo2/26_hires.png',
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
      number: '26',
      artist: 'K. Hoshiba, CR CG gangs',
      rarity: 'Rare',
      series: 'Neo',
      set: 'Neo Discovery',
      setCode: 'neo2',
      attacks: [
        {
          cost: [
            'Colorless'
          ],
          name: 'Lock-on',
          text: 'During your next turn, treat any tails flipped when using Magnemite\'s Electric Bolt attack on the Defending Pokémon as if they were heads. (Benching or evolving either Pokémon ends this effect.)',
          damage: '',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Lightning',
            'Colorless'
          ],
          name: 'Electric Bolt',
          text: 'Flip 2 coins. If both are heads, the Defending Pokémon is now Paralyzed. If either of them is tails, this attack does nothing (not even damage).',
          damage: '',
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
      id: 'neo2-27',
      name: 'Politoed',
      nationalPokedexNumber: 186,
      imageUrl: 'https://images.pokemontcg.io/neo2/27.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo2/27_hires.png',
      types: [
        'Water'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 2',
      evolvesFrom: 'Poliwhirl',
      ability: {
        name: 'Frog Song',
        text: 'Whenever Politoed\'s attack damages the Defending Pokémon (after applying Weakness and Resistance), if there are more than 3 Poliwags, Poliwhirls, Poliwraths, and/or Politoeds in play (including your opponent\'s), that attack does 40 more damage (no matter how many heads you get). This power stops working while Politoed is Asleep, Confused, or Paralyzed.',
        type: 'Pokémon Power'
      },
      hp: '100',
      retreatCost: [
        'Colorless',
        'Colorless',
        'Colorless'
      ],
      convertedRetreatCost: 3,
      number: '27',
      artist: 'Tomokazu Komiya',
      rarity: 'Rare',
      series: 'Neo',
      set: 'Neo Discovery',
      setCode: 'neo2',
      attacks: [
        {
          cost: [
            'Water',
            'Water',
            'Colorless',
            'Colorless'
          ],
          name: 'Doubleslap',
          text: 'Flip 2 coins. This attack does 40 times the number of heads.',
          damage: '',
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
      id: 'neo2-28',
      name: 'Poliwrath',
      nationalPokedexNumber: 62,
      imageUrl: 'https://images.pokemontcg.io/neo2/28.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo2/28_hires.png',
      types: [
        'Fighting'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 2',
      evolvesFrom: 'Poliwhirl',
      hp: '90',
      retreatCost: [
        'Colorless',
        'Colorless'
      ],
      convertedRetreatCost: 2,
      number: '28',
      artist: 'Shin-ichi Yoshida',
      rarity: 'Rare',
      series: 'Neo',
      set: 'Neo Discovery',
      setCode: 'neo2',
      attacks: [
        {
          cost: [
            'Fighting',
            'Colorless'
          ],
          name: 'Corkscrew Punch',
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
          name: 'Submission',
          text: 'Poliwrath does 20 damage to itself.',
          damage: '70',
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
      id: 'neo2-29',
      name: 'Scizor',
      nationalPokedexNumber: 212,
      imageUrl: 'https://images.pokemontcg.io/neo2/29.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo2/29_hires.png',
      types: [
        'Metal'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 1',
      evolvesFrom: 'Scyther',
      hp: '80',
      retreatCost: [
        'Colorless',
        'Colorless'
      ],
      convertedRetreatCost: 2,
      number: '29',
      artist: 'Kimiya Masago',
      rarity: 'Rare',
      series: 'Neo',
      set: 'Neo Discovery',
      setCode: 'neo2',
      attacks: [
        {
          cost: [
            'Metal'
          ],
          name: 'False Swipe',
          text: 'Does damage equal to half the Defending Pokémon\'s remaining HP (rounded down to the nearest 10).',
          damage: '',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Colorless',
            'Colorless',
            'Colorless'
          ],
          name: 'Double Claw',
          text: 'Flip 2 coins. This attack does 20 times the number of heads.',
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
      id: 'neo2-30',
      name: 'Smeargle',
      nationalPokedexNumber: 235,
      imageUrl: 'https://images.pokemontcg.io/neo2/30.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo2/30_hires.png',
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
      artist: 'Hironobu Yoshida',
      rarity: 'Rare',
      series: 'Neo',
      set: 'Neo Discovery',
      setCode: 'neo2',
      attacks: [
        {
          cost: [
            'Colorless',
            'Colorless'
          ],
          name: 'Sketch',
          text: 'If the Defending Pokémon attacked last turn, and Smeargle was in play during that attack, Smeargle copies that attack except for its Energy costs and anything else required in order to use that attack.',
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
      id: 'neo2-31',
      name: 'Tyranitar',
      nationalPokedexNumber: 248,
      imageUrl: 'https://images.pokemontcg.io/neo2/31.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo2/31_hires.png',
      types: [
        'Darkness'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 2',
      evolvesFrom: 'Pupitar',
      hp: '100',
      retreatCost: [
        'Colorless',
        'Colorless',
        'Colorless'
      ],
      convertedRetreatCost: 3,
      number: '31',
      artist: 'Hironobu Yoshida',
      rarity: 'Rare',
      series: 'Neo',
      set: 'Neo Discovery',
      setCode: 'neo2',
      attacks: [
        {
          cost: [
            'Colorless',
            'Colorless',
            'Colorless'
          ],
          name: 'Slam',
          text: 'Flip 2 coins. This attack does 30 times the number of heads.',
          damage: '',
          convertedEnergyCost: 3
        },
        {
          cost: [
            'Darkness',
            'Darkness',
            'Colorless',
            'Colorless'
          ],
          name: 'Trample',
          text: 'For each Benched Pokémon in play (yours and your opponent\'s), flip a coin. If heads, this attack does 30 damage to that Pokémon. (Don\'t apply Weakness and Resistance for Benched Pokémon.)',
          damage: '50',
          convertedEnergyCost: 4
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
      id: 'neo2-32',
      name: 'Umbreon',
      nationalPokedexNumber: 197,
      imageUrl: 'https://images.pokemontcg.io/neo2/32.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo2/32_hires.png',
      types: [
        'Darkness'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 1',
      evolvesFrom: 'Eevee',
      hp: '70',
      retreatCost: [
        'Colorless'
      ],
      convertedRetreatCost: 1,
      number: '32',
      artist: 'Naoyo Kimura',
      rarity: 'Rare',
      series: 'Neo',
      set: 'Neo Discovery',
      setCode: 'neo2',
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
            'Darkness',
            'Colorless',
            'Colorless'
          ],
          name: 'Pursuit',
          text: 'During your opponent\'s next turn, if the Defending Pokémon tries to retreat, do 10 damage to it. (Don\'t apply Weakness and Resistance.)',
          damage: '30',
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
      id: 'neo2-33',
      name: 'Unown [A]',
      nationalPokedexNumber: 201,
      imageUrl: 'https://images.pokemontcg.io/neo2/33.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo2/33_hires.png',
      types: [
        'Psychic'
      ],
      supertype: 'Pokémon',
      subtype: 'Basic',
      ability: {
        name: 'Anger',
        text: 'Whenever 1 of your Pokémon with Unown in its name uses its Hidden Power attack, that attack does 10 more damage for each damage counter on Unown A. If you have more than 1 Unown A in play, use only 1 Anger for each attack.',
        type: 'Pokémon Power'
      },
      hp: '40',
      retreatCost: [
        'Colorless'
      ],
      convertedRetreatCost: 1,
      number: '33',
      artist: 'CR CG gangs',
      rarity: 'Rare',
      series: 'Neo',
      set: 'Neo Discovery',
      setCode: 'neo2',
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
      id: 'neo2-34',
      name: 'Ursaring',
      nationalPokedexNumber: 217,
      imageUrl: 'https://images.pokemontcg.io/neo2/34.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo2/34_hires.png',
      types: [
        'Colorless'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 1',
      evolvesFrom: 'Teddiursa',
      hp: '80',
      retreatCost: [
        'Colorless',
        'Colorless',
        'Colorless'
      ],
      convertedRetreatCost: 3,
      number: '34',
      artist: 'Naoyo Kimura',
      rarity: 'Rare',
      series: 'Neo',
      set: 'Neo Discovery',
      setCode: 'neo2',
      attacks: [
        {
          cost: [
            'Colorless',
            'Colorless'
          ],
          name: 'Headpress',
          text: 'Flip a coin. If heads, the Defending Pokémon is now Paralyzed. If tails, this attack does nothing (not even damage).',
          damage: '',
          convertedEnergyCost: 2
        },
        {
          cost: [
            'Colorless',
            'Colorless',
            'Colorless',
            'Colorless'
          ],
          name: 'Double Lariat',
          text: 'Flip 2 coins. This attack does 40 times the number of heads.',
          damage: '',
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
      id: 'neo2-35',
      name: 'Wobbuffet',
      nationalPokedexNumber: 202,
      imageUrl: 'https://images.pokemontcg.io/neo2/35.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo2/35_hires.png',
      types: [
        'Psychic'
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
      number: '35',
      artist: 'Hironobu Yoshida',
      rarity: 'Rare',
      series: 'Neo',
      set: 'Neo Discovery',
      setCode: 'neo2',
      attacks: [
        {
          cost: [
            'Psychic'
          ],
          name: 'Counter',
          text: 'If an attack damages Wobbuffet during your opponent\'s next turn (even if Wobbuffet is knocked out), flip a coin. If heads, Wobbuffet attacks the Defending Pokémon for an equal amount of damage.',
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
      id: 'neo2-36',
      name: 'Yanma',
      nationalPokedexNumber: 193,
      imageUrl: 'https://images.pokemontcg.io/neo2/36.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo2/36_hires.png',
      types: [
        'Grass'
      ],
      supertype: 'Pokémon',
      subtype: 'Basic',
      hp: '60',
      number: '36',
      artist: 'Atsuko Nishida',
      rarity: 'Rare',
      series: 'Neo',
      set: 'Neo Discovery',
      setCode: 'neo2',
      attacks: [
        {
          cost: [
            'Grass'
          ],
          name: 'Shockwave',
          text: 'Flip a coin. If heads, this attack does 10 damage to each of your opponent\'s Pokémon. Don\'t apply Weakness and Resistance. Then, if your opponent has any Benched Pokémon, he or she chooses 1 of them and switches it with the Defending Pokémon.',
          damage: '',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Grass',
            'Grass',
            'Grass'
          ],
          name: 'Swift',
          text: 'This attack\'s damage isn\'t affected by Weakness, Resistance, Pokémon Powers, or any other effects on the Defending Pokémon.',
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
      id: 'neo2-37',
      name: 'Corsola',
      nationalPokedexNumber: 222,
      imageUrl: 'https://images.pokemontcg.io/neo2/37.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo2/37_hires.png',
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
      number: '37',
      artist: 'Yuka Morii',
      rarity: 'Uncommon',
      series: 'Neo',
      set: 'Neo Discovery',
      setCode: 'neo2',
      attacks: [
        {
          cost: [
            'Water'
          ],
          name: 'Recover',
          text: 'Discard 1 Water Energy attached to Corsola or this attack does nothing. Remove all damage counters from Corsola.',
          damage: '',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Fighting',
            'Fighting'
          ],
          name: 'Spike Cannon',
          text: 'Flip 2 coins. This attack does 30 times the number of heads.',
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
      id: 'neo2-38',
      name: 'Eevee',
      nationalPokedexNumber: 133,
      imageUrl: 'https://images.pokemontcg.io/neo2/38.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo2/38_hires.png',
      types: [
        'Colorless'
      ],
      supertype: 'Pokémon',
      subtype: 'Basic',
      ability: {
        name: 'Energy Evolution',
        text: 'Whenever you attach an Energy card to Eevee, flip a coin. If heads, search your deck for that evolves from Eevee that is the same type as the Energy card you attached to Eevee. Shuffle your deck afterward. This power can\'t be used if Eevee is Asleep, Confused, or Paralyzed.',
        type: 'Pokémon Power'
      },
      hp: '50',
      retreatCost: [
        'Colorless'
      ],
      convertedRetreatCost: 1,
      number: '38',
      artist: 'Aya Kusube',
      rarity: 'Uncommon',
      series: 'Neo',
      set: 'Neo Discovery',
      setCode: 'neo2',
      attacks: [
        {
          cost: [
            'Colorless'
          ],
          name: 'Smash Kick',
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
      id: 'neo2-39',
      name: 'Houndour',
      nationalPokedexNumber: 228,
      imageUrl: 'https://images.pokemontcg.io/neo2/39.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo2/39_hires.png',
      types: [
        'Darkness'
      ],
      supertype: 'Pokémon',
      subtype: 'Basic',
      hp: '40',
      retreatCost: [
        'Colorless'
      ],
      convertedRetreatCost: 1,
      number: '39',
      artist: 'Shin-ichi Yoshida',
      rarity: 'Uncommon',
      series: 'Neo',
      set: 'Neo Discovery',
      setCode: 'neo2',
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
            'Darkness',
            'Colorless'
          ],
          name: 'Plunder',
          text: 'Before doing damage, discard all Trainer cards attached to the Defending Pokémon.',
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
      id: 'neo2-40',
      name: 'Igglybuff',
      nationalPokedexNumber: 174,
      imageUrl: 'https://images.pokemontcg.io/neo2/40.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo2/40_hires.png',
      types: [
        'Colorless'
      ],
      supertype: 'Pokémon',
      subtype: 'Basic',
      ability: {
        name: 'Gaze',
        text: 'Once during your turn (before you attack), choose 1 of your opponent\'s Benched Pokémon that has a Pokémon Power. That power stops working until the end of this turn. This effect ends if that Pokémon leaves the Bench. (Pokémon Power)',
        type: 'Pokémon Power'
      },
      hp: '30',
      number: '40',
      artist: 'Miki Tanaka',
      rarity: 'Uncommon',
      series: 'Neo',
      set: 'Neo Discovery',
      setCode: 'neo2',
      text: [
        'If this Baby Pokémon is your Active Pokémon and your opponent tries to attack, your opponent flips a coin (before doing anything else required in order to use that attack). If tails, your opponent\'s turn ends without an attack.'
      ]
    },
    {
      id: 'neo2-41',
      name: 'Kakuna',
      nationalPokedexNumber: 14,
      imageUrl: 'https://images.pokemontcg.io/neo2/41.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo2/41_hires.png',
      types: [
        'Grass'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 1',
      evolvesFrom: 'Weedle',
      hp: '70',
      retreatCost: [
        'Colorless',
        'Colorless'
      ],
      convertedRetreatCost: 2,
      number: '41',
      artist: 'Yukiko Baba',
      rarity: 'Uncommon',
      series: 'Neo',
      set: 'Neo Discovery',
      setCode: 'neo2',
      attacks: [
        {
          cost: [
            'Grass',
            'Grass'
          ],
          name: 'Secrete Poison',
          text: 'During your opponent\'s next turn, whenever your opponent\'s attack damages Kakuna (even if Kakuna is knocked out), your opponent\'s Active Pokémon is now Poisoned and Kakuna does 10 damage to each of your opponent\'s Benched Pokémon. (Don\'t apply Weakness and Resistance for Benched Pokémon.)',
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
      id: 'neo2-42',
      name: 'Metapod',
      nationalPokedexNumber: 11,
      imageUrl: 'https://images.pokemontcg.io/neo2/42.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo2/42_hires.png',
      types: [
        'Grass'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 1',
      evolvesFrom: 'Caterpie',
      hp: '70',
      retreatCost: [
        'Colorless',
        'Colorless'
      ],
      convertedRetreatCost: 2,
      number: '42',
      artist: 'Sumiyoshi Kizuki',
      rarity: 'Uncommon',
      series: 'Neo',
      set: 'Neo Discovery',
      setCode: 'neo2',
      attacks: [
        {
          cost: [
            'Colorless',
            'Colorless'
          ],
          name: 'Harden',
          text: 'During your opponent\'s next turn, whenever 20 or less damage is done to Metapod (after applying Weakness and Resistance), prevent that damage. (Any other effects of attacks still happen.)',
          damage: '',
          convertedEnergyCost: 2
        },
        {
          cost: [
            'Grass',
            'Grass'
          ],
          name: 'Hatch',
          text: 'Flip a coin. If heads, remove all damage counters from Metapod. Then, search your deck for a card that evolves from Metapod and attach that card to Metapod. This counts as evolving Metapod. Shuffle your deck afterward.',
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
      id: 'neo2-43',
      name: 'Omastar',
      nationalPokedexNumber: 139,
      imageUrl: 'https://images.pokemontcg.io/neo2/43.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo2/43_hires.png',
      types: [
        'Fighting'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 2',
      evolvesFrom: 'Omanyte',
      hp: '80',
      retreatCost: [
        'Colorless',
        'Colorless'
      ],
      convertedRetreatCost: 2,
      number: '43',
      artist: 'Shin-ichi Yoshida',
      rarity: 'Uncommon',
      series: 'Neo',
      set: 'Neo Discovery',
      setCode: 'neo2',
      attacks: [
        {
          cost: [
            'Water'
          ],
          name: 'Squeeze',
          text: 'Flip a coin. If heads, this attack does 10 damage plus 20 more damage and the Defending Pokémon is now Paralyzed. If tails, this attack does 10 damage.',
          damage: '10+',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Water',
            'Water',
            'Water'
          ],
          name: 'Spike Barrage',
          text: 'Flip a number of coins equal to the number of Water Energy attached to Omastar. This attack does 20 damage plus 20 more for each heads.',
          damage: '20+',
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
      id: 'neo2-44',
      name: 'Poliwhirl',
      nationalPokedexNumber: 61,
      imageUrl: 'https://images.pokemontcg.io/neo2/44.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo2/44_hires.png',
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
      number: '44',
      artist: 'Kagemaru Himeno',
      rarity: 'Uncommon',
      series: 'Neo',
      set: 'Neo Discovery',
      setCode: 'neo2',
      attacks: [
        {
          cost: [
            'Colorless'
          ],
          name: 'Belly Drum',
          text: 'Put 3 damage counters on Poliwhirl. If this doesn\'t knock out Poliwhirl, search your deck for up to 2 Basic Energy cards and attach them to Poliwhirl. Shuffle your deck afterward.',
          damage: '',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Water',
            'Water',
            'Colorless'
          ],
          name: 'Water Gun',
          text: 'Does 30 damage plus 10 more damage for each Water Energy attached to Poliwhirl but not used to pay for this attack\'s Energy cost. You can\'t add more than 20 damage in this way.',
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
      id: 'neo2-45',
      name: 'Pupitar',
      nationalPokedexNumber: 247,
      imageUrl: 'https://images.pokemontcg.io/neo2/45.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo2/45_hires.png',
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
      number: '45',
      artist: 'Hironobu Yoshida',
      rarity: 'Uncommon',
      series: 'Neo',
      set: 'Neo Discovery',
      setCode: 'neo2',
      attacks: [
        {
          cost: [
            'Colorless',
            'Colorless'
          ],
          name: 'Skull Bash',
          text: '',
          damage: '20',
          convertedEnergyCost: 2
        },
        {
          cost: [
            'Fighting',
            'Fighting'
          ],
          name: 'Dust Devil',
          text: 'Does 10 damage to each non- Pokémon in play. Don\'t apply Weakness and Resistance.',
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
      id: 'neo2-46',
      name: 'Scyther',
      nationalPokedexNumber: 123,
      imageUrl: 'https://images.pokemontcg.io/neo2/46.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo2/46_hires.png',
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
      number: '46',
      artist: 'Kimiya Masago',
      rarity: 'Uncommon',
      series: 'Neo',
      set: 'Neo Discovery',
      setCode: 'neo2',
      attacks: [
        {
          cost: [
            'Grass',
            'Grass'
          ],
          name: 'Fury Cutter',
          text: 'Flip 4 coins. This attack does 10 damage plus 10 more damage if exactly 1 is heads, or 20 more damage if exactly 2 are heads, or 40 more damage if exactly 3 are heads, or 80 more damage if all 4 are heads.',
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
          type: 'Fire',
          value: '×2'
        }
      ]
    },
    {
      id: 'neo2-47',
      name: 'Unown [D]',
      nationalPokedexNumber: 201,
      imageUrl: 'https://images.pokemontcg.io/neo2/47.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo2/47_hires.png',
      types: [
        'Psychic'
      ],
      supertype: 'Pokémon',
      subtype: 'Basic',
      ability: {
        name: 'Darkness',
        text: 'Whenever a Darkness Pokémon damages 1 of your Pokémon, reduce that damage by 30 (after applying Weakness and Resistance). This power stops working if you have more than 1 Unown D in play. (This power even works if Unown D is Asleep, Confused, or Paralyzed.)',
        type: 'Pokémon Power'
      },
      hp: '40',
      retreatCost: [
        'Colorless'
      ],
      convertedRetreatCost: 1,
      number: '47',
      artist: 'CR CG gangs',
      rarity: 'Uncommon',
      series: 'Neo',
      set: 'Neo Discovery',
      setCode: 'neo2',
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
      id: 'neo2-48',
      name: 'Unown [F]',
      nationalPokedexNumber: 201,
      imageUrl: 'https://images.pokemontcg.io/neo2/48.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo2/48_hires.png',
      types: [
        'Psychic'
      ],
      supertype: 'Pokémon',
      subtype: 'Basic',
      ability: {
        name: '[Find]',
        text: 'Once during your turn (before you attack), if you have Unown F, Unown I, Unown N, and Unown D on your Bench, you may search your deck for a Trainer card. Show that card to your opponent, then put it into your hand. Shuffle your deck afterward.',
        type: 'Pokémon Power'
      },
      hp: '40',
      retreatCost: [
        'Colorless'
      ],
      convertedRetreatCost: 1,
      number: '48',
      artist: 'CR CG gangs',
      rarity: 'Uncommon',
      series: 'Neo',
      set: 'Neo Discovery',
      setCode: 'neo2',
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
      id: 'neo2-49',
      name: 'Unown [M]',
      nationalPokedexNumber: 201,
      imageUrl: 'https://images.pokemontcg.io/neo2/49.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo2/49_hires.png',
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
      number: '49',
      artist: 'CR CG gangs',
      rarity: 'Uncommon',
      series: 'Neo',
      set: 'Neo Discovery',
      setCode: 'neo2',
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
      id: 'neo2-50',
      name: 'Unown [N]',
      nationalPokedexNumber: 201,
      imageUrl: 'https://images.pokemontcg.io/neo2/50.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo2/50_hires.png',
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
      number: '50',
      artist: 'CR CG gangs',
      rarity: 'Uncommon',
      series: 'Neo',
      set: 'Neo Discovery',
      setCode: 'neo2',
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
      id: 'neo2-51',
      name: 'Unown [U]',
      nationalPokedexNumber: 201,
      imageUrl: 'https://images.pokemontcg.io/neo2/51.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo2/51_hires.png',
      types: [
        'Psychic'
      ],
      supertype: 'Pokémon',
      subtype: 'Basic',
      ability: {
        name: 'Undo',
        text: 'Once during your turn (before you attack), if you have Unown U, Unown N, Unown D, and Unown O on your Bench, you may return your Active Pokémon and all cards attached to it to your hand.',
        type: 'Pokémon Power'
      },
      hp: '40',
      retreatCost: [
        'Colorless'
      ],
      convertedRetreatCost: 1,
      number: '51',
      artist: 'CR CG gangs',
      rarity: 'Uncommon',
      series: 'Neo',
      set: 'Neo Discovery',
      setCode: 'neo2',
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
      id: 'neo2-52',
      name: 'Xatu',
      nationalPokedexNumber: 178,
      imageUrl: 'https://images.pokemontcg.io/neo2/52.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo2/52_hires.png',
      types: [
        'Psychic'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 1',
      evolvesFrom: 'Natu',
      hp: '70',
      retreatCost: [
        'Colorless'
      ],
      convertedRetreatCost: 1,
      number: '52',
      artist: 'Sumiyoshi Kizuki',
      rarity: 'Uncommon',
      series: 'Neo',
      set: 'Neo Discovery',
      setCode: 'neo2',
      attacks: [
        {
          cost: [
            'Psychic'
          ],
          name: 'Energy Cycle',
          text: 'Flip a coin. If heads, choose 1 Energy card attached to the Defending Pokémon and 1 of your opponent\'s Benched Pokémon. Attach that Energy card to that Pokémon.',
          damage: '',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Psychic',
            'Psychic',
            'Colorless'
          ],
          name: 'Super Psy',
          text: '',
          damage: '50',
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
      id: 'neo2-53',
      name: 'Caterpie',
      nationalPokedexNumber: 10,
      imageUrl: 'https://images.pokemontcg.io/neo2/53.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo2/53_hires.png',
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
      number: '53',
      artist: 'Yuka Morii',
      rarity: 'Common',
      series: 'Neo',
      set: 'Neo Discovery',
      setCode: 'neo2',
      attacks: [
        {
          cost: [
            'Colorless'
          ],
          name: 'Spin Tackle',
          text: 'Caterpie does 10 damage to itself.',
          damage: '20',
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
      id: 'neo2-54',
      name: 'Dunsparce',
      nationalPokedexNumber: 206,
      imageUrl: 'https://images.pokemontcg.io/neo2/54.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo2/54_hires.png',
      types: [
        'Colorless'
      ],
      supertype: 'Pokémon',
      subtype: 'Basic',
      hp: '30',
      number: '54',
      artist: 'Yukiko Baba',
      rarity: 'Common',
      series: 'Neo',
      set: 'Neo Discovery',
      setCode: 'neo2',
      attacks: [
        {
          cost: [
            'Colorless'
          ],
          name: 'Glare',
          text: 'Flip a coin. If heads, the Defending Pokémon is now Paralyzed.',
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
      id: 'neo2-55',
      name: 'Hoppip',
      nationalPokedexNumber: 187,
      imageUrl: 'https://images.pokemontcg.io/neo2/55.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo2/55_hires.png',
      types: [
        'Grass'
      ],
      supertype: 'Pokémon',
      subtype: 'Basic',
      hp: '30',
      number: '55',
      artist: 'Kagemaru Himeno',
      rarity: 'Common',
      series: 'Neo',
      set: 'Neo Discovery',
      setCode: 'neo2',
      attacks: [
        {
          cost: [
            'Grass'
          ],
          name: 'Rolling Tackle',
          text: '',
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
      id: 'neo2-56',
      name: 'Kabuto',
      nationalPokedexNumber: 140,
      imageUrl: 'https://images.pokemontcg.io/neo2/56.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo2/56_hires.png',
      types: [
        'Water'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 1',
      ability: {
        name: 'Revive Friends',
        text: 'Once during your turn (before you attack), you may flip a coin. If heads, search your deck for a card named Kabuto and put it on your Bench. Shuffle your deck afterward. Treat the new Kabuto as a Basic Pokémon. This power can\'t be used if Kabuto is Asleep, Confused, or Paralyzed (or if your Bench is full).',
        type: 'Pokémon Power'
      },
      hp: '50',
      retreatCost: [
        'Colorless'
      ],
      convertedRetreatCost: 1,
      number: '56',
      artist: 'Yuka Morii',
      rarity: 'Common',
      series: 'Neo',
      set: 'Neo Discovery',
      setCode: 'neo2',
      attacks: [
        {
          cost: [
            'Fighting',
            'Colorless'
          ],
          name: 'Work Together',
          text: 'Flip a coin. If heads, this attack does 10 damage plus 10 more damage for each Omanyte, Omastar, Kabuto, and Kabutops on your Bench.',
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
      id: 'neo2-57',
      name: 'Larvitar',
      nationalPokedexNumber: 246,
      imageUrl: 'https://images.pokemontcg.io/neo2/57.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo2/57_hires.png',
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
      artist: 'Hironobu Yoshida',
      rarity: 'Common',
      series: 'Neo',
      set: 'Neo Discovery',
      setCode: 'neo2',
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
      id: 'neo2-58',
      name: 'Mareep',
      nationalPokedexNumber: 179,
      imageUrl: 'https://images.pokemontcg.io/neo2/58.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo2/58_hires.png',
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
      number: '58',
      artist: 'Atsuko Nishida',
      rarity: 'Common',
      series: 'Neo',
      set: 'Neo Discovery',
      setCode: 'neo2',
      attacks: [
        {
          cost: [
            'Lightning',
            'Colorless'
          ],
          name: 'Thunder Jolt',
          text: 'Flip a coin. If tails, Mareep does 10 damage to itself.',
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
      id: 'neo2-59',
      name: 'Natu',
      nationalPokedexNumber: 177,
      imageUrl: 'https://images.pokemontcg.io/neo2/59.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo2/59_hires.png',
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
      number: '59',
      artist: 'Sumiyoshi Kizuki',
      rarity: 'Common',
      series: 'Neo',
      set: 'Neo Discovery',
      setCode: 'neo2',
      attacks: [
        {
          cost: [
            'Psychic'
          ],
          name: 'Confuse Ray',
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
          type: 'Psychic',
          value: '×2'
        }
      ]
    },
    {
      id: 'neo2-60',
      name: 'Omanyte',
      nationalPokedexNumber: 138,
      imageUrl: 'https://images.pokemontcg.io/neo2/60.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo2/60_hires.png',
      types: [
        'Fighting'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 1',
      ability: {
        name: 'Fossil',
        text: 'Once during your turn (before your attack), you may flip a coin. If heads, search your deck for a card that evolves from Mysterious Fossil and put it on your Bench. Shuffle your deck afterward. Treat that card as a Basic Pokémon. This power can\'t be used if Omanyte is Asleep, Confused, or Paralyzed (or if your Bench is full).',
        type: 'Pokémon Power'
      },
      hp: '50',
      retreatCost: [
        'Colorless'
      ],
      convertedRetreatCost: 1,
      number: '60',
      artist: 'Yuka Morii',
      rarity: 'Common',
      series: 'Neo',
      set: 'Neo Discovery',
      setCode: 'neo2',
      attacks: [
        {
          cost: [
            'Water'
          ],
          name: 'Bind',
          text: 'Flip a coin. If heads, the Defending Pokémon is now Paralyzed.',
          damage: '10',
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
      id: 'neo2-61',
      name: 'Pineco',
      nationalPokedexNumber: 204,
      imageUrl: 'https://images.pokemontcg.io/neo2/61.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo2/61_hires.png',
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
      number: '61',
      artist: 'Tomokazu Komiya',
      rarity: 'Common',
      series: 'Neo',
      set: 'Neo Discovery',
      setCode: 'neo2',
      attacks: [
        {
          cost: [
            'Grass'
          ],
          name: 'Burst',
          text: 'Flip a coin. If heads, Pineco does 40 damage to itself and 10 damage to each Pokémon on each player\'s Bench. (Don\'t apply Weakness and Resistance for Benched Pokémon.) Flip a coin. If tails, this attack does nothing (not even damage).',
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
      id: 'neo2-62',
      name: 'Poliwag',
      nationalPokedexNumber: 60,
      imageUrl: 'https://images.pokemontcg.io/neo2/62.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo2/62_hires.png',
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
      number: '62',
      artist: 'Aya Kusube',
      rarity: 'Common',
      series: 'Neo',
      set: 'Neo Discovery',
      setCode: 'neo2',
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
            'Water'
          ],
          name: 'Hypnosis',
          text: 'The Defending Pokémon is now Asleep.',
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
      id: 'neo2-63',
      name: 'Sentret',
      nationalPokedexNumber: 161,
      imageUrl: 'https://images.pokemontcg.io/neo2/63.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo2/63_hires.png',
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
      number: '63',
      artist: 'Sumiyoshi Kizuki',
      rarity: 'Common',
      series: 'Neo',
      set: 'Neo Discovery',
      setCode: 'neo2',
      attacks: [
        {
          cost: [
            'Colorless'
          ],
          name: 'Scout',
          text: 'Look at your opponent\'s hand.',
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
      id: 'neo2-64',
      name: 'Spinarak',
      nationalPokedexNumber: 167,
      imageUrl: 'https://images.pokemontcg.io/neo2/64.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo2/64_hires.png',
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
      number: '64',
      artist: 'Yukiko Baba',
      rarity: 'Common',
      series: 'Neo',
      set: 'Neo Discovery',
      setCode: 'neo2',
      attacks: [
        {
          cost: [
            'Grass',
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
          type: 'Fire',
          value: '×2'
        }
      ]
    },
    {
      id: 'neo2-65',
      name: 'Teddiursa',
      nationalPokedexNumber: 216,
      imageUrl: 'https://images.pokemontcg.io/neo2/65.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo2/65_hires.png',
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
      artist: 'Miki Tanaka',
      rarity: 'Common',
      series: 'Neo',
      set: 'Neo Discovery',
      setCode: 'neo2',
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
            'Colorless',
            'Colorless'
          ],
          name: 'Nap Time',
          text: 'Remove all damage counters from Teddiursa. Teddiursa is now Asleep.',
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
      id: 'neo2-66',
      name: 'Tyrogue',
      nationalPokedexNumber: 236,
      imageUrl: 'https://images.pokemontcg.io/neo2/66.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo2/66_hires.png',
      types: [
        'Fighting'
      ],
      supertype: 'Pokémon',
      subtype: 'Basic',
      hp: '30',
      number: '66',
      artist: 'Miki Tanaka',
      rarity: 'Common',
      series: 'Neo',
      set: 'Neo Discovery',
      setCode: 'neo2',
      text: [
        'If this Baby Pokémon is your Active Pokémon and your opponent tries to attack, your opponent flips a coin (before doing anything else required in order to use that attack). If tails, your opponent\'s turn ends without an attack.'
      ],
      attacks: [
        {
          cost: [
            'Colorless'
          ],
          name: 'Smash Punch',
          text: 'Flip a coin. If tails, this attack does nothing.',
          damage: '',
          convertedEnergyCost: 1
        }
      ]
    },
    {
      id: 'neo2-67',
      name: 'Unown [E]',
      nationalPokedexNumber: 201,
      imageUrl: 'https://images.pokemontcg.io/neo2/67.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo2/67_hires.png',
      types: [
        'Psychic'
      ],
      supertype: 'Pokémon',
      subtype: 'Basic',
      ability: {
        name: '[Engage]',
        text: 'When you play Unown E from your hand, your opponent may shuffle his or her hand into his or her deck and then draw 4 cards. Either way, you may shuffle your hand into your deck and draw 4 cards.',
        type: 'Pokémon Power'
      },
      hp: '40',
      retreatCost: [
        'Colorless'
      ],
      convertedRetreatCost: 1,
      number: '67',
      artist: 'CR CG gangs',
      rarity: 'Common',
      series: 'Neo',
      set: 'Neo Discovery',
      setCode: 'neo2',
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
      id: 'neo2-68',
      name: 'Unown [I]',
      nationalPokedexNumber: 201,
      imageUrl: 'https://images.pokemontcg.io/neo2/68.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo2/68_hires.png',
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
      number: '68',
      artist: 'CR CG gangs',
      rarity: 'Common',
      series: 'Neo',
      set: 'Neo Discovery',
      setCode: 'neo2',
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
      id: 'neo2-69',
      name: 'Unown [O]',
      nationalPokedexNumber: 201,
      imageUrl: 'https://images.pokemontcg.io/neo2/69.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo2/69_hires.png',
      types: [
        'Psychic'
      ],
      supertype: 'Pokémon',
      subtype: 'Basic',
      ability: {
        name: 'Observe',
        text: 'Once during your turn (before you attack), you may look at 5 cards from the top of your opponent\'s deck and put them back in the same order.',
        type: 'Pokémon Power'
      },
      hp: '40',
      retreatCost: [
        'Colorless'
      ],
      convertedRetreatCost: 1,
      number: '69',
      artist: 'CR CG gangs',
      rarity: 'Common',
      series: 'Neo',
      set: 'Neo Discovery',
      setCode: 'neo2',
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
      id: 'neo2-70',
      name: 'Weedle',
      nationalPokedexNumber: 13,
      imageUrl: 'https://images.pokemontcg.io/neo2/70.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo2/70_hires.png',
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
      artist: 'Miki Tanaka',
      rarity: 'Common',
      series: 'Neo',
      set: 'Neo Discovery',
      setCode: 'neo2',
      attacks: [
        {
          cost: [
            'Grass'
          ],
          name: 'Spike Stab',
          text: 'Flip a coin. If heads, the Defending Pokémon is now Poisoned. If tails, this attack does nothing (not even damage).',
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
      id: 'neo2-71',
      name: 'Wooper',
      nationalPokedexNumber: 194,
      imageUrl: 'https://images.pokemontcg.io/neo2/71.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo2/71_hires.png',
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
      number: '71',
      artist: 'Yukiko Baba',
      rarity: 'Common',
      series: 'Neo',
      set: 'Neo Discovery',
      setCode: 'neo2',
      attacks: [
        {
          cost: [
            'Water'
          ],
          name: 'Slime',
          text: 'If an attack would do damage to Wooper during your opponent\'s next turn, your opponent flips a coin. If tails, prevent all damage done to Wooper from that attack. (Any other effects of that attack happen.)',
          damage: '',
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
      id: 'neo2-72',
      name: 'Fossil Egg',
      imageUrl: 'https://images.pokemontcg.io/neo2/72.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo2/72_hires.png',
      supertype: 'Trainer',
      subtype: '',
      number: '72',
      artist: 'K. Hoshiba, CR CG gangs',
      rarity: 'Uncommon',
      series: 'Neo',
      set: 'Neo Discovery',
      setCode: 'neo2',
      text: [
        'Flip a coin. If heads, either search your deck for a card that evolves from Mysterious Fossil and put it on your Bench or put a card that evolves from Mysterious Fossil from your hand onto your Bench. Either way, treat the new card as a Basic Pokémon. If you searched your deck, shuffle it. (You can\'t play this card if your Bench is full.)'
      ]
    },
    {
      id: 'neo2-73',
      name: 'Hyper Devolution Spray',
      imageUrl: 'https://images.pokemontcg.io/neo2/73.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo2/73_hires.png',
      supertype: 'Trainer',
      subtype: '',
      number: '73',
      artist: 'K. Hoshiba, CR CG gangs',
      rarity: 'Uncommon',
      series: 'Neo',
      set: 'Neo Discovery',
      setCode: 'neo2',
      text: [
        'Choose 1 of your Evolved Pokémon. Take the highest stage Evolution card from that Pokémon and put it into your hand. (You can\'t evolve a Pokémon the turn you devolve it.)'
      ]
    },
    {
      id: 'neo2-74',
      name: 'Ruin Wall',
      imageUrl: 'https://images.pokemontcg.io/neo2/74.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo2/74_hires.png',
      supertype: 'Trainer',
      subtype: '',
      number: '74',
      artist: '"Big Mama" Tagawa, CR CG gangs',
      rarity: 'Uncommon',
      series: 'Neo',
      set: 'Neo Discovery',
      setCode: 'neo2',
      text: [
        'Search your deck for a card with Unown in its name and put it onto your Bench. Shuffle your deck afterward. (You can\'t play this card if your Bench is full.)'
      ]
    },
    {
      id: 'neo2-75',
      name: 'Energy Ark',
      imageUrl: 'https://images.pokemontcg.io/neo2/75.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo2/75_hires.png',
      supertype: 'Trainer',
      subtype: '',
      number: '75',
      artist: '"Big Mama" Tagawa & Benimaru Itoh',
      rarity: 'Common',
      series: 'Neo',
      set: 'Neo Discovery',
      setCode: 'neo2',
      text: [
        'Flip 2 coins. For each heads, search your deck for a Basic Energy card. Show that card to your opponent, then put it into your hand. Shuffle your deck afterward.'
      ]
    }
  ]