const questions = [
  {
    q: "チームが迷っているとき、あなたならどうしますか？",
    options: [
      { text: "進むべき方向を言葉で示す", type: "visionary" },
      { text: "一人ひとりと話し、成長点を探す", type: "coaching" },
      { text: "まず空気を和らげる", type: "affiliative" },
      { text: "みんなの意見を集める", type: "democratic" },
      { text: "自分が動いて背中を見せる", type: "pacesetting" },
      { text: "即断即決で指示を出す", type: "commanding" }
    ]
  },
  {
    q: "メンバーが失敗したとき、あなたならどうしますか？",
    options: [
      { text: "目的に立ち返らせる", type: "visionary" },
      { text: "次に活かす方法を一緒に考える", type: "coaching" },
      { text: "気持ちを最優先で受け止める", type: "affiliative" },
      { text: "周囲の意見も聞く", type: "democratic" },
      { text: "「次はこうしよう」と示す", type: "pacesetting" },
      { text: "厳しく改善点を伝える", type: "commanding" }
    ]
  },
  {
    q: "理想のリーダー像はどのような人ですか？",
    options: [
      { text: "未来を語れる人", type: "visionary" },
      { text: "人を育てる人", type: "coaching" },
      { text: "信頼される人", type: "affiliative" },
      { text: "みんなを巻き込む人", type: "democratic" },
      { text: "結果を出す人", type: "pacesetting" },
      { text: "混乱を止められる人", type: "commanding" }
    ]
  },
  {
    q: "あなたが一番イライラするのは、どのようなことですか？",
    options: [
      { text: "目的が見えない状態", type: "visionary" },
      { text: "成長の機会がないこと", type: "coaching" },
      { text: "人間関係がギスギスすること", type: "affiliative" },
      { text: "意見が聞いてもらえないこと", type: "democratic" },
      { text: "スピードが遅いこと", type: "pacesetting" },
      { text: "規律が守られないこと", type: "commanding" }
    ]
  },
  {
    q: "強みを発揮しているときのあなたは、どのような行動をとっていますか？",
    options: [
      { text: "ワクワクさせている", type: "visionary" },
      { text: "背中を押している", type: "coaching" },
      { text: "支えている", type: "affiliative" },
      { text: "引き出している", type: "democratic" },
      { text: "先頭を走っている", type: "pacesetting" },
      { text: "まとめている", type: "commanding" }
    ]
  },
  {
    q: "新しいプロジェクトが始まるとき、あなたならどうしますか？",
    options: [
      { text: "「ワクワクする未来」を語る", type: "visionary" },
      { text: "「個人のスキルアップ」を提案する", type: "coaching" },
      { text: "「チームの親睦」を優先する", type: "affiliative" },
      { text: "「進め方のアイデア」を募る", type: "democratic" },
      { text: "「高い成果の基準」を設定する", type: "pacesetting" },
      { text: "「役割と期限」を厳密に命じる", type: "commanding" }
    ]
  },
  {
    q: "会議を進めるとき、あなたが重視するのはどのようなことですか？",
    options: [
      { text: "情熱が目的地に向かっているか", type: "visionary" },
      { text: "発言者に気づきがあるか", type: "coaching" },
      { text: "険悪なムードになっていないか", type: "affiliative" },
      { text: "全員の納得感が得られたか", type: "democratic" },
      { text: "無駄なく最高の結果が出せるか", type: "pacesetting" },
      { text: "決まったことが徹底されるか", type: "commanding" }
    ]
  },
  {
    q: "メンバーのモチベーションを上げたいとき、あなたならどうしますか？",
    options: [
      { text: "成功したときの報酬や名誉を説く", type: "visionary" },
      { text: "将来のキャリアプランを語り合う", type: "coaching" },
      { text: "ランチや飲み会で距離を縮める", type: "affiliative" },
      { text: "役割を与えて責任感を持たせる", type: "democratic" },
      { text: "自分の圧倒的な仕事量を見せる", type: "pacesetting" },
      { text: "規律を正し、緊張感を持たせる", type: "commanding" }
    ]
  }
];

const typesData = {
  visionary: {
    name: "ビジョン型",
    english: "Visionary",
    icon: "🔭",
    pros: ["目的と意味を示せる", "人をワクワクさせる"],
    cons: ["現場の細部が弱くなりがち"],
    youthNeeds: "「正解」を示すより“意味”を語れること",
    eraNeeds: "夢や理想を現実と断絶させない翻訳力",
    questionSelf: "「あなたのビジョンは、誰の希望になっている？」",
    trap: "語るだけで、行動が伴わない“空想家”",
    jcMessage: "そんなあなたは、LOMが目指す未来を熱く語り、メンバーを協議会のアカデミーへ出向させよう！"
  },
  coaching: {
    name: "コーチ型",
    english: "Coaching",
    icon: "🌱",
    pros: ["人が育つ", "長期的に強い組織になる"],
    cons: ["即効性が弱い"],
    youthNeeds: "指示ではなく問いを投げられる力",
    eraNeeds: "多様な価値観を“育てながら束ねる力”",
    questionSelf: "「相手の可能性を信じて待てている？」",
    trap: "優しさが“放置”になること",
    jcMessage: "そんなあなたは、メンバー一人ひとりの成長に寄り添い、協議会のアカデミー出向を後押ししよう！"
  },
  affiliative: {
    name: "関係重視型",
    english: "Affiliative",
    icon: "🤝",
    pros: ["信頼関係が強い", "雰囲気が良くなる"],
    cons: ["厳しい決断が遅れることも"],
    youthNeeds: "安心できる場を意図してつくる力",
    eraNeeds: "分断の時代につなぎ直す役割",
    questionSelf: "「嫌われる決断を避けていない？」",
    trap: "和を優先しすぎて、変化を止める",
    jcMessage: "そんなあなたは、みんなが安心できる関係性を築き、一緒に協議会のアカデミーへ出向しよう！"
  },
  democratic: {
    name: "民主型",
    english: "Democratic",
    icon: "🗣️",
    pros: ["納得感が高い", "多様なアイデアが出る"],
    cons: ["決定に時間がかかる"],
    youthNeeds: "「みんなの声」を本当に活かす力",
    eraNeeds: "正解がない中で合意をつくる技術",
    questionSelf: "「決めきれない理由は何？」",
    trap: "全員に配慮して、誰も動けなくなる",
    jcMessage: "そんなあなたは、みんなの意見をまとめ上げ、チームとして協議会のアカデミー出向の機運を高めよう！"
  },
  pacesetting: {
    name: "率先型",
    english: "Pacesetting",
    icon: "🏃‍♂️",
    pros: ["成果が早い", "ハイパフォーマー"],
    cons: ["周りが疲れることがある"],
    youthNeeds: "自分が走るだけでなく周りの速度を考える視点",
    eraNeeds: "高速社会で“持続可能な成果”を出す力",
    questionSelf: "「それ、あなたじゃないとできない？」",
    trap: "成果は出るが、人が育たない",
    jcMessage: "そんなあなたは、自ら先頭に立って行動で示し、LOMメンバーを協議会のアカデミー出向へと引っ張っていこう！"
  },
  commanding: {
    name: "強制型",
    english: "Commanding",
    icon: "⚓",
    pros: ["緊急時・混乱時に最強", "秩序を取り戻す"],
    cons: ["常用すると反発を生む"],
    youthNeeds: "使う場面を見極める知性",
    eraNeeds: "混乱時に判断を引き受ける覚悟",
    questionSelf: "「それは本当に今、必要な指示？」",
    trap: "平時でも使い続けてしまうこと",
    jcMessage: "そんなあなたは、力強い決断力で道を示し、LOMメンバーを迷いなく協議会のアカデミーに出向させよう！"
  }
};

let currentQuestionIndex = 0;
let scores = {
  visionary: 0,
  coaching: 0,
  affiliative: 0,
  democratic: 0,
  pacesetting: 0,
  commanding: 0
};
let firstReached = {}; // Track when a score was reached for tie-breaking logic

// DOM Elements
const startScreen = document.getElementById('start-screen');
const questionScreen = document.getElementById('question-screen');
const loadingScreen = document.getElementById('loading-screen');
const resultScreen = document.getElementById('result-screen');
const startBtn = document.getElementById('start-btn');
const optionsContainer = document.getElementById('options-container');
const qNumber = document.getElementById('q-number');
const qText = document.getElementById('q-text');
const progressFill = document.getElementById('progress-fill');
const restartBtn = document.getElementById('restart-btn');
const resultTypesContainer = document.getElementById('result-types-container');
const resultTemplate = document.getElementById('result-type-template');

// Functions
function showScreen(screen) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  screen.classList.add('active');
}

function startQuiz() {
  currentQuestionIndex = 0;
  for (let key in scores) scores[key] = 0;
  firstReached = {};
  showQuestion();
  showScreen(questionScreen);
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function showQuestion() {
  const q = questions[currentQuestionIndex];
  qNumber.textContent = `Q${currentQuestionIndex + 1} / ${questions.length}`;
  qText.textContent = q.q;
  progressFill.style.width = `${((currentQuestionIndex) / questions.length) * 100}%`;
  
  optionsContainer.innerHTML = '';
  
  // Shuffle options to prevent pattern bias
  const shuffledOptions = shuffleArray([...q.options]);
  
  shuffledOptions.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.textContent = opt.text;
    btn.onclick = () => selectOption(opt.type);
    optionsContainer.appendChild(btn);
  });
}

function selectOption(type) {
  scores[type]++;
  if (!firstReached[type]) {
    firstReached[type] = [];
  }
  firstReached[type].push(currentQuestionIndex); // Record at which question this point was scored

  currentQuestionIndex++;
  
  if (currentQuestionIndex < questions.length) {
    // Add slight delay for animation
    optionsContainer.style.opacity = '0';
    setTimeout(() => {
      showQuestion();
      optionsContainer.style.opacity = '1';
    }, 200);
  } else {
    progressFill.style.width = '100%';
    finishQuiz();
  }
}

function finishQuiz() {
  showScreen(loadingScreen);
  
  setTimeout(() => {
    showResults();
  }, 1500); // Fake loading for dramatic effect
}

function showResults() {
  // Determine winners
  let maxScore = 0;
  for (let type in scores) {
    if (scores[type] > maxScore) maxScore = scores[type];
  }
  
  // Get all types that have the max score
  let topTypes = [];
  for (let type in scores) {
    if (scores[type] === maxScore) {
      topTypes.push(type);
    }
  }

  // 同点の場合は、より早い段階でポイントを獲得したタイプを優先する
  topTypes.sort((a, b) => {
    return firstReached[a][maxScore - 1] - firstReached[b][maxScore - 1];
  });

  // 1つだけ表示するため、先頭の1つに絞る
  topTypes = [topTypes[0]];

  resultTypesContainer.innerHTML = '';

  topTypes.forEach(type => {
    const data = typesData[type];
    const clone = resultTemplate.content.cloneNode(true);
    
    clone.querySelector('.type-icon').textContent = data.icon;
    clone.querySelector('.type-name').textContent = data.name;
    clone.querySelector('.type-english').textContent = data.english;
    
    data.pros.forEach(p => {
      const li = document.createElement('li');
      li.textContent = p;
      clone.querySelector('.pros-list').appendChild(li);
    });
    
    data.cons.forEach(c => {
      const li = document.createElement('li');
      li.textContent = c;
      clone.querySelector('.cons-list').appendChild(li);
    });

    clone.querySelector('.youth-needs').textContent = data.youthNeeds;
    clone.querySelector('.era-needs').textContent = data.eraNeeds;
    clone.querySelector('.question-self').textContent = data.questionSelf;
    clone.querySelector('.trap').textContent = data.trap;
    clone.querySelector('.jc-message').textContent = data.jcMessage;

    resultTypesContainer.appendChild(clone);
  });

  showScreen(resultScreen);
  // Scroll to top of result
  window.scrollTo(0, 0);
}

// Event Listeners
startBtn.addEventListener('click', startQuiz);
restartBtn.addEventListener('click', startQuiz);
