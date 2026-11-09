document.addEventListener('DOMContentLoaded', () => {
  // Banco de dados com 15 perguntas (BNCC - Ciências 6º Ano)
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
    },
    {
      question: "Qual organela celular é responsável pela realização da fotossíntese nas plantas?",
      options: ["Mitocôndria", "Cloroplasto", "Núcleo", "Ribossomo"],
      correctIndex: 1
    },
    {
      question: "Qual é a principal função do sistema esquelético no corpo humano?",
      options: ["Digestão de alimentos", "Sustentação e proteção dos órgãos", "Bombear o sangue", "Filtrar impurezas"],
      correctIndex: 1
    },
    {
      question: "Como se chama o processo em que a água líquida passa para o estado gasoso pelo calor do Sol?",
      options: ["Condensação", "Evaporação", "Solidificação", "Transpiração"],
      correctIndex: 1
    },
    {
      question: "As rochas formadas pelo resfriamento e petrificação do magma vulcânico são chamadas de:",
      options: ["Magmáticas (Ígneas)", "Sedimentares", "Metamórficas", "Fósseis"],
      correctIndex: 0
    },
    {
      question: "Qual método é mais adequado para separar uma mistura heterogênea de areia e água?",
      options: ["Evaporação", "Filtração", "Catação", "Magnetismo"],
      correctIndex: 1
    },
    {
      question: "Fungos e bactérias desempenham um papel fundamental na natureza atuando como:",
      options: ["Produtores", "Consumidores primários", "Decompositores", "Predadores"],
      correctIndex: 2
    },
    {
      question: "Em qual órgão do sistema digestório ocorre a maior parte da absorção dos nutrientes?",
      options: ["Estômago", "Esôfago", "Boca", "Intestino Delgado"],
      correctIndex: 3
    },
    {
      question: "Em qual tipo de rocha é mais comum encontrar fósseis de plantas e animais antigos?",
      options: ["Rochas Sedimentares", "Rochas Magmáticas", "Rochas Metamórficas", "Lava vulcânica"],
      correctIndex: 0
    },
    {
      question: "Qual camada da atmosfera contém o gás responsável por filtrar os raios ultravioleta (UV)?",
      options: ["Termosfera", "Camada de Ozônio", "Troposfera", "Núcleo"],
      correctIndex: 1
    },
    {
      question: "O desvio na trajetória da luz ao passar do ar para a água é chamado de:",
      options: ["Reflexão", "Refração", "Absorção", "Difração"],
      correctIndex: 1
    }
  ];

  let currentIndex = 0;
  let score = 0;
  let lives = 3;
  let canAnswer = true;

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

  btnStart.addEventListener('click', startGame);
  btnRestart.addEventListener('click', startGame);

  function startGame() {
    currentIndex = 0;
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
    questionCountDisplay.textContent = `${currentIndex + 1}/${questions.length}`;
  }

  function loadQuestion() {
    canAnswer = true;
    const currentQ = questions[currentIndex];
    questionText.textContent = currentQ.question;
    optionsContainer.innerHTML = '';

    currentQ.options.forEach((opt, idx) => {
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      btn.textContent = opt;
      btn.addEventListener('click', () => handleAnswer(idx, btn));
      optionsContainer.appendChild(btn);
    });

    updateHUD();
  }

  function handleAnswer(selectedIndex, selectedBtn) {
    if (!canAnswer) return;
    canAnswer = false;

    const currentQ = questions[currentIndex];
    const allBtns = optionsContainer.querySelectorAll('.option-btn');

    if (selectedIndex === currentQ.correctIndex) {
      selectedBtn.classList.add('correct');
      score += 20;
    } else {
      selectedBtn.classList.add('wrong');
      allBtns[currentQ.correctIndex].classList.add('correct');
      lives--;
    }

    updateHUD();

    setTimeout(() => {
      if (lives <= 0) {
        endGame(false);
      } else {
        currentIndex++;
        if (currentIndex < questions.length) {
          loadQuestion();
        } else {
          endGame(true);
        }
      }
    }, 1300);
  }

  function endGame(victory) {
    screenGame.classList.add('hidden');
    screenEnd.classList.remove('hidden');

    finalScoreDisplay.textContent = `${score} pts`;
    const percent = Math.round((score / (questions.length * 20)) * 100);
    finalPercentageDisplay.textContent = `${percent}% de aproveitamento`;

    if (victory && lives > 0) {
      endIcon.textContent = '🏆';
      endTitle.textContent = 'Parabéns!';
      endMessage.textContent = 'Você mandou muito bem nos conhecimentos de Ciências!';
    } else {
      endIcon.textContent = '🌱';
      endTitle.textContent = 'Fim de Jogo!';
      endMessage.textContent = 'Você perdeu todas as vidas, mas pode tentar novamente!';
    }
  }
});
