import React from 'react';
import {
  BookOpen,
  CheckCircle2,
  FileText,
  Clock,
  Sparkles,
  ArrowRight,
  Calculator,
  ExternalLink,
  ChevronRight,
  TrendingUp,
  Bookmark
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { ProgressBar } from '../common/ProgressBar';

export const DashboardView: React.FC = () => {
  const {
    subjects,
    units,
    topics,
    notes,
    questions,
    papers,
    bookmarks,
    userProgress,
    navigateTo,
    userProfile
  } = useApp();

  // Metrics computation
  const totalSubjects = subjects.length;
  const totalTopics = topics.length;
  const completedTopics = userProgress.completedTopicIds.length;
  const totalNotes = notes.length;
  const totalPapers = papers.length;
  const solvedCount = Object.keys(userProgress.solvedQuestions).length;
  const revisionCount = userProgress.revisionCompletedTopicIds.length;

  // Last opened info
  const lastSubject = subjects.find(s => s.id === userProgress.lastOpenedSubjectId) || subjects[0];
  const lastTopic = topics.find(t => t.id === userProgress.lastOpenedTopicId) || topics[0];

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-brand-dark via-brand-hover to-[#1e5437] text-white rounded-2xl p-6 sm:p-8 shadow-academic relative overflow-hidden">
        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-xs text-brand-primary text-xs font-semibold mb-3 border border-white/10">
            <span>GATE Preparation Hub</span>
            <span className="text-white/40">•</span>
            <span>Academic Target: {userProfile.targetYear}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Welcome Back 👋, {userProfile.name}
          </h1>
          <p className="mt-2 text-sm text-brand-light/80 leading-relaxed">
            Your private, structured GATE preparation command center. Study topic-by-topic according to the official syllabus, master formula sheets, solve PYQs with clear derivations, and track your daily preparation velocity.
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <button
              onClick={() => navigateTo('notes', { topicId: lastTopic.id, subjectId: lastSubject.id })}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-brand-primary hover:bg-brand-accent text-slate-900 font-semibold text-xs transition-colors shadow-sm"
            >
              <span>Continue Studying: {lastSubject.name}</span>
              <ArrowRight size={14} />
            </button>

            <a
              href="https://gate2027.iitm.ac.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-xs transition-colors border border-white/15"
            >
              <span>Official GATE 2027 Portal</span>
              <ExternalLink size={13} className="text-brand-primary" />
            </a>
          </div>
        </div>

        {/* Subtle Decorative Geometry */}
        <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10 pointer-events-none hidden md:flex items-center justify-center">
          <div className="w-64 h-64 border-8 border-white rounded-full translate-x-12 -translate-y-6" />
        </div>
      </div>

      {/* Preparation Overview Cards */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Preparation Overview
          </h2>
          <span className="text-xs text-brand-dark dark:text-brand-primary font-medium">
            Personal Repository Stats
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {/* Card 1: Subjects */}
          <div
            onClick={() => navigateTo('subjects')}
            className="bg-surface-light dark:bg-surface-cardDark p-4 rounded-xl border border-brand-border dark:border-surface-borderDark shadow-xs hover:border-brand-primary cursor-pointer transition-all hover:-translate-y-0.5"
          >
            <div className="w-8 h-8 rounded-lg bg-brand-soft dark:bg-brand-dark/30 text-brand-dark dark:text-brand-primary flex items-center justify-center mb-2">
              <BookOpen size={16} />
            </div>
            <div className="text-xl font-bold text-slate-800 dark:text-slate-100">{totalSubjects}</div>
            <div className="text-xs text-slate-500 mt-0.5 font-medium">Syllabus Subjects</div>
          </div>

          {/* Card 2: Topics Completed */}
          <div
            onClick={() => navigateTo('progress')}
            className="bg-surface-light dark:bg-surface-cardDark p-4 rounded-xl border border-brand-border dark:border-surface-borderDark shadow-xs hover:border-brand-primary cursor-pointer transition-all hover:-translate-y-0.5"
          >
            <div className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-2">
              <CheckCircle2 size={16} />
            </div>
            <div className="text-xl font-bold text-slate-800 dark:text-slate-100">{completedTopics}/{totalTopics}</div>
            <div className="text-xs text-slate-500 mt-0.5 font-medium">Topics Completed</div>
          </div>

          {/* Card 3: Notes Available */}
          <div
            onClick={() => navigateTo('notes')}
            className="bg-surface-light dark:bg-surface-cardDark p-4 rounded-xl border border-brand-border dark:border-surface-borderDark shadow-xs hover:border-brand-primary cursor-pointer transition-all hover:-translate-y-0.5"
          >
            <div className="w-8 h-8 rounded-lg bg-teal-50 dark:bg-teal-950/40 text-teal-600 dark:text-teal-400 flex items-center justify-center mb-2">
              <FileText size={16} />
            </div>
            <div className="text-xl font-bold text-slate-800 dark:text-slate-100">{totalNotes}</div>
            <div className="text-xs text-slate-500 mt-0.5 font-medium">Textbook Notes</div>
          </div>

          {/* Card 4: PYQ Papers */}
          <div
            onClick={() => navigateTo('pyq')}
            className="bg-surface-light dark:bg-surface-cardDark p-4 rounded-xl border border-brand-border dark:border-surface-borderDark shadow-xs hover:border-brand-primary cursor-pointer transition-all hover:-translate-y-0.5"
          >
            <div className="w-8 h-8 rounded-lg bg-green-50 dark:bg-green-950/40 text-brand-dark dark:text-brand-primary flex items-center justify-center mb-2">
              <Clock size={16} />
            </div>
            <div className="text-xl font-bold text-slate-800 dark:text-slate-100">{totalPapers} Years</div>
            <div className="text-xs text-slate-500 mt-0.5 font-medium">PYQ Papers (2025–2019)</div>
          </div>

          {/* Card 5: Questions Solved */}
          <div
            onClick={() => navigateTo('question-bank')}
            className="bg-surface-light dark:bg-surface-cardDark p-4 rounded-xl border border-brand-border dark:border-surface-borderDark shadow-xs hover:border-brand-primary cursor-pointer transition-all hover:-translate-y-0.5"
          >
            <div className="w-8 h-8 rounded-lg bg-lime-50 dark:bg-lime-950/40 text-brand-dark dark:text-brand-primary flex items-center justify-center mb-2">
              <TrendingUp size={16} />
            </div>
            <div className="text-xl font-bold text-slate-800 dark:text-slate-100">{solvedCount}</div>
            <div className="text-xs text-slate-500 mt-0.5 font-medium">Questions Solved</div>
          </div>

          {/* Card 6: Revision Progress */}
          <div
            onClick={() => navigateTo('revision')}
            className="bg-surface-light dark:bg-surface-cardDark p-4 rounded-xl border border-brand-border dark:border-surface-borderDark shadow-xs hover:border-brand-primary cursor-pointer transition-all hover:-translate-y-0.5"
          >
            <div className="w-8 h-8 rounded-lg bg-brand-soft dark:bg-brand-dark/30 text-brand-dark dark:text-brand-primary flex items-center justify-center mb-2">
              <Sparkles size={16} />
            </div>
            <div className="text-xl font-bold text-slate-800 dark:text-slate-100">{revisionCount} Topics</div>
            <div className="text-xs text-slate-500 mt-0.5 font-medium">Revision Ready</div>
          </div>
        </div>
      </div>

      {/* Continue Studying Card & Quick Access Tiles */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Continue Studying */}
        <div className="lg:col-span-2 bg-surface-light dark:bg-surface-cardDark rounded-2xl p-5 sm:p-6 border border-brand-border dark:border-surface-borderDark shadow-academic flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-brand-soft dark:border-surface-borderDark">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-dark dark:text-brand-primary flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-brand-primary animate-ping" />
                Continue Studying
              </span>
              <span className="text-xs text-slate-400">Last accessed session</span>
            </div>

            <div className="mt-4">
              <div className="text-xs font-semibold text-slate-400">Current Subject & Unit</div>
              <div className="text-lg font-bold text-slate-800 dark:text-slate-100 mt-0.5 flex items-center gap-2">
                <span>{lastSubject.name}</span>
                <ChevronRight size={16} className="text-slate-300" />
                <span className="text-brand-dark dark:text-brand-primary">{lastTopic.title}</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 line-clamp-2">
                {lastTopic.overview}
              </p>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-brand-soft dark:border-surface-borderDark flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-4 text-xs text-slate-500">
              <div>
                <span className="font-semibold text-slate-700 dark:text-slate-200">Subtopics: </span>
                {lastTopic.subtopics.length} concepts
              </div>
              <div>
                <span className="font-semibold text-slate-700 dark:text-slate-200">Importance: </span>
                <span className="text-amber-600 font-semibold">{lastTopic.importance}</span>
              </div>
            </div>

            <button
              onClick={() => navigateTo('notes', { topicId: lastTopic.id, subjectId: lastSubject.id })}
              className="px-5 py-2 rounded-xl bg-brand-dark hover:bg-brand-hover text-white text-xs font-semibold flex items-center gap-2 transition-colors shadow-sm"
            >
              <span>Continue Topic Notes</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>

        {/* Quick Access Tiles */}
        <div className="bg-surface-light dark:bg-surface-cardDark rounded-2xl p-5 border border-brand-border dark:border-surface-borderDark shadow-academic flex flex-col justify-between">
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
              Quick Preparation Access
            </h3>

            <div className="space-y-2">
              <button
                onClick={() => navigateTo('notes')}
                className="w-full flex items-center justify-between p-2.5 rounded-xl bg-brand-light dark:bg-brand-dark/10 hover:bg-brand-soft border border-brand-border dark:border-surface-borderDark text-xs font-medium text-brand-dark dark:text-brand-primary transition-colors group"
              >
                <div className="flex items-center gap-2.5">
                  <FileText size={16} />
                  <span>Open Notes Library</span>
                </div>
                <ChevronRight size={14} className="text-slate-400 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                onClick={() => navigateTo('pyq')}
                className="w-full flex items-center justify-between p-2.5 rounded-xl bg-brand-light dark:bg-brand-dark/10 hover:bg-brand-soft border border-brand-border dark:border-surface-borderDark text-xs font-medium text-brand-dark dark:text-brand-primary transition-colors group"
              >
                <div className="flex items-center gap-2.5">
                  <Clock size={16} />
                  <span>Previous Year Questions</span>
                </div>
                <ChevronRight size={14} className="text-slate-400 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                onClick={() => navigateTo('formulas')}
                className="w-full flex items-center justify-between p-2.5 rounded-xl bg-brand-light dark:bg-brand-dark/10 hover:bg-brand-soft border border-brand-border dark:border-surface-borderDark text-xs font-medium text-brand-dark dark:text-brand-primary transition-colors group"
              >
                <div className="flex items-center gap-2.5">
                  <Calculator size={16} />
                  <span>Formula Sheets</span>
                </div>
                <ChevronRight size={14} className="text-slate-400 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                onClick={() => navigateTo('important-topics')}
                className="w-full flex items-center justify-between p-2.5 rounded-xl bg-brand-light dark:bg-brand-dark/10 hover:bg-brand-soft border border-brand-border dark:border-surface-borderDark text-xs font-medium text-brand-dark dark:text-brand-primary transition-colors group"
              >
                <div className="flex items-center gap-2.5">
                  <Sparkles size={16} />
                  <span>Important Topics & Weightage</span>
                </div>
                <ChevronRight size={14} className="text-slate-400 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                onClick={() => navigateTo('revision')}
                className="w-full flex items-center justify-between p-2.5 rounded-xl bg-brand-light dark:bg-brand-dark/10 hover:bg-brand-soft border border-brand-border dark:border-surface-borderDark text-xs font-medium text-brand-dark dark:text-brand-primary transition-colors group"
              >
                <div className="flex items-center gap-2.5">
                  <TrendingUp size={16} />
                  <span>High-Yield Revision Mode</span>
                </div>
                <ChevronRight size={14} className="text-slate-400 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-brand-soft dark:border-surface-borderDark text-[11px] text-slate-400 flex items-center justify-between">
            <span>Press <kbd className="px-1 py-0.5 bg-slate-100 dark:bg-surface-borderDark rounded text-[10px] font-mono">Ctrl+K</kbd> to search</span>
            <button onClick={() => navigateTo('practice')} className="text-brand-dark dark:text-brand-primary font-semibold hover:underline">
              Start Practice →
            </button>
          </div>
        </div>
      </div>

      {/* Subject Preparation Progress Breakdown */}
      <div className="bg-surface-light dark:bg-surface-cardDark rounded-2xl p-5 sm:p-6 border border-brand-border dark:border-surface-borderDark shadow-academic">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-700 dark:text-slate-200">
              Subject Progress & Coverage
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Completion tracking mapped directly across the official GATE syllabus
            </p>
          </div>
          <button
            onClick={() => navigateTo('subjects')}
            className="text-xs font-semibold text-brand-dark dark:text-brand-primary hover:underline flex items-center gap-1"
          >
            <span>View All Subjects</span>
            <ChevronRight size={14} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {subjects.slice(0, 6).map(subject => {
            const subjectTopics = topics.filter(t => t.subjectId === subject.id);
            const completedCount = subjectTopics.filter(t => userProgress.completedTopicIds.includes(t.id)).length;
            const percentage = subjectTopics.length > 0 ? (completedCount / subjectTopics.length) * 100 : 0;

            return (
              <div
                key={subject.id}
                onClick={() => navigateTo('subject-detail', { subjectId: subject.id })}
                className="p-4 rounded-xl bg-brand-light/50 dark:bg-surface-dark/40 border border-brand-soft dark:border-surface-borderDark hover:border-brand-primary/60 cursor-pointer transition-all hover:bg-brand-soft/40"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold px-1.5 py-0.5 rounded bg-brand-soft dark:bg-brand-dark/20 text-brand-dark dark:text-brand-primary">
                      {subject.code}
                    </span>
                    <span className="text-xs font-semibold text-slate-800 dark:text-slate-100">
                      {subject.name}
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-brand-dark dark:text-brand-primary">
                    {Math.round(percentage)}%
                  </span>
                </div>

                <ProgressBar percentage={percentage} showLabel={false} size="sm" />

                <div className="flex items-center justify-between text-[11px] text-slate-500 mt-2">
                  <span>{completedCount} of {subjectTopics.length} topics completed</span>
                  <span className="text-brand-dark dark:text-brand-primary font-medium hover:underline">
                    Explore Unit Tree →
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bookmarked Material Quick Peek */}
      {bookmarks.length > 0 && (
        <div className="bg-surface-light dark:bg-surface-cardDark rounded-2xl p-5 border border-brand-border dark:border-surface-borderDark shadow-academic">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-200 flex items-center gap-1.5">
              <Bookmark size={14} className="text-brand-dark dark:text-brand-primary fill-current" />
              <span>Saved Bookmarks ({bookmarks.length})</span>
            </h3>
            <button
              onClick={() => navigateTo('bookmarks')}
              className="text-xs font-semibold text-brand-dark dark:text-brand-primary hover:underline"
            >
              Manage Bookmarks →
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {bookmarks.slice(0, 4).map(b => (
              <div
                key={b.id}
                onClick={() => {
                  if (b.type === 'note') navigateTo('note-detail', { noteId: b.refId });
                  else if (b.type === 'formula') navigateTo('formulas');
                  else if (b.type === 'question') navigateTo('question-detail', { questionId: b.refId });
                  else navigateTo('syllabus');
                }}
                className="p-3 rounded-xl bg-white dark:bg-surface-dark border border-brand-border dark:border-surface-borderDark hover:border-brand-primary cursor-pointer transition-all text-xs"
              >
                <div className="flex items-center justify-between text-[10px] text-brand-dark dark:text-brand-primary font-bold uppercase mb-1">
                  <span>{b.type}</span>
                  <span className="text-slate-400 font-normal">{b.dateAdded}</span>
                </div>
                <div className="font-semibold text-slate-800 dark:text-slate-100 truncate">{b.title}</div>
                <div className="text-[11px] text-slate-500 truncate mt-0.5">{b.subtitle}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
