import React from 'react';
import {
  LayoutDashboard,
  BookOpen,
  FolderTree,
  FileText,
  Clock,
  HelpCircle,
  FileSpreadsheet,
  Star,
  Sparkles,
  BarChart3,
  Search,
  Settings,
  X,
  Bookmark,
  LucideIcon
} from 'lucide-react';
import { useApp, AppRoute } from '../../context/AppContext';

export const Sidebar: React.FC = () => {
  const {
    currentRoute,
    navigateTo,
    isMobileNavOpen,
    setMobileNavOpen,
    bookmarks,
    topics,
    userProgress
  } = useApp();

  const completedTopicsCount = userProgress.completedTopicIds.length;
  const totalTopics = topics.length;

  const navItems: {
    id: AppRoute;
    label: string;
    icon: LucideIcon;
    badge?: string | number;
  }[] = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'syllabus', label: 'GATE Syllabus', icon: FolderTree },
    { id: 'subjects', label: 'Subjects', icon: BookOpen },
    { id: 'notes', label: 'Notes', icon: FileText },
    { id: 'pyq', label: 'Previous Year Papers', icon: Clock },
    { id: 'question-bank', label: 'Question Bank', icon: HelpCircle },
    { id: 'formulas', label: 'Formula Sheets', icon: FileSpreadsheet },
    { id: 'important-topics', label: 'Important Topics', icon: Star },
    { id: 'revision', label: 'Revision', icon: Sparkles },
    { id: 'practice', label: 'Practice Mode', icon: HelpCircle },
    { id: 'progress', label: 'Progress', icon: BarChart3, badge: `${completedTopicsCount}/${totalTopics}` },
    { id: 'bookmarks', label: 'Bookmarks', icon: Bookmark, badge: bookmarks.length },
    { id: 'search', label: 'Search', icon: Search },
    { id: 'admin', label: 'Settings & Admin', icon: Settings }
  ];

  return (
    <>
      {/* Mobile Backdrop */}
      {isMobileNavOpen && (
        <div
          onClick={() => setMobileNavOpen(false)}
          className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs z-40 md:hidden"
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed top-0 left-0 bottom-0 w-64 bg-surface-light dark:bg-surface-dark border-r border-brand-soft dark:border-surface-borderDark z-50 flex flex-col transition-transform duration-300 ease-in-out md:translate-x-0 ${
          isMobileNavOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full'
        }`}
      >
        {/* Brand Header */}
        <div className="h-16 flex items-center justify-between px-5 border-b border-brand-soft dark:border-surface-borderDark">
          <button
            onClick={() => navigateTo('dashboard')}
            className="flex items-center gap-2.5 text-left group"
          >
            <div className="w-9 h-9 rounded-xl bg-brand-dark text-white flex items-center justify-center font-bold text-base shadow-sm group-hover:bg-brand-hover transition-colors">
              G
            </div>
            <div>
              <div className="text-sm font-bold tracking-tight text-brand-dark dark:text-slate-100 flex items-center gap-1.5">
                GATE PREP
                <span className="text-[10px] bg-brand-primary text-slate-900 font-semibold px-1.5 py-0.2 rounded">
                  PORTAL
                </span>
              </div>
              <div className="text-[11px] text-slate-500 font-medium">Personal Study System</div>
            </div>
          </button>

          <button
            onClick={() => setMobileNavOpen(false)}
            className="md:hidden p-1.5 text-slate-400 hover:text-slate-600 rounded-lg"
          >
            <X size={18} />
          </button>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
          <div className="px-3 pb-2 text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
            Navigation Menu
          </div>

          {navItems.map(item => {
            const Icon = item.icon;
            const isActive =
              currentRoute === item.id ||
              (item.id === 'subjects' && currentRoute === 'subject-detail') ||
              (item.id === 'notes' && currentRoute === 'note-detail') ||
              (item.id === 'pyq' && currentRoute === 'pyq-paper') ||
              (item.id === 'question-bank' && currentRoute === 'question-detail');

            return (
              <button
                key={item.id}
                onClick={() => navigateTo(item.id)}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                  isActive
                    ? 'bg-brand-soft text-brand-dark font-semibold border-l-3 border-brand-dark dark:bg-brand-dark/20 dark:text-brand-primary dark:border-brand-primary'
                    : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-surface-cardDark hover:text-brand-dark dark:hover:text-brand-primary'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Icon
                    size={16}
                    className={isActive ? 'text-brand-dark dark:text-brand-primary' : 'text-slate-400 group-hover:text-brand-dark'}
                  />
                  <span>{item.label}</span>
                </div>

                {item.badge !== undefined && (
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono font-medium ${
                      isActive
                        ? 'bg-brand-primary/30 text-brand-dark dark:text-brand-primary'
                        : 'bg-slate-100 dark:bg-surface-borderDark text-slate-500'
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Official Portal Quick Link Box at Bottom */}
        <div className="p-3 border-t border-brand-soft dark:border-surface-borderDark">
          <div className="bg-brand-light dark:bg-surface-cardDark p-3 rounded-xl border border-brand-border dark:border-surface-borderDark text-xs">
            <div className="font-semibold text-brand-dark dark:text-brand-primary flex items-center justify-between">
              <span>GATE 2027 Portal</span>
              <span className="text-[10px] bg-brand-primary/20 text-brand-dark px-1.5 py-0.5 rounded">
                IITM
              </span>
            </div>
            <p className="text-[11px] text-slate-500 mt-1 leading-snug">
              Official updates, notification, and application portal.
            </p>
            <a
              href="https://gate2027.iitm.ac.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2.5 block text-center py-1.5 text-xs font-semibold text-white bg-brand-dark hover:bg-brand-hover rounded-lg transition-colors"
            >
              Open IITM Portal ↗
            </a>
          </div>
        </div>
      </aside>
    </>
  );
};
