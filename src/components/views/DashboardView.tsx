import React from 'react';
import {
  FileText,
  FileSpreadsheet,
  Clock,
  HelpCircle,
  BookOpen,
  ChevronRight,
  Download
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const DashboardView: React.FC = () => {
  const { navigateTo, subjects, papers } = useApp();

  return (
    <div className="space-y-6 pb-12 animate-in fade-in duration-500">
      
      {/* Title & Subtitle */}
      <div className="bg-surface-light rounded-3xl p-8 border border-brand-border shadow-academic text-center">
        <h1 className="text-3xl font-black text-brand-text tracking-tight mb-2">
          GATE Knowledge Library
        </h1>
        <p className="text-sm font-semibold text-brand-dark uppercase tracking-widest flex items-center justify-center gap-3">
          <span>Notes</span>
          <span>&bull;</span>
          <span>Formulae</span>
          <span>&bull;</span>
          <span>Previous Year Questions</span>
          <span>&bull;</span>
          <span>Solutions</span>
        </p>
      </div>

      {/* 4 Primary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { id: 'notes', label: 'NOTES', icon: FileText, desc: 'Subject-wise theory & handbooks' },
          { id: 'formulas', label: 'FORMULAE', icon: FileSpreadsheet, desc: 'Key equations & relationships' },
          { id: 'pyq', label: 'PREVIOUS YEAR PAPERS', icon: Clock, desc: 'Original exam papers (2007-2025)' },
          { id: 'question-bank', label: 'QUESTION SOLUTIONS', icon: HelpCircle, desc: 'Step-by-step detailed answers' },
        ].map((card) => (
          <div
            key={card.id}
            onClick={() => navigateTo(card.id as any)}
            className="bg-surface-light rounded-2xl p-6 border border-brand-border shadow-academic hover:shadow-academic-hover cursor-pointer transition-all flex flex-col items-center text-center group"
          >
            <div className="w-12 h-12 rounded-2xl bg-brand-light text-brand-dark flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <card.icon size={24} />
            </div>
            <h3 className="font-bold text-brand-text mb-1">{card.label}</h3>
            <p className="text-xs text-slate-500">{card.desc}</p>
          </div>
        ))}
      </div>

      {/* Subjects */}
      <div className="bg-surface-light rounded-2xl p-6 border border-brand-border shadow-academic space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-brand-border">
          <h2 className="text-sm font-bold uppercase tracking-wider text-brand-text flex items-center gap-2">
            <BookOpen size={16} className="text-brand-dark" />
            <span>Subjects</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {subjects.map(subject => (
            <div
              key={subject.id}
              className="bg-white rounded-xl p-4 border border-brand-border hover:border-brand-dark transition-colors flex flex-col h-full"
            >
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold px-2 py-1 bg-brand-light text-brand-dark rounded-md border border-brand-border">
                    {subject.code}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-brand-text mb-1">{subject.name}</h3>
                <p className="text-xs text-slate-500 line-clamp-2">{subject.description}</p>
              </div>

              <div className="mt-4 pt-3 border-t border-brand-border grid grid-cols-2 gap-2 text-[11px] font-semibold">
                <button
                  onClick={() => navigateTo('notes', { subjectId: subject.id })}
                  className="py-1.5 px-2 rounded-lg bg-brand-light hover:bg-brand-primary text-brand-dark transition-colors flex items-center justify-center gap-1"
                >
                  <FileText size={12} /> Notes
                </button>
                <button
                  onClick={() => navigateTo('formulas', { subjectId: subject.id })}
                  className="py-1.5 px-2 rounded-lg bg-brand-light hover:bg-brand-primary text-brand-dark transition-colors flex items-center justify-center gap-1"
                >
                  <FileSpreadsheet size={12} /> Formulae
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Previous Year Papers */}
      <div className="bg-surface-light rounded-2xl p-6 border border-brand-border shadow-academic space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-brand-border">
          <h2 className="text-sm font-bold uppercase tracking-wider text-brand-text flex items-center gap-2">
            <Clock size={16} className="text-brand-dark" />
            <span>Previous Year Papers</span>
          </h2>
          <button
            onClick={() => navigateTo('pyq')}
            className="text-xs font-semibold text-brand-dark hover:underline flex items-center gap-1"
          >
            <span>View All Papers</span>
            <ChevronRight size={14} />
          </button>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-9 gap-3">
          {papers.map(p => (
            <div
              key={p.id}
              onClick={() => navigateTo('pyq-paper', { paperYear: p.year })}
              className="p-3 rounded-xl bg-brand-light border border-brand-border hover:border-brand-dark hover:bg-brand-primary/20 cursor-pointer transition-all text-center group"
            >
              <div className="text-sm font-bold text-brand-text">
                {p.year}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
