import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { useApp, AppRoute } from '../../context/AppContext';

export interface BreadcrumbItem {
  label: string;
  route?: AppRoute;
  params?: Record<string, any>;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  const { navigateTo } = useApp();

  return (
    <nav className="flex items-center text-xs text-slate-500 dark:text-slate-400 py-2 overflow-x-auto whitespace-nowrap">
      <button
        onClick={() => navigateTo('dashboard')}
        className="flex items-center gap-1 hover:text-brand-dark dark:hover:text-brand-primary transition-colors font-medium"
      >
        <Home size={14} />
        <span>Home</span>
      </button>

      {items.map((item, index) => (
        <React.Fragment key={index}>
          <ChevronRight size={13} className="mx-2 text-slate-300 dark:text-slate-600 flex-shrink-0" />
          {item.route ? (
            <button
              onClick={() => navigateTo(item.route!, item.params)}
              className="hover:text-brand-dark dark:hover:text-brand-primary font-medium transition-colors"
            >
              {item.label}
            </button>
          ) : (
            <span className="text-brand-dark dark:text-brand-primary font-semibold">
              {item.label}
            </span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};
