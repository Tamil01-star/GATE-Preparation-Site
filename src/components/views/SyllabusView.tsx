import React, { useState } from 'react';
import {
  FolderTree,
  ChevronDown,
  ChevronRight,
  BookOpen,
  FileText,
  Clock,
  Sparkles,
  CheckCircle2,
  Circle,
  HelpCircle,
  Calculator,
  Plus,
  Download,
  ExternalLink
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { Topic, Unit, Subject } from '../../types';
import { Breadcrumbs } from '../common/Breadcrumbs';

export const SyllabusView: React.FC = () => {
  const {
    subjects,
    units,
    topics,
    notes,
    formulas,
    questions,
    userProgress,
    markTopicCompleted,
    markTopicRevision,
    navigateTo,
    setTopicImportance
  } = useApp();

  // Selected topic for side detail drawer/panel
  const [selectedTopic, setSelectedTopic] = useState<Topic>(topics[0]);

  // Collapsed states for subjects and units
  const [expandedSubjects, setExpandedSubjects] = useState<Record<string, boolean>>({
    'subj-digital': true,
    'subj-math': true
  });

  const [expandedUnits, setExpandedUnits] = useState<Record<string, boolean>>({
    'unit-dig-1': true,
    'unit-dig-2': true,
    'unit-dig-3': true,
    'unit-math-1': true
  });

  const toggleSubject = (subjId: string) => {
    setExpandedSubjects(prev => ({ ...prev, [subjId]: !prev[subjId] }));
  };

  const toggleUnit = (unitId: string) => {
    setExpandedUnits(prev => ({ ...prev, [unitId]: !prev[unitId] }));
  };

  // Details for current selected topic
  const selectedSubject = subjects.find(s => s.id === selectedTopic.subjectId);
  const selectedUnit = units.find(u => u.id === selectedTopic.unitId);
  const topicNotes = notes.filter(n => n.topicId === selectedTopic.id);
  const topicFormulas = formulas.filter(f => f.topicId === selectedTopic.id);
  const topicQuestions = questions.filter(q => q.topicId === selectedTopic.id);
  const isCompleted = userProgress.completedTopicIds.includes(selectedTopic.id);
  const isRevisionReady = userProgress.revisionCompletedTopicIds.includes(selectedTopic.id);

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: 'GATE Syllabus' }]} />

      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-brand-border dark:border-surface-borderDark">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2.5">
            <FolderTree className="text-brand-dark dark:text-brand-primary" size={24} />
            Official GATE Syllabus Hierarchy
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Hierarchical breakdown: GATE &rarr; Subject &rarr; Unit &rarr; Topic &rarr; Subtopic. Click any topic to inspect notes, formulas, PYQs, and revision status.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => navigateTo('admin')}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-surface-cardDark hover:bg-brand-soft border border-brand-border dark:border-surface-borderDark text-brand-dark dark:text-brand-primary text-xs font-semibold shadow-xs"
          >
            <Plus size={14} />
            <span>Add / Modify Topics</span>
          </button>
        </div>
      </div>

      {/* Official GATE 2027 ECE Syllabus Banner */}
      <div className="bg-gradient-to-r from-brand-dark to-brand-primary/90 text-white rounded-2xl p-5 shadow-academic flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-white/20 text-white text-[11px] font-bold uppercase tracking-wider backdrop-blur-xs">
            Official GATE 2027 Syllabus (IIT Madras)
          </div>
          <h2 className="text-lg font-bold">Electronics & Communication Engineering (EC)</h2>
          <p className="text-xs text-brand-light/90 max-w-2xl leading-relaxed">
            Strictly structured according to the official syllabus published by IIT Madras for GATE 2027. Covers all 8 core technical sections and mandatory General Aptitude.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2.5 flex-shrink-0">
          <a
            href="/syllabus/EC_GATE2027_Syllabus.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white text-brand-dark font-bold text-xs shadow hover:bg-brand-light transition-colors"
          >
            <Download size={15} />
            <span>Download Official Syllabus PDF</span>
          </a>
          <a
            href="https://gate2027.iitm.ac.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/15 hover:bg-white/25 text-white font-semibold text-xs border border-white/20 transition-colors"
          >
            <ExternalLink size={15} />
            <span>Official GATE Portal</span>
          </a>
        </div>
      </div>

      {/* Main Grid: Left Tree Navigation + Right Topic Detail Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Syllabus Tree (7 Cols) */}
        <div className="lg:col-span-7 bg-surface-light dark:bg-surface-cardDark rounded-2xl p-5 border border-brand-border dark:border-surface-borderDark shadow-academic space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-brand-soft dark:border-surface-borderDark text-xs font-bold uppercase tracking-wider text-slate-500">
            <span>Syllabus Tree Structure</span>
            <span className="text-[11px] font-normal text-slate-400">Click arrow to expand</span>
          </div>

          <div className="space-y-3">
            {subjects.map(subject => {
              const isSubjExpanded = expandedSubjects[subject.id] ?? false;
              const subjectUnits = units.filter(u => u.subjectId === subject.id);
              const subjectTopics = topics.filter(t => t.subjectId === subject.id);
              const subjectCompletedCount = subjectTopics.filter(t => userProgress.completedTopicIds.includes(t.id)).length;

              return (
                <div
                  key={subject.id}
                  className="rounded-xl border border-brand-soft dark:border-surface-borderDark overflow-hidden bg-brand-light/30 dark:bg-surface-dark/20"
                >
                  {/* Subject Node */}
                  <div
                    onClick={() => toggleSubject(subject.id)}
                    className="flex items-center justify-between p-3.5 bg-brand-soft/40 dark:bg-surface-cardDark cursor-pointer hover:bg-brand-soft/70 transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <button className="text-slate-400 hover:text-brand-dark">
                        {isSubjExpanded ? <ChevronDown size={17} /> : <ChevronRight size={17} />}
                      </button>
                      <BookOpen size={16} className="text-brand-dark dark:text-brand-primary" />
                      <span className="text-xs font-bold text-slate-800 dark:text-slate-100">
                        {subject.code}: {subject.name}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 text-xs">
                      <span className="text-[11px] text-slate-500">
                        {subjectCompletedCount}/{subjectTopics.length} done
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-brand-primary/20 text-brand-dark dark:text-brand-primary font-bold">
                        {subjectUnits.length} Units
                      </span>
                    </div>
                  </div>

                  {/* Units Tree */}
                  {isSubjExpanded && (
                    <div className="p-3 pl-6 space-y-2 border-t border-brand-soft dark:border-surface-borderDark">
                      {subjectUnits.map(unit => {
                        const isUnitExpanded = expandedUnits[unit.id] ?? false;
                        const unitTopics = topics.filter(t => t.unitId === unit.id);

                        return (
                          <div key={unit.id} className="rounded-lg border border-brand-border dark:border-surface-borderDark overflow-hidden bg-white dark:bg-surface-dark">
                            {/* Unit Node */}
                            <div
                              onClick={() => toggleUnit(unit.id)}
                              className="flex items-center justify-between p-2.5 bg-slate-50/70 dark:bg-surface-cardDark cursor-pointer hover:bg-brand-soft/30 transition-colors"
                            >
                              <div className="flex items-center gap-2">
                                <button className="text-slate-400">
                                  {isUnitExpanded ? <ChevronDown size={15} /> : <ChevronRight size={15} />}
                                </button>
                                <span className="text-xs font-semibold text-slate-700 dark:text-slate-200">
                                  Unit {unit.unitNumber}: {unit.title}
                                </span>
                              </div>
                              <span className="text-[11px] text-slate-400">{unitTopics.length} topics</span>
                            </div>

                            {/* Topics List */}
                            {isUnitExpanded && (
                              <div className="p-2 pl-6 space-y-1.5 bg-white dark:bg-surface-dark border-t border-slate-100 dark:border-surface-borderDark">
                                {unitTopics.map(topic => {
                                  const isSelected = selectedTopic.id === topic.id;
                                  const topicDone = userProgress.completedTopicIds.includes(topic.id);

                                  return (
                                    <div
                                      key={topic.id}
                                      onClick={() => setSelectedTopic(topic)}
                                      className={`flex items-center justify-between p-2 rounded-lg cursor-pointer transition-all text-xs ${
                                        isSelected
                                          ? 'bg-brand-soft text-brand-dark dark:bg-brand-dark/20 dark:text-brand-primary font-semibold ring-1 ring-brand-primary'
                                          : 'hover:bg-slate-50 dark:hover:bg-surface-cardDark text-slate-600 dark:text-slate-300'
                                      }`}
                                    >
                                      <div className="flex items-center gap-2">
                                        <button
                                          onClick={(e) => {
                                            e.stopPropagation();
                                            markTopicCompleted(topic.id);
                                          }}
                                          className="text-slate-400 hover:text-brand-dark"
                                          title={topicDone ? 'Mark as incomplete' : 'Mark as completed'}
                                        >
                                          {topicDone ? (
                                            <CheckCircle2 size={15} className="text-brand-dark dark:text-brand-primary fill-brand-primary/20" />
                                          ) : (
                                            <Circle size={15} />
                                          )}
                                        </button>
                                        <span>{topic.title}</span>
                                      </div>

                                      <div className="flex items-center gap-2">
                                        {topic.importance !== 'Normal' && (
                                          <span className="text-[10px] px-1.5 py-0.2 rounded bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-400 font-medium">
                                            {topic.importance}
                                          </span>
                                        )}
                                        <ChevronRight size={13} className="text-slate-300" />
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Topic Detail Drawer (5 Cols) */}
        <div className="lg:col-span-5 bg-surface-light dark:bg-surface-cardDark rounded-2xl p-5 border border-brand-border dark:border-surface-borderDark shadow-academic flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-brand-soft dark:border-surface-borderDark">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-dark dark:text-brand-primary">
                Selected Topic Overview
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => markTopicCompleted(selectedTopic.id)}
                  className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold transition-colors ${
                    isCompleted
                      ? 'bg-brand-primary text-slate-900'
                      : 'bg-brand-soft text-brand-dark hover:bg-brand-primary/30'
                  }`}
                >
                  <CheckCircle2 size={13} />
                  <span>{isCompleted ? 'Completed' : 'Mark Complete'}</span>
                </button>
              </div>
            </div>

            {/* Hierarchy Path Badge */}
            <div className="text-[11px] text-slate-500 font-medium flex items-center gap-1.5 flex-wrap">
              <span>{selectedSubject?.name}</span>
              <span>&rarr;</span>
              <span>Unit {selectedUnit?.unitNumber}</span>
              <span>&rarr;</span>
              <span className="text-brand-dark dark:text-brand-primary font-bold">{selectedTopic.title}</span>
            </div>

            <h2 className="text-lg font-bold text-slate-800 dark:text-slate-100">
              {selectedTopic.title}
            </h2>

            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed bg-brand-light dark:bg-surface-dark p-3.5 rounded-xl border border-brand-soft dark:border-surface-borderDark">
              {selectedTopic.overview}
            </p>

            {/* Subtopics breakdown */}
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Official Subtopics
              </div>
              <ul className="space-y-1.5">
                {selectedTopic.subtopics.map((sub, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-1.5 flex-shrink-0" />
                    <span>{sub}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Importance level selector */}
            <div className="pt-2">
              <span className="text-xs font-semibold text-slate-500 block mb-1.5">GATE Priority Tag:</span>
              <div className="flex flex-wrap gap-1.5">
                {(['Normal', 'Important', 'Very Important', 'Frequently Asked', 'High Priority'] as const).map(lvl => (
                  <button
                    key={lvl}
                    onClick={() => setTopicImportance(selectedTopic.id, lvl)}
                    className={`text-[10px] px-2 py-1 rounded-md font-medium transition-colors ${
                      selectedTopic.importance === lvl
                        ? 'bg-brand-dark text-white font-bold'
                        : 'bg-slate-100 dark:bg-surface-borderDark text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {lvl}
                  </button>
                ))}
              </div>
            </div>

            {/* Availability metrics */}
            <div className="grid grid-cols-3 gap-2 pt-2 border-t border-brand-soft dark:border-surface-borderDark">
              <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-surface-dark border border-brand-soft text-center">
                <div className="text-base font-bold text-slate-800 dark:text-slate-100">{topicNotes.length}</div>
                <div className="text-[10px] text-slate-400">Notes Available</div>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-surface-dark border border-brand-soft text-center">
                <div className="text-base font-bold text-slate-800 dark:text-slate-100">{topicFormulas.length}</div>
                <div className="text-[10px] text-slate-400">Key Formulas</div>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-surface-dark border border-brand-soft text-center">
                <div className="text-base font-bold text-slate-800 dark:text-slate-100">{topicQuestions.length}</div>
                <div className="text-[10px] text-slate-400">Related PYQs</div>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-4 border-t border-brand-soft dark:border-surface-borderDark space-y-2">
            {selectedSubject?.pdfHandbookUrl && (
              <a
                href={selectedSubject.pdfHandbookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl bg-brand-soft dark:bg-brand-dark/30 hover:bg-brand-soft/80 text-brand-dark dark:text-brand-primary border border-brand-border dark:border-surface-borderDark text-xs font-bold flex items-center justify-center gap-2 transition-colors"
              >
                <Download size={14} />
                <span>Download {selectedSubject.name} Master Handbook (PDF)</span>
              </a>
            )}

            <button
              onClick={() => navigateTo('notes', { topicId: selectedTopic.id, subjectId: selectedTopic.subjectId })}
              className="w-full py-2.5 rounded-xl bg-brand-dark hover:bg-brand-hover text-white text-xs font-semibold flex items-center justify-center gap-2 transition-colors shadow-sm"
            >
              <FileText size={15} />
              <span>Open Textbook Notes (12 Sections)</span>
            </button>

            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => navigateTo('formulas', { topicId: selectedTopic.id })}
                className="py-2 px-3 rounded-xl bg-brand-light dark:bg-surface-dark hover:bg-brand-soft border border-brand-border dark:border-surface-borderDark text-brand-dark dark:text-brand-primary text-xs font-medium flex items-center justify-center gap-1.5 transition-colors"
              >
                <Calculator size={14} />
                <span>Formulas ({topicFormulas.length})</span>
              </button>

              <button
                onClick={() => navigateTo('question-bank', { topicId: selectedTopic.id })}
                className="py-2 px-3 rounded-xl bg-brand-light dark:bg-surface-dark hover:bg-brand-soft border border-brand-border dark:border-surface-borderDark text-brand-dark dark:text-brand-primary text-xs font-medium flex items-center justify-center gap-1.5 transition-colors"
              >
                <HelpCircle size={14} />
                <span>Solve PYQs ({topicQuestions.length})</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
