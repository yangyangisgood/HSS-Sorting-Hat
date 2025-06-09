const subjects = [
  "sociology",
  "anthropology",
  "politicsAndEconomics",
  "philosophy",
  "history",
  "literatureAndCreation",
  "linguistics",
  "genderStudies",
  "cultureStudies"
];

const subjectDisplay = {
  sociology: "社會學",
  anthropology: "人類學",
  politicsAndEconomics: "政治經濟學",
  philosophy: "哲學",
  history: "歷史學",
  literatureAndCreation: "文學與創作",
  linguistics: "語言學",
  genderStudies: "性別研究",
  cultureStudies: "文化研究"
};

// 產生隨機題目，每題四個不重複的 subject
const questions = Array.from({ length: 20 }, (_, i) => {
  const shuffled = [...subjects].sort(() => Math.random() - 0.5).slice(0, 4);
  return {
    no: i + 1,
    question: `Q${i + 1}：這是一道模擬題目`,
    A: subjectDisplay[shuffled[0]], Asubject: shuffled[0],
    B: subjectDisplay[shuffled[1]], Bsubject: shuffled[1],
    C: subjectDisplay[shuffled[2]], Csubject: shuffled[2],
    D: subjectDisplay[shuffled[3]], Dsubject: shuffled[3]
  };
});


const subjectScores = {
    sociology: 0,
    anthropology: 0,
    politicsAndEconomics: 0,
    philosophy: 0,
    history: 0,
    literatureAndCreation: 0,
    linguistics: 0,
    genderStudies: 0,
    cultureStudies: 0
};

const majorEligible = [
    "sociology", "anthropology", "politicsAndEconomics", "philosophy", "history", "literatureAndCreation"
];

let current = 0;

const quizEl = document.getElementById("quiz");
const resultEl = document.getElementById("result");

function renderQuestion(index) {
    const q = questions[index];
    quizEl.innerHTML = `
    <div class="question-box">
        <p><strong>${q.no}.</strong> ${q.question}</p>
        <button onclick="answer('${q.Asubject}')">A. ${q.A}（+${q.Asubject}）</button>
        <button onclick="answer('${q.Bsubject}')">B. ${q.B}（+${q.Bsubject}）</button>
        <button onclick="answer('${q.Csubject}')">C. ${q.C}（+${q.Csubject}）</button>
        <button onclick="answer('${q.Dsubject}')">D. ${q.D}（+${q.Dsubject}）</button>
    </div>
    `;
}

function answer(subject) {
    subjectScores[subject]++;
    current++;
    if (current < questions.length) {
    renderQuestion(current);
    } else {
    showResult();
    }
}

function showResult() {
    quizEl.innerHTML = '';
    // 排序分數
    const sorted = Object.entries(subjectScores)
    .sort((a, b) => b[1] - a[1]);

    let major = null;
    let minor = null;

    for (let [subject, score] of sorted) {
    if (!major && majorEligible.includes(subject)) {
        major = subject;
    } else if (!minor) {
        minor = subject;
    }
    if (major && minor) break;
    }

    resultEl.innerHTML = `
    <p id="result">你的主修是：<strong>${subjectDisplay[major]}</strong><br>
    你的副修是：<strong>${subjectDisplay[minor]}</strong></p>
    <button onclick="restart()">重新測驗</button>
    `;
}

function restart() {
    Object.keys(subjectScores).forEach(key => subjectScores[key] = 0);
    current = 0;
    resultEl.innerHTML = '';
    renderQuestion(current);
}

// 啟動
renderQuestion(current);