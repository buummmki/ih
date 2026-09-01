import React from 'react';
import {
  ExternalLink,
  Building,
  Sparkles,
  PhoneCall,
  CheckCircle,
  HelpCircle,
  FileSpreadsheet,
  Layers,
  ArrowUpRight,
  Clock,
  ShieldCheck
} from 'lucide-react';
import { OFFICIAL_LINKS } from '../data/mockData';

interface OfficialSideHubProps {
  urgentCount: number;
  openCount: number;
  upcomingCount: number;
  totalCount: number;
  onSelectFilterStatus: (status: '접수중' | '마감임박' | '접수예정') => void;
  onOpenDiagnosis: () => void;
}

export const OfficialSideHub: React.FC<OfficialSideHubProps> = ({
  urgentCount,
  openCount,
  upcomingCount,
  totalCount,
  onSelectFilterStatus,
  onOpenDiagnosis
}) => {
  return (
    <div className="space-y-6">
      {/* 1. Official LH Information Hub Card */}
      <div className="bg-white rounded-3xl p-6 shadow-xl border border-slate-100 space-y-5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center font-black">
            🏠
          </div>
          <div>
            <h3 className="font-bold text-slate-900 text-lg leading-tight">
              LH청약플러스 실시간 정보
            </h3>
            <p className="text-xs text-slate-500">한국토지주택공사 공인 청약 포털</p>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          LH청약플러스에서 제공하는 최신 임대·분양 주택 청약 정보를 공식 시스템과 실시간으로 연동하여
          확인할 수 있습니다.
        </p>

        {/* Action Buttons */}
        <div className="space-y-2.5">
          <a
            href="https://apply.lh.or.kr/lhapply/apply/sc/list.do?mi=1312&srchPanSs=%EC%A0%91%EC%88%98&calSrchType=01"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-between px-4 py-3 rounded-2xl bg-gradient-to-r from-blue-700 to-indigo-700 hover:from-blue-800 hover:to-indigo-800 text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all"
          >
            <span className="flex items-center gap-2">
              <span>📋</span> LH청약플러스 바로가기
            </span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          <a
            href="https://www.lh.or.kr/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-between px-4 py-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs sm:text-sm transition-colors border border-slate-200/80"
          >
            <span className="flex items-center gap-2">
              <span>🏢</span> LH 한국토지주택공사
            </span>
            <ExternalLink className="w-4 h-4 text-slate-500" />
          </a>
        </div>

        {/* Quick Official Portals list */}
        <div className="pt-4 border-t border-slate-100 space-y-2">
          <span className="text-xs font-bold text-slate-400 block mb-1">관련 정부 주거 포털</span>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <a
              href="https://www.myhome.go.kr"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-50 hover:bg-teal-50 border border-slate-200 hover:border-teal-200 text-slate-700 hover:text-teal-900 transition-colors"
            >
              <div className="font-bold">마이홈포털</div>
              <span className="text-[10px] text-slate-400">주거복지 맞춤진단</span>
            </a>
            <a
              href="https://www.applyhome.co.kr"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-50 hover:bg-sky-50 border border-slate-200 hover:border-sky-200 text-slate-700 hover:text-sky-900 transition-colors"
            >
              <div className="font-bold">청약홈(민간)</div>
              <span className="text-[10px] text-slate-400">부동산원 청약</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. Today's Quick Status Summary Card */}
      <div className="bg-gradient-to-br from-slate-900 to-blue-950 text-white rounded-3xl p-6 shadow-xl border border-slate-800 space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-blue-300 tracking-wider flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-blue-400" />
            실시간 공고 현황
          </span>
          <span className="text-xs text-slate-400">총 {totalCount}건 등록</span>
        </div>

        <div className="grid grid-cols-3 gap-2 text-center">
          <button
            onClick={() => onSelectFilterStatus('접수중')}
            className="p-3 rounded-2xl bg-slate-800/80 hover:bg-emerald-950/60 border border-emerald-500/30 transition-all hover:scale-103 text-left flex flex-col justify-between"
          >
            <span className="text-[11px] text-emerald-400 font-semibold block">접수중</span>
            <strong className="text-xl font-black text-white">{openCount}</strong>
          </button>

          <button
            onClick={() => onSelectFilterStatus('마감임박')}
            className="p-3 rounded-2xl bg-slate-800/80 hover:bg-rose-950/60 border border-rose-500/30 transition-all hover:scale-103 text-left flex flex-col justify-between"
          >
            <span className="text-[11px] text-rose-400 font-semibold block">마감임박</span>
            <strong className="text-xl font-black text-rose-300">{urgentCount}</strong>
          </button>

          <button
            onClick={() => onSelectFilterStatus('접수예정')}
            className="p-3 rounded-2xl bg-slate-800/80 hover:bg-amber-950/60 border border-amber-500/30 transition-all hover:scale-103 text-left flex flex-col justify-between"
          >
            <span className="text-[11px] text-amber-400 font-semibold block">접수예정</span>
            <strong className="text-xl font-black text-amber-300">{upcomingCount}</strong>
          </button>
        </div>

        <button
          onClick={onOpenDiagnosis}
          className="w-full mt-2 py-3 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm transition-colors flex items-center justify-center gap-2 shadow-lg shadow-blue-950/50"
        >
          <Sparkles className="w-4 h-4 text-amber-300" />
          <span>내게 맞는 LH 주택 진단하기</span>
        </button>
      </div>

      {/* 3. Essential LH Application Tips Card */}
      <div className="bg-white rounded-3xl p-6 shadow-md border border-slate-100 space-y-4">
        <h4 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-blue-600" />
          LH 청약 신청 전 필수 체크 4선
        </h4>

        <ul className="space-y-2.5 text-xs text-slate-600">
          <li className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
            <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-800 font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
              1
            </span>
            <span>
              <strong>공동/금융인증서 준비:</strong> 마감 당일 인증서 오류 방지를 위해 사전 로그인 테스트를 권장합니다.
            </span>
          </li>
          <li className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
            <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-800 font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
              2
            </span>
            <span>
              <strong>무주택 기준 확인:</strong> 신청자 본인뿐만 아니라 주민등록등본상 세대원 전원이 무주택이어야 합니다.
            </span>
          </li>
          <li className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
            <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-800 font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
              3
            </span>
            <span>
              <strong>소득·자산 사전 계산:</strong> 건보료 납부액 및 자동차가액(3,708만원 이하) 기준을 확인하세요.
            </span>
          </li>
          <li className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
            <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-800 font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
              4
            </span>
            <span>
              <strong>신청 마감 시간 준수:</strong> 접수 마감일 17:00 정각에 시스템이 자동 마감됩니다.
            </span>
          </li>
        </ul>

        <div className="pt-2 flex items-center justify-between text-[11px] text-slate-500">
          <span>한국토지주택공사 콜센터</span>
          <a href="tel:1600-1004" className="font-bold text-blue-600 flex items-center gap-1">
            <PhoneCall className="w-3 h-3" /> 1600-1004
          </a>
        </div>
      </div>
    </div>
  );
};
