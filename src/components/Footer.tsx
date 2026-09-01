import React from 'react';
import { Building2, ExternalLink, ShieldCheck, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full mt-12 rounded-3xl bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 text-white p-8 sm:p-10 shadow-2xl border border-slate-800">
      <div className="max-w-6xl mx-auto space-y-6 text-center sm:text-left">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-blue-600 text-white flex items-center justify-center font-black text-lg">
              🏠
            </div>
            <div>
              <h3 className="font-bold text-lg sm:text-xl text-white">오늘의 LH청약 일정</h3>
              <p className="text-xs text-slate-400">LH 한국토지주택공사 청약플러스 실시간 연동 포털</p>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <a
              href="https://apply.lh.or.kr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 hover:text-white flex items-center gap-1 font-medium transition-colors"
            >
              LH청약플러스 <ExternalLink className="w-3 h-3" />
            </a>
            <span className="text-slate-700">|</span>
            <a
              href="https://www.lh.or.kr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 hover:text-white flex items-center gap-1 font-medium transition-colors"
            >
              LH공사 홈페이지 <ExternalLink className="w-3 h-3" />
            </a>
            <span className="text-slate-700">|</span>
            <a
              href="https://www.myhome.go.kr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 hover:text-white flex items-center gap-1 font-medium transition-colors"
            >
              마이홈포털 <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        <div className="text-xs text-slate-400 space-y-2 leading-relaxed">
          <p>
            본 웹사이트는 한국토지주택공사(LH)의 공공 청약 공고 데이터를 바탕으로 이용자의 편의를 위해 정보를 제공하며,
            공식 청약 신청 및 당첨자 확인은 반드시 <strong className="text-slate-200">LH청약플러스(apply.lh.or.kr)</strong> 공식 사이트를 이용하시기 바랍니다.
          </p>
          <p>
            LH 대표 문의전화: <strong className="text-blue-300">1600-1004</strong> (평일 09:00 ~ 18:00) | 마이홈 콜센터: <strong className="text-blue-300">1600-1004</strong>
          </p>
        </div>

        <div className="pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
          <span>© 2025-2026 온누리정보. All rights reserved.</span>
          <span className="flex items-center gap-1">
            국민 주거 안정을 위한 스마트 청약 정보 허브
          </span>
        </div>
      </div>
    </footer>
  );
};
