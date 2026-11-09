/* --- RESET E VARIAVEIS --- */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  --primary-color: #2ecc71;
  --primary-dark: #27ae60;
  --secondary-color: #3498db;
  --accent-color: #f1c40f;
  --danger-color: #e74c3c;
  --bg-color: #eef9f1;
  --card-bg: #ffffff;
  --text-color: #2c3e50;
  --font-heading: 'Fredoka', sans-serif;
  --font-body: 'Nunito', sans-serif;
}

body {
  font-family: var(--font-body);
  background-color: var(--bg-color);
  color: var(--text-color);
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
}

/* --- CONTAINER PRINCIPAL --- */
.game-container {
  width: 100%;
  max-width: 650px;
  background-color: var(--card-bg);
  border-radius: 24px;
  box-shadow: 0 12px 30px rgba(46, 204, 113, 0.2);
  padding: 30px;
  text-align: center;
}

/* --- CABEÇALHO --- */
.main-header {
  margin-bottom: 24px;
}

.logo {
  font-family: var(--font-heading);
  font-size: 2.4rem;
  color: var(--primary-dark);
  font-weight: 700;
}

.subtitle {
  font-size: 1rem;
  color: #7f8c8d;
  font-weight: 700;
}

/* --- TELAS --- */
.screen {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.hidden {
  display: none !important;
}

/* --- REGRAS DO JOGO --- */
.rules-box {
  background-color: #f0fdf4;
  border: 2px dashed var(--primary-color);
  border-radius: 16px;
  padding: 16px;
  text-align: left;
}

.rules-box ul {
  margin-top: 8px;
  padding-left: 20px;
}

.rules-box li {
  margin-bottom: 6px;
}

/* --- BOTÕES --- */
.btn {
  font-family: var(--font-heading);
  font-size: 1.2rem;
  padding: 14px 28px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  box-shadow: 0 5px 0px rgba(0, 0, 0, 0.15);
}

.primary-btn {
  background-color: var(--primary-color);
  color: white;
}

.primary-btn:hover {
  background-color: var(--primary-dark);
  transform: translateY(-2px);
  box-shadow: 0 7px 0px rgba(0, 0, 0, 0.15);
}

.primary-btn:active {
  transform: translateY(2px);
  box-shadow: 0 2px 0px rgba(0, 0, 0, 0.15);
}

/* --- HUD (STATUS) --- */
.hud {
  display: flex;
  justify-content: space-between;
  background-color: #f8f9fa;
  padding: 12px 20px;
  border-radius: 16px;
  font-family: var(--font-heading);
}

.hud-item {
  display: flex;
  align-items: center;
  gap: 6px;
}

.hud-label {
  color: #7f8c8d;
}

.hud-value {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--secondary-color);
}

/* --- PERGUNTA --- */
.question-container {
  margin: 10px 0;
}

.badge {
  display: inline-block;
  background-color: #e8f4fc;
  color: var(--secondary-color);
  padding: 4px 14px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 700;
  margin-bottom: 10px;
}

#question-text {
  font-size: 1.3rem;
  line-height: 1.4;
  color: #2c3e50;
}

/* --- OPÇÕES DE RESPOSTA --- */
.options-grid {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.option-btn {
  background-color: #f8f9fa;
  border: 2px solid #e9ecef;
  border-radius: 16px;
  padding: 14px;
  font-family: var(--font-body);
  font-size: 1rem;
  font-weight: 700;
  color: var(--text-color);
  cursor: pointer;
  text-align: left;
  transition: all 0.2s;
}

.option-btn:hover {
  border-color: var(--secondary-color);
  background-color: #ebf5fb;
}

.option-btn.correct {
  background-color: #d4edda !important;
  border-color: var(--primary-color) !important;
  color: #155724 !important;
}

.option-btn.wrong {
  background-color: #f8d7da !important;
  border-color: var(--danger-color) !important;
  color: #721c24 !important;
}

/* --- TELA FINAL --- */
.end-icon {
  font-size: 4rem;
}

.score-summary {
  background-color: #f8f9fa;
  padding: 20px;
  border-radius: 16px;
  margin: 10px 0;
}

.big-score {
  font-family: var(--font-heading);
  font-size: 3rem;
  color: var(--primary-dark);
  font-weight: 700;
  display: block;
}

.main-footer {
  margin-top: 24px;
  font-size: 0.8rem;
  color: #bdc3c7;
}

/* RESPONSIVIDADE */
@media (max-width: 480px) {
  .game-container {
    padding: 20px;
  }

  .logo {
    font-size: 1.8rem;
  }

  #question-text {
    font-size: 1.1rem;
  }

  .hud {
    font-size: 0.9rem;
  }
}