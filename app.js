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
const subjectScores = {};
subjects.forEach(s => subjectScores[s] = 0);
const answers = Array(questions.length).fill(null);
let current = 0;

const quizEl = document.getElementById("quiz");
const resultEl = document.getElementById("result");
const quizScreen = document.getElementById("quiz-screen");
const startScreen = document.getElementById("start-screen");
const progressFill = document.getElementById("progress-fill");
const prevBtn = document.getElementById("prevBtn");

function startQuiz() {
  startScreen.classList.add("d-none");
  quizScreen.classList.remove("d-none");
  renderQuestion(current);
  updateProgress();
}

function renderQuestion(index) {
  const q = questions[index];
  const currentAnswer = answers[index];
  let html = `<div class="card p-3 mb-3 border border-secondary-subtle"><p class="mb-3 fw-semibold">Q${q.id}. ${q.text}</p>`;
  for (const opt of q.options) {
    const selected = currentAnswer === opt.label ? 'btn-success' : 'btn-outline-secondary';
    html += `<button class="btn ${selected} w-100 mb-2 text-start" onclick="answer('${opt.label}')">${opt.label}. ${opt.text}</button>`;
  }
  html += '</div>';
  quizEl.innerHTML = html;
  prevBtn.classList.toggle("d-none", index === 0);
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

  console.log("🔍 分數統計：");
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
  progressFill.style.width = percent + '%';
}

function showResult() {
  quizScreen.classList.add("d-none");
  resultEl.classList.remove("d-none");

  const sorted = Object.entries(subjectScores)
    .sort((a, b) => b[1] - a[1]);

  const [topSubject, topScore] = sorted[0];

  resultEl.innerHTML = `
    <p class="fs-5 mb-2">🎓 測驗完成！</p>
    <p class="fs-4 fw-bold text-primary result-major">你的代表學程是：${subjectDisplay[topSubject]}</p>
    <button class="btn btn-outline-primary mt-3" onclick="restart()">重新測驗</button>
  `;
  console.log("scoring: ", topScore);
}

function restart() {
  subjects.forEach(s => subjectScores[s] = 0);
  answers.fill(null);
  current = 0;
  resultEl.classList.add("d-none");
  startScreen.classList.remove("d-none");
}
