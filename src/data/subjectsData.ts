import { Subject, Unit, Topic } from '../types';

export interface SubjectWithNotes extends Subject {
  officialSyllabusSection: string;
  pdfHandbookUrl: string;
  pdfHandbookTitle: string;
  pdfHandbookPages: number;
}

export const INITIAL_SUBJECTS: Subject[] = [
  {
    id: 'subj-math',
    code: 'Section 1',
    name: 'Engineering Mathematics',
    description: 'Linear Algebra, Calculus, Differential Equations, Vector Analysis, Complex Analysis, and Probability & Statistics.',
    iconName: 'Calculator',
    order: 1,
    officialSyllabusSection: 'Section 1: Engineering Mathematics',
    pdfHandbookUrl: '/notes/Engineering_Mathematics_Notes_PW.pdf',
    pdfHandbookTitle: 'Engineering Mathematics Complete Master Handbook (Physics Wallah)',
    pdfHandbookPages: 66
  },
  {
    id: 'subj-networks-signals',
    code: 'Section 2',
    name: 'Networks, Signals and Systems',
    description: 'Circuit analysis, sinusoidal steady-state, transient & Laplace analysis, 2-port networks, LTI systems, Continuous-time (Fourier) and Discrete-time signals (DTFT, DFT, Z-transform).',
    iconName: 'Activity',
    order: 2,
    officialSyllabusSection: 'Section 2: Networks, Signals and Systems',
    pdfHandbookUrl: '/notes/Signals_and_Systems_Notes_PW.pdf',
    pdfHandbookTitle: 'Signals & Systems and Network Theory Master Handbook (Physics Wallah)',
    pdfHandbookPages: 79
  },
  {
    id: 'subj-edc',
    code: 'Section 3',
    name: 'Electronic Devices (EDC)',
    description: 'Energy bands in solids, carrier transport (drift/diffusion), P-N junction, Zener diode, BJT, MOS capacitor, MOSFET, scaling, and optoelectronic devices (LED, photodiode, solar cell).',
    iconName: 'Layers',
    order: 3,
    officialSyllabusSection: 'Section 3: Electronic Devices',
    pdfHandbookUrl: '/notes/Electronic_Devices_Circuits_Notes_PW.pdf',
    pdfHandbookTitle: 'Electronic Devices and Circuits Master Handbook (Physics Wallah)',
    pdfHandbookPages: 82
  },
  {
    id: 'subj-analog',
    code: 'Section 4',
    name: 'Analog Circuits',
    description: 'Diode circuits (clipping, clamping, rectifiers), BJT and MOSFET amplifiers, biasing, small signal, current mirrors, differential amps, Op-Amp circuits, active filters, oscillators, and Miller compensation.',
    iconName: 'Zap',
    order: 4,
    officialSyllabusSection: 'Section 4: Analog Circuits',
    pdfHandbookUrl: '/notes/Analog_Electronics_Notes_PW.pdf',
    pdfHandbookTitle: 'Analog Electronics Complete Master Handbook (Physics Wallah)',
    pdfHandbookPages: 39
  },
  {
    id: 'subj-digital',
    code: 'Section 5',
    name: 'Digital Circuits',
    description: 'Number representations, Boolean minimization & K-maps, static CMOS gates, combinational logic, sequential circuits (latches, flip-flops, counters, FSM), setup/hold time, ADCs/DACs, memories, and computer organization.',
    iconName: 'Cpu',
    order: 5,
    officialSyllabusSection: 'Section 5: Digital Circuits',
    pdfHandbookUrl: '/notes/Digital_Electronics_Notes_PW.pdf',
    pdfHandbookTitle: 'Digital Electronics Complete Master Handbook (Physics Wallah)',
    pdfHandbookPages: 85
  },
  {
    id: 'subj-control',
    code: 'Section 6',
    name: 'Control Systems',
    description: 'Feedback principle, transfer function, block diagrams, signal flow graph, transient & steady-state analysis, Routh-Hurwitz, Nyquist, Bode & Root-locus plots, compensators, PID controllers, and state-space model.',
    iconName: 'Sliders',
    order: 6,
    officialSyllabusSection: 'Section 6: Control Systems',
    pdfHandbookUrl: '/notes/Control_Systems_Notes_PW.pdf',
    pdfHandbookTitle: 'Control Systems Complete Master Handbook (Physics Wallah)',
    pdfHandbookPages: 84
  },
  {
    id: 'subj-comm',
    code: 'Section 7',
    name: 'Communications',
    description: 'Random processes, autocorrelation, PSD, white noise, AM & FM modulation, superheterodyne receivers, information theory, digital communications (PCM, ASK, PSK, FSK, QAM, ISI, matched filter, BER), and error control codes.',
    iconName: 'Radio',
    order: 7,
    officialSyllabusSection: 'Section 7: Communications',
    pdfHandbookUrl: '/notes/Communication_Systems_Notes_PW.pdf',
    pdfHandbookTitle: 'Communication Systems Complete Master Handbook (Physics Wallah)',
    pdfHandbookPages: 89
  },
  {
    id: 'subj-emft',
    code: 'Section 8',
    name: 'Electromagnetics',
    description: 'Maxwell’s equations, boundary conditions, Poynting vector, plane waves, polarization, skin depth, transmission lines, Smith chart, waveguides, optical fibers, and dipole/monopole/array antennas.',
    iconName: 'Compass',
    order: 8,
    officialSyllabusSection: 'Section 8: Electromagnetics',
    pdfHandbookUrl: '/notes/Electromagnetic_Field_Theory_Notes_PW.pdf',
    pdfHandbookTitle: 'Electromagnetic Field Theory Master Handbook (Physics Wallah)',
    pdfHandbookPages: 105
  },
  {
    id: 'subj-aptitude',
    code: 'Section 0',
    name: 'General Aptitude',
    description: 'Verbal aptitude, quantitative aptitude, analytical aptitude, data interpretation, and spatial reasoning for the mandatory 15 marks section.',
    iconName: 'FileText',
    order: 9,
    officialSyllabusSection: 'General Aptitude (Mandatory 15 Marks)',
    pdfHandbookUrl: '/notes/General_Aptitude_Notes_PW.pdf',
    pdfHandbookTitle: 'General Aptitude Complete Master Handbook (Physics Wallah)',
    pdfHandbookPages: 28
  }
];

export const INITIAL_UNITS: Unit[] = [
  // SECTION 1: Engineering Mathematics
  {
    id: 'unit-math-1',
    subjectId: 'subj-math',
    unitNumber: 1,
    title: 'Linear Algebra',
    description: 'Vector space, basis, linear dependence and independence, matrix algebra, eigenvalues and eigenvectors, rank, solution of linear equations - existence and uniqueness.',
    order: 1
  },
  {
    id: 'unit-math-2',
    subjectId: 'subj-math',
    unitNumber: 2,
    title: 'Calculus',
    description: 'Mean value theorems, theorems of integral calculus, evaluation of definite and improper integrals, partial derivatives, maxima and minima, multiple integrals, line, surface and volume integrals, Taylor series.',
    order: 2
  },
  {
    id: 'unit-math-3',
    subjectId: 'subj-math',
    unitNumber: 3,
    title: 'Differential Equations',
    description: 'Linear differential equations, Euler-Cauchy equation, Nonhomogeneous equations, variation of parameters, complementary function and particular integral, PDEs, variable separable method, initial and boundary value problems.',
    order: 3
  },
  {
    id: 'unit-math-4',
    subjectId: 'subj-math',
    unitNumber: 4,
    title: 'Vector Analysis',
    description: 'Vectors in plane and space, vector operations, gradient, divergence and curl, Gauss’s, Green’s and Stokes’ theorems.',
    order: 4
  },
  {
    id: 'unit-math-5',
    subjectId: 'subj-math',
    unitNumber: 5,
    title: 'Complex Analysis',
    description: 'Analytic functions, Cauchy’s integral theorem, Cauchy’s integral formula, sequences, series, convergence tests, Taylor and Laurent series, residue theorem.',
    order: 5
  },
  {
    id: 'unit-math-6',
    subjectId: 'subj-math',
    unitNumber: 6,
    title: 'Probability and Statistics',
    description: 'Mean, median, mode, standard deviation, combinatorial probability, distributions (Binomial, Poisson, exponential, normal), joint and conditional probability, correlation and regression analysis.',
    order: 6
  },

  // SECTION 2: Networks, Signals and Systems
  {
    id: 'unit-net-1',
    subjectId: 'subj-networks-signals',
    unitNumber: 1,
    title: 'Circuit Analysis & Theorems',
    description: 'Node and mesh analysis, superposition, Thevenin’s theorem, Norton’s theorem, reciprocity. Sinusoidal steady state analysis: phasors, complex power, maximum power transfer.',
    order: 1
  },
  {
    id: 'unit-net-2',
    subjectId: 'subj-networks-signals',
    unitNumber: 2,
    title: 'Time & Frequency Domain Circuit Analysis',
    description: 'RL, RC and RLC circuits, solution of network equations using Laplace transform. Linear 2-port network parameters, wye-delta transformation.',
    order: 2
  },
  {
    id: 'unit-net-3',
    subjectId: 'subj-networks-signals',
    unitNumber: 3,
    title: 'LTI Systems & Convolution',
    description: 'Definition and properties, causality, stability, impulse response, convolution, poles and zeroes, frequency response, group delay, phase delay.',
    order: 3
  },
  {
    id: 'unit-net-4',
    subjectId: 'subj-networks-signals',
    unitNumber: 4,
    title: 'Continuous-Time Signals (Fourier & Sampling)',
    description: 'Fourier series and Fourier transform, Nyquist sampling theorem, sampling and reconstruction.',
    order: 4
  },
  {
    id: 'unit-net-5',
    subjectId: 'subj-networks-signals',
    unitNumber: 5,
    title: 'Discrete-Time Signals & Filters',
    description: 'Discrete-Time Fourier Transform (DTFT), DFT, z-transform, FIR and IIR filter design.',
    order: 5
  },

  // SECTION 3: Electronic Devices
  {
    id: 'unit-edc-1',
    subjectId: 'subj-edc',
    unitNumber: 1,
    title: 'Energy Bands & Equilibrium Carriers',
    description: 'Formation of energy bands in solids, energy bands in intrinsic and extrinsic semiconductors, equilibrium carrier concentration, direct and indirect band-gap semiconductors.',
    order: 1
  },
  {
    id: 'unit-edc-2',
    subjectId: 'subj-edc',
    unitNumber: 2,
    title: 'Carrier Transport & Recombination',
    description: 'Diffusion current, drift current, mobility and resistivity, generation and recombination of carriers, Poisson and continuity equations.',
    order: 2
  },
  {
    id: 'unit-edc-3',
    subjectId: 'subj-edc',
    unitNumber: 3,
    title: 'P-N Junction, BJT & MOSFET',
    description: 'P-N junction, Zener diode, BJT, MOS capacitor, MOSFET, scaling in MOSFETs, LED, photo diode and solar cell.',
    order: 3
  },

  // SECTION 4: Analog Circuits
  {
    id: 'unit-analog-1',
    subjectId: 'subj-analog',
    unitNumber: 1,
    title: 'Diode Circuits',
    description: 'Clipping circuits, clamping circuits, half-wave, full-wave and bridge rectifiers.',
    order: 1
  },
  {
    id: 'unit-analog-2',
    subjectId: 'subj-analog',
    unitNumber: 2,
    title: 'BJT and MOSFET Amplifiers',
    description: 'Biasing, AC coupling, small signal analysis, frequency response, current mirrors, and differential amplifiers.',
    order: 2
  },
  {
    id: 'unit-analog-3',
    subjectId: 'subj-analog',
    unitNumber: 3,
    title: 'Op-Amp Circuits & Oscillators',
    description: 'Amplifiers, summers, differentiators, integrators, active filters, Schmitt trigger, oscillators, dominant-pole (Miller) compensation, phase margin.',
    order: 3
  },

  // SECTION 5: Digital Circuits
  {
    id: 'unit-dig-1',
    subjectId: 'subj-digital',
    unitNumber: 1,
    title: 'Combinatorial Circuits & Minimization',
    description: 'Number representations (binary, integer, floating-point), Boolean algebra, minimization using identities and Karnaugh map, logic gates & static CMOS implementation, arithmetic circuits, code converters, multiplexers, decoders.',
    order: 1
  },
  {
    id: 'unit-dig-2',
    subjectId: 'subj-digital',
    unitNumber: 2,
    title: 'Sequential Circuits & Timing',
    description: 'Latches and flip-flops, counters, shift-registers, finite state machines, propagation delay, setup and hold time, critical path delay.',
    order: 2
  },
  {
    id: 'unit-dig-3',
    subjectId: 'subj-digital',
    unitNumber: 3,
    title: 'Data Converters & Memories',
    description: 'Sample and hold circuits, ADCs (Flash, SAR, Dual-slope) and DACs (R-2R, weighted resistor). Semiconductor memories: ROM, SRAM, DRAM.',
    order: 3
  },
  {
    id: 'unit-dig-4',
    subjectId: 'subj-digital',
    unitNumber: 4,
    title: 'Computer Organization',
    description: 'Machine instructions and addressing modes, ALU, data-path and control unit, instruction pipelining and hazards.',
    order: 4
  },

  // SECTION 6: Control Systems
  {
    id: 'unit-ctrl-1',
    subjectId: 'subj-control',
    unitNumber: 1,
    title: 'Feedback, Transfer Function & State Space',
    description: 'Basic control system components; Feedback principle; Transfer function; Block diagram representation; Signal flow graph; State variable model and solution of state equation of LTI systems.',
    order: 1
  },
  {
    id: 'unit-ctrl-2',
    subjectId: 'subj-control',
    unitNumber: 2,
    title: 'Time & Frequency Response & Stability',
    description: 'Transient and steady-state analysis of LTI systems; Frequency response; Routh-Hurwitz and Nyquist stability criteria; Bode and root-locus plots; compensators, PID controller.',
    order: 2
  },

  // SECTION 7: Communications
  {
    id: 'unit-comm-1',
    subjectId: 'subj-comm',
    unitNumber: 1,
    title: 'Random Processes & Noise',
    description: 'Random processes: Autocorrelation and power spectral density, properties of white noise, filtering of random signals through LTI systems.',
    order: 1
  },
  {
    id: 'unit-comm-2',
    subjectId: 'subj-comm',
    unitNumber: 2,
    title: 'Analog Communications & Receivers',
    description: 'Amplitude modulation and demodulation, angle modulation and demodulation, spectra of AM and FM, superheterodyne receivers.',
    order: 2
  },
  {
    id: 'unit-comm-3',
    subjectId: 'subj-comm',
    unitNumber: 3,
    title: 'Digital Communications & Info Theory',
    description: 'Information theory: Entropy, mutual info, channel capacity. Digital comms: PCM, DPCM, ASK, PSK, FSK, QAM, ISI, matched filter, SNR, BER, Hamming codes, CRC.',
    order: 3
  },

  // SECTION 8: Electromagnetics
  {
    id: 'unit-emft-1',
    subjectId: 'subj-emft',
    unitNumber: 1,
    title: 'Maxwell’s Equations & Plane Waves',
    description: 'Maxwell’s equations: Differential and integral forms and interpretation, boundary conditions, wave equation, Poynting vector. Plane waves: reflection, refraction, polarization, phase and group velocity, skin depth.',
    order: 1
  },
  {
    id: 'unit-emft-2',
    subjectId: 'subj-emft',
    unitNumber: 2,
    title: 'Transmission Lines, Waveguides & Antennas',
    description: 'Transmission line equations, characteristic impedance, impedance matching, S-parameters, Smith chart. Rectangular and circular waveguides, optical fibers, dipole & monopole antennas, linear arrays.',
    order: 2
  },

  // SECTION 0: General Aptitude (Mandatory 15 Marks)
  {
    id: 'unit-apt-1',
    subjectId: 'subj-aptitude',
    unitNumber: 1,
    title: 'Quantitative & Numerical Aptitude',
    description: 'Data interpretation (bar charts, pie charts, graphs), numerical computation, percentages, ratios, powers, exponents, logarithms, permutations & combinations, series, mensuration, geometry, elementary statistics and probability.',
    order: 1
  },
  {
    id: 'unit-apt-2',
    subjectId: 'subj-aptitude',
    unitNumber: 2,
    title: 'Verbal, Analytical & Spatial Aptitude',
    description: 'Verbal: English grammar, vocabulary, reading comprehension. Analytical: Logic deduction, syllogism, analogy, numerical relations. Spatial: Transformation of 2D & 3D shapes, folding, paper cutting, mirror reflection.',
    order: 2
  }
];

export const INITIAL_TOPICS: Topic[] = [
  // SECTION 1: Engineering Mathematics Topics
  {
    id: 'top-math-101',
    unitId: 'unit-math-1',
    subjectId: 'subj-math',
    title: 'Vector Spaces & Matrix Rank',
    subtopics: ['Vector space, subspace, basis and dimension', 'Linear dependence and independence', 'Matrix algebra, rank of a matrix', 'Row echelon form and nullity'],
    importance: 'Important',
    overview: 'Basis vectors, dimension of eigenspaces, rank invariance, and linear independence.',
    order: 1
  },
  {
    id: 'top-math-102',
    unitId: 'unit-math-1',
    subjectId: 'subj-math',
    title: 'System of Linear Equations',
    subtopics: ['Homogeneous systems AX = 0', 'Non-homogeneous systems AX = B', 'Rouche-Capelli theorem', 'Existence and uniqueness conditions'],
    importance: 'Frequently Asked',
    overview: 'Solvability conditions using Rank(A) vs Rank(A|B), degrees of freedom, and unique/infinite/no solution tests.',
    order: 2
  },
  {
    id: 'top-math-103',
    unitId: 'unit-math-1',
    subjectId: 'subj-math',
    title: 'Eigenvalues, Eigenvectors & Cayley-Hamilton',
    subtopics: ['Characteristic equation det(A - λI) = 0', 'Trace = sum of eigenvalues', 'Determinant = product of eigenvalues', 'Cayley-Hamilton theorem (A satisfies its own char eqn)', 'Computing A^-1 and A^m powers', 'Diagonalization & spectral theorem'],
    importance: 'High Priority',
    overview: 'Spectral theory of linear transformations, trace and determinant shortcuts, Cayley-Hamilton polynomial evaluation, and matrix powers.',
    order: 3
  },
  {
    id: 'top-math-201',
    unitId: 'unit-math-2',
    subjectId: 'subj-math',
    title: 'Calculus: Maxima, Minima & Integrals',
    subtopics: ["Rolle's and Lagrange's Mean value theorems", 'Taylor and Maclaurin series expansions', 'Partial derivatives, gradient, maxima and minima', 'Evaluation of definite and improper integrals', 'Multiple integrals (double and triple integrals)'],
    importance: 'Important',
    overview: 'Differential calculus, expansion series, extreme value determination, and multiple integration coordinate transformations.',
    order: 1
  },
  {
    id: 'top-math-301',
    unitId: 'unit-math-3',
    subjectId: 'subj-math',
    title: 'Differential Equations & PDE Solutions',
    subtopics: ['Higher order linear ODEs with constant coefficients', 'Euler-Cauchy equations', 'Variation of parameters method', 'Complementary function and particular integral', 'Partial differential equations & variable separable method'],
    importance: 'Important',
    overview: 'Analytical solutions of linear differential equations, initial and boundary value problems in engineering.',
    order: 1
  },
  {
    id: 'top-math-401',
    unitId: 'unit-math-4',
    subjectId: 'subj-math',
    title: 'Vector Calculus: Divergence & Stokes',
    subtopics: ['Gradient, Divergence and Curl', 'Line, surface and volume integrals', "Gauss's Divergence Theorem", "Green's Theorem in a plane", "Stokes' Theorem"],
    importance: 'Frequently Asked',
    overview: 'Vector fields, conservative fields, path independence, and flux evaluation across closed surfaces.',
    order: 1
  },
  {
    id: 'top-math-501',
    unitId: 'unit-math-5',
    subjectId: 'subj-math',
    title: 'Complex Analysis: Cauchy Theorems & Residue',
    subtopics: ['Analytic functions & Cauchy-Riemann equations', "Cauchy's integral theorem and formula", 'Taylor and Laurent series', 'Residue theorem and contour integration'],
    importance: 'High Priority',
    overview: 'Complex differentiation, singularities, poles, Laurent expansions, and residue integration for real integrals.',
    order: 1
  },
  {
    id: 'top-math-601',
    unitId: 'unit-math-6',
    subjectId: 'subj-math',
    title: 'Probability Distributions & Bayes Theorem',
    subtopics: ['Conditional probability & Bayes theorem', 'Random variables (PDF, CDF)', 'Binomial, Poisson, Normal, Exponential distributions', 'Mean, variance, correlation, and regression analysis'],
    importance: 'High Priority',
    overview: 'Probability models, conditional expectation, Gaussian random variables, and statistical regression.',
    order: 1
  },

  // SECTION 2: Networks, Signals and Systems
  {
    id: 'top-net-101',
    unitId: 'unit-net-1',
    subjectId: 'subj-networks-signals',
    title: 'Network Theorems & Phasor Steady State',
    subtopics: ['Node and mesh analysis', 'Superposition, Thevenin, Norton, Reciprocity theorems', 'Sinusoidal steady state, phasors, complex power', 'Maximum power transfer theorem (AC and DC)'],
    importance: 'High Priority',
    overview: 'Linear network solution techniques, equivalent circuit modeling, and AC power matching.',
    order: 1
  },
  {
    id: 'top-net-201',
    unitId: 'unit-net-2',
    subjectId: 'subj-networks-signals',
    title: 'Transient Response & Two-Port Parameters',
    subtopics: ['First-order RL and RC transient response', 'Second-order RLC circuit dynamics', 'Laplace transform solution of network differential equations', 'Z, Y, ABCD, and h two-port parameters', 'Wye-Delta transformations'],
    importance: 'Important',
    overview: 'Natural and forced response, damping ratio, Laplace s-domain circuit equivalents, and 2-port cascading.',
    order: 1
  },
  {
    id: 'top-net-301',
    unitId: 'unit-net-3',
    subjectId: 'subj-networks-signals',
    title: 'LTI Systems, Convolution & Stability',
    subtopics: ['Linearity, Time-invariance, Causality, Stability', 'Impulse response and convolution integral / sum', 'Poles and zeros, frequency response', 'Group delay and phase delay'],
    importance: 'High Priority',
    overview: 'Fundamental characterization of linear continuous-time and discrete-time filters.',
    order: 1
  },
  {
    id: 'top-net-401',
    unitId: 'unit-net-4',
    subjectId: 'subj-networks-signals',
    title: 'Continuous-Time Fourier Transform & Sampling',
    subtopics: ['Continuous-time Fourier Series (CTFS) and Transform (CTFT)', 'Properties: Duality, Convolution, Modulation, Parseval theorem', 'Nyquist sampling theorem', 'Bandpass sampling and signal reconstruction'],
    importance: 'High Priority',
    overview: 'Spectral analysis of continuous signals, filtering, Nyquist rate calculation, and ideal reconstruction.',
    order: 1
  },
  {
    id: 'top-net-501',
    unitId: 'unit-net-5',
    subjectId: 'subj-networks-signals',
    title: 'Discrete-Time Signals, Z-Transform & Filters',
    subtopics: ['Discrete-time Fourier Transform (DTFT) and DFT', 'Z-transform, ROC properties, inverse Z-transform', 'FIR and IIR filter design basics'],
    importance: 'Important',
    overview: 'Discrete frequency analysis, transfer function stability in z-plane, and digital filter realization.',
    order: 1
  },

  // SECTION 3: Electronic Devices (EDC)
  {
    id: 'top-edc-101',
    unitId: 'unit-edc-1',
    subjectId: 'subj-edc',
    title: 'Semiconductor Physics & Energy Bands',
    subtopics: ['Formation of energy bands in solids', 'Intrinsic and extrinsic semiconductors (Fermi level, ni, donor/acceptor)', 'Equilibrium carrier concentration law of mass action', 'Direct and indirect bandgap materials'],
    importance: 'Important',
    overview: 'Band theory, Fermi-Dirac statistics, density of states, and radiative vs non-radiative transitions.',
    order: 1
  },
  {
    id: 'top-edc-201',
    unitId: 'unit-edc-2',
    subjectId: 'subj-edc',
    title: 'Carrier Transport: Drift, Diffusion & Continuity',
    subtopics: ['Drift current, mobility, conductivity and Einstein relation', 'Diffusion current and Fick’s law', 'Generation, recombination and carrier lifetime', 'Poisson equation and continuity equation'],
    importance: 'High Priority',
    overview: 'Carrier transport equations, minority carrier diffusion equations, and quasi-neutrality.',
    order: 1
  },
  {
    id: 'top-edc-301',
    unitId: 'unit-edc-3',
    subjectId: 'subj-edc',
    title: 'P-N Junction, MOSFET & Optoelectronic Devices',
    subtopics: ['P-N junction electrostatics, built-in potential, depletion width', 'Zener breakdown and avalanche breakdown', 'BJT base transport factor and emitter injection efficiency', 'MOS capacitor (Accumulation, Depletion, Inversion)', 'MOSFET I-V characteristics, threshold voltage, scaling issues', 'LED, photodiode and solar cell'],
    importance: 'High Priority',
    overview: 'Solid-state device physics, MOSFET inversion charge, short-channel effects, and solar cell efficiency.',
    order: 1
  },

  // SECTION 4: Analog Circuits
  {
    id: 'top-ana-101',
    unitId: 'unit-analog-1',
    subjectId: 'subj-analog',
    title: 'Diode Applications: Clippers, Clampers & Rectifiers',
    subtopics: ['Biased and unbiased diode clipping circuits', 'Clamping circuits and DC restorer', 'Half-wave, full-wave center-tapped and bridge rectifiers', 'Capacitor filter and ripple factor'],
    importance: 'Important',
    overview: 'Non-linear wave shaping, transfer characteristics, peak inverse voltage (PIV), and rectifier efficiency.',
    order: 1
  },
  {
    id: 'top-ana-201',
    unitId: 'unit-analog-2',
    subjectId: 'subj-analog',
    title: 'BJT & MOSFET Amplifiers & Current Mirrors',
    subtopics: ['DC biasing and stability factors', 'Small signal h-parameter and hybrid-pi equivalent circuits', 'Common Emitter / Common Source frequency response', 'Current mirrors and active loads', 'Differential amplifiers (CMRR, differential gain)'],
    importance: 'High Priority',
    overview: 'Transistor small-signal gain, input/output impedances, Miller effect, high-frequency cutoff, and differential stages.',
    order: 1
  },
  {
    id: 'top-ana-301',
    unitId: 'unit-analog-3',
    subjectId: 'subj-analog',
    title: 'Op-Amp Circuits, Active Filters & Oscillators',
    subtopics: ['Ideal and practical Op-Amp parameters (open-loop gain, input offset, slew rate)', 'Inverting, non-inverting amplifiers, summers, integrators, differentiators', 'Active Butterworth low-pass and high-pass filters', 'Schmitt trigger and hysteresis voltage', 'Barkhausen criteria, RC phase shift, Wien bridge, LC oscillators', 'Dominant-pole (Miller) frequency compensation and phase margin'],
    importance: 'High Priority',
    overview: 'Linear and non-linear operational amplifier circuits, regenerative feedback, closed-loop stability, and phase margin.',
    order: 1
  },

  // SECTION 5: Digital Circuits
  {
    id: 'top-dig-101',
    unitId: 'unit-dig-1',
    subjectId: 'subj-digital',
    title: 'Number Systems, K-Maps & Static CMOS Gates',
    subtopics: ['Binary, integer and floating-point representations', "1's and 2's complement arithmetic and overflow", 'Boolean minimization using identities and Karnaugh map', 'Static CMOS gate implementations (PUN and PDN networks)', 'Adders, look-ahead carry, subtractors, multiplexers, decoders'],
    importance: 'High Priority',
    overview: 'Number representations, boolean optimization, static CMOS circuit sizing, and combinational building blocks.',
    order: 1
  },
  {
    id: 'top-dig-201',
    unitId: 'unit-dig-2',
    subjectId: 'subj-digital',
    title: 'Sequential Circuits & Static Timing Analysis',
    subtopics: ['Latches and flip-flops (SR, JK, D, T) and conversions', 'Race-around condition and Master-Slave solution', 'Synchronous and ripple counters', 'Shift registers and sequence generators', 'Mealy and Moore finite state machines', 'Setup time, hold time, clock skew, and critical path delay'],
    importance: 'High Priority',
    overview: 'Synchronous sequential logic, timing analysis (t_su, t_h, max clock frequency), and state transition synthesis.',
    order: 1
  },
  {
    id: 'top-dig-301',
    unitId: 'unit-dig-3',
    subjectId: 'subj-digital',
    title: 'Data Converters (ADC/DAC) & Memories',
    subtopics: ['Sample and hold circuits', 'DAC: Binary weighted resistor and R-2R ladder DAC', 'ADC: Flash (comparator count), SAR (conversion cycles), Dual-slope', 'Resolution, quantization error, SNR', 'Semiconductor memories: ROM, SRAM, DRAM cell structures'],
    importance: 'Frequently Asked',
    overview: 'Interfacing analog and digital domains, quantization noise, ADC architectures, and volatile/non-volatile memory cells.',
    order: 1
  },
  {
    id: 'top-dig-401',
    unitId: 'unit-dig-4',
    subjectId: 'subj-digital',
    title: 'Computer Organization & Instruction Pipelining',
    subtopics: ['Machine instructions and addressing modes', 'ALU, data-path and control unit design', 'Instruction pipelining, pipeline throughput, CPI', 'Structural, data, and control pipeline hazards'],
    importance: 'Important',
    overview: 'Processor architecture, addressing modes, pipeline speedup calculation, and hazard resolution.',
    order: 1
  },

  // SECTION 6: Control Systems
  {
    id: 'top-ctrl-101',
    unitId: 'unit-ctrl-1',
    subjectId: 'subj-control',
    title: 'Block Diagrams, Signal Flow Graphs & State Space',
    subtopics: ['Transfer function of electrical and mechanical systems', 'Block diagram reduction algebra', "Mason's Gain Formula for Signal Flow Graphs (SFG)", 'State variable model, state equation, state transition matrix e^{At}', 'Controllability and observability (Kalman test)'],
    importance: 'High Priority',
    overview: 'System modeling, Mason gain formula, state transition matrix computation, and controllability/observability criteria.',
    order: 1
  },
  {
    id: 'top-ctrl-201',
    unitId: 'unit-ctrl-2',
    subjectId: 'subj-control',
    title: 'Stability: Routh, Nyquist, Bode & Root Locus',
    subtopics: ['First and second-order system transient specifications (rise time, peak overshoot, settling time)', 'Steady-state error and error constants (Kp, Kv, Ka)', 'Routh-Hurwitz stability criterion and special cases', 'Root-locus plotting rules and breakaway points', 'Nyquist stability criterion and encirclement count N = P - Z', 'Bode plot: Gain margin, phase margin, gain crossover, phase crossover', 'Lead, lag, lag-lead compensators and PID controller tuning'],
    importance: 'High Priority',
    overview: 'Complete time and frequency domain stability analysis, relative stability margins, and compensator synthesis.',
    order: 1
  },

  // SECTION 7: Communications
  {
    id: 'top-comm-101',
    unitId: 'unit-comm-1',
    subjectId: 'subj-comm',
    title: 'Random Processes & Noise in LTI Systems',
    subtopics: ['Wide-Sense Stationary (WSS) random processes', 'Autocorrelation function and Wiener-Khinchin theorem', 'Power Spectral Density (PSD) and cross-correlation', 'White Gaussian Noise (AWGN) properties', 'Filtering of random noise through linear time-invariant filters'],
    importance: 'High Priority',
    overview: 'Statistical communications, PSD filtering output S_yy(f) = |H(f)|^2 S_xx(f), and noise equivalent bandwidth.',
    order: 1
  },
  {
    id: 'top-comm-201',
    unitId: 'unit-comm-2',
    subjectId: 'subj-comm',
    title: 'Analog Modulation: AM, FM & Superheterodyne',
    subtopics: ['Standard AM, DSB-SC, SSB-SC, VSB generation and demodulation', 'Power and modulation index calculations in AM', 'Narrowband and wideband FM, Carson’s bandwidth rule', 'Superheterodyne receiver architecture and intermediate frequency (IF)', 'Image frequency rejection ratio'],
    importance: 'Important',
    overview: 'Analog carrier modulation, power transmission efficiency, FM frequency deviation, and RF receiver design.',
    order: 1
  },
  {
    id: 'top-comm-301',
    unitId: 'unit-comm-3',
    subjectId: 'subj-comm',
    title: 'Digital Communications, Information Theory & Coding',
    subtopics: ['Entropy, source coding theorem (Huffman, Shannon-Fano)', 'Mutual information and Shannon channel capacity theorem C = B log2(1 + SNR)', 'Pulse Code Modulation (PCM), quantization noise, companding', 'Digital passband schemes: BPSK, QPSK, BFSK, QAM constellation diagrams', 'Inter-Symbol Interference (ISI) and Nyquist criterion for zero ISI', 'Maximum A Posteriori (MAP) and Maximum Likelihood (ML) detection', 'Matched filter impulse response h(t) = s*(T - t) and peak SNR', 'Linear block codes, parity check matrix, syndrome decoding, Hamming codes, CRC'],
    importance: 'High Priority',
    overview: 'Digital transmission fundamentals, constellation analysis, matched filter optimum SNR, and error control codes.',
    order: 1
  },

  // SECTION 8: Electromagnetics
  {
    id: 'top-emft-101',
    unitId: 'unit-emft-1',
    subjectId: 'subj-emft',
    title: 'Maxwell’s Equations & Uniform Plane Waves',
    subtopics: ['Maxwell’s equations in differential and integral forms', 'Electromagnetic boundary conditions for dielectrics and conductors', 'Uniform plane wave propagation, intrinsic impedance, attenuation and phase constants', 'Poynting vector and time-average power density', 'Polarization: Linear, circular, elliptical polarization', 'Normal and oblique incidence, reflection and transmission coefficients', 'Skin depth in good conductors'],
    importance: 'High Priority',
    overview: 'Electrodynamics, boundary value problems, plane wave propagation, wave polarization, and conductor skin effect.',
    order: 1
  },
  {
    id: 'top-emft-201',
    unitId: 'unit-emft-2',
    subjectId: 'subj-emft',
    title: 'Transmission Lines, Waveguides & Antennas',
    subtopics: ['Transmission line equations, characteristic impedance Z0, propagation constant', 'Reflection coefficient Γ, Standing Wave Ratio (SWR / VSWR)', 'Input impedance of lossy and lossless lines, quarter-wave transformer', 'Smith chart basics and impedance matching (single stub)', 'S-parameters of two-port microwave networks', 'Rectangular waveguide TE and TM modes, cutoff frequency, guide wavelength', 'Optical fiber numerical aperture and V-number', 'Radiation resistance, directive gain, directivity of Hertzian dipole, half-wave dipole, and linear arrays'],
    importance: 'High Priority',
    overview: 'High-frequency guided wave propagation, transmission line matching, microwave waveguide modes, and antenna radiation patterns.',
    order: 1
  },

  // SECTION 0: General Aptitude Topics
  {
    id: 'top-apt-101',
    unitId: 'unit-apt-1',
    subjectId: 'subj-aptitude',
    title: 'Quantitative Aptitude & Numerical Reasoning',
    subtopics: [
      'Data interpretation: charts, graphs, tables and histograms',
      'Numerical computation: ratios, proportions, percentages, averages',
      'Powers, exponents, logarithms and series progressions (AP, GP)',
      'Permutations, combinations and combinatorial probability',
      'Mensuration, geometry and elementary trigonometry'
    ],
    importance: 'High Priority',
    overview: 'High-scoring quantitative problem solving covering essential arithmetic, algebraic, geometric, and data analysis concepts for the mandatory 15-mark General Aptitude section.',
    order: 1
  },
  {
    id: 'top-apt-201',
    unitId: 'unit-apt-2',
    subjectId: 'subj-aptitude',
    title: 'Analytical, Verbal & Spatial Reasoning',
    subtopics: [
      'Logical deduction, syllogism and inference validation',
      'Analogy, numerical relations and sequencing patterns',
      'English grammar, sentence completion and critical reading comprehension',
      'Spatial reasoning: 2D and 3D shape transformations, rotation and reflection',
      'Paper folding, cutting and assembling spatial patterns'
    ],
    importance: 'High Priority',
    overview: 'Verbal comprehension, structural logical deduction, and spatial pattern transformation required across all GATE papers.',
    order: 1
  }
];
