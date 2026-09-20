import React, { useState } from 'react';
import {
  FileText,
  Printer,
  Bookmark,
  CheckCircle2,
  ChevronRight,
  ArrowLeft,
  ArrowRight,
  AlertTriangle,
  Lightbulb,
  HelpCircle,
  Clock,
  Sparkles,
  Download,
  FileDown,
  Paperclip
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { Breadcrumbs } from '../common/Breadcrumbs';
import { BookmarkButton } from '../common/BookmarkButton';

export const NotesView: React.FC = () => {
  const {
    notes,
    topics,
    units,
    subjects,
    questions,
    userProgress,
    markTopicCompleted,
    navigateTo,
    routeParams
  } = useApp();

  // Find targeted note
  let activeNote = notes.find(n => n.id === routeParams.noteId);
  if (!activeNote && routeParams.topicId) {
    activeNote = notes.find(n => n.topicId === routeParams.topicId);
  }
  if (!activeNote) {
    activeNote = notes[0];
  }

  const topic = topics.find(t => t.id === activeNote?.topicId) || topics[0];
  const unit = units.find(u => u.id === topic.unitId) || units[0];
  const subject = subjects.find(s => s.id === topic.subjectId) || subjects[0];
  const isCompleted = userProgress.completedTopicIds.includes(topic.id);

  // Filter related questions
  const relatedQuestions = questions.filter(q => q.topicId === topic.id);

  // Find next and previous notes
  const currentIndex = notes.findIndex(n => n.id === activeNote?.id);
  const prevNote = currentIndex > 0 ? notes[currentIndex - 1] : null;
  const nextNote = currentIndex < notes.length - 1 ? notes[currentIndex + 1] : null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'Notes', route: 'notes' },
          { label: subject.name, route: 'subject-detail', params: { subjectId: subject.id } },
          { label: `Unit ${unit.unitNumber}` },
          { label: topic.title }
        ]}
      />

      {/* Action Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-brand-border dark:border-surface-borderDark no-print">
        <div className="flex items-center gap-2">
          <button
            onClick={() => navigateTo('syllabus')}
            className="p-2 rounded-lg bg-brand-light dark:bg-surface-cardDark text-brand-dark dark:text-brand-primary hover:bg-brand-soft transition-colors"
            title="Return to Syllabus"
          >
            <ArrowLeft size={16} />
          </button>
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-brand-dark dark:text-brand-primary">
              GATE Digital Textbook
            </span>
            <div className="text-xs text-slate-400">Official syllabus mapped note</div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <BookmarkButton
            type="note"
            refId={activeNote.id}
            title={activeNote.title}
            subtitle={`${subject.name} → ${topic.title}`}
            showText={true}
          />

          <button
            onClick={() => markTopicCompleted(topic.id)}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
              isCompleted
                ? 'bg-brand-primary text-slate-900'
                : 'bg-brand-soft text-brand-dark hover:bg-brand-primary/30'
            }`}
          >
            <CheckCircle2 size={14} />
            <span>{isCompleted ? 'Topic Completed' : 'Mark as Done'}</span>
          </button>

          <button
            onClick={handlePrint}
            className="p-2 rounded-lg bg-brand-light dark:bg-surface-cardDark text-slate-600 dark:text-slate-300 hover:bg-brand-soft transition-colors"
            title="Print or Save as PDF"
          >
            <Printer size={16} />
          </button>
        </div>
      </div>

      {/* Main Textbook Document Container */}
      <article className="bg-surface-light dark:bg-surface-cardDark rounded-3xl p-6 sm:p-10 border border-brand-border dark:border-surface-borderDark shadow-academic space-y-10">
        {/* Title Header */}
        <div className="space-y-3 pb-8 border-b border-brand-soft dark:border-surface-borderDark">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-brand-soft dark:bg-brand-dark/30 text-brand-dark dark:text-brand-primary">
              {subject.code}
            </span>
            <span className="text-xs font-semibold text-slate-500">
              {subject.name} &bull; Unit {unit.unitNumber}: {unit.title}
            </span>
            <span className="ml-auto text-[11px] text-slate-400">
              Last updated: {activeNote.lastUpdated}
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-50 tracking-tight">
            {activeNote.title}
          </h1>

          <div className="flex items-center gap-3 text-xs text-slate-500 pt-2">
            <span>Importance: <strong className="text-brand-dark dark:text-brand-primary">{topic.importance}</strong></span>
            <span>&bull;</span>
            <span>Subtopics: <strong>{topic.subtopics.length}</strong></span>
          </div>
        </div>

        {/* Section 1: Topic Introduction */}
        <section className="space-y-3">
          <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-brand-dark dark:text-brand-primary">
            <span className="w-6 h-6 rounded-full bg-brand-soft dark:bg-brand-dark/30 flex items-center justify-center text-xs">1</span>
            <h2>Topic Introduction</h2>
          </div>
          <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed bg-brand-light/60 dark:bg-surface-dark p-5 rounded-2xl border border-brand-border dark:border-surface-borderDark">
            {activeNote.topicIntroduction}
          </p>
        </section>

        {/* Section 2: Core Concepts */}
        <section className="space-y-3">
          <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-brand-dark dark:text-brand-primary">
            <span className="w-6 h-6 rounded-full bg-brand-soft dark:bg-brand-dark/30 flex items-center justify-center text-xs">2</span>
            <h2>Core Concepts</h2>
          </div>
          <div className="space-y-2">
            {activeNote.coreConcepts.map((concept, idx) => (
              <div key={idx} className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300 p-3 rounded-xl bg-slate-50/70 dark:bg-surface-dark/60 border border-slate-100 dark:border-surface-borderDark">
                <span className="w-2 h-2 rounded-full bg-brand-primary mt-2 flex-shrink-0" />
                <span className="leading-relaxed">{concept}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Important Definitions */}
        {activeNote.importantDefinitions.length > 0 && (
          <section className="space-y-3">
            <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-brand-dark dark:text-brand-primary">
              <span className="w-6 h-6 rounded-full bg-brand-soft dark:bg-brand-dark/30 flex items-center justify-center text-xs">3</span>
              <h2>Important Definitions</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {activeNote.importantDefinitions.map((def, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-brand-light/40 dark:bg-surface-dark border border-brand-soft dark:border-surface-borderDark">
                  <div className="text-xs font-bold text-brand-dark dark:text-brand-primary">{def.term}</div>
                  <div className="text-xs text-slate-600 dark:text-slate-300 mt-1.5 leading-relaxed">{def.definition}</div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Section 4: Detailed Explanation */}
        <section className="space-y-3">
          <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-brand-dark dark:text-brand-primary">
            <span className="w-6 h-6 rounded-full bg-brand-soft dark:bg-brand-dark/30 flex items-center justify-center text-xs">4</span>
            <h2>Detailed Explanation & Analysis</h2>
          </div>
          <div className="space-y-4 text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
            {activeNote.detailedExplanation.map((para, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-white dark:bg-surface-dark border border-slate-200 dark:border-surface-borderDark whitespace-pre-line leading-loose">
                {para}
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: Important Formulas */}
        {activeNote.importantFormulas.length > 0 && (
          <section className="space-y-3">
            <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-brand-dark dark:text-brand-primary">
              <span className="w-6 h-6 rounded-full bg-brand-soft dark:bg-brand-dark/30 flex items-center justify-center text-xs">5</span>
              <h2>Important Formulas & Governing Laws</h2>
            </div>
            <div className="space-y-3">
              {activeNote.importantFormulas.map((f, idx) => (
                <div key={idx} className="math-formula-box">
                  <div className="text-xs font-bold text-brand-dark dark:text-brand-primary mb-1">
                    {f.name}
                  </div>
                  <div className="text-base font-mono font-semibold text-slate-900 dark:text-slate-50 py-1">
                    {f.formula}
                  </div>
                  <div className="text-xs text-slate-500 mt-1">
                    {f.explanation}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Section 6: Important Diagrams */}
        {activeNote.importantDiagrams.length > 0 && (
          <section className="space-y-3">
            <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-brand-dark dark:text-brand-primary">
              <span className="w-6 h-6 rounded-full bg-brand-soft dark:bg-brand-dark/30 flex items-center justify-center text-xs">6</span>
              <h2>Important Architectural Diagrams</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {activeNote.importantDiagrams.map((diag, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-brand-light/50 dark:bg-surface-dark border border-brand-border dark:border-surface-borderDark text-center">
                  <div className="text-xs font-bold text-slate-800 dark:text-slate-100 mb-2">{diag.title}</div>
                  {/* Clean SVG schematic representation */}
                  <div className="h-36 bg-white dark:bg-surface-cardDark rounded-xl border border-brand-soft dark:border-surface-borderDark flex items-center justify-center p-4">
                    <div className="w-full max-w-xs text-left p-3 rounded-lg bg-brand-soft/30 border border-brand-primary/30 font-mono text-[11px] text-brand-dark dark:text-brand-accent">
                      <div className="font-bold border-b border-brand-primary/20 pb-1">Master Stage [CLK=1] &rarr; Slave Stage [CLK=0]</div>
                      <div className="text-[10px] text-slate-500 mt-1">Inputs: J, K, CLK &rarr; Outputs: Q, Q_bar</div>
                      <div className="text-[9px] text-emerald-600 mt-0.5">&bull; Zero race condition &bull; Isolated feedback</div>
                    </div>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-2 italic">{diag.caption}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Section 7: Shortcuts & Tricks */}
        {activeNote.shortcutsAndTricks.length > 0 && (
          <section className="space-y-3">
            <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-brand-dark dark:text-brand-primary">
              <span className="w-6 h-6 rounded-full bg-brand-soft dark:bg-brand-dark/30 flex items-center justify-center text-xs">7</span>
              <h2>Shortcuts / Tricks (Time Savers)</h2>
            </div>
            <div className="space-y-2">
              {activeNote.shortcutsAndTricks.map((trick, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-200/50 dark:border-emerald-900/30 text-xs text-slate-700 dark:text-slate-300">
                  <Lightbulb size={16} className="text-emerald-600 dark:text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span className="leading-relaxed">{trick}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Section 8: Common Mistakes */}
        {activeNote.commonMistakes.length > 0 && (
          <section className="space-y-3">
            <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">
              <span className="w-6 h-6 rounded-full bg-amber-100 dark:bg-amber-900/40 flex items-center justify-center text-xs">8</span>
              <h2>Common Mistakes & Exam Traps</h2>
            </div>
            <div className="space-y-2">
              {activeNote.commonMistakes.map((mistake, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200/50 dark:border-amber-900/30 text-xs text-slate-700 dark:text-slate-300">
                  <AlertTriangle size={16} className="text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
                  <span className="leading-relaxed">{mistake}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Section 9: GATE-Level Points */}
        {activeNote.gateLevelPoints.length > 0 && (
          <section className="space-y-3">
            <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-brand-dark dark:text-brand-primary">
              <span className="w-6 h-6 rounded-full bg-brand-soft dark:bg-brand-dark/30 flex items-center justify-center text-xs">9</span>
              <h2>GATE-Level High-Yield Points</h2>
            </div>
            <div className="space-y-2">
              {activeNote.gateLevelPoints.map((pt, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-brand-light dark:bg-surface-dark border border-brand-border dark:border-surface-borderDark text-xs text-slate-700 dark:text-slate-300">
                  <Sparkles size={15} className="text-brand-dark dark:text-brand-primary mt-0.5 flex-shrink-0" />
                  <span>{pt}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Section 10: Related PYQs */}
        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-brand-dark dark:text-brand-primary">
              <span className="w-6 h-6 rounded-full bg-brand-soft dark:bg-brand-dark/30 flex items-center justify-center text-xs">10</span>
              <h2>Related Previous Year Questions</h2>
            </div>
            <button
              onClick={() => navigateTo('question-bank', { topicId: topic.id })}
              className="text-xs font-semibold text-brand-dark dark:text-brand-primary hover:underline"
            >
              Solve in Question Bank &rarr;
            </button>
          </div>

          <div className="space-y-2">
            {relatedQuestions.slice(0, 3).map(q => (
              <div
                key={q.id}
                onClick={() => navigateTo('question-detail', { questionId: q.id })}
                className="p-3.5 rounded-xl bg-white dark:bg-surface-dark border border-slate-200 dark:border-surface-borderDark hover:border-brand-primary cursor-pointer transition-all flex items-center justify-between text-xs"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-brand-dark dark:text-brand-primary">{q.sourcePaper}</span>
                    <span className="text-slate-400">&bull;</span>
                    <span className="font-mono text-slate-500">Q{q.questionNumber} ({q.type}, {q.marks}M)</span>
                  </div>
                  <div className="text-slate-700 dark:text-slate-300 font-medium mt-1 line-clamp-1">{q.questionText}</div>
                </div>
                <ChevronRight size={16} className="text-slate-400 flex-shrink-0" />
              </div>
            ))}
          </div>
        </section>

        {/* Section 11: Practice Questions */}
        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-brand-dark dark:text-brand-primary">
              <span className="w-6 h-6 rounded-full bg-brand-soft dark:bg-brand-dark/30 flex items-center justify-center text-xs">11</span>
              <h2>Practice Questions</h2>
            </div>
            <button
              onClick={() => navigateTo('practice', { topicId: topic.id, subjectId: subject.id })}
              className="text-xs font-semibold text-brand-dark dark:text-brand-primary hover:underline"
            >
              Start Timed Practice Test &rarr;
            </button>
          </div>
          <div className="p-4 rounded-xl bg-brand-light dark:bg-surface-dark border border-brand-border dark:border-surface-borderDark text-xs text-slate-600 dark:text-slate-300 flex items-center justify-between">
            <span>Timed interactive practice mode is available for this topic with real-time scoring and solutions.</span>
            <button
              onClick={() => navigateTo('practice', { topicId: topic.id, subjectId: subject.id })}
              className="px-3 py-1.5 rounded-lg bg-brand-dark text-white font-semibold hover:bg-brand-hover transition-colors whitespace-nowrap"
            >
              Launch Practice
            </button>
          </div>
        </section>

        {/* Section 12: Quick Revision Summary */}
        <section className="space-y-3">
          <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-brand-dark dark:text-brand-primary">
            <span className="w-6 h-6 rounded-full bg-brand-soft dark:bg-brand-dark/30 flex items-center justify-center text-xs">12</span>
            <h2>Quick Revision Summary (Flashcard View)</h2>
          </div>
          <div className="p-5 rounded-2xl bg-brand-soft/60 dark:bg-brand-dark/20 border border-brand-primary/30 space-y-2">
            {activeNote.quickRevisionSummary.map((sum, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs text-brand-dark dark:text-slate-200">
                <span className="font-bold">&bull;</span>
                <span className="leading-relaxed">{sum}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Attached / Uploaded Note Files (Section 8) */}
        {activeNote.uploadedFiles && activeNote.uploadedFiles.length > 0 && (
          <section className="space-y-3 pt-4 border-t border-brand-soft dark:border-surface-borderDark">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500">
              <Paperclip size={14} />
              <span>Attached Document Files & Notes</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {activeNote.uploadedFiles.map(file => (
                <div key={file.id} className="p-3 rounded-xl bg-white dark:bg-surface-dark border border-brand-border dark:border-surface-borderDark flex items-center justify-between text-xs">
                  <div>
                    <div className="font-semibold text-slate-800 dark:text-slate-200">{file.title}</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">{file.fileName} &bull; {file.size} &bull; {file.fileType}</div>
                  </div>
                  <a
                    href={file.fileUrl || '#'}
                    download
                    className="p-1.5 rounded-lg bg-brand-soft text-brand-dark hover:bg-brand-primary/30 transition-colors"
                    title="Download Note File"
                  >
                    <Download size={14} />
                  </a>
                </div>
              ))}
            </div>
          </section>
        )}
      </article>

      {/* Bottom Prev / Next Navigation */}
      <div className="flex items-center justify-between pt-4 border-t border-brand-border dark:border-surface-borderDark no-print">
        {prevNote ? (
          <button
            onClick={() => navigateTo('notes', { noteId: prevNote.id, topicId: prevNote.topicId })}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white dark:bg-surface-cardDark border border-brand-border dark:border-surface-borderDark text-xs font-medium text-slate-700 dark:text-slate-200 hover:border-brand-primary transition-colors"
          >
            <ArrowLeft size={14} />
            <span>Prev: {prevNote.title.split(' ')[0]} {prevNote.title.split(' ')[1] || ''}</span>
          </button>
        ) : <div />}

        {nextNote && (
          <button
            onClick={() => navigateTo('notes', { noteId: nextNote.id, topicId: nextNote.topicId })}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white dark:bg-surface-cardDark border border-brand-border dark:border-surface-borderDark text-xs font-medium text-slate-700 dark:text-slate-200 hover:border-brand-primary transition-colors"
          >
            <span>Next: {nextNote.title.split(' ')[0]} {nextNote.title.split(' ')[1] || ''}</span>
            <ArrowRight size={14} />
          </button>
        )}
      </div>
    </div>
  );
};
