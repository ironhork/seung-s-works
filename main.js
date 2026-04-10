const words = [
  {word:'appointment', meaning:'약속, 예약', ex_en:'I have an appointment with the marketing director at 2 PM.', ex_ko:'오후 2시에 마케팅 이사와의 약속이 있습니다.'},
  {word:'attend', meaning:'참석하다', ex_en:'All staff members are required to attend the annual safety workshop.', ex_ko:'모든 직원은 연례 안전 워크숍에 참석해야 합니다.'},
  {word:'confirm', meaning:'확인하다, 확정하다', ex_en:'Please confirm your attendance by replying to this email.', ex_ko:'이 이메일에 답장하여 참석 여부를 확인해 주십시오.'},
  {word:'postpone', meaning:'연기하다, 미루다', ex_en:'The meeting has been postponed until next Monday.', ex_ko:'회의가 다음 주 월요일까지 연기되었습니다.'},
  {word:'submit', meaning:'제출하다', ex_en:'You must submit your expense report by the end of the month.', ex_ko:'월말까지 지출 보고서를 제출해야 합니다.'},
  {word:'schedule', meaning:'일정, 일정을 잡다', ex_en:'We need to schedule a follow-up call to discuss the project.', ex_ko:'프로젝트를 논의하기 위해 후속 통화 일정을 잡아야 합니다.'},
  {word:'contract', meaning:'계약(서)', ex_en:'Both parties must sign the contract before the work begins.', ex_ko:'업무가 시작되기 전에 양측 모두 계약서에 서명해야 합니다.'},
  {word:'invoice', meaning:'송장, 청구서', ex_en:'The invoice for the supplies was sent to the accounting department.', ex_ko:'비품 대금 청구서가 회계 부서로 발송되었습니다.'},
  {word:'negotiate', meaning:'협상하다', ex_en:'The company is trying to negotiate a better deal with its suppliers.', ex_ko:'회사는 공급업체와 더 나은 거래를 위해 협상하려고 노력 중입니다.'},
  {word:'purchase', meaning:'구매하다, 구매', ex_en:'Customers can purchase the new software online starting tomorrow.', ex_ko:'고객들은 내일부터 온라인으로 새 소프트웨어를 구매할 수 있습니다.'},
  {word:'requirement', meaning:'요구사항, 요건', ex_en:'Meeting the deadline is a primary requirement for this project.', ex_ko:'마감일을 지키는 것이 이 프로젝트의 주요 요구사항입니다.'},
  {word:'budget', meaning:'예산', ex_en:'We need to stay within the budget allocated for the campaign.', ex_ko:'캠페인에 할당된 예산 범위 내에서 집행해야 합니다.'},
  {word:'application', meaning:'지원(서), 신청', ex_en:'Your application for the senior designer position is being reviewed.', ex_ko:'수석 디자이너 직무에 대한 귀하의 지원서가 검토 중입니다.'},
  {word:'candidate', meaning:'후보자, 지원자', ex_en:'We interviewed several qualified candidates for the managerial role.', ex_ko:'우리는 관리직 직무에 적합한 여러 후보자들을 인터뷰했습니다.'},
  {word:'benefit', meaning:'혜택, 복지', ex_en:'The company offers a comprehensive benefit package.', ex_ko:'회사는 포괄적인 복지 혜택을 제공합니다.'},
  {word:'promotion', meaning:'승진, 홍보', ex_en:'She received a promotion to regional manager after three years.', ex_ko:'그녀는 3년 만에 지역 매니저로 승진했습니다.'},
  {word:'representative', meaning:'대표자, 직원(담당자)', ex_en:'A customer service representative will be with you shortly.', ex_ko:'고객 서비스 담당자가 곧 안내해 드릴 것입니다.'},
  {word:'vacancy', meaning:'공석, 빈자리', ex_en:'There is currently a vacancy in the sales department.', ex_ko:'현재 영업 부서에 공석이 있습니다.'},
  {word:'delivery', meaning:'배송, 배달', ex_en:'The estimated delivery time for your order is three business days.', ex_ko:'주문하신 상품의 예상 배송 기간은 영업일 기준 3일입니다.'},
  {word:'equipment', meaning:'장비, 비품', ex_en:'The laboratory is fitted with the latest high-tech equipment.', ex_ko:'실험실에는 최신 첨단 장비가 갖춰져 있습니다.'},
  {word:'warranty', meaning:'보증(서)', ex_en:'The laptop comes with a two-year warranty covering parts.', ex_ko:'노트북에는 부품을 포함한 2년 보증이 제공됩니다.'},
  {word:'refund', meaning:'환불, 환불하다', ex_en:'If you are not satisfied, you can request a full refund.', ex_ko:'만족하지 못하신다면 전액 환불을 요청하실 수 있습니다.'},
  {word:'inventory', meaning:'재고(목록)', ex_en:'We conduct a physical inventory check at the end of every quarter.', ex_ko:'우리는 매 분기말에 실물 재고 조사를 실시합니다.'},
  {word:'maintenance', meaning:'유지, 보수', ex_en:'Regular maintenance is essential to keep the machinery running.', ex_ko:'기계를 계속 가동하려면 정기적인 유지보수가 필수적입니다.'},
  {word:'analyze', meaning:'분석하다', ex_en:'We need to analyze the market trends before the launch.', ex_ko:'출시 전에 시장 트렌드를 분석해야 합니다.'},
  {word:'collaborate', meaning:'협력하다', ex_en:'Our team will collaborate with the engineering department.', ex_ko:'우리 팀은 엔지니어링 부서와 협력할 것입니다.'},
  {word:'implement', meaning:'시행하다, 이행하다', ex_en:'The new security policy will be implemented starting next month.', ex_ko:'새로운 보안 정책이 다음 달부터 시행될 예정입니다.'},
  {word:'productive', meaning:'생산적인', ex_en:'The morning session was very productive and we reached several decisions.', ex_ko:'오전 세션은 매우 생산적이었으며 몇 가지 결정을 내렸습니다.'},
  {word:'reliable', meaning:'신뢰할 수 있는', ex_en:'We are looking for a reliable partner for international shipping.', ex_ko:'우리는 국제 배송을 담당할 신뢰할 수 있는 파트너를 찾고 있습니다.'},
  {word:'strategy', meaning:'전략', ex_en:'The CEO outlined a new strategy to increase market share.', ex_ko:'CEO는 시장 점유율을 높이기 위한 새로운 전략을 설명했습니다.'},
  {word:'comply', meaning:'준수하다, 따르다', ex_en:'All employees must comply with the new safety regulations.', ex_ko:'모든 직원은 새로운 안전 규정을 준수해야 합니다.'},
  {word:'mandatory', meaning:'의무적인, 필수의', ex_en:'Attendance at the orientation session is mandatory.', ex_ko:'오리엔테이션 세션 참석은 의무적입니다.'},
  {word:'feasible', meaning:'실행 가능한', ex_en:'We need to determine if the proposed project is feasible.', ex_ko:'제안된 프로젝트가 실행 가능한지 결정해야 합니다.'},
  {word:'comprehensive', meaning:'포괄적인, 종합적인', ex_en:'The training program provides a comprehensive overview of the system.', ex_ko:'교육 프로그램은 시스템에 대한 포괄적인 개요를 제공합니다.'},
  {word:'contingency', meaning:'비상사태, 뜻밖의 사고', ex_en:'We have developed a contingency plan in case of emergency.', ex_ko:'우리는 비상사태에 대비해 비상 계획을 세웠습니다.'},
  {word:'substantial', meaning:'상당한, 실질적인', ex_en:'The company made a substantial investment in research.', ex_ko:'회사는 연구에 상당한 투자를 했습니다.'},
  {word:'prerequisite', meaning:'전제 조건, 필수 기초', ex_en:'Prior experience is a prerequisite for this advanced course.', ex_ko:'이 고급 과정에는 사전 경험이 필수 조건입니다.'},
  {word:'compliance', meaning:'준수, 따름', ex_en:'The factory was inspected for compliance with safety standards.', ex_ko:'공장은 안전 기준 준수 여부를 검사받았습니다.'},
  {word:'delegate', meaning:'위임하다, 대표자', ex_en:'Managers should learn how to delegate tasks effectively.', ex_ko:'매니저들은 작업을 효과적으로 위임하는 방법을 배워야 합니다.'},
  {word:'terminate', meaning:'종료하다, 해지하다', ex_en:'Either party can terminate the agreement with 30 days notice.', ex_ko:'어느 쪽이든 30일 전 통지로 계약을 종료할 수 있습니다.'}
];

let activeWord;
let score = 0;
let total = 0;
let currentQuestionNum = 0;
let questionLimit = 10;
let wrongWords = JSON.parse(localStorage.getItem('wrongWords')) || [];
let scoreboard = JSON.parse(localStorage.getItem('scoreboard')) || [];
let customVoca = JSON.parse(localStorage.getItem('customVoca')) || [];
let userNickname = localStorage.getItem('nickname') || '';
let review = false;
let isVocaQuiz = false;
let quizMode = 'en-ko';

// Elements
const wordEl = document.getElementById('word');
const choicesEl = document.getElementById('choices');
const resultEl = document.getElementById('result');
const exampleBox = document.getElementById('example-box');
const exampleEn = document.getElementById('example-en');
const exampleKo = document.getElementById('example-ko');
const scoreEl = document.getElementById('score');
const nextBtn = document.getElementById('next-btn');
const speakBtn = document.getElementById('speak-btn');
const nicknameInput = document.getElementById('nickname-input');
const userWelcome = document.getElementById('user-welcome');
const scoreboardList = document.getElementById('scoreboard-list');
const scoreboardContainer = document.getElementById('scoreboard-container');
const vocaContent = document.getElementById('voca-content');
const vocaList = document.getElementById('voca-list');
const vocaWordInput = document.getElementById('voca-word');
const vocaMeaningInput = document.getElementById('voca-meaning');

// 섹션 전환 기능
function showSection(sectionId) {
  const sections = ['home', 'guide', 'about'];
  sections.forEach(s => {
    const el = document.getElementById(`${s}-section`);
    if (el) el.style.display = (s === sectionId) ? 'block' : 'none';
  });
  window.scrollTo(0, 0);
}

// 탭 전환 기능
function openTab(evt, tabName) {
  const tabContents = document.getElementsByClassName("tab-content");
  for (let i = 0; i < tabContents.length; i++) {
    tabContents[i].classList.remove("active");
  }

  const tabBtns = document.getElementsByClassName("tab-btn");
  for (let i = 0; i < tabBtns.length; i++) {
    tabBtns[i].classList.remove("active");
  }

  document.getElementById(tabName).classList.add("active");
  evt.currentTarget.classList.add("active");
}

function toggleTheme() {
  document.body.classList.toggle('dark-mode');
  const isDark = document.body.classList.contains('dark-mode');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  document.getElementById('theme-btn').innerText = isDark ? '☀️' : '🌙';
}

function saveNickname() {
  const val = nicknameInput.value.trim();
  if (!val) { alert('닉네임을 입력해주세요!'); return; }
  userNickname = val;
  localStorage.setItem('nickname', val);
  showWelcome();
}

function showWelcome() {
  if (userNickname) {
    if (nicknameInput && nicknameInput.parentElement) {
      nicknameInput.parentElement.style.display = 'none';
      document.querySelector('#auth-section .selector-label').style.display = 'none';
    }
    userWelcome.innerText = `반갑습니다, ${userNickname}님! 👋`;
    userWelcome.style.display = 'block';
  }
}

function loadScoreboard() {
  scoreboardList.innerHTML = '';
  if (scoreboard.length === 0) {
    scoreboardList.innerHTML = '<p style="color:#999; text-align:center; padding: 20px;">아직 기록이 없습니다.</p>';
    return;
  }
  scoreboard.sort((a, b) => b.score - a.score || b.rate - a.rate);
  const top10 = scoreboard.slice(0, 10);
  top10.forEach((entry, index) => {
    const item = document.createElement('div');
    item.className = 'scoreboard-item';
    item.style.display = 'flex';
    item.style.justifyContent = 'space-between';
    item.style.padding = '10px';
    item.style.borderBottom = '1px solid var(--border-color)';
    item.innerHTML = `<span>${index + 1}. ${entry.nickname}</span> <span><b>${entry.score}/${entry.limit}</b> (${entry.rate}%)</span>`;
    scoreboardList.appendChild(item);
  });
}

function updateScoreboard(finalScore, limit) {
  if (!userNickname) return;
  const rate = Math.round((finalScore / limit) * 100);
  scoreboard.push({ nickname: userNickname, score: finalScore, limit: limit, rate: rate, date: new Date().toLocaleDateString() });
  localStorage.setItem('scoreboard', JSON.stringify(scoreboard));
  loadScoreboard();
}

function setMode(mode) {
  quizMode = mode;
  document.getElementById('mode-en-ko').classList.toggle('active', mode === 'en-ko');
  document.getElementById('mode-ko-en').classList.toggle('active', mode === 'ko-en');
  speakBtn.style.visibility = (mode === 'en-ko') ? 'visible' : 'hidden';
}

function setLimit(limit) { questionLimit = limit; }

function startQuiz() {
  review = false; isVocaQuiz = false; score = 0; total = 0; currentQuestionNum = 0;
  scoreboardContainer.style.display = 'none';
  document.getElementById('score-board').style.display = 'block';
  nextQuestion();
}

function reviewMode() {
  if (wrongWords.length === 0) { alert('복습할 단어가 없습니다'); return; }
  review = true; isVocaQuiz = false; score = 0; total = 0; currentQuestionNum = 0;
  scoreboardContainer.style.display = 'none';
  nextQuestion();
}

function vocaQuizMode() {
  if (customVoca.length < 4) { alert('나만의 단어장에 최소 4개 이상의 단어가 필요합니다!'); return; }
  review = false; isVocaQuiz = true; score = 0; total = 0; currentQuestionNum = 0;
  scoreboardContainer.style.display = 'none';
  nextQuestion();
}

function nextQuestion() {
  let source = isVocaQuiz ? customVoca : (review ? wrongWords : words);
  let limit = isVocaQuiz ? Math.min(customVoca.length, questionLimit) : (review ? wrongWords.length : questionLimit);

  if (currentQuestionNum >= limit) { showSummary(); return; }
  resultEl.innerText = ''; exampleBox.style.display = 'none'; nextBtn.style.display = 'none';
  
  let randomIndex = Math.floor(Math.random() * source.length);
  activeWord = source[randomIndex];

  let questionText = (quizMode === 'en-ko') ? activeWord.word : activeWord.meaning;
  let correctValue = (quizMode === 'en-ko') ? activeWord.meaning : activeWord.word;
  wordEl.innerText = questionText;

  let options = [correctValue];
  let allPossibleWords = [...words, ...customVoca];
  while (options.length < 4) {
    let randObj = allPossibleWords[Math.floor(Math.random() * allPossibleWords.length)];
    let randValue = (quizMode === 'en-ko') ? randObj.meaning : randObj.word;
    if (!options.includes(randValue)) options.push(randValue);
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
  let correctValue = (quizMode === 'en-ko') ? activeWord.meaning : activeWord.word;
  total++; currentQuestionNum++;

  const choices = document.querySelectorAll('.choice');
  choices.forEach(btn => {
    if (btn.innerText === correctValue) btn.classList.add('correct');
    else if (btn.innerText === answer) btn.classList.add('wrong');
  });

  if (answer === correctValue) {
    score++;
    resultEl.innerText = '✅ 정답입니다!';
    resultEl.style.color = 'var(--success-color)';
  } else {
    resultEl.innerText = '❌ 오답 (정답: ' + correctValue + ')';
    resultEl.style.color = 'var(--danger-color)';
    if (!wrongWords.find(w => w.word === activeWord.word)) {
      wrongWords.push(activeWord);
      localStorage.setItem('wrongWords', JSON.stringify(wrongWords));
    }
  }

  if (activeWord.ex_en && activeWord.ex_ko) {
    exampleEn.innerHTML = activeWord.ex_en.replace(new RegExp(activeWord.word, 'gi'), '<b>$&</b>');
    exampleKo.innerText = activeWord.ex_ko;
    exampleBox.style.display = 'block';
  }

  nextBtn.style.display = 'block';
  let limit = isVocaQuiz ? Math.min(customVoca.length, questionLimit) : (review ? wrongWords.length : questionLimit);
  scoreEl.innerText = `진행: ${currentQuestionNum}/${limit} | 점수: ${score}`;
}

function showSummary() {
  let limit = isVocaQuiz ? Math.min(customVoca.length, questionLimit) : (review ? wrongWords.length : questionLimit);
  wordEl.innerText = '학습 완료! 🎉';
  choicesEl.innerHTML = `<h3>최종 점수: ${score} / ${limit}</h3><p>정답률: ${Math.round((score / limit) * 100)}%</p>`;
  resultEl.innerText = ''; exampleBox.style.display = 'none'; nextBtn.style.display = 'none';
  document.getElementById('score-board').style.display = 'none';
  scoreboardContainer.style.display = 'block';
  if (!review && !isVocaQuiz) updateScoreboard(score, questionLimit);
}

function speakWord() {
  if (activeWord) {
    let s = new SpeechSynthesisUtterance(activeWord.word);
    s.lang = 'en-US'; s.rate = 0.9; window.speechSynthesis.speak(s);
  }
}

function speakExample() {
  if (activeWord && activeWord.ex_en) {
    let s = new SpeechSynthesisUtterance(activeWord.ex_en);
    s.lang = 'en-US'; s.rate = 0.85; window.speechSynthesis.speak(s);
  }
}

function toggleVoca() {
  const isNone = vocaContent.style.display === 'none';
  vocaContent.style.display = isNone ? 'flex' : 'none';
}

function renderVoca() {
  vocaList.innerHTML = '';
  // 알파벳 순으로 정렬
  customVoca.sort((a, b) => a.word.toLowerCase().localeCompare(b.word.toLowerCase()));
  
  customVoca.forEach((item, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <div class="voca-item-info">
        <span class="voca-word-text">${item.word}</span>
        <span class="voca-meaning-text">${item.meaning}</span>
      </div>
      <button class="delete-voca-btn" onclick="deleteCustomWord(${index})" title="삭제">×</button>
    `;
    vocaList.appendChild(li);
  });
}

function addCustomWord() {
  const word = vocaWordInput.value.trim();
  const meaning = vocaMeaningInput.value.trim();
  if (!word || !meaning) { alert('단어와 뜻을 모두 입력해주세요!'); return; }
  
  // 중복 체크
  if (customVoca.find(v => v.word.toLowerCase() === word.toLowerCase())) {
    alert('이미 등록된 단어입니다!');
    return;
  }

  customVoca.push({ word, meaning });
  localStorage.setItem('customVoca', JSON.stringify(customVoca));
  vocaWordInput.value = ''; vocaMeaningInput.value = ''; 
  renderVoca();
}

function deleteCustomWord(index) {
  customVoca.splice(index, 1);
  localStorage.setItem('customVoca', JSON.stringify(customVoca));
  renderVoca();
}

// 초기화
(function() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') document.body.classList.add('dark-mode');
  showWelcome(); loadScoreboard(); renderVoca();
})();

document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && nextBtn.style.display === 'block') nextQuestion();
});