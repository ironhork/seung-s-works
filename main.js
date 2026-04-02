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
let userNickname = localStorage.getItem('nickname') || '';
let review = false;
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

function toggleTheme() {
  document.body.classList.toggle('dark-mode');
  const isDark = document.body.classList.contains('dark-mode');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  document.getElementById('theme-btn').innerText = isDark ? '☀️ 화이트모드' : '🌙 다크모드';
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
    nicknameInput.parentElement.style.display = 'none';
    userWelcome.innerText = `반갑습니다, ${userNickname}님! 👋`;
    userWelcome.style.display = 'block';
  }
}

function loadScoreboard() {
  scoreboardList.innerHTML = '';
  if (scoreboard.length === 0) {
    scoreboardList.innerHTML = '<p style="color:#999; text-align:center; padding: 20px;">아직 기록이 없습니다. 첫 번째 주인공이 되어보세요!</p>';
    return;
  }
  
  scoreboard.sort((a, b) => b.score - a.score || b.rate - a.rate);
  const top10 = scoreboard.slice(0, 10);
  
  top10.forEach((entry, index) => {
    const item = document.createElement('div');
    item.style.display = 'flex';
    item.style.justifyContent = 'space-between';
    item.style.alignItems = 'center';
    
    let rankDisplay = `<span class="rank-badge">${index + 1}</span>`;
    if (index === 0) rankDisplay = '<span class="rank-badge">🥇</span>';
    else if (index === 1) rankDisplay = '<span class="rank-badge">🥈</span>';
    else if (index === 2) rankDisplay = '<span class="rank-badge">🥉</span>';

    item.innerHTML = `
      <div style="display: flex; align-items: center;">
        ${rankDisplay}
        <strong style="font-size: 15px;">${entry.nickname}</strong>
      </div>
      <div style="text-align: right;">
        <div style="font-weight: 700;">${entry.score}/${entry.limit}</div>
        <div style="font-size: 12px; color: var(--text-muted);">${entry.rate}%</div>
      </div>
    `;
    scoreboardList.appendChild(item);
  });
}

function updateScoreboard(finalScore, limit) {
  if (!userNickname) return;
  const rate = Math.round((finalScore / limit) * 100);
  scoreboard.push({
    nickname: userNickname,
    score: finalScore,
    limit: limit,
    rate: rate,
    date: new Date().toLocaleDateString()
  });
  localStorage.setItem('scoreboard', JSON.stringify(scoreboard));
  loadScoreboard();
}

function setMode(mode) {
  quizMode = mode;
  document.getElementById('mode-en-ko').classList.toggle('active', mode === 'en-ko');
  document.getElementById('mode-ko-en').classList.toggle('active', mode === 'ko-en');
  speakBtn.style.visibility = (mode === 'en-ko') ? 'visible' : 'hidden';
}

function setLimit(limit) {
  questionLimit = limit;
}

function startQuiz() {
  review = false; score = 0; total = 0; currentQuestionNum = 0;
  scoreboardContainer.style.display = 'none';
  nextQuestion();
}

function reviewMode() {
  if (wrongWords.length === 0) { alert('복습할 단어가 없습니다'); return; }
  review = true; score = 0; total = 0; currentQuestionNum = 0;
  scoreboardContainer.style.display = 'none';
  nextQuestion();
}

function nextQuestion() {
  if (currentQuestionNum >= questionLimit) { showSummary(); return; }
  resultEl.innerText = '';
  exampleBox.style.display = 'none';
  nextBtn.style.display = 'none';
  
  let source = review ? wrongWords : words;
  let randomIndex = Math.floor(Math.random() * source.length);
  activeWord = source[randomIndex];

  let questionText = (quizMode === 'en-ko') ? activeWord.word : activeWord.meaning;
  let correctValue = (quizMode === 'en-ko') ? activeWord.meaning : activeWord.word;
  wordEl.innerText = questionText;

  let options = [correctValue];
  while (options.length < 4) {
    let randObj = words[Math.floor(Math.random() * words.length)];
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
    if (btn.innerText === correctValue) {
      btn.classList.add('correct');
    } else if (btn.innerText === answer && answer !== correctValue) {
      btn.classList.add('wrong');
    }
  });

  if (answer === correctValue) {
    score++;
    resultEl.innerText = '✅ 정답입니다!';
    resultEl.style.color = '#28a745';
  } else {
    resultEl.innerText = '❌ 오답 (정답: ' + correctValue + ')';
    resultEl.style.color = '#dc3545';
    if (!wrongWords.find(w => w.word === activeWord.word)) {
      wrongWords.push(activeWord);
      localStorage.setItem('wrongWords', JSON.stringify(wrongWords));
    }
  }

  // 예문 표시 및 스타일링
  let targetWord = activeWord.word;
  let fullSentence = activeWord.ex_en;
  let regex = new RegExp('(\\b' + targetWord + '\\w*)', 'gi');
  exampleEn.innerHTML = fullSentence.replace(regex, '<span class="highlight">$1</span>');
  exampleKo.innerText = activeWord.ex_ko;
  exampleBox.style.display = 'block';

  nextBtn.style.display = 'block';
  if (quizMode === 'ko-en') speakBtn.style.visibility = 'visible';
  let rate = Math.round((score / total) * 100);
  scoreEl.innerText = '진행: ' + currentQuestionNum + '/' + questionLimit + ' | 점수: ' + score + ' | 정답률: ' + rate + '%';
}

function showSummary() {
  wordEl.innerText = '학습 완료! 🎉';
  choicesEl.innerHTML = '<h3>최종 점수: ' + score + ' / ' + questionLimit + '</h3><p>정답률: ' + Math.round((score / questionLimit) * 100) + '%</p>';
  resultEl.innerText = ''; exampleBox.style.display = 'none'; nextBtn.style.display = 'none';
  if (!review) updateScoreboard(score, questionLimit);
}

function getAmericanVoice() {
  const voices = window.speechSynthesis.getVoices();
  return voices.find(v => v.lang === 'en-US' && v.name.includes('Google')) || 
         voices.find(v => v.lang === 'en-US') || 
         voices.find(v => v.lang.startsWith('en'));
}

function speakWord() {
  if (activeWord && activeWord.word) {
    let speech = new SpeechSynthesisUtterance(activeWord.word);
    speech.voice = getAmericanVoice();
    speech.lang = 'en-US'; speech.rate = 0.9;
    window.speechSynthesis.speak(speech);
  }
}

function speakExample() {
  if (activeWord && activeWord.ex_en) {
    let speech = new SpeechSynthesisUtterance(activeWord.ex_en);
    speech.voice = getAmericanVoice();
    speech.lang = 'en-US'; speech.rate = 0.85; // 문장은 조금 더 천천히
    window.speechSynthesis.speak(speech);
  }
}

window.speechSynthesis.onvoiceschanged = () => { window.speechSynthesis.getVoices(); };
(function() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    const themeBtn = document.getElementById('theme-btn');
    if (themeBtn) themeBtn.innerText = '☀️ 화이트모드';
  }
})();

showWelcome();
loadScoreboard();

document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && nextBtn.style.display === 'block') nextQuestion();
});