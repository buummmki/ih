import React, { useState } from 'react';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, Clock, Award, Bell } from 'lucide-react';
import { SubscriptionNotice } from '../types';

interface NoticeCalendarProps {
  notices: SubscriptionNotice[];
  onSelectNotice: (notice: SubscriptionNotice) => void;
}

export const NoticeCalendar: React.FC<NoticeCalendarProps> = ({ notices, onSelectNotice }) => {
  const [currentMonth, setCurrentMonth] = useState<string>('2026.09');

  const daysInMonth = 30; // Sept 2026

  // Group events by day of Sept 2026
  const eventsByDay: { [day: number]: { start: SubscriptionNotice[]; end: SubscriptionNotice[]; winner: SubscriptionNotice[] } } = {};

  for (let i = 1; i <= daysInMonth; i++) {
    eventsByDay[i] = { start: [], end: [], winner: [] };
  }

  notices.forEach((notice) => {
    // Check start date in 09
    if (notice.startDate.includes('2026.09')) {
      const day = parseInt(notice.startDate.split('.')[2], 10);
      if (eventsByDay[day]) eventsByDay[day].start.push(notice);
    }
    // Check end date in 09
    if (notice.endDate.includes('2026.09')) {
      const day = parseInt(notice.endDate.split('.')[2], 10);
      if (eventsByDay[day]) eventsByDay[day].end.push(notice);
    }
    // Check winner date in 09
    if (notice.winnerDate.includes('2026.09')) {
      const day = parseInt(notice.winnerDate.split('.')[2], 10);
      if (eventsByDay[day]) eventsByDay[day].winner.push(notice);
    }
  });

  return (
    <div className="bg-white rounded-3xl p-6 shadow-xl border border-slate-100 space-y-5">
      {/* Calendar Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-3 border-b border-slate-100">
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-2xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold">
            <CalendarIcon className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-slate-900 text-lg">2026년 9월 청약 캘린더</h3>
            <p className="text-xs text-slate-500">접수시작일, 마감일, 당첨발표일 일정표</p>
          </div>
        </div>

        {/* Legend */}
        <div className="flex items-center gap-3 text-xs font-semibold">
          <span className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            <span className="text-slate-600">접수시작</span>
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
            <span className="text-slate-600">접수마감</span>
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded-full bg-purple-500" />
            <span className="text-slate-600">당첨자발표</span>
          </span>
        </div>
      </div>

      {/* Mini Calendar Grid */}
      <div className="grid grid-cols-7 gap-1.5 text-center text-xs">
        {['일', '월', '화', '수', '목', '금', '토'].map((day, idx) => (
          <div
            key={day}
            className={`py-1.5 font-bold ${
              idx === 0 ? 'text-rose-500' : idx === 6 ? 'text-blue-500' : 'text-slate-600'
            }`}
          >
            {day}
          </div>
        ))}

        {/* Offset for Sept 1, 2026 (Tuesday = 2 empty cells) */}
        <div className="p-2 rounded-xl bg-slate-50/50" />
        <div className="p-2 rounded-xl bg-slate-50/50" />

        {Array.from({ length: daysInMonth }).map((_, i) => {
          const dayNum = i + 1;
          const events = eventsByDay[dayNum];
          const hasEvents =
            events && (events.start.length > 0 || events.end.length > 0 || events.winner.length > 0);

          return (
            <div
              key={dayNum}
              className={`p-1.5 min-h-[64px] rounded-xl border text-left flex flex-col justify-between transition-all ${
                hasEvents
                  ? 'bg-blue-50/50 border-blue-200 hover:border-blue-400 hover:bg-blue-50 cursor-pointer shadow-2xs'
                  : 'bg-slate-50/50 border-slate-100 text-slate-700'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-bold text-[11px] text-slate-800">{dayNum}</span>
                {dayNum === 1 && (
                  <span className="text-[9px] bg-rose-500 text-white px-1 rounded-sm font-bold">
                    오늘
                  </span>
                )}
              </div>

              <div className="space-y-0.5 mt-0.5">
                {events?.end.map((n) => (
                  <div
                    key={n.id}
                    onClick={() => onSelectNotice(n)}
                    className="text-[9px] font-bold text-rose-800 bg-rose-100 hover:bg-rose-200 px-1 py-0.5 rounded truncate"
                    title={`[마감] ${n.title}`}
                  >
                    마감: {n.category}
                  </div>
                ))}
                {events?.start.map((n) => (
                  <div
                    key={n.id}
                    onClick={() => onSelectNotice(n)}
                    className="text-[9px] font-bold text-emerald-800 bg-emerald-100 hover:bg-emerald-200 px-1 py-0.5 rounded truncate"
                    title={`[접수시작] ${n.title}`}
                  >
                    시작: {n.category}
                  </div>
                ))}
                {events?.winner.map((n) => (
                  <div
                    key={n.id}
                    onClick={() => onSelectNotice(n)}
                    className="text-[9px] font-bold text-purple-800 bg-purple-100 hover:bg-purple-200 px-1 py-0.5 rounded truncate"
                    title={`[당첨발표] ${n.title}`}
                  >
                    발표: {n.region}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
