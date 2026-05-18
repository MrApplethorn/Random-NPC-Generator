const generateButton = document.getElementById("generateButton");
let finalRaceIndex = 0;
let finalAlignmentIndex = 0;

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

// Get a random item from a dataset or combined datasets
function getRandomItem(datasets) {
  const combined = combineDatasets(datasets);
  return combined[Math.floor(Math.random() * combined.length)];
}

function buildReel(innerEl, datasets, spinDuration) {
  const SPIN_COUNT = 30;
  const combined = combineDatasets(datasets);
  const items = [];
  
  for (let i = 0; i < SPIN_COUNT; i++) {
    items.push(combined[Math.floor(Math.random() * combined.length)]);
  }
  items.push(combined[Math.floor(Math.random() * combined.length)]);

  innerEl.innerHTML = '';
  items.forEach(item => {
    const div = document.createElement('div');
    div.className = 'reel-item';
    if (typeof item === 'object' && item.name) {
      div.textContent = item.name;
    } else {
      div.textContent = item;
    }
    innerEl.appendChild(div);
  });

  innerEl.style.transition = 'none';
  innerEl.style.transform = 'translateY(0)';
  innerEl.getBoundingClientRect();

  const targetY = -(SPIN_COUNT * 80);
  innerEl.style.transition = `transform ${spinDuration}ms cubic-bezier(0.25, 0.1, 0.2, 1)`;
  innerEl.style.transform = `translateY(${targetY}px)`;
}

function buildCombinationReel(innerEl, finalSexuality, finalGender, finalRelationship, spinDuration) {
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
  
  const formattedFinalDisplay = formatSexualityAndGender(finalSexuality, finalGender);
  combinations.push(`${formattedFinalDisplay}, ${finalRelationship}`);

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
}

function spinReels() {
  generateButton.disabled = true;

  const finalGenderIndex = Math.floor(Math.random() * gender.length);
  const finalGender = gender[finalGenderIndex];
  const validSexualities = getValidSexuality(finalGender);
  const finalSexualityIndex = Math.floor(Math.random() * validSexualities.length);
  const finalSexuality = validSexualities[finalSexualityIndex];
  const finalRelationshipIndex = Math.floor(Math.random() * relationship.length);
  
  finalRaceIndex = Math.floor(Math.random() * combineDatasets(reelConfig.race).length);
  finalAlignmentIndex = Math.floor(Math.random() * combineDatasets(reelConfig.alignment).length);

  buildReel(document.getElementById('inner-race'), reelConfig.race, 1800);
  buildReel(document.getElementById('inner-keyword'), reelConfig.keyword, 2000);
  buildReel(document.getElementById('inner-trait'), reelConfig.trait, 2200);
  buildCombinationReel(document.getElementById('inner-personal'), finalSexuality, finalGender, relationship[finalRelationshipIndex], 2400);
  buildReel(document.getElementById('inner-alignment'), reelConfig.alignment, 2600);

  setTimeout(() => {
    const raceItem = combineDatasets(reelConfig.race)[finalRaceIndex];
    const alignmentItem = combineDatasets(reelConfig.alignment)[finalAlignmentIndex];
    document.getElementById('race-description').textContent = raceItem.description;
    document.getElementById('alignment-description').textContent = alignmentItem.description;
  }, 3100);

  setTimeout(() => {
    generateButton.disabled = false;
  }, 3100);
}

// Toggle overlays
document.getElementById('reel-race').addEventListener('click', () => {
  document.getElementById('race-details-overlay').classList.toggle('active');
});

document.getElementById('reel-alignment').addEventListener('click', () => {
  document.getElementById('alignment-details-overlay').classList.toggle('active');
});

generateButton.addEventListener("click", spinReels);
