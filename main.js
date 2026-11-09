document.addEventListener('DOMContentLoaded', () => {
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

  // Elementos do DOM
  const screenStart = document.getElementById('screen-start');
  const screenGame = document.getElementById('screen-game');
  const screenEnd = document.getElementById('screen-end');

  const btnStart = document.getElementById('btn-start');
  const btnRestart = document.getElementById('btn-restart');

  const scoreDisplay = document.getElementById('score-display');
  const livesDisplay = document.getElementById('lives-display');
  const questionCountDisplay = document.getElementById('question-count');
  const questionText = document.getElementById('question-text');
  const optionsContainer = document.getElementById('options-container');

  const endIcon = document.getElementById('end-icon');
  const endTitle = document.getElementById('end-title');
  const endMessage = document.getElementById('end-message');
  const finalScoreDisplay = document.getElementById('final-score');
  const finalPercentageDisplay = document.getElementById('final-percentage');

  // Event Listeners
  if (btnStart) {
    btnStart.addEventListener('click', startGame);
  }

  if (btnRestart) {
    btnRestart.addEventListener('click', startGame);
  }

  function startGame() {
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
    scoreDisplay.textContent = score;
    livesDisplay.textContent = '❤️'.repeat(lives);
    questionCountDisplay.textContent = `${currentQuestionIndex + 1}/${questions.length}`;
  }

  function loadQuestion() {
    canAnswer = true;
    const currentQ = questions[currentQuestionIndex];
    questionText.textContent = currentQ.question;
    optionsContainer.innerHTML = '';

    currentQ.options.forEach((optionText, index) => {
      const button = document.createElement('button');
      button.classList.add('option-btn');
      button.textContent = optionText;
      button.addEventListener('click', () => selectAnswer(index, button));
      optionsContainer.appendChild(button);
    });

    updateHUD();
  }

  function selectAnswer(selectedIndex, selectedButton) {
    if (!canAnswer) return;
    canAnswer = false;

    const currentQ = questions[currentQuestionIndex];
    const allButtons = optionsContainer.querySelectorAll('.option-btn');

    if (selectedIndex === currentQ.correctIndex) {
      selectedButton.classList.add('correct');
      score += 20;
    } else {
      selectedButton.classList.add('wrong');
      allButtons[currentQ.correctIndex].classList.add('correct');
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
    screenGame.classList.add('hidden');
    screenEnd.classList.remove('hidden');

    finalScoreDisplay.textContent = `${score} pts`;
    const percentage = Math.round((score / (questions.length * 20)) * 100);
    finalPercentageDisplay.textContent = `${percentage}% de aproveitamento`;

    if (isVictory && lives > 0) {
      endIcon.textContent = '🏆';
      endTitle.textContent = 'Sensacional!';
      endMessage.textContent = 'Você demonstrou ser um verdadeiro cientista!';
    } else {
      endIcon.textContent = '🌱';
      endTitle.textContent = 'Quase lá!';
      endMessage.textContent = 'Não desista! Revise os tópicos e tente novamente.';
    }
  }
});
