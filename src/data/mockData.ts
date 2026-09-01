import { SubscriptionNotice, FaqItem } from '../types';

export const INITIAL_NOTICES: SubscriptionNotice[] = [
  {
    id: 'lh-2026-001',
    noticeNumber: 'LH-2026-서울-089',
    title: '[서울] 2026년 3차 서울수서 역세권 A3블록 신혼희망타운(공공분양) 입주자모집공고',
    category: '신혼희망타운',
    status: '접수중',
    region: '서울',
    locationDetail: '서울특별시 강남구 자곡동 수서역세권 공공주택지구 A3BL',
    supplyUnits: 398,
    area: '46㎡ ~ 55㎡',
    depositRange: '분양가 5억 4,000만원 ~ 6억 2,000만원 (수익공유형 모기지 연 1.3%)',
    monthlyRentRange: '해당없음 (분양주택)',
    announcementDate: '2026.08.20',
    startDate: '2026.08.28',
    endDate: '2026.09.04',
    winnerDate: '2026.09.18',
    contractDate: '2026.11.02 ~ 2026.11.06',
    targetAudience: '혼인 7년 이내 신혼부부, 예비신혼부부, 6세 이하 자녀 둔 한부모가족',
    directUrl: 'https://apply.lh.or.kr/lhapply/apply/sc/list.do?mi=1312&srchPanSs=%EC%A0%91%EC%88%98&calSrchType=01',
    viewCount: 14280,
    isUrgent: true,
    daysLeft: 4,
    contact: 'LH 서울지역본부 1600-1004 / 02-3416-3700',
    qualifications: [
      '입주자모집공고일 현재 수도권(서울/경기/인천) 거주 무주택세대구성원',
      '혼인기간 7년 이내 또는 6세 이하 자녀를 둔 신혼부부 / 공고일로부터 1년 이내 혼인증명 가능한 예비신혼부부',
      '소득기준: 전년도 도시근로자 가구당 월평균소득의 130% 이하 (맞벌이 140% 이하)',
      '총자산가액: 3억 7,900만원 이하 (부동산 + 금융자산 + 자동차 - 부채)'
    ],
    requiredDocs: [
      '주민등록등본 및 초본 (과거 주소변동사항 포함)',
      '가족관계증명서 (상세증명서, 주민등록번호 전체공개)',
      '혼인관계증명서 (상세) 또는 예비신혼부부 입증서류',
      '건강보험자격득실확인서 및 전년도 소득금액증명원'
    ],
    steps: [
      'LH청약플러스 온라인 신청접수',
      '서류제출 대상자 발표 및 서류제출 (등기우편 또는 현장)',
      '자격검증 및 소득·자산 조회',
      '당첨자 및 동호수 발표',
      '공급계약 체결'
    ]
  },
  {
    id: 'lh-2026-002',
    noticeNumber: 'LH-2026-경기-312',
    title: '[경기] 고양창릉 A-4BL 행복주택 입주자 모집 (청년·신혼부부·대학생)',
    category: '행복주택',
    status: '접수중',
    region: '경기',
    locationDetail: '경기도 고양시 덕양구 원흥동 창릉신도시 A-4BL',
    supplyUnits: 720,
    area: '21㎡, 36㎡, 44㎡',
    depositRange: '보증금 3,600만 ~ 7,800만원 (보증금 최대 전환 시 월임대료 7만원대)',
    monthlyRentRange: '월 12만 ~ 32만원',
    announcementDate: '2026.08.22',
    startDate: '2026.08.29',
    endDate: '2026.09.03',
    winnerDate: '2026.09.25',
    contractDate: '2026.10.20 ~ 2026.10.24',
    targetAudience: '대학생, 만 19세~39세 청년, 신혼부부, 고령자, 주거급여수급자',
    directUrl: 'https://apply.lh.or.kr/lhapply/apply/sc/list.do?mi=1312&srchPanSs=%EC%A0%91%EC%88%98&calSrchType=01',
    viewCount: 18940,
    isUrgent: true,
    daysLeft: 3,
    contact: 'LH 경기북부지역본부 1600-1004',
    qualifications: [
      '청년 계층: 만 19세 이상 만 39세 이하 미혼 무주택자 (소득 100% 이하)',
      '신혼부부 계층: 혼인 7년 이내 무주택세대구성원 (소득 100% 이하, 맞벌이 120%)',
      '대학생 계층: 대학 재학 중이거나 다음 학기 입학/복학 예정인 미혼 무주택자',
      '자산기준: 청년 2억 7,300만원 이하 / 신혼부부 3억 4,500만원 이하'
    ],
    requiredDocs: [
      '주민등록표등본 / 초본 (상세)',
      '가족관계증명서 (상세)',
      '청년/신혼부부 자격확인서 및 소득확인서류',
      '재학증명서 (대학생 계층 한정)'
    ],
    steps: [
      '인터넷/모바일 청약신청',
      '서류제출대상자 발표',
      '서류접수 (등기우편)',
      '소득/자산 심사',
      '최종 당첨자 발표 및 전자계약'
    ]
  },
  {
    id: 'lh-2026-003',
    noticeNumber: 'LH-2026-인천-154',
    title: '[인천] 인천계양 A2BL 공공분양주택 잔여세대 및 일반공급 입주자모집',
    category: '공공분양',
    status: '마감임박',
    region: '인천',
    locationDetail: '인천광역시 계양구 귤현동·동양동 일원 인천계양 A2BL',
    supplyUnits: 512,
    area: '59㎡, 74㎡, 84㎡',
    depositRange: '분양가 3억 8,000만원 ~ 4억 9,000만원',
    monthlyRentRange: '해당없음 (분양주택)',
    announcementDate: '2026.08.18',
    startDate: '2026.08.27',
    endDate: '2026.09.01',
    winnerDate: '2026.09.15',
    contractDate: '2026.11.10 ~ 2026.11.14',
    targetAudience: '수도권 거주 무주택세대구성원 (청약통장 가입자)',
    directUrl: 'https://apply.lh.or.kr/lhapply/apply/sc/list.do?mi=1312&srchPanSs=%EC%A0%91%EC%88%98&calSrchType=01',
    viewCount: 22100,
    isUrgent: true,
    daysLeft: 1,
    contact: 'LH 인천지역본부 1600-1004 / 032-890-5100',
    qualifications: [
      '입주자모집공고일 현재 인천/서울/경기 거주 성년자 무주택세대구성원',
      '청약저축(주택청약종합저축) 1순위: 가입 후 1년 경과, 월납입금 12회 이상 납입',
      '소득 및 자산요건: 특별공급 및 전용 60㎡ 이하 일반공급 적용',
      '당첨자 선정: 3년 이상 무주택세대구성원으로서 저축총액이 많은 자 순'
    ],
    requiredDocs: [
      '청약통장 순위(가입)확인서',
      '주민등록등본 및 초본 (전체포함)',
      '세대원 전원의 소득증빙서류 (소득금액증명원, 원천징수영수증)',
      '출입국사실증명서'
    ],
    steps: [
      'LH청약플러스 1순위/2순위 인터넷 청약',
      '당첨자 및 예비입주자 발표',
      '서류접수 및 적격여부 확인',
      '공급계약 및 잔금 납부 안내'
    ]
  },
  {
    id: 'lh-2026-004',
    noticeNumber: 'LH-2026-서울-098',
    title: '[서울] 2026년 2차 서울지역 청년 매입임대주택 입주자 모집공고',
    category: '청년안심',
    status: '접수중',
    region: '서울',
    locationDetail: '서울특별시 마포구, 성동구, 영등포구, 관악구 등 역세권 매입주택',
    supplyUnits: 450,
    area: '18㎡ ~ 35㎡ (풀옵션 원룸/1.5룸)',
    depositRange: '1순위 100만원 / 2·3순위 200만원 (시세 40~50% 수준)',
    monthlyRentRange: '월 15만 ~ 28만원',
    announcementDate: '2026.08.25',
    startDate: '2026.09.01',
    endDate: '2026.09.08',
    winnerDate: '2026.10.15',
    contractDate: '2026.10.28 ~ 2026.11.04',
    targetAudience: '만 19세~39세 청년, 대학생, 취업준비생 (미혼 무주택자)',
    directUrl: 'https://apply.lh.or.kr/lhapply/apply/sc/list.do?mi=1312&srchPanSs=%EC%A0%91%EC%88%98&calSrchType=01',
    viewCount: 31200,
    isUrgent: false,
    daysLeft: 8,
    contact: 'LH 서울지역본부 주거복지사업처 1600-1004',
    qualifications: [
      '1순위: 생계·의료·주거급여 수급자가구, 차상위계층, 한부모가족',
      '2순위: 본인과 부모의 월평균 소득 100% 이하, 총자산 3억 4,500만원 이하',
      '3순위: 본인의 월평균 소득 100% 이하, 본인 총자산 2억 7,300만원 이하'
    ],
    requiredDocs: [
      '주민등록등본 (본인 및 부모)',
      '가족관계증명서 (본인 기준 상세)',
      '소득·자산 확인서류 (건강보험료 납부확인서 등)',
      '수급자·차상위 증명서 (해당자)'
    ],
    steps: [
      '인터넷 청약신청 접수',
      '서류심사대상자 선정 발표',
      '서류접수 (온라인 또는 등기)',
      '소득·자산 검증 (약 4~6주 소요)',
      '최종 예비입주자 순번 발표 및 동호지정 계약'
    ]
  },
  {
    id: 'lh-2026-005',
    noticeNumber: 'LH-2026-세종-044',
    title: '[세종] 행정중심복합도시 5-1생활권 국민임대주택 입주자 모집공고',
    category: '국민임대',
    status: '접수예정',
    region: '세종',
    locationDetail: '세종특별자치시 스마트시티 5-1생활권 L1블록',
    supplyUnits: 680,
    area: '29㎡, 37㎡, 46㎡',
    depositRange: '보증금 1,800만 ~ 4,500만원',
    monthlyRentRange: '월 11만 ~ 24만원',
    announcementDate: '2026.08.28',
    startDate: '2026.09.05',
    endDate: '2026.09.12',
    winnerDate: '2026.11.20',
    contractDate: '2026.12.10 ~ 2026.12.15',
    targetAudience: '무주택세대구성원 (소득 70% 이하 가구)',
    directUrl: 'https://apply.lh.or.kr/lhapply/apply/sc/list.do?mi=1312&srchPanSs=%EC%A0%91%EC%88%98&calSrchType=01',
    viewCount: 9800,
    isUrgent: false,
    daysLeft: 12,
    contact: 'LH 세종특별본부 1600-1004 / 044-860-7800',
    qualifications: [
      '세대원 전원 무주택자인 세대주 또는 세대원',
      '전년도 도시근로자 가구당 월평균소득 70% 이하 (1인가구 90%, 2인가구 80% 이하)',
      '총자산가액 3억 4,500만원 이하, 자동차가액 3,708만원 이하',
      '우선공급: 장애인, 국가유공자, 다자녀가구, 신혼부부, 고령자 등'
    ],
    requiredDocs: [
      '주민등록등본 및 초본',
      '가족관계증명서',
      '소득금액증명원 및 재산세 과세증명원',
      '청약통장 가입확인서'
    ],
    steps: [
      '온라인 청약 접수 (1순위/2순위 분리 접수)',
      '서류제출 대상자 발표',
      '자격확인 및 소득심사',
      '당첨자 발표 및 계약체결'
    ]
  },
  {
    id: 'lh-2026-006',
    noticeNumber: 'LH-2026-부산-112',
    title: '[부산] 부산에코델타시티 18BL 공공분양주택 입주자 모집',
    category: '공공분양',
    status: '접수중',
    region: '부산',
    locationDetail: '부산광역시 강서구 강동동 에코델타시티 18블록',
    supplyUnits: 850,
    area: '74㎡, 84㎡',
    depositRange: '분양가 3억 9,500만 ~ 4억 8,000만원',
    monthlyRentRange: '해당없음',
    announcementDate: '2026.08.19',
    startDate: '2026.08.26',
    endDate: '2026.09.02',
    winnerDate: '2026.09.16',
    contractDate: '2026.11.18 ~ 2026.11.22',
    targetAudience: '부산·울산·경남 거주 무주택세대구성원',
    directUrl: 'https://apply.lh.or.kr/lhapply/apply/sc/list.do?mi=1312&srchPanSs=%EC%A0%91%EC%88%98&calSrchType=01',
    viewCount: 16400,
    isUrgent: true,
    daysLeft: 2,
    contact: 'LH 부산울산지역본부 1600-1004',
    qualifications: [
      '부산광역시 및 울산·경남 거주 무주택세대구성원',
      '청약저축 6개월 이상 경과, 매월 납입금 6회 이상 납입자 (1순위)',
      '특별공급: 다자녀, 신혼부부, 생애최초, 노부모부양, 기관추천'
    ],
    requiredDocs: [
      '청약통장 순위확인서',
      '주민등록등본/초본 (과거이력포함)',
      '소득입증서류 및 건강보험자격득실확인서',
      '혼인관계증명서 (신혼부부/생애최초)'
    ],
    steps: [
      '특별공급 / 일반공급 인터넷 청약',
      '당첨자 및 동호수 발표',
      '당첨자 서류제출 및 검증',
      '분양계약 체결'
    ]
  },
  {
    id: 'lh-2026-007',
    noticeNumber: 'LH-2026-대구-078',
    title: '[대구] 대구연호 A-2BL 영구임대주택 예비입주자 모집공고',
    category: '영구임대',
    status: '접수예정',
    region: '대구',
    locationDetail: '대구광역시 수성구 연호동 연호지구 A-2블록',
    supplyUnits: 240,
    area: '24㎡, 26㎡',
    depositRange: '생계·의료수급자 보증금 230만원 / 월임대료 4만 5천원선',
    monthlyRentRange: '월 4만 5천 ~ 9만원',
    announcementDate: '2026.08.30',
    startDate: '2026.09.08',
    endDate: '2026.09.15',
    winnerDate: '2026.11.12',
    contractDate: '2026.12.01 ~ 2026.12.05',
    targetAudience: '기초생활수급자, 국가유공자, 장애인, 위안부피해자 등 취약계층',
    directUrl: 'https://apply.lh.or.kr/lhapply/apply/sc/list.do?mi=1312&srchPanSs=%EC%A0%91%EC%88%98&calSrchType=01',
    viewCount: 6500,
    isUrgent: false,
    daysLeft: 15,
    contact: '거주지 행정복지센터(주민센터) 및 LH 대구경북지역본부 1600-1004',
    qualifications: [
      '모집공고일 현재 대구광역시 거주 성년자인 무주택세대구성원',
      '생계급여 또는 의료급여 수급자',
      '국가유공자로서 수급자 선정기준 이하인 자',
      '등록장애인으로서 전년도 도시근로자 월평균소득 70% 이하인 자'
    ],
    requiredDocs: [
      '영구임대주택 공급신청서 (주민센터 비치)',
      '주민등록등본 및 초본',
      '수급자 증명서 또는 복지카드(장애인증명서)',
      '금융정보등 제공동의서'
    ],
    steps: [
      '거주지 읍·면·동 행정복지센터 현장접수',
      '지자체 소득/자산 및 거주기간 배점 심사',
      'LH 예비입주자 명부 작성 및 발표',
      '순번 도래 시 개별 계약안내'
    ]
  },
  {
    id: 'lh-2026-008',
    noticeNumber: 'LH-2026-광주-065',
    title: '[광주] 광주선운2 A-1BL 국민임대주택 입주자 모집',
    category: '국민임대',
    status: '접수중',
    region: '광주',
    locationDetail: '광주광역시 광산구 선암동 선운2공공주택지구 A-1BL',
    supplyUnits: 490,
    area: '29㎡, 37㎡, 46㎡',
    depositRange: '보증금 1,400만 ~ 3,800만원',
    monthlyRentRange: '월 9만 ~ 21만원',
    announcementDate: '2026.08.21',
    startDate: '2026.08.28',
    endDate: '2026.09.04',
    winnerDate: '2026.10.22',
    contractDate: '2026.11.15 ~ 2026.11.18',
    targetAudience: '광주광역시 및 전남 거주 무주택세대구성원',
    directUrl: 'https://apply.lh.or.kr/lhapply/apply/sc/list.do?mi=1312&srchPanSs=%EC%A0%91%EC%88%98&calSrchType=01',
    viewCount: 8400,
    isUrgent: true,
    daysLeft: 4,
    contact: 'LH 광주전남지역본부 1600-1004',
    qualifications: [
      '광주광역시 및 인근 전라남도 거주 무주택세대구성원',
      '소득 70% 이하 (1인가구 90%, 2인가구 80% 이하 완화)',
      '총자산 3억 4,500만원 이하, 자동차가액 3,708만원 이하'
    ],
    requiredDocs: [
      '주민등록등본 및 초본',
      '가족관계증명서 (상세)',
      '소득금액증명원 또는 건강보험료 납부확인서'
    ],
    steps: [
      'LH청약플러스 온라인 신청',
      '서류심사대상자 선정',
      '자격조회 및 적격자 통보',
      '최종 당첨자 발표 및 계약'
    ]
  },
  {
    id: 'lh-2026-009',
    noticeNumber: 'LH-2026-대전-092',
    title: '[대전] 대전도안 2-2지구 근린생활시설용지 및 상업용지 입찰 공급공고',
    category: '토지/상가',
    status: '접수중',
    region: '대전',
    locationDetail: '대전광역시 유성구 용계동 도안신도시 2단계 상업용지',
    supplyUnits: 14,
    area: '450㎡ ~ 1,200㎡',
    depositRange: '입찰보증금 입찰가의 5% 이상 납부',
    monthlyRentRange: '토지 분양공급 (경쟁입찰)',
    announcementDate: '2026.08.15',
    startDate: '2026.08.29',
    endDate: '2026.09.02',
    winnerDate: '2026.09.03',
    contractDate: '2026.09.15 ~ 2026.09.18',
    targetAudience: '일반 실수요자 (개인 또는 법인, 1인 2필지 이상 신청가능)',
    directUrl: 'https://apply.lh.or.kr/lhapply/apply/sc/list.do?mi=1312&srchPanSs=%EC%A0%91%EC%88%98&calSrchType=01',
    viewCount: 11200,
    isUrgent: true,
    daysLeft: 2,
    contact: 'LH 대전충남지역본부 토지판매부 042-470-0160',
    qualifications: [
      '공고일 현재 만 19세 이상 일반 실수요자 및 법인',
      '범용공동인증서(개인/법인)를 소지하고 인터넷 청약 가능한 자',
      '입찰보증금(신청건별 입찰금액의 5% 이상)을 기한 내 가상계좌로 납부한 자'
    ],
    requiredDocs: [
      '사업자등록증 사본 (법인/개인사업자)',
      '법인등기부등본 및 인감증명서 (법인인 경우)',
      '신분증 및 통장사본 (유찰 시 환불계좌)'
    ],
    steps: [
      'LH청약플러스 토지/상가 입찰신청',
      '입찰보증금 가상계좌 입금',
      '개찰 및 낙찰자 발표 (최고가 낙찰제)',
      '용지매매계약 체결 및 계약금 납부'
    ]
  },
  {
    id: 'lh-2026-010',
    noticeNumber: 'LH-2026-경기-410',
    title: '[경기] 남양주왕숙 A-1BL 신혼희망타운(공공분양) 입주자모집',
    category: '신혼희망타운',
    status: '접수예정',
    region: '경기',
    locationDetail: '경기도 남양주시 진접읍 왕숙공공주택지구 A-1BL',
    supplyUnits: 620,
    area: '55㎡ A/B 단일평형',
    depositRange: '추정분양가 3억 7,000만원선 (주택담보대출 전용모기지 지원)',
    monthlyRentRange: '해당없음',
    announcementDate: '2026.08.31',
    startDate: '2026.09.10',
    endDate: '2026.09.17',
    winnerDate: '2026.10.05',
    contractDate: '2026.11.25 ~ 2026.11.30',
    targetAudience: '수도권 거주 신혼부부, 예비신혼부부, 한부모가족',
    directUrl: 'https://apply.lh.or.kr/lhapply/apply/sc/list.do?mi=1312&srchPanSs=%EC%A0%91%EC%88%98&calSrchType=01',
    viewCount: 15300,
    isUrgent: false,
    daysLeft: 17,
    contact: 'LH 남양주사업본부 1600-1004',
    qualifications: [
      '혼인 7년 이내 신혼부부 또는 공고일로부터 1년 이내 혼인예정자',
      '청약저축 가입 6개월 이상, 6회 이상 납입',
      '소득 130% 이하 (맞벌이 140% 이하)',
      '총자산 3억 7,900만원 이하'
    ],
    requiredDocs: [
      '신혼희망타운 청약신청서',
      '주민등록등본 및 초본',
      '혼인관계증명서 (상세)',
      '소득금액증명원 (부부 모두)'
    ],
    steps: [
      '온라인 청약신청',
      '서류제출 대상자 선정',
      '자격심사 및 가점검증',
      '당첨자 발표 및 계약'
    ]
  },
  {
    id: 'lh-2026-011',
    noticeNumber: 'LH-2026-인천-205',
    title: '[인천] 인천검단 AA10-1BL 행복주택 청년·고령자 입주자 추가모집',
    category: '행복주택',
    status: '당첨자발표',
    region: '인천',
    locationDetail: '인천광역시 서구 당하동 검단신도시 AA10-1BL',
    supplyUnits: 310,
    area: '21㎡, 36㎡',
    depositRange: '보증금 2,500만 ~ 5,200만원',
    monthlyRentRange: '월 9만 ~ 19만원',
    announcementDate: '2026.07.15',
    startDate: '2026.07.25',
    endDate: '2026.08.01',
    winnerDate: '2026.08.31',
    contractDate: '2026.09.18 ~ 2026.09.22',
    targetAudience: '청년, 신혼부부, 고령자, 주거급여수급자',
    directUrl: 'https://apply.lh.or.kr/lhapply/apply/sc/list.do?mi=1312&srchPanSs=%EC%A0%91%EC%88%98&calSrchType=01',
    viewCount: 19800,
    isUrgent: false,
    daysLeft: 0,
    contact: 'LH 인천지역본부 1600-1004',
    qualifications: [
      '청년: 만 19세 이상 만 39세 이하 미혼 무주택자',
      '고령자: 만 65세 이상 무주택세대구성원',
      '소득 100% 이하 (1인가구 120%, 2인가구 110%)'
    ],
    requiredDocs: [
      '당첨자 신분증 및 인감도장',
      '주민등록등본/초본',
      '소득증명서류 원본',
      '계약금 납부영수증'
    ],
    steps: [
      '당첨자 명단 및 동호수 확인',
      '당첨자 자격서류 최종 확인',
      '온라인/현장 임대차계약 체결',
      '입주지정기간 입주'
    ]
  }
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    category: '신청방법',
    question: 'Q. LH청약은 언제, 어떻게 신청할 수 있나요?',
    answer: 'A. LH청약은 각 단지별 입주자모집공고에 지정된 접수 기간(보통 3~7일간) 동안에만 신청이 가능합니다. PC 또는 스마트폰의 "LH청약플러스(apply.lh.or.kr)" 공식 홈페이지 및 전용 앱에서 공동인증서, 금융인증서, 간편인증(카카오·네이버·토스 등)으로 본인인증 후 신청할 수 있습니다.',
    tags: ['신청방법', 'LH청약플러스', '인증서']
  },
  {
    id: 'faq-2',
    category: '자격조건',
    question: 'Q. 청약 신청 자격(소득 및 자산 기준)은 어떻게 확인하나요?',
    answer: 'A. LH 청약은 유형(국민임대, 행복주택, 공공분양 등)에 따라 기준이 다릅니다. 통상 전년도 도시근로자 가구원수별 월평균소득의 100%(1인 120%, 2인 110%) 이하, 총자산가액 3억 4,500만원 이하, 자동차가액 3,708만원 이하가 일반적인 기준입니다. 무주택세대구성원 여부는 주민등록등본상 세대원 전원이 무주택이어야 인정됩니다.',
    tags: ['소득기준', '자산기준', '무주택기준']
  },
  {
    id: 'faq-3',
    category: '서류준비',
    question: 'Q. 청약 신청 시 필수 서류는 무엇이 필요한가요?',
    answer: 'A. 1단계 온라인 청약 시점에는 별도 서류를 파일로 업로드하지 않고 인적사항 및 자격사항을 직접 입력합니다. 이후 "서류제출 대상자"로 선정되면 ① 주민등록표등본/초본(상세), ② 가족관계증명서(상세), ③ 건강보험자격득실확인서, ④ 전년도 소득금액증명원, ⑤ 청약통장 순위확인서, ⑥ 자격별 증빙서류(혼인관계증명서, 수급자증명서 등)를 등기우편 또는 현장 제출해야 합니다.',
    tags: ['필수서류', '등본', '소득증명']
  },
  {
    id: 'faq-4',
    category: '당첨/입주',
    question: 'Q. 청약 당첨 결과(발표)는 어디서 확인하나요?',
    answer: 'A. 당첨자 발표일 17:00경부터 "LH청약플러스 > 청약결과조회 > 당첨/낙찰자 조회" 메뉴에서 공인인증서 로그인 후 본인의 당첨 여부 및 예비입주자 번호를 확인할 수 있습니다. 또한 신청 시 등록한 휴대폰 번호로 당첨 알림 카카오톡 알림톡 또는 SMS가 발송됩니다.',
    tags: ['당첨확인', '예비번호', '발표']
  },
  {
    id: 'faq-5',
    category: '자격조건',
    question: 'Q. 청년·신혼부부 특별공급 및 행복주택의 나이·혼인 조건은?',
    answer: 'A. [청년] 만 19세 이상 만 39세 이하 미혼 무주택자(대학생 및 취업준비생 포함)이며, [신혼부부] 혼인기간 7년 이내이거나 6세 이하(만 7세 미만)의 자녀를 둔 무주택세대구성원, [예비신혼부부] 입주 전까지 혼인사실을 증명할 수 있는 자가 해당됩니다.',
    tags: ['청년', '신혼부부', '특별공급']
  },
  {
    id: 'faq-6',
    category: '자격조건',
    question: 'Q. 주택청약종합저축 통장이 없어도 LH 임대주택 신청이 가능한가요?',
    answer: 'A. 행복주택(대학생/청년 일부)이나 청년 매입임대주택의 경우 청약통장이 없어도 신청할 수 있는 공고가 있습니다. 다만 국민임대 및 공공분양의 경우 청약통장 가입 및 납입 횟수(1순위: 수도권 12회 이상, 지방 6회 이상)가 당첨 우선순위 결정의 핵심 가점이 되므로 유지하시는 것이 매우 유리합니다.',
    tags: ['청약통장', '납입횟수', '1순위']
  }
];

export const OFFICIAL_LINKS = [
  {
    name: 'LH청약플러스',
    url: 'https://apply.lh.or.kr',
    description: '공공주택, 토지, 상가 청약 신청 및 공고 공식 포털',
    badge: '공식신청',
    color: 'bg-blue-600'
  },
  {
    name: '한국토지주택공사(LH)',
    url: 'https://www.lh.or.kr',
    description: 'LH 대표 홈페이지, 사업지구 및 정책 정보',
    badge: '공식기관',
    color: 'bg-indigo-600'
  },
  {
    name: '마이홈포털',
    url: 'https://www.myhome.go.kr',
    description: '국토교통부·LH 주거복지 맞춤형 주택 진단 포털',
    badge: '자가진단',
    color: 'bg-teal-600'
  },
  {
    name: '청약홈(한국부동산원)',
    url: 'https://www.applyhome.co.kr',
    description: '민간분양, 무순위 줍줍, 청약통장 자격조회',
    badge: '민간청약',
    color: 'bg-sky-600'
  }
];
