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
  {word:'inventory', meaning:'재고(목록)', ex_en:'We conduct a physical inventory count at the end of every quarter.', ex_ko:'우리는 매 분기말에 실물 재고 조사를 실시합니다.'},
  {word:'maintenance', meaning:'유지, 보수', ex_en:'Regular maintenance is essential to keep the machinery running.', ex_ko:'기계를 계속 가동하려면 정기적인 유지보수가 필수적입니다.'},
  {word:'analyze', meaning:'분석하다', ex_en:'We need to analyze the market trends before the product launch.', ex_ko:'제품 출시 전에 시장 트렌드를 분석해야 합니다.'},
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
  {word:'terminate', meaning:'종료하다, 해지하다', ex_en:'Either party can terminate the agreement with 30 days notice.', ex_ko:'어느 쪽이든 30일 전 통지로 계약을 종료할 수 있습니다.'},
  {word:'acquire', meaning:'습득하다, 획득하다', ex_en:'The company plans to acquire several smaller firms this year.', ex_ko:'그 회사는 올해 몇몇 작은 회사들을 인수할 계획입니다.'},
  {word:'adjourn', meaning:'휴회하다, 중단하다', ex_en:'The chairperson decided to adjourn the meeting until tomorrow.', ex_ko:'의장은 회의를 내일까지 휴회하기로 결정했습니다.'},
  {word:'allocate', meaning:'할당하다, 배정하다', ex_en:'Funds were allocated for the renovation of the laboratory.', ex_ko:'실험실 보수 공사를 위해 자금이 할당되었습니다.'},
  {word:'amend', meaning:'개정하다, 수정하다', ex_en:'The law was amended to include stricter environmental standards.', ex_ko:'법률은 더 엄격한 환경 기준을 포함하도록 개정되었습니다.'},
  {word:'audit', meaning:'회계 감사, 감사하다', ex_en:'An external firm will conduct an independent audit next month.', ex_ko:'외부 업체가 다음 달에 독립적인 회계 감사를 실시할 것입니다.'},
  {word:'authorize', meaning:'승인하다, 권한을 부여하다', ex_en:'Only authorized personnel are allowed to enter the server room.', ex_ko:'승인된 직원만이 서버실에 들어갈 수 있습니다.'},
  {word:'behalf', meaning:'~을 대신하여, 대표하여', ex_en:'She accepted the award on behalf of the entire research team.', ex_ko:'그녀는 연구팀 전체를 대표하여 상을 받았습니다.'},
  {word:'beverage', meaning:'음료', ex_en:'Complimentary beverages will be served during the break.', ex_ko:'쉬는 시간 동안 무료 음료가 제공될 예정입니다.'},
  {word:'bid', meaning:'입찰, 입찰하다', ex_en:'Several construction firms submitted a bid for the bridge project.', ex_ko:'여러 건설사가 교량 프로젝트에 입찰서를 제출했습니다.'},
  {word:'board', meaning:'이사회, 위원회', ex_en:'The board of directors approved the merger unanimously.', ex_ko:'이사회는 합병을 만장일치로 승인했습니다.'},
  {word:'brochure', meaning:'안내 책자, 브로슈어', ex_en:'Please take a brochure for more information about our services.', ex_ko:'저희 서비스에 대한 자세한 정보는 안내 책자를 참고해 주세요.'},
  {word:'campaign', meaning:'캠페인, 홍보 활동', ex_en:'The marketing campaign led to a significant increase in sales.', ex_ko:'마케팅 캠페인은 판매량의 상당한 증가로 이어졌습니다.'},
  {word:'caption', meaning:'자막, 설명문', ex_en:'Each photo in the exhibition has a detailed caption.', ex_ko:'전시회의 각 사진에는 상세한 설명문이 붙어 있습니다.'},
  {word:'cargo', meaning:'화물, 짐', ex_en:'The ship was carrying a large cargo of electronics.', ex_ko:'그 배는 대량의 전자 제품 화물을 운반하고 있었습니다.'},
  {word:'category', meaning:'범주, 카테고리', ex_en:'The products are organized into several different categories.', ex_ko:'제품들은 여러 다른 카테고리로 분류되어 있습니다.'},
  {word:'certificate', meaning:'증명서, 자격증', ex_en:'Participants will receive a certificate upon completion of the course.', ex_ko:'참가자들은 과정 수료 시 증명서를 받게 됩니다.'},
  {word:'circulation', meaning:'발행 부수, 유통', ex_en:'The magazine has a monthly circulation of over 100,000 copies.', ex_ko:'그 잡지는 매달 10만 부 이상의 발행 부수를 기록합니다.'},
  {word:'client', meaning:'고객, 의뢰인', ex_en:'We strive to maintain a good relationship with our long-term clients.', ex_ko:'우리는 장기 고객들과 좋은 관계를 유지하기 위해 노력합니다.'},
  {word:'closure', meaning:'폐쇄, 마감', ex_en:'The road closure will be in effect until the end of the weekend.', ex_ko:'도로 폐쇄는 이번 주말까지 계속될 것입니다.'},
  {word:'commitment', meaning:'약속, 헌신', ex_en:'The company has a strong commitment to quality and excellence.', ex_ko:'그 회사는 품질과 우수성에 대해 강한 의지를 가지고 있습니다.'},
  {word:'compensation', meaning:'보상, 보수', ex_en:'Employees are entitled to compensation for overtime work.', ex_ko:'직원들은 초과 근무에 대한 보상을 받을 권리가 있습니다.'},
  {word:'competent', meaning:'유능한, 능숙한', ex_en:'We need a competent manager to lead the new project team.', ex_ko:'우리는 새 프로젝트 팀을 이끌 유능한 매니저가 필요합니다.'},
  {word:'compulsory', meaning:'의무적인, 강제적인', ex_en:'Safety training is compulsory for all new employees.', ex_ko:'모든 신입 사원에게 안전 교육은 의무적입니다.'},
  {word:'concise', meaning:'간결한, 축약된', ex_en:'The report should be concise and easy to understand.', ex_ko:'보고서는 간결하고 이해하기 쉬워야 합니다.'},
  {word:'confidential', meaning:'기밀의, 비밀의', ex_en:'All client information must be kept strictly confidential.', ex_ko:'모든 고객 정보는 엄격히 기밀로 유지되어야 합니다.'},
  {word:'congratulate', meaning:'축하하다', ex_en:'I would like to congratulate you on your recent promotion.', ex_ko:'귀하의 최근 승진을 축하드립니다.'},
  {word:'consensus', meaning:'합의, 의견 일치', ex_en:'The committee reached a consensus on the new policy.', ex_ko:'위원회는 새로운 정책에 대해 합의에 도달했습니다.'},
  {word:'consultant', meaning:'컨설턴트, 고문', ex_en:'We hired a consultant to improve our business strategy.', ex_ko:'우리는 비즈니스 전략을 개선하기 위해 컨설턴트를 고용했습니다.'},
  {word:'contribute', meaning:'기여하다, 공헌하다', ex_en:'Every team member contributed to the success of the project.', ex_ko:'모든 팀원이 프로젝트의 성공에 기여했습니다.'},
  {word:'convenient', meaning:'편리한, 사용하기 쉬운', ex_en:'The new office location is very convenient for public transport.', ex_ko:'새 사무실 위치는 대중교통 이용이 매우 편리합니다.'},
  {word:'coordinate', meaning:'조정하다, 조율하다', ex_en:'We need someone to coordinate the logistics for the event.', ex_ko:'우리는 행사 물류를 조정할 사람이 필요합니다.'},
  {word:'corporate', meaning:'기업의, 법인의', ex_en:'The corporate headquarters are located in downtown New York.', ex_ko:'기업 본사는 뉴욕 시내에 위치하고 있습니다.'},
  {word:'credential', meaning:'자격, 자격 증명', ex_en:'Please verify the credentials of all job applicants.', ex_ko:'모든 입사 지원자의 자격 요건을 확인해 주십시오.'},
  {word:'criterion', meaning:'기준, 표준', ex_en:'Price is not the only criterion for selecting a supplier.', ex_ko:'가격이 공급업체 선정의 유일한 기준은 아닙니다.'},
  {word:'curriculum', meaning:'교육 과정, 커리큘럼', ex_en:'The school is updating its science curriculum for next year.', ex_ko:'학교는 내년을 위해 과학 교육 과정을 업데이트하고 있습니다.'},
  {word:'deadline', meaning:'마감 시한, 기한', ex_en:'The deadline for submitting the application is next Friday.', ex_ko:'지원서 제출 마감일은 다음 주 금요일입니다.'},
  {word:'debate', meaning:'토론, 논쟁', ex_en:'There is a heated debate about the proposed tax changes.', ex_ko:'제안된 세제 개편안에 대해 열띤 논쟁이 벌어지고 있습니다.'},
  {word:'decade', meaning:'10년', ex_en:'The company has seen significant growth over the past decade.', ex_ko:'그 회사는 지난 10년 동안 상당한 성장을 보였습니다.'},
  {word:'decrease', meaning:'감소하다, 감소', ex_en:'The demand for printed books has decreased in recent years.', ex_ko:'인쇄된 책에 대한 수요가 최근 몇 년 동안 감소했습니다.'},
  {word:'dedicated', meaning:'전념하는, 헌신적인', ex_en:'Our customer service team is dedicated to helping you.', ex_ko:'저희 고객 서비스 팀은 귀하를 돕는 데 전념하고 있습니다.'},
  {word:'defect', meaning:'결함, 하자', ex_en:'The manufacturer apologized for the defect in the product.', ex_ko:'제조업체는 제품의 결함에 대해 사과했습니다.'},
  {word:'deficit', meaning:'적자, 부족액', ex_en:'The government is trying to reduce the national budget deficit.', ex_ko:'정부는 국가 예산 적자를 줄이기 위해 노력하고 있습니다.'},
  {word:'delay', meaning:'지연, 미루다', ex_en:'The flight was delayed due to heavy snowfall.', ex_ko:'폭설로 인해 비행기가 지연되었습니다.'},
  {word:'demolish', meaning:'철거하다, 허물다', ex_en:'The old factory building will be demolished next month.', ex_ko:'낡은 공장 건물은 다음 달에 철거될 예정입니다.'},
  {word:'demonstrate', meaning:'시연하다, 보여주다', ex_en:'He will demonstrate how to use the new software.', ex_ko:'그는 새 소프트웨어 사용법을 시연할 것입니다.'},
  {word:'departure', meaning:'출발, 떠남', ex_en:'Please arrive at the airport two hours before your departure.', ex_ko:'출발 2시간 전에 공항에 도착해 주십시오.'},
  {word:'depreciation', meaning:'가치 하락, 감가상각', ex_en:'The depreciation of the currency affected the export market.', ex_ko:'통화 가치 하락이 수출 시장에 영향을 미쳤습니다.'},
  {word:'description', meaning:'설명, 묘사', ex_en:'The job description includes a list of required skills.', ex_ko:'직무 설명서에는 필요한 기술 목록이 포함되어 있습니다.'},
  {word:'designate', meaning:'지정하다, 지명하다', ex_en:'The area has been designated as a smoke-free zone.', ex_ko:'이 구역은 금연 구역으로 지정되었습니다.'},
  {word:'deteriorate', meaning:'악화되다', ex_en:'The condition of the old building has deteriorated over time.', ex_ko:'낡은 건물의 상태가 시간이 지나면서 악화되었습니다.'},
  {word:'dimension', meaning:'차원, 크기, 치수', ex_en:'Please provide the exact dimensions of the package.', ex_ko:'패키지의 정확한 치수를 알려주십시오.'},
  {word:'disappoint', meaning:'실망시키다', ex_en:'The sales results for this quarter were disappointing.', ex_ko:'이번 분기 매출 실적은 실망스러웠습니다.'},
  {word:'discipline', meaning:'규율, 훈련', ex_en:'Maintaining self-discipline is key to successful remote work.', ex_ko:'자기 규율을 유지하는 것이 성공적인 원격 근무의 핵심입니다.'},
  {word:'discount', meaning:'할인, 할인하다', ex_en:'We offer a 10% discount for early bird registrations.', ex_ko:'조기 등록 시 10% 할인을 제공합니다.'},
  {word:'discrepancy', meaning:'불일치, 차이', ex_en:'There is a slight discrepancy between the two reports.', ex_ko:'두 보고서 사이에 약간의 불일치가 있습니다.'},
  {word:'dismiss', meaning:'해고하다, 묵살하다', ex_en:'The manager dismissed the rumors about the company closing.', ex_ko:'매니저는 회사가 문을 닫는다는 소문을 일축했습니다.'},
  {word:'dispatch', meaning:'발송하다, 파견하다', ex_en:'The goods will be dispatched from our warehouse today.', ex_ko:'상품은 오늘 저희 창고에서 발송될 예정입니다.'},
  {word:'display', meaning:'전시하다, 보여주다', ex_en:'The new models will be on display at the trade fair.', ex_ko:'새 모델들이 무역 박람회에 전시될 예정입니다.'},
  {word:'disposable', meaning:'일회용의', ex_en:'Please try to reduce the use of disposable plastic items.', ex_ko:'일회용 플라스틱 제품의 사용을 줄이도록 노력해 주세요.'},
  {word:'disrupt', meaning:'방해하다, 중단시키다', ex_en:'The storm disrupted power supplies to thousands of homes.', ex_ko:'폭풍으로 인해 수천 가구의 전력 공급이 중단되었습니다.'},
  {word:'distinguish', meaning:'구별하다, 분별하다', ex_en:'It is difficult to distinguish between the two brands.', ex_ko:'두 브랜드 사이를 구별하는 것은 어렵습니다.'},
  {word:'distribute', meaning:'배포하다, 유통하다', ex_en:'We will distribute the flyers to local businesses.', ex_ko:'우리는 지역 업체들에게 전단지를 배포할 것입니다.'},
  {word:'diverse', meaning:'다양한', ex_en:'Our team is composed of individuals from diverse backgrounds.', ex_ko:'저희 팀은 다양한 배경을 가진 개인들로 구성되어 있습니다.'},
  {word:'document', meaning:'서류, 기록하다', ex_en:'Please sign the document and return it to me by tomorrow.', ex_ko:'서류에 서명하여 내일까지 저에게 돌려주세요.'},
  {word:'donation', meaning:'기부, 기증', ex_en:'The local charity received a generous donation from the company.', ex_ko:'지역 자선 단체는 그 회사로부터 후한 기부금을 받았습니다.'},
  {word:'drastic', meaning:'급격한, 과감한', ex_en:'The company had to take drastic measures to save costs.', ex_ko:'회사는 비용을 절감하기 위해 과감한 조치를 취해야 했습니다.'},
  {word:'durable', meaning:'내구성이 있는, 오래가는', ex_en:'This outdoor furniture is made from very durable materials.', ex_ko:'이 야외 가구는 매우 내구성이 뛰어난 재료로 만들어졌습니다.'},
  {word:'earnings', meaning:'소득, 수익', ex_en:'The company reported a 15% increase in annual earnings.', ex_ko:'회사는 연간 수익이 15% 증가했다고 보고했습니다.'},
  {word:'economical', meaning:'경제적인, 절약하는', ex_en:'Riding a bike to work is a very economical choice.', ex_ko:'자전거로 출퇴근하는 것은 매우 경제적인 선택입니다.'},
  {word:'efficiency', meaning:'효율성', ex_en:'The new system was designed to improve operational efficiency.', ex_ko:'새로운 시스템은 운영 효율성을 높이기 위해 설계되었습니다.'},
  {word:'eligible', meaning:'자격이 있는', ex_en:'Employees with two years of service are eligible for the bonus.', ex_ko:'2년 이상 근무한 직원은 보너스를 받을 자격이 있습니다.'},
  {word:'eliminate', meaning:'제거하다, 없애다', ex_en:'Our goal is to eliminate waste and reduce environmental impact.', ex_ko:'저희의 목표는 폐기물을 제거하고 환경 영향을 줄이는 것입니다.'},
  {word:'emphasize', meaning:'강조하다', ex_en:'The speaker emphasized the importance of teamwork.', ex_ko:'강연자는 팀워크의 중요성을 강조했습니다.'},
  {word:'employment', meaning:'고용, 취업', ex_en:'The government is working to increase employment opportunities.', ex_ko:'정부는 고용 기회를 늘리기 위해 노력하고 있습니다.'},
  {word:'enclose', meaning:'동봉하다', ex_en:'I have enclosed a copy of the contract for your review.', ex_ko:'검토하실 수 있도록 계약서 사본을 동봉했습니다.'},
  {word:'encounter', meaning:'마주치다, 직면하다', ex_en:'We encountered several technical problems during the trial.', ex_ko:'우리는 시험 운행 중에 몇 가지 기술적 문제에 직면했습니다.'},
  {word:'endorse', meaning:'지지하다, 보증하다', ex_en:'The celebrity was paid to endorse the new perfume.', ex_ko:'그 연예인은 새 향수를 홍보하기 위해 돈을 받았습니다.'},
  {word:'enhance', meaning:'향상시키다, 높이다', ex_en:'The new features will enhance the user experience.', ex_ko:'새로운 기능들은 사용자 경험을 향상시킬 것입니다.'},
  {word:'enroll', meaning:'등록하다, 입학하다', ex_en:'You need to enroll in the course before the end of the month.', ex_ko:'이달 말 전까지 과정에 등록해야 합니다.'},
  {word:'enterprise', meaning:'기업, 사업체', ex_en:'Small and medium-sized enterprises are vital to the economy.', ex_ko:'중소기업은 경제에 매우 중요합니다.'},
  {word:'environment', meaning:'환경', ex_en:'We are committed to protecting the natural environment.', ex_ko:'우리는 자연환경을 보호하기 위해 노력하고 있습니다.'},
  {word:'establish', meaning:'설립하다, 확립하다', ex_en:'The company was established in 1995.', ex_ko:'그 회사는 1995년에 설립되었습니다.'},
  {word:'estimate', meaning:'추정치, 견적하다', ex_en:'Can you provide a rough estimate of the total cost?', ex_ko:'총비용에 대한 대략적인 견적을 주실 수 있나요?'},
  {word:'evaluate', meaning:'평가하다', ex_en:'Managers will evaluate your performance every six months.', ex_ko:'매니저들은 6개월마다 당신의 성과를 평가할 것입니다.'},
  {word:'exceed', meaning:'초과하다, 넘어서다', ex_en:'The actual sales exceeded our expectations.', ex_ko:'실제 매출이 우리의 기대를 초과했습니다.'},
  {word:'exclusive', meaning:'독점적인, 배타적인', ex_en:'The hotel guest has exclusive access to the rooftop pool.', ex_ko:'호텔 투숙객은 루프탑 수영장을 독점적으로 이용할 수 있습니다.'},
  {word:'excursion', meaning:'여행, 소풍', ex_en:'The company organized a weekend excursion for its staff.', ex_ko:'회사는 직원들을 위해 주말 여행을 조직했습니다.'},
  {word:'executive', meaning:'임원, 경영진', ex_en:'The executives met to discuss the long-term vision of the firm.', ex_ko:'임원들은 회사의 장기적인 비전을 논의하기 위해 모였습니다.'},
  {word:'expand', meaning:'확장하다, 넓히다', ex_en:'We are planning to expand our business into Asian markets.', ex_ko:'우리는 아시아 시장으로 사업을 확장할 계획입니다.'},
  {word:'expenditure', meaning:'지출, 소비', ex_en:'The annual expenditure on research has increased.', ex_ko:'연구에 대한 연간 지출이 증가했습니다.'},
  {word:'expertise', meaning:'전문 지식, 전문성', ex_en:'She has extensive expertise in the field of digital marketing.', ex_ko:'그녀는 디지털 마케팅 분야에서 폭넓은 전문 지식을 가지고 있습니다.'},
  {word:'expire', meaning:'만료되다, 끝나다', ex_en:'My passport will expire at the end of this year.', ex_ko:'제 여권은 올해 말에 만료될 예정입니다.'},
  {word:'facility', meaning:'시설, 설비', ex_en:'The fitness center has state-of-the-art facilities.', ex_ko:'휘트니스 센터에는 최첨단 시설이 갖춰져 있습니다.'},
  {word:'faculty', meaning:'교수진, 학부', ex_en:'The university has a very distinguished faculty.', ex_ko:'그 대학은 매우 저명한 교수진을 보유하고 있습니다.'},
  {word:'feedback', meaning:'피드백, 의견', ex_en:'We value our customers\' feedback to improve our services.', ex_ko:'저희는 서비스를 개선하기 위해 고객의 피드백을 소중히 여깁니다.'},
  {word:'financial', meaning:'재정의, 금융의', ex_en:'The company is facing some financial difficulties.', ex_ko:'그 회사는 몇 가지 재정적 어려움에 처해 있습니다.'},
  {word:'flexible', meaning:'유연한, 융통성 있는', ex_en:'Working from home offers a more flexible schedule.', ex_ko:'재택근무는 더 유연한 일정을 제공합니다.'},
  {word:'fluctuate', meaning:'변동하다, 요동치다', ex_en:'Oil prices tend to fluctuate based on global events.', ex_ko:'석유 가격은 글로벌 이벤트에 따라 변동하는 경향이 있습니다.'},
  {word:'forecast', meaning:'예측, 전망', ex_en:'The economic forecast for next year is generally positive.', ex_ko:'내년 경제 전망은 전반적으로 긍정적입니다.'},
  {word:'formal', meaning:'공식적인, 정중한', ex_en:'Please wear formal attire to the corporate gala.', ex_ko:'기업 갈라 행사에는 정장(공식 복장)을 착용해 주세요.'},
  {word:'fragile', meaning:'깨지기 쉬운', ex_en:'The package contains fragile items, so please handle with care.', ex_ko:'패키지에는 깨지기 쉬운 물건이 들어 있으니 주의해서 다뤄주세요.'},
  {word:'frequent', meaning:'빈번한, 잦은', ex_en:'There are frequent trains between the two cities.', ex_ko:'두 도시 사이에는 기차가 빈번하게 운행됩니다.'},
  {word:'function', meaning:'기능, 행사', ex_en:'The main function of this software is data analysis.', ex_ko:'이 소프트웨어의 주요 기능은 데이터 분석입니다.'},
  {word:'fundamental', meaning:'근본적인, 핵심적인', ex_en:'Trust is a fundamental element of any successful relationship.', ex_ko:'신뢰는 모든 성공적인 관계의 근본적인 요소입니다.'},
  {word:'generate', meaning:'생성하다, 일으키다', ex_en:'The new campaign generated a lot of interest in our products.', ex_ko:'새 캠페인은 저희 제품에 대해 많은 관심을 불러일으켰습니다.'},
  {word:'genuine', meaning:'진짜의, 진실한', ex_en:'The leather used for the bags is genuine and high quality.', ex_ko:'가방에 사용된 가죽은 진짜이며 품질이 높습니다.'},
  {word:'goal', meaning:'목표', ex_en:'Our primary goal is to provide excellent customer service.', ex_ko:'저희의 주요 목표는 우수한 고객 서비스를 제공하는 것입니다.'},
  {word:'graduate', meaning:'졸업하다, 졸업생', ex_en:'She graduated from Seoul National University last year.', ex_ko:'그녀는 작년에 서울대학교를 졸업했습니다.'},
  {word:'grant', meaning:'보조금, 승인하다', ex_en:'The research project was funded by a government grant.', ex_ko:'그 연구 프로젝트는 정부 보조금으로 자금을 지원받았습니다.'},
  {word:'guarantee', meaning:'보증, 보장하다', ex_en:'We guarantee that our products are free of defects.', ex_ko:'저희는 제품에 결함이 없음을 보증합니다.'},
  {word:'guideline', meaning:'지침, 가이드라인', ex_en:'Please follow the safety guidelines at all times.', ex_ko:'항상 안전 지침을 준수해 주세요.'},
  {word:'hardware', meaning:'하드웨어, 장비', ex_en:'We need to upgrade the computer hardware in the office.', ex_ko:'사무실의 컴퓨터 하드웨어를 업그레이드해야 합니다.'},
  {word:'hazardous', meaning:'위험한, 모험적인', ex_en:'The disposal of hazardous waste is strictly regulated.', ex_ko:'유해 폐기물 처리는 엄격하게 규제됩니다.'},
  {word:'headquarters', meaning:'본사, 본부', ex_en:'The multinational firm moved its headquarters to London.', ex_ko:'그 다국적 기업은 본사를 런던으로 옮겼습니다.'},
  {word:'hesitate', meaning:'망설이다, 주저하다', ex_en:'Do not hesitate to contact us if you have any questions.', ex_ko:'질문이 있으시면 주저하지 말고 연락해 주세요.'},
  {word:'highlight', meaning:'강조하다, 하이라이트', ex_en:'The report highlights the need for better communication.', ex_ko:'보고서는 더 나은 소통의 필요성을 강조합니다.'},
  {word:'identical', meaning:'동일한, 똑같은', ex_en:'The two products are identical in every way.', ex_ko:'그 두 제품은 모든 면에서 동일합니다.'},
  {word:'identify', meaning:'확인하다, 식별하다', ex_en:'We need to identify the cause of the system failure.', ex_ko:'시스템 오류의 원인을 확인해야 합니다.'},
  {word:'illustrate', meaning:'설명하다, 삽화를 넣다', ex_en:'He used charts and graphs to illustrate his points.', ex_ko:'그는 자신의 주장을 설명하기 위해 차트와 그래프를 사용했습니다.'},
  {word:'immediate', meaning:'즉각적인, 시급한', ex_en:'The situation requires immediate action from the management.', ex_ko:'상황은 경영진의 즉각적인 조치를 필요로 합니다.'},
  {word:'impact', meaning:'영향, 충격', ex_en:'The new law will have a significant impact on small businesses.', ex_ko:'새로운 법률은 소기업에 상당한 영향을 미칠 것입니다.'},
  {word:'implication', meaning:'영향, 함축', ex_en:'The decision has serious implications for the future of the company.', ex_ko:'그 결정은 회사의 미래에 심각한 영향을 미칩니다.'},
  {word:'incentive', meaning:'장려금, 보상', ex_en:'The company offers financial incentives for high performance.', ex_ko:'회사는 높은 성과에 대해 재정적 인센티브를 제공합니다.'},
  {word:'incorporate', meaning:'포함하다, 법인으로 만들다', ex_en:'We decided to incorporate user feedback into the new design.', ex_ko:'우리는 사용자 피드백을 새 디자인에 반영하기로 결정했습니다.'},
  {word:'indicate', meaning:'나타내다, 가리키다', ex_en:'The survey results indicate a high level of customer satisfaction.', ex_ko:'설문 조사 결과는 높은 수준의 고객 만족도를 나타냅니다.'},
  {word:'industrial', meaning:'산업의', ex_en:'The industrial sector has shown steady growth this year.', ex_ko:'산업 부문은 올해 꾸준한 성장을 보였습니다.'},
  {word:'inflation', meaning:'인플레이션, 물가 상승', ex_en:'High inflation has led to a decrease in purchasing power.', ex_ko:'높은 인플레이션은 구매력 하락으로 이어졌습니다.'},
  {word:'influential', meaning:'영향력 있는', ex_en:'She is one of the most influential people in the industry.', ex_ko:'그녀는 업계에서 가장 영향력 있는 사람 중 한 명입니다.'},
  {word:'infrastructure', meaning:'사회 기반 시설, 인프라', ex_en:'The city is investing in its transportation infrastructure.', ex_ko:'그 도시는 교통 인프라에 투자하고 있습니다.'},
  {word:'initiative', meaning:'주도, 계획, 결단력', ex_en:'He took the initiative to organize the team-building event.', ex_ko:'그는 팀 빌딩 행사를 조직하기 위해 주도적으로 나섰습니다.'},
  {word:'innovative', meaning:'혁신적인', ex_en:'The company is known for its innovative products and services.', ex_ko:'그 회사는 혁신적인 제품과 서비스로 유명합니다.'},
  {word:'inspect', meaning:'점검하다, 검사하다', ex_en:'A technician will inspect the elevator every month.', ex_ko:'기술자가 매달 엘리베이터를 점검할 것입니다.'},
  {word:'install', meaning:'설치하다', ex_en:'We need to install the latest antivirus software.', ex_ko:'최신 안티바이러스 소프트웨어를 설치해야 합니다.'},
  {word:'institute', meaning:'연구소, 기관, 도입하다', ex_en:'The research institute is focused on renewable energy.', ex_ko:'그 연구소는 재생 에너지에 집중하고 있습니다.'},
  {word:'instruct', meaning:'지시하다, 가르치다', ex_en:'She instructed the team on how to complete the task.', ex_ko:'그녀는 팀에게 과제를 완료하는 방법을 지시했습니다.'},
  {word:'insurance', meaning:'보험', ex_en:'Do you have health insurance provided by your company?', ex_ko:'회사에서 제공하는 건강보험이 있나요?'},
  {word:'integrate', meaning:'통합하다', ex_en:'The new system will integrate seamlessly with our existing tools.', ex_ko:'새 시스템은 기존 도구들과 원활하게 통합될 것입니다.'},
  {word:'intellectual', meaning:'지적인, 지식인', ex_en:'Protecting intellectual property is crucial for tech companies.', ex_ko:'지식 재산을 보호하는 것은 기술 회사들에게 매우 중요합니다.'},
  {word:'intensive', meaning:'집중적인, 강도 높은', ex_en:'She took an intensive language course during the summer.', ex_ko:'그녀는 여름 동안 집중 언어 과정을 수강했습니다.'},
  {word:'intent', meaning:'의도, 목적', ex_en:'It was not my intent to cause any inconvenience.', ex_ko:'불편을 끼치려는 의도는 없었습니다.'},
  {word:'interaction', meaning:'상호작용, 교류', ex_en:'Social interaction is an important part of the learning process.', ex_ko:'사회적 상호작용은 학습 과정의 중요한 부분입니다.'},
  {word:'internal', meaning:'내부의', ex_en:'The company conducted an internal investigation into the matter.', ex_ko:'회사는 그 문제에 대해 내부 조사를 실시했습니다.'},
  {word:'interrupt', meaning:'방해하다, 가로막다', ex_en:'I\'m sorry to interrupt, but there is an urgent phone call for you.', ex_ko:'방해해서 죄송합니다만, 급한 전화가 왔습니다.'},
  {word:'interview', meaning:'면접, 인터뷰', ex_en:'I have a job interview scheduled for tomorrow morning.', ex_ko:'내일 아침에 취업 면접이 잡혀 있습니다.'},
  {word:'introduce', meaning:'소개하다, 도입하다', ex_en:'The CEO introduced the new marketing director to the staff.', ex_ko:'CEO는 직원들에게 새 마케팅 이사를 소개했습니다.'},
  {word:'invalid', meaning:'무효한, 타당하지 않은', ex_en:'Your password is invalid, please try again.', ex_ko:'비밀번호가 유효하지 않습니다. 다시 시도해 주세요.'},
  {word:'invest', meaning:'투자하다', ex_en:'It is a good time to invest in renewable energy stocks.', ex_ko:'재생 에너지 주식에 투자하기 좋은 시기입니다.'},
  {word:'investigate', meaning:'조사하다, 수사하다', ex_en:'The police are investigating the cause of the accident.', ex_ko:'경찰은 사고 원인을 조사하고 있습니다.'},
  {word:'investment', meaning:'투자', ex_en:'Buying a house is a major financial investment.', ex_ko:'집을 사는 것은 주요한 재정적 투자입니다.'},
  {word:'invitation', meaning:'초대(장)', ex_en:'We sent out invitations for the company anniversary party.', ex_ko:'회사 창립 기념 파티 초대장을 발송했습니다.'},
  {word:'involve', meaning:'포함하다, 관련시키다', ex_en:'The project involves a lot of data collection and analysis.', ex_ko:'이 프로젝트는 많은 데이터 수집과 분석을 포함합니다.'},
  {word:'issue', meaning:'문제, 발행하다', ex_en:'The company will issue a statement regarding the incident.', ex_ko:'회사는 해당 사건에 대한 성명을 발표할 예정입니다.'},
  {word:'item', meaning:'항목, 품목', ex_en:'Please list each item separately on the invoice.', ex_ko:'송장에 각 항목을 개별적으로 적어주세요.'},
  {word:'itinerary', meaning:'여정, 여행 계획서', ex_en:'The travel agent provided us with a detailed itinerary.', ex_ko:'여행사 직원이 상세한 여행 계획서를 주었습니다.'},
  {word:'journal', meaning:'잡지, 일기', ex_en:'His research was published in a prestigious medical journal.', ex_ko:'그의 연구는 권위 있는 의학 저널에 게재되었습니다.'},
  {word:'justify', meaning:'정당화하다, 해명하다', ex_en:'It is hard to justify the high cost of the project.', ex_ko:'프로젝트의 높은 비용을 정당화하기는 어렵습니다.'},
  {word:'label', meaning:'라벨, 라벨을 붙이다', ex_en:'Please label each box with its contents.', ex_ko:'각 상자에 내용물을 표시하는 라벨을 붙여주세요.'},
  {word:'labor', meaning:'노동, 수고', ex_en:'The cost of labor has increased significantly in this region.', ex_ko:'이 지역의 노동 비용이 상당히 증가했습니다.'},
  {word:'launch', meaning:'출시하다, 시작하다', ex_en:'The company is getting ready to launch its new product.', ex_ko:'그 회사는 신제품 출시 준비를 하고 있습니다.'},
  {word:'leak', meaning:'누출, 새다', ex_en:'There was a minor leak in the water pipe.', ex_ko:'수도관에 약간의 누수가 있었습니다.'},
  {word:'lease', meaning:'임대, 리스', ex_en:'We signed a five-year lease for the new office space.', ex_ko:'우리는 새 사무실 공간에 대해 5년 임대 계약을 맺었습니다.'},
  {word:'lecture', meaning:'강연, 강의', ex_en:'The professor gave an interesting lecture on economics.', ex_ko:'교수님은 경제학에 대해 흥미로운 강연을 하셨습니다.'},
  {word:'legal', meaning:'법률의, 합법적인', ex_en:'You should seek legal advice before signing the contract.', ex_ko:'계약서에 서명하기 전에 법률 조언을 구해야 합니다.'},
  {word:'legislation', meaning:'입법, 법률', ex_en:'The new legislation aims to protect consumer rights.', ex_ko:'새 법률은 소비자 권리 보호를 목표로 합니다.'},
  {word:'leisure', meaning:'여가, 한가한', ex_en:'The hotel offers various leisure activities for its guests.', ex_ko:'호텔은 투숙객들을 위해 다양한 여가 활동을 제공합니다.'},
  {word:'liable', meaning:'책임이 있는', ex_en:'The company is not liable for any personal property loss.', ex_ko:'회사는 개인 재산 손실에 대해 책임을 지지 않습니다.'},
  {word:'liberal', meaning:'자유로운, 후한', ex_en:'The company has a liberal policy regarding vacation time.', ex_ko:'그 회사는 휴가 시간에 대해 관대한 정책을 가지고 있습니다.'},
  {word:'license', meaning:'면허, 자격증', ex_en:'Do you have a valid driver\'s license?', ex_ko:'유효한 운전면허증이 있나요?'},
  {word:'limit', meaning:'한도, 제한하다', ex_en:'There is a limit on the number of attendees for the seminar.', ex_ko:'세미나 참석 인원에 제한이 있습니다.'},
  {word:'liquid', meaning:'액체, 유동적인', ex_en:'The company has enough liquid assets to cover its debts.', ex_ko:'그 회사는 부채를 갚기에 충분한 유동 자산을 가지고 있습니다.'},
  {word:'literature', meaning:'문학, 문헌', ex_en:'Please review the literature on the subject before you start.', ex_ko:'시작하기 전에 해당 주제에 대한 문헌을 검토해 주세요.'},
  {word:'lobby', meaning:'로비, 로비 활동을 하다', ex_en:'We will meet in the hotel lobby at 8 AM.', ex_ko:'오전 8시에 호텔 로비에서 만납시다.'},
  {word:'locate', meaning:'위치하다, 찾아내다', ex_en:'The new factory will be located near the port.', ex_ko:'새 공장은 항구 근처에 위치할 것입니다.'},
  {word:'logistics', meaning:'물류, 실행 계획', ex_en:'We need to plan the logistics for the international conference.', ex_ko:'우리는 국제 회의를 위한 물류 계획을 세워야 합니다.'},
  {word:'loyal', meaning:'충성스러운, 성실한', ex_en:'The brand has a very loyal customer base.', ex_ko:'그 브랜드는 매우 충성도 높은 고객층을 보유하고 있습니다.'},
  {word:'luxury', meaning:'사치(품), 호화로운', ex_en:'Staying at a five-star hotel is a real luxury.', ex_ko:'5성급 호텔에 머무는 것은 진정한 사치입니다.'},
  {word:'magnificent', meaning:'장엄한, 훌륭한', ex_en:'The view from the top of the building is magnificent.', ex_ko:'건물 꼭대기에서 보는 전망이 장엄합니다.'},
  {word:'maintain', meaning:'유지하다, 관리하다', ex_en:'It is important to maintain a healthy lifestyle.', ex_ko:'건강한 생활 방식을 유지하는 것이 중요합니다.'},
  {word:'majority', meaning:'대다수, 대부분', ex_en:'The majority of the employees voted in favor of the proposal.', ex_ko:'직원 대다수가 제안에 찬성표를 던졌습니다.'},
  {word:'management', meaning:'경영, 관리', ex_en:'The management decided to implement a new training program.', ex_ko:'경영진은 새로운 교육 프로그램을 시행하기로 결정했습니다.'},
  {word:'managerial', meaning:'경영의, 관리의', ex_en:'She has several years of experience in a managerial role.', ex_ko:'그녀는 관리직 직무에서 수년간의 경험을 가지고 있습니다.'},
  {word:'manual', meaning:'설명서, 수동의', ex_en:'Please read the instruction manual carefully.', ex_ko:'사용 설명서를 주의 깊게 읽어주세요.'},
  {word:'manufacture', meaning:'제조하다, 생산', ex_en:'The company manufactures high-quality electronic components.', ex_ko:'그 회사는 고품질의 전자 부품을 제조합니다.'},
  {word:'margin', meaning:'여백, 수익률, 차이', ex_en:'The profit margin for the new product is higher than expected.', ex_ko:'신제품의 수익률이 예상보다 높습니다.'},
  {word:'marine', meaning:'바다의, 해양의', ex_en:'The research focuses on marine ecosystems and climate change.', ex_ko:'연구는 해양 생태계와 기후 변화에 초점을 맞추고 있습니다.'},
  {word:'material', meaning:'재료, 자료', ex_en:'The building is made of sustainable materials.', ex_ko:'그 건물은 지속 가능한 재료로 만들어졌습니다.'},
  {word:'mature', meaning:'성숙한, 다 자란', ex_en:'The market for smartphones has become very mature.', ex_ko:'스마트폰 시장은 매우 성숙해졌습니다.'},
  {word:'maximum', meaning:'최대, 최고', ex_en:'The maximum weight for carry-on luggage is 10 kilograms.', ex_ko:'기내 수하물의 최대 무게는 10킬로그램입니다.'},
  {word:'measure', meaning:'조치, 측정하다', ex_en:'We need to take measures to improve workplace safety.', ex_ko:'우리는 직장 안전을 개선하기 위한 조치를 취해야 합니다.'},
  {word:'mechanism', meaning:'기제, 구조, 장치', ex_en:'The lock mechanism on the door needs to be repaired.', ex_ko:'문의 잠금 장치를 수리해야 합니다.'},
  {word:'media', meaning:'미디어, 매체', ex_en:'The event received a lot of coverage in the local media.', ex_ko:'그 행사는 지역 미디어에서 많은 보도를 받았습니다.'},
  {word:'mediate', meaning:'중재하다, 조정하다', ex_en:'A professional was hired to mediate the dispute between the two parties.', ex_ko:'양측 사이의 분쟁을 중재하기 위해 전문가가 고용되었습니다.'},
  {word:'medical', meaning:'의료의, 의학의', ex_en:'He is on medical leave for the next two weeks.', ex_ko:'그는 앞으로 2주 동안 병가를 냅니다.'},
  {word:'mention', meaning:'언급하다', ex_en:'Did she mention anything about the meeting yesterday?', ex_ko:'그녀가 어제 회의에 대해 뭐라 언급했나요?'},
  {word:'merger', meaning:'합병', ex_en:'The merger of the two airlines was announced this morning.', ex_ko:'두 항공사의 합병이 오늘 아침 발표되었습니다.'},
  {word:'merit', meaning:'장점, 가치', ex_en:'The proposal will be judged on its own merits.', ex_ko:'제안은 그 자체의 가치에 따라 평가될 것입니다.'},
  {word:'method', meaning:'방법, 방식', ex_en:'We are using a new method to test the quality of the products.', ex_ko:'우리는 제품 품질을 테스트하기 위해 새로운 방법을 사용하고 있습니다.'},
  {word:'mineral', meaning:'미네랄, 광물', ex_en:'The region is rich in various mineral resources.', ex_ko:'그 지역은 다양한 광물 자원이 풍부합니다.'},
  {word:'minimum', meaning:'최소, 최저', ex_en:'The minimum age for the position is 18 years.', ex_ko:'그 직무의 최소 연령은 18세입니다.'},
  {word:'minority', meaning:'소수, 소수 집단', ex_en:'Only a minority of people disagreed with the new plan.', ex_ko:'오직 소수의 사람들만이 새 계획에 반대했습니다.'},
  {word:'minute', meaning:'분, (회의) 의사록', ex_en:'Please take the minutes of the meeting.', ex_ko:'회의록을 작성해 주세요.'},
  {word:'mislead', meaning:'오도하다, 잘못 인도하다', ex_en:'The advertisement was criticized for misleading customers.', ex_ko:'그 광고는 고객을 오도한다는 비판을 받았습니다.'},
  {word:'mission', meaning:'임무, 사명', ex_en:'Our mission is to empower people through education.', ex_ko:'저희의 사명은 교육을 통해 사람들에게 힘을 실어주는 것입니다.'},
  {word:'mixture', meaning:'혼합물', ex_en:'The cake is made from a mixture of flour, sugar, and eggs.', ex_ko:'케이크는 밀가루, 설탕, 계란의 혼합물로 만들어집니다.'},
  {word:'mobile', meaning:'이동식의, 모바일의', ex_en:'We are developing a mobile app for our services.', ex_ko:'우리는 저희 서비스를 위한 모바일 앱을 개발 중입니다.'},
  {word:'moderate', meaning:'적당한, 완화하다', ex_en:'The hotel offers comfortable rooms at moderate prices.', ex_ko:'그 호텔은 적당한 가격에 편안한 객실을 제공합니다.'},
  {word:'modify', meaning:'수정하다, 변경하다', ex_en:'We need to modify the software to meet the client\'s needs.', ex_ko:'고객의 요구를 충족시키기 위해 소프트웨어를 수정해야 합니다.'},
  {word:'monitor', meaning:'감시하다, 추적 관찰하다', ex_en:'We monitor our systems 24 hours a day for security.', ex_ko:'우리는 보안을 위해 시스템을 하루 24시간 감시합니다.'},
  {word:'monopoly', meaning:'독점', ex_en:'The government is trying to prevent a monopoly in the energy sector.', ex_ko:'정부는 에너지 부문에서의 독점을 막으려 노력하고 있습니다.'},
  {word:'motivate', meaning:'동기를 부여하다', ex_en:'Managers should find ways to motivate their employees.', ex_ko:'매니저들은 직원들에게 동기를 부여할 방법을 찾아야 합니다.'},
  {word:'mutual', meaning:'상호 간의, 공동의', ex_en:'The agreement was based on mutual respect and benefit.', ex_ko:'그 합의는 상호 존중과 이익을 바탕으로 이루어졌습니다.'},
  {word:'negative', meaning:'부정적인', ex_en:'The news had a negative impact on the stock market.', ex_ko:'그 뉴스는 주식 시장에 부정적인 영향을 미쳤습니다.'},
  {word:'neglect', meaning:'소홀히 하다, 방치하다', ex_en:'He neglected his duties and was eventually fired.', ex_ko:'그는 직무를 소홀히 했고 결국 해고되었습니다.'},
  {word:'neutral', meaning:'중립적인', ex_en:'The mediator remained neutral during the discussion.', ex_ko:'중재자는 토론 중에 중립을 유지했습니다.'},
  {word:'nominate', meaning:'지명하다, 후보로 추천하다', ex_en:'She was nominated for the employee of the month award.', ex_ko:'그녀는 이달의 직원상 후보로 추천되었습니다.'},
  {word:'notice', meaning:'통지, 주목하다', ex_en:'Please give at least two weeks\' notice before leaving.', ex_ko:'퇴사하기 전에 최소 2주 전에 통지해 주세요.'},
  {word:'notify', meaning:'알리다, 통보하다', ex_en:'We will notify you once the results are available.', ex_ko:'결과가 나오면 알려드리겠습니다.'},
  {word:'notion', meaning:'개념, 관념', ex_en:'The notion of a paperless office has become a reality.', ex_ko:'종이 없는 사무실이라는 개념이 현실이 되었습니다.'},
  {word:'numerous', meaning:'수많은', ex_en:'There are numerous benefits to regular exercise.', ex_ko:'정기적인 운동에는 수많은 이점이 있습니다.'},
  {word:'objective', meaning:'목표, 객관적인', ex_en:'Our main objective is to increase sales by 20% this year.', ex_ko:'저희의 주요 목표는 올해 매출을 20% 늘리는 것입니다.'},
  {word:'obligation', meaning:'의무, 계약', ex_en:'You have a legal obligation to fulfill the contract.', ex_ko:'당신은 계약을 이행할 법적 의무가 있습니다.'},
  {word:'obstacle', meaning:'장애물', ex_en:'Lack of funding is a major obstacle to the project.', ex_ko:'자금 부족은 프로젝트의 주요 장애물입니다.'},
  {word:'obtain', meaning:'얻다, 획득하다', ex_en:'You need to obtain a permit before starting the renovation.', ex_ko:'개보수 공사를 시작하기 전에 허가증을 얻어야 합니다.'},
  {word:'obvious', meaning:'명백한, 분명한', ex_en:'It is obvious that we need to improve our marketing strategy.', ex_ko:'우리가 마케팅 전략을 개선해야 함은 분명합니다.'},
  {word:'occupation', meaning:'직업, 점유', ex_en:'Please state your name and occupation on the form.', ex_ko:'양식에 이름과 직업을 기재해 주세요.'},
  {word:'occur', meaning:'발생하다, 일어나다', ex_en:'The error occurred during the system update.', ex_ko:'시스템 업데이트 중에 오류가 발생했습니다.'},
  {word:'offend', meaning:'불쾌하게 하다, 위반하다', ex_en:'I didn\'t mean to offend anyone with my comments.', ex_ko:'제 발언으로 누군가를 불쾌하게 하려던 것은 아니었습니다.'},
  {word:'official', meaning:'공식적인, 공무원', ex_en:'The official announcement will be made tomorrow.', ex_ko:'공식 발표는 내일 있을 예정입니다.'},
  {word:'offset', meaning:'상쇄하다', ex_en:'The high costs were offset by the increased revenue.', ex_ko:'높은 비용은 증가한 매출로 상쇄되었습니다.'},
  {word:'omit', meaning:'생략하다, 빠뜨리다', ex_en:'Please do not omit any important details from the report.', ex_ko:'보고서에서 중요한 세부 사항을 생략하지 마세요.'},
  {word:'ongoing', meaning:'진행 중인', ex_en:'The project is an ongoing effort to improve customer service.', ex_ko:'그 프로젝트는 고객 서비스를 개선하기 위한 지속적인 노력입니다.'},
  {word:'opinion', meaning:'의견', ex_en:'What is your opinion on the new company policy?', ex_ko:'새로운 회사 정책에 대한 당신의 의견은 무엇입니까?'},
  {word:'opponent', meaning:'상대, 반대자', ex_en:'He is a strong opponent of the proposed changes.', ex_ko:'그는 제안된 변경 사항의 강력한 반대자입니다.'},
  {word:'opportunity', meaning:'기회', ex_en:'This is a great opportunity for your career development.', ex_ko:'이것은 당신의 경력 개발을 위한 좋은 기회입니다.'},
  {word:'oppose', meaning:'반대하다', ex_en:'Many local residents oppose the construction of the new mall.', ex_ko:'많은 지역 주민들이 새 쇼핑몰 건설에 반대합니다.'},
  {word:'option', meaning:'옵션, 선택권', ex_en:'We have several options for the new office design.', ex_ko:'우리는 새 사무실 디자인에 대해 몇 가지 옵션이 있습니다.'},
  {word:'order', meaning:'주문, 순서, 명령', ex_en:'I would like to place an order for some office supplies.', ex_ko:'사무용품을 주문하고 싶습니다.'},
  {word:'organize', meaning:'조직하다, 정리하다', ex_en:'She is organizing a charity event for next month.', ex_ko:'그녀는 다음 달을 위한 자선 행사를 조직하고 있습니다.'},
  {word:'original', meaning:'원래의, 독창적인', ex_en:'Please keep the original receipt for your records.', ex_ko:'기록을 위해 원본 영수증을 보관해 주세요.'},
  {word:'outcome', meaning:'결과', ex_en:'The outcome of the meeting was very positive.', ex_ko:'회의 결과는 매우 긍정적이었습니다.'},
  {word:'outline', meaning:'개요, 개요를 서술하다', ex_en:'He outlined the main points of the presentation.', ex_ko:'그는 발표의 주요 점들을 개략적으로 설명했습니다.'},
  {word:'output', meaning:'출력, 생산량', ex_en:'The factory\'s output has increased by 10% this year.', ex_ko:'올해 공장의 생산량이 10% 증가했습니다.'},
  {word:'outstanding', meaning:'뛰어난, 미지불된', ex_en:'She received an award for her outstanding performance.', ex_ko:'그녀는 뛰어난 성과로 상을 받았습니다.'},
  {word:'overall', meaning:'전반적인, 전체의', ex_en:'The overall reaction to the new product was very good.', ex_ko:'신제품에 대한 전반적인 반응은 매우 좋았습니다.'},
  {word:'overcome', meaning:'극복하다', ex_en:'We need to overcome many challenges to succeed.', ex_ko:'성공하기 위해서는 많은 도전을 극복해야 합니다.'},
  {word:'overdue', meaning:'기한이 지난', ex_en:'Your payment is overdue, please pay as soon as possible.', ex_ko:'납부 기한이 지났으니 가능한 한 빨리 결제해 주세요.'},
  {word:'overlook', meaning:'간과하다, 내려다보다', ex_en:'It is easy to overlook small mistakes when you are in a hurry.', ex_ko:'서두르다 보면 작은 실수를 간과하기 쉽습니다.'},
  {word:'overseas', meaning:'해외의', ex_en:'The company is looking for opportunities in overseas markets.', ex_ko:'회사는 해외 시장에서 기회를 찾고 있습니다.'},
  {word:'overtime', meaning:'초과 근무', ex_en:'I have to work overtime to finish the report on time.', ex_ko:'보고서를 제시간에 끝내기 위해 초과 근무를 해야 합니다.'},
  {word:'overview', meaning:'개요, 전체적인 검토', ex_en:'The presentation provided a brief overview of the project.', ex_ko:'발표는 프로젝트에 대한 간략한 개요를 제공했습니다.'},
  {word:'package', meaning:'패키지, 포장', ex_en:'The software comes in a comprehensive package with a manual.', ex_ko:'소프트웨어는 설명서와 함께 종합적인 패키지로 제공됩니다.'},
  {word:'participant', meaning:'참가자', ex_en:'Each participant will receive a name tag at the entrance.', ex_ko:'각 참가자는 입구에서 이름표를 받게 됩니다.'},
  {word:'participate', meaning:'참여하다', ex_en:'We encourage all employees to participate in the workshop.', ex_ko:'모든 직원이 워크숍에 참여할 것을 권장합니다.'},
  {word:'particular', meaning:'특정한, 특별한', ex_en:'Is there any particular reason for the delay?', ex_ko:'지연에 대한 어떤 특정한 이유가 있나요?'},
  {word:'partnership', meaning:'파트너십, 협력', ex_en:'The two companies formed a strategic partnership.', ex_ko:'두 회사는 전략적 파트너십을 형성했습니다.'},
  {word:'passenger', meaning:'승객', ex_en:'The flight attendant welcomed the passengers on board.', ex_ko:'승무원이 기내에서 승객들을 맞이했습니다.'},
  {word:'patent', meaning:'특허, 특허를 얻다', ex_en:'The company filed a patent for its new technology.', ex_ko:'회사는 신기술에 대해 특허를 신청했습니다.'},
  {word:'patient', meaning:'환자, 인내심 있는', ex_en:'Please be patient while we process your request.', ex_ko:'요청을 처리하는 동안 인내심을 갖고 기다려 주세요.'},
  {word:'payment', meaning:'결제, 지불', ex_en:'We accept various forms of payment, including credit cards.', ex_ko:'신용카드를 포함한 다양한 결제 수단을 받습니다.'},
  {word:'peak', meaning:'정점, 최고조', ex_en:'The tourism industry reaches its peak during the summer.', ex_ko:'관광업은 여름 동안 정점에 달합니다.'},
  {word:'penalty', meaning:'벌금, 처벌', ex_en:'There is a penalty for late submission of the report.', ex_ko:'보고서 지연 제출 시 벌금이 있습니다.'},
  {word:'pending', meaning:'결정되지 않은, 임박한', ex_en:'The merger is still pending approval from the board.', ex_ko:'합병은 아직 이사회의 승인을 기다리고 있습니다.'},
  {word:'pension', meaning:'연금', ex_en:'The company offers a generous pension plan for its employees.', ex_ko:'회사는 직원들을 위해 후한 연금 플랜을 제공합니다.'},
  {word:'perform', meaning:'수행하다, 공연하다', ex_en:'The system performed well during the initial testing.', ex_ko:'시스템은 초기 테스트 중에 잘 작동했습니다.'},
  {word:'performance', meaning:'성과, 공연', ex_en:'Your performance will be reviewed by the manager.', ex_ko:'당신의 성과는 매니저에 의해 검토될 것입니다.'},
  {word:'period', meaning:'기간, 시기', ex_en:'The trial period for the software is 30 days.', ex_ko:'소프트웨어의 시험 기간은 30일입니다.'},
  {word:'permanent', meaning:'영구적인, 상설의', ex_en:'She is looking for a permanent position in the marketing field.', ex_ko:'그녀는 마케팅 분야에서 정규직 자리를 찾고 있습니다.'},
  {word:'permission', meaning:'허가, 승인', ex_en:'You need written permission to use the office facilities.', ex_ko:'사무실 시설을 이용하려면 서면 허가가 필요합니다.'},
  {word:'permit', meaning:'허가증, 허용하다', ex_en:'The city issued a building permit for the new project.', ex_ko:'도시는 새 프로젝트에 대해 건축 허가증을 발급했습니다.'},
  {word:'personal', meaning:'개인의, 사적인', ex_en:'Please do not use company equipment for personal use.', ex_ko:'회사 장비를 개인적인 용도로 사용하지 마세요.'},
  {word:'personnel', meaning:'인원, 인사과', ex_en:'All personnel are required to attend the safety meeting.', ex_ko:'모든 직원은 안전 회의에 참석해야 합니다.'},
  {word:'perspective', meaning:'관점, 시각', ex_en:'We need to look at the problem from a different perspective.', ex_ko:'우리는 문제를 다른 관점에서 바라볼 필요가 있습니다.'},
  {word:'persuade', meaning:'설득하다', ex_en:'We tried to persuade the client to accept our proposal.', ex_ko:'우리는 고객이 우리의 제안을 받아들이도록 설득하려 노력했습니다.'},
  {word:'phase', meaning:'단계, 상', ex_en:'The project is currently in its final phase.', ex_ko:'프로젝트는 현재 마지막 단계에 있습니다.'},
  {word:'phenomenon', meaning:'현상', ex_en:'The growth of e-commerce is a global phenomenon.', ex_ko:'이커머스의 성장은 글로벌 현상입니다.'},
  {word:'physical', meaning:'물리적인, 신체적인', ex_en:'The doctor conducted a physical examination of the patient.', ex_ko:'의사는 환자의 신체 검사를 실시했습니다.'},
  {word:'pilot', meaning:'조종사, 시범적인', ex_en:'The company is launching a pilot program for the new system.', ex_ko:'회사는 새 시스템을 위한 시범 프로그램을 시작하고 있습니다.'},
  {word:'placement', meaning:'배치, 취업 알선', ex_en:'The school offers job placement services for its graduates.', ex_ko:'학교는 졸업생들을 위해 취업 알선 서비스를 제공합니다.'},
  {word:'platform', meaning:'플랫폼, 승강장', ex_en:'Our services are available on multiple digital platforms.', ex_ko:'저희 서비스는 여러 디지털 플랫폼에서 이용 가능합니다.'},
  {word:'pleasant', meaning:'쾌적한, 즐거운', ex_en:'The office environment is very pleasant and professional.', ex_ko:'사무실 환경은 매우 쾌적하고 전문적입니다.'},
  {word:'policy', meaning:'정책, 보험 증권', ex_en:'The company has a strict policy regarding data privacy.', ex_ko:'회사는 데이터 개인정보 보호에 대해 엄격한 정책을 가지고 있습니다.'},
  {word:'population', meaning:'인구, 주민', ex_en:'The city has a population of over 5 million people.', ex_ko:'그 도시는 500만 명 이상의 인구를 가지고 있습니다.'},
  {word:'portable', meaning:'휴대용의', ex_en:'The new laptop is very light and portable.', ex_ko:'새 노트북은 매우 가볍고 휴대하기 편리합니다.'},
  {word:'portion', meaning:'부분, 몫', ex_en:'A large portion of the budget was spent on advertising.', ex_ko:'예산의 큰 부분이 광고에 사용되었습니다.'},
  {word:'positive', meaning:'긍정적인', ex_en:'The feedback from the customers was very positive.', ex_ko:'고객들로부터의 피드백은 매우 긍정적이었습니다.'},
  {word:'possession', meaning:'소유, 소유물', ex_en:'Please keep your personal possessions with you at all times.', ex_ko:'항상 개인 소유물을 잘 챙겨주세요.'},
  {word:'possibility', meaning:'가능성', ex_en:'There is a possibility that the flight will be canceled.', ex_ko:'비행기가 취소될 가능성이 있습니다.'},
  {word:'postage', meaning:'우편 요금', ex_en:'The cost of international postage has increased.', ex_ko:'국제 우편 요금이 인상되었습니다.'},
  {word:'postpone', meaning:'연기하다, 미루다', ex_en:'The meeting has been postponed until next Wednesday.', ex_ko:'회의가 다음 주 수요일까지 연기되었습니다.'},
  {word:'potential', meaning:'잠재적인, 가능성', ex_en:'We identified several potential risks for the project.', ex_ko:'우리는 프로젝트에 대한 몇 가지 잠재적 위험을 확인했습니다.'},
  {word:'practical', meaning:'실용적인, 실제적인', ex_en:'The workshop provides practical experience in coding.', ex_ko:'워크숍은 코딩에 대한 실무 경험을 제공합니다.'},
  {word:'precaution', meaning:'예방 조치, 조심', ex_en:'You should take precautions when traveling alone at night.', ex_ko:'밤에 혼자 여행할 때는 예방 조치를 취해야 합니다.'},
  {word:'precede', meaning:'앞서다, 선행하다', ex_en:'The introductory session will precede the main conference.', ex_ko:'메인 컨퍼런스에 앞서 도입 세션이 있을 예정입니다.'},
  {word:'precise', meaning:'정확한, 정밀한', ex_en:'Please provide precise measurements for the furniture.', ex_ko:'가구에 대한 정확한 치수를 알려주세요.'},
  {word:'predict', meaning:'예측하다', ex_en:'It is difficult to predict the future of the economy.', ex_ko:'경제의 미래를 예측하는 것은 어렵습니다.'},
  {word:'preference', meaning:'선호, 선호도', ex_en:'Please let us know your meal preferences in advance.', ex_ko:'식사 선호도를 미리 알려주세요.'},
  {word:'preliminary', meaning:'예비의, 서두의', ex_en:'The preliminary results of the study are very encouraging.', ex_ko:'연구의 예비 결과가 매우 고무적입니다.'},
  {word:'premise', meaning:'전제, 구내(건물)', ex_en:'Smoking is strictly prohibited on the company premises.', ex_ko:'회사 건물 내에서는 흡연이 엄격히 금지됩니다.'},
  {word:'premium', meaning:'보험료, 프리미엄(고급의)', ex_en:'We offer premium services for our VIP customers.', ex_ko:'VIP 고객들을 위해 프리미엄 서비스를 제공합니다.'},
  {word:'preparation', meaning:'준비', ex_en:'Proper preparation is key to a successful presentation.', ex_ko:'적절한 준비가 성공적인 발표의 핵심입니다.'},
  {word:'prescribe', meaning:'처방하다, 규정하다', ex_en:'The doctor prescribed some medicine for his cough.', ex_ko:'의사는 그의 기침을 위해 약을 처방했습니다.'},
  {word:'presence', meaning:'존재, 참석', ex_en:'Your presence is requested at the official opening ceremony.', ex_ko:'공식 개막식에 참석해 주시기를 요청드립니다.'},
  {word:'present', meaning:'현재의, 선물, 발표하다', ex_en:'He will present the annual report to the board of directors.', ex_ko:'그는 이사회에 연례 보고서를 발표할 것입니다.'},
  {word:'preserve', meaning:'보존하다, 유지하다', ex_en:'We need to preserve historical buildings for future generations.', ex_ko:'우리는 미래 세대를 위해 역사적 건물들을 보존해야 합니다.'},
  {word:'prestige', meaning:'위신, 명성', ex_en:'Winning the award added to the company\'s prestige.', ex_ko:'상울 받은 것은 회사의 명성을 더해 주었습니다.'},
  {word:'prevent', meaning:'예방하다, 막다', ex_en:'Regular maintenance can prevent system failures.', ex_ko:'정기적인 유지보수는 시스템 오류를 예방할 수 있습니다.'},
  {word:'previous', meaning:'이전의', ex_en:'I have some previous experience in this field.', ex_ko:'저는 이 분야에서 이전에 경험이 좀 있습니다.'},
  {word:'primary', meaning:'주요한, 제1의', ex_en:'Our primary concern is the safety of our employees.', ex_ko:'저희의 주요 관심사는 직원들의 안전입니다.'},
  {word:'principle', meaning:'원칙, 원리', ex_en:'The company is guided by the principle of transparency.', ex_ko:'그 회사는 투명성의 원칙을 따릅니다.'},
  {word:'priority', meaning:'우선순위', ex_en:'Customer satisfaction is our top priority.', ex_ko:'고객 만족이 저희의 최우선 순위입니다.'},
  {word:'private', meaning:'개인적인, 민간의', ex_en:'The meeting will be held in a private room.', ex_ko:'회의는 비공개실(개인실)에서 열릴 것입니다.'},
  {word:'privilege', meaning:'특권, 혜택', ex_en:'It is a privilege to work with such a talented team.', ex_ko:'이렇게 재능 있는 팀과 일하는 것은 특권입니다.'},
  {word:'procedure', meaning:'절차, 방법', ex_en:'Please follow the standard procedure for reporting errors.', ex_ko:'오류 보고를 위한 표준 절차를 따라주세요.'},
  {word:'proceed', meaning:'진행하다, 나아가다', ex_en:'The project will proceed as planned.', ex_ko:'프로젝트는 계획대로 진행될 것입니다.'},
  {word:'process', meaning:'과정, 처리하다', ex_en:'The application process takes about two weeks.', ex_ko:'지원 과정은 약 2주가 소요됩니다.'},
  {word:'proclaim', meaning:'선언하다, 선포하다', ex_en:'The government proclaimed a state of emergency.', ex_ko:'정부는 비상사태를 선포했습니다.'},
  {word:'produce', meaning:'생산하다, 농산물', ex_en:'The factory produces thousands of units every day.', ex_ko:'공장은 매일 수천 개의 제품을 생산합니다.'},
  {word:'productive', meaning:'생산적인', ex_en:'The morning session was very productive.', ex_ko:'오전 세션은 매우 생산적이었습니다.'},
  {word:'professional', meaning:'전문적인, 전문가', ex_en:'We hired a professional photographer for the event.', ex_ko:'우리는 행사를 위해 전문 사진작가를 고용했습니다.'},
  {word:'profit', meaning:'이익, 수익', ex_en:'The company reported a record profit last year.', ex_ko:'회사는 작년에 기록적인 이익을 보고했습니다.'},
  {word:'program', meaning:'프로그램, 계획', ex_en:'We are launching a new training program for employees.', ex_ko:'우리는 직원들을 위한 새로운 교육 프로그램을 시작합니다.'},
  {word:'progress', meaning:'진전, 진행하다', ex_en:'We are making good progress on the project.', ex_ko:'우리는 프로젝트에서 좋은 진전을 보이고 있습니다.'},
  {word:'prohibit', meaning:'금지하다', ex_en:'Smoking is prohibited inside the building.', ex_ko:'건물 내부에서는 흡연이 금지됩니다.'},
  {word:'project', meaning:'프로젝트, 투영하다', ex_en:'The project is expected to be completed by the end of the year.', ex_ko:'프로젝트는 연말까지 완료될 것으로 예상됩니다.'},
  {word:'promising', meaning:'유망한, 촉망받는', ex_en:'The new technology looks very promising.', ex_ko:'새로운 기술은 매우 유망해 보입니다.'},
  {word:'promote', meaning:'홍보하다, 승진시키다', ex_en:'The company is promoting its new product line.', ex_ko:'회사는 새로운 제품 라인을 홍보하고 있습니다.'},
  {word:'promotion', meaning:'승진, 홍보', ex_en:'She received a promotion to manager last month.', ex_ko:'그녀는 지난달에 매니저로 승진했습니다.'},
  {word:'prompt', meaning:'신속한, 촉발하다', ex_en:'Thank you for your prompt reply to my inquiry.', ex_ko:'제 문의에 신속하게 답변해 주셔서 감사합니다.'},
  {word:'proof', meaning:'증거, 입증', ex_en:'You need to provide proof of identity at the counter.', ex_ko:'카운터에서 신분 증명(증거)을 제시해야 합니다.'},
  {word:'property', meaning:'속성, 재산', ex_en:'The chemical has several unique properties.', ex_ko:'그 화학 물질은 몇 가지 독특한 속성을 가지고 있습니다.'},
  {word:'proposal', meaning:'제안(서)', ex_en:'The committee is reviewing the new budget proposal.', ex_ko:'위원회는 새로운 예산 제안서를 검토 중입니다.'},
  {word:'prospect', meaning:'전망, 가능성', ex_en:'The job prospects for engineers are very good.', ex_ko:'엔지니어의 취업 전망은 매우 좋습니다.'},
  {word:'prosperous', meaning:'번영하는, 성공한', ex_en:'The city has become a prosperous business hub.', ex_ko:'그 도시는 번영하는 비즈니스 허브가 되었습니다.'},
  {word:'protect', meaning:'보호하다', ex_en:'The software is designed to protect your data.', ex_ko:'그 소프트웨어는 당신의 데이터를 보호하기 위해 설계되었습니다.'},
  {word:'protocol', meaning:'프로토콜, 의례', ex_en:'Please follow the established safety protocols.', ex_ko:'정해진 안전 프로토콜을 따라주세요.'},
  {word:'provide', meaning:'제공하다', ex_en:'The company provides free health insurance for its employees.', ex_ko:'회사는 직원들에게 무료 건강보험을 제공합니다.'},
  {word:'provision', meaning:'조항, 제공, 대비', ex_en:'The contract includes a provision for termination.', ex_ko:'계약서에는 계약 종료에 관한 조항이 포함되어 있습니다.'},
  {word:'publicity', meaning:'홍보, 널리 알려짐', ex_en:'The event received a lot of positive publicity.', ex_ko:'그 행사는 많은 긍정적인 홍보 효과를 얻었습니다.'},
  {word:'publish', meaning:'출판하다, 발표하다', ex_en:'The book will be published next spring.', ex_ko:'그 책은 내년 봄에 출판될 예정입니다.'},
  {word:'purchase', meaning:'구매하다, 구매', ex_en:'I would like to purchase some office equipment.', ex_ko:'사무용 장비를 좀 구매하고 싶습니다.'},
  {word:'pursue', meaning:'추구하다, 밀고 나가다', ex_en:'She decided to pursue a career in finance.', ex_ko:'그녀는 금융 분야에서 경력을 쌓기로 결심했습니다.'},
  {word:'qualification', meaning:'자격, 조건', ex_en:'Please list your qualifications on your resume.', ex_ko:'이력서에 당신의 자격 요건을 기재해 주세요.'},
  {word:'quality', meaning:'품질, 자질', ex_en:'We are committed to providing high-quality products.', ex_ko:'우리는 고품질의 제품을 제공하기 위해 노력하고 있습니다.'},
  {word:'quarter', meaning:'분기, 1/4', ex_en:'The company reported high sales in the third quarter.', ex_ko:'회사는 3분기에 높은 매출을 보고했습니다.'},
  {word:'questionnaire', meaning:'설문지', ex_en:'Please fill out the questionnaire and return it to us.', ex_ko:'설문지를 작성하여 저희에게 돌려주세요.'},
  {word:'quote', meaning:'견적(액), 인용하다', ex_en:'Can you give me a quote for the repair work?', ex_ko:'수리 작업에 대한 견적을 주실 수 있나요?'},
  {word:'radiation', meaning:'방사선, 복사', ex_en:'The researchers are studying the effects of solar radiation.', ex_ko:'연구원들은 태양 복사의 영향을 연구하고 있습니다.'},
  {word:'radical', meaning:'급진적인, 근본적인', ex_en:'The company underwent a radical restructuring.', ex_ko:'회사는 급진적인 구조 조정을 거쳤습니다.'},
  {word:'range', meaning:'범위, 산맥', ex_en:'The products are available in a wide range of colors.', ex_ko:'제품들은 다양한 색상으로 제공됩니다.'},
  {word:'rapid', meaning:'빠른, 신속한', ex_en:'The region has seen rapid economic growth.', ex_ko:'그 지역은 빠른 경제 성장을 보였습니다.'},
  {word:'rare', meaning:'드문, 희귀한', ex_en:'It is rare to see such a dedicated employee.', ex_ko:'그렇게 헌신적인 직원을 보는 것은 드문 일입니다.'},
  {word:'rate', meaning:'비율, 요금, 평가하다', ex_en:'What is the current exchange rate for the dollar?', ex_ko:'현재 달러 환율은 얼마인가요?'},
  {word:'ratio', meaning:'비율', ex_en:'The ratio of students to teachers is 20 to 1.', ex_ko:'학생 대 교사 비율은 20대 1입니다.'},
  {word:'rational', meaning:'합리적인, 이성적인', ex_en:'We need to make a rational decision based on facts.', ex_ko:'우리는 사실에 근거하여 합리적인 결정을 내려야 합니다.'},
  {word:'raw', meaning:'날것의, 가공되지 않은', ex_en:'The company imports raw materials from overseas.', ex_ko:'회사는 해외에서 원자재를 수입합니다.'},
  {word:'reaction', meaning:'반응', ex_en:'What was the public reaction to the new law?', ex_ko:'새로운 법률에 대한 대중의 반응은 어떠했나요?'},
  {word:'realistic', meaning:'현실적인', ex_en:'We need to set realistic goals for the project.', ex_ko:'우리는 프로젝트에 대해 현실적인 목표를 설정해야 합니다.'},
  {word:'reasonable', meaning:'타당한, 적당한(가격)', ex_en:'The hotel offers comfortable rooms at reasonable prices.', ex_ko:'그 호텔은 적당한 가격에 편안한 객실을 제공합니다.'},
  {word:'rebate', meaning:'환불, 리베이트', ex_en:'Customers can get a rebate on certain energy-efficient appliances.', ex_ko:'고객들은 특정 에너지 효율 가전제품에 대해 환급(리베이트)을 받을 수 있습니다.'},
  {word:'receipt', meaning:'영수증, 수령', ex_en:'Please keep your receipt in case you need a refund.', ex_ko:'환불이 필요할 수 있으니 영수증을 보관해 주세요.'},
  {word:'recession', meaning:'경기 침체', ex_en:'The country is facing a severe economic recession.', ex_ko:'그 나라는 심각한 경기 침체에 처해 있습니다.'},
  {word:'recipient', meaning:'수령인, 수취인', ex_en:'Please write the name of the recipient on the envelope.', ex_ko:'봉투에 수령인의 이름을 적어주세요.'},
  {word:'recognition', meaning:'인식, 인정', ex_en:'He received an award in recognition of his hard work.', ex_ko:'그는 그의 노고를 인정받아 상을 받았습니다.'},
  {word:'recommend', meaning:'추천하다', ex_en:'I highly recommend this software for data analysis.', ex_ko:'데이터 분석을 위해 이 소프트웨어를 적극 추천합니다.'},
  {word:'reconcile', meaning:'화해시키다, 일치시키다', ex_en:'It is hard to reconcile the two different reports.', ex_ko:'두 개의 서로 다른 보고서를 일치시키는 것은 어렵습니다.'},
  {word:'record', meaning:'기록, 기록하다', ex_en:'Please keep a record of all your expenses.', ex_ko:'모든 지출에 대한 기록을 남겨두세요.'},
  {word:'recover', meaning:'회복하다, 되찾다', ex_en:'The economy is starting to recover from the recession.', ex_ko:'경제가 경기 침체에서 회복되기 시작하고 있습니다.'},
  {word:'recruitment', meaning:'채용, 신규 모집', ex_en:'The company is starting a new recruitment drive.', ex_ko:'회사는 새로운 채용 캠페인을 시작하고 있습니다.'},
  {word:'reduce', meaning:'줄이다, 감소시키다', ex_en:'We need to reduce our operating costs.', ex_ko:'우리는 운영 비용을 줄여야 합니다.'},
  {word:'redundant', meaning:'불필요한, 해고된', ex_en:'The new system makes the old manual process redundant.', ex_ko:'새 시스템으로 인해 예전의 수동 프로세스는 불필요해졌습니다.'},
  {word:'refer', meaning:'참조하다, 언급하다', ex_en:'Please refer to the manual for more information.', ex_ko:'자세한 내용은 설명서를 참조하십시오.'},
  {word:'reference', meaning:'참조, 추천서', ex_en:'You need to provide two professional references.', ex_ko:'두 명의 전문직 추천인(또는 추천서)을 제공해야 합니다.'},
  {word:'refine', meaning:'개선하다, 정제하다', ex_en:'We need to refine our marketing strategy.', ex_ko:'우리는 마케팅 전략을 개선해야 합니다.'},
  {word:'reflect', meaning:'반영하다, 반사하다', ex_en:'The survey results reflect the views of the public.', ex_ko:'설문 조사 결과는 대중의 견해를 반영합니다.'},
  {word:'reform', meaning:'개혁, 개혁하다', ex_en:'The government is planning to reform the tax system.', ex_ko:'정부는 세제 개혁을 계획하고 있습니다.'},
  {word:'refund', meaning:'환불, 환불하다', ex_en:'If you are not satisfied, you can request a full refund.', ex_ko:'만족하지 못하신다면 전액 환불을 요청하실 수 있습니다.'},
  {word:'regardless', meaning:'~에 상관없이', ex_en:'All employees are entitled to benefits regardless of their position.', ex_ko:'직급에 상관없이 모든 직원은 복지 혜택을 받을 권리가 있습니다.'},
  {word:'regional', meaning:'지역의', ex_en:'The company has several regional offices in Europe.', ex_ko:'회사는 유럽에 여러 지역 사무소를 두고 있습니다.'},
  {word:'register', meaning:'등록하다', ex_en:'You need to register online for the conference.', ex_ko:'컨퍼런스를 위해 온라인으로 등록해야 합니다.'},
  {word:'registration', meaning:'등록', ex_en:'The registration fee for the seminar is $50.', ex_ko:'세미나 등록비는 50달러입니다.'},
  {word:'regular', meaning:'정기적인, 규칙적인', ex_en:'Regular exercise is important for your health.', ex_ko:'정기적인 운동은 건강에 중요합니다.'},
  {word:'regulate', meaning:'규제하다, 조절하다', ex_en:'The government regulates the banking industry.', ex_ko:'정부는 은행업을 규제합니다.'},
  {word:'regulation', meaning:'규정, 규제', ex_en:'Please follow the safety regulations at all times.', ex_ko:'항상 안전 규정을 준수해 주세요.'},
  {word:'reimburse', meaning:'상환하다, 배상하다', ex_en:'The company will reimburse you for your travel expenses.', ex_ko:'회사는 당신의 여행 경비를 상환(지불)해 줄 것입니다.'},
  {word:'reject', meaning:'거절하다, 거부하다', ex_en:'The proposal was rejected by the committee.', ex_ko:'제안은 위원회에 의해 거절되었습니다.'},
  {word:'related', meaning:'관련된', ex_en:'Please submit any documents related to the project.', ex_ko:'프로젝트와 관련된 서류들을 제출해 주세요.'},
  {word:'relative', meaning:'상대적인, 친척', ex_en:'The success of the project is relative to the market conditions.', ex_ko:'프로젝트의 성공은 시장 상황에 상대적입니다.'},
  {word:'relax', meaning:'완화하다, 휴식을 취하다', ex_en:'The company decided to relax its dress code policy.', ex_ko:'회사는 복장 규정 정책을 완화하기로 결정했습니다.'},
  {word:'release', meaning:'출시하다, 공개하다', ex_en:'The new model will be released next month.', ex_ko:'새 모델은 다음 달에 출시될 예정입니다.'},
  {word:'relevant', meaning:'관련된, 적절한', ex_en:'Please include all relevant information in your report.', ex_ko:'보고서에 모든 관련 정보를 포함해 주세요.'},
  {word:'reliable', meaning:'신뢰할 수 있는', ex_en:'We are looking for a reliable supplier for the components.', ex_ko:'우리는 부품을 공급할 신뢰할 수 있는 공급업체를 찾고 있습니다.'},
  {word:'relief', meaning:'완화, 구호', ex_en:'The government provided relief funds to the victims of the storm.', ex_ko:'정부는 폭풍 피해자들에게 구호 자금을 제공했습니다.'},
  {word:'relocate', meaning:'이전하다, 이동하다', ex_en:'The company is planning to relocate its headquarters to Seoul.', ex_ko:'회사는 본사를 서울로 이전할 계획입니다.'},
  {word:'reluctant', meaning:'꺼려하는, 주저하는', ex_en:'He was reluctant to accept the new position.', ex_ko:'그는 새 직책을 맡기를 주저했습니다.'},
  {word:'rely', meaning:'의지하다, 믿다', ex_en:'We rely on our customers\' feedback to improve our services.', ex_ko:'우리는 서비스를 개선하기 위해 고객의 피드백에 의지합니다.'},
  {word:'remain', meaning:'남다, 여전히 ~이다', ex_en:'The office will remain closed during the holidays.', ex_ko:'사무실은 휴일 동안 계속 닫혀 있을 것입니다.'},
  {word:'remarkable', meaning:'놀라운, 주목할 만한', ex_en:'The company has seen remarkable growth in a short time.', ex_ko:'그 회사는 짧은 시간에 놀라운 성장을 보였습니다.'},
  {word:'remedy', meaning:'해결책, 치료', ex_en:'We need to find a remedy for the system failure.', ex_ko:'우리는 시스템 오류에 대한 해결책을 찾아야 합니다.'},
  {word:'remind', meaning:'상기시키다', ex_en:'Please remind him about the meeting tomorrow.', ex_ko:'그에게 내일 회의에 대해 상기시켜 주세요.'},
  {word:'remittance', meaning:'송금', ex_en:'The bank charges a fee for international remittances.', ex_ko:'은행은 해외 송금에 대해 수수료를 부과합니다.'},
  {word:'remote', meaning:'멀리 떨어진, 외진', ex_en:'Working from a remote location has become very popular.', ex_ko:'원격지에서 일하는 것이 매우 인기 있어졌습니다.'},
  {word:'remove', meaning:'제거하다, 치우다', ex_en:'Please remove all personal items from the desk.', ex_ko:'책상에서 모든 개인 물건을 치워주세요.'},
  {word:'renew', meaning:'갱신하다', ex_en:'I need to renew my passport before the trip.', ex_ko:'여행 전에 여권을 갱신해야 합니다.'},
  {word:'renovate', meaning:'개보수하다, 수리하다', ex_en:'The old building was renovated and turned into a hotel.', ex_ko:'낡은 건물은 개보수되어 호텔로 바뀌었습니다.'},
  {word:'rent', meaning:'임대료, 빌리다', ex_en:'The rent for the office space is very high.', ex_ko:'사무실 공간의 임대료가 매우 높습니다.'},
  {word:'repair', meaning:'수리하다', ex_en:'We need to repair the broken air conditioner.', ex_ko:'고장 난 에어컨을 수리해야 합니다.'},
  {word:'replace', meaning:'교체하다, 대신하다', ex_en:'We need to replace the old computers with new models.', ex_ko:'낡은 컴퓨터를 새 모델로 교체해야 합니다.'},
  {word:'reply', meaning:'답장하다, 답변', ex_en:'I am waiting for a reply to my email.', ex_ko:'제 이메일에 대한 답장을 기다리고 있습니다.'},
  {word:'report', meaning:'보고서, 보고하다', ex_en:'Please submit your progress report by Friday.', ex_ko:'금요일까지 진행 보고서를 제출해 주세요.'},
  {word:'represent', meaning:'대표하다, 나타내다', ex_en:'He represents the company at international conferences.', ex_ko:'그는 국제 회의에서 회사를 대표합니다.'},
  {word:'representative', meaning:'대표자, 담당자', ex_en:'A sales representative will contact you shortly.', ex_ko:'영업 담당자가 곧 당신에게 연락할 것입니다.'},
  {word:'reputation', meaning:'평판, 명성', ex_en:'The company has a good reputation for quality.', ex_ko:'그 회사는 품질 면에서 좋은 평판을 가지고 있습니다.'},
  {word:'request', meaning:'요청, 요청하다', ex_en:'We received a request for more information.', ex_ko:'더 많은 정보를 달라는 요청을 받았습니다.'},
  {word:'require', meaning:'요구하다, 필요로 하다', ex_en:'The job requires excellent communication skills.', ex_ko:'그 직무는 뛰어난 소통 능력을 요구합니다.'},
  {word:'requirement', meaning:'요구사항, 요건', ex_en:'Meeting the deadline is a key requirement.', ex_ko:'마감일을 지키는 것이 주요 요구사항입니다.'},
  {word:'research', meaning:'연구, 조사', ex_en:'The company invests heavily in research and development.', ex_ko:'회사는 연구 개발에 많은 투자를 합니다.'},
  {word:'reservation', meaning:'예약', ex_en:'I would like to make a reservation for two people.', ex_ko:'두 명 예약을 하고 싶습니다.'},
  {word:'reserve', meaning:'예약하다, 비축하다', ex_en:'Please reserve a seat for me at the seminar.', ex_ko:'세미나에 제 자리를 예약해 주세요.'},
  {word:'resident', meaning:'거주자, 주민', ex_en:'Local residents are concerned about the noise.', ex_ko:'지역 주민들이 소음에 대해 우려하고 있습니다.'},
  {word:'resign', meaning:'사직하다, 물러나다', ex_en:'He resigned from his position as CEO last week.', ex_ko:'그는 지난주에 CEO 직에서 사임했습니다.'},
  {word:'resist', meaning:'저항하다, 참다', ex_en:'The company resisted the pressure to lower prices.', ex_ko:'회사는 가격을 낮추라는 압력에 저항했습니다.'},
  {word:'resolution', meaning:'해결, 결의안', ex_en:'The committee passed a resolution to increase the budget.', ex_ko:'위원회는 예산을 늘리는 결의안을 통과시켰습니다.'},
  {word:'resource', meaning:'자원', ex_en:'The region is rich in natural resources.', ex_ko:'그 지역은 천연자원이 풍부합니다.'},
  {word:'respect', meaning:'존경, 존중하다', ex_en:'We should respect the opinions of others.', ex_ko:'우리는 타인의 의견을 존중해야 합니다.'},
  {word:'respond', meaning:'응답하다, 반응하다', ex_en:'Please respond to the invitation by Friday.', ex_ko:'금요일까지 초대에 응답해 주세요.'},
  {word:'response', meaning:'응답, 반응', ex_en:'The company\'s response to the crisis was very quick.', ex_ko:'위기에 대한 회사의 대응은 매우 빨랐습니다.'},
  {word:'responsibility', meaning:'책임', ex_en:'It is your responsibility to finish the task on time.', ex_ko:'과제를 제시간에 끝내는 것은 당신의 책임입니다.'},
  {word:'responsible', meaning:'책임이 있는', ex_en:'The manager is responsible for the overall project.', ex_ko:'매니저는 전반적인 프로젝트에 책임이 있습니다.'},
  {word:'restore', meaning:'복구하다, 회복하다', ex_en:'The power was restored after the storm.', ex_ko:'폭풍 후에 전력이 복구되었습니다.'},
  {word:'restrict', meaning:'제한하다, 한정하다', ex_en:'The use of company cars is restricted to business use.', ex_ko:'회사 차량 사용은 업무용으로 제한됩니다.'},
  {word:'restriction', meaning:'제한, 규제', ex_en:'There are no restrictions on the number of entries.', ex_ko:'응모 횟수에는 제한이 없습니다.'},
  {word:'result', meaning:'결과, 발생하다', ex_en:'The new strategy resulted in a significant increase in sales.', ex_ko:'새로운 전략은 판매량의 상당한 증가를 가져왔습니다.'},
  {word:'resume', meaning:'이력서, 다시 시작하다', ex_en:'Please send your resume to the human resources department.', ex_ko:'인사과로 이력서를 보내주세요.'},
  {word:'retail', meaning:'소매', ex_en:'The product is available in most retail stores.', ex_ko:'그 제품은 대부분의 소매점에서 판매됩니다.'},
  {word:'retain', meaning:'유지하다, 보유하다', ex_en:'The company managed to retain its top talent.', ex_ko:'회사는 핵심 인재들을 유지하는 데 성공했습니다.'},
  {word:'retire', meaning:'은퇴하다', ex_en:'He plans to retire at the end of next year.', ex_ko:'그는 내년 말에 은퇴할 계획입니다.'},
  {word:'return', meaning:'반납하다, 돌아오다, 수익', ex_en:'Please return the borrowed items by tomorrow.', ex_ko:'빌린 물건들을 내일까지 반납해 주세요.'},
  {word:'reveal', meaning:'드러내다, 밝히다', ex_en:'The survey revealed that most customers are satisfied.', ex_ko:'설문 조사 결과 대부분의 고객이 만족하고 있음이 드러났습니다.'},
  {word:'revenue', meaning:'수익, 매출', ex_en:'The company\'s annual revenue has doubled.', ex_ko:'회사의 연간 매출이 두 배로 늘었습니다.'},
  {word:'review', meaning:'검토, 평론, 복습', ex_en:'Please review the document before the meeting.', ex_ko:'회의 전에 서류를 검토해 주세요.'},
  {word:'revise', meaning:'수정하다, 개정하다', ex_en:'We need to revise the budget for next year.', ex_ko:'우리는 내년 예산을 수정해야 합니다.'},
  {word:'revision', meaning:'수정(본), 교정', ex_en:'The teacher asked for a revision of the essay.', ex_ko:'선생님은 에세이의 수정을 요청하셨습니다.'},
  {word:'reward', meaning:'보상, 보상하다', ex_en:'The company rewards employees for their hard work.', ex_ko:'회사는 직원들의 노고에 대해 보상합니다.'},
  {word:'rival', meaning:'경쟁자, 경쟁하는', ex_en:'The two companies are major rivals in the market.', ex_ko:'그 두 회사는 시장에서 주요 경쟁자입니다.'},
  {word:'role', meaning:'역할', ex_en:'He plays a key role in the project team.', ex_ko:'그는 프로젝트 팀에서 핵심적인 역할을 합니다.'},
  {word:'route', meaning:'경로, 길', ex_en:'What is the shortest route to the airport?', ex_ko:'공항으로 가는 가장 짧은 경로는 무엇인가요?'},
  {word:'routine', meaning:'일상적인 일, 루틴', ex_en:'Daily exercise has become part of my routine.', ex_ko:'매일 운동하는 것이 제 일상의 일부가 되었습니다.'},
  {word:'salary', meaning:'급여, 월급', ex_en:'The company offers a competitive salary and benefits.', ex_ko:'회사는 경쟁력 있는 급여와 복지를 제공합니다.'},
  {word:'sample', meaning:'샘플, 견본', ex_en:'Please take a sample of our new product.', ex_ko:'저희 신제품 샘플을 가져가세요.'},
  {word:'satisfaction', meaning:'만족', ex_en:'Customer satisfaction is very important to us.', ex_ko:'고객 만족은 저희에게 매우 중요합니다.'},
  {word:'satisfactory', meaning:'만족스러운', ex_en:'The performance of the new system is satisfactory.', ex_ko:'새 시스템의 성능은 만족스럽습니다.'},
  {word:'save', meaning:'저장하다, 절약하다, 구하다', ex_en:'Don\'t forget to save your changes before closing.', ex_ko:'닫기 전에 변경 사항을 저장하는 것을 잊지 마세요.'},
  {word:'scarcity', meaning:'부족, 결핍', ex_en:'The scarcity of resources is a major problem.', ex_ko:'자원 부족은 주요한 문제입니다.'},
  {word:'schedule', meaning:'일정, 일정을 잡다', ex_en:'We need to schedule a meeting for next week.', ex_ko:'다음 주에 회의 일정을 잡아야 합니다.'},
  {word:'scheme', meaning:'계획, 제도', ex_en:'The government launched a new health insurance scheme.', ex_ko:'정부는 새로운 건강보험 제도를 시작했습니다.'},
  {word:'scholarship', meaning:'장학금', ex_en:'She won a scholarship to study abroad.', ex_ko:'그녀는 해외 공부를 위해 장학금을 받았습니다.'},
  {word:'scientific', meaning:'과학적인', ex_en:'The research is based on scientific methods.', ex_ko:'연구는 과학적인 방법에 근거합니다.'},
  {word:'scope', meaning:'범위, 영역', ex_en:'The scope of the project has expanded.', ex_ko:'프로젝트의 범위가 확장되었습니다.'},
  {word:'seasonal', meaning:'계절적인, 한철의', ex_en:'The hotel hires seasonal staff during the summer.', ex_ko:'호텔은 여름 동안 계절별 직원을 고용합니다.'},
  {word:'secondary', meaning:'이차적인, 부차적인', ex_en:'Education is a secondary concern for him.', ex_ko:'교육은 그에게 부차적인 관심사입니다.'},
  {word:'section', meaning:'부분, 구역', ex_en:'Please fill out the first section of the form.', ex_ko:'양식의 첫 번째 섹션을 작성해 주세요.'},
  {word:'sector', meaning:'부문, 분야', ex_en:'The public sector is facing budget cuts.', ex_ko:'공공 부문은 예산 삭감에 직면해 있습니다.'},
  {word:'secure', meaning:'안전한, 확보하다', ex_en:'The building is monitored by a secure system.', ex_ko:'건물은 보안 시스템에 의해 감시됩니다.'},
  {word:'security', meaning:'보안, 안보', ex_en:'Airport security has been tightened.', ex_ko:'공항 보안이 강화되었습니다.'},
  {word:'segment', meaning:'부분, 조각', ex_en:'The market is divided into several segments.', ex_ko:'시장은 여러 세그먼트로 나뉩니다.'},
  {word:'select', meaning:'선택하다, 엄선된', ex_en:'Please select the best option from the list.', ex_ko:'목록에서 가장 좋은 옵션을 선택하세요.'},
  {word:'selection', meaning:'선택, 선정', ex_en:'There is a wide selection of products in the store.', ex_ko:'상점에는 다양한 제품들이 선정되어 있습니다.'},
  {word:'senior', meaning:'선임의, 고위직의', ex_en:'He is a senior manager at the company.', ex_ko:'그는 회사의 선임 매니저입니다.'},
  {word:'sensible', meaning:'분별 있는, 합리적인', ex_en:'It is a sensible decision to save money.', ex_ko:'돈을 절약하는 것은 현명한 결정입니다.'},
  {word:'sensitive', meaning:'민감한', ex_en:'The information is very sensitive and must be kept secret.', ex_ko:'그 정보는 매우 민감하므로 비밀로 유지되어야 합니다.'},
  {word:'sequence', meaning:'순서, 차례', ex_en:'Please follow the sequence of the instructions.', ex_ko:'지침의 순서를 따라주세요.'},
  {word:'series', meaning:'연속, 시리즈', ex_en:'The company launched a series of new products.', ex_ko:'회사는 일련의 신제품들을 출시했습니다.'},
  {word:'session', meaning:'세션, 기간', ex_en:'The training session will last for two hours.', ex_ko:'교육 세션은 2시간 동안 진행됩니다.'},
  {word:'setting', meaning:'설정, 환경', ex_en:'You can change the language settings on your phone.', ex_ko:'전화기에서 언어 설정을 변경할 수 있습니다.'},
  {word:'settlement', meaning:'정착, 해결, 합의', ex_en:'The two parties reached a settlement out of court.', ex_ko:'양측은 법정 밖에서 합의에 도달했습니다.'},
  {word:'severe', meaning:'심각한, 가혹한', ex_en:'The company is facing severe financial problems.', ex_ko:'회사는 심각한 재정 문제에 처해 있습니다.'},
  {word:'shift', meaning:'변화, 교대 근무', ex_en:'I am working the night shift this week.', ex_ko:'이번 주에 저는 야간 근무를 합니다.'},
  {word:'shipping', meaning:'배송, 선송', ex_en:'The shipping cost is included in the price.', ex_ko:'배송비가 가격에 포함되어 있습니다.'},
  {word:'shortage', meaning:'부족, 결핍', ex_en:'There is a shortage of skilled workers in the industry.', ex_ko:'업계에 숙련된 노동자가 부족합니다.'},
  {word:'shuttle', meaning:'셔틀, 정기 왕복편', ex_en:'There is a free shuttle bus to the airport.', ex_ko:'공항까지 가는 무료 셔틀버스가 있습니다.'},
  {word:'signature', meaning:'서명', ex_en:'Please provide your signature at the bottom of the page.', ex_ko:'페이지 하단에 서명해 주세요.'},
  {word:'significant', meaning:'상당한, 중요한', ex_en:'The news had a significant impact on the market.', ex_ko:'그 뉴스는 시장에 상당한 영향을 미쳤습니다.'},
  {word:'signify', meaning:'의미하다, 나타내다', ex_en:'The red light signifies that the machine is on.', ex_ko:'빨간 불은 기계가 켜져 있음을 의미합니다.'},
  {word:'similar', meaning:'유사한, 비슷한', ex_en:'The two products are very similar in quality.', ex_ko:'그 두 제품은 품질 면에서 매우 유사합니다.'},
  {word:'simple', meaning:'간단한, 단순한', ex_en:'The instructions are simple and easy to follow.', ex_ko:'지침은 간단하고 따라 하기 쉽습니다.'},
  {word:'simplify', meaning:'단순화하다', ex_en:'We need to simplify the application process.', ex_ko:'우리는 지원 과정을 단순화해야 합니다.'},
  {word:'site', meaning:'사이트, 위치', ex_en:'The construction site is located near the river.', ex_ko:'공사 현장은 강 근처에 위치해 있습니다.'},
  {word:'situation', meaning:'상황', ex_en:'We need to assess the situation before making a decision.', ex_ko:'결정을 내리기 전에 상황을 평가해야 합니다.'},
  {word:'skillful', meaning:'능숙한', ex_en:'He is a skillful negotiator.', ex_ko:'그는 능숙한 협상가입니다.'},
  {word:'slide', meaning:'미끄러지다, 슬라이드', ex_en:'The presentation included 20 slides.', ex_ko:'발표에는 20개의 슬라이드가 포함되었습니다.'},
  {word:'slight', meaning:'약간의, 가벼운', ex_en:'There was a slight delay in the flight.', ex_ko:'비행기에 약간의 지연이 있었습니다.'},
  {word:'slogan', meaning:'슬로건, 구호', ex_en:'The company\'s slogan is "Quality First".', ex_ko:'그 회사의 슬로건은 "품질 우선"입니다.'},
  {word:'solely', meaning:'오로지, 단독으로', ex_en:'The decision was based solely on the facts.', ex_ko:'결정은 오로지 사실에 근거했습니다.'},
  {word:'solution', meaning:'해결책', ex_en:'We need to find a solution to the problem.', ex_ko:'우리는 문제에 대한 해결책을 찾아야 합니다.'},
  {word:'solve', meaning:'해결하다', ex_en:'We solved the technical issue quickly.', ex_ko:'우리는 기술적 문제를 빨리 해결했습니다.'},
  {word:'somewhat', meaning:'어느 정도, 다소', ex_en:'The results were somewhat disappointing.', ex_ko:'결과가 다소 실망스러웠습니다.'},
  {word:'sophisticated', meaning:'정교한, 세련된', ex_en:'The software uses a sophisticated algorithm.', ex_ko:'소프트웨어는 정교한 알고리즘을 사용합니다.'},
  {word:'source', meaning:'출처, 원천', ex_en:'What is the source of the information?', ex_ko:'정보의 출처가 어디인가요?'},
  {word:'spacious', meaning:'넓은, 널찍한', ex_en:'The new office is very spacious.', ex_ko:'새 사무실은 매우 넓습니다.'},
  {word:'specialize', meaning:'전문으로 하다', ex_en:'The company specializes in digital marketing.', ex_ko:'그 회사는 디지털 마케팅을 전문으로 합니다.'},
  {word:'specific', meaning:'특정한, 구체적인', ex_en:'Please be specific about your requirements.', ex_ko:'요구사항을 구체적으로 말씀해 주세요.'},
  {word:'specification', meaning:'명세서, 사양', ex_en:'Please provide the technical specifications for the product.', ex_ko:'제품의 기술 사양을 알려주세요.'},
  {word:'spectacular', meaning:'장관인, 화려한', ex_en:'The fireworks display was spectacular.', ex_ko:'불꽃놀이는 장관이었습니다.'},
  {word:'speech', meaning:'연설, 발화', ex_en:'The CEO gave an inspiring speech at the gala.', ex_ko:'CEO는 갈라 행사에서 영감을 주는 연설을 했습니다.'},
  {word:'sponsor', meaning:'후원자, 후원하다', ex_en:'The event is sponsored by a local business.', ex_ko:'그 행사는 지역 업체에 의해 후원됩니다.'},
  {word:'spontaneous', meaning:'자발적인, 즉흥적인', ex_en:'The crowd gave a spontaneous applause.', ex_ko:'군중은 자발적인 박수를 보냈습니다.'},
  {word:'stable', meaning:'안정적인', ex_en:'The economy is starting to become more stable.', ex_ko:'경제가 더 안정되기 시작하고 있습니다.'},
  {word:'staff', meaning:'직원', ex_en:'The staff are very friendly and helpful.', ex_ko:'직원들은 매우 친절하고 도움이 됩니다.'},
  {word:'stage', meaning:'단계, 무대', ex_en:'The project is in its early stages.', ex_ko:'프로젝트는 초기 단계에 있습니다.'},
  {word:'standard', meaning:'표준, 수준', ex_en:'We maintain high standards of quality.', ex_ko:'우리는 높은 품질 수준을 유지합니다.'},
  {word:'statement', meaning:'성명, 진술서', ex_en:'The company issued an official statement.', ex_ko:'회사는 공식 성명을 발표했습니다.'},
  {word:'station', meaning:'역, 정거장', ex_en:'The train station is near the hotel.', ex_ko:'기차역은 호텔 근처에 있습니다.'},
  {word:'statistic', meaning:'통계', ex_en:'The statistics show a high level of satisfaction.', ex_ko:'통계는 높은 수준의 만족도를 보여줍니다.'},
  {word:'status', meaning:'상태, 지위', ex_en:'What is the status of the project?', ex_ko:'프로젝트의 상태가 어떤가요?'},
  {word:'steady', meaning:'꾸준한, 안정된', ex_en:'The company has seen steady growth.', ex_ko:'회사는 꾸준한 성장을 보였습니다.'},
  {word:'stock', meaning:'재고, 주식', ex_en:'We have plenty of stock in the warehouse.', ex_ko:'창고에 재고가 넉넉합니다.'},
  {word:'storage', meaning:'저장, 보관', ex_en:'The office needs more storage space.', ex_ko:'사무실에 더 많은 저장 공간이 필요합니다.'},
  {word:'strategy', meaning:'전략', ex_en:'We need to develop a new marketing strategy.', ex_ko:'우리는 새로운 마케팅 전략을 세워야 합니다.'},
  {word:'strict', meaning:'엄격한', ex_en:'The company has strict rules regarding safety.', ex_ko:'회사는 안전에 대해 엄격한 규칙을 가지고 있습니다.'},
  {word:'structure', meaning:'구조', ex_en:'The company underwent a restructuring of its management.', ex_ko:'회사는 경영진 구조 조정을 거쳤습니다.'},
  {word:'student', meaning:'학생', ex_en:'Many students use our app for learning.', ex_ko:'많은 학생들이 학습을 위해 저희 앱을 사용합니다.'},
  {word:'study', meaning:'연구, 공부', ex_en:'The study shows the benefits of regular exercise.', ex_ko:'그 연구는 정기적인 운동의 이점을 보여줍니다.'},
  {word:'subject', meaning:'주제, 대상', ex_en:'The subject of the meeting is the new budget.', ex_ko:'회의 주제는 새로운 예산입니다.'},
  {word:'submit', meaning:'제출하다', ex_en:'Please submit your application by Friday.', ex_ko:'금요일까지 지원서를 제출해 주세요.'},
  {word:'substantial', meaning:'상당한, 실질적인', ex_en:'The company made a substantial investment.', ex_ko:'회사는 상당한 투자를 했습니다.'},
  {word:'substitute', meaning:'대체하다, 대용품', ex_en:'We used a substitute for the missing component.', ex_ko:'우리는 빠진 부품을 대신해 대체품을 사용했습니다.'},
  {word:'success', meaning:'성공', ex_en:'The project was a big success.', ex_ko:'프로젝트는 큰 성공이었습니다.'},
  {word:'successful', meaning:'성공적인', ex_en:'He is a successful businessman.', ex_ko:'그는 성공한 사업가입니다.'},
  {word:'sufficient', meaning:'충분한', ex_en:'We have sufficient resources for the project.', ex_ko:'우리는 프로젝트를 위한 충분한 자원이 있습니다.'},
  {word:'suggest', meaning:'제안하다, 암시하다', ex_en:'I suggest that we meet tomorrow.', ex_ko:'내일 만날 것을 제안합니다.'},
  {word:'suggestion', meaning:'제안', ex_en:'Thank you for your suggestion.', ex_ko:'당신의 제안에 감사드립니다.'},
  {word:'suitable', meaning:'적합한', ex_en:'The hotel is suitable for business travelers.', ex_ko:'그 호텔은 비즈니스 여행객에게 적합합니다.'},
  {word:'summary', meaning:'요약', ex_en:'Please provide a brief summary of the report.', ex_ko:'보고서의 간략한 요약을 제공해 주세요.'},
  {word:'superior', meaning:'우수한, 상급의', ex_en:'The product is of superior quality.', ex_ko:'그 제품은 우수한 품질입니다.'},
  {word:'supervise', meaning:'감독하다, 관리하다', ex_en:'She supervises a team of 10 people.', ex_ko:'그녀는 10명의 팀을 감독합니다.'},
  {word:'supervisor', meaning:'관리자, 감독관', ex_en:'Please report the issue to your supervisor.', ex_ko:'문제를 관리자에게 보고하세요.'},
  {word:'supplement', meaning:'보충하다, 부록', ex_en:'We need to supplement our income.', ex_ko:'우리는 수입을 보충해야 합니다.'},
  {word:'supplier', meaning:'공급업체', ex_en:'We are looking for a new supplier.', ex_ko:'우리는 새로운 공급업체를 찾고 있습니다.'},
  {word:'supply', meaning:'공급, 공급하다', ex_en:'The supply of electricity was interrupted.', ex_ko:'전력 공급이 중단되었습니다.'},
  {word:'support', meaning:'지원하다, 후원', ex_en:'The company supports local charities.', ex_ko:'회사는 지역 자선 단체를 지원합니다.'},
  {word:'surplus', meaning:'흑자, 과잉', ex_en:'The country has a trade surplus.', ex_ko:'그 나라는 무역 흑자를 기록하고 있습니다.'},
  {word:'survey', meaning:'설문 조사', ex_en:'We conducted a survey of our customers.', ex_ko:'우리는 고객 설문 조사를 실시했습니다.'},
  {word:'suspicious', meaning:'의심스러운', ex_en:'The security guard noticed a suspicious package.', ex_ko:'보안 요원이 의심스러운 패키지를 발견했습니다.'},
  {word:'symptom', meaning:'증상', ex_en:'What are the symptoms of the flu?', ex_ko:'독감의 증상은 무엇인가요?'},
  {word:'system', meaning:'시스템, 체계', ex_en:'The new system is very efficient.', ex_ko:'새 시스템은 매우 효율적입니다.'},
  {word:'target', meaning:'목표, 대상으로 삼다', ex_en:'Our target market is young professionals.', ex_ko:'저희의 목표 시장은 젊은 전문직 종사자들입니다.'},
  {word:'tariff', meaning:'관세, 요금표', ex_en:'The government imposed a tariff on imported goods.', ex_ko:'정부는 수입품에 관세를 부과했습니다.'},
  {word:'technical', meaning:'기술적인', ex_en:'The issue was caused by a technical failure.', ex_ko:'그 문제는 기술적 실패로 인해 발생했습니다.'},
  {word:'technician', meaning:'기술자', ex_en:'A technician will repair the machine.', ex_ko:'기술자가 기계를 수리할 것입니다.'},
  {word:'technique', meaning:'기술, 기법', ex_en:'We are using a new technique for data analysis.', ex_ko:'우리는 데이터 분석을 위해 새로운 기법을 사용하고 있습니다.'},
  {word:'technology', meaning:'기술', ex_en:'The company uses the latest technology.', ex_ko:'회사는 최신 기술을 사용합니다.'},
  {word:'temporary', meaning:'임시의', ex_en:'She has a temporary job for the summer.', ex_ko:'그녀는 여름 동안 임시직을 가지고 있습니다.'},
  {word:'tenant', meaning:'세입자', ex_en:'The tenant moved out of the apartment.', ex_ko:'세입자가 아파트에서 이사 나갔습니다.'},
  {word:'tend', meaning:'~하는 경향이 있다', ex_en:'Prices tend to rise during the holidays.', ex_ko:'휴일 동안 가격이 오르는 경향이 있습니다.'},
  {word:'term', meaning:'용어, 기간, 조건', ex_en:'Please read the terms and conditions.', ex_ko:'이용 약관(조건)을 읽어주세요.'},
  {word:'terminate', meaning:'종료하다', ex_en:'Either party can terminate the contract.', ex_ko:'어느 쪽이든 계약을 종료할 수 있습니다.'},
  {word:'territory', meaning:'영토, 구역', ex_en:'The company is expanding its territory.', ex_ko:'회사는 영역을 확장하고 있습니다.'},
  {word:'test', meaning:'테스트, 시험', ex_en:'The product is undergoing testing.', ex_ko:'제품이 테스트를 거치고 있습니다.'},
  {word:'theme', meaning:'주제, 테마', ex_en:'The theme of the conference is innovation.', ex_ko:'컨퍼런스의 주제는 혁신입니다.'},
  {word:'thorough', meaning:'철저한', ex_en:'The police conducted a thorough investigation.', ex_ko:'경찰은 철저한 조사를 실시했습니다.'},
  {word:'threat', meaning:'위협', ex_en:'Cybersecurity is a major threat to businesses.', ex_ko:'사이버 보안은 기업에 큰 위협입니다.'},
  {word:'thrive', meaning:'번창하다', ex_en:'The business is thriving in the new location.', ex_ko:'사업이 새 위치에서 번창하고 있습니다.'},
  {word:'ticket', meaning:'티켓, 표', ex_en:'I bought a ticket for the concert.', ex_ko:'콘서트 티켓을 샀습니다.'},
  {word:'timeline', meaning:'시간표, 타임라인', ex_en:'What is the timeline for the project?', ex_ko:'프로젝트의 타임라인(일정)은 어떻게 되나요?'},
  {word:'title', meaning:'제목, 직함', ex_en:'What is your job title?', ex_ko:'당신의 직함이 무엇인가요?'},
  {word:'token', meaning:'표시, 토큰', ex_en:'Please accept this gift as a token of my appreciation.', ex_ko:'감사의 표시로 이 선물을 받아주세요.'},
  {word:'total', meaning:'전체의, 총계', ex_en:'The total cost was $500.', ex_ko:'총비용은 500달러였습니다.'},
  {word:'tourism', meaning:'관광(업)', ex_en:'Tourism is a major industry in the region.', ex_ko:'관광업은 그 지역의 주요 산업입니다.'},
  {word:'tourist', meaning:'관광객', ex_en:'The city attracts millions of tourists every year.', ex_ko:'그 도시는 매년 수백만 명의 관광객을 끌어들입니다.'},
  {word:'trace', meaning:'추적하다, 흔적', ex_en:'The police are trying to trace the caller.', ex_ko:'경찰은 발신자를 추적하려 노력하고 있습니다.'},
  {word:'track', meaning:'추적하다, 선로', ex_en:'You can track your order online.', ex_ko:'온라인으로 주문을 추적할 수 있습니다.'},
  {word:'trade', meaning:'무역, 거래', ex_en:'The two countries have a strong trade relationship.', ex_ko:'두 나라는 강력한 무역 관계를 가지고 있습니다.'},
  {word:'tradition', meaning:'전통', ex_en:'The company has a long tradition of excellence.', ex_ko:'회사는 우수성에 대한 오랜 전통을 가지고 있습니다.'},
  {word:'traffic', meaning:'교통, 통신량', ex_en:'The traffic was very heavy this morning.', ex_ko:'오늘 아침 교통이 매우 혼잡했습니다.'},
  {word:'training', meaning:'교육, 훈련', ex_en:'All employees must attend the training session.', ex_ko:'모든 직원은 교육 세션에 참석해야 합니다.'},
  {word:'transfer', meaning:'이전하다, 전근', ex_en:'He was transferred to the London office.', ex_ko:'그는 런던 사무소로 전근되었습니다.'},
  {word:'transit', meaning:'통과, 수송', ex_en:'The goods are currently in transit.', ex_ko:'상품은 현재 수송 중입니다.'},
  {word:'translate', meaning:'번역하다', ex_en:'The document needs to be translated into English.', ex_ko:'그 서류는 영어로 번역되어야 합니다.'},
  {word:'translation', meaning:'번역', ex_en:'The translation was very accurate.', ex_ko:'번역이 매우 정확했습니다.'},
  {word:'transport', meaning:'수송, 운송', ex_en:'The city has a good public transport system.', ex_ko:'도시는 좋은 대중교통 시스템을 가지고 있습니다.'},
  {word:'transportation', meaning:'교통, 운송', ex_en:'Public transportation is very convenient.', ex_ko:'대중교통이 매우 편리합니다.'},
  {word:'travel', meaning:'여행하다', ex_en:'I travel for business once a month.', ex_ko:'저는 한 달에 한 번 업무차 여행을 합니다.'},
  {word:'treatment', meaning:'치료, 대우', ex_en:'The patient is receiving medical treatment.', ex_ko:'환자가 의료 치료를 받고 있습니다.'},
  {word:'trend', meaning:'추세, 경향', ex_en:'What is the latest trend in digital marketing?', ex_ko:'디지털 마케팅의 최신 트렌드는 무엇인가요?'},
  {word:'trial', meaning:'시험, 재판', ex_en:'The new drug is undergoing clinical trials.', ex_ko:'새로운 약이 임상 시험을 거치고 있습니다.'},
  {word:'trip', meaning:'여행', ex_en:'I am going on a business trip to Japan.', ex_ko:'저는 일본으로 출장을 갑니다.'},
  {word:'trouble', meaning:'문제, 고충', ex_en:'I am having trouble with my computer.', ex_ko:'컴퓨터에 문제가 있습니다.'},
  {word:'trust', meaning:'신뢰, 믿다', ex_en:'Trust is important in any relationship.', ex_ko:'어떤 관계에서든 신뢰는 중요합니다.'},
  {word:'tuition', meaning:'수업료', ex_en:'The tuition fee has increased this year.', ex_ko:'올해 수업료가 인상되었습니다.'},
  {word:'ultimate', meaning:'궁극적인, 최종의', ex_en:'Our ultimate goal is success.', ex_ko:'저희의 궁극적인 목표는 성공입니다.'},
  {word:'unable', meaning:'~할 수 없는', ex_en:'I was unable to attend the meeting.', ex_ko:'저는 회의에 참석할 수 없었습니다.'},
  {word:'unanimous', meaning:'만장일치의', ex_en:'The board reached a unanimous decision.', ex_ko:'이사회는 만장일치의 결정을 내렸습니다.'},
  {word:'unavoidable', meaning:'피할 수 없는', ex_en:'The delay was unavoidable.', ex_ko:'지연은 피할 수 없었습니다.'},
  {word:'uncertain', meaning:'불확실한', ex_en:'The future of the company is uncertain.', ex_ko:'회사의 미래는 불확실합니다.'},
  {word:'uncomfortable', meaning:'불편한', ex_en:'The chair is very uncomfortable.', ex_ko:'의자가 매우 불편합니다.'},
  {word:'undergo', meaning:'겪다, 받다', ex_en:'The company is undergoing a major change.', ex_ko:'회사는 큰 변화를 겪고 있습니다.'},
  {word:'understand', meaning:'이해하다', ex_en:'I don\'t understand the instructions.', ex_ko:'지침을 이해하지 못하겠습니다.'},
  {word:'unexpected', meaning:'예상치 못한', ex_en:'The news was very unexpected.', ex_ko:'그 뉴스는 매우 예상치 못했습니다.'},
  {word:'unfortunate', meaning:'불운한, 아쉬운', ex_en:'It was an unfortunate accident.', ex_ko:'그것은 불운한 사고였습니다.'},
  {word:'unique', meaning:'독특한, 유일한', ex_en:'Each product has a unique design.', ex_ko:'각 제품은 독특한 디자인을 가지고 있습니다.'},
  {word:'unit', meaning:'단위, 부대', ex_en:'The factory produces 1000 units per day.', ex_ko:'공장은 하루에 1000개를 생산합니다.'},
  {word:'universal', meaning:'보편적인', ex_en:'Education is a universal right.', ex_ko:'교육은 보편적인 권리입니다.'},
  {word:'unknown', meaning:'알려지지 않은', ex_en:'The cause of the fire is unknown.', ex_ko:'화재 원인은 알려지지 않았습니다.'},
  {word:'unless', meaning:'~하지 않는 한', ex_en:'I will go unless it rains.', ex_ko:'비가 오지 않는 한 가겠습니다.'},
  {word:'unlikely', meaning:'~할 것 같지 않은', ex_en:'It is unlikely that the flight will be canceled.', ex_ko:'비행기가 취소될 것 같지 않습니다.'},
  {word:'unnecessary', meaning:'불필요한', ex_en:'The new system makes the old one unnecessary.', ex_ko:'새 시스템으로 인해 예전 것은 불필요해졌습니다.'},
  {word:'unpleasant', meaning:'불쾌한', ex_en:'The smell was very unpleasant.', ex_ko:'냄새가 매우 불쾌했습니다.'},
  {word:'unprecedented', meaning:'전례 없는', ex_en:'The growth of the company is unprecedented.', ex_ko:'회사의 성장은 전례가 없습니다.'},
  {word:'unreliable', meaning:'신뢰할 수 없는', ex_en:'The source of the information is unreliable.', ex_ko:'정보의 출처가 신뢰할 수 없습니다.'},
  {word:'unsatisfactory', meaning:'불만족스러운', ex_en:'The performance was unsatisfactory.', ex_ko:'성과가 불만족스러웠습니다.'},
  {word:'unstable', meaning:'불안정한', ex_en:'The political situation is unstable.', ex_ko:'정치적 상황이 불안정합니다.'},
  {word:'unsuccessful', meaning:'실패한', ex_en:'The project was unsuccessful.', ex_ko:'프로젝트는 실패했습니다.'},
  {word:'unusual', meaning:'특이한, 평소와 다른', ex_en:'It is unusual for him to be late.', ex_ko:'그가 늦는 것은 이례적인 일입니다.'},
  {word:'update', meaning:'업데이트, 최신 정보', ex_en:'Please update the software.', ex_ko:'소프트웨어를 업데이트해 주세요.'},
  {word:'upgrade', meaning:'업그레이드', ex_en:'We need to upgrade our equipment.', ex_ko:'우리는 장비를 업그레이드해야 합니다.'},
  {word:'urgent', meaning:'긴급한', ex_en:'This is an urgent matter.', ex_ko:'이것은 긴급한 문제입니다.'},
  {word:'usage', meaning:'사용, 사용법', ex_en:'The usage of electricity has increased.', ex_ko:'전력 사용량이 증가했습니다.'},
  {word:'useful', meaning:'유용한', ex_en:'The app is very useful for learning.', ex_ko:'그 앱은 학습에 매우 유용합니다.'},
  {word:'useless', meaning:'무용지물인', ex_en:'The information is useless.', ex_ko:'그 정보는 쓸모가 없습니다.'},
  {word:'user', meaning:'사용자', ex_en:'The app has millions of users.', ex_ko:'그 앱은 수백만 명의 사용자를 가지고 있습니다.'},
  {word:'utility', meaning:'공공시설, 유용성', ex_en:'The cost of utilities has increased.', ex_ko:'공공 요금(전기, 가스 등)이 인상되었습니다.'},
  {word:'utilize', meaning:'이용하다, 활용하다', ex_en:'We should utilize our resources effectively.', ex_ko:'우리는 자원을 효과적으로 활용해야 합니다.'},
  {word:'vacancy', meaning:'공석', ex_en:'There is a vacancy in the sales department.', ex_ko:'영업 부서에 공석이 있습니다.'},
  {word:'vacant', meaning:'비어 있는', ex_en:'The office has been vacant for months.', ex_ko:'사무실이 수개월 동안 비어 있었습니다.'},
  {word:'vacation', meaning:'휴가', ex_en:'I am going on vacation next week.', ex_ko:'저는 다음 주에 휴가를 갑니다.'},
  {word:'valid', meaning:'유효한, 타당한', ex_en:'The offer is valid until the end of the month.', ex_ko:'제안은 이달 말까지 유효합니다.'},
  {word:'validate', meaning:'입증하다, 승인하다', ex_en:'We need to validate the results of the study.', ex_ko:'우리는 연구 결과를 입증해야 합니다.'},
  {word:'valuable', meaning:'가치 있는', ex_en:'The information is very valuable.', ex_ko:'그 정보는 매우 가치 있습니다.'},
  {word:'value', meaning:'가치, 가치 있게 여기다', ex_en:'We value our customers\' feedback.', ex_ko:'우리는 고객의 피드백을 소중히 여깁니다.'},
  {word:'variable', meaning:'변수, 가변적인', ex_en:'There are many variables to consider.', ex_ko:'고려해야 할 변수가 많습니다.'},
  {word:'variation', meaning:'차이, 변화', ex_en:'There is some variation in the quality of the products.', ex_ko:'제품 품질에 약간의 차이가 있습니다.'},
  {word:'variety', meaning:'다양성, 종류', ex_en:'The store offers a variety of products.', ex_ko:'상점은 다양한 제품을 제공합니다.'},
  {word:'various', meaning:'다양한', ex_en:'We offer various services.', ex_ko:'우리는 다양한 서비스를 제공합니다.'},
  {word:'vary', meaning:'다르다, 바뀌다', ex_en:'Prices vary depending on the location.', ex_ko:'가격은 위치에 따라 다릅니다.'},
  {word:'vast', meaning:'방대한, 거대한', ex_en:'The region has vast natural resources.', ex_ko:'그 지역은 방대한 천연자원을 가지고 있습니다.'},
  {word:'vehicle', meaning:'차량, 수단', ex_en:'Please park your vehicle in the designated area.', ex_ko:'지정된 구역에 차량을 주차해 주세요.'},
  {word:'vendor', meaning:'판매업체, 행상인', ex_en:'We are looking for a new software vendor.', ex_ko:'우리는 새로운 소프트웨어 판매업체를 찾고 있습니다.'},
  {word:'venture', meaning:'벤처, 모험', ex_en:'The company started a new joint venture.', ex_ko:'회사는 새로운 합작 벤처를 시작했습니다.'},
  {word:'verify', meaning:'확인하다, 입증하다', ex_en:'Please verify your email address.', ex_ko:'이메일 주소를 확인해 주세요.'},
  {word:'version', meaning:'버전, 형태', ex_en:'A new version of the software is available.', ex_ko:'소프트웨어의 새 버전이 이용 가능합니다.'},
  {word:'vessel', meaning:'선박, 혈관', ex_en:'The vessel arrived at the port this morning.', ex_ko:'그 선박은 오늘 아침 항구에 도착했습니다.'},
  {word:'veteran', meaning:'베테랑, 노련한', ex_en:'He is a veteran of the industry.', ex_ko:'그는 업계의 베테랑입니다.'},
  {word:'via', meaning:'~을 통하여', ex_en:'The information was sent via email.', ex_ko:'정보는 이메일을 통해 전송되었습니다.'},
  {word:'viable', meaning:'실행 가능한', ex_en:'We need a viable business plan.', ex_ko:'우리는 실행 가능한 사업 계획이 필요합니다.'},
  {word:'victim', meaning:'피해자, 희생자', ex_en:'The government provided help to the victims.', ex_ko:'정부는 피해자들에게 도움을 제공했습니다.'},
  {word:'view', meaning:'경관, 견해, 보다', ex_en:'What is your view on the situation?', ex_ko:'상황에 대한 당신의 견해는 무엇입니까?'},
  {word:'vigorous', meaning:'활발한, 격렬한', ex_en:'The company started a vigorous marketing campaign.', ex_ko:'회사는 활발한 마케팅 캠페인을 시작했습니다.'},
  {word:'violate', meaning:'위반하다, 침해하다', ex_en:'The company violated the safety regulations.', ex_ko:'회사는 안전 규정을 위반했습니다.'},
  {word:'violation', meaning:'위반, 침해', ex_en:'It is a violation of the law.', ex_ko:'그것은 법률 위반입니다.'},
  {word:'virtual', meaning:'가상의, 사실상의', ex_en:'We are holding a virtual meeting tomorrow.', ex_ko:'내일 가상(화상) 회의를 엽니다.'},
  {word:'vision', meaning:'비전, 시력', ex_en:'The CEO shared his vision for the company.', ex_ko:'CEO는 회사를 위한 자신의 비전을 공유했습니다.'},
  {word:'visit', meaning:'방문하다', ex_en:'I am going to visit the office tomorrow.', ex_ko:'저는 내일 사무실을 방문할 예정입니다.'},
  {word:'visitor', meaning:'방문객', ex_en:'The museum attracts many visitors.', ex_ko:'박물관은 많은 방문객을 끌어들입니다.'},
  {word:'vital', meaning:'매우 중요한, 활기찬', ex_en:'Education is vital for success.', ex_ko:'교육은 성공에 매우 중요합니다.'},
  {word:'vivid', meaning:'생생한', ex_en:'I have a vivid memory of the event.', ex_ko:'그 행사에 대해 생생한 기억을 가지고 있습니다.'},
  {word:'vocation', meaning:'직업, 소명', ex_en:'Teaching is his true vocation.', ex_ko:'가르치는 것이 그의 진정한 천직(소명)입니다.'},
  {word:'volume', meaning:'부피, 양, 음량', ex_en:'The volume of sales has increased.', ex_ko:'판매량이 증가했습니다.'},
  {word:'voluntary', meaning:'자발적인', ex_en:'Participation is voluntary.', ex_ko:'참여는 자발적입니다.'},
  {word:'volunteer', meaning:'자원봉사자, 자원하다', ex_en:'He volunteered to lead the project.', ex_ko:'그는 프로젝트를 이끌겠다고 자원했습니다.'},
  {word:'vote', meaning:'투표하다', ex_en:'The employees voted for the new policy.', ex_ko:'직원들은 새로운 정책에 투표했습니다.'},
  {word:'voucher', meaning:'바우처, 상품권', ex_en:'You can use the voucher to get a discount.', ex_ko:'바우처를 사용하여 할인을 받을 수 있습니다.'},
  {word:'vulnerable', meaning:'취약한', ex_en:'Small businesses are vulnerable to economic changes.', ex_ko:'소기업은 경제 변화에 취약합니다.'},
  {word:'wage', meaning:'임금, 급료', ex_en:'The government plans to increase the minimum wage.', ex_ko:'정부는 최저 임금을 인상할 계획입니다.'},
  {word:'waive', meaning:'포기하다, 면제하다', ex_en:'The bank decided to waive the fee.', ex_ko:'은행은 수수료를 면제해 주기로 결정했습니다.'},
  {word:'wait', meaning:'기다리다', ex_en:'Please wait a moment.', ex_ko:'잠시만 기다려 주세요.'},
  {word:'warehouse', meaning:'창고', ex_en:'The goods are stored in the warehouse.', ex_ko:'상품들이 창고에 보관되어 있습니다.'},
  {word:'warn', meaning:'경고하다', ex_en:'The report warns of the risks of climate change.', ex_ko:'보고서는 기후 변화의 위험에 대해 경고합니다.'},
  {word:'warning', meaning:'경고', ex_en:'The system issued a warning message.', ex_ko:'시스템이 경고 메시지를 보냈습니다.'},
  {word:'warrant', meaning:'영장, 보증하다', ex_en:'The situation warrants immediate action.', ex_ko:'상황은 즉각적인 조치를 정당화(필요로)합니다.'},
  {word:'warranty', meaning:'보증(서)', ex_en:'The product comes with a one-year warranty.', ex_ko:'제품에는 1년 보증이 제공됩니다.'},
  {word:'waste', meaning:'폐기물, 낭비하다', ex_en:'Don\'t waste your time.', ex_ko:'시간을 낭비하지 마세요.'},
  {word:'wealth', meaning:'부, 재산', ex_en:'The country has vast natural wealth.', ex_ko:'그 나라는 방대한 천연 자산(부)을 가지고 있습니다.'},
  {word:'wealthy', meaning:'부유한', ex_en:'He is a wealthy businessman.', ex_ko:'그는 부유한 사업가입니다.'},
  {word:'weapon', meaning:'무기', ex_en:'The police found the weapon used in the crime.', ex_ko:'경찰은 범죄에 사용된 무기를 발견했습니다.'},
  {word:'wear', meaning:'입다, 닳다', ex_en:'Please wear a name tag.', ex_ko:'이름표를 착용해 주세요.'},
  {word:'weather', meaning:'날씨', ex_en:'The weather is very hot today.', ex_ko:'오늘 날씨가 매우 덥습니다.'},
  {word:'website', meaning:'웹사이트', ex_en:'Please visit our website for more information.', ex_ko:'더 많은 정보를 원하시면 저희 웹사이트를 방문해 주세요.'},
  {word:'weekly', meaning:'주간의', ex_en:'We have a weekly meeting on Mondays.', ex_ko:'우리는 월요일마다 주간 회의를 합니다.'},
  {word:'weight', meaning:'무게, 중량', ex_en:'The maximum weight for the package is 5kg.', ex_ko:'패키지의 최대 무게는 5kg입니다.'},
  {word:'welcome', meaning:'환영하다', ex_en:'Welcome to our company.', ex_ko:'저희 회사에 오신 것을 환영합니다.'},
  {word:'welfare', meaning:'복지, 후생', ex_en:'The company cares about the welfare of its employees.', ex_ko:'회사는 직원들의 복지에 신경을 씁니다.'},
  {word:'whereas', meaning:'반면에', ex_en:'He likes coffee, whereas I prefer tea.', ex_ko:'그는 커피를 좋아하지만, 반면에 저는 차를 선호합니다.'},
  {word:'whether', meaning:'~인지 아닌지', ex_en:'I don\'t know whether he will come.', ex_ko:'그가 올지 안 올지 모르겠습니다.'},
  {word:'while', meaning:'~하는 동안', ex_en:'Please wait while we process your request.', ex_ko:'요청을 처리하는 동안 기다려 주세요.'},
  {word:'wholesale', meaning:'도매', ex_en:'The company sells its products to wholesale customers.', ex_ko:'회사는 도매 고객들에게 제품을 판매합니다.'},
  {word:'wide', meaning:'넓은, 광범위한', ex_en:'We offer a wide range of services.', ex_ko:'우리는 광범위한 서비스를 제공합니다.'},
  {word:'widespread', meaning:'광범위한, 널리 퍼진', ex_en:'The use of mobile phones is widespread.', ex_ko:'휴대전화 사용이 널리 퍼져 있습니다.'},
  {word:'width', meaning:'너비, 폭', ex_en:'What is the width of the table?', ex_ko:'테이블의 너비가 얼마인가요?'},
  {word:'willing', meaning:'기꺼이 ~하는', ex_en:'I am willing to help you.', ex_ko:'기꺼이 당신을 돕겠습니다.'},
  {word:'win', meaning:'이기다, 얻다', ex_en:'The company won a contract for the project.', ex_ko:'회사는 프로젝트 계약을 따냈습니다.'},
  {word:'wind', meaning:'바람', ex_en:'The wind is very strong today.', ex_ko:'오늘 바람이 매우 강합니다.'},
  {word:'withdraw', meaning:'인출하다, 철회하다', ex_en:'I would like to withdraw some money.', ex_ko:'돈을 좀 인출하고 싶습니다.'},
  {word:'withdrawal', meaning:'인출, 철회', ex_en:'The withdrawal of the product was announced.', ex_ko:'제품 철수가 발표되었습니다.'},
  {word:'witness', meaning:'목격자, 목격하다', ex_en:'The police are looking for witnesses of the accident.', ex_ko:'경찰은 사고 목격자를 찾고 있습니다.'},
  {word:'wonder', meaning:'궁금해하다', ex_en:'I wonder if he will come.', ex_ko:'그가 올지 궁금합니다.'},
  {word:'wonderful', meaning:'멋진, 훌륭한', ex_en:'The event was a wonderful success.', ex_ko:'그 행사는 멋진 성공이었습니다.'},
  {word:'wood', meaning:'나무, 목재', ex_en:'The furniture is made of high-quality wood.', ex_ko:'가구는 고품질의 목재로 만들어졌습니다.'},
  {word:'word', meaning:'단어, 말', ex_en:'Please choose the correct word.', ex_ko:'올바른 단어를 선택하세요.'},
  {word:'work', meaning:'일하다, 작품', ex_en:'I work for a multinational company.', ex_ko:'저는 다국적 기업에서 일합니다.'},
  {word:'worker', meaning:'노동자, 직원', ex_en:'The company hires many skilled workers.', ex_ko:'회사는 많은 숙련된 노동자들을 고용합니다.'},
  {word:'workout', meaning:'운동', ex_en:'Daily workout is good for your health.', ex_ko:'매일 운동하는 것은 건강에 좋습니다.'},
  {word:'workshop', meaning:'워크숍, 작업장', ex_en:'The workshop will be held next Friday.', ex_ko:'워크숍은 다음 주 금요일에 열립니다.'},
  {word:'world', meaning:'세계', ex_en:'The company has offices all over the world.', ex_ko:'회사는 전 세계에 사무실을 두고 있습니다.'},
  {word:'worldwide', meaning:'전 세계적인', ex_en:'The brand is known worldwide.', ex_ko:'그 브랜드는 전 세계적으로 알려져 있습니다.'},
  {word:'worn', meaning:'닳은, 지친', ex_en:'The shoes are worn out.', ex_ko:'신발이 닳았습니다.'},
  {word:'worry', meaning:'걱정하다', ex_en:'Don\'t worry about the meeting.', ex_ko:'회의에 대해 걱정하지 마세요.'},
  {word:'worsen', meaning:'악화되다', ex_en:'The economic situation is worsening.', ex_ko:'경제 상황이 악화되고 있습니다.'},
  {word:'worth', meaning:'가치 있는, 가치', ex_en:'The information is worth millions.', ex_ko:'그 정보는 수백만의 가치가 있습니다.'},
  {word:'wrap', meaning:'싸다, 포장하다', ex_en:'Please wrap the gift.', ex_ko:'선물을 포장해 주세요.'},
  {word:'wrist', meaning:'손목', ex_en:'He injured his wrist during the game.', ex_ko:'그는 경기 중에 손목을 다쳤습니다.'},
  {word:'write', meaning:'쓰다', ex_en:'Please write your name here.', ex_ko:'여기에 이름을 써주세요.'},
  {word:'wrong', meaning:'틀린, 잘못된', ex_en:'The answer is wrong.', ex_ko:'답이 틀렸습니다.'},
  {word:'yard', meaning:'마당, 야드(단위)', ex_en:'The house has a large yard.', ex_ko:'그 집은 큰 마당을 가지고 있습니다.'},
  {word:'yearly', meaning:'매년의', ex_en:'The company holds a yearly conference.', ex_ko:'회사는 매년 컨퍼런스를 개최합니다.'},
  {word:'yearn', meaning:'갈망하다', ex_en:'She yearns for a career in music.', ex_ko:'그녀는 음악 분야에서의 경력을 갈망합니다.'},
  {word:'yield', meaning:'수확량, 양도하다, 굴복하다', ex_en:'The investment yielded high returns.', ex_ko:'투자는 높은 수익을 냈습니다.'},
  {word:'youth', meaning:'청춘, 젊음', ex_en:'He spent his youth traveling the world.', ex_ko:'그는 젊은 시절을 세계 여행을 하며 보냈습니다.'},
  {word:'zone', meaning:'구역, 지역', ex_en:'This is a no-parking zone.', ex_ko:'이곳은 주차 금지 구역입니다.'}
];

let activeWord;

let score = 0;
let total = 0;
let currentQuestionNum = 0;
let questionLimit = 10;
let wrongWords = JSON.parse(localStorage.getItem('wrongWords')) || [];
let customVoca = JSON.parse(localStorage.getItem('customVoca')) || [];
let userNickname = localStorage.getItem('nickname') || '';
let review = false;
let isVocaQuiz = false;
let quizMode = 'en-ko';

// Firebase Configuration (사용자 설정 필요)
// 구글 Firebase 콘솔에서 프로젝트 생성 후 아래 URL을 본인의 것으로 교체하세요.
const firebaseConfig = {
  databaseURL: "https://toeic-voca-master-default-rtdb.firebaseio.com/"
};

// 전역 스코어보드 변수
let scoreboard = [];

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
  const sections = ['home', 'guide', 'about', 'articles'];
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
  const themeIcon = isDark ? '☀️' : '🌙';
  const themeBtn = document.getElementById('theme-btn');
  const themeBtn2 = document.getElementById('theme-btn2');
  if (themeBtn) themeBtn.innerText = themeIcon;
  if (themeBtn2) themeBtn2.innerText = themeIcon;
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
      const authLabel = document.querySelector('#auth-section .selector-label');
      if (authLabel) authLabel.style.display = 'none';
    }
    if (userWelcome) {
      userWelcome.innerText = `반갑습니다, ${userNickname}님! 👋`;
      userWelcome.style.display = 'block';
    }
  }
}

async function loadScoreboard() {
  if (!scoreboardList) return;
  scoreboardList.innerHTML = '<p style="color:#999; text-align:center; padding: 20px;">랭킹 불러오는 중...</p>';
  
  
  try {
    const response = await fetch(`${firebaseConfig.databaseURL}/scores.json?orderBy="score"&limitToLast=10`);
    const data = await response.json();
    
    scoreboardList.innerHTML = '';
    if (!data) {
      scoreboardList.innerHTML = '<p style="color:#999; text-align:center; padding: 20px;">아직 기록이 없습니다.</p>';
      return;
    }

    // Firebase 데이터를 배열로 변환 및 정렬
    const scoresArray = Object.values(data);
    scoresArray.sort((a, b) => b.score - a.score || b.rate - a.rate);

    scoresArray.forEach((entry, index) => {
      const item = document.createElement('div');
      item.className = 'scoreboard-item';
      item.style.display = 'flex';
      item.style.justifyContent = 'space-between';
      item.style.padding = '10px';
      item.style.borderBottom = '1px solid var(--border-color)';
      item.innerHTML = `<span><b style="color:var(--primary-color)">${index + 1}.</b> ${entry.nickname}</span> <span><b>${entry.score}/${entry.limit}</b> (${entry.rate}%)</span>`;
      scoreboardList.appendChild(item);
    });
  } catch (error) {
    console.error("Scoreboard load failed:", error);
    scoreboardList.innerHTML = '<p style="color:#ff8787; text-align:center; padding: 20px;">랭킹을 불러오지 못했습니다.</p>';
  }
}

async function updateScoreboard(finalScore, limit) {
  if (!userNickname) return;
  const rate = Math.round((finalScore / limit) * 100);
  const newEntry = { 
    nickname: userNickname, 
    score: finalScore, 
    limit: limit, 
    rate: rate, 
    date: new Date().toISOString() 
  };

  try {
    await fetch(`${firebaseConfig.databaseURL}/scores.json`, {
      method: 'POST',
      body: JSON.stringify(newEntry)
    });
    loadScoreboard();
  } catch (error) {
    console.error("Scoreboard update failed:", error);
  }
}

function setMode(mode) {
  quizMode = mode;
  const modeEnKo = document.getElementById('mode-en-ko');
  const modeKoEn = document.getElementById('mode-ko-en');
  if (modeEnKo) modeEnKo.classList.toggle('active', mode === 'en-ko');
  if (modeKoEn) modeKoEn.classList.toggle('active', mode === 'ko-en');
  if (speakBtn) speakBtn.style.visibility = (mode === 'en-ko') ? 'visible' : 'hidden';
}

function setLimit(limit) { questionLimit = limit; }

function startQuiz() {
  review = false; isVocaQuiz = false; score = 0; total = 0; currentQuestionNum = 0;
  if (scoreboardContainer) scoreboardContainer.style.display = 'none';
  const scoreBoard = document.getElementById('score-board');
  if (scoreBoard) scoreBoard.style.display = 'block';
  nextQuestion();
}

function reviewMode() {
  if (wrongWords.length === 0) { alert('복습할 단어가 없습니다'); return; }
  review = true; isVocaQuiz = false; score = 0; total = 0; currentQuestionNum = 0;
  if (scoreboardContainer) scoreboardContainer.style.display = 'none';
  nextQuestion();
}

function vocaQuizMode() {
  if (customVoca.length < 4) { alert('나만의 단어장에 최소 4개 이상의 단어가 필요합니다!'); return; }
  review = false; isVocaQuiz = true; score = 0; total = 0; currentQuestionNum = 0;
  if (scoreboardContainer) scoreboardContainer.style.display = 'none';
  nextQuestion();
}

function nextQuestion() {
  let source = isVocaQuiz ? customVoca : (review ? wrongWords : words);
  let limit = isVocaQuiz ? Math.min(customVoca.length, questionLimit) : (review ? wrongWords.length : questionLimit);

  if (currentQuestionNum >= limit) { showSummary(); return; }
  if (resultEl) resultEl.innerText = ''; 
  if (exampleBox) exampleBox.style.display = 'none'; 
  if (nextBtn) nextBtn.style.display = 'none';
  
  let randomIndex = Math.floor(Math.random() * source.length);
  activeWord = source[randomIndex];

  let questionText = (quizMode === 'en-ko') ? activeWord.word : activeWord.meaning;
  let correctValue = (quizMode === 'en-ko') ? activeWord.meaning : activeWord.word;
  if (wordEl) wordEl.innerText = questionText;

  let options = [correctValue];
  let allPossibleWords = [...words, ...customVoca];
  while (options.length < 4) {
    let randObj = allPossibleWords[Math.floor(Math.random() * allPossibleWords.length)];
    let randValue = (quizMode === 'en-ko') ? randObj.meaning : randObj.word;
    if (!options.includes(randValue)) options.push(randValue);
  }
  options.sort(() => Math.random() - 0.5);

  if (choicesEl) {
    choicesEl.innerHTML = '';
    options.forEach(option => {
      const btn = document.createElement('button');
      btn.className = 'choice';
      btn.innerText = option;
      btn.onclick = () => checkAnswer(option);
      choicesEl.appendChild(btn);
    });
  }
  if (speakBtn) speakBtn.style.visibility = (quizMode === 'en-ko') ? 'visible' : 'hidden';
}

function checkAnswer(answer) {
  if (nextBtn && nextBtn.style.display === 'block') return;
  let correctValue = (quizMode === 'en-ko') ? activeWord.meaning : activeWord.word;
  total++; currentQuestionNum++;

  const choices = document.querySelectorAll('.choice');
  choices.forEach(btn => {
    if (btn.innerText === correctValue) btn.classList.add('correct');
    else if (btn.innerText === answer) btn.classList.add('wrong');
  });

  if (answer === correctValue) {
    score++;
    if (resultEl) {
      resultEl.innerText = '✅ 정답입니다!';
      resultEl.style.color = 'var(--success-color)';
    }
  } else {
    if (resultEl) {
      resultEl.innerText = '❌ 오답 (정답: ' + correctValue + ')';
      resultEl.style.color = 'var(--danger-color)';
    }
    if (!wrongWords.find(w => w.word === activeWord.word)) {
      wrongWords.push(activeWord);
      localStorage.setItem('wrongWords', JSON.stringify(wrongWords));
    }
  }

  if (activeWord.ex_en && activeWord.ex_ko) {
    if (exampleEn) exampleEn.innerHTML = activeWord.ex_en.replace(new RegExp(activeWord.word, 'gi'), '<b>$&</b>');
    if (exampleKo) exampleKo.innerText = activeWord.ex_ko;
    if (exampleBox) exampleBox.style.display = 'block';
  }

  if (nextBtn) nextBtn.style.display = 'block';
  let limit = isVocaQuiz ? Math.min(customVoca.length, questionLimit) : (review ? wrongWords.length : questionLimit);
  if (scoreEl) scoreEl.innerText = `진행: ${currentQuestionNum}/${limit} | 점수: ${score}`;
}

function showSummary() {
  let limit = isVocaQuiz ? Math.min(customVoca.length, questionLimit) : (review ? wrongWords.length : questionLimit);
  if (wordEl) wordEl.innerText = '학습 완료! 🎉';
  if (choicesEl) choicesEl.innerHTML = `<h3>최종 점수: ${score} / ${limit}</h3><p>정답률: ${Math.round((score / limit) * 100)}%</p>`;
  if (resultEl) resultEl.innerText = ''; 
  if (exampleBox) exampleBox.style.display = 'none'; 
  if (nextBtn) nextBtn.style.display = 'none';
  const scoreBoard = document.getElementById('score-board');
  if (scoreBoard) scoreBoard.style.display = 'none';
  if (scoreboardContainer) scoreboardContainer.style.display = 'block';
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
  if (vocaContent) {
    const isNone = vocaContent.style.display === 'none';
    vocaContent.style.display = isNone ? 'flex' : 'none';
  }
}

function renderVoca() {
  if (!vocaList) return;
  vocaList.innerHTML = '';
  // 알파벳 순으로 정렬 (원본 배열 보존을 위해 복사본 사용 추천하나 현재는 직접 정렬)
  customVoca.sort((a, b) => a.word.toLowerCase().localeCompare(b.word.toLowerCase()));

  customVoca.forEach((item) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <div class="voca-item-info">
        <span class="voca-word-text">${item.word}</span>
        <span class="voca-meaning-text">${item.meaning}</span>
      </div>
      <button class="delete-voca-btn" onclick="deleteCustomWord('${item.word.replace(/'/g, "\\'")}')" title="삭제">×</button>
    `;
    vocaList.appendChild(li);
  });
}

function addCustomWord() {
  if (!vocaWordInput || !vocaMeaningInput) return;
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

function deleteCustomWord(word) {
  customVoca = customVoca.filter(v => v.word !== word);
  localStorage.setItem('customVoca', JSON.stringify(customVoca));
  renderVoca();
}

function showWordOfTheDay() {
  const today = new Date().toDateString();
  const savedDate = localStorage.getItem('wotdDate');
  let wotd;

  if (savedDate === today) {
    const savedWotd = localStorage.getItem('wotd');
    if (savedWotd) wotd = JSON.parse(savedWotd);
  } 
  
  if (!wotd) {
    wotd = words[Math.floor(Math.random() * words.length)];
    localStorage.setItem('wotd', JSON.stringify(wotd));
    localStorage.setItem('wotdDate', today);
  }

  const container = document.getElementById('wotd-container');
  if (container && wotd) {
    container.innerHTML = `
      <div class="wotd-card">
        <div class="wotd-tag">오늘의 추천 단어</div>
        <div class="wotd-word">${wotd.word}</div>
        <div class="wotd-meaning">${wotd.meaning}</div>
        <div class="wotd-ex">${wotd.ex_en}</div>
      </div>
    `;
  }
}

// 초기화
(function() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') document.body.classList.add('dark-mode');
  showWelcome(); 
  loadScoreboard(); 
  renderVoca(); 
  showWordOfTheDay();
})();
document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && nextBtn.style.display === 'block') nextQuestion();
});
