const subjectDisplay = {
  sociology: "社會學",
  anthropology: "人類學",
  philosophy: "哲學",
  history: "歷史",
  literature: "文學與創作",
  politics: "政治經濟",
  linguistics: "語言學",
  gender: "性別研究",
  culture: "文化研究"
};

const subjects = Object.keys(subjectDisplay);
const majorEligible = ["sociology", "anthropology", "philosophy", "history", "literature", "politics"];

const subjectScores = {};
subjects.forEach(s => subjectScores[s] = 0);

const answers = Array(questions.length).fill(null);
let current = 0;

// DOM refs
const quizEl = document.getElementById("quiz");
const resultEl = document.getElementById("result");
const quizScreen = document.getElementById("quiz-screen");
const startScreen = document.getElementById("start-screen");
const progressFill = document.getElementById("progress-fill");

function startQuiz() {
  startScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");
  renderQuestion(current);
  updateProgress();
}

function renderQuestion(index) {
  const q = questions[index];
  const currentAnswer = answers[index];

  let html = `<div class="question-box">
    <p><strong>${q.id}.</strong> ${q.text}</p>`;

  for (const opt of q.options) {
    const selected = currentAnswer === opt.label ? 'style="background:#c8e6c9"' : "";
    html += `<button onclick="answer('${opt.label}')" ${selected}>
      ${opt.label}. ${opt.text}
    </button>`;
  }

  html += `</div>`;
  quizEl.innerHTML = html;
  document.getElementById("prevBtn").style.display = index === 0 ? "none" : "inline-block";
}

function answer(label) {
  const q = questions[current];
  const selected = q.options.find(opt => opt.label === label);

  const prevLabel = answers[current];
  if (prevLabel) {
    const prevTags = q.options.find(opt => opt.label === prevLabel).tags;
    prevTags.forEach(tag => subjectScores[tag]--);
  }

  selected.tags.forEach(tag => subjectScores[tag]++);
  answers[current] = label;
  subjects.forEach(s => {
  console.log(`${subjectDisplay[s]} (${s}): ${subjectScores[s]}`);
  });
  
  current++;

  if (current < questions.length) {
    renderQuestion(current);
    updateProgress();
  } else {
    showResult();
  }
}

function prevQuestion() {
  if (current > 0) {
    current--;
    renderQuestion(current);
    updateProgress();
  }
}

function updateProgress() {
  const answered = answers.filter(a => a !== null).length;
  const percent = Math.round((answered / questions.length) * 100);
  progressFill.style.width = `${percent}%`;
}

function showResult() {
  quizScreen.classList.add("hidden");
  resultEl.classList.remove("hidden");

  const sorted = Object.entries(subjectScores)
    .sort((a, b) => b[1] - a[1]);

  let major = null, minor = null;
  for (const [subject] of sorted) {
    if (!major && majorEligible.includes(subject)) major = subject;
    else if (!minor) minor = subject;
    if (major && minor) break;
  }

  resultEl.innerHTML = `
    <p>🎓 測驗完成！<br>
    ✨主修：<strong>${subjectDisplay[major]}</strong><br>
    🌟副修：<strong>${subjectDisplay[minor]}</strong></p>
    <button onclick="restart()">重新測驗</button>
  `;
}

function restart() {
  subjects.forEach(s => subjectScores[s] = 0);
  answers.fill(null);
  current = 0;
  resultEl.classList.add("hidden");
  startScreen.classList.remove("hidden");
}
