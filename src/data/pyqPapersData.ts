import { QuestionPaper } from '../types';

export const INITIAL_PAPERS: QuestionPaper[] = [
  {
    id: 'paper-ec-2025',
    year: 2025,
    paperCode: 'EC',
    paperName: 'GATE 2025 Electronics & Communication Engineering',
    totalQuestions: 65,
    totalMarks: 100,
    durationMinutes: 180,
    pdfUrl: '/papers/EC2025.pdf',
    solutionPdfUrl: '/papers/gate 2023 solution.pdf',
    subjectDistribution: [
      { subjectName: 'General Aptitude', marks: 15, questionCount: 10 },
      { subjectName: 'Engineering Mathematics', marks: 13, questionCount: 8 },
      { subjectName: 'Digital Circuits', marks: 11, questionCount: 7 },
      { subjectName: 'Signals and Systems', marks: 12, questionCount: 8 },
      { subjectName: 'Network Theory', marks: 10, questionCount: 7 },
      { subjectName: 'Analog Circuits', marks: 12, questionCount: 8 },
      { subjectName: 'Communications', marks: 14, questionCount: 9 },
      { subjectName: 'Electromagnetics & Control Systems', marks: 13, questionCount: 8 }
    ],
    questionTypes: [
      { type: 'MCQ', count: 32 },
      { type: 'NAT', count: 25 },
      { type: 'MSQ', count: 8 }
    ]
  },
  {
    id: 'paper-ec-2024',
    year: 2024,
    paperCode: 'EC',
    paperName: 'GATE 2024 Electronics & Communication Engineering (IISc Bengaluru)',
    totalQuestions: 65,
    totalMarks: 100,
    durationMinutes: 180,
    pdfUrl: '/papers/EC2024.pdf',
    solutionPdfUrl: '/papers/EC2024.pdf',
    subjectDistribution: [
      { subjectName: 'General Aptitude', marks: 15, questionCount: 10 },
      { subjectName: 'Engineering Mathematics', marks: 13, questionCount: 8 },
      { subjectName: 'Digital Circuits', marks: 10, questionCount: 7 },
      { subjectName: 'Signals and Systems', marks: 11, questionCount: 7 },
      { subjectName: 'Network Theory', marks: 11, questionCount: 7 },
      { subjectName: 'Analog Circuits', marks: 13, questionCount: 9 },
      { subjectName: 'Communications', marks: 14, questionCount: 9 },
      { subjectName: 'Electromagnetics & Control Systems', marks: 13, questionCount: 8 }
    ],
    questionTypes: [
      { type: 'MCQ', count: 34 },
      { type: 'NAT', count: 24 },
      { type: 'MSQ', count: 7 }
    ]
  },
  {
    id: 'paper-ec-2023',
    year: 2023,
    paperCode: 'EC',
    paperName: 'GATE 2023 Electronics & Communication Engineering (IIT Kanpur)',
    totalQuestions: 65,
    totalMarks: 100,
    durationMinutes: 180,
    pdfUrl: '/papers/EC2023.pdf',
    solutionPdfUrl: '/papers/gate 2023 solution.pdf',
    subjectDistribution: [
      { subjectName: 'General Aptitude', marks: 15, questionCount: 10 },
      { subjectName: 'Engineering Mathematics', marks: 13, questionCount: 8 },
      { subjectName: 'Digital Circuits', marks: 10, questionCount: 7 },
      { subjectName: 'Signals and Systems', marks: 12, questionCount: 8 },
      { subjectName: 'Network Theory', marks: 10, questionCount: 7 },
      { subjectName: 'Analog Circuits', marks: 13, questionCount: 9 },
      { subjectName: 'Communications', marks: 14, questionCount: 9 },
      { subjectName: 'Control Systems', marks: 13, questionCount: 7 }
    ],
    questionTypes: [
      { type: 'MCQ', count: 35 },
      { type: 'NAT', count: 23 },
      { type: 'MSQ', count: 7 }
    ]
  },
  {
    id: 'paper-ec-2022',
    year: 2022,
    paperCode: 'EC',
    paperName: 'GATE 2022 Electronics & Communication Engineering (IIT Kharagpur)',
    totalQuestions: 65,
    totalMarks: 100,
    durationMinutes: 180,
    pdfUrl: '/papers/EC2022.pdf',
    solutionPdfUrl: '/papers/gate2022 solutions.pdf',
    subjectDistribution: [
      { subjectName: 'General Aptitude', marks: 15, questionCount: 10 },
      { subjectName: 'Engineering Mathematics', marks: 13, questionCount: 8 },
      { subjectName: 'Digital Circuits', marks: 10, questionCount: 7 },
      { subjectName: 'Signals and Systems', marks: 11, questionCount: 7 },
      { subjectName: 'Network Theory', marks: 11, questionCount: 7 },
      { subjectName: 'Analog Circuits', marks: 12, questionCount: 8 },
      { subjectName: 'Communications', marks: 14, questionCount: 9 },
      { subjectName: 'Control Systems', marks: 14, questionCount: 9 }
    ],
    questionTypes: [
      { type: 'MCQ', count: 33 },
      { type: 'NAT', count: 26 },
      { type: 'MSQ', count: 6 }
    ]
  },
  {
    id: 'paper-ec-2021',
    year: 2021,
    paperCode: 'EC',
    paperName: 'GATE 2021 Electronics & Communication Engineering (IIT Bombay)',
    totalQuestions: 65,
    totalMarks: 100,
    durationMinutes: 180,
    pdfUrl: '/papers/EC2021.pdf',
    solutionPdfUrl: '/papers/EC2021.pdf',
    subjectDistribution: [
      { subjectName: 'General Aptitude', marks: 15, questionCount: 10 },
      { subjectName: 'Engineering Mathematics', marks: 13, questionCount: 8 },
      { subjectName: 'Digital Circuits', marks: 11, questionCount: 7 },
      { subjectName: 'Signals and Systems', marks: 11, questionCount: 7 },
      { subjectName: 'Network Theory', marks: 11, questionCount: 7 },
      { subjectName: 'Analog Circuits', marks: 13, questionCount: 9 },
      { subjectName: 'Communications', marks: 13, questionCount: 8 },
      { subjectName: 'Control Systems', marks: 13, questionCount: 9 }
    ],
    questionTypes: [
      { type: 'MCQ', count: 36 },
      { type: 'NAT', count: 24 },
      { type: 'MSQ', count: 5 }
    ]
  },
  {
    id: 'paper-ec-2020',
    year: 2020,
    paperCode: 'EC',
    paperName: 'GATE 2020 Electronics & Communication Engineering (IIT Delhi)',
    totalQuestions: 65,
    totalMarks: 100,
    durationMinutes: 180,
    pdfUrl: '/papers/EC2020.pdf',
    solutionPdfUrl: '/papers/2020 solution.pdf',
    subjectDistribution: [
      { subjectName: 'General Aptitude', marks: 15, questionCount: 10 },
      { subjectName: 'Engineering Mathematics', marks: 13, questionCount: 8 },
      { subjectName: 'Core ECE Technical Subjects', marks: 72, questionCount: 47 }
    ],
    questionTypes: [
      { type: 'MCQ', count: 40 },
      { type: 'NAT', count: 25 }
    ]
  },
  {
    id: 'paper-ec-2019',
    year: 2019,
    paperCode: 'EC',
    paperName: 'GATE 2019 Electronics & Communication Engineering (IIT Madras)',
    totalQuestions: 65,
    totalMarks: 100,
    durationMinutes: 180,
    pdfUrl: '/papers/EC2019.pdf',
    solutionPdfUrl: '/papers/2019 solution GATE.pdf',
    subjectDistribution: [
      { subjectName: 'General Aptitude', marks: 15, questionCount: 10 },
      { subjectName: 'Engineering Mathematics', marks: 13, questionCount: 8 },
      { subjectName: 'Core ECE Technical Subjects', marks: 72, questionCount: 47 }
    ],
    questionTypes: [
      { type: 'MCQ', count: 41 },
      { type: 'NAT', count: 24 }
    ]
  }
];
