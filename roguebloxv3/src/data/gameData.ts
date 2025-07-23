// Rogueblox game data - accurate information from wiki

export const races = [
  { value: "terran", label: "Terran", rarity: "common" },
  { value: "apex", label: "Apex", rarity: "common" },
  { value: "elf", label: "Elf", rarity: "common" },
  { value: "goblin", label: "Goblin", rarity: "common" },
  { value: "florian", label: "Florian", rarity: "common" },
  { value: "cactorian", label: "Cactorian", rarity: "common" },
  { value: "lihzahrd", label: "Lihzahrd", rarity: "common" },
  { value: "avian", label: "Avian", rarity: "rare" },
  { value: "phantom", label: "Phantom", rarity: "rare" },
  { value: "nomad", label: "Nomad", rarity: "rare" },
  { value: "hylotl", label: "Hylotl", rarity: "rare" },
  { value: "dwarf", label: "Dwarf", rarity: "legendary" },
  { value: "orc", label: "Orc", rarity: "legendary" },
  { value: "kaioshin", label: "Kaioshin", rarity: "legendary" },
  { value: "novakid", label: "Novakid", rarity: "legendary" },
  { value: "abssese", label: "Abssese", rarity: "legendary" }
];

export const subraces = [
  { value: "none", label: "None" },
  { value: "vampire", label: "Vampire", race: "any", description: "Obtainable subrace" },
  { value: "zombie", label: "Zombie", race: "any", description: "Obtainable subrace" },
  { value: "specter", label: "Specter", race: "any", description: "Obtainable subrace" }
];

export const gifts = [
  { value: "none", label: "No Gift" },
  { value: "recovery", label: "Gift of Recovery", description: "Progressed by healing - doubled health regen, mana campfire" },
  { value: "preservation", label: "Gift of Preservation", description: "Progressed by picking up items - void bag, keep items on death" },
  { value: "sight", label: "Gift of Sight", description: "See player builds, invisible players, ESP, healthbars" }
];

export const shrines = [
  { value: "none", label: "No Shrine" },
  { value: "life", label: "Shrine of Life", description: "-10% Outgoing/Incoming Damage" },
  { value: "purity", label: "Shrine of Purity", description: "+15% Spell Range, -25% Mana Charge Speed" },
  { value: "dexterity", label: "Shrine of Dexterity", description: "+2.15 Speed, -6% Outgoing Damage" },
  { value: "doom", label: "Shrine of Doom", description: "+9% Outgoing Damage, -2.15 Speed" },
  { value: "salvation", label: "Shrine of Salvation", description: "2x Alignment gain" },
  { value: "tribulation", label: "Shrine of Tribulation", description: "+20% PVE damage, -10% PVP damage" },
  { value: "frost", label: "Shrine of Frost", description: "Temperature changes 50% slower" },
  { value: "ferocity", label: "Shrine of Ferocity", description: "+10% damage dealt, +10% incoming damage" }
];

export const baseClasses = [
  { value: "none", label: "Select Base Class" },
  { value: "fighter", label: "Fighter", weapon: "Fist", description: "Melee combat specialist" },
  { value: "mage", label: "Mage", weapon: "Staff", description: "Arcane magic user" },
  { value: "rogue", label: "Rogue", weapon: "Dagger", description: "Stealth and agility focused" },
  { value: "spearman", label: "Spearman", weapon: "Spear", description: "Polearm combat expert" },
  { value: "swordsman", label: "Swordsman", weapon: "Sword", description: "Sword fighting specialist" },
  { value: "alchemist", label: "Alchemist", weapon: "Potion", description: "Poison and nature magic" },
  { value: "gunman", label: "Gunman", weapon: "Gun", description: "Ranged firearm expert" },
  { value: "bard", label: "Bard", weapon: "Instrument", description: "Music-based abilities" }
];

export const superClasses = [
  { value: "none", label: "Select Super Class" },
  { value: "sage", label: "Sage", baseClass: "fighter", description: "Enlightened fighter" },
  { value: "brawler", label: "Brawler", baseClass: "fighter", description: "Unarmed combat master" },
  { value: "cleric", label: "Cleric", baseClass: "mage", description: "Divine magic user" },
  { value: "seeker", label: "Seeker", baseClass: "rogue", description: "Information gatherer" },
  { value: "assassin", label: "Assassin", baseClass: "rogue", description: "Deadly killer" },
  { value: "sea-knight", label: "Sea Knight", baseClass: "spearman", description: "Ocean warrior" },
  { value: "gladiator", label: "Gladiator", baseClass: "spearman", description: "Arena fighter" },
  { value: "white-knight", label: "White Knight", baseClass: "swordsman", description: "Holy swordsman" },
  { value: "executioner", label: "Executioner", baseClass: "swordsman", description: "Ruthless killer" },
  { value: "daemon-proselyte", label: "Daemon Proselyte", baseClass: "swordsman", description: "Demonic warrior" },
  { value: "druid", label: "Druid", baseClass: "alchemist", description: "Nature guardian" },
  { value: "duelist", label: "Duelist", baseClass: "gunman", description: "Skilled marksman" },
  { value: "virtuoso", label: "Virtuoso", baseClass: "bard", description: "Master musician" }
];

export const ultraClasses = [
  { value: "none", label: "Select Ultra Class" },
  { value: "world-sage", label: "World Sage", description: "Ultimate knowledge master" },
  { value: "superhuman", label: "Superhuman", description: "Peak physical prowess" },
  { value: "priest", label: "Priest", description: "Divine magic master" },
  { value: "world-seeker", label: "World Seeker", description: "Ultimate information gatherer" },
  { value: "kingslayer", label: "Kingslayer", description: "Assassin of royalty" },
  { value: "poseidon-knight", label: "Poseidon Knight", description: "Ocean god warrior" },
  { value: "spartan", label: "Spartan", description: "Elite warrior" },
  { value: "grand-knight", label: "Grand Knight", description: "Supreme holy warrior" },
  { value: "destroyer", label: "Destroyer", description: "Ultimate destroyer" },
  { value: "daemonsmith", label: "Daemonsmith", description: "Demonic crafter" },
  { value: "dryad", label: "Dryad", description: "Nature spirit" },
  { value: "coyote", label: "Coyote", description: "Desert gunslinger" }
];

export const weapons = [
  { value: "none", label: "No Weapon" },
  // Fist weapons
  { value: "copper-caestus", label: "Copper Caestus", type: "Fist", damage: "4.35" },
  { value: "iron-caestus", label: "Iron Caestus", type: "Fist", damage: "4.78" },
  { value: "astral-gauntlets", label: "Astral Gauntlets", type: "Fist", damage: "5.00" },
  { value: "demonite-caestus", label: "Demonite Caestus", type: "Fist", damage: "5.00" },
  { value: "brawler-wraps", label: "Brawler Wraps", type: "Fist", damage: "5.25" },
  // Sword weapons
  { value: "copper-sword", label: "Copper Sword", type: "Sword", damage: "4.65" },
  { value: "iron-sword", label: "Iron Sword", type: "Sword", damage: "5.25" },
  { value: "wroughtsilver-sword", label: "Wroughtsilver Sword", type: "Sword", damage: "6.00" },
  { value: "cains-fang", label: "Cain's Fang", type: "Sword", damage: "6.50" },
  { value: "meowmere", label: "Meowmere", type: "Sword", damage: "7.00" },
  { value: "katana", label: "Katana", type: "Sword", damage: "6.00" },
  { value: "excalibur", label: "Excalibur", type: "Sword", damage: "6.10" },
  // Spear weapons
  { value: "iron-spear", label: "Iron Spear", type: "Spear", damage: "6.50" },
  { value: "demonite-spear", label: "Demonite Spear", type: "Spear", damage: "6.70" },
  { value: "merchant-dory", label: "Merchant Dory", type: "Spear", damage: "7.40" },
  { value: "tepozachille", label: "Tepozachille", type: "Spear", damage: "8.00" },
  { value: "trident", label: "Trident", type: "Spear", damage: "7.00" },
  { value: "dory", label: "Dory", type: "Spear", damage: "7.50" },
  // Dagger weapons
  { value: "iron-dagger", label: "Iron Dagger", type: "Dagger", damage: "3.35" },
  { value: "venomblade", label: "Venomblade", type: "Dagger", damage: "3.75" },
  { value: "rusted-kitchen-knife", label: "Rusted Kitchen Knife", type: "Dagger", damage: "3.60" },
  // Greatsword weapons
  { value: "battleaxe", label: "Battleaxe", type: "Greatsword", damage: "6.00" },
  { value: "gnackshard", label: "Gnackshard", type: "Greatsword", damage: "9.00" },
  { value: "kanabo", label: "Kanabo", type: "Greatsword", damage: "7.50" },
  { value: "icebreaker", label: "Icebreaker", type: "Greatsword", damage: "7.00" },
  { value: "odachi", label: "Odachi", type: "Greatsword", damage: "7.20" }
];

export const enchants = [
  { value: "none", label: "No Enchant" },
  { value: "scorching", label: "Scorching", description: "Inflicts burning for 5 seconds" },
  { value: "viral", label: "Viral", description: "Inflicts poison on attacks" },
  { value: "frostform", label: "Frostform", description: "Inflicts frost stacks on attacks" },
  { value: "piercing", label: "Piercing", description: "Applies after-cut that repeats damage" },
  { value: "lifestealing", label: "Lifestealing", description: "Converts attack damage into healing" },
  { value: "agile", label: "Agile", description: "Grants 0.5 speed for 2-3 seconds on attack" },
  { value: "haemophilic", label: "Haemophilic", description: "Inflicts bleeding on attack" },
  { value: "anulling", label: "Anulling", description: "Increased posture and chip damage vs mobs" },
  { value: "blossoming", label: "Blossoming", description: "Applies flower stacks, poison at 5 stacks" },
  { value: "mindbreaking", label: "Mindbreaking", description: "Inflicts insanity, more damage when insane" },
  { value: "astralite", label: "Astralite", description: "Inflicts astralite for 10 seconds" },
  { value: "chainbound", label: "Chainbound", description: "Pulls target back for more attacks" },
  { value: "ashing", label: "Ashing", description: "Applies ash, reduces mana charge rate" },
  { value: "honeymelt", label: "HoneyMelt", description: "Applies honey on attacks" }
];

export const reforges = [
  { value: "none", label: "No Reforge" },
  // Weapon reforges
  { value: "sharp", label: "Sharp", description: "+20% Damage" },
  { value: "epic", label: "Epic", description: "+14% Damage, +5% Swing Speed, +0.2 Range, +5 Physical PEN" },
  { value: "spicy", label: "Spicy", description: "+5% Damage, +5% Swing Speed, -10% Endlag, +5 Physical PEN" },
  { value: "heroic", label: "Heroic", description: "+10% Damage, +5% Swing Speed, -5% Endlag, +0.4 Range" },
  { value: "fair", label: "Fair", description: "+4% Damage, +4% Swing Speed, -4% Endlag, +10% Chip Damage" },
  { value: "legendary", label: "Legendary", description: "+15% Damage, +8.5% Swing Speed, -10% Endlag" },
  { value: "fast", label: "Fast", description: "+10% Swing Speed, -10% Endlag" },
  { value: "odd", label: "Odd", description: "-8% Swing Speed, -8% Endlag, +1 Range" },
  { value: "gentle", label: "Gentle", description: "+3% Damage, +6% Swing Speed" },
  { value: "broken", label: "Broken", description: "-10% Damage, -5% Swing Speed, +35% Chip Damage" },
  // Armor reforges
  { value: "heavy", label: "Heavy", description: "+2.5 Physical ARM, +1.25 Magical ARM, -0.4 Speed" },
  { value: "spiky", label: "Spiky", description: "-1 Health, +3 Physical PEN" },
  { value: "mythic", label: "Mythic", description: "+2 Physical PEN, +1 Magical PEN" },
  { value: "titanic", label: "Titanic", description: "+1.25 Physical ARM, +2.5 Magical ARM, -0.4 Speed" },
  { value: "clean", label: "Clean", description: "+2 Health, +1 Magical ARM, +1 Magical PEN" },
  { value: "light", label: "Light", description: "+2 Health, +0.5 Speed" },
  { value: "pure", label: "Pure", description: "+2 Physical PEN, +1 Magical PEN" },
  { value: "fierce", label: "Fierce", description: "+2 Health, +1 Physical ARM, +1 Physical PEN" },
  { value: "attuned", label: "Attuned", description: "-1 Health, +3 Magical PEN" }
];

export const relics = [
  { value: "none", label: "No Relic", stars: 0 },
  { value: "demon-heart", label: "Demon Heart", stars: 0, description: "+1 Relic Star" },
  // 1 Star relics
  { value: "shark-tooth-necklace", label: "Shark Tooth Necklace", stars: 1, description: "+12% Physical PEN" },
  { value: "power-glove", label: "Power Glove", stars: 1, description: "Criticals deal 15% more damage, 25% lower CD" },
  { value: "ring-of-scyia", label: "Ring of Scyia", stars: 1, description: "6% more damage to enemies from behind" },
  { value: "blue-harpy-feather", label: "Blue Harpy Feather", stars: 1, description: "Reduces critical attack slowdown" },
  { value: "slime-in-bottle", label: "Slime in a Bottle", stars: 1, description: "Criticals slow opponent, +25% incoming PEN" },
  { value: "demonite-horseshoe", label: "Demonite Horseshoe", stars: 1, description: "Critical resets dash cooldown" },
  { value: "bunny-foot", label: "Bunny's Foot", stars: 1, description: "+1 Speed" },
  { value: "ring-of-hermes", label: "Ring of Hermes", stars: 1, description: "6% more damage with speed boost" },
  { value: "flashcharm", label: "Flashcharm", stars: 1, description: "Teleport to target on final M1 with speed boost" },
  { value: "zephyr-ring", label: "Zephyr Ring", stars: 1, description: "Knockbacks bring enemies to you with 3+ speed stacks" },
  // 2 Star relics
  { value: "red-harpy-feather", label: "Red Harpy Feather", stars: 2, description: "Wall hits cause knockdown instead of ragdoll" },
  { value: "spiked-wrist-guard", label: "Spiked Wrist Guard", stars: 2, description: "Perfect blocks reflect damage" },
  { value: "cobalt-shield", label: "Cobalt Shield", stars: 2, description: "Reduced knockback, -25% ragdoll duration" },
  { value: "glacial-necklace", label: "Glacial Necklace", stars: 2, description: "Perfect blocking freezes nearby enemies" },
  { value: "hunters-brace", label: "Hunter's Brace", stars: 2, description: "Perfect-block dodge-only attacks" },
  { value: "cloud-in-bottle", label: "Cloud in a Bottle", stars: 2, description: "Double jump ability" },
  { value: "windshrouded-sheath", label: "Windshrouded Sheath", stars: 2, description: "Speed boosts add together x5, gain crit chance" },
  { value: "war-banner", label: "War Banner", stars: 2, description: "Summon banner on monster kill, +30% damage to monsters" },
  { value: "serrated-braclet", label: "Serrated Braclet", stars: 2, description: "Gain bleed chance equal to PEN" },
  { value: "flagellant-whip", label: "Flagellant's Whip", stars: 2, description: "Bleed procs cause self-bleed, gain PEN" },
  { value: "blood-jar", label: "Blood Jar", stars: 2, description: "Heal when damaging with bleed" },
  { value: "bloody-dagger", label: "Bloody Dagger", stars: 2, description: "Bleed chance equal to chip damage %" },
  { value: "toxic-pocketwatch", label: "Toxic Pocketwatch", stars: 2, description: "Poison increases ability cooldowns" },
  { value: "rosethorn-broche", label: "Rosethorn Broche", stars: 2, description: "Consume poison stack for extra damage" },
  { value: "sewerscum-vial", label: "Sewerscum Vial", stars: 2, description: "Poison reduces target armor" },
  { value: "fire-sprite", label: "Fire Sprite", stars: 2, description: "Ragdolling sets enemy on fire" },
  { value: "focused-flames", label: "Focused Flames", stars: 2, description: "Convert fire to blue fire" },
  { value: "mark-of-searing", label: "Mark of Searing", stars: 2, description: "Burning enemies take +2 damage from attacks" },
  { value: "blackpowder-pouch", label: "Blackpowder Pouch", stars: 2, description: "Burning enemies explode when ragdolled" },
  { value: "honey-jar", label: "Honey Jar", stars: 2, description: "Honey grants health regen" },
  { value: "honeystick-charm", label: "Honeystick Charm", stars: 2, description: "Gain armor when hit by honey-afflicted enemy" },
  { value: "band-of-recovery", label: "Band of Recovery", stars: 2, description: "Get up from knockdown 50% faster" },
  { value: "lunatic", label: "Lunatic", stars: 2, description: "Permanently close to insanity" }
];

export const armor = [
  // Head armor
  { value: "none", label: "No Armor", slot: "head" },
  { value: "heirarchs-crest", label: "Heirarch's Crest", slot: "head", stats: "+3 Health, +5 Physical ARM, +1 Magical ARM, +2.5 Magical PEN, +0.5 Speed" },
  { value: "prowler-headdress", label: "Prowler Headdress", slot: "head", stats: "+4 Health, +2 Physical ARM, +1.5 Physical PEN, +2 Magical ARM, +2.5 Mob DMG, +0.5 Speed" },
  { value: "shunned-wide-brim", label: "Shunned Wide Brim", slot: "head", stats: "+3 Health, +3 Physical ARM, +3 Magical ARM, +2 Magical PEN, +3.5 Mob DMG" },
  { value: "devils-casket", label: "Devil's Casket", slot: "head", stats: "+2 Physical ARM, +2 Magical ARM, +3.5 Magical PEN, -1 Speed" },
  { value: "blue-fedora", label: "Blue Fedora", slot: "head", stats: "+5 Health" },
  { value: "silverstar-cowboy-hat", label: "Silverstar Cowboy Hat", slot: "head", stats: "+1 Health, +1 Physical ARM, +1 Physical PEN, +1 Magical PEN, +0.25 Speed" },
  { value: "graveguard-helmet", label: "Graveguard Helmet", slot: "head", stats: "+3 Health, +1 Physical ARM, +1 Magical ARM, +1.75 Mob DMG" },
  { value: "miner-headgear", label: "Miner Headgear", slot: "head", stats: "+2 Health, +1 Physical ARM, +1 Magical ARM" },
  { value: "goldstar-cowboy-hat", label: "Goldstar Cowboy Hat", slot: "head", stats: "+1 Health, +1 Physical ARM, +1 Magical ARM, +1 Magical PEN, +0.25 Speed" },
  { value: "rot-doctor-mask", label: "Rot Doctor Mask", slot: "head", stats: "+1 Health, +1 Physical PEN, +5 Magical ARM, +4.5 Magical PEN, +2 Mob DMG" },
  { value: "mysterious-mask", label: "Mysterious Mask", slot: "head", stats: "+6 Health, +2 Physical PEN" },
  { value: "outlaw-cowl", label: "Outlaw Cowl", slot: "head", stats: "+2 Health, +2 Physical PEN, +0.35 Speed" },
  { value: "cavion-mage", label: "Cavion Mage", slot: "head", stats: "+2 Health, +3 Magical PEN, +0.5 Speed" },
  { value: "samurai-helmet", label: "Samurai Helmet", slot: "head", stats: "+5 Health, +3 Physical ARM, +2 Physical PEN, +1 Magical ARM" },
  { value: "sailors-tricorn", label: "Sailors Tricorn", slot: "head", stats: "+4 Health, +1 Physical PEN, +2 Magical ARM, +1 Magical PEN" },
  
  // Chest armor
  { value: "expeditioners-dress", label: "Expeditioner's Dress", slot: "chest", stats: "+5 Health, +4 Physical ARM, +2 Magical ARM, +1 Magical PEN" },
  { value: "expeditioners-coat", label: "Expeditioner's Coat", slot: "chest", stats: "+10 Health, +5 Physical ARM, +5 Magical ARM, +1.25 Speed" },
  { value: "heriarch-honeycomb", label: "Heriarch's Honeycomb", slot: "chest", stats: "+6 Health, +6 Physical ARM, +3 Magical ARM, +4 Magical PEN" },
  { value: "graveyard-pauldrons", label: "Graveyard Pauldrons", slot: "chest", stats: "+5 Health, +1 Physical ARM, +7 Magical ARM, +2.5 Mob DMG" },
  { value: "rot-doctor-coat", label: "Rot Doctor Coat", slot: "chest", stats: "+6 Health, +2 Physical ARM, +6 Magical ARM, +6 Magical PEN, +5 Mob DMG" },
  { value: "poncho", label: "Poncho", slot: "chest", stats: "+5 Health, +4 Magical ARM, +2 Magical PEN" },
  { value: "equinox-robes", label: "Equinox Robes", slot: "chest", stats: "+5 Health, +2 Physical ARM, +3 Magical ARM, +3 Magical PEN, +0.75 Speed" },
  { value: "sage-captain-coat", label: "Sage Captain Coat", slot: "chest", stats: "+7 Health, +3 Physical ARM, +4 Physical PEN, +3 Magical ARM, +1 Magical PEN" },
  { value: "samurai-chestplate", label: "Samurai Chestplate", slot: "chest", stats: "+6 Health, +6 Physical ARM, +4 Physical PEN, +2 Magical ARM" },
  { value: "proselyte-coat", label: "Proselyte Coat", slot: "chest", stats: "+8 Health, +4 Physical ARM, +1.5 Physical PEN, +4 Magical ARM, +1.5 Magical PEN, +0.75 Speed" },
  { value: "proselyte-straps", label: "Proselyte Straps", slot: "chest", stats: "+3 Health, +2 Physical ARM, +3 Physical PEN, +2 Magical ARM, +3 Magical PEN, +0.75 Speed" },
  
  // Legs armor
  { value: "graveguard-boots", label: "Graveguard Boots", slot: "legs", stats: "+2 Health, +2 Magical ARM, +0.5 Mob DMG, +0.5 Speed" },
  { value: "heirarchs-sabatons", label: "Heirarch's Sabatons", slot: "legs", stats: "+2 Health, +3 Physical ARM, +2 Magical ARM, +2 Magical PEN, +1 Speed" },
  { value: "mercenary-boots", label: "Mercenary Boots", slot: "legs", stats: "+1 Health, +3 Physical ARM, +1 Magical ARM, +1.5 Mob DMG" },
  { value: "rot-doctor-boots", label: "Rot Doctor Boots", slot: "legs", stats: "+2 Health, +1 Physical ARM, +3 Magical ARM, +2 Magical PEN, +2.5 Mob DMG, +1 Speed" },
  { value: "proselyte-kama", label: "Proselyte Kama", slot: "legs", stats: "+2 Health, +2 Physical ARM, +1 Physical PEN, +2 Magical ARM, +1 Magical PEN, +0.5 Speed" },
  { value: "samurai-leggings", label: "Samurai Leggings", slot: "legs", stats: "+2 Health, +5.5 Physical ARM, +2 Physical PEN, +2.25 Magical ARM, +0.6 Speed" },
  { value: "botanic-expeditioner-kama", label: "Botanic Expeditioner's Kama", slot: "legs", stats: "+3 Health, +1 Physical ARM, +0.5 Magical ARM, +0.5 Magical PEN, +0.75 Speed" },
  { value: "rogue-expeditioner-kama", label: "Rogue Expeditioner's Kama", slot: "legs", stats: "+3 Health, +1 Physical ARM, +1 Magical ARM, +1.5 Speed" }
];