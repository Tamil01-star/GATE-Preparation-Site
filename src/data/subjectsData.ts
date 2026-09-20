import { Subject, Unit, Topic } from '../types';

export const INITIAL_SUBJECTS: Subject[] = [
  {
    id: 'subj-digital',
    code: 'EC-01',
    name: 'Digital Circuits',
    description: 'Number systems, Boolean algebra, Combinational circuits, Sequential circuits, Semiconductor memories, ADC & DAC, and Logic families.',
    iconName: 'Cpu',
    order: 1
  },
  {
    id: 'subj-math',
    code: 'EM-01',
    name: 'Engineering Mathematics',
    description: 'Linear Algebra, Calculus, Differential Equations, Complex Analysis, Probability & Statistics, and Numerical Methods.',
    iconName: 'Calculator',
    order: 2
  },
  {
    id: 'subj-signals',
    code: 'EC-02',
    name: 'Signals and Systems',
    description: 'Continuous & Discrete-time signals, LTI systems, Fourier Series & Transform, Laplace Transform, and Z-Transform.',
    iconName: 'Activity',
    order: 3
  },
  {
    id: 'subj-networks',
    code: 'EC-03',
    name: 'Network Theory',
    description: 'Network solution methods: nodal and mesh analysis; Network theorems: superposition, Thevenin and Norton; Transient response; Two-port networks.',
    iconName: 'GitBranch',
    order: 4
  },
  {
    id: 'subj-control',
    code: 'EC-04',
    name: 'Control Systems',
    description: 'Transfer functions, block diagram reduction, Signal flow graphs, Routh-Hurwitz criterion, Nyquist plots, Bode plots, and State-space model.',
    iconName: 'Sliders',
    order: 5
  },
  {
    id: 'subj-analog',
    code: 'EC-05',
    name: 'Analog Circuits',
    description: 'Small signal equivalent circuits of diodes, BJTs and MOSFETs; Simple diode circuits; Single-stage BJT and MOSFET amplifiers; Op-Amp circuits.',
    iconName: 'Zap',
    order: 6
  },
  {
    id: 'subj-comm',
    code: 'EC-06',
    name: 'Communications',
    description: 'Random processes: autocorrelation and power spectral density; Analog communications: AM and FM; Digital communications: PCM, DPCM, ASK, FSK, PSK.',
    iconName: 'Radio',
    order: 7
  },
  {
    id: 'subj-emft',
    code: 'EC-07',
    name: 'Electromagnetics',
    description: 'Maxwell’s equations: differential and integral forms; Wave equation, Poynting vector; Plane waves and properties; Transmission lines; Antennas.',
    iconName: 'Compass',
    order: 8
  }
];

export const INITIAL_UNITS: Unit[] = [
  // Digital Circuits Units
  {
    id: 'unit-dig-1',
    subjectId: 'subj-digital',
    unitNumber: 1,
    title: 'Number Systems & Boolean Algebra',
    description: 'Representation of numbers, binary arithmetic, logic gates, Boolean theorems, SOP/POS, and Karnaugh Map minimization.',
    order: 1
  },
  {
    id: 'unit-dig-2',
    subjectId: 'subj-digital',
    unitNumber: 2,
    title: 'Combinational Logic Circuits',
    description: 'Design of arithmetic circuits, Adders, Subtractors, Multiplexers, Demultiplexers, Decoders, Encoders, and Magnitude Comparators.',
    order: 2
  },
  {
    id: 'unit-dig-3',
    subjectId: 'subj-digital',
    unitNumber: 3,
    title: 'Sequential Logic Circuits',
    description: 'Latches, Flip-Flops (SR, JK, D, T), conversions, setup and hold time, Synchronous & Asynchronous Counters, and Shift Registers.',
    order: 3
  },
  {
    id: 'unit-dig-4',
    subjectId: 'subj-digital',
    unitNumber: 4,
    title: 'Semiconductor Memories & PLDs',
    description: 'ROM, Static RAM, Dynamic RAM, Programmable Logic Arrays (PLA), and PAL architectures.',
    order: 4
  },
  {
    id: 'unit-dig-5',
    subjectId: 'subj-digital',
    unitNumber: 5,
    title: 'Data Converters (ADC & DAC)',
    description: 'Weighted resistor DAC, R-2R ladder DAC, Flash ADC, Successive Approximation Register (SAR) ADC, and Dual slope ADC.',
    order: 5
  },
  {
    id: 'unit-dig-6',
    subjectId: 'subj-digital',
    unitNumber: 6,
    title: 'Logic Families',
    description: 'TTL, CMOS, ECL characteristics: Propagation delay, Fan-out, Noise Margin, and Power Dissipation.',
    order: 6
  },

  // Engineering Mathematics Units
  {
    id: 'unit-math-1',
    subjectId: 'subj-math',
    unitNumber: 1,
    title: 'Linear Algebra',
    description: 'Vector spaces, Matrix operations, Rank, Systems of Linear Equations, Eigenvalues and Eigenvectors, and Cayley-Hamilton Theorem.',
    order: 1
  },
  {
    id: 'unit-math-2',
    subjectId: 'subj-math',
    unitNumber: 2,
    title: 'Calculus & Vector Calculus',
    description: 'Mean value theorems, Maxima and minima, Taylor series, Partial derivatives, Multiple integrals, Gradient, Divergence, and Curl.',
    order: 2
  },
  {
    id: 'unit-math-3',
    subjectId: 'subj-math',
    unitNumber: 3,
    title: 'Differential Equations',
    description: 'First order equations (linear and non-linear), Higher order linear ODEs with constant coefficients, and Cauchy-Euler equations.',
    order: 3
  },
  {
    id: 'unit-math-4',
    subjectId: 'subj-math',
    unitNumber: 4,
    title: 'Complex Analysis',
    description: 'Analytic functions, Cauchy-Riemann equations, Cauchy’s integral theorem and formula, Taylor and Laurent series, Residue theorem.',
    order: 4
  },
  {
    id: 'unit-math-5',
    subjectId: 'subj-math',
    unitNumber: 5,
    title: 'Probability & Statistics',
    description: 'Definitions of probability, Conditional probability, Bayes theorem, Random variables, Probability density functions, and Distributions.',
    order: 5
  },

  // Signals & Systems Units
  {
    id: 'unit-sig-1',
    subjectId: 'subj-signals',
    unitNumber: 1,
    title: 'Continuous & Discrete Signals and LTI Systems',
    description: 'Classification of signals, basic operations, system properties: Linearity, Time-invariance, Causality, Stability, Convolution integral & sum.',
    order: 1
  },
  {
    id: 'unit-sig-2',
    subjectId: 'subj-signals',
    unitNumber: 2,
    title: 'Fourier Analysis (CTFS, CTFT, DTFT)',
    description: 'Continuous-time Fourier series and transform, Discrete-time Fourier transform, frequency response, Parseval’s theorem, and duality.',
    order: 2
  },
  {
    id: 'unit-sig-3',
    subjectId: 'subj-signals',
    unitNumber: 3,
    title: 'Laplace & Z-Transform Analysis',
    description: 'Region of Convergence (ROC), unilateral and bilateral transforms, inverse transforms, transfer function analysis, pole-zero stability.',
    order: 3
  }
];

export const INITIAL_TOPICS: Topic[] = [
  // Digital Circuits - Unit 1
  {
    id: 'top-dig-101',
    unitId: 'unit-dig-1',
    subjectId: 'subj-digital',
    title: 'Number Systems & Base Conversions',
    subtopics: ['Binary, Octal, Hexadecimal conversions', "1's and 2's complement representation", 'Overflow in signed arithmetic', 'Fixed point and floating point'],
    importance: 'Normal',
    overview: 'Foundation of digital representations, radix arithmetic, binary complements, and range analysis for signed numbers.',
    order: 1
  },
  {
    id: 'top-dig-102',
    unitId: 'unit-dig-1',
    subjectId: 'subj-digital',
    title: 'Boolean Algebra & Logic Minimization',
    subtopics: ['De Morgan theorems', 'Duality principle', 'Canonical SOP and POS forms', 'Minimal Sum of Products', 'Don’t care conditions'],
    importance: 'Important',
    overview: 'Formulation of switching functions, boolean theorems, consensus theorem, and expression minimization.',
    order: 2
  },
  {
    id: 'top-dig-103',
    unitId: 'unit-dig-1',
    subjectId: 'subj-digital',
    title: 'Karnaugh Maps (K-Maps)',
    subtopics: ['2, 3, 4 and 5 variable K-maps', 'Prime implicants (PI)', 'Essential prime implicants (EPI)', 'Static and dynamic hazards'],
    importance: 'Frequently Asked',
    overview: 'Visual minimization tool for up to 5 variables, finding minimal SOP/POS and identifying EPIs for hazard-free design.',
    order: 3
  },

  // Digital Circuits - Unit 2
  {
    id: 'top-dig-201',
    unitId: 'unit-dig-2',
    subjectId: 'subj-digital',
    title: 'Arithmetic Circuits (Adders & Subtractors)',
    subtopics: ['Half and Full Adder circuits', 'Ripple Carry Adder delay analysis', 'Carry Look-Ahead Adder (CLA)', 'Binary subtractor & Adder-Subtractor IC'],
    importance: 'Important',
    overview: 'Hardware implementation of addition and subtraction, carry propagation delays, and CLA speed optimization.',
    order: 1
  },
  {
    id: 'top-dig-202',
    unitId: 'unit-dig-2',
    subjectId: 'subj-digital',
    title: 'Multiplexers & Demultiplexers',
    subtopics: ['2:1, 4:1, 8:1 MUX implementation', 'Realizing arbitrary Boolean functions using MUX', 'Demultiplexers as Decoders', 'MUX expansion tree'],
    importance: 'Very Important',
    overview: 'Universal combinational logic elements capable of generating any boolean function with minimal gate count.',
    order: 2
  },
  {
    id: 'top-dig-203',
    unitId: 'unit-dig-2',
    subjectId: 'subj-digital',
    title: 'Decoders, Encoders & Comparators',
    subtopics: ['2-to-4 and 3-to-8 active-low decoders', 'Priority Encoders with valid bit', '2-bit and 4-bit Magnitude Comparators', 'Code Converters (Binary to Gray)'],
    importance: 'Important',
    overview: 'Addressing logic, priority arbitration, magnitude testing, and minimum boolean implementation using decoders.',
    order: 3
  },

  // Digital Circuits - Unit 3
  {
    id: 'top-dig-301',
    unitId: 'unit-dig-3',
    subjectId: 'subj-digital',
    title: 'Latches and Flip-Flops',
    subtopics: ['SR, JK, D, T latches and flip-flops', 'Characteristic equations and truth tables', 'Excitation tables', 'Race-around condition in JK and Master-Slave solution', 'Flip-Flop conversions'],
    importance: 'Very Important',
    overview: 'Bistable multivibrators, level-triggering vs edge-triggering, transition tables, and universal flip-flop conversion methodology.',
    order: 1
  },
  {
    id: 'top-dig-302',
    unitId: 'unit-dig-3',
    subjectId: 'subj-digital',
    title: 'Timing Parameters (Setup & Hold Time)',
    subtopics: ['Setup time (t_su) definition', 'Hold time (t_h) definition', 'Maximum clock frequency calculation', 'Clock skew and jitter effects', 'Metastability'],
    importance: 'High Priority',
    overview: 'Critical timing constraints in synchronous digital systems, avoiding setup/hold violations and calculating maximum clock frequency.',
    order: 2
  },
  {
    id: 'top-dig-303',
    unitId: 'unit-dig-3',
    subjectId: 'subj-digital',
    title: 'Counters (Synchronous & Asynchronous)',
    subtopics: ['Asynchronous Ripple Counters and propagation delay', 'Synchronous Counter design using excitation tables', 'Modulo-N counters', 'Ring and Johnson counters', 'Unused state lock-out prevention'],
    importance: 'Frequently Asked',
    overview: 'State sequencing circuits, modulus determination, ripple carry latency, and design of arbitrary state synchronous counters.',
    order: 3
  },
  {
    id: 'top-dig-304',
    unitId: 'unit-dig-3',
    subjectId: 'subj-digital',
    title: 'Finite State Machines (FSM)',
    subtopics: ['Mealy vs Moore machine models', 'State diagram and state table reduction', 'State assignment techniques', 'Sequence detector design'],
    importance: 'Important',
    overview: 'Sequential machines, output dependence on present state vs inputs, state reduction, and sequence pattern detection.',
    order: 4
  },

  // Digital Circuits - Unit 5
  {
    id: 'top-dig-501',
    unitId: 'unit-dig-5',
    subjectId: 'subj-digital',
    title: 'Digital-to-Analog Converters (DAC)',
    subtopics: ['Binary Weighted Resistor DAC', 'R-2R Ladder DAC', 'Resolution, Full scale voltage, Step size', 'Offset error and settling time'],
    importance: 'Important',
    overview: 'Conversion of digital codewords to analog levels, precision resistor networks, resolution calculations and output voltage equations.',
    order: 1
  },
  {
    id: 'top-dig-502',
    unitId: 'unit-dig-5',
    subjectId: 'subj-digital',
    title: 'Analog-to-Digital Converters (ADC)',
    subtopics: ['Flash (Parallel) ADC comparator count', 'Successive Approximation (SAR) ADC conversion cycles', 'Dual Slope Integrating ADC noise rejection', 'Quantization error and dynamic range'],
    importance: 'Frequently Asked',
    overview: 'Quantization, conversion time vs resolution trade-offs, Flash ADC 2^n - 1 comparators, SAR binary search, and Dual Slope integration.',
    order: 2
  },

  // Engineering Mathematics - Unit 1
  {
    id: 'top-math-101',
    unitId: 'unit-math-1',
    subjectId: 'subj-math',
    title: 'Matrix Algebra & Determinants',
    subtopics: ['Special matrices: Symmetric, Skew-symmetric, Orthogonal, Hermitian, Unitary', 'Rank of a matrix and properties', 'Linear independence of vectors', 'Inverse of matrix using adjoint'],
    importance: 'Important',
    overview: 'Fundamental matrix operations, row echelon form, rank properties, and vector space basis dimensions.',
    order: 1
  },
  {
    id: 'top-math-102',
    unitId: 'unit-math-1',
    subjectId: 'subj-math',
    title: 'Systems of Linear Equations',
    subtopics: ['Homogeneous systems AX = 0 (Trivial vs non-trivial solutions)', 'Non-homogeneous systems AX = B (Rouche-Capelli theorem)', 'Unique solution, infinitely many, or no solution conditions'],
    importance: 'Frequently Asked',
    overview: 'Solvability conditions using Rank(A) and Rank(A|B), degrees of freedom, and null space computation.',
    order: 2
  },
  {
    id: 'top-math-103',
    unitId: 'unit-math-1',
    subjectId: 'subj-math',
    title: 'Eigenvalues, Eigenvectors & Cayley-Hamilton',
    subtopics: ['Characteristic equation |A - λI| = 0', 'Properties: Trace = Sum of eigenvalues, Det = Product', 'Eigenvectors of distinct vs repeated eigenvalues', 'Cayley-Hamilton theorem (A satisfies its own char eqn)', 'Computing higher powers A^n and inverse A^-1', 'Matrix Diagonalization'],
    importance: 'High Priority',
    overview: 'Spectral theory of linear transformations, trace and determinant shortcuts, Cayley-Hamilton polynomial evaluation, and matrix powers.',
    order: 3
  },

  // Engineering Mathematics - Unit 2
  {
    id: 'top-math-201',
    unitId: 'unit-math-2',
    subjectId: 'subj-math',
    title: 'Calculus: Limits, Continuity & Maxima-Minima',
    subtopics: ["L'Hopital's rule for indeterminate forms", "Rolle's theorem & Lagrange's Mean Value Theorem", 'Taylor and Maclaurin expansions', 'Maxima and Minima of single and two variables', 'Saddle points'],
    importance: 'Important',
    overview: 'Differential calculus principles, asymptotic behavior, expansion series, and extreme value determination.',
    order: 1
  },

  // Engineering Mathematics - Unit 5
  {
    id: 'top-math-501',
    unitId: 'unit-math-5',
    subjectId: 'subj-math',
    title: 'Probability Theorems & Random Variables',
    subtopics: ['Axioms of probability', 'Conditional probability & Bayes theorem', 'Random variables (PDF, CDF)', 'Expectation, Variance, and Covariance', 'Binomial, Poisson, Normal, Uniform distributions'],
    importance: 'High Priority',
    overview: 'Probability measures, posterior inference using Bayes law, discrete and continuous random variables, and Gaussian integrals.',
    order: 1
  },

  // Signals & Systems - Unit 2
  {
    id: 'top-sig-201',
    unitId: 'unit-sig-2',
    subjectId: 'subj-signals',
    title: 'Continuous-Time Fourier Transform (CTFT)',
    subtopics: ['CTFT pair equations', 'Symmetry properties (Real/Imaginary, Even/Odd)', 'Duality, Time-shifting, Frequency-shifting properties', 'Parseval’s energy conservation theorem', 'Transform of standard signals (impulse, step, exp, rect, sinc)'],
    importance: 'High Priority',
    overview: 'Spectral analysis of aperiodic continuous signals, frequency response of LTI systems, filtering, and Parseval power/energy calculations.',
    order: 1
  }
];
