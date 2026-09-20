import React, { useState } from 'react';
import {
  Star,
  Sparkles,
  ArrowRight,
  BookOpen,
  Filter,
  CheckCircle2,
  FileText
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { ImportanceLevel } from '../../types';
import { Breadcrumbs } from '../common/Breadcrumbs';

export const ImportantTopicsView: React.FC = () => {
  const {
    topics,
    subjects,
    units,
    setTopicImportance,
    navigateTo,
    userProgress
  } = useApp();

  const [activeFilter, setActiveFilter] = useState<'all' | ImportanceLevel>('all');

  const filteredTopics = topics.filter(t => {
    if (activeFilter === 'all') return t.importance !== 'Normal';
    return t.importance === activeFilter;
  });

  const importanceBadgeStyles: Record<ImportanceLevel, string> = {
    'Normal': 'bg-slate-100 text-slate-700 dark:bg-surface-borderDark dark:text-slate-300',
    'Important': 'bg-emerald-50 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300 border-emerald-200',
    'Very Important': 'bg-teal-50 text-teal-800 dark:bg-teal-950/40 dark:text-teal-300 border-teal-200',
    'Frequently Asked': 'bg-amber-50 text-amber-800 dark:bg-amber-950/40 dark:text-amber-300 border-amber-200',
    'High Priority': 'bg-brand-soft text-brand-dark dark:bg-brand-dark/40 dark:text-brand-primary border-brand-primary/40'
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <Breadcrumbs items={[{ label: 'Important Topics' }]} />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-brand-border dark:border-surface-borderDark">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2.5">
            <Star className="text-amber-500 fill-amber-500" size={24} />
            Important & High-Yield Topics
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Curated list of frequently tested, high-mark syllabus topics. You can customize priority levels according to your preparation needs.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-mono font-semibold px-3 py-1.5 rounded-lg bg-brand-soft dark:bg-brand-dark/30 text-brand-dark dark:text-brand-primary">
            {filteredTopics.length} Priority Topics
          </span>
        </div>
      </div>

      {/* Priority Level Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
        <button
          onClick={() => setActiveFilter('all')}
          className={`px-3 py-1.5 rounded-xl font-semibold transition-colors ${
            activeFilter === 'all'
              ? 'bg-brand-dark text-white'
              : 'bg-surface-light dark:bg-surface-cardDark text-slate-600 dark:text-slate-300 border border-brand-border'
          }`}
        >
          All High-Yield
        </button>

        {(['High Priority', 'Frequently Asked', 'Very Important', 'Important'] as ImportanceLevel[]).map(lvl => (
          <button
            key={lvl}
            onClick={() => setActiveFilter(lvl)}
            className={`px-3 py-1.5 rounded-xl font-semibold transition-colors ${
              activeFilter === lvl
                ? 'bg-brand-dark text-white'
                : 'bg-surface-light dark:bg-surface-cardDark text-slate-600 dark:text-slate-300 border border-brand-border'
            }`}
          >
            {lvl}
          </button>
        ))}
      </div>

      {/* Topics List */}
      <div className="space-y-4">
        {filteredTopics.map(topic => {
          const subject = subjects.find(s => s.id === topic.subjectId);
          const unit = units.find(u => u.id === topic.unitId);
          const isDone = userProgress.completedTopicIds.includes(topic.id);

          return (
            <div
              key={topic.id}
              className="bg-surface-light dark:bg-surface-cardDark rounded-2xl p-5 border border-brand-border dark:border-surface-borderDark shadow-academic space-y-3"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-brand-soft text-brand-dark dark:bg-brand-dark/30 dark:text-brand-primary">
                    {subject?.name}
                  </span>
                  <span className="text-xs text-slate-400">&bull;</span>
                  <span className="text-xs text-slate-500">Unit {unit?.unitNumber}: {unit?.title}</span>
                </div>

                {/* Priority Selector */}
                <div className="flex items-center gap-1.5">
                  <span className="text-[11px] text-slate-400 font-medium">Tag:</span>
                  <select
                    value={topic.importance}
                    onChange={e => setTopicImportance(topic.id, e.target.value as ImportanceLevel)}
                    className="text-xs font-semibold p-1.5 rounded-lg bg-brand-light dark:bg-surface-dark border border-brand-border text-brand-dark dark:text-brand-primary outline-hidden"
                  >
                    <option value="Normal">Normal</option>
                    <option value="Important">Important</option>
                    <option value="Very Important">Very Important</option>
                    <option value="Frequently Asked">Frequently Asked</option>
                    <option value="High Priority">High Priority</option>
                  </select>
                </div>
              </div>

              <div>
                <h3 className="text-base font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
                  <span>{topic.title}</span>
                  {isDone && <CheckCircle2 size={16} className="text-brand-dark dark:text-brand-primary fill-brand-primary/20" />}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                  {topic.overview}
                </p>
              </div>

              {/* Subtopics Chips */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {topic.subtopics.map((sub, i) => (
                  <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-slate-100 dark:bg-surface-dark text-slate-600 dark:text-slate-300">
                    {sub}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="pt-3 border-t border-brand-soft dark:border-surface-borderDark flex items-center justify-between">
                <span className={`text-[10px] px-2.5 py-1 rounded-full font-bold border ${importanceBadgeStyles[topic.importance]}`}>
                  {topic.importance}
                </span>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => navigateTo('notes', { topicId: topic.id, subjectId: topic.subjectId })}
                    className="px-3.5 py-1.5 rounded-xl bg-brand-dark text-white text-xs font-semibold hover:bg-brand-hover flex items-center gap-1.5 transition-colors"
                  >
                    <FileText size={13} />
                    <span>Study Notes</span>
                  </button>

                  <button
                    onClick={() => navigateTo('question-bank', { topicId: topic.id })}
                    className="px-3.5 py-1.5 rounded-xl bg-brand-soft text-brand-dark dark:bg-brand-dark/20 dark:text-brand-primary text-xs font-semibold hover:bg-brand-primary/30 transition-colors"
                  >
                    Solve PYQs
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
