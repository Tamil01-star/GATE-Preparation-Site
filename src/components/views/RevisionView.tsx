import React, { useState } from 'react';
import {
  Sparkles,
  BookOpen,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Calculator,
  ChevronRight,
  RotateCcw,
  ArrowRight
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { Breadcrumbs } from '../common/Breadcrumbs';

export const RevisionView: React.FC = () => {
  const {
    subjects,
    topics,
    notes,
    formulas,
    userProgress,
    markTopicRevision,
    navigateTo
  } = useApp();

  const [selectedSubjectId, setSelectedSubjectId] = useState<string>('subj-digital');
  const [selectedTopicId, setSelectedTopicId] = useState<string>('top-dig-301');

  const currentSubject = subjects.find(s => s.id === selectedSubjectId) || subjects[0];
  const subjectTopics = topics.filter(t => t.subjectId === currentSubject.id);
  const currentTopic = topics.find(t => t.id === selectedTopicId) || subjectTopics[0] || topics[0];
  const currentNote = notes.find(n => n.topicId === currentTopic?.id) || notes[0];
  const topicFormulas = formulas.filter(f => f.topicId === currentTopic?.id);

  const isRevisionMarked = userProgress.revisionCompletedTopicIds.includes(currentTopic.id);

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <Breadcrumbs items={[{ label: 'Revision Mode' }]} />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-brand-border dark:border-surface-borderDark">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2.5">
            <Sparkles className="text-brand-dark dark:text-brand-primary" size={24} />
            High-Yield Revision Mode
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Distraction-free high-retention review: essential formulas, key shortcuts, common pitfalls, and quick recall points.
          </p>
        </div>

        <button
          onClick={() => markTopicRevision(currentTopic.id)}
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-colors ${
            isRevisionMarked
              ? 'bg-brand-primary text-slate-900 font-bold'
              : 'bg-brand-soft text-brand-dark dark:bg-brand-dark/30 dark:text-brand-primary hover:bg-brand-primary/30'
          }`}
        >
          <CheckCircle2 size={15} />
          <span>{isRevisionMarked ? 'Revision Complete' : 'Mark Topic as Revised'}</span>
        </button>
      </div>

      {/* Selectors Bar */}
      <div className="bg-surface-light dark:bg-surface-cardDark rounded-2xl p-4 border border-brand-border dark:border-surface-borderDark shadow-academic flex flex-col sm:flex-row items-center gap-3 text-xs">
        <div className="flex items-center gap-2 w-full sm:w-1/2">
          <span className="text-slate-400 font-medium">Subject:</span>
          <select
            value={selectedSubjectId}
            onChange={e => {
              setSelectedSubjectId(e.target.value);
              const firstTopic = topics.find(t => t.subjectId === e.target.value);
              if (firstTopic) setSelectedTopicId(firstTopic.id);
            }}
            className="w-full p-2 rounded-lg bg-brand-light dark:bg-surface-dark border border-brand-border font-medium text-slate-700 dark:text-slate-200 outline-hidden"
          >
            {subjects.map(s => (
              <option key={s.id} value={s.id}>{s.name}</option>
            ))}
          </select>
        </div>

        <div className="flex items-center gap-2 w-full sm:w-1/2">
          <span className="text-slate-400 font-medium">Topic:</span>
          <select
            value={selectedTopicId}
            onChange={e => setSelectedTopicId(e.target.value)}
            className="w-full p-2 rounded-lg bg-brand-light dark:bg-surface-dark border border-brand-border font-medium text-slate-700 dark:text-slate-200 outline-hidden"
          >
            {subjectTopics.map(t => (
              <option key={t.id} value={t.id}>{t.title}</option>
            ))}
          </select>
        </div>
      </div>

      {/* High-Yield Recall Card Deck */}
      <div className="space-y-6">
        {/* Flashcard 1: Quick Revision Summary */}
        <div className="bg-surface-light dark:bg-surface-cardDark rounded-2xl p-6 border border-brand-border dark:border-surface-borderDark shadow-academic space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-dark dark:text-brand-primary">
            <Sparkles size={16} />
            <span>Core Takeaways & 60-Second Summary</span>
          </div>
          <div className="p-4 rounded-xl bg-brand-soft/40 dark:bg-brand-dark/20 border border-brand-primary/30 space-y-2 text-xs text-brand-dark dark:text-slate-200">
            {currentNote?.quickRevisionSummary?.length > 0 ? (
              currentNote.quickRevisionSummary.map((sum, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className="font-bold">&bull;</span>
                  <span>{sum}</span>
                </div>
              ))
            ) : (
              <div>Review the core definitions and principles for {currentTopic.title}.</div>
            )}
          </div>
        </div>

        {/* Flashcard 2: Critical Formulas */}
        {topicFormulas.length > 0 && (
          <div className="bg-surface-light dark:bg-surface-cardDark rounded-2xl p-6 border border-brand-border dark:border-surface-borderDark shadow-academic space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-dark dark:text-brand-primary">
              <Calculator size={16} />
              <span>Critical Equations to Memorize</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {topicFormulas.map(f => (
                <div key={f.id} className="p-4 rounded-xl bg-brand-light/60 dark:bg-surface-dark border border-brand-border">
                  <div className="text-xs font-bold text-slate-800 dark:text-slate-100">{f.formulaName}</div>
                  <div className="font-mono text-sm font-bold text-brand-dark dark:text-brand-primary my-1.5 py-1">
                    {f.latex}
                  </div>
                  <div className="text-[11px] text-slate-500">{f.whenToUse}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Flashcard 3: Shortcuts vs Pitfalls */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Shortcuts */}
          <div className="bg-surface-light dark:bg-surface-cardDark rounded-2xl p-5 border border-brand-border dark:border-surface-borderDark shadow-academic space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              <Lightbulb size={15} />
              <span>Exam Shortcuts & Speed Hacks</span>
            </div>
            <div className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
              {currentNote?.shortcutsAndTricks?.map((trick, i) => (
                <div key={i} className="p-3 rounded-xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200/50">
                  {trick}
                </div>
              ))}
            </div>
          </div>

          {/* Pitfalls */}
          <div className="bg-surface-light dark:bg-surface-cardDark rounded-2xl p-5 border border-brand-border dark:border-surface-borderDark shadow-academic space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
              <AlertTriangle size={15} />
              <span>Common Pitfalls & Mistakes</span>
            </div>
            <div className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
              {currentNote?.commonMistakes?.map((mistake, i) => (
                <div key={i} className="p-3 rounded-xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200/50">
                  {mistake}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="p-5 rounded-2xl bg-brand-light dark:bg-surface-cardDark border border-brand-border flex items-center justify-between">
          <div>
            <div className="text-xs font-bold text-slate-800 dark:text-slate-100">Ready to test retention?</div>
            <div className="text-[11px] text-slate-500">Solve quick practice questions for this revised topic.</div>
          </div>
          <button
            onClick={() => navigateTo('practice', { topicId: currentTopic.id, subjectId: currentSubject.id })}
            className="px-4 py-2 rounded-xl bg-brand-dark hover:bg-brand-hover text-white text-xs font-semibold flex items-center gap-2 transition-colors"
          >
            <span>Practice Now</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};
