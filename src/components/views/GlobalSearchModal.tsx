import React, { useState, useMemo } from 'react';
import {
  Search,
  X,
  FileText,
  HelpCircle,
  Calculator,
  FolderTree,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const GlobalSearchModal: React.FC = () => {
  const {
    isSearchModalOpen,
    setSearchModalOpen,
    notes,
    questions,
    formulas,
    topics,
    subjects,
    navigateTo
  } = useApp();

  const [query, setQuery] = useState('');

  // Multi-entity search across notes, questions, formulas, topics (Section 13)
  const searchResults = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();

    const results: {
      id: string;
      category: 'Note' | 'Question' | 'Formula' | 'Topic';
      title: string;
      subtitle: string;
      snippet: string;
      action: () => void;
    }[] = [];

    // Search Notes
    notes.forEach(note => {
      const matchInTitle = note.title.toLowerCase().includes(q);
      const matchInIntro = note.topicIntroduction.toLowerCase().includes(q);
      const matchInExp = note.detailedExplanation.some(e => e.toLowerCase().includes(q));
      if (matchInTitle || matchInIntro || matchInExp) {
        results.push({
          id: `note-${note.id}`,
          category: 'Note',
          title: note.title,
          subtitle: `Textbook Note &bull; Updated ${note.lastUpdated}`,
          snippet: note.topicIntroduction.slice(0, 120) + '...',
          action: () => {
            setSearchModalOpen(false);
            navigateTo('note-detail', { noteId: note.id, topicId: note.topicId });
          }
        });
      }
    });

    // Search Questions
    questions.forEach(question => {
      const matchInText = question.questionText.toLowerCase().includes(q);
      const matchInConcept = question.conceptTested.toLowerCase().includes(q);
      const matchInExp = question.detailedExplanation.toLowerCase().includes(q);
      if (matchInText || matchInConcept || matchInExp) {
        results.push({
          id: `q-${question.id}`,
          category: 'Question',
          title: `${question.sourcePaper} &bull; Q${question.questionNumber} (${question.type}, ${question.marks}M)`,
          subtitle: `Concept: ${question.conceptTested}`,
          snippet: question.questionText.slice(0, 120) + '...',
          action: () => {
            setSearchModalOpen(false);
            navigateTo('question-detail', { questionId: question.id });
          }
        });
      }
    });

    // Search Formulas
    formulas.forEach(formula => {
      const matchInName = formula.formulaName.toLowerCase().includes(q);
      const matchInLatex = formula.latex.toLowerCase().includes(q);
      const matchInUse = formula.whenToUse.toLowerCase().includes(q);
      if (matchInName || matchInLatex || matchInUse) {
        results.push({
          id: `form-${formula.id}`,
          category: 'Formula',
          title: formula.formulaName,
          subtitle: `${formula.chapterTitle} &bull; ${formula.latex}`,
          snippet: formula.whenToUse,
          action: () => {
            setSearchModalOpen(false);
            navigateTo('formulas', { topicId: formula.topicId, subjectId: formula.subjectId });
          }
        });
      }
    });

    // Search Topics
    topics.forEach(topic => {
      const matchInTitle = topic.title.toLowerCase().includes(q);
      const matchInSub = topic.subtopics.some(s => s.toLowerCase().includes(q));
      if (matchInTitle || matchInSub) {
        results.push({
          id: `top-${topic.id}`,
          category: 'Topic',
          title: topic.title,
          subtitle: `GATE Syllabus Topic &bull; ${topic.importance}`,
          snippet: topic.overview,
          action: () => {
            setSearchModalOpen(false);
            navigateTo('syllabus', { topicId: topic.id });
          }
        });
      }
    });

    return results;
  }, [query, notes, questions, formulas, topics, setSearchModalOpen, navigateTo]);

  if (!isSearchModalOpen) return null;

  const categoryBadges = {
    Note: 'bg-teal-100 text-teal-800 dark:bg-teal-900/40 dark:text-teal-300',
    Question: 'bg-amber-100 text-amber-800 dark:bg-amber-950/40 dark:text-amber-300',
    Formula: 'bg-brand-soft text-brand-dark dark:bg-brand-dark/30 dark:text-brand-primary',
    Topic: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300'
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-start justify-center p-4 sm:p-6 sm:pt-20">
      <div className="w-full max-w-2xl bg-surface-light dark:bg-surface-cardDark rounded-2xl shadow-2xl border border-brand-border dark:border-surface-borderDark overflow-hidden flex flex-col max-h-[80vh]">
        {/* Search Input Bar */}
        <div className="p-4 border-b border-brand-soft dark:border-surface-borderDark flex items-center gap-3">
          <Search size={18} className="text-brand-dark dark:text-brand-primary" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search across questions, answers, notes, topics, formulas..."
            className="w-full bg-transparent text-sm font-medium text-slate-800 dark:text-slate-100 placeholder-slate-400 outline-hidden"
          />
          <button
            onClick={() => setSearchModalOpen(false)}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
          >
            <X size={18} />
          </button>
        </div>

        {/* Quick Sample Search Suggestions */}
        {!query && (
          <div className="p-6 text-xs text-slate-500 space-y-3">
            <div className="font-semibold uppercase text-slate-400 text-[10px] tracking-wider">
              Popular Search Queries
            </div>
            <div className="flex flex-wrap gap-2">
              {['Flip-Flop', 'Setup Time', 'Fourier Transform', 'Eigenvalues', 'Cayley-Hamilton', 'Parseval', 'Multiplexer', 'Johnson Counter'].map(term => (
                <button
                  key={term}
                  onClick={() => setQuery(term)}
                  className="px-2.5 py-1 rounded-lg bg-brand-light dark:bg-surface-dark border border-brand-soft hover:border-brand-primary text-slate-700 dark:text-slate-300 font-medium transition-colors"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Results Stream */}
        {query && (
          <div className="overflow-y-auto p-3 space-y-2 flex-1">
            {searchResults.length === 0 ? (
              <div className="p-8 text-center text-xs text-slate-400">
                No matching study material found for &ldquo;{query}&rdquo;.
              </div>
            ) : (
              searchResults.map(res => (
                <div
                  key={res.id}
                  onClick={res.action}
                  className="p-3.5 rounded-xl hover:bg-brand-soft/50 dark:hover:bg-brand-dark/20 border border-transparent hover:border-brand-primary/40 cursor-pointer transition-all flex items-start justify-between gap-3 group"
                >
                  <div className="space-y-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] px-2 py-0.2 rounded-full font-bold ${categoryBadges[res.category]}`}>
                        {res.category}
                      </span>
                      <span className="text-xs font-bold text-slate-800 dark:text-slate-100 truncate">
                        {res.title}
                      </span>
                    </div>
                    <div className="text-[11px] text-brand-dark dark:text-brand-primary font-medium truncate">
                      {res.subtitle}
                    </div>
                    <div className="text-xs text-slate-500 line-clamp-2">
                      {res.snippet}
                    </div>
                  </div>
                  <ChevronRight size={16} className="text-slate-400 group-hover:text-brand-dark dark:group-hover:text-brand-primary flex-shrink-0 mt-2" />
                </div>
              ))
            )}
          </div>
        )}

        {/* Footer Hint */}
        <div className="px-4 py-2.5 bg-slate-50 dark:bg-surface-dark border-t border-brand-soft dark:border-surface-borderDark text-[11px] text-slate-400 flex items-center justify-between">
          <span>{searchResults.length} results matching</span>
          <span>Press <kbd className="px-1 py-0.5 rounded bg-white dark:bg-surface-cardDark border font-mono text-[10px]">Esc</kbd> to close</span>
        </div>
      </div>
    </div>
  );
};
