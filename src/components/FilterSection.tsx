import React from 'react';
import { Search, Filter, RotateCcw, MapPin, Layers, Clock } from 'lucide-react';
import { NoticeCategory, NoticeStatus, KoreanRegion } from '../types';

interface FilterSectionProps {
  selectedStatus: NoticeStatus;
  setSelectedStatus: (status: NoticeStatus) => void;
  selectedCategory: NoticeCategory;
  setSelectedCategory: (category: NoticeCategory) => void;
  selectedRegion: KoreanRegion;
  setSelectedRegion: (region: KoreanRegion) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  sortBy: 'endDate' | 'startDate' | 'units' | 'views';
  setSortBy: (sort: 'endDate' | 'startDate' | 'units' | 'views') => void;
  onReset: () => void;
  totalResultsCount: number;
}

const CATEGORIES: NoticeCategory[] = [
  '전체',
  '신혼희망타운',
  '행복주택',
  '국민임대',
  '공공분양',
  '청년안심',
  '영구임대',
  '토지/상가'
];

const STATUSES: { key: NoticeStatus; label: string; badgeClass: string }[] = [
  { key: '전체', label: '전체 공고', badgeClass: 'bg-slate-100 text-slate-700' },
  { key: '접수중', label: '⚡ 접수중', badgeClass: 'bg-emerald-100 text-emerald-800 border-emerald-300' },
  { key: '마감임박', label: '🔥 마감임박', badgeClass: 'bg-rose-100 text-rose-800 border-rose-300' },
  { key: '접수예정', label: '📅 접수예정', badgeClass: 'bg-amber-100 text-amber-800 border-amber-300' },
  { key: '당첨자발표', label: '🏆 당첨자발표', badgeClass: 'bg-purple-100 text-purple-800 border-purple-300' }
];

const REGIONS: KoreanRegion[] = [
  '전국',
  '서울',
  '경기',
  '인천',
  '부산',
  '대구',
  '대전',
  '광주',
  '세종',
  '울산',
  '강원',
  '충북',
  '충남',
  '전북',
  '전남',
  '경북',
  '경남',
  '제주'
];

export const FilterSection: React.FC<FilterSectionProps> = ({
  selectedStatus,
  setSelectedStatus,
  selectedCategory,
  setSelectedCategory,
  selectedRegion,
  setSelectedRegion,
  searchQuery,
  setSearchQuery,
  sortBy,
  setSortBy,
  onReset,
  totalResultsCount
}) => {
  const isFiltered =
    selectedStatus !== '전체' ||
    selectedCategory !== '전체' ||
    selectedRegion !== '전국' ||
    searchQuery.trim() !== '';

  return (
    <div className="bg-white/95 backdrop-blur-md rounded-2xl p-5 md:p-6 shadow-xl border border-white/60 mb-6 space-y-5">
      {/* Top Search and Region Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
        {/* Search Input */}
        <div className="sm:col-span-8 lg:col-span-9 relative">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
            <Search className="w-4 h-4" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="단지명, 지역명(예: 강남, 창릉, 검단, 수서), 공고번호 검색..."
            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 hover:bg-slate-100/80 focus:bg-white border border-slate-200 focus:border-blue-500 rounded-xl text-sm transition-all focus:outline-none focus:ring-2 focus:ring-blue-100 placeholder:text-slate-400 text-slate-800 font-medium"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-xs font-semibold text-slate-400 hover:text-slate-600"
            >
              지우기
            </button>
          )}
        </div>

        {/* Region Selector */}
        <div className="sm:col-span-4 lg:col-span-3 relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-blue-600">
            <MapPin className="w-4 h-4" />
          </div>
          <select
            value={selectedRegion}
            onChange={(e) => setSelectedRegion(e.target.value as KoreanRegion)}
            className="w-full pl-9 pr-8 py-2.5 bg-blue-50/50 hover:bg-blue-50 border border-blue-200 focus:border-blue-500 rounded-xl text-sm font-semibold text-blue-900 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-100 cursor-pointer"
          >
            {REGIONS.map((region) => (
              <option key={region} value={region}>
                지역: {region === '전국' ? '전국 전체' : region}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-blue-500 text-xs">
            ▼
          </div>
        </div>
      </div>

      {/* Status Chips */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-2 pt-1 border-t border-slate-100">
        <span className="text-xs font-bold text-slate-500 flex items-center gap-1 shrink-0">
          <Clock className="w-3.5 h-3.5 text-blue-600" />
          상태별:
        </span>
        <div className="flex flex-wrap items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
          {STATUSES.map((item) => {
            const isActive = selectedStatus === item.key;
            return (
              <button
                key={item.key}
                onClick={() => setSelectedStatus(item.key)}
                className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap shadow-2xs ${
                  isActive
                    ? 'bg-blue-800 text-white shadow-md scale-102 ring-2 ring-blue-300/60'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200/80'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Housing Type / Category Chips */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-2 pt-1">
        <span className="text-xs font-bold text-slate-500 flex items-center gap-1 shrink-0">
          <Layers className="w-3.5 h-3.5 text-blue-600" />
          유형별:
        </span>
        <div className="flex flex-wrap items-center gap-1.5 overflow-x-auto">
          {CATEGORIES.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all whitespace-nowrap ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-700 to-indigo-700 text-white font-bold shadow-sm ring-2 ring-blue-200'
                    : 'bg-slate-50 hover:bg-blue-50 text-slate-700 border border-slate-200'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>

      {/* Footer Info & Sort row */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pt-3 border-t border-slate-100 gap-3">
        <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-600">
          <span>
            검색 결과: <strong className="text-blue-800 font-bold">{totalResultsCount}</strong>건
          </span>
          {isFiltered && (
            <button
              onClick={onReset}
              className="inline-flex items-center gap-1 text-xs text-rose-600 hover:text-rose-700 font-medium bg-rose-50 hover:bg-rose-100 px-2.5 py-1 rounded-lg border border-rose-200 transition-colors"
            >
              <RotateCcw className="w-3 h-3" />
              필터 초기화
            </button>
          )}
        </div>

        {/* Sort Controls */}
        <div className="flex items-center gap-2 text-xs font-medium text-slate-600 self-end sm:self-auto">
          <span className="text-slate-400">정렬:</span>
          <button
            onClick={() => setSortBy('endDate')}
            className={`px-2.5 py-1 rounded-md transition-colors ${
              sortBy === 'endDate' ? 'bg-blue-100 text-blue-800 font-bold' : 'hover:bg-slate-100'
            }`}
          >
            마감일순
          </button>
          <span className="text-slate-300">|</span>
          <button
            onClick={() => setSortBy('startDate')}
            className={`px-2.5 py-1 rounded-md transition-colors ${
              sortBy === 'startDate' ? 'bg-blue-100 text-blue-800 font-bold' : 'hover:bg-slate-100'
            }`}
          >
            최신접수순
          </button>
          <span className="text-slate-300">|</span>
          <button
            onClick={() => setSortBy('units')}
            className={`px-2.5 py-1 rounded-md transition-colors ${
              sortBy === 'units' ? 'bg-blue-100 text-blue-800 font-bold' : 'hover:bg-slate-100'
            }`}
          >
            공급호수순
          </button>
        </div>
      </div>
    </div>
  );
};
