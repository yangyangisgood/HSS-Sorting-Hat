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

const subjectScores = {};
subjects.forEach(s => subjectScores[s] = 0);

const answers = Array(questions.length).fill(null);
let current = 0;

const majorEligible = [
    "sociology", "anthropology", "politicsAndEconomics", "philosophy", "history", "literatureAndCreation"
];

const quizEl = document.getElementById("quiz");
const resultEl = document.getElementById("result");
const quizScreen = document.getElementById("quiz-screen");
const startScreen = document.getElementById("start-screen");
const progressFill = document.getElementById("progress-fill");

function startQuiz() {
    startScreen.classList.add("hidden");
    quizScreen.classList.remove("hidden");
    current = 0;
    renderQuestion(current);
    updateProgress();
}

function renderQuestion(index) {
    const q = questions[index];
    const currentAnswer = answers[index];

    quizEl.innerHTML = `
    <div class="question-box">
        <p><strong>${q.no}.</strong> ${q.question}</p>
        <button onclick="answer('${q.Asubject}')" ${currentAnswer === q.Asubject ? 'style="background:#c8e6c9"' : ''}>A. ${q.A}（+${q.Asubject}）</button>
        <button onclick="answer('${q.Bsubject}')" ${currentAnswer === q.Bsubject ? 'style="background:#c8e6c9"' : ''}>B. ${q.B}（+${q.Bsubject}）</button>
        <button onclick="answer('${q.Csubject}')" ${currentAnswer === q.Csubject ? 'style="background:#c8e6c9"' : ''}>C. ${q.C}（+${q.Csubject}）</button>
        <button onclick="answer('${q.Dsubject}')" ${currentAnswer === q.Dsubject ? 'style="background:#c8e6c9"' : ''}>D. ${q.D}（+${q.Dsubject}）</button>
    </div>
    `;
    document.getElementById("prevBtn").style.display = index === 0 ? "none" : "inline-block";
}

function answer(subject) {
    const prevSubject = answers[current];
    if (prevSubject) subjectScores[prevSubject]--;
    subjectScores[subject]++;
    answers[current] = subject;
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
    const answeredCount = answers.filter(ans => ans !== null).length;
    const percentage = Math.floor((answeredCount / questions.length) * 100);
    progressFill.style.width = `${percentage}%`;
}

function showResult() {
    quizScreen.classList.add("hidden");
    resultEl.classList.remove("hidden");

    const sorted = Object.entries(subjectScores)
    .sort((a, b) => b[1] - a[1]);

    let major = null;
    let minor = null;

    for (let [subject] of sorted) {
    if (!major && majorEligible.includes(subject)) {
        major = subject;
    } else if (!minor) {
        minor = subject;
    }
    if (major && minor) break;
    }

    resultEl.innerHTML = `
    <p id="result">🎓 測驗完成！<br>
    你的主修是：<strong>${subjectDisplay[major]}</strong><br>
    你的副修是：<strong>${subjectDisplay[minor]}</strong></p>
    <button onclick="restart()">重新測驗</button>
    `;
}

function restart() {
    for (let key in subjectScores) subjectScores[key] = 0;
    answers.fill(null);
    current = 0;
    resultEl.classList.add("hidden");
    startScreen.classList.remove("hidden");
}