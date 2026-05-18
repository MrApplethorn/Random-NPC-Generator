const generateButton = document.getElementById("generateButton");
      let finalIndices = {};

      function buildReel(innerEl, list, spinDuration) {
        const SPIN_COUNT = 30;
        const items = [];
        
        for (let i = 0; i < SPIN_COUNT; i++) {
          items.push(list[Math.floor(Math.random() * list.length)]);
        }
        items.push(list[Math.floor(Math.random() * list.length)]);
      
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

      function buildGroupReel(innerEl, list, spinDuration, minCount = 1, maxCount = 3) {
        const SPIN_COUNT = 30;
        const items = [];

        for (let i = 0; i < SPIN_COUNT; i++) {
          items.push(randomGroup(list, minCount, maxCount));
        }
        items.push(randomGroup(list, minCount, maxCount));

        innerEl.innerHTML = '';
        items.forEach(item => {
          const div = document.createElement('div');
          div.className = 'reel-item';
          div.textContent = item;
          innerEl.appendChild(div);
        });

        innerEl.style.transition = 'none';
        innerEl.style.transform = 'translateY(0)';
        innerEl.getBoundingClientRect();

        const targetY = -(SPIN_COUNT * 80);
        innerEl.style.transition = `transform ${spinDuration}ms cubic-bezier(0.25, 0.1, 0.2, 1)`;
        innerEl.style.transform = `translateY(${targetY}px)`;
      }

      function randomGroup(list, minCount = 1, maxCount = 3) {
        const shuffled = [...list].sort(() => Math.random() - 0.5);
        const count = Math.floor(Math.random() * (maxCount - minCount + 1)) + minCount;
        return shuffled.slice(0, count).join(' + ');
      }

      function fillDescriptionPanel(descId, words) {
        const panel = document.getElementById(descId);
        panel.innerHTML = '';

        const wordArray = words.split(' + ');
        const describedWords = wordArray
          .map(word => ({ word, desc: descriptions[word] }))
          .filter(({ desc }) => desc);

        describedWords.forEach(({ desc }, i) => {
          if (i > 0) {
            const hr = document.createElement('hr');
            panel.appendChild(hr);
          }

          const body = document.createElement('p');
          body.textContent = desc;
          panel.appendChild(body);
        });

        return describedWords.length > 0;
      }

      function spinReels() {
        generateButton.disabled = true;
      
        finalIndices.objective = Math.floor(Math.random() * objectives.length);
        finalIndices.combat = Math.floor(Math.random() * combatTypes.length);
        finalIndices.obstacle = Math.floor(Math.random() * obstacles.length);
        finalIndices.enemy = Math.floor(Math.random() * enemyTypes.length);
        finalIndices.creature = Math.floor(Math.random() * creatureTypes.length);
        finalIndices.damage = Math.floor(Math.random() * damageTypes.length);
      
        buildReel(document.getElementById('inner-objective'), objectives, 1800);
        buildReel(document.getElementById('inner-combat'), combatTypes, 2000);
        buildGroupReel(document.getElementById('inner-obstacle'), obstacles, 2200, 3);
        buildGroupReel(document.getElementById('inner-enemy'), enemyTypes, 2400, 3);
        buildGroupReel(document.getElementById('inner-creature'), creatureTypes, 2600, 2);
        buildGroupReel(document.getElementById('inner-damage'), damageTypes, 2800, 2);
      
        setTimeout(() => {
          const objItem = objectives[finalIndices.objective];
          const combItem = combatTypes[finalIndices.combat];
          const obsItem = obstacles[finalIndices.obstacle];
          const enmItem = enemyTypes[finalIndices.enemy];
          const creItem = creatureTypes[finalIndices.creature];
          const dmgItem = damageTypes[finalIndices.damage];

          fillDescriptionPanel('objective-description', typeof objItem === 'object' && objItem.name ? objItem.name : objItem);
          fillDescriptionPanel('combat-description', typeof combItem === 'object' && combItem.name ? combItem.name : combItem);
          fillDescriptionPanel('obstacle-description', typeof obsItem === 'object' && obsItem.name ? obsItem.name : obsItem);
          fillDescriptionPanel('enemy-description', typeof enmItem === 'object' && enmItem.name ? enmItem.name : enmItem);
          fillDescriptionPanel('creature-description', typeof creItem === 'object' && creItem.name ? creItem.name : creItem);
          fillDescriptionPanel('damage-description', typeof dmgItem === 'object' && dmgItem.name ? dmgItem.name : dmgItem);
        }, 3100);
      
        setTimeout(() => {
          generateButton.disabled = false;
        }, 3100);
      }
      
      // Toggle overlays on reel click
      document.getElementById('reel-objective').addEventListener('click', () => {
        document.getElementById('objective-details-overlay').classList.toggle('active');
      });
      document.getElementById('reel-combat').addEventListener('click', () => {
        document.getElementById('combat-details-overlay').classList.toggle('active');
      });
      document.getElementById('reel-obstacle').addEventListener('click', () => {
        document.getElementById('obstacle-details-overlay').classList.toggle('active');
      });
      document.getElementById('reel-enemy').addEventListener('click', () => {
        document.getElementById('enemy-details-overlay').classList.toggle('active');
      });
      document.getElementById('reel-creature').addEventListener('click', () => {
        document.getElementById('creature-details-overlay').classList.toggle('active');
      });
      document.getElementById('reel-damage').addEventListener('click', () => {
        document.getElementById('damage-details-overlay').classList.toggle('active');
      });
      
      generateButton.addEventListener("click", spinReels);
