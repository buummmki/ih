import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, ArrowRight, RotateCcw, Home, Award, ChevronRight } from 'lucide-react';
import { NoticeCategory } from '../types';

interface EligibilityCheckerProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectCategoryFilter: (category: NoticeCategory) => void;
}

export const EligibilityChecker: React.FC<EligibilityCheckerProps> = ({
  isOpen,
  onClose,
  onSelectCategoryFilter
}) => {
  const [step, setStep] = useState<number>(1);
  const [ageGroup, setAgeGroup] = useState<'youth' | 'newlywed' | 'multiChild' | 'senior' | 'general'>('youth');
  const [homelessYears, setHomelessYears] = useState<'under1' | '1to3' | 'over3'>('1to3');
  const [incomeRatio, setIncomeRatio] = useState<'under50' | 'under70' | 'under100' | 'over100'>('under70');
  const [subscriptionCount, setSubscriptionCount] = useState<'under6' | '6to11' | '12to23' | 'over24'>('12to23');

  if (!isOpen) return null;

  const handleReset = () => {
    setStep(1);
    setAgeGroup('youth');
    setHomelessYears('1to3');
    setIncomeRatio('under70');
    setSubscriptionCount('12to23');
  };

  const calculateResult = () => {
    const results: {
      category: NoticeCategory;
      title: string;
      matchRate: number;
      badge: string;
      description: string;
      tips: string;
    }[] = [];

    if (ageGroup === 'youth') {
      results.push({
        category: '청년안심',
        title: '청년 매입·전세임대주택 / 청년안심주택',
        matchRate: 98,
        badge: '최고 적합',
        description: '만 19~39세 미혼 청년을 위한 풀옵션 역세권 임대주택. 시세의 40~50% 수준의 저렴한 보증금과 월세.',
        tips: '1순위(수급자·차상위) 또는 2·3순위 소득 100% 이하 가구에 최적입니다.'
      });
      results.push({
        category: '행복주택',
        title: '청년 계층 행복주택',
        matchRate: 92,
        badge: '적합',
        description: '직주근접형 역세권 공공임대주택. 최대 6년 거주 가능하며 보증금 전환 이율이 우수합니다.',
        tips: '청약통장 납입 횟수가 적어도 신청 가능한 단지가 많습니다.'
      });
    } else if (ageGroup === 'newlywed') {
      results.push({
        category: '신혼희망타운',
        title: '신혼희망타운 (공공분양 & 공공임대)',
        matchRate: 97,
        badge: '강력 추천',
        description: '혼인 7년 이내 또는 예비신혼부부 전용 특화 단지. 연 1.3% 고정금리 전용 주택담보대출 지원.',
        tips: '1단계(혼인 2년 이내 및 예비부부 가점제 30%)와 2단계 잔여물량을 노려보세요.'
      });
      results.push({
        category: '행복주택',
        title: '신혼부부형 행복주택 (전용 44㎡ ~ 59㎡)',
        matchRate: 88,
        badge: '적합',
        description: '자녀가 있는 경우 최대 10년까지 거주 가능한 안정적인 공공임대주택.',
        tips: '맞벌이 소득 120%까지 기준이 완화 적용됩니다.'
      });
    } else if (ageGroup === 'senior') {
      results.push({
        category: '영구임대',
        title: '영구임대 및 고령자복지주택',
        matchRate: 96,
        badge: '최고 적합',
        description: '만 65세 이상 무주택 고령자를 위한 무장애 설계 및 복합 복지서비스 제공 주택.',
        tips: '생계·의료 수급자 및 소득 70% 이하 어르신 우선 공급.'
      });
      results.push({
        category: '국민임대',
        title: '국민임대주택 (시니어 우선공급)',
        matchRate: 90,
        badge: '적합',
        description: '최대 30년 동안 이사 걱정 없이 저렴하게 거주 가능한 대표 공공임대.',
        tips: '해당 거주지 구·군 내 장기 거주자 가점이 높습니다.'
      });
    } else {
      // General or MultiChild
      if (homelessYears === 'over3' && subscriptionCount === 'over24') {
        results.push({
          category: '공공분양',
          title: '3기 신도시 및 수도권 공공분양 일반공급',
          matchRate: 95,
          badge: '1순위 유력',
          description: '시세 대비 60~80% 분양가의 내 집 마련 기회. 3년 이상 무주택 + 통장 저축총액 순 선정.',
          tips: '매월 10만원 인정금액 기준 1,200만~1,800만원 이상 납입자가 당첨권입니다.'
        });
      }
      results.push({
        category: '국민임대',
        title: '국민임대주택 (전용 39㎡ ~ 59㎡)',
        matchRate: 91,
        badge: '추천',
        description: '무주택 세대구성원을 위한 최장 30년 장기 안정 거주 주택.',
        tips: '소득 50% 이하 가구에 50㎡ 미만 주택이 우선 공급됩니다.'
      });
    }

    return results;
  };

  const results = calculateResult();

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5 animate-fade-in">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-blue-500/30 border border-blue-400/40 flex items-center justify-center text-amber-300">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold">내게 맞는 LH 청약 30초 간이진단</h3>
              <p className="text-xs text-blue-200">조건에 딱 맞는 최적의 LH 주택 유형 추천</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6">
          {step < 5 ? (
            <div className="space-y-6">
              {/* Progress Indicator */}
              <div className="flex items-center justify-between text-xs text-slate-500 font-semibold mb-2">
                <span>질문 {step} / 4</span>
                <div className="flex gap-1.5">
                  {[1, 2, 3, 4].map((s) => (
                    <span
                      key={s}
                      className={`h-1.5 rounded-full transition-all ${
                        s === step ? 'w-6 bg-blue-600' : s < step ? 'w-3 bg-blue-300' : 'w-3 bg-slate-200'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Question Step 1 */}
              {step === 1 && (
                <div className="space-y-4">
                  <h4 className="font-bold text-slate-900 text-base sm:text-lg">
                    1. 귀하의 연령대 및 가구 유형은 어떻게 되시나요?
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {[
                      { key: 'youth', label: '청년 (만 19세~39세 미혼)', desc: '대학생, 취준생, 사회초년생' },
                      { key: 'newlywed', label: '신혼부부 / 예비신혼', desc: '혼인 7년 이내 또는 1년 내 결혼 예정' },
                      { key: 'multiChild', label: '다자녀 / 일반가구', desc: '미성년 자녀 2인 이상 또는 일반 세대' },
                      { key: 'senior', label: '고령자 (만 65세 이상)', desc: '시니어 및 어르신 가구' }
                    ].map((opt) => (
                      <button
                        key={opt.key}
                        onClick={() => {
                          setAgeGroup(opt.key as any);
                          setStep(2);
                        }}
                        className={`p-4 rounded-2xl border text-left transition-all ${
                          ageGroup === opt.key
                            ? 'border-blue-600 bg-blue-50/60 ring-2 ring-blue-200'
                            : 'border-slate-200 hover:bg-slate-50'
                        }`}
                      >
                        <div className="font-bold text-slate-900 text-sm mb-1">{opt.label}</div>
                        <div className="text-xs text-slate-500">{opt.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Question Step 2 */}
              {step === 2 && (
                <div className="space-y-4">
                  <h4 className="font-bold text-slate-900 text-base sm:text-lg">
                    2. 세대원 전원의 무주택 기간은 어느 정도인가요?
                  </h4>
                  <div className="grid grid-cols-1 gap-2.5">
                    {[
                      { key: 'under1', label: '1년 미만 (최근 주택 처분 등)', desc: '단기 무주택 상태' },
                      { key: '1to3', label: '1년 이상 ~ 3년 미만', desc: '안정적인 무주택 유지 가구' },
                      { key: 'over3', label: '3년 이상 연속 무주택 (만 30세 이후)', desc: '공공분양 및 국민임대 1순위 최우선 조건' }
                    ].map((opt) => (
                      <button
                        key={opt.key}
                        onClick={() => {
                          setHomelessYears(opt.key as any);
                          setStep(3);
                        }}
                        className={`p-4 rounded-2xl border text-left transition-all ${
                          homelessYears === opt.key
                            ? 'border-blue-600 bg-blue-50/60 ring-2 ring-blue-200'
                            : 'border-slate-200 hover:bg-slate-50'
                        }`}
                      >
                        <div className="font-bold text-slate-900 text-sm mb-1">{opt.label}</div>
                        <div className="text-xs text-slate-500">{opt.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Question Step 3 */}
              {step === 3 && (
                <div className="space-y-4">
                  <h4 className="font-bold text-slate-900 text-base sm:text-lg">
                    3. 가구 월평균 소득 수준은 어느 정도인가요?
                  </h4>
                  <div className="grid grid-cols-1 gap-2.5">
                    {[
                      { key: 'under50', label: '도시근로자 월평균 소득 50% 이하', desc: '1인가구 약 234만원 / 3인가구 약 350만원 이하' },
                      { key: 'under70', label: '월평균 소득 50% 초과 ~ 70% 이하', desc: '국민임대 및 행복주택 주력 지원 구간' },
                      { key: 'under100', label: '월평균 소득 70% 초과 ~ 100% 이하', desc: '청년·신혼 행복주택 및 공공분양 신청 가능' },
                      { key: 'over100', label: '월평균 소득 100% 초과 (맞벌이 130~140%)', desc: '신혼희망타운 및 민간사전청약 최적' }
                    ].map((opt) => (
                      <button
                        key={opt.key}
                        onClick={() => {
                          setIncomeRatio(opt.key as any);
                          setStep(4);
                        }}
                        className={`p-4 rounded-2xl border text-left transition-all ${
                          incomeRatio === opt.key
                            ? 'border-blue-600 bg-blue-50/60 ring-2 ring-blue-200'
                            : 'border-slate-200 hover:bg-slate-50'
                        }`}
                      >
                        <div className="font-bold text-slate-900 text-sm mb-1">{opt.label}</div>
                        <div className="text-xs text-slate-500">{opt.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Question Step 4 */}
              {step === 4 && (
                <div className="space-y-4">
                  <h4 className="font-bold text-slate-900 text-base sm:text-lg">
                    4. 주택청약종합저축 통장 납입 횟수는?
                  </h4>
                  <div className="grid grid-cols-1 gap-2.5">
                    {[
                      { key: 'under6', label: '통장 없음 또는 6회 미만', desc: '청약통장 미보유자도 지원 가능한 행복주택/매입임대 추천' },
                      { key: '6to11', label: '6회 이상 ~ 11회 (지방 1순위 조건)', desc: '수도권 외 지역 1순위 충족' },
                      { key: '12to23', label: '12회 이상 ~ 23회 (수도권 1순위 조건)', desc: '수도권 공공분양 및 국민임대 1순위' },
                      { key: 'over24', label: '24회 이상 (2년 이상 장기 납입)', desc: '최상위 가점 충족' }
                    ].map((opt) => (
                      <button
                        key={opt.key}
                        onClick={() => {
                          setSubscriptionCount(opt.key as any);
                          setStep(5);
                        }}
                        className={`p-4 rounded-2xl border text-left transition-all ${
                          subscriptionCount === opt.key
                            ? 'border-blue-600 bg-blue-50/60 ring-2 ring-blue-200'
                            : 'border-slate-200 hover:bg-slate-50'
                        }`}
                      >
                        <div className="font-bold text-slate-900 text-sm mb-1">{opt.label}</div>
                        <div className="text-xs text-slate-500">{opt.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Back button */}
              {step > 1 && (
                <button
                  onClick={() => setStep(step - 1)}
                  className="text-xs font-semibold text-slate-500 hover:text-slate-800"
                >
                  ← 이전 질문으로
                </button>
              )}
            </div>
          ) : (
            /* Results Screen */
            <div className="space-y-6 animate-fade-in">
              <div className="text-center space-y-2 bg-emerald-50 p-5 rounded-3xl border border-emerald-200">
                <span className="inline-block p-3 rounded-full bg-emerald-500 text-white mb-1 shadow-sm">
                  <Award className="w-6 h-6" />
                </span>
                <h4 className="text-lg sm:text-xl font-black text-slate-900">
                  고객님께 가장 유리한 LH 맞춤 주택 유형
                </h4>
                <p className="text-xs sm:text-sm text-slate-600">
                  입력하신 조건(가구유형·소득분위·청약통장)을 분석한 결과입니다.
                </p>
              </div>

              {/* Result Cards */}
              <div className="space-y-3">
                {results.map((res, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl border border-blue-200 bg-blue-50/40 space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-full bg-blue-700 text-white text-xs font-bold">
                          {res.badge} ({res.matchRate}% 일치)
                        </span>
                        <strong className="text-slate-900 font-bold text-sm sm:text-base">
                          {res.title}
                        </strong>
                      </div>
                      <button
                        onClick={() => {
                          onSelectCategoryFilter(res.category);
                          onClose();
                        }}
                        className="text-xs font-bold text-blue-700 hover:text-blue-900 flex items-center gap-1 bg-white px-3 py-1.5 rounded-xl border border-blue-200 shadow-2xs"
                      >
                        <span>공고 바로보기</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {res.description}
                    </p>

                    <div className="text-xs text-blue-900 font-semibold bg-white/80 p-2.5 rounded-xl border border-blue-100 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span>{res.tips}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                <button
                  onClick={handleReset}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-800 bg-slate-100 px-3.5 py-2 rounded-xl transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  다시 진단하기
                </button>
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white text-xs sm:text-sm font-bold shadow-md transition-colors"
                >
                  확인 완료
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
