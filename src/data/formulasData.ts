import { Formula } from '../types';

export const INITIAL_FORMULAS: Formula[] = [
  // ==========================================
  // SECTION 1: ENGINEERING MATHEMATICS (subj-math)
  // ==========================================
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
      { symbol: 'a_{ii}', meaning: 'Principal diagonal entries of square matrix A' }
    ],
    whenToUse: 'Quickly calculating unknown eigenvalues, finding missing matrix parameters, or verifying invertibility without expanding the characteristic determinant.',
    conditions: 'Valid for every n × n square matrix over the complex field.',
    relatedConcept: 'Characteristic polynomial coefficients and spectral theorem',
    relatedPYQ: 'GATE ECE 2025 (1 Mark), GATE 2024 (2 Marks), GATE 2022 (1 Mark)',
    order: 1
  },
  {
    id: 'form-math-102',
    subjectId: 'subj-math',
    subjectName: 'Engineering Mathematics',
    unitId: 'unit-math-1',
    topicId: 'top-math-103',
    topicTitle: 'Eigenvalues, Eigenvectors & Cayley-Hamilton',
    chapterTitle: 'Unit 1: Linear Algebra',
    formulaName: 'Cayley-Hamilton Matrix Inverse & High Power Formula',
    latex: 'A^n + c_{n-1}A^{n-1} + \\dots + c_1 A + c_0 I = 0 \\implies A^{-1} = -\\frac{1}{c_0}\\left[A^{n-1} + c_{n-1}A^{n-2} + \\dots + c_1 I\\right]',
    variables: [
      { symbol: 'c_k', meaning: 'Coefficients of the characteristic polynomial P(\\lambda) = \\det(A - \\lambda I)' },
      { symbol: 'c_0', meaning: 'Constant term equal to (-1)^n \\det(A)' }
    ],
    whenToUse: 'Evaluating high matrix powers (e.g., A^{100}) or computing matrix inverse purely through linear combinations without computing cofactor matrices.',
    conditions: 'Matrix A must be non-singular (\\det(A) \\ne 0) for inverse calculation.',
    relatedConcept: 'Minimal polynomial, matrix functions, and diagonalizability',
    relatedPYQ: 'GATE ECE 2022 (2 Marks), GATE 2020 (2 Marks)',
    order: 2
  },
  {
    id: 'form-math-201',
    subjectId: 'subj-math',
    subjectName: 'Engineering Mathematics',
    unitId: 'unit-math-2',
    topicId: 'top-math-201',
    topicTitle: 'Calculus, Maxima & Minima & Integrals',
    chapterTitle: 'Unit 2: Calculus',
    formulaName: 'Leibnitz Rule for Differentiation Under Integral Sign',
    latex: '\\frac{d}{dx}\\left[\\int_{\\phi(x)}^{\\psi(x)} f(x,t)\\,dt\\right] = f(x,\\psi(x))\\cdot\\psi\'(x) - f(x,\\phi(x))\\cdot\\phi\'(x) + \\int_{\\phi(x)}^{\\psi(x)} \\frac{\\partial f}{\\partial x}(x,t)\\,dt',
    variables: [
      { symbol: '\\psi(x), \\phi(x)', meaning: 'Upper and lower variable limits of integration' },
      { symbol: 'f(x,t)', meaning: 'Integrand function dependent on parameter x and integration variable t' }
    ],
    whenToUse: 'Differentiating definite integrals with variable limits, evaluating limits using L\'Hôpital\'s rule when integrals appear in numerator or denominator.',
    conditions: 'f(x,t) and \\partial f/\\partial x must be continuous in both x and t over the domain.',
    relatedConcept: 'Fundamental Theorem of Calculus and multivariable calculus',
    relatedPYQ: 'GATE ECE 2023 (1 Mark), GATE 2019 (2 Marks)',
    order: 3
  },
  {
    id: 'form-math-301',
    subjectId: 'subj-math',
    subjectName: 'Engineering Mathematics',
    unitId: 'unit-math-3',
    topicId: 'top-math-301',
    topicTitle: 'Ordinary & Partial Differential Equations',
    chapterTitle: 'Unit 3: Differential Equations',
    formulaName: 'First-Order Linear ODE Integrating Factor & General Solution',
    latex: '\\frac{dy}{dx} + P(x)y = Q(x) \\implies I.F. = e^{\\int P(x)\\,dx}, \\quad y \\cdot (I.F.) = \\int Q(x)\\cdot(I.F.)\\,dx + C',
    variables: [
      { symbol: 'P(x), Q(x)', meaning: 'Continuous functions of independent variable x' },
      { symbol: 'I.F.', meaning: 'Integrating factor that turns LHS into an exact derivative' }
    ],
    whenToUse: 'Solving first-order non-homogeneous linear ordinary differential equations across circuit transient and network responses.',
    conditions: 'Standard form requires coefficient of dy/dx to be normalized to 1.',
    relatedConcept: 'Exact differential equations and RL/RC transient time response',
    relatedPYQ: 'GATE ECE 2024 (1 Mark), GATE 2021 (1 Mark)',
    order: 4
  },
  {
    id: 'form-math-401',
    subjectId: 'subj-math',
    subjectName: 'Engineering Mathematics',
    unitId: 'unit-math-4',
    topicId: 'top-math-401',
    topicTitle: 'Vector Calculus & Integral Theorems',
    chapterTitle: 'Unit 4: Vector Analysis',
    formulaName: 'Gauss’s Divergence & Stokes’ Curl Theorems',
    latex: '\\iint_S \\vec{F} \\cdot d\\vec{S} = \\iiint_V (\\nabla \\cdot \\vec{F})\\, dV; \\quad \\oint_C \\vec{F} \\cdot d\\vec{r} = \\iint_S (\\nabla \\times \\vec{F}) \\cdot d\\vec{S}',
    variables: [
      { symbol: '\\vec{F}', meaning: 'Continuously differentiable vector field' },
      { symbol: 'S', meaning: 'Closed boundary surface enclosing volume V (Gauss), or open surface bounded by curve C (Stokes)' }
    ],
    whenToUse: 'Converting complex line and surface flux integrals into straightforward volume or surface integrals over standard geometric solids.',
    conditions: 'Vector field components and their partial derivatives must be continuous over the enclosing domain.',
    relatedConcept: 'Maxwell’s field equations and electrostatic flux conservation',
    relatedPYQ: 'GATE ECE 2022 (1 Mark), GATE 2020 (2 Marks)',
    order: 5
  },
  {
    id: 'form-math-501',
    subjectId: 'subj-math',
    subjectName: 'Engineering Mathematics',
    unitId: 'unit-math-5',
    topicId: 'top-math-501',
    topicTitle: 'Complex Analysis & Residue Theorem',
    chapterTitle: 'Unit 5: Complex Analysis',
    formulaName: 'Cauchy’s Residue Theorem',
    latex: '\\oint_C f(z)\\,dz = 2\\pi j \\sum_{k=1}^m \\text{Res}\\left(f(z), z_k\\right); \\quad \\text{Res}(f, z_0) = \\lim_{z\\to z_0} (z - z_0)f(z)',
    variables: [
      { symbol: 'C', meaning: 'Simple closed contour traversed in the positive counter-clockwise sense' },
      { symbol: 'z_k', meaning: 'Isolated singular points (poles) lying strictly inside contour C' }
    ],
    whenToUse: 'Evaluating contour integrals in the complex plane, inverse Laplace transforms, and real improper integrals from -∞ to +∞.',
    conditions: 'f(z) must be analytic everywhere on and inside C except at isolated singularities z_k.',
    relatedConcept: 'Cauchy-Riemann equations, pole-zero stability, and Nyquist encirclement',
    relatedPYQ: 'GATE ECE 2024 (2 Marks), GATE 2022 (1 Mark)',
    order: 6
  },
  {
    id: 'form-math-601',
    subjectId: 'subj-math',
    subjectName: 'Engineering Mathematics',
    unitId: 'unit-math-6',
    topicId: 'top-math-601',
    topicTitle: 'Probability Distributions & Statistics',
    chapterTitle: 'Unit 6: Probability and Statistics',
    formulaName: 'Poisson & Exponential Distribution Laws',
    latex: 'P(X = k) = \\frac{e^{-\\lambda} \\lambda^k}{k!}; \\quad f(x) = \\lambda e^{-\\lambda x}\\, (x \\ge 0) \\implies E[X] = \\frac{1}{\\lambda}, \\, \\text{Var}(X) = \\frac{1}{\\lambda^2}',
    variables: [
      { symbol: '\\lambda', meaning: 'Average arrival rate per unit time interval' },
      { symbol: 'k', meaning: 'Number of observed discrete events (k = 0, 1, 2, ...)' }
    ],
    whenToUse: 'Modeling rare discrete packet arrivals, queueing theory, photon arrivals in photodiodes, and memoryless continuous lifetimes.',
    conditions: 'Events must occur independently at a constant average rate; memoryless property holds for exponential: P(X > s + t | X > s) = P(X > t).',
    relatedConcept: 'Shot noise in semiconductor junctions and communication traffic modeling',
    relatedPYQ: 'GATE ECE 2025 (1 Mark), GATE 2023 (1 Mark)',
    order: 7
  },

  // ==========================================
  // SECTION 2: NETWORKS, SIGNALS AND SYSTEMS (subj-networks-signals)
  // ==========================================
  {
    id: 'form-net-101',
    subjectId: 'subj-networks-signals',
    subjectName: 'Networks, Signals and Systems',
    unitId: 'unit-net-1',
    topicId: 'top-net-101',
    topicTitle: 'KCL, KVL, Thevenin, Norton & Maximum Power',
    chapterTitle: 'Unit 1: Circuit Analysis & Theorems',
    formulaName: 'Maximum Power Transfer Theorem (AC & DC)',
    latex: 'Z_L = Z_{th}^* \\implies P_{max} = \\frac{|V_{th}|^2}{4 R_{th}}; \\quad (\\text{Purely resistive: } R_L = R_{th} \\implies \\eta = 50\\%)',
    variables: [
      { symbol: 'Z_L = R_L + jX_L', meaning: 'Complex load impedance' },
      { symbol: 'Z_{th} = R_{th} + jX_{th}', meaning: 'Thevenin equivalent source impedance' },
      { symbol: '\\eta', meaning: 'Transmission efficiency at maximum power point' }
    ],
    whenToUse: 'Determining optimal load for maximum active power delivery from a linear circuit to a receiving terminal.',
    conditions: 'If only |Z_L| is variable with fixed phase angle, set |Z_L| = |Z_{th}| = \\sqrt{R_{th}^2 + X_{th}^2}.',
    relatedConcept: 'Thevenin impedance matching and RF antenna load connection',
    relatedPYQ: 'GATE ECE 2024 (1 Mark), GATE 2021 (2 Marks)',
    order: 8
  },
  {
    id: 'form-net-102',
    subjectId: 'subj-networks-signals',
    subjectName: 'Networks, Signals and Systems',
    unitId: 'unit-net-2',
    topicId: 'top-net-201',
    topicTitle: 'Transient Analysis (RC, RL, RLC) & Two-Port Networks',
    chapterTitle: 'Unit 2: Time & Frequency Domain Circuit Analysis',
    formulaName: 'First-Order Transient Step Response & Two-Port Reciprocity Conditions',
    latex: 'x(t) = x(\\infty) + [x(0^+) - x(\\infty)]e^{-t/\\tau}; \\quad \\text{Reciprocity: } Z_{12}=Z_{21}, \\, Y_{12}=Y_{21}, \\, h_{12}=-h_{21}, \\, AD-BC=1',
    variables: [
      { symbol: 'x(t)', meaning: 'Capacitor voltage v_C(t) or inductor current i_L(t)' },
      { symbol: '\\tau', meaning: 'Time constant: \\tau = R_{eq}C for RC circuits, \\tau = L/R_{eq} for RL circuits' },
      { symbol: 'A, B, C, D', meaning: 'Transmission (ABCD) two-port parameters' }
    ],
    whenToUse: 'Calculating instantaneous voltage and current waveforms following switch operations, and testing passive network reciprocity.',
    conditions: 'Applicable to linear time-invariant first-order networks with constant DC excitations.',
    relatedConcept: 'Continuity of states: v_C(0^+) = v_C(0^-) and i_L(0^+) = i_L(0^-)',
    relatedPYQ: 'GATE ECE 2025 (2 Marks), GATE 2023 (1 Mark)',
    order: 9
  },
  {
    id: 'form-net-301',
    subjectId: 'subj-networks-signals',
    subjectName: 'Networks, Signals and Systems',
    unitId: 'unit-net-3',
    topicId: 'top-net-301',
    topicTitle: 'LTI Systems, Impulse Response & Convolution',
    chapterTitle: 'Unit 3: LTI Systems & Convolution',
    formulaName: 'Continuous & Discrete Convolution Integral & BIBO Stability Criterion',
    latex: 'y(t) = x(t) * h(t) = \\int_{-\\infty}^{\\infty} x(\\tau)h(t-\\tau)\\,d\\tau; \\quad \\text{BIBO Stable} \\iff \\int_{-\\infty}^{\\infty} |h(t)|\\,dt < \\infty',
    variables: [
      { symbol: 'h(t)', meaning: 'System impulse response' },
      { symbol: 'x(t)', meaning: 'System input excitation' },
      { symbol: 'y(t)', meaning: 'System zero-state forced output' }
    ],
    whenToUse: 'Computing the exact time-domain response of any LTI continuous or discrete system to arbitrary inputs and validating stability.',
    conditions: 'System must satisfy both linearity (superposition) and time-invariance properties.',
    relatedConcept: 'Eigenfunctions of LTI systems: input e^{st} yields output H(s)e^{st}',
    relatedPYQ: 'GATE ECE 2024 (2 Marks), GATE 2022 (2 Marks)',
    order: 10
  },
  {
    id: 'form-net-401',
    subjectId: 'subj-networks-signals',
    subjectName: 'Networks, Signals and Systems',
    unitId: 'unit-net-4',
    topicId: 'top-net-401',
    topicTitle: 'Fourier Transform & Sampling Theorem',
    chapterTitle: 'Unit 4: Continuous-Time Signals',
    formulaName: 'Nyquist Sampling Rate & Parseval’s Energy Theorem',
    latex: 'f_s \\ge 2 f_{max} \\implies T_s \\le \\frac{1}{2 f_{max}}; \\quad E = \\int_{-\\infty}^{\\infty} |x(t)|^2\\,dt = \\int_{-\\infty}^{\\infty} |X(f)|^2\\,df = \\frac{1}{2\\pi}\\int_{-\\infty}^{\\infty} |X(\\omega)|^2\\,d\\omega',
    variables: [
      { symbol: 'f_{max}', meaning: 'Highest frequency component present in the bandlimited message' },
      { symbol: 'f_s', meaning: 'Sampling frequency in samples per second (Hz)' },
      { symbol: 'E', meaning: 'Total energy content of signal x(t)' }
    ],
    whenToUse: 'Determining minimum sampling frequency to avoid spectral aliasing and calculating time-domain integral energy from frequency spectra.',
    conditions: 'Continuous message must be strictly bandlimited (X(f) = 0 for |f| > f_max). For bandpass signals: f_s = 2f_H / m.',
    relatedConcept: 'Ideal low-pass interpolation reconstruction filter and sinc function interpolation',
    relatedPYQ: 'GATE ECE 2025 (2 Marks), GATE 2023 (2 Marks)',
    order: 11
  },
  {
    id: 'form-net-501',
    subjectId: 'subj-networks-signals',
    subjectName: 'Networks, Signals and Systems',
    unitId: 'unit-net-5',
    topicId: 'top-net-501',
    topicTitle: 'Z-Transform, DTFT & Digital Filters',
    chapterTitle: 'Unit 5: Discrete-Time Signals & Filters',
    formulaName: 'Z-Transform Definition & ROC Stability Criterion',
    latex: 'X(z) = \\sum_{n=-\\infty}^{\\infty} x[n] z^{-n}; \\quad \\text{Stable} \\iff \\text{ROC contains unit circle } |z|=1; \\quad \\text{Causal} \\iff \\text{ROC exterior: } |z| > r_{max}',
    variables: [
      { symbol: 'z', meaning: 'Complex frequency variable z = r e^{j\\Omega}' },
      { symbol: 'r_{max}', meaning: 'Magnitude of the pole furthest from the origin in the z-plane' }
    ],
    whenToUse: 'Analyzing difference equations, evaluating digital transfer functions H(z), and assessing filter causality and stability.',
    conditions: 'An LTI digital system is both causal and stable if and only if ALL poles of H(z) lie strictly inside the unit circle (|p_i| < 1).',
    relatedConcept: 'Bilinear transformation and digital IIR/FIR filter implementation',
    relatedPYQ: 'GATE ECE 2024 (1 Mark), GATE 2021 (2 Marks)',
    order: 12
  },

  // ==========================================
  // SECTION 3: ELECTRONIC DEVICES (subj-edc)
  // ==========================================
  {
    id: 'form-edc-101',
    subjectId: 'subj-edc',
    subjectName: 'Electronic Devices (EDC)',
    unitId: 'unit-edc-1',
    topicId: 'top-edc-101',
    topicTitle: 'Energy Bands & Carrier Concentration',
    chapterTitle: 'Unit 1: Energy Bands & Equilibrium Carriers',
    formulaName: 'Mass Action Law & Fermi Level Position',
    latex: 'n \\cdot p = n_i^2 = N_c N_v e^{-E_g / kT}; \\quad E_F - E_i = kT \\ln\\left(\\frac{n}{n_i}\\right) = -kT \\ln\\left(\\frac{p}{n_i}\\right)',
    variables: [
      { symbol: 'n_i', meaning: 'Intrinsic carrier concentration (\\approx 1.5 \\times 10^{10} \\text{ cm}^{-3} \\text{ for Si at 300 K})' },
      { symbol: 'N_c, N_v', meaning: 'Effective density of states in conduction and valence bands' },
      { symbol: 'E_F, E_i', meaning: 'Fermi energy and intrinsic Fermi level respectively' }
    ],
    whenToUse: 'Calculating minority carrier densities in doped semiconductors and tracing Fermi level shifts with doping and temperature.',
    conditions: 'Valid for semiconductors under thermal equilibrium in the non-degenerate regime (E_C - E_F > 3kT).',
    relatedConcept: 'Donor/acceptor ionization, temperature dependence of bandgap, and complete ionization',
    relatedPYQ: 'GATE ECE 2025 (1 Mark), GATE 2022 (1 Mark)',
    order: 13
  },
  {
    id: 'form-edc-201',
    subjectId: 'subj-edc',
    subjectName: 'Electronic Devices (EDC)',
    unitId: 'unit-edc-2',
    topicId: 'top-edc-201',
    topicTitle: 'Drift, Diffusion & Continuity Equations',
    chapterTitle: 'Unit 2: Carrier Transport & Recombination',
    formulaName: 'Einstein Relation & Total Current Density',
    latex: '\\frac{D_n}{\\mu_n} = \\frac{D_p}{\\mu_p} = V_t = \\frac{kT}{q} \\approx 26\\text{ mV at 300 K}; \\quad J_{total} = q(n\\mu_n + p\\mu_p)\\mathcal{E} + q D_n\\frac{dn}{dx} - q D_p\\frac{dp}{dx}',
    variables: [
      { symbol: 'D_n, D_p', meaning: 'Electron and hole diffusion constants (cm²/s)' },
      { symbol: '\\mu_n, \\mu_p', meaning: 'Carrier mobilities (cm²/(V·s))' },
      { symbol: 'V_t', meaning: 'Thermal voltage (kT/q)' },
      { symbol: '\\mathcal{E}', meaning: 'Applied electric field (V/cm)' }
    ],
    whenToUse: 'Relating diffusion coefficients to mobility and calculating net drift plus diffusion conduction current in non-uniformly doped materials.',
    conditions: 'Assumes low-field transport (velocity before velocity saturation) in non-degenerate semiconductors.',
    relatedConcept: 'Continuity equation \\partial n/\\partial t = (1/q)\\nabla J_n + (G - R) and diffusion length L = \\sqrt{D\\tau}',
    relatedPYQ: 'GATE ECE 2024 (2 Marks), GATE 2020 (1 Mark)',
    order: 14
  },
  {
    id: 'form-edc-301',
    subjectId: 'subj-edc',
    subjectName: 'Electronic Devices (EDC)',
    unitId: 'unit-edc-3',
    topicId: 'top-edc-301',
    topicTitle: 'P-N Junction, Zener, BJT & MOSFET Operation',
    chapterTitle: 'Unit 3: P-N Junction, BJT & MOSFET',
    formulaName: 'P-N Junction Built-In Potential & Depletion Width',
    latex: 'V_{bi} = V_t \\ln\\left(\\frac{N_A N_D}{n_i^2}\\right); \\quad W = \\sqrt{\\frac{2\\epsilon_s}{q}\\left(\\frac{1}{N_A} + \\frac{1}{N_D}\\right)(V_{bi} - V_a)}',
    variables: [
      { symbol: 'V_{bi}', meaning: 'Built-in contact potential of the step junction (V)' },
      { symbol: 'N_A, N_D', meaning: 'Acceptor and donor doping densities (cm⁻³)' },
      { symbol: 'V_a', meaning: 'Applied bias voltage (positive for forward bias, negative for reverse)' },
      { symbol: '\\epsilon_s', meaning: 'Semiconductor permittivity (\\epsilon_r \\epsilon_0)' }
    ],
    whenToUse: 'Finding the barrier height, junction depletion layer width, junction capacitance, and peak junction electric field \\mathcal{E}_{max} = 2(V_{bi}-V_a)/W.',
    conditions: 'Abrupt (step) junction with depletion approximation (complete depletion in transition layer).',
    relatedConcept: 'Depletion capacitance C_j = \\epsilon_s A / W \\propto (V_{bi} - V_a)^{-1/2}',
    relatedPYQ: 'GATE ECE 2025 (2 Marks), GATE 2023 (1 Mark)',
    order: 15
  },
  {
    id: 'form-edc-302',
    subjectId: 'subj-edc',
    subjectName: 'Electronic Devices (EDC)',
    unitId: 'unit-edc-3',
    topicId: 'top-edc-301',
    topicTitle: 'P-N Junction, Zener, BJT & MOSFET Operation',
    chapterTitle: 'Unit 3: P-N Junction, BJT & MOSFET',
    formulaName: 'MOSFET Current-Voltage Characteristic Equations',
    latex: 'I_D = \\begin{cases} \\mu_n C_{ox}\\frac{W}{L}\\left[(V_{GS}-V_{th})V_{DS} - \\frac{V_{DS}^2}{2}\\right], & V_{DS} < V_{GS}-V_{th} \\text{ (Triode)} \\\\[6pt] \\frac{1}{2}\\mu_n C_{ox}\\frac{W}{L}(V_{GS}-V_{th})^2(1 + \\lambda V_{DS}), & V_{DS} \\ge V_{GS}-V_{th} \\text{ (Saturation)} \\end{cases}',
    variables: [
      { symbol: 'C_{ox}', meaning: 'Gate oxide capacitance per unit area: C_{ox} = \\epsilon_{ox}/t_{ox}' },
      { symbol: 'W/L', meaning: 'Channel width-to-length aspect ratio' },
      { symbol: 'V_{th}', meaning: 'MOSFET threshold inversion voltage' },
      { symbol: '\\lambda', meaning: 'Channel length modulation parameter (1/V_A)' }
    ],
    whenToUse: 'Determining operating region and bias currents of NMOS and PMOS transistors in digital and analog integrated circuits.',
    conditions: 'Valid for long-channel MOSFETs. For PMOS, substitute |V_{GS}|, |V_{thp}|, and \\mu_p.',
    relatedConcept: 'Pinch-off condition V_{DS(sat)} = V_{GS} - V_{th} and transconductance g_m',
    relatedPYQ: 'GATE ECE 2025 (2 Marks), GATE 2024 (2 Marks), GATE 2022 (2 Marks)',
    order: 16
  },

  // ==========================================
  // SECTION 4: ANALOG CIRCUITS (subj-analog)
  // ==========================================
  {
    id: 'form-ana-101',
    subjectId: 'subj-analog',
    subjectName: 'Analog Circuits',
    unitId: 'unit-analog-1',
    topicId: 'top-ana-101',
    topicTitle: 'Diode Clippers, Clampers & Rectifiers',
    chapterTitle: 'Unit 1: Diode Circuits',
    formulaName: 'Full-Wave Rectifier Ripple Factor & Efficiency',
    latex: 'r = \\sqrt{\\left(\\frac{V_{rms}}{V_{dc}}\\right)^2 - 1} = \\frac{1}{2\\sqrt{3} f R_L C} \\approx 0.482 \\text{ (without filter)}; \\quad \\eta_{max} = \\frac{8}{\\pi^2} \\approx 81.2\\%',
    variables: [
      { symbol: 'r', meaning: 'Ripple factor representing AC ripple content in DC output' },
      { symbol: 'f', meaning: 'Input AC line frequency (ripple frequency = 2f for full-wave)' },
      { symbol: 'C', meaning: 'Shunt smoothing filter capacitance' }
    ],
    whenToUse: 'Designing power supplies, sizing filter smoothing capacitors, and evaluating rectifier conversion performance.',
    conditions: 'Capacitor filter formula assumes light ripple discharge approximation (R_L C \\gg 1/(2f)).',
    relatedConcept: 'Peak Inverse Voltage (PIV): 2V_m for center-tapped, V_m for bridge rectifier',
    relatedPYQ: 'GATE ECE 2023 (1 Mark), GATE 2020 (1 Mark)',
    order: 17
  },
  {
    id: 'form-ana-201',
    subjectId: 'subj-analog',
    subjectName: 'Analog Circuits',
    unitId: 'unit-analog-2',
    topicId: 'top-ana-201',
    topicTitle: 'BJT & MOSFET Amplifiers, Small-Signal Model & Biasing',
    chapterTitle: 'Unit 2: BJT and MOSFET Amplifiers',
    formulaName: 'Transconductance & Small-Signal Voltage Gain',
    latex: 'g_m = \\frac{I_C}{V_t} \\text{ (BJT)}; \\quad g_m = \\sqrt{2\\mu_n C_{ox}\\frac{W}{L}I_D} = \\frac{2I_D}{V_{GS}-V_{th}} \\text{ (MOSFET)}; \\quad A_v \\approx -g_m (R_D \\parallel r_o \\parallel R_L)',
    variables: [
      { symbol: 'g_m', meaning: 'Transconductance of the active amplifying device (S or A/V)' },
      { symbol: 'r_o', meaning: 'Small-signal output resistance: r_o = V_A / I_C (BJT) or 1/(\\lambda I_D) (MOSFET)' },
      { symbol: 'A_v', meaning: 'Midband small-signal voltage gain of Common-Emitter / Common-Source amplifier' }
    ],
    whenToUse: 'AC small-signal analysis of discrete and integrated single-stage and cascade transistor amplifiers.',
    conditions: 'Devices biased in active forward (BJT) or saturation (MOSFET) regions.',
    relatedConcept: 'Input and output impedance, Miller effect C_in = C_{gd}(1 - A_v), and unity-gain bandwidth f_T = g_m / [2\\pi(C_{gs}+C_{gd})]',
    relatedPYQ: 'GATE ECE 2025 (2 Marks), GATE 2024 (2 Marks), GATE 2022 (2 Marks)',
    order: 18
  },
  {
    id: 'form-ana-301',
    subjectId: 'subj-analog',
    subjectName: 'Analog Circuits',
    unitId: 'unit-analog-3',
    topicId: 'top-ana-301',
    topicTitle: 'Op-Amps, Active Filters, Oscillators & Feedback',
    chapterTitle: 'Unit 3: Op-Amp Circuits & Oscillators',
    formulaName: 'Op-Amp Inverting, Non-Inverting Gain & Slew Rate Limit',
    latex: 'A_{v(inv)} = -\\frac{R_f}{R_1}; \\quad A_{v(non\\text{-}inv)} = 1 + \\frac{R_f}{R_1}; \\quad SR = \\left.\\frac{dV_o}{dt}\\right|_{max} = 2\\pi f_{max} V_p \\implies f_{max} = \\frac{SR}{2\\pi V_p}',
    variables: [
      { symbol: 'R_f, R_1', meaning: 'Feedback and input network resistors' },
      { symbol: 'SR', meaning: 'Op-Amp slew rate specification in V/µs' },
      { symbol: 'f_{max}', meaning: 'Full-power bandwidth without slew-induced triangular distortion' },
      { symbol: 'V_p', meaning: 'Peak sinusoidal output amplitude' }
    ],
    whenToUse: 'Computing closed-loop gain of operational amplifier configurations and establishing distortionless high-frequency output bounds.',
    conditions: 'Assumes ideal Op-Amp with infinite open-loop gain (virtual ground condition holds: V_+ = V_-).',
    relatedConcept: 'Common Mode Rejection Ratio CMRR = |A_d / A_{cm}| and Barkhausen oscillation criterion |A\\beta| = 1, \\angle A\\beta = 0^\\circ',
    relatedPYQ: 'GATE ECE 2024 (2 Marks), GATE 2021 (1 Mark)',
    order: 19
  },

  // ==========================================
  // SECTION 5: DIGITAL CIRCUITS (subj-digital)
  // ==========================================
  {
    id: 'form-dig-101',
    subjectId: 'subj-digital',
    subjectName: 'Digital Circuits',
    unitId: 'unit-dig-1',
    topicId: 'top-dig-101',
    topicTitle: 'Boolean Algebra, K-Maps & Combinational Logic',
    chapterTitle: 'Unit 1: Combinatorial Circuits & Minimization',
    formulaName: 'Range of Signed 2\'s Complement Numbers & Consensus Theorem',
    latex: '-2^{n-1} \\le N \\le 2^{n-1} - 1; \\quad AB + A\'C + BC = AB + A\'C',
    variables: [
      { symbol: 'n', meaning: 'Number of binary bits allocated for representation' },
      { symbol: 'N', meaning: 'Decimal magnitude range of representable signed integers' },
      { symbol: 'BC', meaning: 'Redundant consensus term that can be safely eliminated' }
    ],
    whenToUse: 'Detecting arithmetic overflow in n-bit signed adders and minimizing logic gates in combinational expressions.',
    conditions: 'Valid for 2\'s complement binary format with MSB as sign bit (0 = positive, 1 = negative).',
    relatedConcept: 'Arithmetic overflow condition V = C_{in} \\oplus C_{out} at sign bit',
    relatedPYQ: 'GATE ECE 2024 (1 Mark), GATE 2022 (1 Mark)',
    order: 20
  },
  {
    id: 'form-dig-201',
    subjectId: 'subj-digital',
    subjectName: 'Digital Circuits',
    unitId: 'unit-dig-2',
    topicId: 'top-dig-201',
    topicTitle: 'Latches, Flip-Flops, Counters & Timing Analysis',
    chapterTitle: 'Unit 2: Sequential Circuits & Timing',
    formulaName: 'Setup and Hold Time Timing Constraints',
    latex: 'T_{clk} \\ge t_{cq} + t_{comb(max)} + t_{su} - t_{skew} \\implies f_{max} = \\frac{1}{T_{clk(min)}}; \\quad t_{cq(min)} + t_{comb(min)} \\ge t_{h} + t_{skew}',
    variables: [
      { symbol: 'T_{clk}', meaning: 'Minimum allowable clock cycle period' },
      { symbol: 't_{cq}', meaning: 'Clock-to-Q output delay of the launching register' },
      { symbol: 't_{comb}', meaning: 'Combinational logic delay through the data path' },
      { symbol: 't_{su}, t_{h}', meaning: 'Setup and hold time requirements of receiving flip-flop' },
      { symbol: 't_{skew}', meaning: 'Clock skew (t_{clk2} - t_{clk1}); positive if clock arrives at destination later' }
    ],
    whenToUse: 'Calculating maximum operating clock frequency and ensuring zero setup or hold timing violations in synchronous digital ICs.',
    conditions: 'Worst-case path evaluation. Note: Hold violations are independent of clock period T_{clk} and cannot be fixed by lowering frequency!',
    relatedConcept: 'Static Timing Analysis (STA), clock jitter, and buffer insertion for hold fixing',
    relatedPYQ: 'GATE ECE 2025 (2 Marks), GATE 2023 (2 Marks)',
    order: 21
  },
  {
    id: 'form-dig-202',
    subjectId: 'subj-digital',
    subjectName: 'Digital Circuits',
    unitId: 'unit-dig-2',
    topicId: 'top-dig-201',
    topicTitle: 'Latches, Flip-Flops, Counters & Timing Analysis',
    chapterTitle: 'Unit 2: Sequential Circuits & Timing',
    formulaName: 'Flip-Flop Characteristic Equations & Counter Modulus',
    latex: 'Q(t+1) = J Q\'(t) + K\' Q(t); \\quad Q(t+1) = T \\oplus Q(t); \\quad N_{\\text{Ring}} = n, \\, N_{\\text{Johnson}} = 2n',
    variables: [
      { symbol: 'Q(t), Q(t+1)', meaning: 'Present state and next state across active clock transition' },
      { symbol: 'n', meaning: 'Number of cascading flip-flops in shift register counter' },
      { symbol: 'N', meaning: 'Modulus (number of valid cycle count states)' }
    ],
    whenToUse: 'Analyzing synchronous and asynchronous state machine transitions, designing frequency dividers, and shift counters.',
    conditions: 'Triggered at active edge without setup/hold race hazards.',
    relatedConcept: 'Frequency division f_{out} = f_{in} / N and self-correcting logic',
    relatedPYQ: 'GATE ECE 2025 (1 Mark), GATE 2023 (1 Mark)',
    order: 22
  },
  {
    id: 'form-dig-301',
    subjectId: 'subj-digital',
    subjectName: 'Digital Circuits',
    unitId: 'unit-dig-3',
    topicId: 'top-dig-301',
    topicTitle: 'Data Converters (ADC/DAC) & Memory Architectures',
    chapterTitle: 'Unit 3: Data Converters & Memories',
    formulaName: 'DAC Resolution, Step Size & Flash ADC Architecture',
    latex: 'V_{out} = \\frac{V_{ref}}{2^n - 1}\\sum_{i=0}^{n-1} b_i 2^i; \\quad \\text{Step Size } \\Delta = \\frac{V_{ref}}{2^n - 1}; \\quad \\text{Comparators (Flash)} = 2^n - 1',
    variables: [
      { symbol: 'V_{ref}', meaning: 'Full-scale reference voltage' },
      { symbol: 'n', meaning: 'Digital resolution in bits' },
      { symbol: 'b_i', meaning: 'Binary bits of digital input word (b_0 = LSB, b_{n-1} = MSB)' }
    ],
    whenToUse: 'Evaluating analog output for given binary words and estimating hardware complexity and conversion speeds of ADC topologies.',
    conditions: 'Ideal DAC with zero offset and gain error. (SAR conversion time = n clock cycles; Dual-Slope conversion time = 2^{n+1} clock cycles).',
    relatedConcept: 'Quantization error e_q \\in [-\\Delta/2, +\\Delta/2] and SNR_{ideal} = 6.02n + 1.76 dB',
    relatedPYQ: 'GATE ECE 2024 (1 Mark), GATE 2021 (1 Mark)',
    order: 23
  },

  // ==========================================
  // SECTION 6: CONTROL SYSTEMS (subj-control)
  // ==========================================
  {
    id: 'form-ctrl-101',
    subjectId: 'subj-control',
    subjectName: 'Control Systems',
    unitId: 'unit-ctrl-1',
    topicId: 'top-ctrl-101',
    topicTitle: 'Transfer Function, Block Diagrams & State Space',
    chapterTitle: 'Unit 1: Feedback, Transfer Function & State Space',
    formulaName: 'Mason’s Gain Formula & State Transition Matrix',
    latex: 'T(s) = \\frac{\\sum_{k=1}^N P_k \\Delta_k}{\\Delta}; \\quad \\Phi(t) = \\mathcal{L}^{-1}\\{(sI - A)^{-1}\\} = e^{At} = I + At + \\frac{A^2 t^2}{2!} + \\dots',
    variables: [
      { symbol: 'P_k', meaning: 'Gain of the k-th forward path from input to output' },
      { symbol: '\\Delta', meaning: 'Graph determinant: 1 - \\sum L_i + \\sum L_j L_k - \\dots' },
      { symbol: '\\Delta_k', meaning: 'Value of \\Delta for the subgraph not touching path P_k' },
      { symbol: '\\Phi(t)', meaning: 'State transition matrix governing unforced evolution: x(t) = \\Phi(t)x(0)' }
    ],
    whenToUse: 'Finding overall closed-loop transfer functions from complex signal flow graphs and solving state space trajectories.',
    conditions: 'Linear time-invariant lumped parameter systems.',
    relatedConcept: 'Controllability matrix Q_c = [B, AB, ..., A^{n-1}B] and Observability matrix Q_o = [C^T, A^T C^T, ...]^T',
    relatedPYQ: 'GATE ECE 2025 (2 Marks), GATE 2022 (2 Marks)',
    order: 24
  },
  {
    id: 'form-ctrl-201',
    subjectId: 'subj-control',
    subjectName: 'Control Systems',
    unitId: 'unit-ctrl-2',
    topicId: 'top-ctrl-201',
    topicTitle: 'Stability, Routh-Hurwitz, Nyquist, Bode & Root Locus',
    chapterTitle: 'Unit 2: Time & Frequency Response & Stability',
    formulaName: 'Second-Order System Step Response Parameters',
    latex: '\\%M_p = e^{-\\frac{\\pi\\zeta}{\\sqrt{1-\\zeta^2}}} \\times 100\\%; \\quad t_p = \\frac{\\pi}{\\omega_n\\sqrt{1-\\zeta^2}}; \\quad t_s(2\\%) = \\frac{4}{\\zeta\\omega_n}, \\, t_s(5\\%) = \\frac{3}{\\zeta\\omega_n}',
    variables: [
      { symbol: '\\zeta', meaning: 'Damping ratio (0 < \\zeta < 1 for underdamped system)' },
      { symbol: '\\omega_n', meaning: 'Undamped natural angular frequency in rad/s' },
      { symbol: '\\%M_p', meaning: 'Percentage peak overshoot' },
      { symbol: 't_p, t_s', meaning: 'Peak time and settling time within specified tolerance band' }
    ],
    whenToUse: 'Synthesizing transient specifications and designing feedback controllers for second-order underdamped dominant poles.',
    conditions: 'Standard prototype transfer function T(s) = \\omega_n^2 / (s^2 + 2\\zeta\\omega_n s + \\omega_n^2) with step input.',
    relatedConcept: 'Dominant pole approximation and steady-state error e_{ss} = \\lim_{s\\to 0} s R(s) / [1 + G(s)]',
    relatedPYQ: 'GATE ECE 2024 (2 Marks), GATE 2023 (2 Marks), GATE 2021 (1 Mark)',
    order: 25
  },
  {
    id: 'form-ctrl-202',
    subjectId: 'subj-control',
    subjectName: 'Control Systems',
    unitId: 'unit-ctrl-2',
    topicId: 'top-ctrl-201',
    topicTitle: 'Stability, Routh-Hurwitz, Nyquist, Bode & Root Locus',
    chapterTitle: 'Unit 2: Time & Frequency Response & Stability',
    formulaName: 'Nyquist Stability Criterion & Gain/Phase Margins',
    latex: 'N = P - Z \\implies Z = P - N; \\quad GM = \\frac{1}{|G(j\\omega_{pc})|}; \\quad PM = 180^\\circ + \\angle G(j\\omega_{gc})',
    variables: [
      { symbol: 'N', meaning: 'Number of counter-clockwise encirclements of critical point (-1 + j0)' },
      { symbol: 'P', meaning: 'Number of open-loop poles in the open right-half of the complex s-plane (RHP)' },
      { symbol: 'Z', meaning: 'Number of closed-loop poles in the RHP (Z = 0 for stability)' },
      { symbol: '\\omega_{pc}, \\omega_{gc}', meaning: 'Phase crossover (\\angle G = -180^\\circ) and gain crossover (|G| = 1) frequencies' }
    ],
    whenToUse: 'Predicting closed-loop stability from open-loop frequency response without factoring the characteristic polynomial.',
    conditions: 'Nyquist contour traversed in standard clockwise sense; N is positive for counter-clockwise encirclements.',
    relatedConcept: 'Bode magnitude slope changes (-20 dB/dec for pole, +20 dB/dec for zero) and Phase lead/lag compensators',
    relatedPYQ: 'GATE ECE 2025 (2 Marks), GATE 2022 (1 Mark)',
    order: 26
  },

  // ==========================================
  // SECTION 7: COMMUNICATIONS (subj-comm)
  // ==========================================
  {
    id: 'form-comm-101',
    subjectId: 'subj-comm',
    subjectName: 'Communications',
    unitId: 'unit-comm-1',
    topicId: 'top-comm-101',
    topicTitle: 'Random Processes, Autocorrelation & Noise',
    chapterTitle: 'Unit 1: Random Processes & Noise',
    formulaName: 'Wiener-Khinchin Theorem & White Noise Filtering',
    latex: 'S_{YY}(f) = |H(f)|^2 S_{XX}(f); \\quad R_{XX}(\\tau) = \\int_{-\\infty}^{\\infty} S_{XX}(f) e^{j 2\\pi f \\tau}\\,df; \\quad R_{XX}(0) = E[X^2(t)] = P_{total}',
    variables: [
      { symbol: 'S_{XX}(f), S_{YY}(f)', meaning: 'Input and output Power Spectral Densities (PSD) in W/Hz' },
      { symbol: 'H(f)', meaning: 'Transfer function of the LTI filter' },
      { symbol: 'R_{XX}(\\tau)', meaning: 'Autocorrelation function with time lag \\tau = t_1 - t_2' }
    ],
    whenToUse: 'Determining output noise power and autocorrelation when Wide-Sense Stationary (WSS) random signals pass through LTI filters.',
    conditions: 'Random process must be Wide-Sense Stationary: constant mean and autocorrelation dependent solely on time difference \\tau.',
    relatedConcept: 'Additive White Gaussian Noise (AWGN) PSD: S_N(f) = N_0/2 and autocorrelation R_N(\\tau) = (N_0/2)\\delta(\\tau)',
    relatedPYQ: 'GATE ECE 2025 (2 Marks), GATE 2024 (2 Marks)',
    order: 27
  },
  {
    id: 'form-comm-201',
    subjectId: 'subj-comm',
    subjectName: 'Communications',
    unitId: 'unit-comm-2',
    topicId: 'top-comm-201',
    topicTitle: 'AM, FM Modulation & Receivers',
    chapterTitle: 'Unit 2: Analog Communications & Receivers',
    formulaName: 'AM Transmitted Power & FM Carson’s Bandwidth Rule',
    latex: 'P_t = P_c\\left(1 + \\frac{\\mu^2}{2}\\right); \\quad \\eta_{AM} = \\frac{\\mu^2}{2 + \\mu^2}; \\quad B_{FM} = 2(\\Delta f + f_m) = 2(\\beta + 1)f_m',
    variables: [
      { symbol: 'P_c', meaning: 'Unmodulated carrier power (A_c^2 / 2)' },
      { symbol: '\\mu', meaning: 'AM modulation index (\\mu \\le 1 for envelope detection without overmodulation)' },
      { symbol: '\\Delta f', meaning: 'Peak frequency deviation: \\Delta f = k_f A_m' },
      { symbol: '\\beta', meaning: 'FM modulation index: \\beta = \\Delta f / f_m' },
      { symbol: 'f_m', meaning: 'Highest baseband modulating frequency' }
    ],
    whenToUse: 'Calculating total transmitted power and required RF transmission bandwidth for analog AM and FM communication systems.',
    conditions: 'Sinusoidal single-tone message modulation. (Carson’s rule captures >98% of total transmitted power).',
    relatedConcept: 'Superheterodyne receiver intermediate frequency f_{IF} = f_{LO} - f_s and image frequency f_{img} = f_s + 2f_{IF}',
    relatedPYQ: 'GATE ECE 2024 (1 Mark), GATE 2022 (2 Marks)',
    order: 28
  },
  {
    id: 'form-comm-301',
    subjectId: 'subj-comm',
    subjectName: 'Communications',
    unitId: 'unit-comm-3',
    topicId: 'top-comm-301',
    topicTitle: 'Digital Modulation (PCM, PSK, QAM), BER & Info Theory',
    chapterTitle: 'Unit 3: Digital Communications & Info Theory',
    formulaName: 'Shannon Channel Capacity & Matched Filter Peak SNR',
    latex: 'C = B \\log_2\\left(1 + \\frac{S}{N}\\right) \\text{ bits/s}; \\quad \\text{SNR}_{max} = \\frac{2 E}{N_0}; \\quad P_e(BPSK) = Q\\left(\\sqrt{\\frac{2E_b}{N_0}}\\right)',
    variables: [
      { symbol: 'C', meaning: 'Maximum error-free information transmission rate (Shannon capacity)' },
      { symbol: 'B', meaning: 'Channel bandwidth in Hz' },
      { symbol: 'S/N', meaning: 'Signal-to-noise power ratio in linear scale (not dB!)' },
      { symbol: 'E_b', meaning: 'Energy transmitted per information bit' },
      { symbol: 'N_0 / 2', meaning: 'Two-sided AWGN noise power spectral density' },
      { symbol: 'Q(x)', meaning: 'Gaussian tail probability: Q(x) = \\frac{1}{\\sqrt{2\\pi}}\\int_x^\\infty e^{-u^2/2} du' }
    ],
    whenToUse: 'Establishing theoretical channel transmission bounds, designing optimum matched filter receivers, and calculating Bit Error Rate (BER).',
    conditions: 'Bandlimited additive white Gaussian noise channel. Note: Matched filter impulse response is h(t) = s(T - t).',
    relatedConcept: 'PCM bit rate R_b = n f_s, transmission bandwidth BW \\ge R_b / 2, and quantization SNR = 6.02n + 1.76 dB',
    relatedPYQ: 'GATE ECE 2025 (2 Marks), GATE 2024 (2 Marks), GATE 2023 (2 Marks)',
    order: 29
  },

  // ==========================================
  // SECTION 8: ELECTROMAGNETICS (subj-emft)
  // ==========================================
  {
    id: 'form-emft-101',
    subjectId: 'subj-emft',
    subjectName: 'Electromagnetics',
    unitId: 'unit-emft-1',
    topicId: 'top-emft-101',
    topicTitle: 'Maxwell’s Equations & Uniform Plane Waves',
    chapterTitle: 'Unit 1: Maxwell’s Equations & Plane Waves',
    formulaName: 'Intrinsic Wave Impedance, Skin Depth & Poynting Vector',
    latex: '\\eta = \\sqrt{\\frac{\\mu}{\\epsilon}} \\approx 120\\pi \\approx 377\\,\\Omega \\text{ (Free space)}; \\quad \\delta = \\sqrt{\\frac{2}{\\omega\\mu\\sigma}} = \\frac{1}{\\sqrt{\\pi f \\mu \\sigma}}; \\quad \\vec{P}_{avg} = \\frac{1}{2}\\text{Re}\\{\\vec{E} \\times \\vec{H}^*\\}',
    variables: [
      { symbol: '\\eta', meaning: 'Intrinsic wave impedance relating |E| and |H|' },
      { symbol: '\\delta', meaning: 'Skin depth: distance over which wave amplitude decays to 1/e (36.8%) of surface value' },
      { symbol: '\\sigma', meaning: 'Medium conductivity in S/m' },
      { symbol: '\\vec{P}_{avg}', meaning: 'Time-averaged power flux density in W/m²' }
    ],
    whenToUse: 'Analyzing uniform plane wave propagation in lossless, lossy, and good conducting media, and computing RF attenuation.',
    conditions: 'Skin depth formula holds for good conductors where \\sigma \\gg \\omega\\epsilon.',
    relatedConcept: 'Maxwell’s equations: \\nabla \\times E = -\\partial B/\\partial t, \\nabla \\times H = J + \\partial D/\\partial t, \\nabla \\cdot D = \\rho_v, \\nabla \\cdot B = 0',
    relatedPYQ: 'GATE ECE 2025 (2 Marks), GATE 2024 (1 Mark), GATE 2022 (2 Marks)',
    order: 30
  },
  {
    id: 'form-emft-201',
    subjectId: 'subj-emft',
    subjectName: 'Electromagnetics',
    unitId: 'unit-emft-2',
    topicId: 'top-emft-201',
    topicTitle: 'Transmission Lines, Waveguides & Antennas',
    chapterTitle: 'Unit 2: Transmission Lines, Waveguides & Antennas',
    formulaName: 'Transmission Line Reflection Coefficient, VSWR & Input Impedance',
    latex: '\\Gamma_L = \\frac{Z_L - Z_0}{Z_L + Z_0}; \\quad S = \\text{VSWR} = \\frac{1 + |\\Gamma_L|}{1 - |\\Gamma_L|}; \\quad Z_{in}(l) = Z_0 \\left[\\frac{Z_L + j Z_0 \\tan(\\beta l)}{Z_0 + j Z_L \\tan(\\beta l)}\\right]',
    variables: [
      { symbol: '\\Gamma_L', meaning: 'Voltage reflection coefficient at the load terminal (|\\Gamma_L| \\le 1)' },
      { symbol: 'Z_0', meaning: 'Characteristic impedance: Z_0 = \\sqrt{L/C} for lossless line' },
      { symbol: 'S', meaning: 'Voltage Standing Wave Ratio (1 \\le S < \\infty)' },
      { symbol: '\\beta', meaning: 'Phase propagation constant: \\beta = 2\\pi / \\lambda' },
      { symbol: 'l', meaning: 'Length of the transmission line section' }
    ],
    whenToUse: 'Impedance matching, evaluating standing wave ratios, and sizing quarter-wave transformers (Z_{in} = Z_0^2 / Z_L for l = \\lambda/4).',
    conditions: 'Lossless transmission line (R = 0, G = 0). For matched load Z_L = Z_0 \\implies \\Gamma = 0, S = 1.',
    relatedConcept: 'Half-wave line l = \\lambda/2 repeats load: Z_{in} = Z_L. Shorted line l < \\lambda/4 acts as pure inductor: Z_{in} = j Z_0 \\tan(\\beta l)',
    relatedPYQ: 'GATE ECE 2025 (2 Marks), GATE 2023 (2 Marks), GATE 2022 (2 Marks)',
    order: 31
  },
  {
    id: 'form-emft-202',
    subjectId: 'subj-emft',
    subjectName: 'Electromagnetics',
    unitId: 'unit-emft-2',
    topicId: 'top-emft-201',
    topicTitle: 'Transmission Lines, Waveguides & Antennas',
    chapterTitle: 'Unit 2: Transmission Lines, Waveguides & Antennas',
    formulaName: 'Rectangular Waveguide Cutoff Frequency & Dipole Radiation Resistance',
    latex: 'f_{c,mn} = \\frac{c}{2\\sqrt{\\mu_r \\epsilon_r}} \\sqrt{\\left(\\frac{m}{a}\\right)^2 + \\left(\\frac{n}{b}\\right)^2}; \\quad R_{rad} = 80\\pi^2 \\left(\\frac{dl}{\\lambda}\\right)^2 \\text{ (Hertzian)}, \\, 73\\,\\Omega \\text{ (\\lambda/2 dipole)}',
    variables: [
      { symbol: 'a, b', meaning: 'Broad and narrow dimensions of rectangular waveguide (a > b)' },
      { symbol: 'm, n', meaning: 'Mode indices for TE_{mn} and TM_{mn} propagating modes' },
      { symbol: 'f_{c,10}', meaning: 'Dominant mode cutoff frequency: f_{c,10} = c / (2a)' },
      { symbol: 'R_{rad}', meaning: 'Antenna radiation resistance relating radiated power P_{rad} = \\frac{1}{2} I_0^2 R_{rad}' }
    ],
    whenToUse: 'Determining propagating passbands in hollow metallic waveguides and computing antenna efficiency and power radiation.',
    conditions: 'Dominant mode in rectangular waveguide is TE_{10} (TM_{10} does NOT exist because both m \\ge 1 and n \\ge 1 required for TM modes).',
    relatedConcept: 'Guide wavelength \\lambda_g = \\lambda / \\sqrt{1 - (f_c/f)^2} and wave phase velocity v_p = c / \\sqrt{1 - (f_c/f)^2} > c',
    relatedPYQ: 'GATE ECE 2024 (2 Marks), GATE 2021 (1 Mark)',
    order: 32
  },

  // ==========================================
  // SECTION 0: GENERAL APTITUDE (subj-aptitude)
  // ==========================================
  {
    id: 'form-apt-101',
    subjectId: 'subj-aptitude',
    subjectName: 'General Aptitude',
    unitId: 'unit-apt-1',
    topicId: 'top-apt-101',
    topicTitle: 'Quantitative Aptitude & Numerical Reasoning',
    chapterTitle: 'General Aptitude (Mandatory 15 Marks)',
    formulaName: 'Permutations, Combinations & Probability',
    latex: '^nP_r = \\frac{n!}{(n-r)!}; \\quad ^nC_r = \\frac{n!}{r!(n-r)!}; \\quad P(A \\cup B) = P(A) + P(B) - P(A \\cap B)',
    variables: [
      { symbol: 'n', meaning: 'Total number of items in collection' },
      { symbol: 'r', meaning: 'Number of items selected or arranged' }
    ],
    whenToUse: 'Solving seating arrangements, committee selections, and combinatorial probability questions in General Aptitude.',
    conditions: 'Permutation accounts for ordering; combination is order-independent.',
    relatedConcept: 'Complementary probability: P(at least one) = 1 - P(none)',
    relatedPYQ: 'GATE 2025 GA (1 Mark), GATE 2024 GA (2 Marks)',
    order: 33
  },
  {
    id: 'form-apt-102',
    subjectId: 'subj-aptitude',
    subjectName: 'General Aptitude',
    unitId: 'unit-apt-1',
    topicId: 'top-apt-101',
    topicTitle: 'Quantitative Aptitude & Numerical Reasoning',
    chapterTitle: 'General Aptitude (Mandatory 15 Marks)',
    formulaName: 'Average Speed & Work-Time Rate Equations',
    latex: 'v_{avg} = \\frac{2 v_1 v_2}{v_1 + v_2} \\text{ (Equal distance)}; \\quad \\frac{1}{T_{net}} = \\frac{1}{T_A} + \\frac{1}{T_B} - \\frac{1}{T_{leak}}',
    variables: [
      { symbol: 'v_1, v_2', meaning: 'Speeds for equal onward and return distances' },
      { symbol: 'T_A, T_B', meaning: 'Time taken by agents or pipes individually to complete a task' },
      { symbol: 'T_{net}', meaning: 'Combined time required working simultaneously' }
    ],
    whenToUse: 'Speed-distance-time word problems, pipes-and-cisterns, and collaborative work duration questions.',
    conditions: 'Harmonic mean speed is strictly valid when distances for both legs of the journey are identical.',
    relatedConcept: 'Relative speed: (v_1 + v_2) for opposite directions, |v_1 - v_2| for same direction',
    relatedPYQ: 'GATE 2023 GA (2 Marks), GATE 2022 GA (1 Mark)',
    order: 34
  }
];
