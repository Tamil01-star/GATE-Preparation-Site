import { Formula } from '../types';

export const INITIAL_FORMULAS: Formula[] = [
  // Digital Circuits - Number Systems & Boolean Algebra
  {
    id: 'form-dig-101',
    subjectId: 'subj-digital',
    subjectName: 'Digital Circuits',
    unitId: 'unit-dig-1',
    topicId: 'top-dig-101',
    topicTitle: 'Number Systems & Base Conversions',
    chapterTitle: 'Unit 1: Number Systems & Boolean Algebra',
    formulaName: 'Range of Signed 2\'s Complement Numbers',
    latex: '-2^{n-1} \\le N \\le 2^{n-1} - 1',
    variables: [
      { symbol: 'n', meaning: 'Number of binary bits allocated for representation' },
      { symbol: 'N', meaning: 'Decimal value of the representable signed integer' }
    ],
    whenToUse: 'Determining the dynamic numerical bounds for n-bit signed integers and detecting arithmetic overflow conditions.',
    conditions: 'Valid for 2\'s complement binary format with MSB as sign bit (0 = positive, 1 = negative).',
    relatedConcept: 'Binary complement arithmetic & overflow detection (V = C_{in} XOR C_{out})',
    relatedPYQ: 'GATE ECE 2021 (1 Mark), GATE CS 2019',
    order: 1
  },
  {
    id: 'form-dig-102',
    subjectId: 'subj-digital',
    subjectName: 'Digital Circuits',
    unitId: 'unit-dig-1',
    topicId: 'top-dig-102',
    topicTitle: 'Boolean Algebra & Logic Minimization',
    chapterTitle: 'Unit 1: Number Systems & Boolean Algebra',
    formulaName: 'Consensus Theorem',
    latex: 'AB + A\'C + BC = AB + A\'C',
    variables: [
      { symbol: 'A, B, C', meaning: 'Boolean variables or literal sub-terms' },
      { symbol: 'BC', meaning: 'Redundant consensus term formed from literals associated with A and A\'' }
    ],
    whenToUse: 'Simplifying sum-of-products boolean expressions by eliminating redundant overlapping implicants.',
    conditions: 'Three product terms containing one variable complemented in two terms and third term contains residual literals.',
    relatedConcept: 'Hazard elimination in combinational networks & SOP minimization',
    relatedPYQ: 'GATE ECE 2022 (1 Mark)',
    order: 2
  },
  {
    id: 'form-dig-103',
    subjectId: 'subj-digital',
    subjectName: 'Digital Circuits',
    unitId: 'unit-dig-1',
    topicId: 'top-dig-103',
    topicTitle: 'Karnaugh Maps (K-Maps)',
    chapterTitle: 'Unit 1: Number Systems & Boolean Algebra',
    formulaName: 'K-Map Cell Implicant Dimension Rule',
    latex: 'Group\\,Size = 2^k \\implies n - k \\text{ literals remaining}',
    variables: [
      { symbol: 'n', meaning: 'Total number of input variables in the K-map' },
      { symbol: 'k', meaning: 'Grouping power of two (1, 2, 4, 8, 16 cells)' },
      { symbol: 'n - k', meaning: 'Number of literals in the resulting prime implicant term' }
    ],
    whenToUse: 'Directly predicting the size of product terms formed by grouping minterm cells.',
    conditions: 'Groups must be rectangular blocks of adjacent power-of-two cells with Gray-coded indexing.',
    relatedConcept: 'Essential Prime Implicant identification and minimal cover selection',
    relatedPYQ: 'GATE ECE 2024 (2 Marks)',
    order: 3
  },

  // Digital Circuits - Sequential Circuits
  {
    id: 'form-dig-301',
    subjectId: 'subj-digital',
    subjectName: 'Digital Circuits',
    unitId: 'unit-dig-3',
    topicId: 'top-dig-301',
    topicTitle: 'Latches and Flip-Flops',
    chapterTitle: 'Unit 3: Sequential Logic Circuits',
    formulaName: 'JK Flip-Flop Characteristic Equation',
    latex: 'Q(t+1) = J \\cdot Q\'(t) + K\' \\cdot Q(t)',
    variables: [
      { symbol: 'Q(t)', meaning: 'Present state of the flip-flop' },
      { symbol: 'Q(t+1)', meaning: 'Next state after active clock edge' },
      { symbol: 'J, K', meaning: 'Synchronous control inputs' }
    ],
    whenToUse: 'Analyzing sequential transitions and synthesizing custom state machines using JK flip-flops.',
    conditions: 'Valid at active triggering transition without race conditions.',
    relatedConcept: 'Master-slave configuration & toggle mode at J=K=1',
    relatedPYQ: 'GATE ECE 2025 (2 Marks), GATE EC 2023',
    order: 4
  },
  {
    id: 'form-dig-302',
    subjectId: 'subj-digital',
    subjectName: 'Digital Circuits',
    unitId: 'unit-dig-3',
    topicId: 'top-dig-301',
    topicTitle: 'Latches and Flip-Flops',
    chapterTitle: 'Unit 3: Sequential Logic Circuits',
    formulaName: 'T Flip-Flop Characteristic Equation',
    latex: 'Q(t+1) = T \\oplus Q(t) = T\\cdot Q\'(t) + T\'\\cdot Q(t)',
    variables: [
      { symbol: 'T', meaning: 'Toggle input bit (1 = toggle state, 0 = hold state)' },
      { symbol: 'Q(t)', meaning: 'Present state' }
    ],
    whenToUse: 'Designing binary ripple counters, synchronous counters, and frequency dividers.',
    conditions: 'Operates as divide-by-2 circuit when T=1 continuously.',
    relatedConcept: 'Frequency division f_out = f_in / 2',
    relatedPYQ: 'GATE ECE 2024 (1 Mark)',
    order: 5
  },
  {
    id: 'form-dig-303',
    subjectId: 'subj-digital',
    subjectName: 'Digital Circuits',
    unitId: 'unit-dig-3',
    topicId: 'top-dig-302',
    topicTitle: 'Timing Parameters (Setup & Hold Time)',
    chapterTitle: 'Unit 3: Sequential Logic Circuits',
    formulaName: 'Maximum Operating Clock Frequency & Clock Period Constraint',
    latex: 'T_{clk} \\ge t_{cq} + t_{comb(max)} + t_{su} - t_{skew} \\implies f_{max} = \\frac{1}{T_{clk(min)}}',
    variables: [
      { symbol: 'T_{clk}', meaning: 'Minimum permissible clock period' },
      { symbol: 't_{cq}', meaning: 'Clock-to-Q propagation delay of launching flip-flop' },
      { symbol: 't_{comb(max)}', meaning: 'Maximum propagation delay through combinational path' },
      { symbol: 't_{su}', meaning: 'Setup time requirement of receiving flip-flop' },
      { symbol: 't_{skew}', meaning: 'Clock arrival skew (positive if clock reaches destination later)' }
    ],
    whenToUse: 'Calculating maximum operating clock frequency and ensuring zero setup timing violations.',
    conditions: 'Worst-case timing path analysis between paired synchronous registers.',
    relatedConcept: 'Static Timing Analysis (STA), pipelining, and clock distribution networks',
    relatedPYQ: 'GATE ECE 2025 (2 Marks), GATE EC 2020',
    order: 6
  },
  {
    id: 'form-dig-304',
    subjectId: 'subj-digital',
    subjectName: 'Digital Circuits',
    unitId: 'unit-dig-3',
    topicId: 'top-dig-302',
    topicTitle: 'Timing Parameters (Setup & Hold Time)',
    chapterTitle: 'Unit 3: Sequential Logic Circuits',
    formulaName: 'Hold Time Timing Constraint',
    latex: 't_{cq(min)} + t_{comb(min)} \\ge t_{hold} + t_{skew}',
    variables: [
      { symbol: 't_{cq(min)}', meaning: 'Contamination (minimum) delay of launching flip-flop' },
      { symbol: 't_{comb(min)}', meaning: 'Minimum propagation delay through logic path' },
      { symbol: 't_{hold}', meaning: 'Hold time specification of receiving flip-flop' }
    ],
    whenToUse: 'Detecting hold violations. Critical: independent of clock frequency; cannot be fixed by slowing down clock!',
    conditions: 'Must hold true across process, voltage, and temperature corners.',
    relatedConcept: 'Buffer insertion for hold fix',
    relatedPYQ: 'GATE ECE 2023 (2 Marks)',
    order: 7
  },
  {
    id: 'form-dig-305',
    subjectId: 'subj-digital',
    subjectName: 'Digital Circuits',
    unitId: 'unit-dig-3',
    topicId: 'top-dig-303',
    topicTitle: 'Counters (Synchronous & Asynchronous)',
    chapterTitle: 'Unit 3: Sequential Logic Circuits',
    formulaName: 'States & Modulus of Ring and Johnson Counters',
    latex: '\\text{Ring: } N = n \\text{ states}; \\quad \\text{Johnson (Twisted): } N = 2n \\text{ states}',
    variables: [
      { symbol: 'n', meaning: 'Number of flip-flops in the shift register' },
      { symbol: 'N', meaning: 'Total number of valid count states before repetition' }
    ],
    whenToUse: 'Calculating decoding complexity and counting capacity of shift-register counters.',
    conditions: 'Ring counter initialized with single 1 (one-hot); Johnson counter fed by inverted Q_n bar.',
    relatedConcept: 'Self-correcting counter feedback logic',
    relatedPYQ: 'GATE ECE 2022 (1 Mark)',
    order: 8
  },

  // Digital Circuits - Data Converters
  {
    id: 'form-dig-501',
    subjectId: 'subj-digital',
    subjectName: 'Digital Circuits',
    unitId: 'unit-dig-5',
    topicId: 'top-dig-501',
    topicTitle: 'Digital-to-Analog Converters (DAC)',
    chapterTitle: 'Unit 5: Data Converters (ADC & DAC)',
    formulaName: 'DAC Resolution & Analog Output Voltage',
    latex: 'V_{out} = \\text{Step Size} \\times \\text{Decimal Value} = \\frac{V_{ref}}{2^n - 1} \\sum_{i=0}^{n-1} b_i 2^i',
    variables: [
      { symbol: 'V_{ref}', meaning: 'Full scale reference voltage' },
      { symbol: 'n', meaning: 'Resolution in number of digital input bits' },
      { symbol: 'b_i', meaning: 'Binary bit values (0 or 1)' }
    ],
    whenToUse: 'Evaluating analog output voltage corresponding to any digital input codeword.',
    conditions: 'Linear weighted resistor or R-2R ladder with ideal operational amplifier.',
    relatedConcept: 'Quantization step size and offset/gain calibration',
    relatedPYQ: 'GATE ECE 2024 (1 Mark)',
    order: 9
  },
  {
    id: 'form-dig-502',
    subjectId: 'subj-digital',
    subjectName: 'Digital Circuits',
    unitId: 'unit-dig-5',
    topicId: 'top-dig-502',
    topicTitle: 'Analog-to-Digital Converters (ADC)',
    chapterTitle: 'Unit 5: Data Converters (ADC & DAC)',
    formulaName: 'Flash ADC Comparator Count & SAR Conversion Time',
    latex: '\\text{Comparators (Flash)} = 2^n - 1; \\quad T_{conv} (\\text{SAR}) = n \\cdot T_{clk}',
    variables: [
      { symbol: 'n', meaning: 'ADC bit resolution' },
      { symbol: 'T_{clk}', meaning: 'SAR clock clock cycle period' }
    ],
    whenToUse: 'Comparing hardware overhead and conversion speed among ADC topologies.',
    conditions: 'SAR performs binary search taking exactly n clock cycles regardless of input voltage.',
    relatedConcept: 'Flash fastest (1 cycle), Dual slope highest accuracy & noise rejection',
    relatedPYQ: 'GATE ECE 2021 (1 Mark)',
    order: 10
  },

  // Engineering Mathematics - Linear Algebra
  {
    id: 'form-math-101',
    subjectId: 'subj-math',
    subjectName: 'Engineering Mathematics',
    unitId: 'unit-math-1',
    topicId: 'top-math-103',
    topicTitle: 'Eigenvalues, Eigenvectors & Cayley-Hamilton',
    chapterTitle: 'Unit 1: Linear Algebra',
    formulaName: 'Trace & Determinant Spectral Invariants',
    latex: '\\sum_{i=1}^n \\lambda_i = \\text{Trace}(A) = \\sum_{i=1}^n a_{ii}; \\quad \\prod_{i=1}^n \\lambda_i = \\det(A)',
    variables: [
      { symbol: '\\lambda_i', meaning: 'Eigenvalues of matrix A' },
      { symbol: 'a_{ii}', meaning: 'Primary diagonal elements of square matrix A' }
    ],
    whenToUse: 'Instantly verifying eigenvalues, finding unknown matrix entries, or determining invertibility.',
    conditions: 'Valid for all n x n square matrices over complex field.',
    relatedConcept: 'Characteristic polynomial coefficients and Cayley-Hamilton theorem',
    relatedPYQ: 'GATE ECE 2025 (1 Mark), GATE 2024 (2 Marks)',
    order: 11
  },
  {
    id: 'form-math-102',
    subjectId: 'subj-math',
    subjectName: 'Engineering Mathematics',
    unitId: 'unit-math-1',
    topicId: 'top-math-103',
    topicTitle: 'Eigenvalues, Eigenvectors & Cayley-Hamilton',
    chapterTitle: 'Unit 1: Linear Algebra',
    formulaName: 'Cayley-Hamilton Matrix Inverse Formula',
    latex: 'A^n + c_{n-1}A^{n-1} + \\dots + c_1 A + c_0 I = 0 \\implies A^{-1} = -\\frac{1}{c_0}\\left[A^{n-1} + c_{n-1}A^{n-2} + \\dots + c_1 I\\right]',
    variables: [
      { symbol: 'c_k', meaning: 'Coefficients of the characteristic polynomial P(\\lambda) = \\det(A - \\lambda I)' },
      { symbol: 'c_0', meaning: 'Constant term equal to (-1)^n \\det(A)' }
    ],
    whenToUse: 'Computing inverse and evaluating high matrix powers A^k without standard adjoint calculation.',
    conditions: 'Matrix A must be non-singular (\\det(A) \\ne 0).',
    relatedConcept: 'Minimal polynomial and matrix functions',
    relatedPYQ: 'GATE ECE 2023 (2 Marks)',
    order: 12
  },

  // Signals & Systems - Continuous-Time Fourier Transform
  {
    id: 'form-sig-201',
    subjectId: 'subj-signals',
    subjectName: 'Signals and Systems',
    unitId: 'unit-sig-2',
    topicId: 'top-sig-201',
    topicTitle: 'Continuous-Time Fourier Transform (CTFT)',
    chapterTitle: 'Unit 2: Fourier Analysis (CTFS, CTFT, DTFT)',
    formulaName: 'Parseval’s Energy Theorem in CTFT',
    latex: 'E = \\int_{-\\infty}^{\\infty} |x(t)|^2 \\, dt = \\frac{1}{2\\pi}\\int_{-\\infty}^{\\infty} |X(\\omega)|^2 \\, d\\omega = \\int_{-\\infty}^{\\infty} |X(f)|^2 \\, df',
    variables: [
      { symbol: 'E', meaning: 'Total energy of the signal in Joules' },
      { symbol: 'x(t)', meaning: 'Continuous-time domain waveform' },
      { symbol: 'X(\\omega)', meaning: 'Continuous frequency spectrum' }
    ],
    whenToUse: 'Calculating energy in time domain or integrating spectrum over bandlimited intervals.',
    conditions: 'Signal must possess finite energy (E < \\infty).',
    relatedConcept: 'Energy Spectral Density (ESD) S_{xx}(\\omega) = |X(\\omega)|^2',
    relatedPYQ: 'GATE ECE 2025 (2 Marks), GATE EC 2022',
    order: 13
  },
  {
    id: 'form-sig-202',
    subjectId: 'subj-signals',
    subjectName: 'Signals and Systems',
    unitId: 'unit-sig-2',
    topicId: 'top-sig-201',
    topicTitle: 'Continuous-Time Fourier Transform (CTFT)',
    chapterTitle: 'Unit 2: Fourier Analysis (CTFS, CTFT, DTFT)',
    formulaName: 'Duality & Scaling Property of Fourier Transform',
    latex: 'x(t) \\xleftrightarrow{\\mathcal{F}} X(\\omega) \\implies X(t) \\xleftrightarrow{\\mathcal{F}} 2\\pi x(-\\omega); \\quad x(at) \\xleftrightarrow{\\mathcal{F}} \\frac{1}{|a|}X\\left(\\frac{\\omega}{a}\\right)',
    variables: [
      { symbol: 'a', meaning: 'Time scaling factor (non-zero real scalar)' },
      { symbol: 'X(t)', meaning: 'Signal with functional form identical to frequency spectrum X(\\omega)' }
    ],
    whenToUse: 'Instantly finding transform of sinc pulses, rect pulses, and time-scaled signals.',
    conditions: 'Dual signal evaluated at time t transforms with negative frequency argument.',
    relatedConcept: 'Bandwidth-duration product invariance',
    relatedPYQ: 'GATE ECE 2024 (1 Mark)',
    order: 14
  }
];
