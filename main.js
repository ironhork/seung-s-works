const words = [
  {word:'abandon', meaning:'버리다', ex_en:'The captain decided to abandon the sinking ship.', ex_ko:'선장은 침몰하는 배를 버리기로 결정했습니다.'},
  {word:'access', meaning:'접근', ex_en:'You need a password to access the system.', ex_ko:'시스템에 접근하려면 비밀번호가 필요합니다.'},
  {word:'accompany', meaning:'동행하다', ex_en:'Would you like me to accompany you to the station?', ex_ko:'역까지 동행해 드릴까요?'},
  {word:'achieve', meaning:'달성하다', ex_en:'You can achieve anything with hard work.', ex_ko:'열심히 노력하면 무엇이든 달성할 수 있습니다.'},
  {word:'acknowledge', meaning:'인정하다', ex_en:'He failed to acknowledge his mistake.', ex_ko:'그는 자신의 실수를 인정하지 않았습니다.'},
  {word:'acquire', meaning:'획득하다', ex_en:'The company plans to acquire new technology.', ex_ko:'그 회사는 새로운 기술을 획득할 계획입니다.'},
  {word:'adjust', meaning:'조정하다', ex_en:'You can adjust the seat height for comfort.', ex_ko:'편안함을 위해 좌석 높이를 조정할 수 있습니다.'},
  {word:'administration', meaning:'관리', ex_en:'The new administration improved the company policy.', ex_ko:'새로운 경영진이 회사 정책을 개선했습니다.'},
  {word:'advantage', meaning:'이점', ex_en:'Knowing English is a big advantage in business.', ex_ko:'영어를 아는 것은 비즈니스에서 큰 이점입니다.'},
  {word:'afford', meaning:'여유가 되다', ex_en:'I cannot afford to buy a new car right now.', ex_ko:'지금은 새 차를 살 여유가 없습니다.'},
  {word:'agenda', meaning:'안건', ex_en:'What is the next item on the meeting agenda?', ex_ko:'회의 안건의 다음 항목은 무엇입니까?'},
  {word:'agreement', meaning:'합의', ex_en:'The two countries reached an agreement on trade.', ex_ko:'두 나라는 무역에 관한 합의에 도달했습니다.'},
  {word:'announce', meaning:'발표하다', ex_en:'They will announce the winner tomorrow.', ex_ko:'그들은 내일 우승자를 발표할 것입니다.'},
  {word:'annual', meaning:'연간의', ex_en:'The annual report shows our growth this year.', ex_ko:'연차 보고서는 올해 우리의 성장을 보여줍니다.'},
  {word:'appointment', meaning:'약속', ex_en:'I have an appointment with the doctor at 3 PM.', ex_ko:'오후 3시에 의사와의 약속이 있습니다.'},
  {word:'approve', meaning:'승인하다', ex_en:'The manager will approve your request soon.', ex_ko:'매니저가 곧 당신의 요청을 승인할 것입니다.'},
  {word:'arrangement', meaning:'준비', ex_en:'We have made a special arrangement for the guests.', ex_ko:'손님들을 위해 특별한 준비를 했습니다.'},
  {word:'assistance', meaning:'도움', ex_en:'Do you need any assistance with your luggage?', ex_ko:'짐 옮기는 데 도움이 필요하신가요?'},
  {word:'attach', meaning:'첨부하다', ex_en:'Please attach the document to your email.', ex_ko:'이메일에 문서를 첨부해 주세요.'},
  {word:'available', meaning:'이용 가능한', ex_en:'Is this room available for the meeting?', ex_ko:'이 방을 회의에 이용할 수 있습니까?'},
  {word:'budget', meaning:'예산', ex_en:'We must stay within our annual budget.', ex_ko:'우리는 연간 예산 내에서 머물러야 합니다.'},
  {word:'candidate', meaning:'지원자', ex_en:'He is a strong candidate for the job.', ex_ko:'그는 그 일자리의 강력한 지원자입니다.'},
  {word:'capacity', meaning:'수용력', ex_en:'The theater has a seating capacity of 500.', ex_ko:'그 극장은 500석의 수용력을 갖추고 있습니다.'},
  {word:'certificate', meaning:'증명서', ex_en:'You will receive a certificate after the course.', ex_ko:'과정을 마친 후 증명서를 받게 될 것입니다.'},
  {word:'conference', meaning:'회의', ex_en:'The international conference will be held in Seoul.', ex_ko:'국제 회의가 서울에서 열릴 예정입니다.'},
  {word:'confirm', meaning:'확인하다', ex_en:'Please confirm your reservation by email.', ex_ko:'이메일로 예약을 확인해 주세요.'},
  {word:'consider', meaning:'고려하다', ex_en:'We should consider all options before deciding.', ex_ko:'결정하기 전에 모든 옵션을 고려해야 합니다.'},
  {word:'contract', meaning:'계약', ex_en:'Please read the contract carefully before signing.', ex_ko:'서명하기 전에 계약서를 주의 깊게 읽어주세요.'},
  {word:'contribute', meaning:'기여하다', ex_en:'Everyone should contribute to the project.', ex_ko:'모두가 프로젝트에 기여해야 합니다.'},
  {word:'customer', meaning:'고객', ex_en:'The customer is always right.', ex_ko:'고객은 항상 옳습니다.'},
  {word:'deadline', meaning:'마감일', ex_en:'The deadline for the project is Friday.', ex_ko:'프로젝트 마감일은 금요일입니다.'},
  {word:'department', meaning:'부서', ex_en:'Which department do you work for?', ex_ko:'어느 부서에서 일하십니까?'},
  {word:'deliver', meaning:'배달하다', ex_en:'The store will deliver your furniture today.', ex_ko:'상점에서 오늘 가구를 배달해 줄 것입니다.'},
  {word:'demand', meaning:'수요', ex_en:'There is a high demand for electric cars.', ex_ko:'전기차에 대한 수요가 높습니다.'},
  {word:'discuss', meaning:'논의하다', ex_en:'We need to discuss the plan for next month.', ex_ko:'다음 달 계획을 논의해야 합니다.'},
  {word:'effective', meaning:'효과적인', ex_en:'This is an effective way to learn English.', ex_ko:'이것은 영어를 배우는 효과적인 방법입니다.'},
  {word:'employee', meaning:'직원', ex_en:'Our company has more than 100 employees.', ex_ko:'우리 회사는 100명 이상의 직원이 있습니다.'},
  {word:'equipment', meaning:'장비', ex_en:'The laboratory needs new scientific equipment.', ex_ko:'연구실에 새로운 과학 장비가 필요합니다.'},
  {word:'estimate', meaning:'추정하다', ex_en:'They estimate the cost at 2,000 dollars.', ex_ko:'그들은 비용을 2,000달러로 추정합니다.'},
  {word:'expand', meaning:'확장하다', ex_en:'The business is looking to expand overseas.', ex_ko:'그 사업은 해외 확장을 계획하고 있습니다.'},
  {word:'expense', meaning:'비용', ex_en:'Travel expenses will be covered by the company.', ex_ko:'여행 비용은 회사에서 부담할 것입니다.'},
  {word:'facility', meaning:'시설', ex_en:'The sports facility is open to the public.', ex_ko:'그 스포츠 시설은 대중에게 개방되어 있습니다.'},
  {word:'feedback', meaning:'피드백', ex_en:'We welcome feedback from our customers.', ex_ko:'우리는 고객들의 피드백을 환영합니다.'},
  {word:'improve', meaning:'개선하다', ex_en:'I want to improve my speaking skills.', ex_ko:'나는 나의 말하기 능력을 개선하고 싶습니다.'},
  {word:'increase', meaning:'증가하다', ex_en:'Prices continue to increase every year.', ex_ko:'물가는 매년 계속해서 증가하고 있습니다.'},
  {word:'inventory', meaning:'재고', ex_en:'We need to check the inventory twice a year.', ex_ko:'일 년에 두 번 재고를 확인해야 합니다.'},
  {word:'maintain', meaning:'유지하다', ex_en:'It is important to maintain a healthy diet.', ex_ko:'건강한 식단을 유지하는 것이 중요합니다.'},
  {word:'negotiate', meaning:'협상하다', ex_en:'They are trying to negotiate a better deal.', ex_ko:'그들은 더 나은 거래를 위해 협상하려고 노력 중입니다.'},
  {word:'opportunity', meaning:'기회', ex_en:'This is a great opportunity to learn new skills.', ex_ko:'이것은 새로운 기술을 배울 수 있는 좋은 기회입니다.'},
  {word:'participate', meaning:'참여하다', ex_en:'How many people will participate in the event?', ex_ko:'얼마나 많은 사람들이 행사에 참여할까요?'},
  {word:'performance', meaning:'성과', ex_en:'The company rewards high employee performance.', ex_ko:'회사는 직원의 높은 성과에 보상합니다.'},
  {word:'policy', meaning:'정책', ex_en:'The new policy will take effect next month.', ex_ko:'새로운 정책은 다음 달에 시행될 예정입니다.'},
  {word:'procedure', meaning:'절차', ex_en:'Please follow the standard safety procedure.', ex_ko:'표준 안전 절차를 따라 주세요.'},
  {word:'promotion', meaning:'승진', ex_en:'Congratulations on your recent promotion!', ex_ko:'최근 승진하신 것을 축하드립니다!'},
  {word:'purchase', meaning:'구매', ex_en:'You can purchase tickets online.', ex_ko:'온라인으로 티켓을 구매할 수 있습니다.'},
  {word:'recommend', meaning:'추천하다', ex_en:'Can you recommend a good restaurant near here?', ex_ko:'이 근처에 괜찮은 레스토랑을 추천해 주시겠어요?'},
  {word:'reduce', meaning:'줄이다', ex_en:'We need to reduce costs to survive.', ex_ko:'살아남으려면 비용을 줄여야 합니다.'},
  {word:'refund', meaning:'환불', ex_en:'Can I get a refund for this product?', ex_ko:'이 제품에 대해 환불받을 수 있나요?'},
  {word:'register', meaning:'등록하다', ex_en:'You must register before the deadline.', ex_ko:'마감일 전에 등록해야 합니다.'},
  {word:'require', meaning:'요구하다', ex_en:'The job requires excellent communication skills.', ex_ko:'이 직업은 우수한 의사소통 능력을 요구합니다.'},
  {word:'reservation', meaning:'예약', ex_en:'I made a reservation for two people.', ex_ko:'두 명으로 예약했습니다.'},
  {word:'responsible', meaning:'책임 있는', ex_en:'You are responsible for your own safety.', ex_ko:'당신은 당신 자신의 안전에 책임이 있습니다.'},
  {word:'schedule', meaning:'일정', ex_en:'The flight schedule has been changed.', ex_ko:'비행 일정이 변경되었습니다.'},
  {word:'shipment', meaning:'배송', ex_en:'The shipment will arrive within three days.', ex_ko:'배송물이 3일 이내에 도착할 것입니다.'},
  {word:'strategy', meaning:'전략', ex_en:'The company needs a new marketing strategy.', ex_ko:'그 회사는 새로운 마케팅 전략이 필요합니다.'},
  {word:'submit', meaning:'제출하다', ex_en:'Please submit your report by noon.', ex_ko:'정오까지 보고서를 제출해 주세요.'},
  {word:'supply', meaning:'공급', ex_en:'The company will supply the necessary materials.', ex_ko:'회사가 필요한 재료를 공급할 것입니다.'},
  {word:'survey', meaning:'조사', ex_en:'According to a recent survey, people are happy.', ex_ko:'최근 조사에 따르면, 사람들은 행복합니다.'},
  {word:'transaction', meaning:'거래', ex_en:'The transaction was completed successfully.', ex_ko:'거래가 성공적으로 완료되었습니다.'},
  {word:'transportation', meaning:'운송', ex_en:'Public transportation is efficient in this city.', ex_ko:'이 도시는 대중교통이 효율적입니다.'},
  {word:'update', meaning:'업데이트', ex_en:'Please update your software regularly.', ex_ko:'정기적으로 소프트웨어를 업데이트해 주세요.'},
  {word:'vacancy', meaning:'공석', ex_en:'There is a vacancy in the sales department.', ex_ko:'영업 부서에 공석이 있습니다.'},
  {word:'vendor', meaning:'판매업체', ex_en:'The vendor sells fresh fruits every morning.', ex_ko:'그 판매업체는 매일 아침 신선한 과일을 팝니다.'}
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
const exampleBox = document.getElementById('example-box');
const exampleEn = document.getElementById('example-en');
const exampleKo = document.getElementById('example-ko');
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
  review = false; score = 0; total = 0; currentQuestionNum = 0;
  nextQuestion();
}

function reviewMode() {
  if (wrongWords.length === 0) { alert('복습할 단어가 없습니다'); return; }
  review = true; score = 0; total = 0; currentQuestionNum = 0;
  nextQuestion();
}

function nextQuestion() {
  if (currentQuestionNum >= questionLimit) { showSummary(); return; }
  resultEl.innerText = '';
  exampleBox.style.display = 'none';
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
  let source = review ? wrongWords : words;
  let correctValue = (quizMode === 'en-ko') ? source[current].meaning : source[current].word;
  total++; currentQuestionNum++;

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

  // 예문 표시
  let targetWord = source[current].word;
  let fullSentence = source[current].ex_en;
  // 단어 강조 (대소문자 무시)
  let regex = new RegExp('(\b' + targetWord + '\w*)', 'gi');
  exampleEn.innerHTML = fullSentence.replace(regex, '<span class="highlight"></span>');
  exampleKo.innerText = source[current].ex_ko;
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
}

function speakWord() {
  let source = review ? wrongWords : words;
  let enWord = source[current].word;
  if (enWord) {
    let speech = new SpeechSynthesisUtterance(enWord);
    const voices = window.speechSynthesis.getVoices();
    const usVoice = voices.find(v => v.lang === 'en-US' && v.name.includes('Google')) || voices.find(v => v.lang === 'en-US') || voices.find(v => v.lang.startsWith('en'));
    if (usVoice) speech.voice = usVoice;
    speech.lang = 'en-US'; speech.rate = 0.9;
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
document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && nextBtn.style.display === 'block') nextQuestion();
});