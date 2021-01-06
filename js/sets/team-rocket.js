const teamRocketCards = [
    {
      id: 'base5-1',
      name: 'Dark Alakazam',
      nationalPokedexNumber: 65,
      imageUrl: 'https://images.pokemontcg.io/base5/1.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/base5/1_hires.png',
      types: [
        'Psychic'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 2',
      evolvesFrom: 'Kadabra',
      hp: '60',
      retreatCost: [
        'Colorless',
        'Colorless',
        'Colorless'
      ],
      convertedRetreatCost: 3,
      number: '1',
      artist: 'Ken Sugimori',
      rarity: 'Holo Rare',
      series: 'Base',
      set: 'Team Rocket',
      setCode: 'base5',
      attacks: [
        {
          cost: [
            'Psychic',
            'Psychic',
            'Colorless'
          ],
          name: 'Teleport Blast',
          text: 'You may switch Dark Alakazam with 1 of your Benched Pokémon (Do the damage before switching the Pokémon).',
          damage: '30',
          convertedEnergyCost: 3
        },
        {
          cost: [
            'Psychic',
            'Psychic',
            'Psychic'
          ],
          name: 'Mind Shock',
          text: 'Don\'t apply Weakness and Resistance for this attack. (Any other effects that would happen after applying Weakness and Resistance still happen.)',
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
      id: 'base5-2',
      name: 'Dark Arbok',
      nationalPokedexNumber: 24,
      imageUrl: 'https://images.pokemontcg.io/base5/2.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/base5/2_hires.png',
      types: [
        'Grass'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 1',
      evolvesFrom: 'Ekans',
      hp: '60',
      retreatCost: [
        'Colorless',
        'Colorless'
      ],
      convertedRetreatCost: 2,
      number: '2',
      artist: 'Mitsuhiro Arita',
      rarity: 'Holo Rare',
      series: 'Base',
      set: 'Team Rocket',
      setCode: 'base5',
      attacks: [
        {
          cost: [
            'Grass',
            'Grass'
          ],
          name: 'Stare',
          text: 'Choose 1 of your opponent\'s Pokémon. This attack does 10 damage to that Pokémon. Don\'t apply Weakness and Resistance for this attack. (Any other effects that would happen after applying Weakness and Resistance still happen.) If that Pokémon has a Pokémon Power, that power stops working until the end of your opponent\'s next turn.',
          damage: '10',
          convertedEnergyCost: 2
        },
        {
          cost: [
            'Grass',
            'Grass',
            'Grass'
          ],
          name: 'Poison Vapor',
          text: 'The Defending Pokémon is now Poisoned. This attack does 10 damage to each of your opponent\'s Benched Pokémon. (Don\'t apply Weakness and Resistance for Benched Pokémon.)',
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
      id: 'base5-3',
      name: 'Dark Blastoise',
      nationalPokedexNumber: 9,
      imageUrl: 'https://images.pokemontcg.io/base5/3.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/base5/3_hires.png',
      types: [
        'Water'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 2',
      evolvesFrom: 'Wartortle',
      hp: '70',
      retreatCost: [
        'Colorless',
        'Colorless'
      ],
      convertedRetreatCost: 2,
      number: '3',
      artist: 'Mitsuhiro Arita',
      rarity: 'Holo Rare',
      series: 'Base',
      set: 'Team Rocket',
      setCode: 'base5',
      attacks: [
        {
          cost: [
            'Water',
            'Water'
          ],
          name: 'Hydrocannon',
          text: 'Does 30 damage plus 20 more damage for each Water Energy attached to Dark Blastoise but not used to pay for this attack. You can\'t add more than 40 damage in this way.',
          damage: '30+',
          convertedEnergyCost: 2
        },
        {
          cost: [
            'Water',
            'Colorless',
            'Colorless'
          ],
          name: 'Rocket Tackle',
          text: 'Dark Blastoise does 10 damage to itself. Flip a coin. If heads, prevent all damage done to Dark Blastoise during your opponent\'s next turn. (Any other effects of attacks still happen.)',
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
      id: 'base5-4',
      name: 'Dark Charizard',
      nationalPokedexNumber: 6,
      imageUrl: 'https://images.pokemontcg.io/base5/4.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/base5/4_hires.png',
      types: [
        'Fire'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 2',
      evolvesFrom: 'Charmeleon',
      hp: '80',
      retreatCost: [
        'Colorless',
        'Colorless',
        'Colorless'
      ],
      convertedRetreatCost: 3,
      number: '4',
      artist: 'Ken Sugimori',
      rarity: 'Holo Rare',
      series: 'Base',
      set: 'Team Rocket',
      setCode: 'base5',
      attacks: [
        {
          cost: [
            'Colorless'
          ],
          name: 'Nail Flick',
          text: '',
          damage: '10',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Fire',
            'Fire'
          ],
          name: 'Continuous Fireball',
          text: 'Flip a number of coins equal to the number of Fire Energy cards attached to Dark Charizard. This attack does 50 damage times the number of heads. Discard a number of Fire Energy cards attached to Dark Charizard equal to the number of heads.',
          damage: '50×',
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
      id: 'base5-5',
      name: 'Dark Dragonite',
      nationalPokedexNumber: 149,
      imageUrl: 'https://images.pokemontcg.io/base5/5.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/base5/5_hires.png',
      types: [
        'Colorless'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 2',
      evolvesFrom: 'Dragonair',
      ability: {
        name: 'Summon Minions',
        text: 'When you play Dark Dragonite from your hand, search your deck for up to 2 Basic Pokémon and put them onto your Bench. Shuffle your deck afterward.',
        type: 'Pokémon Power'
      },
      hp: '70',
      retreatCost: [
        'Colorless',
        'Colorless'
      ],
      convertedRetreatCost: 2,
      number: '5',
      artist: 'Mitsuhiro Arita',
      rarity: 'Holo Rare',
      series: 'Base',
      set: 'Team Rocket',
      setCode: 'base5',
      attacks: [
        {
          cost: [
            'Colorless',
            'Colorless',
            'Colorless',
            'Colorless'
          ],
          name: 'Giant Tail',
          text: 'Flip a coin. If tails, this attack does nothing.',
          damage: '',
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
      id: 'base5-6',
      name: 'Dark Dugtrio',
      nationalPokedexNumber: 51,
      imageUrl: 'https://images.pokemontcg.io/base5/6.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/base5/6_hires.png',
      types: [
        'Fighting'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 1',
      evolvesFrom: 'Diglett',
      ability: {
        name: 'Sinkhole',
        text: 'Whenever your opponent\'s Active Pokémon retreats, your opponent flips a coin. If tails, this power does 20 damage to that Pokémon. (Don\'t apply Weakness and Resistance.) This power stops working while Dark Dugtrio is Asleep, Confused, or Paralyzed.',
        type: 'Pokémon Power'
      },
      hp: '50',
      retreatCost: [
        'Colorless',
        'Colorless'
      ],
      convertedRetreatCost: 2,
      number: '6',
      artist: 'Kagemaru Himeno',
      rarity: 'Holo Rare',
      series: 'Base',
      set: 'Team Rocket',
      setCode: 'base5',
      attacks: [
        {
          cost: [
            'Fighting',
            'Fighting'
          ],
          name: 'Knock Down',
          text: 'Your opponent flips a coin. If tails, this attack does 20 damage plus 20 more damage; if heads, this attack does 20 damage.',
          damage: '20+',
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
      id: 'base5-7',
      name: 'Dark Golbat',
      nationalPokedexNumber: 42,
      imageUrl: 'https://images.pokemontcg.io/base5/7.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/base5/7_hires.png',
      types: [
        'Grass'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 1',
      evolvesFrom: 'Zubat',
      ability: {
        name: 'Sneak Attack',
        text: 'When you play Dark Golbat from your hand, you may choose 1 of your opponent\'s Pokémon. If you do, Dark Golbat does 10 damage to that Pokémon. Apply Weakness and Resistance.',
        type: 'Pokémon Power'
      },
      hp: '50',
      number: '7',
      artist: 'Mitsuhiro Arita',
      rarity: 'Holo Rare',
      series: 'Base',
      set: 'Team Rocket',
      setCode: 'base5',
      attacks: [
        {
          cost: [
            'Grass',
            'Grass'
          ],
          name: 'Flitter',
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
      id: 'base5-8',
      name: 'Dark Gyarados',
      nationalPokedexNumber: 130,
      imageUrl: 'https://images.pokemontcg.io/base5/8.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/base5/8_hires.png',
      types: [
        'Water'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 1',
      evolvesFrom: 'Magikarp',
      ability: {
        name: 'Final Beam',
        text: 'When Dark Gyarados is Knocked Out by an attack, flip a coin. If heads, this power does 20 damage for each Water Energy attached to Dark Gyarados to the Pokémon that Knocked Out Dark Gyarados. Apply Weakness and Resistance. This power doesn\'t work if Dark Gyarados is Asleep, Confused, or Paralyzed.',
        type: 'Pokémon Power'
      },
      hp: '70',
      retreatCost: [
        'Colorless',
        'Colorless'
      ],
      convertedRetreatCost: 2,
      number: '8',
      artist: 'Kagemaru Himeno',
      rarity: 'Holo Rare',
      series: 'Base',
      set: 'Team Rocket',
      setCode: 'base5',
      attacks: [
        {
          cost: [
            'Water',
            'Water',
            'Water'
          ],
          name: 'Ice Beam',
          text: 'Flip a coin. If heads, the Defending Pokémon is now Paralyzed.',
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
          type: 'Grass',
          value: '×2'
        }
      ]
    },
    {
      id: 'base5-9',
      name: 'Dark Hypno',
      nationalPokedexNumber: 97,
      imageUrl: 'https://images.pokemontcg.io/base5/9.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/base5/9_hires.png',
      types: [
        'Psychic'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 1',
      evolvesFrom: 'Drowzee',
      hp: '60',
      retreatCost: [
        'Colorless',
        'Colorless'
      ],
      convertedRetreatCost: 2,
      number: '9',
      artist: 'Kagemaru Himeno',
      rarity: 'Holo Rare',
      series: 'Base',
      set: 'Team Rocket',
      setCode: 'base5',
      attacks: [
        {
          cost: [
            'Psychic'
          ],
          name: 'Psypunch',
          text: '',
          damage: '20',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Psychic',
            'Psychic',
            'Colorless'
          ],
          name: 'Bench Manipulation',
          text: 'Your opponent flips a number of coins equal to the number of Pokémon on his or her Bench. This attack does 20 damage times the number of tails. Don\'t apply Weakness and Resistance for this attack. (Any other effects that would happen after applying Weakness and Resistance still happen.)',
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
      id: 'base5-10',
      name: 'Dark Machamp',
      nationalPokedexNumber: 68,
      imageUrl: 'https://images.pokemontcg.io/base5/10.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/base5/10_hires.png',
      types: [
        'Fighting'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 2',
      evolvesFrom: 'Machoke',
      hp: '70',
      retreatCost: [
        'Colorless',
        'Colorless',
        'Colorless'
      ],
      convertedRetreatCost: 3,
      number: '10',
      artist: 'Mitsuhiro Arita',
      rarity: 'Holo Rare',
      series: 'Base',
      set: 'Team Rocket',
      setCode: 'base5',
      attacks: [
        {
          cost: [
            'Fighting',
            'Fighting'
          ],
          name: 'Mega Punch',
          text: '',
          damage: '30',
          convertedEnergyCost: 2
        },
        {
          cost: [
            'Fighting',
            'Fighting',
            'Fighting',
            'Colorless'
          ],
          name: 'Fling',
          text: 'Your opponent shuffles his or her Active Pokémon and all cards attached to it into his or her deck. This attack can\'t be used if your opponent has no Benched Pokémon.',
          damage: '',
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
      id: 'base5-11',
      name: 'Dark Magneton',
      nationalPokedexNumber: 82,
      imageUrl: 'https://images.pokemontcg.io/base5/11.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/base5/11_hires.png',
      types: [
        'Lightning'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 1',
      evolvesFrom: 'Magnemite',
      hp: '60',
      retreatCost: [
        'Colorless',
        'Colorless'
      ],
      convertedRetreatCost: 2,
      number: '11',
      artist: 'Miki Tanaka',
      rarity: 'Holo Rare',
      series: 'Base',
      set: 'Team Rocket',
      setCode: 'base5',
      attacks: [
        {
          cost: [
            'Colorless',
            'Colorless'
          ],
          name: 'Sonicboom',
          text: 'Don\'t apply Weakness and Resistance for this attack. (Any other effects that would happen after applying Weakness and Resistance still happen.)',
          damage: '20',
          convertedEnergyCost: 2
        },
        {
          cost: [
            'Lightning',
            'Lightning'
          ],
          name: 'Magnetic Lines',
          text: 'If the Defending Pokémon has any basic Energy cards attached to it, choose 1 of them. If your opponent has any Benched Pokémon, choose 1 of them and attach that Energy card to it.',
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
      id: 'base5-12',
      name: 'Dark Slowbro',
      nationalPokedexNumber: 80,
      imageUrl: 'https://images.pokemontcg.io/base5/12.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/base5/12_hires.png',
      types: [
        'Psychic'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 1',
      evolvesFrom: 'Slowpoke',
      ability: {
        name: 'Reel In',
        text: 'When you play Dark Slowbro from your hand, choose up to 3 Basic Pokémon and/or Evolution cards from your discard pile and put them into your hand.',
        type: 'Pokémon Power'
      },
      hp: '60',
      retreatCost: [
        'Colorless',
        'Colorless'
      ],
      convertedRetreatCost: 2,
      number: '12',
      artist: 'Mitsuhiro Arita',
      rarity: 'Holo Rare',
      series: 'Base',
      set: 'Team Rocket',
      setCode: 'base5',
      attacks: [
        {
          cost: [
            'Psychic',
            'Psychic'
          ],
          name: 'Fickle Attack',
          text: 'Flip a coin. If tails, this attack does nothing.',
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
      id: 'base5-13',
      name: 'Dark Vileplume',
      nationalPokedexNumber: 45,
      imageUrl: 'https://images.pokemontcg.io/base5/13.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/base5/13_hires.png',
      types: [
        'Grass'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 2',
      evolvesFrom: 'Gloom',
      ability: {
        name: 'Hay Fever',
        text: 'No Trainer cards can be played. This power stops working while Dark Vileplume is Asleep, Confused, or Paralyzed.',
        type: 'Pokémon Power'
      },
      hp: '60',
      retreatCost: [
        'Colorless',
        'Colorless'
      ],
      convertedRetreatCost: 2,
      number: '13',
      artist: 'Kagemaru Himeno',
      rarity: 'Holo Rare',
      series: 'Base',
      set: 'Team Rocket',
      setCode: 'base5',
      attacks: [
        {
          cost: [
            'Grass',
            'Grass',
            'Grass'
          ],
          name: 'Petal Whirlwind',
          text: 'Flip 3 coins. This attack does 30 damage times the number of heads. If you get 2 or more heads, Dark Vileplume is now Confused (after dealing damage).',
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
      id: 'base5-14',
      name: 'Dark Weezing',
      nationalPokedexNumber: 110,
      imageUrl: 'https://images.pokemontcg.io/base5/14.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/base5/14_hires.png',
      types: [
        'Grass'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 1',
      evolvesFrom: 'Koffing',
      hp: '60',
      retreatCost: [
        'Colorless'
      ],
      convertedRetreatCost: 1,
      number: '14',
      artist: 'Shin-ichi Yoshida',
      rarity: 'Holo Rare',
      series: 'Base',
      set: 'Team Rocket',
      setCode: 'base5',
      attacks: [
        {
          cost: [
            'Grass',
            'Colorless'
          ],
          name: 'Mass Explosion',
          text: 'Does 20 damage times the total number of Koffings, Weezings, and Dark Weezings in play (Apply Weakness and Resistance.). Then, this attack does 20 damage to each Koffing, Weezing, and Dark Weezing (even your own). Don\'t apply Weakness and Resistance.',
          damage: '20×',
          convertedEnergyCost: 2
        },
        {
          cost: [
            'Grass',
            'Grass',
            'Grass'
          ],
          name: 'Stun Gas',
          text: 'Flip a coin. If heads, the Defending Pokémon is now Poisoned; if tails, the Defending Pokémon is now Paralyzed.',
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
      id: 'base5-15',
      name: 'Here Comes Team Rocket!',
      imageUrl: 'https://images.pokemontcg.io/base5/15.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/base5/15_hires.png',
      supertype: 'Trainer',
      subtype: '',
      number: '15',
      artist: 'Ken Sugimori',
      rarity: 'Holo Rare',
      series: 'Base',
      set: 'Team Rocket',
      setCode: 'base5',
      text: [
        'Each player plays with his or her Prize cards face up for the rest of the game.'
      ]
    },
    {
      id: 'base5-16',
      name: 'Rocket\'s Sneak Attack',
      imageUrl: 'https://images.pokemontcg.io/base5/16.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/base5/16_hires.png',
      supertype: 'Trainer',
      subtype: '',
      number: '16',
      artist: 'Ken Sugimori',
      rarity: 'Holo Rare',
      series: 'Base',
      set: 'Team Rocket',
      setCode: 'base5',
      text: [
        'Look at your opponent\'s hand. If he or she has any Trainer cards, choose 1 of them. Your opponent shuffles that card into his or her deck.'
      ]
    },
    {
      id: 'base5-17',
      name: 'Rainbow Energy',
      imageUrl: 'https://images.pokemontcg.io/base5/17.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/base5/17_hires.png',
      supertype: 'Trainer',
      subtype: '',
      number: '17',
      artist: 'Takumi Akabane',
      rarity: 'Holo Rare',
      series: 'Base',
      set: 'Team Rocket',
      setCode: 'base5',
      text: [
        'Attach Rainbow Energy to 1 of your Pokémon. While in play, Rainbow Energy counts as every type of basic Energy but only provides 1 Energy at a time. (Doesn\'t count as a basic Energy card when not in play.) When you attach this card from your hand to 1 of your Pokémon, it does 10 damage to that Pokémon. (Don\'t apply Weakness and Resistance.) (Major text change in Ruby/Sapphire. Requires reference.)'
      ]
    },
    {
      id: 'base5-18',
      name: 'Dark Alakazam',
      nationalPokedexNumber: 65,
      imageUrl: 'https://images.pokemontcg.io/base5/18.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/base5/18_hires.png',
      types: [
        'Psychic'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 2',
      evolvesFrom: 'Kadabra',
      hp: '60',
      retreatCost: [
        'Colorless',
        'Colorless',
        'Colorless'
      ],
      convertedRetreatCost: 3,
      number: '18',
      artist: 'Ken Sugimori',
      rarity: 'Rare',
      series: 'Base',
      set: 'Team Rocket',
      setCode: 'base5',
      attacks: [
        {
          cost: [
            'Psychic',
            'Psychic',
            'Colorless'
          ],
          name: 'Teleport Blast',
          text: 'You may switch Dark Alakazam with 1 of your Benched Pokémon (Do the damage before switching the Pokémon).',
          damage: '30',
          convertedEnergyCost: 3
        },
        {
          cost: [
            'Psychic',
            'Psychic',
            'Psychic'
          ],
          name: 'Mind Shock',
          text: 'Don\'t apply Weakness and Resistance for this attack. (Any other effects that would happen after applying Weakness and Resistance still happen.)',
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
      id: 'base5-19',
      name: 'Dark Arbok',
      nationalPokedexNumber: 24,
      imageUrl: 'https://images.pokemontcg.io/base5/19.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/base5/19_hires.png',
      types: [
        'Grass'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 1',
      evolvesFrom: 'Ekans',
      hp: '60',
      retreatCost: [
        'Colorless',
        'Colorless'
      ],
      convertedRetreatCost: 2,
      number: '19',
      artist: 'Mitsuhiro Arita',
      rarity: 'Rare',
      series: 'Base',
      set: 'Team Rocket',
      setCode: 'base5',
      attacks: [
        {
          cost: [
            'Grass',
            'Grass'
          ],
          name: 'Stare',
          text: 'Choose 1 of your opponent\'s Pokémon. This attack does 10 damage to that Pokémon. Don\'t apply Weakness and Resistance for this attack. (Any other effects that would happen after applying Weakness and Resistance still happen.) If that Pokémon has a Pokémon Power, that power stops working until the end of your opponent\'s next turn.',
          damage: '10',
          convertedEnergyCost: 2
        },
        {
          cost: [
            'Grass',
            'Grass',
            'Grass'
          ],
          name: 'Poison Vapor',
          text: 'The Defending Pokémon is now Poisoned. This attack does 10 damage to each of your opponent\'s Benched Pokémon. (Don\'t apply Weakness and Resistance for Benched Pokémon.)',
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
      id: 'base5-20',
      name: 'Dark Blastoise',
      nationalPokedexNumber: 9,
      imageUrl: 'https://images.pokemontcg.io/base5/20.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/base5/20_hires.png',
      types: [
        'Water'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 2',
      evolvesFrom: 'Wartortle',
      hp: '70',
      retreatCost: [
        'Colorless',
        'Colorless'
      ],
      convertedRetreatCost: 2,
      number: '20',
      artist: 'Mitsuhiro Arita',
      rarity: 'Rare',
      series: 'Base',
      set: 'Team Rocket',
      setCode: 'base5',
      attacks: [
        {
          cost: [
            'Water',
            'Water'
          ],
          name: 'Hydrocannon',
          text: 'Does 30 damage plus 20 more damage for each Water Energy attached to Dark Blastoise but not used to pay for this attack. You can\'t add more than 40 damage in this way.',
          damage: '30+',
          convertedEnergyCost: 2
        },
        {
          cost: [
            'Water',
            'Colorless',
            'Colorless'
          ],
          name: 'Rocket Tackle',
          text: 'Dark Blastoise does 10 damage to itself. Flip a coin. If heads, prevent all damage done to Dark Blastoise during your opponent\'s next turn. (Any other effects of attacks still happen.)',
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
      id: 'base5-21',
      name: 'Dark Charizard',
      nationalPokedexNumber: 6,
      imageUrl: 'https://images.pokemontcg.io/base5/21.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/base5/21_hires.png',
      types: [
        'Fire'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 2',
      evolvesFrom: 'Charmeleon',
      hp: '80',
      retreatCost: [
        'Colorless',
        'Colorless',
        'Colorless'
      ],
      convertedRetreatCost: 3,
      number: '21',
      artist: 'Ken Sugimori',
      rarity: 'Rare',
      series: 'Base',
      set: 'Team Rocket',
      setCode: 'base5',
      attacks: [
        {
          cost: [
            'Colorless'
          ],
          name: 'Nail Flick',
          text: '',
          damage: '10',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Fire',
            'Fire'
          ],
          name: 'Continuous Fireball',
          text: 'Flip a number of coins equal to the number of Fire Energy cards attached to Dark Charizard. This attack does 50 damage times the number of heads. Discard a number of Fire Energy cards attached to Dark Charizard equal to the number of heads.',
          damage: '50×',
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
      id: 'base5-22',
      name: 'Dark Dragonite',
      nationalPokedexNumber: 149,
      imageUrl: 'https://images.pokemontcg.io/base5/22.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/base5/22_hires.png',
      types: [
        'Colorless'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 2',
      evolvesFrom: 'Dragonair',
      ability: {
        name: 'Summon Minions',
        text: 'When you play Dark Dragonite from your hand, search your deck for up to 2 Basic Pokémon and put them onto your Bench. Shuffle your deck afterward.',
        type: 'Pokémon Power'
      },
      hp: '70',
      retreatCost: [
        'Colorless',
        'Colorless'
      ],
      convertedRetreatCost: 2,
      number: '22',
      artist: 'Mitsuhiro Arita',
      rarity: 'Rare',
      series: 'Base',
      set: 'Team Rocket',
      setCode: 'base5',
      attacks: [
        {
          cost: [
            'Colorless',
            'Colorless',
            'Colorless',
            'Colorless'
          ],
          name: 'Giant Tail',
          text: 'Flip a coin. If tails, this attack does nothing.',
          damage: '',
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
      id: 'base5-23',
      name: 'Dark Dugtrio',
      nationalPokedexNumber: 51,
      imageUrl: 'https://images.pokemontcg.io/base5/23.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/base5/23_hires.png',
      types: [
        'Fighting'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 1',
      evolvesFrom: 'Diglett',
      ability: {
        name: 'Sinkhole',
        text: 'Whenever your opponent\'s Active Pokémon retreats, your opponent flips a coin. If tails, this power does 20 damage to that Pokémon. (Don\'t apply Weakness and Resistance.) This power stops working while Dark Dugtrio is Asleep, Confused, or Paralyzed.',
        type: 'Pokémon Power'
      },
      hp: '50',
      retreatCost: [
        'Colorless',
        'Colorless'
      ],
      convertedRetreatCost: 2,
      number: '23',
      artist: 'Kagemaru Himeno',
      rarity: 'Rare',
      series: 'Base',
      set: 'Team Rocket',
      setCode: 'base5',
      attacks: [
        {
          cost: [
            'Fighting',
            'Fighting'
          ],
          name: 'Knock Down',
          text: 'Your opponent flips a coin. If tails, this attack does 20 damage plus 20 more damage; if heads, this attack does 20 damage.',
          damage: '20+',
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
      id: 'base5-24',
      name: 'Dark Golbat',
      nationalPokedexNumber: 42,
      imageUrl: 'https://images.pokemontcg.io/base5/24.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/base5/24_hires.png',
      types: [
        'Grass'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 1',
      evolvesFrom: 'Weavile',
      ability: {
        name: 'Sneak Attack',
        text: 'When you play Dark Golbat from your hand, you may choose 1 of your opponent\'s Pokémon. If you do, Dark Golbat does 10 damage to that Pokémon. Apply Weakness and Resistance.',
        type: 'Pokémon Power'
      },
      hp: '50',
      number: '24',
      artist: 'Mitsuhiro Arita',
      rarity: 'Rare',
      series: 'Base',
      set: 'Team Rocket',
      setCode: 'base5',
      attacks: [
        {
          cost: [
            'Grass',
            'Grass'
          ],
          name: 'Flitter',
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
      id: 'base5-25',
      name: 'Dark Gyarados',
      nationalPokedexNumber: 130,
      imageUrl: 'https://images.pokemontcg.io/base5/25.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/base5/25_hires.png',
      types: [
        'Water'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 1',
      evolvesFrom: 'Magikarp',
      ability: {
        name: 'Final Beam',
        text: 'When Dark Gyarados is Knocked Out by an attack, flip a coin. If heads, this power does 20 damage for each Water Energy attached to Dark Gyarados to the Pokémon that Knocked Out Dark Gyarados. Apply Weakness and Resistance. This power doesn\'t work if Dark Gyarados is Asleep, Confused, or Paralyzed.',
        type: 'Pokémon Power'
      },
      hp: '70',
      retreatCost: [
        'Colorless',
        'Colorless'
      ],
      convertedRetreatCost: 2,
      number: '25',
      artist: 'Kagemaru Himeno',
      rarity: 'Rare',
      series: 'Base',
      set: 'Team Rocket',
      setCode: 'base5',
      attacks: [
        {
          cost: [
            'Water',
            'Water',
            'Water'
          ],
          name: 'Ice Beam',
          text: 'Flip a coin. If heads, the Defending Pokémon is now Paralyzed.',
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
          type: 'Grass',
          value: '×2'
        }
      ]
    },
    {
      id: 'base5-26',
      name: 'Dark Hypno',
      nationalPokedexNumber: 97,
      imageUrl: 'https://images.pokemontcg.io/base5/26.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/base5/26_hires.png',
      types: [
        'Psychic'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 1',
      evolvesFrom: 'Drowzee',
      hp: '60',
      retreatCost: [
        'Colorless',
        'Colorless'
      ],
      convertedRetreatCost: 2,
      number: '26',
      artist: 'Kagemaru Himeno',
      rarity: 'Rare',
      series: 'Base',
      set: 'Team Rocket',
      setCode: 'base5',
      attacks: [
        {
          cost: [
            'Psychic'
          ],
          name: 'Psypunch',
          text: '',
          damage: '20',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Psychic',
            'Psychic',
            'Colorless'
          ],
          name: 'Bench Manipulation',
          text: 'Your opponent flips a number of coins equal to the number of Pokémon on his or her Bench. This attack does 20 damage times the number of tails. Don\'t apply Weakness and Resistance for this attack. (Any other effects that would happen after applying Weakness and Resistance still happen.)',
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
      id: 'base5-27',
      name: 'Dark Machamp',
      nationalPokedexNumber: 68,
      imageUrl: 'https://images.pokemontcg.io/base5/27.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/base5/27_hires.png',
      types: [
        'Fighting'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 2',
      evolvesFrom: 'Machoke',
      hp: '70',
      retreatCost: [
        'Colorless',
        'Colorless',
        'Colorless'
      ],
      convertedRetreatCost: 3,
      number: '27',
      artist: 'Mitsuhiro Arita',
      rarity: 'Rare',
      series: 'Base',
      set: 'Team Rocket',
      setCode: 'base5',
      attacks: [
        {
          cost: [
            'Fighting',
            'Fighting'
          ],
          name: 'Mega Punch',
          text: '',
          damage: '30',
          convertedEnergyCost: 2
        },
        {
          cost: [
            'Fighting',
            'Fighting',
            'Fighting',
            'Colorless'
          ],
          name: 'Fling',
          text: 'Your opponent shuffles his or her Active Pokémon and all cards attached to it into his or her deck. This attack can\'t be used if your opponent has no Benched Pokémon.',
          damage: '',
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
      id: 'base5-28',
      name: 'Dark Magneton',
      nationalPokedexNumber: 82,
      imageUrl: 'https://images.pokemontcg.io/base5/28.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/base5/28_hires.png',
      types: [
        'Lightning'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 1',
      evolvesFrom: 'Magnemite',
      hp: '60',
      retreatCost: [
        'Colorless',
        'Colorless'
      ],
      convertedRetreatCost: 2,
      number: '28',
      artist: 'Miki Tanaka',
      rarity: 'Rare',
      series: 'Base',
      set: 'Team Rocket',
      setCode: 'base5',
      attacks: [
        {
          cost: [
            'Colorless',
            'Colorless'
          ],
          name: 'Sonicboom',
          text: 'Don\'t apply Weakness and Resistance for this attack. (Any other effects that would happen after applying Weakness and Resistance still happen.)',
          damage: '20',
          convertedEnergyCost: 2
        },
        {
          cost: [
            'Lightning',
            'Lightning'
          ],
          name: 'Magnetic Lines',
          text: 'If the Defending Pokémon has any basic Energy cards attached to it, choose 1 of them. If your opponent has any Benched Pokémon, choose 1 of them and attach that Energy card to it.',
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
      id: 'base5-29',
      name: 'Dark Slowbro',
      nationalPokedexNumber: 80,
      imageUrl: 'https://images.pokemontcg.io/base5/29.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/base5/29_hires.png',
      types: [
        'Psychic'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 1',
      evolvesFrom: 'Slowpoke',
      ability: {
        name: 'Reel In',
        text: 'When you play Dark Slowbro from your hand, choose up to 3 Basic Pokémon and/or Evolution cards from your discard pile and put them into your hand.',
        type: 'Pokémon Power'
      },
      hp: '60',
      retreatCost: [
        'Colorless',
        'Colorless'
      ],
      convertedRetreatCost: 2,
      number: '29',
      artist: 'Mitsuhiro Arita',
      rarity: 'Rare',
      series: 'Base',
      set: 'Team Rocket',
      setCode: 'base5',
      attacks: [
        {
          cost: [
            'Psychic',
            'Psychic'
          ],
          name: 'Fickle Attack',
          text: 'Flip a coin. If tails, this attack does nothing.',
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
      id: 'base5-30',
      name: 'Dark Vileplume',
      nationalPokedexNumber: 45,
      imageUrl: 'https://images.pokemontcg.io/base5/30.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/base5/30_hires.png',
      types: [
        'Grass'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 2',
      evolvesFrom: 'Gloom',
      ability: {
        name: 'Hay Fever',
        text: 'No Trainer cards can be played. This power stops working while Dark Vileplume is Asleep, Confused, or Paralyzed.',
        type: 'Pokémon Power'
      },
      hp: '60',
      retreatCost: [
        'Colorless',
        'Colorless'
      ],
      convertedRetreatCost: 2,
      number: '30',
      artist: 'Kagemaru Himeno',
      rarity: 'Rare',
      series: 'Base',
      set: 'Team Rocket',
      setCode: 'base5',
      attacks: [
        {
          cost: [
            'Grass',
            'Grass',
            'Grass'
          ],
          name: 'Petal Whirlwind',
          text: 'Flip 3 coins. This attack does 30 damage times the number of heads. If you get 2 or more heads, Dark Vileplume is now Confused (after dealing damage).',
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
      id: 'base5-31',
      name: 'Dark Weezing',
      nationalPokedexNumber: 110,
      imageUrl: 'https://images.pokemontcg.io/base5/31.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/base5/31_hires.png',
      types: [
        'Grass'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 1',
      evolvesFrom: 'Koffing',
      hp: '60',
      retreatCost: [
        'Colorless'
      ],
      convertedRetreatCost: 1,
      number: '31',
      artist: 'Shin-ichi Yoshida',
      rarity: 'Rare',
      series: 'Base',
      set: 'Team Rocket',
      setCode: 'base5',
      attacks: [
        {
          cost: [
            'Grass',
            'Colorless'
          ],
          name: 'Mass Explosion',
          text: 'Does 20 damage times the total number of Koffings, Weezings, and Dark Weezings in play (Apply Weakness and Resistance.). Then, this attack does 20 damage to each Koffing, Weezing, and Dark Weezing (even your own). Don\'t apply Weakness and Resistance.',
          damage: '20×',
          convertedEnergyCost: 2
        },
        {
          cost: [
            'Grass',
            'Grass',
            'Grass'
          ],
          name: 'Stun Gas',
          text: 'Flip a coin. If heads, the Defending Pokémon is now Poisoned; if tails, the Defending Pokémon is now Paralyzed.',
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
      id: 'base5-32',
      name: 'Dark Charmeleon',
      nationalPokedexNumber: 5,
      imageUrl: 'https://images.pokemontcg.io/base5/32.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/base5/32_hires.png',
      types: [
        'Fire'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 1',
      evolvesFrom: 'Charmander',
      hp: '50',
      retreatCost: [
        'Colorless',
        'Colorless'
      ],
      convertedRetreatCost: 2,
      number: '32',
      artist: 'Kagemaru Himeno',
      rarity: 'Uncommon',
      series: 'Base',
      set: 'Team Rocket',
      setCode: 'base5',
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
            'Fire'
          ],
          name: 'Fireball',
          text: 'Use this attack only if there are any Fire Energy cards attached to Dark Charmeleon. Flip a coin. If heads, discard 1 of those Energy cards. If tails, this attack does nothing (not even damage).',
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
      id: 'base5-33',
      name: 'Dark Dragonair',
      nationalPokedexNumber: 148,
      imageUrl: 'https://images.pokemontcg.io/base5/33.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/base5/33_hires.png',
      types: [
        'Colorless'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 1',
      evolvesFrom: 'Dratini',
      ability: {
        name: 'Evolutionary Light',
        text: 'Once during your turn (before your attack), you may search your deck for an Evolution card. Show it to your opponent and put it into your hand. Shuffle your deck afterward. This power can\'t be used if Dark Dragonair is Asleep, Confused, or Paralyzed.',
        type: 'Pokémon Power'
      },
      hp: '60',
      retreatCost: [
        'Colorless',
        'Colorless'
      ],
      convertedRetreatCost: 2,
      number: '33',
      artist: 'Kagemaru Himeno',
      rarity: 'Uncommon',
      series: 'Base',
      set: 'Team Rocket',
      setCode: 'base5',
      attacks: [
        {
          cost: [
            'Colorless',
            'Colorless',
            'Colorless'
          ],
          name: 'Tail Strike',
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
      ]
    },
    {
      id: 'base5-34',
      name: 'Dark Electrode',
      nationalPokedexNumber: 101,
      imageUrl: 'https://images.pokemontcg.io/base5/34.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/base5/34_hires.png',
      types: [
        'Lightning'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 1',
      evolvesFrom: 'Voltorb',
      hp: '60',
      retreatCost: [
        'Colorless'
      ],
      convertedRetreatCost: 1,
      number: '34',
      artist: 'Ken Sugimori',
      rarity: 'Uncommon',
      series: 'Base',
      set: 'Team Rocket',
      setCode: 'base5',
      attacks: [
        {
          cost: [
            'Colorless'
          ],
          name: 'Rolling Tackle',
          text: '',
          damage: '10',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Lightning',
            'Lightning'
          ],
          name: 'Energy Bomb',
          text: 'Take all Energy cards attached to Dark Electrode and attach them to your Benched Pokémon (in any way you choose). If you have no Benched Pokémon, discard all Energy cards attached to Dark Electrode.',
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
      id: 'base5-35',
      name: 'Dark Flareon',
      nationalPokedexNumber: 136,
      imageUrl: 'https://images.pokemontcg.io/base5/35.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/base5/35_hires.png',
      types: [
        'Fire'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 1',
      evolvesFrom: 'Eevee',
      hp: '50',
      retreatCost: [
        'Colorless'
      ],
      convertedRetreatCost: 1,
      number: '35',
      artist: 'Mitsuhiro Arita',
      rarity: 'Uncommon',
      series: 'Base',
      set: 'Team Rocket',
      setCode: 'base5',
      attacks: [
        {
          cost: [
            'Colorless'
          ],
          name: 'Rage',
          text: 'Does 10 damage plus 10 more damage for each damage counter on Dark Flareon.',
          damage: '10+',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Fire',
            'Fire'
          ],
          name: 'Playing with Fire',
          text: 'Use this attack only if there are any Fire Energy cards attached to Dark Flareon. Flip a coin. If heads, discard 1 of those Energy cards and this attack does 30 damage plus 20 more damage. If tails, this attack does 30 damage.',
          damage: '30+',
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
      id: 'base5-36',
      name: 'Dark Gloom',
      nationalPokedexNumber: 44,
      imageUrl: 'https://images.pokemontcg.io/base5/36.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/base5/36_hires.png',
      types: [
        'Grass'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 1',
      evolvesFrom: 'Oddish',
      ability: {
        name: 'Pollen Stench',
        text: 'Once during your turn (before your attack), you may flip a coin. If heads, the Defending Pokémon is now Confused; if tails, your Active Pokémon is now Confused. This power can\'t be used if Dark Gloom is Asleep, Confused, or Paralyzed.',
        type: 'Pokémon Power'
      },
      hp: '50',
      retreatCost: [
        'Colorless',
        'Colorless'
      ],
      convertedRetreatCost: 2,
      number: '36',
      artist: 'Kagemaru Himeno',
      rarity: 'Uncommon',
      series: 'Base',
      set: 'Team Rocket',
      setCode: 'base5',
      attacks: [
        {
          cost: [
            'Grass',
            'Grass'
          ],
          name: 'Poisonpowder',
          text: 'The Defending Pokémon is now Poisoned.',
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
      id: 'base5-37',
      name: 'Dark Golduck',
      nationalPokedexNumber: 55,
      imageUrl: 'https://images.pokemontcg.io/base5/37.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/base5/37_hires.png',
      types: [
        'Water'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 1',
      evolvesFrom: 'Psyduck',
      hp: '60',
      retreatCost: [
        'Colorless',
        'Colorless'
      ],
      convertedRetreatCost: 2,
      number: '37',
      artist: 'Mitsuhiro Arita',
      rarity: 'Uncommon',
      series: 'Base',
      set: 'Team Rocket',
      setCode: 'base5',
      attacks: [
        {
          cost: [
            'Psychic'
          ],
          name: 'Third Eye',
          text: 'Discard 1 Energy card attached to Dark Golduck in order to draw up to 3 cards.',
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
      weaknesses: [
        {
          type: 'Lightning',
          value: '×2'
        }
      ]
    },
    {
      id: 'base5-38',
      name: 'Dark Jolteon',
      nationalPokedexNumber: 135,
      imageUrl: 'https://images.pokemontcg.io/base5/38.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/base5/38_hires.png',
      types: [
        'Lightning'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 1',
      evolvesFrom: 'Eevee',
      hp: '50',
      retreatCost: [
        'Colorless'
      ],
      convertedRetreatCost: 1,
      number: '38',
      artist: 'Mitsuhiro Arita',
      rarity: 'Uncommon',
      series: 'Base',
      set: 'Team Rocket',
      setCode: 'base5',
      attacks: [
        {
          cost: [
            'Lightning'
          ],
          name: 'Lightning Flash',
          text: 'If the Defending Pokémon tries to attack during your opponent\'s next turn, your opponent flips a coin. If tails, that attack does nothing.',
          damage: '20',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Lightning',
            'Lightning',
            'Colorless'
          ],
          name: 'Thunder Attack',
          text: 'Flip a coin. If heads, the Defending Pokémon is now Paralyzed. If tails, Dark Jolteon does 10 damage to itself.',
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
      id: 'base5-39',
      name: 'Dark Kadabra',
      nationalPokedexNumber: 64,
      imageUrl: 'https://images.pokemontcg.io/base5/39.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/base5/39_hires.png',
      types: [
        'Psychic'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 1',
      evolvesFrom: 'Abra',
      ability: {
        name: 'Matter Exchange',
        text: 'Once during your turn (before your attack), you may discard a card from your hand in order to draw a card. This power can\'t be used if Dark Kadabra is Asleep, Confused, or Paralyzed.',
        type: 'Pokémon Power'
      },
      hp: '50',
      retreatCost: [
        'Colorless',
        'Colorless'
      ],
      convertedRetreatCost: 2,
      number: '39',
      artist: 'Kagemaru Himeno',
      rarity: 'Uncommon',
      series: 'Base',
      set: 'Team Rocket',
      setCode: 'base5',
      attacks: [
        {
          cost: [
            'Psychic',
            'Psychic'
          ],
          name: 'Mind Shock',
          text: 'Don\'t apply Weakness and Resistance for this attack. (Any other effects that would happen after applying Weakness and Resistance still happen.)',
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
      id: 'base5-40',
      name: 'Dark Machoke',
      nationalPokedexNumber: 67,
      imageUrl: 'https://images.pokemontcg.io/base5/40.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/base5/40_hires.png',
      types: [
        'Fighting'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 1',
      evolvesFrom: 'Machop',
      hp: '60',
      retreatCost: [
        'Colorless',
        'Colorless'
      ],
      convertedRetreatCost: 2,
      number: '40',
      artist: 'Mitsuhiro Arita',
      rarity: 'Uncommon',
      series: 'Base',
      set: 'Team Rocket',
      setCode: 'base5',
      attacks: [
        {
          cost: [
            'Fighting',
            'Fighting',
            'Colorless'
          ],
          name: 'Drag Off',
          text: 'Before doing damage, choose 1 of your opponent\'s Benched Pokémon and switch it with the Defending Pokémon. Do the damage to the new Defending Pokémon. This attack can\'t be used if your opponent has no Benched Pokémon.',
          damage: '20',
          convertedEnergyCost: 3
        },
        {
          cost: [
            'Fighting',
            'Fighting',
            'Colorless'
          ],
          name: 'Knock Back',
          text: 'If your opponent has any Benched Pokémon, he or she chooses 1 of them and switches it with the Defending Pokémon. (Do the damage before switching the Pokémon.)',
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
      id: 'base5-41',
      name: 'Dark Muk',
      nationalPokedexNumber: 89,
      imageUrl: 'https://images.pokemontcg.io/base5/41.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/base5/41_hires.png',
      types: [
        'Grass'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 1',
      evolvesFrom: 'Grimer',
      ability: {
        name: 'Sticky Goo',
        text: 'As long as Dark Muk is your Active Pokémon, your opponent pays 2 more to retreat his or her Active Pokémon. This power stops working while Dark Muk is Asleep, Confused, or Paralyzed.',
        type: 'Pokémon Power'
      },
      hp: '60',
      retreatCost: [
        'Colorless',
        'Colorless'
      ],
      convertedRetreatCost: 2,
      number: '41',
      artist: 'Kagemaru Himeno',
      rarity: 'Uncommon',
      series: 'Base',
      set: 'Team Rocket',
      setCode: 'base5',
      attacks: [
        {
          cost: [
            'Grass',
            'Grass'
          ],
          name: 'Sludge Punch',
          text: 'The Defending Pokémon is now Poisoned.',
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
      id: 'base5-42',
      name: 'Dark Persian',
      nationalPokedexNumber: 53,
      imageUrl: 'https://images.pokemontcg.io/base5/42.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/base5/42_hires.png',
      types: [
        'Colorless'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 1',
      evolvesFrom: 'Meowth',
      hp: '60',
      number: '42',
      artist: 'Shin-ichi Yoshida',
      rarity: 'Uncommon',
      series: 'Base',
      set: 'Team Rocket',
      setCode: 'base5',
      attacks: [
        {
          cost: [
            'Colorless'
          ],
          name: 'Fascinate',
          text: 'Flip a coin. If heads, choose 1 of your opponent\'s Benched Pokémon and switch it with the Defending Pokémon. This attack can\'t be used if your opponent has no Benched Pokémon.',
          damage: '',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Colorless',
            'Colorless'
          ],
          name: 'Poison Claws',
          text: 'Flip a coin. If heads, the Defending Pokémon is now Poisoned.',
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
      id: 'base5-43',
      name: 'Dark Primeape',
      nationalPokedexNumber: 57,
      imageUrl: 'https://images.pokemontcg.io/base5/43.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/base5/43_hires.png',
      types: [
        'Fighting'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 1',
      evolvesFrom: 'Mankey',
      ability: {
        name: 'Frenzy',
        text: 'If Dark Primeape does any damage while it\'s Confused (even to itself), it does 30 more damage.',
        type: 'Pokémon Power'
      },
      hp: '60',
      retreatCost: [
        'Colorless'
      ],
      convertedRetreatCost: 1,
      number: '43',
      artist: 'Mitsuhiro Arita',
      rarity: 'Uncommon',
      series: 'Base',
      set: 'Team Rocket',
      setCode: 'base5',
      attacks: [
        {
          cost: [
            'Fighting',
            'Fighting'
          ],
          name: 'Frenzied Attack',
          text: 'Dark Primeape is now Confused (after doing damage).',
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
      id: 'base5-44',
      name: 'Dark Rapidash',
      nationalPokedexNumber: 78,
      imageUrl: 'https://images.pokemontcg.io/base5/44.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/base5/44_hires.png',
      types: [
        'Fire'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 1',
      evolvesFrom: 'Ponyta',
      hp: '60',
      number: '44',
      artist: 'Kagemaru Himeno',
      rarity: 'Uncommon',
      series: 'Base',
      set: 'Team Rocket',
      setCode: 'base5',
      attacks: [
        {
          cost: [
            'Colorless',
            'Colorless'
          ],
          name: 'Rear Kick',
          text: '',
          damage: '20',
          convertedEnergyCost: 2
        },
        {
          cost: [
            'Fire',
            'Fire'
          ],
          name: 'Flame Pillar',
          text: 'You may discard 1 Fire Energy card attached to Dark Rapidash when you use this attack. If you do and if your opponent has any Benched Pokémon, choose 1 of them and this attack does 10 damage to it. (Don\'t apply Weakness and Resistance for Benched Pokémon.)',
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
      id: 'base5-45',
      name: 'Dark Vaporeon',
      nationalPokedexNumber: 134,
      imageUrl: 'https://images.pokemontcg.io/base5/45.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/base5/45_hires.png',
      types: [
        'Water'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 1',
      evolvesFrom: 'Eevee',
      hp: '60',
      retreatCost: [
        'Colorless'
      ],
      convertedRetreatCost: 1,
      number: '45',
      artist: 'Mitsuhiro Arita',
      rarity: 'Uncommon',
      series: 'Base',
      set: 'Team Rocket',
      setCode: 'base5',
      attacks: [
        {
          cost: [
            'Colorless',
            'Colorless',
            'Colorless'
          ],
          name: 'Bite',
          text: '',
          damage: '30',
          convertedEnergyCost: 3
        },
        {
          cost: [
            'Water',
            'Water',
            'Colorless'
          ],
          name: 'Whirlpool',
          text: 'If the Defending Pokémon has any Energy cards attached to it, choose 1 of them and discard it.',
          damage: '20',
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
      id: 'base5-46',
      name: 'Dark Wartortle',
      nationalPokedexNumber: 8,
      imageUrl: 'https://images.pokemontcg.io/base5/46.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/base5/46_hires.png',
      types: [
        'Water'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 1',
      evolvesFrom: 'Squirtle',
      hp: '60',
      retreatCost: [
        'Colorless'
      ],
      convertedRetreatCost: 1,
      number: '46',
      artist: 'Kagemaru Himeno',
      rarity: 'Uncommon',
      series: 'Base',
      set: 'Team Rocket',
      setCode: 'base5',
      attacks: [
        {
          cost: [
            'Water'
          ],
          name: 'Doubleslap',
          text: 'Flip 2 coins. This attack does 10 damage times the number of heads.',
          damage: '10×',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Water',
            'Colorless'
          ],
          name: 'Mirror Shell',
          text: 'If an attack does damage to Dark Wartortle during your opponent\'s next turn (even if Dark Wartortle is Knocked Out), Dark Wartortle attacks the Defending Pokémon for an equal amount of damage.',
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
      id: 'base5-47',
      name: 'Magikarp',
      nationalPokedexNumber: 129,
      imageUrl: 'https://images.pokemontcg.io/base5/47.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/base5/47_hires.png',
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
      number: '47',
      artist: 'Kagemaru Himeno',
      rarity: 'Uncommon',
      series: 'Base',
      set: 'Team Rocket',
      setCode: 'base5',
      attacks: [
        {
          cost: [
            'Colorless'
          ],
          name: 'Flop',
          text: '',
          damage: '10',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Water',
            'Water',
            'Water'
          ],
          name: 'Rapid Evolution',
          text: 'Search your deck for an Evolution card named Gyarados or Dark Gyarados and put it on Magikarp. (This counts as evolving Magikarp.) Shuffle your deck afterward.',
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
      id: 'base5-48',
      name: 'Porygon',
      nationalPokedexNumber: 137,
      imageUrl: 'https://images.pokemontcg.io/base5/48.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/base5/48_hires.png',
      types: [
        'Colorless'
      ],
      supertype: 'Pokémon',
      subtype: 'Basic',
      hp: '40',
      number: '48',
      artist: 'Keiji Kinebuchi',
      rarity: 'Uncommon',
      series: 'Base',
      set: 'Team Rocket',
      setCode: 'base5',
      attacks: [
        {
          cost: [
            'Colorless'
          ],
          name: 'Conversion 1',
          text: 'If Defending Pokémon has a Weakness, you may change it to a type of your choice other than Colorless.',
          damage: '',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Colorless',
            'Colorless',
            'Colorless'
          ],
          name: 'Psybeam',
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
      id: 'base5-49',
      name: 'Abra',
      nationalPokedexNumber: 63,
      imageUrl: 'https://images.pokemontcg.io/base5/49.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/base5/49_hires.png',
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
      artist: 'Sumiyoshi Kizuki',
      rarity: 'Common',
      series: 'Base',
      set: 'Team Rocket',
      setCode: 'base5',
      attacks: [
        {
          cost: [
            'Psychic'
          ],
          name: 'Vanish',
          text: 'Shuffle Abra into your deck. (Discard all cards attached to Abra.)',
          damage: '',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Psychic'
          ],
          name: 'Psyshock',
          text: 'Flip a coin. If heads, the Defending Pokémon is now Paralyzed.',
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
      id: 'base5-50',
      name: 'Charmander',
      nationalPokedexNumber: 4,
      imageUrl: 'https://images.pokemontcg.io/base5/50.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/base5/50_hires.png',
      types: [
        'Fire'
      ],
      supertype: 'Pokémon',
      subtype: 'Basic',
      ability: {
        name: 'Gather Fire',
        text: 'Once during your turn (before your attack), you may take 1 Fire Energy card attached to 1 of your other Pokémon and attach it to Charmander. This power can\'t be used if Charmander is Asleep, Confused, or Paralyzed.',
        type: 'Pokémon Power'
      },
      hp: '40',
      retreatCost: [
        'Colorless'
      ],
      convertedRetreatCost: 1,
      number: '50',
      artist: 'Kagemaru Himeno',
      rarity: 'Common',
      series: 'Base',
      set: 'Team Rocket',
      setCode: 'base5',
      attacks: [
        {
          cost: [
            'Fire'
          ],
          name: 'Fire Tail',
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
      id: 'base5-51',
      name: 'Dark Raticate',
      nationalPokedexNumber: 20,
      imageUrl: 'https://images.pokemontcg.io/base5/51.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/base5/51_hires.png',
      types: [
        'Colorless'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 1',
      evolvesFrom: 'Rattata',
      hp: '50',
      retreatCost: [
        'Colorless'
      ],
      convertedRetreatCost: 1,
      number: '51',
      artist: 'Shin-ichi Yoshida',
      rarity: 'Common',
      series: 'Base',
      set: 'Team Rocket',
      setCode: 'base5',
      attacks: [
        {
          cost: [
            'Colorless',
            'Colorless'
          ],
          name: 'Gnaw',
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
          name: 'Hyper Fang',
          text: 'Flip a coin. if tails, this attack does nothing.',
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
      id: 'base5-52',
      name: 'Diglett',
      nationalPokedexNumber: 50,
      imageUrl: 'https://images.pokemontcg.io/base5/52.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/base5/52_hires.png',
      types: [
        'Fighting'
      ],
      supertype: 'Pokémon',
      subtype: 'Basic',
      hp: '40',
      number: '52',
      artist: 'Sumiyoshi Kizuki',
      rarity: 'Common',
      series: 'Base',
      set: 'Team Rocket',
      setCode: 'base5',
      attacks: [
        {
          cost: [
            'Fighting'
          ],
          name: 'Dig Under',
          text: 'Choose 1 of your opponent\'s Pokémon. This attack does 10 damage to that Pokémon. Don\'t apply Weakness and Resistance for this attack. (Any other effects that would happen after Applying Weakness and Resistance still happen.)',
          damage: '10',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Fighting',
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
      id: 'base5-53',
      name: 'Dratini',
      nationalPokedexNumber: 147,
      imageUrl: 'https://images.pokemontcg.io/base5/53.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/base5/53_hires.png',
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
      number: '53',
      artist: 'Kagemaru Himeno',
      rarity: 'Common',
      series: 'Base',
      set: 'Team Rocket',
      setCode: 'base5',
      attacks: [
        {
          cost: [
            'Colorless',
            'Colorless'
          ],
          name: 'Wrap',
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
      ]
    },
    {
      id: 'base5-54',
      name: 'Drowzee',
      nationalPokedexNumber: 96,
      imageUrl: 'https://images.pokemontcg.io/base5/54.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/base5/54_hires.png',
      types: [
        'Psychic'
      ],
      supertype: 'Pokémon',
      subtype: 'Basic',
      ability: {
        name: 'Long Distance Hypnosis',
        text: 'Distance Hypnosis - Once during your turn (before your attack), you may flip a coin. If heads, the Defending Pokémon is now Asleep; if tails, your Active Pokémon is now Asleep. The power can\'t be used if Drowzee is Asleep, Confused, or Paralyzed.',
        type: 'Pokémon Power'
      },
      hp: '50',
      retreatCost: [
        'Colorless'
      ],
      convertedRetreatCost: 1,
      number: '54',
      artist: 'Kagemaru Himeno',
      rarity: 'Common',
      series: 'Base',
      set: 'Team Rocket',
      setCode: 'base5',
      attacks: [
        {
          cost: [
            'Psychic',
            'Colorless'
          ],
          name: 'Nightmare',
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
      id: 'base5-55',
      name: 'Eevee',
      nationalPokedexNumber: 133,
      imageUrl: 'https://images.pokemontcg.io/base5/55.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/base5/55_hires.png',
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
      number: '55',
      artist: 'Atsuko Nishida',
      rarity: 'Common',
      series: 'Base',
      set: 'Team Rocket',
      setCode: 'base5',
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
            'Colorless',
            'Colorless'
          ],
          name: 'Sand-attack',
          text: 'If the Defending Pokémon tries to attack during your opponent\'s next turn, your opponent flips a coin. If tails, that attack does nothing.',
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
      id: 'base5-56',
      name: 'Ekans',
      nationalPokedexNumber: 23,
      imageUrl: 'https://images.pokemontcg.io/base5/56.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/base5/56_hires.png',
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
      number: '56',
      artist: 'Ken Sugimori',
      rarity: 'Common',
      series: 'Base',
      set: 'Team Rocket',
      setCode: 'base5',
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
            'Grass',
            'Grass'
          ],
          name: 'Poison Sting',
          text: 'Flip a coin. If heads, the Defending Pokémon is now Poisoned.',
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
      id: 'base5-57',
      name: 'Grimer',
      nationalPokedexNumber: 88,
      imageUrl: 'https://images.pokemontcg.io/base5/57.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/base5/57_hires.png',
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
      number: '57',
      artist: 'Kagemaru Himeno',
      rarity: 'Common',
      series: 'Base',
      set: 'Team Rocket',
      setCode: 'base5',
      attacks: [
        {
          cost: [
            'Grass'
          ],
          name: 'Poison Gas',
          text: 'The Defending Pokémon is now Asleep.',
          damage: '',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Grass',
            'Grass'
          ],
          name: 'Sticky Hands',
          text: 'Flip a coin. If heads, this attack does 10 damage plus 20 more damage and the Defending Pokémon is now Paralyzed; if tails, this attack does 10 damage.',
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
      id: 'base5-58',
      name: 'Koffing',
      nationalPokedexNumber: 109,
      imageUrl: 'https://images.pokemontcg.io/base5/58.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/base5/58_hires.png',
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
      number: '58',
      artist: 'Sumiyoshi Kizuki',
      rarity: 'Common',
      series: 'Base',
      set: 'Team Rocket',
      setCode: 'base5',
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
          name: 'Poison Gas',
          text: 'Flip a coin. If heads, the Defending Pokémon is now Poisoned.',
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
      id: 'base5-59',
      name: 'Machop',
      nationalPokedexNumber: 66,
      imageUrl: 'https://images.pokemontcg.io/base5/59.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/base5/59_hires.png',
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
      number: '59',
      artist: 'Ken Sugimori',
      rarity: 'Common',
      series: 'Base',
      set: 'Team Rocket',
      setCode: 'base5',
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
            'Colorless',
            'Colorless'
          ],
          name: 'Kick',
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
      id: 'base5-60',
      name: 'Magnemite',
      nationalPokedexNumber: 81,
      imageUrl: 'https://images.pokemontcg.io/base5/60.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/base5/60_hires.png',
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
      number: '60',
      artist: 'Miki Tanaka',
      rarity: 'Common',
      series: 'Base',
      set: 'Team Rocket',
      setCode: 'base5',
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
            'Colorless'
          ],
          name: 'Magnetism',
          text: 'Does 10 damage plus 10 more damage for each Magnemite, Magneton, and Dark Magneton on your Bench.',
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
      id: 'base5-61',
      name: 'Mankey',
      nationalPokedexNumber: 56,
      imageUrl: 'https://images.pokemontcg.io/base5/61.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/base5/61_hires.png',
      types: [
        'Fighting'
      ],
      supertype: 'Pokémon',
      subtype: 'Basic',
      hp: '40',
      number: '61',
      artist: 'Sumiyoshi Kizuki',
      rarity: 'Common',
      series: 'Base',
      set: 'Team Rocket',
      setCode: 'base5',
      attacks: [
        {
          cost: [
            'Colorless'
          ],
          name: 'Mischief',
          text: 'Shuffle your opponent\'s deck.',
          damage: '',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Fighting',
            'Colorless'
          ],
          name: 'Anger',
          text: 'Flip a coin. If heads, this attack does 20 damage plus 20 more damage; if tails, this attack does 20 damage.',
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
      id: 'base5-62',
      name: 'Meowth',
      nationalPokedexNumber: 52,
      imageUrl: 'https://images.pokemontcg.io/base5/62.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/base5/62_hires.png',
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
      number: '62',
      artist: 'Atsuko Nishida',
      rarity: 'Common',
      series: 'Base',
      set: 'Team Rocket',
      setCode: 'base5',
      attacks: [
        {
          cost: [
            'Colorless',
            'Colorless'
          ],
          name: 'Coin Hurl',
          text: 'Choose 1 of your opponent\'s Pokémon and flip a coin. If heads, this attack does 20 damage to that Pokémon. Don\'t apply Weakness and Resistance for this attack. (Any other effects that would happen after applying Weakness and Resistance still happen.)',
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
      id: 'base5-63',
      name: 'Oddish',
      nationalPokedexNumber: 43,
      imageUrl: 'https://images.pokemontcg.io/base5/63.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/base5/63_hires.png',
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
      number: '63',
      artist: 'Kagemaru Himeno',
      rarity: 'Common',
      series: 'Base',
      set: 'Team Rocket',
      setCode: 'base5',
      attacks: [
        {
          cost: [
            'Grass'
          ],
          name: 'Sleep Powder',
          text: 'The Defending Pokémon is now Asleep.',
          damage: '',
          convertedEnergyCost: 1
        },
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
      id: 'base5-64',
      name: 'Ponyta',
      nationalPokedexNumber: 77,
      imageUrl: 'https://images.pokemontcg.io/base5/64.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/base5/64_hires.png',
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
      artist: 'Atsuko Nishida',
      rarity: 'Common',
      series: 'Base',
      set: 'Team Rocket',
      setCode: 'base5',
      attacks: [
        {
          cost: [
            'Fire',
            'Colorless'
          ],
          name: 'Ember',
          text: 'Discard 1 Fire Energy card attached to Ponyta in order to use this attack.',
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
      id: 'base5-65',
      name: 'Psyduck',
      nationalPokedexNumber: 54,
      imageUrl: 'https://images.pokemontcg.io/base5/65.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/base5/65_hires.png',
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
      number: '65',
      artist: 'Mitsuhiro Arita',
      rarity: 'Common',
      series: 'Base',
      set: 'Team Rocket',
      setCode: 'base5',
      attacks: [
        {
          cost: [
            'Psychic'
          ],
          name: 'Dizziness',
          text: 'Draw a card.',
          damage: '',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Water',
            'Colorless'
          ],
          name: 'Water Gun',
          text: 'Does 20 damage plus 10 more damage for each Energy attached to Psyduck but not used to pay for this attack. You can\'t add more than 20 damage in this way.',
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
      id: 'base5-66',
      name: 'Rattata',
      nationalPokedexNumber: 19,
      imageUrl: 'https://images.pokemontcg.io/base5/66.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/base5/66_hires.png',
      types: [
        'Colorless'
      ],
      supertype: 'Pokémon',
      subtype: 'Basic',
      ability: {
        name: 'Trickery',
        text: 'Once during your turn (before your attack), you may switch 1 of your Prizes with the top card of your deck. This power can\'t be used if Rattata is Asleep, Confused, or Paralyzed.',
        type: 'Pokémon Power'
      },
      hp: '40',
      number: '66',
      artist: 'Atsuko Nishida',
      rarity: 'Common',
      series: 'Base',
      set: 'Team Rocket',
      setCode: 'base5',
      attacks: [
        {
          cost: [
            'Colorless'
          ],
          name: 'Quick Attack',
          text: 'Flip a coin. If heads, this attack does 10 damage plus 10 more damage; if tails, this attack does 10 damage.',
          damage: '10+',
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
      id: 'base5-67',
      name: 'Slowpoke',
      nationalPokedexNumber: 79,
      imageUrl: 'https://images.pokemontcg.io/base5/67.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/base5/67_hires.png',
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
      number: '67',
      artist: 'Sumiyoshi Kizuki',
      rarity: 'Common',
      series: 'Base',
      set: 'Team Rocket',
      setCode: 'base5',
      attacks: [
        {
          cost: [
            'Colorless'
          ],
          name: 'Afternoon Nap',
          text: 'Search your deck for a Psychic Energy card and attach it to Slowpoke. Shuffle your deck afterward.',
          damage: '',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Psychic'
          ],
          name: 'Headbutt',
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
      id: 'base5-68',
      name: 'Squirtle',
      nationalPokedexNumber: 7,
      imageUrl: 'https://images.pokemontcg.io/base5/68.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/base5/68_hires.png',
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
      number: '68',
      artist: 'Atsuko Nishida',
      rarity: 'Common',
      series: 'Base',
      set: 'Team Rocket',
      setCode: 'base5',
      attacks: [
        {
          cost: [
            'Colorless',
            'Colorless'
          ],
          name: 'Shell Attack',
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
      id: 'base5-69',
      name: 'Voltorb',
      nationalPokedexNumber: 100,
      imageUrl: 'https://images.pokemontcg.io/base5/69.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/base5/69_hires.png',
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
      number: '69',
      artist: 'Ken Sugimori',
      rarity: 'Common',
      series: 'Base',
      set: 'Team Rocket',
      setCode: 'base5',
      attacks: [
        {
          cost: [
            'Lightning'
          ],
          name: 'Speed Ball',
          text: '',
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
      id: 'base5-70',
      name: 'Zubat',
      nationalPokedexNumber: 41,
      imageUrl: 'https://images.pokemontcg.io/base5/70.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/base5/70_hires.png',
      types: [
        'Grass'
      ],
      supertype: 'Pokémon',
      subtype: 'Basic',
      hp: '40',
      number: '70',
      artist: 'Mitsuhiro Arita',
      rarity: 'Common',
      series: 'Base',
      set: 'Team Rocket',
      setCode: 'base5',
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
            'Grass',
            'Colorless'
          ],
          name: 'Bite',
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
      id: 'base5-71',
      name: 'Here Comes Team Rocket!',
      imageUrl: 'https://images.pokemontcg.io/base5/71.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/base5/71_hires.png',
      supertype: 'Trainer',
      subtype: '',
      number: '71',
      artist: 'Ken Sugimori',
      rarity: 'Rare',
      series: 'Base',
      set: 'Team Rocket',
      setCode: 'base5',
      text: [
        'Each player plays with his or her Prize cards face up for the rest of the game.'
      ]
    },
    {
      id: 'base5-72',
      name: 'Rocket\'s Sneak Attack',
      imageUrl: 'https://images.pokemontcg.io/base5/72.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/base5/72_hires.png',
      supertype: 'Trainer',
      subtype: '',
      number: '72',
      artist: 'Ken Sugimori',
      rarity: 'Rare',
      series: 'Base',
      set: 'Team Rocket',
      setCode: 'base5',
      text: [
        'Look at your opponent\'s hand. If he or she has any Trainer cards, choose 1 of them. Your opponent shuffles that card into his or her deck.'
      ]
    },
    {
      id: 'base5-73',
      name: 'The Boss\'s Way',
      imageUrl: 'https://images.pokemontcg.io/base5/73.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/base5/73_hires.png',
      supertype: 'Trainer',
      subtype: '',
      number: '73',
      artist: 'Ken Sugimori',
      rarity: 'Uncommon',
      series: 'Base',
      set: 'Team Rocket',
      setCode: 'base5',
      text: [
        'Search your deck for an Evolution card with Dark in its name. Show it to your opponent and put it into your hand. Shuffle your deck afterward.'
      ]
    },
    {
      id: 'base5-74',
      name: 'Challenge!',
      imageUrl: 'https://images.pokemontcg.io/base5/74.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/base5/74_hires.png',
      supertype: 'Trainer',
      subtype: '',
      number: '74',
      artist: 'Kagemaru Himeno',
      rarity: 'Uncommon',
      series: 'Base',
      set: 'Team Rocket',
      setCode: 'base5',
      text: [
        'Ask your opponent if he or she accepts your challenge. If your opponent declines (or if both Benches are full), draw 2 cards. If your opponent accepts, each of you searches your decks for any number of Basic Pokémon cards and puts them face down onto your Benches. (A player can\'t do this if his or her Bench is full.) When you both have finished, shuffle your decks and turn those cards face up.'
      ]
    },
    {
      id: 'base5-75',
      name: 'Digger',
      imageUrl: 'https://images.pokemontcg.io/base5/75.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/base5/75_hires.png',
      supertype: 'Trainer',
      subtype: '',
      number: '75',
      artist: 'Sumiyoshi Kizuki',
      rarity: 'Uncommon',
      series: 'Base',
      set: 'Team Rocket',
      setCode: 'base5',
      text: [
        'Flip a coin. If tails, do 10 damage to your Active Pokémon. If heads, your opponent flips a coin. If tails, your opponent does 10 damage to his or her Active Pokémon. If heads, you flip a coin. Keep doing this until a player gets tails.'
      ]
    },
    {
      id: 'base5-76',
      name: 'Imposter Oak\'s Revenge',
      imageUrl: 'https://images.pokemontcg.io/base5/76.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/base5/76_hires.png',
      supertype: 'Trainer',
      subtype: '',
      number: '76',
      artist: 'Ken Sugimori',
      rarity: 'Uncommon',
      series: 'Base',
      set: 'Team Rocket',
      setCode: 'base5',
      text: [
        'Discard a card from your hand in order to play this card. Your opponent shuffles his or her hand into his or her deck, then draws 4 cards.'
      ]
    },
    {
      id: 'base5-77',
      name: 'Nightly Garbage Run',
      imageUrl: 'https://images.pokemontcg.io/base5/77.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/base5/77_hires.png',
      supertype: 'Trainer',
      subtype: '',
      number: '77',
      artist: 'Sumiyoshi Kizuki',
      rarity: 'Uncommon',
      series: 'Base',
      set: 'Team Rocket',
      setCode: 'base5',
      text: [
        'Choose up to 3 Basic Pokémon cards, Evolution cards, and/or basic Energy cards from your discard pile. Show them to your opponent and shuffle them into your deck.'
      ]
    },
    {
      id: 'base5-78',
      name: 'Goop Gas Attack',
      imageUrl: 'https://images.pokemontcg.io/base5/78.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/base5/78_hires.png',
      supertype: 'Trainer',
      subtype: '',
      number: '78',
      artist: 'Sumiyoshi Kizuki',
      rarity: 'Common',
      series: 'Base',
      set: 'Team Rocket',
      setCode: 'base5',
      text: [
        'All Pokémon Powers stop working until the end of your opponent\'s next turn.'
      ]
    },
    {
      id: 'base5-79',
      name: 'Sleep!',
      imageUrl: 'https://images.pokemontcg.io/base5/79.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/base5/79_hires.png',
      supertype: 'Trainer',
      subtype: '',
      number: '79',
      artist: 'Sumiyoshi Kizuki',
      rarity: 'Common',
      series: 'Base',
      set: 'Team Rocket',
      setCode: 'base5',
      text: [
        'Flip a coin. If heads, the Defending Pokémon is now Asleep.'
      ]
    },
    {
      id: 'base5-80',
      name: 'Rainbow Energy',
      imageUrl: 'https://images.pokemontcg.io/base5/80.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/base5/80_hires.png',
      supertype: 'Energy',
      subtype: 'Special',
      number: '80',
      artist: 'Takumi Akabane',
      rarity: 'Rare',
      series: 'Base',
      set: 'Team Rocket',
      setCode: 'base5',
      text: [
        'Attach Rainbow Energy to 1 of your Pokémon. While in play, Rainbow Energy counts as every type of basic Energy but only provides 1 Energy at a time. (Doesn\'t count as a basic Energy card when not in play.) When you attach this card from your hand to 1 of your Pokémon, it does 10 damage to that Pokémon. (Don\'t apply Weakness and Resistance.) (Major text change in Ruby/Sapphire. Requires reference.)'
      ]
    },
    {
      id: 'base5-81',
      name: 'Full Heal Energy',
      imageUrl: 'https://images.pokemontcg.io/base5/81.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/base5/81_hires.png',
      supertype: 'Energy',
      subtype: 'Special',
      number: '81',
      artist: 'Keiji Kinebuchi',
      rarity: 'Uncommon',
      series: 'Base',
      set: 'Team Rocket',
      setCode: 'base5',
      text: [
        'If you play this card from your hand, the Pokémon you attach it to is no longer Asleep, Confused, Paralyzed, or Poisoned. Full Heal Energy Provides Colorless energy. (Doesn\'t count as a basic Energy card.)'
      ]
    },
    {
      id: 'base5-82',
      name: 'Potion Energy',
      imageUrl: 'https://images.pokemontcg.io/base5/82.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/base5/82_hires.png',
      supertype: 'Energy',
      subtype: 'Special',
      number: '82',
      artist: 'Keiji Kinebuchi',
      rarity: 'Uncommon',
      series: 'Base',
      set: 'Team Rocket',
      setCode: 'base5',
      text: [
        'If you play this card from your hand, remove 1 damage counter from the Pokémon you attach it to, if it has any. Potion Energy provides Colorless energy. (Doesn\'t count as a basic Energy card.)'
      ]
    },
    {
      id: 'base5-83',
      name: 'Dark Raichu',
      nationalPokedexNumber: 26,
      imageUrl: 'https://images.pokemontcg.io/base5/83.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/base5/83_hires.png',
      types: [
        'Lightning'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 1',
      evolvesFrom: 'Pikachu',
      hp: '70',
      retreatCost: [
        'Colorless'
      ],
      convertedRetreatCost: 1,
      number: '83',
      artist: 'Mitsuhiro Arita',
      rarity: 'Rare',
      series: 'Base',
      set: 'Team Rocket',
      setCode: 'base5',
      attacks: [
        {
          cost: [
            'Lightning',
            'Lightning',
            'Lightning'
          ],
          name: 'Surprise Thunder',
          text: 'Flip a coin. If heads, flip another coin. If the second coin is heads, this attack does 20 damage to each of your opponent\'s Benched Pokémon. If the second coin is tails, this attack does 10 damage to each of your opponent\'s Benched Pokémon. (Don\'t apply Weakness and Resistance for Benched Pokémon.)',
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
    }
  ]