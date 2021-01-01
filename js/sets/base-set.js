const cards = [
  {
    "id": "base1-1",
    "name": "Alakazam",
    "nationalPokedexNumber": 65,
    "imageUrl": "https://images.pokemontcg.io/base1/1.png",
    "imageUrlHiRes": "https://images.pokemontcg.io/base1/1_hires.png",
    "types": [
      "Psychic"
    ],
    "supertype": "Pokémon",
    "subtype": "Stage 2",
    "evolvesFrom": "Kadabra",
    "ability": {
      "name": "Damage Swap",
      "text": "As often as you like during your turn (before your attack), you may move 1 damage counter from 1 of your Pokémon to another as long as you don't Knock Out that Pokémon. This power can't be used if Alakazam is Asleep, Confused, or Paralyzed.",
      "type": "Pokémon Power"
    },
    "hp": "80",
    "retreatCost": [
      "Colorless",
      "Colorless",
      "Colorless"
    ],
    "convertedRetreatCost": 3,
    "number": "1",
    "artist": "Ken Sugimori",
    "rarity": "Rare Holo",
    "series": "Base",
    "set": "Base",
    "setCode": "base1",
    "attacks": [
      {
        "cost": [
          "Psychic",
          "Psychic",
          "Psychic"
        ],
        "name": "Confuse Ray",
        "text": "Flip a coin. If heads, the Defending Pokémon is now Confused.",
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
    "id": "base1-2",
    "name": "Blastoise",
    "nationalPokedexNumber": 9,
    "imageUrl": "https://images.pokemontcg.io/base1/2.png",
    "imageUrlHiRes": "https://images.pokemontcg.io/base1/2_hires.png",
    "types": [
      "Water"
    ],
    "supertype": "Pokémon",
    "subtype": "Stage 2",
    "evolvesFrom": "Wartortle",
    "ability": {
      "name": "Rain Dance",
      "text": "As often as you like during your turn (before your attack), you may attach 1 Water Energy Card to 1 of your Water Pokémon. (This doesn't use up your 1 Energy card attachment for the turn.) This power can't be used if Blastoise is Asleep, Confused, or Paralyzed.",
      "type": "Pokémon Power"
    },
    "hp": "100",
    "retreatCost": [
      "Colorless",
      "Colorless",
      "Colorless"
    ],
    "convertedRetreatCost": 3,
    "number": "2",
    "artist": "Ken Sugimori",
    "rarity": "Rare Holo",
    "series": "Base",
    "set": "Base",
    "setCode": "base1",
    "attacks": [
      {
        "cost": [
          "Water",
          "Water",
          "Water"
        ],
        "name": "Hydro Pump",
        "text": "Does 40 damage plus 10 more damage for each Water energy attached to Blastoise but not used to pay for this attack's Energy cost. Extra Water Energy after the 2nd doesn't count.",
        "damage": "40+",
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
    "id": "base1-3",
    "name": "Chansey",
    "nationalPokedexNumber": 113,
    "imageUrl": "https://images.pokemontcg.io/base1/3.png",
    "imageUrlHiRes": "https://images.pokemontcg.io/base1/3_hires.png",
    "types": [
      "Colorless"
    ],
    "supertype": "Pokémon",
    "subtype": "Basic",
    "hp": "120",
    "retreatCost": [
      "Colorless"
    ],
    "convertedRetreatCost": 1,
    "number": "3",
    "artist": "Ken Sugimori",
    "rarity": "Rare Holo",
    "series": "Base",
    "set": "Base",
    "setCode": "base1",
    "attacks": [
      {
        "cost": [
          "Colorless",
          "Colorless"
        ],
        "name": "Scrunch",
        "text": "Flip a coin. If heads, prevent all damage done to Chansey during your opponent's next turn. (Any other effects of attacks still happen.)",
        "damage": "",
        "convertedEnergyCost": 2
      },
      {
        "cost": [
          "Colorless",
          "Colorless",
          "Colorless",
          "Colorless"
        ],
        "name": "Double-edge",
        "text": "Chansey does 80 damage to itself.",
        "damage": "80",
        "convertedEnergyCost": 4
      }
    ],
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
    "id": "base1-4",
    "name": "Charizard",
    "nationalPokedexNumber": 6,
    "imageUrl": "https://images.pokemontcg.io/base1/4.png",
    "imageUrlHiRes": "https://images.pokemontcg.io/base1/4_hires.png",
    "types": [
      "Fire"
    ],
    "supertype": "Pokémon",
    "subtype": "Stage 2",
    "evolvesFrom": "Charmeleon",
    "ability": {
      "name": "Energy Burn",
      "text": "As often as you like during your turn (before your attack), you may turn all Energy attached to Charizard into Fire Energy for the rest of the turn. This power can't be used if Charizard is Asleep, Confused, or Paralyzed.",
      "type": "Pokémon Power"
    },
    "hp": "120",
    "retreatCost": [
      "Colorless",
      "Colorless",
      "Colorless"
    ],
    "convertedRetreatCost": 3,
    "number": "4",
    "artist": "Mitsuhiro Arita",
    "rarity": "Rare Holo",
    "series": "Base",
    "set": "Base",
    "setCode": "base1",
    "attacks": [
      {
        "cost": [
          "Fire",
          "Fire",
          "Fire",
          "Fire"
        ],
        "name": "Fire Spin",
        "text": "Discard 2 Energy cards attached to Charizard in order to use this attack.",
        "damage": "100",
        "convertedEnergyCost": 4
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
        "type": "Water",
        "value": "×2"
      }
    ]
  },
  {
    "id": "base1-5",
    "name": "Clefairy",
    "nationalPokedexNumber": 35,
    "imageUrl": "https://images.pokemontcg.io/base1/5.png",
    "imageUrlHiRes": "https://images.pokemontcg.io/base1/5_hires.png",
    "types": [
      "Colorless"
    ],
    "supertype": "Pokémon",
    "subtype": "Basic",
    "hp": "40",
    "retreatCost": [
      "Colorless"
    ],
    "convertedRetreatCost": 1,
    "number": "5",
    "artist": "Ken Sugimori",
    "rarity": "Rare Holo",
    "series": "Base",
    "set": "Base",
    "setCode": "base1",
    "attacks": [
      {
        "cost": [
          "Colorless"
        ],
        "name": "Sing",
        "text": "Flip a coin. If heads, the Defending Pokémon is now Asleep.",
        "damage": "",
        "convertedEnergyCost": 1
      },
      {
        "cost": [
          "Colorless",
          "Colorless",
          "Colorless"
        ],
        "name": "Metronome",
        "text": "Choose 1 of Defending Pokémon's attacks. Metronome copies that attack except for its Energy costs and anything else required in order to use that attack, such as discarding energy cards. (No matter what type the defender is, Clefairy's type is still Colorless.)",
        "damage": "",
        "convertedEnergyCost": 3
      }
    ],
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
    "id": "base1-6",
    "name": "Gyarados",
    "nationalPokedexNumber": 130,
    "imageUrl": "https://images.pokemontcg.io/base1/6.png",
    "imageUrlHiRes": "https://images.pokemontcg.io/base1/6_hires.png",
    "types": [
      "Water"
    ],
    "supertype": "Pokémon",
    "subtype": "Stage 1",
    "evolvesFrom": "Magikarp",
    "hp": "100",
    "retreatCost": [
      "Colorless",
      "Colorless",
      "Colorless"
    ],
    "convertedRetreatCost": 3,
    "number": "6",
    "artist": "Mitsuhiro Arita",
    "rarity": "Rare Holo",
    "series": "Base",
    "set": "Base",
    "setCode": "base1",
    "attacks": [
      {
        "cost": [
          "Water",
          "Water",
          "Water"
        ],
        "name": "Dragon Rage",
        "text": "",
        "damage": "50",
        "convertedEnergyCost": 3
      },
      {
        "cost": [
          "Water",
          "Water",
          "Water",
          "Water"
        ],
        "name": "Bubblebeam",
        "text": "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
        "damage": "40",
        "convertedEnergyCost": 4
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
    "id": "base1-7",
    "name": "Hitmonchan",
    "nationalPokedexNumber": 107,
    "imageUrl": "https://images.pokemontcg.io/base1/7.png",
    "imageUrlHiRes": "https://images.pokemontcg.io/base1/7_hires.png",
    "types": [
      "Fighting"
    ],
    "supertype": "Pokémon",
    "subtype": "Basic",
    "hp": "70",
    "retreatCost": [
      "Colorless",
      "Colorless"
    ],
    "convertedRetreatCost": 2,
    "number": "7",
    "artist": "Ken Sugimori",
    "rarity": "Rare Holo",
    "series": "Base",
    "set": "Base",
    "setCode": "base1",
    "attacks": [
      {
        "cost": [
          "Fighting"
        ],
        "name": "Jab",
        "text": "",
        "damage": "20",
        "convertedEnergyCost": 1
      },
      {
        "cost": [
          "Fighting",
          "Fighting",
          "Colorless"
        ],
        "name": "Special Punch",
        "text": "",
        "damage": "40",
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
    "id": "base1-8",
    "name": "Machamp",
    "nationalPokedexNumber": 68,
    "imageUrl": "https://images.pokemontcg.io/base1/8.png",
    "imageUrlHiRes": "https://images.pokemontcg.io/base1/8_hires.png",
    "types": [
      "Fighting"
    ],
    "supertype": "Pokémon",
    "subtype": "Stage 2",
    "evolvesFrom": "Machoke",
    "ability": {
      "name": "Strikes Back",
      "text": "Whenever your opponent's attack damages Machamp (even if Machamp is Knoced Out), this power does 10 damage to attacking Pokémon. (Don't apply Weakness and Resistance.) This power can't be used if Machamp is already Asleep, Confused, or Paralyzed when your opponent attacks.",
      "type": "Pokémon Power"
    },
    "hp": "100",
    "retreatCost": [
      "Colorless",
      "Colorless",
      "Colorless"
    ],
    "convertedRetreatCost": 3,
    "number": "8",
    "artist": "Ken Sugimori",
    "rarity": "Rare Holo",
    "series": "Base",
    "set": "Base",
    "setCode": "base1",
    "attacks": [
      {
        "cost": [
          "Fighting",
          "Fighting",
          "Fighting",
          "Colorless"
        ],
        "name": "Seismic Toss",
        "text": "",
        "damage": "60",
        "convertedEnergyCost": 4
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
    "id": "base1-9",
    "name": "Magneton",
    "nationalPokedexNumber": 82,
    "imageUrl": "https://images.pokemontcg.io/base1/9.png",
    "imageUrlHiRes": "https://images.pokemontcg.io/base1/9_hires.png",
    "types": [
      "Lightning"
    ],
    "supertype": "Pokémon",
    "subtype": "Stage 1",
    "evolvesFrom": "Magnemite",
    "hp": "60",
    "retreatCost": [
      "Colorless"
    ],
    "convertedRetreatCost": 1,
    "number": "9",
    "artist": "Keiji Kinebuchi",
    "rarity": "Rare Holo",
    "series": "Base",
    "set": "Base",
    "setCode": "base1",
    "attacks": [
      {
        "cost": [
          "Lightning",
          "Lightning",
          "Colorless"
        ],
        "name": "Thunder Wave",
        "text": "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
        "damage": "30",
        "convertedEnergyCost": 3
      },
      {
        "cost": [
          "Lightning",
          "Lightning",
          "Colorless",
          "Colorless"
        ],
        "name": "Selfdestruct",
        "text": "Does 20 damage to each Pokémon on each player's Bench. (Don't apply Weakness and Resistance for Benched Pokémon.) Magneton does 80 damage to itself.",
        "damage": "80",
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
    "id": "base1-10",
    "name": "Mewtwo",
    "nationalPokedexNumber": 150,
    "imageUrl": "https://images.pokemontcg.io/base1/10.png",
    "imageUrlHiRes": "https://images.pokemontcg.io/base1/10_hires.png",
    "types": [
      "Psychic"
    ],
    "supertype": "Pokémon",
    "subtype": "Basic",
    "hp": "60",
    "retreatCost": [
      "Colorless",
      "Colorless",
      "Colorless"
    ],
    "convertedRetreatCost": 3,
    "number": "10",
    "artist": "Ken Sugimori",
    "rarity": "Rare Holo",
    "series": "Base",
    "set": "Base",
    "setCode": "base1",
    "attacks": [
      {
        "cost": [
          "Psychic",
          "Colorless"
        ],
        "name": "Psychic",
        "text": "Does 10 damage plus 10 more damage for each Energy card attached to the Defending Pokémon.",
        "damage": "10+",
        "convertedEnergyCost": 2
      },
      {
        "cost": [
          "Psychic",
          "Psychic"
        ],
        "name": "Barrier",
        "text": "Discard 1 Psychic Energy card attached to Mewtwo in order to use this attack. During your opponent's next turn, prevent all effects of attacks, including damage, done to Mewtwo.",
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
    "id": "base1-11",
    "name": "Nidoking",
    "nationalPokedexNumber": 34,
    "imageUrl": "https://images.pokemontcg.io/base1/11.png",
    "imageUrlHiRes": "https://images.pokemontcg.io/base1/11_hires.png",
    "types": [
      "Grass"
    ],
    "supertype": "Pokémon",
    "subtype": "Stage 2",
    "evolvesFrom": "Nidorino",
    "hp": "90",
    "retreatCost": [
      "Colorless",
      "Colorless",
      "Colorless"
    ],
    "convertedRetreatCost": 3,
    "number": "11",
    "artist": "Ken Sugimori",
    "rarity": "Rare Holo",
    "series": "Base",
    "set": "Base",
    "setCode": "base1",
    "attacks": [
      {
        "cost": [
          "Grass",
          "Colorless",
          "Colorless"
        ],
        "name": "Thrash",
        "text": "Flip a coin. If heads, this attack does 30 damage plus 10 more damage; if tails, this attack does 30 damage and Nidoking does 10 damage to itself.",
        "damage": "30+",
        "convertedEnergyCost": 3
      },
      {
        "cost": [
          "Grass",
          "Grass",
          "Grass"
        ],
        "name": "Toxic",
        "text": "The Defending Pokémon is now Poisoned. It now takes 20 Poison damage instead of 10 after each player's turn (even if it was already Poisoned).",
        "damage": "40",
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
    "id": "base1-12",
    "name": "Ninetales",
    "nationalPokedexNumber": 38,
    "imageUrl": "https://images.pokemontcg.io/base1/12.png",
    "imageUrlHiRes": "https://images.pokemontcg.io/base1/12_hires.png",
    "types": [
      "Fire"
    ],
    "supertype": "Pokémon",
    "subtype": "Stage 1",
    "evolvesFrom": "Vulpix",
    "hp": "80",
    "retreatCost": [
      "Colorless"
    ],
    "convertedRetreatCost": 1,
    "number": "12",
    "artist": "Ken Sugimori",
    "rarity": "Rare Holo",
    "series": "Base",
    "set": "Base",
    "setCode": "base1",
    "attacks": [
      {
        "cost": [
          "Colorless",
          "Colorless"
        ],
        "name": "Lure",
        "text": "If your opponent has any Benched Pokémon, choose 1 of them and switch it with the Defending Pokémon.",
        "damage": "",
        "convertedEnergyCost": 2
      },
      {
        "cost": [
          "Fire",
          "Fire",
          "Fire",
          "Fire"
        ],
        "name": "Fire Blast",
        "text": "Discard 1 Fire Energy card attached to Ninetales in order to use this attack.",
        "damage": "80",
        "convertedEnergyCost": 4
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
    "id": "base1-13",
    "name": "Poliwrath",
    "nationalPokedexNumber": 62,
    "imageUrl": "https://images.pokemontcg.io/base1/13.png",
    "imageUrlHiRes": "https://images.pokemontcg.io/base1/13_hires.png",
    "types": [
      "Water"
    ],
    "supertype": "Pokémon",
    "subtype": "Stage 2",
    "evolvesFrom": "Poliwhirl",
    "hp": "90",
    "retreatCost": [
      "Colorless",
      "Colorless",
      "Colorless"
    ],
    "convertedRetreatCost": 3,
    "number": "13",
    "artist": "Ken Sugimori",
    "rarity": "Rare Holo",
    "series": "Base",
    "set": "Base",
    "setCode": "base1",
    "attacks": [
      {
        "cost": [
          "Water",
          "Water",
          "Colorless"
        ],
        "name": "Water Gun",
        "text": "Does 30 damage plus 10 more damage for each Water Energy attached to Poliwrath but not used to pay for this attack's Energy cost. Extra Water Energy after the 2nd doesn't count.",
        "damage": "30+",
        "convertedEnergyCost": 3
      },
      {
        "cost": [
          "Water",
          "Water",
          "Colorless",
          "Colorless"
        ],
        "name": "Whirlpool",
        "text": "If the Defending Pokémon has any Energy cards attached to it, choose 1 and discard it.",
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
    "id": "base1-14",
    "name": "Raichu",
    "nationalPokedexNumber": 26,
    "imageUrl": "https://images.pokemontcg.io/base1/14.png",
    "imageUrlHiRes": "https://images.pokemontcg.io/base1/14_hires.png",
    "types": [
      "Lightning"
    ],
    "supertype": "Pokémon",
    "subtype": "Stage 1",
    "evolvesFrom": "Pikachu",
    "hp": "80",
    "retreatCost": [
      "Colorless"
    ],
    "convertedRetreatCost": 1,
    "number": "14",
    "artist": "Ken Sugimori",
    "rarity": "Rare Holo",
    "series": "Base",
    "set": "Base",
    "setCode": "base1",
    "attacks": [
      {
        "cost": [
          "Lightning",
          "Colorless",
          "Colorless"
        ],
        "name": "Agility",
        "text": "Flip a coin. If heads, during your opponent's next turn, prevent all effects of attacks, including damage, done to Raichu.",
        "damage": "20",
        "convertedEnergyCost": 3
      },
      {
        "cost": [
          "Lightning",
          "Lightning",
          "Lightning",
          "Colorless"
        ],
        "name": "Thunder",
        "text": "Flip a coin. If tails, Raichu does 30 damage to itself.",
        "damage": "60",
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
    "id": "base1-15",
    "name": "Venusaur",
    "nationalPokedexNumber": 3,
    "imageUrl": "https://images.pokemontcg.io/base1/15.png",
    "imageUrlHiRes": "https://images.pokemontcg.io/base1/15_hires.png",
    "types": [
      "Grass"
    ],
    "supertype": "Pokémon",
    "subtype": "Stage 2",
    "evolvesFrom": "Ivysaur",
    "ability": {
      "name": "Energy Trans",
      "text": "As often as you like during your turn (before your attack), you may take 1 Grass Energy card attached to 1 of your Pokémon and attach it to a different one. This power can't be used if Venusaur is Asleep, Confused, or Paralyzed.",
      "type": "Pokémon Power"
    },
    "hp": "100",
    "retreatCost": [
      "Colorless",
      "Colorless"
    ],
    "convertedRetreatCost": 2,
    "number": "15",
    "artist": "Mitsuhiro Arita",
    "rarity": "Rare Holo",
    "series": "Base",
    "set": "Base",
    "setCode": "base1",
    "attacks": [
      {
        "cost": [
          "Grass",
          "Grass",
          "Grass",
          "Grass"
        ],
        "name": "Solarbeam",
        "text": "",
        "damage": "60",
        "convertedEnergyCost": 4
      }
    ],
    "weaknesses": [
      {
        "type": "Fire",
        "value": "×2"
      }
    ]
  },
  {
    "id": "base1-16",
    "name": "Zapdos",
    "nationalPokedexNumber": 145,
    "imageUrl": "https://images.pokemontcg.io/base1/16.png",
    "imageUrlHiRes": "https://images.pokemontcg.io/base1/16_hires.png",
    "types": [
      "Lightning"
    ],
    "supertype": "Pokémon",
    "subtype": "Basic",
    "hp": "90",
    "retreatCost": [
      "Colorless",
      "Colorless",
      "Colorless"
    ],
    "convertedRetreatCost": 3,
    "number": "16",
    "artist": "Ken Sugimori",
    "rarity": "Rare Holo",
    "series": "Base",
    "set": "Base",
    "setCode": "base1",
    "attacks": [
      {
        "cost": [
          "Lightning",
          "Lightning",
          "Lightning",
          "Colorless"
        ],
        "name": "Thunder",
        "text": "Flip a coin. If tails, Zapdos does 30 damage to itself.",
        "damage": "60",
        "convertedEnergyCost": 4
      },
      {
        "cost": [
          "Lightning",
          "Lightning",
          "Lightning",
          "Lightning"
        ],
        "name": "Thunderbolt",
        "text": "Discard all Energy cards attached to Zapdos in order to use this attack.",
        "damage": "100",
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
    "id": "base1-17",
    "name": "Beedrill",
    "nationalPokedexNumber": 15,
    "imageUrl": "https://images.pokemontcg.io/base1/17.png",
    "imageUrlHiRes": "https://images.pokemontcg.io/base1/17_hires.png",
    "types": [
      "Grass"
    ],
    "supertype": "Pokémon",
    "subtype": "Stage 2",
    "evolvesFrom": "Kakuna",
    "hp": "80",
    "number": "17",
    "artist": "Ken Sugimori",
    "rarity": "Rare",
    "series": "Base",
    "set": "Base",
    "setCode": "base1",
    "attacks": [
      {
        "cost": [
          "Colorless",
          "Colorless",
          "Colorless"
        ],
        "name": "Twineedle",
        "text": "Flip 2 coins. This attack does 30 damage times the number of heads.",
        "damage": "30×",
        "convertedEnergyCost": 3
      },
      {
        "cost": [
          "Grass",
          "Grass",
          "Grass"
        ],
        "name": "Poison Sting",
        "text": "Flip a coin. If heads, the Defending Pokémon is now Poisoned.",
        "damage": "40",
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
        "type": "Fire",
        "value": "×2"
      }
    ]
  },
  {
    "id": "base1-18",
    "name": "Dragonair",
    "nationalPokedexNumber": 148,
    "imageUrl": "https://images.pokemontcg.io/base1/18.png",
    "imageUrlHiRes": "https://images.pokemontcg.io/base1/18_hires.png",
    "types": [
      "Colorless"
    ],
    "supertype": "Pokémon",
    "subtype": "Stage 1",
    "evolvesFrom": "Dratini",
    "hp": "80",
    "retreatCost": [
      "Colorless",
      "Colorless"
    ],
    "convertedRetreatCost": 2,
    "number": "18",
    "artist": "Mitsuhiro Arita",
    "rarity": "Rare",
    "series": "Base",
    "set": "Base",
    "setCode": "base1",
    "attacks": [
      {
        "cost": [
          "Colorless",
          "Colorless",
          "Colorless"
        ],
        "name": "Slam",
        "text": "Flip 2 coins. This attack does 30 damage times the number of heads.",
        "damage": "30×",
        "convertedEnergyCost": 3
      },
      {
        "cost": [
          "Colorless",
          "Colorless",
          "Colorless",
          "Colorless"
        ],
        "name": "Hyper Beam",
        "text": "If the Defending Pokémon has any Energy cards attached to it, choose 1 of them and discard it.",
        "damage": "20",
        "convertedEnergyCost": 4
      }
    ],
    "resistances": [
      {
        "type": "Psychic",
        "value": "-30"
      }
    ]
  },
  {
    "id": "base1-19",
    "name": "Dugtrio",
    "nationalPokedexNumber": 51,
    "imageUrl": "https://images.pokemontcg.io/base1/19.png",
    "imageUrlHiRes": "https://images.pokemontcg.io/base1/19_hires.png",
    "types": [
      "Fighting"
    ],
    "supertype": "Pokémon",
    "subtype": "Stage 1",
    "evolvesFrom": "Diglett",
    "hp": "70",
    "retreatCost": [
      "Colorless",
      "Colorless"
    ],
    "convertedRetreatCost": 2,
    "number": "19",
    "artist": "Keiji Kinebuchi",
    "rarity": "Rare",
    "series": "Base",
    "set": "Base",
    "setCode": "base1",
    "attacks": [
      {
        "cost": [
          "Fighting",
          "Fighting",
          "Colorless"
        ],
        "name": "Slash",
        "text": "",
        "damage": "40",
        "convertedEnergyCost": 3
      },
      {
        "cost": [
          "Fighting",
          "Fighting",
          "Fighting",
          "Fighting"
        ],
        "name": "Earthquake",
        "text": "Does 10 damage to each of your own Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
        "damage": "70",
        "convertedEnergyCost": 4
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
    "id": "base1-20",
    "name": "Electabuzz",
    "nationalPokedexNumber": 125,
    "imageUrl": "https://images.pokemontcg.io/base1/20.png",
    "imageUrlHiRes": "https://images.pokemontcg.io/base1/20_hires.png",
    "types": [
      "Lightning"
    ],
    "supertype": "Pokémon",
    "subtype": "Basic",
    "hp": "70",
    "retreatCost": [
      "Colorless",
      "Colorless"
    ],
    "convertedRetreatCost": 2,
    "number": "20",
    "artist": "Ken Sugimori",
    "rarity": "Rare",
    "series": "Base",
    "set": "Base",
    "setCode": "base1",
    "attacks": [
      {
        "cost": [
          "Lightning"
        ],
        "name": "Thundershock",
        "text": "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
        "damage": "10",
        "convertedEnergyCost": 1
      },
      {
        "cost": [
          "Lightning",
          "Colorless"
        ],
        "name": "Thunderpunch",
        "text": "Flip a coin. If heads, this attack does 30 damage plus 10 more damage; if tails, this attack does 30 damage and Electabuzz does 10 damage to itself.",
        "damage": "30+",
        "convertedEnergyCost": 2
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
    "id": "base1-21",
    "name": "Electrode",
    "nationalPokedexNumber": 101,
    "imageUrl": "https://images.pokemontcg.io/base1/21.png",
    "imageUrlHiRes": "https://images.pokemontcg.io/base1/21_hires.png",
    "types": [
      "Lightning"
    ],
    "supertype": "Pokémon",
    "subtype": "Stage 1",
    "evolvesFrom": "Voltorb",
    "ability": {
      "name": "Buzzap",
      "text": "At any time during your turn (before your attack) you may Knock Out Electrode and attach it to 1 of your other Pokémon. If you do, chose a type of Energy. Electrode is now an Energy card (instead of a Pokémon) that provides 2 energy of that type. This power can't be used if Electrode is Asleep, Confused, or Paralyzed.",
      "type": "Pokémon Power"
    },
    "hp": "80",
    "retreatCost": [
      "Colorless"
    ],
    "convertedRetreatCost": 1,
    "number": "21",
    "artist": "Keiji Kinebuchi",
    "rarity": "Rare",
    "series": "Base",
    "set": "Base",
    "setCode": "base1",
    "attacks": [
      {
        "cost": [
          "Lightning",
          "Lightning",
          "Lightning"
        ],
        "name": "Electric Shock",
        "text": "Flip a coin. If tails, Electrode does 10 damage to itself.",
        "damage": "50",
        "convertedEnergyCost": 3
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
    "id": "base1-22",
    "name": "Pidgeotto",
    "nationalPokedexNumber": 17,
    "imageUrl": "https://images.pokemontcg.io/base1/22.png",
    "imageUrlHiRes": "https://images.pokemontcg.io/base1/22_hires.png",
    "types": [
      "Colorless"
    ],
    "supertype": "Pokémon",
    "subtype": "Stage 1",
    "evolvesFrom": "Pidgey",
    "hp": "60",
    "retreatCost": [
      "Colorless"
    ],
    "convertedRetreatCost": 1,
    "number": "22",
    "artist": "Ken Sugimori",
    "rarity": "Rare",
    "series": "Base",
    "set": "Base",
    "setCode": "base1",
    "attacks": [
      {
        "cost": [
          "Colorless",
          "Colorless"
        ],
        "name": "Whirlwind",
        "text": "If your opponent has any Benched Pokémon, he or she chooses 1 of them and switches it with the Defending Pokémon. (Do the damage before switching the Pokémon.)",
        "damage": "20",
        "convertedEnergyCost": 2
      },
      {
        "cost": [
          "Colorless",
          "Colorless",
          "Colorless"
        ],
        "name": "Mirror Move",
        "text": "If Pidgeotto was attacked last turn, do the final result of that attack on Pidgeotto to the Defending Pokémon.",
        "damage": "",
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
        "type": "Lightning",
        "value": "×2"
      }
    ]
  },
  {
    "id": "base1-23",
    "name": "Arcanine",
    "nationalPokedexNumber": 59,
    "imageUrl": "https://images.pokemontcg.io/base1/23.png",
    "imageUrlHiRes": "https://images.pokemontcg.io/base1/23_hires.png",
    "types": [
      "Fire"
    ],
    "supertype": "Pokémon",
    "subtype": "Stage 1",
    "evolvesFrom": "Growlithe",
    "hp": "100",
    "retreatCost": [
      "Colorless",
      "Colorless",
      "Colorless"
    ],
    "convertedRetreatCost": 3,
    "number": "23",
    "artist": "Ken Sugimori",
    "rarity": "Uncommon",
    "series": "Base",
    "set": "Base",
    "setCode": "base1",
    "attacks": [
      {
        "cost": [
          "Fire",
          "Fire",
          "Colorless"
        ],
        "name": "Flamethrower",
        "text": "Discard 1 Fire Energy card attached to Arcanine in order to use this attack.",
        "damage": "50",
        "convertedEnergyCost": 3
      },
      {
        "cost": [
          "Fire",
          "Fire",
          "Colorless",
          "Colorless"
        ],
        "name": "Take Down",
        "text": "Arcanine does 30 damage to itself.",
        "damage": "80",
        "convertedEnergyCost": 4
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
    "id": "base1-24",
    "name": "Charmeleon",
    "nationalPokedexNumber": 5,
    "imageUrl": "https://images.pokemontcg.io/base1/24.png",
    "imageUrlHiRes": "https://images.pokemontcg.io/base1/24_hires.png",
    "types": [
      "Fire"
    ],
    "supertype": "Pokémon",
    "subtype": "Stage 1",
    "evolvesFrom": "Charmander",
    "hp": "80",
    "retreatCost": [
      "Colorless"
    ],
    "convertedRetreatCost": 1,
    "number": "24",
    "artist": "Mitsuhiro Arita",
    "rarity": "Uncommon",
    "series": "Base",
    "set": "Base",
    "setCode": "base1",
    "attacks": [
      {
        "cost": [
          "Colorless",
          "Colorless",
          "Colorless"
        ],
        "name": "Slash",
        "text": "",
        "damage": "30",
        "convertedEnergyCost": 3
      },
      {
        "cost": [
          "Fire",
          "Fire",
          "Colorless"
        ],
        "name": "Flamethrower",
        "text": "Discard 1 Fire Energy card attached to Charmeleon in order to use this attack.",
        "damage": "50",
        "convertedEnergyCost": 3
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
    "id": "base1-25",
    "name": "Dewgong",
    "nationalPokedexNumber": 87,
    "imageUrl": "https://images.pokemontcg.io/base1/25.png",
    "imageUrlHiRes": "https://images.pokemontcg.io/base1/25_hires.png",
    "types": [
      "Water"
    ],
    "supertype": "Pokémon",
    "subtype": "Stage 1",
    "evolvesFrom": "Seel",
    "hp": "80",
    "retreatCost": [
      "Colorless",
      "Colorless",
      "Colorless"
    ],
    "convertedRetreatCost": 3,
    "number": "25",
    "artist": "Mitsuhiro Arita",
    "rarity": "Uncommon",
    "series": "Base",
    "set": "Base",
    "setCode": "base1",
    "attacks": [
      {
        "cost": [
          "Water",
          "Water",
          "Colorless"
        ],
        "name": "Aurora Beam",
        "text": "",
        "damage": "50",
        "convertedEnergyCost": 3
      },
      {
        "cost": [
          "Water",
          "Water",
          "Colorless",
          "Colorless"
        ],
        "name": "Ice Beam",
        "text": "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
        "damage": "30",
        "convertedEnergyCost": 4
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
    "id": "base1-26",
    "name": "Dratini",
    "nationalPokedexNumber": 147,
    "imageUrl": "https://images.pokemontcg.io/base1/26.png",
    "imageUrlHiRes": "https://images.pokemontcg.io/base1/26_hires.png",
    "types": [
      "Colorless"
    ],
    "supertype": "Pokémon",
    "subtype": "Basic",
    "hp": "40",
    "retreatCost": [
      "Colorless"
    ],
    "convertedRetreatCost": 1,
    "number": "26",
    "artist": "Ken Sugimori",
    "rarity": "Uncommon",
    "series": "Base",
    "set": "Base",
    "setCode": "base1",
    "attacks": [
      {
        "cost": [
          "Colorless"
        ],
        "name": "Pound",
        "text": "",
        "damage": "10",
        "convertedEnergyCost": 1
      }
    ],
    "resistances": [
      {
        "type": "Psychic",
        "value": "-30"
      }
    ]
  },
  {
    "id": "base1-27",
    "name": "Farfetch'd",
    "nationalPokedexNumber": 83,
    "imageUrl": "https://images.pokemontcg.io/base1/27.png",
    "imageUrlHiRes": "https://images.pokemontcg.io/base1/27_hires.png",
    "types": [
      "Colorless"
    ],
    "supertype": "Pokémon",
    "subtype": "Basic",
    "hp": "50",
    "retreatCost": [
      "Colorless"
    ],
    "convertedRetreatCost": 1,
    "number": "27",
    "artist": "Ken Sugimori",
    "rarity": "Uncommon",
    "series": "Base",
    "set": "Base",
    "setCode": "base1",
    "attacks": [
      {
        "cost": [
          "Colorless"
        ],
        "name": "Leek Slap",
        "text": "Flip a coin. If tails, this attack does nothing. Either way, you can't use this attack again as long as Farfetch'd stays in play (even putting Farfetch'd on the Bench won't let you use it again.)",
        "damage": "30",
        "convertedEnergyCost": 1
      },
      {
        "cost": [
          "Colorless",
          "Colorless",
          "Colorless"
        ],
        "name": "Pot Smash",
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
        "type": "Lightning",
        "value": "×2"
      }
    ]
  },
  {
    "id": "base1-28",
    "name": "Growlithe",
    "nationalPokedexNumber": 58,
    "imageUrl": "https://images.pokemontcg.io/base1/28.png",
    "imageUrlHiRes": "https://images.pokemontcg.io/base1/28_hires.png",
    "types": [
      "Fire"
    ],
    "supertype": "Pokémon",
    "subtype": "Basic",
    "hp": "60",
    "retreatCost": [
      "Colorless"
    ],
    "convertedRetreatCost": 1,
    "number": "28",
    "artist": "Ken Sugimori",
    "rarity": "Uncommon",
    "series": "Base",
    "set": "Base",
    "setCode": "base1",
    "attacks": [
      {
        "cost": [
          "Fire",
          "Colorless"
        ],
        "name": "Flare",
        "text": "",
        "damage": "20",
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
    "id": "base1-29",
    "name": "Haunter",
    "nationalPokedexNumber": 93,
    "imageUrl": "https://images.pokemontcg.io/base1/29.png",
    "imageUrlHiRes": "https://images.pokemontcg.io/base1/29_hires.png",
    "types": [
      "Psychic"
    ],
    "supertype": "Pokémon",
    "subtype": "Stage 1",
    "evolvesFrom": "Gastly",
    "hp": "60",
    "retreatCost": [
      "Colorless"
    ],
    "convertedRetreatCost": 1,
    "number": "29",
    "artist": "Keiji Kinebuchi",
    "rarity": "Uncommon",
    "series": "Base",
    "set": "Base",
    "setCode": "base1",
    "attacks": [
      {
        "cost": [
          "Psychic"
        ],
        "name": "Hypnosis",
        "text": "The Defending Pokémon is now Asleep.",
        "damage": "",
        "convertedEnergyCost": 1
      },
      {
        "cost": [
          "Psychic",
          "Psychic"
        ],
        "name": "Dream Eater",
        "text": "You can't this attack unless the Defending Pokémon is Asleep.",
        "damage": "50",
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
    "id": "base1-30",
    "name": "Ivysaur",
    "nationalPokedexNumber": 2,
    "imageUrl": "https://images.pokemontcg.io/base1/30.png",
    "imageUrlHiRes": "https://images.pokemontcg.io/base1/30_hires.png",
    "types": [
      "Grass"
    ],
    "supertype": "Pokémon",
    "subtype": "Stage 1",
    "evolvesFrom": "Barboach",
    "hp": "60",
    "retreatCost": [
      "Colorless"
    ],
    "convertedRetreatCost": 1,
    "number": "30",
    "artist": "Ken Sugimori",
    "rarity": "Uncommon",
    "series": "Base",
    "set": "Base",
    "setCode": "base1",
    "attacks": [
      {
        "cost": [
          "Grass",
          "Colorless",
          "Colorless"
        ],
        "name": "Vine Whip",
        "text": "",
        "damage": "30",
        "convertedEnergyCost": 3
      },
      {
        "cost": [
          "Grass",
          "Grass",
          "Grass"
        ],
        "name": "Poisonpowder",
        "text": "The Defending Pokémon is now Poisoned.",
        "damage": "30",
        "convertedEnergyCost": 3
      }
    ],
    "weaknesses": [
      {
        "type": "Fire",
        "value": "×2"
      }
    ]
  },
  {
    "id": "base1-31",
    "name": "Jynx",
    "nationalPokedexNumber": 124,
    "imageUrl": "https://images.pokemontcg.io/base1/31.png",
    "imageUrlHiRes": "https://images.pokemontcg.io/base1/31_hires.png",
    "types": [
      "Psychic"
    ],
    "supertype": "Pokémon",
    "subtype": "Basic",
    "hp": "70",
    "retreatCost": [
      "Colorless",
      "Colorless"
    ],
    "convertedRetreatCost": 2,
    "number": "31",
    "artist": "Ken Sugimori",
    "rarity": "Uncommon",
    "series": "Base",
    "set": "Base",
    "setCode": "base1",
    "attacks": [
      {
        "cost": [
          "Psychic"
        ],
        "name": "Doubleslap",
        "text": "Flip 2 coins. This attack does 10 damage times the number of heads.",
        "damage": "10×",
        "convertedEnergyCost": 1
      },
      {
        "cost": [
          "Psychic",
          "Psychic",
          "Colorless"
        ],
        "name": "Meditate",
        "text": "Does 20 damage plus 10 more damage for each damage counter on the Defending Pokémon.",
        "damage": "20+",
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
    "id": "base1-32",
    "name": "Kadabra",
    "nationalPokedexNumber": 64,
    "imageUrl": "https://images.pokemontcg.io/base1/32.png",
    "imageUrlHiRes": "https://images.pokemontcg.io/base1/32_hires.png",
    "types": [
      "Psychic"
    ],
    "supertype": "Pokémon",
    "subtype": "Stage 1",
    "evolvesFrom": "Abra",
    "hp": "60",
    "retreatCost": [
      "Colorless",
      "Colorless",
      "Colorless"
    ],
    "convertedRetreatCost": 3,
    "number": "32",
    "artist": "Ken Sugimori",
    "rarity": "Uncommon",
    "series": "Base",
    "set": "Base",
    "setCode": "base1",
    "attacks": [
      {
        "cost": [
          "Psychic",
          "Psychic"
        ],
        "name": "Recover",
        "text": "Discard 1 Psychic Energy card attached to Kadabra in order use this attack. Remove all damage counters from Kadabra.",
        "damage": "",
        "convertedEnergyCost": 2
      },
      {
        "cost": [
          "Psychic",
          "Psychic",
          "Colorless"
        ],
        "name": "Super Psy",
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
    "id": "base1-33",
    "name": "Kakuna",
    "nationalPokedexNumber": 14,
    "imageUrl": "https://images.pokemontcg.io/base1/33.png",
    "imageUrlHiRes": "https://images.pokemontcg.io/base1/33_hires.png",
    "types": [
      "Grass"
    ],
    "supertype": "Pokémon",
    "subtype": "Stage 1",
    "evolvesFrom": "Weedle",
    "hp": "80",
    "retreatCost": [
      "Colorless",
      "Colorless"
    ],
    "convertedRetreatCost": 2,
    "number": "33",
    "artist": "Keiji Kinebuchi",
    "rarity": "Uncommon",
    "series": "Base",
    "set": "Base",
    "setCode": "base1",
    "attacks": [
      {
        "cost": [
          "Colorless",
          "Colorless"
        ],
        "name": "Stiffen",
        "text": "Flip a coin. If heads, prevent all damage done to Kakuna during your opponent's next turn. (Any other effects of attacks still happen.)",
        "damage": "",
        "convertedEnergyCost": 2
      },
      {
        "cost": [
          "Grass",
          "Grass"
        ],
        "name": "Poisonpowder",
        "text": "Flip a coin. If heads, the Defending Pokémon is now Poisoned.",
        "damage": "20",
        "convertedEnergyCost": 2
      }
    ],
    "weaknesses": [
      {
        "type": "Fire",
        "value": "×2"
      }
    ]
  },
  {
    "id": "base1-34",
    "name": "Machoke",
    "nationalPokedexNumber": 67,
    "imageUrl": "https://images.pokemontcg.io/base1/34.png",
    "imageUrlHiRes": "https://images.pokemontcg.io/base1/34_hires.png",
    "types": [
      "Fighting"
    ],
    "supertype": "Pokémon",
    "subtype": "Stage 1",
    "evolvesFrom": "Machop",
    "hp": "80",
    "retreatCost": [
      "Colorless",
      "Colorless",
      "Colorless"
    ],
    "convertedRetreatCost": 3,
    "number": "34",
    "artist": "Ken Sugimori",
    "rarity": "Uncommon",
    "series": "Base",
    "set": "Base",
    "setCode": "base1",
    "attacks": [
      {
        "cost": [
          "Fighting",
          "Fighting",
          "Colorless"
        ],
        "name": "Karate Chop",
        "text": "Does 50 damage minus 10 for each damage counter on Machoke.",
        "damage": "50-",
        "convertedEnergyCost": 3
      },
      {
        "cost": [
          "Fighting",
          "Fighting",
          "Colorless",
          "Colorless"
        ],
        "name": "Submission",
        "text": "Machoke does 20 damage to itself.",
        "damage": "60",
        "convertedEnergyCost": 4
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
    "id": "base1-35",
    "name": "Magikarp",
    "nationalPokedexNumber": 129,
    "imageUrl": "https://images.pokemontcg.io/base1/35.png",
    "imageUrlHiRes": "https://images.pokemontcg.io/base1/35_hires.png",
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
    "number": "35",
    "artist": "Mitsuhiro Arita",
    "rarity": "Uncommon",
    "series": "Base",
    "set": "Base",
    "setCode": "base1",
    "attacks": [
      {
        "cost": [
          "Colorless"
        ],
        "name": "Tackle",
        "text": "",
        "damage": "10",
        "convertedEnergyCost": 1
      },
      {
        "cost": [
          "Water"
        ],
        "name": "Flail",
        "text": "Does 10 damage times number of damage counters on Magikarp.",
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
    "id": "base1-36",
    "name": "Magmar",
    "nationalPokedexNumber": 126,
    "imageUrl": "https://images.pokemontcg.io/base1/36.png",
    "imageUrlHiRes": "https://images.pokemontcg.io/base1/36_hires.png",
    "types": [
      "Fire"
    ],
    "supertype": "Pokémon",
    "subtype": "Basic",
    "hp": "50",
    "retreatCost": [
      "Colorless",
      "Colorless"
    ],
    "convertedRetreatCost": 2,
    "number": "36",
    "artist": "Ken Sugimori",
    "rarity": "Uncommon",
    "series": "Base",
    "set": "Base",
    "setCode": "base1",
    "attacks": [
      {
        "cost": [
          "Fire",
          "Fire"
        ],
        "name": "Fire Punch",
        "text": "",
        "damage": "30",
        "convertedEnergyCost": 2
      },
      {
        "cost": [
          "Fire",
          "Fire",
          "Colorless"
        ],
        "name": "Flamethrower",
        "text": "Discard 1 Fire Energy card attached to Magmar in order to use this attack.",
        "damage": "50",
        "convertedEnergyCost": 3
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
    "id": "base1-37",
    "name": "Nidorino",
    "nationalPokedexNumber": 33,
    "imageUrl": "https://images.pokemontcg.io/base1/37.png",
    "imageUrlHiRes": "https://images.pokemontcg.io/base1/37_hires.png",
    "types": [
      "Grass"
    ],
    "supertype": "Pokémon",
    "subtype": "Stage 1",
    "evolvesFrom": "Nidoran♂",
    "hp": "60",
    "retreatCost": [
      "Colorless"
    ],
    "convertedRetreatCost": 1,
    "number": "37",
    "artist": "Mitsuhiro Arita",
    "rarity": "Uncommon",
    "series": "Base",
    "set": "Base",
    "setCode": "base1",
    "attacks": [
      {
        "cost": [
          "Grass",
          "Colorless",
          "Colorless"
        ],
        "name": "Double Kick",
        "text": "Flip 2 coins. This attack does 30 damage times the number of heads.",
        "damage": "30×",
        "convertedEnergyCost": 3
      },
      {
        "cost": [
          "Grass",
          "Grass",
          "Colorless",
          "Colorless"
        ],
        "name": "Horn Drill",
        "text": "",
        "damage": "50",
        "convertedEnergyCost": 4
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
    "id": "base1-38",
    "name": "Poliwhirl",
    "nationalPokedexNumber": 61,
    "imageUrl": "https://images.pokemontcg.io/base1/38.png",
    "imageUrlHiRes": "https://images.pokemontcg.io/base1/38_hires.png",
    "types": [
      "Water"
    ],
    "supertype": "Pokémon",
    "subtype": "Stage 1",
    "evolvesFrom": "Poliwag",
    "hp": "60",
    "retreatCost": [
      "Colorless"
    ],
    "convertedRetreatCost": 1,
    "number": "38",
    "artist": "Ken Sugimori",
    "rarity": "Uncommon",
    "series": "Base",
    "set": "Base",
    "setCode": "base1",
    "attacks": [
      {
        "cost": [
          "Water",
          "Water"
        ],
        "name": "Amnesia",
        "text": "Choose 1 of defenders attacks. Defender cannot use that attack next turn.",
        "damage": "",
        "convertedEnergyCost": 2
      },
      {
        "cost": [
          "Water",
          "Water",
          "Colorless"
        ],
        "name": "Doubleslap",
        "text": "Flip 2 coins. This attack does 30 damage times number of heads.",
        "damage": "30×",
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
    "id": "base1-39",
    "name": "Porygon",
    "nationalPokedexNumber": 137,
    "imageUrl": "https://images.pokemontcg.io/base1/39.png",
    "imageUrlHiRes": "https://images.pokemontcg.io/base1/39_hires.png",
    "types": [
      "Colorless"
    ],
    "supertype": "Pokémon",
    "subtype": "Basic",
    "hp": "30",
    "retreatCost": [
      "Colorless"
    ],
    "convertedRetreatCost": 1,
    "number": "39",
    "artist": "Tomoaki Imakuni",
    "rarity": "Uncommon",
    "series": "Base",
    "set": "Base",
    "setCode": "base1",
    "attacks": [
      {
        "cost": [
          "Colorless"
        ],
        "name": "Conversion 1",
        "text": "If the Defending Pokémon has a Weakness, you may change it to a type of your choice other than Colorless.",
        "damage": "",
        "convertedEnergyCost": 1
      },
      {
        "cost": [
          "Colorless",
          "Colorless"
        ],
        "name": "Conversion 2",
        "text": "Change Porygon's Resistance to a type of your choice other than Colorless.",
        "damage": "",
        "convertedEnergyCost": 2
      }
    ],
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
    "id": "base1-40",
    "name": "Raticate",
    "nationalPokedexNumber": 20,
    "imageUrl": "https://images.pokemontcg.io/base1/40.png",
    "imageUrlHiRes": "https://images.pokemontcg.io/base1/40_hires.png",
    "types": [
      "Colorless"
    ],
    "supertype": "Pokémon",
    "subtype": "Stage 1",
    "evolvesFrom": "Poochyena",
    "hp": "60",
    "retreatCost": [
      "Colorless"
    ],
    "convertedRetreatCost": 1,
    "number": "40",
    "artist": "Ken Sugimori",
    "rarity": "Uncommon",
    "series": "Base",
    "set": "Base",
    "setCode": "base1",
    "attacks": [
      {
        "cost": [
          "Colorless"
        ],
        "name": "Bite",
        "text": "",
        "damage": "20",
        "convertedEnergyCost": 1
      },
      {
        "cost": [
          "Colorless",
          "Colorless",
          "Colorless"
        ],
        "name": "Super Fang",
        "text": "Does damage to the Defending Pokémon equal to half the Defending Pokémon's remaining HP (rounded up to the nearest 10).",
        "damage": "?",
        "convertedEnergyCost": 3
      }
    ],
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
    "id": "base1-41",
    "name": "Seel",
    "nationalPokedexNumber": 86,
    "imageUrl": "https://images.pokemontcg.io/base1/41.png",
    "imageUrlHiRes": "https://images.pokemontcg.io/base1/41_hires.png",
    "types": [
      "Water"
    ],
    "supertype": "Pokémon",
    "subtype": "Basic",
    "hp": "60",
    "retreatCost": [
      "Colorless"
    ],
    "convertedRetreatCost": 1,
    "number": "41",
    "artist": "Ken Sugimori",
    "rarity": "Uncommon",
    "series": "Base",
    "set": "Base",
    "setCode": "base1",
    "attacks": [
      {
        "cost": [
          "Water"
        ],
        "name": "Headbutt",
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
    "id": "base1-42",
    "name": "Wartortle",
    "nationalPokedexNumber": 8,
    "imageUrl": "https://images.pokemontcg.io/base1/42.png",
    "imageUrlHiRes": "https://images.pokemontcg.io/base1/42_hires.png",
    "types": [
      "Water"
    ],
    "supertype": "Pokémon",
    "subtype": "Stage 1",
    "evolvesFrom": "Squirtle",
    "hp": "70",
    "retreatCost": [
      "Colorless"
    ],
    "convertedRetreatCost": 1,
    "number": "42",
    "artist": "Ken Sugimori",
    "rarity": "Uncommon",
    "series": "Base",
    "set": "Base",
    "setCode": "base1",
    "attacks": [
      {
        "cost": [
          "Water",
          "Colorless"
        ],
        "name": "Withdraw",
        "text": "Flip a coin. If heads, prevent all damage done to Wartortle during your opponent's next turn. (Any other effects of attacks still happen.)",
        "damage": "",
        "convertedEnergyCost": 2
      },
      {
        "cost": [
          "Water",
          "Colorless",
          "Colorless"
        ],
        "name": "Bite",
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
    "id": "base1-43",
    "name": "Abra",
    "nationalPokedexNumber": 63,
    "imageUrl": "https://images.pokemontcg.io/base1/43.png",
    "imageUrlHiRes": "https://images.pokemontcg.io/base1/43_hires.png",
    "types": [
      "Psychic"
    ],
    "supertype": "Pokémon",
    "subtype": "Basic",
    "hp": "30",
    "number": "43",
    "artist": "Mitsuhiro Arita",
    "rarity": "Common",
    "series": "Base",
    "set": "Base",
    "setCode": "base1",
    "attacks": [
      {
        "cost": [
          "Psychic"
        ],
        "name": "Psyshock",
        "text": "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
        "damage": "10",
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
    "id": "base1-44",
    "name": "Bulbasaur",
    "nationalPokedexNumber": 1,
    "imageUrl": "https://images.pokemontcg.io/base1/44.png",
    "imageUrlHiRes": "https://images.pokemontcg.io/base1/44_hires.png",
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
    "number": "44",
    "artist": "Mitsuhiro Arita",
    "rarity": "Common",
    "series": "Base",
    "set": "Base",
    "setCode": "base1",
    "attacks": [
      {
        "cost": [
          "Grass",
          "Grass"
        ],
        "name": "Leech Seed",
        "text": "Unless all damage from this attack is prevented, you may remove 1 damage counter from Bulbasaur.",
        "damage": "20",
        "convertedEnergyCost": 2
      }
    ],
    "weaknesses": [
      {
        "type": "Fire",
        "value": "×2"
      }
    ]
  },
  {
    "id": "base1-45",
    "name": "Caterpie",
    "nationalPokedexNumber": 10,
    "imageUrl": "https://images.pokemontcg.io/base1/45.png",
    "imageUrlHiRes": "https://images.pokemontcg.io/base1/45_hires.png",
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
    "number": "45",
    "artist": "Ken Sugimori",
    "rarity": "Common",
    "series": "Base",
    "set": "Base",
    "setCode": "base1",
    "attacks": [
      {
        "cost": [
          "Grass"
        ],
        "name": "String Shot",
        "text": "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
        "damage": "10",
        "convertedEnergyCost": 1
      }
    ],
    "weaknesses": [
      {
        "type": "Fire",
        "value": "×2"
      }
    ]
  },
  {
    "id": "base1-46",
    "name": "Charmander",
    "nationalPokedexNumber": 4,
    "imageUrl": "https://images.pokemontcg.io/base1/46.png",
    "imageUrlHiRes": "https://images.pokemontcg.io/base1/46_hires.png",
    "types": [
      "Fire"
    ],
    "supertype": "Pokémon",
    "subtype": "Basic",
    "hp": "50",
    "retreatCost": [
      "Colorless"
    ],
    "convertedRetreatCost": 1,
    "number": "46",
    "artist": "Mitsuhiro Arita",
    "rarity": "Common",
    "series": "Base",
    "set": "Base",
    "setCode": "base1",
    "attacks": [
      {
        "cost": [
          "Colorless"
        ],
        "name": "Scratch",
        "text": "",
        "damage": "10",
        "convertedEnergyCost": 1
      },
      {
        "cost": [
          "Fire",
          "Colorless"
        ],
        "name": "Ember",
        "text": "Discard 1 Fire Energy card attached to Charmander in order to use this attack.",
        "damage": "30",
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
    "id": "base1-47",
    "name": "Diglett",
    "nationalPokedexNumber": 50,
    "imageUrl": "https://images.pokemontcg.io/base1/47.png",
    "imageUrlHiRes": "https://images.pokemontcg.io/base1/47_hires.png",
    "types": [
      "Fighting"
    ],
    "supertype": "Pokémon",
    "subtype": "Basic",
    "hp": "30",
    "number": "47",
    "artist": "Keiji Kinebuchi",
    "rarity": "Common",
    "series": "Base",
    "set": "Base",
    "setCode": "base1",
    "attacks": [
      {
        "cost": [
          "Fighting"
        ],
        "name": "Dig",
        "text": "",
        "damage": "10",
        "convertedEnergyCost": 1
      },
      {
        "cost": [
          "Fighting",
          "Fighting"
        ],
        "name": "Mud Slap",
        "text": "",
        "damage": "30",
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
    "id": "base1-48",
    "name": "Doduo",
    "nationalPokedexNumber": 84,
    "imageUrl": "https://images.pokemontcg.io/base1/48.png",
    "imageUrlHiRes": "https://images.pokemontcg.io/base1/48_hires.png",
    "types": [
      "Colorless"
    ],
    "supertype": "Pokémon",
    "subtype": "Basic",
    "hp": "50",
    "number": "48",
    "artist": "Mitsuhiro Arita",
    "rarity": "Common",
    "series": "Base",
    "set": "Base",
    "setCode": "base1",
    "attacks": [
      {
        "cost": [
          "Colorless"
        ],
        "name": "Fury Attack",
        "text": "Flip 2 coins. This attack does 10 damage times the number of heads.",
        "damage": "10×",
        "convertedEnergyCost": 1
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
        "type": "Lightning",
        "value": "×2"
      }
    ]
  },
  {
    "id": "base1-49",
    "name": "Drowzee",
    "nationalPokedexNumber": 96,
    "imageUrl": "https://images.pokemontcg.io/base1/49.png",
    "imageUrlHiRes": "https://images.pokemontcg.io/base1/49_hires.png",
    "types": [
      "Psychic"
    ],
    "supertype": "Pokémon",
    "subtype": "Basic",
    "hp": "50",
    "number": "49",
    "artist": "Ken Sugimori",
    "rarity": "Common",
    "series": "Base",
    "set": "Base",
    "setCode": "base1",
    "attacks": [
      {
        "cost": [
          "Colorless"
        ],
        "name": "Pound",
        "text": "",
        "damage": "10",
        "convertedEnergyCost": 1
      },
      {
        "cost": [
          "Psychic",
          "Psychic"
        ],
        "name": "Confuse Ray",
        "text": "Flip a coin. If heads, the Defending Pokémon is now Confused.",
        "damage": "10",
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
    "id": "base1-50",
    "name": "Gastly",
    "nationalPokedexNumber": 92,
    "imageUrl": "https://images.pokemontcg.io/base1/50.png",
    "imageUrlHiRes": "https://images.pokemontcg.io/base1/50_hires.png",
    "types": [
      "Psychic"
    ],
    "supertype": "Pokémon",
    "subtype": "Basic",
    "hp": "30",
    "number": "50",
    "artist": "Keiji Kinebuchi",
    "rarity": "Common",
    "series": "Base",
    "set": "Base",
    "setCode": "base1",
    "attacks": [
      {
        "cost": [
          "Psychic"
        ],
        "name": "Sleeping Gas",
        "text": "Flip a coin. If heads, the Defending Pokémon is now Asleep.",
        "damage": "",
        "convertedEnergyCost": 1
      },
      {
        "cost": [
          "Psychic",
          "Colorless"
        ],
        "name": "Destiny Bond",
        "text": "Discard 1 Psychic Energy card attached to Gastly in order to use this attack. If a Pokémon Knocks Out Gastly during your opponent's next turn, Knock Out that Pokémon.",
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
    "id": "base1-51",
    "name": "Koffing",
    "nationalPokedexNumber": 109,
    "imageUrl": "https://images.pokemontcg.io/base1/51.png",
    "imageUrlHiRes": "https://images.pokemontcg.io/base1/51_hires.png",
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
    "number": "51",
    "artist": "Mitsuhiro Arita",
    "rarity": "Common",
    "series": "Base",
    "set": "Base",
    "setCode": "base1",
    "attacks": [
      {
        "cost": [
          "Grass",
          "Grass"
        ],
        "name": "Foul Gas",
        "text": "Flip a coin. If heads, the Defending Pokémon is now Poisoned; if tails, it is now Confused.",
        "damage": "10",
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
    "id": "base1-52",
    "name": "Machop",
    "nationalPokedexNumber": 66,
    "imageUrl": "https://images.pokemontcg.io/base1/52.png",
    "imageUrlHiRes": "https://images.pokemontcg.io/base1/52_hires.png",
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
    "number": "52",
    "artist": "Mitsuhiro Arita",
    "rarity": "Common",
    "series": "Base",
    "set": "Base",
    "setCode": "base1",
    "attacks": [
      {
        "cost": [
          "Fighting"
        ],
        "name": "Low Kick",
        "text": "",
        "damage": "20",
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
    "id": "base1-53",
    "name": "Magnemite",
    "nationalPokedexNumber": 81,
    "imageUrl": "https://images.pokemontcg.io/base1/53.png",
    "imageUrlHiRes": "https://images.pokemontcg.io/base1/53_hires.png",
    "types": [
      "Lightning"
    ],
    "supertype": "Pokémon",
    "subtype": "Basic",
    "hp": "40",
    "retreatCost": [
      "Colorless"
    ],
    "convertedRetreatCost": 1,
    "number": "53",
    "artist": "Keiji Kinebuchi",
    "rarity": "Common",
    "series": "Base",
    "set": "Base",
    "setCode": "base1",
    "attacks": [
      {
        "cost": [
          "Lightning"
        ],
        "name": "Thunder Wave",
        "text": "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
        "damage": "10",
        "convertedEnergyCost": 1
      },
      {
        "cost": [
          "Lightning",
          "Colorless"
        ],
        "name": "Selfdestruct",
        "text": "Does 10 damage to each Pokémon on each player's Bench. (Don't apply Weakness and Resistance for Benched Pokémon.) Magnemite does 40 damage to itself.",
        "damage": "40",
        "convertedEnergyCost": 2
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
    "id": "base1-54",
    "name": "Metapod",
    "nationalPokedexNumber": 11,
    "imageUrl": "https://images.pokemontcg.io/base1/54.png",
    "imageUrlHiRes": "https://images.pokemontcg.io/base1/54_hires.png",
    "types": [
      "Grass"
    ],
    "supertype": "Pokémon",
    "subtype": "Stage 1",
    "evolvesFrom": "Caterpie",
    "hp": "70",
    "retreatCost": [
      "Colorless",
      "Colorless"
    ],
    "convertedRetreatCost": 2,
    "number": "54",
    "artist": "Ken Sugimori",
    "rarity": "Common",
    "series": "Base",
    "set": "Base",
    "setCode": "base1",
    "attacks": [
      {
        "cost": [
          "Colorless",
          "Colorless"
        ],
        "name": "Stiffen",
        "text": "Flip a coin. If heads, prevent all damage done to Metapod during your opponent's next turn. (Any other effects of attacks still happen.)",
        "damage": "",
        "convertedEnergyCost": 2
      },
      {
        "cost": [
          "Grass",
          "Grass"
        ],
        "name": "Stun Spore",
        "text": "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
        "damage": "20",
        "convertedEnergyCost": 2
      }
    ],
    "weaknesses": [
      {
        "type": "Fire",
        "value": "×2"
      }
    ]
  },
  {
    "id": "base1-55",
    "name": "Nidoran♂",
    "nationalPokedexNumber": 32,
    "imageUrl": "https://images.pokemontcg.io/base1/55.png",
    "imageUrlHiRes": "https://images.pokemontcg.io/base1/55_hires.png",
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
    "number": "55",
    "artist": "Ken Sugimori",
    "rarity": "Common",
    "series": "Base",
    "set": "Base",
    "setCode": "base1",
    "attacks": [
      {
        "cost": [
          "Grass"
        ],
        "name": "Horn Hazard",
        "text": "Flip a coin. If tails, this attack does nothing.",
        "damage": "30",
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
    "id": "base1-56",
    "name": "Onix",
    "nationalPokedexNumber": 95,
    "imageUrl": "https://images.pokemontcg.io/base1/56.png",
    "imageUrlHiRes": "https://images.pokemontcg.io/base1/56_hires.png",
    "types": [
      "Fighting"
    ],
    "supertype": "Pokémon",
    "subtype": "Basic",
    "hp": "90",
    "retreatCost": [
      "Colorless",
      "Colorless",
      "Colorless"
    ],
    "convertedRetreatCost": 3,
    "number": "56",
    "artist": "Ken Sugimori",
    "rarity": "Common",
    "series": "Base",
    "set": "Base",
    "setCode": "base1",
    "attacks": [
      {
        "cost": [
          "Fighting"
        ],
        "name": "Rock Throw",
        "text": "",
        "damage": "10",
        "convertedEnergyCost": 1
      },
      {
        "cost": [
          "Fighting",
          "Fighting"
        ],
        "name": "Harden",
        "text": "During opponent's next turn, whenever 30 or less damage is done to Onix (after applying Weakness and Resistance), prevent that damage. (Any other effects of attacks still happen.)",
        "damage": "",
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
    "id": "base1-57",
    "name": "Pidgey",
    "nationalPokedexNumber": 16,
    "imageUrl": "https://images.pokemontcg.io/base1/57.png",
    "imageUrlHiRes": "https://images.pokemontcg.io/base1/57_hires.png",
    "types": [
      "Colorless"
    ],
    "supertype": "Pokémon",
    "subtype": "Basic",
    "hp": "40",
    "retreatCost": [
      "Colorless"
    ],
    "convertedRetreatCost": 1,
    "number": "57",
    "artist": "Ken Sugimori",
    "rarity": "Common",
    "series": "Base",
    "set": "Base",
    "setCode": "base1",
    "attacks": [
      {
        "cost": [
          "Colorless",
          "Colorless"
        ],
        "name": "Whirlwind",
        "text": "If your opponent has any Benched Pokémon, he or she chooses 1 of them and switches it with the Defending Pokémon. (Do the damage before switching the Pokémon.)",
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
        "type": "Lightning",
        "value": "×2"
      }
    ]
  },
  {
    "id": "base1-58",
    "name": "Pikachu",
    "nationalPokedexNumber": 25,
    "imageUrl": "https://images.pokemontcg.io/base1/58.png",
    "imageUrlHiRes": "https://images.pokemontcg.io/base1/58_hires.png",
    "types": [
      "Lightning"
    ],
    "supertype": "Pokémon",
    "subtype": "Basic",
    "hp": "40",
    "retreatCost": [
      "Colorless"
    ],
    "convertedRetreatCost": 1,
    "number": "58",
    "artist": "Mitsuhiro Arita",
    "rarity": "Common",
    "series": "Base",
    "set": "Base",
    "setCode": "base1",
    "attacks": [
      {
        "cost": [
          "Colorless"
        ],
        "name": "Gnaw",
        "text": "",
        "damage": "10",
        "convertedEnergyCost": 1
      },
      {
        "cost": [
          "Lightning",
          "Colorless"
        ],
        "name": "Thunder Jolt",
        "text": "Flip a coin. If tails, Pikachu does 10 damage to itself.",
        "damage": "30",
        "convertedEnergyCost": 2
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
    "id": "base1-59",
    "name": "Poliwag",
    "nationalPokedexNumber": 60,
    "imageUrl": "https://images.pokemontcg.io/base1/59.png",
    "imageUrlHiRes": "https://images.pokemontcg.io/base1/59_hires.png",
    "types": [
      "Water"
    ],
    "supertype": "Pokémon",
    "subtype": "Basic",
    "hp": "40",
    "retreatCost": [
      "Colorless"
    ],
    "convertedRetreatCost": 1,
    "number": "59",
    "artist": "Ken Sugimori",
    "rarity": "Common",
    "series": "Base",
    "set": "Base",
    "setCode": "base1",
    "attacks": [
      {
        "cost": [
          "Water"
        ],
        "name": "Water Gun",
        "text": "Does 10 damage plus 10 damage for each Energy attached to Poliwag but not used to pay for this attack's Energy cost. Extra Energy after the end don't count.",
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
    "id": "base1-60",
    "name": "Ponyta",
    "nationalPokedexNumber": 77,
    "imageUrl": "https://images.pokemontcg.io/base1/60.png",
    "imageUrlHiRes": "https://images.pokemontcg.io/base1/60_hires.png",
    "types": [
      "Fire"
    ],
    "supertype": "Pokémon",
    "subtype": "Basic",
    "hp": "40",
    "retreatCost": [
      "Colorless"
    ],
    "convertedRetreatCost": 1,
    "number": "60",
    "artist": "Ken Sugimori",
    "rarity": "Common",
    "series": "Base",
    "set": "Base",
    "setCode": "base1",
    "attacks": [
      {
        "cost": [
          "Colorless",
          "Colorless"
        ],
        "name": "Smash Kick",
        "text": "",
        "damage": "20",
        "convertedEnergyCost": 2
      },
      {
        "cost": [
          "Fire",
          "Fire"
        ],
        "name": "Flame Tail",
        "text": "",
        "damage": "30",
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
    "id": "base1-61",
    "name": "Rattata",
    "nationalPokedexNumber": 19,
    "imageUrl": "https://images.pokemontcg.io/base1/61.png",
    "imageUrlHiRes": "https://images.pokemontcg.io/base1/61_hires.png",
    "types": [
      "Colorless"
    ],
    "supertype": "Pokémon",
    "subtype": "Basic",
    "hp": "30",
    "number": "61",
    "artist": "Mitsuhiro Arita",
    "rarity": "Common",
    "series": "Base",
    "set": "Base",
    "setCode": "base1",
    "attacks": [
      {
        "cost": [
          "Colorless"
        ],
        "name": "Bite",
        "text": "",
        "damage": "20",
        "convertedEnergyCost": 1
      }
    ],
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
    "id": "base1-62",
    "name": "Sandshrew",
    "nationalPokedexNumber": 27,
    "imageUrl": "https://images.pokemontcg.io/base1/62.png",
    "imageUrlHiRes": "https://images.pokemontcg.io/base1/62_hires.png",
    "types": [
      "Fighting"
    ],
    "supertype": "Pokémon",
    "subtype": "Basic",
    "hp": "40",
    "retreatCost": [
      "Colorless"
    ],
    "convertedRetreatCost": 1,
    "number": "62",
    "artist": "Ken Sugimori",
    "rarity": "Common",
    "series": "Base",
    "set": "Base",
    "setCode": "base1",
    "attacks": [
      {
        "cost": [
          "Fighting"
        ],
        "name": "Sand-attack",
        "text": "If the Defending Pokémon tries to attack during your opponent's next turn, your opponent flips a coin. If tails, that attack does nothing.",
        "damage": "10",
        "convertedEnergyCost": 1
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
    "id": "base1-63",
    "name": "Squirtle",
    "nationalPokedexNumber": 7,
    "imageUrl": "https://images.pokemontcg.io/base1/63.png",
    "imageUrlHiRes": "https://images.pokemontcg.io/base1/63_hires.png",
    "types": [
      "Water"
    ],
    "supertype": "Pokémon",
    "subtype": "Basic",
    "hp": "40",
    "retreatCost": [
      "Colorless"
    ],
    "convertedRetreatCost": 1,
    "number": "63",
    "artist": "Mitsuhiro Arita",
    "rarity": "Common",
    "series": "Base",
    "set": "Base",
    "setCode": "base1",
    "attacks": [
      {
        "cost": [
          "Water"
        ],
        "name": "Bubble",
        "text": "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
        "damage": "10",
        "convertedEnergyCost": 1
      },
      {
        "cost": [
          "Water",
          "Colorless"
        ],
        "name": "Withdraw",
        "text": "Flip a coin. If heads, prevent all damage done to Squirtle during your opponent's next turn. (Any other effects of attacks still happen.)",
        "damage": "",
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
    "id": "base1-64",
    "name": "Starmie",
    "nationalPokedexNumber": 121,
    "imageUrl": "https://images.pokemontcg.io/base1/64.png",
    "imageUrlHiRes": "https://images.pokemontcg.io/base1/64_hires.png",
    "types": [
      "Water"
    ],
    "supertype": "Pokémon",
    "subtype": "Stage 1",
    "evolvesFrom": "Staryu",
    "hp": "60",
    "retreatCost": [
      "Colorless"
    ],
    "convertedRetreatCost": 1,
    "number": "64",
    "artist": "Keiji Kinebuchi",
    "rarity": "Common",
    "series": "Base",
    "set": "Base",
    "setCode": "base1",
    "attacks": [
      {
        "cost": [
          "Water",
          "Water"
        ],
        "name": "Recover",
        "text": "Discard 1 Water Energy card to Starmie in order to use this attack. Remove all damage counters from Starmie.",
        "damage": "",
        "convertedEnergyCost": 2
      },
      {
        "cost": [
          "Water",
          "Colorless",
          "Colorless"
        ],
        "name": "Star Freeze",
        "text": "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
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
    "id": "base1-65",
    "name": "Staryu",
    "nationalPokedexNumber": 120,
    "imageUrl": "https://images.pokemontcg.io/base1/65.png",
    "imageUrlHiRes": "https://images.pokemontcg.io/base1/65_hires.png",
    "types": [
      "Water"
    ],
    "supertype": "Pokémon",
    "subtype": "Basic",
    "hp": "40",
    "retreatCost": [
      "Colorless"
    ],
    "convertedRetreatCost": 1,
    "number": "65",
    "artist": "Keiji Kinebuchi",
    "rarity": "Common",
    "series": "Base",
    "set": "Base",
    "setCode": "base1",
    "attacks": [
      {
        "cost": [
          "Water"
        ],
        "name": "Slap",
        "text": "",
        "damage": "20",
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
    "id": "base1-66",
    "name": "Tangela",
    "nationalPokedexNumber": 114,
    "imageUrl": "https://images.pokemontcg.io/base1/66.png",
    "imageUrlHiRes": "https://images.pokemontcg.io/base1/66_hires.png",
    "types": [
      "Grass"
    ],
    "supertype": "Pokémon",
    "subtype": "Basic",
    "hp": "50",
    "retreatCost": [
      "Colorless",
      "Colorless"
    ],
    "convertedRetreatCost": 2,
    "number": "66",
    "artist": "Mitsuhiro Arita",
    "rarity": "Common",
    "series": "Base",
    "set": "Base",
    "setCode": "base1",
    "attacks": [
      {
        "cost": [
          "Grass",
          "Colorless"
        ],
        "name": "Bind",
        "text": "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
        "damage": "20",
        "convertedEnergyCost": 2
      },
      {
        "cost": [
          "Grass",
          "Grass",
          "Grass"
        ],
        "name": "Poisonpowder",
        "text": "The Defending Pokémon is now Poisoned.",
        "damage": "30",
        "convertedEnergyCost": 3
      }
    ],
    "weaknesses": [
      {
        "type": "Fire",
        "value": "×2"
      }
    ]
  },
  {
    "id": "base1-67",
    "name": "Voltorb",
    "nationalPokedexNumber": 100,
    "imageUrl": "https://images.pokemontcg.io/base1/67.png",
    "imageUrlHiRes": "https://images.pokemontcg.io/base1/67_hires.png",
    "types": [
      "Lightning"
    ],
    "supertype": "Pokémon",
    "subtype": "Basic",
    "hp": "40",
    "retreatCost": [
      "Colorless"
    ],
    "convertedRetreatCost": 1,
    "number": "67",
    "artist": "Keiji Kinebuchi",
    "rarity": "Common",
    "series": "Base",
    "set": "Base",
    "setCode": "base1",
    "attacks": [
      {
        "cost": [
          "Colorless"
        ],
        "name": "Tackle",
        "text": "",
        "damage": "10",
        "convertedEnergyCost": 1
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
    "id": "base1-68",
    "name": "Vulpix",
    "nationalPokedexNumber": 37,
    "imageUrl": "https://images.pokemontcg.io/base1/68.png",
    "imageUrlHiRes": "https://images.pokemontcg.io/base1/68_hires.png",
    "types": [
      "Fire"
    ],
    "supertype": "Pokémon",
    "subtype": "Basic",
    "hp": "50",
    "retreatCost": [
      "Colorless"
    ],
    "convertedRetreatCost": 1,
    "number": "68",
    "artist": "Ken Sugimori",
    "rarity": "Common",
    "series": "Base",
    "set": "Base",
    "setCode": "base1",
    "attacks": [
      {
        "cost": [
          "Fire",
          "Fire"
        ],
        "name": "Confuse Ray",
        "text": "Flip a coin. If heads, the Defending Pokémon is now Confused.",
        "damage": "10",
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
    "id": "base1-69",
    "name": "Weedle",
    "nationalPokedexNumber": 13,
    "imageUrl": "https://images.pokemontcg.io/base1/69.png",
    "imageUrlHiRes": "https://images.pokemontcg.io/base1/69_hires.png",
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
    "number": "69",
    "artist": "Mitsuhiro Arita",
    "rarity": "Common",
    "series": "Base",
    "set": "Base",
    "setCode": "base1",
    "attacks": [
      {
        "cost": [
          "Grass"
        ],
        "name": "Poison Sting",
        "text": "Flip a coin. If heads, Defending Pokémon is now Poisoned.",
        "damage": "10",
        "convertedEnergyCost": 1
      }
    ],
    "weaknesses": [
      {
        "type": "Fire",
        "value": "×2"
      }
    ]
  },
  {
    "id": "base1-70",
    "name": "Clefairy Doll",
    "imageUrl": "https://images.pokemontcg.io/base1/70.png",
    "imageUrlHiRes": "https://images.pokemontcg.io/base1/70_hires.png",
    "supertype": "Trainer",
    "subtype": "",
    "hp": "10",
    "number": "70",
    "artist": "Keiji Kinebuchi",
    "rarity": "Rare",
    "series": "Base",
    "set": "Base",
    "setCode": "base1",
    "text": [
      "Play Clefairy Doll as if it were a Basic Pokémon. While in play, Clefairy Doll counts as a Pokémon (instead of a Trainer card.) Clefairy Doll has no attacks, can't retreat, and can't be Asleep, Confused, Paralyzed, or Poisoned. If Clefairy Doll is Knocked Out, it doesn't count as a Knock Out Pokémon. At any time during tyour turn before your attack, you may discard Clefairy Doll."
    ]
  },
  {
    "id": "base1-71",
    "name": "Computer Search",
    "imageUrl": "https://images.pokemontcg.io/base1/71.png",
    "imageUrlHiRes": "https://images.pokemontcg.io/base1/71_hires.png",
    "supertype": "Trainer",
    "subtype": "",
    "number": "71",
    "artist": "Keiji Kinebuchi",
    "rarity": "Rare",
    "series": "Base",
    "set": "Base",
    "setCode": "base1",
    "text": [
      "Discard 2 other cards from your hand in order to search your deck for any card and put it into your hand. Shuffle your deck afterward."
    ]
  },
  {
    "id": "base1-72",
    "name": "Devolution Spray",
    "imageUrl": "https://images.pokemontcg.io/base1/72.png",
    "imageUrlHiRes": "https://images.pokemontcg.io/base1/72_hires.png",
    "supertype": "Trainer",
    "subtype": "",
    "number": "72",
    "artist": "Keiji Kinebuchi",
    "rarity": "Rare",
    "series": "Base",
    "set": "Base",
    "setCode": "base1",
    "text": [
      "Choose 1 of your own Pokémon in play and a Stage of Evolution. Discard all Evolution cards of that Stage or higher attached to that Pokémon. That Pokémon is no longer Asleep, Confused, Paralyzed, Poisoned, or anything else that might be the result of an attack (just as if you had evolved it)."
    ]
  },
  {
    "id": "base1-73",
    "name": "Impostor Professor Oak",
    "imageUrl": "https://images.pokemontcg.io/base1/73.png",
    "imageUrlHiRes": "https://images.pokemontcg.io/base1/73_hires.png",
    "supertype": "Trainer",
    "subtype": "",
    "number": "73",
    "artist": "Ken Sugimori",
    "rarity": "Rare",
    "series": "Base",
    "set": "Base",
    "setCode": "base1",
    "text": [
      "Your opponent shuffles his or her hand into his or her deck, then draws 7 cards."
    ]
  },
  {
    "id": "base1-74",
    "name": "Item Finder",
    "imageUrl": "https://images.pokemontcg.io/base1/74.png",
    "imageUrlHiRes": "https://images.pokemontcg.io/base1/74_hires.png",
    "supertype": "Trainer",
    "subtype": "",
    "number": "74",
    "artist": "Keiji Kinebuchi",
    "rarity": "Rare",
    "series": "Base",
    "set": "Base",
    "setCode": "base1",
    "text": [
      "Discard 2 other cards from your hand in order to put a Trainer card from your discard pile into your hand."
    ]
  },
  {
    "id": "base1-75",
    "name": "Lass",
    "imageUrl": "https://images.pokemontcg.io/base1/75.png",
    "imageUrlHiRes": "https://images.pokemontcg.io/base1/75_hires.png",
    "supertype": "Trainer",
    "subtype": "",
    "number": "75",
    "artist": "Ken Sugimori",
    "rarity": "Rare",
    "series": "Base",
    "set": "Base",
    "setCode": "base1",
    "text": [
      "You and your opponent show each other your hands, then shuffle all the trainer cards from your hands into your decks."
    ]
  },
  {
    "id": "base1-76",
    "name": "Pokémon Breeder",
    "imageUrl": "https://images.pokemontcg.io/base1/76.png",
    "imageUrlHiRes": "https://images.pokemontcg.io/base1/76_hires.png",
    "supertype": "Trainer",
    "subtype": "",
    "number": "76",
    "artist": "Ken Sugimori",
    "rarity": "Rare",
    "series": "Base",
    "set": "Base",
    "setCode": "base1",
    "text": [
      "Put a Stage 2 Evolution card from your hand on the matching Basic Pokémon. You can only play this card when you would be allowed to evolve that Pokémon anyway."
    ]
  },
  {
    "id": "base1-77",
    "name": "Pokémon Trader",
    "imageUrl": "https://images.pokemontcg.io/base1/77.png",
    "imageUrlHiRes": "https://images.pokemontcg.io/base1/77_hires.png",
    "supertype": "Trainer",
    "subtype": "",
    "number": "77",
    "artist": "Ken Sugimori",
    "rarity": "Rare",
    "series": "Base",
    "set": "Base",
    "setCode": "base1",
    "text": [
      "Trade 1 of the Basic Pokémon or Evolution cards in your hand for 1 of the Basic Pokémon or Evolution cards from your deck. Show both cards to your opponent. Shuffle your deck afterward."
    ]
  },
  {
    "id": "base1-78",
    "name": "Scoop Up",
    "imageUrl": "https://images.pokemontcg.io/base1/78.png",
    "imageUrlHiRes": "https://images.pokemontcg.io/base1/78_hires.png",
    "supertype": "Trainer",
    "subtype": "",
    "number": "78",
    "artist": "Keiji Kinebuchi",
    "rarity": "Rare",
    "series": "Base",
    "set": "Base",
    "setCode": "base1",
    "text": [
      "Choose 1 of your own Pokémon in play and return its Basic Pokémon card to your hand. (Discard all cards attached to that card.)"
    ]
  },
  {
    "id": "base1-79",
    "name": "Super Energy Removal",
    "imageUrl": "https://images.pokemontcg.io/base1/79.png",
    "imageUrlHiRes": "https://images.pokemontcg.io/base1/79_hires.png",
    "supertype": "Trainer",
    "subtype": "",
    "number": "79",
    "artist": "Keiji Kinebuchi",
    "rarity": "Rare",
    "series": "Base",
    "set": "Base",
    "setCode": "base1",
    "text": [
      "Discard 1 Energy card attached to 1 of your own Pokémon in order to choose 1 of your opponent's Pokémon and up to 2 Energy cards attached to it. Discard those energy cards."
    ]
  },
  {
    "id": "base1-80",
    "name": "Defender",
    "imageUrl": "https://images.pokemontcg.io/base1/80.png",
    "imageUrlHiRes": "https://images.pokemontcg.io/base1/80_hires.png",
    "supertype": "Trainer",
    "subtype": "",
    "number": "80",
    "artist": "Keiji Kinebuchi",
    "rarity": "Uncommon",
    "series": "Base",
    "set": "Base",
    "setCode": "base1",
    "text": [
      "Attach Defender to 1 of your Pokémon. At the end of your opponent's next turn, discard Defender. Damage done to that Pokémon by attacks is reduced by 20 (after applying Weakness and Resistance.)"
    ]
  },
  {
    "id": "base1-81",
    "name": "Energy Retrieval",
    "imageUrl": "https://images.pokemontcg.io/base1/81.png",
    "imageUrlHiRes": "https://images.pokemontcg.io/base1/81_hires.png",
    "supertype": "Trainer",
    "subtype": "",
    "number": "81",
    "artist": "Keiji Kinebuchi",
    "rarity": "Uncommon",
    "series": "Base",
    "set": "Base",
    "setCode": "base1",
    "text": [
      "Trade 1 of other cards in your hand for up to 2 basic Energy cards from your discard pile."
    ]
  },
  {
    "id": "base1-82",
    "name": "Full Heal",
    "imageUrl": "https://images.pokemontcg.io/base1/82.png",
    "imageUrlHiRes": "https://images.pokemontcg.io/base1/82_hires.png",
    "supertype": "Trainer",
    "subtype": "",
    "number": "82",
    "artist": "Keiji Kinebuchi",
    "rarity": "Uncommon",
    "series": "Base",
    "set": "Base",
    "setCode": "base1",
    "text": [
      "Your Active Pokémon is no longer Asleep, Confused, Paralyzed, or Poisoned."
    ]
  },
  {
    "id": "base1-83",
    "name": "Maintenance",
    "imageUrl": "https://images.pokemontcg.io/base1/83.png",
    "imageUrlHiRes": "https://images.pokemontcg.io/base1/83_hires.png",
    "supertype": "Trainer",
    "subtype": "",
    "number": "83",
    "artist": "Keiji Kinebuchi",
    "rarity": "Uncommon",
    "series": "Base",
    "set": "Base",
    "setCode": "base1",
    "text": [
      "Shuffle 2 of the other cards from your hand into your deck in order to draw a card."
    ]
  },
  {
    "id": "base1-84",
    "name": "PlusPower",
    "imageUrl": "https://images.pokemontcg.io/base1/84.png",
    "imageUrlHiRes": "https://images.pokemontcg.io/base1/84_hires.png",
    "supertype": "Trainer",
    "subtype": "",
    "number": "84",
    "artist": "Keiji Kinebuchi",
    "rarity": "Uncommon",
    "series": "Base",
    "set": "Base",
    "setCode": "base1",
    "text": [
      "Attach PlusPower to your Active Pokémonn. At the end of your turn, discard PlusPower. If this Pokémon's attack does damage to the defending Pokémon (after applying Weakness and Resistance), the attack does 10 more damage to the Defending Pokémon."
    ]
  },
  {
    "id": "base1-85",
    "name": "Pokémon Center",
    "imageUrl": "https://images.pokemontcg.io/base1/85.png",
    "imageUrlHiRes": "https://images.pokemontcg.io/base1/85_hires.png",
    "supertype": "Trainer",
    "subtype": "",
    "number": "85",
    "artist": "Keiji Kinebuchi",
    "rarity": "Uncommon",
    "series": "Base",
    "set": "Base",
    "setCode": "base1",
    "text": [
      "Remove all damage counters from all of your own Pokémon with damage counters on them, then discard all Energy cards attached to those Pokémon."
    ]
  },
  {
    "id": "base1-86",
    "name": "Pokémon Flute",
    "imageUrl": "https://images.pokemontcg.io/base1/86.png",
    "imageUrlHiRes": "https://images.pokemontcg.io/base1/86_hires.png",
    "supertype": "Trainer",
    "subtype": "",
    "number": "86",
    "artist": "Keiji Kinebuchi",
    "rarity": "Uncommon",
    "series": "Base",
    "set": "Base",
    "setCode": "base1",
    "text": [
      "Choose 1 Basic Pokémon card from your opponent's discard pile and put it on his or her Bench. (You can't play Pokémon Flute if your opponent's Bench is full.)"
    ]
  },
  {
    "id": "base1-87",
    "name": "Pokédex",
    "imageUrl": "https://images.pokemontcg.io/base1/87.png",
    "imageUrlHiRes": "https://images.pokemontcg.io/base1/87_hires.png",
    "supertype": "Trainer",
    "subtype": "",
    "number": "87",
    "artist": "Keiji Kinebuchi",
    "rarity": "Uncommon",
    "series": "Base",
    "set": "Base",
    "setCode": "base1",
    "text": [
      "Look at up to 5 cards from the top of your deck and rearrange them as you like."
    ]
  },
  {
    "id": "base1-88",
    "name": "Professor Oak",
    "imageUrl": "https://images.pokemontcg.io/base1/88.png",
    "imageUrlHiRes": "https://images.pokemontcg.io/base1/88_hires.png",
    "supertype": "Trainer",
    "subtype": "",
    "number": "88",
    "artist": "Ken Sugimori",
    "rarity": "Uncommon",
    "series": "Base",
    "set": "Base",
    "setCode": "base1",
    "text": [
      "Discard your hand, then draw 7 cards."
    ]
  },
  {
    "id": "base1-89",
    "name": "Revive",
    "imageUrl": "https://images.pokemontcg.io/base1/89.png",
    "imageUrlHiRes": "https://images.pokemontcg.io/base1/89_hires.png",
    "supertype": "Trainer",
    "subtype": "",
    "number": "89",
    "artist": "Keiji Kinebuchi",
    "rarity": "Uncommon",
    "series": "Base",
    "set": "Base",
    "setCode": "base1",
    "text": [
      "Put 1 Basic Pokémon card from your discard pile onto your Bench. Put damage counters on that Pokémon equal to half its (rounded down to the nearest 10). (You can't play Revive if your Bench is full.)"
    ]
  },
  {
    "id": "base1-90",
    "name": "Super Potion",
    "imageUrl": "https://images.pokemontcg.io/base1/90.png",
    "imageUrlHiRes": "https://images.pokemontcg.io/base1/90_hires.png",
    "supertype": "Trainer",
    "subtype": "",
    "number": "90",
    "artist": "Keiji Kinebuchi",
    "rarity": "Uncommon",
    "series": "Base",
    "set": "Base",
    "setCode": "base1",
    "text": [
      "Discard 1 Energy card attached to 1 of your own Pokémon in order to remove up to 4 damage counters from that Pokémon."
    ]
  },
  {
    "id": "base1-91",
    "name": "Bill",
    "imageUrl": "https://images.pokemontcg.io/base1/91.png",
    "imageUrlHiRes": "https://images.pokemontcg.io/base1/91_hires.png",
    "supertype": "Trainer",
    "subtype": "",
    "number": "91",
    "artist": "Ken Sugimori",
    "rarity": "Common",
    "series": "Base",
    "set": "Base",
    "setCode": "base1",
    "text": [
      "Draw 2 cards."
    ]
  },
  {
    "id": "base1-92",
    "name": "Energy Removal",
    "imageUrl": "https://images.pokemontcg.io/base1/92.png",
    "imageUrlHiRes": "https://images.pokemontcg.io/base1/92_hires.png",
    "supertype": "Trainer",
    "subtype": "",
    "number": "92",
    "artist": "Keiji Kinebuchi",
    "rarity": "Common",
    "series": "Base",
    "set": "Base",
    "setCode": "base1",
    "text": [
      "Choose 1 Energy card attached to 1 of your opponent's Pokémon and discard it."
    ]
  },
  {
    "id": "base1-93",
    "name": "Gust of Wind",
    "imageUrl": "https://images.pokemontcg.io/base1/93.png",
    "imageUrlHiRes": "https://images.pokemontcg.io/base1/93_hires.png",
    "supertype": "Trainer",
    "subtype": "",
    "number": "93",
    "artist": "Keiji Kinebuchi",
    "rarity": "Common",
    "series": "Base",
    "set": "Base",
    "setCode": "base1",
    "text": [
      "Choose 1 of your opponent's Benched Pokémon and switch it with his or her Active Pokémon."
    ]
  },
  {
    "id": "base1-94",
    "name": "Potion",
    "imageUrl": "https://images.pokemontcg.io/base1/94.png",
    "imageUrlHiRes": "https://images.pokemontcg.io/base1/94_hires.png",
    "supertype": "Trainer",
    "subtype": "",
    "number": "94",
    "artist": "Keiji Kinebuchi",
    "rarity": "Common",
    "series": "Base",
    "set": "Base",
    "setCode": "base1",
    "text": [
      "Remove up to 2 damage counters from 1 of your Pokémon."
    ]
  },
  {
    "id": "base1-95",
    "name": "Switch",
    "imageUrl": "https://images.pokemontcg.io/base1/95.png",
    "imageUrlHiRes": "https://images.pokemontcg.io/base1/95_hires.png",
    "supertype": "Trainer",
    "subtype": "",
    "number": "95",
    "artist": "Keiji Kinebuchi",
    "rarity": "Common",
    "series": "Base",
    "set": "Base",
    "setCode": "base1",
    "text": [
      "Switch 1 of your Benched Pokémon with your Active Pokémon."
    ]
  },
  {
    "id": "base1-96",
    "name": "Double Colorless Energy",
    "imageUrl": "https://images.pokemontcg.io/base1/96.png",
    "imageUrlHiRes": "https://images.pokemontcg.io/base1/96_hires.png",
    "supertype": "Energy",
    "subtype": "Special",
    "number": "96",
    "artist": "Keiji Kinebuchi",
    "rarity": "Uncommon",
    "series": "Base",
    "set": "Base",
    "setCode": "base1",
    "text": [
      "Provides Colorless Colorless energy. Doesn't count as a basic energy card."
    ]
  },
  {
    "id": "base1-97",
    "name": "Fighting Energy",
    "imageUrl": "https://images.pokemontcg.io/base1/97.png",
    "imageUrlHiRes": "https://images.pokemontcg.io/base1/97_hires.png",
    "supertype": "Energy",
    "subtype": "Basic",
    "number": "97",
    "artist": "Keiji Kinebuchi",
    "rarity": "Common",
    "series": "Base",
    "set": "Base",
    "setCode": "base1"
  },
  {
    "id": "base1-98",
    "name": "Fire Energy",
    "imageUrl": "https://images.pokemontcg.io/base1/98.png",
    "imageUrlHiRes": "https://images.pokemontcg.io/base1/98_hires.png",
    "supertype": "Energy",
    "subtype": "Basic",
    "number": "98",
    "artist": "Keiji Kinebuchi",
    "rarity": "Common",
    "series": "Base",
    "set": "Base",
    "setCode": "base1"
  },
  {
    "id": "base1-99",
    "name": "Grass Energy",
    "imageUrl": "https://images.pokemontcg.io/base1/99.png",
    "imageUrlHiRes": "https://images.pokemontcg.io/base1/99_hires.png",
    "supertype": "Energy",
    "subtype": "Basic",
    "number": "99",
    "artist": "Keiji Kinebuchi",
    "rarity": "Common",
    "series": "Base",
    "set": "Base",
    "setCode": "base1"
  },
  {
    "id": "base1-100",
    "name": "Lightning Energy",
    "imageUrl": "https://images.pokemontcg.io/base1/100.png",
    "imageUrlHiRes": "https://images.pokemontcg.io/base1/100_hires.png",
    "supertype": "Energy",
    "subtype": "Basic",
    "number": "100",
    "artist": "Keiji Kinebuchi",
    "rarity": "Common",
    "series": "Base",
    "set": "Base",
    "setCode": "base1"
  },
  {
    "id": "base1-101",
    "name": "Psychic Energy",
    "imageUrl": "https://images.pokemontcg.io/base1/101.png",
    "imageUrlHiRes": "https://images.pokemontcg.io/base1/101_hires.png",
    "supertype": "Energy",
    "subtype": "Basic",
    "number": "101",
    "artist": "Keiji Kinebuchi",
    "rarity": "Common",
    "series": "Base",
    "set": "Base",
    "setCode": "base1"
  },
  {
    "id": "base1-102",
    "name": "Water Energy",
    "imageUrl": "https://images.pokemontcg.io/base1/102.png",
    "imageUrlHiRes": "https://images.pokemontcg.io/base1/102_hires.png",
    "supertype": "Energy",
    "subtype": "Basic",
    "number": "102",
    "artist": "Keiji Kinebuchi",
    "rarity": "Common",
    "series": "Base",
    "set": "Base",
    "setCode": "base1"
  }
]

module.exports = {
    baseSetCards: cards
}