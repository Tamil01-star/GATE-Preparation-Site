import React from 'react';
import { useApp } from './context/AppContext';
import { Header } from './components/common/Header';
import { Sidebar } from './components/common/Sidebar';
import { DashboardView } from './components/views/DashboardView';
import { NotesView } from './components/views/NotesView';
import { PYQPapersView } from './components/views/PYQPapersView';
import { QuestionBankView } from './components/views/QuestionBankView';
import { FormulaSheetsView } from './components/views/FormulaSheetsView';
import { AdminView } from './components/views/AdminView';
import { GlobalSearchModal } from './components/views/GlobalSearchModal';
import { NoteUploadModal } from './components/views/NoteUploadModal';

export const AppContent: React.FC = () => {
  const { currentRoute } = useApp();

  const renderActiveView = () => {
    switch (currentRoute) {
      case 'dashboard':
        return <DashboardView />;
      case 'subjects':
      case 'subject-detail':
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
      case 'admin':
      case 'settings':
        return <AdminView />;
      default:
        return <DashboardView />;
    }
  };

  return (
    <div className="min-h-screen bg-brand-light flex flex-col md:flex-row font-sans transition-colors duration-200">
      <Sidebar />
      <div className="flex-1 md:pl-64 flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          {renderActiveView()}
        </main>
      </div>
      <GlobalSearchModal />
      <NoteUploadModal />
    </div>
  );
};

export default function App() {
  return <AppContent />;
}
