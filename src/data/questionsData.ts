import { Question } from '../types';

export const INITIAL_QUESTIONS: Question[] = [
  {
    id: 'q-2022-ec-1',
    year: 2022,
    sourcePaper: 'GATE 2022 ECE',
    subjectId: 'subj-networks-signals',
    subjectName: 'Networks, Signals and Systems',
    unitId: 'unit-net-1',
    topicId: 'top-net-101',
    topicTitle: 'Network Theorems',
    questionNumber: 1,
    type: 'MCQ',
    marks: 1,
    difficulty: 'Medium',
    conceptTested: 'Thevenin Equivalent',
    questionText: 'For the given circuit, find the Thevenin equivalent voltage across terminals A-B.',
    options: [
      { label: 'A', text: '5V' },
      { label: 'B', text: '10V' },
      { label: 'C', text: '15V' },
      { label: 'D', text: '20V' }
    ],
    correctAnswer: 'B',
    detailedExplanation: 'Solution derived from standard network analysis. Applying KCL at the node gives V_th = 10V.',
    steps: ['1. Open circuit terminals A-B', '2. Apply KCL: (V-20)/2 + V/2 = 0', '3. 2V = 20 => V = 10V'],
    commonPitfall: 'Forgetting to include the dependent source if one was present.',
    relatedFormula: 'V_th = V_oc'
  },
  {
    id: 'q-2022-ec-2',
    year: 2022,
    sourcePaper: 'GATE 2022 ECE',
    subjectId: 'subj-math',
    subjectName: 'Engineering Mathematics',
    unitId: 'unit-math-1',
    topicId: 'top-math-103',
    topicTitle: 'Eigenvalues',
    questionNumber: 2,
    type: 'NAT',
    marks: 2,
    difficulty: 'Hard',
    conceptTested: 'Matrix properties',
    questionText: 'Given a 3x3 matrix A with trace = 6 and determinant = 6. If two eigenvalues are 1 and 2, the third eigenvalue is:',
    natRange: { min: 3, max: 3 },
    correctAnswer: '3',
    detailedExplanation: 'Generated/derived solution: Trace = sum of eigenvalues. 1 + 2 + x = 6 => x = 3. Also det = product = 1*2*3 = 6. Both properties satisfy x = 3.',
    steps: ['1. Trace = ?1 + ?2 + ?3', '2. 6 = 1 + 2 + ?3', '3. ?3 = 3'],
    commonPitfall: 'Confusing trace with determinant.'
  }
];
