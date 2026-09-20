import React, { useState } from 'react';
import {
  Bookmark,
  FileText,
  HelpCircle,
  Calculator,
  FolderTree,
  Trash2,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { Breadcrumbs } from '../common/Breadcrumbs';

export const BookmarksView: React.FC = () => {
  const {
    bookmarks,
    toggleBookmark,
    navigateTo
  } = useApp();

  const [activeTab, setActiveTab] = useState<'all' | 'note' | 'question' | 'formula' | 'topic'>('all');

  const filteredBookmarks = bookmarks.filter(b => {
    if (activeTab === 'all') return true;
    return b.type === activeTab;
  });

  const tabIcons = {
    note: FileText,
    question: HelpCircle,
    formula: Calculator,
    topic: FolderTree
  };

  const handleOpenItem = (b: typeof bookmarks[0]) => {
    if (b.type === 'note') {
      navigateTo('note-detail', { noteId: b.refId });
    } else if (b.type === 'question') {
      navigateTo('question-detail', { questionId: b.refId });
    } else if (b.type === 'formula') {
      navigateTo('formulas');
    } else if (b.type === 'topic') {
      navigateTo('syllabus');
    }
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <Breadcrumbs items={[{ label: 'Bookmarks' }]} />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-brand-border dark:border-surface-borderDark">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2.5">
            <Bookmark className="text-brand-dark dark:text-brand-primary fill-current" size={24} />
            My Bookmarked Study Materials
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Fast access to your saved notes, challenging questions, and essential formulas.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-mono font-semibold px-3 py-1.5 rounded-lg bg-brand-soft dark:bg-brand-dark/30 text-brand-dark dark:text-brand-primary">
            {bookmarks.length} Bookmarks Saved
          </span>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
        <button
          onClick={() => setActiveTab('all')}
          className={`px-3.5 py-2 rounded-xl font-semibold transition-colors ${
            activeTab === 'all'
              ? 'bg-brand-dark text-white'
              : 'bg-surface-light dark:bg-surface-cardDark text-slate-600 dark:text-slate-300 border border-brand-border'
          }`}
        >
          All ({bookmarks.length})
        </button>

        <button
          onClick={() => setActiveTab('note')}
          className={`px-3.5 py-2 rounded-xl font-semibold flex items-center gap-1.5 transition-colors ${
            activeTab === 'note'
              ? 'bg-brand-dark text-white'
              : 'bg-surface-light dark:bg-surface-cardDark text-slate-600 dark:text-slate-300 border border-brand-border'
          }`}
        >
          <FileText size={14} />
          <span>Notes ({bookmarks.filter(b => b.type === 'note').length})</span>
        </button>

        <button
          onClick={() => setActiveTab('question')}
          className={`px-3.5 py-2 rounded-xl font-semibold flex items-center gap-1.5 transition-colors ${
            activeTab === 'question'
              ? 'bg-brand-dark text-white'
              : 'bg-surface-light dark:bg-surface-cardDark text-slate-600 dark:text-slate-300 border border-brand-border'
          }`}
        >
          <HelpCircle size={14} />
          <span>Questions ({bookmarks.filter(b => b.type === 'question').length})</span>
        </button>

        <button
          onClick={() => setActiveTab('formula')}
          className={`px-3.5 py-2 rounded-xl font-semibold flex items-center gap-1.5 transition-colors ${
            activeTab === 'formula'
              ? 'bg-brand-dark text-white'
              : 'bg-surface-light dark:bg-surface-cardDark text-slate-600 dark:text-slate-300 border border-brand-border'
          }`}
        >
          <Calculator size={14} />
          <span>Formulas ({bookmarks.filter(b => b.type === 'formula').length})</span>
        </button>

        <button
          onClick={() => setActiveTab('topic')}
          className={`px-3.5 py-2 rounded-xl font-semibold flex items-center gap-1.5 transition-colors ${
            activeTab === 'topic'
              ? 'bg-brand-dark text-white'
              : 'bg-surface-light dark:bg-surface-cardDark text-slate-600 dark:text-slate-300 border border-brand-border'
          }`}
        >
          <FolderTree size={14} />
          <span>Topics ({bookmarks.filter(b => b.type === 'topic').length})</span>
        </button>
      </div>

      {/* Bookmarks List */}
      <div className="space-y-3">
        {filteredBookmarks.length === 0 ? (
          <div className="p-12 rounded-2xl bg-surface-light dark:bg-surface-cardDark border border-brand-border dark:border-surface-borderDark text-center space-y-3">
            <Bookmark size={32} className="mx-auto text-slate-300 dark:text-slate-600" />
            <div className="text-sm font-semibold text-slate-700 dark:text-slate-300">
              No bookmarks in this category yet.
            </div>
            <p className="text-xs text-slate-400">
              Click the bookmark button on any note, formula, or question to save it here.
            </p>
          </div>
        ) : (
          filteredBookmarks.map(b => {
            const Icon = tabIcons[b.type] || Bookmark;

            return (
              <div
                key={b.id}
                onClick={() => handleOpenItem(b)}
                className="bg-surface-light dark:bg-surface-cardDark rounded-2xl p-4 sm:p-5 border border-brand-border dark:border-surface-borderDark hover:border-brand-primary cursor-pointer transition-all shadow-academic flex items-center justify-between gap-4"
              >
                <div className="flex items-start gap-3.5 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-brand-soft text-brand-dark dark:bg-brand-dark/30 dark:text-brand-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon size={18} />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-brand-dark dark:text-brand-primary">
                      <span>{b.type}</span>
                      <span className="text-slate-400">&bull;</span>
                      <span className="text-slate-400 font-normal">{b.dateAdded}</span>
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-slate-800 dark:text-slate-100 truncate mt-0.5">
                      {b.title}
                    </h3>
                    <p className="text-xs text-slate-500 truncate mt-0.5">
                      {b.subtitle}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 flex-shrink-0">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleBookmark(b.type, b.refId, b.title, b.subtitle);
                    }}
                    className="p-2 rounded-lg text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-950/20 transition-colors"
                    title="Remove from bookmarks"
                  >
                    <Trash2 size={16} />
                  </button>
                  <ChevronRight size={18} className="text-slate-400" />
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
