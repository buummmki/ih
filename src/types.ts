export type NoticeCategory =
  | '전체'
  | '국민임대'
  | '행복주택'
  | '영구임대'
  | '공공분양'
  | '신혼희망타운'
  | '청년안심'
  | '장기전세'
  | '토지/상가';

export type NoticeStatus = '전체' | '접수중' | '마감임박' | '접수예정' | '당첨자발표';

export type KoreanRegion =
  | '전국'
  | '서울'
  | '경기'
  | '인천'
  | '부산'
  | '대구'
  | '대전'
  | '광주'
  | '세종'
  | '울산'
  | '강원'
  | '충북'
  | '충남'
  | '전북'
  | '전남'
  | '경북'
  | '경남'
  | '제주';

export interface SubscriptionNotice {
  id: string;
  title: string;
  category: NoticeCategory;
  status: '접수중' | '마감임박' | '접수예정' | '당첨자발표';
  region: KoreanRegion;
  locationDetail: string;
  supplyUnits: number;
  area: string;
  depositRange: string;
  monthlyRentRange: string;
  announcementDate: string;
  startDate: string;
  endDate: string;
  winnerDate: string;
  contractDate: string;
  targetAudience: string;
  directUrl: string;
  pdfUrl?: string;
  viewCount: number;
  isUrgent?: boolean;
  daysLeft?: number;
  contact: string;
  qualifications: string[];
  requiredDocs: string[];
  steps: string[];
  noticeNumber: string;
}

export interface FaqItem {
  id: string;
  category: '자격조건' | '신청방법' | '서류준비' | '당첨/입주';
  question: string;
  answer: string;
  tags: string[];
}

export interface EligibilityResult {
  recommendedTypes: {
    category: NoticeCategory;
    fitScore: number;
    title: string;
    description: string;
    keyRequirements: string[];
  }[];
  summary: string;
}
