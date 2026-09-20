import React from 'react';
import {
  LayoutDashboard,
  FileText,
  FileSpreadsheet,
  Clock,
  HelpCircle,
  Search,
  Settings,
  X,
  LucideIcon
} from 'lucide-react';
import { useApp, AppRoute } from '../../context/AppContext';

export const Sidebar: React.FC = () => {
  const {
    currentRoute,
    navigateTo,
    isMobileNavOpen,
    setMobileNavOpen,
  } = useApp();

  const navItems: {
    id: AppRoute;
    label: string;
    icon: LucideIcon;
  }[] = [
    { id: 'dashboard', label: 'Home', icon: LayoutDashboard },
    { id: 'notes', label: 'Notes', icon: FileText },
    { id: 'formulas', label: 'Formulae', icon: FileSpreadsheet },
    { id: 'pyq', label: 'Previous Year Papers', icon: Clock },
    { id: 'question-bank', label: 'Question Solutions', icon: HelpCircle },
    { id: 'search', label: 'Global Search', icon: Search }
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
        className={`fixed top-0 left-0 bottom-0 w-64 bg-surface-light dark:bg-surface-dark border-r border-brand-border dark:border-surface-borderDark z-50 flex flex-col transition-transform duration-300 ease-in-out md:translate-x-0 ${
          isMobileNavOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full'
        }`}
      >
        {/* Brand Header */}
        <div className="h-16 flex items-center justify-between px-5 border-b border-brand-border dark:border-surface-borderDark bg-brand-light/30 dark:bg-brand-dark/10">
          <button
            onClick={() => navigateTo('dashboard')}
            className="flex items-center gap-2.5 text-left group w-full"
          >
            <div className="w-8 h-8 rounded-lg bg-brand-dark text-white flex items-center justify-center font-bold text-sm shadow-sm group-hover:bg-brand-hover transition-colors shrink-0">
              G
            </div>
            <div className="overflow-hidden">
              <div className="text-xs font-bold tracking-tight text-brand-dark dark:text-brand-primary flex items-center gap-1.5 truncate">
                GATE KNOWLEDGE LIBRARY
              </div>
            </div>
          </button>

          <button
            onClick={() => setMobileNavOpen(false)}
            className="md:hidden p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-lg shrink-0"
          >
            <X size={18} />
          </button>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-1 bg-white dark:bg-surface-dark">
          <div className="px-3 pb-2 text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">
            Navigation Menu
          </div>

          {navItems.map(item => {
            const Icon = item.icon;
            const isActive =
              currentRoute === item.id ||
              (item.id === 'notes' && (currentRoute === 'subjects' || currentRoute === 'subject-detail' || currentRoute === 'note-detail')) ||
              (item.id === 'pyq' && currentRoute === 'pyq-paper') ||
              (item.id === 'question-bank' && currentRoute === 'question-detail');

            return (
              <button
                key={item.id}
                onClick={() => navigateTo(item.id)}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                  isActive
                    ? 'bg-brand-soft text-brand-dark border-l-4 border-brand-dark shadow-sm dark:bg-brand-dark/20 dark:text-brand-primary dark:border-brand-primary'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-surface-cardDark hover:text-brand-dark dark:hover:text-brand-primary'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon
                    size={16}
                    className={isActive ? 'text-brand-dark dark:text-brand-primary' : 'text-slate-400 group-hover:text-brand-dark dark:group-hover:text-brand-primary'}
                  />
                  <span>{item.label}</span>
                </div>
              </button>
            );
          })}
        </nav>
        
        {/* Settings at bottom */}
        <div className="p-3 border-t border-brand-border dark:border-surface-borderDark bg-white dark:bg-surface-dark">
             <button
                onClick={() => navigateTo('admin')}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                  currentRoute === 'admin'
                    ? 'bg-brand-soft text-brand-dark border-l-4 border-brand-dark shadow-sm dark:bg-brand-dark/20 dark:text-brand-primary dark:border-brand-primary'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-surface-cardDark hover:text-brand-dark dark:hover:text-brand-primary'
                }`}
              >
                <Settings size={16} className={currentRoute === 'admin' ? 'text-brand-dark dark:text-brand-primary' : 'text-slate-400'} />
                <span>Uploads & Settings</span>
             </button>
        </div>
      </aside>
    </>
  );
};
