const legendaryCollectionCards = [{
        id: 'base6-1',
        name: 'Alakazam',
        nationalPokedexNumber: 65,
        imageUrl: 'https://images.pokemontcg.io/base6/1.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base6/1_hires.png',
        imageUrlReverseHolo: '../../images/legendary-reverse-holos/01Alakazam.jpg',
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
        set: 'Legendary Collection',
        setCode: 'base6',
        attacks: [{
            cost: [
                'Psychic',
                'Psychic',
                'Psychic'
            ],
            name: 'Confuse Ray',
            text: 'Flip a coin. If heads, defender is now Confused.',
            damage: '30',
            convertedEnergyCost: 3
        }],
        weaknesses: [{
            type: 'Psychic',
            value: '×2'
        }]
    },
    {
        id: 'base6-2',
        name: 'Articuno',
        nationalPokedexNumber: 144,
        imageUrl: 'https://images.pokemontcg.io/base6/2.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base6/2_hires.png',
        imageUrlReverseHolo: '../../images/legendary-reverse-holos/02Articuno.jpg',
        types: [
            'Water'
        ],
        supertype: 'Pokémon',
        subtype: 'Basic',
        hp: '70',
        retreatCost: [
            'Colorless',
            'Colorless'
        ],
        convertedRetreatCost: 2,
        number: '2',
        artist: 'Mitsuhiro Arita',
        rarity: 'Holo Rare',
        series: 'Base',
        set: 'Legendary Collection',
        setCode: 'base6',
        attacks: [{
                cost: [
                    'Water',
                    'Water',
                    'Water'
                ],
                name: 'Freeze Dry',
                text: 'Flip a coin. If heads, the Defending Pokémon is now Paralyzed.',
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
                name: 'Blizzard',
                text: 'Flip a coin. If heads, this attack does 10 damage to each of your opponent\'s Benched Pokémon. If tails, this attack does 10 damage to each of your own Benched Pokémon. (Don\'t apply Weakness and Resistance for Benched Pokémon.)',
                damage: '50',
                convertedEnergyCost: 4
            }
        ],
        resistances: [{
            type: 'Fighting',
            value: '-30'
        }]
    },
    {
        id: 'base6-3',
        name: 'Charizard',
        nationalPokedexNumber: 6,
        imageUrl: 'https://images.pokemontcg.io/base6/3.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base6/3_hires.png',
        imageUrlReverseHolo: '../../images/legendary-reverse-holos/03Charizard.jpg',
        types: [
            'Fire'
        ],
        supertype: 'Pokémon',
        subtype: 'Stage 2',
        evolvesFrom: 'Charmeleon',
        ability: {
            name: 'Energy Burn',
            text: 'As often as you like during your turn (before your attack), you may turn all Energy attached to Charizard into R for the rest of the turn. This power can\'t be used if Charizard is Asleep, Confused, or Paralyzed.',
            type: 'Poké-Power'
        },
        hp: '120',
        retreatCost: [
            'Colorless',
            'Colorless',
            'Colorless'
        ],
        convertedRetreatCost: 3,
        number: '3',
        artist: 'Mitsuhiro Arita',
        rarity: 'Holo Rare',
        series: 'Base',
        set: 'Legendary Collection',
        setCode: 'base6',
        attacks: [{
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
        }],
        resistances: [{
            type: 'Fighting',
            value: '-30'
        }],
        weaknesses: [{
            type: 'Water',
            value: '×2'
        }]
    },
    {
        id: 'base6-4',
        name: 'Dark Blastoise',
        nationalPokedexNumber: 9,
        imageUrl: 'https://images.pokemontcg.io/base6/4.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base6/4_hires.png',
        imageUrlReverseHolo: '../../images/legendary-reverse-holos/04DarkBlastoise.jpg',
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
        number: '4',
        artist: 'Mitsuhiro Arita',
        rarity: 'Holo Rare',
        series: 'Base',
        set: 'Legendary Collection',
        setCode: 'base6',
        attacks: [{
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
        weaknesses: [{
            type: 'Lightning',
            value: '×2'
        }]
    },
    {
        id: 'base6-5',
        name: 'Dark Dragonite',
        nationalPokedexNumber: 149,
        imageUrl: 'https://images.pokemontcg.io/base6/5.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base6/5_hires.png',
        imageUrlReverseHolo: '../../images/legendary-reverse-holos/05DarkDragonite.jpg',
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
        set: 'Legendary Collection',
        setCode: 'base6',
        attacks: [{
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
        }],
        resistances: [{
            type: 'Fighting',
            value: '-30'
        }]
    },
    {
        id: 'base6-6',
        name: 'Dark Persian',
        nationalPokedexNumber: 53,
        imageUrl: 'https://images.pokemontcg.io/base6/6.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base6/6_hires.png',
        imageUrlReverseHolo: '../../images/legendary-reverse-holos/06DarkPersian.jpg',
        types: [
            'Colorless'
        ],
        supertype: 'Pokémon',
        subtype: 'Stage 1',
        evolvesFrom: 'Meowth',
        hp: '60',
        number: '6',
        artist: 'Shin-ichi Yoshida',
        rarity: 'Holo Rare',
        series: 'Base',
        set: 'Legendary Collection',
        setCode: 'base6',
        attacks: [{
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
        resistances: [{
            type: 'Psychic',
            value: '-30'
        }],
        weaknesses: [{
            type: 'Fighting',
            value: '×2'
        }]
    },
    {
        id: 'base6-7',
        name: 'Dark Raichu',
        nationalPokedexNumber: 26,
        imageUrl: 'https://images.pokemontcg.io/base6/7.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base6/7_hires.png',
        imageUrlReverseHolo: '../../images/legendary-reverse-holos/07DarkRaichu.jpg',
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
        number: '7',
        artist: 'Mitsuhiro Arita',
        rarity: 'Holo Rare',
        series: 'Base',
        set: 'Legendary Collection',
        setCode: 'base6',
        attacks: [{
            cost: [
                'Lightning',
                'Lightning',
                'Lightning'
            ],
            name: 'Surprise Thunder',
            text: 'Flip a coin. If heads, flip another coin. If the second coin is heads, this attack does 20 damage to each of your opponent\'s Benched Pokémon. If the second coin is tails, this attack does 10 damage to each of your opponent\'s Benched Pokémon. (Don\'t apply Weakness and Resistance for Benched Pokémon',
            damage: '30',
            convertedEnergyCost: 3
        }],
        weaknesses: [{
            type: 'Fighting',
            value: '×2'
        }]
    },
    {
        id: 'base6-8',
        name: 'Dark Slowbro',
        nationalPokedexNumber: 80,
        imageUrl: 'https://images.pokemontcg.io/base6/8.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base6/8_hires.png',
        types: [
            'Psychic'
        ],
        imageUrlReverseHolo: '../../images/legendary-reverse-holos/08DarkSlowbro.jpg',
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
        number: '8',
        artist: 'Mitsuhiro Arita',
        rarity: 'Holo Rare',
        series: 'Base',
        set: 'Legendary Collection',
        setCode: 'base6',
        attacks: [{
            cost: [
                'Psychic',
                'Psychic'
            ],
            name: 'Fickle Attack',
            text: 'Flip a coin. If tails, this attack does nothing.',
            damage: '',
            convertedEnergyCost: 2
        }],
        weaknesses: [{
            type: 'Psychic',
            value: '×2'
        }]
    },
    {
        id: 'base6-9',
        name: 'Dark Vaporeon',
        nationalPokedexNumber: 134,
        imageUrl: 'https://images.pokemontcg.io/base6/9.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base6/9_hires.png',
        imageUrlReverseHolo: '../../images/legendary-reverse-holos/09DarkVaporeon.jpg',
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
        number: '9',
        artist: 'Mitsuhiro Arita',
        rarity: 'Holo Rare',
        series: 'Base',
        set: 'Legendary Collection',
        setCode: 'base6',
        attacks: [{
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
        weaknesses: [{
            type: 'Lightning',
            value: '×2'
        }]
    },
    {
        id: 'base6-10',
        name: 'Flareon',
        nationalPokedexNumber: 136,
        imageUrl: 'https://images.pokemontcg.io/base6/10.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base6/10_hires.png',
        types: [
            'Fire'
        ],
        imageUrlReverseHolo: '../../images/legendary-reverse-holos/10Flareon.jpg',
        supertype: 'Pokémon',
        subtype: 'Stage 1',
        evolvesFrom: 'Eevee',
        hp: '70',
        retreatCost: [
            'Colorless'
        ],
        convertedRetreatCost: 1,
        number: '10',
        artist: 'Kagemaru Himeno',
        rarity: 'Holo Rare',
        series: 'Base',
        set: 'Legendary Collection',
        setCode: 'base6',
        attacks: [{
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
        weaknesses: [{
            type: 'Water',
            value: '×2'
        }]
    },
    {
        id: 'base6-11',
        name: 'Gengar',
        nationalPokedexNumber: 94,
        imageUrl: 'https://images.pokemontcg.io/base6/11.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base6/11_hires.png',
        imageUrlReverseHolo: '../../images/legendary-reverse-holos/11Gengar.jpg',
        types: [
            'Psychic'
        ],
        supertype: 'Pokémon',
        subtype: 'Stage 2',
        evolvesFrom: 'Haunter',
        ability: {
            name: 'Curse',
            text: 'Once during your turn (before your attack), you may move 1 damage counter from 1 of your opponent\'s Pokémon to another (even if it would Knock Out the other Pokémon). This power can\'t be used if Gengar is Asleep, Confused, or Paralyzed.',
            type: 'Pokémon Power'
        },
        hp: '80',
        retreatCost: [
            'Colorless'
        ],
        convertedRetreatCost: 1,
        number: '11',
        artist: 'Keiji Kinebuchi',
        rarity: 'Holo Rare',
        series: 'Base',
        set: 'Legendary Collection',
        setCode: 'base6',
        attacks: [{
            cost: [
                'Psychic',
                'Psychic',
                'Psychic'
            ],
            name: 'Dark Mind',
            text: 'If your opponent has any Benched Pokémon, choose 1 of them and this attack does 10 damage to it. (Don\'t apply Weakness and Resistance for Benched Pokémon.)',
            damage: '30',
            convertedEnergyCost: 3
        }],
        resistances: [{
            type: 'Fighting',
            value: '-30'
        }]
    },
    {
        id: 'base6-12',
        name: 'Gyarados',
        nationalPokedexNumber: 130,
        imageUrl: 'https://images.pokemontcg.io/base6/12.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base6/12_hires.png',
        imageUrlReverseHolo: '../../images/legendary-reverse-holos/12Gyarados.jpg',
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
        number: '12',
        artist: 'Mitsuhiro Arita',
        rarity: 'Holo Rare',
        series: 'Base',
        set: 'Legendary Collection',
        setCode: 'base6',
        attacks: [{
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
                text: 'Flip a coin. If heads, Defending Pokémon is now Paralyzed.',
                damage: '40',
                convertedEnergyCost: 4
            }
        ],
        resistances: [{
            type: 'Fighting',
            value: '-30'
        }],
        weaknesses: [{
            type: 'Grass',
            value: '×2'
        }]
    },
    {
        id: 'base6-13',
        name: 'Hitmonlee',
        nationalPokedexNumber: 106,
        imageUrl: 'https://images.pokemontcg.io/base6/13.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base6/13_hires.png',
        imageUrlReverseHolo: '../../images/legendary-reverse-holos/13Hitmonlee.jpg',
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
        number: '13',
        artist: 'Ken Sugimori',
        rarity: 'Holo Rare',
        series: 'Base',
        set: 'Legendary Collection',
        setCode: 'base6',
        attacks: [{
                cost: [
                    'Fighting',
                    'Fighting'
                ],
                name: 'Stretch Kick',
                text: 'If your opponent has any Benched Pokémon, choose 1 of them and this attack does 20 damage to it. (Don\'t apply Weakness and Resistance for Benched Pokémon.)',
                damage: '20',
                convertedEnergyCost: 2
            },
            {
                cost: [
                    'Fighting',
                    'Fighting',
                    'Fighting'
                ],
                name: 'High Jump Kick',
                text: '',
                damage: '50',
                convertedEnergyCost: 3
            }
        ],
        weaknesses: [{
            type: 'Psychic',
            value: '×2'
        }]
    },
    {
        id: 'base6-14',
        name: 'Jolteon',
        nationalPokedexNumber: 135,
        imageUrl: 'https://images.pokemontcg.io/base6/14.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base6/14_hires.png',
        imageUrlReverseHolo: '../../images/legendary-reverse-holos/14Jolteon.jpg',
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
        number: '14',
        artist: 'Kagemaru Himeno',
        rarity: 'Holo Rare',
        series: 'Base',
        set: 'Legendary Collection',
        setCode: 'base6',
        attacks: [{
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
        weaknesses: [{
            type: 'Fighting',
            value: '×2'
        }]
    },
    {
        id: 'base6-15',
        name: 'Machamp',
        nationalPokedexNumber: 68,
        imageUrl: 'https://images.pokemontcg.io/base6/15.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base6/15_hires.png',
        imageUrlReverseHolo: '../../images/legendary-reverse-holos/15Machamp.jpg',
        types: [
            'Fighting'
        ],
        supertype: 'Pokémon',
        subtype: 'Stage 2',
        evolvesFrom: 'Machoke',
        ability: {
            name: 'Strikes Back',
            text: 'Whenever your opponent\'s attack damages Machamp (even if Machamp is Knoced Out), this power does 10 damage to attacking Pokémon. (Don\'t apply Weakness and Resistance.) This power can\'t be used if Machamp is already Asleep, Confused, or Paralyzed when your opponent attacks.',
            type: 'Pokémon Power'
        },
        hp: '100',
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
        set: 'Legendary Collection',
        setCode: 'base6',
        attacks: [{
            cost: [
                'Fighting',
                'Fighting',
                'Fighting',
                'Colorless'
            ],
            name: 'Seismic Toss',
            text: '',
            damage: '60',
            convertedEnergyCost: 4
        }],
        weaknesses: [{
            type: 'Psychic',
            value: '×2'
        }]
    },
    {
        id: 'base6-16',
        name: 'Muk',
        nationalPokedexNumber: 89,
        imageUrl: 'https://images.pokemontcg.io/base6/16.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base6/16_hires.png',
        imageUrlReverseHolo: '../../images/legendary-reverse-holos/16Muk.jpg',
        types: [
            'Grass'
        ],
        supertype: 'Pokémon',
        subtype: 'Stage 1',
        evolvesFrom: 'Grimer',
        ability: {
            name: 'Toxic Gas',
            text: 'Ignore all Pokémon Powers other than Toxic Gases. This power stops working while Muk is Asleep, Confused, or Paralyzed.',
            type: 'Pokémon Power'
        },
        hp: '70',
        retreatCost: [
            'Colorless',
            'Colorless'
        ],
        convertedRetreatCost: 2,
        number: '16',
        artist: 'Mitsuhiro Arita',
        rarity: 'Holo Rare',
        series: 'Base',
        set: 'Legendary Collection',
        setCode: 'base6',
        attacks: [{
            cost: [
                'Grass',
                'Grass',
                'Grass'
            ],
            name: 'Sludge',
            text: 'Flip a coin. If heads, the Defending Pokémon is now Poisoned.',
            damage: '',
            convertedEnergyCost: 3
        }],
        weaknesses: [{
            type: 'Psychic',
            value: '×2'
        }]
    },
    {
        id: 'base6-17',
        name: 'Ninetales',
        nationalPokedexNumber: 38,
        imageUrl: 'https://images.pokemontcg.io/base6/17.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base6/17_hires.png',
        imageUrlReverseHolo: '../../images/legendary-reverse-holos/17Ninetales.jpg',
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
        number: '17',
        artist: 'Ken Sugimori',
        rarity: 'Holo Rare',
        series: 'Base',
        set: 'Legendary Collection',
        setCode: 'base6',
        attacks: [{
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
        weaknesses: [{
            type: 'Water',
            value: '×2'
        }]
    },
    {
        id: 'base6-18',
        name: 'Venusaur',
        nationalPokedexNumber: 3,
        imageUrl: 'https://images.pokemontcg.io/base6/18.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base6/18_hires.png',
        imageUrlReverseHolo: '../../images/legendary-reverse-holos/18Venusaur.jpg',
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
        set: 'Legendary Collection',
        setCode: 'base6',
        attacks: [{
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
        }],
        weaknesses: [{
            type: 'Fire',
            value: '×2'
        }]
    },
    {
        id: 'base6-19',
        name: 'Zapdos',
        nationalPokedexNumber: 145,
        imageUrl: 'https://images.pokemontcg.io/base6/19.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base6/19_hires.png',
        imageUrlReverseHolo: '../../images/legendary-reverse-holos/19Zapdos.jpg',
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
        number: '19',
        artist: 'Ken Sugimori',
        rarity: 'Rare',
        series: 'Base',
        set: 'Legendary Collection',
        setCode: 'base6',
        attacks: [{
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
        resistances: [{
            type: 'Fighting',
            value: '-30'
        }]
    },
    {
        id: 'base6-20',
        name: 'Beedrill',
        nationalPokedexNumber: 15,
        imageUrl: 'https://images.pokemontcg.io/base6/20.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base6/20_hires.png',
        imageUrlReverseHolo: '../../images/legendary-reverse-holos/20Beedrill.jpg',
        types: [
            'Grass'
        ],
        supertype: 'Pokémon',
        subtype: 'Stage 2',
        evolvesFrom: 'Kakuna',
        hp: '80',
        number: '20',
        artist: 'Ken Sugimori',
        rarity: 'Rare',
        series: 'Base',
        set: 'Legendary Collection',
        setCode: 'base6',
        attacks: [{
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
        resistances: [{
            type: 'Fighting',
            value: '-30'
        }],
        weaknesses: [{
            type: 'Fire',
            value: '×2'
        }]
    },
    {
        id: 'base6-21',
        name: 'Butterfree',
        nationalPokedexNumber: 12,
        imageUrl: 'https://images.pokemontcg.io/base6/21.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base6/21_hires.png',
        imageUrlReverseHolo: '../../images/legendary-reverse-holos/21Butterfree.jpg',
        types: [
            'Grass'
        ],
        supertype: 'Pokémon',
        subtype: 'Stage 2',
        evolvesFrom: 'Metapod',
        hp: '70',
        number: '21',
        artist: 'Kagemaru Himeno',
        rarity: 'Rare',
        series: 'Base',
        set: 'Legendary Collection',
        setCode: 'base6',
        attacks: [{
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
        resistances: [{
            type: 'Fighting',
            value: '-30'
        }],
        weaknesses: [{
            type: 'Fire',
            value: '×2'
        }]
    },
    {
        id: 'base6-22',
        name: 'Electrode',
        nationalPokedexNumber: 101,
        imageUrl: 'https://images.pokemontcg.io/base6/22.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base6/22_hires.png',
        imageUrlReverseHolo: '../../images/legendary-reverse-holos/22Electrode.jpg',
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
        number: '22',
        artist: 'Mitsuhiro Arita',
        rarity: 'Rare',
        series: 'Base',
        set: 'Legendary Collection',
        setCode: 'base6',
        attacks: [{
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
        weaknesses: [{
            type: 'Fighting',
            value: '×2'
        }]
    },
    {
        id: 'base6-23',
        name: 'Exeggutor',
        nationalPokedexNumber: 103,
        imageUrl: 'https://images.pokemontcg.io/base6/23.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base6/23_hires.png',
        imageUrlReverseHolo: '../../images/legendary-reverse-holos/23Exeggutor.jpg',
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
        number: '23',
        artist: 'Kagemaru Himeno',
        rarity: 'Rare',
        series: 'Base',
        set: 'Legendary Collection',
        setCode: 'base6',
        attacks: [{
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
        weaknesses: [{
            type: 'Fire',
            value: '×2'
        }]
    },
    {
        id: 'base6-24',
        name: 'Golem',
        nationalPokedexNumber: 76,
        imageUrl: 'https://images.pokemontcg.io/base6/24.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base6/24_hires.png',
        imageUrlReverseHolo: '../../images/legendary-reverse-holos/24Golem.jpg',
        types: [
            'Fighting'
        ],
        supertype: 'Pokémon',
        subtype: 'Stage 2',
        evolvesFrom: 'Graveler',
        hp: '80',
        retreatCost: [
            'Colorless',
            'Colorless',
            'Colorless',
            'Colorless'
        ],
        convertedRetreatCost: 4,
        number: '24',
        artist: 'Kagemaru Himeno',
        rarity: 'Rare',
        series: 'Base',
        set: 'Legendary Collection',
        setCode: 'base6',
        attacks: [{
                cost: [
                    'Fighting',
                    'Fighting',
                    'Fighting',
                    'Colorless'
                ],
                name: 'Avalanche',
                text: '',
                damage: '60',
                convertedEnergyCost: 4
            },
            {
                cost: [
                    'Fighting',
                    'Fighting',
                    'Fighting',
                    'Fighting'
                ],
                name: 'Selfdestruct',
                text: 'Does 20 damage to each Pokémon on each player\'s Bench. (Don\'t apply Weakness and Resistance for Benched Pokémon.) Golem does 100 damage to itself.',
                damage: '100',
                convertedEnergyCost: 4
            }
        ],
        weaknesses: [{
            type: 'Grass',
            value: '×2'
        }]
    },
    {
        id: 'base6-25',
        name: 'Hypno',
        nationalPokedexNumber: 97,
        imageUrl: 'https://images.pokemontcg.io/base6/25.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base6/25_hires.png',
        imageUrlReverseHolo: '../../images/legendary-reverse-holos/25Hypno.jpg',
        types: [
            'Psychic'
        ],
        supertype: 'Pokémon',
        subtype: 'Stage 1',
        evolvesFrom: 'Drowzee',
        hp: '90',
        retreatCost: [
            'Colorless',
            'Colorless'
        ],
        convertedRetreatCost: 2,
        number: '25',
        artist: 'Ken Sugimori',
        rarity: 'Rare',
        series: 'Base',
        set: 'Legendary Collection',
        setCode: 'base6',
        attacks: [{
                cost: [
                    'Psychic'
                ],
                name: 'Prophecy',
                text: 'Look at up to 3 cards from the top of either player\'s deck and rearrange them as you like.',
                damage: '',
                convertedEnergyCost: 1
            },
            {
                cost: [
                    'Psychic',
                    'Psychic',
                    'Psychic'
                ],
                name: 'Dark Mind',
                text: 'If your opponent has any Benched Pokémon, choose 1 of them and this attack does 10 damage to it. (Don\'t apply Weakness and Resistance for Benched Pokémon.)',
                damage: '30',
                convertedEnergyCost: 3
            }
        ],
        weaknesses: [{
            type: 'Psychic',
            value: '×2'
        }]
    },
    {
        id: 'base6-26',
        name: 'Jynx',
        nationalPokedexNumber: 124,
        imageUrl: 'https://images.pokemontcg.io/base6/26.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base6/26_hires.png',
        imageUrlReverseHolo: '../../images/legendary-reverse-holos/26Jynx.jpg',
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
        number: '26',
        artist: 'Ken Sugimori',
        rarity: 'Rare',
        series: 'Base',
        set: 'Legendary Collection',
        setCode: 'base6',
        attacks: [{
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
        weaknesses: [{
            type: 'Psychic',
            value: '×2'
        }]
    },
    {
        id: 'base6-27',
        name: 'Kabutops',
        nationalPokedexNumber: 141,
        imageUrl: 'https://images.pokemontcg.io/base6/27.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base6/27_hires.png',
        types: [
            'Fighting'
        ],
        imageUrlReverseHolo: '../../images/legendary-reverse-holos/27Kabutops.jpg',
        supertype: 'Pokémon',
        subtype: 'Stage 2',
        evolvesFrom: 'Kabuto',
        hp: '60',
        retreatCost: [
            'Colorless'
        ],
        convertedRetreatCost: 1,
        number: '27',
        artist: 'Ken Sugimori',
        rarity: 'Rare',
        series: 'Base',
        set: 'Legendary Collection',
        setCode: 'base6',
        attacks: [{
                cost: [
                    'Fighting',
                    'Fighting'
                ],
                name: 'Sharp Sickle',
                text: '',
                damage: '30',
                convertedEnergyCost: 2
            },
            {
                cost: [
                    'Fighting',
                    'Fighting',
                    'Fighting',
                    'Fighting'
                ],
                name: 'Absorb',
                text: 'Remove a number of damage counters from Kabutops equal to half the damage done to Defending Pokémon (after applying Weakness and Resistance) (rounded up to the nearest 10). If Kabutops has fewer damage counters than that, remove all of them.',
                damage: '40',
                convertedEnergyCost: 4
            }
        ],
        weaknesses: [{
            type: 'Grass',
            value: '×2'
        }]
    },
    {
        id: 'base6-28',
        name: 'Magneton',
        nationalPokedexNumber: 82,
        imageUrl: 'https://images.pokemontcg.io/base6/28.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base6/28_hires.png',
        imageUrlReverseHolo: '../../images/legendary-reverse-holos/28Magneton.jpg',
        types: [
            'Lightning'
        ],
        supertype: 'Pokémon',
        subtype: 'Stage 1',
        evolvesFrom: 'Magnemite',
        hp: '80',
        retreatCost: [
            'Colorless',
            'Colorless'
        ],
        convertedRetreatCost: 2,
        number: '28',
        artist: 'Ken Sugimori',
        rarity: 'Rare',
        series: 'Base',
        set: 'Legendary Collection',
        setCode: 'base6',
        attacks: [{
                cost: [
                    'Lightning',
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
                    'Lightning',
                    'Lightning',
                    'Lightning'
                ],
                name: 'Selfdestruct',
                text: 'Does 20 damage to each Pokémon on each player\'s Bench. (Don\'t apply Weakness and Resistance for Benched Pokémon.) Magneton does 100 damage to itself.',
                damage: '100',
                convertedEnergyCost: 4
            }
        ],
        weaknesses: [{
            type: 'Fighting',
            value: '×2'
        }]
    },
    {
        id: 'base6-29',
        name: 'Mewtwo',
        nationalPokedexNumber: 150,
        imageUrl: 'https://images.pokemontcg.io/base6/29.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base6/29_hires.png',
        imageUrlReverseHolo: '../../images/legendary-reverse-holos/29Mewtwo.jpg',
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
        number: '29',
        artist: 'Christopher Rush',
        rarity: 'Rare',
        series: 'Base',
        set: 'Legendary Collection',
        setCode: 'base6',
        attacks: [{
                cost: [
                    'Psychic'
                ],
                name: 'Energy Control',
                text: 'Flip a coin. If heads, choose a basic Energy card attached to 1 of your opponent\'s Pokémon and attach it to another of your opponent\'s Pokémon of your choice.',
                damage: '',
                convertedEnergyCost: 1
            },
            {
                cost: [
                    'Psychic',
                    'Psychic',
                    'Psychic'
                ],
                name: 'Telekinesis',
                text: 'Choose 1 of your opponent\'s Pokémon. This attack does 30 damage to that Pokémon. Don\'t apply Weakness and Resistance for this attack. (Any other effects that would happen after applying Weakness and Resistance still happen.)',
                damage: '30',
                convertedEnergyCost: 3
            }
        ],
        weaknesses: [{
            type: 'Psychic',
            value: '×2'
        }]
    },
    {
        id: 'base6-30',
        name: 'Moltres',
        nationalPokedexNumber: 146,
        imageUrl: 'https://images.pokemontcg.io/base6/30.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base6/30_hires.png',
        imageUrlReverseHolo: '../../images/legendary-reverse-holos/30Moltres.jpg',
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
        number: '30',
        artist: 'Mitsuhiro Arita',
        rarity: 'Rare',
        series: 'Base',
        set: 'Legendary Collection',
        setCode: 'base6',
        attacks: [{
                cost: [
                    'Fire'
                ],
                name: 'Wildfire',
                text: 'You may discard any number of Fire Energy cards attached to Moltres when you use this attack. If you do, discard that many cards from the top of your opponent\'s deck.',
                damage: '',
                convertedEnergyCost: 1
            },
            {
                cost: [
                    'Fire',
                    'Fire',
                    'Fire',
                    'Fire'
                ],
                name: 'Dive Bomb',
                text: 'Flip a coin. If tails, this attack does nothing.',
                damage: '',
                convertedEnergyCost: 4
            }
        ],
        resistances: [{
            type: 'Fighting',
            value: '-30'
        }]
    },
    {
        id: 'base6-31',
        name: 'Nidoking',
        nationalPokedexNumber: 34,
        imageUrl: 'https://images.pokemontcg.io/base6/31.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base6/31_hires.png',
        imageUrlReverseHolo: '../../images/legendary-reverse-holos/31Nidoking.jpg',
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
        number: '31',
        artist: 'Ken Sugimori',
        rarity: 'Rare',
        series: 'Base',
        set: 'Legendary Collection',
        setCode: 'base6',
        attacks: [{
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
        weaknesses: [{
            type: 'Psychic',
            value: '×2'
        }]
    },
    {
        id: 'base6-32',
        name: 'Nidoqueen',
        nationalPokedexNumber: 31,
        imageUrl: 'https://images.pokemontcg.io/base6/32.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base6/32_hires.png',
        imageUrlReverseHolo: '../../images/legendary-reverse-holos/32Nidoqueen.jpg',
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
        number: '32',
        artist: 'Ken Sugimori',
        rarity: 'Rare',
        series: 'Base',
        set: 'Legendary Collection',
        setCode: 'base6',
        attacks: [{
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
        weaknesses: [{
            type: 'Psychic',
            value: '×2'
        }]
    },
    {
        id: 'base6-33',
        name: 'Pidgeot',
        nationalPokedexNumber: 18,
        imageUrl: 'https://images.pokemontcg.io/base6/33.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base6/33_hires.png',
        imageUrlReverseHolo: '../../images/legendary-reverse-holos/33Pidgeot.jpg',
        types: [
            'Colorless'
        ],
        supertype: 'Pokémon',
        subtype: 'Stage 2',
        evolvesFrom: 'Pidgeotto',
        hp: '80',
        number: '33',
        artist: 'Kagemaru Himeno',
        rarity: 'Rare',
        series: 'Base',
        set: 'Legendary Collection',
        setCode: 'base6',
        attacks: [{
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
        resistances: [{
            type: 'Fighting',
            value: '-30'
        }],
        weaknesses: [{
            type: 'Lightning',
            value: '×2'
        }]
    },
    {
        id: 'base6-34',
        name: 'Pidgeotto',
        nationalPokedexNumber: 17,
        imageUrl: 'https://images.pokemontcg.io/base6/34.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base6/34_hires.png',
        imageUrlReverseHolo: '../../images/legendary-reverse-holos/34Pidgeotto.jpg',
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
        number: '34',
        artist: 'Ken Sugimori',
        rarity: 'Rare',
        series: 'Base',
        set: 'Legendary Collection',
        setCode: 'base6',
        attacks: [{
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
        resistances: [{
            type: 'Fighting',
            value: '-30'
        }],
        weaknesses: [{
            type: 'Lightning',
            value: '×2'
        }]
    },
    {
        id: 'base6-35',
        name: 'Rhydon',
        nationalPokedexNumber: 112,
        imageUrl: 'https://images.pokemontcg.io/base6/35.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base6/35_hires.png',
        imageUrlReverseHolo: '../../images/legendary-reverse-holos/35Rhydon.jpg',
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
        number: '35',
        artist: 'Kagemaru Himeno',
        rarity: 'Rare',
        series: 'Base',
        set: 'Legendary Collection',
        setCode: 'base6',
        attacks: [{
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
        resistances: [{
            type: 'Lightning',
            value: '-30'
        }],
        weaknesses: [{
            type: 'Grass',
            value: '×2'
        }]
    },
    {
        id: 'base6-36',
        name: 'Arcanine',
        nationalPokedexNumber: 59,
        imageUrl: 'https://images.pokemontcg.io/base6/36.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base6/36_hires.png',
        imageUrlReverseHolo: '../../images/legendary-reverse-holos/36Arcanine.jpg',
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
        number: '36',
        artist: 'Ken Sugimori',
        rarity: 'Uncommon',
        series: 'Base',
        set: 'Legendary Collection',
        setCode: 'base6',
        attacks: [{
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
        weaknesses: [{
            type: 'Water',
            value: '×2'
        }]
    },
    {
        id: 'base6-37',
        name: 'Charmeleon',
        nationalPokedexNumber: 5,
        imageUrl: 'https://images.pokemontcg.io/base6/37.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base6/37_hires.png',
        imageUrlReverseHolo: '../../images/legendary-reverse-holos/37Charmeleon.jpg',
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
        number: '37',
        artist: 'Mitsuhiro Arita',
        rarity: 'Uncommon',
        series: 'Base',
        set: 'Legendary Collection',
        setCode: 'base6',
        attacks: [{
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
        weaknesses: [{
            type: 'Water',
            value: '×2'
        }]
    },
    {
        id: 'base6-38',
        name: 'Dark Dragonair',
        nationalPokedexNumber: 148,
        imageUrl: 'https://images.pokemontcg.io/base6/38.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base6/38_hires.png',
        imageUrlReverseHolo: '../../images/legendary-reverse-holos/38DarkDragonair.jpg',
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
        number: '38',
        artist: 'Kagemaru Himeno',
        rarity: 'Uncommon',
        series: 'Base',
        set: 'Legendary Collection',
        setCode: 'base6',
        attacks: [{
            cost: [
                'Colorless',
                'Colorless',
                'Colorless'
            ],
            name: 'Tail Strike',
            text: 'Flip a coin. If heads, this attack does 20 damage plus 20 more damage; if tails, this attack does 20 damage.',
            damage: '20+',
            convertedEnergyCost: 3
        }],
        resistances: [{
            type: 'Psychic',
            value: '-30'
        }]
    },
    {
        id: 'base6-39',
        name: 'Dark Wartortle',
        nationalPokedexNumber: 8,
        imageUrl: 'https://images.pokemontcg.io/base6/39.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base6/39_hires.png',
        imageUrlReverseHolo: '../../images/legendary-reverse-holos/39DarkWartortle.jpg',
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
        number: '39',
        artist: 'Kagemaru Himeno',
        rarity: 'Uncommon',
        series: 'Base',
        set: 'Legendary Collection',
        setCode: 'base6',
        attacks: [{
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
        weaknesses: [{
            type: 'Lightning',
            value: '×2'
        }]
    },
    {
        id: 'base6-40',
        name: 'Dewgong',
        nationalPokedexNumber: 87,
        imageUrl: 'https://images.pokemontcg.io/base6/40.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base6/40_hires.png',
        imageUrlReverseHolo: '../../images/legendary-reverse-holos/40Dewgong.jpg',
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
        number: '40',
        artist: 'Mitsuhiro Arita',
        rarity: 'Uncommon',
        series: 'Base',
        set: 'Legendary Collection',
        setCode: 'base6',
        attacks: [{
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
        weaknesses: [{
            type: 'Lightning',
            value: '×2'
        }]
    },
    {
        id: 'base6-41',
        name: 'Dodrio',
        nationalPokedexNumber: 85,
        imageUrl: 'https://images.pokemontcg.io/base6/41.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base6/41_hires.png',
        imageUrlReverseHolo: '../../images/legendary-reverse-holos/41Dodrio.jpg',
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
        number: '41',
        artist: 'Mitsuhiro Arita',
        rarity: 'Uncommon',
        series: 'Base',
        set: 'Legendary Collection',
        setCode: 'base6',
        attacks: [{
            cost: [
                'Colorless',
                'Colorless',
                'Colorless'
            ],
            name: 'Rage',
            text: 'Does 10 damage plus 10 more damage for each damage counter on Dodrio.',
            damage: '10+',
            convertedEnergyCost: 3
        }],
        resistances: [{
            type: 'Fighting',
            value: '-30'
        }],
        weaknesses: [{
            type: 'Lightning',
            value: '×2'
        }]
    },
    {
        id: 'base6-42',
        name: 'Fearow',
        nationalPokedexNumber: 22,
        imageUrl: 'https://images.pokemontcg.io/base6/42.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base6/42_hires.png',
        imageUrlReverseHolo: '../../images/legendary-reverse-holos/42Fearow.jpg',
        types: [
            'Colorless'
        ],
        supertype: 'Pokémon',
        subtype: 'Stage 1',
        evolvesFrom: 'Spearow',
        hp: '70',
        number: '42',
        artist: 'Mitsuhiro Arita',
        rarity: 'Uncommon',
        series: 'Base',
        set: 'Legendary Collection',
        setCode: 'base6',
        attacks: [{
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
        resistances: [{
            type: 'Fighting',
            value: '-30'
        }],
        weaknesses: [{
            type: 'Lightning',
            value: '×2'
        }]
    },
    {
        id: 'base6-43',
        name: 'Golduck',
        nationalPokedexNumber: 55,
        imageUrl: 'https://images.pokemontcg.io/base6/43.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base6/43_hires.png',
        imageUrlReverseHolo: '../../images/legendary-reverse-holos/43Golduck.jpg',
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
        number: '43',
        artist: 'Kagemaru Himeno',
        rarity: 'Uncommon',
        series: 'Base',
        set: 'Legendary Collection',
        setCode: 'base6',
        attacks: [{
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
                    'Water',
                    'Water',
                    'Colorless'
                ],
                name: 'Hyper Beam',
                text: 'If the Defending Pokémon has any Energy cards attached to it, choose 1 of them and discard it.',
                damage: '20',
                convertedEnergyCost: 3
            }
        ],
        weaknesses: [{
            type: 'Lightning',
            value: '×2'
        }]
    },
    {
        id: 'base6-44',
        name: 'Graveler',
        nationalPokedexNumber: 75,
        imageUrl: 'https://images.pokemontcg.io/base6/44.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base6/44_hires.png',
        imageUrlReverseHolo: '../../images/legendary-reverse-holos/44Graveler.jpg',
        types: [
            'Fighting'
        ],
        supertype: 'Pokémon',
        subtype: 'Stage 1',
        evolvesFrom: 'Geodude',
        hp: '60',
        retreatCost: [
            'Colorless',
            'Colorless'
        ],
        convertedRetreatCost: 2,
        number: '44',
        artist: 'Kagemaru Himeno',
        rarity: 'Uncommon',
        series: 'Base',
        set: 'Legendary Collection',
        setCode: 'base6',
        attacks: [{
                cost: [
                    'Fighting',
                    'Fighting'
                ],
                name: 'Harden',
                text: 'During your opponent\'s next turn, whenever 30 or less damage is done to Graveler (after applying Weakness and Resistance), prevent that damage. (Any other effects of attacks still happen.)',
                damage: '',
                convertedEnergyCost: 2
            },
            {
                cost: [
                    'Fighting',
                    'Fighting',
                    'Colorless'
                ],
                name: 'Rock Throw',
                text: '',
                damage: '40',
                convertedEnergyCost: 3
            }
        ],
        weaknesses: [{
            type: 'Grass',
            value: '×2'
        }]
    },
    {
        id: 'base6-45',
        name: 'Growlithe',
        nationalPokedexNumber: 58,
        imageUrl: 'https://images.pokemontcg.io/base6/45.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base6/45_hires.png',
        imageUrlReverseHolo: '../../images/legendary-reverse-holos/45Growlithe.jpg',
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
        number: '45',
        artist: 'Ken Sugimori',
        rarity: 'Uncommon',
        series: 'Base',
        set: 'Legendary Collection',
        setCode: 'base6',
        attacks: [{
            cost: [
                'Fire',
                'Colorless'
            ],
            name: 'Flare',
            text: '',
            damage: '20',
            convertedEnergyCost: 2
        }],
        weaknesses: [{
            type: 'Water',
            value: '×2'
        }]
    },
    {
        id: 'base6-46',
        name: 'Haunter',
        nationalPokedexNumber: 93,
        imageUrl: 'https://images.pokemontcg.io/base6/46.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base6/46_hires.png',
        imageUrlReverseHolo: '../../images/legendary-reverse-holos/46Haunter.jpg',
        types: [
            'Psychic'
        ],
        supertype: 'Pokémon',
        subtype: 'Stage 1',
        evolvesFrom: 'Gastly',
        ability: {
            name: 'Transparency',
            text: 'Whenever an attack does anything to Haunter, flip a coin. If heads, prevent all effects of that attack, including damage, done to Haunter. This power stops working while Haunter is Asleep.',
            type: 'Pokémon Power'
        },
        hp: '50',
        number: '46',
        artist: 'Ken Sugimori',
        rarity: 'Uncommon',
        series: 'Base',
        set: 'Legendary Collection',
        setCode: 'base6',
        attacks: [{
            cost: [
                'Psychic',
                'Colorless'
            ],
            name: 'Nightmare',
            text: 'The Defending Pokémon is now Asleep.',
            damage: '10',
            convertedEnergyCost: 2
        }],
        resistances: [{
            type: 'Fighting',
            value: '-30'
        }]
    },
    {
        id: 'base6-47',
        name: 'Ivysaur',
        nationalPokedexNumber: 2,
        imageUrl: 'https://images.pokemontcg.io/base6/47.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base6/47_hires.png',
        imageUrlReverseHolo: '../../images/legendary-reverse-holos/47Ivysaur.jpg',
        types: [
            'Grass'
        ],
        supertype: 'Pokémon',
        subtype: 'Stage 1',
        evolvesFrom: 'Bulbasaur',
        hp: '60',
        retreatCost: [
            'Colorless'
        ],
        convertedRetreatCost: 1,
        number: '47',
        artist: 'Ken Sugimori',
        rarity: 'Uncommon',
        series: 'Base',
        set: 'Legendary Collection',
        setCode: 'base6',
        attacks: [{
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
        weaknesses: [{
            type: 'Fire',
            value: '×2'
        }]
    },
    {
        id: 'base6-48',
        name: 'Kabuto',
        nationalPokedexNumber: 140,
        imageUrl: 'https://images.pokemontcg.io/base6/48.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base6/48_hires.png',
        imageUrlReverseHolo: '../../images/legendary-reverse-holos/48Kabuto.jpg',
        types: [
            'Fighting'
        ],
        supertype: 'Pokémon',
        subtype: 'Stage 1',
        ability: {
            name: 'Kabuto Armor',
            text: 'Whenever an attack (even your own) does damage to Kabuto (after applying Weakness and Resistance), that attack only does half the damage to Kabuto (rounded down to nearest 10). (Any other effects of attacks still happen.) This power stops working while Kabuto is Asleep, Confused, or Paralyzed.',
            type: 'Pokémon Power'
        },
        hp: '30',
        retreatCost: [
            'Colorless'
        ],
        convertedRetreatCost: 1,
        number: '48',
        artist: 'Ken Sugimori',
        rarity: 'Uncommon',
        series: 'Base',
        set: 'Legendary Collection',
        setCode: 'base6',
        attacks: [{
            cost: [
                'Colorless'
            ],
            name: 'Scratch',
            text: '',
            damage: '10',
            convertedEnergyCost: 1
        }],
        weaknesses: [{
            type: 'Grass',
            value: '×2'
        }]
    },
    {
        id: 'base6-49',
        name: 'Kadabra',
        nationalPokedexNumber: 64,
        imageUrl: 'https://images.pokemontcg.io/base6/49.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base6/49_hires.png',
        imageUrlReverseHolo: '../../images/legendary-reverse-holos/49Kadabra.jpg',
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
        number: '49',
        artist: 'Ken Sugimori',
        rarity: 'Uncommon',
        series: 'Base',
        set: 'Legendary Collection',
        setCode: 'base6',
        attacks: [{
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
        weaknesses: [{
            type: 'Psychic',
            value: '×2'
        }]
    },
    {
        id: 'base6-50',
        name: 'Kakuna',
        nationalPokedexNumber: 14,
        imageUrl: 'https://images.pokemontcg.io/base6/50.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base6/50_hires.png',
        imageUrlReverseHolo: '../../images/legendary-reverse-holos/50Kakuna.jpg',
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
        number: '50',
        artist: 'Keiji Kinebuchi',
        rarity: 'Uncommon',
        series: 'Base',
        set: 'Legendary Collection',
        setCode: 'base6',
        attacks: [{
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
        weaknesses: [{
            type: 'Fire',
            value: '×2'
        }]
    },
    {
        id: 'base6-51',
        name: 'Machoke',
        nationalPokedexNumber: 67,
        imageUrl: 'https://images.pokemontcg.io/base6/51.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base6/51_hires.png',
        imageUrlReverseHolo: '../../images/legendary-reverse-holos/51Machoke.jpg',
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
        number: '51',
        artist: 'Ken Sugimori',
        rarity: 'Uncommon',
        series: 'Base',
        set: 'Legendary Collection',
        setCode: 'base6',
        attacks: [{
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
        weaknesses: [{
            type: 'Psychic',
            value: '×2'
        }]
    },
    {
        id: 'base6-52',
        name: 'Magikarp',
        nationalPokedexNumber: 129,
        imageUrl: 'https://images.pokemontcg.io/base6/52.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base6/52_hires.png',
        imageUrlReverseHolo: '../../images/legendary-reverse-holos/52Magikarp.jpg',
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
        number: '52',
        artist: 'Mitsuhiro Arita',
        rarity: 'Uncommon',
        series: 'Base',
        set: 'Legendary Collection',
        setCode: 'base6',
        attacks: [{
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
        weaknesses: [{
            type: 'Lightning',
            value: '×2'
        }]
    },
    {
        id: 'base6-53',
        name: 'Meowth',
        nationalPokedexNumber: 52,
        imageUrl: 'https://images.pokemontcg.io/base6/53.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base6/53_hires.png',
        imageUrlReverseHolo: '../../images/legendary-reverse-holos/53Meowth.jpg',
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
        number: '53',
        artist: 'Mitsuhiro Arita',
        rarity: 'Uncommon',
        series: 'Base',
        set: 'Legendary Collection',
        setCode: 'base6',
        attacks: [{
            cost: [
                'Colorless',
                'Colorless'
            ],
            name: 'Pay Day',
            text: 'Flip a coin. If heads, draw a card.',
            damage: '10',
            convertedEnergyCost: 2
        }],
        resistances: [{
            type: 'Psychic',
            value: '-30'
        }],
        weaknesses: [{
            type: 'Fighting',
            value: '×2'
        }]
    },
    {
        id: 'base6-54',
        name: 'Metapod',
        nationalPokedexNumber: 11,
        imageUrl: 'https://images.pokemontcg.io/base6/54.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base6/54_hires.png',
        imageUrlReverseHolo: '../../images/legendary-reverse-holos/54Metapod.jpg',
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
        number: '54',
        artist: 'Ken Sugimori',
        rarity: 'Uncommon',
        series: 'Base',
        set: 'Legendary Collection',
        setCode: 'base6',
        attacks: [{
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
        weaknesses: [{
            type: 'Fire',
            value: '×2'
        }]
    },
    {
        id: 'base6-55',
        name: 'Nidorina',
        nationalPokedexNumber: 30,
        imageUrl: 'https://images.pokemontcg.io/base6/55.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base6/55_hires.png',
        imageUrlReverseHolo: '../../images/legendary-reverse-holos/55Nidorina.jpg',
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
        number: '55',
        artist: 'Ken Sugimori',
        rarity: 'Uncommon',
        series: 'Base',
        set: 'Legendary Collection',
        setCode: 'base6',
        attacks: [{
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
        weaknesses: [{
            type: 'Psychic',
            value: '×2'
        }]
    },
    {
        id: 'base6-56',
        name: 'Nidorino',
        nationalPokedexNumber: 33,
        imageUrl: 'https://images.pokemontcg.io/base6/56.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base6/56_hires.png',
        imageUrlReverseHolo: '../../images/legendary-reverse-holos/56Nidorino.jpg',
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
        number: '56',
        artist: 'Mitsuhiro Arita',
        rarity: 'Uncommon',
        series: 'Base',
        set: 'Legendary Collection',
        setCode: 'base6',
        attacks: [{
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
        weaknesses: [{
            type: 'Psychic',
            value: '×2'
        }]
    },
    {
        id: 'base6-57',
        name: 'Omanyte',
        nationalPokedexNumber: 138,
        imageUrl: 'https://images.pokemontcg.io/base6/57.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base6/57_hires.png',
        imageUrlReverseHolo: '../../images/legendary-reverse-holos/57Omanyte.jpg',
        types: [
            'Water'
        ],
        supertype: 'Pokémon',
        subtype: 'Stage 1',
        ability: {
            name: 'Clairvoyance',
            text: 'Your opponent plays with his or her hand face up. This power stops working while Omanyte is Asleep, Confused, or Paralyzed.',
            type: 'Pokémon Power'
        },
        hp: '40',
        retreatCost: [
            'Colorless'
        ],
        convertedRetreatCost: 1,
        number: '57',
        artist: 'Kagemaru Himeno',
        rarity: 'Uncommon',
        series: 'Base',
        set: 'Legendary Collection',
        setCode: 'base6',
        attacks: [{
            cost: [
                'Water'
            ],
            name: 'Water Gun',
            text: 'Does 10 damage plus 10 more damage for each Energy attached to Omanyte but not used to pay for this attack\'s Energy cost. You can\'t add more than 20 damage in this way.',
            damage: '10+',
            convertedEnergyCost: 1
        }],
        weaknesses: [{
            type: 'Grass',
            value: '×2'
        }]
    },
    {
        id: 'base6-58',
        name: 'Omastar',
        nationalPokedexNumber: 139,
        imageUrl: 'https://images.pokemontcg.io/base6/58.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base6/58_hires.png',
        imageUrlReverseHolo: '../../images/legendary-reverse-holos/58Omastar.jpg',
        types: [
            'Water'
        ],
        supertype: 'Pokémon',
        subtype: 'Stage 2',
        evolvesFrom: 'Omanyte',
        hp: '70',
        retreatCost: [
            'Colorless'
        ],
        convertedRetreatCost: 1,
        number: '58',
        artist: 'Ken Sugimori',
        rarity: 'Uncommon',
        series: 'Base',
        set: 'Legendary Collection',
        setCode: 'base6',
        attacks: [{
                cost: [
                    'Water',
                    'Colorless'
                ],
                name: 'Water Gun',
                text: 'Does 20 damage plus 10 more damage for each Energy attached to Omastar but not used to pay for this attack\'s Energy cost. You can\'t add more than 20 damage in this way.',
                damage: '20+',
                convertedEnergyCost: 2
            },
            {
                cost: [
                    'Colorless',
                    'Colorless'
                ],
                name: 'Spike Cannon',
                text: 'Flip 2 coins. This attack does 30 damage times the number of heads.',
                damage: '30×',
                convertedEnergyCost: 2
            }
        ],
        weaknesses: [{
            type: 'Grass',
            value: '×2'
        }]
    },
    {
        id: 'base6-59',
        name: 'Primeape',
        nationalPokedexNumber: 57,
        imageUrl: 'https://images.pokemontcg.io/base6/59.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base6/59_hires.png',
        imageUrlReverseHolo: '../../images/legendary-reverse-holos/59Primeape.jpg',
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
        number: '59',
        artist: 'Kagemaru Himeno',
        rarity: 'Uncommon',
        series: 'Base',
        set: 'Legendary Collection',
        setCode: 'base6',
        attacks: [{
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
        weaknesses: [{
            type: 'Psychic',
            value: '×2'
        }]
    },
    {
        id: 'base6-60',
        name: 'Rapidash',
        nationalPokedexNumber: 78,
        imageUrl: 'https://images.pokemontcg.io/base6/60.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base6/60_hires.png',
        imageUrlReverseHolo: '../../images/legendary-reverse-holos/60Rapidash.jpg',
        types: [
            'Fire'
        ],
        supertype: 'Pokémon',
        subtype: 'Stage 1',
        evolvesFrom: 'Ponyta',
        hp: '70',
        number: '60',
        artist: 'Mitsuhiro Arita',
        rarity: 'Uncommon',
        series: 'Base',
        set: 'Legendary Collection',
        setCode: 'base6',
        attacks: [{
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
        weaknesses: [{
            type: 'Water',
            value: '×2'
        }]
    },
    {
        id: 'base6-61',
        name: 'Raticate',
        nationalPokedexNumber: 20,
        imageUrl: 'https://images.pokemontcg.io/base6/61.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base6/61_hires.png',
        imageUrlReverseHolo: '../../images/legendary-reverse-holos/61Raticate.jpg',
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
        number: '61',
        artist: 'Ken Sugimori',
        rarity: 'Uncommon',
        series: 'Base',
        set: 'Legendary Collection',
        setCode: 'base6',
        attacks: [{
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
        resistances: [{
            type: 'Psychic',
            value: '-30'
        }],
        weaknesses: [{
            type: 'Fighting',
            value: '×2'
        }]
    },
    {
        id: 'base6-62',
        name: 'Sandslash',
        nationalPokedexNumber: 28,
        imageUrl: 'https://images.pokemontcg.io/base6/62.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base6/62_hires.png',
        imageUrlReverseHolo: '../../images/legendary-reverse-holos/62Sandslash.jpg',
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
        number: '62',
        artist: 'Ken Sugimori',
        rarity: 'Uncommon',
        series: 'Base',
        set: 'Legendary Collection',
        setCode: 'base6',
        attacks: [{
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
                    'Fighting',
                    'Fighting'
                ],
                name: 'Fury Swipes',
                text: 'Flip 3 coins. This attack does 20 damage times the number of heads.',
                damage: '20×',
                convertedEnergyCost: 2
            }
        ],
        resistances: [{
            type: 'Lightning',
            value: '-30'
        }],
        weaknesses: [{
            type: 'Grass',
            value: '×2'
        }]
    },
    {
        id: 'base6-63',
        name: 'Seadra',
        nationalPokedexNumber: 117,
        imageUrl: 'https://images.pokemontcg.io/base6/63.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base6/63_hires.png',
        imageUrlReverseHolo: '../../images/legendary-reverse-holos/63Seadra.jpg',
        types: [
            'Water'
        ],
        supertype: 'Pokémon',
        subtype: 'Stage 1',
        evolvesFrom: 'Horsea',
        hp: '60',
        retreatCost: [
            'Colorless'
        ],
        convertedRetreatCost: 1,
        number: '63',
        artist: 'Ken Sugimori',
        rarity: 'Uncommon',
        series: 'Base',
        set: 'Legendary Collection',
        setCode: 'base6',
        attacks: [{
                cost: [
                    'Water',
                    'Colorless'
                ],
                name: 'Water Gun',
                text: 'Does 20 damage plus 10 more damage for each Energy attached to Seadra but not used to pay for this attack\'s Energy cost. You can\'t add more than 20 damage in this way.',
                damage: '20+',
                convertedEnergyCost: 2
            },
            {
                cost: [
                    'Water',
                    'Colorless',
                    'Colorless'
                ],
                name: 'Agility',
                text: 'Flip a coin. If heads, during your opponent\'s next turn, prevent all effects of attacks, including damage, done to Seadra.',
                damage: '20',
                convertedEnergyCost: 3
            }
        ],
        weaknesses: [{
            type: 'Lightning',
            value: '×2'
        }]
    },
    {
        id: 'base6-64',
        name: 'Snorlax',
        nationalPokedexNumber: 143,
        imageUrl: 'https://images.pokemontcg.io/base6/64.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base6/64_hires.png',
        imageUrlReverseHolo: '../../images/legendary-reverse-holos/64Snorlax.jpg',
        types: [
            'Colorless'
        ],
        supertype: 'Pokémon',
        subtype: 'Basic',
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
        number: '64',
        artist: 'Ken Sugimori',
        rarity: 'Uncommon',
        series: 'Base',
        set: 'Legendary Collection',
        setCode: 'base6',
        attacks: [{
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
        }],
        resistances: [{
            type: 'Psychic',
            value: '-30'
        }],
        weaknesses: [{
            type: 'Fighting',
            value: '×2'
        }]
    },
    {
        id: 'base6-65',
        name: 'Tauros',
        nationalPokedexNumber: 128,
        imageUrl: 'https://images.pokemontcg.io/base6/65.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base6/65_hires.png',
        imageUrlReverseHolo: '../../images/legendary-reverse-holos/65Tauros.jpg',
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
        number: '65',
        artist: 'Kagemaru Himeno',
        rarity: 'Uncommon',
        series: 'Base',
        set: 'Legendary Collection',
        setCode: 'base6',
        attacks: [{
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
        resistances: [{
            type: 'Psychic',
            value: '-30'
        }],
        weaknesses: [{
            type: 'Fighting',
            value: '×2'
        }]
    },
    {
        id: 'base6-66',
        name: 'Tentacruel',
        nationalPokedexNumber: 73,
        imageUrl: 'https://images.pokemontcg.io/base6/66.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base6/66_hires.png',
        imageUrlReverseHolo: '../../images/legendary-reverse-holos/66Tentacruel.jpg',
        types: [
            'Water'
        ],
        supertype: 'Pokémon',
        subtype: 'Stage 1',
        evolvesFrom: 'Tentacool',
        hp: '60',
        number: '66',
        artist: 'Kagemaru Himeno',
        rarity: 'Uncommon',
        series: 'Base',
        set: 'Legendary Collection',
        setCode: 'base6',
        attacks: [{
                cost: [
                    'Water'
                ],
                name: 'Supersonic',
                text: 'Flip a coin. If heads, the Defending Pokémon is now Confused.',
                damage: '',
                convertedEnergyCost: 1
            },
            {
                cost: [
                    'Water',
                    'Water'
                ],
                name: 'Jellyfish Sting',
                text: 'The Defending Pokémon is now Poisoned.',
                damage: '10',
                convertedEnergyCost: 2
            }
        ],
        weaknesses: [{
            type: 'Lightning',
            value: '×2'
        }]
    },
    {
        id: 'base6-67',
        name: 'Abra',
        nationalPokedexNumber: 63,
        imageUrl: 'https://images.pokemontcg.io/base6/67.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base6/67_hires.png',
        imageUrlReverseHolo: '../../images/legendary-reverse-holos/67Abra.jpg',
        types: [
            'Psychic'
        ],
        supertype: 'Pokémon',
        subtype: 'Basic',
        hp: '30',
        number: '67',
        artist: 'Mitsuhiro Arita',
        rarity: 'Common',
        series: 'Base',
        set: 'Legendary Collection',
        setCode: 'base6',
        attacks: [{
            cost: [
                'Psychic'
            ],
            name: 'Psyshock',
            text: 'Flip a coin. If heads, the Defending Pokémon is now Paralyzed.',
            damage: '10',
            convertedEnergyCost: 1
        }],
        weaknesses: [{
            type: 'Psychic',
            value: '×2'
        }]
    },
    {
        id: 'base6-68',
        name: 'Bulbasaur',
        nationalPokedexNumber: 1,
        imageUrl: 'https://images.pokemontcg.io/base6/68.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base6/68_hires.png',
        imageUrlReverseHolo: '../../images/legendary-reverse-holos/68Bulbasaur.jpg',
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
        artist: 'Mitsuhiro Arita',
        rarity: 'Common',
        series: 'Base',
        set: 'Legendary Collection',
        setCode: 'base6',
        attacks: [{
            cost: [
                'Grass',
                'Grass'
            ],
            name: 'Leech Seed',
            text: 'Unless all damage from this attack is prevented, you may remove 1 damage counter from Bulbasaur.',
            damage: '20',
            convertedEnergyCost: 2
        }],
        weaknesses: [{
            type: 'Fire',
            value: '×2'
        }]
    },
    {
        id: 'base6-69',
        name: 'Caterpie',
        nationalPokedexNumber: 10,
        imageUrl: 'https://images.pokemontcg.io/base6/69.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base6/69_hires.png',
        imageUrlReverseHolo: '../../images/legendary-reverse-holos/69Caterpie.jpg',
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
        number: '69',
        artist: 'Ken Sugimori',
        rarity: 'Common',
        series: 'Base',
        set: 'Legendary Collection',
        setCode: 'base6',
        attacks: [{
            cost: [
                'Grass'
            ],
            name: 'String Shot',
            text: 'Flip a coin. If heads, the Defending Pokémon is now Paralyzed.',
            damage: '10',
            convertedEnergyCost: 1
        }],
        weaknesses: [{
            type: 'Fire',
            value: '×2'
        }]
    },
    {
        id: 'base6-70',
        name: 'Charmander',
        nationalPokedexNumber: 4,
        imageUrl: 'https://images.pokemontcg.io/base6/70.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base6/70_hires.png',
        imageUrlReverseHolo: '../../images/legendary-reverse-holos/70Charmander.jpg',
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
        number: '70',
        artist: 'Mitsuhiro Arita',
        rarity: 'Common',
        series: 'Base',
        set: 'Legendary Collection',
        setCode: 'base6',
        attacks: [{
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
        weaknesses: [{
            type: 'Water',
            value: '×2'
        }]
    },
    {
        id: 'base6-71',
        name: 'Doduo',
        nationalPokedexNumber: 84,
        imageUrl: 'https://images.pokemontcg.io/base6/71.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base6/71_hires.png',
        imageUrlReverseHolo: '../../images/legendary-reverse-holos/71Doduo.jpg',
        types: [
            'Colorless'
        ],
        supertype: 'Pokémon',
        subtype: 'Basic',
        hp: '50',
        number: '71',
        artist: 'Mitsuhiro Arita',
        rarity: 'Common',
        series: 'Base',
        set: 'Legendary Collection',
        setCode: 'base6',
        attacks: [{
            cost: [
                'Colorless'
            ],
            name: 'Fury Attack',
            text: 'Flip 2 coins. This attack does 10 damage times the number of heads.',
            damage: '10×',
            convertedEnergyCost: 1
        }],
        resistances: [{
            type: 'Fighting',
            value: '-30'
        }],
        weaknesses: [{
            type: 'Lightning',
            value: '×2'
        }]
    },
    {
        id: 'base6-72',
        name: 'Dratini',
        nationalPokedexNumber: 147,
        imageUrl: 'https://images.pokemontcg.io/base6/72.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base6/72_hires.png',
        imageUrlReverseHolo: '../../images/legendary-reverse-holos/72Dratini.jpg',
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
        number: '72',
        artist: 'Ken Sugimori',
        rarity: 'Common',
        series: 'Base',
        set: 'Legendary Collection',
        setCode: 'base6',
        attacks: [{
            cost: [
                'Colorless'
            ],
            name: 'Pound',
            text: '',
            damage: '10',
            convertedEnergyCost: 1
        }],
        resistances: [{
            type: 'Psychic',
            value: '-30'
        }]
    },
    {
        id: 'base6-73',
        name: 'Drowzee',
        nationalPokedexNumber: 96,
        imageUrl: 'https://images.pokemontcg.io/base6/73.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base6/73_hires.png',
        imageUrlReverseHolo: '../../images/legendary-reverse-holos/73Drowzee.jpg',
        types: [
            'Psychic'
        ],
        supertype: 'Pokémon',
        subtype: 'Basic',
        ability: {
            name: 'Long Distance Hypnosis',
            text: 'Once during your turn (before your attack) you may flip a coin. If heads defender is now Asleep; if tails, your active Pokémon is now Asleep. The power can\'t be used if Drowzee is affected by a Special Condition.',
            type: 'Pokémon Power'
        },
        hp: '50',
        retreatCost: [
            'Colorless'
        ],
        convertedRetreatCost: 1,
        number: '73',
        artist: 'Ken Sugimori',
        rarity: 'Common',
        series: 'Base',
        set: 'Legendary Collection',
        setCode: 'base6',
        attacks: [{
            cost: [
                'Psychic',
                'Colorless'
            ],
            name: 'Nightmare',
            text: 'The Defending Pokémon is now Asleep.',
            damage: '10',
            convertedEnergyCost: 2
        }],
        weaknesses: [{
            type: 'Psychic',
            value: '×2'
        }]
    },
    {
        id: 'base6-74',
        name: 'Eevee',
        nationalPokedexNumber: 133,
        imageUrl: 'https://images.pokemontcg.io/base6/74.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base6/74_hires.png',
        imageUrlReverseHolo: '../../images/legendary-reverse-holos/74Eevee.jpg',
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
        artist: 'Kagemaru Himeno',
        rarity: 'Common',
        series: 'Base',
        set: 'Legendary Collection',
        setCode: 'base6',
        attacks: [{
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
        resistances: [{
            type: 'Psychic',
            value: '-30'
        }],
        weaknesses: [{
            type: 'Fighting',
            value: '×2'
        }]
    },
    {
        id: 'base6-75',
        name: 'Exeggcute',
        nationalPokedexNumber: 102,
        imageUrl: 'https://images.pokemontcg.io/base6/75.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base6/75_hires.png',
        imageUrlReverseHolo: '../../images/legendary-reverse-holos/75Exeggcute.jpg',
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
        artist: 'Mitsuhiro Arita',
        rarity: 'Common',
        series: 'Base',
        set: 'Legendary Collection',
        setCode: 'base6',
        attacks: [{
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
        weaknesses: [{
            type: 'Fire',
            value: '×2'
        }]
    },
    {
        id: 'base6-76',
        name: 'Gastly',
        nationalPokedexNumber: 92,
        imageUrl: 'https://images.pokemontcg.io/base6/76.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base6/76_hires.png',
        imageUrlReverseHolo: '../../images/legendary-reverse-holos/76Gastly.jpg',
        types: [
            'Psychic'
        ],
        supertype: 'Pokémon',
        subtype: 'Basic',
        hp: '50',
        number: '76',
        artist: 'Keiji Kinebuchi',
        rarity: 'Common',
        series: 'Base',
        set: 'Legendary Collection',
        setCode: 'base6',
        attacks: [{
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
                name: 'Energy Conversion',
                text: 'Put up to 2 Energy cards from your discard pile into your hand. Gastly does 10 damage to itself.',
                damage: '',
                convertedEnergyCost: 2
            }
        ],
        resistances: [{
            type: 'Fighting',
            value: '-30'
        }]
    },
    {
        id: 'base6-77',
        name: 'Geodude',
        nationalPokedexNumber: 74,
        imageUrl: 'https://images.pokemontcg.io/base6/77.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base6/77_hires.png',
        imageUrlReverseHolo: '../../images/legendary-reverse-holos/77Geodude.jpg',
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
        number: '77',
        artist: 'Kagemaru Himeno',
        rarity: 'Common',
        series: 'Base',
        set: 'Legendary Collection',
        setCode: 'base6',
        attacks: [{
            cost: [
                'Fighting',
                'Colorless'
            ],
            name: 'Stone Barrage',
            text: 'Flip a coin until you get tails. This attack does 10 damage times the number of heads.',
            damage: '10×',
            convertedEnergyCost: 2
        }],
        weaknesses: [{
            type: 'Grass',
            value: '×2'
        }]
    },
    {
        id: 'base6-78',
        name: 'Grimer',
        nationalPokedexNumber: 88,
        imageUrl: 'https://images.pokemontcg.io/base6/78.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base6/78_hires.png',
        imageUrlReverseHolo: '../../images/legendary-reverse-holos/78Grimer.jpg',
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
        artist: 'Mitsuhiro Arita',
        rarity: 'Common',
        series: 'Base',
        set: 'Legendary Collection',
        setCode: 'base6',
        attacks: [{
                cost: [
                    'Colorless'
                ],
                name: 'Nasty Goo',
                text: 'Flip a coin. If heads, the Defending Pokémon is now Paralyzed.',
                damage: '10',
                convertedEnergyCost: 1
            },
            {
                cost: [
                    'Grass'
                ],
                name: 'Minimize',
                text: 'All damage done by attacks to Grimer during your opponent\'s next turn is reduced by 20 (after applying Weakness and Resistance).',
                damage: '',
                convertedEnergyCost: 1
            }
        ],
        weaknesses: [{
            type: 'Psychic',
            value: '×2'
        }]
    },
    {
        id: 'base6-79',
        name: 'Machop',
        nationalPokedexNumber: 66,
        imageUrl: 'https://images.pokemontcg.io/base6/79.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base6/79_hires.png',
        imageUrlReverseHolo: '../../images/legendary-reverse-holos/29Machop.jpg',
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
        number: '79',
        artist: 'Mitsuhiro Arita',
        rarity: 'Common',
        series: 'Base',
        set: 'Legendary Collection',
        setCode: 'base6',
        attacks: [{
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
        weaknesses: [{
            type: 'Psychic',
            value: '×2'
        }]
    },
    {
        id: 'base6-80',
        name: 'Magnemite',
        nationalPokedexNumber: 81,
        imageUrl: 'https://images.pokemontcg.io/base6/80.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base6/80_hires.png',
        imageUrlReverseHolo: '../../images/legendary-reverse-holos/80Magnemite.jpg',
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
        artist: 'Keiji Kinebuchi',
        rarity: 'Common',
        series: 'Base',
        set: 'Legendary Collection',
        setCode: 'base6',
        attacks: [{
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
        weaknesses: [{
            type: 'Fighting',
            value: '×2'
        }]
    },
    {
        id: 'base6-81',
        name: 'Mankey',
        nationalPokedexNumber: 56,
        imageUrl: 'https://images.pokemontcg.io/base6/81.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base6/81_hires.png',
        imageUrlReverseHolo: '../../images/legendary-reverse-holos/81Mankey.jpg',
        types: [
            'Fighting'
        ],
        supertype: 'Pokémon',
        subtype: 'Basic',
        hp: '30',
        number: '81',
        artist: 'Kagemaru Himeno',
        rarity: 'Common',
        series: 'Base',
        set: 'Legendary Collection',
        setCode: 'base6',
        attacks: [{
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
                text: 'Flip a coin. If heads, this attack does 20 damage plus 20 more; if tails, this attack does 20 damage.',
                damage: '20+',
                convertedEnergyCost: 2
            }
        ],
        weaknesses: [{
            type: 'Psychic',
            value: '×2'
        }]
    },
    {
        id: 'base6-82',
        name: 'Nidoran♀',
        nationalPokedexNumber: 29,
        imageUrl: 'https://images.pokemontcg.io/base6/82.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base6/82_hires.png',
        imageUrlReverseHolo: '../../images/legendary-reverse-holos/82NidoranFemale.jpg',
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
        set: 'Legendary Collection',
        setCode: 'base6',
        attacks: [{
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
        weaknesses: [{
            type: 'Psychic',
            value: '×2'
        }]
    },
    {
        id: 'base6-83',
        name: 'Nidoran♂',
        nationalPokedexNumber: 32,
        imageUrl: 'https://images.pokemontcg.io/base6/83.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base6/83_hires.png',
        imageUrlReverseHolo: '../../images/legendary-reverse-holos/83NidoranMale.jpg',
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
        set: 'Legendary Collection',
        setCode: 'base6',
        attacks: [{
            cost: [
                'Grass'
            ],
            name: 'Horn Hazard',
            text: 'Flip a coin. If tails, this attack does nothing.',
            damage: '',
            convertedEnergyCost: 1
        }],
        weaknesses: [{
            type: 'Psychic',
            value: '×2'
        }]
    },
    {
        id: 'base6-84',
        name: 'Onix',
        nationalPokedexNumber: 95,
        imageUrl: 'https://images.pokemontcg.io/base6/84.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base6/84_hires.png',
        imageUrlReverseHolo: '../../images/legendary-reverse-holos/84Onix.jpg',
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
        set: 'Legendary Collection',
        setCode: 'base6',
        attacks: [{
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
        weaknesses: [{
            type: 'Grass',
            value: '×2'
        }]
    },
    {
        id: 'base6-85',
        name: 'Pidgey',
        nationalPokedexNumber: 16,
        imageUrl: 'https://images.pokemontcg.io/base6/85.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base6/85_hires.png',
        imageUrlReverseHolo: '../../images/legendary-reverse-holos/85Pidgey.jpg',
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
        number: '85',
        artist: 'Ken Sugimori',
        rarity: 'Common',
        series: 'Base',
        set: 'Legendary Collection',
        setCode: 'base6',
        attacks: [{
            cost: [
                'Colorless',
                'Colorless'
            ],
            name: 'Whirlwind',
            text: 'After damage dealing, opponent chooses 1 Benched Pokémon and switches it with defending Pokémon (only if opponent has Benched Pokémon).',
            damage: '10',
            convertedEnergyCost: 2
        }],
        resistances: [{
            type: 'Fighting',
            value: '-30'
        }],
        weaknesses: [{
            type: 'Lightning',
            value: '×2'
        }]
    },
    {
        id: 'base6-86',
        name: 'Pikachu',
        nationalPokedexNumber: 25,
        imageUrl: 'https://images.pokemontcg.io/base6/86.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base6/86_hires.png',
        imageUrlReverseHolo: '../../images/legendary-reverse-holos/86Pikachu.jpg',
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
        artist: 'Ken Sugimori',
        rarity: 'Common',
        series: 'Base',
        set: 'Legendary Collection',
        setCode: 'base6',
        attacks: [{
            cost: [
                'Lightning',
                'Lightning'
            ],
            name: 'Spark',
            text: 'If your opponent has any Benched Pokémon, choose 1 of them and this attack does 10 damage to it. (Don\'t apply Weakness and Resistance for Benched Pokémon.)',
            damage: '20',
            convertedEnergyCost: 2
        }],
        weaknesses: [{
            type: 'Fighting',
            value: '×2'
        }]
    },
    {
        id: 'base6-87',
        name: 'Ponyta',
        nationalPokedexNumber: 77,
        imageUrl: 'https://images.pokemontcg.io/base6/87.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base6/87_hires.png',
        imageUrlReverseHolo: '../../images/legendary-reverse-holos/87Ponyta.jpg',
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
        number: '87',
        artist: 'Ken Sugimori',
        rarity: 'Common',
        series: 'Base',
        set: 'Legendary Collection',
        setCode: 'base6',
        attacks: [{
                cost: [
                    'Colorless',
                    'Colorless'
                ],
                name: 'Smash Kick',
                text: '',
                damage: '20',
                convertedEnergyCost: 2
            },
            {
                cost: [
                    'Fire',
                    'Fire'
                ],
                name: 'Flame Tail',
                text: '',
                damage: '30',
                convertedEnergyCost: 2
            }
        ],
        weaknesses: [{
            type: 'Water',
            value: '×2'
        }]
    },
    {
        id: 'base6-88',
        name: 'Psyduck',
        nationalPokedexNumber: 54,
        imageUrl: 'https://images.pokemontcg.io/base6/88.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base6/88_hires.png',
        imageUrlReverseHolo: '../../images/legendary-reverse-holos/88Psyduck.jpg',
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
        number: '88',
        artist: 'Kagemaru Himeno',
        rarity: 'Common',
        series: 'Base',
        set: 'Legendary Collection',
        setCode: 'base6',
        attacks: [{
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
        weaknesses: [{
            type: 'Lightning',
            value: '×2'
        }]
    },
    {
        id: 'base6-89',
        name: 'Rattata',
        nationalPokedexNumber: 19,
        imageUrl: 'https://images.pokemontcg.io/base6/89.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base6/89_hires.png',
        imageUrlReverseHolo: '../../images/legendary-reverse-holos/89Rattata.jpg',
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
        set: 'Legendary Collection',
        setCode: 'base6',
        attacks: [{
            cost: [
                'Colorless'
            ],
            name: 'Bite',
            text: '',
            damage: '20',
            convertedEnergyCost: 1
        }],
        resistances: [{
            type: 'Psychic',
            value: '-30'
        }],
        weaknesses: [{
            type: 'Fighting',
            value: '×2'
        }]
    },
    {
        id: 'base6-90',
        name: 'Rhyhorn',
        nationalPokedexNumber: 111,
        imageUrl: 'https://images.pokemontcg.io/base6/90.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base6/90_hires.png',
        imageUrlReverseHolo: '../../images/legendary-reverse-holos/90Rhyhorn.jpg',
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
        set: 'Legendary Collection',
        setCode: 'base6',
        attacks: [{
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
        resistances: [{
            type: 'Lightning',
            value: '-30'
        }],
        weaknesses: [{
            type: 'Grass',
            value: '×2'
        }]
    },
    {
        id: 'base6-91',
        name: 'Sandshrew',
        nationalPokedexNumber: 27,
        imageUrl: 'https://images.pokemontcg.io/base6/91.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base6/91_hires.png',
        imageUrlReverseHolo: '../../images/legendary-reverse-holos/91Sandshrew.jpg',
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
        set: 'Legendary Collection',
        setCode: 'base6',
        attacks: [{
            cost: [
                'Fighting'
            ],
            name: 'Sand',
            text: 'If defender tries to attack during opponent\'s next turn, your opponent flips a coin. If tails, that attack does nothing.',
            damage: '10',
            convertedEnergyCost: 1
        }],
        resistances: [{
            type: 'Lightning',
            value: '-30'
        }],
        weaknesses: [{
            type: 'Grass',
            value: '×2'
        }]
    },
    {
        id: 'base6-92',
        name: 'Seel',
        nationalPokedexNumber: 86,
        imageUrl: 'https://images.pokemontcg.io/base6/92.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base6/92_hires.png',
        imageUrlReverseHolo: '../../images/legendary-reverse-holos/92Seel.jpg',
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
        number: '92',
        artist: 'Ken Sugimori',
        rarity: 'Common',
        series: 'Base',
        set: 'Legendary Collection',
        setCode: 'base6',
        attacks: [{
            cost: [
                'Water'
            ],
            name: 'Headbutt',
            text: '',
            damage: '10',
            convertedEnergyCost: 1
        }],
        weaknesses: [{
            type: 'Lightning',
            value: '×2'
        }]
    },
    {
        id: 'base6-93',
        name: 'Slowpoke',
        nationalPokedexNumber: 79,
        imageUrl: 'https://images.pokemontcg.io/base6/93.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base6/93_hires.png',
        imageUrlReverseHolo: '../../images/legendary-reverse-holos/93Slowpoke.jpg',
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
        artist: 'Miki Tanaka',
        rarity: 'Common',
        series: 'Base',
        set: 'Legendary Collection',
        setCode: 'base6',
        attacks: [{
                cost: [
                    'Colorless'
                ],
                name: 'Spacing Out',
                text: 'Flip a coin. If heads, remove a damage counter from Slowpoke. This attack can\'t be used if Slowpoke has no damage counters on it.',
                damage: '',
                convertedEnergyCost: 1
            },
            {
                cost: [
                    'Psychic',
                    'Psychic'
                ],
                name: 'Scavenge',
                text: 'Discard 1 Psychic Energy card attached to Slowpoke in order to use this attack. Put a Trainer card from your discard pile into your hand.',
                damage: '',
                convertedEnergyCost: 2
            }
        ],
        weaknesses: [{
            type: 'Psychic',
            value: '×2'
        }]
    },
    {
        id: 'base6-94',
        name: 'Spearow',
        nationalPokedexNumber: 21,
        imageUrl: 'https://images.pokemontcg.io/base6/94.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base6/94_hires.png',
        imageUrlReverseHolo: '../../images/legendary-reverse-holos/94Spearow.jpg',
        types: [
            'Colorless'
        ],
        supertype: 'Pokémon',
        subtype: 'Basic',
        hp: '50',
        number: '94',
        artist: 'Mitsuhiro Arita',
        rarity: 'Common',
        series: 'Base',
        set: 'Legendary Collection',
        setCode: 'base6',
        attacks: [{
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
        resistances: [{
            type: 'Fighting',
            value: '-30'
        }],
        weaknesses: [{
            type: 'Lightning',
            value: '×2'
        }]
    },
    {
        id: 'base6-95',
        name: 'Squirtle',
        nationalPokedexNumber: 7,
        imageUrl: 'https://images.pokemontcg.io/base6/95.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base6/95_hires.png',
        imageUrlReverseHolo: '../../images/legendary-reverse-holos/95Squirtle.jpg',
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
        artist: 'Mitsuhiro Arita',
        rarity: 'Common',
        series: 'Base',
        set: 'Legendary Collection',
        setCode: 'base6',
        attacks: [{
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
        weaknesses: [{
            type: 'Lightning',
            value: '×2'
        }]
    },
    {
        id: 'base6-96',
        name: 'Tentacool',
        nationalPokedexNumber: 72,
        imageUrl: 'https://images.pokemontcg.io/base6/96.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base6/96_hires.png',
        imageUrlReverseHolo: '../../images/legendary-reverse-holos/96Tentacool.jpg',
        types: [
            'Water'
        ],
        supertype: 'Pokémon',
        subtype: 'Basic',
        ability: {
            name: 'Cowardice',
            text: 'At any time during your turn (before your attack), you may return Tentacool to your hand. (Discard all cards attached to Tentacool.) This power can\'t be used the turn you put Tentacool into play or if Tentacool is Asleep, Confused, or Paralyzed.',
            type: 'Pokémon Power'
        },
        hp: '30',
        number: '96',
        artist: 'Kagemaru Himeno',
        rarity: 'Common',
        series: 'Base',
        set: 'Legendary Collection',
        setCode: 'base6',
        attacks: [{
            cost: [
                'Water'
            ],
            name: 'Acid',
            text: '',
            damage: '10',
            convertedEnergyCost: 1
        }],
        weaknesses: [{
            type: 'Lightning',
            value: '×2'
        }]
    },
    {
        id: 'base6-97',
        name: 'Voltorb',
        nationalPokedexNumber: 100,
        imageUrl: 'https://images.pokemontcg.io/base6/97.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base6/97_hires.png',
        imageUrlReverseHolo: '../../images/legendary-reverse-holos/97Voltorb.jpg',
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
        number: '97',
        artist: 'Keiji Kinebuchi',
        rarity: 'Common',
        series: 'Base',
        set: 'Legendary Collection',
        setCode: 'base6',
        attacks: [{
            cost: [
                'Colorless'
            ],
            name: 'Tackle',
            text: '',
            damage: '10',
            convertedEnergyCost: 1
        }],
        weaknesses: [{
            type: 'Fighting',
            value: '×2'
        }]
    },
    {
        id: 'base6-98',
        name: 'Vulpix',
        nationalPokedexNumber: 37,
        imageUrl: 'https://images.pokemontcg.io/base6/98.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base6/98_hires.png',
        imageUrlReverseHolo: '../../images/legendary-reverse-holos/98Vulpix.jpg',
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
        number: '98',
        artist: 'Ken Sugimori',
        rarity: 'Common',
        series: 'Base',
        set: 'Legendary Collection',
        setCode: 'base6',
        attacks: [{
            cost: [
                'Fire',
                'Fire'
            ],
            name: 'Confuse Ray',
            text: 'Flip a coin. If heads, the Defending Pokémon is now Confused.',
            damage: '10',
            convertedEnergyCost: 2
        }],
        weaknesses: [{
            type: 'Water',
            value: '×2'
        }]
    },
    {
        id: 'base6-99',
        name: 'Weedle',
        nationalPokedexNumber: 13,
        imageUrl: 'https://images.pokemontcg.io/base6/99.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base6/99_hires.png',
        imageUrlReverseHolo: '../../images/legendary-reverse-holos/99Weedle.jpg',
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
        number: '99',
        artist: 'Mitsuhiro Arita',
        rarity: 'Common',
        series: 'Base',
        set: 'Legendary Collection',
        setCode: 'base6',
        attacks: [{
            cost: [
                'Grass'
            ],
            name: 'Poison Sting',
            text: 'Flip a coin. If heads, Defending Pokémon is now Poisoned.',
            damage: '10',
            convertedEnergyCost: 1
        }],
        weaknesses: [{
            type: 'Fire',
            value: '×2'
        }]
    },
    {
        id: 'base6-100',
        name: 'Full Heal Energy',
        imageUrl: 'https://images.pokemontcg.io/base6/100.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base6/100_hires.png',
        imageUrlReverseHolo: '../../images/legendary-reverse-holos/100FullHealEnergy.jpg',
        supertype: 'Energy',
        subtype: 'Special',
        number: '100',
        artist: 'Keiji Kinebuchi',
        rarity: 'Uncommon',
        series: 'Base',
        set: 'Legendary Collection',
        setCode: 'base6',
        text: [
            'If you play this card from your hand, the Pokémon you attach it to is no longer Asleep, Confused, Paralyzed, or Poisoned. Full Heal Energy Provides Colorless energy. (Doesn\'t count as a basic Energy card.)'
        ]
    },
    {
        id: 'base6-101',
        name: 'Potion Energy',
        imageUrl: 'https://images.pokemontcg.io/base6/101.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base6/101_hires.png',
        imageUrlReverseHolo: '../../images/legendary-reverse-holos/101PotionEnergy.jpg',
        supertype: 'Energy',
        subtype: 'Special',
        number: '101',
        artist: 'Keiji Kinebuchi',
        rarity: 'Uncommon',
        series: 'Base',
        set: 'Legendary Collection',
        setCode: 'base6',
        text: [
            'If you play this card from your hand, remove 1 damage counter from the Pokémon you attach it to, if it has any. Potion Energy provides Colorless energy. (Doesn\'t count as a basic Energy card.)'
        ]
    },
    {
        id: 'base6-102',
        name: 'Pokémon Breeder',
        imageUrl: 'https://images.pokemontcg.io/base6/102.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base6/102_hires.png',
        imageUrlReverseHolo: '../../images/legendary-reverse-holos/102PokemonBreeder.jpg',
        supertype: 'Trainer',
        subtype: '',
        number: '102',
        artist: 'Ken Sugimori',
        rarity: 'Rare',
        series: 'Base',
        set: 'Legendary Collection',
        setCode: 'base6',
        text: [
            'Put a Stage 2 Evolution card from your hand on the matching Basic Pokémon. You can only play this card when you would be allowed to evolve that Pokémon anyway.'
        ]
    },
    {
        id: 'base6-103',
        name: 'Pokémon Trader',
        imageUrl: 'https://images.pokemontcg.io/base6/103.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base6/103_hires.png',
        imageUrlReverseHolo: '../../images/legendary-reverse-holos/103PokemonTrader.jpg',
        supertype: 'Trainer',
        subtype: '',
        number: '103',
        artist: 'Ken Sugimori',
        rarity: 'Rare',
        series: 'Base',
        set: 'Legendary Collection',
        setCode: 'base6',
        text: [
            'Trade 1 of the Basic Pokémon or Evolution cards in your hand for 1 of the Basic Pokémon or Evolution cards from your deck. Show both cards to your opponent. Shuffle your deck afterward.'
        ]
    },
    {
        id: 'base6-104',
        name: 'Scoop Up',
        imageUrl: 'https://images.pokemontcg.io/base6/104.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base6/104_hires.png',
        imageUrlReverseHolo: '../../images/legendary-reverse-holos/104ScoopUp.jpg',
        supertype: 'Trainer',
        subtype: '',
        number: '104',
        artist: 'Keiji Kinebuchi',
        rarity: 'Rare',
        series: 'Base',
        set: 'Legendary Collection',
        setCode: 'base6',
        text: [
            'Choose 1 of your own Pokémon in play and return its Basic Pokémon card to your hand. (Discard all cards attached to that card.)'
        ]
    },
    {
        id: 'base6-105',
        name: 'The Boss\'s Way',
        imageUrl: 'https://images.pokemontcg.io/base6/105.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base6/105_hires.png',
        imageUrlReverseHolo: '../../images/legendary-reverse-holos/105TheBosssWay.jpg',
        supertype: 'Trainer',
        subtype: '',
        number: '105',
        artist: 'Ken Sugimori',
        rarity: 'Uncommon',
        series: 'Base',
        set: 'Legendary Collection',
        setCode: 'base6',
        text: [
            'Search your deck for an Evolution card with Dark in its name. Show it to your opponent and put it into your hand. Shuffle your deck afterward.'
        ]
    },
    {
        id: 'base6-106',
        name: 'Challenge!',
        imageUrl: 'https://images.pokemontcg.io/base6/106.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base6/106_hires.png',
        imageUrlReverseHolo: '../../images/legendary-reverse-holos/106Challenge.jpg',
        supertype: 'Trainer',
        subtype: '',
        number: '106',
        artist: 'Kagemaru Himeno',
        rarity: 'Uncommon',
        series: 'Base',
        set: 'Legendary Collection',
        setCode: 'base6',
        text: [
            'Ask your opponent if he or she accepts your challenge. If your opponent declines (or if both Benches are full), draw 2 cards. If your opponent accepts, each of you searches your decks for any number of Basic Pokémon cards and puts them face down onto your Benches. (A player can\'t do this if his or her Bench is full.) When you both have finished, shuffle your decks and turn those cards face up.'
        ]
    },
    {
        id: 'base6-107',
        name: 'Energy Retrieval',
        imageUrl: 'https://images.pokemontcg.io/base6/107.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base6/107_hires.png',
        imageUrlReverseHolo: '../../images/legendary-reverse-holos/107EnergyRetrieval.jpg',
        supertype: 'Trainer',
        subtype: '',
        number: '107',
        artist: 'Keiji Kinebuchi',
        rarity: 'Uncommon',
        series: 'Base',
        set: 'Legendary Collection',
        setCode: 'base6',
        text: [
            'Trade 1 of other cards in your hand for up to 2 basic Energy cards from your discard pile.'
        ]
    },
    {
        id: 'base6-108',
        name: 'Bill',
        imageUrl: 'https://images.pokemontcg.io/base6/108.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base6/108_hires.png',
        imageUrlReverseHolo: '../../images/legendary-reverse-holos/108Bill.jpg',
        supertype: 'Trainer',
        subtype: '',
        number: '108',
        artist: 'Ken Sugimori',
        rarity: 'Common',
        series: 'Base',
        set: 'Legendary Collection',
        setCode: 'base6',
        text: [
            'Draw 2 cards.'
        ]
    },
    {
        id: 'base6-109',
        name: 'Mysterious Fossil',
        imageUrl: 'https://images.pokemontcg.io/base6/109.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base6/109_hires.png',
        imageUrlReverseHolo: '../../images/legendary-reverse-holos/109MysteriousFossil.jpg',
        supertype: 'Trainer',
        subtype: '',
        hp: '10',
        number: '109',
        artist: 'Keiji Kinebuchi',
        rarity: 'Common',
        series: 'Base',
        set: 'Legendary Collection',
        setCode: 'base6',
        text: [
            'Play Mysterious Fossil as if it were a Basic Pokémon. While in play, Mysterious Fossil counts as a Pokémon (instead of a Trainer card). Mysterious Fossil has no attacks, can\'t retreat, and can\'t be Asleep, Confused, Paralyzed, or Poisoned. If Mysterious Fossil is Knocked Out, it doesn\'t count as a Knocked Out Pokémon. (Discard it anyway.) At any time during your turn before your attack, you may discard Mysterious Fossil from play. (Major text change in Legend Maker. Requires reference.)'
        ]
    },
    {
        id: 'base6-110',
        name: 'Potion',
        imageUrl: 'https://images.pokemontcg.io/base6/110.png',
        imageUrlHiRes: 'https://images.pokemontcg.io/base6/110_hires.png',
        imageUrlReverseHolo: '../../images/legendary-reverse-holos/110Potion.jpg',
        supertype: 'Trainer',
        subtype: '',
        number: '110',
        artist: 'Keiji Kinebuchi',
        rarity: 'Common',
        series: 'Base',
        set: 'Legendary Collection',
        setCode: 'base6',
        text: [
            'Remove up to 2 damage counters from 1 of your Pokémon.'
        ]
    }
]