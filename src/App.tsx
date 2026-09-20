import React from 'react';
import { useApp } from './context/AppContext';
import { Header } from './components/common/Header';
import { Sidebar } from './components/common/Sidebar';
import { DashboardView } from './components/views/DashboardView';
import { SyllabusView } from './components/views/SyllabusView';
import { SubjectsView } from './components/views/SubjectsView';
import { NotesView } from './components/views/NotesView';
import { PYQPapersView } from './components/views/PYQPapersView';
import { QuestionBankView } from './components/views/QuestionBankView';
import { FormulaSheetsView } from './components/views/FormulaSheetsView';
import { ImportantTopicsView } from './components/views/ImportantTopicsView';
import { RevisionView } from './components/views/RevisionView';
import { PracticeView } from './components/views/PracticeView';
import { ProgressView } from './components/views/ProgressView';
import { BookmarksView } from './components/views/BookmarksView';
import { AdminView } from './components/views/AdminView';
import { GlobalSearchModal } from './components/views/GlobalSearchModal';
import { NoteUploadModal } from './components/views/NoteUploadModal';

export const AppContent: React.FC = () => {
  const { currentRoute } = useApp();

  const renderActiveView = () => {
    switch (currentRoute) {
      case 'dashboard':
        return <DashboardView />;
      case 'syllabus':
        return <SyllabusView />;
      case 'subjects':
      case 'subject-detail':
        return <SubjectsView />;
      case 'notes':
      case 'note-detail':
        return <NotesView />;
      case 'pyq':
      case 'pyq-paper':
        return <PYQPapersView />;
      case 'question-bank':
      case 'question-detail':
        return <QuestionBankView />;
      case 'formulas':
        return <FormulaSheetsView />;
      case 'important-topics':
        return <ImportantTopicsView />;
      case 'revision':
        return <RevisionView />;
      case 'practice':
        return <PracticeView />;
      case 'progress':
        return <ProgressView />;
      case 'bookmarks':
        return <BookmarksView />;
      case 'search':
        return <QuestionBankView />;
      case 'admin':
      case 'settings':
        return <AdminView />;
      default:
        return <DashboardView />;
    }
  };

  return (
    <div className="min-h-screen bg-brand-light dark:bg-surface-dark flex flex-col md:flex-row font-sans transition-colors duration-200">
      {/* Sidebar Navigation */}
      <Sidebar />

      {/* Main App Layout */}
      <div className="flex-1 md:pl-64 flex flex-col min-h-screen">
        {/* Top Sticky Header */}
        <Header />

        {/* Scrollable Page View Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          {renderActiveView()}
        </main>

        {/* Footer */}
        <footer className="border-t border-brand-soft dark:border-surface-borderDark px-6 py-4 text-xs text-slate-400 dark:text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-2 no-print">
          <div>
            Personal GATE Examination Preparation Hub &bull; Targeted for Excellence
          </div>
          <div className="flex items-center gap-3 text-[11px]">
            <a
              href="https://gate2027.iitm.ac.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-dark dark:text-brand-primary font-semibold hover:underline"
            >
              Official GATE 2027 Portal (IIT Madras) ↗
            </a>
            <span>&bull;</span>
            <span>Version 1.0</span>
          </div>
        </footer>
      </div>

      {/* Modals */}
      <GlobalSearchModal />
      <NoteUploadModal />
    </div>
  );
};

export default function App() {
  return <AppContent />;
}
