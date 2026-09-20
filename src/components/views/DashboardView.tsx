import React from 'react';
import {
  BookOpen,
  FileText,
  Clock,
  ArrowRight,
  Calculator,
  ExternalLink,
  ChevronRight,
  Download,
  Bookmark,
  FileSpreadsheet,
  HelpCircle
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const DashboardView: React.FC = () => {
  const {
    subjects,
    units,
    topics,
    notes,
    questions,
    papers,
    formulas,
    bookmarks,
    navigateTo,
    userProfile
  } = useApp();

  // Metrics computation
  const totalSubjects = subjects.length;
  const totalNotes = notes.length;
  const totalPapers = papers.length;
  const totalFormulas = formulas.length;
  const totalQuestions = questions.length;

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-brand-dark via-brand-hover to-[#1e5437] text-white rounded-2xl p-6 sm:p-8 shadow-academic relative overflow-hidden">
        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-xs text-brand-primary text-xs font-semibold mb-3 border border-white/10">
            <span>ECE Academic Reference Hub</span>
            <span className="text-white/40">•</span>
            <span>Target: GATE {userProfile.targetYear}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Personal GATE ECE Academic Repository
          </h1>
          <p className="mt-2 text-sm text-brand-light/80 leading-relaxed">
            Your private academic reference platform for Electronics & Communication Engineering. Structured strictly according to the official IIT Madras GATE 2027 syllabus: comprehensive textbook notes, chapter-wise formulas, official master handbooks, and 19-year previous question papers with verified step-by-step solutions.
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <button
              onClick={() => navigateTo('notes')}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-brand-primary hover:bg-brand-accent text-slate-900 font-semibold text-xs transition-colors shadow-sm"
            >
              <FileText size={14} />
              <span>Browse Subject Notes</span>
            </button>

            <a
              href="/syllabus/EC_GATE2027_Syllabus.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-xs transition-colors border border-white/15"
            >
              <Download size={13} className="text-brand-primary" />
              <span>Official 2027 Syllabus PDF</span>
            </a>

            <a
              href="https://gate2027.iitm.ac.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-xs transition-colors border border-white/15"
            >
              <span>IIT Madras Portal</span>
              <ExternalLink size={13} className="text-brand-primary" />
            </a>
          </div>
        </div>

        {/* Subtle Decorative Geometry */}
        <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10 pointer-events-none hidden md:flex items-center justify-center">
          <div className="w-64 h-64 border-8 border-white rounded-full translate-x-12 -translate-y-6" />
        </div>
      </div>

      {/* Academic Hub Overview Cards */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Academic Archive Overview
          </h2>
          <span className="text-xs text-brand-dark dark:text-brand-primary font-medium">
            Personal Repository Contents
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

          {/* Card 2: Textbook Notes */}
          <div
            onClick={() => navigateTo('notes')}
            className="bg-surface-light dark:bg-surface-cardDark p-4 rounded-xl border border-brand-border dark:border-surface-borderDark shadow-xs hover:border-brand-primary cursor-pointer transition-all hover:-translate-y-0.5"
          >
            <div className="w-8 h-8 rounded-lg bg-teal-50 dark:bg-teal-950/40 text-teal-600 dark:text-teal-400 flex items-center justify-center mb-2">
              <FileText size={16} />
            </div>
            <div className="text-xl font-bold text-slate-800 dark:text-slate-100">{totalNotes} Subjects</div>
            <div className="text-xs text-slate-500 mt-0.5 font-medium">Textbook Notes</div>
          </div>

          {/* Card 3: Master Handbooks */}
          <div
            onClick={() => navigateTo('notes')}
            className="bg-surface-light dark:bg-surface-cardDark p-4 rounded-xl border border-brand-border dark:border-surface-borderDark shadow-xs hover:border-brand-primary cursor-pointer transition-all hover:-translate-y-0.5"
          >
            <div className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-2">
              <Download size={16} />
            </div>
            <div className="text-xl font-bold text-slate-800 dark:text-slate-100">14 PDFs</div>
            <div className="text-xs text-slate-500 mt-0.5 font-medium">Master Handbooks</div>
          </div>

          {/* Card 4: Formulas */}
          <div
            onClick={() => navigateTo('formulas')}
            className="bg-surface-light dark:bg-surface-cardDark p-4 rounded-xl border border-brand-border dark:border-surface-borderDark shadow-xs hover:border-brand-primary cursor-pointer transition-all hover:-translate-y-0.5"
          >
            <div className="w-8 h-8 rounded-lg bg-lime-50 dark:bg-lime-950/40 text-brand-dark dark:text-brand-primary flex items-center justify-center mb-2">
              <Calculator size={16} />
            </div>
            <div className="text-xl font-bold text-slate-800 dark:text-slate-100">{totalFormulas}+</div>
            <div className="text-xs text-slate-500 mt-0.5 font-medium">Key Formulas</div>
          </div>

          {/* Card 5: PYQ Papers */}
          <div
            onClick={() => navigateTo('pyq')}
            className="bg-surface-light dark:bg-surface-cardDark p-4 rounded-xl border border-brand-border dark:border-surface-borderDark shadow-xs hover:border-brand-primary cursor-pointer transition-all hover:-translate-y-0.5"
          >
            <div className="w-8 h-8 rounded-lg bg-green-50 dark:bg-green-950/40 text-brand-dark dark:text-brand-primary flex items-center justify-center mb-2">
              <Clock size={16} />
            </div>
            <div className="text-xl font-bold text-slate-800 dark:text-slate-100">{totalPapers} Years</div>
            <div className="text-xs text-slate-500 mt-0.5 font-medium">PYQ Papers (2007–2025)</div>
          </div>

          {/* Card 6: Question-Wise Answers */}
          <div
            onClick={() => navigateTo('question-bank')}
            className="bg-surface-light dark:bg-surface-cardDark p-4 rounded-xl border border-brand-border dark:border-surface-borderDark shadow-xs hover:border-brand-primary cursor-pointer transition-all hover:-translate-y-0.5"
          >
            <div className="w-8 h-8 rounded-lg bg-brand-soft dark:bg-brand-dark/30 text-brand-dark dark:text-brand-primary flex items-center justify-center mb-2">
              <HelpCircle size={16} />
            </div>
            <div className="text-xl font-bold text-slate-800 dark:text-slate-100">{totalQuestions} Qs</div>
            <div className="text-xs text-slate-500 mt-0.5 font-medium">Solved Solutions</div>
          </div>
        </div>
      </div>

      {/* 347-Formula Master Cheat Sheet Callout Banner */}
      <div className="bg-surface-light dark:bg-surface-cardDark rounded-2xl p-5 border border-brand-primary/40 shadow-academic flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-brand-soft dark:bg-brand-dark/30 text-brand-dark dark:text-brand-primary flex items-center justify-center flex-shrink-0">
            <FileSpreadsheet size={20} />
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-800 dark:text-slate-100">
              Complete GATE ECE 347-Formula Master Cheat Sheet
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Comprehensive high-yield formula cheat sheet covering all 8 technical sections and General Aptitude.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <a
            href="/notes/Formula_Cheat_Sheet_347_Formulas.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-brand-dark hover:bg-brand-hover text-white text-xs font-semibold shadow-xs"
          >
            <Download size={13} />
            <span>Download Formula Cheat Sheet (PDF)</span>
          </a>
          <button
            onClick={() => navigateTo('formulas')}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-brand-soft dark:bg-brand-dark/30 text-brand-dark dark:text-brand-primary hover:bg-brand-soft/80 text-xs font-semibold"
          >
            <Calculator size={13} />
            <span>Open Formula Bank</span>
          </button>
        </div>
      </div>

      {/* Subject Knowledge Modules Grid */}
      <div className="bg-surface-light dark:bg-surface-cardDark rounded-2xl p-5 sm:p-6 border border-brand-border dark:border-surface-borderDark shadow-academic space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-brand-soft dark:border-surface-borderDark">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-700 dark:text-slate-200">
              All 9 GATE Syllabus Subjects
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Direct access to comprehensive notes, master PDF handbooks, and solved questions for each subject
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {subjects.map(subject => {
            const subjectUnits = units.filter(u => u.subjectId === subject.id);
            const subjectTopics = topics.filter(t => t.subjectId === subject.id);
            const subjectQuestions = questions.filter(q => q.subjectId === subject.id);

            return (
              <div
                key={subject.id}
                className="p-4 rounded-xl bg-brand-light/40 dark:bg-surface-dark/40 border border-brand-soft dark:border-surface-borderDark hover:border-brand-primary/60 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-brand-soft dark:bg-brand-dark/20 text-brand-dark dark:text-brand-primary">
                      {subject.code}
                    </span>
                    <span className="text-[11px] text-slate-500">
                      {subjectUnits.length} Units &bull; {subjectTopics.length} Topics
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-slate-800 dark:text-slate-100">
                    {subject.name}
                  </h3>

                  <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                    {subject.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-brand-soft dark:border-surface-borderDark space-y-2">
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => navigateTo('notes', { subjectId: subject.id })}
                      className="py-1.5 px-2.5 rounded-lg bg-brand-dark hover:bg-brand-hover text-white text-xs font-semibold flex items-center justify-center gap-1 shadow-xs"
                    >
                      <FileText size={12} />
                      <span>Textbook Notes</span>
                    </button>

                    {subject.pdfHandbookUrl ? (
                      <a
                        href={subject.pdfHandbookUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-1.5 px-2.5 rounded-lg bg-brand-soft dark:bg-brand-dark/30 hover:bg-brand-soft/80 text-brand-dark dark:text-brand-primary border border-brand-border text-xs font-semibold flex items-center justify-center gap-1"
                      >
                        <Download size={12} />
                        <span>Handbook PDF</span>
                      </a>
                    ) : (
                      <button
                        onClick={() => navigateTo('formulas', { subjectId: subject.id })}
                        className="py-1.5 px-2.5 rounded-lg bg-white dark:bg-surface-dark text-slate-600 text-xs font-medium flex items-center justify-center gap-1 border border-brand-soft"
                      >
                        <span>Formulas</span>
                      </button>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-[11px]">
                    <button
                      onClick={() => navigateTo('formulas', { subjectId: subject.id })}
                      className="py-1 px-2 rounded bg-white dark:bg-surface-dark hover:bg-brand-light text-slate-600 dark:text-slate-300 font-medium flex items-center justify-center gap-1 border border-brand-soft"
                    >
                      <span>Formulas</span>
                    </button>
                    <button
                      onClick={() => navigateTo('question-bank', { subjectId: subject.id })}
                      className="py-1 px-2 rounded bg-white dark:bg-surface-dark hover:bg-brand-light text-brand-dark dark:text-brand-primary font-medium flex items-center justify-center gap-1 border border-brand-soft"
                    >
                      <span>Solve PYQs ({subjectQuestions.length})</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 19-Year Previous Year Question Papers & Official Keys (2007–2025) */}
      <div className="bg-surface-light dark:bg-surface-cardDark rounded-2xl p-5 sm:p-6 border border-brand-border dark:border-surface-borderDark shadow-academic space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-brand-soft dark:border-surface-borderDark">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-700 dark:text-slate-200 flex items-center gap-2">
              <Clock size={16} className="text-brand-dark dark:text-brand-primary" />
              <span>Official Previous Year Question Papers & Keys (2007–2025)</span>
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Original GATE question papers and verified official answer keys spanning 19 consecutive years
            </p>
          </div>
          <button
            onClick={() => navigateTo('pyq')}
            className="text-xs font-semibold text-brand-dark dark:text-brand-primary hover:underline flex items-center gap-1"
          >
            <span>Open PYQ Hub</span>
            <ChevronRight size={14} />
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-2.5">
          {papers.map(p => (
            <div
              key={p.id}
              onClick={() => navigateTo('pyq-paper', { paperYear: p.year })}
              className="p-3 rounded-xl bg-brand-light/50 dark:bg-surface-dark border border-brand-soft hover:border-brand-primary cursor-pointer transition-all text-center group"
            >
              <div className="text-sm font-bold text-slate-800 dark:text-slate-100 group-hover:text-brand-dark dark:group-hover:text-brand-primary">
                GATE {p.year}
              </div>
              <div className="text-[10px] text-slate-400 mt-0.5">{p.paperCode}</div>
              <div className="text-[10px] text-brand-dark dark:text-brand-primary font-semibold mt-1.5 flex items-center justify-center gap-1">
                <span>View</span>
                <ChevronRight size={10} />
              </div>
            </div>
          ))}
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
