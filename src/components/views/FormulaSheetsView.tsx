import React, { useState } from 'react';
import {
  FileSpreadsheet,
  BookOpen,
  FolderTree,
  Search,
  Bookmark,
  ChevronRight,
  Calculator,
  Download,
  Filter
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { Formula } from '../../types';
import { BookmarkButton } from '../common/BookmarkButton';
import { Breadcrumbs } from '../common/Breadcrumbs';

export const FormulaSheetsView: React.FC = () => {
  const {
    formulas,
    subjects,
    topics,
    navigateTo,
    routeParams
  } = useApp();

  const [selectedSubjectId, setSelectedSubjectId] = useState<string>(routeParams.subjectId || 'subj-digital');
  const [selectedTopicId, setSelectedTopicId] = useState<string>(routeParams.topicId || 'all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const currentSubject = subjects.find(s => s.id === selectedSubjectId) || subjects[0];
  const subjectTopics = topics.filter(t => t.subjectId === currentSubject.id);

  // Filtered formulas
  const displayedFormulas = formulas.filter(f => {
    if (f.subjectId !== selectedSubjectId) return false;
    if (selectedTopicId !== 'all' && f.topicId !== selectedTopicId) return false;
    if (searchQuery.trim()) {
      const match = `${f.formulaName} ${f.latex} ${f.whenToUse} ${f.relatedConcept}`.toLowerCase();
      if (!match.includes(searchQuery.toLowerCase())) return false;
    }
    return true;
  });

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      <Breadcrumbs items={[{ label: 'Formula Sheets' }]} />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-brand-border dark:border-surface-borderDark">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2.5">
            <FileSpreadsheet className="text-brand-dark dark:text-brand-primary" size={24} />
            GATE Chapter-Wise Formula Repository
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Complete syllabus formulas with variable meanings, conditions of validity, and linked GATE questions.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-mono font-semibold px-3 py-1.5 rounded-lg bg-brand-soft dark:bg-brand-dark/30 text-brand-dark dark:text-brand-primary">
            {formulas.length} Total Invariants
          </span>
        </div>
      </div>

      {/* Subject Selector Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1">
        {subjects.map(s => {
          const isSelected = s.id === selectedSubjectId;
          const formulaCount = formulas.filter(f => f.subjectId === s.id).length;

          return (
            <button
              key={s.id}
              onClick={() => {
                setSelectedSubjectId(s.id);
                setSelectedTopicId('all');
              }}
              className={`flex-shrink-0 px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                isSelected
                  ? 'bg-brand-dark text-white shadow-sm ring-2 ring-brand-primary'
                  : 'bg-surface-light dark:bg-surface-cardDark text-slate-600 dark:text-slate-300 hover:bg-brand-soft border border-brand-border dark:border-surface-borderDark'
              }`}
            >
              <span>{s.name}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isSelected ? 'bg-white/20' : 'bg-slate-100 dark:bg-surface-borderDark'}`}>
                {formulaCount}
              </span>
            </button>
          );
        })}
      </div>

      {/* Sub-Filters: Topic Filter & Instant Search */}
      <div className="bg-surface-light dark:bg-surface-cardDark rounded-2xl p-4 border border-brand-border dark:border-surface-borderDark shadow-academic flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <span className="text-slate-400 font-medium">Topic Filter:</span>
          <select
            value={selectedTopicId}
            onChange={e => setSelectedTopicId(e.target.value)}
            className="p-2 rounded-lg bg-brand-light dark:bg-surface-dark border border-brand-border font-medium text-slate-700 dark:text-slate-200 outline-hidden flex-1 sm:flex-initial"
          >
            <option value="all">All Topics in {currentSubject.name}</option>
            {subjectTopics.map(t => (
              <option key={t.id} value={t.id}>{t.title}</option>
            ))}
          </select>
        </div>

        <div className="relative w-full sm:w-64">
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Search formulas by name or law..."
            className="w-full pl-8 pr-3 py-2 rounded-lg bg-brand-light dark:bg-surface-dark border border-brand-border font-medium text-slate-700 dark:text-slate-200 outline-hidden"
          />
          <Search size={14} className="absolute left-2.5 top-2.5 text-slate-400" />
        </div>
      </div>

      {/* Formulas Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {displayedFormulas.length === 0 ? (
          <div className="col-span-2 p-10 rounded-2xl bg-surface-light dark:bg-surface-cardDark border border-brand-border text-center text-xs text-slate-500">
            No formulas found matching this topic filter. You can add more in Settings & Admin or clear search.
          </div>
        ) : (
          displayedFormulas.map(formula => (
            <div
              key={formula.id}
              className="bg-surface-light dark:bg-surface-cardDark rounded-2xl p-5 sm:p-6 border border-brand-border dark:border-surface-borderDark shadow-academic space-y-4 flex flex-col justify-between"
            >
              <div>
                {/* Header with Bookmark */}
                <div className="flex items-start justify-between gap-3 pb-3 border-b border-brand-soft dark:border-surface-borderDark">
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-brand-dark dark:text-brand-primary">
                      {formula.chapterTitle} &bull; {formula.topicTitle}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-slate-800 dark:text-slate-100 mt-0.5">
                      {formula.formulaName}
                    </h3>
                  </div>

                  <BookmarkButton
                    type="formula"
                    refId={formula.id}
                    title={formula.formulaName}
                    subtitle={formula.latex}
                  />
                </div>

                {/* Primary Math Box */}
                <div className="my-3 p-4 rounded-xl bg-brand-light/80 dark:bg-surface-dark border border-brand-border dark:border-surface-borderDark text-center">
                  <div className="font-mono text-base sm:text-lg font-bold text-brand-dark dark:text-brand-primary overflow-x-auto py-1">
                    {formula.latex}
                  </div>
                </div>

                {/* Meaning of Variables */}
                <div className="space-y-1.5">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Meaning of Variables:
                  </div>
                  <ul className="space-y-1 text-xs">
                    {formula.variables.map((v, i) => (
                      <li key={i} className="flex items-start gap-2 text-slate-600 dark:text-slate-300">
                        <code className="font-mono text-brand-dark dark:text-brand-primary font-semibold bg-brand-soft/40 px-1 rounded">
                          {v.symbol}
                        </code>
                        <span>&mdash; {v.meaning}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* When to Use & Conditions */}
                <div className="mt-3 pt-3 border-t border-brand-soft dark:border-surface-borderDark space-y-2 text-xs">
                  <div>
                    <strong className="text-slate-700 dark:text-slate-200">When to Use: </strong>
                    <span className="text-slate-600 dark:text-slate-400">{formula.whenToUse}</span>
                  </div>
                  {formula.conditions && (
                    <div>
                      <strong className="text-slate-700 dark:text-slate-200">Conditions / Validity: </strong>
                      <span className="text-slate-500">{formula.conditions}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Related Concept & PYQ Links */}
              <div className="pt-3 border-t border-brand-soft dark:border-surface-borderDark flex flex-wrap items-center justify-between gap-2 text-[11px]">
                <span className="text-slate-500">
                  Tested in: <strong className="text-brand-dark dark:text-brand-primary">{formula.relatedPYQ}</strong>
                </span>

                <button
                  onClick={() => navigateTo('notes', { topicId: formula.topicId, subjectId: formula.subjectId })}
                  className="text-brand-dark dark:text-brand-primary font-semibold hover:underline flex items-center gap-1"
                >
                  <span>Study in Notes</span>
                  <ChevronRight size={12} />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
