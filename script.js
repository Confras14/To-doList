function handleCriarQuest() {
  const quest = document.createElement('span');
  quest.innerHTML = '<div class="quest"><input type="checkbox" class="checkQuest"><input type="text" class="titleQuest" placeholder="Nome da quest"><button class="btDellQuest"><p>X</p></button></div>';

  todoList.appendChild(quest);

  const dellQuest = quest.querySelector('.btDellQuest');
  if (dellQuest) {
    dellQuest.addEventListener('click', () => {
      console.log("Clicou em deletar");
      // Verifica se o elemento pai ainda existe antes de tentar removê-lo
      if (quest.parentElement) {
        quest.parentElement.removeChild(quest);
      }
    });
  }
}

const todoList = document.querySelector('.todoList');
const newQuest = document.querySelector('.newQuest');
newQuest.addEventListener('click', handleCriarQuest);

let allQuests = document.querySelectorAll('.quest');

function a() {
  allQuests.forEach((value, index) => {
    const questCurrent = allQuests[index];
    const dellQuest = questCurrent.querySelector('.btDellQuest');
    if (dellQuest) {
      dellQuest.addEventListener('click', () => {
        console.log("Clicou em deletar");
        // Verifica se o elemento pai ainda existe antes de tentar removê-lo
        if (questCurrent.parentElement) {
          questCurrent.parentElement.removeChild(questCurrent);
        }
      });
    }
  });
}
