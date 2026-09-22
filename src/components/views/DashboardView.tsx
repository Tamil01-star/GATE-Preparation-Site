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
      <div className="bg-surface-light dark:bg-surface-cardDark dark:bg-surface-cardDark rounded-3xl p-8 border border-brand-soft dark:border-surface-borderDark dark:border-surface-borderDark shadow-academic text-center">
        <h1 className="text-3xl font-black text-slate-800 dark:text-slate-100 tracking-tight mb-2">
          GATE Knowledge Library
        </h1>
        <p className="text-sm font-semibold text-brand-dark dark:text-brand-primary dark:text-brand-primary uppercase tracking-widest flex items-center justify-center gap-3">
          <span>Notes</span>
          <span className="text-slate-400">&bull;</span>
          <span>Formulae</span>
          <span className="text-slate-400">&bull;</span>
          <span>Previous Year Questions</span>
          <span className="text-slate-400">&bull;</span>
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
            className="bg-surface-light dark:bg-surface-cardDark dark:bg-surface-cardDark rounded-2xl p-6 border border-brand-soft dark:border-surface-borderDark dark:border-surface-borderDark shadow-academic hover:shadow-academic-hover hover:border-brand-primary dark:hover:border-brand-primary cursor-pointer transition-all flex flex-col items-center text-center group"
          >
            <div className="w-12 h-12 rounded-2xl bg-brand-light/50 dark:bg-surface-dark dark:bg-surface-dark text-brand-dark dark:text-brand-primary dark:text-brand-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <card.icon size={24} />
            </div>
            <h3 className="font-bold text-slate-800 dark:text-slate-100 mb-1">{card.label}</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">{card.desc}</p>
          </div>
        ))}
      </div>

      {/* Subjects */}
      <div className="bg-surface-light dark:bg-surface-cardDark dark:bg-surface-cardDark rounded-2xl p-6 border border-brand-soft dark:border-surface-borderDark dark:border-surface-borderDark shadow-academic space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-brand-soft dark:border-surface-borderDark dark:border-surface-borderDark">
          <h2 className="text-sm font-bold uppercase tracking-wider text-slate-800 dark:text-slate-100 flex items-center gap-2">
            <BookOpen size={16} className="text-brand-dark dark:text-brand-primary dark:text-brand-primary" />
            <span>Subjects</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {subjects.map(subject => (
            <div
              key={subject.id}
              className="bg-white dark:bg-surface-dark rounded-xl p-4 border border-brand-soft dark:border-surface-borderDark dark:border-surface-borderDark hover:border-brand-dark dark:hover:border-brand-primary transition-colors flex flex-col h-full"
            >
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold px-2 py-1 bg-brand-light/50 dark:bg-surface-dark dark:bg-brand-dark/20 text-brand-dark dark:text-brand-primary dark:text-brand-primary rounded-md border border-brand-soft dark:border-surface-borderDark dark:border-surface-borderDark">
                    {subject.code}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-slate-800 dark:text-slate-100 mb-1">{subject.name}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">{subject.description}</p>
              </div>

              <div className="mt-4 pt-3 border-t border-brand-soft dark:border-surface-borderDark dark:border-surface-borderDark grid grid-cols-2 gap-2 text-[11px] font-semibold">
                <button
                  onClick={() => navigateTo('notes', { subjectId: subject.id })}
                  className="py-1.5 px-2 rounded-lg bg-brand-light/50 dark:bg-surface-dark dark:bg-surface-cardDark hover:bg-brand-primary dark:hover:bg-brand-primary/20 text-brand-dark dark:text-brand-primary dark:text-brand-primary transition-colors flex items-center justify-center gap-1 border border-transparent dark:border-surface-borderDark"
                >
                  <FileText size={12} /> Notes
                </button>
                <button
                  onClick={() => navigateTo('formulas', { subjectId: subject.id })}
                  className="py-1.5 px-2 rounded-lg bg-brand-light/50 dark:bg-surface-dark dark:bg-surface-cardDark hover:bg-brand-primary dark:hover:bg-brand-primary/20 text-brand-dark dark:text-brand-primary dark:text-brand-primary transition-colors flex items-center justify-center gap-1 border border-transparent dark:border-surface-borderDark"
                >
                  <FileSpreadsheet size={12} /> Formulae
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Previous Year Papers */}
      <div className="bg-surface-light dark:bg-surface-cardDark dark:bg-surface-cardDark rounded-2xl p-6 border border-brand-soft dark:border-surface-borderDark dark:border-surface-borderDark shadow-academic space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-brand-soft dark:border-surface-borderDark dark:border-surface-borderDark">
          <h2 className="text-sm font-bold uppercase tracking-wider text-slate-800 dark:text-slate-100 flex items-center gap-2">
            <Clock size={16} className="text-brand-dark dark:text-brand-primary dark:text-brand-primary" />
            <span>Previous Year Papers</span>
          </h2>
          <button
            onClick={() => navigateTo('pyq')}
            className="text-xs font-semibold text-brand-dark dark:text-brand-primary dark:text-brand-primary hover:underline flex items-center gap-1"
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
              className="p-3 rounded-xl bg-brand-light/50 dark:bg-surface-dark dark:bg-surface-dark border border-brand-soft dark:border-surface-borderDark dark:border-surface-borderDark hover:border-brand-dark dark:hover:border-brand-primary hover:bg-brand-primary/20 dark:hover:bg-brand-dark/30 cursor-pointer transition-all text-center group"
            >
              <div className="text-sm font-bold text-slate-800 dark:text-slate-100 group-hover:text-brand-dark dark:text-brand-primary dark:group-hover:text-brand-primary">
                {p.year}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
