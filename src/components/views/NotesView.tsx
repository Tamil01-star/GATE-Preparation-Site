import React, { useState } from 'react';
import {
  FileText,
  ChevronRight,
  BookOpen,
  FolderTree,
  ExternalLink,
  ChevronDown,
  AlertTriangle
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const NotesView: React.FC = () => {
  const {
    notes,
    topics,
    units,
    subjects,
    formulas,
    questions,
    routeParams,
    navigateTo
  } = useApp();

  const [expandedUnits, setExpandedUnits] = useState<Record<string, boolean>>({});
  
  // Resolve active subject
  const activeSubjectId = routeParams.subjectId || subjects[0]?.id;
  
  // Resolve active topic (or default to first topic of active subject)
  let activeTopicId = routeParams.topicId;
  if (!activeTopicId) {
    const subjUnits = units.filter(u => u.subjectId === activeSubjectId);
    if (subjUnits.length > 0) {
      const subjTopics = topics.filter(t => t.unitId === subjUnits[0].id);
      if (subjTopics.length > 0) activeTopicId = subjTopics[0].id;
    }
  }

  const activeTopic = topics.find(t => t.id === activeTopicId);
  const activeSubject = subjects.find(s => s.id === activeSubjectId);
  const activeNote = notes.find(n => n.topicId === activeTopicId);
  const topicFormulas = formulas.filter(f => f.topicId === activeTopicId);
  const topicQuestions = questions.filter(q => q.topicId === activeTopicId);

  const toggleUnit = (unitId: string) => {
    setExpandedUnits(prev => ({ ...prev, [unitId]: !prev[unitId] }));
  };

  return (
    <div className="flex h-[calc(100vh-4rem)] bg-white overflow-hidden animate-in fade-in duration-300">
      
      {/* LEFT PANE: Subject Navigation */}
      <div className="w-72 flex-shrink-0 border-r border-brand-border bg-brand-light/30 flex flex-col h-full overflow-hidden">
        {/* Subject Selector */}
        <div className="p-4 border-b border-brand-border">
          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5 block">
            Select Subject
          </label>
          <select 
            value={activeSubjectId}
            onChange={(e) => navigateTo('notes', { subjectId: e.target.value })}
            className="w-full p-2 text-sm bg-white border border-brand-border rounded-lg outline-none text-brand-text font-bold"
          >
            {subjects.map(s => (
              <option key={s.id} value={s.id}>{s.name}</option>
            ))}
          </select>
        </div>

        {/* Units and Topics Tree */}
        <div className="flex-1 overflow-y-auto p-3 space-y-1">
          {units.filter(u => u.subjectId === activeSubjectId).map(unit => {
            const unitTopics = topics.filter(t => t.unitId === unit.id);
            const isExpanded = expandedUnits[unit.id] ?? true;
            
            return (
              <div key={unit.id} className="mb-2">
                <button
                  onClick={() => toggleUnit(unit.id)}
                  className="flex items-center justify-between w-full p-2 text-left hover:bg-brand-soft rounded-lg group transition-colors"
                >
                  <div className="flex items-center gap-2 overflow-hidden">
                    <FolderTree size={14} className="text-brand-dark shrink-0" />
                    <span className="text-xs font-bold text-brand-text truncate">
                      {unit.title}
                    </span>
                  </div>
                  {isExpanded ? (
                    <ChevronDown size={14} className="text-slate-400" />
                  ) : (
                    <ChevronRight size={14} className="text-slate-400" />
                  )}
                </button>
                
                {isExpanded && (
                  <div className="ml-4 pl-3 mt-1 border-l border-brand-border space-y-0.5">
                    {unitTopics.map(topic => (
                      <button
                        key={topic.id}
                        onClick={() => navigateTo('notes', { subjectId: activeSubjectId, topicId: topic.id })}
                        className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors truncate ${
                          activeTopicId === topic.id
                            ? 'bg-brand-primary/20 text-brand-dark border border-brand-primary/30'
                            : 'text-slate-500 hover:text-brand-text hover:bg-brand-soft'
                        }`}
                      >
                        {topic.title}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* RIGHT PANE: Content Viewer */}
      <div className="flex-1 h-full overflow-y-auto bg-white p-6 md:p-10 scroll-smooth">
        {activeTopic ? (
          <div className="max-w-4xl mx-auto space-y-10 pb-20">
            
            {/* Header */}
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-brand-dark uppercase tracking-wider mb-3">
                <span>{activeSubject?.name}</span>
                <ChevronRight size={12} />
                <span>{activeTopic.title}</span>
              </div>
              <h1 className="text-3xl font-black text-brand-text">
                {activeTopic.title}
              </h1>
              {activeTopic.overview && (
                <p className="text-slate-500 mt-3 text-sm leading-relaxed">
                  {activeTopic.overview}
                </p>
              )}
            </div>

            {/* Note Content Section */}
            {activeNote ? (
              <div className="space-y-8">
                
                {/* 1. Theory & Notes */}
                <section>
                  <h2 className="text-xl font-bold text-brand-text flex items-center gap-2 mb-4 pb-2 border-b border-brand-border">
                    <FileText size={20} className="text-brand-dark" />
                    Structured Notes
                  </h2>
                  <div className="prose prose-sm prose-slate max-w-none text-slate-600">
                    <p className="font-semibold text-brand-text mb-4">{activeNote.topicIntroduction}</p>
                    
                    <h4 className="font-bold text-brand-text mt-6 mb-2">Core Concepts</h4>
                    <ul className="list-disc pl-5 space-y-2">
                      {activeNote.coreConcepts.map((c, i) => <li key={i}>{c}</li>)}
                    </ul>

                    {activeNote.detailedExplanation.map((exp, i) => (
                      <div key={i} className="mt-6 whitespace-pre-wrap">{exp}</div>
                    ))}
                  </div>
                </section>

                {/* 2. Formulae */}
                {topicFormulas.length > 0 && (
                  <section>
                    <h2 className="text-xl font-bold text-brand-text flex items-center gap-2 mb-4 pb-2 border-b border-brand-border">
                      <BookOpen size={20} className="text-brand-dark" />
                      Important Formulae
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {topicFormulas.map(f => (
                        <div key={f.id} className="math-formula-box shadow-sm">
                          <div className="text-xs font-bold text-slate-500 mb-2 uppercase">{f.formulaName}</div>
                          <div className="text-lg font-black text-brand-dark my-2 tracking-wider">{f.latex}</div>
                          <div className="text-[11px] text-slate-500 mt-2">{f.whenToUse}</div>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {/* 3. Important Points / Tricks */}
                {activeNote.shortcutsAndTricks.length > 0 && (
                  <section>
                    <h2 className="text-xl font-bold text-brand-text flex items-center gap-2 mb-4 pb-2 border-b border-brand-border">
                      <AlertTriangle size={20} className="text-brand-dark" />
                      Important Points & Shortcuts
                    </h2>
                    <div className="bg-brand-light border border-brand-border rounded-xl p-5 space-y-3">
                      {activeNote.shortcutsAndTricks.map((trick, i) => (
                        <div key={i} className="text-sm font-semibold text-brand-text flex items-start gap-2">
                          <span className="text-brand-primary mt-0.5">•</span>
                          <span>{trick}</span>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {/* 4. Related PYQs */}
                {topicQuestions.length > 0 && (
                  <section>
                    <h2 className="text-xl font-bold text-brand-text flex items-center gap-2 mb-4 pb-2 border-b border-brand-border">
                      <FileText size={20} className="text-brand-dark" />
                      Related PYQs
                    </h2>
                    <div className="space-y-4">
                      {topicQuestions.map(q => (
                        <div key={q.id} className="border border-brand-border rounded-xl p-5 bg-white hover:border-brand-primary transition-colors cursor-pointer" onClick={() => navigateTo('question-detail', { questionId: q.id })}>
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-xs font-bold text-brand-dark bg-brand-light px-2 py-1 rounded">
                              {q.sourcePaper}
                            </span>
                            <span className="text-xs text-slate-400 font-semibold">{q.type} - {q.marks} Mark</span>
                          </div>
                          <p className="text-sm font-semibold text-slate-700">{q.questionText}</p>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {/* 5. Original Document Link */}
                {activeNote.uploadedFiles && activeNote.uploadedFiles.length > 0 && (
                  <section className="pt-6">
                    <a 
                      href={activeNote.uploadedFiles[0].fileUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 bg-brand-dark hover:bg-brand-hover text-white rounded-xl font-bold text-sm transition-colors shadow-md shadow-brand-primary/20"
                    >
                      <ExternalLink size={16} />
                      View Original Subject Document
                    </a>
                  </section>
                )}
                
              </div>
            ) : (
              <div className="text-center py-20 bg-brand-light rounded-2xl border border-dashed border-brand-primary">
                <p className="text-brand-dark font-semibold">No structured notes found for this topic yet.</p>
              </div>
            )}
            
          </div>
        ) : (
          <div className="flex h-full items-center justify-center text-slate-400">
            Select a topic from the sidebar to view notes.
          </div>
        )}
      </div>
    </div>
  );
};
