import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Search, Sparkles, MessageCircleQuestion } from 'lucide-react';
import { FAQS } from '../data/mockData';
import { FaqItem } from '../types';

export const FaqSection: React.FC = () => {
  const [activeFaqId, setActiveFaqId] = useState<string | null>(FAQS[0].id);
  const [faqCategory, setFaqCategory] = useState<string>('전체');
  const [faqSearch, setFaqSearch] = useState<string>('');

  const categories = ['전체', '자격조건', '신청방법', '서류준비', '당첨/입주'];

  const toggleFaq = (id: string) => {
    setActiveFaqId(activeFaqId === id ? null : id);
  };

  const filteredFaqs = FAQS.filter((faq) => {
    const matchesCategory = faqCategory === '전체' || faq.category === faqCategory;
    const matchesSearch =
      faqSearch.trim() === '' ||
      faq.question.toLowerCase().includes(faqSearch.toLowerCase()) ||
      faq.answer.toLowerCase().includes(faqSearch.toLowerCase()) ||
      faq.tags.some((tag) => tag.toLowerCase().includes(faqSearch.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-white rounded-3xl p-6 shadow-xl border border-slate-100 space-y-5">
      {/* FAQ Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
            ❓
          </div>
          <div>
            <h3 className="font-bold text-slate-900 text-lg leading-tight">
              자주 묻는 질문 (FAQ)
            </h3>
            <p className="text-xs text-slate-500">청약 전 꼭 알아야 할 핵심 질의응답</p>
          </div>
        </div>
      </div>

      {/* Mini Search & Category Chips */}
      <div className="space-y-2">
        <div className="relative">
          <input
            type="text"
            value={faqSearch}
            onChange={(e) => setFaqSearch(e.target.value)}
            placeholder="궁금한 질문 키워드 검색..."
            className="w-full pl-8 pr-3 py-1.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-500 text-slate-800"
          />
          <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" />
        </div>

        <div className="flex items-center gap-1 overflow-x-auto pb-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFaqCategory(cat)}
              className={`px-2.5 py-1 rounded-lg text-[11px] font-bold whitespace-nowrap transition-colors ${
                faqCategory === cat
                  ? 'bg-blue-800 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* FAQ Accordion Items */}
      <div className="space-y-2.5">
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((faq) => {
            const isOpen = activeFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-blue-300 bg-blue-50/30 shadow-xs'
                    : 'border-slate-200/80 bg-slate-50/50 hover:bg-slate-50'
                }`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-3.5 sm:p-4 text-left flex items-start justify-between gap-3 focus:outline-none"
                >
                  <div className="space-y-1">
                    <span className="inline-block text-[10px] font-bold text-blue-700 bg-blue-100/70 px-2 py-0.2 rounded-md">
                      {faq.category}
                    </span>
                    <h4 className="font-bold text-slate-900 text-xs sm:text-sm leading-snug">
                      {faq.question}
                    </h4>
                  </div>
                  <div className="shrink-0 text-slate-400 mt-1">
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-blue-600" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 pt-1 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-blue-100/60 bg-white/70">
                    <p className="whitespace-pre-line">{faq.answer}</p>
                    <div className="flex items-center gap-1.5 mt-3 pt-2 border-t border-slate-100 flex-wrap">
                      <span className="text-[10px] text-slate-400 font-semibold">키워드:</span>
                      {faq.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <div className="text-center py-8 text-xs text-slate-500">
            검색 결과와 일치하는 FAQ 항목이 없습니다.
          </div>
        )}
      </div>

      {/* Helpful Direct Inquiry Widget */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-2xl border border-blue-200/70 space-y-2">
        <div className="flex items-center gap-2 text-blue-900 font-bold text-xs">
          <MessageCircleQuestion className="w-4 h-4 text-blue-600" />
          <span>추가 청약 상담이 필요하신가요?</span>
        </div>
        <p className="text-[11px] text-slate-600 leading-normal">
          공고별 구체적 소득 산정 및 특별공급 배점 문의는 한국토지주택공사 대표 콜센터(1600-1004)에서
          전문 상담원과 1:1 상담이 가능합니다.
        </p>
      </div>
    </div>
  );
};
