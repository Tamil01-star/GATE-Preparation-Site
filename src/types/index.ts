export type ImportanceLevel = 'Normal' | 'Important' | 'Very Important' | 'Frequently Asked' | 'High Priority';
export type QuestionType = 'MCQ' | 'MSQ' | 'NAT';
export type DifficultyLevel = 'Easy' | 'Medium' | 'Hard';

export interface Subject {
  id: string;
  code: string;
  name: string;
  description: string;
  iconName: string;
  order: number;
}

export interface Unit {
  id: string;
  subjectId: string;
  unitNumber: number;
  title: string;
  description: string;
  order: number;
}

export interface Topic {
  id: string;
  unitId: string;
  subjectId: string;
  title: string;
  subtopics: string[];
  importance: ImportanceLevel;
  overview: string;
  order: number;
}

export interface NoteDefinition {
  term: string;
  definition: string;
}

export interface NoteFormula {
  name: string;
  formula: string;
  explanation: string;
}

export interface NoteDiagram {
  title: string;
  description: string;
  svgCode?: string;
  caption: string;
}

export interface UploadedFileMeta {
  id: string;
  fileName: string;
  fileType: 'PDF' | 'DOCX' | 'TXT' | 'Image' | 'Markdown';
  size: string;
  subject: string;
  unit: string;
  topic: string;
  subtopic: string;
  title: string;
  uploadDate: string;
  fileUrl?: string;
}

export interface Note {
  id: string;
  topicId: string;
  unitId: string;
  subjectId: string;
  title: string;
  lastUpdated: string;
  topicIntroduction: string;
  coreConcepts: string[];
  importantDefinitions: NoteDefinition[];
  detailedExplanation: string[];
  importantFormulas: NoteFormula[];
  importantDiagrams: NoteDiagram[];
  shortcutsAndTricks: string[];
  commonMistakes: string[];
  gateLevelPoints: string[];
  quickRevisionSummary: string[];
  uploadedFiles?: UploadedFileMeta[];
}

export interface FormulaVariable {
  symbol: string;
  meaning: string;
}

export interface Formula {
  id: string;
  subjectId: string;
  subjectName: string;
  unitId: string;
  topicId: string;
  topicTitle: string;
  chapterTitle: string;
  formulaName: string;
  latex: string;
  variables: FormulaVariable[];
  whenToUse: string;
  conditions: string;
  relatedConcept: string;
  relatedPYQ: string;
  order: number;
}

export interface QuestionOption {
  label: 'A' | 'B' | 'C' | 'D';
  text: string;
}

export interface Question {
  id: string;
  year: number;
  sourcePaper: string;
  subjectId: string;
  subjectName: string;
  unitId: string;
  topicId: string;
  topicTitle: string;
  questionNumber: number;
  type: QuestionType;
  marks: 1 | 2;
  difficulty: DifficultyLevel;
  conceptTested: string;
  questionText: string;
  options?: QuestionOption[];
  correctAnswer: string;
  natRange?: { min: number; max: number };
  detailedExplanation: string;
  steps: string[];
  commonPitfall?: string;
  relatedFormula?: string;
}

export interface QuestionPaper {
  id: string;
  year: number;
  paperCode: string;
  paperName: string;
  totalQuestions: number;
  totalMarks: number;
  durationMinutes: number;
  pdfUrl?: string;
  solutionPdfUrl?: string;
  subjectDistribution: {
    subjectName: string;
    marks: number;
    questionCount: number;
  }[];
  questionTypes: {
    type: QuestionType;
    count: number;
  }[];
}

export interface PracticeQuestionState {
  questionId: string;
  userAnswer?: string;
  isMarkedForReview: boolean;
  status: 'unvisited' | 'visited' | 'answered' | 'marked';
  timeSpentSeconds: number;
}

export interface PracticeResult {
  id: string;
  date: string;
  subjectName: string;
  topicName?: string;
  totalQuestions: number;
  score: number;
  maxScore: number;
  accuracy: number;
  correctCount: number;
  incorrectCount: number;
  unattemptedCount: number;
  timeTakenSeconds: number;
  answers: {
    questionId: string;
    userAnswer?: string;
    correctAnswer: string;
    isCorrect: boolean;
    marksAwarded: number;
  }[];
}

export interface Bookmark {
  id: string;
  type: 'note' | 'question' | 'formula' | 'topic';
  refId: string;
  title: string;
  subtitle: string;
  dateAdded: string;
}

export interface UserStudyProgress {
  lastOpenedSubjectId: string;
  lastOpenedTopicId: string;
  lastSolvedQuestionId: string;
  completedTopicIds: string[];
  solvedQuestions: Record<string, { isCorrect: boolean; selected: string; date: string }>;
  revisionCompletedTopicIds: string[];
  notesReadCount: number;
}
