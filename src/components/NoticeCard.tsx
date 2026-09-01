import React from 'react';
import {
  Calendar,
  MapPin,
  Home,
  Users,
  Eye,
  ExternalLink,
  ChevronRight,
  Clock,
  Coins,
  CheckCircle2,
  Bookmark,
  Share2
} from 'lucide-react';
import { SubscriptionNotice } from '../types';

interface NoticeCardProps {
  notice: SubscriptionNotice;
  onSelect: (notice: SubscriptionNotice) => void;
  isBookmarked: boolean;
  onToggleBookmark: (id: string, e: React.MouseEvent) => void;
  onShare: (notice: SubscriptionNotice, e: React.MouseEvent) => void;
}

export const NoticeCard: React.FC<NoticeCardProps> = ({
  notice,
  onSelect,
  isBookmarked,
  onToggleBookmark,
  onShare
}) => {
  const getStatusBadge = () => {
    switch (notice.status) {
      case '접수중':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500 text-white text-xs font-bold shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            접수중
            {notice.daysLeft !== undefined && notice.daysLeft > 0 && (
              <span className="bg-emerald-700/60 px-1.5 py-0.2 rounded-md text-[11px]">
                D-{notice.daysLeft}
              </span>
            )}
          </span>
        );
      case '마감임박':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-rose-600 text-white text-xs font-black shadow-xs animate-bounce-subtle">
            <Clock className="w-3 h-3 text-white" />
            오늘마감 D-1
          </span>
        );
      case '접수예정':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-500 text-white text-xs font-bold shadow-xs">
            <Calendar className="w-3 h-3" />
            접수예정
          </span>
        );
      case '당첨자발표':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-purple-600 text-white text-xs font-bold shadow-xs">
            <CheckCircle2 className="w-3 h-3" />
            당첨발표
          </span>
        );
    }
  };

  const getCategoryTheme = () => {
    switch (notice.category) {
      case '신혼희망타운':
        return 'bg-pink-50 text-pink-700 border-pink-200';
      case '행복주택':
        return 'bg-indigo-50 text-indigo-700 border-indigo-200';
      case '국민임대':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      case '공공분양':
        return 'bg-amber-50 text-amber-800 border-amber-200';
      case '청년안심':
        return 'bg-teal-50 text-teal-700 border-teal-200';
      case '영구임대':
        return 'bg-slate-100 text-slate-700 border-slate-300';
      default:
        return 'bg-slate-50 text-slate-700 border-slate-200';
    }
  };

  return (
    <div
      onClick={() => onSelect(notice)}
      className={`group relative bg-white rounded-2xl p-5 md:p-6 shadow-md hover:shadow-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between hover:-translate-y-1 ${
        notice.status === '마감임박'
          ? 'border-rose-300 ring-2 ring-rose-100'
          : notice.status === '접수중'
          ? 'border-blue-100 hover:border-blue-300'
          : 'border-slate-150'
      }`}
    >
      {/* Accent Top Border */}
      <div
        className={`absolute top-0 left-0 right-0 h-1.5 rounded-t-2xl ${
          notice.status === '마감임박'
            ? 'bg-rose-500'
            : notice.status === '접수중'
            ? 'bg-blue-600'
            : 'bg-slate-300'
        }`}
      />

      <div>
        {/* Top Badges & Actions */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2 flex-wrap">
            {getStatusBadge()}
            <span
              className={`px-2.5 py-0.5 rounded-lg text-xs font-bold border ${getCategoryTheme()}`}
            >
              {notice.category}
            </span>
            <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 text-xs font-semibold">
              {notice.region}
            </span>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={(e) => onToggleBookmark(notice.id, e)}
              title={isBookmarked ? '관심공고 해제' : '관심공고 등록'}
              className={`p-1.5 rounded-lg transition-colors ${
                isBookmarked
                  ? 'text-amber-500 bg-amber-50 hover:bg-amber-100'
                  : 'text-slate-400 hover:text-slate-600 hover:bg-slate-100'
              }`}
            >
              <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
            </button>
            <button
              onClick={(e) => onShare(notice, e)}
              title="공유하기"
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
            >
              <Share2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Notice Title */}
        <h3 className="font-bold text-slate-900 text-base md:text-lg leading-snug group-hover:text-blue-700 transition-colors line-clamp-2 mb-3">
          {notice.title}
        </h3>

        {/* Key Info Details Matrix */}
        <div className="bg-slate-50/80 rounded-xl p-3 space-y-2 mb-4 text-xs sm:text-sm border border-slate-100">
          <div className="flex items-start gap-2 text-slate-700">
            <MapPin className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
            <span className="line-clamp-1 font-medium">{notice.locationDetail}</span>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-1 border-t border-slate-200/50">
            <div className="flex items-center gap-1.5 text-slate-600">
              <Home className="w-3.5 h-3.5 text-blue-500 shrink-0" />
              <span>공급호수:</span>
              <strong className="text-slate-900 font-bold">{notice.supplyUnits}호</strong>
            </div>
            <div className="flex items-center gap-1.5 text-slate-600">
              <Users className="w-3.5 h-3.5 text-blue-500 shrink-0" />
              <span>전용면적:</span>
              <strong className="text-slate-900 font-bold">{notice.area}</strong>
            </div>
          </div>

          <div className="flex items-start gap-1.5 text-slate-700 pt-1 border-t border-slate-200/50">
            <Coins className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
            <span className="text-slate-500 shrink-0">조건:</span>
            <span className="text-slate-800 font-medium line-clamp-1">{notice.depositRange}</span>
          </div>
        </div>
      </div>

      {/* Footer Schedule & CTA */}
      <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
        <div className="space-y-0.5">
          <div className="flex items-center gap-1.5 text-slate-500">
            <Calendar className="w-3.5 h-3.5 text-slate-400" />
            <span>접수기간:</span>
            <span className="font-bold text-slate-800">
              {notice.startDate} ~ {notice.endDate}
            </span>
          </div>
          <div className="text-[11px] text-slate-400 flex items-center gap-2">
            <span>당첨자발표: {notice.winnerDate}</span>
            <span>•</span>
            <span className="flex items-center gap-0.5">
              <Eye className="w-3 h-3" /> {notice.viewCount.toLocaleString()}
            </span>
          </div>
        </div>

        <button className="flex items-center gap-1 font-bold text-blue-700 bg-blue-50 hover:bg-blue-600 hover:text-white px-3 py-1.5 rounded-xl transition-all shrink-0">
          <span>상세보기</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
