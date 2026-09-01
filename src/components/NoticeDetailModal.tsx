import React from 'react';
import {
  X,
  Calendar,
  MapPin,
  Home,
  CheckCircle2,
  AlertCircle,
  FileText,
  PhoneCall,
  ExternalLink,
  Coins,
  Users,
  Building,
  Share2,
  Bookmark,
  Printer
} from 'lucide-react';
import { SubscriptionNotice } from '../types';

interface NoticeDetailModalProps {
  notice: SubscriptionNotice | null;
  onClose: () => void;
  isBookmarked: boolean;
  onToggleBookmark: (id: string) => void;
  onShare: (notice: SubscriptionNotice) => void;
}

export const NoticeDetailModal: React.FC<NoticeDetailModalProps> = ({
  notice,
  onClose,
  isBookmarked,
  onToggleBookmark,
  onShare
}) => {
  if (!notice) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5 animate-fade-in">
      <div
        className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 max-h-[92vh] flex flex-col my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="sticky top-0 z-20 bg-slate-900 text-white p-5 sm:p-6 flex items-start justify-between gap-4 border-b border-slate-800">
          <div className="space-y-1.5 pr-6">
            <div className="flex items-center gap-2 flex-wrap text-xs font-semibold">
              <span className="bg-blue-600 text-white px-2.5 py-0.5 rounded-full">
                {notice.status}
              </span>
              <span className="bg-slate-800 text-blue-300 px-2.5 py-0.5 rounded-full border border-slate-700">
                {notice.category}
              </span>
              <span className="text-slate-400">공고번호: {notice.noticeNumber}</span>
            </div>
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-white leading-snug">
              {notice.title}
            </h2>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => onToggleBookmark(notice.id)}
              className={`p-2 rounded-xl border transition-colors ${
                isBookmarked
                  ? 'bg-amber-500/20 text-amber-400 border-amber-500/40'
                  : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
              }`}
              title="관심공고 저장"
            >
              <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
            </button>
            <button
              onClick={() => onShare(notice)}
              className="p-2 rounded-xl bg-slate-800 text-slate-300 border border-slate-700 hover:bg-slate-700 transition-colors"
              title="공유하기"
            >
              <Share2 className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800 text-slate-300 border border-slate-700 hover:bg-slate-700 hover:text-white transition-colors"
              title="닫기"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-5 sm:p-7 overflow-y-auto space-y-6 text-slate-800 text-sm">
          {/* Section 1: Core Summary Bento */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 bg-blue-50/60 p-4 rounded-2xl border border-blue-100">
            <div className="space-y-1">
              <span className="text-xs text-slate-500 font-medium">지역/위치</span>
              <p className="font-bold text-slate-900 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                {notice.region} ({notice.locationDetail})
              </p>
            </div>

            <div className="space-y-1">
              <span className="text-xs text-slate-500 font-medium">총 공급호수 / 면적</span>
              <p className="font-bold text-slate-900 flex items-center gap-1">
                <Home className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                {notice.supplyUnits}호 ({notice.area})
              </p>
            </div>

            <div className="space-y-1">
              <span className="text-xs text-slate-500 font-medium">임대보증금 / 분양가</span>
              <p className="font-bold text-slate-900 flex items-center gap-1">
                <Coins className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                {notice.depositRange}
              </p>
            </div>

            <div className="space-y-1">
              <span className="text-xs text-slate-500 font-medium">월 임대료</span>
              <p className="font-bold text-slate-900">{notice.monthlyRentRange}</p>
            </div>
          </div>

          {/* Section 2: Progress Timeline Bar */}
          <div className="space-y-2">
            <h4 className="font-bold text-slate-900 flex items-center gap-2 text-sm sm:text-base">
              <Calendar className="w-4 h-4 text-blue-600" />
              청약 진행 일정 (일정 준수 필수)
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-slate-400 block mb-1">1. 모집공고일</span>
                <strong className="text-slate-800 text-xs sm:text-sm">{notice.announcementDate}</strong>
              </div>
              <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 ring-2 ring-emerald-100">
                <span className="text-emerald-700 font-bold block mb-1">2. 청약접수기간</span>
                <strong className="text-emerald-900 text-xs sm:text-sm">
                  {notice.startDate} ~ {notice.endDate}
                </strong>
              </div>
              <div className="p-3 rounded-xl bg-purple-50 border border-purple-200">
                <span className="text-purple-700 font-bold block mb-1">3. 당첨자 발표</span>
                <strong className="text-purple-900 text-xs sm:text-sm">{notice.winnerDate}</strong>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-slate-400 block mb-1">4. 계약체결</span>
                <strong className="text-slate-800 text-xs sm:text-sm">{notice.contractDate}</strong>
              </div>
            </div>
          </div>

          {/* Section 3: Qualification Requirements */}
          <div className="space-y-3 bg-slate-50 p-5 rounded-2xl border border-slate-200">
            <h4 className="font-bold text-slate-900 flex items-center gap-2 text-sm sm:text-base">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              주요 입주자격 요건
            </h4>
            <div className="text-xs text-blue-800 bg-blue-50/80 p-2.5 rounded-lg border border-blue-100">
              <strong>신청 대상:</strong> {notice.targetAudience}
            </div>
            <ul className="space-y-2">
              {notice.qualifications.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 4: Required Documents Checklist */}
          <div className="space-y-3 bg-amber-50/40 p-5 rounded-2xl border border-amber-200/80">
            <h4 className="font-bold text-slate-900 flex items-center gap-2 text-sm sm:text-base">
              <FileText className="w-4 h-4 text-amber-700" />
              서류제출 대상자 필수 구비 서류
            </h4>
            <p className="text-xs text-slate-500">
              * 모든 서류는 공고일 이후 발급분이어야 하며, 주민등록번호 13자리 및 주소변동이력이 모두 표기되어야 합니다.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {notice.requiredDocs.map((doc, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 bg-white p-2.5 rounded-xl border border-amber-100 text-xs font-medium text-slate-800"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <span>{doc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section 5: Step-by-step application pipeline */}
          <div className="space-y-2">
            <h4 className="font-bold text-slate-900 text-sm sm:text-base">
              신청부터 계약까지 5단계 절차
            </h4>
            <div className="flex flex-col sm:flex-row items-stretch gap-2 text-xs">
              {notice.steps.map((step, idx) => (
                <div
                  key={idx}
                  className="flex-1 bg-white p-3 rounded-xl border border-slate-200 flex flex-col justify-between"
                >
                  <span className="text-[10px] font-bold text-blue-600 mb-1">STEP 0{idx + 1}</span>
                  <span className="font-semibold text-slate-800">{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Inquiry */}
          <div className="flex items-center justify-between bg-slate-100 p-4 rounded-xl text-xs sm:text-sm text-slate-700">
            <div className="flex items-center gap-2">
              <PhoneCall className="w-4 h-4 text-blue-600" />
              <span>문의처: <strong>{notice.contact}</strong></span>
            </div>
            <span className="text-slate-500 text-xs">평일 09:00 ~ 18:00</span>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="sticky bottom-0 z-20 bg-slate-50 p-4 sm:p-5 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={handlePrint}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-700 font-semibold border border-slate-300 text-xs sm:text-sm transition-colors"
          >
            <Printer className="w-4 h-4" />
            공고 인쇄하기
          </button>

          <div className="w-full sm:w-auto flex items-center gap-2">
            <button
              onClick={onClose}
              className="w-1/2 sm:w-auto px-5 py-2.5 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 font-semibold text-xs sm:text-sm transition-colors"
            >
              닫기
            </button>
            <a
              href={notice.directUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-1/2 sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-700 to-indigo-700 hover:from-blue-800 hover:to-indigo-800 text-white font-bold text-xs sm:text-sm shadow-md transition-all hover:shadow-lg"
            >
              <span>LH청약플러스 바로가기</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
