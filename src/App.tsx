import React, { useState, useMemo, useEffect } from 'react';
import {
  Building2,
  Calendar,
  Grid,
  Columns3,
  Sparkles,
  Search,
  Filter,
  Layers,
  ChevronLeft,
  ChevronRight,
  Bookmark,
  Share2,
  CheckCircle2,
  HelpCircle,
  Clock,
  ArrowRight,
  Globe,
  SlidersHorizontal,
  BellRing
} from 'lucide-react';
import { INITIAL_NOTICES } from './data/mockData';
import { SubscriptionNotice, NoticeCategory, NoticeStatus, KoreanRegion } from './types';
import { Header } from './components/Header';
import { FilterSection } from './components/FilterSection';
import { NoticeCard } from './components/NoticeCard';
import { NoticeDetailModal } from './components/NoticeDetailModal';
import { OfficialSideHub } from './components/OfficialSideHub';
import { PortalIframeViewer } from './components/PortalIframeViewer';
import { FaqSection } from './components/FaqSection';
import { EligibilityChecker } from './components/EligibilityChecker';
import { NoticeCalendar } from './components/NoticeCalendar';
import { GuideSection } from './components/GuideSection';
import { Footer } from './components/Footer';

export default function App() {
  // Filter States
  const [selectedStatus, setSelectedStatus] = useState<NoticeStatus>('전체');
  const [selectedCategory, setSelectedCategory] = useState<NoticeCategory>('전체');
  const [selectedRegion, setSelectedRegion] = useState<KoreanRegion>('전국');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'endDate' | 'startDate' | 'units' | 'views'>('endDate');

  // View Mode: 'threeTable' (Classic 3-column) | 'grid' (Wide notice cards) | 'calendar' (Timeline calendar)
  const [viewMode, setViewMode] = useState<'threeTable' | 'grid' | 'calendar'>('threeTable');

  // Interactive Modals & Active Selections
  const [selectedNotice, setSelectedNotice] = useState<SubscriptionNotice | null>(null);
  const [isDiagnosisOpen, setIsDiagnosisOpen] = useState<boolean>(false);
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('lh_bookmarked_ids');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Center column in 3-column view: 'cards' or 'iframe'
  const [centerMode, setCenterMode] = useState<'cards' | 'iframe'>('cards');

  // Toast message
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Pagination
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 6;

  // Save bookmarks
  useEffect(() => {
    try {
      localStorage.setItem('lh_bookmarked_ids', JSON.stringify(bookmarkedIds));
    } catch {
      // ignore
    }
  }, [bookmarkedIds]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const handleToggleBookmark = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (bookmarkedIds.includes(id)) {
      setBookmarkedIds(bookmarkedIds.filter((item) => item !== id));
      showToast('관심 공고에서 삭제되었습니다.');
    } else {
      setBookmarkedIds([...bookmarkedIds, id]);
      showToast('⭐ 관심 공고에 등록되었습니다.');
    }
  };

  const handleShare = (notice: SubscriptionNotice, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (navigator.clipboard) {
      navigator.clipboard.writeText(
        `[LH청약 일정] ${notice.title}\n접수기간: ${notice.startDate} ~ ${notice.endDate}\n공고보기: ${notice.directUrl}`
      );
      showToast('📋 공고 정보가 클립보드에 복사되었습니다.');
    } else {
      showToast('공유 링크가 복사되었습니다.');
    }
  };

  const handleResetFilters = () => {
    setSelectedStatus('전체');
    setSelectedCategory('전체');
    setSelectedRegion('전국');
    setSearchQuery('');
    setSortBy('endDate');
    setCurrentPage(1);
    showToast('필터가 초기화되었습니다.');
  };

  // Filtered & Sorted Notices
  const filteredNotices = useMemo(() => {
    let result = [...INITIAL_NOTICES];

    // Status filter
    if (selectedStatus !== '전체') {
      result = result.filter((n) => n.status === selectedStatus);
    }

    // Category filter
    if (selectedCategory !== '전체') {
      result = result.filter((n) => n.category === selectedCategory);
    }

    // Region filter
    if (selectedRegion !== '전국') {
      result = result.filter((n) => n.region === selectedRegion);
    }

    // Search query filter
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (n) =>
          n.title.toLowerCase().includes(q) ||
          n.locationDetail.toLowerCase().includes(q) ||
          n.category.toLowerCase().includes(q) ||
          n.region.toLowerCase().includes(q) ||
          n.noticeNumber.toLowerCase().includes(q)
      );
    }

    // Sorting
    result.sort((a, b) => {
      if (sortBy === 'endDate') {
        return (a.daysLeft ?? 999) - (b.daysLeft ?? 999);
      }
      if (sortBy === 'startDate') {
        return b.startDate.localeCompare(a.startDate);
      }
      if (sortBy === 'units') {
        return b.supplyUnits - a.supplyUnits;
      }
      if (sortBy === 'views') {
        return b.viewCount - a.viewCount;
      }
      return 0;
    });

    return result;
  }, [selectedStatus, selectedCategory, selectedRegion, searchQuery, sortBy]);

  // Pagination Slice
  const totalPages = Math.ceil(filteredNotices.length / itemsPerPage) || 1;
  const paginatedNotices = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredNotices.slice(start, start + itemsPerPage);
  }, [filteredNotices, currentPage, itemsPerPage]);

  const urgentCount = useMemo(
    () => INITIAL_NOTICES.filter((n) => n.status === '마감임박' || (n.daysLeft && n.daysLeft <= 3)).length,
    []
  );

  const openCount = useMemo(
    () => INITIAL_NOTICES.filter((n) => n.status === '접수중').length,
    []
  );

  const upcomingCount = useMemo(
    () => INITIAL_NOTICES.filter((n) => n.status === '접수예정').length,
    []
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-950 text-slate-900 px-3 sm:px-6 py-6 md:py-10">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-5 right-5 z-50 bg-slate-900 text-white px-4 py-3 rounded-2xl shadow-2xl border border-blue-500/40 text-xs sm:text-sm font-semibold flex items-center gap-2 animate-bounce-subtle">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <Header
          urgentCount={urgentCount}
          openCount={openCount}
          onOpenDiagnosis={() => setIsDiagnosisOpen(true)}
        />

        {/* View Mode & Quick Nav Selector */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-white/95 backdrop-blur-md rounded-2xl p-3 sm:p-4 shadow-lg border border-white/60 gap-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-500 flex items-center gap-1">
              <SlidersHorizontal className="w-3.5 h-3.5 text-blue-600" />
              화면 보기 모드:
            </span>
            <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl">
              <button
                onClick={() => setViewMode('threeTable')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                  viewMode === 'threeTable'
                    ? 'bg-blue-800 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Columns3 className="w-3.5 h-3.5" />
                <span>3단 분할 뷰</span>
              </button>

              <button
                onClick={() => setViewMode('grid')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                  viewMode === 'grid'
                    ? 'bg-blue-800 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Grid className="w-3.5 h-3.5" />
                <span>공고 카드 그리드 ({filteredNotices.length})</span>
              </button>

              <button
                onClick={() => setViewMode('calendar')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                  viewMode === 'calendar'
                    ? 'bg-blue-800 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>월간 캘린더</span>
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2 self-end sm:self-auto">
            <button
              onClick={() => setIsDiagnosisOpen(true)}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-blue-700 to-indigo-700 hover:from-blue-800 hover:to-indigo-800 text-white font-bold text-xs shadow-sm transition-all"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>맞춤 주택 간이진단</span>
            </button>
          </div>
        </div>

        {/* Global Filter Bar (Available for all views) */}
        <FilterSection
          selectedStatus={selectedStatus}
          setSelectedStatus={(st) => {
            setSelectedStatus(st);
            setCurrentPage(1);
          }}
          selectedCategory={selectedCategory}
          setSelectedCategory={(cat) => {
            setSelectedCategory(cat);
            setCurrentPage(1);
          }}
          selectedRegion={selectedRegion}
          setSelectedRegion={(reg) => {
            setSelectedRegion(reg);
            setCurrentPage(1);
          }}
          searchQuery={searchQuery}
          setSearchQuery={(q) => {
            setSearchQuery(q);
            setCurrentPage(1);
          }}
          sortBy={sortBy}
          setSortBy={setSortBy}
          onReset={handleResetFilters}
          totalResultsCount={filteredNotices.length}
        />

        {/* VIEW 1: 3-Column Dashboard Layout (Faithful to the original layout & structure) */}
        {viewMode === 'threeTable' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Column 1 (Left: 3.5 cols on desktop): LH Official Info & Statistics */}
            <div className="lg:col-span-3 space-y-6">
              <OfficialSideHub
                urgentCount={urgentCount}
                openCount={openCount}
                upcomingCount={upcomingCount}
                totalCount={INITIAL_NOTICES.length}
                onSelectFilterStatus={(st) => {
                  setSelectedStatus(st);
                  setCurrentPage(1);
                }}
                onOpenDiagnosis={() => setIsDiagnosisOpen(true)}
              />
            </div>

            {/* Column 2 (Center: 5.5 cols on desktop): Real-time Notice Stream or Iframe Viewer */}
            <div className="lg:col-span-6 space-y-4">
              <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-md border border-white/60 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse" />
                    실시간 청약 공고 스트림
                  </h3>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2.5 py-0.5 rounded-full font-bold">
                    {filteredNotices.length}건
                  </span>
                </div>

                {/* Sub-toggle: Cards vs Official Frame */}
                <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl text-xs font-semibold">
                  <button
                    onClick={() => setCenterMode('cards')}
                    className={`px-2.5 py-1 rounded-lg transition-colors ${
                      centerMode === 'cards'
                        ? 'bg-blue-800 text-white font-bold shadow-2xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    공고 목록
                  </button>
                  <button
                    onClick={() => setCenterMode('iframe')}
                    className={`px-2.5 py-1 rounded-lg transition-colors ${
                      centerMode === 'iframe'
                        ? 'bg-blue-800 text-white font-bold shadow-2xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    공식 웹 프레임
                  </button>
                </div>
              </div>

              {centerMode === 'cards' ? (
                <div className="space-y-4">
                  {paginatedNotices.length > 0 ? (
                    <div className="space-y-4">
                      {paginatedNotices.map((notice) => (
                        <NoticeCard
                          key={notice.id}
                          notice={notice}
                          onSelect={(n) => setSelectedNotice(n)}
                          isBookmarked={bookmarkedIds.includes(notice.id)}
                          onToggleBookmark={handleToggleBookmark}
                          onShare={handleShare}
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="bg-white rounded-3xl p-12 text-center shadow-lg border border-slate-100 space-y-3">
                      <div className="text-4xl">🔍</div>
                      <h4 className="font-bold text-slate-800 text-base">
                        조건에 해당하는 청약 공고가 없습니다.
                      </h4>
                      <p className="text-xs text-slate-500">
                        필터 설정을 변경하거나 검색어를 다시 입력해 보세요.
                      </p>
                      <button
                        onClick={handleResetFilters}
                        className="mt-2 px-4 py-2 rounded-xl bg-blue-700 text-white font-bold text-xs"
                      >
                        필터 초기화
                      </button>
                    </div>
                  )}

                  {/* Pagination */}
                  {totalPages > 1 && (
                    <div className="flex items-center justify-center gap-2 pt-4 bg-white/80 backdrop-blur-md rounded-2xl p-3 shadow-md border border-white/60">
                      <button
                        onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                        disabled={currentPage === 1}
                        className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 disabled:opacity-40 disabled:cursor-not-allowed transition-colors text-slate-700"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <div className="flex items-center gap-1 text-xs font-bold">
                        {Array.from({ length: totalPages }).map((_, i) => (
                          <button
                            key={i}
                            onClick={() => setCurrentPage(i + 1)}
                            className={`w-7 h-7 rounded-lg transition-colors ${
                              currentPage === i + 1
                                ? 'bg-blue-800 text-white shadow-xs'
                                : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                            }`}
                          >
                            {i + 1}
                          </button>
                        ))}
                      </div>
                      <button
                        onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                        disabled={currentPage === totalPages}
                        className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 disabled:opacity-40 disabled:cursor-not-allowed transition-colors text-slate-700"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <PortalIframeViewer onSwitchToCards={() => setCenterMode('cards')} />
              )}
            </div>

            {/* Column 3 (Right: 3.5 cols on desktop): Frequently Asked Questions (FAQ Accordion) */}
            <div className="lg:col-span-3 space-y-6">
              <FaqSection />
            </div>
          </div>
        )}

        {/* VIEW 2: Full-width Notice Grid View */}
        {viewMode === 'grid' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {paginatedNotices.map((notice) => (
                <NoticeCard
                  key={notice.id}
                  notice={notice}
                  onSelect={(n) => setSelectedNotice(n)}
                  isBookmarked={bookmarkedIds.includes(notice.id)}
                  onToggleBookmark={handleToggleBookmark}
                  onShare={handleShare}
                />
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 pt-4 bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-white/60 max-w-md mx-auto">
                <button
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 disabled:opacity-40 disabled:cursor-not-allowed transition-colors text-slate-700"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <div className="flex items-center gap-1.5 text-xs font-bold">
                  {Array.from({ length: totalPages }).map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentPage(i + 1)}
                      className={`w-8 h-8 rounded-xl transition-colors ${
                        currentPage === i + 1
                          ? 'bg-blue-800 text-white shadow-xs'
                          : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                      }`}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>
                <button
                  onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 disabled:opacity-40 disabled:cursor-not-allowed transition-colors text-slate-700"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        )}

        {/* VIEW 3: Monthly Calendar View */}
        {viewMode === 'calendar' && (
          <NoticeCalendar
            notices={INITIAL_NOTICES}
            onSelectNotice={(n) => setSelectedNotice(n)}
          />
        )}

        {/* Comprehensive Guide & FAQ Section */}
        <GuideSection />

        {/* Footer */}
        <Footer />
      </div>

      {/* Notice Detail Modal */}
      <NoticeDetailModal
        notice={selectedNotice}
        onClose={() => setSelectedNotice(null)}
        isBookmarked={selectedNotice ? bookmarkedIds.includes(selectedNotice.id) : false}
        onToggleBookmark={(id) => handleToggleBookmark(id)}
        onShare={(n) => handleShare(n)}
      />

      {/* 30-Second Eligibility Quiz Modal */}
      <EligibilityChecker
        isOpen={isDiagnosisOpen}
        onClose={() => setIsDiagnosisOpen(false)}
        onSelectCategoryFilter={(cat) => {
          setSelectedCategory(cat);
          setCurrentPage(1);
          setViewMode('threeTable');
        }}
      />
    </div>
  );
}
