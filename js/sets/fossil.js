const fossilCards = [
    {
        "id": "base3-1",
        "name": "Aerodactyl",
        "nationalPokedexNumber": 142,
        "imageUrl": "https://images.pokemontcg.io/base3/1.png",
        "imageUrlHiRes": "https://images.pokemontcg.io/base3/1_hires.png",
        "types": [
            "Fighting"
        ],
        "supertype": "Pokémon",
        "subtype": "Stage 1",
        "ability": {
            "name": "Prehistoric Power",
            "text": "No more Evolution cards can be played. This power stops working while Aerodactyl is Asleep, Confused, or Paralyzed.",
            "type": "Pokémon Power"
        },
        "hp": "60",
        "retreatCost": [
            "Colorless",
            "Colorless"
        ],
        "convertedRetreatCost": 2,
        "number": "1",
        "artist": "Kagemaru Himeno",
        "rarity": "Holo Rare",
        "series": "Base",
        "set": "Fossil",
        "setCode": "base3",
        "attacks": [
            {
                "cost": [
                    "Colorless",
                    "Colorless",
                    "Colorless"
                ],
                "name": "Wing Attack",
                "text": "",
                "damage": "30",
                "convertedEnergyCost": 3
            }
        ],
        "resistances": [
            {
                "type": "Fighting",
                "value": "-30"
            }
        ],
        "weaknesses": [
            {
                "type": "Grass",
                "value": "×2"
            }
        ]
    },
    {
        "id": "base3-2",
        "name": "Articuno",
        "nationalPokedexNumber": 144,
        "imageUrl": "https://images.pokemontcg.io/base3/2.png",
        "imageUrlHiRes": "https://images.pokemontcg.io/base3/2_hires.png",
        "types": [
            "Water"
        ],
        "supertype": "Pokémon",
        "subtype": "Basic",
        "hp": "70",
        "retreatCost": [
            "Colorless",
            "Colorless"
        ],
        "convertedRetreatCost": 2,
        "number": "2",
        "artist": "Mitsuhiro Arita",
        "rarity": "Holo Rare",
        "series": "Base",
        "set": "Fossil",
        "setCode": "base3",
        "attacks": [
            {
                "cost": [
                    "Water",
                    "Water",
                    "Water"
                ],
                "name": "Freeze Dry",
                "text": "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
                "damage": "30",
                "convertedEnergyCost": 3
            },
            {
                "cost": [
                    "Water",
                    "Water",
                    "Water",
                    "Water"
                ],
                "name": "Blizzard",
                "text": "Flip a coin. If heads, this attack does 10 damage to each of your opponent's Benched Pokémon. If tails, this attack does 10 damage to each of your own Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
                "damage": "50",
                "convertedEnergyCost": 4
            }
        ],
        "resistances": [
            {
                "type": "Fighting",
                "value": "-30"
            }
        ]
    },
    {
        "id": "base3-3",
        "name": "Ditto",
        "nationalPokedexNumber": 132,
        "imageUrl": "https://images.pokemontcg.io/base3/3.png",
        "imageUrlHiRes": "https://images.pokemontcg.io/base3/3_hires.png",
        "types": [
            "Colorless"
        ],
        "supertype": "Pokémon",
        "subtype": "Basic",
        "ability": {
            "name": "Transform",
            "text": "If Ditto is your Active Pokémon, treat it as if it were the same card as the Defending Pokémon, including type, Hit Points, Weakness, and so on, except Ditto can't evolve, always has this Pokémon Power, and you may treat any Energy attached to Ditto as Energy of any type. Ditto isn't a copy of any other Pokémon while Ditto is Asleep, Confused, or Paralyzed.",
            "type": "Pokémon Power"
        },
        "hp": "50",
        "retreatCost": [
            "Colorless"
        ],
        "convertedRetreatCost": 1,
        "number": "3",
        "artist": "Keiji Kinebuchi",
        "rarity": "Holo Rare",
        "series": "Base",
        "set": "Fossil",
        "setCode": "base3",
        "resistances": [
            {
                "type": "Psychic",
                "value": "-30"
            }
        ],
        "weaknesses": [
            {
                "type": "Fighting",
                "value": "×2"
            }
        ]
    },
    {
        "id": "base3-4",
        "name": "Dragonite",
        "nationalPokedexNumber": 149,
        "imageUrl": "https://images.pokemontcg.io/base3/4.png",
        "imageUrlHiRes": "https://images.pokemontcg.io/base3/4_hires.png",
        "types": [
            "Colorless"
        ],
        "supertype": "Pokémon",
        "subtype": "Stage 2",
        "evolvesFrom": "Dragonair",
        "ability": {
            "name": "Step In",
            "text": "Once during your turn (before you attack) if Dragonite is on your Bench, you may switch it with your Active Pokémon.",
            "type": "Pokémon Power"
        },
        "hp": "100",
        "retreatCost": [
            "Colorless"
        ],
        "convertedRetreatCost": 1,
        "number": "4",
        "artist": "Kagemaru Himeno",
        "rarity": "Holo Rare",
        "series": "Base",
        "set": "Fossil",
        "setCode": "base3",
        "attacks": [
            {
                "cost": [
                    "Colorless",
                    "Colorless",
                    "Colorless",
                    "Colorless"
                ],
                "name": "Slam",
                "text": "Flip 2 coins. This attack does 40 damage times the number of heads.",
                "damage": "40×",
                "convertedEnergyCost": 4
            }
        ],
        "resistances": [
            {
                "type": "Fighting",
                "value": "-30"
            }
        ]
    },
    {
        "id": "base3-5",
        "name": "Gengar",
        "nationalPokedexNumber": 94,
        "imageUrl": "https://images.pokemontcg.io/base3/5.png",
        "imageUrlHiRes": "https://images.pokemontcg.io/base3/5_hires.png",
        "types": [
            "Psychic"
        ],
        "supertype": "Pokémon",
        "subtype": "Stage 2",
        "evolvesFrom": "Haunter",
        "ability": {
            "name": "Curse",
            "text": "Once during your turn (before your attack), you may move 1 damage counter from 1 of your opponent's Pokémon to another (even if it would Knock Out the other Pokémon). This power can't be used if Gengar is Asleep, Confused, or Paralyzed.",
            "type": "Pokémon Power"
        },
        "hp": "80",
        "retreatCost": [
            "Colorless"
        ],
        "convertedRetreatCost": 1,
        "number": "5",
        "artist": "Keiji Kinebuchi",
        "rarity": "Holo Rare",
        "series": "Base",
        "set": "Fossil",
        "setCode": "base3",
        "attacks": [
            {
                "cost": [
                    "Psychic",
                    "Psychic",
                    "Psychic"
                ],
                "name": "Dark Mind",
                "text": "If your opponent has any Benched Pokémon, choose 1 of them and this attack does 10 damage to it. (Don't apply Weakness and Resistance for Benched Pokémon.)",
                "damage": "30",
                "convertedEnergyCost": 3
            }
        ],
        "resistances": [
            {
                "type": "Fighting",
                "value": "-30"
            }
        ]
    },
    {
        "id": "base3-6",
        "name": "Haunter",
        "nationalPokedexNumber": 93,
        "imageUrl": "https://images.pokemontcg.io/base3/6.png",
        "imageUrlHiRes": "https://images.pokemontcg.io/base3/6_hires.png",
        "types": [
            "Psychic"
        ],
        "supertype": "Pokémon",
        "subtype": "Stage 1",
        "evolvesFrom": "Gastly",
        "ability": {
            "name": "Transparency",
            "text": "Whenever an attack does anything to Haunter, flip a coin. If heads, prevent all effects of that attack, including damage, done to Haunter. This power stops working while Haunter is Asleep.",
            "type": "Pokémon Power"
        },
        "hp": "50",
        "number": "6",
        "artist": "Ken Sugimori",
        "rarity": "Holo Rare",
        "series": "Base",
        "set": "Fossil",
        "setCode": "base3",
        "attacks": [
            {
                "cost": [
                    "Psychic",
                    "Colorless"
                ],
                "name": "Nightmare",
                "text": "The Defending Pokémon is now Asleep.",
                "damage": "10",
                "convertedEnergyCost": 2
            }
        ],
        "resistances": [
            {
                "type": "Fighting",
                "value": "-30"
            }
        ]
    },
    {
        "id": "base3-7",
        "name": "Hitmonlee",
        "nationalPokedexNumber": 106,
        "imageUrl": "https://images.pokemontcg.io/base3/7.png",
        "imageUrlHiRes": "https://images.pokemontcg.io/base3/7_hires.png",
        "types": [
            "Fighting"
        ],
        "supertype": "Pokémon",
        "subtype": "Basic",
        "hp": "60",
        "retreatCost": [
            "Colorless"
        ],
        "convertedRetreatCost": 1,
        "number": "7",
        "artist": "Ken Sugimori",
        "rarity": "Holo Rare",
        "series": "Base",
        "set": "Fossil",
        "setCode": "base3",
        "attacks": [
            {
                "cost": [
                    "Fighting",
                    "Fighting"
                ],
                "name": "Stretch Kick",
                "text": "If your opponent has any Benched Pokémon, choose 1 of them and this attack does 20 damage to it. (Don't apply Weakness and Resistance for Benched Pokémon.)",
                "damage": "20",
                "convertedEnergyCost": 2
            },
            {
                "cost": [
                    "Fighting",
                    "Fighting",
                    "Fighting"
                ],
                "name": "High Jump Kick",
                "text": "",
                "damage": "50",
                "convertedEnergyCost": 3
            }
        ],
        "weaknesses": [
            {
                "type": "Psychic",
                "value": "×2"
            }
        ]
    },
    {
        "id": "base3-8",
        "name": "Hypno",
        "nationalPokedexNumber": 97,
        "imageUrl": "https://images.pokemontcg.io/base3/8.png",
        "imageUrlHiRes": "https://images.pokemontcg.io/base3/8_hires.png",
        "types": [
            "Psychic"
        ],
        "supertype": "Pokémon",
        "subtype": "Stage 1",
        "evolvesFrom": "Drowzee",
        "hp": "90",
        "retreatCost": [
            "Colorless",
            "Colorless"
        ],
        "convertedRetreatCost": 2,
        "number": "8",
        "artist": "Ken Sugimori",
        "rarity": "Holo Rare",
        "series": "Base",
        "set": "Fossil",
        "setCode": "base3",
        "attacks": [
            {
                "cost": [
                    "Psychic"
                ],
                "name": "Prophecy",
                "text": "Look at up to 3 cards from the top of either player's deck and rearrange them as you like.",
                "damage": "",
                "convertedEnergyCost": 1
            },
            {
                "cost": [
                    "Psychic",
                    "Psychic",
                    "Psychic"
                ],
                "name": "Dark Mind",
                "text": "If your opponent has any Benched Pokémon, choose 1 of them and this attack does 10 damage to it. (Don't apply Weakness and Resistance for Benched Pokémon.)",
                "damage": "30",
                "convertedEnergyCost": 3
            }
        ],
        "weaknesses": [
            {
                "type": "Psychic",
                "value": "×2"
            }
        ]
    },
    {
        "id": "base3-9",
        "name": "Kabutops",
        "nationalPokedexNumber": 141,
        "imageUrl": "https://images.pokemontcg.io/base3/9.png",
        "imageUrlHiRes": "https://images.pokemontcg.io/base3/9_hires.png",
        "types": [
            "Fighting"
        ],
        "supertype": "Pokémon",
        "subtype": "Stage 2",
        "evolvesFrom": "Kabuto",
        "hp": "60",
        "retreatCost": [
            "Colorless"
        ],
        "convertedRetreatCost": 1,
        "number": "9",
        "artist": "Ken Sugimori",
        "rarity": "Holo Rare",
        "series": "Base",
        "set": "Fossil",
        "setCode": "base3",
        "attacks": [
            {
                "cost": [
                    "Fighting",
                    "Fighting"
                ],
                "name": "Sharp Sickle",
                "text": "",
                "damage": "30",
                "convertedEnergyCost": 2
            },
            {
                "cost": [
                    "Fighting",
                    "Fighting",
                    "Fighting",
                    "Fighting"
                ],
                "name": "Absorb",
                "text": "Remove a number of damage counters from Kabutops equal to half the damage done to Defending Pokémon (after applying Weakness and Resistance) (rounded up to the nearest 10). If Kabutops has fewer damage counters than that, remove all of them.",
                "damage": "40",
                "convertedEnergyCost": 4
            }
        ],
        "weaknesses": [
            {
                "type": "Grass",
                "value": "×2"
            }
        ]
    },
    {
        "id": "base3-10",
        "name": "Lapras",
        "nationalPokedexNumber": 131,
        "imageUrl": "https://images.pokemontcg.io/base3/10.png",
        "imageUrlHiRes": "https://images.pokemontcg.io/base3/10_hires.png",
        "types": [
            "Water"
        ],
        "supertype": "Pokémon",
        "subtype": "Basic",
        "hp": "80",
        "retreatCost": [
            "Colorless",
            "Colorless"
        ],
        "convertedRetreatCost": 2,
        "number": "10",
        "artist": "Ken Sugimori",
        "rarity": "Holo Rare",
        "series": "Base",
        "set": "Fossil",
        "setCode": "base3",
        "attacks": [
            {
                "cost": [
                    "Water"
                ],
                "name": "Water Gun",
                "text": "Does 10 damage plus 10 more damage for each Energy attached to Lapras but not used to pay for this attack's Energy cost. You can't add more than 20 damage this way.",
                "damage": "10+",
                "convertedEnergyCost": 1
            },
            {
                "cost": [
                    "Water",
                    "Water"
                ],
                "name": "Confuse Ray",
                "text": "Flip a coin. If heads, the Defending Pokémon is now Confused.",
                "damage": "10",
                "convertedEnergyCost": 2
            }
        ],
        "weaknesses": [
            {
                "type": "Lightning",
                "value": "×2"
            }
        ]
    },
    {
        "id": "base3-11",
        "name": "Magneton",
        "nationalPokedexNumber": 82,
        "imageUrl": "https://images.pokemontcg.io/base3/11.png",
        "imageUrlHiRes": "https://images.pokemontcg.io/base3/11_hires.png",
        "types": [
            "Lightning"
        ],
        "supertype": "Pokémon",
        "subtype": "Stage 1",
        "evolvesFrom": "Magnemite",
        "hp": "80",
        "retreatCost": [
            "Colorless",
            "Colorless"
        ],
        "convertedRetreatCost": 2,
        "number": "11",
        "artist": "Ken Sugimori",
        "rarity": "Holo Rare",
        "series": "Base",
        "set": "Fossil",
        "setCode": "base3",
        "attacks": [
            {
                "cost": [
                    "Lightning",
                    "Colorless"
                ],
                "name": "Sonicboom",
                "text": "Don't apply Weakness and Resistance for this attack. (Any other effects that would happen after applying Weakness and Resistance still happen.)",
                "damage": "20",
                "convertedEnergyCost": 2
            },
            {
                "cost": [
                    "Lightning",
                    "Lightning",
                    "Lightning",
                    "Lightning"
                ],
                "name": "Selfdestruct",
                "text": "Does 20 damage to each Pokémon on each player's Bench. (Don't apply Weakness and Resistance for Benched Pokémon.) Magneton does 100 damage to itself.",
                "damage": "100",
                "convertedEnergyCost": 4
            }
        ],
        "weaknesses": [
            {
                "type": "Fighting",
                "value": "×2"
            }
        ]
    },
    {
        "id": "base3-12",
        "name": "Moltres",
        "nationalPokedexNumber": 146,
        "imageUrl": "https://images.pokemontcg.io/base3/12.png",
        "imageUrlHiRes": "https://images.pokemontcg.io/base3/12_hires.png",
        "types": [
            "Fire"
        ],
        "supertype": "Pokémon",
        "subtype": "Basic",
        "hp": "70",
        "retreatCost": [
            "Colorless",
            "Colorless"
        ],
        "convertedRetreatCost": 2,
        "number": "12",
        "artist": "Mitsuhiro Arita",
        "rarity": "Holo Rare",
        "series": "Base",
        "set": "Fossil",
        "setCode": "base3",
        "attacks": [
            {
                "cost": [
                    "Fire"
                ],
                "name": "Wildfire",
                "text": "You may discard any number of R Energy cards attached to Moltres when you use this attack. If you do, discard that many cards from the top of your opponent's deck.",
                "damage": "",
                "convertedEnergyCost": 1
            },
            {
                "cost": [
                    "Fire",
                    "Fire",
                    "Fire",
                    "Fire"
                ],
                "name": "Dive Bomb",
                "text": "Flip a coin. If tails, this attack does nothing.",
                "damage": "",
                "convertedEnergyCost": 4
            }
        ],
        "resistances": [
            {
                "type": "Fighting",
                "value": "-30"
            }
        ]
    },
    {
        "id": "base3-13",
        "name": "Muk",
        "nationalPokedexNumber": 89,
        "imageUrl": "https://images.pokemontcg.io/base3/13.png",
        "imageUrlHiRes": "https://images.pokemontcg.io/base3/13_hires.png",
        "types": [
            "Grass"
        ],
        "supertype": "Pokémon",
        "subtype": "Stage 1",
        "evolvesFrom": "Grimer",
        "ability": {
            "name": "Toxic Gas",
            "text": "Ignore all Pokémon Powers other than Toxic Gases. This power stops working while Muk is Asleep, Confused, or Paralyzed.",
            "type": "Pokémon Power"
        },
        "hp": "70",
        "retreatCost": [
            "Colorless",
            "Colorless"
        ],
        "convertedRetreatCost": 2,
        "number": "13",
        "artist": "Mitsuhiro Arita",
        "rarity": "Holo Rare",
        "series": "Base",
        "set": "Fossil",
        "setCode": "base3",
        "attacks": [
            {
                "cost": [
                    "Grass",
                    "Grass",
                    "Grass"
                ],
                "name": "Sludge",
                "text": "Flip a coin. If heads, the Defending Pokémon is now Poisoned.",
                "damage": "",
                "convertedEnergyCost": 3
            }
        ],
        "weaknesses": [
            {
                "type": "Psychic",
                "value": "×2"
            }
        ]
    },
    {
        "id": "base3-14",
        "name": "Raichu",
        "nationalPokedexNumber": 26,
        "imageUrl": "https://images.pokemontcg.io/base3/14.png",
        "imageUrlHiRes": "https://images.pokemontcg.io/base3/14_hires.png",
        "types": [
            "Lightning"
        ],
        "supertype": "Pokémon",
        "subtype": "Stage 1",
        "evolvesFrom": "Pikachu",
        "hp": "90",
        "retreatCost": [
            "Colorless"
        ],
        "convertedRetreatCost": 1,
        "number": "14",
        "artist": "Mitsuhiro Arita",
        "rarity": "Holo Rare",
        "series": "Base",
        "set": "Fossil",
        "setCode": "base3",
        "attacks": [
            {
                "cost": [
                    "Lightning",
                    "Lightning",
                    "Lightning",
                    "Lightning"
                ],
                "name": "Gigashock",
                "text": "Choose 3 of your opponent's Benched Pokémon and this attack does 10 damage to each of them. (Don't apply Weakness and Resistance for Benched Pokémon.) If your opponent has fewer than 3 Benched Pokémon, do the damage to each of them.",
                "damage": "30",
                "convertedEnergyCost": 4
            }
        ],
        "weaknesses": [
            {
                "type": "Fighting",
                "value": "×2"
            }
        ]
    },
    {
        "id": "base3-15",
        "name": "Zapdos",
        "nationalPokedexNumber": 145,
        "imageUrl": "https://images.pokemontcg.io/base3/15.png",
        "imageUrlHiRes": "https://images.pokemontcg.io/base3/15_hires.png",
        "types": [
            "Lightning"
        ],
        "supertype": "Pokémon",
        "subtype": "Basic",
        "hp": "80",
        "retreatCost": [
            "Colorless",
            "Colorless"
        ],
        "convertedRetreatCost": 2,
        "number": "15",
        "artist": "Mitsuhiro Arita",
        "rarity": "Holo Rare",
        "series": "Base",
        "set": "Fossil",
        "setCode": "base3",
        "attacks": [
            {
                "cost": [
                    "Lightning",
                    "Lightning",
                    "Lightning",
                    "Lightning"
                ],
                "name": "Thunderstorm",
                "text": "For each of your opponent's Benched Pokémon, flip a coin. If heads, this attack does 20 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) Then, Zapdos does 10 damage times the number of tails to itself.",
                "damage": "40",
                "convertedEnergyCost": 4
            }
        ],
        "resistances": [
            {
                "type": "Fighting",
                "value": "-30"
            }
        ]
    },
    {
        "id": "base3-16",
        "name": "Aerodactyl",
        "nationalPokedexNumber": 142,
        "imageUrl": "https://images.pokemontcg.io/base3/16.png",
        "imageUrlHiRes": "https://images.pokemontcg.io/base3/16_hires.png",
        "types": [
            "Fighting"
        ],
        "supertype": "Pokémon",
        "subtype": "Stage 1",
        "ability": {
            "name": "Prehistoric Power",
            "text": "No more Evolution cards can be played. This power stops working while Aerodactyl is Asleep, Confused, or Paralyzed.",
            "type": "Pokémon Power"
        },
        "hp": "60",
        "retreatCost": [
            "Colorless",
            "Colorless"
        ],
        "convertedRetreatCost": 2,
        "number": "16",
        "artist": "Kagemaru Himeno",
        "rarity": "Rare",
        "series": "Base",
        "set": "Fossil",
        "setCode": "base3",
        "attacks": [
            {
                "cost": [
                    "Colorless",
                    "Colorless",
                    "Colorless"
                ],
                "name": "Wing Attack",
                "text": "",
                "damage": "30",
                "convertedEnergyCost": 3
            }
        ],
        "resistances": [
            {
                "type": "Fighting",
                "value": "-30"
            }
        ],
        "weaknesses": [
            {
                "type": "Grass",
                "value": "×2"
            }
        ]
    },
    {
        "id": "base3-17",
        "name": "Articuno",
        "nationalPokedexNumber": 144,
        "imageUrl": "https://images.pokemontcg.io/base3/17.png",
        "imageUrlHiRes": "https://images.pokemontcg.io/base3/17_hires.png",
        "types": [
            "Water"
        ],
        "supertype": "Pokémon",
        "subtype": "Basic",
        "hp": "70",
        "retreatCost": [
            "Colorless",
            "Colorless"
        ],
        "convertedRetreatCost": 2,
        "number": "17",
        "artist": "Mitsuhiro Arita",
        "rarity": "Rare",
        "series": "Base",
        "set": "Fossil",
        "setCode": "base3",
        "attacks": [
            {
                "cost": [
                    "Water",
                    "Water",
                    "Water"
                ],
                "name": "Freeze Dry",
                "text": "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
                "damage": "30",
                "convertedEnergyCost": 3
            },
            {
                "cost": [
                    "Water",
                    "Water",
                    "Water",
                    "Water"
                ],
                "name": "Blizzard",
                "text": "Flip a coin. If heads, this attack does 10 damage to each of your opponent's Benched Pokémon. If tails, this attack does 10 damage to each of your own Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
                "damage": "50",
                "convertedEnergyCost": 4
            }
        ],
        "resistances": [
            {
                "type": "Fighting",
                "value": "-30"
            }
        ]
    },
    {
        "id": "base3-18",
        "name": "Ditto",
        "nationalPokedexNumber": 132,
        "imageUrl": "https://images.pokemontcg.io/base3/18.png",
        "imageUrlHiRes": "https://images.pokemontcg.io/base3/18_hires.png",
        "types": [
            "Colorless"
        ],
        "supertype": "Pokémon",
        "subtype": "Basic",
        "ability": {
            "name": "Transform",
            "text": "If Ditto is your Active Pokémon, treat it as if it were the same card as the Defending Pokémon, including type, Hit Points, Weakness, and so on, except Ditto can't evolve, always has this Pokémon Power, and you may treat any Energy attached to Ditto as Energy of any type. Ditto isn't a copy of any other Pokémon while Ditto is Asleep, Confused, or Paralyzed.",
            "type": "Pokémon Power"
        },
        "hp": "50",
        "retreatCost": [
            "Colorless"
        ],
        "convertedRetreatCost": 1,
        "number": "18",
        "artist": "Keiji Kinebuchi",
        "rarity": "Rare",
        "series": "Base",
        "set": "Fossil",
        "setCode": "base3",
        "resistances": [
            {
                "type": "Psychic",
                "value": "-30"
            }
        ],
        "weaknesses": [
            {
                "type": "Fighting",
                "value": "×2"
            }
        ]
    },
    {
        "id": "base3-19",
        "name": "Dragonite",
        "nationalPokedexNumber": 149,
        "imageUrl": "https://images.pokemontcg.io/base3/19.png",
        "imageUrlHiRes": "https://images.pokemontcg.io/base3/19_hires.png",
        "types": [
            "Colorless"
        ],
        "supertype": "Pokémon",
        "subtype": "Stage 2",
        "evolvesFrom": "Dragonair",
        "ability": {
            "name": "Step In",
            "text": "Once during your turn (before you attack) if Dragonite is on your Bench, you may switch it with your Active Pokémon.",
            "type": "Pokémon Power"
        },
        "hp": "100",
        "retreatCost": [
            "Colorless"
        ],
        "convertedRetreatCost": 1,
        "number": "19",
        "artist": "Kagemaru Himeno",
        "rarity": "Rare",
        "series": "Base",
        "set": "Fossil",
        "setCode": "base3",
        "attacks": [
            {
                "cost": [
                    "Colorless",
                    "Colorless",
                    "Colorless",
                    "Colorless"
                ],
                "name": "Slam",
                "text": "Flip 2 coins. This attack does 40 damage times the number of heads.",
                "damage": "40×",
                "convertedEnergyCost": 4
            }
        ],
        "resistances": [
            {
                "type": "Fighting",
                "value": "-30"
            }
        ]
    },
    {
        "id": "base3-20",
        "name": "Gengar",
        "nationalPokedexNumber": 94,
        "imageUrl": "https://images.pokemontcg.io/base3/20.png",
        "imageUrlHiRes": "https://images.pokemontcg.io/base3/20_hires.png",
        "types": [
            "Psychic"
        ],
        "supertype": "Pokémon",
        "subtype": "Stage 2",
        "evolvesFrom": "Haunter",
        "ability": {
            "name": "Curse",
            "text": "Once during your turn (before your attack), you may move 1 damage counter from 1 of your opponent's Pokémon to another (even if it would Knock Out the other Pokémon). This power can't be used if Gengar is Asleep, Confused, or Paralyzed.",
            "type": "Pokémon Power"
        },
        "hp": "80",
        "retreatCost": [
            "Colorless"
        ],
        "convertedRetreatCost": 1,
        "number": "20",
        "artist": "Keiji Kinebuchi",
        "rarity": "Rare",
        "series": "Base",
        "set": "Fossil",
        "setCode": "base3",
        "attacks": [
            {
                "cost": [
                    "Psychic",
                    "Psychic",
                    "Psychic"
                ],
                "name": "Dark Mind",
                "text": "If your opponent has any Benched Pokémon, choose 1 of them and this attack does 10 damage to it. (Don't apply Weakness and Resistance for Benched Pokémon.)",
                "damage": "30",
                "convertedEnergyCost": 3
            }
        ],
        "resistances": [
            {
                "type": "Fighting",
                "value": "-30"
            }
        ]
    },
    {
        "id": "base3-21",
        "name": "Haunter",
        "nationalPokedexNumber": 93,
        "imageUrl": "https://images.pokemontcg.io/base3/21.png",
        "imageUrlHiRes": "https://images.pokemontcg.io/base3/21_hires.png",
        "types": [
            "Psychic"
        ],
        "supertype": "Pokémon",
        "subtype": "Stage 1",
        "evolvesFrom": "Gastly",
        "ability": {
            "name": "Transparency",
            "text": "Whenever an attack does anything to Haunter, flip a coin. If heads, prevent all effects of that attack, including damage, done to Haunter. This power stops working while Haunter is Asleep.",
            "type": "Pokémon Power"
        },
        "hp": "50",
        "number": "21",
        "artist": "Ken Sugimori",
        "rarity": "Rare",
        "series": "Base",
        "set": "Fossil",
        "setCode": "base3",
        "attacks": [
            {
                "cost": [
                    "Psychic",
                    "Colorless"
                ],
                "name": "Nightmare",
                "text": "The Defending Pokémon is now Asleep.",
                "damage": "10",
                "convertedEnergyCost": 2
            }
        ],
        "resistances": [
            {
                "type": "Fighting",
                "value": "-30"
            }
        ]
    },
    {
        "id": "base3-22",
        "name": "Hitmonlee",
        "nationalPokedexNumber": 106,
        "imageUrl": "https://images.pokemontcg.io/base3/22.png",
        "imageUrlHiRes": "https://images.pokemontcg.io/base3/22_hires.png",
        "types": [
            "Fighting"
        ],
        "supertype": "Pokémon",
        "subtype": "Basic",
        "hp": "60",
        "retreatCost": [
            "Colorless"
        ],
        "convertedRetreatCost": 1,
        "number": "22",
        "artist": "Ken Sugimori",
        "rarity": "Rare",
        "series": "Base",
        "set": "Fossil",
        "setCode": "base3",
        "attacks": [
            {
                "cost": [
                    "Fighting",
                    "Fighting"
                ],
                "name": "Stretch Kick",
                "text": "If your opponent has any Benched Pokémon, choose 1 of them and this attack does 20 damage to it. (Don't apply Weakness and Resistance for Benched Pokémon.)",
                "damage": "20",
                "convertedEnergyCost": 2
            },
            {
                "cost": [
                    "Fighting",
                    "Fighting",
                    "Fighting"
                ],
                "name": "High Jump Kick",
                "text": "",
                "damage": "50",
                "convertedEnergyCost": 3
            }
        ],
        "weaknesses": [
            {
                "type": "Psychic",
                "value": "×2"
            }
        ]
    },
    {
        "id": "base3-23",
        "name": "Hypno",
        "nationalPokedexNumber": 97,
        "imageUrl": "https://images.pokemontcg.io/base3/23.png",
        "imageUrlHiRes": "https://images.pokemontcg.io/base3/23_hires.png",
        "types": [
            "Psychic"
        ],
        "supertype": "Pokémon",
        "subtype": "Stage 1",
        "evolvesFrom": "Drowzee",
        "hp": "90",
        "retreatCost": [
            "Colorless",
            "Colorless"
        ],
        "convertedRetreatCost": 2,
        "number": "23",
        "artist": "Ken Sugimori",
        "rarity": "Rare",
        "series": "Base",
        "set": "Fossil",
        "setCode": "base3",
        "attacks": [
            {
                "cost": [
                    "Psychic"
                ],
                "name": "Prophecy",
                "text": "Look at up to 3 cards from the top of either player's deck and rearrange them as you like.",
                "damage": "",
                "convertedEnergyCost": 1
            },
            {
                "cost": [
                    "Psychic",
                    "Psychic",
                    "Psychic"
                ],
                "name": "Dark Mind",
                "text": "If your opponent has any Benched Pokémon, choose 1 of them and this attack does 10 damage to it. (Don't apply Weakness and Resistance for Benched Pokémon.)",
                "damage": "30",
                "convertedEnergyCost": 3
            }
        ],
        "weaknesses": [
            {
                "type": "Psychic",
                "value": "×2"
            }
        ]
    },
    {
        "id": "base3-24",
        "name": "Kabutops",
        "nationalPokedexNumber": 141,
        "imageUrl": "https://images.pokemontcg.io/base3/24.png",
        "imageUrlHiRes": "https://images.pokemontcg.io/base3/24_hires.png",
        "types": [
            "Fighting"
        ],
        "supertype": "Pokémon",
        "subtype": "Stage 2",
        "evolvesFrom": "Kabuto",
        "hp": "60",
        "retreatCost": [
            "Colorless"
        ],
        "convertedRetreatCost": 1,
        "number": "24",
        "artist": "Ken Sugimori",
        "rarity": "Rare",
        "series": "Base",
        "set": "Fossil",
        "setCode": "base3",
        "attacks": [
            {
                "cost": [
                    "Fighting",
                    "Fighting"
                ],
                "name": "Sharp Sickle",
                "text": "",
                "damage": "30",
                "convertedEnergyCost": 2
            },
            {
                "cost": [
                    "Fighting",
                    "Fighting",
                    "Fighting",
                    "Fighting"
                ],
                "name": "Absorb",
                "text": "Remove a number of damage counters from Kabutops equal to half the damage done to Defending Pokémon (after applying Weakness and Resistance) (rounded up to the nearest 10). If Kabutops has fewer damage counters than that, remove all of them.",
                "damage": "40",
                "convertedEnergyCost": 4
            }
        ],
        "weaknesses": [
            {
                "type": "Grass",
                "value": "×2"
            }
        ]
    },
    {
        "id": "base3-25",
        "name": "Lapras",
        "nationalPokedexNumber": 131,
        "imageUrl": "https://images.pokemontcg.io/base3/25.png",
        "imageUrlHiRes": "https://images.pokemontcg.io/base3/25_hires.png",
        "types": [
            "Water"
        ],
        "supertype": "Pokémon",
        "subtype": "Basic",
        "hp": "80",
        "retreatCost": [
            "Colorless",
            "Colorless"
        ],
        "convertedRetreatCost": 2,
        "number": "25",
        "artist": "Ken Sugimori",
        "rarity": "Rare",
        "series": "Base",
        "set": "Fossil",
        "setCode": "base3",
        "attacks": [
            {
                "cost": [
                    "Water"
                ],
                "name": "Water Gun",
                "text": "Does 10 damage plus 10 more damage for each Energy attached to Lapras but not used to pay for this attack's Energy cost. You can't add more than 20 damage this way.",
                "damage": "10+",
                "convertedEnergyCost": 1
            },
            {
                "cost": [
                    "Water",
                    "Water"
                ],
                "name": "Confuse Ray",
                "text": "Flip a coin. If heads, the Defending Pokémon is now Confused.",
                "damage": "10",
                "convertedEnergyCost": 2
            }
        ],
        "weaknesses": [
            {
                "type": "Lightning",
                "value": "×2"
            }
        ]
    },
    {
        "id": "base3-26",
        "name": "Magneton",
        "nationalPokedexNumber": 82,
        "imageUrl": "https://images.pokemontcg.io/base3/26.png",
        "imageUrlHiRes": "https://images.pokemontcg.io/base3/26_hires.png",
        "types": [
            "Lightning"
        ],
        "supertype": "Pokémon",
        "subtype": "Stage 1",
        "evolvesFrom": "Magnemite",
        "hp": "80",
        "retreatCost": [
            "Colorless",
            "Colorless"
        ],
        "convertedRetreatCost": 2,
        "number": "26",
        "artist": "Ken Sugimori",
        "rarity": "Rare",
        "series": "Base",
        "set": "Fossil",
        "setCode": "base3",
        "attacks": [
            {
                "cost": [
                    "Lightning",
                    "Colorless"
                ],
                "name": "Sonicboom",
                "text": "Don't apply Weakness and Resistance for this attack. (Any other effects that would happen after applying Weakness and Resistance still happen.)",
                "damage": "20",
                "convertedEnergyCost": 2
            },
            {
                "cost": [
                    "Lightning",
                    "Lightning",
                    "Lightning",
                    "Lightning"
                ],
                "name": "Selfdestruct",
                "text": "Does 20 damage to each Pokémon on each player's Bench. (Don't apply Weakness and Resistance for Benched Pokémon.) Magneton does 100 damage to itself.",
                "damage": "100",
                "convertedEnergyCost": 4
            }
        ],
        "weaknesses": [
            {
                "type": "Fighting",
                "value": "×2"
            }
        ]
    },
    {
        "id": "base3-27",
        "name": "Moltres",
        "nationalPokedexNumber": 146,
        "imageUrl": "https://images.pokemontcg.io/base3/27.png",
        "imageUrlHiRes": "https://images.pokemontcg.io/base3/27_hires.png",
        "types": [
            "Fire"
        ],
        "supertype": "Pokémon",
        "subtype": "Basic",
        "hp": "70",
        "retreatCost": [
            "Colorless",
            "Colorless"
        ],
        "convertedRetreatCost": 2,
        "number": "27",
        "artist": "Mitsuhiro Arita",
        "rarity": "Rare",
        "series": "Base",
        "set": "Fossil",
        "setCode": "base3",
        "attacks": [
            {
                "cost": [
                    "Fire"
                ],
                "name": "Wildfire",
                "text": "You may discard any number of R Energy cards attached to Moltres when you use this attack. If you do, discard that many cards from the top of your opponent's deck.",
                "damage": "",
                "convertedEnergyCost": 1
            },
            {
                "cost": [
                    "Fire",
                    "Fire",
                    "Fire",
                    "Fire"
                ],
                "name": "Dive Bomb",
                "text": "Flip a coin. If tails, this attack does nothing.",
                "damage": "",
                "convertedEnergyCost": 4
            }
        ],
        "resistances": [
            {
                "type": "Fighting",
                "value": "-30"
            }
        ]
    },
    {
        "id": "base3-28",
        "name": "Muk",
        "nationalPokedexNumber": 89,
        "imageUrl": "https://images.pokemontcg.io/base3/28.png",
        "imageUrlHiRes": "https://images.pokemontcg.io/base3/28_hires.png",
        "types": [
            "Grass"
        ],
        "supertype": "Pokémon",
        "subtype": "Stage 1",
        "evolvesFrom": "Grimer",
        "ability": {
            "name": "Toxic Gas",
            "text": "Ignore all Pokémon Powers other than Toxic Gases. This power stops working while Muk is Asleep, Confused, or Paralyzed.",
            "type": "Pokémon Power"
        },
        "hp": "70",
        "retreatCost": [
            "Colorless",
            "Colorless"
        ],
        "convertedRetreatCost": 2,
        "number": "28",
        "artist": "Mitsuhiro Arita",
        "rarity": "Rare",
        "series": "Base",
        "set": "Fossil",
        "setCode": "base3",
        "attacks": [
            {
                "cost": [
                    "Grass",
                    "Grass",
                    "Grass"
                ],
                "name": "Sludge",
                "text": "Flip a coin. If heads, the Defending Pokémon is now Poisoned.",
                "damage": "",
                "convertedEnergyCost": 3
            }
        ],
        "weaknesses": [
            {
                "type": "Psychic",
                "value": "×2"
            }
        ]
    },
    {
        "id": "base3-29",
        "name": "Raichu",
        "nationalPokedexNumber": 26,
        "imageUrl": "https://images.pokemontcg.io/base3/29.png",
        "imageUrlHiRes": "https://images.pokemontcg.io/base3/29_hires.png",
        "types": [
            "Lightning"
        ],
        "supertype": "Pokémon",
        "subtype": "Stage 1",
        "evolvesFrom": "Pikachu",
        "hp": "90",
        "retreatCost": [
            "Colorless"
        ],
        "convertedRetreatCost": 1,
        "number": "29",
        "artist": "Mitsuhiro Arita",
        "rarity": "Rare",
        "series": "Base",
        "set": "Fossil",
        "setCode": "base3",
        "attacks": [
            {
                "cost": [
                    "Lightning",
                    "Lightning",
                    "Lightning",
                    "Lightning"
                ],
                "name": "Gigashock",
                "text": "Choose 3 of your opponent's Benched Pokémon and this attack does 10 damage to each of them. (Don't apply Weakness and Resistance for Benched Pokémon.) If your opponent has fewer than 3 Benched Pokémon, do the damage to each of them.",
                "damage": "30",
                "convertedEnergyCost": 4
            }
        ],
        "weaknesses": [
            {
                "type": "Fighting",
                "value": "×2"
            }
        ]
    },
    {
        "id": "base3-30",
        "name": "Zapdos",
        "nationalPokedexNumber": 145,
        "imageUrl": "https://images.pokemontcg.io/base3/30.png",
        "imageUrlHiRes": "https://images.pokemontcg.io/base3/30_hires.png",
        "types": [
            "Lightning"
        ],
        "supertype": "Pokémon",
        "subtype": "Basic",
        "hp": "80",
        "retreatCost": [
            "Colorless",
            "Colorless"
        ],
        "convertedRetreatCost": 2,
        "number": "30",
        "artist": "Mitsuhiro Arita",
        "rarity": "Rare",
        "series": "Base",
        "set": "Fossil",
        "setCode": "base3",
        "attacks": [
            {
                "cost": [
                    "Lightning",
                    "Lightning",
                    "Lightning",
                    "Lightning"
                ],
                "name": "Thunderstorm",
                "text": "For each of your opponent's Benched Pokémon, flip a coin. If heads, this attack does 20 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) Then, Zapdos does 10 damage times the number of tails to itself.",
                "damage": "40",
                "convertedEnergyCost": 4
            }
        ],
        "resistances": [
            {
                "type": "Fighting",
                "value": "-30"
            }
        ]
    },
    {
        "id": "base3-31",
        "name": "Arbok",
        "nationalPokedexNumber": 24,
        "imageUrl": "https://images.pokemontcg.io/base3/31.png",
        "imageUrlHiRes": "https://images.pokemontcg.io/base3/31_hires.png",
        "types": [
            "Grass"
        ],
        "supertype": "Pokémon",
        "subtype": "Stage 1",
        "evolvesFrom": "Ekans",
        "hp": "60",
        "retreatCost": [
            "Colorless",
            "Colorless"
        ],
        "convertedRetreatCost": 2,
        "number": "31",
        "artist": "Ken Sugimori",
        "rarity": "Uncommon",
        "series": "Base",
        "set": "Fossil",
        "setCode": "base3",
        "attacks": [
            {
                "cost": [
                    "Grass"
                ],
                "name": "Terror Strike",
                "text": "Flip a coin. If heads and if your opponent has any Benched Pokémon, he or she chooses 1 of them and switches it with the Defending Pokémon. (Do the damage before switching the Pokémon.)",
                "damage": "10",
                "convertedEnergyCost": 1
            },
            {
                "cost": [
                    "Grass",
                    "Grass",
                    "Colorless"
                ],
                "name": "Poison Fang",
                "text": "The Defending Pokémon is now Poisoned.",
                "damage": "30",
                "convertedEnergyCost": 3
            }
        ],
        "weaknesses": [
            {
                "type": "Psychic",
                "value": "×2"
            }
        ]
    },
    {
        "id": "base3-32",
        "name": "Cloyster",
        "nationalPokedexNumber": 91,
        "imageUrl": "https://images.pokemontcg.io/base3/32.png",
        "imageUrlHiRes": "https://images.pokemontcg.io/base3/32_hires.png",
        "types": [
            "Water"
        ],
        "supertype": "Pokémon",
        "subtype": "Stage 1",
        "evolvesFrom": "Shellder",
        "hp": "50",
        "retreatCost": [
            "Colorless",
            "Colorless"
        ],
        "convertedRetreatCost": 2,
        "number": "32",
        "artist": "Kagemaru Himeno",
        "rarity": "Uncommon",
        "series": "Base",
        "set": "Fossil",
        "setCode": "base3",
        "attacks": [
            {
                "cost": [
                    "Water",
                    "Water"
                ],
                "name": "Clamp",
                "text": "Flip a coin. If heads, the Defending Pokémon is now Paralyzed. If tails, this attack does nothing (not even damage).",
                "damage": "",
                "convertedEnergyCost": 2
            },
            {
                "cost": [
                    "Water",
                    "Water"
                ],
                "name": "Spike Cannon",
                "text": "Flip 2 coins. This attack does 30 damage times the number of heads.",
                "damage": "30×",
                "convertedEnergyCost": 2
            }
        ],
        "weaknesses": [
            {
                "type": "Lightning",
                "value": "×2"
            }
        ]
    },
    {
        "id": "base3-33",
        "name": "Gastly",
        "nationalPokedexNumber": 92,
        "imageUrl": "https://images.pokemontcg.io/base3/33.png",
        "imageUrlHiRes": "https://images.pokemontcg.io/base3/33_hires.png",
        "types": [
            "Psychic"
        ],
        "supertype": "Pokémon",
        "subtype": "Basic",
        "hp": "50",
        "number": "33",
        "artist": "Mitsuhiro Arita",
        "rarity": "Uncommon",
        "series": "Base",
        "set": "Fossil",
        "setCode": "base3",
        "attacks": [
            {
                "cost": [
                    "Psychic"
                ],
                "name": "Lick",
                "text": "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
                "damage": "10",
                "convertedEnergyCost": 1
            },
            {
                "cost": [
                    "Psychic",
                    "Psychic"
                ],
                "name": "Energy Conversion",
                "text": "Put up to 2 Energy cards from your discard pile into your hand. Gastly does 10 damage to itself.",
                "damage": "",
                "convertedEnergyCost": 2
            }
        ],
        "resistances": [
            {
                "type": "Fighting",
                "value": "-30"
            }
        ]
    },
    {
        "id": "base3-34",
        "name": "Golbat",
        "nationalPokedexNumber": 42,
        "imageUrl": "https://images.pokemontcg.io/base3/34.png",
        "imageUrlHiRes": "https://images.pokemontcg.io/base3/34_hires.png",
        "types": [
            "Grass"
        ],
        "supertype": "Pokémon",
        "subtype": "Stage 1",
        "evolvesFrom": "Zubat",
        "hp": "60",
        "number": "34",
        "artist": "Kagemaru Himeno",
        "rarity": "Uncommon",
        "series": "Base",
        "set": "Fossil",
        "setCode": "base3",
        "attacks": [
            {
                "cost": [
                    "Colorless",
                    "Colorless",
                    "Colorless"
                ],
                "name": "Wing Attack",
                "text": "",
                "damage": "30",
                "convertedEnergyCost": 3
            },
            {
                "cost": [
                    "Grass",
                    "Grass",
                    "Colorless"
                ],
                "name": "Leech Life",
                "text": "Remove a number of damage counters from Golbat equal to the damage done to the Defending Pokémon (after applying Weakness and Resistance). If Golbat has fewer damage counters than that, remove all of them.",
                "damage": "20",
                "convertedEnergyCost": 3
            }
        ],
        "resistances": [
            {
                "type": "Fighting",
                "value": "-30"
            }
        ],
        "weaknesses": [
            {
                "type": "Psychic",
                "value": "×2"
            }
        ]
    },
    {
        "id": "base3-35",
        "name": "Golduck",
        "nationalPokedexNumber": 55,
        "imageUrl": "https://images.pokemontcg.io/base3/35.png",
        "imageUrlHiRes": "https://images.pokemontcg.io/base3/35_hires.png",
        "types": [
            "Water"
        ],
        "supertype": "Pokémon",
        "subtype": "Stage 1",
        "evolvesFrom": "Psyduck",
        "hp": "70",
        "retreatCost": [
            "Colorless"
        ],
        "convertedRetreatCost": 1,
        "number": "35",
        "artist": "Kagemaru Himeno",
        "rarity": "Uncommon",
        "series": "Base",
        "set": "Fossil",
        "setCode": "base3",
        "attacks": [
            {
                "cost": [
                    "Psychic"
                ],
                "name": "Psyshock",
                "text": "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
                "damage": "10",
                "convertedEnergyCost": 1
            },
            {
                "cost": [
                    "Water",
                    "Water",
                    "Colorless"
                ],
                "name": "Hyper Beam",
                "text": "If the Defending Pokémon has any Energy cards attached to it, choose 1 of them and discard it.",
                "damage": "20",
                "convertedEnergyCost": 3
            }
        ],
        "weaknesses": [
            {
                "type": "Lightning",
                "value": "×2"
            }
        ]
    },
    {
        "id": "base3-36",
        "name": "Golem",
        "nationalPokedexNumber": 76,
        "imageUrl": "https://images.pokemontcg.io/base3/36.png",
        "imageUrlHiRes": "https://images.pokemontcg.io/base3/36_hires.png",
        "types": [
            "Fighting"
        ],
        "supertype": "Pokémon",
        "subtype": "Stage 2",
        "evolvesFrom": "Graveler",
        "hp": "80",
        "retreatCost": [
            "Colorless",
            "Colorless",
            "Colorless",
            "Colorless"
        ],
        "convertedRetreatCost": 4,
        "number": "36",
        "artist": "Kagemaru Himeno",
        "rarity": "Uncommon",
        "series": "Base",
        "set": "Fossil",
        "setCode": "base3",
        "attacks": [
            {
                "cost": [
                    "Fighting",
                    "Fighting",
                    "Fighting",
                    "Colorless"
                ],
                "name": "Avalanche",
                "text": "",
                "damage": "60",
                "convertedEnergyCost": 4
            },
            {
                "cost": [
                    "Fighting",
                    "Fighting",
                    "Fighting",
                    "Fighting"
                ],
                "name": "Selfdestruct",
                "text": "Does 20 damage to each Pokémon on each player's Bench. (Don't apply Weakness and Resistance for Benched Pokémon.) Golem does 100 damage to itself.",
                "damage": "100",
                "convertedEnergyCost": 4
            }
        ],
        "weaknesses": [
            {
                "type": "Grass",
                "value": "×2"
            }
        ]
    },
    {
        "id": "base3-37",
        "name": "Graveler",
        "nationalPokedexNumber": 75,
        "imageUrl": "https://images.pokemontcg.io/base3/37.png",
        "imageUrlHiRes": "https://images.pokemontcg.io/base3/37_hires.png",
        "types": [
            "Fighting"
        ],
        "supertype": "Pokémon",
        "subtype": "Stage 1",
        "evolvesFrom": "Geodude",
        "hp": "60",
        "retreatCost": [
            "Colorless",
            "Colorless"
        ],
        "convertedRetreatCost": 2,
        "number": "37",
        "artist": "Kagemaru Himeno",
        "rarity": "Uncommon",
        "series": "Base",
        "set": "Fossil",
        "setCode": "base3",
        "attacks": [
            {
                "cost": [
                    "Fighting",
                    "Fighting"
                ],
                "name": "Harden",
                "text": "During your opponent's next turn, whenever 30 or less damage is done to Graveler (after applying Weakness and Resistance), prevent that damage. (Any other effects of attacks still happen.)",
                "damage": "",
                "convertedEnergyCost": 2
            },
            {
                "cost": [
                    "Fighting",
                    "Fighting",
                    "Colorless"
                ],
                "name": "Rock Throw",
                "text": "",
                "damage": "40",
                "convertedEnergyCost": 3
            }
        ],
        "weaknesses": [
            {
                "type": "Grass",
                "value": "×2"
            }
        ]
    },
    {
        "id": "base3-38",
        "name": "Kingler",
        "nationalPokedexNumber": 99,
        "imageUrl": "https://images.pokemontcg.io/base3/38.png",
        "imageUrlHiRes": "https://images.pokemontcg.io/base3/38_hires.png",
        "types": [
            "Water"
        ],
        "supertype": "Pokémon",
        "subtype": "Stage 1",
        "evolvesFrom": "Krabby",
        "hp": "60",
        "retreatCost": [
            "Colorless",
            "Colorless",
            "Colorless"
        ],
        "convertedRetreatCost": 3,
        "number": "38",
        "artist": "Kagemaru Himeno",
        "rarity": "Uncommon",
        "series": "Base",
        "set": "Fossil",
        "setCode": "base3",
        "attacks": [
            {
                "cost": [
                    "Water"
                ],
                "name": "Flail",
                "text": "Does 10 damage times the number of damage counters on Kingler.",
                "damage": "10×",
                "convertedEnergyCost": 1
            },
            {
                "cost": [
                    "Water",
                    "Water",
                    "Colorless"
                ],
                "name": "Crabhammer",
                "text": "",
                "damage": "40",
                "convertedEnergyCost": 3
            }
        ],
        "weaknesses": [
            {
                "type": "Lightning",
                "value": "×2"
            }
        ]
    },
    {
        "id": "base3-39",
        "name": "Magmar",
        "nationalPokedexNumber": 126,
        "imageUrl": "https://images.pokemontcg.io/base3/39.png",
        "imageUrlHiRes": "https://images.pokemontcg.io/base3/39_hires.png",
        "types": [
            "Fire"
        ],
        "supertype": "Pokémon",
        "subtype": "Basic",
        "evolvesFrom": "Magby",
        "hp": "70",
        "retreatCost": [
            "Colorless"
        ],
        "convertedRetreatCost": 1,
        "number": "39",
        "artist": "Mitsuhiro Arita",
        "rarity": "Uncommon",
        "series": "Base",
        "set": "Fossil",
        "setCode": "base3",
        "attacks": [
            {
                "cost": [
                    "Fire"
                ],
                "name": "Smokescreen",
                "text": "If the Defending Pokémon tries to attack during your opponent's next turn, your opponent flips a coin. If tails, that attack does nothing.",
                "damage": "10",
                "convertedEnergyCost": 1
            },
            {
                "cost": [
                    "Fire",
                    "Fire"
                ],
                "name": "Smog",
                "text": "Flip a coin. If heads, the Defending Pokémon is now Poisoned.",
                "damage": "",
                "convertedEnergyCost": 2
            }
        ],
        "weaknesses": [
            {
                "type": "Water",
                "value": "×2"
            }
        ]
    },
    {
        "id": "base3-40",
        "name": "Omastar",
        "nationalPokedexNumber": 139,
        "imageUrl": "https://images.pokemontcg.io/base3/40.png",
        "imageUrlHiRes": "https://images.pokemontcg.io/base3/40_hires.png",
        "types": [
            "Water"
        ],
        "supertype": "Pokémon",
        "subtype": "Stage 2",
        "evolvesFrom": "Omanyte",
        "hp": "70",
        "retreatCost": [
            "Colorless"
        ],
        "convertedRetreatCost": 1,
        "number": "40",
        "artist": "Ken Sugimori",
        "rarity": "Uncommon",
        "series": "Base",
        "set": "Fossil",
        "setCode": "base3",
        "attacks": [
            {
                "cost": [
                    "Water",
                    "Colorless"
                ],
                "name": "Water Gun",
                "text": "Does 20 damage plus 10 more damage for each Energy attached to Omastar but not used to pay for this attack's Energy cost. You can't add more than 20 damage in this way.",
                "damage": "20+",
                "convertedEnergyCost": 2
            },
            {
                "cost": [
                    "Colorless",
                    "Colorless"
                ],
                "name": "Spike Cannon",
                "text": "Flip 2 coins. This attack does 30 damage times the number of heads.",
                "damage": "30×",
                "convertedEnergyCost": 2
            }
        ],
        "weaknesses": [
            {
                "type": "Grass",
                "value": "×2"
            }
        ]
    },
    {
        "id": "base3-41",
        "name": "Sandslash",
        "nationalPokedexNumber": 28,
        "imageUrl": "https://images.pokemontcg.io/base3/41.png",
        "imageUrlHiRes": "https://images.pokemontcg.io/base3/41_hires.png",
        "types": [
            "Fighting"
        ],
        "supertype": "Pokémon",
        "subtype": "Stage 1",
        "evolvesFrom": "Sandshrew",
        "hp": "70",
        "retreatCost": [
            "Colorless"
        ],
        "convertedRetreatCost": 1,
        "number": "41",
        "artist": "Ken Sugimori",
        "rarity": "Uncommon",
        "series": "Base",
        "set": "Fossil",
        "setCode": "base3",
        "attacks": [
            {
                "cost": [
                    "Colorless",
                    "Colorless"
                ],
                "name": "Slash",
                "text": "",
                "damage": "20",
                "convertedEnergyCost": 2
            },
            {
                "cost": [
                    "Fighting",
                    "Fighting"
                ],
                "name": "Fury Swipes",
                "text": "Flip 3 coins. This attack does 20 damage times the number of heads.",
                "damage": "20×",
                "convertedEnergyCost": 2
            }
        ],
        "resistances": [
            {
                "type": "Lightning",
                "value": "-30"
            }
        ],
        "weaknesses": [
            {
                "type": "Grass",
                "value": "×2"
            }
        ]
    },
    {
        "id": "base3-42",
        "name": "Seadra",
        "nationalPokedexNumber": 117,
        "imageUrl": "https://images.pokemontcg.io/base3/42.png",
        "imageUrlHiRes": "https://images.pokemontcg.io/base3/42_hires.png",
        "types": [
            "Water"
        ],
        "supertype": "Pokémon",
        "subtype": "Stage 1",
        "evolvesFrom": "Horsea",
        "hp": "60",
        "retreatCost": [
            "Colorless"
        ],
        "convertedRetreatCost": 1,
        "number": "42",
        "artist": "Ken Sugimori",
        "rarity": "Uncommon",
        "series": "Base",
        "set": "Fossil",
        "setCode": "base3",
        "attacks": [
            {
                "cost": [
                    "Water",
                    "Colorless"
                ],
                "name": "Water Gun",
                "text": "Does 20 damage plus 10 more damage for each Energy attached to Seadra but not used to pay for this attack's Energy cost. You can't add more than 20 damage in this way.",
                "damage": "20+",
                "convertedEnergyCost": 2
            },
            {
                "cost": [
                    "Water",
                    "Colorless",
                    "Colorless"
                ],
                "name": "Agility",
                "text": "Flip a coin. If heads, during your opponent's next turn, prevent all effects of attacks, including damage, done to Seadra.",
                "damage": "20",
                "convertedEnergyCost": 3
            }
        ],
        "weaknesses": [
            {
                "type": "Lightning",
                "value": "×2"
            }
        ]
    },
    {
        "id": "base3-43",
        "name": "Slowbro",
        "nationalPokedexNumber": 80,
        "imageUrl": "https://images.pokemontcg.io/base3/43.png",
        "imageUrlHiRes": "https://images.pokemontcg.io/base3/43_hires.png",
        "types": [
            "Psychic"
        ],
        "supertype": "Pokémon",
        "subtype": "Stage 1",
        "evolvesFrom": "Slowpoke",
        "ability": {
            "name": "Strange Behavior",
            "text": "As often as you like during your turn (before your attack), you may move 1 damage counter from 1 of your Pokémon to Slowbro as long as you don't Knock Out Slowbro. This power can't be used if Slowbro is Asleep, Confused, or Paralyzed.",
            "type": "Pokémon Power"
        },
        "hp": "60",
        "retreatCost": [
            "Colorless"
        ],
        "convertedRetreatCost": 1,
        "number": "43",
        "artist": "Kagemaru Himeno",
        "rarity": "Uncommon",
        "series": "Base",
        "set": "Fossil",
        "setCode": "base3",
        "attacks": [
            {
                "cost": [
                    "Psychic",
                    "Psychic"
                ],
                "name": "Psyshock",
                "text": "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
                "damage": "20",
                "convertedEnergyCost": 2
            }
        ],
        "weaknesses": [
            {
                "type": "Psychic",
                "value": "×2"
            }
        ]
    },
    {
        "id": "base3-44",
        "name": "Tentacruel",
        "nationalPokedexNumber": 73,
        "imageUrl": "https://images.pokemontcg.io/base3/44.png",
        "imageUrlHiRes": "https://images.pokemontcg.io/base3/44_hires.png",
        "types": [
            "Water"
        ],
        "supertype": "Pokémon",
        "subtype": "Stage 1",
        "evolvesFrom": "Tentacool",
        "hp": "60",
        "number": "44",
        "artist": "Kagemaru Himeno",
        "rarity": "Uncommon",
        "series": "Base",
        "set": "Fossil",
        "setCode": "base3",
        "attacks": [
            {
                "cost": [
                    "Water"
                ],
                "name": "Supersonic",
                "text": "Flip a coin. If heads, the Defending Pokémon is now Confused.",
                "damage": "",
                "convertedEnergyCost": 1
            },
            {
                "cost": [
                    "Water",
                    "Water"
                ],
                "name": "Jellyfish Sting",
                "text": "The Defending Pokémon is now Poisoned.",
                "damage": "10",
                "convertedEnergyCost": 2
            }
        ],
        "weaknesses": [
            {
                "type": "Lightning",
                "value": "×2"
            }
        ]
    },
    {
        "id": "base3-45",
        "name": "Weezing",
        "nationalPokedexNumber": 110,
        "imageUrl": "https://images.pokemontcg.io/base3/45.png",
        "imageUrlHiRes": "https://images.pokemontcg.io/base3/45_hires.png",
        "types": [
            "Grass"
        ],
        "supertype": "Pokémon",
        "subtype": "Stage 1",
        "evolvesFrom": "Koffing",
        "hp": "60",
        "retreatCost": [
            "Colorless"
        ],
        "convertedRetreatCost": 1,
        "number": "45",
        "artist": "Mitsuhiro Arita",
        "rarity": "Uncommon",
        "series": "Base",
        "set": "Fossil",
        "setCode": "base3",
        "attacks": [
            {
                "cost": [
                    "Grass",
                    "Grass"
                ],
                "name": "Smog",
                "text": "Flip a coin. If heads, the Defending Pokémon is now Poisoned.",
                "damage": "",
                "convertedEnergyCost": 2
            },
            {
                "cost": [
                    "Grass",
                    "Grass",
                    "Colorless"
                ],
                "name": "Selfdestruct",
                "text": "Does 10 damage to each Pokémon on each player's Bench. (Don't apply Weakness and Resistance for Benched Pokémon.) Weezing does 60 damage to itself.",
                "damage": "60",
                "convertedEnergyCost": 3
            }
        ],
        "weaknesses": [
            {
                "type": "Psychic",
                "value": "×2"
            }
        ]
    },
    {
        "id": "base3-46",
        "name": "Ekans",
        "nationalPokedexNumber": 23,
        "imageUrl": "https://images.pokemontcg.io/base3/46.png",
        "imageUrlHiRes": "https://images.pokemontcg.io/base3/46_hires.png",
        "types": [
            "Grass"
        ],
        "supertype": "Pokémon",
        "subtype": "Basic",
        "hp": "40",
        "retreatCost": [
            "Colorless"
        ],
        "convertedRetreatCost": 1,
        "number": "46",
        "artist": "Kagemaru Himeno",
        "rarity": "Common",
        "series": "Base",
        "set": "Fossil",
        "setCode": "base3",
        "attacks": [
            {
                "cost": [
                    "Grass"
                ],
                "name": "Spit Poison",
                "text": "Flip a coin. If heads, the Defending Pokémon is now Poisoned.",
                "damage": "",
                "convertedEnergyCost": 1
            },
            {
                "cost": [
                    "Grass",
                    "Colorless"
                ],
                "name": "Wrap",
                "text": "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
                "damage": "20",
                "convertedEnergyCost": 2
            }
        ],
        "weaknesses": [
            {
                "type": "Psychic",
                "value": "×2"
            }
        ]
    },
    {
        "id": "base3-47",
        "name": "Geodude",
        "nationalPokedexNumber": 74,
        "imageUrl": "https://images.pokemontcg.io/base3/47.png",
        "imageUrlHiRes": "https://images.pokemontcg.io/base3/47_hires.png",
        "types": [
            "Fighting"
        ],
        "supertype": "Pokémon",
        "subtype": "Basic",
        "hp": "50",
        "retreatCost": [
            "Colorless"
        ],
        "convertedRetreatCost": 1,
        "number": "47",
        "artist": "Kagemaru Himeno",
        "rarity": "Common",
        "series": "Base",
        "set": "Fossil",
        "setCode": "base3",
        "attacks": [
            {
                "cost": [
                    "Fighting",
                    "Colorless"
                ],
                "name": "Stone Barrage",
                "text": "Flip a coin until you get tails. This attack does 10 damage times the number of heads.",
                "damage": "10×",
                "convertedEnergyCost": 2
            }
        ],
        "weaknesses": [
            {
                "type": "Grass",
                "value": "×2"
            }
        ]
    },
    {
        "id": "base3-48",
        "name": "Grimer",
        "nationalPokedexNumber": 88,
        "imageUrl": "https://images.pokemontcg.io/base3/48.png",
        "imageUrlHiRes": "https://images.pokemontcg.io/base3/48_hires.png",
        "types": [
            "Grass"
        ],
        "supertype": "Pokémon",
        "subtype": "Basic",
        "hp": "50",
        "retreatCost": [
            "Colorless"
        ],
        "convertedRetreatCost": 1,
        "number": "48",
        "artist": "Mitsuhiro Arita",
        "rarity": "Common",
        "series": "Base",
        "set": "Fossil",
        "setCode": "base3",
        "attacks": [
            {
                "cost": [
                    "Colorless"
                ],
                "name": "Nasty Goo",
                "text": "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
                "damage": "10",
                "convertedEnergyCost": 1
            },
            {
                "cost": [
                    "Grass"
                ],
                "name": "Minimize",
                "text": "All damage done by attacks to Grimer during your opponent's next turn is reduced by 20 (after applying Weakness and Resistance).",
                "damage": "",
                "convertedEnergyCost": 1
            }
        ],
        "weaknesses": [
            {
                "type": "Psychic",
                "value": "×2"
            }
        ]
    },
    {
        "id": "base3-49",
        "name": "Horsea",
        "nationalPokedexNumber": 116,
        "imageUrl": "https://images.pokemontcg.io/base3/49.png",
        "imageUrlHiRes": "https://images.pokemontcg.io/base3/49_hires.png",
        "types": [
            "Water"
        ],
        "supertype": "Pokémon",
        "subtype": "Basic",
        "hp": "40",
        "number": "49",
        "artist": "Mitsuhiro Arita",
        "rarity": "Common",
        "series": "Base",
        "set": "Fossil",
        "setCode": "base3",
        "attacks": [
            {
                "cost": [
                    "Water"
                ],
                "name": "Smokescreen",
                "text": "If the Defending Pokémon tries to attack during your opponent's next turn, your opponent flips a coin. If tails, that attack does nothing.",
                "damage": "10",
                "convertedEnergyCost": 1
            }
        ],
        "weaknesses": [
            {
                "type": "Lightning",
                "value": "×2"
            }
        ]
    },
    {
        "id": "base3-50",
        "name": "Kabuto",
        "nationalPokedexNumber": 140,
        "imageUrl": "https://images.pokemontcg.io/base3/50.png",
        "imageUrlHiRes": "https://images.pokemontcg.io/base3/50_hires.png",
        "types": [
            "Fighting"
        ],
        "supertype": "Pokémon",
        "subtype": "Stage 1",
        "ability": {
            "name": "Kabuto Armor",
            "text": "Whenever an attack (even your own) does damage to Kabuto (after applying Weakness and Resistance), that attack only does half the damage to Kabuto (rounded down to nearest 10). (Any other effects of attacks still happen.) This power stops working while Kabuto is Asleep, Confused, or Paralyzed.",
            "type": "Pokémon Power"
        },
        "hp": "30",
        "retreatCost": [
            "Colorless"
        ],
        "convertedRetreatCost": 1,
        "number": "50",
        "artist": "Ken Sugimori",
        "rarity": "Common",
        "series": "Base",
        "set": "Fossil",
        "setCode": "base3",
        "attacks": [
            {
                "cost": [
                    "Colorless"
                ],
                "name": "Scratch",
                "text": "",
                "damage": "10",
                "convertedEnergyCost": 1
            }
        ],
        "weaknesses": [
            {
                "type": "Grass",
                "value": "×2"
            }
        ]
    },
    {
        "id": "base3-51",
        "name": "Krabby",
        "nationalPokedexNumber": 98,
        "imageUrl": "https://images.pokemontcg.io/base3/51.png",
        "imageUrlHiRes": "https://images.pokemontcg.io/base3/51_hires.png",
        "types": [
            "Water"
        ],
        "supertype": "Pokémon",
        "subtype": "Basic",
        "hp": "50",
        "retreatCost": [
            "Colorless",
            "Colorless"
        ],
        "convertedRetreatCost": 2,
        "number": "51",
        "artist": "Mitsuhiro Arita",
        "rarity": "Common",
        "series": "Base",
        "set": "Fossil",
        "setCode": "base3",
        "attacks": [
            {
                "cost": [
                    "Water"
                ],
                "name": "Call for Family",
                "text": "Search your deck for a Basic Pokémon named Krabby and put it onto your Bench. Shuffle your deck afterward. (You can't use this attack if your Bench is full.)",
                "damage": "",
                "convertedEnergyCost": 1
            },
            {
                "cost": [
                    "Water",
                    "Colorless"
                ],
                "name": "Irongrip",
                "text": "",
                "damage": "20",
                "convertedEnergyCost": 2
            }
        ],
        "weaknesses": [
            {
                "type": "Lightning",
                "value": "×2"
            }
        ]
    },
    {
        "id": "base3-52",
        "name": "Omanyte",
        "nationalPokedexNumber": 138,
        "imageUrl": "https://images.pokemontcg.io/base3/52.png",
        "imageUrlHiRes": "https://images.pokemontcg.io/base3/52_hires.png",
        "types": [
            "Water"
        ],
        "supertype": "Pokémon",
        "subtype": "Stage 1",
        "ability": {
            "name": "Clairvoyance",
            "text": "Your opponent plays with his or her hand face up. This power stops working while Omanyte is Asleep, Confused, or Paralyzed.",
            "type": "Pokémon Power"
        },
        "hp": "40",
        "retreatCost": [
            "Colorless"
        ],
        "convertedRetreatCost": 1,
        "number": "52",
        "artist": "Kagemaru Himeno",
        "rarity": "Common",
        "series": "Base",
        "set": "Fossil",
        "setCode": "base3",
        "attacks": [
            {
                "cost": [
                    "Water"
                ],
                "name": "Water Gun",
                "text": "Does 10 damage plus 10 more damage for each Energy attached to Omanyte but not used to pay for this attack's Energy cost. You can't add more than 20 damage in this way.",
                "damage": "10+",
                "convertedEnergyCost": 1
            }
        ],
        "weaknesses": [
            {
                "type": "Grass",
                "value": "×2"
            }
        ]
    },
    {
        "id": "base3-53",
        "name": "Psyduck",
        "nationalPokedexNumber": 54,
        "imageUrl": "https://images.pokemontcg.io/base3/53.png",
        "imageUrlHiRes": "https://images.pokemontcg.io/base3/53_hires.png",
        "types": [
            "Water"
        ],
        "supertype": "Pokémon",
        "subtype": "Basic",
        "hp": "50",
        "retreatCost": [
            "Colorless"
        ],
        "convertedRetreatCost": 1,
        "number": "53",
        "artist": "Kagemaru Himeno",
        "rarity": "Common",
        "series": "Base",
        "set": "Fossil",
        "setCode": "base3",
        "attacks": [
            {
                "cost": [
                    "Psychic"
                ],
                "name": "Headache",
                "text": "Your opponent can't play Trainer cards during his or her next turn.",
                "damage": "",
                "convertedEnergyCost": 1
            },
            {
                "cost": [
                    "Water"
                ],
                "name": "Fury Swipes",
                "text": "Flip 3 coins. This attack does 10 damage times the number of heads.",
                "damage": "10×",
                "convertedEnergyCost": 1
            }
        ],
        "weaknesses": [
            {
                "type": "Lightning",
                "value": "×2"
            }
        ]
    },
    {
        "id": "base3-54",
        "name": "Shellder",
        "nationalPokedexNumber": 90,
        "imageUrl": "https://images.pokemontcg.io/base3/54.png",
        "imageUrlHiRes": "https://images.pokemontcg.io/base3/54_hires.png",
        "types": [
            "Water"
        ],
        "supertype": "Pokémon",
        "subtype": "Basic",
        "hp": "30",
        "retreatCost": [
            "Colorless"
        ],
        "convertedRetreatCost": 1,
        "number": "54",
        "artist": "Mitsuhiro Arita",
        "rarity": "Common",
        "series": "Base",
        "set": "Fossil",
        "setCode": "base3",
        "attacks": [
            {
                "cost": [
                    "Water"
                ],
                "name": "Supersonic",
                "text": "Flip a coin. If heads, the Defending Pokémon is now Confused.",
                "damage": "",
                "convertedEnergyCost": 1
            },
            {
                "cost": [
                    "Water"
                ],
                "name": "Hide in Shell",
                "text": "Flip a coin. If heads, prevent all damage done to Shellder during your opponent's next turn. (Any other effects of attacks still happen.)",
                "damage": "",
                "convertedEnergyCost": 1
            }
        ],
        "weaknesses": [
            {
                "type": "Lightning",
                "value": "×2"
            }
        ]
    },
    {
        "id": "base3-55",
        "name": "Slowpoke",
        "nationalPokedexNumber": 79,
        "imageUrl": "https://images.pokemontcg.io/base3/55.png",
        "imageUrlHiRes": "https://images.pokemontcg.io/base3/55_hires.png",
        "types": [
            "Psychic"
        ],
        "supertype": "Pokémon",
        "subtype": "Basic",
        "hp": "50",
        "retreatCost": [
            "Colorless"
        ],
        "convertedRetreatCost": 1,
        "number": "55",
        "artist": "Miki Tanaka",
        "rarity": "Common",
        "series": "Base",
        "set": "Fossil",
        "setCode": "base3",
        "attacks": [
            {
                "cost": [
                    "Colorless"
                ],
                "name": "Spacing Out",
                "text": "Flip a coin. If heads, remove a damage counter from Slowpoke. This attack can't be used if Slowpoke has no damage counters on it.",
                "damage": "",
                "convertedEnergyCost": 1
            },
            {
                "cost": [
                    "Psychic",
                    "Psychic"
                ],
                "name": "Scavenge",
                "text": "Discard 1 Psychic Energy card attached to Slowpoke in order to use this attack. Put a Trainer card from your discard pile into your hand.",
                "damage": "",
                "convertedEnergyCost": 2
            }
        ],
        "weaknesses": [
            {
                "type": "Psychic",
                "value": "×2"
            }
        ]
    },
    {
        "id": "base3-56",
        "name": "Tentacool",
        "nationalPokedexNumber": 72,
        "imageUrl": "https://images.pokemontcg.io/base3/56.png",
        "imageUrlHiRes": "https://images.pokemontcg.io/base3/56_hires.png",
        "types": [
            "Water"
        ],
        "supertype": "Pokémon",
        "subtype": "Basic",
        "ability": {
            "name": "Cowardice",
            "text": "At any time during your turn (before your attack), you may return Tentacool to your hand. (Discard all cards attached to Tentacool.) This power can't be used the turn you put Tentacool into play or if Tentacool is Asleep, Confused, or Paralyzed.",
            "type": "Pokémon Power"
        },
        "hp": "30",
        "number": "56",
        "artist": "Kagemaru Himeno",
        "rarity": "Common",
        "series": "Base",
        "set": "Fossil",
        "setCode": "base3",
        "attacks": [
            {
                "cost": [
                    "Water"
                ],
                "name": "Acid",
                "text": "",
                "damage": "10",
                "convertedEnergyCost": 1
            }
        ],
        "weaknesses": [
            {
                "type": "Lightning",
                "value": "×2"
            }
        ]
    },
    {
        "id": "base3-57",
        "name": "Zubat",
        "nationalPokedexNumber": 41,
        "imageUrl": "https://images.pokemontcg.io/base3/57.png",
        "imageUrlHiRes": "https://images.pokemontcg.io/base3/57_hires.png",
        "types": [
            "Grass"
        ],
        "supertype": "Pokémon",
        "subtype": "Basic",
        "hp": "40",
        "number": "57",
        "artist": "Kagemaru Himeno",
        "rarity": "Common",
        "series": "Base",
        "set": "Fossil",
        "setCode": "base3",
        "attacks": [
            {
                "cost": [
                    "Colorless",
                    "Colorless"
                ],
                "name": "Supersonic",
                "text": "Flip a coin. If heads, the Defending Pokémon is now Confused.",
                "damage": "",
                "convertedEnergyCost": 2
            },
            {
                "cost": [
                    "Grass",
                    "Colorless"
                ],
                "name": "Leech Life",
                "text": "Remove a number of damage counters from Zubat equal to the damage done to the Defending Pokémon (after applying Weakness and Resistance). If Zubat has fewer damage counters than that, remove all of them.",
                "damage": "10",
                "convertedEnergyCost": 2
            }
        ],
        "resistances": [
            {
                "type": "Fighting",
                "value": "-30"
            }
        ],
        "weaknesses": [
            {
                "type": "Psychic",
                "value": "×2"
            }
        ]
    },
    {
        "id": "base3-58",
        "name": "Mr. Fuji",
        "imageUrl": "https://images.pokemontcg.io/base3/58.png",
        "imageUrlHiRes": "https://images.pokemontcg.io/base3/58_hires.png",
        "supertype": "Trainer",
        "subtype": "",
        "number": "58",
        "artist": "Ken Sugimori",
        "rarity": "Uncommon",
        "series": "Base",
        "set": "Fossil",
        "setCode": "base3",
        "text": [
            "Choose a Pokémon on your Bench. Shuffle it and any cards attached to it into your deck."
        ]
    },
    {
        "id": "base3-59",
        "name": "Energy Search",
        "imageUrl": "https://images.pokemontcg.io/base3/59.png",
        "imageUrlHiRes": "https://images.pokemontcg.io/base3/59_hires.png",
        "supertype": "Trainer",
        "subtype": "",
        "number": "59",
        "artist": "Keiji Kinebuchi",
        "rarity": "Common",
        "series": "Base",
        "set": "Fossil",
        "setCode": "base3",
        "text": [
            "Search your deck for a basic Energy card and put it into your hand. Shuffle your deck afterward."
        ]
    },
    {
        "id": "base3-60",
        "name": "Gambler",
        "imageUrl": "https://images.pokemontcg.io/base3/60.png",
        "imageUrlHiRes": "https://images.pokemontcg.io/base3/60_hires.png",
        "supertype": "Trainer",
        "subtype": "",
        "number": "60",
        "artist": "Keiji Kinebuchi",
        "rarity": "Common",
        "series": "Base",
        "set": "Fossil",
        "setCode": "base3",
        "text": [
            "Shuffle your hand into your deck. Flip a coin. If heads, draw 8 cards. If tails, draw 1 card."
        ]
    },
    {
        "id": "base3-61",
        "name": "Recycle",
        "imageUrl": "https://images.pokemontcg.io/base3/61.png",
        "imageUrlHiRes": "https://images.pokemontcg.io/base3/61_hires.png",
        "supertype": "Trainer",
        "subtype": "",
        "number": "61",
        "artist": "Keiji Kinebuchi",
        "rarity": "Common",
        "series": "Base",
        "set": "Fossil",
        "setCode": "base3",
        "text": [
            "Flip a coin. If heads, put a card in your discard pile on top of your deck."
        ]
    },
    {
        "id": "base3-62",
        "name": "Mysterious Fossil",
        "imageUrl": "https://images.pokemontcg.io/base3/62.png",
        "imageUrlHiRes": "https://images.pokemontcg.io/base3/62_hires.png",
        "supertype": "Trainer",
        "subtype": "",
        "hp": "10",
        "number": "62",
        "artist": "Keiji Kinebuchi",
        "rarity": "Common",
        "series": "Base",
        "set": "Fossil",
        "setCode": "base3",
        "text": [
            "Play Mysterious Fossil as if it were a Basic Pokémon. While in play, Mysterious Fossil counts as a Pokémon (instead of a Trainer card). Mysterious Fossil has no attacks, can't retreat, and can't be Asleep, Confused, Paralyzed, or Poisoned. If Mysterious Fossil is Knocked Out, it doesn't count as a Knocked Out Pokémon. (Discard it anyway.) At any time during your turn before your attack, you may discard Mysterious Fossil from play. (Major text change in Legend Maker. Requires reference.)"
        ]
    }
]