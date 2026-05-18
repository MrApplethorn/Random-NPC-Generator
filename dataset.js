const traits = ["Child", "Genius", "Zealot", "Academic", "Adventurer", "Businessperson", "Criminal", "Entertainer", "Soldier", "Cultist", "Guild Member", "Politician", "Royalty", "Artist", "Counselor", "Crafter", "Dilettante", "Laborer", "Leader", "Medic", "Merchant", "Driver", "Scholar", "Scientist", "Warrior", "Wizard", "Brigand", "Con Artist", "Torturer", "Rebel", "Crime Lord", "Captain", "Judge", "Thief", "Puppet-Master", "Governor", "King", "Noble", "Priest", "Anarchist", "Conspirator", "Gang Leader", "Interrogator", "Blackmailer", "Burglar", "Shaman", "Tactician", "Prankster", "Assassin", "Busybody", "Heir", "Hunter", "Cult Leader", "Immortal", "Nurse", "Necromancer", "Theater Owner", "Ghost", "Charmer", "Acolyte", "Enforcer", "Relic Hunter", "Loner", "Pirate", "Thug", "Queen", "Recluse", "Pretender", "Former Hero", "Philanthropist", "Mascot", "Benefactor", "Spy", "Hustler", "Prostitute", "Blacksmith", "Guardian", "Librarian", "Miner", "Senator", "Purveyor", "Archivist", "Sculptor", "Patriot", "Widow", "Preacher", "Treasure Hunter", "Successor", "Innkeeper", "Mage", "Hero", "Hedge Wizard", "Farmer", "Visionary", "Bureaucrat", "Negotiator", "Investigator", "Guard", "Wanderer", "Courtier", "Constable", "General", "Sage", "Advisor", "Prodigy", "Warden", "Courier", "Smuggler", "Socialite", "Quartermaster", "Harbormaster", "Debutante", "Actor", "Seamstress", "Performer", "Surgeon", "Freedom Fighter", "Cat Burglar", "Researcher", "Reporter", "Tribesperson", "Veteran", "Healer", "Minstrel", "Spirit", "Apothecary", "Fortune Teller", "Boatman", "Witch", "Carpenter", "Gladiator", "Diviner", "Falconer", "Imposter", "Chosen One", "Lawyer", "Singer", "Fence", "Friar", "Shopkeeper", "Sheriff", "Oracle", "Seer", "Bounty Hunter", "Butler", "Trapfinder", "Weaponsmith", "Privateer", "Explorer", "Dancer", "Knight", "Prince(ss)", "Scout", "Silversmith", "Nun", "Financier", "Broker", "Patron", "Prophet"];

const keywords = ["Hideous", "Humorous", "Impoverished", "Mysterious", "Notorious", "Power Hungry", "Saintly", "Wealthy", "Genius", "Eccentric", "Famous", "Focal", "Primal", "Religious", "Charming", "Abhorrent", "Aggressive", "Ancient", "Magical", "Beautiful", "Outdoors", "Academic", "Ambitious", "Stealthy", "Anxious", "Arrogant", "Bitter", "Bloodthirsty", "Blunt", "Bold", "Brilliant", "Calculating", "Callous", "Capricious", "Cautious", "Clever", "Corrupt", "Cowardly", "Cunning", "Curious", "Defiant", "Devoted", "Disturbed", "Dogmatic", "Enigmatic", "Fair", "Foolish", "Fussy", "Garrulous", "Greedy", "Grim", "Hedonistic", "Honorable", "Hotheaded", "Humble", "Idealistic", "Ignorant", "Impish", "Impressionable", "Incompetent", "Intense", "Intimidating", "Jaded", "Jovial", "Judgmental", "Kind", "Kinky", "Lecherous", "Lively", "Macho", "Mean", "Mild", "Miserly", "Naïve", "Noble", "Nonconformist", "Nosy", "Obedient", "Oblivious", "Oily", "Optimistic", "Passionate", "Pessimistic", "Philosophical", "Poised", "Proud", "Quaint", "Quiet", "Rakish", "Rebellious", "Remorseful", "Ruthless", "Scheming", "Sensuous", "Shady", "Sly", "Tactless", "Tough", "Unlucky", "Unpredictable", "Unscrupulous", "Weak-Willed", "Weird", "Wise"];

const sexuality = ["Straight", "Gay", "Bisexual", "Asexual"];

const gender = ["male", "female", "non-binary"];

const relationship = ["married", "single", "divorced", "widowed", "betrothed", "dating", "in a romantic relationship"];

const race = [
  {name: "Avian Beast Folk*", description: "*Aarakocra, Kenku, or Owlin"},
  {name: "Reptilian Beast Folk*", description: "*Dragonborn, Grung, Kobold, or Lizardfolk"},
  {name: "Mammalian Beast Folk*", description: "*Centaur, Giff, Hadozee, Harengon, Minotaur, Satyr, or Tabaxi"},
  {name: "Big Folk*", description: "*Goliath, Human, Orc, or Triton"},
  {name: "Fey Folk*", description: "*Elf, Changeling, Fairy, Firbolg, or Goblin"},
  {name: "Outsider*", description: "*Aasimar, Tiefling, Genasi, Gith, or Plasmoid"},
  {name: "Smallfolk*", description: "*Dwarf, Gnome, or Halfling"}];

const alignment = [
  {name: "Lawful Good*", description: "*Favors laws above people. Puts other's needs higher than their own."},
  {name: "Neutral Good*", description: "*Has no preference between laws or people. Puts other's needs higher than their own."},
  {name: "Chaotic Good*", description: "*Favors people above laws. Puts other's needs higher than their own."},
  {name: "Lawful Neutral*", description: "*Favors laws above people. Puts their own needs about as high as those of others."},
  {name: "True Neutral*", description: "*Has no preference between laws or people. Puts their own needs about as high as those of others."},
  {name: "Chaotic Neutral*", description: "*Favor's people above laws. Puts their own needs about as high as those of others."},
  {name: "Lawful Evil*", description: "*Favor's law above people Puts their own needs higher than those of others."},
  {name: "Neutral Evil*", description: "*Has no preference between laws or people. Puts their own needs higher than those of others."},
  {name: "Chaotic Evil*", description: "*Favor's people above laws. puts their own needs higher than those of others."}];

// Configure which datasets to use for each reel
const reelConfig = {
  race: {
    datasets: [race],
    spinDuration: 1800,
    hasOverlay: true
  },
  keyword: {
    datasets: [keywords],
    spinDuration: 2000,
    hasOverlay: false
  },
  trait: {
    datasets: [traits, traits],
    spinDuration: 2200,
    hasOverlay: false
  },
  personal: {
    datasets: [gender, sexuality, relationship],
    spinDuration: 2400,
    hasOverlay: false,
    buildFunction: buildPersonalReel
  },
  alignment: {
    datasets: [alignment],
    spinDuration: 2600,
    hasOverlay: true
  }
};

// Helper function to get valid sexualities based on gender
function getValidSexuality(selectedGender) {
  if (selectedGender === "non-binary") {
    return ["Asexual", ""];
  }
  return sexuality;
}

// Helper function to format sexuality and gender
function formatSexualityAndGender(selectedSexuality, selectedGender) {
  if (selectedGender === "female" && selectedSexuality === "Gay") {
    return "Lesbian";
  }
  if (selectedGender === "non-binary" && selectedSexuality === "") {
    return "Non-Binary";
  }
  if (selectedGender === "non-binary" && selectedSexuality === "Asexual") {
    return "Asexual Non-Binary";
  }
  if (selectedSexuality === "") {
    return selectedGender;
  }
  return `${selectedSexuality} ${selectedGender}`;
}

// Combine multiple datasets into one pool
function combineDatasets(datasets) {
  if (!datasets || datasets.length === 0) return [];
  return datasets.flat();
}

// Special build function for personal reel
function buildPersonalReel(innerEl, datasets, spinDuration) {
  const combinations = [];
  const SPIN_COUNT = 30;

  for (let i = 0; i < SPIN_COUNT; i++) {
    const g = gender[Math.floor(Math.random() * gender.length)];
    const validSexualities = getValidSexuality(g);
    const s = validSexualities[Math.floor(Math.random() * validSexualities.length)];
    const r = relationship[Math.floor(Math.random() * relationship.length)];
    const formattedDisplay = formatSexualityAndGender(s, g);
    combinations.push(`${formattedDisplay}, ${r}`);
  }
  
  // Store final values
  const finalGenderIndex = Math.floor(Math.random() * gender.length);
  const finalGender = gender[finalGenderIndex];
  const validSexualities = getValidSexuality(finalGender);
  const finalSexualityIndex = Math.floor(Math.random() * validSexualities.length);
  const finalSexuality = validSexualities[finalSexualityIndex];
  const finalRelationshipIndex = Math.floor(Math.random() * relationship.length);
  
  const formattedFinalDisplay = formatSexualityAndGender(finalSexuality, finalGender);
  combinations.push(`${formattedFinalDisplay}, ${relationship[finalRelationshipIndex]}`);

  innerEl.innerHTML = '';
  combinations.forEach(text => {
    const div = document.createElement('div');
    div.className = 'reel-item';
    div.textContent = text;
    innerEl.appendChild(div);
  });

  innerEl.style.transition = 'none';
  innerEl.style.transform = 'translateY(0)';
  innerEl.getBoundingClientRect();

  const targetY = -(SPIN_COUNT * 80);
  innerEl.style.transition = `transform ${spinDuration}ms cubic-bezier(0.25, 0.1, 0.2, 1)`;
  innerEl.style.transform = `translateY(${targetY}px)`;

  return {
    gender: finalGender,
    sexuality: finalSexuality,
    relationship: relationship[finalRelationshipIndex]
  };
}
