const base2Cards = [
    {
        id: 'base4-1',
        name: 'Alakazam',
        nationalPokedexNumber: 65,
        imageUrl: 'https://images.pokemontcg.io/base4/1.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base4/1_hires.png',
        types: [
            'Psychic'
        ],
        supertype: 'Pokémon',
        subtype: 'Stage 2',
        evolvesFrom: 'Kadabra',
        ability: {
            name: 'Damage Swap',
            text: 'As often as you like during your turn (before your attack), you may move 1 damage counter from 1 of your Pokémon to another as long as you don\'t Knock Out that Pokémon. This power can\'t be used if Alakazam is Asleep, Confused, or Paralyzed.',
            type: 'Pokémon Power'
        },
        hp: '80',
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
        set: 'Base Set 2',
        setCode: 'base4',
        attacks: [
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
        weaknesses: [
            {
                type: 'Psychic',
                value: '×2'
            }
        ]
    },
    {
        id: 'base4-2',
        name: 'Blastoise',
        nationalPokedexNumber: 9,
        imageUrl: 'https://images.pokemontcg.io/base4/2.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base4/2_hires.png',
        types: [
            'Water'
        ],
        supertype: 'Pokémon',
        subtype: 'Stage 2',
        evolvesFrom: 'Wartortle',
        ability: {
            name: 'Rain Dance',
            text: 'As often as you like during your turn (before your attack), you may attach 1 Water Energy Card to 1 of your Water Pokémon. (This doesn\'t use up your 1 Energy card attachment for the turn.) This power can\'t be used if Blastoise is Asleep, Confused, or Paralyzed.',
            type: 'Pokémon Power'
        },
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
        series: 'Base',
        set: 'Base Set 2',
        setCode: 'base4',
        attacks: [
            {
                cost: [
                    'Water',
                    'Water',
                    'Water'
                ],
                name: 'Hydro Pump',
                text: 'Does 40 damage plus 10 more damage for each Water Energy attached to Blastoise but not used to pay for this attack\'s Energy cost. You can\'t add more than 20 damage in this way.',
                damage: '40+',
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
        id: 'base4-3',
        name: 'Chansey',
        nationalPokedexNumber: 113,
        imageUrl: 'https://images.pokemontcg.io/base4/3.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base4/3_hires.png',
        types: [
            'Colorless'
        ],
        supertype: 'Pokémon',
        subtype: 'Basic',
        hp: '120',
        retreatCost: [
            'Colorless'
        ],
        convertedRetreatCost: 1,
        number: '3',
        artist: 'Ken Sugimori',
        rarity: 'Holo Rare',
        series: 'Base',
        set: 'Base Set 2',
        setCode: 'base4',
        attacks: [
            {
                cost: [
                    'Colorless',
                    'Colorless'
                ],
                name: 'Scrunch',
                text: 'Flip a coin. If heads, prevent all damage done to Chansey during your opponent\'s next turn. (Any other effects of attacks still happen.)',
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
                name: 'Double-edge',
                text: 'Chansey does 80 damage to itself.',
                damage: '80',
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
        id: 'base4-4',
        name: 'Charizard',
        nationalPokedexNumber: 6,
        imageUrl: 'https://images.pokemontcg.io/base4/4.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base4/4_hires.png',
        types: [
            'Fire'
        ],
        supertype: 'Pokémon',
        subtype: 'Stage 2',
        evolvesFrom: 'Charmeleon',
        ability: {
            name: 'Energy Burn',
            text: 'As often as you like during your turn (before your attack), you may turn all Energy attached to Charizard into Fire Energy for the rest of the turn. This power can\'t be used if Charizard is Asleep, Confused, or Paralyzed.'
        },
        hp: '120',
        retreatCost: [
            'Colorless',
            'Colorless',
            'Colorless'
        ],
        convertedRetreatCost: 3,
        number: '4',
        artist: 'Mitsuhiro Arita',
        rarity: 'Holo Rare',
        series: 'Base',
        set: 'Base Set 2',
        setCode: 'base4',
        attacks: [
            {
                cost: [
                    'Fire',
                    'Fire',
                    'Fire',
                    'Fire'
                ],
                name: 'Fire Spin',
                text: 'Discard 2 Energy cards attached to Charizard in order to use this attack.',
                damage: '100',
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
        id: 'base4-5',
        name: 'Clefable',
        nationalPokedexNumber: 36,
        imageUrl: 'https://images.pokemontcg.io/base4/5.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base4/5_hires.png',
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
        number: '5',
        artist: 'Mitsuhiro Arita',
        rarity: 'Holo Rare',
        series: 'Base',
        set: 'Base Set 2',
        setCode: 'base4',
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
        id: 'base4-6',
        name: 'Clefairy',
        nationalPokedexNumber: 35,
        imageUrl: 'https://images.pokemontcg.io/base4/6.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base4/6_hires.png',
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
        number: '6',
        artist: 'Ken Sugimori',
        rarity: 'Holo Rare',
        series: 'Base',
        set: 'Base Set 2',
        setCode: 'base4',
        attacks: [
            {
                cost: [
                    'Colorless'
                ],
                name: 'Sing',
                text: 'Flip a coin. If heads, the Defending Pokémon is now Asleep.',
                damage: '',
                convertedEnergyCost: 1
            },
            {
                cost: [
                    'Colorless',
                    'Colorless',
                    'Colorless'
                ],
                name: 'Metronome',
                text: 'Choose 1 of Defending Pokémon\'s attacks. Metronome copies that attack except for its Energy costs and anything else required in order to use that attack, such as discarding energy cards. (No matter what type the defender is, Clefairy\'s type is still Colorless.)',
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
        id: 'base4-7',
        name: 'Gyarados',
        nationalPokedexNumber: 130,
        imageUrl: 'https://images.pokemontcg.io/base4/7.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base4/7_hires.png',
        types: [
            'Water'
        ],
        supertype: 'Pokémon',
        subtype: 'Stage 1',
        evolvesFrom: 'Magikarp',
        hp: '100',
        retreatCost: [
            'Colorless',
            'Colorless',
            'Colorless'
        ],
        convertedRetreatCost: 3,
        number: '7',
        artist: 'Mitsuhiro Arita',
        rarity: 'Holo Rare',
        series: 'Base',
        set: 'Base Set 2',
        setCode: 'base4',
        attacks: [
            {
                cost: [
                    'Water',
                    'Water',
                    'Water'
                ],
                name: 'Dragon Rage',
                text: '',
                damage: '50',
                convertedEnergyCost: 3
            },
            {
                cost: [
                    'Water',
                    'Water',
                    'Water',
                    'Water'
                ],
                name: 'Bubblebeam',
                text: 'Flip a coin. If heads, the Defending Pokémon is now Paralyzed.',
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
        id: 'base4-8',
        name: 'Hitmonchan',
        nationalPokedexNumber: 107,
        imageUrl: 'https://images.pokemontcg.io/base4/8.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base4/8_hires.png',
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
        number: '8',
        artist: 'Ken Sugimori',
        rarity: 'Holo Rare',
        series: 'Base',
        set: 'Base Set 2',
        setCode: 'base4',
        attacks: [
            {
                cost: [
                    'Fighting'
                ],
                name: 'Jab',
                text: '',
                damage: '20',
                convertedEnergyCost: 1
            },
            {
                cost: [
                    'Fighting',
                    'Fighting',
                    'Colorless'
                ],
                name: 'Special Punch',
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
        id: 'base4-9',
        name: 'Magneton',
        nationalPokedexNumber: 82,
        imageUrl: 'https://images.pokemontcg.io/base4/9.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base4/9_hires.png',
        types: [
            'Lightning'
        ],
        supertype: 'Pokémon',
        subtype: 'Stage 1',
        evolvesFrom: 'Magnemite',
        hp: '60',
        retreatCost: [
            'Colorless'
        ],
        convertedRetreatCost: 1,
        number: '9',
        artist: 'Keiji Kinebuchi',
        rarity: 'Holo Rare',
        series: 'Base',
        set: 'Base Set 2',
        setCode: 'base4',
        attacks: [
            {
                cost: [
                    'Lightning',
                    'Lightning',
                    'Colorless'
                ],
                name: 'Thunder Wave',
                text: 'Flip a coin. If heads, the Defending Pokémon is now Paralyzed.',
                damage: '30',
                convertedEnergyCost: 3
            },
            {
                cost: [
                    'Lightning',
                    'Lightning',
                    'Colorless',
                    'Colorless'
                ],
                name: 'Selfdestruct',
                text: 'Does 20 damage to each Pokémon on each player\'s Bench. (Don\'t apply Weakness and Resistance for Benched Pokémon.) Magneton does 80 damage to itself.',
                damage: '80',
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
        id: 'base4-10',
        name: 'Mewtwo',
        nationalPokedexNumber: 150,
        imageUrl: 'https://images.pokemontcg.io/base4/10.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base4/10_hires.png',
        types: [
            'Psychic'
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
        number: '10',
        artist: 'Ken Sugimori',
        rarity: 'Holo Rare',
        series: 'Base',
        set: 'Base Set 2',
        setCode: 'base4',
        attacks: [
            {
                cost: [
                    'Psychic',
                    'Colorless'
                ],
                name: 'Psychic',
                text: 'Does 10 damage plus 10 more damage for each Energy card attached to the Defending Pokémon.',
                damage: '10+',
                convertedEnergyCost: 2
            },
            {
                cost: [
                    'Psychic',
                    'Psychic'
                ],
                name: 'Barrier',
                text: 'Discard 1 Psychic Energy card attached to Mewtwo in order to use this attack. During your opponent\'s next turn, prevent all effects of attacks, including damage, done to Mewtwo.',
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
        id: 'base4-11',
        name: 'Nidoking',
        nationalPokedexNumber: 34,
        imageUrl: 'https://images.pokemontcg.io/base4/11.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base4/11_hires.png',
        types: [
            'Grass'
        ],
        supertype: 'Pokémon',
        subtype: 'Stage 2',
        evolvesFrom: 'Nidorino',
        hp: '90',
        retreatCost: [
            'Colorless',
            'Colorless',
            'Colorless'
        ],
        convertedRetreatCost: 3,
        number: '11',
        artist: 'Ken Sugimori',
        rarity: 'Holo Rare',
        series: 'Base',
        set: 'Base Set 2',
        setCode: 'base4',
        attacks: [
            {
                cost: [
                    'Grass',
                    'Colorless',
                    'Colorless'
                ],
                name: 'Thrash',
                text: 'Flip a coin. If heads, this attack does 30 damage plus 10 more damage; if tails, this attack does 30 damage and Nidoking does 10 damage to itself.',
                damage: '30+',
                convertedEnergyCost: 3
            },
            {
                cost: [
                    'Grass',
                    'Grass',
                    'Grass'
                ],
                name: 'Toxic',
                text: 'The Defending Pokémon is now Poisoned. It now takes 20 Poison damage instead of 10 after each player\'s turn (even if it was already Poisoned).',
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
        id: 'base4-12',
        name: 'Nidoqueen',
        nationalPokedexNumber: 31,
        imageUrl: 'https://images.pokemontcg.io/base4/12.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base4/12_hires.png',
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
        number: '12',
        artist: 'Ken Sugimori',
        rarity: 'Holo Rare',
        series: 'Base',
        set: 'Base Set 2',
        setCode: 'base4',
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
        id: 'base4-13',
        name: 'Ninetales',
        nationalPokedexNumber: 38,
        imageUrl: 'https://images.pokemontcg.io/base4/13.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base4/13_hires.png',
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
        number: '13',
        artist: 'Ken Sugimori',
        rarity: 'Holo Rare',
        series: 'Base',
        set: 'Base Set 2',
        setCode: 'base4',
        attacks: [
            {
                cost: [
                    'Colorless',
                    'Colorless'
                ],
                name: 'Lure',
                text: 'If your opponent has any Benched Pokémon, choose 1 of them and switch it with the Defending Pokémon.',
                damage: '',
                convertedEnergyCost: 2
            },
            {
                cost: [
                    'Fire',
                    'Fire',
                    'Fire',
                    'Fire'
                ],
                name: 'Fire Blast',
                text: 'Discard 1 Fire Energy card attached to Ninetales in order to use this attack.',
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
        id: 'base4-14',
        name: 'Pidgeot',
        nationalPokedexNumber: 18,
        imageUrl: 'https://images.pokemontcg.io/base4/14.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base4/14_hires.png',
        types: [
            'Colorless'
        ],
        supertype: 'Pokémon',
        subtype: 'Stage 2',
        evolvesFrom: 'Pidgeotto',
        hp: '80',
        number: '14',
        artist: 'Kagemaru Himeno',
        rarity: 'Holo Rare',
        series: 'Base',
        set: 'Base Set 2',
        setCode: 'base4',
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
        id: 'base4-15',
        name: 'Poliwrath',
        nationalPokedexNumber: 62,
        imageUrl: 'https://images.pokemontcg.io/base4/15.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base4/15_hires.png',
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
        number: '15',
        artist: 'Ken Sugimori',
        rarity: 'Holo Rare',
        series: 'Base',
        set: 'Base Set 2',
        setCode: 'base4',
        attacks: [
            {
                cost: [
                    'Water',
                    'Water',
                    'Colorless'
                ],
                name: 'Water Gun',
                text: 'Does 30 damage plus 10 more damage for each Water Energy attached to Poliwrath but not used to pay for this attack\'s Energy cost. Extra Energy after the 2nd doesn\'t count.',
                damage: '30+',
                convertedEnergyCost: 3
            },
            {
                cost: [
                    'Water',
                    'Water',
                    'Colorless',
                    'Colorless'
                ],
                name: 'Whirlpool',
                text: 'If the Defending Pokémon has any Energy cards attached to it, choose 1 and discard it.',
                damage: '40',
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
        id: 'base4-16',
        name: 'Raichu',
        nationalPokedexNumber: 26,
        imageUrl: 'https://images.pokemontcg.io/base4/16.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base4/16_hires.png',
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
        number: '16',
        artist: 'Ken Sugimori',
        rarity: 'Holo Rare',
        series: 'Base',
        set: 'Base Set 2',
        setCode: 'base4',
        attacks: [
            {
                cost: [
                    'Lightning',
                    'Colorless',
                    'Colorless'
                ],
                name: 'Agility',
                text: 'Flip a coin. If heads, during your opponent\'s next turn, prevent all effects of attacks, including damage, done to Raichu.',
                damage: '20',
                convertedEnergyCost: 3
            },
            {
                cost: [
                    'Lightning',
                    'Lightning',
                    'Lightning',
                    'Colorless'
                ],
                name: 'Thunder',
                text: 'Flip a coin. If tails, Raichu does 30 damage to itself.',
                damage: '60',
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
        id: 'base4-17',
        name: 'Scyther',
        nationalPokedexNumber: 123,
        imageUrl: 'https://images.pokemontcg.io/base4/17.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base4/17_hires.png',
        types: [
            'Grass'
        ],
        supertype: 'Pokémon',
        subtype: 'Basic',
        hp: '70',
        number: '17',
        artist: 'Ken Sugimori',
        rarity: 'Holo Rare',
        series: 'Base',
        set: 'Base Set 2',
        setCode: 'base4',
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
        id: 'base4-18',
        name: 'Venusaur',
        nationalPokedexNumber: 3,
        imageUrl: 'https://images.pokemontcg.io/base4/18.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base4/18_hires.png',
        types: [
            'Grass'
        ],
        supertype: 'Pokémon',
        subtype: 'Stage 2',
        evolvesFrom: 'Ivysaur',
        ability: {
            name: 'Energy Trans',
            text: 'As often as you like during your turn (before your attack), you may take 1 Grass Energy card attached to 1 of your Pokémon and attach it to a different one. This power can\'t be used if Venusaur is Asleep, Confused, or Paralyzed.',
            type: 'Pokémon Power'
        },
        hp: '100',
        retreatCost: [
            'Colorless',
            'Colorless'
        ],
        convertedRetreatCost: 2,
        number: '18',
        artist: 'Mitsuhiro Arita',
        rarity: 'Holo Rare',
        series: 'Base',
        set: 'Base Set 2',
        setCode: 'base4',
        attacks: [
            {
                cost: [
                    'Grass',
                    'Grass',
                    'Grass',
                    'Grass'
                ],
                name: 'Solarbeam',
                text: '',
                damage: '60',
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
        id: 'base4-19',
        name: 'Wigglytuff',
        nationalPokedexNumber: 40,
        imageUrl: 'https://images.pokemontcg.io/base4/19.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base4/19_hires.png',
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
        number: '19',
        artist: 'Mitsuhiro Arita',
        rarity: 'Holo Rare',
        series: 'Base',
        set: 'Base Set 2',
        setCode: 'base4',
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
        id: 'base4-20',
        name: 'Zapdos',
        nationalPokedexNumber: 145,
        imageUrl: 'https://images.pokemontcg.io/base4/20.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base4/20_hires.png',
        types: [
            'Lightning'
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
        number: '20',
        artist: 'Ken Sugimori',
        rarity: 'Holo Rare',
        series: 'Base',
        set: 'Base Set 2',
        setCode: 'base4',
        attacks: [
            {
                cost: [
                    'Lightning',
                    'Lightning',
                    'Lightning',
                    'Colorless'
                ],
                name: 'Thunder',
                text: 'Flip a coin. If tails, Zapdos does 30 damage to itself.',
                damage: '60',
                convertedEnergyCost: 4
            },
            {
                cost: [
                    'Lightning',
                    'Lightning',
                    'Lightning',
                    'Lightning'
                ],
                name: 'Thunderbolt',
                text: 'Discard all Energy cards attached to Zapdos in order to use this attack.',
                damage: '100',
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
        id: 'base4-21',
        name: 'Beedrill',
        nationalPokedexNumber: 15,
        imageUrl: 'https://images.pokemontcg.io/base4/21.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base4/21_hires.png',
        types: [
            'Grass'
        ],
        supertype: 'Pokémon',
        subtype: 'Stage 2',
        evolvesFrom: 'Kakuna',
        hp: '80',
        number: '21',
        artist: 'Ken Sugimori',
        rarity: 'Rare',
        series: 'Base',
        set: 'Base Set 2',
        setCode: 'base4',
        attacks: [
            {
                cost: [
                    'Colorless',
                    'Colorless',
                    'Colorless'
                ],
                name: 'Twineedle',
                text: 'Flip 2 coins. This attack does 30 damage times the number of heads.',
                damage: '30×',
                convertedEnergyCost: 3
            },
            {
                cost: [
                    'Grass',
                    'Grass',
                    'Grass'
                ],
                name: 'Poison Sting',
                text: 'Flip a coin. If heads, the Defending Pokémon is now Poisoned.',
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
        id: 'base4-22',
        name: 'Dragonair',
        nationalPokedexNumber: 148,
        imageUrl: 'https://images.pokemontcg.io/base4/22.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base4/22_hires.png',
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
        artist: 'Mitsuhiro Arita',
        rarity: 'Rare',
        series: 'Base',
        set: 'Base Set 2',
        setCode: 'base4',
        attacks: [
            {
                cost: [
                    'Colorless',
                    'Colorless',
                    'Colorless'
                ],
                name: 'Slam',
                text: 'Flip 2 coins. This attack does 30 damage times the number of heads.',
                damage: '',
                convertedEnergyCost: 3
            },
            {
                cost: [
                    'Colorless',
                    'Colorless',
                    'Colorless',
                    'Colorless'
                ],
                name: 'Hyper Beam',
                text: 'If the Defending Pokémon has any Energy cards attached to it, choose 1 of them and discard it.',
                damage: '20',
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
        id: 'base4-23',
        name: 'Dugtrio',
        nationalPokedexNumber: 51,
        imageUrl: 'https://images.pokemontcg.io/base4/23.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base4/23_hires.png',
        types: [
            'Fighting'
        ],
        supertype: 'Pokémon',
        subtype: 'Stage 1',
        evolvesFrom: 'Diglett',
        hp: '70',
        retreatCost: [
            'Colorless',
            'Colorless'
        ],
        convertedRetreatCost: 2,
        number: '23',
        artist: 'Keiji Kinebuchi',
        rarity: 'Rare',
        series: 'Base',
        set: 'Base Set 2',
        setCode: 'base4',
        attacks: [
            {
                cost: [
                    'Fighting',
                    'Fighting',
                    'Colorless'
                ],
                name: 'Slash',
                text: '',
                damage: '40',
                convertedEnergyCost: 3
            },
            {
                cost: [
                    'Fighting',
                    'Fighting',
                    'Fighting',
                    'Fighting'
                ],
                name: 'Earthquake',
                text: 'Does 10 damage to each of your own Benched Pokémon. (Don\'t apply Weakness and Resistance for Benched Pokémon.)',
                damage: '70',
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
        id: 'base4-24',
        name: 'Electabuzz',
        nationalPokedexNumber: 125,
        imageUrl: 'https://images.pokemontcg.io/base4/24.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base4/24_hires.png',
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
        number: '24',
        artist: 'Ken Sugimori',
        rarity: 'Rare',
        series: 'Base',
        set: 'Base Set 2',
        setCode: 'base4',
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
                    'Colorless'
                ],
                name: 'Thunderpunch',
                text: 'Flip a coin. If heads, this attack does 30 damage plus 10 more damage; if tails, this attack does 30 damage and Electabuzz does 10 damage to itself.',
                damage: '30+',
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
        id: 'base4-25',
        name: 'Electrode',
        nationalPokedexNumber: 101,
        imageUrl: 'https://images.pokemontcg.io/base4/25.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base4/25_hires.png',
        types: [
            'Lightning'
        ],
        supertype: 'Pokémon',
        subtype: 'Stage 1',
        evolvesFrom: 'Voltorb',
        ability: {
            name: 'Buzzap',
            text: 'At any time during your turn (before your attack) you may Knock Out Electrode and attach it to 1 of your other Pokémon. If you do, choose a type of Energy. Electrode is now an Energy card of that type (instead of a Pokémon) that provides 2 energy. This power can\'t be used if Electrode is Asleep, Confused, or Paralyzed.',
            type: 'Pokémon Power'
        },
        hp: '80',
        retreatCost: [
            'Colorless'
        ],
        convertedRetreatCost: 1,
        number: '25',
        artist: 'Keiji Kinebuchi',
        rarity: 'Rare',
        series: 'Base',
        set: 'Base Set 2',
        setCode: 'base4',
        attacks: [
            {
                cost: [
                    'Lightning',
                    'Lightning',
                    'Lightning'
                ],
                name: 'Electric Shock',
                text: 'Flip a coin. If tails, Electrode does 10 damage to itself.',
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
        id: 'base4-26',
        name: 'Kangaskhan',
        nationalPokedexNumber: 115,
        imageUrl: 'https://images.pokemontcg.io/base4/26.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base4/26_hires.png',
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
        number: '26',
        artist: 'Mitsuhiro Arita',
        rarity: 'Rare',
        series: 'Base',
        set: 'Base Set 2',
        setCode: 'base4',
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
        id: 'base4-27',
        name: 'Mr. Mime',
        nationalPokedexNumber: 122,
        imageUrl: 'https://images.pokemontcg.io/base4/27.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base4/27_hires.png',
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
        number: '27',
        artist: 'Ken Sugimori',
        rarity: 'Rare',
        series: 'Base',
        set: 'Base Set 2',
        setCode: 'base4',
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
        id: 'base4-28',
        name: 'Pidgeotto',
        nationalPokedexNumber: 17,
        imageUrl: 'https://images.pokemontcg.io/base4/28.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base4/28_hires.png',
        types: [
            'Colorless'
        ],
        supertype: 'Pokémon',
        subtype: 'Stage 1',
        evolvesFrom: 'Pidgey',
        hp: '60',
        retreatCost: [
            'Colorless'
        ],
        convertedRetreatCost: 1,
        number: '28',
        artist: 'Ken Sugimori',
        rarity: 'Rare',
        series: 'Base',
        set: 'Base Set 2',
        setCode: 'base4',
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
                    'Colorless',
                    'Colorless',
                    'Colorless'
                ],
                name: 'Mirror Move',
                text: 'If Pidgeotto was attacked last turn, do the final result of that attack on Pidgeotto to the Defending Pokémon.',
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
        id: 'base4-29',
        name: 'Pinsir',
        nationalPokedexNumber: 127,
        imageUrl: 'https://images.pokemontcg.io/base4/29.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base4/29_hires.png',
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
        number: '29',
        artist: 'Kagemaru Himeno',
        rarity: 'Rare',
        series: 'Base',
        set: 'Base Set 2',
        setCode: 'base4',
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
        id: 'base4-30',
        name: 'Snorlax',
        nationalPokedexNumber: 143,
        imageUrl: 'https://images.pokemontcg.io/base4/30.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base4/30_hires.png',
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
        number: '30',
        artist: 'Ken Sugimori',
        rarity: 'Rare',
        series: 'Base',
        set: 'Base Set 2',
        setCode: 'base4',
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
        id: 'base4-31',
        name: 'Venomoth',
        nationalPokedexNumber: 49,
        imageUrl: 'https://images.pokemontcg.io/base4/31.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base4/31_hires.png',
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
        number: '31',
        artist: 'Ken Sugimori',
        rarity: 'Rare',
        series: 'Base',
        set: 'Base Set 2',
        setCode: 'base4',
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
        id: 'base4-32',
        name: 'Victreebel',
        nationalPokedexNumber: 71,
        imageUrl: 'https://images.pokemontcg.io/base4/32.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base4/32_hires.png',
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
        number: '32',
        artist: 'Ken Sugimori',
        rarity: 'Rare',
        series: 'Base',
        set: 'Base Set 2',
        setCode: 'base4',
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
        id: 'base4-33',
        name: 'Arcanine',
        nationalPokedexNumber: 59,
        imageUrl: 'https://images.pokemontcg.io/base4/33.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base4/33_hires.png',
        types: [
            'Fire'
        ],
        supertype: 'Pokémon',
        subtype: 'Stage 1',
        evolvesFrom: 'Growlithe',
        hp: '100',
        retreatCost: [
            'Colorless',
            'Colorless',
            'Colorless'
        ],
        convertedRetreatCost: 3,
        number: '33',
        artist: 'Ken Sugimori',
        rarity: 'Uncommon',
        series: 'Base',
        set: 'Base Set 2',
        setCode: 'base4',
        attacks: [
            {
                cost: [
                    'Fire',
                    'Fire',
                    'Colorless'
                ],
                name: 'Flamethrower',
                text: 'Discard 1 Fire Energy card attached to Arcanine in order to use this attack.',
                damage: '50',
                convertedEnergyCost: 3
            },
            {
                cost: [
                    'Fire',
                    'Fire',
                    'Colorless',
                    'Colorless'
                ],
                name: 'Take Down',
                text: 'Arcanine does 30 damage to itself.',
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
        id: 'base4-34',
        name: 'Butterfree',
        nationalPokedexNumber: 12,
        imageUrl: 'https://images.pokemontcg.io/base4/34.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base4/34_hires.png',
        types: [
            'Grass'
        ],
        supertype: 'Pokémon',
        subtype: 'Stage 2',
        evolvesFrom: 'Metapod',
        hp: '70',
        number: '34',
        artist: 'Kagemaru Himeno',
        rarity: 'Uncommon',
        series: 'Base',
        set: 'Base Set 2',
        setCode: 'base4',
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
        id: 'base4-35',
        name: 'Charmeleon',
        nationalPokedexNumber: 5,
        imageUrl: 'https://images.pokemontcg.io/base4/35.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base4/35_hires.png',
        types: [
            'Fire'
        ],
        supertype: 'Pokémon',
        subtype: 'Stage 1',
        evolvesFrom: 'Charmander',
        hp: '80',
        retreatCost: [
            'Colorless'
        ],
        convertedRetreatCost: 1,
        number: '35',
        artist: 'Mitsuhiro Arita',
        rarity: 'Uncommon',
        series: 'Base',
        set: 'Base Set 2',
        setCode: 'base4',
        attacks: [
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
            },
            {
                cost: [
                    'Fire',
                    'Fire',
                    'Colorless'
                ],
                name: 'Flamethrower',
                text: 'Discard 1 Fire Energy card attached to Charmeleon in order to use this attack.',
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
        id: 'base4-36',
        name: 'Dewgong',
        nationalPokedexNumber: 87,
        imageUrl: 'https://images.pokemontcg.io/base4/36.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base4/36_hires.png',
        types: [
            'Water'
        ],
        supertype: 'Pokémon',
        subtype: 'Stage 1',
        evolvesFrom: 'Seel',
        hp: '80',
        retreatCost: [
            'Colorless',
            'Colorless',
            'Colorless'
        ],
        convertedRetreatCost: 3,
        number: '36',
        artist: 'Mitsuhiro Arita',
        rarity: 'Uncommon',
        series: 'Base',
        set: 'Base Set 2',
        setCode: 'base4',
        attacks: [
            {
                cost: [
                    'Water',
                    'Water',
                    'Colorless'
                ],
                name: 'Aurora Beam',
                text: '',
                damage: '50',
                convertedEnergyCost: 3
            },
            {
                cost: [
                    'Water',
                    'Water',
                    'Colorless',
                    'Colorless'
                ],
                name: 'Ice Beam',
                text: 'Flip a coin. If heads, the Defending Pokémon is now Paralyzed.',
                damage: '30',
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
        id: 'base4-37',
        name: 'Dodrio',
        nationalPokedexNumber: 85,
        imageUrl: 'https://images.pokemontcg.io/base4/37.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base4/37_hires.png',
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
        number: '37',
        artist: 'Mitsuhiro Arita',
        rarity: 'Uncommon',
        series: 'Base',
        set: 'Base Set 2',
        setCode: 'base4',
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
        id: 'base4-38',
        name: 'Dratini',
        nationalPokedexNumber: 147,
        imageUrl: 'https://images.pokemontcg.io/base4/38.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base4/38_hires.png',
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
        number: '38',
        artist: 'Ken Sugimori',
        rarity: 'Uncommon',
        series: 'Base',
        set: 'Base Set 2',
        setCode: 'base4',
        attacks: [
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
        ]
    },
    {
        id: 'base4-39',
        name: 'Exeggutor',
        nationalPokedexNumber: 103,
        imageUrl: 'https://images.pokemontcg.io/base4/39.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base4/39_hires.png',
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
        number: '39',
        artist: 'Kagemaru Himeno',
        rarity: 'Uncommon',
        series: 'Base',
        set: 'Base Set 2',
        setCode: 'base4',
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
        id: 'base4-40',
        name: 'Farfetch\'d',
        nationalPokedexNumber: 83,
        imageUrl: 'https://images.pokemontcg.io/base4/40.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base4/40_hires.png',
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
        artist: 'Ken Sugimori',
        rarity: 'Uncommon',
        series: 'Base',
        set: 'Base Set 2',
        setCode: 'base4',
        attacks: [
            {
                cost: [
                    'Colorless'
                ],
                name: 'Leek Slap',
                text: 'Flip a coin. If tails, this attack does nothing. Either way, you can\'t use this attack again as long as Farfetch\'d stays in play (even putting Farfetch\'d on the Bench won\'t let you use it again.)',
                damage: '',
                convertedEnergyCost: 1
            },
            {
                cost: [
                    'Colorless',
                    'Colorless',
                    'Colorless'
                ],
                name: 'Pot Smash',
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
        id: 'base4-41',
        name: 'Fearow',
        nationalPokedexNumber: 22,
        imageUrl: 'https://images.pokemontcg.io/base4/41.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base4/41_hires.png',
        types: [
            'Colorless'
        ],
        supertype: 'Pokémon',
        subtype: 'Stage 1',
        evolvesFrom: 'Spearow',
        hp: '70',
        number: '41',
        artist: 'Mitsuhiro Arita',
        rarity: 'Uncommon',
        series: 'Base',
        set: 'Base Set 2',
        setCode: 'base4',
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
        id: 'base4-42',
        name: 'Growlithe',
        nationalPokedexNumber: 58,
        imageUrl: 'https://images.pokemontcg.io/base4/42.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base4/42_hires.png',
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
        number: '42',
        artist: 'Ken Sugimori',
        rarity: 'Uncommon',
        series: 'Base',
        set: 'Base Set 2',
        setCode: 'base4',
        attacks: [
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
        id: 'base4-43',
        name: 'Haunter',
        nationalPokedexNumber: 93,
        imageUrl: 'https://images.pokemontcg.io/base4/43.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base4/43_hires.png',
        types: [
            'Psychic'
        ],
        supertype: 'Pokémon',
        subtype: 'Stage 1',
        evolvesFrom: 'Gastly',
        hp: '60',
        retreatCost: [
            'Colorless'
        ],
        convertedRetreatCost: 1,
        number: '43',
        artist: 'Keiji Kinebuchi',
        rarity: 'Uncommon',
        series: 'Base',
        set: 'Base Set 2',
        setCode: 'base4',
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
                    'Psychic',
                    'Psychic'
                ],
                name: 'Dream Eater',
                text: 'You can\'t this attack unless the Defending Pokémon is Asleep.',
                damage: '',
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
        id: 'base4-44',
        name: 'Ivysaur',
        nationalPokedexNumber: 2,
        imageUrl: 'https://images.pokemontcg.io/base4/44.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base4/44_hires.png',
        types: [
            'Grass'
        ],
        supertype: 'Pokémon',
        subtype: 'Stage 1',
        evolvesFrom: 'Barboach',
        hp: '60',
        retreatCost: [
            'Colorless'
        ],
        convertedRetreatCost: 1,
        number: '44',
        artist: 'Ken Sugimori',
        rarity: 'Uncommon',
        series: 'Base',
        set: 'Base Set 2',
        setCode: 'base4',
        attacks: [
            {
                cost: [
                    'Grass',
                    'Colorless',
                    'Colorless'
                ],
                name: 'Vine Whip',
                text: '',
                damage: '30',
                convertedEnergyCost: 3
            },
            {
                cost: [
                    'Grass',
                    'Grass',
                    'Grass'
                ],
                name: 'Poisonpowder',
                text: 'The Defending Pokémon is now Poisoned.',
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
        id: 'base4-45',
        name: 'Jynx',
        nationalPokedexNumber: 124,
        imageUrl: 'https://images.pokemontcg.io/base4/45.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base4/45_hires.png',
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
        number: '45',
        artist: 'Ken Sugimori',
        rarity: 'Uncommon',
        series: 'Base',
        set: 'Base Set 2',
        setCode: 'base4',
        attacks: [
            {
                cost: [
                    'Psychic'
                ],
                name: 'Doubleslap',
                text: 'Flip 2 coins. This attack does 10 damage times the number of heads.',
                damage: '10×',
                convertedEnergyCost: 1
            },
            {
                cost: [
                    'Psychic',
                    'Psychic',
                    'Colorless'
                ],
                name: 'Meditate',
                text: 'Does 20 damage plus 10 more damage for each damage counter on the Defending Pokémon.',
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
        id: 'base4-46',
        name: 'Kadabra',
        nationalPokedexNumber: 64,
        imageUrl: 'https://images.pokemontcg.io/base4/46.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base4/46_hires.png',
        types: [
            'Psychic'
        ],
        supertype: 'Pokémon',
        subtype: 'Stage 1',
        evolvesFrom: 'Abra',
        hp: '60',
        retreatCost: [
            'Colorless',
            'Colorless',
            'Colorless'
        ],
        convertedRetreatCost: 3,
        number: '46',
        artist: 'Ken Sugimori',
        rarity: 'Uncommon',
        series: 'Base',
        set: 'Base Set 2',
        setCode: 'base4',
        attacks: [
            {
                cost: [
                    'Psychic',
                    'Psychic'
                ],
                name: 'Recover',
                text: 'Discard 1 Psychic Energy card attached to Kadabra in order use this attack. Remove all damage counters from Kadabra.',
                damage: '',
                convertedEnergyCost: 2
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
                type: 'Psychic',
                value: '×2'
            }
        ]
    },
    {
        id: 'base4-47',
        name: 'Kakuna',
        nationalPokedexNumber: 14,
        imageUrl: 'https://images.pokemontcg.io/base4/47.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base4/47_hires.png',
        types: [
            'Grass'
        ],
        supertype: 'Pokémon',
        subtype: 'Stage 1',
        evolvesFrom: 'Weedle',
        hp: '80',
        retreatCost: [
            'Colorless',
            'Colorless'
        ],
        convertedRetreatCost: 2,
        number: '47',
        artist: 'Keiji Kinebuchi',
        rarity: 'Uncommon',
        series: 'Base',
        set: 'Base Set 2',
        setCode: 'base4',
        attacks: [
            {
                cost: [
                    'Colorless',
                    'Colorless'
                ],
                name: 'Stiffen',
                text: 'Flip a coin. If heads, prevent all damage done to Kakuna during your opponent\'s next turn. (Any other effects of attacks still happen.)',
                damage: '',
                convertedEnergyCost: 2
            },
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
        id: 'base4-48',
        name: 'Lickitung',
        nationalPokedexNumber: 108,
        imageUrl: 'https://images.pokemontcg.io/base4/48.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base4/48_hires.png',
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
        number: '48',
        artist: 'Mitsuhiro Arita',
        rarity: 'Uncommon',
        series: 'Base',
        set: 'Base Set 2',
        setCode: 'base4',
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
        id: 'base4-49',
        name: 'Machoke',
        nationalPokedexNumber: 67,
        imageUrl: 'https://images.pokemontcg.io/base4/49.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base4/49_hires.png',
        types: [
            'Fighting'
        ],
        supertype: 'Pokémon',
        subtype: 'Stage 1',
        evolvesFrom: 'Machop',
        hp: '80',
        retreatCost: [
            'Colorless',
            'Colorless',
            'Colorless'
        ],
        convertedRetreatCost: 3,
        number: '49',
        artist: 'Ken Sugimori',
        rarity: 'Uncommon',
        series: 'Base',
        set: 'Base Set 2',
        setCode: 'base4',
        attacks: [
            {
                cost: [
                    'Fighting',
                    'Fighting',
                    'Colorless'
                ],
                name: 'Karate Chop',
                text: 'Does 50 damage minus 10 for each damage counter on Machoke.',
                damage: '',
                convertedEnergyCost: 3
            },
            {
                cost: [
                    'Fighting',
                    'Fighting',
                    'Colorless',
                    'Colorless'
                ],
                name: 'Submission',
                text: 'Machoke does 20 damage to itself.',
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
        id: 'base4-50',
        name: 'Magikarp',
        nationalPokedexNumber: 129,
        imageUrl: 'https://images.pokemontcg.io/base4/50.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base4/50_hires.png',
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
        number: '50',
        artist: 'Mitsuhiro Arita',
        rarity: 'Uncommon',
        series: 'Base',
        set: 'Base Set 2',
        setCode: 'base4',
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
                name: 'Flail',
                text: 'Does 10 damage times number of damage counters on Magikarp.',
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
        id: 'base4-51',
        name: 'Magmar',
        nationalPokedexNumber: 126,
        imageUrl: 'https://images.pokemontcg.io/base4/51.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base4/51_hires.png',
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
        number: '51',
        artist: 'Ken Sugimori',
        rarity: 'Uncommon',
        series: 'Base',
        set: 'Base Set 2',
        setCode: 'base4',
        attacks: [
            {
                cost: [
                    'Fire',
                    'Fire'
                ],
                name: 'Fire Punch',
                text: '',
                damage: '30',
                convertedEnergyCost: 2
            },
            {
                cost: [
                    'Fire',
                    'Fire',
                    'Colorless'
                ],
                name: 'Flamethrower',
                text: 'Discard 1 Fire Energy card attached to Magmar in order to use this attack.',
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
        id: 'base4-52',
        name: 'Marowak',
        nationalPokedexNumber: 105,
        imageUrl: 'https://images.pokemontcg.io/base4/52.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base4/52_hires.png',
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
        number: '52',
        artist: 'Mitsuhiro Arita',
        rarity: 'Uncommon',
        series: 'Base',
        set: 'Base Set 2',
        setCode: 'base4',
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
        id: 'base4-53',
        name: 'Nidorina',
        nationalPokedexNumber: 30,
        imageUrl: 'https://images.pokemontcg.io/base4/53.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base4/53_hires.png',
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
        number: '53',
        artist: 'Ken Sugimori',
        rarity: 'Uncommon',
        series: 'Base',
        set: 'Base Set 2',
        setCode: 'base4',
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
        id: 'base4-54',
        name: 'Nidorino',
        nationalPokedexNumber: 33,
        imageUrl: 'https://images.pokemontcg.io/base4/54.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base4/54_hires.png',
        types: [
            'Grass'
        ],
        supertype: 'Pokémon',
        subtype: 'Stage 1',
        evolvesFrom: 'Nidoran♂',
        hp: '60',
        retreatCost: [
            'Colorless'
        ],
        convertedRetreatCost: 1,
        number: '54',
        artist: 'Mitsuhiro Arita',
        rarity: 'Uncommon',
        series: 'Base',
        set: 'Base Set 2',
        setCode: 'base4',
        attacks: [
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
            },
            {
                cost: [
                    'Grass',
                    'Grass',
                    'Colorless',
                    'Colorless'
                ],
                name: 'Horn Drill',
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
        id: 'base4-55',
        name: 'Parasect',
        nationalPokedexNumber: 47,
        imageUrl: 'https://images.pokemontcg.io/base4/55.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base4/55_hires.png',
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
        number: '55',
        artist: 'Ken Sugimori',
        rarity: 'Uncommon',
        series: 'Base',
        set: 'Base Set 2',
        setCode: 'base4',
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
        id: 'base4-56',
        name: 'Persian',
        nationalPokedexNumber: 53,
        imageUrl: 'https://images.pokemontcg.io/base4/56.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base4/56_hires.png',
        types: [
            'Colorless'
        ],
        supertype: 'Pokémon',
        subtype: 'Stage 1',
        evolvesFrom: 'Meowth',
        hp: '70',
        number: '56',
        artist: 'Kagemaru Himeno',
        rarity: 'Uncommon',
        series: 'Base',
        set: 'Base Set 2',
        setCode: 'base4',
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
        id: 'base4-57',
        name: 'Poliwhirl',
        nationalPokedexNumber: 61,
        imageUrl: 'https://images.pokemontcg.io/base4/57.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base4/57_hires.png',
        types: [
            'Water'
        ],
        supertype: 'Pokémon',
        subtype: 'Stage 1',
        evolvesFrom: 'Poliwag',
        hp: '60',
        retreatCost: [
            'Colorless'
        ],
        convertedRetreatCost: 1,
        number: '57',
        artist: 'Ken Sugimori',
        rarity: 'Uncommon',
        series: 'Base',
        set: 'Base Set 2',
        setCode: 'base4',
        attacks: [
            {
                cost: [
                    'Water',
                    'Water'
                ],
                name: 'Amnesia',
                text: 'Choose 1 of defenders attacks. Defender cannot use that attack next turn.',
                damage: '',
                convertedEnergyCost: 2
            },
            {
                cost: [
                    'Water',
                    'Water',
                    'Colorless'
                ],
                name: 'Doubleslap',
                text: 'Flip 2 coins. This attack does 30 damage times number of heads.',
                damage: '30×',
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
        id: 'base4-58',
        name: 'Raticate',
        nationalPokedexNumber: 20,
        imageUrl: 'https://images.pokemontcg.io/base4/58.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base4/58_hires.png',
        types: [
            'Colorless'
        ],
        supertype: 'Pokémon',
        subtype: 'Stage 1',
        evolvesFrom: 'Poochyena',
        hp: '60',
        retreatCost: [
            'Colorless'
        ],
        convertedRetreatCost: 1,
        number: '58',
        artist: 'Ken Sugimori',
        rarity: 'Uncommon',
        series: 'Base',
        set: 'Base Set 2',
        setCode: 'base4',
        attacks: [
            {
                cost: [
                    'Colorless'
                ],
                name: 'Bite',
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
                name: 'Super Fang',
                text: 'Does damage to the Defending Pokémon equal to half the Defending Pokémon\'s remaining HP (rounded up to the nearest 10).',
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
        id: 'base4-59',
        name: 'Rhydon',
        nationalPokedexNumber: 112,
        imageUrl: 'https://images.pokemontcg.io/base4/59.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base4/59_hires.png',
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
        number: '59',
        artist: 'Kagemaru Himeno',
        rarity: 'Uncommon',
        series: 'Base',
        set: 'Base Set 2',
        setCode: 'base4',
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
        id: 'base4-60',
        name: 'Seaking',
        nationalPokedexNumber: 119,
        imageUrl: 'https://images.pokemontcg.io/base4/60.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base4/60_hires.png',
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
        number: '60',
        artist: 'Kagemaru Himeno',
        rarity: 'Uncommon',
        series: 'Base',
        set: 'Base Set 2',
        setCode: 'base4',
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
        id: 'base4-61',
        name: 'Seel',
        nationalPokedexNumber: 86,
        imageUrl: 'https://images.pokemontcg.io/base4/61.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base4/61_hires.png',
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
        number: '61',
        artist: 'Ken Sugimori',
        rarity: 'Uncommon',
        series: 'Base',
        set: 'Base Set 2',
        setCode: 'base4',
        attacks: [
            {
                cost: [
                    'Water'
                ],
                name: 'Headbutt',
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
        id: 'base4-62',
        name: 'Tauros',
        nationalPokedexNumber: 128,
        imageUrl: 'https://images.pokemontcg.io/base4/62.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base4/62_hires.png',
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
        number: '62',
        artist: 'Kagemaru Himeno',
        rarity: 'Uncommon',
        series: 'Base',
        set: 'Base Set 2',
        setCode: 'base4',
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
        id: 'base4-63',
        name: 'Wartortle',
        nationalPokedexNumber: 8,
        imageUrl: 'https://images.pokemontcg.io/base4/63.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base4/63_hires.png',
        types: [
            'Water'
        ],
        supertype: 'Pokémon',
        subtype: 'Stage 1',
        evolvesFrom: 'Squirtle',
        hp: '70',
        retreatCost: [
            'Colorless'
        ],
        convertedRetreatCost: 1,
        number: '63',
        artist: 'Ken Sugimori',
        rarity: 'Uncommon',
        series: 'Base',
        set: 'Base Set 2',
        setCode: 'base4',
        attacks: [
            {
                cost: [
                    'Water',
                    'Colorless'
                ],
                name: 'Withdraw',
                text: 'Flip a coin. If heads, prevent all damage done to Wartortle during your opponent\'s next turn. (Any other effects of attacks still happen.)',
                damage: '',
                convertedEnergyCost: 2
            },
            {
                cost: [
                    'Water',
                    'Colorless',
                    'Colorless'
                ],
                name: 'Bite',
                text: '',
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
        id: 'base4-64',
        name: 'Weepinbell',
        nationalPokedexNumber: 70,
        imageUrl: 'https://images.pokemontcg.io/base4/64.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base4/64_hires.png',
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
        number: '64',
        artist: 'Kagemaru Himeno',
        rarity: 'Uncommon',
        series: 'Base',
        set: 'Base Set 2',
        setCode: 'base4',
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
        id: 'base4-65',
        name: 'Abra',
        nationalPokedexNumber: 63,
        imageUrl: 'https://images.pokemontcg.io/base4/65.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base4/65_hires.png',
        types: [
            'Psychic'
        ],
        supertype: 'Pokémon',
        subtype: 'Basic',
        hp: '30',
        number: '65',
        artist: 'Mitsuhiro Arita',
        rarity: 'Common',
        series: 'Base',
        set: 'Base Set 2',
        setCode: 'base4',
        attacks: [
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
        id: 'base4-66',
        name: 'Bellsprout',
        nationalPokedexNumber: 69,
        imageUrl: 'https://images.pokemontcg.io/base4/66.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base4/66_hires.png',
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
        number: '66',
        artist: 'Kagemaru Himeno',
        rarity: 'Common',
        series: 'Base',
        set: 'Base Set 2',
        setCode: 'base4',
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
        id: 'base4-67',
        name: 'Bulbasaur',
        nationalPokedexNumber: 1,
        imageUrl: 'https://images.pokemontcg.io/base4/67.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base4/67_hires.png',
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
        number: '67',
        artist: 'Mitsuhiro Arita',
        rarity: 'Common',
        series: 'Base',
        set: 'Base Set 2',
        setCode: 'base4',
        attacks: [
            {
                cost: [
                    'Grass',
                    'Grass'
                ],
                name: 'Leech Seed',
                text: 'Unless all damage from this attack is prevented, you may remove 1 damage counter from Bulbasaur.',
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
        id: 'base4-68',
        name: 'Caterpie',
        nationalPokedexNumber: 10,
        imageUrl: 'https://images.pokemontcg.io/base4/68.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base4/68_hires.png',
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
        artist: 'Ken Sugimori',
        rarity: 'Common',
        series: 'Base',
        set: 'Base Set 2',
        setCode: 'base4',
        attacks: [
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
        id: 'base4-69',
        name: 'Charmander',
        nationalPokedexNumber: 4,
        imageUrl: 'https://images.pokemontcg.io/base4/69.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base4/69_hires.png',
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
        number: '69',
        artist: 'Mitsuhiro Arita',
        rarity: 'Common',
        series: 'Base',
        set: 'Base Set 2',
        setCode: 'base4',
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
                    'Fire',
                    'Colorless'
                ],
                name: 'Ember',
                text: 'Discard 1 Fire Energy card attached to Charmander in order to use this attack.',
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
        id: 'base4-70',
        name: 'Cubone',
        nationalPokedexNumber: 104,
        imageUrl: 'https://images.pokemontcg.io/base4/70.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base4/70_hires.png',
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
        artist: 'Mitsuhiro Arita',
        rarity: 'Common',
        series: 'Base',
        set: 'Base Set 2',
        setCode: 'base4',
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
        id: 'base4-71',
        name: 'Diglett',
        nationalPokedexNumber: 50,
        imageUrl: 'https://images.pokemontcg.io/base4/71.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base4/71_hires.png',
        types: [
            'Fighting'
        ],
        supertype: 'Pokémon',
        subtype: 'Basic',
        hp: '30',
        number: '71',
        artist: 'Keiji Kinebuchi',
        rarity: 'Common',
        series: 'Base',
        set: 'Base Set 2',
        setCode: 'base4',
        attacks: [
            {
                cost: [
                    'Fighting'
                ],
                name: 'Dig',
                text: '',
                damage: '10',
                convertedEnergyCost: 1
            },
            {
                cost: [
                    'Fighting',
                    'Fighting'
                ],
                name: 'Mud Slap',
                text: '',
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
        id: 'base4-72',
        name: 'Doduo',
        nationalPokedexNumber: 84,
        imageUrl: 'https://images.pokemontcg.io/base4/72.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base4/72_hires.png',
        types: [
            'Colorless'
        ],
        supertype: 'Pokémon',
        subtype: 'Basic',
        hp: '50',
        number: '72',
        artist: 'Mitsuhiro Arita',
        rarity: 'Common',
        series: 'Base',
        set: 'Base Set 2',
        setCode: 'base4',
        attacks: [
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
        id: 'base4-73',
        name: 'Drowzee',
        nationalPokedexNumber: 96,
        imageUrl: 'https://images.pokemontcg.io/base4/73.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base4/73_hires.png',
        types: [
            'Psychic'
        ],
        supertype: 'Pokémon',
        subtype: 'Basic',
        hp: '50',
        number: '73',
        artist: 'Ken Sugimori',
        rarity: 'Common',
        series: 'Base',
        set: 'Base Set 2',
        setCode: 'base4',
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
                    'Psychic'
                ],
                name: 'Confuse Ray',
                text: 'Flip a coin. If heads, the Defending Pokémon is now Confused.',
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
        id: 'base4-74',
        name: 'Exeggcute',
        nationalPokedexNumber: 102,
        imageUrl: 'https://images.pokemontcg.io/base4/74.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base4/74_hires.png',
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
        number: '74',
        artist: 'Mitsuhiro Arita',
        rarity: 'Common',
        series: 'Base',
        set: 'Base Set 2',
        setCode: 'base4',
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
        id: 'base4-75',
        name: 'Gastly',
        nationalPokedexNumber: 92,
        imageUrl: 'https://images.pokemontcg.io/base4/75.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base4/75_hires.png',
        types: [
            'Psychic'
        ],
        supertype: 'Pokémon',
        subtype: 'Basic',
        hp: '30',
        number: '75',
        artist: 'Keiji Kinebuchi',
        rarity: 'Common',
        series: 'Base',
        set: 'Base Set 2',
        setCode: 'base4',
        attacks: [
            {
                cost: [
                    'Psychic'
                ],
                name: 'Sleeping Gas',
                text: 'Flip a coin. If heads, the Defending Pokémon is now Asleep.',
                damage: '',
                convertedEnergyCost: 1
            },
            {
                cost: [
                    'Psychic',
                    'Colorless'
                ],
                name: 'Destiny Bond',
                text: 'Discard 1 Psychic Energy card attached to Gastly in order to use this attack. If a Pokémon Knocks Out Gastly during your opponent\'s next turn, Knock Out that Pokémon.',
                damage: '',
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
        id: 'base4-76',
        name: 'Goldeen',
        nationalPokedexNumber: 118,
        imageUrl: 'https://images.pokemontcg.io/base4/76.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base4/76_hires.png',
        types: [
            'Water'
        ],
        supertype: 'Pokémon',
        subtype: 'Basic',
        hp: '40',
        number: '76',
        artist: 'Kagemaru Himeno',
        rarity: 'Common',
        series: 'Base',
        set: 'Base Set 2',
        setCode: 'base4',
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
        id: 'base4-77',
        name: 'Jigglypuff',
        nationalPokedexNumber: 39,
        imageUrl: 'https://images.pokemontcg.io/base4/77.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base4/77_hires.png',
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
        number: '77',
        artist: 'Kagemaru Himeno',
        rarity: 'Common',
        series: 'Base',
        set: 'Base Set 2',
        setCode: 'base4',
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
        id: 'base4-78',
        name: 'Machop',
        nationalPokedexNumber: 66,
        imageUrl: 'https://images.pokemontcg.io/base4/78.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base4/78_hires.png',
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
        number: '78',
        artist: 'Mitsuhiro Arita',
        rarity: 'Common',
        series: 'Base',
        set: 'Base Set 2',
        setCode: 'base4',
        attacks: [
            {
                cost: [
                    'Fighting'
                ],
                name: 'Low Kick',
                text: '',
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
        id: 'base4-79',
        name: 'Magnemite',
        nationalPokedexNumber: 81,
        imageUrl: 'https://images.pokemontcg.io/base4/79.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base4/79_hires.png',
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
        number: '79',
        artist: 'Keiji Kinebuchi',
        rarity: 'Common',
        series: 'Base',
        set: 'Base Set 2',
        setCode: 'base4',
        attacks: [
            {
                cost: [
                    'Lightning'
                ],
                name: 'Thunder Wave',
                text: 'Flip a coin. If heads, the Defending Pokémon is now Paralyzed.',
                damage: '10',
                convertedEnergyCost: 1
            },
            {
                cost: [
                    'Lightning',
                    'Colorless'
                ],
                name: 'Selfdestruct',
                text: 'Does 10 damage to each Pokémon on each player\'s Bench. (Don\'t apply Weakness and Resistance for Benched Pokémon.) Magnemite does 40 damage to itself.',
                damage: '40',
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
        id: 'base4-80',
        name: 'Meowth',
        nationalPokedexNumber: 52,
        imageUrl: 'https://images.pokemontcg.io/base4/80.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base4/80_hires.png',
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
        artist: 'Mitsuhiro Arita',
        rarity: 'Common',
        series: 'Base',
        set: 'Base Set 2',
        setCode: 'base4',
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
        id: 'base4-81',
        name: 'Metapod',
        nationalPokedexNumber: 11,
        imageUrl: 'https://images.pokemontcg.io/base4/81.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base4/81_hires.png',
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
        number: '81',
        artist: 'Ken Sugimori',
        rarity: 'Common',
        series: 'Base',
        set: 'Base Set 2',
        setCode: 'base4',
        attacks: [
            {
                cost: [
                    'Colorless',
                    'Colorless'
                ],
                name: 'Stiffen',
                text: 'Flip a coin. If heads, prevent all damage done to Metapod during your opponent\'s next turn. (Any other effects of attacks still happen.)',
                damage: '',
                convertedEnergyCost: 2
            },
            {
                cost: [
                    'Grass',
                    'Grass'
                ],
                name: 'Stun Spore',
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
        id: 'base4-82',
        name: 'Nidoran♀',
        nationalPokedexNumber: 29,
        imageUrl: 'https://images.pokemontcg.io/base4/82.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base4/82_hires.png',
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
        number: '82',
        artist: 'Ken Sugimori',
        rarity: 'Common',
        series: 'Base',
        set: 'Base Set 2',
        setCode: 'base4',
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
        id: 'base4-83',
        name: 'Nidoran♂',
        nationalPokedexNumber: 32,
        imageUrl: 'https://images.pokemontcg.io/base4/83.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base4/83_hires.png',
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
        number: '83',
        artist: 'Ken Sugimori',
        rarity: 'Common',
        series: 'Base',
        set: 'Base Set 2',
        setCode: 'base4',
        attacks: [
            {
                cost: [
                    'Grass'
                ],
                name: 'Horn Hazard',
                text: 'Flip a coin. If tails, this attack does nothing.',
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
        id: 'base4-84',
        name: 'Onix',
        nationalPokedexNumber: 95,
        imageUrl: 'https://images.pokemontcg.io/base4/84.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base4/84_hires.png',
        types: [
            'Fighting'
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
        number: '84',
        artist: 'Ken Sugimori',
        rarity: 'Common',
        series: 'Base',
        set: 'Base Set 2',
        setCode: 'base4',
        attacks: [
            {
                cost: [
                    'Fighting'
                ],
                name: 'Rock Throw',
                text: '',
                damage: '10',
                convertedEnergyCost: 1
            },
            {
                cost: [
                    'Fighting',
                    'Fighting'
                ],
                name: 'Harden',
                text: 'During opponent\'s next turn, whenever 30 or less damage is done to Onix (after applying Weakness and Resistance), prevent that damage. (Any other effects of attacks still happen.)',
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
        id: 'base4-85',
        name: 'Paras',
        nationalPokedexNumber: 46,
        imageUrl: 'https://images.pokemontcg.io/base4/85.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base4/85_hires.png',
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
        artist: 'Ken Sugimori',
        rarity: 'Common',
        series: 'Base',
        set: 'Base Set 2',
        setCode: 'base4',
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
        id: 'base4-86',
        name: 'Pidgey',
        nationalPokedexNumber: 16,
        imageUrl: 'https://images.pokemontcg.io/base4/86.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base4/86_hires.png',
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
        number: '86',
        artist: 'Ken Sugimori',
        rarity: 'Common',
        series: 'Base',
        set: 'Base Set 2',
        setCode: 'base4',
        attacks: [
            {
                cost: [
                    'Colorless',
                    'Colorless'
                ],
                name: 'Whirlwind',
                text: 'If your opponent has any Benched Pokémon, he or she chooses 1 of them and switches it with the Defending Pokémon. (Do the damage before switching the Pokémon.)',
                damage: '10',
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
        id: 'base4-87',
        name: 'Pikachu',
        nationalPokedexNumber: 25,
        imageUrl: 'https://images.pokemontcg.io/base4/87.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base4/87_hires.png',
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
        number: '87',
        artist: 'Mitsuhiro Arita',
        rarity: 'Common',
        series: 'Base',
        set: 'Base Set 2',
        setCode: 'base4',
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
                    'Lightning',
                    'Colorless'
                ],
                name: 'Thunder Jolt',
                text: 'Flip a coin. If tails, Pikachu does 10 damage to itself.',
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
        id: 'base4-88',
        name: 'Poliwag',
        nationalPokedexNumber: 60,
        imageUrl: 'https://images.pokemontcg.io/base4/88.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base4/88_hires.png',
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
        number: '88',
        artist: 'Ken Sugimori',
        rarity: 'Common',
        series: 'Base',
        set: 'Base Set 2',
        setCode: 'base4',
        attacks: [
            {
                cost: [
                    'Water'
                ],
                name: 'Water Gun',
                text: 'Does 10 damage plus 10 damage for each Energy attached to Poliwag but not used to pay for this attack\'s Energy cost. Extra Energy after the end don\'t count.',
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
        id: 'base4-89',
        name: 'Rattata',
        nationalPokedexNumber: 19,
        imageUrl: 'https://images.pokemontcg.io/base4/89.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base4/89_hires.png',
        types: [
            'Colorless'
        ],
        supertype: 'Pokémon',
        subtype: 'Basic',
        hp: '30',
        number: '89',
        artist: 'Mitsuhiro Arita',
        rarity: 'Common',
        series: 'Base',
        set: 'Base Set 2',
        setCode: 'base4',
        attacks: [
            {
                cost: [
                    'Colorless'
                ],
                name: 'Bite',
                text: '',
                damage: '20',
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
        id: 'base4-90',
        name: 'Rhyhorn',
        nationalPokedexNumber: 111,
        imageUrl: 'https://images.pokemontcg.io/base4/90.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base4/90_hires.png',
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
        number: '90',
        artist: 'Mitsuhiro Arita',
        rarity: 'Common',
        series: 'Base',
        set: 'Base Set 2',
        setCode: 'base4',
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
        id: 'base4-91',
        name: 'Sandshrew',
        nationalPokedexNumber: 27,
        imageUrl: 'https://images.pokemontcg.io/base4/91.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base4/91_hires.png',
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
        number: '91',
        artist: 'Ken Sugimori',
        rarity: 'Common',
        series: 'Base',
        set: 'Base Set 2',
        setCode: 'base4',
        attacks: [
            {
                cost: [
                    'Fighting'
                ],
                name: 'Sand-attack',
                text: 'If the Defending Pokémon tries to attack during your opponent\'s next turn, your opponent flips a coin. If tails, that attack does nothing.',
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
        id: 'base4-92',
        name: 'Spearow',
        nationalPokedexNumber: 21,
        imageUrl: 'https://images.pokemontcg.io/base4/92.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base4/92_hires.png',
        types: [
            'Colorless'
        ],
        supertype: 'Pokémon',
        subtype: 'Basic',
        hp: '50',
        number: '92',
        artist: 'Mitsuhiro Arita',
        rarity: 'Common',
        series: 'Base',
        set: 'Base Set 2',
        setCode: 'base4',
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
        id: 'base4-93',
        name: 'Squirtle',
        nationalPokedexNumber: 7,
        imageUrl: 'https://images.pokemontcg.io/base4/93.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base4/93_hires.png',
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
        number: '93',
        artist: 'Mitsuhiro Arita',
        rarity: 'Common',
        series: 'Base',
        set: 'Base Set 2',
        setCode: 'base4',
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
                name: 'Withdraw',
                text: 'Flip a coin. If heads, prevent all damage done to Squirtle during your opponent\'s next turn. (Any other effects of attacks still happen.)',
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
        id: 'base4-94',
        name: 'Starmie',
        nationalPokedexNumber: 121,
        imageUrl: 'https://images.pokemontcg.io/base4/94.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base4/94_hires.png',
        types: [
            'Water'
        ],
        supertype: 'Pokémon',
        subtype: 'Stage 1',
        evolvesFrom: 'Staryu',
        hp: '60',
        retreatCost: [
            'Colorless'
        ],
        convertedRetreatCost: 1,
        number: '94',
        artist: 'Keiji Kinebuchi',
        rarity: 'Common',
        series: 'Base',
        set: 'Base Set 2',
        setCode: 'base4',
        attacks: [
            {
                cost: [
                    'Water',
                    'Water'
                ],
                name: 'Recover',
                text: 'Discard 1 Energy card to Starmie in order to use this attack. Remove all damage counters from Starmie.',
                damage: '',
                convertedEnergyCost: 2
            },
            {
                cost: [
                    'Water',
                    'Colorless',
                    'Colorless'
                ],
                name: 'Star Freeze',
                text: 'Flip a coin. If heads, the Defending Pokémon is now Paralyzed.',
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
        id: 'base4-95',
        name: 'Staryu',
        nationalPokedexNumber: 120,
        imageUrl: 'https://images.pokemontcg.io/base4/95.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base4/95_hires.png',
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
        number: '95',
        artist: 'Keiji Kinebuchi',
        rarity: 'Common',
        series: 'Base',
        set: 'Base Set 2',
        setCode: 'base4',
        attacks: [
            {
                cost: [
                    'Water'
                ],
                name: 'Slap',
                text: '',
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
        id: 'base4-96',
        name: 'Tangela',
        nationalPokedexNumber: 114,
        imageUrl: 'https://images.pokemontcg.io/base4/96.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base4/96_hires.png',
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
        number: '96',
        artist: 'Mitsuhiro Arita',
        rarity: 'Common',
        series: 'Base',
        set: 'Base Set 2',
        setCode: 'base4',
        attacks: [
            {
                cost: [
                    'Grass',
                    'Colorless'
                ],
                name: 'Bind',
                text: 'Flip a coin. If heads, the Defending Pokémon is now Paralyzed.',
                damage: '20',
                convertedEnergyCost: 2
            },
            {
                cost: [
                    'Grass',
                    'Grass',
                    'Grass'
                ],
                name: 'Poisonpowder',
                text: 'The Defending Pokémon is now Poisoned.',
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
        id: 'base4-97',
        name: 'Venonat',
        nationalPokedexNumber: 48,
        imageUrl: 'https://images.pokemontcg.io/base4/97.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base4/97_hires.png',
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
        number: '97',
        artist: 'Mitsuhiro Arita',
        rarity: 'Common',
        series: 'Base',
        set: 'Base Set 2',
        setCode: 'base4',
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
        id: 'base4-98',
        name: 'Voltorb',
        nationalPokedexNumber: 100,
        imageUrl: 'https://images.pokemontcg.io/base4/98.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base4/98_hires.png',
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
        number: '98',
        artist: 'Keiji Kinebuchi',
        rarity: 'Common',
        series: 'Base',
        set: 'Base Set 2',
        setCode: 'base4',
        attacks: [
            {
                cost: [
                    'Colorless'
                ],
                name: 'Tackle',
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
        id: 'base4-99',
        name: 'Vulpix',
        nationalPokedexNumber: 37,
        imageUrl: 'https://images.pokemontcg.io/base4/99.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base4/99_hires.png',
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
        number: '99',
        artist: 'Ken Sugimori',
        rarity: 'Common',
        series: 'Base',
        set: 'Base Set 2',
        setCode: 'base4',
        attacks: [
            {
                cost: [
                    'Fire',
                    'Fire'
                ],
                name: 'Confuse Ray',
                text: 'Flip a coin. If heads, the Defending Pokémon is now Confused.',
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
        id: 'base4-100',
        name: 'Weedle',
        nationalPokedexNumber: 13,
        imageUrl: 'https://images.pokemontcg.io/base4/100.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base4/100_hires.png',
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
        number: '100',
        artist: 'Mitsuhiro Arita',
        rarity: 'Common',
        series: 'Base',
        set: 'Base Set 2',
        setCode: 'base4',
        attacks: [
            {
                cost: [
                    'Grass'
                ],
                name: 'Poison Sting',
                text: 'Flip a coin. If heads, Defending Pokémon is now Poisoned.',
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
        id: 'base4-101',
        name: 'Computer Search',
        imageUrl: 'https://images.pokemontcg.io/base4/101.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base4/101_hires.png',
        supertype: 'Trainer',
        subtype: '',
        number: '101',
        artist: 'Keiji Kinebuchi',
        rarity: 'Rare',
        series: 'Base',
        set: 'Base Set 2',
        setCode: 'base4',
        text: [
            'Discard 2 other cards from your hand in order to search your deck for any card and put it into your hand. Shuffle your deck afterward.'
        ]
    },
    {
        id: 'base4-102',
        name: 'Impostor Professor Oak',
        imageUrl: 'https://images.pokemontcg.io/base4/102.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base4/102_hires.png',
        supertype: 'Trainer',
        subtype: '',
        number: '102',
        artist: 'Ken Sugimori',
        rarity: 'Rare',
        series: 'Base',
        set: 'Base Set 2',
        setCode: 'base4',
        text: [
            'Your opponent shuffles his or her hand into his or her deck, then draws 7 cards.'
        ]
    },
    {
        id: 'base4-103',
        name: 'Item Finder',
        imageUrl: 'https://images.pokemontcg.io/base4/103.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base4/103_hires.png',
        supertype: 'Trainer',
        subtype: '',
        number: '103',
        artist: 'Keiji Kinebuchi',
        rarity: 'Rare',
        series: 'Base',
        set: 'Base Set 2',
        setCode: 'base4',
        text: [
            'Discard 2 other cards from your hand in order to put a Trainer card from your discard pile into your hand.'
        ]
    },
    {
        id: 'base4-104',
        name: 'Lass',
        imageUrl: 'https://images.pokemontcg.io/base4/104.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base4/104_hires.png',
        supertype: 'Trainer',
        subtype: '',
        number: '104',
        artist: 'Ken Sugimori',
        rarity: 'Rare',
        series: 'Base',
        set: 'Base Set 2',
        setCode: 'base4',
        text: [
            'You and your opponent show each other your hands, then shuffle all the trainer cards from your hands into your decks.'
        ]
    },
    {
        id: 'base4-105',
        name: 'Pokémon Breeder',
        imageUrl: 'https://images.pokemontcg.io/base4/105.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base4/105_hires.png',
        supertype: 'Trainer',
        subtype: '',
        number: '105',
        artist: 'Ken Sugimori',
        rarity: 'Rare',
        series: 'Base',
        set: 'Base Set 2',
        setCode: 'base4',
        text: [
            'Put a Stage 2 Evolution card from your hand on the matching Basic Pokémon. You can only play this card when you would be allowed to evolve that Pokémon anyway.'
        ]
    },
    {
        id: 'base4-106',
        name: 'Pokémon Trader',
        imageUrl: 'https://images.pokemontcg.io/base4/106.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base4/106_hires.png',
        supertype: 'Trainer',
        subtype: '',
        number: '106',
        artist: 'Ken Sugimori',
        rarity: 'Rare',
        series: 'Base',
        set: 'Base Set 2',
        setCode: 'base4',
        text: [
            'Trade 1 of the Basic Pokémon or Evolution cards in your hand for 1 of the Basic Pokémon or Evolution cards from your deck. Show both cards to your opponent. Shuffle your deck afterward.'
        ]
    },
    {
        id: 'base4-107',
        name: 'Scoop Up',
        imageUrl: 'https://images.pokemontcg.io/base4/107.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base4/107_hires.png',
        supertype: 'Trainer',
        subtype: '',
        number: '107',
        artist: 'Keiji Kinebuchi',
        rarity: 'Rare',
        series: 'Base',
        set: 'Base Set 2',
        setCode: 'base4',
        text: [
            'Choose 1 of your own Pokémon in play and return its Basic Pokémon card to your hand. (Discard all cards attached to that card.)'
        ]
    },
    {
        id: 'base4-108',
        name: 'Super Energy Removal',
        imageUrl: 'https://images.pokemontcg.io/base4/108.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base4/108_hires.png',
        supertype: 'Trainer',
        subtype: '',
        number: '108',
        artist: 'Keiji Kinebuchi',
        rarity: 'Rare',
        series: 'Base',
        set: 'Base Set 2',
        setCode: 'base4',
        text: [
            'Discard 1 Energy card attached to 1 of your own Pokémon in order to choose 1 of your opponent\'s Pokémon and up to 2 Energy cards attached to it. Discard those energy cards.'
        ]
    },
    {
        id: 'base4-109',
        name: 'Defender',
        imageUrl: 'https://images.pokemontcg.io/base4/109.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base4/109_hires.png',
        supertype: 'Trainer',
        subtype: '',
        number: '109',
        artist: 'Keiji Kinebuchi',
        rarity: 'Uncommon',
        series: 'Base',
        set: 'Base Set 2',
        setCode: 'base4',
        text: [
            'Attach Defender to 1 of your Pokémon. At the end of your opponent\'s next turn, discard Defender. Damage done to that Pokémon by attacks is reduced by 20 (after applying Weakness and Resistance.)'
        ]
    },
    {
        id: 'base4-110',
        name: 'Energy Retrieval',
        imageUrl: 'https://images.pokemontcg.io/base4/110.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base4/110_hires.png',
        supertype: 'Trainer',
        subtype: '',
        number: '110',
        artist: 'Keiji Kinebuchi',
        rarity: 'Uncommon',
        series: 'Base',
        set: 'Base Set 2',
        setCode: 'base4',
        text: [
            'Trade 1 of other cards in your hand for up to 2 basic Energy cards from your discard pile.'
        ]
    },
    {
        id: 'base4-111',
        name: 'Full Heal',
        imageUrl: 'https://images.pokemontcg.io/base4/111.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base4/111_hires.png',
        supertype: 'Trainer',
        subtype: '',
        number: '111',
        artist: 'Keiji Kinebuchi',
        rarity: 'Uncommon',
        series: 'Base',
        set: 'Base Set 2',
        setCode: 'base4',
        text: [
            'Your Active Pokémon is no longer Asleep, Confused, Paralyzed, or Poisoned.'
        ]
    },
    {
        id: 'base4-112',
        name: 'Maintenance',
        imageUrl: 'https://images.pokemontcg.io/base4/112.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base4/112_hires.png',
        supertype: 'Trainer',
        subtype: '',
        number: '112',
        artist: 'Keiji Kinebuchi',
        rarity: 'Uncommon',
        series: 'Base',
        set: 'Base Set 2',
        setCode: 'base4',
        text: [
            'Shuffle 2 of the other cards from your hand into your deck in order to draw a card.'
        ]
    },
    {
        id: 'base4-113',
        name: 'PlusPower',
        imageUrl: 'https://images.pokemontcg.io/base4/113.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base4/113_hires.png',
        supertype: 'Trainer',
        subtype: '',
        number: '113',
        artist: 'Keiji Kinebuchi',
        rarity: 'Uncommon',
        series: 'Base',
        set: 'Base Set 2',
        setCode: 'base4',
        text: [
            'Attach PlusPower to your Active Pokémonn. At the end of your turn, discard PlusPower. If this Pokémon\'s attack does damage to the defending Pokémon (after applying Weakness and Resistance), the attack does 10 more damage to the Defending Pokémon.'
        ]
    },
    {
        id: 'base4-114',
        name: 'Pokémon Center',
        imageUrl: 'https://images.pokemontcg.io/base4/114.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base4/114_hires.png',
        supertype: 'Trainer',
        subtype: '',
        number: '114',
        artist: 'Keiji Kinebuchi',
        rarity: 'Uncommon',
        series: 'Base',
        set: 'Base Set 2',
        setCode: 'base4',
        text: [
            'Remove all damage counters from all of your own Pokémon with damage counters on them, then discard all Energy cards attached to those Pokémon.'
        ]
    },
    {
        id: 'base4-115',
        name: 'Pokédex',
        imageUrl: 'https://images.pokemontcg.io/base4/115.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base4/115_hires.png',
        supertype: 'Trainer',
        subtype: '',
        number: '115',
        artist: 'Keiji Kinebuchi',
        rarity: 'Uncommon',
        series: 'Base',
        set: 'Base Set 2',
        setCode: 'base4',
        text: [
            'Look at up to 5 cards from the top of your deck and rearrange them as you like.'
        ]
    },
    {
        id: 'base4-116',
        name: 'Professor Oak',
        imageUrl: 'https://images.pokemontcg.io/base4/116.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base4/116_hires.png',
        supertype: 'Trainer',
        subtype: '',
        number: '116',
        artist: 'Ken Sugimori',
        rarity: 'Uncommon',
        series: 'Base',
        set: 'Base Set 2',
        setCode: 'base4',
        text: [
            'Discard your hand, then draw 7 cards.'
        ]
    },
    {
        id: 'base4-117',
        name: 'Super Potion',
        imageUrl: 'https://images.pokemontcg.io/base4/117.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base4/117_hires.png',
        supertype: 'Trainer',
        subtype: '',
        number: '117',
        artist: 'Keiji Kinebuchi',
        rarity: 'Uncommon',
        series: 'Base',
        set: 'Base Set 2',
        setCode: 'base4',
        text: [
            'Discard 1 Energy card attached to 1 of your own Pokémon in order to remove up to 4 damage counters from that Pokémon.'
        ]
    },
    {
        id: 'base4-118',
        name: 'Bill',
        imageUrl: 'https://images.pokemontcg.io/base4/118.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base4/118_hires.png',
        supertype: 'Trainer',
        subtype: '',
        number: '118',
        artist: 'Ken Sugimori',
        rarity: 'Common',
        series: 'Base',
        set: 'Base Set 2',
        setCode: 'base4',
        text: [
            'Draw 2 cards.'
        ]
    },
    {
        id: 'base4-119',
        name: 'Energy Removal',
        imageUrl: 'https://images.pokemontcg.io/base4/119.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base4/119_hires.png',
        supertype: 'Trainer',
        subtype: '',
        number: '119',
        artist: 'Keiji Kinebuchi',
        rarity: 'Common',
        series: 'Base',
        set: 'Base Set 2',
        setCode: 'base4',
        text: [
            'Choose 1 Energy card attached to 1 of your opponent\'s Pokémon and discard it.'
        ]
    },
    {
        id: 'base4-120',
        name: 'Gust of Wind',
        imageUrl: 'https://images.pokemontcg.io/base4/120.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base4/120_hires.png',
        supertype: 'Trainer',
        subtype: '',
        number: '120',
        artist: 'Keiji Kinebuchi',
        rarity: 'Common',
        series: 'Base',
        set: 'Base Set 2',
        setCode: 'base4',
        text: [
            'Choose 1 of your opponent\'s Benched Pokémon and switch it with his or her Active Pokémon.'
        ]
    },
    {
        id: 'base4-121',
        name: 'Poké Ball',
        imageUrl: 'https://images.pokemontcg.io/base4/121.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base4/121_hires.png',
        supertype: 'Trainer',
        subtype: '',
        number: '121',
        artist: 'Keiji Kinebuchi',
        rarity: 'Common',
        series: 'Base',
        set: 'Base Set 2',
        setCode: 'base4',
        text: [
            'Flip a coin. If heads, you may search your deck for any Basic Pokémon or Evolution card. Show that card to your opponent, then put it into your hand. Shuffle your deck afterward.'
        ]
    },
    {
        id: 'base4-122',
        name: 'Potion',
        imageUrl: 'https://images.pokemontcg.io/base4/122.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base4/122_hires.png',
        supertype: 'Trainer',
        subtype: '',
        number: '122',
        artist: 'Keiji Kinebuchi',
        rarity: 'Common',
        series: 'Base',
        set: 'Base Set 2',
        setCode: 'base4',
        text: [
            'Remove up to 2 damage counters from 1 of your Pokémon.'
        ]
    },
    {
        id: 'base4-123',
        name: 'Switch',
        imageUrl: 'https://images.pokemontcg.io/base4/123.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base4/123_hires.png',
        supertype: 'Trainer',
        subtype: '',
        number: '123',
        artist: 'Keiji Kinebuchi',
        rarity: 'Common',
        series: 'Base',
        set: 'Base Set 2',
        setCode: 'base4',
        text: [
            'Switch 1 of your Benched Pokémon with your Active Pokémon.'
        ]
    },
    {
        id: 'base4-124',
        name: 'Double Colorless Energy',
        imageUrl: 'https://images.pokemontcg.io/base4/124.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base4/124_hires.png',
        supertype: 'Energy',
        subtype: 'Special',
        number: '124',
        artist: 'Keiji Kinebuchi',
        rarity: 'Uncommon',
        series: 'Base',
        set: 'Base Set 2',
        setCode: 'base4',
        text: [
            'Provides Colorless Colorless energy. Doesn\'t count as a basic energy card.'
        ]
    },
    {
        id: 'base4-125',
        name: 'Fighting Energy',
        imageUrl: 'https://images.pokemontcg.io/base4/125.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base4/125_hires.png',
        supertype: 'Energy',
        subtype: 'Basic',
        number: '125',
        artist: 'Keiji Kinebuchi',
        rarity: 'Common',
        series: 'Base',
        set: 'Base Set 2',
        setCode: 'base4'
    },
    {
        id: 'base4-126',
        name: 'Fire Energy',
        imageUrl: 'https://images.pokemontcg.io/base4/126.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base4/126_hires.png',
        supertype: 'Energy',
        subtype: 'Basic',
        number: '126',
        artist: 'Keiji Kinebuchi',
        rarity: 'Common',
        series: 'Base',
        set: 'Base Set 2',
        setCode: 'base4'
    },
    {
        id: 'base4-127',
        name: 'Grass Energy',
        imageUrl: 'https://images.pokemontcg.io/base4/127.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base4/127_hires.png',
        supertype: 'Energy',
        subtype: 'Basic',
        number: '127',
        artist: 'Keiji Kinebuchi',
        rarity: 'Common',
        series: 'Base',
        set: 'Base Set 2',
        setCode: 'base4'
    },
    {
        id: 'base4-128',
        name: 'Lightning Energy',
        imageUrl: 'https://images.pokemontcg.io/base4/128.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base4/128_hires.png',
        supertype: 'Energy',
        subtype: 'Basic',
        number: '128',
        artist: 'Keiji Kinebuchi',
        rarity: 'Common',
        series: 'Base',
        set: 'Base Set 2',
        setCode: 'base4'
    },
    {
        id: 'base4-129',
        name: 'Psychic Energy',
        imageUrl: 'https://images.pokemontcg.io/base4/129.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base4/129_hires.png',
        supertype: 'Energy',
        subtype: 'Basic',
        number: '129',
        artist: 'Keiji Kinebuchi',
        rarity: 'Common',
        series: 'Base',
        set: 'Base Set 2',
        setCode: 'base4'
    },
    {
        id: 'base4-130',
        name: 'Water Energy',
        imageUrl: 'https://images.pokemontcg.io/base4/130.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base4/130_hires.png',
        supertype: 'Energy',
        subtype: 'Basic',
        number: '130',
        artist: 'Keiji Kinebuchi',
        rarity: 'Common',
        series: 'Base',
        set: 'Base Set 2',
        setCode: 'base4'
    }
]