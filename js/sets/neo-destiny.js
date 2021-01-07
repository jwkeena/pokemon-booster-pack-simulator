const neoDestinyCards = [
    {
      id: 'neo4-1',
      name: 'Dark Ampharos',
      nationalPokedexNumber: 181,
      imageUrl: 'https://images.pokemontcg.io/neo4/1.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo4/1_hires.png',
      types: [
        'Lightning'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 2',
      evolvesFrom: 'Flaaffy',
      ability: {
        name: 'Conductivity',
        text: 'Whenever your opponent attaches an Energy card to a Pokémon from his or her hand, this Power does 10 damage to that Pokémon. (Don\'t apply Weakness and Resistance) This power stops working if you have more than 1 Dark Ampharos in play or while Dark Ampharos is Asleep, Confused or Paralysed.',
        type: 'Pokémon Power'
      },
      hp: '70',
      retreatCost: [
        'Colorless',
        'Colorless'
      ],
      convertedRetreatCost: 2,
      number: '1',
      artist: 'Kagemaru Himeno',
      rarity: 'Holo Rare',
      series: 'Neo',
      set: 'Neo Destiny',
      setCode: 'neo4',
      attacks: [
        {
          cost: [
            'Lightning',
            'Colorless',
            'Colorless'
          ],
          name: 'Shock Bolt',
          text: 'Discard all Lightning Energy cards attached to this Pokémon in order to use this attack.',
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
      id: 'neo4-2',
      name: 'Dark Crobat',
      nationalPokedexNumber: 169,
      imageUrl: 'https://images.pokemontcg.io/neo4/2.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo4/2_hires.png',
      types: [
        'Grass'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 2',
      evolvesFrom: 'Zubat',
      ability: {
        name: 'Surprise Bite',
        text: 'When you play Dark Crobat from your hand, you may choose 1 of your opponent\'s Pokémon. This power does 20 damage do that Pokémon. (Don\'t apply Weakness and Resistance.)',
        type: 'Pokémon Power'
      },
      hp: '70',
      number: '2',
      artist: 'Shin-ichi Yoshikawa, CR CG gangs',
      rarity: 'Holo Rare',
      series: 'Neo',
      set: 'Neo Destiny',
      setCode: 'neo4',
      attacks: [
        {
          cost: [
            'Grass',
            'Grass'
          ],
          name: 'Dark Drain',
          text: 'Flip a coin for each of your opponent\'s Pokémon. For each heads, this attack does 10 damage to that Pokémon. Don\'t apply Weakness and Resistance. Remove a number of damage counters from Dark Crobat equal to the damage dealt. If Dark Crobat has fewer damage counters than that, remove all of them.',
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
      id: 'neo4-3',
      name: 'Dark Donphan',
      nationalPokedexNumber: 232,
      imageUrl: 'https://images.pokemontcg.io/neo4/3.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo4/3_hires.png',
      types: [
        'Fighting'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 1',
      evolvesFrom: 'Phanpy',
      hp: '60',
      retreatCost: [
        'Colorless',
        'Colorless',
        'Colorless'
      ],
      convertedRetreatCost: 3,
      number: '3',
      artist: 'Shin-ichi Yoshida',
      rarity: 'Holo Rare',
      series: 'Neo',
      set: 'Neo Destiny',
      setCode: 'neo4',
      attacks: [
        {
          cost: [
            'Fighting',
            'Fighting'
          ],
          name: 'Tusk Toss',
          text: 'If your opponent has any Benched Pokémon, flip a coin. If heads, return the Defending Pokémon and all cards attached to it to your opponent\'s hand. If tails, your opponent chooses 1 of his or her Benched Pokémon and switches it with the Defending Pokémon.',
          damage: '',
          convertedEnergyCost: 2
        },
        {
          cost: [
            'Fighting',
            'Fighting',
            'Colorless'
          ],
          name: 'Giant Tusk',
          text: '',
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
      id: 'neo4-4',
      name: 'Dark Espeon',
      nationalPokedexNumber: 196,
      imageUrl: 'https://images.pokemontcg.io/neo4/4.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo4/4_hires.png',
      types: [
        'Psychic'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 1',
      evolvesFrom: 'Eevee',
      hp: '60',
      number: '4',
      artist: 'Atsuko Nishida',
      rarity: 'Holo Rare',
      series: 'Neo',
      set: 'Neo Destiny',
      setCode: 'neo4',
      attacks: [
        {
          cost: [
            'Colorless'
          ],
          name: 'Gouge',
          text: 'Flip a coin. If heads, this attack does 10 damage plus 10 more damage; if tails, this attack does 10 damage.',
          damage: '10+',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Psychic',
            'Colorless',
            'Colorless'
          ],
          name: 'Psysplash',
          text: 'Does 10 damage to each of your opponent\'s Pokémon for each Energy card attached to that Pokémon. Don\'t apply Weakness and Resistance.',
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
      id: 'neo4-5',
      name: 'Dark Feraligatr',
      nationalPokedexNumber: 160,
      imageUrl: 'https://images.pokemontcg.io/neo4/5.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo4/5_hires.png',
      types: [
        'Water'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 2',
      evolvesFrom: 'Croconaw',
      ability: {
        name: 'Scare',
        text: 'As long as Dark Feraligatr is your Active Pokémon, all of your opponent\'s Baby Pokémon Powers stop working and your opponent\'s Baby Pokémon can\'t attack. This power stops working while Dark Feraligatr is Asleep, Confused, or Paralyzed.',
        type: 'Pokémon Power'
      },
      hp: '80',
      retreatCost: [
        'Colorless',
        'Colorless',
        'Colorless'
      ],
      convertedRetreatCost: 3,
      number: '5',
      artist: 'Atsuko Nishida',
      rarity: 'Holo Rare',
      series: 'Neo',
      set: 'Neo Destiny',
      setCode: 'neo4',
      attacks: [
        {
          cost: [
            'Water',
            'Water',
            'Water'
          ],
          name: 'Crushing Blow',
          text: 'If the Defending Pokémon has any Energy cards attached to it, flip a coin. If heads, choose 1 of those cards and discard it.',
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
      id: 'neo4-6',
      name: 'Dark Gengar',
      nationalPokedexNumber: 94,
      imageUrl: 'https://images.pokemontcg.io/neo4/6.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo4/6_hires.png',
      types: [
        'Psychic'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 2',
      evolvesFrom: 'Haunter',
      ability: {
        name: 'Deep Sleep',
        text: 'As long as any Dark Gengar are in play, a player flips 2 coins for each of his or her Pokémon that is Asleep at the end of each turn. If either of them is tails, that Pokémon is still Asleep. This power stops working if Dark Gengar is Asleep, Confused, or Paralyzed.',
        type: 'Pokémon Power'
      },
      hp: '70',
      retreatCost: [
        'Colorless',
        'Colorless'
      ],
      convertedRetreatCost: 2,
      number: '6',
      artist: 'Aya Kusube',
      rarity: 'Holo Rare',
      series: 'Neo',
      set: 'Neo Destiny',
      setCode: 'neo4',
      attacks: [
        {
          cost: [
            'Psychic',
            'Psychic',
            'Psychic'
          ],
          name: 'Pull In',
          text: 'If your opponent has any Benched Pokémon, you may choose 1 of them and switch it with the Defending Pokémon (before doing damage or other effects of this attack). Either way, the Defending Pokémon is now Asleep.',
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
      id: 'neo4-7',
      name: 'Dark Houndoom',
      nationalPokedexNumber: 229,
      imageUrl: 'https://images.pokemontcg.io/neo4/7.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo4/7_hires.png',
      types: [
        'Fire'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 1',
      evolvesFrom: 'Houndour',
      hp: '60',
      retreatCost: [
        'Colorless'
      ],
      convertedRetreatCost: 1,
      number: '7',
      artist: 'Kagemaru Himeno',
      rarity: 'Holo Rare',
      series: 'Neo',
      set: 'Neo Destiny',
      setCode: 'neo4',
      attacks: [
        {
          cost: [
            'Colorless'
          ],
          name: 'Eerie Howl',
          text: 'If your opponent\'s Bench isn\'t full, look at his or her hand. If your opponent has any Baby Pokémon or Basic Pokémon there, choose 1 of them and put it on his or her Bench. Then, switch it with the Defending Pokémon.',
          damage: '',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Fire',
            'Colorless'
          ],
          name: 'Dark Fire',
          text: 'If there are any Darkness Energy cards attached to Dark Houndoom, discard 1 of them and this attack does 30 damage plus 20 more damage (plus 10 more damage for the Darkness Energy you discarded). If there aren\'t any, this attack does 30 damage.',
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
      id: 'neo4-8',
      name: 'Dark Porygon2',
      nationalPokedexNumber: 233,
      imageUrl: 'https://images.pokemontcg.io/neo4/8.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo4/8_hires.png',
      types: [
        'Colorless'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 1',
      evolvesFrom: 'Porygon',
      ability: {
        name: 'Spatial Distortion',
        text: 'Once during your turn (before your attack), you may flip a coin. If heads, choose a Stadium card from your discard pile and put it into play. (If there\'s already a Stadium card in play, discard it.) This power can\'t be used if Dark Porygon2 is Asleep, Confused, or Paralyzed.',
        type: 'Pokémon Power'
      },
      hp: '60',
      retreatCost: [
        'Colorless'
      ],
      convertedRetreatCost: 1,
      number: '8',
      artist: 'Shin-ichi Yoshikawa, CR CG gangs',
      rarity: 'Holo Rare',
      series: 'Neo',
      set: 'Neo Destiny',
      setCode: 'neo4',
      attacks: [
        {
          cost: [
            'Colorless',
            'Colorless',
            'Colorless'
          ],
          name: 'Curve Attack',
          text: 'Flip a coin. If heads, prevent all damage done by attacks to Dark Porygon2 during your opponent\'s next turn. (Any other effects of attacks still happen.)',
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
      id: 'neo4-9',
      name: 'Dark Scizor',
      nationalPokedexNumber: 212,
      imageUrl: 'https://images.pokemontcg.io/neo4/9.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo4/9_hires.png',
      types: [
        'Metal'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 1',
      evolvesFrom: 'Scyther',
      hp: '70',
      retreatCost: [
        'Colorless',
        'Colorless'
      ],
      convertedRetreatCost: 2,
      number: '9',
      artist: 'Mitsuhiro Arita',
      rarity: 'Holo Rare',
      series: 'Neo',
      set: 'Neo Destiny',
      setCode: 'neo4',
      attacks: [
        {
          cost: [
            'Colorless',
            'Colorless'
          ],
          name: 'Threaten',
          text: 'Flip a coin. If heads, look at your opponent\'s hand. If he or she has any Trainer cards there, choose 1 of them. Your opponent shuffles that card into his or her deck.',
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
      id: 'neo4-10',
      name: 'Dark Typhlosion',
      nationalPokedexNumber: 157,
      imageUrl: 'https://images.pokemontcg.io/neo4/10.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo4/10_hires.png',
      types: [
        'Fire'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 2',
      evolvesFrom: 'Quilava',
      hp: '80',
      retreatCost: [
        'Colorless'
      ],
      convertedRetreatCost: 1,
      number: '10',
      artist: 'Mitsuhiro Arita',
      rarity: 'Holo Rare',
      series: 'Neo',
      set: 'Neo Destiny',
      setCode: 'neo4',
      attacks: [
        {
          cost: [
            'Colorless'
          ],
          name: 'Claw Swipe',
          text: '',
          damage: '20',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Fire'
          ],
          name: 'Rushing Flames',
          text: 'You may discard any number of Fire Energy cards attached to your Pokémon. Flip a coin for each Fire Energy card discarded in this way. This attack does 40 damage times the number of heads.',
          damage: '40×',
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
      id: 'neo4-11',
      name: 'Dark Tyranitar',
      nationalPokedexNumber: 248,
      imageUrl: 'https://images.pokemontcg.io/neo4/11.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo4/11_hires.png',
      types: [
        'Fighting'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 2',
      evolvesFrom: 'Pupitar',
      hp: '90',
      retreatCost: [
        'Colorless',
        'Colorless',
        'Colorless'
      ],
      convertedRetreatCost: 3,
      number: '11',
      artist: 'Shin-ichi Yoshida',
      rarity: 'Holo Rare',
      series: 'Neo',
      set: 'Neo Destiny',
      setCode: 'neo4',
      attacks: [
        {
          cost: [
            'Fighting'
          ],
          name: 'Mountain Smasher',
          text: 'Flip a number of coins equal to the number of Fighting Energy cards attached to Dark Tyranitar. This attack does 20 damage times the number of heads. Then, for each heads, discard the top card from your opponent\'s deck.',
          damage: '20×',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Fighting',
            'Fighting',
            'Fighting',
            'Colorless'
          ],
          name: 'Fling Away',
          text: 'If your opponent has any Benched Pokémon, this attack does 30 damage instead of 50 and choose 1 of those Benched Pokémon. This attack does 30 damage to that Pokémon. (Don\'t apply Weakness and Resistance for Benched Pokémon.)',
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
      id: 'neo4-12',
      name: 'Light Arcanine',
      nationalPokedexNumber: 59,
      imageUrl: 'https://images.pokemontcg.io/neo4/12.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo4/12_hires.png',
      types: [
        'Fire'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 1',
      evolvesFrom: 'Growlithe',
      ability: {
        name: 'Drive Off',
        text: 'As long as Light Arcanine is your Active Pokémon, once during your turn (before your attack), if your opponent has any Benched Pokémon, he or she chooses 1 of them and switches it with the Defending Pokémon. This power can\'t be used while Light Arcanine is Asleep, Confused, or Paralyzed.',
        type: 'Pokémon Power'
      },
      hp: '100',
      retreatCost: [
        'Colorless',
        'Colorless'
      ],
      convertedRetreatCost: 2,
      number: '12',
      artist: 'Atsuko Nishida',
      rarity: 'Holo Rare',
      series: 'Neo',
      set: 'Neo Destiny',
      setCode: 'neo4',
      attacks: [
        {
          cost: [
            'Fire',
            'Fire',
            'Colorless'
          ],
          name: 'Gentle Flames',
          text: 'If the Defending Pokémon is a Baby Pokémon, this attack does 10 damage instead of 50. If the Defending Pokémon is a Basic Pokémon, this attack does 30 damage instead of 50.',
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
      id: 'neo4-13',
      name: 'Light Azumarill',
      nationalPokedexNumber: 184,
      imageUrl: 'https://images.pokemontcg.io/neo4/13.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo4/13_hires.png',
      types: [
        'Water'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 1',
      evolvesFrom: 'Marill',
      hp: '80',
      retreatCost: [
        'Colorless'
      ],
      convertedRetreatCost: 1,
      number: '13',
      artist: 'Yuka Morii',
      rarity: 'Holo Rare',
      series: 'Neo',
      set: 'Neo Destiny',
      setCode: 'neo4',
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
            'Colorless',
            'Colorless'
          ],
          name: 'Bubble Jump',
          text: 'If you have any Benched Pokémon, flip a coin. If heads, take 2 Energy cards attached to Light Azumarill and attach them to 1 of your Benched Pokémon. Then return Light Azumarill and all cards attached to it to your hand.',
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
      id: 'neo4-14',
      name: 'Light Dragonite',
      nationalPokedexNumber: 149,
      imageUrl: 'https://images.pokemontcg.io/neo4/14.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo4/14_hires.png',
      types: [
        'Colorless'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 2',
      evolvesFrom: 'Dragonair',
      ability: {
        name: 'Miraculous Wind',
        text: 'As long as Light Dragonite is your Active Pokémon, each Special Energy card provides Colorless Energy instead of its usual type and its other effects stop working. This power stops working while Light Dragonite is Asleep, Confused, or Paralyzed.',
        type: 'Pokémon Power'
      },
      hp: '100',
      retreatCost: [
        'Colorless',
        'Colorless'
      ],
      convertedRetreatCost: 2,
      number: '14',
      artist: 'Atsuko Nishida',
      rarity: 'Holo Rare',
      series: 'Neo',
      set: 'Neo Destiny',
      setCode: 'neo4',
      attacks: [
        {
          cost: [
            'Colorless',
            'Colorless',
            'Colorless'
          ],
          name: 'Light Wave',
          text: 'During your opponent\'s next turn, prevent all effects of attacks that are not damage done to this Pokémon.',
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
      id: 'neo4-15',
      name: 'Light Togetic',
      nationalPokedexNumber: 176,
      imageUrl: 'https://images.pokemontcg.io/neo4/15.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo4/15_hires.png',
      types: [
        'Colorless'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 1',
      evolvesFrom: 'Togepi',
      ability: {
        name: 'Gift',
        text: 'When you play Light Togetic from your hand, your opponent may search his or her deck for a Pokémon Tool card, show that card to you, and put it into his or her hand. Either way, you may do the same, and then each player who searched shuffles his or her deck.',
        type: 'Pokémon Power'
      },
      hp: '60',
      number: '15',
      artist: 'Naoyo Kimura',
      rarity: 'Holo Rare',
      series: 'Neo',
      set: 'Neo Destiny',
      setCode: 'neo4',
      attacks: [
        {
          cost: [
            'Colorless',
            'Colorless'
          ],
          name: 'Sweet Kiss',
          text: 'Your opponent may draw a card.',
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
      id: 'neo4-16',
      name: 'Miracle Energy',
      imageUrl: 'https://images.pokemontcg.io/neo4/16.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo4/16_hires.png',
      supertype: 'Energy',
      subtype: 'Special',
      number: '16',
      artist: 'Milky Isobe',
      rarity: 'Holo Rare',
      series: 'Neo',
      set: 'Neo Destiny',
      setCode: 'neo4',
      text: [
        'You can\'t have more than 1 Miracle Energy card in your deck. Attach Miracle Energy to one of your Shining or Light Pokémon. At the end of your turn, discard Miracle Energy. While in play, Miracle Energy counts as every type of Energy but provides only 2 Energy at a time.'
      ]
    },
    {
      id: 'neo4-17',
      name: 'Dark Ariados',
      nationalPokedexNumber: 168,
      imageUrl: 'https://images.pokemontcg.io/neo4/17.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo4/17_hires.png',
      types: [
        'Grass'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 1',
      evolvesFrom: 'Spinarak',
      hp: '60',
      retreatCost: [
        'Colorless',
        'Colorless'
      ],
      convertedRetreatCost: 2,
      number: '17',
      artist: 'Toshinao Aoki',
      rarity: 'Rare',
      series: 'Neo',
      set: 'Neo Destiny',
      setCode: 'neo4',
      attacks: [
        {
          cost: [
            'Grass'
          ],
          name: 'Entangle',
          text: 'If your opponent has any Benched Pokémon, choose 1 of them and switch it with the Defending Pokémon, then flip a coin. If heads, the new Defending Pokémon is now Paralyzed.',
          damage: '',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Grass',
            'Grass',
            'Grass'
          ],
          name: 'Poison Bind',
          text: 'The Defending Pokémon is now Poisoned. Flip a coin. If heads, the Defending Pokémon can\'t retreat until the end of your opponent\'s next turn and if the effect of an attack, Pokémon Power, or Trainer card would change that player\'s Active Pokémon, that part of the effect does nothing.',
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
      id: 'neo4-18',
      name: 'Dark Magcargo',
      nationalPokedexNumber: 219,
      imageUrl: 'https://images.pokemontcg.io/neo4/18.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo4/18_hires.png',
      types: [
        'Fire'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 1',
      evolvesFrom: 'Slugma',
      ability: {
        name: 'Hot Plate',
        text: 'As long as Dark Magcargo is your Active Pokémon, whenever a player puts a Baby Pokémon or Basic Pokémon onto his or her Bench from his or her hand, this power does 10 damage to that Pokémon. (Don\'t apply Weakness and Resistance.) This power stops working if Dark Magcargo is Asleep, Confused, or Paralyzed.',
        type: 'Pokémon Power'
      },
      hp: '60',
      retreatCost: [
        'Colorless',
        'Colorless',
        'Colorless'
      ],
      convertedRetreatCost: 3,
      number: '18',
      artist: 'Toshinao Aoki',
      rarity: 'Rare',
      series: 'Neo',
      set: 'Neo Destiny',
      setCode: 'neo4',
      attacks: [
        {
          cost: [
            'Fire',
            'Fire'
          ],
          name: 'Ball of Flame',
          text: 'You may discard a Fire Energy card attached to Dark Magcargo when you use this attack. If you do and if your opponent has any Benched Pokémon, choose 1 of them and this attack does 20 damage to it. (Don\'t apply Weakness and Resistance for Benched Pokémon.)',
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
      id: 'neo4-19',
      name: 'Dark Omastar',
      nationalPokedexNumber: 139,
      imageUrl: 'https://images.pokemontcg.io/neo4/19.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo4/19_hires.png',
      types: [
        'Water'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 2',
      evolvesFrom: 'Omanyte',
      hp: '70',
      retreatCost: [
        'Colorless',
        'Colorless'
      ],
      convertedRetreatCost: 2,
      number: '19',
      artist: 'Tomokazu Komiya',
      rarity: 'Rare',
      series: 'Neo',
      set: 'Neo Destiny',
      setCode: 'neo4',
      attacks: [
        {
          cost: [
            'Water'
          ],
          name: 'Prehistoric Water',
          text: 'If your opponent has any evolved Pokémon in play, choose 1 of them and flip a coin. If heads, your opponent takes the highest Stage Evolution card on that Pokémon and shuffles it into his or her deck.',
          damage: '',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Water',
            'Colorless'
          ],
          name: 'Dark Tentacle',
          text: 'During your opponent\'s next turn, the Defending Pokémon can\'t evolve except from effects of attacks or Pokémon Powers. (Benching that Pokémon ends this effect.)',
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
      id: 'neo4-20',
      name: 'Dark Slowking',
      nationalPokedexNumber: 199,
      imageUrl: 'https://images.pokemontcg.io/neo4/20.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo4/20_hires.png',
      types: [
        'Psychic'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 1',
      evolvesFrom: 'Slowpoke',
      ability: {
        name: 'Cunning',
        text: 'Once during your turn (before your attack), you may flip a coin. If heads, look at the top card of your opponent\'s deck. Then, you may have your opponent shuffle his or her deck. This power can\'t be used if Dark Slowking is Asleep, Confused, or Paralyzed.',
        type: 'Pokémon Power'
      },
      hp: '60',
      retreatCost: [
        'Colorless',
        'Colorless'
      ],
      convertedRetreatCost: 2,
      number: '20',
      artist: 'Tomokazu Komiya',
      rarity: 'Rare',
      series: 'Neo',
      set: 'Neo Destiny',
      setCode: 'neo4',
      attacks: [
        {
          cost: [
            'Psychic',
            'Psychic'
          ],
          name: 'Mind Shock',
          text: 'Don\'t apply Weakness or Resistance for this attack.',
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
      id: 'neo4-21',
      name: 'Dark Ursaring',
      nationalPokedexNumber: 217,
      imageUrl: 'https://images.pokemontcg.io/neo4/21.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo4/21_hires.png',
      types: [
        'Colorless'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 1',
      evolvesFrom: 'Teddiursa',
      hp: '60',
      retreatCost: [
        'Colorless',
        'Colorless'
      ],
      convertedRetreatCost: 2,
      number: '21',
      artist: 'Mitsuhiro Arita',
      rarity: 'Rare',
      series: 'Neo',
      set: 'Neo Destiny',
      setCode: 'neo4',
      attacks: [
        {
          cost: [
            'Colorless'
          ],
          name: 'Provoke',
          text: 'Look at your opponent\'s hand. If he or she has any Baby Pokémon and/or Basic Pokémon there, you may put any number of them onto your opponent\'s Bench (as long as there\'s room). Then, your opponent looks at your hand. If you have any Baby Pokémon and/or Basic Pokémon there, your opponent may put any number of them onto your Bench (as long as there\'s room).',
          damage: '',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Colorless',
            'Colorless'
          ],
          name: 'Battle Frenzy',
          text: 'For each Pokémon in play (yours and your opponent\'s), flip a coin. For each heads, this attack does 20 damage to that Pokémon. Don\'t apply Weakness and Resistance for this attack.',
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
      id: 'neo4-22',
      name: 'Light Dragonair',
      nationalPokedexNumber: 148,
      imageUrl: 'https://images.pokemontcg.io/neo4/22.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo4/22_hires.png',
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
      number: '22',
      artist: 'Atsuko Nishida',
      rarity: 'Rare',
      series: 'Neo',
      set: 'Neo Destiny',
      setCode: 'neo4',
      attacks: [
        {
          cost: [
            'Colorless',
            'Colorless'
          ],
          name: 'Healing Light',
          text: 'Remove 1 damage counter from each of your Pokémon that has any damage counters on it.',
          damage: '',
          convertedEnergyCost: 2
        },
        {
          cost: [
            'Colorless',
            'Colorless',
            'Colorless'
          ],
          name: 'Protective Wave',
          text: 'Flip a coin. If heads, during your opponent\'s next turn, prevent all effects of attacks, including damage, done to Light Dragonair.',
          damage: '',
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
      id: 'neo4-23',
      name: 'Light Lanturn',
      nationalPokedexNumber: 171,
      imageUrl: 'https://images.pokemontcg.io/neo4/23.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo4/23_hires.png',
      types: [
        'Lightning'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 1',
      evolvesFrom: 'Chinchou',
      hp: '80',
      retreatCost: [
        'Colorless',
        'Colorless'
      ],
      convertedRetreatCost: 2,
      number: '23',
      artist: 'Miki Tanaka',
      rarity: 'Rare',
      series: 'Neo',
      set: 'Neo Destiny',
      setCode: 'neo4',
      attacks: [
        {
          cost: [
            'Lightning'
          ],
          name: 'Searchlight',
          text: 'Flip a coin. If heads, each player may choose a card from his or her discard pile and put it into his or her hand.',
          damage: '',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Lightning',
            'Lightning'
          ],
          name: 'Spark',
          text: 'If your opponent has any Benched Pokémon, choose 1 of them and this attack does 10 damage to it. (Don\'t apply Weakness and Resistance for Benched Pokémon.)',
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
      id: 'neo4-24',
      name: 'Light Ledian',
      nationalPokedexNumber: 166,
      imageUrl: 'https://images.pokemontcg.io/neo4/24.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo4/24_hires.png',
      types: [
        'Grass'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 1',
      evolvesFrom: 'Ledyba',
      hp: '70',
      number: '24',
      artist: 'Tomokazu Komiya',
      rarity: 'Rare',
      series: 'Neo',
      set: 'Neo Destiny',
      setCode: 'neo4',
      attacks: [
        {
          cost: [
            'Grass'
          ],
          name: 'Flash Touch',
          text: 'If you have any Benched Pokémon, switch 1 of them with Light Ledian. As long as that Pokémon is your Active Pokémon, it can\'t become Asleep, Confused, Paralyzed, or Poisoned. (All other effects of attacks, Pokémon Powers, and Trainer cards still happen.)',
          damage: '',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Grass',
            'Colorless',
            'Colorless'
          ],
          name: 'Comet Punch',
          text: 'Flip 4 coins. This attack does 20 damage times the number of heads.',
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
          type: 'Fire',
          value: '×2'
        }
      ]
    },
    {
      id: 'neo4-25',
      name: 'Light Machamp',
      nationalPokedexNumber: 68,
      imageUrl: 'https://images.pokemontcg.io/neo4/25.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo4/25_hires.png',
      types: [
        'Fighting'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 2',
      evolvesFrom: 'Machoke',
      hp: '100',
      retreatCost: [
        'Colorless',
        'Colorless'
      ],
      convertedRetreatCost: 2,
      number: '25',
      artist: 'Miki Tanaka',
      rarity: 'Rare',
      series: 'Neo',
      set: 'Neo Destiny',
      setCode: 'neo4',
      attacks: [
        {
          cost: [
            'Fighting',
            'Fighting',
            'Fighting'
          ],
          name: 'Beatdown',
          text: 'If the Defending Pokémon has Dark in its name or is a Pokémon, flip a coin. If heads, this attack does 100 damage instead of 50.',
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
      id: 'neo4-26',
      name: 'Light Piloswine',
      nationalPokedexNumber: 221,
      imageUrl: 'https://images.pokemontcg.io/neo4/26.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo4/26_hires.png',
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
      number: '26',
      artist: 'Yukiko Baba',
      rarity: 'Rare',
      series: 'Neo',
      set: 'Neo Destiny',
      setCode: 'neo4',
      attacks: [
        {
          cost: [
            'Colorless',
            'Colorless',
            'Colorless'
          ],
          name: 'Knock Over',
          text: 'If there is a Stadium card in play, you may discard it.',
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
      id: 'neo4-27',
      name: 'Unown [G]',
      nationalPokedexNumber: 201,
      imageUrl: 'https://images.pokemontcg.io/neo4/27.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo4/27_hires.png',
      types: [
        'Psychic'
      ],
      supertype: 'Pokémon',
      subtype: 'Basic',
      ability: {
        name: '[Give]',
        text: 'Once during your turn (before your attack), if you have Unown G, Unown I, Unown V, and Unown E on your Bench, you may flip a coin. If heads, search your deck for a basic Energy card and attach it to 1 of your Pokémon. Shuffle your deck afterward.',
        type: 'Pokémon Power'
      },
      hp: '40',
      retreatCost: [
        'Colorless'
      ],
      convertedRetreatCost: 1,
      number: '27',
      artist: 'CR CG gangs',
      rarity: 'Rare',
      series: 'Neo',
      set: 'Neo Destiny',
      setCode: 'neo4',
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
      id: 'neo4-28',
      name: 'Unown [H]',
      nationalPokedexNumber: 201,
      imageUrl: 'https://images.pokemontcg.io/neo4/28.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo4/28_hires.png',
      types: [
        'Psychic'
      ],
      supertype: 'Pokémon',
      subtype: 'Basic',
      ability: {
        name: '[Help]',
        text: 'Once during your turn (before your attack), if you have Unown H, Unown E, Unown L, and Unown P on your Bench, you may shuffle your hand into your deck, then draw a new hand of the same number of cards.',
        type: 'Pokémon Power'
      },
      hp: '40',
      retreatCost: [
        'Colorless'
      ],
      convertedRetreatCost: 1,
      number: '28',
      artist: 'CR CG gangs',
      rarity: 'Rare',
      series: 'Neo',
      set: 'Neo Destiny',
      setCode: 'neo4',
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
      id: 'neo4-29',
      name: 'Unown [W]',
      nationalPokedexNumber: 201,
      imageUrl: 'https://images.pokemontcg.io/neo4/29.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo4/29_hires.png',
      types: [
        'Psychic'
      ],
      supertype: 'Pokémon',
      subtype: 'Basic',
      ability: {
        name: '[Want]',
        text: 'Once during your turn (before your attack), if you have Unown W, Unown A, Unown N, and Unown T on your Bench, you may flip a coin. If heads, put a Trainer card from your discard pile into your hand.',
        type: 'Pokémon Power'
      },
      hp: '40',
      retreatCost: [
        'Colorless'
      ],
      convertedRetreatCost: 1,
      number: '29',
      artist: 'CR CG gangs',
      rarity: 'Rare',
      series: 'Neo',
      set: 'Neo Destiny',
      setCode: 'neo4',
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
      id: 'neo4-30',
      name: 'Unown [X]',
      nationalPokedexNumber: 201,
      imageUrl: 'https://images.pokemontcg.io/neo4/30.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo4/30_hires.png',
      types: [
        'Psychic'
      ],
      supertype: 'Pokémon',
      subtype: 'Basic',
      ability: {
        name: '[XXXXX]',
        text: 'Whenever 1 of your Pokémon with Unown in its name uses its Hidden Power attack, flip a coin until you get tails. That attack does 10 more damage for each heads. If you have more than 1 Unown X in play, use only 1 [XXXXX] per turn.',
        type: 'Pokémon Power'
      },
      hp: '40',
      retreatCost: [
        'Colorless'
      ],
      convertedRetreatCost: 1,
      number: '30',
      artist: 'CR CG gangs',
      rarity: 'Rare',
      series: 'Neo',
      set: 'Neo Destiny',
      setCode: 'neo4',
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
      id: 'neo4-31',
      name: 'Chansey',
      nationalPokedexNumber: 113,
      imageUrl: 'https://images.pokemontcg.io/neo4/31.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo4/31_hires.png',
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
      number: '31',
      artist: 'Yuka Morii',
      rarity: 'Uncommon',
      series: 'Neo',
      set: 'Neo Destiny',
      setCode: 'neo4',
      attacks: [
        {
          cost: [
            'Colorless',
            'Colorless'
          ],
          name: 'Double Slap',
          text: 'Flip 2 coins. This attack does 20 damage times the number of heads.',
          damage: '20×',
          convertedEnergyCost: 2
        },
        {
          cost: [
            'Colorless',
            'Colorless',
            'Colorless'
          ],
          name: 'Egg Toss',
          text: 'Flip 2 coins. If either of them is tails, this attack does nothing.',
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
      id: 'neo4-32',
      name: 'Dark Croconaw',
      nationalPokedexNumber: 159,
      imageUrl: 'https://images.pokemontcg.io/neo4/32.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo4/32_hires.png',
      types: [
        'Water'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 1',
      evolvesFrom: 'Totodile',
      hp: '60',
      retreatCost: [
        'Colorless',
        'Colorless'
      ],
      convertedRetreatCost: 2,
      number: '32',
      artist: 'Shin-ichi Yoshida',
      rarity: 'Uncommon',
      series: 'Neo',
      set: 'Neo Destiny',
      setCode: 'neo4',
      attacks: [
        {
          cost: [
            'Water',
            'Water'
          ],
          name: 'Clamping Jaw',
          text: 'The Defending Pokémon can\'t retreat during your opponent\'s next turn. If the Defending Pokémon tries to attack during your opponent\'s next turn, your opponent flips a coin. If tails, that attack does nothing. (Benching either Pokémon ends this effect.)',
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
      id: 'neo4-33',
      name: 'Dark Exeggutor',
      nationalPokedexNumber: 103,
      imageUrl: 'https://images.pokemontcg.io/neo4/33.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo4/33_hires.png',
      types: [
        'Psychic'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 1',
      evolvesFrom: 'Exeggcute',
      hp: '60',
      retreatCost: [
        'Colorless',
        'Colorless'
      ],
      convertedRetreatCost: 2,
      number: '33',
      artist: 'Toshinao Aoki',
      rarity: 'Uncommon',
      series: 'Neo',
      set: 'Neo Destiny',
      setCode: 'neo4',
      attacks: [
        {
          cost: [
            'Colorless'
          ],
          name: 'Triple Headbutt',
          text: 'Flip 3 coins. This attack does 10 damage times the number of heads.',
          damage: '10×',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Psychic',
            'Colorless'
          ],
          name: 'MAX Burst',
          text: 'Flip a number of coins equal to the number of Energy cards attached to your opponent\'s Pokémon. This attack does 20 damage times the number of heads.',
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
      id: 'neo4-34',
      name: 'Dark Flaaffy',
      nationalPokedexNumber: 180,
      imageUrl: 'https://images.pokemontcg.io/neo4/34.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo4/34_hires.png',
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
      artist: 'Kagemaru Himeno',
      rarity: 'Uncommon',
      series: 'Neo',
      set: 'Neo Destiny',
      setCode: 'neo4',
      attacks: [
        {
          cost: [
            'Lightning'
          ],
          name: 'High Voltage',
          text: 'Flip a coin. If heads, your opponent can\'t play Trainer cards during his or her next turn.',
          damage: '10',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Lightning',
            'Colorless'
          ],
          name: 'Stun Wave',
          text: 'If the Defending Pokémon has a Pokémon Power, that power stops working until the end of your next turn.',
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
      id: 'neo4-35',
      name: 'Dark Forretress',
      nationalPokedexNumber: 205,
      imageUrl: 'https://images.pokemontcg.io/neo4/35.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo4/35_hires.png',
      types: [
        'Grass'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 1',
      evolvesFrom: 'Pineco',
      hp: '60',
      retreatCost: [
        'Colorless',
        'Colorless'
      ],
      convertedRetreatCost: 2,
      number: '35',
      artist: 'Mitsuhiro Arita',
      rarity: 'Uncommon',
      series: 'Neo',
      set: 'Neo Destiny',
      setCode: 'neo4',
      attacks: [
        {
          cost: [
            'Colorless'
          ],
          name: 'Armor Up',
          text: 'Until the end of your next turn, if Dark Forretress would be Knocked Out by damage from an attack, flip a coin. If heads, Dark Forretress is not Knocked Out and its remaining HP become 10 instead.',
          damage: '',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Grass',
            'Grass'
          ],
          name: 'Explosion',
          text: 'Dark Forretress does 60 damage to itself.',
          damage: '60',
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
      id: 'neo4-36',
      name: 'Dark Haunter',
      nationalPokedexNumber: 93,
      imageUrl: 'https://images.pokemontcg.io/neo4/36.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo4/36_hires.png',
      types: [
        'Psychic'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 1',
      evolvesFrom: 'Gastly',
      hp: '50',
      number: '36',
      artist: 'Aya Kusube',
      rarity: 'Uncommon',
      series: 'Neo',
      set: 'Neo Destiny',
      setCode: 'neo4',
      attacks: [
        {
          cost: [
            'Psychic'
          ],
          name: 'Call Back',
          text: 'Put a Baby Pokémon or Basic Pokémon card from your opponent\'s discard pile onto his or her Bench. Put 1 damage counter on that Pokémon. (You can\'t use this attack if your Bench is full.)',
          damage: '',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Psychic',
            'Psychic'
          ],
          name: 'Surround',
          text: 'Flip a coin. If heads, the Defending Pokémon is now Asleep. If tails, the Defending Pokémon can\'t retreat during your opponent\'s next turn.',
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
      id: 'neo4-37',
      name: 'Dark Omanyte',
      nationalPokedexNumber: 138,
      imageUrl: 'https://images.pokemontcg.io/neo4/37.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo4/37_hires.png',
      types: [
        'Water'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 1',
      hp: '40',
      retreatCost: [
        'Colorless'
      ],
      convertedRetreatCost: 1,
      number: '37',
      artist: 'Tomokazu Komiya',
      rarity: 'Uncommon',
      series: 'Neo',
      set: 'Neo Destiny',
      setCode: 'neo4',
      attacks: [
        {
          cost: [
            'Water'
          ],
          name: 'Water Cannon',
          text: 'Choose 1 of your opponent\'s Pokémon. This attack does 10 damage for each Energy card attached to Dark Omanyte. Don\'t apply Weakness and Resistance. You can\'t do more than 30 damage in this way.',
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
      id: 'neo4-38',
      name: 'Dark Pupitar',
      nationalPokedexNumber: 247,
      imageUrl: 'https://images.pokemontcg.io/neo4/38.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo4/38_hires.png',
      types: [
        'Fighting'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 1',
      evolvesFrom: 'Larvitar',
      hp: '60',
      retreatCost: [
        'Colorless'
      ],
      convertedRetreatCost: 1,
      number: '38',
      artist: 'Mitsuhiro Arita',
      rarity: 'Uncommon',
      series: 'Neo',
      set: 'Neo Destiny',
      setCode: 'neo4',
      attacks: [
        {
          cost: [
            'Fighting',
            'Fighting'
          ],
          name: 'Rock Tackle',
          text: 'Dark Pupitar does 10 damage to itself. Dark Pupitar can\'t use this attack during your next turn.',
          damage: '40',
          convertedEnergyCost: 2
        },
        {
          cost: [
            'Colorless',
            'Colorless',
            'Colorless'
          ],
          name: 'Explosive Evolution',
          text: 'Flip a coin. If heads, this attack does 10 damage to each of your opponent\'s Pokémon. Don\'t apply Weakness and Resistance. Then, search your deck for an Evolution card named Dark Tyranitar and put it on Dark Pupitar. (This counts as evolving Dark Pupitar.) Shuffle your deck afterward.',
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
      id: 'neo4-39',
      name: 'Dark Quilava',
      nationalPokedexNumber: 156,
      imageUrl: 'https://images.pokemontcg.io/neo4/39.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo4/39_hires.png',
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
      number: '39',
      artist: 'Mitsuhiro Arita',
      rarity: 'Uncommon',
      series: 'Neo',
      set: 'Neo Destiny',
      setCode: 'neo4',
      attacks: [
        {
          cost: [
            'Fire'
          ],
          name: 'Incinerate',
          text: 'Show the top card of your opponent\'s deck to all players. If it\'s a Trainer card, discard it.',
          damage: '',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Fire',
            'Fire'
          ],
          name: 'Rushing Magma',
          text: 'Discard the top 5 cards of your deck. (If there are fewer than 5 cards in your deck, discard all of them.) This attack does 20 damage for each Energy card you discarded in this way.',
          damage: '',
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
      id: 'neo4-40',
      name: 'Dark Wigglytuff',
      nationalPokedexNumber: 40,
      imageUrl: 'https://images.pokemontcg.io/neo4/40.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo4/40_hires.png',
      types: [
        'Colorless'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 1',
      evolvesFrom: 'Jigglypuff',
      hp: '60',
      retreatCost: [
        'Colorless',
        'Colorless'
      ],
      convertedRetreatCost: 2,
      number: '40',
      artist: 'Miki Tanaka',
      rarity: 'Uncommon',
      series: 'Neo',
      set: 'Neo Destiny',
      setCode: 'neo4',
      attacks: [
        {
          cost: [
            'Colorless',
            'Colorless'
          ],
          name: 'Dark Song',
          text: 'Flip a coin. If heads, the Defending Pokémon is now Asleep. If tails, the Defending Pokémon is now Confused.',
          damage: '',
          convertedEnergyCost: 2
        },
        {
          cost: [
            'Colorless',
            'Colorless',
            'Colorless'
          ],
          name: 'Slap Awake',
          text: 'If the Defending Pokémon is Asleep or Confused, this attack does 20 damage plus 20 more damage. Then, the Defending Pokémon is no longer Asleep or Confused.',
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
      id: 'neo4-41',
      name: 'Heracross',
      nationalPokedexNumber: 214,
      imageUrl: 'https://images.pokemontcg.io/neo4/41.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo4/41_hires.png',
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
      number: '41',
      artist: 'K. Hoshiba, CR CG gangs',
      rarity: 'Uncommon',
      series: 'Neo',
      set: 'Neo Destiny',
      setCode: 'neo4',
      attacks: [
        {
          cost: [
            'Grass',
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
            'Grass',
            'Grass'
          ],
          name: 'Charging Horn',
          text: 'Flip a coin. If heads, this attack does 30 damage plus 30 more damage. If tails, this attack does 30 damage.',
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
      id: 'neo4-42',
      name: 'Hitmonlee',
      nationalPokedexNumber: 106,
      imageUrl: 'https://images.pokemontcg.io/neo4/42.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo4/42_hires.png',
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
      number: '42',
      artist: 'Yukiko Baba',
      rarity: 'Uncommon',
      series: 'Neo',
      set: 'Neo Destiny',
      setCode: 'neo4',
      attacks: [
        {
          cost: [
            'Fighting',
            'Fighting'
          ],
          name: 'One-Two Kick',
          text: 'Flip 2 coins. This attack does 20 damage times the number of heads.',
          damage: '20×',
          convertedEnergyCost: 2
        },
        {
          cost: [
            'Fighting',
            'Fighting',
            'Fighting'
          ],
          name: 'Heel Drop',
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
      id: 'neo4-43',
      name: 'Houndour',
      nationalPokedexNumber: 228,
      imageUrl: 'https://images.pokemontcg.io/neo4/43.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo4/43_hires.png',
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
      number: '43',
      artist: 'Yukiko Baba',
      rarity: 'Uncommon',
      series: 'Neo',
      set: 'Neo Destiny',
      setCode: 'neo4',
      attacks: [
        {
          cost: [
            'Darkness'
          ],
          name: 'Corner',
          text: 'The Defending Pokémon can\'t retreat during your opponent\'s next turn.',
          damage: '',
          convertedEnergyCost: 1
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
      resistances: [
        {
          type: 'Psychic',
          value: '-30'
        }
      ]
    },
    {
      id: 'neo4-44',
      name: 'Jigglypuff',
      nationalPokedexNumber: 39,
      imageUrl: 'https://images.pokemontcg.io/neo4/44.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo4/44_hires.png',
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
      number: '44',
      artist: 'Yuka Morii',
      rarity: 'Uncommon',
      series: 'Neo',
      set: 'Neo Destiny',
      setCode: 'neo4',
      attacks: [
        {
          cost: [
            'Colorless',
            'Colorless'
          ],
          name: 'Expand',
          text: 'All damage done to Jigglypuff during your opponent\'s next turn is reduced by 10 (after applying Weakness and Resistance).',
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
      id: 'neo4-45',
      name: 'Light Dewgong',
      nationalPokedexNumber: 87,
      imageUrl: 'https://images.pokemontcg.io/neo4/45.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo4/45_hires.png',
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
      number: '45',
      artist: 'Masako Yamashita',
      rarity: 'Uncommon',
      series: 'Neo',
      set: 'Neo Destiny',
      setCode: 'neo4',
      attacks: [
        {
          cost: [
            'Water',
            'Water'
          ],
          name: 'Freezing Breath',
          text: 'Flip a coin. If heads, the Defending Pokémon is now Paralyzed. If tails, the Defending Pokémon is now Asleep.',
          damage: '10',
          convertedEnergyCost: 2
        },
        {
          cost: [
            'Water',
            'Water',
            'Water'
          ],
          name: 'Ice Pillar',
          text: 'Until the end of your opponent\'s next turn, as long as Light Dewgong is your Active Pokémon, prevent all damage done by attacks to your Benched Pokémon. (Any other effects of attacks still happen.)',
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
      id: 'neo4-46',
      name: 'Light Flareon',
      nationalPokedexNumber: 136,
      imageUrl: 'https://images.pokemontcg.io/neo4/46.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo4/46_hires.png',
      types: [
        'Fire'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 1',
      evolvesFrom: 'Eevee',
      hp: '80',
      retreatCost: [
        'Colorless'
      ],
      convertedRetreatCost: 1,
      number: '46',
      artist: 'Atsuko Nishida',
      rarity: 'Uncommon',
      series: 'Neo',
      set: 'Neo Destiny',
      setCode: 'neo4',
      attacks: [
        {
          cost: [
            'Fire'
          ],
          name: 'Warm Up',
          text: 'If you have any benched Pokémon, search your deck for a Fire Energy card and attach it to 1 of them. Then shuffle your deck.',
          damage: '',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Fire',
            'Fire',
            'Colorless'
          ],
          name: 'Burning Flame',
          text: 'Flip 2 coins. For each heads, discard a Fire Energy card attached to Light Flareon or this attack does nothing. This attack does 30 damage plus 20 damage for each heads.',
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
      id: 'neo4-47',
      name: 'Light Golduck',
      nationalPokedexNumber: 55,
      imageUrl: 'https://images.pokemontcg.io/neo4/47.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo4/47_hires.png',
      types: [
        'Water'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 1',
      evolvesFrom: 'Psyduck',
      hp: '80',
      retreatCost: [
        'Colorless'
      ],
      convertedRetreatCost: 1,
      number: '47',
      artist: 'Atsuko Nishida',
      rarity: 'Uncommon',
      series: 'Neo',
      set: 'Neo Destiny',
      setCode: 'neo4',
      attacks: [
        {
          cost: [
            'Water'
          ],
          name: 'Flipper Stroke',
          text: 'Your opponent looks at the top 3 cards of his or her deck. If any of them are basic Energy cards, he or she may show any number of them to you and put them into his or her hand. You do the same. Either way, each player shuffles his or her deck.',
          damage: '',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Psychic',
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
      id: 'neo4-48',
      name: 'Light Jolteon',
      nationalPokedexNumber: 135,
      imageUrl: 'https://images.pokemontcg.io/neo4/48.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo4/48_hires.png',
      types: [
        'Lightning'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 1',
      evolvesFrom: 'Eevee',
      hp: '70',
      number: '48',
      artist: 'Naoyo Kimura',
      rarity: 'Uncommon',
      series: 'Neo',
      set: 'Neo Destiny',
      setCode: 'neo4',
      attacks: [
        {
          cost: [
            'Lightning'
          ],
          name: 'Pulse Guard',
          text: 'During your opponent\'s next turn, whenever 30 or more damage is done to Light Jolteon (after applying Weakness and Resistance), prevent that damage. (Any other effects of attacks still happen.)',
          damage: '',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Lightning',
            'Lightning',
            'Colorless'
          ],
          name: 'Thunder Needle',
          text: 'Flip 3 coins. This attack does 20 damage times the number of heads. If you get 2 or more heads, the Defending Pokémon is now Paralyzed.',
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
      id: 'neo4-49',
      name: 'Light Machoke',
      nationalPokedexNumber: 67,
      imageUrl: 'https://images.pokemontcg.io/neo4/49.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo4/49_hires.png',
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
      number: '49',
      artist: 'Miki Tanaka',
      rarity: 'Uncommon',
      series: 'Neo',
      set: 'Neo Destiny',
      setCode: 'neo4',
      attacks: [
        {
          cost: [
            'Fighting'
          ],
          name: 'Return Home',
          text: 'If you have any Benched Pokémon, shuffle 1 of them and all cards attached to it into your deck.',
          damage: '',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Fighting',
            'Fighting'
          ],
          name: 'Gentle Kick',
          text: 'If the Defending Pokémon has no damage counters on it, this attack does 40 damage. If it has any, this attack does 20 damage.',
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
      id: 'neo4-50',
      name: 'Light Ninetales',
      nationalPokedexNumber: 38,
      imageUrl: 'https://images.pokemontcg.io/neo4/50.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo4/50_hires.png',
      types: [
        'Fire'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 1',
      evolvesFrom: 'Vulpix',
      hp: '90',
      retreatCost: [
        'Colorless'
      ],
      convertedRetreatCost: 1,
      number: '50',
      artist: 'Masako Yamashita',
      rarity: 'Uncommon',
      series: 'Neo',
      set: 'Neo Destiny',
      setCode: 'neo4',
      attacks: [
        {
          cost: [
            'Fire'
          ],
          name: 'Guiding Flame',
          text: 'Put a Baby Pokémon or a Basic Pokémon card from your discard pile onto your Bench. (You can\'t use this attack if your Bench is full.)',
          damage: '',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Fire',
            'Fire',
            'Fire'
          ],
          name: 'Fire Blast',
          text: 'Discard a Fire Energy card attached to Light Ninetales in order to use this attack.',
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
      id: 'neo4-51',
      name: 'Light Slowbro',
      nationalPokedexNumber: 80,
      imageUrl: 'https://images.pokemontcg.io/neo4/51.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo4/51_hires.png',
      types: [
        'Psychic'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 1',
      evolvesFrom: 'Slowpoke',
      hp: '80',
      retreatCost: [
        'Colorless',
        'Colorless'
      ],
      convertedRetreatCost: 2,
      number: '51',
      artist: 'Tomokazu Komiya',
      rarity: 'Uncommon',
      series: 'Neo',
      set: 'Neo Destiny',
      setCode: 'neo4',
      attacks: [
        {
          cost: [
            'Psychic'
          ],
          name: 'Fish Out',
          text: 'Your opponent may choose up to 3 Baby Pokémon, Basic Pokémon, and/or Evolution cards from his or her discard pile and shuffle them into his or her deck. Either way, you may do the same.',
          damage: '',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Water',
            'Colorless'
          ],
          name: 'Slash About',
          text: 'If there are more Energy cards attached to the Defending Pokémon than to Light Slowbro, this attack does 20 damage plus 20 more damage. If not, this attack does 20 damage.',
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
      id: 'neo4-52',
      name: 'Light Vaporeon',
      nationalPokedexNumber: 134,
      imageUrl: 'https://images.pokemontcg.io/neo4/52.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo4/52_hires.png',
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
      number: '52',
      artist: 'Kagemaru Himeno',
      rarity: 'Uncommon',
      series: 'Neo',
      set: 'Neo Destiny',
      setCode: 'neo4',
      attacks: [
        {
          cost: [
            'Water'
          ],
          name: 'Wash Away',
          text: 'If you have any Benched Pokémon, flip a coin. If heads, remove all damage counters from 1 of your Benched Pokémon and discard all Energy cards attached to it.',
          damage: '',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Water',
            'Water',
            'Colorless'
          ],
          name: 'Hypno Shower',
          text: 'The Defending Pokémon is now Asleep. Remove 1 damage counter from each Benched Pokémon (yours and your opponent\'s) with any damage counters on it.',
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
      id: 'neo4-53',
      name: 'Light Venomoth',
      nationalPokedexNumber: 49,
      imageUrl: 'https://images.pokemontcg.io/neo4/53.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo4/53_hires.png',
      types: [
        'Grass'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 1',
      evolvesFrom: 'Venonat',
      hp: '80',
      number: '53',
      artist: 'Masako Yamashita',
      rarity: 'Uncommon',
      series: 'Neo',
      set: 'Neo Destiny',
      setCode: 'neo4',
      attacks: [
        {
          cost: [
            'Grass'
          ],
          name: 'Mysterious Wing',
          text: 'Your opponent may choose a Baby Pokémon, Basic Pokémon, or Evolution card from his or her discard pile and put it into his or her hand. Either way, you may do the same.',
          damage: '',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Psychic',
            'Colorless'
          ],
          name: 'Synchronize',
          text: 'If Light Venomoth and the Defending Pokémon have a different number of Energy cards attached to them, this attack does nothing.',
          damage: '40',
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
      id: 'neo4-54',
      name: 'Light Wigglytuff',
      nationalPokedexNumber: 40,
      imageUrl: 'https://images.pokemontcg.io/neo4/54.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo4/54_hires.png',
      types: [
        'Colorless'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 1',
      evolvesFrom: 'Jigglypuff',
      hp: '80',
      retreatCost: [
        'Colorless'
      ],
      convertedRetreatCost: 1,
      number: '54',
      artist: 'Naoyo Kimura',
      rarity: 'Uncommon',
      series: 'Neo',
      set: 'Neo Destiny',
      setCode: 'neo4',
      attacks: [
        {
          cost: [
            'Colorless'
          ],
          name: 'Evolution Song',
          text: 'Your opponent may choose 1 of his or her Pokémon and search his or her deck for a card that evolves from that Pokémon. Your opponent attaches that card to that Pokémon. This counts as evolving that Pokémon. Either way, you may do the same, and then each player who searched shuffles his or her deck.',
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
      id: 'neo4-55',
      name: 'Scyther',
      nationalPokedexNumber: 123,
      imageUrl: 'https://images.pokemontcg.io/neo4/55.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo4/55_hires.png',
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
      number: '55',
      artist: 'Shin-ichi Yoshida',
      rarity: 'Uncommon',
      series: 'Neo',
      set: 'Neo Destiny',
      setCode: 'neo4',
      attacks: [
        {
          cost: [
            'Grass',
            'Colorless'
          ],
          name: 'Agility',
          text: 'Flip a coin. If heads, during your opponent\'s next turn, prevent all effects of attacks, including damage, done to Scyther.',
          damage: '10',
          convertedEnergyCost: 2
        },
        {
          cost: [
            'Grass',
            'Grass',
            'Grass'
          ],
          name: 'Sharp Sickle',
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
      id: 'neo4-56',
      name: 'Togepi',
      nationalPokedexNumber: 175,
      imageUrl: 'https://images.pokemontcg.io/neo4/56.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo4/56_hires.png',
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
      number: '56',
      artist: 'Yuka Morii',
      rarity: 'Uncommon',
      series: 'Neo',
      set: 'Neo Destiny',
      setCode: 'neo4',
      attacks: [
        {
          cost: [
            'Colorless'
          ],
          name: 'Charm',
          text: 'If the Defending Pokémon attacks during your opponent\'s next turn, any damage it does is reduced by 10 (before applying Weakness and Resistance).',
          damage: '',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Colorless',
            'Colorless'
          ],
          name: 'Spike Ball Tackle',
          text: 'Togepi does 10 damage to itself.',
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
      id: 'neo4-57',
      name: 'Unown [C]',
      nationalPokedexNumber: 201,
      imageUrl: 'https://images.pokemontcg.io/neo4/57.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo4/57_hires.png',
      types: [
        'Psychic'
      ],
      supertype: 'Pokémon',
      subtype: 'Basic',
      ability: {
        name: '[Chase]',
        text: 'As long as Unown C is your Active Pokémon, whenever your opponent\'s Active Pokémon tries to retreat, flip a coin. If heads, put 1 damage counter on that Pokémon. Apply Weakness and Resistance.',
        type: 'Pokémon Power'
      },
      hp: '40',
      retreatCost: [
        'Colorless'
      ],
      convertedRetreatCost: 1,
      number: '57',
      artist: 'CR CG gangs',
      rarity: 'Uncommon',
      series: 'Neo',
      set: 'Neo Destiny',
      setCode: 'neo4',
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
      id: 'neo4-58',
      name: 'Unown [P]',
      nationalPokedexNumber: 201,
      imageUrl: 'https://images.pokemontcg.io/neo4/58.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo4/58_hires.png',
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
      number: '58',
      artist: 'CR CG gangs',
      rarity: 'Uncommon',
      series: 'Neo',
      set: 'Neo Destiny',
      setCode: 'neo4',
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
      id: 'neo4-59',
      name: 'Unown [Q]',
      nationalPokedexNumber: 201,
      imageUrl: 'https://images.pokemontcg.io/neo4/59.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo4/59_hires.png',
      types: [
        'Psychic'
      ],
      supertype: 'Pokémon',
      subtype: 'Basic',
      ability: {
        name: '[Quicken]',
        text: 'Once during your turn (before your attack), you may flip a coin. If heads, prevent all effects of attacks, including damage, done to any of your Pokémon with Unown in its name during your opponent\'s next turn. If you have more than 1 Unown Q in play, use only 1 [Quicken] each turn. This power can be used even if Unown Q is Asleep, Confused, or Paralyzed.',
        type: 'Pokémon Power'
      },
      hp: '40',
      retreatCost: [
        'Colorless'
      ],
      convertedRetreatCost: 1,
      number: '59',
      artist: 'CR CG gangs',
      rarity: 'Uncommon',
      series: 'Neo',
      set: 'Neo Destiny',
      setCode: 'neo4',
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
      id: 'neo4-60',
      name: 'Unown [Z]',
      nationalPokedexNumber: 201,
      imageUrl: 'https://images.pokemontcg.io/neo4/60.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo4/60_hires.png',
      types: [
        'Psychic'
      ],
      supertype: 'Pokémon',
      subtype: 'Basic',
      ability: {
        name: '[Zoom]',
        text: 'As long as Unown Z is Benched, you pay no Energy cost to retreat a Pokémon with Unown in its name.',
        type: 'Pokémon Power'
      },
      hp: '40',
      retreatCost: [
        'Colorless'
      ],
      convertedRetreatCost: 1,
      number: '60',
      artist: 'CR CG gangs',
      rarity: 'Uncommon',
      series: 'Neo',
      set: 'Neo Destiny',
      setCode: 'neo4',
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
      id: 'neo4-61',
      name: 'Cyndaquil',
      nationalPokedexNumber: 155,
      imageUrl: 'https://images.pokemontcg.io/neo4/61.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo4/61_hires.png',
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
      number: '61',
      artist: 'Yukiko Baba',
      rarity: 'Common',
      series: 'Neo',
      set: 'Neo Destiny',
      setCode: 'neo4',
      attacks: [
        {
          cost: [
            'Fire'
          ],
          name: 'Smokescreen',
          text: 'If the Defending Pokémon tries to attack during your opponent\'s next turn, your opponent flips a coin. If tails, that attack does nothing.',
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
      id: 'neo4-62',
      name: 'Dark Octillery',
      nationalPokedexNumber: 224,
      imageUrl: 'https://images.pokemontcg.io/neo4/62.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo4/62_hires.png',
      types: [
        'Water'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 1',
      evolvesFrom: 'Remoraid',
      hp: '60',
      retreatCost: [
        'Colorless',
        'Colorless'
      ],
      convertedRetreatCost: 2,
      number: '62',
      artist: 'Shin-ichi Yoshida',
      rarity: 'Common',
      series: 'Neo',
      set: 'Neo Destiny',
      setCode: 'neo4',
      attacks: [
        {
          cost: [
            'Water'
          ],
          name: 'Ink Blast',
          text: 'This attack does 20 damage plus 10 more damage for each Energy attached to Dark Octillery but not used to pay for this attack\'s Energy cost. You can\'t add more than 20 damage in this way.',
          damage: '20+',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Water',
            'Colorless'
          ],
          name: 'Tentacle Wrap',
          text: 'Flip a coin. If heads, the Defending Pokémon is now Paralyzed. If tails, during your opponent\'s next turn, your opponent pays more to retreat the Defending Pokémon.',
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
      id: 'neo4-63',
      name: 'Dratini',
      nationalPokedexNumber: 147,
      imageUrl: 'https://images.pokemontcg.io/neo4/63.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo4/63_hires.png',
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
      number: '63',
      artist: 'Yuka Morii',
      rarity: 'Common',
      series: 'Neo',
      set: 'Neo Destiny',
      setCode: 'neo4',
      attacks: [
        {
          cost: [
            'Colorless'
          ],
          name: 'Shed',
          text: 'Remove 1 damage counter from Dratini.',
          damage: '',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Colorless'
          ],
          name: 'Fury Attack',
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
      ]
    },
    {
      id: 'neo4-64',
      name: 'Exeggcute',
      nationalPokedexNumber: 102,
      imageUrl: 'https://images.pokemontcg.io/neo4/64.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo4/64_hires.png',
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
      number: '64',
      artist: 'Toshinao Aoki',
      rarity: 'Common',
      series: 'Neo',
      set: 'Neo Destiny',
      setCode: 'neo4',
      attacks: [
        {
          cost: [
            'Grass'
          ],
          name: 'Sleep Power',
          text: 'The Defending Pokémon is now Asleep.',
          damage: '10',
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
      id: 'neo4-65',
      name: 'Gastly',
      nationalPokedexNumber: 92,
      imageUrl: 'https://images.pokemontcg.io/neo4/65.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo4/65_hires.png',
      types: [
        'Psychic'
      ],
      supertype: 'Pokémon',
      subtype: 'Basic',
      hp: '40',
      number: '65',
      artist: 'Aya Kusube',
      rarity: 'Common',
      series: 'Neo',
      set: 'Neo Destiny',
      setCode: 'neo4',
      attacks: [
        {
          cost: [
            'Psychic'
          ],
          name: 'Nightmare',
          text: 'The Defending Pokémon is now Asleep.',
          damage: '10',
          convertedEnergyCost: 1
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
      id: 'neo4-66',
      name: 'Girafarig',
      nationalPokedexNumber: 203,
      imageUrl: 'https://images.pokemontcg.io/neo4/66.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo4/66_hires.png',
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
      number: '66',
      artist: 'Yuka Morii',
      rarity: 'Common',
      series: 'Neo',
      set: 'Neo Destiny',
      setCode: 'neo4',
      attacks: [
        {
          cost: [
            'Colorless',
            'Colorless'
          ],
          name: 'Tail Bite',
          text: 'Flip a coin. If heads, this attack does 10 damage plus 20 more damage; if tails, this attack does 10 damage.',
          damage: '10+',
          convertedEnergyCost: 2
        },
        {
          cost: [
            'Psychic',
            'Psychic'
          ],
          name: 'Psychic',
          text: 'Does 10 damage plus 10 more damage for each Energy card attached to the Defending Pokémon.',
          damage: '10+',
          convertedEnergyCost: 2
        }
      ]
    },
    {
      id: 'neo4-67',
      name: 'Gligar',
      nationalPokedexNumber: 207,
      imageUrl: 'https://images.pokemontcg.io/neo4/67.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo4/67_hires.png',
      types: [
        'Fighting'
      ],
      supertype: 'Pokémon',
      subtype: 'Basic',
      hp: '50',
      number: '67',
      artist: 'Ken Sugimori',
      rarity: 'Common',
      series: 'Neo',
      set: 'Neo Destiny',
      setCode: 'neo4',
      attacks: [
        {
          cost: [
            'Fighting',
            'Colorless'
          ],
          name: 'Stun Poison',
          text: 'Flip a coin. If heads, the Defending Pokémon is now Paralyzed and Poisoned.',
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
          type: 'Grass',
          value: '×2'
        }
      ]
    },
    {
      id: 'neo4-68',
      name: 'Growlithe',
      nationalPokedexNumber: 58,
      imageUrl: 'https://images.pokemontcg.io/neo4/68.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo4/68_hires.png',
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
      number: '68',
      artist: 'Atsuko Nishida',
      rarity: 'Common',
      series: 'Neo',
      set: 'Neo Destiny',
      setCode: 'neo4',
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
      id: 'neo4-69',
      name: 'Hitmonchan',
      nationalPokedexNumber: 107,
      imageUrl: 'https://images.pokemontcg.io/neo4/69.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo4/69_hires.png',
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
      number: '69',
      artist: 'Shin-ichi Yoshida',
      rarity: 'Common',
      series: 'Neo',
      set: 'Neo Destiny',
      setCode: 'neo4',
      attacks: [
        {
          cost: [
            'Fighting'
          ],
          name: 'Dodge',
          text: 'If Hitmonchan would be damaged by an attack during your opponent\'s next turn, flip a coin. If heads, prevent that attack\'s damage done to Hitmonchan. (Any other effects of attacks still happen.)',
          damage: '',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Fighting',
            'Fighting',
            'Fighting'
          ],
          name: 'Supersonic Jab',
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
      id: 'neo4-70',
      name: 'Larvitar',
      nationalPokedexNumber: 246,
      imageUrl: 'https://images.pokemontcg.io/neo4/70.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo4/70_hires.png',
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
      number: '70',
      artist: 'Ken Sugimori',
      rarity: 'Common',
      series: 'Neo',
      set: 'Neo Destiny',
      setCode: 'neo4',
      attacks: [
        {
          cost: [
            'Colorless'
          ],
          name: 'Leer',
          text: 'Flip a coin. If heads, the Defending Pokémon can\'t attack during your opponent\'s next turn. (Benching or evolving either Pokémon ends this effect.)',
          damage: '',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Fire',
            'Colorless'
          ],
          name: 'Rock Throw',
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
      id: 'neo4-71',
      name: 'Ledyba',
      nationalPokedexNumber: 165,
      imageUrl: 'https://images.pokemontcg.io/neo4/71.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo4/71_hires.png',
      types: [
        'Grass'
      ],
      supertype: 'Pokémon',
      subtype: 'Basic',
      hp: '40',
      number: '71',
      artist: 'Tomokazu Komiya',
      rarity: 'Common',
      series: 'Neo',
      set: 'Neo Destiny',
      setCode: 'neo4',
      attacks: [
        {
          cost: [
            'Grass',
            'Colorless'
          ],
          name: 'Swift',
          text: 'This attack\'s damage isn\'t affected by Weakness, Resistance, Pokémon Powers, or any other effects on the Defending Pokémon.',
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
          type: 'Fire',
          value: '×2'
        }
      ]
    },
    {
      id: 'neo4-72',
      name: 'Light Sunflora',
      nationalPokedexNumber: 192,
      imageUrl: 'https://images.pokemontcg.io/neo4/72.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo4/72_hires.png',
      types: [
        'Grass'
      ],
      supertype: 'Pokémon',
      subtype: 'Stage 1',
      evolvesFrom: 'Sunkern',
      hp: '80',
      retreatCost: [
        'Colorless'
      ],
      convertedRetreatCost: 1,
      number: '72',
      artist: 'Toshinao Aoki',
      rarity: 'Common',
      series: 'Neo',
      set: 'Neo Destiny',
      setCode: 'neo4',
      attacks: [
        {
          cost: [
            'Colorless',
            'Colorless'
          ],
          name: 'Reflected Sunlight',
          text: 'Attach up to 2 Grass Energy cards from your hand to 1 of your Grass Pokémon.',
          damage: '',
          convertedEnergyCost: 2
        },
        {
          cost: [
            'Grass',
            'Grass',
            'Grass'
          ],
          name: 'Solarbeam',
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
      id: 'neo4-73',
      name: 'Machop',
      nationalPokedexNumber: 66,
      imageUrl: 'https://images.pokemontcg.io/neo4/73.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo4/73_hires.png',
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
      number: '73',
      artist: 'Toshinao Aoki',
      rarity: 'Common',
      series: 'Neo',
      set: 'Neo Destiny',
      setCode: 'neo4',
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
            'Colorless',
            'Colorless'
          ],
          name: 'Punch',
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
      id: 'neo4-74',
      name: 'Mantine',
      nationalPokedexNumber: 226,
      imageUrl: 'https://images.pokemontcg.io/neo4/74.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo4/74_hires.png',
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
      number: '74',
      artist: 'Yukiko Baba',
      rarity: 'Common',
      series: 'Neo',
      set: 'Neo Destiny',
      setCode: 'neo4',
      attacks: [
        {
          cost: [
            'Water',
            'Water'
          ],
          name: 'Giant Wave',
          text: 'Mantine can\'t attack during your next turn.',
          damage: '40',
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
      id: 'neo4-75',
      name: 'Mareep',
      nationalPokedexNumber: 179,
      imageUrl: 'https://images.pokemontcg.io/neo4/75.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo4/75_hires.png',
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
      number: '75',
      artist: 'Kagemaru Himeno',
      rarity: 'Common',
      series: 'Neo',
      set: 'Neo Destiny',
      setCode: 'neo4',
      attacks: [
        {
          cost: [
            'Colorless'
          ],
          name: 'Headbutt',
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
      id: 'neo4-76',
      name: 'Phanpy',
      nationalPokedexNumber: 231,
      imageUrl: 'https://images.pokemontcg.io/neo4/76.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo4/76_hires.png',
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
      number: '76',
      artist: 'Miki Tanaka',
      rarity: 'Common',
      series: 'Neo',
      set: 'Neo Destiny',
      setCode: 'neo4',
      attacks: [
        {
          cost: [
            'Fighting'
          ],
          name: 'Crushing Step',
          text: 'Flip a coin. If heads, this attack does 10 damage plus 10 more damage; if tails, this attack does 10 damage.',
          damage: '10+',
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
      id: 'neo4-77',
      name: 'Pineco',
      nationalPokedexNumber: 204,
      imageUrl: 'https://images.pokemontcg.io/neo4/77.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo4/77_hires.png',
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
      number: '77',
      artist: 'Ken Sugimori',
      rarity: 'Common',
      series: 'Neo',
      set: 'Neo Destiny',
      setCode: 'neo4',
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
      id: 'neo4-78',
      name: 'Porygon',
      nationalPokedexNumber: 137,
      imageUrl: 'https://images.pokemontcg.io/neo4/78.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo4/78_hires.png',
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
      number: '78',
      artist: 'Hiromichi Sugiyama, CR CG gangs',
      rarity: 'Common',
      series: 'Neo',
      set: 'Neo Destiny',
      setCode: 'neo4',
      attacks: [
        {
          cost: [
            'Colorless',
            'Colorless'
          ],
          name: 'Sharpen',
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
      id: 'neo4-79',
      name: 'Psyduck',
      nationalPokedexNumber: 54,
      imageUrl: 'https://images.pokemontcg.io/neo4/79.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo4/79_hires.png',
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
      number: '79',
      artist: 'Yuka Morii',
      rarity: 'Common',
      series: 'Neo',
      set: 'Neo Destiny',
      setCode: 'neo4',
      attacks: [
        {
          cost: [
            'Water'
          ],
          name: 'Flipper Splash',
          text: '',
          damage: '10',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Psychic',
            'Colorless'
          ],
          name: 'Migraine',
          text: 'Flip a coin. If heads, the Defending Pokémon is now Confused. If tails, Psyduck is now Confused.',
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
      id: 'neo4-80',
      name: 'Remoraid',
      nationalPokedexNumber: 223,
      imageUrl: 'https://images.pokemontcg.io/neo4/80.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo4/80_hires.png',
      types: [
        'Water'
      ],
      supertype: 'Pokémon',
      subtype: 'Basic',
      hp: '40',
      number: '80',
      artist: 'Jungo Suzuki, CR CG gangs',
      rarity: 'Common',
      series: 'Neo',
      set: 'Neo Destiny',
      setCode: 'neo4',
      attacks: [
        {
          cost: [
            'Water'
          ],
          name: 'Fury Strikes',
          text: 'Flip 3 coins. This attack does 10 damage times the number of heads.',
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
      id: 'neo4-81',
      name: 'Seel',
      nationalPokedexNumber: 86,
      imageUrl: 'https://images.pokemontcg.io/neo4/81.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo4/81_hires.png',
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
      artist: 'Masako Yamashita',
      rarity: 'Common',
      series: 'Neo',
      set: 'Neo Destiny',
      setCode: 'neo4',
      attacks: [
        {
          cost: [
            'Water',
            'Colorless'
          ],
          name: 'Take Down',
          text: 'Seel does 10 damage to itself.',
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
      id: 'neo4-82',
      name: 'Slugma',
      nationalPokedexNumber: 218,
      imageUrl: 'https://images.pokemontcg.io/neo4/82.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo4/82_hires.png',
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
      number: '82',
      artist: 'Ken Sugimori',
      rarity: 'Common',
      series: 'Neo',
      set: 'Neo Destiny',
      setCode: 'neo4',
      attacks: [
        {
          cost: [
            'Fire',
            'Fire'
          ],
          name: 'Combustion',
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
      id: 'neo4-83',
      name: 'Sunkern',
      nationalPokedexNumber: 191,
      imageUrl: 'https://images.pokemontcg.io/neo4/83.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo4/83_hires.png',
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
      number: '83',
      artist: 'Etsuya Hattori',
      rarity: 'Common',
      series: 'Neo',
      set: 'Neo Destiny',
      setCode: 'neo4',
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
            'Grass',
            'Grass'
          ],
          name: 'Sunbathe',
          text: 'Flip a coin. If heads, remove all damage counters from Sunkern. Search your deck for a card that evolves from Sunkern and attach that card to Sunkern. This counts as evolving Sunkern. Shuffle your deck afterward.',
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
      id: 'neo4-84',
      name: 'Swinub',
      nationalPokedexNumber: 220,
      imageUrl: 'https://images.pokemontcg.io/neo4/84.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo4/84_hires.png',
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
      number: '84',
      artist: 'Kagemaru Himeno',
      rarity: 'Common',
      series: 'Neo',
      set: 'Neo Destiny',
      setCode: 'neo4',
      attacks: [
        {
          cost: [
            'Water',
            'Colorless'
          ],
          name: 'Generate Cold',
          text: 'Flip a coin. If heads, the Defending Pokémon is now Paralyzed.',
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
      id: 'neo4-85',
      name: 'Totodile',
      nationalPokedexNumber: 158,
      imageUrl: 'https://images.pokemontcg.io/neo4/85.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo4/85_hires.png',
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
      artist: 'Miki Tanaka',
      rarity: 'Common',
      series: 'Neo',
      set: 'Neo Destiny',
      setCode: 'neo4',
      attacks: [
        {
          cost: [
            'Water'
          ],
          name: 'Water Gun',
          text: 'Does 10 damage plus 10 more damage for each Energy attached to Totodile but not used to pay for this attack\'s Energy cost. You can\'t add more than 20 damage in this way.',
          damage: '10+',
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
      id: 'neo4-86',
      name: 'Unown [L]',
      nationalPokedexNumber: 201,
      imageUrl: 'https://images.pokemontcg.io/neo4/86.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo4/86_hires.png',
      types: [
        'Psychic'
      ],
      supertype: 'Pokémon',
      subtype: 'Basic',
      ability: {
        name: '[Laugh]',
        text: 'Once during your turn (before your attack), you may flip a coin. If heads, each player shuffles his or her deck. This power can be used even if Unown L is Asleep, Confused, or Paralyzed.',
        type: 'Pokémon Power'
      },
      hp: '40',
      retreatCost: [
        'Colorless'
      ],
      convertedRetreatCost: 1,
      number: '86',
      artist: 'CR CG gangs',
      rarity: 'Common',
      series: 'Neo',
      set: 'Neo Destiny',
      setCode: 'neo4',
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
      id: 'neo4-87',
      name: 'Unown [S]',
      nationalPokedexNumber: 201,
      imageUrl: 'https://images.pokemontcg.io/neo4/87.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo4/87_hires.png',
      types: [
        'Psychic'
      ],
      supertype: 'Pokémon',
      subtype: 'Basic',
      ability: {
        name: '[Search]',
        text: 'Once during your turn (before your attack), you may look at 1 of your Prize cards. Return that Prize card face down. This power can be used even if Unown S is Asleep, Confused, or Paralyzed.',
        type: 'Pokémon Power'
      },
      hp: '40',
      retreatCost: [
        'Colorless'
      ],
      convertedRetreatCost: 1,
      number: '87',
      artist: 'CR CG gangs',
      rarity: 'Common',
      series: 'Neo',
      set: 'Neo Destiny',
      setCode: 'neo4',
      attacks: [
        {
          cost: [
            'Psychic',
            'Colorless'
          ],
          name: 'Hidden Power',
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
      id: 'neo4-88',
      name: 'Unown [T]',
      nationalPokedexNumber: 201,
      imageUrl: 'https://images.pokemontcg.io/neo4/88.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo4/88_hires.png',
      types: [
        'Psychic'
      ],
      supertype: 'Pokémon',
      subtype: 'Basic',
      ability: {
        name: '[Tell]',
        text: 'Once during your turn (before your attack), you may flip a coin. If heads, look at your opponent\'s hand and show your hand to your opponent. This power can be used even if Unown T is Asleep, Confused, or Paralyzed.',
        type: 'Pokémon Power'
      },
      hp: '40',
      retreatCost: [
        'Colorless'
      ],
      convertedRetreatCost: 1,
      number: '88',
      artist: 'CR CG gangs',
      rarity: 'Common',
      series: 'Neo',
      set: 'Neo Destiny',
      setCode: 'neo4',
      attacks: [
        {
          cost: [
            'Psychic',
            'Colorless'
          ],
          name: 'Hidden Power',
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
      id: 'neo4-89',
      name: 'Unown [V]',
      nationalPokedexNumber: 201,
      imageUrl: 'https://images.pokemontcg.io/neo4/89.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo4/89_hires.png',
      types: [
        'Psychic'
      ],
      supertype: 'Pokémon',
      subtype: 'Basic',
      ability: {
        name: '[Vanish]',
        text: 'When you play Unown V from your hand, you may flip a coin. If heads, return 1 of your Pokémon with Unown in its name (other than Unown V) to your hand. (Discard all cards attached to that card.)',
        type: 'Pokémon Power'
      },
      hp: '40',
      retreatCost: [
        'Colorless'
      ],
      convertedRetreatCost: 1,
      number: '89',
      artist: 'CR CG gangs',
      rarity: 'Common',
      series: 'Neo',
      set: 'Neo Destiny',
      setCode: 'neo4',
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
      id: 'neo4-90',
      name: 'Venonat',
      nationalPokedexNumber: 48,
      imageUrl: 'https://images.pokemontcg.io/neo4/90.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo4/90_hires.png',
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
      number: '90',
      artist: 'Masako Yamashita',
      rarity: 'Common',
      series: 'Neo',
      set: 'Neo Destiny',
      setCode: 'neo4',
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
          name: 'Poisonpowder',
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
      id: 'neo4-91',
      name: 'Vulpix',
      nationalPokedexNumber: 37,
      imageUrl: 'https://images.pokemontcg.io/neo4/91.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo4/91_hires.png',
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
      number: '91',
      artist: 'Masako Yamashita',
      rarity: 'Common',
      series: 'Neo',
      set: 'Neo Destiny',
      setCode: 'neo4',
      attacks: [
        {
          cost: [
            'Fire',
            'Colorless'
          ],
          name: 'Ember',
          text: 'Discard 1 Fire Energy card attached to Vulpix in order to use this attack.',
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
      id: 'neo4-92',
      name: 'Broken Ground Gym',
      imageUrl: 'https://images.pokemontcg.io/neo4/92.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo4/92_hires.png',
      supertype: 'Trainer',
      subtype: 'Stadium',
      number: '92',
      artist: 'Tomokazu Komiya',
      rarity: 'Rare',
      series: 'Neo',
      set: 'Neo Destiny',
      setCode: 'neo4',
      text: [
        'Each player pays more to retreat a Baby Pokémon or Basic Pokémon.'
      ]
    },
    {
      id: 'neo4-93',
      name: 'EXP.ALL',
      imageUrl: 'https://images.pokemontcg.io/neo4/93.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo4/93_hires.png',
      supertype: 'Trainer',
      subtype: 'Pokémon Tool',
      number: '93',
      artist: 'Keiji Kinebuchi',
      rarity: 'Rare',
      series: 'Neo',
      set: 'Neo Destiny',
      setCode: 'neo4',
      text: [
        'During your opponent\'s turn, if your Active Pokémon would be Knocked Out by your opponent\'s attack, you may take 1 of the basic Energy cards attached to your Active Pokémon and attach it to the Pokémon with EXP.ALL attached to it. If you do, discard EXP.ALL.'
      ]
    },
    {
      id: 'neo4-94',
      name: 'Impostor Professor Oak\'s Invention',
      imageUrl: 'https://images.pokemontcg.io/neo4/94.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo4/94_hires.png',
      supertype: 'Trainer',
      subtype: '',
      number: '94',
      artist: 'Ken Sugimori',
      rarity: 'Rare',
      series: 'Neo',
      set: 'Neo Destiny',
      setCode: 'neo4',
      text: [
        'Look at your opponent\'s Prize cards. You may have your opponent shuffle them into his or her deck. If you do, your opponent takes that many cards from the top of his or her deck and sets them aside as his or her new Prize cards (without looking at them).'
      ]
    },
    {
      id: 'neo4-95',
      name: 'Radio Tower',
      imageUrl: 'https://images.pokemontcg.io/neo4/95.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo4/95_hires.png',
      supertype: 'Trainer',
      subtype: 'Stadium',
      number: '95',
      artist: 'Yousuke Hirata, CR CG gangs',
      rarity: 'Rare',
      series: 'Neo',
      set: 'Neo Destiny',
      setCode: 'neo4',
      text: [
        'Once during each player\'s turn (before attacking), that player may look at the top 2 cards of his or her deck and put them back in the same order.'
      ]
    },
    {
      id: 'neo4-96',
      name: 'Thought Wave Machine (Rocket\'s Secret Machine)',
      imageUrl: 'https://images.pokemontcg.io/neo4/96.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo4/96_hires.png',
      supertype: 'Trainer',
      subtype: '',
      number: '96',
      artist: 'Sumiyoshi Kizuki',
      rarity: 'Rare',
      series: 'Neo',
      set: 'Neo Destiny',
      setCode: 'neo4',
      text: [
        'Flip a coin until you get tails. For each heads, return an Energy card attached to your opponent\'s Active Pokémon to your opponent\'s hand. If the Pokémon has fewer attached Energy cards than that, return all of them to your opponent\'s hand. Your turn is over now (you don\'t get to attack).'
      ]
    },
    {
      id: 'neo4-97',
      name: 'Counterattack Claws',
      imageUrl: 'https://images.pokemontcg.io/neo4/97.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo4/97_hires.png',
      supertype: 'Trainer',
      subtype: 'Pokémon Tool',
      number: '97',
      artist: 'Keiji Kinebuchi',
      rarity: 'Uncommon',
      series: 'Neo',
      set: 'Neo Destiny',
      setCode: 'neo4',
      text: [
        'During your opponent\'s turn, if the Pokémon Counterattack Claws is attached to is your Active Pokémon and an opponent\'s attack damages it (even if it is Knocked Out), flip a coin. If heads, put 2 damage counters on the Defending Pokémon. Then, discard Counterattack Claws.'
      ]
    },
    {
      id: 'neo4-98',
      name: 'Energy Amplifier',
      imageUrl: 'https://images.pokemontcg.io/neo4/98.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo4/98_hires.png',
      supertype: 'Trainer',
      subtype: '',
      number: '98',
      artist: '"Big Mama" Tagawa, CR CG gangs',
      rarity: 'Uncommon',
      series: 'Neo',
      set: 'Neo Destiny',
      setCode: 'neo4',
      text: [
        'Choose an Energy card in your hand, show it to your opponent, and shuffle it into your deck. Then flip a coin. If heads, search your deck for up to 3 basic Energy cards. Show them to your opponent, and put them into your hand. Shuffle your deck afterward.'
      ]
    },
    {
      id: 'neo4-99',
      name: 'Energy Stadium',
      imageUrl: 'https://images.pokemontcg.io/neo4/99.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo4/99_hires.png',
      supertype: 'Trainer',
      subtype: 'Stadium',
      number: '99',
      artist: 'Hideki Kazama',
      rarity: 'Uncommon',
      series: 'Neo',
      set: 'Neo Destiny',
      setCode: 'neo4',
      text: [
        'Once during each player\'s turn (before attacking), that player may flip a coin. If heads, that player puts a basic Energy card from his or her discard pile into his or her hand.'
      ]
    },
    {
      id: 'neo4-100',
      name: 'Lucky Stadium',
      imageUrl: 'https://images.pokemontcg.io/neo4/100.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo4/100_hires.png',
      supertype: 'Trainer',
      subtype: 'Stadium',
      number: '100',
      artist: 'Imakuni?',
      rarity: 'Uncommon',
      series: 'Neo',
      set: 'Neo Destiny',
      setCode: 'neo4',
      text: [
        'Once during each player\'s turn (before attacking), that player may flip a coin. If heads, that player draws a card.'
      ]
    },
    {
      id: 'neo4-101',
      name: 'Magnifier',
      imageUrl: 'https://images.pokemontcg.io/neo4/101.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo4/101_hires.png',
      supertype: 'Trainer',
      subtype: '',
      number: '101',
      artist: 'Keiji Kinebuchi',
      rarity: 'Uncommon',
      series: 'Neo',
      set: 'Neo Destiny',
      setCode: 'neo4',
      text: [
        'Attach Magnifier to 1 of your Pokémon. At the end of your turn, discard Magnifier. If the Pokémon Magnifier is attached to attacks, don\'t apply Resistance for that attack.'
      ]
    },
    {
      id: 'neo4-102',
      name: 'Pokémon Personality Test',
      imageUrl: 'https://images.pokemontcg.io/neo4/102.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo4/102_hires.png',
      supertype: 'Trainer',
      subtype: '',
      number: '102',
      artist: 'Tomokazu Komiya',
      rarity: 'Uncommon',
      series: 'Neo',
      set: 'Neo Destiny',
      setCode: 'neo4',
      text: [
        'Put an Evolution card from your hand face down in front of you. Your opponent guesses whether it is a Pokémon card with Light in its name, a Pokémon card with Dark in its name, or neither one. Flip the card over. If your opponent guessed right, he or she draws 3 cards. If your opponent guessed wrong, you draw 3 cards. Either way, return the card to your hand.'
      ]
    },
    {
      id: 'neo4-103',
      name: 'Team Rocket\'s Evil Deeds',
      imageUrl: 'https://images.pokemontcg.io/neo4/103.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo4/103_hires.png',
      supertype: 'Trainer',
      subtype: '',
      number: '103',
      artist: 'Ken Sugimori',
      rarity: 'Uncommon',
      series: 'Neo',
      set: 'Neo Destiny',
      setCode: 'neo4',
      text: [
        'Look at your opponent\'s hand and choose a card there. Your opponent shuffles that card into his or her deck. Then, your opponent may draw up to 2 cards.'
      ]
    },
    {
      id: 'neo4-104',
      name: 'Heal Powder',
      imageUrl: 'https://images.pokemontcg.io/neo4/104.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo4/104_hires.png',
      supertype: 'Trainer',
      subtype: '',
      number: '104',
      artist: 'Ryuta Kusumi, CR CG gangs',
      rarity: 'Common',
      series: 'Neo',
      set: 'Neo Destiny',
      setCode: 'neo4',
      text: [
        'Flip a coin. If heads, your Active Pokémon is no longer Asleep, Confused, Paralyzed, or Poisoned and remove 2 damage counters from it. If your Active Pokémon has fewer damage counters than that, remove all of them.'
      ]
    },
    {
      id: 'neo4-105',
      name: 'Mail from Bill',
      imageUrl: 'https://images.pokemontcg.io/neo4/105.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo4/105_hires.png',
      supertype: 'Trainer',
      subtype: '',
      number: '105',
      artist: 'Ken Sugimori',
      rarity: 'Common',
      series: 'Neo',
      set: 'Neo Destiny',
      setCode: 'neo4',
      text: [
        'You can\'t play this card if you have 5 or more cards in your hand (including this one). Draw cards until you have exactly 4 cards in your hand.'
      ]
    },
    {
      id: 'neo4-106',
      name: 'Shining Celebi',
      nationalPokedexNumber: 251,
      imageUrl: 'https://images.pokemontcg.io/neo4/106.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo4/106_hires.png',
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
      artist: 'Hironobu Yoshida',
      rarity: 'Secret Rare',
      series: 'Neo',
      set: 'Neo Destiny',
      setCode: 'neo4',
      attacks: [
        {
          cost: [
            'Water'
          ],
          name: 'Healing Water',
          text: 'Remove a number of damage counters from 1 of your Benched Pokémon equal to the number of Water Energy cards attached to Shining Celebi. If the Pokémon has fewer damage counters than that, remove all of them.',
          damage: '',
          convertedEnergyCost: 1
        },
        {
          cost: [
            'Grass',
            'Psychic'
          ],
          name: 'Miracle Leaf',
          text: 'Flip a number of coins equal to the number of Energy attached to the Defending Pokémon. If you get 1 or more heads, the Defending Pokémon is now Asleep, Confused, or Poisoned (your choice).',
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
      id: 'neo4-107',
      name: 'Shining Charizard',
      nationalPokedexNumber: 6,
      imageUrl: 'https://images.pokemontcg.io/neo4/107.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo4/107_hires.png',
      types: [
        'Fire'
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
      number: '107',
      artist: 'Hironobu Yoshida',
      rarity: 'Secret Rare',
      series: 'Neo',
      set: 'Neo Destiny',
      setCode: 'neo4',
      attacks: [
        {
          cost: [
            'Lightning',
            'Lightning',
            'Fire',
            'Fire',
            'Fire'
          ],
          name: 'White-Hot Flame',
          text: 'Discard 1 Fire Energy card and 1 Lightning Energy card attached to Shining Charizard or this attack does nothing. Flip a coin. If tails, Shining Charizard does 30 damage to itself.',
          damage: '100',
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
      id: 'neo4-108',
      name: 'Shining Kabutops',
      nationalPokedexNumber: 141,
      imageUrl: 'https://images.pokemontcg.io/neo4/108.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo4/108_hires.png',
      types: [
        'Fighting'
      ],
      supertype: 'Pokémon',
      subtype: 'Basic',
      hp: '80',
      retreatCost: [
        'Colorless',
        'Colorless'
      ],
      convertedRetreatCost: 2,
      number: '108',
      artist: 'Hironobu Yoshida',
      rarity: 'Secret Rare',
      series: 'Neo',
      set: 'Neo Destiny',
      setCode: 'neo4',
      attacks: [
        {
          cost: [
            'Fighting',
            'Fighting',
            'Lightning'
          ],
          name: 'Lightning Cut',
          text: 'Flip a coin. If heads, this attack does 30 damage plus 10 more damage and does 10 damage to each of your opponent\'s Benched Pokémon. (Don\'t apply Weakness and Resistance for Benched Pokémon.) If tails, this attack does 30 damage and Shining Kabutops does 10 damage to itself.',
          damage: '30+',
          convertedEnergyCost: 3
        },
        {
          cost: [
            'Fighting',
            'Fighting',
            'Water',
            'Water'
          ],
          name: 'Water Slash',
          text: 'Does 50 damage plus 10 more damage for each Energy attached to Shining Kabutops but not used to pay for this attack\'s Energy cost. Don\'t apply Resistance.',
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
      id: 'neo4-109',
      name: 'Shining Mewtwo',
      nationalPokedexNumber: 150,
      imageUrl: 'https://images.pokemontcg.io/neo4/109.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo4/109_hires.png',
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
      number: '109',
      artist: 'Hironobu Yoshida',
      rarity: 'Secret Rare',
      series: 'Neo',
      set: 'Neo Destiny',
      setCode: 'neo4',
      attacks: [
        {
          cost: [
            'Lightning',
            'Psychic'
          ],
          name: 'Reflect Shield',
          text: 'If an attack does damage to Shining Mewtwo during your opponent\'s next turn (even if Shining Mewtwo is Knocked Out), flip a coin. If heads, prevent all damage done to Shining Mewtwo from that attack (any other effects of attacks still happen) and do 20 damage to the attacking Pokémon.',
          damage: '',
          convertedEnergyCost: 2
        },
        {
          cost: [
            'Psychic',
            'Psychic',
            'Fire'
          ],
          name: 'Psyburst',
          text: 'Discard a Fire Energy card attached to Shining Mewtwo or this attack does nothing. This attack does 40 damage plus 10 damage for each Energy attached to the Defending Pokémon.',
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
      id: 'neo4-110',
      name: 'Shining Noctowl',
      nationalPokedexNumber: 164,
      imageUrl: 'https://images.pokemontcg.io/neo4/110.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo4/110_hires.png',
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
      number: '110',
      artist: 'Ken Sugimori',
      rarity: 'Secret Rare',
      series: 'Neo',
      set: 'Neo Destiny',
      setCode: 'neo4',
      attacks: [
        {
          cost: [
            'Psychic',
            'Lightning',
            'Colorless'
          ],
          name: 'Flashing Eyes',
          text: 'Flip 3 coins. If exactly 1 is heads, the Defending Pokémon is now Asleep. If exactly 2 are heads, the Defending Pokémon is now Confused. If all 3 are heads, the Defending Pokémon is now Paralyzed.',
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
      id: 'neo4-111',
      name: 'Shining Raichu',
      nationalPokedexNumber: 26,
      imageUrl: 'https://images.pokemontcg.io/neo4/111.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo4/111_hires.png',
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
      number: '111',
      artist: 'Hironobu Yoshida',
      rarity: 'Secret Rare',
      series: 'Neo',
      set: 'Neo Destiny',
      setCode: 'neo4',
      attacks: [
        {
          cost: [
            'Lightning',
            'Lightning',
            'Water',
            'Water'
          ],
          name: 'Thundersquall',
          text: 'If your opponent has any Benched Pokémon, choose 1 of them and this attack does 10 damage to that Pokémon for each Energy attached to Shining Raichu. (Don\'t apply Weakness and Resistance for Benched Pokémon.)',
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
      id: 'neo4-112',
      name: 'Shining Steelix',
      nationalPokedexNumber: 208,
      imageUrl: 'https://images.pokemontcg.io/neo4/112.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo4/112_hires.png',
      types: [
        'Metal'
      ],
      supertype: 'Pokémon',
      subtype: 'Basic',
      hp: '90',
      retreatCost: [
        'Colorless',
        'Colorless',
        'Colorless',
        'Colorless'
      ],
      convertedRetreatCost: 4,
      number: '112',
      artist: 'Ken Sugimori',
      rarity: 'Secret Rare',
      series: 'Neo',
      set: 'Neo Destiny',
      setCode: 'neo4',
      attacks: [
        {
          cost: [
            'Metal',
            'Metal',
            'Fighting',
            'Fighting'
          ],
          name: 'Crushing Earth',
          text: 'Flip a coin. If heads, this attack does 10 damage to each Benched Pokémon (yours and your opponent\'s). (Don\'t apply Weakness and Resistance for Benched Pokémon.) If tails, this attack does nothing. Either way, Shining Steelix can\'t attack during your next turn.',
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
      id: 'neo4-113',
      name: 'Shining Tyranitar',
      nationalPokedexNumber: 248,
      imageUrl: 'https://images.pokemontcg.io/neo4/113.png',
      imageUrlHiRes: 'https://images.pokemontcg.io/neo4/113_hires.png',
      types: [
        'Darkness'
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
      number: '113',
      artist: 'Ken Sugimori',
      rarity: 'Secret Rare',
      series: 'Neo',
      set: 'Neo Destiny',
      setCode: 'neo4',
      attacks: [
        {
          cost: [
            'Darkness',
            'Fighting',
            'Fighting'
          ],
          name: 'Mountain Crush',
          text: 'Flip a coin until you get tails. For each heads, your opponent discards the top card from his or her deck.',
          damage: '30',
          convertedEnergyCost: 3
        },
        {
          cost: [
            'Darkness',
            'Fire',
            'Fire',
            'Fire'
          ],
          name: 'Destructive Fire',
          text: 'Flip a coin for each Fire Energy card attached to Shining Tyranitar. For each heads, discard a Fire Energy card attached to Shining Tyranitar or this attack does nothing. Then, for each heads, choose an Energy card attached to the Defending Pokémon and discard it. If it has fewer Energy cards than that, discard all of them.',
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
    }
  ]