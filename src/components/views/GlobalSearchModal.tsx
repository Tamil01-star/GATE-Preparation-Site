import React, { useState, useMemo } from 'react';
import {
  Search,
  X,
  FileText,
  HelpCircle,
  FileSpreadsheet,
  FolderTree,
  ChevronRight
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
    units,
    navigateTo
  } = useApp();

  const [query, setQuery] = useState('');

  const searchResults = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();

    const results: {
      id: string;
      category: 'Notes' | 'Formulae' | 'PYQ' | 'Topic';
      title: string;
      action: () => void;
    }[] = [];

    const getPath = (subjectId: string, unitId: string, topicId: string) => {
      const s = subjects.find(s => s.id === subjectId)?.name || '';
      const t = topics.find(t => t.id === topicId)?.title || '';
      return `${s} ? ${t}`;
    };

    // Topics & Subjects
    topics.forEach(t => {
      if (t.title.toLowerCase().includes(q)) {
        const s = subjects.find(sub => sub.id === t.subjectId)?.name || '';
        results.push({
          id: `top-${t.id}`,
          category: 'Topic',
          title: `Syllabus ? ${s} ? ${t.title}`,
          action: () => {
            setSearchModalOpen(false);
            navigateTo('notes', { subjectId: t.subjectId, topicId: t.id });
          }
        });
      }
    });

    // Notes
    notes.forEach(note => {
      if (
        note.title.toLowerCase().includes(q) ||
        note.topicIntroduction.toLowerCase().includes(q) ||
        note.detailedExplanation.some(e => e.toLowerCase().includes(q)) ||
        note.coreConcepts.some(c => c.toLowerCase().includes(q))
      ) {
        results.push({
          id: `note-${note.id}`,
          category: 'Notes',
          title: `Notes ? ${getPath(note.subjectId, note.unitId, note.topicId)}`,
          action: () => {
            setSearchModalOpen(false);
            navigateTo('notes', { subjectId: note.subjectId, topicId: note.topicId });
          }
        });
      }
    });

    // Formulas
    formulas.forEach(f => {
      if (f.formulaName.toLowerCase().includes(q) || f.latex.toLowerCase().includes(q)) {
        results.push({
          id: `form-${f.id}`,
          category: 'Formulae',
          title: `Formulae ? ${f.formulaName}`,
          action: () => {
            setSearchModalOpen(false);
            navigateTo('formulas', { subjectId: f.subjectId });
          }
        });
      }
    });

    // Questions (PYQ)
    questions.forEach(qItem => {
      if (
        qItem.questionText.toLowerCase().includes(q) ||
        qItem.conceptTested.toLowerCase().includes(q) ||
        (qItem.detailedExplanation && qItem.detailedExplanation.toLowerCase().includes(q)) ||
        (qItem.steps && qItem.steps.some(s => s.toLowerCase().includes(q)))
      ) {
        results.push({
          id: `q-${qItem.id}`,
          category: 'PYQ',
          title: `PYQ ${qItem.year} ? Question ${qItem.questionNumber}`,
          action: () => {
            setSearchModalOpen(false);
            navigateTo('question-detail', { questionId: qItem.id });
          }
        });
      }
    });

    return results;
  }, [query, notes, questions, formulas, topics, subjects, navigateTo, setSearchModalOpen]);

  if (!isSearchModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-start justify-center p-4 pt-[10vh]">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-brand-border overflow-hidden flex flex-col max-h-[80vh] animate-in slide-in-from-top-4 duration-200">
        <div className="p-4 border-b border-brand-border flex items-center gap-3 bg-brand-light/30">
          <Search size={20} className="text-brand-dark" />
          <input
            autoFocus
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search notes, formulas, previous year questions, solutions..."
            className="flex-1 bg-transparent border-none outline-none text-brand-text font-medium placeholder-slate-400"
          />
          <button
            onClick={() => setSearchModalOpen(false)}
            className="p-1 rounded-lg text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-2 bg-white">
          {query.trim() === '' ? (
            <div className="p-8 text-center text-slate-400 flex flex-col items-center">
              <Search size={32} className="mb-3 opacity-20" />
              <p className="text-sm font-semibold">Start typing to search the library...</p>
              <p className="text-xs mt-1">Search across syllabus, notes, formulas, and PYQs</p>
            </div>
          ) : searchResults.length === 0 ? (
            <div className="p-8 text-center text-slate-500">
              <p className="text-sm font-semibold">No results found for "{query}"</p>
            </div>
          ) : (
            <div className="space-y-1">
              <div className="px-3 pt-2 pb-1 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                Search Results ({searchResults.length})
              </div>
              {searchResults.map(res => (
                <button
                  key={res.id}
                  onClick={res.action}
                  className="w-full text-left p-3 rounded-xl hover:bg-brand-light border border-transparent hover:border-brand-border transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white border border-brand-border flex items-center justify-center shrink-0">
                      {res.category === 'Notes' && <FileText size={14} className="text-brand-dark" />}
                      {res.category === 'PYQ' && <HelpCircle size={14} className="text-brand-dark" />}
                      {res.category === 'Formulae' && <FileSpreadsheet size={14} className="text-brand-dark" />}
                      {res.category === 'Topic' && <FolderTree size={14} className="text-brand-dark" />}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-brand-text flex items-center gap-2">
                        {res.title.split('?').map((part, i, arr) => (
                          <React.Fragment key={i}>
                            <span className={i === arr.length - 1 ? 'text-brand-dark' : 'text-slate-500'}>
                              {part.trim()}
                            </span>
                            {i < arr.length - 1 && <ChevronRight size={12} className="text-slate-300" />}
                          </React.Fragment>
                        ))}
                      </h4>
                    </div>
                  </div>
                  <ChevronRight size={16} className="text-slate-300 group-hover:text-brand-primary" />
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
