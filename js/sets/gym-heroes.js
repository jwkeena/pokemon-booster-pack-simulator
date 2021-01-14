const gymHeroesCards = [
    {
      id: 'gym1-1',
      name: 'Blaine\'s Moltres',
      nationalPokedexNumber: 146,
      imageUrl: 'https://images.pokemontcg.io/gym1/1.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/gym1/1_hires.png',
      types: [
        'Fire'
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
      number: '1',
      artist: 'Ken Sugimori',
      rarity: 'Holo Rare',
      series: 'Gym',
      set: 'Gym Heroes',
      setCode: 'gym1',
      attacks: [
        {
          cost: [
            'Fire',
            'Fire',
            'Fire',
            'Fire',
            'Fire'
          ],
          name: 'Phoenix Flame',
          text: 'Flip a coin. If tails, shuffle Blaine\'s Moltres and all cards attached to it into your deck (after doing damage).',
          damage: '90',
          convertedEnergyCost: 5
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
      id: 'gym1-2',
      name: 'Brock\'s Rhydon',
      nationalPokedexNumber: 112,
      imageUrl: 'https://images.pokemontcg.io/gym1/2.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/gym1/2_hires.png',
      types: [
        'Fighting'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 1',
      evolvesFrom: 'Rhyhorn',
      ability: {
        name: 'Bench Guard',
        text: 'As long as Brock\'s Rhydon is Benched, whenever 1 of your Benched Pokémon is damaged, you may do 10 of that damage to Brock\'s Rhydon instead. (If more than 1 of your Benched Pokémon is damaged at the same time, you may use this power once for each of them.)',
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
      artist: 'Ken Sugimori',
      rarity: 'Holo Rare',
      series: 'Gym',
      set: 'Gym Heroes',
      setCode: 'gym1',
      attacks: [
        {
          cost: [
            'Fighting',
            'Fighting',
            'Colorless',
            'Colorless'
          ],
          name: 'Lariat',
          text: 'Flip a coin. If tails, this attack does nothing.',
          damage: '',
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
      id: 'gym1-3',
      name: 'Erika\'s Clefable',
      nationalPokedexNumber: 36,
      imageUrl: 'https://images.pokemontcg.io/gym1/3.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/gym1/3_hires.png',
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
      number: '3',
      artist: 'Atsuko Nishida',
      rarity: 'Holo Rare',
      series: 'Gym',
      set: 'Gym Heroes',
      setCode: 'gym1',
      attacks: [
        {
          cost: [
            'Colorless'
          ],
          name: 'Fairy Power',
          text: 'Flip a coin. If heads, you may return any number of your Pokémon in play and all cards attached to them to your hand.',
          damage: '',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Colorless',
            'Colorless',
            'Colorless'
          ],
          name: 'Moon Impact',
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
      id: 'gym1-4',
      name: 'Erika\'s Dragonair',
      nationalPokedexNumber: 148,
      imageUrl: 'https://images.pokemontcg.io/gym1/4.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/gym1/4_hires.png',
      types: [
        'Colorless'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 1',
      evolvesFrom: 'Dratini',
      hp: '80',
      retreatCost: [
        'Colorless',
        'Colorless'
      ],
      convertedRetreatCost: 2,
      number: '4',
      artist: 'Atsuko Nishida',
      rarity: 'Holo Rare',
      series: 'Gym',
      set: 'Gym Heroes',
      setCode: 'gym1',
      attacks: [
        {
          cost: [
            'Colorless',
            'Colorless',
            'Colorless'
          ],
          name: 'Blizzard',
          text: 'Flip a coin. If heads, this attack does 10 damage to each of your opponent\'s Benched Pokémon. If tails, this attack does 10 damage to each of your own Benched Pokémon. (Don\'t apply Weakness and Resistance for Benched Pokémon.)',
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
          name: 'Take Away',
          text: 'Shuffle Erika\'s Dragonair and all cards attached to it into your deck. Then, your opponent shuffles his or her Active Pokémon and all cards attached to it into his or her deck.',
          damage: '',
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
      id: 'gym1-5',
      name: 'Erika\'s Vileplume',
      nationalPokedexNumber: 45,
      imageUrl: 'https://images.pokemontcg.io/gym1/5.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/gym1/5_hires.png',
      types: [
        'Grass'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 2',
      evolvesFrom: 'Gloom',
      ability: {
        name: 'Pollen Defense',
        text: 'If an attack does damage to Erika\'s Vileplume while it\'s your Active Pokémon (even if it\'s Knocked Out), flip a coin. If heads, your opponent\'s Active Pokémon is now Confused. This power works even while Erika\'s Vileplume is Asleep, Confused, or Paralyzed.',
        type: 'Pokémon Power'
      },
      hp: '80',
      retreatCost: [
        'Colorless',
        'Colorless'
      ],
      convertedRetreatCost: 2,
      number: '5',
      artist: 'Ken Sugimori',
      rarity: 'Holo Rare',
      series: 'Gym',
      set: 'Gym Heroes',
      setCode: 'gym1',
      attacks: [
        {
          cost: [
            'Grass',
            'Grass',
            'Grass'
          ],
          name: 'Mega Drain',
          text: 'If Erika\'s Vileplume does damage to the Defending Pokémon (after applying Weakness and Resistance), remove a number of damage counters from Erika\'s Vileplume equal to half the damage done to the Defending Pokémon (rounded up to the nearest 10). If Erika\'s Vileplume has fewer damage counters than that, remove all of them.',
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
      id: 'gym1-6',
      name: 'Lt. Surge\'s Electabuzz',
      nationalPokedexNumber: 125,
      imageUrl: 'https://images.pokemontcg.io/gym1/6.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/gym1/6_hires.png',
      types: [
        'Lightning'
      ],
      supertype: 'Pokémon',
      subtype: 'Basic',
      evolvesFrom: 'Elekid',
      hp: '70',
      retreatCost: [
        'Colorless',
        'Colorless'
      ],
      convertedRetreatCost: 2,
      number: '6',
      artist: 'Ken Sugimori',
      rarity: 'Holo Rare',
      series: 'Gym',
      set: 'Gym Heroes',
      setCode: 'gym1',
      attacks: [
        {
          cost: [
            'Lightning'
          ],
          name: 'Charge',
          text: 'Take up to 2 Lightning Energy cards from your discard pile and attach them to Lt. Surge\'s Electabuzz',
          damage: '',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Lightning'
          ],
          name: 'Discharge',
          text: 'Discard all Lightning Energy cards attach to Lt. Surge\'s Electabuzz in order to use this attack. Flip a number of coins equal to the number of Lightning Energy cards you discarded. This attack does 30 damage times the number of heads.',
          damage: '30×',
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
      id: 'gym1-7',
      name: 'Lt. Surge\'s Fearow',
      nationalPokedexNumber: 22,
      imageUrl: 'https://images.pokemontcg.io/gym1/7.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/gym1/7_hires.png',
      types: [
        'Colorless'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 1',
      evolvesFrom: 'Spearow',
      hp: '70',
      number: '7',
      artist: 'Ken Sugimori',
      rarity: 'Holo Rare',
      series: 'Gym',
      set: 'Gym Heroes',
      setCode: 'gym1',
      attacks: [
        {
          cost: [
            'Colorless',
            'Colorless'
          ],
          name: 'Repeating Drill',
          text: 'Flip 5 coins. This attack does 10 damage times the number of heads.',
          damage: '10×',
          convertedEnergyCost: 2
        },
        {
          cost: [
            'Colorless',
            'Colorless',
            'Colorless'
          ],
          name: 'Clutch',
          text: 'The Defending Pokémon can\'t retreat during your opponent\'s next turn.',
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
      id: 'gym1-8',
      name: 'Lt. Surge\'s Magneton',
      nationalPokedexNumber: 82,
      imageUrl: 'https://images.pokemontcg.io/gym1/8.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/gym1/8_hires.png',
      types: [
        'Lightning'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 1',
      ability: {
        name: 'Energy Charge',
        text: 'As often as you like during your turn (before your attack), if Lt. Surge\'s Magneton is your Active Pokémon, you may take 1 Lightning Energy card attached to 1 of your Pokémon and attach it to Lt. Surge\'s Magneton. This power can\'t be used if Lt. Surge\'s Magneton is Asleep, Confused, or Paralyzed.',
        type: 'Pokémon Power'
      },
      hp: '70',
      retreatCost: [
        'Colorless',
        'Colorless'
      ],
      convertedRetreatCost: 2,
      number: '8',
      artist: 'Ken Sugimori',
      rarity: 'Holo Rare',
      series: 'Gym',
      set: 'Gym Heroes',
      setCode: 'gym1',
      attacks: [
        {
          cost: [
            'Lightning',
            'Lightning',
            'Lightning',
            'Colorless'
          ],
          name: 'Mega Shock',
          text: 'Flip a coin. If tails, Lt. Surge\'s Magneton does 20 damage to itself.',
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
      id: 'gym1-9',
      name: 'Misty\'s Seadra',
      nationalPokedexNumber: 117,
      imageUrl: 'https://images.pokemontcg.io/gym1/9.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/gym1/9_hires.png',
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
      number: '9',
      artist: 'Atsuko Nishida',
      rarity: 'Holo Rare',
      series: 'Gym',
      set: 'Gym Heroes',
      setCode: 'gym1',
      attacks: [
        {
          cost: [
            'Water'
          ],
          name: 'Tail Snap',
          text: '',
          damage: '20',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Water',
            'Water',
            'Water'
          ],
          name: 'Knockout Needle',
          text: 'Flip 2 coins. If both of them are heads, this attack does 30 damage plus 60 more damage. If 1 or both of them are tails, this attack does 30 damage.',
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
      id: 'gym1-10',
      name: 'Misty\'s Tentacruel',
      nationalPokedexNumber: 73,
      imageUrl: 'https://images.pokemontcg.io/gym1/10.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/gym1/10_hires.png',
      types: [
        'Water'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 1',
      evolvesFrom: 'Tentacool',
      ability: {
        name: 'Flee',
        text: 'If an attack does damage to Misty\'s Tentacruel while it\'s your Active Pokémon, you may switch it with 1 of your Benched Pokémon, which prevents all other effects of that attack on Misty\'s Tentacruel. This power can\'t be used if Misty\'s Tentacruel is already Asleep, Confused, or Paralyzed.',
        type: 'Pokémon Power'
      },
      hp: '70',
      number: '10',
      artist: 'Ken Sugimori',
      rarity: 'Holo Rare',
      series: 'Gym',
      set: 'Gym Heroes',
      setCode: 'gym1',
      attacks: [
        {
          cost: [
            'Water',
            'Water',
            'Colorless',
            'Colorless'
          ],
          name: 'Jellyfish Poison',
          text: 'Flip a coin. If heads, the Defending Pokémon is now Poisoned. If tails, the Defending Pokémon is now Confused.',
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
      id: 'gym1-11',
      name: 'Rocket\'s Hitmonchan',
      nationalPokedexNumber: 107,
      imageUrl: 'https://images.pokemontcg.io/gym1/11.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/gym1/11_hires.png',
      types: [
        'Fighting'
      ],
      supertype: 'Pokémon',
      subtype: 'Basic',
      evolvesFrom: 'Tyrogue',
      hp: '60',
      retreatCost: [
        'Colorless'
      ],
      convertedRetreatCost: 1,
      number: '11',
      artist: 'Ken Sugimori',
      rarity: 'Holo Rare',
      series: 'Gym',
      set: 'Gym Heroes',
      setCode: 'gym1',
      attacks: [
        {
          cost: [
            'Fighting'
          ],
          name: 'Crosscounter',
          text: 'If an attack does damage to Rocket\'s Hitmonchan during your opponent\'s next turn (even if Rocket\'s Hitmonchan is Knocked Out), flip a coin. If heads, Rocket\'s Hitmonchan attacks your opponent\'s Active Pokémon for double that amount of damage. (If Rocket\'s Hitmonchan takes 20 damage, it does 40 damage to that Pokémon.)',
          damage: '',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Fighting',
            'Fighting',
            'Colorless'
          ],
          name: 'Magnum Punch',
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
      id: 'gym1-12',
      name: 'Rocket\'s Moltres',
      nationalPokedexNumber: 146,
      imageUrl: 'https://images.pokemontcg.io/gym1/12.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/gym1/12_hires.png',
      types: [
        'Fire'
      ],
      supertype: 'Pokémon',
      subtype: 'Basic',
      hp: '60',
      retreatCost: [
        'Colorless',
        'Colorless'
      ],
      convertedRetreatCost: 2,
      number: '12',
      artist: 'Ken Sugimori',
      rarity: 'Holo Rare',
      series: 'Gym',
      set: 'Gym Heroes',
      setCode: 'gym1',
      attacks: [
        {
          cost: [
            'Fire',
            'Fire',
            'Fire'
          ],
          name: 'Fire Wall',
          text: 'If an attack does damage to Rocket\'s Moltres during your opponent\'s next turn (even if Rocket\'s Moltres is Knocked Out), Rocket\'s Moltres attacks your opponent\'s Active Pokémon for 10 damage. (Apply Weakness and Resistance.)',
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
      id: 'gym1-13',
      name: 'Rocket\'s Scyther',
      nationalPokedexNumber: 123,
      imageUrl: 'https://images.pokemontcg.io/gym1/13.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/gym1/13_hires.png',
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
      number: '13',
      artist: 'Ken Sugimori',
      rarity: 'Holo Rare',
      series: 'Gym',
      set: 'Gym Heroes',
      setCode: 'gym1',
      attacks: [
        {
          cost: [
            'Grass'
          ],
          name: 'Shadow Images',
          text: 'Whenever Rocket\'s Scyther is attacked, your opponent flips a coin. If tails, that attack does no damage to Rocket\'s Scyther. (Any other effects of the attack still happen.) This effect lasts until Rocket\'s Scyther takes damage (or is Benched or is evolved).',
          damage: '',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Grass',
            'Colorless',
            'Colorless'
          ],
          name: 'Blinding Scythe',
          text: '',
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
          type: 'Fire',
          value: '×2'
        }
      ]
    },
    {
      id: 'gym1-14',
      name: 'Sabrina\'s Gengar',
      nationalPokedexNumber: 94,
      imageUrl: 'https://images.pokemontcg.io/gym1/14.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/gym1/14_hires.png',
      types: [
        'Psychic'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 2',
      evolvesFrom: 'Haunter',
      hp: '80',
      retreatCost: [
        'Colorless'
      ],
      convertedRetreatCost: 1,
      number: '14',
      artist: 'Ken Sugimori',
      rarity: 'Holo Rare',
      series: 'Gym',
      set: 'Gym Heroes',
      setCode: 'gym1',
      attacks: [
        {
          cost: [
            'Psychic'
          ],
          name: 'Pain Amplifier',
          text: 'Put a damage counter on each of your opponent\'s Pokémon that already has any damage counters on it.',
          damage: '',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Psychic',
            'Psychic',
            'Psychic'
          ],
          name: 'Call of the Night',
          text: 'Unless this attack Knocks Out the Defending Pokémon, flip 2 coins. If both of them are heads, your opponent shuffles his or her Active Pokémon and all cards attached to it into his or her deck.',
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
      id: 'gym1-15',
      name: 'Brock',
      imageUrl: 'https://images.pokemontcg.io/gym1/15.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/gym1/15_hires.png',
      supertype: 'Trainer',
      subtype: '',
      number: '15',
      artist: 'Ken Sugimori',
      rarity: 'Holo Rare',
      series: 'Gym',
      set: 'Gym Heroes',
      setCode: 'gym1',
      text: [
        'Remove 1 damage counter from each of your Pokémon that has any damage counters on it.'
      ]
    },
    {
      id: 'gym1-16',
      name: 'Erika',
      imageUrl: 'https://images.pokemontcg.io/gym1/16.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/gym1/16_hires.png',
      supertype: 'Trainer',
      subtype: '',
      number: '16',
      artist: 'Ken Sugimori',
      rarity: 'Holo Rare',
      series: 'Gym',
      set: 'Gym Heroes',
      setCode: 'gym1',
      text: [
        'You may draw up to 3 cards, then your opponent may draw up to 3 cards.'
      ]
    },
    {
      id: 'gym1-17',
      name: 'Lt. Surge',
      imageUrl: 'https://images.pokemontcg.io/gym1/17.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/gym1/17_hires.png',
      supertype: 'Trainer',
      subtype: '',
      number: '17',
      artist: 'Ken Sugimori',
      rarity: 'Holo Rare',
      series: 'Gym',
      set: 'Gym Heroes',
      setCode: 'gym1',
      text: [
        'You can play this card only if you have at least 1 Basic Pokémon card in your hand. Put a Basic Pokémon card from your hand into play as your Active Pokémon. Put your old Active Pokémon onto your Bench. (You can\'t play this card if your Bench is full.)'
      ]
    },
    {
      id: 'gym1-18',
      name: 'Misty',
      imageUrl: 'https://images.pokemontcg.io/gym1/18.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/gym1/18_hires.png',
      supertype: 'Trainer',
      subtype: '',
      number: '18',
      artist: 'Ken Sugimori',
      rarity: 'Holo Rare',
      series: 'Gym',
      set: 'Gym Heroes',
      setCode: 'gym1',
      text: [
        'Discard 2 of the other cards in your hand in order to play this card. If this turn\'s attack does damage to the Defending Pokémon (after applying Weakness and Resistance), and if the attacking Pokémon has Misty in its name, the attack does 20 more damage to the Defending Pokémon.'
      ]
    },
    {
      id: 'gym1-19',
      name: 'The Rocket\'s Trap',
      imageUrl: 'https://images.pokemontcg.io/gym1/19.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/gym1/19_hires.png',
      supertype: 'Trainer',
      subtype: '',
      number: '19',
      artist: 'Ken Sugimori',
      rarity: 'Holo Rare',
      series: 'Gym',
      set: 'Gym Heroes',
      setCode: 'gym1',
      text: [
        'Flip a coin. If heads, choose up to 3 cards at random from your opponent\'s hand (don\'t look at them). Your opponent shuffles those cards into his or her deck.'
      ]
    },
    {
      id: 'gym1-20',
      name: 'Brock\'s Golem',
      nationalPokedexNumber: 76,
      imageUrl: 'https://images.pokemontcg.io/gym1/20.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/gym1/20_hires.png',
      types: [
        'Fighting'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 2',
      evolvesFrom: 'Graveler',
      hp: '90',
      retreatCost: [
        'Colorless',
        'Colorless',
        'Colorless',
        'Colorless'
      ],
      convertedRetreatCost: 4,
      number: '20',
      artist: 'Ken Sugimori',
      rarity: 'Rare',
      series: 'Gym',
      set: 'Gym Heroes',
      setCode: 'gym1',
      attacks: [
        {
          cost: [
            'Fighting',
            'Fighting',
            'Colorless'
          ],
          name: 'Rock Slide',
          text: 'If your opponent has any Benched Pokémon, choose up to 3 of them. This attack does 10 damage to each of them. (Don\'t apply Weakness and Resistance for Benched Pokémon.)',
          damage: '20',
          convertedEnergyCost: 3
        },
        {
          cost: [
            'Fighting',
            'Fighting',
            'Colorless',
            'Colorless'
          ],
          name: 'Fissure',
          text: '',
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
      id: 'gym1-21',
      name: 'Brock\'s Onix',
      nationalPokedexNumber: 95,
      imageUrl: 'https://images.pokemontcg.io/gym1/21.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/gym1/21_hires.png',
      types: [
        'Fighting'
      ],
      supertype: 'Pokémon',
      subtype: 'Basic',
      hp: '70',
      retreatCost: [
        'Colorless',
        'Colorless'
      ],
      convertedRetreatCost: 2,
      number: '21',
      artist: 'Benimaru Itoh',
      rarity: 'Rare',
      series: 'Gym',
      set: 'Gym Heroes',
      setCode: 'gym1',
      attacks: [
        {
          cost: [
            'Fighting',
            'Fighting'
          ],
          name: 'Bind',
          text: 'Flip a coin. If heads, the Defending Pokémon is now Paralyzed.',
          damage: '20',
          convertedEnergyCost: 2
        },
        {
          cost: [
            'Fighting',
            'Fighting',
            'Fighting'
          ],
          name: 'Tunneling',
          text: 'If your opponent has any Benched Pokémon, choose up to 2 of them. This attack does 20 damage to each of them. (Don\'t apply Weakness and Resistance for Benched Pokémon.) Brock\'s Onix can\'t attack during your next turn.',
          damage: '20',
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
      id: 'gym1-22',
      name: 'Brock\'s Rhyhorn',
      nationalPokedexNumber: 111,
      imageUrl: 'https://images.pokemontcg.io/gym1/22.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/gym1/22_hires.png',
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
      number: '22',
      artist: 'Ken Sugimori',
      rarity: 'Rare',
      series: 'Gym',
      set: 'Gym Heroes',
      setCode: 'gym1',
      attacks: [
        {
          cost: [
            'Colorless',
            'Colorless'
          ],
          name: 'Horn Toss',
          text: 'If your opponent has any Benched Pokémon, he or she chooses 1 of them and switches it with the Defending Pokémon. (Do the damage before switching the Pokémon.)',
          damage: '20',
          convertedEnergyCost: 2
        },
        {
          cost: [
            'Fighting',
            'Fighting',
            'Colorless'
          ],
          name: 'Take Down',
          text: 'Brock\'s Rhyhorn does 10 damage to itself.',
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
      id: 'gym1-23',
      name: 'Brock\'s Sandslash',
      nationalPokedexNumber: 28,
      imageUrl: 'https://images.pokemontcg.io/gym1/23.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/gym1/23_hires.png',
      types: [
        'Fighting'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 1',
      evolvesFrom: 'Sandshrew',
      hp: '60',
      retreatCost: [
        'Colorless'
      ],
      convertedRetreatCost: 1,
      number: '23',
      artist: 'Ken Sugimori',
      rarity: 'Rare',
      series: 'Gym',
      set: 'Gym Heroes',
      setCode: 'gym1',
      attacks: [
        {
          cost: [
            'Fighting',
            'Fighting'
          ],
          name: 'Needles',
          text: 'Flip a coin. If heads, the Defending Pokémon is now Paralyzed and Poisoned.',
          damage: '',
          convertedEnergyCost: 2
        },
        {
          cost: [
            'Fighting',
            'Fighting'
          ],
          name: 'Sandstorm',
          text: 'If the Defending Pokémon tries to attack during your opponent\'s next turn, your opponent flips a coin. If tails, that attack does nothing.',
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
      id: 'gym1-24',
      name: 'Brock\'s Zubat',
      nationalPokedexNumber: 41,
      imageUrl: 'https://images.pokemontcg.io/gym1/24.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/gym1/24_hires.png',
      types: [
        'Grass'
      ],
      supertype: 'Pokémon',
      subtype: 'Basic',
      hp: '30',
      number: '24',
      artist: 'Ken Sugimori',
      rarity: 'Rare',
      series: 'Gym',
      set: 'Gym Heroes',
      setCode: 'gym1',
      attacks: [
        {
          cost: [
            'Colorless'
          ],
          name: 'Alert',
          text: 'Draw a card. Then, switch Brock\'s Zubat with 1 of your Benched Pokémon. You can\'t use this attack if your Bench is empty.',
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
          type: 'Psychic',
          value: '×2'
        }
      ]
    },
    {
      id: 'gym1-25',
      name: 'Erika\'s Clefairy',
      nationalPokedexNumber: 35,
      imageUrl: 'https://images.pokemontcg.io/gym1/25.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/gym1/25_hires.png',
      types: [
        'Colorless'
      ],
      supertype: 'Pokémon',
      subtype: 'Basic',
      evolvesFrom: 'Cleffa',
      hp: '50',
      retreatCost: [
        'Colorless'
      ],
      convertedRetreatCost: 1,
      number: '25',
      artist: 'Ken Sugimori',
      rarity: 'Rare',
      series: 'Gym',
      set: 'Gym Heroes',
      setCode: 'gym1',
      attacks: [
        {
          cost: [
            'Colorless'
          ],
          name: 'Moonwatching',
          text: 'Search your deck for a basic Energy card. Show that card to your opponent, then put it into your hand. Shuffle your deck afterward.',
          damage: '',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Colorless',
            'Colorless'
          ],
          name: 'Comet Slap',
          text: 'Flip 3 coins. This attack does 10 damage times the number of heads.',
          damage: '10×',
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
      id: 'gym1-26',
      name: 'Erika\'s Victreebel',
      nationalPokedexNumber: 71,
      imageUrl: 'https://images.pokemontcg.io/gym1/26.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/gym1/26_hires.png',
      types: [
        'Grass'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 2',
      evolvesFrom: 'Weepinbell',
      ability: {
        name: 'Fragrance Trap',
        text: 'Once during your turn (before your attack), you may flip a coin. If heads, and if your opponent has any Benched Pokémon, choose 1 of them and switch it with his or her Active Pokémon. This power can\'t be used if Erika\'s Victreebel is Asleep, Confused, or Paralyzed.',
        type: 'Pokémon Power'
      },
      hp: '80',
      retreatCost: [
        'Colorless',
        'Colorless'
      ],
      convertedRetreatCost: 2,
      number: '26',
      artist: 'Ken Sugimori',
      rarity: 'Rare',
      series: 'Gym',
      set: 'Gym Heroes',
      setCode: 'gym1',
      attacks: [
        {
          cost: [
            'Grass',
            'Grass',
            'Grass'
          ],
          name: 'Razor Leaf',
          text: '',
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
      id: 'gym1-27',
      name: 'Lt. Surge\'s Electabuzz',
      nationalPokedexNumber: 125,
      imageUrl: 'https://images.pokemontcg.io/gym1/27.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/gym1/27_hires.png',
      types: [
        'Lightning'
      ],
      supertype: 'Pokémon',
      subtype: 'Basic',
      evolvesFrom: 'Elekid',
      hp: '60',
      retreatCost: [
        'Colorless',
        'Colorless'
      ],
      convertedRetreatCost: 2,
      number: '27',
      artist: 'Ken Sugimori',
      rarity: 'Rare',
      series: 'Gym',
      set: 'Gym Heroes',
      setCode: 'gym1',
      attacks: [
        {
          cost: [
            'Lightning'
          ],
          name: 'Charge',
          text: 'Take up to 2 Lightning Energy cards from your discard pile and attach them to Lt. Surge\'s Electabuzz',
          damage: '',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Lightning',
            'Lightning'
          ],
          name: 'Electric Current',
          text: 'Take 1 Lightning Energy card attached to Lt. Surge\'s Electabuzz and attach it to 1 of your Benched Pokémon. If you have no Benched Pokémon, discard that Energy card.',
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
      id: 'gym1-28',
      name: 'Lt. Surge\'s Raichu',
      nationalPokedexNumber: 26,
      imageUrl: 'https://images.pokemontcg.io/gym1/28.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/gym1/28_hires.png',
      types: [
        'Lightning'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 1',
      evolvesFrom: 'Pikachu',
      hp: '70',
      retreatCost: [
        'Colorless',
        'Colorless'
      ],
      convertedRetreatCost: 2,
      number: '28',
      artist: 'Ken Sugimori',
      rarity: 'Rare',
      series: 'Gym',
      set: 'Gym Heroes',
      setCode: 'gym1',
      attacks: [
        {
          cost: [
            'Lightning',
            'Lightning'
          ],
          name: 'Mega Punch',
          text: '',
          damage: '30',
          convertedEnergyCost: 2
        },
        {
          cost: [
            'Lightning',
            'Lightning',
            'Lightning',
            'Lightning'
          ],
          name: 'Thunderbolt',
          text: 'Discard all Energy cards attached to Lt. Surge\'s Raichu in order to use this attack.',
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
      id: 'gym1-29',
      name: 'Misty\'s Cloyster',
      nationalPokedexNumber: 91,
      imageUrl: 'https://images.pokemontcg.io/gym1/29.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/gym1/29_hires.png',
      types: [
        'Water'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 1',
      evolvesFrom: 'Shellder',
      ability: {
        name: 'Shell Armor',
        text: 'You may reduce all damage done by attacks to Misty\'s Cloyster by 10 (after applying Weakness and Resistance). (Any other effects of attacks still happen.) This power can\'t be used if Misty\'s Cloyster is Asleep, Confused, or Paralyzed.',
        type: 'Pokémon Power'
      },
      hp: '60',
      retreatCost: [
        'Colorless',
        'Colorless'
      ],
      convertedRetreatCost: 2,
      number: '29',
      artist: 'Ken Sugimori',
      rarity: 'Rare',
      series: 'Gym',
      set: 'Gym Heroes',
      setCode: 'gym1',
      attacks: [
        {
          cost: [
            'Water',
            'Water',
            'Colorless'
          ],
          name: 'Triple Cannon',
          text: 'Flip 3 coins. This attack does 20 damage times the number of heads.',
          damage: '20×',
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
      id: 'gym1-30',
      name: 'Misty\'s Goldeen',
      nationalPokedexNumber: 118,
      imageUrl: 'https://images.pokemontcg.io/gym1/30.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/gym1/30_hires.png',
      types: [
        'Water'
      ],
      supertype: 'Pokémon',
      subtype: 'Basic',
      hp: '30',
      number: '30',
      artist: 'Ken Sugimori',
      rarity: 'Rare',
      series: 'Gym',
      set: 'Gym Heroes',
      setCode: 'gym1',
      attacks: [
        {
          cost: [
            'Water'
          ],
          name: 'Horn Hazard',
          text: 'Flip a coin. If tails, this attack does nothing.',
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
      id: 'gym1-31',
      name: 'Misty\'s Poliwrath',
      nationalPokedexNumber: 62,
      imageUrl: 'https://images.pokemontcg.io/gym1/31.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/gym1/31_hires.png',
      types: [
        'Water'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 2',
      evolvesFrom: 'Poliwhirl',
      hp: '90',
      retreatCost: [
        'Colorless',
        'Colorless',
        'Colorless'
      ],
      convertedRetreatCost: 3,
      number: '31',
      artist: 'Ken Sugimori',
      rarity: 'Rare',
      series: 'Gym',
      set: 'Gym Heroes',
      setCode: 'gym1',
      attacks: [
        {
          cost: [
            'Water',
            'Water',
            'Colorless',
            'Colorless'
          ],
          name: 'Water Ring',
          text: 'Does 10 damage to each Pokémon that isn\'t on each player\'s Bench. (Don\'t apply Weakness and Resistance for Benched Pokémon.)',
          damage: '30',
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
      id: 'gym1-32',
      name: 'Misty\'s Tentacool',
      nationalPokedexNumber: 72,
      imageUrl: 'https://images.pokemontcg.io/gym1/32.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/gym1/32_hires.png',
      types: [
        'Water'
      ],
      supertype: 'Pokémon',
      subtype: 'Basic',
      hp: '40',
      number: '32',
      artist: 'Ken Sugimori',
      rarity: 'Rare',
      series: 'Gym',
      set: 'Gym Heroes',
      setCode: 'gym1',
      attacks: [
        {
          cost: [
            'Colorless'
          ],
          name: 'Mysterious Light',
          text: 'Flip a coin. If heads, the Defending Pokémon is now Asleep.',
          damage: '',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Water',
            'Colorless'
          ],
          name: 'Jellyfish Pod',
          text: 'Search your deck for any number of Pokémon named Tentacool, Tentacruel, Misty\'s Tentacool, or Misty\'s Tentacruel. Show those cards to your opponent, then put them into your hand. Shuffle your deck afterward.',
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
      id: 'gym1-33',
      name: 'Rocket\'s Snorlax',
      nationalPokedexNumber: 143,
      imageUrl: 'https://images.pokemontcg.io/gym1/33.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/gym1/33_hires.png',
      types: [
        'Colorless'
      ],
      supertype: 'Pokémon',
      subtype: 'Basic',
      evolvesFrom: 'Munchlax',
      ability: {
        name: 'Restless Sleep',
        text: 'If your opponent\'s attack does damage to Rocket\'s Snorlax and Rocket\'s Snorlax is already Asleep (even if it\'s Knocked Out), this power does 20 damage to the attacking Pokémon.',
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
      number: '33',
      artist: 'Shin-ichi Yoshida',
      rarity: 'Rare',
      series: 'Gym',
      set: 'Gym Heroes',
      setCode: 'gym1',
      attacks: [
        {
          cost: [
            'Colorless',
            'Colorless',
            'Colorless'
          ],
          name: 'Collapse',
          text: 'Rocket\'s Snorlax is now Asleep (after doing damage).',
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
      id: 'gym1-34',
      name: 'Sabrina\'s Venomoth',
      nationalPokedexNumber: 49,
      imageUrl: 'https://images.pokemontcg.io/gym1/34.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/gym1/34_hires.png',
      types: [
        'Grass'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 1',
      evolvesFrom: 'Venonat',
      hp: '60',
      retreatCost: [
        'Colorless',
        'Colorless'
      ],
      convertedRetreatCost: 2,
      number: '34',
      artist: 'Ken Sugimori',
      rarity: 'Rare',
      series: 'Gym',
      set: 'Gym Heroes',
      setCode: 'gym1',
      attacks: [
        {
          cost: [
            'Grass'
          ],
          name: 'Healing Pollen',
          text: 'Flip 3 coins. For each heads, remove 1 damage counter from each of your Pokémon. If a Pokémon has fewer damage counters than the number of heads, remove all of them.',
          damage: '',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Psychic'
          ],
          name: 'Sonic Distortion',
          text: 'Flip 2 coins. If 1 or both of them are heads, the Defending Pokémon is now Confused.',
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
      id: 'gym1-35',
      name: 'Blaine\'s Growlithe',
      nationalPokedexNumber: 58,
      imageUrl: 'https://images.pokemontcg.io/gym1/35.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/gym1/35_hires.png',
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
      number: '35',
      artist: 'Ken Sugimori',
      rarity: 'Uncommon',
      series: 'Gym',
      set: 'Gym Heroes',
      setCode: 'gym1',
      attacks: [
        {
          cost: [
            'Colorless'
          ],
          name: 'Shake',
          text: 'If your opponent has any Benched Pokémon, he or she chooses 1 of them and switches it with the Defending Pokémon. (Do the damage before switching the Pokémon.)',
          damage: '10',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Fire',
            'Colorless'
          ],
          name: 'Fire Tackle',
          text: 'Blaine\'s Growlithe does 10 damage to itself.',
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
      id: 'gym1-36',
      name: 'Blaine\'s Kangaskhan',
      nationalPokedexNumber: 115,
      imageUrl: 'https://images.pokemontcg.io/gym1/36.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/gym1/36_hires.png',
      types: [
        'Colorless'
      ],
      supertype: 'Pokémon',
      subtype: 'Basic',
      hp: '80',
      retreatCost: [
        'Colorless',
        'Colorless',
        'Colorless'
      ],
      convertedRetreatCost: 3,
      number: '36',
      artist: 'Ken Sugimori',
      rarity: 'Uncommon',
      series: 'Gym',
      set: 'Gym Heroes',
      setCode: 'gym1',
      attacks: [
        {
          cost: [
            'Colorless'
          ],
          name: 'Child\'s Punch',
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
          name: 'One-Two Punch',
          text: 'Flip a coin. If heads, this attack does 30 damage plus 10 more damage; if tails, this attack does 30 damage.',
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
      id: 'gym1-37',
      name: 'Blaine\'s Magmar',
      nationalPokedexNumber: 126,
      imageUrl: 'https://images.pokemontcg.io/gym1/37.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/gym1/37_hires.png',
      types: [
        'Fire'
      ],
      supertype: 'Pokémon',
      subtype: 'Basic',
      evolvesFrom: 'Magby',
      hp: '60',
      retreatCost: [
        'Colorless',
        'Colorless'
      ],
      convertedRetreatCost: 2,
      number: '37',
      artist: 'Ken Sugimori',
      rarity: 'Uncommon',
      series: 'Gym',
      set: 'Gym Heroes',
      setCode: 'gym1',
      attacks: [
        {
          cost: [
            'Fire'
          ],
          name: 'Firebreathing',
          text: 'Flip a coin. If heads, this attack does 10 damage plus 10 more damage; if tails, this attack does 10 damage.',
          damage: '10+',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Fire',
            'Fire',
            'Fire'
          ],
          name: 'Lava Burst',
          text: 'Discard the top 5 cards of your deck. (If there are fewer than 5 cards in your deck, discard all of them.) This attack does 20 damage for each Energy card you discarded in this way.',
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
      id: 'gym1-38',
      name: 'Brock\'s Geodude',
      nationalPokedexNumber: 74,
      imageUrl: 'https://images.pokemontcg.io/gym1/38.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/gym1/38_hires.png',
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
      number: '38',
      artist: 'Atsuko Nishida',
      rarity: 'Uncommon',
      series: 'Gym',
      set: 'Gym Heroes',
      setCode: 'gym1',
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
          name: 'Lucky Shot',
          text: 'Choose 1 of your opponent\'s Benched Pokémon and flip a coin. If heads, this attack does 30 damage to that Pokémon. (Don\'t apply Weakness and Resistance for Benched Pokémon.) This attack can\'t be used if your opponent has no Benched Pokémon.',
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
      id: 'gym1-39',
      name: 'Brock\'s Golbat',
      nationalPokedexNumber: 42,
      imageUrl: 'https://images.pokemontcg.io/gym1/39.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/gym1/39_hires.png',
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
      number: '39',
      artist: 'Ken Sugimori',
      rarity: 'Uncommon',
      series: 'Gym',
      set: 'Gym Heroes',
      setCode: 'gym1',
      attacks: [
        {
          cost: [
            'Colorless'
          ],
          name: 'Dive',
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
          name: 'Spiral Dive',
          text: 'Does 10 damage to each of your opponent\'s Pokémon. Don\'t apply Weakness and Resistance.',
          damage: '10',
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
      id: 'gym1-40',
      name: 'Brock\'s Graveler',
      nationalPokedexNumber: 75,
      imageUrl: 'https://images.pokemontcg.io/gym1/40.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/gym1/40_hires.png',
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
      number: '40',
      artist: 'Ken Sugimori',
      rarity: 'Uncommon',
      series: 'Gym',
      set: 'Gym Heroes',
      setCode: 'gym1',
      attacks: [
        {
          cost: [
            'Fighting',
            'Colorless',
            'Colorless'
          ],
          name: 'Rock Toss',
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
      id: 'gym1-41',
      name: 'Brock\'s Lickitung',
      nationalPokedexNumber: 108,
      imageUrl: 'https://images.pokemontcg.io/gym1/41.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/gym1/41_hires.png',
      types: [
        'Colorless'
      ],
      supertype: 'Pokémon',
      subtype: 'Basic',
      hp: '80',
      retreatCost: [
        'Colorless',
        'Colorless',
        'Colorless'
      ],
      convertedRetreatCost: 3,
      number: '41',
      artist: 'Ken Sugimori',
      rarity: 'Uncommon',
      series: 'Gym',
      set: 'Gym Heroes',
      setCode: 'gym1',
      attacks: [
        {
          cost: [
            'Colorless',
            'Colorless'
          ],
          name: 'Tongue Slap',
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
      id: 'gym1-42',
      name: 'Erika\'s Dratini',
      nationalPokedexNumber: 147,
      imageUrl: 'https://images.pokemontcg.io/gym1/42.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/gym1/42_hires.png',
      types: [
        'Colorless'
      ],
      supertype: 'Pokémon',
      subtype: 'Basic',
      ability: {
        name: 'Strange Barrier',
        text: 'Whenever an attack by a Basic Pokémon (including your own) does 20 or more damage to Erika\'s Dratini (after applying Weakness and Resistance), reduce that damage to 10. (Any other effects of attacks still happen.) This power stops working while Erika\'s Dratini is Asleep, Confused, or Paralyzed.',
        type: 'Pokémon Power'
      },
      hp: '40',
      retreatCost: [
        'Colorless'
      ],
      convertedRetreatCost: 1,
      number: '42',
      artist: 'Ken Sugimori',
      rarity: 'Uncommon',
      series: 'Gym',
      set: 'Gym Heroes',
      setCode: 'gym1',
      attacks: [
        {
          cost: [
            'Colorless',
            'Colorless'
          ],
          name: 'Tail Strike',
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
      ]
    },
    {
      id: 'gym1-43',
      name: 'Erika\'s Exeggcute',
      nationalPokedexNumber: 102,
      imageUrl: 'https://images.pokemontcg.io/gym1/43.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/gym1/43_hires.png',
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
      number: '43',
      artist: 'Atsuko Nishida',
      rarity: 'Uncommon',
      series: 'Gym',
      set: 'Gym Heroes',
      setCode: 'gym1',
      attacks: [
        {
          cost: [
            'Psychic'
          ],
          name: 'Deflector',
          text: 'During your opponent\'s next turn, whenever Erika\'s Exeggcute takes damage, divide that damage in half (rounded down to the nearest 10). (Any other effects still happen.)',
          damage: '',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Grass',
            'Colorless'
          ],
          name: 'Egg Bomb',
          text: 'Flip a coin. If tails, this attack does nothing to the Defending Pokémon and Erika\'s Exeggcute does 20 damage to itself.',
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
      id: 'gym1-44',
      name: 'Erika\'s Exeggutor',
      nationalPokedexNumber: 103,
      imageUrl: 'https://images.pokemontcg.io/gym1/44.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/gym1/44_hires.png',
      types: [
        'Grass'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 1',
      evolvesFrom: 'Exeggcute',
      hp: '70',
      retreatCost: [
        'Colorless',
        'Colorless'
      ],
      convertedRetreatCost: 2,
      number: '44',
      artist: 'Ken Sugimori',
      rarity: 'Uncommon',
      series: 'Gym',
      set: 'Gym Heroes',
      setCode: 'gym1',
      attacks: [
        {
          cost: [
            'Psychic'
          ],
          name: 'Psychic Exchange',
          text: 'Shuffle your hand into your deck, then draw 5 cards.',
          damage: '',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Grass',
            'Colorless',
            'Colorless'
          ],
          name: 'Stomp',
          text: 'Flip a coin. If heads, this attack does 30 damage plus 10 more damage; if tails, this attack does 30 damage.',
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
      id: 'gym1-45',
      name: 'Erika\'s Gloom',
      nationalPokedexNumber: 44,
      imageUrl: 'https://images.pokemontcg.io/gym1/45.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/gym1/45_hires.png',
      types: [
        'Grass'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 1',
      evolvesFrom: 'Oddish',
      hp: '60',
      number: '45',
      artist: 'Ken Sugimori',
      rarity: 'Uncommon',
      series: 'Gym',
      set: 'Gym Heroes',
      setCode: 'gym1',
      attacks: [
        {
          cost: [
            'Grass'
          ],
          name: 'Healing Pollen',
          text: 'Flip a coin. If heads, remove 4 damage counters from Erika\'s Gloom. If Erika\'s Gloom has fewer damage counters than that, remove all of them.',
          damage: '',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Grass',
            'Grass',
            'Grass'
          ],
          name: 'Magic Pollen',
          text: 'Flip a coin. If heads, the Defending Pokémon is now Asleep, Confused, Paralyzed, or Poisoned (your choice).',
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
      id: 'gym1-46',
      name: 'Erika\'s Gloom',
      nationalPokedexNumber: 44,
      imageUrl: 'https://images.pokemontcg.io/gym1/46.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/gym1/46_hires.png',
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
      number: '46',
      artist: 'Ken Sugimori',
      rarity: 'Uncommon',
      series: 'Gym',
      set: 'Gym Heroes',
      setCode: 'gym1',
      attacks: [
        {
          cost: [
            'Grass',
            'Colorless'
          ],
          name: 'Dream Dance',
          text: 'Both the Defending Pokémon and Erika\'s Gloom are now Asleep (after dealing damage).',
          damage: '10',
          convertedEnergyCost: 2
        },
        {
          cost: [
            'Grass',
            'Grass',
            'Colorless'
          ],
          name: 'Vile Smell',
          text: 'Both the Defending Pokémon and Erika\'s Gloom are now Confused (after doing damage).',
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
      id: 'gym1-47',
      name: 'Erika\'s Oddish',
      nationalPokedexNumber: 43,
      imageUrl: 'https://images.pokemontcg.io/gym1/47.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/gym1/47_hires.png',
      types: [
        'Grass'
      ],
      supertype: 'Pokémon',
      subtype: 'Basic',
      ability: {
        name: 'Photosynthesis',
        text: 'All Energy cards attached to Erika\'s Oddish provide Grass Energy instead of their usual type. This power works even while Erika\'s Oddish is Asleep, Confused, or Paralyzed.',
        type: 'Pokémon Power'
      },
      hp: '40',
      retreatCost: [
        'Colorless'
      ],
      convertedRetreatCost: 1,
      number: '47',
      artist: 'Atsuko Nishida',
      rarity: 'Uncommon',
      series: 'Gym',
      set: 'Gym Heroes',
      setCode: 'gym1',
      attacks: [
        {
          cost: [
            'Grass',
            'Grass'
          ],
          name: 'Poisonpowder',
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
      id: 'gym1-48',
      name: 'Erika\'s Weepinbell',
      nationalPokedexNumber: 70,
      imageUrl: 'https://images.pokemontcg.io/gym1/48.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/gym1/48_hires.png',
      types: [
        'Grass'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 1',
      evolvesFrom: 'Bellsprout',
      hp: '60',
      retreatCost: [
        'Colorless'
      ],
      convertedRetreatCost: 1,
      number: '48',
      artist: 'Atsuko Nishida',
      rarity: 'Uncommon',
      series: 'Gym',
      set: 'Gym Heroes',
      setCode: 'gym1',
      attacks: [
        {
          cost: [
            'Grass'
          ],
          name: 'Drool',
          text: '',
          damage: '10',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Grass',
            'Grass'
          ],
          name: 'Flytrap',
          text: 'Before doing damage, choose 1 of your opponent\'s Benched Pokémon and switch it with his or her Active Pokémon. This attack can\'t be used if your opponent has no Benched Pokémon.',
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
      id: 'gym1-49',
      name: 'Erika\'s Weepinbell',
      nationalPokedexNumber: 70,
      imageUrl: 'https://images.pokemontcg.io/gym1/49.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/gym1/49_hires.png',
      types: [
        'Grass'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 1',
      evolvesFrom: 'Bellsprout',
      hp: '70',
      retreatCost: [
        'Colorless',
        'Colorless'
      ],
      convertedRetreatCost: 2,
      number: '49',
      artist: 'Ken Sugimori',
      rarity: 'Uncommon',
      series: 'Gym',
      set: 'Gym Heroes',
      setCode: 'gym1',
      attacks: [
        {
          cost: [
            'Grass',
            'Colorless'
          ],
          name: 'Sleep Poison',
          text: 'The Defending Pokémon is now Asleep and Poisoned.',
          damage: '10',
          convertedEnergyCost: 2
        },
        {
          cost: [
            'Grass',
            'Grass',
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
      id: 'gym1-50',
      name: 'Lt. Surge\'s Magnemite',
      nationalPokedexNumber: 81,
      imageUrl: 'https://images.pokemontcg.io/gym1/50.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/gym1/50_hires.png',
      types: [
        'Lightning'
      ],
      supertype: 'Pokémon',
      subtype: 'Basic',
      hp: '30',
      retreatCost: [
        'Colorless',
        'Colorless'
      ],
      convertedRetreatCost: 2,
      number: '50',
      artist: 'Atsuko Nishida',
      rarity: 'Uncommon',
      series: 'Gym',
      set: 'Gym Heroes',
      setCode: 'gym1',
      attacks: [
        {
          cost: [
            'Lightning'
          ],
          name: 'Removal Pulse',
          text: 'If the Defending Pokémon has any Energy cards attached to it, flip a coin. If heads, choose 1 of those Energy cards and discard it.',
          damage: '10',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Lightning',
            'Lightning'
          ],
          name: 'Confusion Pulse',
          text: 'Flip a coin. If heads, the Defending Pokémon is now Confused.',
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
      id: 'gym1-51',
      name: 'Lt. Surge\'s Raticate',
      nationalPokedexNumber: 20,
      imageUrl: 'https://images.pokemontcg.io/gym1/51.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/gym1/51_hires.png',
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
      number: '51',
      artist: 'Ken Sugimori',
      rarity: 'Uncommon',
      series: 'Gym',
      set: 'Gym Heroes',
      setCode: 'gym1',
      attacks: [
        {
          cost: [
            'Colorless'
          ],
          name: 'Super Fang',
          text: 'Does damage to the Defending Pokémon equal to half the Defending Pokémon\'s remaining HP (rounded up to the nearest 10).',
          damage: '',
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
      id: 'gym1-52',
      name: 'Lt. Surge\'s Spearow',
      nationalPokedexNumber: 21,
      imageUrl: 'https://images.pokemontcg.io/gym1/52.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/gym1/52_hires.png',
      types: [
        'Colorless'
      ],
      supertype: 'Pokémon',
      subtype: 'Basic',
      hp: '30',
      number: '52',
      artist: 'Ken Sugimori',
      rarity: 'Uncommon',
      series: 'Gym',
      set: 'Gym Heroes',
      setCode: 'gym1',
      attacks: [
        {
          cost: [
            'Colorless'
          ],
          name: 'Drill Peck',
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
          type: 'Lightning',
          value: '×2'
        }
      ]
    },
    {
      id: 'gym1-53',
      name: 'Misty\'s Poliwhirl',
      nationalPokedexNumber: 61,
      imageUrl: 'https://images.pokemontcg.io/gym1/53.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/gym1/53_hires.png',
      types: [
        'Water'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 1',
      evolvesFrom: 'Poliwag',
      hp: '70',
      retreatCost: [
        'Colorless',
        'Colorless'
      ],
      convertedRetreatCost: 2,
      number: '53',
      artist: 'Ken Sugimori',
      rarity: 'Uncommon',
      series: 'Gym',
      set: 'Gym Heroes',
      setCode: 'gym1',
      attacks: [
        {
          cost: [
            'Water',
            'Colorless'
          ],
          name: 'Rapids',
          text: 'If the Defending Pokémon has any Energy cards attached to it, flip a coin. If heads, choose 1 of those Energy cards and discard it.',
          damage: '20',
          convertedEnergyCost: 2
        },
        {
          cost: [
            'Colorless',
            'Colorless',
            'Colorless'
          ],
          name: 'Water Punch',
          text: 'Flip a number of coins equal to the number of Water Energy attached to Misty\'s Poliwhirl. This attack does 30 damage plus 10 damage for each heads.',
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
      id: 'gym1-54',
      name: 'Misty\'s Psyduck',
      nationalPokedexNumber: 54,
      imageUrl: 'https://images.pokemontcg.io/gym1/54.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/gym1/54_hires.png',
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
      number: '54',
      artist: 'Atsuko Nishida',
      rarity: 'Uncommon',
      series: 'Gym',
      set: 'Gym Heroes',
      setCode: 'gym1',
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
            'Water'
          ],
          name: 'Call for Friend',
          text: 'Flip a coin. If heads, you may search your deck for a Basic Pokémon with Misty in its name and put it onto your Bench. (You can\'t use this attack if your Bench is full.) Shuffle your deck afterward.',
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
      id: 'gym1-55',
      name: 'Misty\'s Seaking',
      nationalPokedexNumber: 119,
      imageUrl: 'https://images.pokemontcg.io/gym1/55.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/gym1/55_hires.png',
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
      number: '55',
      artist: 'Ken Sugimori',
      rarity: 'Uncommon',
      series: 'Gym',
      set: 'Gym Heroes',
      setCode: 'gym1',
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
      id: 'gym1-56',
      name: 'Misty\'s Starmie',
      nationalPokedexNumber: 121,
      imageUrl: 'https://images.pokemontcg.io/gym1/56.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/gym1/56_hires.png',
      types: [
        'Water'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 1',
      evolvesFrom: 'Staryu',
      hp: '80',
      retreatCost: [
        'Colorless',
        'Colorless'
      ],
      convertedRetreatCost: 2,
      number: '56',
      artist: 'Ken Sugimori',
      rarity: 'Uncommon',
      series: 'Gym',
      set: 'Gym Heroes',
      setCode: 'gym1',
      attacks: [
        {
          cost: [
            'Water'
          ],
          name: 'Water Gun',
          text: 'Does 10 damage plus 10 more damage for each Water Energy attached to Misty\'s Starmie but not used to pay for this attack\'s Energy cost. You can\'t add more than 20 damage in this way.',
          damage: '10+',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Water',
            'Water',
            'Water'
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
      id: 'gym1-57',
      name: 'Misty\'s Tentacool',
      nationalPokedexNumber: 72,
      imageUrl: 'https://images.pokemontcg.io/gym1/57.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/gym1/57_hires.png',
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
      number: '57',
      artist: 'Ken Sugimori',
      rarity: 'Uncommon',
      series: 'Gym',
      set: 'Gym Heroes',
      setCode: 'gym1',
      attacks: [
        {
          cost: [
            'Water',
            'Colorless'
          ],
          name: 'Crystal Beam',
          text: 'Flip a coin. If heads, your opponent can\'t attach Energy cards to the Defending Pokémon during his or her next turn.',
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
      id: 'gym1-58',
      name: 'Sabrina\'s Haunter',
      nationalPokedexNumber: 93,
      imageUrl: 'https://images.pokemontcg.io/gym1/58.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/gym1/58_hires.png',
      types: [
        'Psychic'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 1',
      evolvesFrom: 'Gastly',
      hp: '50',
      number: '58',
      artist: 'Atsuko Nishida',
      rarity: 'Uncommon',
      series: 'Gym',
      set: 'Gym Heroes',
      setCode: 'gym1',
      attacks: [
        {
          cost: [
            'Psychic',
            'Psychic'
          ],
          name: 'Night Spirits',
          text: 'Flip a number of coins equal to the total number of Sabrina\'s Gastlys, Sabrina\'s Haunters, and Sabrina\'s Gengars you have in play. This attack does 30 damage times the number of heads.',
          damage: '30×',
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
      id: 'gym1-59',
      name: 'Sabrina\'s Jynx',
      nationalPokedexNumber: 124,
      imageUrl: 'https://images.pokemontcg.io/gym1/59.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/gym1/59_hires.png',
      types: [
        'Psychic'
      ],
      supertype: 'Pokémon',
      subtype: 'Basic',
      evolvesFrom: 'Smoochum',
      hp: '60',
      retreatCost: [
        'Colorless'
      ],
      convertedRetreatCost: 1,
      number: '59',
      artist: 'Atsuko Nishida',
      rarity: 'Uncommon',
      series: 'Gym',
      set: 'Gym Heroes',
      setCode: 'gym1',
      attacks: [
        {
          cost: [
            'Psychic'
          ],
          name: 'Good Night',
          text: 'The Defending Pokémon is now Asleep.',
          damage: '10',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Psychic',
            'Colorless'
          ],
          name: 'Good Morning',
          text: 'If the Defending Pokémon was Asleep, it is no longer Asleep.',
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
      id: 'gym1-60',
      name: 'Sabrina\'s Slowbro',
      nationalPokedexNumber: 80,
      imageUrl: 'https://images.pokemontcg.io/gym1/60.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/gym1/60_hires.png',
      types: [
        'Psychic'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 1',
      evolvesFrom: 'Slowpoke',
      hp: '70',
      retreatCost: [
        'Colorless',
        'Colorless'
      ],
      convertedRetreatCost: 2,
      number: '60',
      artist: 'Ken Sugimori',
      rarity: 'Uncommon',
      series: 'Gym',
      set: 'Gym Heroes',
      setCode: 'gym1',
      attacks: [
        {
          cost: [
            'Psychic'
          ],
          name: 'Naptime',
          text: 'Flip a coin. If heads, remove 3 damage counters from Sabrina\'s Slowbro and Sabrina\'s Slowbro is now Asleep. If Sabrina\'s Slowbro has fewer damage counters than that, remove all of them.',
          damage: '',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Psychic',
            'Colorless',
            'Colorless'
          ],
          name: 'Screaming Headbutt',
          text: 'You can\'t use this attack during your next turn.',
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
      id: 'gym1-61',
      name: 'Blaine\'s Charmander',
      nationalPokedexNumber: 4,
      imageUrl: 'https://images.pokemontcg.io/gym1/61.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/gym1/61_hires.png',
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
      number: '61',
      artist: 'Ken Sugimori',
      rarity: 'Common',
      series: 'Gym',
      set: 'Gym Heroes',
      setCode: 'gym1',
      attacks: [
        {
          cost: [
            'Fire'
          ],
          name: 'Kindle',
          text: 'Discard 1 Energy card attached to Blaine\'s Charmander in order to use this attack. If the Defending Pokémon has any Energy cards attached to it, choose 1 of them and discard it.',
          damage: '10',
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
      weaknesses: [
        {
          type: 'Water',
          value: '×2'
        }
      ]
    },
    {
      id: 'gym1-62',
      name: 'Blaine\'s Growlithe',
      nationalPokedexNumber: 58,
      imageUrl: 'https://images.pokemontcg.io/gym1/62.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/gym1/62_hires.png',
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
      artist: 'Atsuko Nishida',
      rarity: 'Common',
      series: 'Gym',
      set: 'Gym Heroes',
      setCode: 'gym1',
      attacks: [
        {
          cost: [
            'Fire',
            'Fire'
          ],
          name: 'Blaze',
          text: 'Does 10 damage to each Pokémon on your opponent\'s Bench. (Don\'t apply Weakness and Resistance for Benched Pokémon.)',
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
      id: 'gym1-63',
      name: 'Blaine\'s Ponyta',
      nationalPokedexNumber: 77,
      imageUrl: 'https://images.pokemontcg.io/gym1/63.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/gym1/63_hires.png',
      types: [
        'Fire'
      ],
      supertype: 'Pokémon',
      subtype: 'Basic',
      hp: '40',
      number: '63',
      artist: 'Ken Sugimori',
      rarity: 'Common',
      series: 'Gym',
      set: 'Gym Heroes',
      setCode: 'gym1',
      attacks: [
        {
          cost: [
            'Fire',
            'Colorless'
          ],
          name: 'Agility',
          text: 'Flip a coin. If heads, during your opponent\'s next turn, prevent all effects of attacks, including damage, done to Blaine\'s Ponyta.',
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
      id: 'gym1-64',
      name: 'Blaine\'s Tauros',
      nationalPokedexNumber: 128,
      imageUrl: 'https://images.pokemontcg.io/gym1/64.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/gym1/64_hires.png',
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
      number: '64',
      artist: 'Ken Sugimori',
      rarity: 'Common',
      series: 'Gym',
      set: 'Gym Heroes',
      setCode: 'gym1',
      attacks: [
        {
          cost: [
            'Colorless'
          ],
          name: '3-Pronged Tail',
          text: 'Flip 3 coins. This attack does 10 damage times the number of heads.',
          damage: '10×',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Colorless',
            'Colorless',
            'Colorless'
          ],
          name: 'Full Speed Charge',
          text: 'Flip 4 coins. This attack does 20 damage times the number of heads to the Defending Pokémon and 20 damage times the number tails to Blaine\'s Tauros.',
          damage: '20×',
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
      id: 'gym1-65',
      name: 'Blaine\'s Vulpix',
      nationalPokedexNumber: 37,
      imageUrl: 'https://images.pokemontcg.io/gym1/65.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/gym1/65_hires.png',
      types: [
        'Fire'
      ],
      supertype: 'Pokémon',
      subtype: 'Basic',
      ability: {
        name: 'Natural Healing',
        text: 'Once during your turn (before your attack), you may remove 1 damage counter from Blaine\'s Vulpix. This power can\'t be used if Blaine\'s Vulpix is Asleep, Confused, or Paralyzed.',
        type: 'Pokémon Power'
      },
      hp: '40',
      retreatCost: [
        'Colorless'
      ],
      convertedRetreatCost: 1,
      number: '65',
      artist: 'Ken Sugimori',
      rarity: 'Common',
      series: 'Gym',
      set: 'Gym Heroes',
      setCode: 'gym1',
      attacks: [
        {
          cost: [
            'Fire',
            'Colorless',
            'Colorless'
          ],
          name: 'Tail Fan',
          text: 'Flip a coin. If heads, the Defending Pokémon is now Confused.',
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
      id: 'gym1-66',
      name: 'Brock\'s Geodude',
      nationalPokedexNumber: 74,
      imageUrl: 'https://images.pokemontcg.io/gym1/66.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/gym1/66_hires.png',
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
      number: '66',
      artist: 'Ken Sugimori',
      rarity: 'Common',
      series: 'Gym',
      set: 'Gym Heroes',
      setCode: 'gym1',
      attacks: [
        {
          cost: [
            'Fighting'
          ],
          name: 'Call for Friend',
          text: 'Flip a coin. If heads, you may search your deck for a Basic Pokémon card with Brock in its name and put it onto your Bench. Shuffle your deck afterward. (You can\'t use this attack if your Bench is full.)',
          damage: '',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Fighting',
            'Colorless'
          ],
          name: 'Hook Shot',
          text: 'Don\'t apply Resistance for this attack. (Any other effects that would happen after applying Resistance still happen.)',
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
      id: 'gym1-67',
      name: 'Brock\'s Mankey',
      nationalPokedexNumber: 56,
      imageUrl: 'https://images.pokemontcg.io/gym1/67.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/gym1/67_hires.png',
      types: [
        'Fighting'
      ],
      supertype: 'Pokémon',
      subtype: 'Basic',
      hp: '40',
      number: '67',
      artist: 'Atsuko Nishida',
      rarity: 'Common',
      series: 'Gym',
      set: 'Gym Heroes',
      setCode: 'gym1',
      attacks: [
        {
          cost: [
            'Colorless'
          ],
          name: 'Taunt',
          text: 'If your opponent has any Benched Pokémon, choose 1 of them and switch it with the Defending Pokémon.',
          damage: '',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Fighting'
          ],
          name: 'Light Kick',
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
      id: 'gym1-68',
      name: 'Brock\'s Mankey',
      nationalPokedexNumber: 56,
      imageUrl: 'https://images.pokemontcg.io/gym1/68.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/gym1/68_hires.png',
      types: [
        'Fighting'
      ],
      supertype: 'Pokémon',
      subtype: 'Basic',
      hp: '40',
      number: '68',
      artist: 'Ken Sugimori',
      rarity: 'Common',
      series: 'Gym',
      set: 'Gym Heroes',
      setCode: 'gym1',
      attacks: [
        {
          cost: [
            'Colorless'
          ],
          name: 'Fidget',
          text: 'Shuffle your deck.',
          damage: '',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Fighting',
            'Colorless'
          ],
          name: 'Karate Chop',
          text: 'Does 40 damage minus 10 damage for each damage counter on Brock\'s Mankey.',
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
      id: 'gym1-69',
      name: 'Brock\'s Onix',
      nationalPokedexNumber: 95,
      imageUrl: 'https://images.pokemontcg.io/gym1/69.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/gym1/69_hires.png',
      types: [
        'Fighting'
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
      number: '69',
      artist: 'Ken Sugimori',
      rarity: 'Common',
      series: 'Gym',
      set: 'Gym Heroes',
      setCode: 'gym1',
      attacks: [
        {
          cost: [
            'Colorless'
          ],
          name: 'Bellow',
          text: 'Flip a coin. If heads, the Defending Pokémon is now Paralyzed.',
          damage: '',
          convertedEnergyCost: 1
        },
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
      id: 'gym1-70',
      name: 'Brock\'s Rhyhorn',
      nationalPokedexNumber: 111,
      imageUrl: 'https://images.pokemontcg.io/gym1/70.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/gym1/70_hires.png',
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
      number: '70',
      artist: 'Ken Sugimori',
      rarity: 'Common',
      series: 'Gym',
      set: 'Gym Heroes',
      setCode: 'gym1',
      attacks: [
        {
          cost: [
            'Fighting',
            'Colorless'
          ],
          name: 'Drill Tackle',
          text: 'Flip 2 coins. If 1 or both of them are tails, this attack does nothing.',
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
      id: 'gym1-71',
      name: 'Brock\'s Sandshrew',
      nationalPokedexNumber: 27,
      imageUrl: 'https://images.pokemontcg.io/gym1/71.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/gym1/71_hires.png',
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
      number: '71',
      artist: 'Ken Sugimori',
      rarity: 'Common',
      series: 'Gym',
      set: 'Gym Heroes',
      setCode: 'gym1',
      attacks: [
        {
          cost: [
            'Colorless'
          ],
          name: 'Defense Curl',
          text: 'Flip a coin. If heads, prevent all damage done to Brock\'s Sandshrew during your opponent\'s next turn. (Any other effects of attacks still happen.)',
          damage: '',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Fighting',
            'Colorless'
          ],
          name: 'Rolling Attack',
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
      id: 'gym1-72',
      name: 'Brock\'s Sandshrew',
      nationalPokedexNumber: 27,
      imageUrl: 'https://images.pokemontcg.io/gym1/72.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/gym1/72_hires.png',
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
      set: 'Gym Heroes',
      setCode: 'gym1',
      attacks: [
        {
          cost: [
            'Fighting',
            'Fighting'
          ],
          name: 'Sand Pit',
          text: 'The Defending Pokémon can\'t retreat during your opponent\'s next turn.',
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
      id: 'gym1-73',
      name: 'Brock\'s Vulpix',
      nationalPokedexNumber: 37,
      imageUrl: 'https://images.pokemontcg.io/gym1/73.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/gym1/73_hires.png',
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
      number: '73',
      artist: 'Ken Sugimori',
      rarity: 'Common',
      series: 'Gym',
      set: 'Gym Heroes',
      setCode: 'gym1',
      attacks: [
        {
          cost: [
            'Fire'
          ],
          name: 'Flame',
          text: '',
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
      id: 'gym1-74',
      name: 'Brock\'s Zubat',
      nationalPokedexNumber: 41,
      imageUrl: 'https://images.pokemontcg.io/gym1/74.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/gym1/74_hires.png',
      types: [
        'Grass'
      ],
      supertype: 'Pokémon',
      subtype: 'Basic',
      hp: '40',
      number: '74',
      artist: 'Atsuko Nishida',
      rarity: 'Common',
      series: 'Gym',
      set: 'Gym Heroes',
      setCode: 'gym1',
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
          name: 'Poison Fang',
          text: 'Flip a coin. If heads, the Defending Pokémon is now Poisoned.',
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
          type: 'Psychic',
          value: '×2'
        }
      ]
    },
    {
      id: 'gym1-75',
      name: 'Erika\'s Bellsprout',
      nationalPokedexNumber: 69,
      imageUrl: 'https://images.pokemontcg.io/gym1/75.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/gym1/75_hires.png',
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
      artist: 'Atsuko Nishida',
      rarity: 'Common',
      series: 'Gym',
      set: 'Gym Heroes',
      setCode: 'gym1',
      attacks: [
        {
          cost: [
            'Grass'
          ],
          name: 'Poison Vine',
          text: 'Flip a coin. If heads, the Defending Pokémon is now Poisoned.',
          damage: '',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Grass',
            'Grass'
          ],
          name: 'Vine Whip',
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
      id: 'gym1-76',
      name: 'Erika\'s Bellsprout',
      nationalPokedexNumber: 69,
      imageUrl: 'https://images.pokemontcg.io/gym1/76.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/gym1/76_hires.png',
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
      number: '76',
      artist: 'Ken Sugimori',
      rarity: 'Common',
      series: 'Gym',
      set: 'Gym Heroes',
      setCode: 'gym1',
      attacks: [
        {
          cost: [
            'Colorless'
          ],
          name: 'Careless Tackle',
          text: 'Erika\'s Bellsprout does 10 damage to itself.',
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
      id: 'gym1-77',
      name: 'Erika\'s Exeggcute',
      nationalPokedexNumber: 102,
      imageUrl: 'https://images.pokemontcg.io/gym1/77.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/gym1/77_hires.png',
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
      number: '77',
      artist: 'Ken Sugimori',
      rarity: 'Common',
      series: 'Gym',
      set: 'Gym Heroes',
      setCode: 'gym1',
      attacks: [
        {
          cost: [
            'Colorless'
          ],
          name: 'Eggsplosion',
          text: 'Flip a number of coins equal to the number of Energy attached to Erika\'s Exeggcute. This attack does 10 damage times the number of heads.',
          damage: '10×',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Psychic',
            'Colorless'
          ],
          name: 'Psychic',
          text: 'Does 10 damage plus 10 more damage for each Energy card attached to the Defending Pokémon.',
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
      id: 'gym1-78',
      name: 'Erika\'s Oddish',
      nationalPokedexNumber: 43,
      imageUrl: 'https://images.pokemontcg.io/gym1/78.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/gym1/78_hires.png',
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
      set: 'Gym Heroes',
      setCode: 'gym1',
      attacks: [
        {
          cost: [
            'Grass'
          ],
          name: 'Blot',
          text: 'If there are any damage counters on Erika\'s Oddish, remove 1 of them.',
          damage: '',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Grass',
            'Colorless'
          ],
          name: 'Sporadic Sponging',
          text: 'If Erika\'s Oddish has any damage counters on it, flip a coin. If heads, remove 1 of those damage counters.',
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
      id: 'gym1-79',
      name: 'Erika\'s Tangela',
      nationalPokedexNumber: 114,
      imageUrl: 'https://images.pokemontcg.io/gym1/79.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/gym1/79_hires.png',
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
      number: '79',
      artist: 'Ken Sugimori',
      rarity: 'Common',
      series: 'Gym',
      set: 'Gym Heroes',
      setCode: 'gym1',
      attacks: [
        {
          cost: [
            'Grass'
          ],
          name: 'Vine Slap',
          text: '',
          damage: '10',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Grass',
            'Grass',
            'Colorless'
          ],
          name: 'Stretch Vine',
          text: 'If your opponent has any Benched Pokémon, choose 1 of them and this attack does 20 damage to it. (Don\'t apply Weakness and Resistance for Benched Pokémon.)',
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
      id: 'gym1-80',
      name: 'Lt. Surge\'s Magnemite',
      nationalPokedexNumber: 81,
      imageUrl: 'https://images.pokemontcg.io/gym1/80.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/gym1/80_hires.png',
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
      number: '80',
      artist: 'Ken Sugimori',
      rarity: 'Common',
      series: 'Gym',
      set: 'Gym Heroes',
      setCode: 'gym1',
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
          type: 'Fighting',
          value: '×2'
        }
      ]
    },
    {
      id: 'gym1-81',
      name: 'Lt. Surge\'s Pikachu',
      nationalPokedexNumber: 25,
      imageUrl: 'https://images.pokemontcg.io/gym1/81.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/gym1/81_hires.png',
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
      number: '81',
      artist: 'Ken Sugimori',
      rarity: 'Common',
      series: 'Gym',
      set: 'Gym Heroes',
      setCode: 'gym1',
      attacks: [
        {
          cost: [
            'Colorless'
          ],
          name: 'Charge',
          text: 'Take 1 Lightning Energy card from your discard pile and attach it to Lt. Surge\'s Pikachu.',
          damage: '',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Lightning',
            'Lightning'
          ],
          name: 'Lightning Tail',
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
      id: 'gym1-82',
      name: 'Lt. Surge\'s Rattata',
      nationalPokedexNumber: 19,
      imageUrl: 'https://images.pokemontcg.io/gym1/82.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/gym1/82_hires.png',
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
      number: '82',
      artist: 'Ken Sugimori',
      rarity: 'Common',
      series: 'Gym',
      set: 'Gym Heroes',
      setCode: 'gym1',
      attacks: [
        {
          cost: [
            'Colorless'
          ],
          name: 'Focus Energy',
          text: 'During your next turn, Lt. Surge\'s Rattata\'s Gnaw attack\'s base damage is doubled.',
          damage: '',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Colorless',
            'Colorless'
          ],
          name: 'Gnaw',
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
      id: 'gym1-83',
      name: 'Lt. Surge\'s Spearow',
      nationalPokedexNumber: 21,
      imageUrl: 'https://images.pokemontcg.io/gym1/83.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/gym1/83_hires.png',
      types: [
        'Colorless'
      ],
      supertype: 'Pokémon',
      subtype: 'Basic',
      hp: '50',
      number: '83',
      artist: 'Atsuko Nishida',
      rarity: 'Common',
      series: 'Gym',
      set: 'Gym Heroes',
      setCode: 'gym1',
      attacks: [
        {
          cost: [
            'Colorless'
          ],
          name: 'Whirlwind',
          text: 'If your opponent has any Benched Pokémon, he or she chooses 1 of them and switches it with the Defending Pokémon. (Do the damage before switching the Pokémon.)',
          damage: '10',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Colorless',
            'Colorless'
          ],
          name: 'Razor Wind',
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
      id: 'gym1-84',
      name: 'Lt. Surge\'s Voltorb',
      nationalPokedexNumber: 100,
      imageUrl: 'https://images.pokemontcg.io/gym1/84.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/gym1/84_hires.png',
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
      number: '84',
      artist: 'Ken Sugimori',
      rarity: 'Common',
      series: 'Gym',
      set: 'Gym Heroes',
      setCode: 'gym1',
      attacks: [
        {
          cost: [
            'Lightning'
          ],
          name: 'Spin Ball',
          text: 'Flip 1 coin. This attack does 20 damage times the number of heads.',
          damage: '20×',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Lightning',
            'Colorless'
          ],
          name: 'Double Spin',
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
      id: 'gym1-85',
      name: 'Misty\'s Goldeen',
      nationalPokedexNumber: 118,
      imageUrl: 'https://images.pokemontcg.io/gym1/85.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/gym1/85_hires.png',
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
      number: '85',
      artist: 'Atsuko Nishida',
      rarity: 'Common',
      series: 'Gym',
      set: 'Gym Heroes',
      setCode: 'gym1',
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
            'Water'
          ],
          name: 'Supersonic',
          text: 'Flip a coin. If heads, the Defending Pokémon is now Confused.',
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
      id: 'gym1-86',
      name: 'Misty\'s Horsea',
      nationalPokedexNumber: 116,
      imageUrl: 'https://images.pokemontcg.io/gym1/86.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/gym1/86_hires.png',
      types: [
        'Water'
      ],
      supertype: 'Pokémon',
      subtype: 'Basic',
      hp: '40',
      number: '86',
      artist: 'Ken Sugimori',
      rarity: 'Common',
      series: 'Gym',
      set: 'Gym Heroes',
      setCode: 'gym1',
      attacks: [
        {
          cost: [
            'Water'
          ],
          name: 'Tackle',
          text: '',
          damage: '10',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Water',
            'Water'
          ],
          name: 'Smokescreen',
          text: 'If the Defending Pokémon tries to attack during your opponent\'s next turn, your opponent flips a coin. If tails, that attack does nothing.',
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
      id: 'gym1-87',
      name: 'Misty\'s Poliwag',
      nationalPokedexNumber: 60,
      imageUrl: 'https://images.pokemontcg.io/gym1/87.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/gym1/87_hires.png',
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
      number: '87',
      artist: 'Ken Sugimori',
      rarity: 'Common',
      series: 'Gym',
      set: 'Gym Heroes',
      setCode: 'gym1',
      attacks: [
        {
          cost: [
            'Water'
          ],
          name: 'Hypnotic Stare',
          text: 'Flip a coin. If heads, the Defending Pokémon is now Paralyzed. If tails, the Defending Pokémon is now Asleep.',
          damage: '',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Water',
            'Colorless'
          ],
          name: 'Tail Rap',
          text: 'Flip 2 coins. This attack does 20 damage times the number of heads.',
          damage: '20×',
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
      id: 'gym1-88',
      name: 'Misty\'s Seel',
      nationalPokedexNumber: 86,
      imageUrl: 'https://images.pokemontcg.io/gym1/88.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/gym1/88_hires.png',
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
      number: '88',
      artist: 'Atsuko Nishida',
      rarity: 'Common',
      series: 'Gym',
      set: 'Gym Heroes',
      setCode: 'gym1',
      attacks: [
        {
          cost: [
            'Water',
            'Colorless'
          ],
          name: 'Aurora Beam',
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
      id: 'gym1-89',
      name: 'Misty\'s Shellder',
      nationalPokedexNumber: 90,
      imageUrl: 'https://images.pokemontcg.io/gym1/89.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/gym1/89_hires.png',
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
      number: '89',
      artist: 'Ken Sugimori',
      rarity: 'Common',
      series: 'Gym',
      set: 'Gym Heroes',
      setCode: 'gym1',
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
            'Water',
            'Colorless'
          ],
          name: 'Clamp',
          text: 'Flip a coin. If heads, the Defending Pokémon is now Paralyzed. If tails, this attack does nothing (not even damage).',
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
      id: 'gym1-90',
      name: 'Misty\'s Staryu',
      nationalPokedexNumber: 120,
      imageUrl: 'https://images.pokemontcg.io/gym1/90.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/gym1/90_hires.png',
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
      number: '90',
      artist: 'Ken Sugimori',
      rarity: 'Common',
      series: 'Gym',
      set: 'Gym Heroes',
      setCode: 'gym1',
      attacks: [
        {
          cost: [
            'Water',
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
          type: 'Lightning',
          value: '×2'
        }
      ]
    },
    {
      id: 'gym1-91',
      name: 'Sabrina\'s Abra',
      nationalPokedexNumber: 63,
      imageUrl: 'https://images.pokemontcg.io/gym1/91.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/gym1/91_hires.png',
      types: [
        'Psychic'
      ],
      supertype: 'Pokémon',
      subtype: 'Basic',
      hp: '40',
      number: '91',
      artist: 'Ken Sugimori',
      rarity: 'Common',
      series: 'Gym',
      set: 'Gym Heroes',
      setCode: 'gym1',
      attacks: [
        {
          cost: [
            'Psychic'
          ],
          name: 'Energy Loop',
          text: 'Return a Psychic Energy card attached to Sabrina\'s Abra to your hand in order to use this attack.',
          damage: '20',
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
      id: 'gym1-92',
      name: 'Sabrina\'s Drowzee',
      nationalPokedexNumber: 96,
      imageUrl: 'https://images.pokemontcg.io/gym1/92.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/gym1/92_hires.png',
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
      number: '92',
      artist: 'Atsuko Nishida',
      rarity: 'Common',
      series: 'Gym',
      set: 'Gym Heroes',
      setCode: 'gym1',
      attacks: [
        {
          cost: [
            'Psychic'
          ],
          name: 'Suggestion',
          text: 'Flip a coin. If heads, the Defending Pokémon can\'t attack during your opponent\'s next turn.',
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
          type: 'Psychic',
          value: '×2'
        }
      ]
    },
    {
      id: 'gym1-93',
      name: 'Sabrina\'s Gastly',
      nationalPokedexNumber: 92,
      imageUrl: 'https://images.pokemontcg.io/gym1/93.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/gym1/93_hires.png',
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
      number: '93',
      artist: 'Ken Sugimori',
      rarity: 'Common',
      series: 'Gym',
      set: 'Gym Heroes',
      setCode: 'gym1',
      attacks: [
        {
          cost: [
            'Psychic',
            'Colorless'
          ],
          name: 'Spook',
          text: 'The Defending Pokémon can\'t retreat during your opponent\'s next turn.',
          damage: '20',
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
      id: 'gym1-94',
      name: 'Sabrina\'s Mr. Mime',
      nationalPokedexNumber: 122,
      imageUrl: 'https://images.pokemontcg.io/gym1/94.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/gym1/94_hires.png',
      types: [
        'Psychic'
      ],
      supertype: 'Pokémon',
      subtype: 'Basic',
      evolvesFrom: 'Mime Jr.',
      hp: '50',
      retreatCost: [
        'Colorless'
      ],
      convertedRetreatCost: 1,
      number: '94',
      artist: 'Ken Sugimori',
      rarity: 'Common',
      series: 'Gym',
      set: 'Gym Heroes',
      setCode: 'gym1',
      attacks: [
        {
          cost: [
            'Colorless'
          ],
          name: 'Sleight of Hand',
          text: 'Choose up to 3 cards from your hand and put them on top of your deck. Then search your deck for that many basic Energy cards. Show those cards to your opponent, then put them into your hand. Shuffle your deck afterward.',
          damage: '',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Psychic',
            'Colorless'
          ],
          name: 'Slap',
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
      id: 'gym1-95',
      name: 'Sabrina\'s Slowpoke',
      nationalPokedexNumber: 79,
      imageUrl: 'https://images.pokemontcg.io/gym1/95.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/gym1/95_hires.png',
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
      set: 'Gym Heroes',
      setCode: 'gym1',
      attacks: [
        {
          cost: [
            'Psychic',
            'Colorless'
          ],
          name: 'Lazy Attack',
          text: 'Sabrina\'s Slowpoke is now Asleep (after doing damage).',
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
      id: 'gym1-96',
      name: 'Sabrina\'s Venonat',
      nationalPokedexNumber: 48,
      imageUrl: 'https://images.pokemontcg.io/gym1/96.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/gym1/96_hires.png',
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
      artist: 'Ken Sugimori',
      rarity: 'Common',
      series: 'Gym',
      set: 'Gym Heroes',
      setCode: 'gym1',
      attacks: [
        {
          cost: [
            'Grass'
          ],
          name: 'Poison Antennae',
          text: 'The Defending Pokémon is now Poisoned.',
          damage: '10',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Psychic',
            'Colorless'
          ],
          name: 'Removal Beam',
          text: 'If the Defending Pokémon has any Energy cards attached to it, flip a coin. If heads, choose 1 of those Energy cards and discard it.',
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
      id: 'gym1-97',
      name: 'Blaine\'s Quiz #1',
      imageUrl: 'https://images.pokemontcg.io/gym1/97.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/gym1/97_hires.png',
      supertype: 'Trainer',
      subtype: '',
      number: '97',
      artist: 'Ken Sugimori',
      rarity: 'Rare',
      series: 'Gym',
      set: 'Gym Heroes',
      setCode: 'gym1',
      text: [
        'Put a Basic Pokémon or Evolution card from your hand face down in front of you and tell your opponent its name. Your opponent guesses the length of that Pokémon. Flip the card over. If your opponent guessed right, he or she draws 2 cards. If your opponent guessed wrong, you draw 2 cards. Either way, return the card to your hand.'
      ]
    },
    {
      id: 'gym1-98',
      name: 'Brock',
      imageUrl: 'https://images.pokemontcg.io/gym1/98.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/gym1/98_hires.png',
      supertype: 'Trainer',
      subtype: '',
      number: '98',
      artist: 'Ken Sugimori',
      rarity: 'Rare',
      series: 'Gym',
      set: 'Gym Heroes',
      setCode: 'gym1',
      text: [
        'Remove 1 damage counter from each of your Pokémon that has any damage counters on it.'
      ]
    },
    {
      id: 'gym1-99',
      name: 'Charity',
      imageUrl: 'https://images.pokemontcg.io/gym1/99.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/gym1/99_hires.png',
      supertype: 'Trainer',
      subtype: '',
      number: '99',
      artist: 'Ken Sugimori',
      rarity: 'Rare',
      series: 'Gym',
      set: 'Gym Heroes',
      setCode: 'gym1',
      text: [
        'Attach Charity to your Active Pokémon. Unless that Pokémon gets Knocked Out, return Charity to your hand at the end of your turn. If that Pokémon attacks and does damage to the Defending Pokémon, you may reduce that damage by any amount (rounded to the nearest 10).'
      ]
    },
    {
      id: 'gym1-100',
      name: 'Erika',
      imageUrl: 'https://images.pokemontcg.io/gym1/100.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/gym1/100_hires.png',
      supertype: 'Trainer',
      subtype: '',
      number: '100',
      artist: 'Ken Sugimori',
      rarity: 'Rare',
      series: 'Gym',
      set: 'Gym Heroes',
      setCode: 'gym1',
      text: [
        'You may draw up to 3 cards, then your opponent may draw up to 3 cards.'
      ]
    },
    {
      id: 'gym1-101',
      name: 'Lt. Surge',
      imageUrl: 'https://images.pokemontcg.io/gym1/101.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/gym1/101_hires.png',
      supertype: 'Trainer',
      subtype: '',
      number: '101',
      artist: 'Ken Sugimori',
      rarity: 'Rare',
      series: 'Gym',
      set: 'Gym Heroes',
      setCode: 'gym1',
      text: [
        'You can play this card only if you have at least 1 Basic Pokémon card in your hand. Put a Basic Pokémon card from your hand into play as your Active Pokémon. Put your old Active Pokémon onto your Bench. (You can\'t play this card if your Bench is full.)'
      ]
    },
    {
      id: 'gym1-102',
      name: 'Misty',
      imageUrl: 'https://images.pokemontcg.io/gym1/102.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/gym1/102_hires.png',
      supertype: 'Trainer',
      subtype: '',
      number: '102',
      artist: 'Ken Sugimori',
      rarity: 'Rare',
      series: 'Gym',
      set: 'Gym Heroes',
      setCode: 'gym1',
      text: [
        'Discard 2 of the other cards in your hand in order to play this card. If this turn\'s attack does damage to the Defending Pokémon (after applying Weakness and Resistance), and if the attacking Pokémon has Misty in its name, the attack does 20 more damage to the Defending Pokémon.'
      ]
    },
    {
      id: 'gym1-103',
      name: 'No Removal Gym',
      imageUrl: 'https://images.pokemontcg.io/gym1/103.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/gym1/103_hires.png',
      supertype: 'Trainer',
      subtype: 'Stadium',
      number: '103',
      artist: 'Keiji Kinebuchi',
      rarity: 'Rare',
      series: 'Gym',
      set: 'Gym Heroes',
      setCode: 'gym1',
      text: [
        'A player must discard 2 cards from his or her hand in order to play an Energy Removal or Super Energy Removal card.'
      ]
    },
    {
      id: 'gym1-104',
      name: 'The Rocket\'s Training Gym',
      imageUrl: 'https://images.pokemontcg.io/gym1/104.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/gym1/104_hires.png',
      supertype: 'Trainer',
      subtype: 'Stadium',
      number: '104',
      artist: 'Keiji Kinebuchi',
      rarity: 'Rare',
      series: 'Gym',
      set: 'Gym Heroes',
      setCode: 'gym1',
      text: [
        'Each player pays 1 more to retreat his or her Active Pokémon.'
      ]
    },
    {
      id: 'gym1-105',
      name: 'Blaine\'s Last Resort',
      imageUrl: 'https://images.pokemontcg.io/gym1/105.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/gym1/105_hires.png',
      supertype: 'Trainer',
      subtype: '',
      number: '105',
      artist: 'Ken Sugimori',
      rarity: 'Uncommon',
      series: 'Gym',
      set: 'Gym Heroes',
      setCode: 'gym1',
      text: [
        'You can\'t play this card if you have any cards in your hand other than Blaine\'s Last Resort. Show your hand to your opponent, then draw 5 cards.'
      ]
    },
    {
      id: 'gym1-106',
      name: 'Brock\'s Training Method',
      imageUrl: 'https://images.pokemontcg.io/gym1/106.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/gym1/106_hires.png',
      supertype: 'Trainer',
      subtype: '',
      number: '106',
      artist: 'Ken Sugimori',
      rarity: 'Uncommon',
      series: 'Gym',
      set: 'Gym Heroes',
      setCode: 'gym1',
      text: [
        'Search your deck for a Basic Pokémon or Evolution card with Brock in its name. Show that card to your opponent, then put it into your hand. Shuffle your deck afterward.'
      ]
    },
    {
      id: 'gym1-107',
      name: 'Celadon City Gym',
      imageUrl: 'https://images.pokemontcg.io/gym1/107.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/gym1/107_hires.png',
      supertype: 'Trainer',
      subtype: 'Stadium',
      number: '107',
      artist: 'Keiji Kinebuchi',
      rarity: 'Uncommon',
      series: 'Gym',
      set: 'Gym Heroes',
      setCode: 'gym1',
      text: [
        'During each player\'s turn, that player may choose to discard an Energy card attached to 1 of his or her Pokémon with Erika in its name. If that player does so, that Pokémon is no longer Asleep, Confused, Paralyzed or Poisoned.'
      ]
    },
    {
      id: 'gym1-108',
      name: 'Cerulean City Gym',
      imageUrl: 'https://images.pokemontcg.io/gym1/108.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/gym1/108_hires.png',
      supertype: 'Trainer',
      subtype: 'Stadium',
      number: '108',
      artist: 'Keiji Kinebuchi',
      rarity: 'Uncommon',
      series: 'Gym',
      set: 'Gym Heroes',
      setCode: 'gym1',
      text: [
        'Each player pays 1 less to retreat his or her Pokémon if it has Misty in its name.'
      ]
    },
    {
      id: 'gym1-109',
      name: 'Erika\'s Maids',
      imageUrl: 'https://images.pokemontcg.io/gym1/109.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/gym1/109_hires.png',
      supertype: 'Trainer',
      subtype: '',
      number: '109',
      artist: 'Ken Sugimori',
      rarity: 'Uncommon',
      series: 'Gym',
      set: 'Gym Heroes',
      setCode: 'gym1',
      text: [
        'Trade 2 of the other cards in your hand for up to 2 Basic Pokémon and/or Evolution cards with Erika in their names from your deck. Show those cards to your opponent, then put them into your hand. Shuffle your deck afterward.'
      ]
    },
    {
      id: 'gym1-110',
      name: 'Erika\'s Perfume',
      imageUrl: 'https://images.pokemontcg.io/gym1/110.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/gym1/110_hires.png',
      supertype: 'Trainer',
      subtype: '',
      number: '110',
      artist: 'Ken Sugimori',
      rarity: 'Uncommon',
      series: 'Gym',
      set: 'Gym Heroes',
      setCode: 'gym1',
      text: [
        'Look at your opponent\'s hand. If he or she has any Basic Pokémon cards there, you may put any number of them onto your opponent\'s Bench (as long as there\'s room).'
      ]
    },
    {
      id: 'gym1-111',
      name: 'Good Manners',
      imageUrl: 'https://images.pokemontcg.io/gym1/111.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/gym1/111_hires.png',
      supertype: 'Trainer',
      subtype: '',
      number: '111',
      artist: 'Ken Sugimori',
      rarity: 'Uncommon',
      series: 'Gym',
      set: 'Gym Heroes',
      setCode: 'gym1',
      text: [
        'In order to play this card, you can\'t have any Basic Pokémon cards in your hand. Show your hand to your opponent, then search your deck for a Basic Pokémon card, show it to your opponent, and put it into your hand. Shuffle your deck afterward.'
      ]
    },
    {
      id: 'gym1-112',
      name: 'Lt. Surge\'s Treaty',
      imageUrl: 'https://images.pokemontcg.io/gym1/112.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/gym1/112_hires.png',
      supertype: 'Trainer',
      subtype: '',
      number: '112',
      artist: 'Ken Sugimori',
      rarity: 'Uncommon',
      series: 'Gym',
      set: 'Gym Heroes',
      setCode: 'gym1',
      text: [
        'Your opponent chooses 1 of the following: everyone chooses 1 of his or her own Prizes and puts it into his or her hand, or you draw a card.'
      ]
    },
    {
      id: 'gym1-113',
      name: 'Minion of Team Rocket',
      imageUrl: 'https://images.pokemontcg.io/gym1/113.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/gym1/113_hires.png',
      supertype: 'Trainer',
      subtype: '',
      number: '113',
      artist: 'Ken Sugimori',
      rarity: 'Uncommon',
      series: 'Gym',
      set: 'Gym Heroes',
      setCode: 'gym1',
      text: [
        'Flip 2 coins. If both of them are heads, choose 1 of your opponent\'s Benched Pokémon and return it and all cards attached to it to his or her hand. If 1 or both of them are tails, your turn ends immediately (you can\'t attack this turn).'
      ]
    },
    {
      id: 'gym1-114',
      name: 'Misty\'s Wrath',
      imageUrl: 'https://images.pokemontcg.io/gym1/114.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/gym1/114_hires.png',
      supertype: 'Trainer',
      subtype: '',
      number: '114',
      artist: 'Ken Sugimori',
      rarity: 'Uncommon',
      series: 'Gym',
      set: 'Gym Heroes',
      setCode: 'gym1',
      text: [
        'Look at the top 7 cards of your deck. Choose 2 of those cards and put them into your hand. Discard the rest.'
      ]
    },
    {
      id: 'gym1-115',
      name: 'Pewter City Gym',
      imageUrl: 'https://images.pokemontcg.io/gym1/115.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/gym1/115_hires.png',
      supertype: 'Trainer',
      subtype: 'Stadium',
      number: '115',
      artist: 'Keiji Kinebuchi',
      rarity: 'Uncommon',
      series: 'Gym',
      set: 'Gym Heroes',
      setCode: 'gym1',
      text: [
        'Don\'t apply Resistance to any attacks made by Pokémon with Brock in their names.'
      ]
    },
    {
      id: 'gym1-116',
      name: 'Recall',
      imageUrl: 'https://images.pokemontcg.io/gym1/116.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/gym1/116_hires.png',
      supertype: 'Trainer',
      subtype: '',
      number: '116',
      artist: 'Sumiyoshi Kizuki',
      rarity: 'Uncommon',
      series: 'Gym',
      set: 'Gym Heroes',
      setCode: 'gym1',
      text: [
        'For your attack this turn, your Active Pokémon can use any attack from its Basic Pokémon card or any Evolution card attached to it. (You still have to pay for that attack\'s Energy cost.)'
      ]
    },
    {
      id: 'gym1-117',
      name: 'Sabrina\'s ESP',
      imageUrl: 'https://images.pokemontcg.io/gym1/117.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/gym1/117_hires.png',
      supertype: 'Trainer',
      subtype: '',
      number: '117',
      artist: 'Ken Sugimori',
      rarity: 'Uncommon',
      series: 'Gym',
      set: 'Gym Heroes',
      setCode: 'gym1',
      text: [
        'Attach Sabrina\'s ESP to 1 of your Pokémon with Sabrina in its name. At the end of your turn, discard Sabrina\'s ESP. If that Pokémon uses an attack that involves flipping coins, Sabrina\'s ESP lets you re-flip those coins once. If you do, re-flip all the coins.'
      ]
    },
    {
      id: 'gym1-118',
      name: 'Secret Mission',
      imageUrl: 'https://images.pokemontcg.io/gym1/118.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/gym1/118_hires.png',
      supertype: 'Trainer',
      subtype: '',
      number: '118',
      artist: 'Ken Sugimori',
      rarity: 'Uncommon',
      series: 'Gym',
      set: 'Gym Heroes',
      setCode: 'gym1',
      text: [
        'Look at your opponent\'s hand. Then, you may discard as many other cards as you want from your hand and draw that many cards.'
      ]
    },
    {
      id: 'gym1-119',
      name: 'Tickling Machine',
      imageUrl: 'https://images.pokemontcg.io/gym1/119.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/gym1/119_hires.png',
      supertype: 'Trainer',
      subtype: '',
      number: '119',
      artist: 'Sumiyoshi Kizuki',
      rarity: 'Uncommon',
      series: 'Gym',
      set: 'Gym Heroes',
      setCode: 'gym1',
      text: [
        'Flip a coin. If heads, your opponent sets aside all the cards in his or her hand face down. Nobody may look at those cards. At the end of your opponent\'s next turn, your opponent puts those cards back into his or her hand. If tails, your turn ends immediately (you can\'t attack this turn).'
      ]
    },
    {
      id: 'gym1-120',
      name: 'Vermilion City Gym',
      imageUrl: 'https://images.pokemontcg.io/gym1/120.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/gym1/120_hires.png',
      supertype: 'Trainer',
      subtype: 'Stadium',
      number: '120',
      artist: 'Keiji Kinebuchi',
      rarity: 'Uncommon',
      series: 'Gym',
      set: 'Gym Heroes',
      setCode: 'gym1',
      text: [
        'Whenever a player attacks with a Pokémon with Lt. Surge in its name, he or she may flip a coin. If heads, and if that Pokémon\'s attack does damage to the Defending Pokémon (after applying Weakness and Resistance), that attack does 10 more damage to the Defending Pokémon. If tails, the attacking Pokémon does 10 damage to itself in addition to whatever its attack usually does.'
      ]
    },
    {
      id: 'gym1-121',
      name: 'Blaine\'s Gamble',
      imageUrl: 'https://images.pokemontcg.io/gym1/121.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/gym1/121_hires.png',
      supertype: 'Trainer',
      subtype: '',
      number: '121',
      artist: 'Ken Sugimori',
      rarity: 'Common',
      series: 'Gym',
      set: 'Gym Heroes',
      setCode: 'gym1',
      text: [
        'Discard any number of other cards from your hand, then flip a coin. If heads, draw twice that many cards.'
      ]
    },
    {
      id: 'gym1-122',
      name: 'Energy Flow',
      imageUrl: 'https://images.pokemontcg.io/gym1/122.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/gym1/122_hires.png',
      supertype: 'Trainer',
      subtype: '',
      number: '122',
      artist: 'Keiji Kinebuchi',
      rarity: 'Common',
      series: 'Gym',
      set: 'Gym Heroes',
      setCode: 'gym1',
      text: [
        'For each of your Pokémon, you may return any number of Energy cards attached to it to your hand.'
      ]
    },
    {
      id: 'gym1-123',
      name: 'Misty\'s Duel',
      imageUrl: 'https://images.pokemontcg.io/gym1/123.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/gym1/123_hires.png',
      supertype: 'Trainer',
      subtype: '',
      number: '123',
      artist: 'Ken Sugimori',
      rarity: 'Common',
      series: 'Gym',
      set: 'Gym Heroes',
      setCode: 'gym1',
      text: [
        'You and your opponent play a game of Rock-Paper-Scissors. The winner shuffles his or her hand into his or her deck and draws a new hand of 5 cards. (If you don\'t know jow to play Rock-Paper-Scissors, flip a coin to decide who\'s the winner.)'
      ]
    },
    {
      id: 'gym1-124',
      name: 'Narrow Gym',
      imageUrl: 'https://images.pokemontcg.io/gym1/124.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/gym1/124_hires.png',
      supertype: 'Trainer',
      subtype: 'Stadium',
      number: '124',
      artist: 'Keiji Kinebuchi',
      rarity: 'Common',
      series: 'Gym',
      set: 'Gym Heroes',
      setCode: 'gym1',
      text: [
        'No player may have more than 4 Pokémon on his or her Bench. When this card is played, if a player has 5 Pokémon on his or her Bench, that player chooses 1 of them and returns it and all cards attached to it to his or her hand. (If both players have to return a Pokémon, your opponent returns a Pokémon first.)'
      ]
    },
    {
      id: 'gym1-125',
      name: 'Sabrina\'s Gaze',
      imageUrl: 'https://images.pokemontcg.io/gym1/125.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/gym1/125_hires.png',
      supertype: 'Trainer',
      subtype: '',
      number: '125',
      artist: 'Ken Sugimori',
      rarity: 'Common',
      series: 'Gym',
      set: 'Gym Heroes',
      setCode: 'gym1',
      text: [
        'Each player shuffles his or her hand into his or her deck and draws a new hand of the same number of cards.'
      ]
    },
    {
      id: 'gym1-126',
      name: 'Trash Exchange',
      imageUrl: 'https://images.pokemontcg.io/gym1/126.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/gym1/126_hires.png',
      supertype: 'Trainer',
      subtype: '',
      number: '126',
      artist: 'Keiji Kinebuchi',
      rarity: 'Common',
      series: 'Gym',
      set: 'Gym Heroes',
      setCode: 'gym1',
      text: [
        'Count the number of cards in your discard pile and shuffle them into your deck. Then discard that many cards from the top of your deck.'
      ]
    },
    {
      id: 'gym1-127',
      name: 'Fighting Energy',
      imageUrl: 'https://images.pokemontcg.io/gym1/127.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/gym1/127_hires.png',
      supertype: 'Energy',
      subtype: 'Basic',
      number: '127',
      artist: 'Keiji Kinebuchi',
      rarity: 'Common',
      series: 'Gym',
      set: 'Gym Heroes',
      setCode: 'gym1'
    },
    {
      id: 'gym1-128',
      name: 'Fire Energy',
      imageUrl: 'https://images.pokemontcg.io/gym1/128.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/gym1/128_hires.png',
      supertype: 'Energy',
      subtype: 'Basic',
      number: '128',
      artist: 'Keiji Kinebuchi',
      rarity: 'Common',
      series: 'Gym',
      set: 'Gym Heroes',
      setCode: 'gym1'
    },
    {
      id: 'gym1-129',
      name: 'Grass Energy',
      imageUrl: 'https://images.pokemontcg.io/gym1/129.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/gym1/129_hires.png',
      supertype: 'Energy',
      subtype: 'Basic',
      number: '129',
      artist: 'Keiji Kinebuchi',
      rarity: 'Common',
      series: 'Gym',
      set: 'Gym Heroes',
      setCode: 'gym1'
    },
    {
      id: 'gym1-130',
      name: 'Lightning Energy',
      imageUrl: 'https://images.pokemontcg.io/gym1/130.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/gym1/130_hires.png',
      supertype: 'Energy',
      subtype: 'Basic',
      number: '130',
      artist: 'Keiji Kinebuchi',
      rarity: 'Common',
      series: 'Gym',
      set: 'Gym Heroes',
      setCode: 'gym1'
    },
    {
      id: 'gym1-131',
      name: 'Psychic Energy',
      imageUrl: 'https://images.pokemontcg.io/gym1/131.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/gym1/131_hires.png',
      supertype: 'Energy',
      subtype: 'Basic',
      number: '131',
      artist: 'Keiji Kinebuchi',
      rarity: 'Common',
      series: 'Gym',
      set: 'Gym Heroes',
      setCode: 'gym1'
    },
    {
      id: 'gym1-132',
      name: 'Water Energy',
      imageUrl: 'https://images.pokemontcg.io/gym1/132.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/gym1/132_hires.png',
      supertype: 'Energy',
      subtype: 'Basic',
      number: '132',
      artist: 'Keiji Kinebuchi',
      rarity: 'Common',
      series: 'Gym',
      set: 'Gym Heroes',
      setCode: 'gym1'
    }
  ]