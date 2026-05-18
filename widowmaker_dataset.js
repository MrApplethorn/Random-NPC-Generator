const playerObjectives = [
  {name: "Deathmatch*", description: "The players need to destroy the opposition."},
  {name: "Sabotage*", description: "The players need to remove someone or something from the equation, preferable before the enemy uses it in their ritual."},
  {name: "Daring Escape*", description: "The players need to get to a safe point."},
  {name: "Hold the Fort*", description: "The players need to keep enemies out until reinforcements arrive."},
  {name: "Waves of Bad Guys*", description: "The players need to survive as long as possible as a new wave of monsters arrive every round."},
  {name: "Escort*", description: "The players need to defend another (player) character, probably until it can do it's thing to change the tides of battle."},
  {name: "Base Defense*", description: "The players need to defend an item in their home or some other place from being stolen or otherwise removed."},
  {name: "Yoink and Skedaddle*", description: "The players need to grab a specific item and get out, preferably before the enemies notices them."},
  {name: "Peace Makers*", description: "The players need to make sure that two parties do not come to blows."},
  {name: "The Arrest*", description: "The players need to incapacitate and capture one of the enemies."}
];

const enemyObjectives = [
  {name: "Skirmish*", description: "The enemy is here to kill the players, easy as that."},
  {name: "Ambush*", description: "The enemy is (partly) hidden at the start of combat, and will use that fact to skew the combat in their favor."},
  {name: "Targeted Strike*", description: "The enemy is too strong, therefore the players are here to weaken, not kill them."},
  {name: "Horde of Bad Guys*", description: "The enemy is a very big group of weak creatures, do the players burn through their resources so as to quickly move to the next problem."},
  {name: "Elite Team*", description: "The enemy is a small group of iconic enemies banded together to go toe to toe with the players."},
  {name: "Stomping Ground*", description: "The enemy is weak but doesn't know it yet, make the players feel way stronger than they are."},
  {name: "Boss Battle*", description: "The enemy is a single large threat, sometimes with a few underlings."},
  {name: "Puzzle*", description: "The enemy can not be brought down in a simple war of attrition, there is a trick to it."}
];

const environments = [
  {name: "Red Barrels*", description: "Containers that explode when hit."},
  {name: "Siege Weapons*", description: "Large immovable weapons that reload slowly."},
  {name: "Ammo Boxes*", description: "Powerful limited-use items."},
  {name: "Big Drops*", description: "Cliffs or heights that creatures can be pushed off of."},
  {name: "Doors*", description: "Chokepoints that cut up the battlefield."},
  {name: "Interactables*", description: "Levers or buttons that change the battlefield."},
  {name: "Terrain*", description: "Regions that are difficult to traverse or are damaging."},
  {name: "Platforms*", description: "Differences in height."}
];

const enemyRoles = [
  {name: "Ambusher*", description: "This enemy can hide, become invisible, or otherwise disappear from sight."},
  {name: "Artillery*", description: "This enemy is great at long range. Most are weak in melee and will try to move away from any foes within 30 feet."},
  {name: "Brute*", description: "This enemy's damage cannot be ignored. It hits hard and has a lot of hit points."},
  {name: "Controller*", description: "This enemy has the ability to debuff, hamper, and move players."},
  {name: "Support*", description: "This enemy can summon reinforcements, buff their allies, and grand allies extra movement and actions."},
  {name: "Soldier*", description: "This enemy engages those who are strong in melee to protect their weaker allies."},
  {name: "Skirmisher*", description: "This enemy prefers to bother those weaker in melee and can outrun and outmaneuver most player characters."}
];

const enemyTypes = ["Aberration", "Beast", "Celestial", "Construct", "Dragon", "Elemental", "Fey", "Fiend", "Giant", "Humanoid", "Monstrosity", "Ooze", "Plant", "Undead"];

const enemyDamages = ["Acid", "Bludgeoning", "Cold", "Fire", "Force", "Lightning", "Necrotic", "Piercing", "Poison", "Psychic", "Radiant", "Slashing", "Thunder"];

// Configure which datasets to use for each reel
const reelConfig = {
  playerObjective: {
    datasets: [playerObjectives],
    spinDuration: 1800,
    hasOverlay: true,
    isWide: false,
    label: "Player Objective"
  },
  enemyObjective: {
    datasets: [enemyObjectives],
    spinDuration: 2000,
    hasOverlay: true,
    isWide: false,
    label: "Enemy Objective"
  },
  environment: {
    datasets: [environments, environments, environments],
    spinDuration: 2200,
    hasOverlay: true,
    isWide: true,
    label: "Obstacle"
  },
  enemyRole: {
    datasets: [enemyRoles, enemyRoles, enemyRoles],
    spinDuration: 2400,
    hasOverlay: true,
    isWide: true,
    label: "Enemy Roles"
  },
  enemyType: {
    datasets: [enemyTypes, enemyTypes],
    spinDuration: 2600,
    hasOverlay: false,
    isWide: false,
    label: "Enemy Types"
  },
  enemyDamage: {
    datasets: [enemyDamages, enemyDamages],
    spinDuration: 2800,
    hasOverlay: false,
    isWide: false,
    label: "Damage Synergies"
  }
};
