import { Note } from '../types';

export const INITIAL_NOTES: Note[] = [
  {
    id: 'note-dig-1',
    topicId: 'top-dig-101',
    unitId: 'unit-dig-1',
    subjectId: 'subj-digital',
    title: 'Combinational Circuits',
    lastUpdated: '2026-09-20',
    topicIntroduction: 'Combinational circuits represent logic where outputs depend purely on present inputs.',
    coreConcepts: [
      'Multiplexers (Data Selectors): 2^n inputs, n selection lines, 1 output.',
      'Decoders: n inputs, 2^n outputs.',
      'Adders: Half adder (XOR, AND), Full adder (2 Half adders + OR).'
    ],
    importantDefinitions: [
      { term: 'Minterm', definition: 'Product term containing all variables in true or complemented form.' },
      { term: 'Maxterm', definition: 'Sum term containing all variables.' }
    ],
    detailedExplanation: [
      '1. Multiplexer Synthesis:\nA 4:1 MUX equation is Y = S1\'S0\'I0 + S1\'S0I1 + S1S0\'I2 + S1S0I3. It can be used to implement any boolean function of n-1 variables directly.'
    ],
    importantFormulas: [
      { name: 'Number of MUX selection lines', formula: 'n = log2(N)', explanation: 'Where N is the number of inputs' }
    ],
    importantDiagrams: [],
    shortcutsAndTricks: [
      'Trick: To implement an n-variable function, use a 2^(n-1):1 MUX.'
    ],
    commonMistakes: [
      'Confusing the MSB and LSB of selection lines in MUX tables.'
    ],
    gateLevelPoints: [
      'GATE often asks to find the boolean function implemented by a given MUX circuit.'
    ],
    quickRevisionSummary: [
      'MUX = Data Selector',
      'Decoder = Minterm generator'
    ],
    uploadedFiles: [
      {
        id: 'file-dig-pw',
        fileName: 'Digital_Electronics_Notes_PW.pdf',
        fileType: 'PDF',
        size: '15.4 MB',
        subject: 'Digital Circuits',
        unit: 'Combinational Circuits',
        topic: 'Multiplexers',
        subtopic: 'Theory',
        title: 'Original PW Notes',
        uploadDate: '2026-09-20',
        fileUrl: '/notes/Digital_Electronics_Notes_PW.pdf'
      }
    ]
  },
  {
    id: 'note-math-1',
    topicId: 'top-math-103',
    unitId: 'unit-math-1',
    subjectId: 'subj-math',
    title: 'Linear Algebra & Matrices',
    lastUpdated: '2026-09-20',
    topicIntroduction: 'Linear algebra forms the foundation of modern engineering mathematics.',
    coreConcepts: [
      'Eigenvalues and Eigenvectors: Ax = ?x.',
      'Rank of a matrix is the number of linearly independent rows/columns.',
      'Cayley-Hamilton Theorem: Every square matrix satisfies its own characteristic equation.'
    ],
    importantDefinitions: [
      { term: 'Orthogonal Matrix', definition: 'A^T A = I' },
      { term: 'Singular Matrix', definition: 'Determinant is zero' }
    ],
    detailedExplanation: [
      '1. Characteristic Equation:\nSolve |A - ?I| = 0 to find eigenvalues.'
    ],
    importantFormulas: [
      { name: 'Trace Property', formula: 'Trace(A) = Sum of eigenvalues', explanation: 'The sum of principal diagonal elements equals sum of eigenvalues.' },
      { name: 'Determinant Property', formula: 'Det(A) = Product of eigenvalues', explanation: '' }
    ],
    importantDiagrams: [],
    shortcutsAndTricks: [
      'Trick: Use trace and determinant to quickly verify eigenvalues for 2x2 or 3x3 matrices.'
    ],
    commonMistakes: [
      'Forgetting that A^-1 = adj(A) / |A|.'
    ],
    gateLevelPoints: [
      'High frequency of questions on Cayley-Hamilton to find higher powers of matrices.'
    ],
    quickRevisionSummary: [
      'Trace = Sum',
      'Det = Product'
    ],
    uploadedFiles: [
      {
        id: 'file-math-pw',
        fileName: 'Engineering_Mathematics_Notes_PW.pdf',
        fileType: 'PDF',
        size: '12 MB',
        subject: 'Engineering Mathematics',
        unit: 'Linear Algebra',
        topic: 'Matrices',
        subtopic: 'Theory',
        title: 'Original PW Notes',
        uploadDate: '2026-09-20',
        fileUrl: '/notes/Engineering_Mathematics_Notes_PW.pdf'
      }
    ]
  }
];
