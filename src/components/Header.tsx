import React, { useState, useEffect } from 'react';
import { Building2, Calendar, RefreshCw, Bell, Search, Sparkles, ShieldCheck, PhoneCall } from 'lucide-react';

interface HeaderProps {
  urgentCount: number;
  openCount: number;
  onOpenSearch?: () => void;
  onOpenDiagnosis?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  urgentCount,
  openCount,
  onOpenSearch,
  onOpenDiagnosis
}) => {
  const [currentDateTime, setCurrentDateTime] = useState<string>('');
  const [isRefreshing, setIsRefreshing] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, '0');
      const day = String(now.getDate()).padStart(2, '0');
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      setCurrentDateTime(`${year}.${month}.${day} ${hours}:${minutes} 업데이트`);
    };

    updateTime();
    const timer = setInterval(updateTime, 1000 * 30);
    return () => clearInterval(timer);
  }, []);

  const handleManualRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      const now = new Date();
      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, '0');
      const day = String(now.getDate()).padStart(2, '0');
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      setCurrentDateTime(`${year}.${month}.${day} ${hours}:${minutes} 업데이트`);
      setIsRefreshing(false);
    }, 600);
  };

  return (
    <header className="relative w-full overflow-hidden rounded-3xl bg-white/95 backdrop-blur-md shadow-2xl border border-white/40 p-6 md:p-8 mb-8">
      {/* Background Subtle Gradient Accents */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        {/* Title and Description */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 text-blue-700 text-xs md:text-sm font-semibold tracking-wide shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
            </span>
            <span>LH청약플러스 실시간 연동 포털</span>
            <span className="text-blue-300">|</span>
            <span className="text-blue-600 font-medium">한국토지주택공사 공공데이터</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight flex items-center flex-wrap gap-2">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-900">
              오늘의 LH청약 일정
            </span>
            <span className="text-blue-600 text-lg md:text-xl font-bold bg-blue-100/70 px-2.5 py-0.5 rounded-lg border border-blue-200">
              2026
            </span>
          </h1>

          <p className="text-slate-600 text-sm md:text-base max-w-2xl leading-relaxed">
            전국 LH 임대주택·행복주택·공공분양·신혼희망타운·토지 청약 공고를 실시간으로 검색하고,
            접수 마감 일정과 자격 요건을 한눈에 확인하세요.
          </p>
        </div>

        {/* Live Status & Quick Action Tools */}
        <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row items-start sm:items-center gap-3">
          {/* Timestamp Pill */}
          <div className="flex items-center gap-2 bg-slate-900 text-white px-4 py-2.5 rounded-2xl shadow-md text-xs sm:text-sm font-medium">
            <Calendar className="w-4 h-4 text-blue-400 shrink-0" />
            <span className="tracking-tight">{currentDateTime || '시간 계산 중...'}</span>
            <button
              onClick={handleManualRefresh}
              title="실시간 새로고침"
              className="ml-1 p-1 hover:bg-slate-800 rounded-lg transition-colors text-slate-300 hover:text-white"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? 'animate-spin text-blue-400' : ''}`} />
            </button>
          </div>

          {/* Quick Action Badges */}
          <div className="flex items-center gap-2">
            <div className="bg-emerald-50 text-emerald-700 border border-emerald-200/80 px-3.5 py-2 rounded-2xl text-xs sm:text-sm font-semibold flex items-center gap-1.5 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>접수중 <strong className="font-bold text-emerald-900">{openCount}</strong>건</span>
            </div>

            {urgentCount > 0 && (
              <div className="bg-rose-50 text-rose-700 border border-rose-200/80 px-3.5 py-2 rounded-2xl text-xs sm:text-sm font-semibold flex items-center gap-1.5 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                <span>마감임박 <strong className="font-bold text-rose-900">{urgentCount}</strong>건</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Quick Nav Ticker Bar */}
      <div className="mt-6 pt-5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm text-slate-600">
        <div className="flex items-center gap-4 flex-wrap">
          <span className="font-semibold text-slate-800 flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-blue-600" />
            공식 안내:
          </span>
          <span className="bg-slate-100 px-2.5 py-1 rounded-md text-slate-700">인터넷 청약 09:00 ~ 17:00</span>
          <span className="hidden sm:inline bg-slate-100 px-2.5 py-1 rounded-md text-slate-700">공동/금융/간편인증서 필수</span>
          <span className="flex items-center gap-1 text-blue-700 font-medium hover:underline cursor-pointer">
            <PhoneCall className="w-3.5 h-3.5" /> LH콜센터 1600-1004
          </span>
        </div>

        {onOpenDiagnosis && (
          <button
            onClick={onOpenDiagnosis}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-blue-600 bg-blue-50 hover:bg-blue-100 border border-blue-200 px-3 py-1.5 rounded-xl transition-all shadow-xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            내 청약 자격 30초 간이진단
          </button>
        )}
      </div>
    </header>
  );
};
