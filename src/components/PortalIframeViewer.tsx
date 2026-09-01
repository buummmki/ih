import React, { useState } from 'react';
import { ExternalLink, AlertTriangle, RefreshCw, LayoutGrid, Globe, ShieldAlert } from 'lucide-react';

interface PortalIframeViewerProps {
  onSwitchToCards?: () => void;
}

export const PortalIframeViewer: React.FC<PortalIframeViewerProps> = ({ onSwitchToCards }) => {
  const [iframeError, setIframeError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const lhOfficialUrl =
    'https://apply.lh.or.kr/lhapply/apply/sc/list.do?mi=1312&srchPanSs=%EC%A0%91%EC%88%98&calSrchType=01';

  return (
    <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden flex flex-col h-full min-h-[640px]">
      {/* Viewer Header */}
      <div className="bg-slate-900 text-white p-4 px-6 flex items-center justify-between gap-3 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <Globe className="w-4 h-4 text-blue-400" />
          <span className="font-bold text-sm">LH청약플러스 실시간 공식 웹 뷰어</span>
          <span className="bg-blue-600/80 text-[11px] px-2 py-0.5 rounded-md font-semibold text-blue-100">
            실시간
          </span>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={lhOfficialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white px-3 py-1.5 rounded-xl transition-colors flex items-center gap-1 font-semibold"
          >
            <span>새 탭으로 열기</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Frame Container */}
      <div className="relative flex-1 bg-slate-50 min-h-[580px]">
        {isLoading && !iframeError && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-50/90 z-10 gap-3">
            <div className="w-8 h-8 border-3 border-blue-200 border-t-blue-700 rounded-full animate-spin" />
            <p className="text-xs font-semibold text-slate-600">LH청약플러스 서버 연결 중...</p>
          </div>
        )}

        {!iframeError ? (
          <iframe
            src={lhOfficialUrl}
            title="LH청약플러스 실시간 청약정보"
            className="w-full h-full min-h-[580px] border-0"
            onLoad={() => setIsLoading(false)}
            onError={() => {
              setIsLoading(false);
              setIframeError(true);
            }}
            sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
          />
        ) : null}

        {/* Fallback View (Shown if browser security policy / X-Frame-Options blocks direct embedding) */}
        {iframeError && (
          <div className="flex flex-col items-center justify-center p-8 text-center h-full min-h-[580px] bg-slate-50 space-y-5">
            <div className="w-16 h-16 rounded-3xl bg-amber-100 text-amber-700 flex items-center justify-center text-2xl shadow-sm">
              ⚠️
            </div>

            <div className="space-y-2 max-w-md">
              <h4 className="font-bold text-slate-900 text-lg">
                LH청약플러스 보안 정책에 따른 안내
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                LH청약플러스 웹사이트는 보안 인증 규정(X-Frame-Options)에 따라 일부 브라우저 프레임 내
                직접 렌더링이 제한될 수 있습니다. 아래 버튼을 통해 공식 사이트에 안전하게 바로 접속하실 수 있습니다.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <a
                href={lhOfficialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-700 to-indigo-700 hover:from-blue-800 hover:to-indigo-800 text-white font-bold text-sm shadow-md transition-all"
              >
                <span>📋 LH청약플러스 공식 사이트 바로가기</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              {onSwitchToCards && (
                <button
                  onClick={onSwitchToCards}
                  className="px-5 py-3 rounded-2xl bg-white hover:bg-slate-100 text-slate-800 font-semibold text-sm border border-slate-200 transition-colors shadow-xs"
                >
                  실시간 공고 카드 목록으로 보기
                </button>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Frame Footer Bar */}
      <div className="p-3 px-5 bg-slate-100 border-t border-slate-200 text-xs text-slate-600 flex items-center justify-between">
        <span className="text-[11px] text-slate-500">
          출처: LH 한국토지주택공사 청약플러스 (apply.lh.or.kr)
        </span>
        <a
          href={lhOfficialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 font-bold hover:underline flex items-center gap-1 text-[11px]"
        >
          원문 공고 확인 <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
};
