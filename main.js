// Banco de dados de perguntas - Ciências (6º Ano - BNCC)
const questions = [
  {
    question: "Qual é a unidade fundamental da vida que forma a maioria dos seres vivos?",
    options: ["Átomo", "Célula", "Tecido", "Molécula"],
    correctIndex: 1
  },
  {
    question: "Qual camada da Terra é constituída por rochas sólidas e forma os continentes?",
    options: ["Manto", "Núcleo", "Litosfera (Crosta)", "Atmosfera"],
    correctIndex: 2
  },
  {
    question: "Na cadeia alimentar, as plantas produzem seu próprio alimento. Como elas são chamadas?",
    options: ["Consumidoras", "Decompositoras", "Produtoras", "Carnívoras"],
    correctIndex: 2
  },
  {
    question: "Misturar água e sal até dissolver completamente resulta em que tipo de mistura?",
    options: ["Heterogênea", "Homogênea", "Decantada", "Filtrada"],
    correctIndex: 1
  },
  {
    question: "Qual gás presente na atmosfera é essencial para a respiração dos seres humanos?",
    options: ["Gás Carbônico", "Gás Nitrogênio", "Gás Oxigênio", "Gás Hélio"],
    correctIndex: 2
  }
];

// Estado do Jogo
let currentQuestionIndex = 0;
let score = 0;
let lives = 3;
let canAnswer = true;

// Função principal exposta globalmente
function startGame() {
  const screenStart = document.getElementById('screen-start');
  const screenGame = document.getElementById('screen-game');
  const screenEnd = document.getElementById('screen-end');

  if (!screenStart || !screenGame || !screenEnd) {
    console.error("Elementos de tela não foram encontrados no DOM.");
    return;
  }

  currentQuestionIndex = 0;
  score = 0;
  lives = 3;
  canAnswer = true;

  screenStart.classList.add('hidden');
  screenEnd.classList.add('hidden');
  screenGame.classList.remove('hidden');

  updateHUD();
  loadQuestion();
}

function updateHUD() {
  const scoreDisplay = document.getElementById('score-display');
  const livesDisplay = document.getElementById('lives-display');
  const questionCountDisplay = document.getElementById('question-count');

  if (scoreDisplay) scoreDisplay.textContent = score;
  if (livesDisplay) livesDisplay.textContent = '❤️'.repeat(lives);
  if (questionCountDisplay) questionCountDisplay.textContent = `${currentQuestionIndex + 1}/${questions.length}`;
}

function loadQuestion() {
  canAnswer = true;
  const currentQ = questions[currentQuestionIndex];

  const questionText = document.getElementById('question-text');
  const optionsContainer = document.getElementById('options-container');

  if (questionText) questionText.textContent = currentQ.question;
  if (optionsContainer) {
    optionsContainer.innerHTML = '';
    currentQ.options.forEach((optionText, index) => {
      const button = document.createElement('button');
      button.classList.add('option-btn');
      button.textContent = optionText;
      button.addEventListener('click', () => selectAnswer(index, button));
      optionsContainer.appendChild(button);
    });
  }

  updateHUD();
}

function selectAnswer(selectedIndex, selectedButton) {
  if (!canAnswer) return;
  canAnswer = false;

  const currentQ = questions[currentQuestionIndex];
  const optionsContainer = document.getElementById('options-container');
  const allButtons = optionsContainer ? optionsContainer.querySelectorAll('.option-btn') : [];

  if (selectedIndex === currentQ.correctIndex) {
    selectedButton.classList.add('correct');
    score += 20;
  } else {
    selectedButton.classList.add('wrong');
    if (allButtons[currentQ.correctIndex]) {
      allButtons[currentQ.correctIndex].classList.add('correct');
    }
    lives--;
  }

  updateHUD();

  setTimeout(() => {
    if (lives <= 0) {
      endGame(false);
    } else {
      currentQuestionIndex++;
      if (currentQuestionIndex < questions.length) {
        loadQuestion();
      } else {
        endGame(true);
      }
    }
  }, 1500);
}

function endGame(isVictory) {
  const screenGame = document.getElementById('screen-game');
  const screenEnd = document.getElementById('screen-end');
  const endIcon = document.getElementById('end-icon');
  const endTitle = document.getElementById('end-title');
  const endMessage = document.getElementById('end-message');
  const finalScoreDisplay = document.getElementById('final-score');
  const finalPercentageDisplay = document.getElementById('final-percentage');

  if (screenGame) screenGame.classList.add('hidden');
  if (screenEnd) screenEnd.classList.remove('hidden');

  if (finalScoreDisplay) finalScoreDisplay.textContent = `${score} pts`;
  const percentage = Math.round((score / (questions.length * 20)) * 100);
  if (finalPercentageDisplay) finalPercentageDisplay.textContent = `${percentage}% de aproveitamento`;

  if (isVictory && lives > 0) {
    if (endIcon) endIcon.textContent = '🏆';
    if (endTitle) endTitle.textContent = 'Sensacional!';
    if (endMessage) endMessage.textContent = 'Você demonstrou ser um verdadeiro cientista!';
  } else {
    if (endIcon) endIcon.textContent = '🌱';
    if (endTitle) endTitle.textContent = 'Quase lá!';
    if (endMessage) endMessage.textContent = 'Não desista! Revise os tópicos e tente novamente.';
  }
}
