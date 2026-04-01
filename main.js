const words = [
  {word:'abandon', meaning:'버리다'},
  {word:'access', meaning:'접근'},
  {word:'accompany', meaning:'동행하다'},
  {word:'achieve', meaning:'달성하다'},
  {word:'acknowledge', meaning:'인정하다'},
  {word:'acquire', meaning:'획득하다'},
  {word:'adjust', meaning:'조정하다'},
  {word:'administration', meaning:'관리'},
  {word:'advantage', meaning:'이점'},
  {word:'afford', meaning:'여유가 되다'},
  {word:'agenda', meaning:'안건'},
  {word:'agreement', meaning:'합의'},
  {word:'announce', meaning:'발표하다'},
  {word:'annual', meaning:'연간의'},
  {word:'appointment', meaning:'약속'},
  {word:'approve', meaning:'승인하다'},
  {word:'arrangement', meaning:'준비'},
  {word:'assistance', meaning:'도움'},
  {word:'attach', meaning:'첨부하다'},
  {word:'available', meaning:'이용 가능한'},
  {word:'budget', meaning:'예산'},
  {word:'candidate', meaning:'지원자'},
  {word:'capacity', meaning:'수용력'},
  {word:'certificate', meaning:'증명서'},
  {word:'conference', meaning:'회의'},
  {word:'confirm', meaning:'확인하다'},
  {word:'consider', meaning:'고려하다'},
  {word:'contract', meaning:'계약'},
  {word:'contribute', meaning:'기여하다'},
  {word:'customer', meaning:'고객'},
  {word:'deadline', meaning:'마감일'},
  {word:'department', meaning:'부서'},
  {word:'deliver', meaning:'배달하다'},
  {word:'demand', meaning:'수요'},
  {word:'discuss', meaning:'논의하다'},
  {word:'effective', meaning:'효과적인'},
  {word:'employee', meaning:'직원'},
  {word:'equipment', meaning:'장비'},
  {word:'estimate', meaning:'추정하다'},
  {word:'expand', meaning:'확장하다'},
  {word:'expense', meaning:'비용'},
  {word:'facility', meaning:'시설'},
  {word:'feedback', meaning:'피드백'},
  {word:'improve', meaning:'개선하다'},
  {word:'increase', meaning:'증가하다'},
  {word:'inventory', meaning:'재고'},
  {word:'maintain', meaning:'유지하다'},
  {word:'negotiate', meaning:'협상하다'},
  {word:'opportunity', meaning:'기회'},
  {word:'participate', meaning:'참여하다'},
  {word:'performance', meaning:'성과'},
  {word:'policy', meaning:'정책'},
  {word:'procedure', meaning:'절차'},
  {word:'promotion', meaning:'승진'},
  {word:'purchase', meaning:'구매'},
  {word:'recommend', meaning:'추천하다'},
  {word:'reduce', meaning:'줄이다'},
  {word:'refund', meaning:'환불'},
  {word:'register', meaning:'등록하다'},
  {word:'require', meaning:'요구하다'},
  {word:'reservation', meaning:'예약'},
  {word:'responsible', meaning:'책임 있는'},
  {word:'schedule', meaning:'일정'},
  {word:'shipment', meaning:'배송'},
  {word:'strategy', meaning:'전략'},
  {word:'submit', meaning:'제출하다'},
  {word:'supply', meaning:'공급'},
  {word:'survey', meaning:'조사'},
  {word:'transaction', meaning:'거래'},
  {word:'transportation', meaning:'운송'},
  {word:'update', meaning:'업데이트'},
  {word:'vacancy', meaning:'공석'},
  {word:'vendor', meaning:'판매업체'}
];

let current;
let score = 0;
let total = 0;
let currentQuestionNum = 0;
let questionLimit = 10;
let wrongWords = JSON.parse(localStorage.getItem('wrongWords')) || [];
let review = false;
let quizMode = 'en-ko';

// Elements
const wordEl = document.getElementById('word');
const choicesEl = document.getElementById('choices');
const resultEl = document.getElementById('result');
const scoreEl = document.getElementById('score');
const nextBtn = document.getElementById('next-btn');
const speakBtn = document.getElementById('speak-btn');
const limitBtns = document.querySelectorAll('.limit-btn');

function toggleTheme() {
  document.body.classList.toggle('dark-mode');
  const isDark = document.body.classList.contains('dark-mode');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  document.getElementById('theme-btn').innerText = isDark ? '☀️ 화이트모드' : '🌙 다크모드';
}

function setMode(mode) {
  quizMode = mode;
  document.getElementById('mode-en-ko').classList.toggle('active', mode === 'en-ko');
  document.getElementById('mode-ko-en').classList.toggle('active', mode === 'ko-en');
  speakBtn.style.visibility = (mode === 'en-ko') ? 'visible' : 'hidden';
}

function setLimit(limit) {
  questionLimit = limit;
  limitBtns.forEach(btn => {
    btn.classList.toggle('active', parseInt(btn.innerText) === limit);
  });
}

function startQuiz() {
  review = false;
  score = 0;
  total = 0;
  currentQuestionNum = 0;
  nextQuestion();
}

function reviewMode() {
  if (wrongWords.length === 0) {
    alert('복습할 단어가 없습니다');
    return;
  }
  review = true;
  score = 0;
  total = 0;
  currentQuestionNum = 0;
  nextQuestion();
}

function nextQuestion() {
  if (currentQuestionNum >= questionLimit) {
    showSummary();
    return;
  }

  resultEl.innerText = '';
  nextBtn.style.display = 'none';
  
  let source = review ? wrongWords : words;
  current = Math.floor(Math.random() * source.length);

  let questionText = (quizMode === 'en-ko') ? source[current].word : source[current].meaning;
  let correctValue = (quizMode === 'en-ko') ? source[current].meaning : source[current].word;

  wordEl.innerText = questionText;

  let options = [correctValue];
  while (options.length < 4) {
    let randObj = words[Math.floor(Math.random() * words.length)];
    let randValue = (quizMode === 'en-ko') ? randObj.meaning : randObj.word;
    if (!options.includes(randValue)) {
      options.push(randValue);
    }
  }
  options.sort(() => Math.random() - 0.5);

  choicesEl.innerHTML = '';
  options.forEach(option => {
    const btn = document.createElement('button');
    btn.className = 'choice';
    btn.innerText = option;
    btn.onclick = () => checkAnswer(option);
    choicesEl.appendChild(btn);
  });

  speakBtn.style.visibility = (quizMode === 'en-ko') ? 'visible' : 'hidden';
}

function checkAnswer(answer) {
  if (nextBtn.style.display === 'block') return;

  let source = review ? wrongWords : words;
  let correctValue = (quizMode === 'en-ko') ? source[current].meaning : source[current].word;

  total++;
  currentQuestionNum++;

  if (answer === correctValue) {
    score++;
    resultEl.innerText = '✅ 정답입니다!';
    resultEl.style.color = '#28a745';
  } else {
    resultEl.innerText = '❌ 오답 (정답: ' + correctValue + ')';
    resultEl.style.color = '#dc3545';
    
    if (!wrongWords.find(w => w.word === source[current].word)) {
      wrongWords.push(source[current]);
      localStorage.setItem('wrongWords', JSON.stringify(wrongWords));
    }
  }

  nextBtn.style.display = 'block';
  if (quizMode === 'ko-en') speakBtn.style.visibility = 'visible';

  let rate = Math.round((score / total) * 100);
  scoreEl.innerText = '진행: ' + currentQuestionNum + '/' + questionLimit + ' | 점수: ' + score + ' | 정답률: ' + rate + '%';
}

function showSummary() {
  wordEl.innerText = '학습 완료! 🎉';
  choicesEl.innerHTML = '<h3>최종 점수: ' + score + ' / ' + questionLimit + '</h3>';
  choicesEl.innerHTML += '<p>정답률: ' + Math.round((score / questionLimit) * 100) + '%</p>';
  resultEl.innerText = '';
  nextBtn.style.display = 'none';
}

function speakWord() {
  let source = review ? wrongWords : words;
  let enWord = source[current].word;
  if (enWord) {
    let speech = new SpeechSynthesisUtterance(enWord);
    
    // 미국인 발음 설정 (en-US)
    const voices = window.speechSynthesis.getVoices();
    const usVoice = voices.find(v => v.lang === 'en-US' && v.name.includes('Google')) || 
                    voices.find(v => v.lang === 'en-US') || 
                    voices.find(v => v.lang.startsWith('en'));
    
    if (usVoice) speech.voice = usVoice;
    speech.lang = 'en-US';
    speech.rate = 0.9; // 약간 천천히 읽어줌
    window.speechSynthesis.speak(speech);
  }
}

// 브라우저 보이스 로딩 대기
window.speechSynthesis.onvoiceschanged = () => { window.speechSynthesis.getVoices(); };

(function() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    const themeBtn = document.getElementById('theme-btn');
    if (themeBtn) themeBtn.innerText = '☀️ 화이트모드';
  }
})();

document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && nextBtn.style.display === 'block') {
    nextQuestion();
  }
});