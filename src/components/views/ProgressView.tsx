import React from 'react';
import {
  BarChart3,
  CheckCircle2,
  TrendingUp,
  Award,
  Sparkles,
  BookOpen,
  FileText,
  Clock,
  RotateCcw
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { ProgressBar } from '../common/ProgressBar';
import { Breadcrumbs } from '../common/Breadcrumbs';

export const ProgressView: React.FC = () => {
  const {
    subjects,
    units,
    topics,
    notes,
    questions,
    userProgress,
    navigateTo,
    markTopicCompleted
  } = useApp();

  const totalTopics = topics.length;
  const completedTopicsCount = userProgress.completedTopicIds.length;
  const totalSolved = Object.keys(userProgress.solvedQuestions).length;
  const totalCorrect = Object.values(userProgress.solvedQuestions).filter(s => s.isCorrect).length;
  const accuracy = totalSolved > 0 ? (totalCorrect / totalSolved) * 100 : 0;
  const revisionCount = userProgress.revisionCompletedTopicIds.length;

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <Breadcrumbs items={[{ label: 'Study Progress' }]} />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-brand-border dark:border-surface-borderDark">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2.5">
            <BarChart3 className="text-brand-dark dark:text-brand-primary" size={24} />
            Study Progress & Exam Preparedness
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Real-time tracking of syllabus completion, problem solving accuracy, and revision milestones.
          </p>
        </div>

        <button
          onClick={() => navigateTo('practice')}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-dark hover:bg-brand-hover text-white text-xs font-semibold shadow-xs"
        >
          <span>Take New Practice Test</span>
        </button>
      </div>

      {/* Primary Metrics Grid (Section 18) */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-surface-light dark:bg-surface-cardDark rounded-2xl p-5 border border-brand-border dark:border-surface-borderDark shadow-academic text-center">
          <div className="w-10 h-10 rounded-xl bg-brand-soft text-brand-dark dark:bg-brand-dark/30 dark:text-brand-primary flex items-center justify-center mx-auto mb-2">
            <CheckCircle2 size={20} />
          </div>
          <div className="text-2xl font-extrabold text-slate-800 dark:text-slate-100">
            {completedTopicsCount} / {totalTopics}
          </div>
          <div className="text-xs text-slate-500 mt-0.5 font-medium">Topics Mastered</div>
          <div className="text-[11px] text-brand-dark dark:text-brand-primary font-bold mt-1">
            {Math.round((completedTopicsCount / (totalTopics || 1)) * 100)}% Syllabus Done
          </div>
        </div>

        <div className="bg-surface-light dark:bg-surface-cardDark rounded-2xl p-5 border border-brand-border dark:border-surface-borderDark shadow-academic text-center">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400 flex items-center justify-center mx-auto mb-2">
            <TrendingUp size={20} />
          </div>
          <div className="text-2xl font-extrabold text-slate-800 dark:text-slate-100">
            {totalSolved}
          </div>
          <div className="text-xs text-slate-500 mt-0.5 font-medium">Questions Attempted</div>
          <div className="text-[11px] text-emerald-600 font-bold mt-1">
            {totalCorrect} Correct Answers
          </div>
        </div>

        <div className="bg-surface-light dark:bg-surface-cardDark rounded-2xl p-5 border border-brand-border dark:border-surface-borderDark shadow-academic text-center">
          <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 dark:bg-teal-950/40 dark:text-teal-400 flex items-center justify-center mx-auto mb-2">
            <Award size={20} />
          </div>
          <div className="text-2xl font-extrabold text-slate-800 dark:text-slate-100">
            {accuracy.toFixed(1)}%
          </div>
          <div className="text-xs text-slate-500 mt-0.5 font-medium">Solving Accuracy</div>
          <div className="text-[11px] text-teal-600 font-bold mt-1">
            GATE Target: &gt;75%
          </div>
        </div>

        <div className="bg-surface-light dark:bg-surface-cardDark rounded-2xl p-5 border border-brand-border dark:border-surface-borderDark shadow-academic text-center">
          <div className="w-10 h-10 rounded-xl bg-brand-soft text-brand-dark dark:bg-brand-dark/30 dark:text-brand-primary flex items-center justify-center mx-auto mb-2">
            <Sparkles size={20} />
          </div>
          <div className="text-2xl font-extrabold text-slate-800 dark:text-slate-100">
            {revisionCount}
          </div>
          <div className="text-xs text-slate-500 mt-0.5 font-medium">Revision Ready</div>
          <div className="text-[11px] text-brand-dark dark:text-brand-primary font-bold mt-1">
            High-Yield Retention
          </div>
        </div>
      </div>

      {/* Subject-Wise Detailed Progress Bars */}
      <div className="bg-surface-light dark:bg-surface-cardDark rounded-2xl p-6 border border-brand-border dark:border-surface-borderDark shadow-academic space-y-6">
        <h2 className="text-sm font-bold uppercase tracking-wider text-slate-700 dark:text-slate-200">
          Subject Completion Breakdown
        </h2>

        <div className="space-y-4">
          {subjects.map(subject => {
            const subjectTopics = topics.filter(t => t.subjectId === subject.id);
            const completedCount = subjectTopics.filter(t => userProgress.completedTopicIds.includes(t.id)).length;
            const percentage = subjectTopics.length > 0 ? (completedCount / subjectTopics.length) * 100 : 0;
            const subjectQs = questions.filter(q => q.subjectId === subject.id);
            const subjectSolved = subjectQs.filter(q => userProgress.solvedQuestions[q.id]);
            const subjectCorrect = subjectSolved.filter(q => userProgress.solvedQuestions[q.id]?.isCorrect).length;

            return (
              <div
                key={subject.id}
                className="p-4 rounded-xl bg-brand-light/40 dark:bg-surface-dark border border-brand-soft dark:border-surface-borderDark space-y-2.5"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-brand-soft dark:bg-brand-dark/30 text-brand-dark dark:text-brand-primary">
                      {subject.code}
                    </span>
                    <span className="text-xs font-bold text-slate-800 dark:text-slate-100">{subject.name}</span>
                  </div>
                  <span className="text-xs font-bold text-brand-dark dark:text-brand-primary font-mono">
                    {Math.round(percentage)}%
                  </span>
                </div>

                <ProgressBar percentage={percentage} showLabel={false} size="md" />

                <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1">
                  <span>Topics completed: {completedCount} of {subjectTopics.length}</span>
                  <span>Questions solved: {subjectSolved.length} (Correct: {subjectCorrect})</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
