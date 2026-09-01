import React, { useState } from 'react';
import {
  BookOpen,
  Calendar,
  MapPin,
  HelpCircle,
  CheckCircle2,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  FileText,
  ShieldCheck,
  Award,
  Layers
} from 'lucide-react';

export const GuideSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'types' | 'steps' | 'documents'>('overview');

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl border border-slate-100 space-y-8 mt-8">
      {/* Guide Header */}
      <div className="border-b border-slate-100 pb-6 space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold">
          <BookOpen className="w-3.5 h-3.5" />
          <span>공식 종합 가이드북</span>
        </div>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
          📋 LH청약 일정 및 입주신청 완벽 가이드
        </h2>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          LH청약플러스와 연동된 실시간 청약정보를 통해 오늘의 청약 일정을 한눈에 확인하세요.
          임대주택, 분양주택, 토지, 상가 등 다양한 청약 정보를 빠르고 정확하게 제공합니다.
        </p>
      </div>

      {/* 4 Feature Highlights Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gradient-to-b from-blue-50/80 to-white p-5 rounded-2xl border border-blue-100 hover:shadow-md transition-shadow">
          <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center text-lg mb-3 shadow-sm">
            🏠
          </div>
          <h3 className="font-bold text-slate-900 text-base mb-1.5">실시간 청약정보</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            LH청약플러스와 직접 연동하여 최신 모집공고 및 경쟁률 현황을 실시간으로 확인합니다.
          </p>
        </div>

        <div className="bg-gradient-to-b from-indigo-50/80 to-white p-5 rounded-2xl border border-indigo-100 hover:shadow-md transition-shadow">
          <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center text-lg mb-3 shadow-sm">
            📅
          </div>
          <h3 className="font-bold text-slate-900 text-base mb-1.5">접수 일정 확인</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            접수중, 접수예정, 마감임박 등 상태별 타임라인을 놓치지 않도록 세부 일정을 지원합니다.
          </p>
        </div>

        <div className="bg-gradient-to-b from-teal-50/80 to-white p-5 rounded-2xl border border-teal-100 hover:shadow-md transition-shadow">
          <div className="w-10 h-10 rounded-xl bg-teal-600 text-white flex items-center justify-center text-lg mb-3 shadow-sm">
            📍
          </div>
          <h3 className="font-bold text-slate-900 text-base mb-1.5">전국 17개 시도 검색</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            서울, 경기, 수도권 신도시부터 지방 광역시·도 단위까지 원하는 지역을 한 번에 필터링합니다.
          </p>
        </div>

        <div className="bg-gradient-to-b from-amber-50/80 to-white p-5 rounded-2xl border border-amber-100 hover:shadow-md transition-shadow">
          <div className="w-10 h-10 rounded-xl bg-amber-600 text-white flex items-center justify-center text-lg mb-3 shadow-sm">
            💡
          </div>
          <h3 className="font-bold text-slate-900 text-base mb-1.5">청약 자격 간이진단</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            신혼부부, 청년, 다자녀, 고령자 등 내게 가장 유리한 맞춤형 LH 청약 유형을 도출합니다.
          </p>
        </div>
      </div>

      {/* Interactive Tabs for Comprehensive Guide */}
      <div className="space-y-6 pt-4 border-t border-slate-100">
        <div className="flex items-center gap-2 overflow-x-auto pb-2">
          {[
            { key: 'overview', label: '🏘️ 청약 유형별 특징' },
            { key: 'steps', label: '🎯 5단계 청약 절차' },
            { key: 'documents', label: '📑 필수 서류 총정리' },
            { key: 'types', label: '💰 소득 및 자산 기준' }
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key as any)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                activeTab === tab.key
                  ? 'bg-blue-800 text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab 1: Types */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="font-black text-blue-700 text-sm sm:text-base flex items-center gap-1.5">
                🏠 국민임대주택
              </span>
              <p className="text-slate-600 leading-relaxed">
                무주택 저소득층(소득 70% 이하)의 주거안정을 위해 30년 이상 장기간 임대하는 주택. 시세의 60~80% 수준의 저렴한 보증금 및 임대료가 장점입니다.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="font-black text-indigo-700 text-sm sm:text-base flex items-center gap-1.5">
                🌸 행복주택
              </span>
              <p className="text-slate-600 leading-relaxed">
                대학생, 청년(만 19~39세), 신혼부부, 고령자 등 젊은 계층의 주거불안 해소를 위해 대중교통이 편리한 역세권에 공급하는 공공임대주택입니다.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="font-black text-amber-700 text-sm sm:text-base flex items-center gap-1.5">
                🏢 공공분양주택
              </span>
              <p className="text-slate-600 leading-relaxed">
                LH 및 공공기관이 건설하여 무주택 실수요자에게 영구적으로 소유권을 분양하는 주택. 3기 신도시 및 수도권 택지지구에서 높은 인기를 얻고 있습니다.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="font-black text-pink-700 text-sm sm:text-base flex items-center gap-1.5">
                💍 신혼희망타운
              </span>
              <p className="text-slate-600 leading-relaxed">
                육아·보육 중심의 신혼부부 특화형 공공주택(분양/임대)으로, 연 1.3% 고정금리의 전용 주택담보장기대출(수익공유형 모기지)을 지원합니다.
              </p>
            </div>
          </div>
        )}

        {/* Tab 2: 5 Steps */}
        {activeTab === 'steps' && (
          <div className="space-y-3">
            {[
              {
                step: '01',
                title: '자격 및 소득 요건 확인',
                desc: '모집공고일 기준 주민등록등본상 무주택 세대구성원 여부, 가구원수별 월평균 소득(50%~140%), 총자산 및 자동차가액을 점검합니다.'
              },
              {
                step: '02',
                title: '모집공고문 세부 분석',
                desc: '단지 위치, 평형, 공급호수, 임대조건(보증금 전환율), 접수 마감일 및 당첨자 발표일을 꼼꼼히 확인합니다.'
              },
              {
                step: '03',
                title: '온라인 청약신청 접수',
                desc: 'LH청약플러스(apply.lh.or.kr)에서 금융/공동인증서로 로그인 후, 원하는 단지 및 주택형을 선택하고 청약 신청서를 작성합니다.'
              },
              {
                step: '04',
                title: '서류제출 대상자 발표 및 서류제출',
                desc: '서류심사 대상자로 선정되면 등기우편 또는 온라인으로 주민등록등본/초본, 가족관계증명서, 소득금액증명원 등 필수 서류를 기한 내 제출합니다.'
              },
              {
                step: '05',
                title: '최종 당첨자 발표 및 전자계약',
                desc: '자격 적격 심사를 통과하면 최종 당첨자 및 동호수가 배정되며, 보증금 계약금 납부 후 부동산거래 전자계약시스템 또는 현장 계약을 체결합니다.'
              }
            ].map((st) => (
              <div
                key={st.step}
                className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-700 text-white font-black flex items-center justify-center text-sm shrink-0">
                  {st.step}
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base">{st.title}</h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{st.desc}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: Required Docs */}
        {activeTab === 'documents' && (
          <div className="bg-amber-50/50 p-6 rounded-2xl border border-amber-200 space-y-4">
            <h4 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
              <FileText className="w-4 h-4 text-amber-700" />
              서류제출 대상자 공통 및 유형별 필수 제출 서류 목록
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
              <div className="bg-white p-3.5 rounded-xl border border-amber-100 space-y-1">
                <strong className="text-slate-900 block font-bold">1. 주민등록표등본 (상세)</strong>
                <span className="text-slate-600">세대구성 사유, 세대원 전원 주민등록번호 13자리 표기 필수</span>
              </div>
              <div className="bg-white p-3.5 rounded-xl border border-amber-100 space-y-1">
                <strong className="text-slate-900 block font-bold">2. 주민등록표초본 (상세)</strong>
                <span className="text-slate-600">신청자의 과거 주소변동 전체이력 및 거주기간 확인용</span>
              </div>
              <div className="bg-white p-3.5 rounded-xl border border-amber-100 space-y-1">
                <strong className="text-slate-900 block font-bold">3. 가족관계증명서 (상세)</strong>
                <span className="text-slate-600">미혼/기혼 여부, 부모 및 자녀 관계 확인 (상세증명서 발급)</span>
              </div>
              <div className="bg-white p-3.5 rounded-xl border border-amber-100 space-y-1">
                <strong className="text-slate-900 block font-bold">4. 소득 및 자산 확인 서류</strong>
                <span className="text-slate-600">소득금액증명원, 건강보험자격득실확인서, 재산세 과세증명서</span>
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: Income/Asset Criteria */}
        {activeTab === 'types' && (
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4 text-xs sm:text-sm">
            <h4 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
              <Award className="w-4 h-4 text-blue-600" />
              2026년 공공임대·분양주택 자산 및 자동차가액 기준표
            </h4>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-200/80 text-slate-800 text-xs font-bold">
                    <th className="p-2.5 rounded-l-lg">구분</th>
                    <th className="p-2.5">총자산가액 기준</th>
                    <th className="p-2.5">보유 자동차가액 기준</th>
                    <th className="p-2.5 rounded-r-lg">소득 기준 (도시근로자)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-700 text-xs">
                  <tr>
                    <td className="p-2.5 font-bold text-slate-900">국민임대주택</td>
                    <td className="p-2.5">3억 4,500만원 이하</td>
                    <td className="p-2.5">3,708만원 이하</td>
                    <td className="p-2.5">가구원수별 월평균 70% 이하</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 font-bold text-slate-900">행복주택 (청년)</td>
                    <td className="p-2.5">2억 7,300만원 이하</td>
                    <td className="p-2.5">3,708만원 이하</td>
                    <td className="p-2.5">본인 소득 100% 이하</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 font-bold text-slate-900">행복주택 (신혼)</td>
                    <td className="p-2.5">3억 4,500만원 이하</td>
                    <td className="p-2.5">3,708만원 이하</td>
                    <td className="p-2.5">100% 이하 (맞벌이 120%)</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 font-bold text-slate-900">신혼희망타운(분양)</td>
                    <td className="p-2.5">3억 7,900만원 이하</td>
                    <td className="p-2.5">해당 없음</td>
                    <td className="p-2.5">130% 이하 (맞벌이 140%)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* Callout Notice */}
      <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm">
        <p className="text-slate-700">
          정확한 청약 정보와 최종 공고문은 <strong>LH청약플러스 공식 사이트(apply.lh.or.kr)</strong>에서
          반드시 재확인하시기 바랍니다.
        </p>
        <a
          href="https://apply.lh.or.kr"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 bg-blue-700 hover:bg-blue-800 text-white font-bold px-4 py-2 rounded-xl shrink-0 transition-colors shadow-xs"
        >
          <span>LH청약플러스 공식사이트</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
};
