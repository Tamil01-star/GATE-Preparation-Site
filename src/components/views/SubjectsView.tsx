import React, { useState } from 'react';
import {
  BookOpen,
  FolderTree,
  FileText,
  Clock,
  ChevronRight,
  ArrowRight,
  Plus,
  Star,
  Sparkles,
  HelpCircle,
  Download
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { Breadcrumbs } from '../common/Breadcrumbs';

export const SubjectsView: React.FC = () => {
  const {
    subjects,
    units,
    topics,
    notes,
    questions,
    navigateTo,
    routeParams
  } = useApp();

  // If a specific subject is selected in routeParams, show Subject Detail View
  const selectedSubjectId = routeParams.subjectId;
  const currentSubject = subjects.find(s => s.id === selectedSubjectId);

  // Tab state in detail view: 'units' | 'important-topics' | 'topic-pyqs' | 'year-pyqs'
  const [detailTab, setDetailTab] = useState<'units' | 'important-topics' | 'topic-pyqs' | 'year-pyqs'>('units');

  if (currentSubject) {
    // Subject Detail Mode
    const subjectUnits = units.filter(u => u.subjectId === currentSubject.id);
    const subjectTopics = topics.filter(t => t.subjectId === currentSubject.id);
    const subjectNotes = notes.filter(n => n.subjectId === currentSubject.id);
    const subjectQuestions = questions.filter(q => q.subjectId === currentSubject.id);
    const importantTopics = subjectTopics.filter(t => t.importance !== 'Normal');

    return (
      <div className="space-y-6 max-w-7xl mx-auto">
        <Breadcrumbs
          items={[
            { label: 'Subjects', route: 'subjects' },
            { label: currentSubject.name }
          ]}
        />

        {/* Subject Detail Header */}
        <div className="bg-surface-light dark:bg-surface-cardDark rounded-2xl p-6 border border-brand-border dark:border-surface-borderDark shadow-academic">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-brand-soft dark:bg-brand-dark/30 text-brand-dark dark:text-brand-primary text-xs font-mono font-bold mb-2">
                {currentSubject.code}
              </div>
              <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-100">
                {currentSubject.name}
              </h1>
              <p className="text-xs text-slate-500 mt-1 max-w-3xl leading-relaxed">
                {currentSubject.description}
              </p>
            </div>

            <div className="min-w-[200px] p-4 rounded-xl bg-brand-light dark:bg-surface-dark border border-brand-soft dark:border-surface-borderDark text-right space-y-1">
              <div className="text-xs font-bold text-brand-dark dark:text-brand-primary uppercase tracking-wider">Subject Academic Hub</div>
              <div className="text-xs text-slate-700 dark:text-slate-200 font-semibold">{subjectUnits.length} Units &bull; {subjectTopics.length} Topics</div>
              <div className="text-[11px] text-slate-500">{subjectNotes.length} Notes &bull; {subjectQuestions.length} Solved PYQs</div>
            </div>
          </div>

          {/* Master Handbook PDF banner */}
          {currentSubject.pdfHandbookUrl && (
            <div className="mt-4 pt-4 border-t border-brand-soft dark:border-surface-borderDark flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-brand-light/60 dark:bg-surface-dark/40 p-3.5 rounded-xl">
              <div className="flex items-center gap-2.5">
                <FileText className="text-brand-dark dark:text-brand-primary flex-shrink-0" size={18} />
                <div>
                  <div className="text-xs font-bold text-slate-800 dark:text-slate-100">
                    {currentSubject.pdfHandbookTitle || `${currentSubject.name} Master Handbook`}
                  </div>
                  <div className="text-[11px] text-slate-500">
                    Complete official Physics Wallah handbook covering all units with formula derivations and solved examples.
                  </div>
                </div>
              </div>
              <a
                href={currentSubject.pdfHandbookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-brand-dark text-white hover:bg-brand-hover text-xs font-semibold shadow-xs whitespace-nowrap self-start sm:self-auto"
              >
                <Download size={13} />
                <span>Download Handbook PDF</span>
              </a>
            </div>
          )}

          {/* Navigation Tabs inside Subject (Section 14) */}
          <div className="flex items-center gap-2 mt-6 pt-4 border-t border-brand-soft dark:border-surface-borderDark overflow-x-auto">
            <button
              onClick={() => setDetailTab('units')}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors whitespace-nowrap ${
                detailTab === 'units'
                  ? 'bg-brand-dark text-white'
                  : 'bg-brand-light dark:bg-surface-dark text-slate-600 dark:text-slate-300 hover:bg-brand-soft'
              }`}
            >
              <FolderTree size={14} />
              <span>Syllabus Units ({subjectUnits.length})</span>
            </button>

            <button
              onClick={() => setDetailTab('important-topics')}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors whitespace-nowrap ${
                detailTab === 'important-topics'
                  ? 'bg-brand-dark text-white'
                  : 'bg-brand-light dark:bg-surface-dark text-slate-600 dark:text-slate-300 hover:bg-brand-soft'
              }`}
            >
              <Star size={14} />
              <span>Important Topics ({importantTopics.length})</span>
            </button>

            <button
              onClick={() => setDetailTab('topic-pyqs')}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors whitespace-nowrap ${
                detailTab === 'topic-pyqs'
                  ? 'bg-brand-dark text-white'
                  : 'bg-brand-light dark:bg-surface-dark text-slate-600 dark:text-slate-300 hover:bg-brand-soft'
              }`}
            >
              <HelpCircle size={14} />
              <span>Topic-Wise PYQs</span>
            </button>

            <button
              onClick={() => setDetailTab('year-pyqs')}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors whitespace-nowrap ${
                detailTab === 'year-pyqs'
                  ? 'bg-brand-dark text-white'
                  : 'bg-brand-light dark:bg-surface-dark text-slate-600 dark:text-slate-300 hover:bg-brand-soft'
              }`}
            >
              <Clock size={14} />
              <span>Year-Wise Papers</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Units and Topics */}
        {detailTab === 'units' && (
          <div className="space-y-4">
            {subjectUnits.map(unit => {
              const unitTopics = subjectTopics.filter(t => t.unitId === unit.id);

              return (
                <div
                  key={unit.id}
                  className="bg-surface-light dark:bg-surface-cardDark rounded-2xl p-5 border border-brand-border dark:border-surface-borderDark shadow-academic"
                >
                  <div className="flex items-center justify-between pb-3 border-b border-brand-soft dark:border-surface-borderDark">
                    <div>
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-brand-dark dark:text-brand-primary">
                        Unit {unit.unitNumber}
                      </span>
                      <h2 className="text-base font-bold text-slate-800 dark:text-slate-100">
                        {unit.title}
                      </h2>
                    </div>
                    <span className="text-xs text-slate-400">{unitTopics.length} Topics</span>
                  </div>

                  <p className="text-xs text-slate-500 mt-2 mb-4">
                    {unit.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {unitTopics.map(topic => {
                      const hasNotes = notes.some(n => n.topicId === topic.id);
                      const qCount = questions.filter(q => q.topicId === topic.id).length;

                      return (
                        <div
                          key={topic.id}
                          onClick={() => navigateTo('notes', { topicId: topic.id, subjectId: currentSubject.id })}
                          className="p-3.5 rounded-xl bg-brand-light/40 dark:bg-surface-dark/40 border border-brand-soft dark:border-surface-borderDark hover:border-brand-primary cursor-pointer transition-all hover:bg-brand-soft/30 flex items-center justify-between"
                        >
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-xs font-semibold text-slate-800 dark:text-slate-100">
                                {topic.title}
                              </span>
                              {topic.importance !== 'Normal' && (
                                <span className="text-[9px] px-1.5 py-0.2 rounded bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-400 font-semibold">
                                  {topic.importance}
                                </span>
                              )}
                            </div>
                            <div className="text-[11px] text-slate-500 mt-1 flex items-center gap-3">
                              <span>{hasNotes ? '✓ Textbook Notes' : 'Notes in library'}</span>
                              <span>•</span>
                              <span>{qCount} Solved Questions</span>
                            </div>
                          </div>

                          <ChevronRight size={16} className="text-slate-400 flex-shrink-0" />
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Tab 2: Important Topics */}
        {detailTab === 'important-topics' && (
          <div className="bg-surface-light dark:bg-surface-cardDark rounded-2xl p-6 border border-brand-border dark:border-surface-borderDark shadow-academic space-y-4">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-700 dark:text-slate-200">
              High-Yield & Frequently Tested Topics in {currentSubject.name}
            </h2>
            <div className="space-y-3">
              {importantTopics.map(topic => (
                <div
                  key={topic.id}
                  onClick={() => navigateTo('notes', { topicId: topic.id, subjectId: currentSubject.id })}
                  className="p-4 rounded-xl bg-amber-50/30 dark:bg-amber-950/10 border border-amber-200/50 dark:border-amber-900/30 hover:border-brand-primary cursor-pointer transition-all flex items-center justify-between"
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-slate-800 dark:text-slate-100">{topic.title}</span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-900/50 text-amber-800 dark:text-amber-200 font-bold">
                        {topic.importance}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 mt-1">{topic.overview}</p>
                  </div>
                  <ArrowRight size={16} className="text-brand-dark dark:text-brand-primary flex-shrink-0" />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Topic-wise PYQs */}
        {detailTab === 'topic-pyqs' && (
          <div className="bg-surface-light dark:bg-surface-cardDark rounded-2xl p-6 border border-brand-border dark:border-surface-borderDark shadow-academic space-y-4">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-700 dark:text-slate-200">
              Solve Previous Questions by Topic
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {subjectTopics.map(topic => {
                const qList = questions.filter(q => q.topicId === topic.id);
                return (
                  <div
                    key={topic.id}
                    onClick={() => navigateTo('question-bank', { topicId: topic.id, subjectId: currentSubject.id })}
                    className="p-4 rounded-xl bg-brand-light/50 dark:bg-surface-dark border border-brand-soft hover:border-brand-primary cursor-pointer transition-all flex items-center justify-between"
                  >
                    <div>
                      <div className="text-xs font-bold text-slate-800 dark:text-slate-100">{topic.title}</div>
                      <div className="text-[11px] text-slate-500 mt-1">{qList.length} Questions Available</div>
                    </div>
                    <ChevronRight size={16} className="text-brand-dark dark:text-brand-primary" />
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Tab 4: Year-wise Papers */}
        {detailTab === 'year-pyqs' && (
          <div className="bg-surface-light dark:bg-surface-cardDark rounded-2xl p-6 border border-brand-border dark:border-surface-borderDark shadow-academic space-y-4">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-700 dark:text-slate-200">
              Exam Papers by Year
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[2025, 2024, 2023, 2022, 2021, 2020, 2019].map(year => (
                <div
                  key={year}
                  onClick={() => navigateTo('pyq-paper', { paperYear: year })}
                  className="p-4 rounded-xl bg-brand-light/50 dark:bg-surface-dark border border-brand-soft hover:border-brand-primary cursor-pointer transition-all text-center"
                >
                  <div className="text-lg font-bold text-brand-dark dark:text-brand-primary">GATE {year}</div>
                  <div className="text-xs text-slate-500 mt-1">Electronics & Comm. Paper</div>
                  <button className="mt-3 w-full py-1.5 text-xs font-semibold bg-brand-dark text-white rounded-lg hover:bg-brand-hover">
                    Open {year} Paper
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  // All Subjects Grid Page
  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <Breadcrumbs items={[{ label: 'Subjects' }]} />

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-brand-border dark:border-surface-borderDark">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2.5">
            <BookOpen className="text-brand-dark dark:text-brand-primary" size={24} />
            GATE Subjects & Modules
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Complete syllabus modules for GATE Electronics and Communication Engineering & Engineering Mathematics.
          </p>
        </div>

        <button
          onClick={() => navigateTo('admin')}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-brand-dark text-white hover:bg-brand-hover text-xs font-semibold shadow-sm"
        >
          <Plus size={14} />
          <span>Add New Subject</span>
        </button>
      </div>

      {/* Grid of Subject Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {subjects.map(subject => {
          const subjectUnits = units.filter(u => u.subjectId === subject.id);
          const subjectTopics = topics.filter(t => t.subjectId === subject.id);
          const subjectNotes = notes.filter(n => n.subjectId === subject.id);
          const subjectQuestions = questions.filter(q => q.subjectId === subject.id);
          return (
            <div
              key={subject.id}
              className="bg-surface-light dark:bg-surface-cardDark rounded-2xl p-5 border border-brand-border dark:border-surface-borderDark shadow-academic flex flex-col justify-between hover:border-brand-primary/80 transition-all hover:-translate-y-0.5"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-brand-soft dark:bg-brand-dark/30 text-brand-dark dark:text-brand-primary">
                    {subject.code}
                  </span>
                  <span className="text-xs font-semibold text-brand-dark dark:text-brand-primary">
                    {subjectUnits.length} Units &bull; {subjectTopics.length} Topics
                  </span>
                </div>

                <h2 className="text-base font-bold text-slate-800 dark:text-slate-100">
                  {subject.name}
                </h2>

                <p className="text-xs text-slate-500 mt-2 line-clamp-3 leading-relaxed">
                  {subject.description}
                </p>

                {/* Units quick preview */}
                <div className="mt-4 pt-3 border-t border-brand-soft dark:border-surface-borderDark">
                  <div className="text-[11px] font-semibold text-slate-400 mb-1.5">Syllabus Units:</div>
                  <div className="flex flex-wrap gap-1.5">
                    {subjectUnits.slice(0, 3).map(u => (
                      <span key={u.id} className="text-[10px] px-2 py-0.5 rounded bg-slate-100 dark:bg-surface-borderDark text-slate-600 dark:text-slate-300">
                        {u.title.split(' ')[0]} {u.title.split(' ')[1] || ''}
                      </span>
                    ))}
                    {subjectUnits.length > 3 && (
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-100 dark:bg-surface-borderDark text-slate-400">
                        +{subjectUnits.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-2 mt-4 pt-3 border-t border-brand-soft dark:border-surface-borderDark text-center">
                  <div>
                    <div className="text-xs font-bold text-slate-800 dark:text-slate-100">{subjectTopics.length}</div>
                    <div className="text-[10px] text-slate-400">Topics</div>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-800 dark:text-slate-100">{subjectNotes.length}</div>
                    <div className="text-[10px] text-slate-400">Notes</div>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-800 dark:text-slate-100">{subjectQuestions.length}</div>
                    <div className="text-[10px] text-slate-400">PYQs</div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-5 pt-3 border-t border-brand-soft dark:border-surface-borderDark space-y-2">
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => navigateTo('notes', { subjectId: subject.id })}
                    className="py-2 px-3 rounded-xl bg-brand-dark hover:bg-brand-hover text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors shadow-xs"
                  >
                    <FileText size={13} />
                    <span>Open Notes</span>
                  </button>

                  {subject.pdfHandbookUrl ? (
                    <a
                      href={subject.pdfHandbookUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2 px-3 rounded-xl bg-brand-soft dark:bg-brand-dark/30 hover:bg-brand-soft/80 text-brand-dark dark:text-brand-primary border border-brand-border dark:border-surface-borderDark text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <Download size={13} />
                      <span>Handbook PDF</span>
                    </a>
                  ) : (
                    <button
                      onClick={() => navigateTo('formulas', { subjectId: subject.id })}
                      className="py-2 px-3 rounded-xl bg-brand-light dark:bg-surface-dark text-slate-600 dark:text-slate-300 text-xs font-medium flex items-center justify-center gap-1.5"
                    >
                      <span>Formulas</span>
                    </button>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-2 text-[11px]">
                  <button
                    onClick={() => navigateTo('subject-detail', { subjectId: subject.id })}
                    className="py-1.5 px-2.5 rounded-lg bg-slate-50 dark:bg-surface-dark hover:bg-brand-light text-slate-600 dark:text-slate-300 font-medium flex items-center justify-center gap-1 border border-brand-soft"
                  >
                    <span>Syllabus Breakdown</span>
                  </button>
                  <button
                    onClick={() => navigateTo('question-bank', { subjectId: subject.id })}
                    className="py-1.5 px-2.5 rounded-lg bg-slate-50 dark:bg-surface-dark hover:bg-brand-light text-brand-dark dark:text-brand-primary font-medium flex items-center justify-center gap-1 border border-brand-soft"
                  >
                    <span>Solve PYQs</span>
                    <ArrowRight size={11} />
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
