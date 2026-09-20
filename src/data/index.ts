import { INITIAL_SUBJECTS, INITIAL_UNITS, INITIAL_TOPICS } from './subjectsData';
import { INITIAL_NOTES } from './notesData';
import { INITIAL_FORMULAS } from './formulasData';
import { INITIAL_QUESTIONS } from './questionsData';
import { INITIAL_PAPERS } from './pyqPapersData';
import { Bookmark, UserStudyProgress } from '../types';

export * from './subjectsData';
export * from './notesData';
export * from './formulasData';
export * from './questionsData';
export * from './pyqPapersData';

export const INITIAL_USER_PROGRESS: UserStudyProgress = {
  lastOpenedSubjectId: 'subj-digital',
  lastOpenedTopicId: 'top-dig-301',
  lastSolvedQuestionId: 'q-ec2025-01',
  completedTopicIds: ['top-dig-101', 'top-dig-102', 'top-math-101'],
  solvedQuestions: {
    'q-ec2024-01': { isCorrect: true, selected: 'B', date: '2026-09-18' },
    'q-ec2023-02': { isCorrect: true, selected: 'B', date: '2026-09-19' },
    'q-ec2021-01': { isCorrect: true, selected: '0.20', date: '2026-09-20' }
  },
  revisionCompletedTopicIds: ['top-dig-101', 'top-math-101'],
  notesReadCount: 4
};

export const INITIAL_BOOKMARKS: Bookmark[] = [
  {
    id: 'bm-1',
    type: 'note',
    refId: 'note-dig-301',
    title: 'Latches, Flip-Flops & Conversions',
    subtitle: 'Digital Circuits → Sequential Circuits',
    dateAdded: '2026-09-19'
  },
  {
    id: 'bm-2',
    type: 'formula',
    refId: 'form-dig-303',
    title: 'Maximum Clock Frequency (T_clk Constraint)',
    subtitle: 'T_{clk} \\ge t_{cq} + t_{comb} + t_{su} - t_{skew}',
    dateAdded: '2026-09-19'
  },
  {
    id: 'bm-3',
    type: 'question',
    refId: 'q-ec2025-02',
    title: 'GATE 2025 Q38: Clock Skew & Setup Timing (NAT)',
    subtitle: 'Digital Circuits → Timing Parameters',
    dateAdded: '2026-09-20'
  },
  {
    id: 'bm-4',
    type: 'topic',
    refId: 'top-math-103',
    title: 'Eigenvalues, Eigenvectors & Cayley-Hamilton',
    subtitle: 'Engineering Mathematics → Linear Algebra',
    dateAdded: '2026-09-18'
  }
];
