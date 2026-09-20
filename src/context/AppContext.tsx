import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import {
  Subject,
  Unit,
  Topic,
  Note,
  Formula,
  Question,
  QuestionPaper,
  Bookmark,
  UserStudyProgress,
  ImportanceLevel,
  UploadedFileMeta
} from '../types';
import {
  INITIAL_SUBJECTS,
  INITIAL_UNITS,
  INITIAL_TOPICS,
  INITIAL_NOTES,
  INITIAL_FORMULAS,
  INITIAL_QUESTIONS,
  INITIAL_PAPERS,
  INITIAL_USER_PROGRESS,
  INITIAL_BOOKMARKS
} from '../data';

export type AppRoute =
  | 'dashboard'
  | 'syllabus'
  | 'subjects'
  | 'subject-detail'
  | 'notes'
  | 'note-detail'
  | 'pyq'
  | 'pyq-paper'
  | 'question-bank'
  | 'question-detail'
  | 'formulas'
  | 'important-topics'
  | 'revision'
  | 'practice'
  | 'bookmarks'
  | 'progress'
  | 'search'
  | 'admin'
  | 'settings';

export interface RouteParams {
  subjectId?: string;
  unitId?: string;
  topicId?: string;
  noteId?: string;
  questionId?: string;
  paperYear?: number;
  searchQuery?: string;
}

interface AppContextType {
  currentRoute: AppRoute;
  routeParams: RouteParams;
  navigateTo: (route: AppRoute, params?: RouteParams) => void;
  subjects: Subject[];
  units: Unit[];
  topics: Topic[];
  notes: Note[];
  formulas: Formula[];
  questions: Question[];
  papers: QuestionPaper[];
  bookmarks: Bookmark[];
  userProgress: UserStudyProgress;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  isSearchModalOpen: boolean;
  setSearchModalOpen: (open: boolean) => void;
  isUploadModalOpen: boolean;
  setUploadModalOpen: (open: boolean) => void;
  isMobileNavOpen: boolean;
  setMobileNavOpen: (open: boolean) => void;
  isAuthenticated: boolean;
  userProfile: { name: string; exam: string; targetYear: string };
  toggleBookmark: (type: 'note' | 'question' | 'formula' | 'topic', refId: string, title: string, subtitle: string) => void;
  isBookmarked: (type: 'note' | 'question' | 'formula' | 'topic', refId: string) => boolean;
  markTopicCompleted: (topicId: string, completed?: boolean) => void;
  markTopicRevision: (topicId: string) => void;
  recordQuestionAttempt: (questionId: string, selectedAnswer: string, isCorrect: boolean) => void;
  setTopicImportance: (topicId: string, level: ImportanceLevel) => void;
  addSubject: (subj: Omit<Subject, 'id' | 'order'>) => void;
  addUnit: (unit: Omit<Unit, 'id' | 'order'>) => void;
  addTopic: (topic: Omit<Topic, 'id' | 'order'>) => void;
  addFormula: (formula: Omit<Formula, 'id' | 'order'>) => void;
  addQuestion: (q: Omit<Question, 'id'>) => void;
  addUploadedFileToNote: (meta: UploadedFileMeta) => void;
  resetAllData: () => void;
  exportDataJSON: () => void;
  importDataJSON: (jsonStr: string) => boolean;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const STORAGE_KEYS = {
  SUBJECTS: 'gate_hub_subjects_v1',
  UNITS: 'gate_hub_units_v1',
  TOPICS: 'gate_hub_topics_v1',
  NOTES: 'gate_hub_notes_v1',
  FORMULAS: 'gate_hub_formulas_v1',
  QUESTIONS: 'gate_hub_questions_v1',
  PAPERS: 'gate_hub_papers_v1',
  BOOKMARKS: 'gate_hub_bookmarks_v1',
  PROGRESS: 'gate_hub_progress_v1',
  DARK_MODE: 'gate_hub_dark_mode_v1'
};

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentRoute, setCurrentRoute] = useState<AppRoute>('dashboard');
  const [routeParams, setRouteParams] = useState<RouteParams>({});

  // Theme
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.DARK_MODE);
    return saved ? JSON.parse(saved) : false;
  });

  // UI Modals
  const [isSearchModalOpen, setSearchModalOpen] = useState(false);
  const [isUploadModalOpen, setUploadModalOpen] = useState(false);
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  // User Profile
  const [userProfile] = useState({
    name: 'Tamil',
    exam: 'GATE ECE / Common Core',
    targetYear: '2026 / 2027'
  });
  const [isAuthenticated] = useState(true);

  // Data Collections with LocalStorage caching
  const [subjects, setSubjects] = useState<Subject[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.SUBJECTS);
    return saved ? JSON.parse(saved) : INITIAL_SUBJECTS;
  });

  const [units, setUnits] = useState<Unit[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.UNITS);
    return saved ? JSON.parse(saved) : INITIAL_UNITS;
  });

  const [topics, setTopics] = useState<Topic[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.TOPICS);
    return saved ? JSON.parse(saved) : INITIAL_TOPICS;
  });

  const [notes, setNotes] = useState<Note[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.NOTES);
    return saved ? JSON.parse(saved) : INITIAL_NOTES;
  });

  const [formulas, setFormulas] = useState<Formula[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.FORMULAS);
    return saved ? JSON.parse(saved) : INITIAL_FORMULAS;
  });

  const [questions, setQuestions] = useState<Question[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.QUESTIONS);
    return saved ? JSON.parse(saved) : INITIAL_QUESTIONS;
  });

  const [papers] = useState<QuestionPaper[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.PAPERS);
    return saved ? JSON.parse(saved) : INITIAL_PAPERS;
  });

  const [bookmarks, setBookmarks] = useState<Bookmark[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.BOOKMARKS);
    return saved ? JSON.parse(saved) : INITIAL_BOOKMARKS;
  });

  const [userProgress, setUserProgress] = useState<UserStudyProgress>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.PROGRESS);
    return saved ? JSON.parse(saved) : INITIAL_USER_PROGRESS;
  });

  // Sync with LocalStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.SUBJECTS, JSON.stringify(subjects));
  }, [subjects]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.UNITS, JSON.stringify(units));
  }, [units]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.TOPICS, JSON.stringify(topics));
  }, [topics]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.NOTES, JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.FORMULAS, JSON.stringify(formulas));
  }, [formulas]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.QUESTIONS, JSON.stringify(questions));
  }, [questions]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.BOOKMARKS, JSON.stringify(bookmarks));
  }, [bookmarks]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.PROGRESS, JSON.stringify(userProgress));
  }, [userProgress]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.DARK_MODE, JSON.stringify(isDarkMode));
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Global hotkeys (Ctrl+K for search)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setSearchModalOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const toggleDarkMode = () => setIsDarkMode(prev => !prev);

  const navigateTo = (route: AppRoute, params: RouteParams = {}) => {
    setCurrentRoute(route);
    setRouteParams(params);
    setMobileNavOpen(false);

    // Track recently opened items in progress
    if (params.subjectId) {
      setUserProgress(prev => ({ ...prev, lastOpenedSubjectId: params.subjectId! }));
    }
    if (params.topicId) {
      setUserProgress(prev => ({ ...prev, lastOpenedTopicId: params.topicId! }));
    }
    if (params.questionId) {
      setUserProgress(prev => ({ ...prev, lastSolvedQuestionId: params.questionId! }));
    }

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isBookmarked = (type: 'note' | 'question' | 'formula' | 'topic', refId: string): boolean => {
    return bookmarks.some(b => b.type === type && b.refId === refId);
  };

  const toggleBookmark = (type: 'note' | 'question' | 'formula' | 'topic', refId: string, title: string, subtitle: string) => {
    setBookmarks(prev => {
      const exists = prev.some(b => b.type === type && b.refId === refId);
      if (exists) {
        return prev.filter(b => !(b.type === type && b.refId === refId));
      } else {
        const newBm: Bookmark = {
          id: `bm-${Date.now()}`,
          type,
          refId,
          title,
          subtitle,
          dateAdded: new Date().toISOString().split('T')[0]
        };
        return [newBm, ...prev];
      }
    });
  };

  const markTopicCompleted = (topicId: string, completed?: boolean) => {
    setUserProgress(prev => {
      const isCurrentlyCompleted = prev.completedTopicIds.includes(topicId);
      const shouldComplete = completed !== undefined ? completed : !isCurrentlyCompleted;

      let newIds = prev.completedTopicIds;
      if (shouldComplete && !isCurrentlyCompleted) {
        newIds = [...prev.completedTopicIds, topicId];
      } else if (!shouldComplete && isCurrentlyCompleted) {
        newIds = prev.completedTopicIds.filter(id => id !== topicId);
      }
      return { ...prev, completedTopicIds: newIds };
    });
  };

  const markTopicRevision = (topicId: string) => {
    setUserProgress(prev => {
      const exists = prev.revisionCompletedTopicIds.includes(topicId);
      return {
        ...prev,
        revisionCompletedTopicIds: exists
          ? prev.revisionCompletedTopicIds.filter(id => id !== topicId)
          : [...prev.revisionCompletedTopicIds, topicId]
      };
    });
  };

  const recordQuestionAttempt = (questionId: string, selectedAnswer: string, isCorrect: boolean) => {
    setUserProgress(prev => ({
      ...prev,
      lastSolvedQuestionId: questionId,
      solvedQuestions: {
        ...prev.solvedQuestions,
        [questionId]: {
          isCorrect,
          selected: selectedAnswer,
          date: new Date().toISOString().split('T')[0]
        }
      }
    }));
  };

  const setTopicImportance = (topicId: string, level: ImportanceLevel) => {
    setTopics(prev => prev.map(t => t.id === topicId ? { ...t, importance: level } : t));
  };

  const addSubject = (subj: Omit<Subject, 'id' | 'order'>) => {
    const newSubject: Subject = {
      ...subj,
      id: `subj-${Date.now()}`,
      order: subjects.length + 1
    };
    setSubjects(prev => [...prev, newSubject]);
  };

  const addUnit = (unit: Omit<Unit, 'id' | 'order'>) => {
    const newUnit: Unit = {
      ...unit,
      id: `unit-${Date.now()}`,
      order: units.filter(u => u.subjectId === unit.subjectId).length + 1
    };
    setUnits(prev => [...prev, newUnit]);
  };

  const addTopic = (topic: Omit<Topic, 'id' | 'order'>) => {
    const newTopic: Topic = {
      ...topic,
      id: `top-${Date.now()}`,
      order: topics.filter(t => t.unitId === topic.unitId).length + 1
    };
    setTopics(prev => [...prev, newTopic]);
  };

  const addFormula = (formula: Omit<Formula, 'id' | 'order'>) => {
    const newFormula: Formula = {
      ...formula,
      id: `form-${Date.now()}`,
      order: formulas.length + 1
    };
    setFormulas(prev => [...prev, newFormula]);
  };

  const addQuestion = (q: Omit<Question, 'id'>) => {
    const newQ: Question = {
      ...q,
      id: `q-custom-${Date.now()}`
    };
    setQuestions(prev => [newQ, ...prev]);
  };

  const addUploadedFileToNote = (meta: UploadedFileMeta) => {
    // Find note matching topic or create one
    setNotes(prev => {
      const existing = prev.find(n => n.topicId === meta.topic || n.title.toLowerCase().includes(meta.topic.toLowerCase()));
      if (existing) {
        return prev.map(n => n.id === existing.id ? {
          ...n,
          uploadedFiles: [...(n.uploadedFiles || []), meta]
        } : n);
      } else {
        // Create new note for this topic
        const newNote: Note = {
          id: `note-${Date.now()}`,
          topicId: meta.topic,
          unitId: meta.unit,
          subjectId: meta.subject,
          title: meta.title,
          lastUpdated: new Date().toISOString().split('T')[0],
          topicIntroduction: `Uploaded study material for ${meta.subtopic || meta.title}.`,
          coreConcepts: [`Uploaded document: ${meta.fileName}`],
          importantDefinitions: [],
          detailedExplanation: [`Material uploaded into syllabus hierarchy: ${meta.subject} → ${meta.unit} → ${meta.topic} → ${meta.subtopic}.`],
          importantFormulas: [],
          importantDiagrams: [],
          shortcutsAndTricks: [],
          commonMistakes: [],
          gateLevelPoints: [],
          quickRevisionSummary: [],
          uploadedFiles: [meta]
        };
        return [...prev, newNote];
      }
    });
  };

  const resetAllData = () => {
    setSubjects(INITIAL_SUBJECTS);
    setUnits(INITIAL_UNITS);
    setTopics(INITIAL_TOPICS);
    setNotes(INITIAL_NOTES);
    setFormulas(INITIAL_FORMULAS);
    setQuestions(INITIAL_QUESTIONS);
    setBookmarks(INITIAL_BOOKMARKS);
    setUserProgress(INITIAL_USER_PROGRESS);
    localStorage.clear();
  };

  const exportDataJSON = () => {
    const exportPayload = {
      subjects,
      units,
      topics,
      notes,
      formulas,
      questions,
      bookmarks,
      userProgress,
      exportedAt: new Date().toISOString()
    };
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportPayload, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `GATE_Preparation_Backup_${new Date().toISOString().split('T')[0]}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const importDataJSON = (jsonStr: string): boolean => {
    try {
      const data = JSON.parse(jsonStr);
      if (data.subjects) setSubjects(data.subjects);
      if (data.units) setUnits(data.units);
      if (data.topics) setTopics(data.topics);
      if (data.notes) setNotes(data.notes);
      if (data.formulas) setFormulas(data.formulas);
      if (data.questions) setQuestions(data.questions);
      if (data.bookmarks) setBookmarks(data.bookmarks);
      if (data.userProgress) setUserProgress(data.userProgress);
      return true;
    } catch (e) {
      console.error('Import failed', e);
      return false;
    }
  };

  return (
    <AppContext.Provider
      value={{
        currentRoute,
        routeParams,
        navigateTo,
        subjects,
        units,
        topics,
        notes,
        formulas,
        questions,
        papers,
        bookmarks,
        userProgress,
        isDarkMode,
        toggleDarkMode,
        isSearchModalOpen,
        setSearchModalOpen,
        isUploadModalOpen,
        setUploadModalOpen,
        isMobileNavOpen,
        setMobileNavOpen,
        isAuthenticated,
        userProfile,
        toggleBookmark,
        isBookmarked,
        markTopicCompleted,
        markTopicRevision,
        recordQuestionAttempt,
        setTopicImportance,
        addSubject,
        addUnit,
        addTopic,
        addFormula,
        addQuestion,
        addUploadedFileToNote,
        resetAllData,
        exportDataJSON,
        importDataJSON
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
