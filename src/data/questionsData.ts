import { Question } from '../types';

export const INITIAL_QUESTIONS: Question[] = [
  // ==========================================
  // SECTION 1: ENGINEERING MATHEMATICS (subj-math)
  // ==========================================
  {
    id: 'q-math-2024-01',
    year: 2024,
    sourcePaper: 'GATE ECE 2024',
    subjectId: 'subj-math',
    subjectName: 'Engineering Mathematics',
    unitId: 'unit-math-1',
    topicId: 'top-math-103',
    topicTitle: 'Eigenvalues, Eigenvectors & Cayley-Hamilton',
    questionNumber: 8,
    type: 'MCQ',
    marks: 1,
    difficulty: 'Easy',
    conceptTested: 'Linear Algebra → Eigenvalues, Trace, and Determinant Spectral Properties',
    questionText: 'Consider a 3 × 3 real matrix A whose trace is 9 and determinant is 24. If two of the eigenvalues of A are 2 and 3, then what is the third eigenvalue of A?',
    options: [
      { label: 'A', text: '1' },
      { label: 'B', text: '4' },
      { label: 'C', text: '6' },
      { label: 'D', text: '8' }
    ],
    correctAnswer: 'B',
    detailedExplanation: 'We exploit the fundamental spectral properties of square matrices relating eigenvalues to trace and determinant: (1) The sum of all eigenvalues equals the trace of the matrix: λ1 + λ2 + λ3 = Trace(A). (2) The product of all eigenvalues equals the determinant: λ1 · λ2 · λ3 = Det(A). Both properties independently confirm the third eigenvalue.',
    steps: [
      'Step 1: Recall the Trace Law: Sum of all eigenvalues equals the trace of matrix A:\nλ1 + λ2 + λ3 = Trace(A)',
      'Step 2: Substitute the known values:\n9 = 2 + 3 + λ3  ⟹  9 = 5 + λ3  ⟹  λ3 = 4.',
      'Step 3: Cross-verify using the Determinant Law: Product of all eigenvalues equals Det(A):\nλ1 · λ2 · λ3 = Det(A)',
      'Step 4: Substitute into product relation:\n24 = 2 · 3 · λ3  ⟹  24 = 6 · λ3  ⟹  λ3 = 4.',
      'Step 5: Both properties consistently confirm λ3 = 4. Hence Option B is correct.'
    ],
    commonPitfall: 'Confusing determinant with trace, or attempting to write characteristic polynomials when the direct spectral invariants yield the answer immediately.',
    relatedFormula: '\\sum \\lambda_i = \\text{Trace}(A), \\quad \\prod \\lambda_i = \\det(A)'
  },
  {
    id: 'q-math-2022-01',
    year: 2022,
    sourcePaper: 'GATE ECE 2022',
    subjectId: 'subj-math',
    subjectName: 'Engineering Mathematics',
    unitId: 'unit-math-1',
    topicId: 'top-math-102',
    topicTitle: 'System of Linear Equations',
    questionNumber: 12,
    type: 'MCQ',
    marks: 1,
    difficulty: 'Medium',
    conceptTested: 'Linear Algebra → Consistency of Non-Homogeneous Linear Systems AX = B',
    questionText: 'Consider a system of linear equations Ax = b, where A = [[1, -√2, 3], [-1, √2, -3]] and b = [1, 3]^T. This system of equations admits:',
    options: [
      { label: 'A', text: 'a unique solution for x' },
      { label: 'B', text: 'infinitely many solutions for x' },
      { label: 'C', text: 'no solutions for x (inconsistent)' },
      { label: 'D', text: 'exactly two solutions for x' }
    ],
    correctAnswer: 'C',
    detailedExplanation: 'We analyze the rank of coefficient matrix A and augmented matrix [A|b] using Rouché-Capelli theorem. Adding Row 1 to Row 2 gives a zero row on the left side, but a non-zero constant on the right side.',
    steps: [
      'Step 1: Set up the augmented matrix [A | b]:\n[A | b] = [ [ 1,  -√2,   3  |  1 ],\n            [ -1,  √2,  -3  |  3 ] ]',
      'Step 2: Apply the elementary row operation R2 -> R2 + R1:\nNew R2 = [ -1+1,  √2+(-√2),  -3+3  |  3+1 ] = [ 0,  0,  0  |  4 ]',
      'Step 3: Analyze the resulting row:\nThe second equation translates to: 0·x1 + 0·x2 + 0·x3 = 4, which is a contradiction (0 = 4 is impossible).',
      'Step 4: Compare ranks:\nRank(A) = 1, but Rank([A | b]) = 2.\nSince Rank(A) ≠ Rank([A | b]), the system is inconsistent and admits NO solutions.',
      'Hence Option C is correct.'
    ],
    commonPitfall: 'Seeing that row 2 of A is -1 times row 1 and mistakenly concluding infinitely many solutions without checking the right-hand constant vector b.',
    relatedFormula: '\\text{Rank}(A) = \\text{Rank}([A|b]) \\iff \\text{Consistent}'
  },
  {
    id: 'q-math-2022-02',
    year: 2022,
    sourcePaper: 'GATE ECE 2022',
    subjectId: 'subj-math',
    subjectName: 'Engineering Mathematics',
    unitId: 'unit-math-1',
    topicId: 'top-math-103',
    topicTitle: 'Eigenvalues, Eigenvectors & Cayley-Hamilton',
    questionNumber: 26,
    type: 'MCQ',
    marks: 2,
    difficulty: 'Medium',
    conceptTested: 'Linear Algebra → Cayley-Hamilton Application for Higher Matrix Powers',
    questionText: 'Let A = [[1, 2], [0, 2]]. Using Cayley-Hamilton theorem, express A³ in the linear form αA + βI, and find the values of α and β respectively.',
    options: [
      { label: 'A', text: 'α = 7, β = -6' },
      { label: 'B', text: 'α = 6, β = -7' },
      { label: 'C', text: 'α = 7, β = 6' },
      { label: 'D', text: 'α = 3, β = -2' }
    ],
    correctAnswer: 'A',
    detailedExplanation: 'The characteristic polynomial of matrix A is P(λ) = λ² - Trace(A)λ + Det(A). By the Cayley-Hamilton theorem, every square matrix satisfies its own characteristic equation: A² - Trace(A)A + Det(A)I = 0.',
    steps: [
      'Step 1: Compute Trace and Determinant of A = [[1, 2], [0, 2]]:\nTrace(A) = 1 + 2 = 3\nDet(A) = (1)(2) - (0)(2) = 2',
      'Step 2: Write down the characteristic equation:\nλ² - 3λ + 2 = 0',
      'Step 3: Apply Cayley-Hamilton theorem:\nA² - 3A + 2I = 0  ⟹  A² = 3A - 2I',
      'Step 4: Multiply by A to get A³:\nA³ = 3A² - 2A',
      'Step 5: Substitute A² = 3A - 2I:\nA³ = 3(3A - 2I) - 2A = 9A - 6I - 2A = 7A - 6I',
      'Step 6: Comparing A³ = 7A - 6I with αA + βI yields α = 7 and β = -6.',
      'Hence Option A is correct.'
    ],
    commonPitfall: 'Attempting to calculate A³ by repeated manual matrix multiplication, which is prone to arithmetic slips and fails for larger powers like A¹⁰⁰.',
    relatedFormula: 'A^2 - \\text{Tr}(A)A + \\det(A)I = 0'
  },

  // ==========================================
  // SECTION 2: NETWORKS, SIGNALS AND SYSTEMS (subj-networks-signals)
  // ==========================================
  {
    id: 'q-net-2024-01',
    year: 2024,
    sourcePaper: 'GATE ECE 2024',
    subjectId: 'subj-networks-signals',
    subjectName: 'Networks, Signals and Systems',
    unitId: 'unit-net-1',
    topicId: 'top-net-101',
    topicTitle: 'KCL, KVL, Thevenin, Norton & Maximum Power',
    questionNumber: 18,
    type: 'NAT',
    marks: 1,
    difficulty: 'Medium',
    conceptTested: 'Network Theory → Maximum Power Transfer Theorem in AC Circuits',
    questionText: 'An AC voltage source with Thevenin equivalent voltage V_th = 20∠0° V (rms) and internal impedance Z_th = (4 + j3) Ω is connected to a variable complex load impedance Z_L = R_L + jX_L. What is the maximum active power (in Watts) that can be delivered to the load?',
    correctAnswer: '25',
    natRange: { min: 24.8, max: 25.2 },
    detailedExplanation: 'According to the Maximum Power Transfer Theorem for AC circuits, maximum power is delivered to the load when the load impedance is the complex conjugate of the Thevenin impedance: Z_L = Z_th* = (4 - j3) Ω.',
    steps: [
      'Step 1: State condition for Maximum Power Transfer:\nZ_L = Z_th* = (4 - j3) Ω  ⟹  R_L = 4 Ω and X_L = -3 Ω.',
      'Step 2: Total loop impedance under matched condition:\nZ_total = Z_th + Z_L = (4 + j3) + (4 - j3) = 8 + j0 = 8 Ω (purely resistive).',
      'Step 3: Calculate loop current I_rms:\nI_rms = |V_th| / |Z_total| = 20 V / 8 Ω = 2.5 A.',
      'Step 4: Compute active power dissipated in the load resistor R_L:\nP_max = I_rms² · R_L = (2.5)² · 4 = 6.25 · 4 = 25 Watts.',
      'Step 5: Alternatively, use the direct formula: P_max = |V_th|² / (4 R_th) = (20)² / (4 · 4) = 400 / 16 = 25 Watts.'
    ],
    commonPitfall: 'Using |Z_th| in the denominator instead of 4 R_th, or forgetting that reactive components cancel out at resonance (X_L = -X_th).',
    relatedFormula: 'P_{max} = \\frac{|V_{th}|^2}{4 R_{th}}'
  },
  {
    id: 'q-net-2023-01',
    year: 2023,
    sourcePaper: 'GATE ECE 2023',
    subjectId: 'subj-networks-signals',
    subjectName: 'Networks, Signals and Systems',
    unitId: 'unit-net-4',
    topicId: 'top-net-401',
    topicTitle: 'Fourier Transform & Sampling Theorem',
    questionNumber: 44,
    type: 'NAT',
    marks: 2,
    difficulty: 'Hard',
    conceptTested: 'Signals & Systems → Parseval\'s Energy Conservation in Sinc Pulses',
    questionText: 'A continuous-time signal is defined as x(t) = 4 sinc(4t) where sinc(u) = sin(πu)/(πu). The total energy E = ∫_{-∞}^{∞} |x(t)|² dt of this signal in Joules is equal to __________ (answer in integer).',
    correctAnswer: '4',
    natRange: { min: 4.0, max: 4.0 },
    detailedExplanation: 'Evaluating the time-domain integral ∫ |sinc(4t)|² dt directly is difficult. By applying Parseval’s theorem in cyclic frequency f, the total energy is E = ∫_{-∞}^{∞} |X(f)|² df, where X(f) is a rectangular spectrum.',
    steps: [
      'Step 1: Recall the standard Fourier transform pair:\nrect(t/T)  <--->  T · sinc(f · T).\nBy Duality: B · sinc(B · t)  <--->  rect(f / B).',
      'Step 2: Here, x(t) = 4 sinc(4t), so B = 4.\nTherefore, X(f) = rect(f / 4) = {\n  1, for |f| ≤ 4/2 = 2\n  0, otherwise\n}.',
      'Step 3: Apply Parseval\'s theorem in cyclic frequency f (Hz):\nE = ∫_{-∞}^{∞} |X(f)|² df',
      'Step 4: Evaluate the integral:\nE = ∫_{-2}^{2} |1|² df = 2 - (-2) = 4 Joules.',
      'Step 5: The total energy is exactly 4.'
    ],
    commonPitfall: 'Dividing by 2π unnecessarily. When integrating with cyclic frequency f (in Hz), the 1/(2π) factor does not appear!',
    relatedFormula: 'E = \\int_{-\\infty}^{\\infty} |x(t)|^2 dt = \\int_{-\\infty}^{\\infty} |X(f)|^2 df'
  },
  {
    id: 'q-net-2025-01',
    year: 2025,
    sourcePaper: 'GATE ECE 2025',
    subjectId: 'subj-networks-signals',
    subjectName: 'Networks, Signals and Systems',
    unitId: 'unit-net-2',
    topicId: 'top-net-201',
    topicTitle: 'Transient Analysis (RC, RL, RLC) & Two-Port Networks',
    questionNumber: 20,
    type: 'MCQ',
    marks: 2,
    difficulty: 'Medium',
    conceptTested: 'Network Theory → RC First-Order Step Response and Time Constant',
    questionText: 'In a series RC circuit connected to a 10 V DC supply at t = 0 through a switch, R = 2 kΩ and C = 5 µF. Assuming the capacitor is initially uncharged (v_C(0) = 0 V), the capacitor voltage v_C(t) reaches 6.32 V at time t equal to:',
    options: [
      { label: 'A', text: '5 ms' },
      { label: 'B', text: '10 ms' },
      { label: 'C', text: '15 ms' },
      { label: 'D', text: '20 ms' }
    ],
    correctAnswer: 'B',
    detailedExplanation: 'For a first-order RC charging circuit, v_C(t) = V_s (1 - e^{-t/τ}). When v_C reaches 63.2% of its final steady-state value (6.32 V of 10 V), the elapsed time equals exactly one time constant τ = RC.',
    steps: [
      'Step 1: Calculate the circuit time constant τ:\nτ = R · C = (2 × 10³ Ω) · (5 × 10⁻⁶ F) = 10 × 10⁻³ s = 10 ms.',
      'Step 2: Write down the step response equation:\nv_C(t) = V_s · (1 - e^{-t/τ}) = 10 · (1 - e^{-t / 10ms})',
      'Step 3: Set v_C(t) = 6.32 V:\n6.32 = 10 · (1 - e^{-t / τ})  ⟹  0.632 = 1 - e^{-t / τ}  ⟹  e^{-t / τ} = 0.368 = 1/e.',
      'Step 4: Solve for t:\n-t / τ = -1  ⟹  t = τ = 10 ms.',
      'Hence Option B is correct.'
    ],
    commonPitfall: 'Miscalculating the units: multiplying kΩ by µF yields milliseconds (10³ × 10⁻⁶ = 10⁻³ s = ms).',
    relatedFormula: 'v(t) = v(\\infty) + [v(0^+) - v(\\infty)]e^{-t/\\tau}'
  },

  // ==========================================
  // SECTION 3: ELECTRONIC DEVICES (subj-edc)
  // ==========================================
  {
    id: 'q-edc-2022-01',
    year: 2022,
    sourcePaper: 'GATE ECE 2022',
    subjectId: 'subj-edc',
    subjectName: 'Electronic Devices (EDC)',
    unitId: 'unit-edc-1',
    topicId: 'top-edc-101',
    topicTitle: 'Energy Bands & Carrier Concentration',
    questionNumber: 17,
    type: 'MCQ',
    marks: 1,
    difficulty: 'Medium',
    conceptTested: 'Semiconductor Physics → Electron Density and Fermi Level Separation',
    questionText: 'In a non-degenerate bulk semiconductor with electron density n1 = 10¹⁶ cm⁻³, the energy difference (E_C - E_Fn) is 200 meV, where E_C is the conduction band edge and E_Fn is the electron quasi-Fermi level. Assume thermal voltage V_t = kT/q = 26 meV. If the electron density reduces to n2 = 0.5 × 10¹⁶ cm⁻³, the new value of (E_C - E_Fn) is closest to:',
    options: [
      { label: 'A', text: '226 meV' },
      { label: 'B', text: '218 meV' },
      { label: 'C', text: '174 meV' },
      { label: 'D', text: '182 meV' }
    ],
    correctAnswer: 'B',
    detailedExplanation: 'In a non-degenerate semiconductor, the electron concentration is given by n = N_C · exp[-(E_C - E_Fn)/(kT)]. Taking the ratio for two concentrations gives: (E_C - E_Fn2) = (E_C - E_Fn1) + kT · ln(n1 / n2).',
    steps: [
      'Step 1: Write down the carrier concentration equation:\nn = N_C · e^{-(E_C - E_Fn)/kT}',
      'Step 2: Take the natural logarithm for both states:\n(E_C - E_Fn1) = kT · ln(N_C / n1)\n(E_C - E_Fn2) = kT · ln(N_C / n2)',
      'Step 3: Subtract state 1 from state 2:\n(E_C - E_Fn2) - (E_C - E_Fn1) = kT · ln(n1 / n2)',
      'Step 4: Substitute the numerical values:\n(E_C - E_Fn2) = 200 meV + 26 meV · ln(10¹⁶ / (0.5 × 10¹⁶))\n              = 200 meV + 26 meV · ln(2)',
      'Step 5: Compute using ln(2) ≈ 0.69315:\n26 · 0.69315 = 18.02 meV.\nNew (E_C - E_Fn2) = 200 + 18.02 = 218.02 meV ≈ 218 meV.',
      'Hence Option B is correct.'
    ],
    commonPitfall: 'Subtracting 18 meV instead of adding. As electron density n decreases, the Fermi level moves further away from the conduction band into the bandgap, so (E_C - E_Fn) must INCREASE.',
    relatedFormula: 'n = N_c e^{-(E_C - E_F)/kT} \\implies \\Delta(E_C - E_F) = kT \\ln(n_1 / n_2)'
  },
  {
    id: 'q-edc-2024-01',
    year: 2024,
    sourcePaper: 'GATE ECE 2024',
    subjectId: 'subj-edc',
    subjectName: 'Electronic Devices (EDC)',
    unitId: 'unit-edc-3',
    topicId: 'top-edc-301',
    topicTitle: 'P-N Junction, Zener, BJT & MOSFET Operation',
    questionNumber: 31,
    type: 'NAT',
    marks: 2,
    difficulty: 'Medium',
    conceptTested: 'P-N Junction → Built-in Contact Potential Calculation',
    questionText: 'A silicon abrupt p-n step junction at T = 300 K has acceptor doping N_A = 10¹⁷ cm⁻³ and donor doping N_D = 10¹⁶ cm⁻³. The intrinsic carrier concentration is n_i = 1.0 × 10¹⁰ cm⁻³ and thermal voltage V_t = 26 mV. What is the built-in contact potential V_bi of the junction in Volts (rounded off to two decimal places)?',
    correctAnswer: '0.78',
    natRange: { min: 0.77, max: 0.79 },
    detailedExplanation: 'The built-in potential barrier across an abrupt p-n junction under zero external bias is given by V_bi = V_t · ln[(N_A · N_D) / n_i²].',
    steps: [
      'Step 1: State the formula for built-in potential:\nV_bi = V_t · ln[(N_A · N_D) / n_i²]',
      'Step 2: Calculate the product (N_A · N_D):\nN_A · N_D = 10¹⁷ · 10¹⁶ = 10³³ cm⁻⁶.',
      'Step 3: Calculate n_i²:\nn_i² = (1.0 × 10¹⁰)² = 10²⁰ cm⁻⁶.',
      'Step 4: Compute the ratio:\n(N_A · N_D) / n_i² = 10³³ / 10²⁰ = 10¹³.',
      'Step 5: Calculate V_bi:\nV_bi = 0.026 V · ln(10¹³) = 0.026 · 13 · ln(10) = 0.026 · 13 · 2.3026\n     = 0.026 · 29.9336 = 0.7783 V ≈ 0.78 V.',
      'The built-in potential is 0.78 V.'
    ],
    commonPitfall: 'Using log base 10 instead of natural log (ln) without multiplying by 2.3026.',
    relatedFormula: 'V_{bi} = V_t \\ln\\left(\\frac{N_A N_D}{n_i^2}\\right)'
  },

  // ==========================================
  // SECTION 4: ANALOG CIRCUITS (subj-analog)
  // ==========================================
  {
    id: 'q-ana-2024-01',
    year: 2024,
    sourcePaper: 'GATE ECE 2024',
    subjectId: 'subj-analog',
    subjectName: 'Analog Circuits',
    unitId: 'unit-analog-3',
    topicId: 'top-ana-301',
    topicTitle: 'Op-Amps, Active Filters, Oscillators & Feedback',
    questionNumber: 25,
    type: 'NAT',
    marks: 2,
    difficulty: 'Medium',
    conceptTested: 'Analog Circuits → Operational Amplifier Summing and Scaling Network',
    questionText: 'An ideal Op-Amp is configured with an inverting terminal connected to two input voltages: V1 = 2 V through a 10 kΩ resistor, and V2 = -1 V through a 20 kΩ resistor. The non-inverting terminal is grounded. A feedback resistor R_f = 40 kΩ connects output V_out to the inverting input. What is the output voltage V_out in Volts?',
    correctAnswer: '-6',
    natRange: { min: -6.0, max: -6.0 },
    detailedExplanation: 'Since the Op-Amp is ideal with negative feedback, the virtual ground principle applies: V_- = V_+ = 0 V. By applying Kirchhoff’s Current Law (KCL) at the inverting node: (V1 - 0)/R1 + (V2 - 0)/R2 + (V_out - 0)/R_f = 0.',
    steps: [
      'Step 1: Identify virtual ground condition: V_+ = 0 V  ⟹  V_- = 0 V.',
      'Step 2: Apply KCL at inverting node:\n(V1 / R1) + (V2 / R2) + (V_out / R_f) = 0',
      'Step 3: Substitute the circuit parameters:\n- V1 = 2 V, R1 = 10 kΩ\n- V2 = -1 V, R2 = 20 kΩ\n- R_f = 40 kΩ\n(2 / 10k) + (-1 / 20k) + (V_out / 40k) = 0',
      'Step 4: Multiply the entire equation by 40 kΩ:\n4 · (2) + 2 · (-1) + V_out = 0\n8 - 2 + V_out = 0\n6 + V_out = 0  ⟹  V_out = -6 V.',
      'Hence the output voltage is -6 V.'
    ],
    commonPitfall: 'Forgetting the negative sign introduced by the inverting configuration feedback.',
    relatedFormula: 'V_o = -R_f \\sum \\frac{V_i}{R_i}'
  },
  {
    id: 'q-ana-2025-01',
    year: 2025,
    sourcePaper: 'GATE ECE 2025',
    subjectId: 'subj-analog',
    subjectName: 'Analog Circuits',
    unitId: 'unit-analog-2',
    topicId: 'top-ana-201',
    topicTitle: 'BJT & MOSFET Amplifiers, Small-Signal Model & Biasing',
    questionNumber: 33,
    type: 'MCQ',
    marks: 2,
    difficulty: 'Medium',
    conceptTested: 'Analog Circuits → BJT Common-Emitter Small-Signal Voltage Gain',
    questionText: 'A BJT common-emitter amplifier without emitter degeneration is biased at DC collector current I_C = 1.3 mA. The thermal voltage is V_t = 26 mV, collector load resistance R_C = 3 kΩ, and Early voltage V_A is very large (r_o -> ∞). What is the small-signal voltage gain A_v = v_o / v_in of the amplifier?',
    options: [
      { label: 'A', text: '+150' },
      { label: 'B', text: '-150' },
      { label: 'C', text: '-75' },
      { label: 'D', text: '+75' }
    ],
    correctAnswer: 'B',
    detailedExplanation: 'The small-signal transconductance of a BJT is g_m = I_C / V_t. For a basic common-emitter amplifier with no emitter degeneration, the midband voltage gain is A_v = -g_m · R_C.',
    steps: [
      'Step 1: Compute transconductance g_m:\ng_m = I_C / V_t = 1.3 mA / 26 mV = 1.3 / 26 = 0.05 S = 50 mA/V.',
      'Step 2: Write down the voltage gain expression:\nA_v = -g_m · R_C',
      'Step 3: Substitute the numerical values:\nA_v = -(50 × 10⁻³ A/V) · (3000 Ω) = -150.',
      'Step 4: The 180° phase inversion between base and collector creates the negative sign.',
      'Hence Option B is correct.'
    ],
    commonPitfall: 'Choosing +150 (Option A) and forgetting the essential 180° phase inversion inherent to common-emitter / common-source amplifiers.',
    relatedFormula: 'g_m = \\frac{I_C}{V_t}, \\quad A_v = -g_m R_C'
  },

  // ==========================================
  // SECTION 5: DIGITAL CIRCUITS (subj-digital)
  // ==========================================
  {
    id: 'q-dig-2025-01',
    year: 2025,
    sourcePaper: 'GATE ECE 2025',
    subjectId: 'subj-digital',
    subjectName: 'Digital Circuits',
    unitId: 'unit-dig-2',
    topicId: 'top-dig-201',
    topicTitle: 'Latches, Flip-Flops, Counters & Timing Analysis',
    questionNumber: 15,
    type: 'MCQ',
    marks: 1,
    difficulty: 'Medium',
    conceptTested: 'Digital Logic → JK Flip-Flop Inversion & State Transitions',
    questionText: 'A sequential circuit uses an edge-triggered JK flip-flop where J = Q\' and K = 1, where Q is the output. Starting with an initial state of Q = 0, what is the output state sequence Q after the first 3 consecutive clock pulses?',
    options: [
      { label: 'A', text: '0, 1, 0' },
      { label: 'B', text: '1, 0, 1' },
      { label: 'C', text: '1, 0, 0' },
      { label: 'D', text: '1, 1, 0' }
    ],
    correctAnswer: 'B',
    detailedExplanation: 'We evaluate state transitions clock-by-clock using the characteristic equation Q(t+1) = J · Q\'(t) + K\' · Q(t). Since K = 1, K\' = 0, so Q(t+1) = (Q\') · Q\' = Q\'. Thus whenever Q = 0, J = 1, K = 1 (toggle mode); whenever Q = 1, J = 0, K = 1 (reset mode).',
    steps: [
      'Step 1: Write characteristic equation: Q(t+1) = J·Q\'(t) + K\'·Q(t).',
      'Step 2: With J = Q\'(t) and K = 1 (so K\' = 0):\nQ(t+1) = Q\'(t) · Q\'(t) + 0 · Q(t) = Q\'(t).',
      'Step 3: Trace state sequence starting from initial Q_0 = 0:\n- After Clock 1: Q_1 = Q_0\' = 0\' = 1.\n- After Clock 2: Q_2 = Q_1\' = 1\' = 0.\n- After Clock 3: Q_3 = Q_2\' = 0\' = 1.',
      'Step 4: Resulting sequence after 3 clock pulses is 1, 0, 1.',
      'Hence Option B is correct.'
    ],
    commonPitfall: 'Assuming constant reset mode because K=1. At Q=0, J=1 and K=1, which is the toggle mode producing Q=1.',
    relatedFormula: 'Q(t+1) = J Q\'(t) + K\' Q(t)'
  },
  {
    id: 'q-dig-2025-02',
    year: 2025,
    sourcePaper: 'GATE ECE 2025',
    subjectId: 'subj-digital',
    subjectName: 'Digital Circuits',
    unitId: 'unit-dig-2',
    topicId: 'top-dig-201',
    topicTitle: 'Latches, Flip-Flops, Counters & Timing Analysis',
    questionNumber: 38,
    type: 'NAT',
    marks: 2,
    difficulty: 'Hard',
    conceptTested: 'Sequential Timing → Maximum Clock Frequency Calculation with Skew',
    questionText: 'Two edge-triggered D flip-flops FF1 and FF2 are connected in a synchronous pipeline with combinational logic between them. Specifications: Clock-to-Q delay t_cq = 2.5 ns, Setup time t_su = 1.5 ns, and maximum combinational delay t_comb = 6.0 ns. If a positive clock skew of t_skew = 0.5 ns exists (clock arrives at FF2 later than FF1), what is the maximum clock frequency (in MHz, rounded to one decimal place)?',
    correctAnswer: '105.3',
    natRange: { min: 104.0, max: 106.0 },
    detailedExplanation: 'When clock skew is positive (t_skew > 0), the receiving register gets the clock edge later, effectively extending available time: T_clk + t_skew ≥ t_cq + t_comb + t_su.',
    steps: [
      'Step 1: Setup timing constraint with skew:\nT_clk(min) + t_skew ≥ t_cq + t_comb(max) + t_su',
      'Step 2: Solve for T_clk(min):\nT_clk(min) = t_cq + t_comb(max) + t_su - t_skew',
      'Step 3: Substitute parameters:\nT_clk(min) = 2.5 + 6.0 + 1.5 - 0.5 = 9.5 ns = 9.5 × 10⁻⁹ s.',
      'Step 4: Compute maximum operating frequency:\nf_max = 1 / T_clk(min) = 1 / (9.5 × 10⁻⁹ s) = 105.263 MHz.',
      'Step 5: Rounding to one decimal place gives 105.3 MHz.'
    ],
    commonPitfall: 'Adding positive skew instead of subtracting it from the minimum cycle time requirement.',
    relatedFormula: 'T_{clk} \\ge t_{cq} + t_{comb} + t_{su} - t_{skew}'
  },
  {
    id: 'q-dig-2024-01',
    year: 2024,
    sourcePaper: 'GATE ECE 2024',
    subjectId: 'subj-digital',
    subjectName: 'Digital Circuits',
    unitId: 'unit-dig-1',
    topicId: 'top-dig-101',
    topicTitle: 'Boolean Algebra, K-Maps & Combinational Logic',
    questionNumber: 22,
    type: 'MCQ',
    marks: 2,
    difficulty: 'Medium',
    conceptTested: 'Combinational Logic → Boolean Function Realization using 4:1 Multiplexer',
    questionText: 'A 4:1 multiplexer with select lines S1 (MSB) and S0 (LSB) and data inputs I0, I1, I2, I3 is used to realize the Boolean function F(A, B, C) = ∑m(1, 2, 4, 7). If select lines are connected as S1 = A and S0 = B, what must be the inputs (I0, I1, I2, I3) respectively?',
    options: [
      { label: 'A', text: '(C, C\', C\', C)' },
      { label: 'B', text: '(C\', C, C, C\')' },
      { label: 'C', text: '(C, C, C\', C\')' },
      { label: 'D', text: '(C\', C\', C, C)' }
    ],
    correctAnswer: 'A',
    detailedExplanation: 'A 4:1 MUX outputs F = S1\'S0\'·I0 + S1\'S0·I1 + S1S0\'·I2 + S1S0·I3. Grouping the minterms of F(A,B,C) by combinations of AB determines each input in terms of literal C.',
    steps: [
      'Step 1: Write minterms: m1(001)=1, m2(010)=1, m4(100)=1, m7(111)=1.',
      'Step 2: Map each select code (AB):\n- AB = 00: m0(C=0)->0, m1(C=1)->1 ⟹ I0 = C\n- AB = 01: m2(C=0)->1, m3(C=1)->0 ⟹ I1 = C\'\n- AB = 10: m4(C=0)->1, m5(C=1)->0 ⟹ I2 = C\'\n- AB = 11: m6(C=0)->0, m7(C=1)->1 ⟹ I3 = C',
      'Step 3: Resulting input vector: (I0, I1, I2, I3) = (C, C\', C\', C).',
      'Hence Option A is correct.'
    ],
    commonPitfall: 'Swapping S1 and S0 or misidentifying minterm values of C.',
    relatedFormula: 'F = \\sum m_k(S) \\cdot I_k'
  },

  // ==========================================
  // SECTION 6: CONTROL SYSTEMS (subj-control)
  // ==========================================
  {
    id: 'q-ctrl-2024-01',
    year: 2024,
    sourcePaper: 'GATE ECE 2024',
    subjectId: 'subj-control',
    subjectName: 'Control Systems',
    unitId: 'unit-ctrl-2',
    topicId: 'top-ctrl-201',
    topicTitle: 'Stability, Routh-Hurwitz, Nyquist, Bode & Root Locus',
    questionNumber: 42,
    type: 'NAT',
    marks: 2,
    difficulty: 'Medium',
    conceptTested: 'Control Systems → Second-Order Underdamped Transient Parameters',
    questionText: 'A unity feedback control system has open-loop transfer function G(s) = 25 / [s(s + 6)]. What is the percentage peak overshoot %M_p of the closed-loop unit step response (rounded to one decimal place)?',
    correctAnswer: '9.5',
    natRange: { min: 9.0, max: 10.0 },
    detailedExplanation: 'The closed-loop transfer function is T(s) = 25 / (s² + 6s + 25). Comparing with standard form s² + 2ζω_n s + ω_n² gives ω_n = 5 rad/s and damping ratio ζ = 0.6. Peak overshoot is %M_p = exp[-πζ / √(1 - ζ²)] × 100%.',
    steps: [
      'Step 1: Find closed-loop transfer function:\nT(s) = G(s) / [1 + G(s)] = 25 / (s² + 6s + 25)',
      'Step 2: Compare with standard 2nd-order denominator: s² + 2ζω_n s + ω_n²\n- ω_n² = 25  ⟹  ω_n = 5 rad/s\n- 2ζω_n = 6  ⟹  2 · ζ · 5 = 6  ⟹  ζ = 0.6',
      'Step 3: Calculate √(1 - ζ²):\n√(1 - 0.6²) = √(1 - 0.36) = √0.64 = 0.8',
      'Step 4: Compute exponent: -π · ζ / √(1 - ζ²):\n-π · (0.6 / 0.8) = -0.75 · π ≈ -0.75 · 3.14159 = -2.35619',
      'Step 5: Calculate overshoot:\n%M_p = e^{-2.35619} × 100% = 0.09478 × 100% ≈ 9.48% ≈ 9.5%.'
    ],
    commonPitfall: 'Using natural log backwards or forgetting to convert the decimal fraction to percentage.',
    relatedFormula: '\\%M_p = e^{-\\frac{\\pi\\zeta}{\\sqrt{1-\\zeta^2}}} \\times 100\\%'
  },
  {
    id: 'q-ctrl-2022-01',
    year: 2022,
    sourcePaper: 'GATE ECE 2022',
    subjectId: 'subj-control',
    subjectName: 'Control Systems',
    unitId: 'unit-ctrl-2',
    topicId: 'top-ctrl-201',
    topicTitle: 'Stability, Routh-Hurwitz, Nyquist, Bode & Root Locus',
    questionNumber: 21,
    type: 'MCQ',
    marks: 1,
    difficulty: 'Medium',
    conceptTested: 'Control Systems → Nyquist Encirclement Criterion & Closed-Loop Stability',
    questionText: 'A unity negative feedback closed loop system has open-loop transfer function G(s) with no open-loop poles in the right-half s-plane (P = 0). The complete Nyquist plot of G(s) encircles the critical point (-1, j0) exactly 2 times in the clockwise direction (N = -2 counter-clockwise). The number of closed-loop poles in the right-half s-plane is:',
    options: [
      { label: 'A', text: '0 (Stable)' },
      { label: 'B', text: '1' },
      { label: 'C', text: '2 (Unstable)' },
      { label: 'D', text: '4' }
    ],
    correctAnswer: 'C',
    detailedExplanation: 'According to the Nyquist Stability Criterion: N = P - Z, where N is the number of counter-clockwise encirclements of (-1 + j0), P is the number of open-loop RHP poles, and Z is the number of closed-loop RHP poles.',
    steps: [
      'Step 1: State Nyquist stability formula: N = P - Z  ⟹  Z = P - N',
      'Step 2: Identify given parameters:\n- Open-loop RHP poles: P = 0 (given G(s) has no RHP poles)\n- Encirclements: 2 clockwise encirclements  ⟹  N = -2 (counter-clockwise convention)',
      'Step 3: Solve for Z:\nZ = 0 - (-2) = +2.',
      'Step 4: Z = 2 indicates exactly 2 closed-loop poles lie in the right-half plane, making the system unstable.',
      'Hence Option C is correct.'
    ],
    commonPitfall: 'Assigning a positive sign to clockwise encirclements. Standard Nyquist defines N as counter-clockwise; clockwise is negative (N = -2).',
    relatedFormula: 'N = P - Z \\implies Z = P - N'
  },

  // ==========================================
  // SECTION 7: COMMUNICATIONS (subj-comm)
  // ==========================================
  {
    id: 'q-comm-2024-01',
    year: 2024,
    sourcePaper: 'GATE ECE 2024',
    subjectId: 'subj-comm',
    subjectName: 'Communications',
    unitId: 'unit-comm-2',
    topicId: 'top-comm-201',
    topicTitle: 'AM, FM Modulation & Receivers',
    questionNumber: 29,
    type: 'MCQ',
    marks: 1,
    difficulty: 'Easy',
    conceptTested: 'Analog Communications → AM Modulation Index and Power Efficiency',
    questionText: 'An amplitude modulated (AM) signal is broadcast with 100% modulation index (µ = 1.0) using single-tone sinusoidal modulation. What percentage of the total transmitted RF power is contained in the information-bearing sidebands?',
    options: [
      { label: 'A', text: '50.0%' },
      { label: 'B', text: '33.3%' },
      { label: 'C', text: '66.7%' },
      { label: 'D', text: '25.0%' }
    ],
    correctAnswer: 'B',
    detailedExplanation: 'Total transmitted power in standard AM is P_t = P_c (1 + µ²/2) = P_c + P_SB, where sideband power is P_SB = P_c · (µ² / 2). Power efficiency η is the ratio of sideband power to total power.',
    steps: [
      'Step 1: Write expressions for carrier and sideband power:\nP_carrier = P_c\nP_sidebands = P_c · (µ² / 2)',
      'Step 2: Total power: P_t = P_c · (1 + µ² / 2).',
      'Step 3: Set µ = 1.0:\nP_t = P_c · (1 + 1/2) = 1.5 P_c.\nP_sidebands = 0.5 P_c.',
      'Step 4: Compute modulation efficiency η:\nη = P_sidebands / P_t = (0.5 P_c) / (1.5 P_c) = 1 / 3 ≈ 33.33%.',
      'Step 5: Two-thirds (66.7%) of power is wasted in the unmodulated carrier.',
      'Hence Option B is correct.'
    ],
    commonPitfall: 'Confusing sideband power percentage with carrier power percentage (carrier contains 66.7%, sidebands contain 33.3%).',
    relatedFormula: '\\eta = \\frac{\\mu^2}{2 + \\mu^2} \\times 100\\%'
  },
  {
    id: 'q-comm-2025-01',
    year: 2025,
    sourcePaper: 'GATE ECE 2025',
    subjectId: 'subj-comm',
    subjectName: 'Communications',
    unitId: 'unit-comm-3',
    topicId: 'top-comm-301',
    topicTitle: 'Digital Modulation (PCM, PSK, QAM), BER & Info Theory',
    questionNumber: 47,
    type: 'NAT',
    marks: 2,
    difficulty: 'Medium',
    conceptTested: 'Information Theory → Shannon-Hartley Channel Capacity Theorem',
    questionText: 'An AWGN communication channel has a bandwidth B = 4 kHz and a signal-to-noise ratio SNR = 31 (linear scale). What is the maximum theoretical channel capacity C in kbps (kilobits per second)?',
    correctAnswer: '20',
    natRange: { min: 20.0, max: 20.0 },
    detailedExplanation: 'By the Shannon-Hartley theorem, channel capacity is C = B · log2(1 + S/N). With S/N = 31, (1 + S/N) = 32 = 2⁵.',
    steps: [
      'Step 1: State Shannon-Hartley theorem:\nC = B · log2(1 + SNR)',
      'Step 2: Substitute SNR = 31:\n1 + SNR = 1 + 31 = 32',
      'Step 3: Compute log base 2 of 32:\nlog2(32) = log2(2⁵) = 5',
      'Step 4: Multiply by bandwidth B = 4 kHz:\nC = 4000 Hz · 5 = 20,000 bits/sec = 20 kbps.',
      'The capacity is exactly 20 kbps.'
    ],
    commonPitfall: 'Treating SNR=31 as decibels (dB) instead of a linear power ratio.',
    relatedFormula: 'C = B \\log_2\\left(1 + \\frac{S}{N}\\right)'
  },

  // ==========================================
  // SECTION 8: ELECTROMAGNETICS (subj-emft)
  // ==========================================
  {
    id: 'q-emft-2025-01',
    year: 2025,
    sourcePaper: 'GATE ECE 2025',
    subjectId: 'subj-emft',
    subjectName: 'Electromagnetics',
    unitId: 'unit-emft-2',
    topicId: 'top-emft-201',
    topicTitle: 'Transmission Lines, Waveguides & Antennas',
    questionNumber: 36,
    type: 'NAT',
    marks: 2,
    difficulty: 'Medium',
    conceptTested: 'Electromagnetics → Transmission Line Reflection Coefficient and VSWR',
    questionText: 'A lossless transmission line with characteristic impedance Z_0 = 50 Ω is terminated in a purely resistive load of R_L = 150 Ω. What is the Voltage Standing Wave Ratio (VSWR) on the transmission line?',
    correctAnswer: '3',
    natRange: { min: 2.95, max: 3.05 },
    detailedExplanation: 'The voltage reflection coefficient at the load is Γ_L = (Z_L - Z_0) / (Z_L + Z_0). The Voltage Standing Wave Ratio is S = (1 + |Γ_L|) / (1 - |Γ_L|).',
    steps: [
      'Step 1: Calculate reflection coefficient Γ_L:\nΓ_L = (Z_L - Z_0) / (Z_L + Z_0) = (150 - 50) / (150 + 50) = 100 / 200 = 0.5',
      'Step 2: Compute magnitude: |Γ_L| = 0.5.',
      'Step 3: Substitute into VSWR formula:\nVSWR = (1 + |Γ_L|) / (1 - |Γ_L|) = (1 + 0.5) / (1 - 0.5) = 1.5 / 0.5 = 3.',
      'Step 4: Shortcut rule: For purely resistive load, VSWR = max(R_L / Z_0, Z_0 / R_L) = 150 / 50 = 3.',
      'The VSWR is 3.'
    ],
    commonPitfall: 'Obtaining a negative VSWR. VSWR is strictly a positive magnitude bounded between 1 and ∞.',
    relatedFormula: 'S = \\frac{1 + |\\Gamma|}{1 - |\\Gamma|} = \\frac{R_L}{Z_0}'
  },
  {
    id: 'q-emft-2022-01',
    year: 2022,
    sourcePaper: 'GATE ECE 2022',
    subjectId: 'subj-emft',
    subjectName: 'Electromagnetics',
    unitId: 'unit-emft-2',
    topicId: 'top-emft-201',
    topicTitle: 'Transmission Lines, Waveguides & Antennas',
    questionNumber: 24,
    type: 'MCQ',
    marks: 2,
    difficulty: 'Easy',
    conceptTested: 'Waveguides → Dominant TE10 Cutoff Frequency in Rectangular Waveguide',
    questionText: 'An air-filled rectangular metallic waveguide has broad dimension a = 3 cm and narrow dimension b = 1.5 cm. Speed of light in vacuum is c = 3 × 10⁸ m/s. What is the cutoff frequency f_c of the dominant TE10 propagating mode?',
    options: [
      { label: 'A', text: '2.5 GHz' },
      { label: 'B', text: '5.0 GHz' },
      { label: 'C', text: '10.0 GHz' },
      { label: 'D', text: '15.0 GHz' }
    ],
    correctAnswer: 'B',
    detailedExplanation: 'The cutoff frequency for TE_mn mode in an air-filled rectangular waveguide is f_c = (c/2) · √[(m/a)² + (n/b)²]. For dominant mode TE10 (m=1, n=0), f_c = c / (2a).',
    steps: [
      'Step 1: State dominant mode cutoff formula:\nf_c(TE10) = c / (2a)',
      'Step 2: Convert dimensions to meters:\na = 3 cm = 0.03 m',
      'Step 3: Calculate:\nf_c = (3 × 10⁸ m/s) / (2 × 0.03 m) = (3 × 10⁸) / 0.06 = 5 × 10⁹ Hz = 5.0 GHz.',
      'Hence Option B is correct.'
    ],
    commonPitfall: 'Using dimension b instead of a. Broad wall a determines TE10 cutoff frequency.',
    relatedFormula: 'f_{c,10} = \\frac{c}{2a}'
  },

  // ==========================================
  // SECTION 0: GENERAL APTITUDE (subj-aptitude)
  // ==========================================
  {
    id: 'q-apt-2022-01',
    year: 2022,
    sourcePaper: 'GATE ECE 2022',
    subjectId: 'subj-aptitude',
    subjectName: 'General Aptitude',
    unitId: 'unit-apt-1',
    topicId: 'top-apt-101',
    topicTitle: 'Quantitative Aptitude & Numerical Reasoning',
    questionNumber: 2,
    type: 'MCQ',
    marks: 1,
    difficulty: 'Easy',
    conceptTested: 'General Aptitude → Ratios, Proportions and Shares',
    questionText: 'A sum of money is to be distributed among P, Q, R, and S in the proportion 5 : 2 : 4 : 3, respectively. If R gets ₹ 1000 more than S, what is Q\'s share (in ₹)?',
    options: [
      { label: 'A', text: '₹ 500' },
      { label: 'B', text: '₹ 1000' },
      { label: 'C', text: '₹ 2000' },
      { label: 'D', text: '₹ 3000' }
    ],
    correctAnswer: 'C',
    detailedExplanation: 'Let common multiplier be x. Shares are P = 5x, Q = 2x, R = 4x, S = 3x. Given R - S = 1000.',
    steps: [
      'Step 1: Represent shares in terms of variable x:\nP = 5x, Q = 2x, R = 4x, S = 3x.',
      'Step 2: Use given condition: R gets ₹ 1000 more than S:\nR - S = 4x - 3x = x = 1000.',
      'Step 3: Calculate Q\'s share:\nQ = 2x = 2 × 1000 = ₹ 2000.',
      'Hence Option C is correct.'
    ],
    commonPitfall: 'Calculating total sum instead of Q\'s specific share.',
    relatedFormula: '\\text{Share} = \\text{Ratio Unit} \\times x'
  }
];
