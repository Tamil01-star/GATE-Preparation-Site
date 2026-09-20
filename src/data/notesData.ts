import { Note } from '../types';

export const INITIAL_NOTES: Note[] = [
  // SECTION 1: Engineering Mathematics Note
  {
    id: 'note-math-103',
    topicId: 'top-math-103',
    unitId: 'unit-math-1',
    subjectId: 'subj-math',
    title: 'Eigenvalues, Eigenvectors & Cayley-Hamilton Theorem',
    lastUpdated: '2026-09-18',
    topicIntroduction: 'Eigenvalues and eigenvectors represent fundamental spectral invariants of linear transformations and square matrices in GATE ECE. Key themes tested include properties of eigenvalues for special matrices (Symmetric, Skew-symmetric, Orthogonal, Unitary), trace/determinant theorems, Cayley-Hamilton application to evaluate matrix polynomials and inverses, and diagonalizability conditions.',
    coreConcepts: [
      'Eigenvalue Definition: For an n x n square matrix A, a non-zero vector X is an eigenvector corresponding to scalar eigenvalue λ if A·X = λ·X, or equivalently (A - λ·I)X = 0.',
      'Characteristic Equation: The condition for non-trivial solution X ≠ 0 requires det(A - λ·I) = 0. Expanding this determinant produces an n-th degree polynomial in λ.',
      'Trace & Determinant Properties: Sum of eigenvalues = Trace(A) = sum of main diagonal elements; Product of eigenvalues = Det(A).',
      'Cayley-Hamilton Theorem: Every square matrix satisfies its own characteristic equation, i.e., if P(λ) = det(A - λ·I) = λ^n + c_{n-1}λ^{n-1} + ... + c_0 = 0, then P(A) = A^n + c_{n-1}A^{n-1} + ... + c_0·I = [0].',
      'Algebraic Multiplicity (AM) vs Geometric Multiplicity (GM): AM is the multiplicity of λ as a root of char polynomial; GM is the dimension of the eigenspace (nullity of A - λ·I). A matrix is diagonalizable iff GM = AM for every eigenvalue.'
    ],
    importantDefinitions: [
      {
        term: 'Trace of a Matrix',
        definition: 'The sum of the primary diagonal entries of a square matrix: Trace(A) = ∑ a_ii = ∑ λ_i.'
      },
      {
        term: 'Spectral Theorem for Symmetric Matrices',
        definition: 'Every real symmetric matrix has strictly REAL eigenvalues, and eigenvectors corresponding to distinct eigenvalues are mutually orthogonal.'
      },
      {
        term: 'Skew-Symmetric Matrix Eigenvalues',
        definition: 'A real matrix A where A^T = -A has eigenvalues that are either purely imaginary (±iβ) or identically zero.'
      },
      {
        term: 'Orthogonal Matrix Eigenvalues',
        definition: 'A real matrix A where A^T·A = I has eigenvalues whose complex modulus is exactly unity (|λ| = 1).'
      }
    ],
    detailedExplanation: [
      '1. Spectral Properties across Matrix Operations:\nIf λ is an eigenvalue of A with eigenvector X:\n- k·A has eigenvalue k·λ (same eigenvector X)\n- A^m has eigenvalue λ^m (same eigenvector X)\n- A^-1 (if exists) has eigenvalue 1/λ (same eigenvector X)\n- A^T has identical eigenvalues to A (since det(A^T - λI) = det((A - λI)^T) = det(A - λI))\n- Matrix polynomial f(A) has eigenvalue f(λ).',
      '2. Cayley-Hamilton Theorem In-Depth Applications:\n(a) Computing Matrix Inverse: Multiply P(A) = 0 by A^-1:\nA^-1 = -(1/c_0) * [A^{n-1} + c_{n-1}A^{n-2} + ... + c_1·I].\n(b) Reducing High Powers: To evaluate A^100 for a 2x2 matrix with char equation λ^2 - 3λ + 2 = 0:\nDivide λ^100 by (λ^2 - 3λ + 2): λ^100 = Q(λ)(λ-1)(λ-2) + (a·λ + b). Substitute roots λ=1 and λ=2 to find constants a and b, then A^100 = a·A + b·I.',
      '3. Diagonalization Criterion:\nAn n x n matrix A is diagonalizable if there exists an invertible modal matrix P consisting of n linearly independent eigenvectors such that P^-1·A·P = D, where D is diagonal containing the eigenvalues.'
    ],
    importantFormulas: [
      {
        name: 'Sum of Eigenvalues (Trace Law)',
        formula: '∑ λ_i = Trace(A) = ∑ a_ii',
        explanation: 'Instant sanity check to verify calculated eigenvalues against diagonal sum.'
      },
      {
        name: 'Product of Eigenvalues (Determinant Law)',
        formula: '∏ λ_i = det(A)',
        explanation: 'If det(A) = 0, at least one eigenvalue must be 0 (matrix is singular).'
      },
      {
        name: 'Cayley-Hamilton Matrix Inverse Formula',
        formula: 'A^-1 = -1/c_0 · [A^{n-1} + c_{n-1}A^{n-2} + ... + c_1·I]',
        explanation: 'Allows computing matrix inverse purely through additions and scalar multiplications.'
      }
    ],
    importantDiagrams: [
      {
        title: 'Eigenvector Transformation Invariant Axis',
        description: 'Geometrical representation showing transformation A stretches vector X along its existing axis by factor λ without rotation.',
        caption: 'Figure 1.1: A·X = λ·X illustrates purely collinear stretching.'
      }
    ],
    shortcutsAndTricks: [
      '2x2 Matrix Characteristic Equation Shortcut: λ^2 - Trace(A)·λ + Det(A) = 0. Always write this down directly without setting up the determinant!',
      '3x3 Matrix Shortcut: λ^3 - Trace(A)·λ^2 + (M11 + M22 + M33)·λ - Det(A) = 0, where Mii are primary diagonal minors.',
      'Idempotent Matrix (A^2 = A): Eigenvalues can ONLY be 0 or 1.',
      'Nilpotent Matrix (A^k = 0): All eigenvalues are identically 0.',
      'Rank 1 Matrix of form A = u·v^T: Has non-zero eigenvalue λ = v^T·u with multiplicity 1, and all remaining (n-1) eigenvalues are 0.'
    ],
    commonMistakes: [
      'Mistake 1: Confusing eigenvectors of A and A^T. While A and A^T share identical eigenvalues, their eigenvectors are generally different!',
      'Mistake 2: Assuming every square matrix is diagonalizable. Matrices with repeated eigenvalues where Geometric Multiplicity < Algebraic Multiplicity cannot be diagonalized.',
      'Mistake 3: Forgetting to negate c_0 when using Cayley-Hamilton for A^-1.'
    ],
    gateLevelPoints: [
      'If all rows (or columns) of an n x n matrix sum to a constant S, then S is GUARANTEED to be an eigenvalue with eigenvector [1, 1, ..., 1]^T.',
      'For triangular (upper/lower) and diagonal matrices, eigenvalues are simply the elements on the principal diagonal.',
      'Eigenvalues of Hermitian matrix are real; eigenvalues of Unitary matrix lie on the unit circle in the complex plane.'
    ],
    quickRevisionSummary: [
      'det(A - λI) = 0. Trace = sum of eigenvalues. Det = product of eigenvalues.',
      'Real symmetric -> strictly real eigenvalues, orthogonal eigenvectors.',
      'Skew-symmetric -> purely imaginary or zero.',
      'Orthogonal/Unitary -> |λ| = 1.',
      '2x2 equation: λ² - Tr(A)λ + Det(A) = 0. Cayley-Hamilton: Matrix satisfies its own char eqn.'
    ],
    uploadedFiles: [
      {
        id: 'file-math-pw',
        fileName: 'Engineering_Mathematics_Notes_PW.pdf',
        fileType: 'PDF',
        size: '2.53 MB',
        subject: 'Engineering Mathematics',
        unit: 'Section 1: Engineering Mathematics',
        topic: 'Linear Algebra & Calculus',
        subtopic: 'Complete 66-page Master Textbook',
        title: 'Physics Wallah Engineering Mathematics GATE Handbook',
        uploadDate: '2026-09-18',
        fileUrl: '/notes/Engineering_Mathematics_Notes_PW.pdf'
      }
    ]
  },

  // SECTION 2: Networks, Signals and Systems Note
  {
    id: 'note-net-401',
    topicId: 'top-net-401',
    unitId: 'unit-net-4',
    subjectId: 'subj-networks-signals',
    title: 'Continuous-Time Fourier Transform (CTFT) & Nyquist Sampling',
    lastUpdated: '2026-09-15',
    topicIntroduction: 'The Continuous-Time Fourier Transform (CTFT) decomposes arbitrary finite-energy continuous-time signals into complex exponential frequency components. In GATE ECE, questions frequently test symmetry properties, duality, convolution in time mapping to multiplication in frequency, energy computation via Parseval’s theorem, and Nyquist sampling rate requirements for bandlimited signals.',
    coreConcepts: [
      'Fourier Transform Pair: Forward transform X(ω) = ∫ x(t) e^{-jωt} dt from -∞ to +∞; Inverse transform x(t) = (1/2π) ∫ X(ω) e^{jωt} dω.',
      'Symmetry Relations: If x(t) is real, X(-ω) = X*(ω) (Conjugate symmetry). If real and even -> X(ω) is purely real and even. If real and odd -> X(ω) is purely imaginary and odd.',
      'Duality Theorem: If x(t) ↔ X(ω), then X(t) ↔ 2π x(-ω). Essential for finding transform of sinc pulses from rect pulses.',
      'Parseval’s Energy Theorem: Total energy E = ∫ |x(t)|^2 dt = (1/2π) ∫ |X(ω)|^2 dω = ∫ |X(f)|^2 df.',
      'Nyquist Sampling Rate: Minimum sampling frequency to avoid aliasing is f_s ≥ 2·f_max.'
    ],
    importantDefinitions: [
      {
        term: 'Energy Spectral Density (ESD)',
        definition: 'Defined as S_xx(ω) = |X(ω)|^2. Represents distribution of total signal energy across continuous frequency ω.'
      },
      {
        term: 'Nyquist Rate',
        definition: 'The minimum rate at which a signal must be sampled so that it can be reconstructed from its samples without aliasing distortion: f_N = 2 f_m.'
      }
    ],
    detailedExplanation: [
      '1. Rectangular Pulse and Sinc Transform Pair:\nFor a gate pulse x(t) = rect(t/T) = 1 for |t| ≤ T/2, its CTFT is X(ω) = T·sinc(ωT / 2π) = T·sin(ωT/2) / (ωT/2). By duality, a sinc pulse in time corresponds to a strictly band-limited rectangular spectrum in frequency.',
      '2. Modulation (Frequency Shifting):\nx(t)·e^{jω_0 t} ↔ X(ω - ω_0). For sinusoidal carrier: x(t)·cos(ω_0 t) ↔ 0.5[X(ω - ω_0) + X(ω + ω_0)].',
      '3. Convolution & Multiplication:\nLinear convolution in time corresponds to algebraic multiplication in frequency: x(t) * h(t) ↔ X(ω)·H(ω). Multiplication in time corresponds to frequency convolution scaled by 1/(2π).'
    ],
    importantFormulas: [
      {
        name: 'CTFT Synthesis & Analysis',
        formula: 'X(ω) = ∫_{-∞}^{∞} x(t)e^{-jωt}dt,  x(t) = \\frac{1}{2π}∫_{-∞}^{∞} X(ω)e^{jωt}dω',
        explanation: 'Fundamental forward and inverse continuous-time Fourier pair.'
      },
      {
        name: 'Duality Property',
        formula: 'x(t) ↔ X(ω)  ⟹  X(t) ↔ 2π·x(-ω)',
        explanation: 'Enables instant derivation of time-frequency dual transforms.'
      },
      {
        name: 'Parseval’s Energy Relation',
        formula: 'E = ∫_{-∞}^{∞} |x(t)|² dt = \\frac{1}{2π}∫_{-∞}^{∞} |X(ω)|² dω = ∫_{-∞}^{∞} |X(f)|² df',
        explanation: 'Conservation of signal energy between time and frequency domains.'
      }
    ],
    importantDiagrams: [
      {
        title: 'Rectangular Pulse to Sinc Transform',
        description: 'Time domain pulse of width T yields sinc function with first zero-crossing at ω = 2π/T.',
        caption: 'Figure 2.1: Narrowing pulse in time spreads spectrum in frequency (scaling theorem).'
      }
    ],
    shortcutsAndTricks: [
      'Area under x(t) equals DC value of spectrum: ∫ x(t) dt = X(0). Instant way to check X(0)!',
      'Area under X(ω) equals 2π times signal value at origin: ∫ X(ω) dω = 2π·x(0).',
      'Scaling Property: x(at) ↔ (1/|a|)·X(ω/a). Compression in time domain causes expansion in frequency domain.'
    ],
    commonMistakes: [
      'Mistake 1: Forgetting the 1/2π factor when converting between angular frequency ω (rad/s) and cyclic frequency f (Hz) in Parseval’s integral.',
      'Mistake 2: Missing the sign flip in duality: X(t) transforms to 2π·x(-ω), not 2π·x(ω).'
    ],
    gateLevelPoints: [
      'GATE Standard: Evaluating ∫ sinc^2(kt) dt by applying Parseval theorem to a rectangular pulse. E = T.',
      'Signum function sgn(t) has CTFT 2/(jω). Unit step u(t) = 0.5 sgn(t) + 0.5 has CTFT 1/(jω) + π·δ(ω).'
    ],
    quickRevisionSummary: [
      'x(t) ↔ X(ω). Area under x(t) = X(0); Area under X(ω) = 2π·x(0).',
      'Time shift: x(t - t_0) ↔ X(ω)·e^{-jω t_0}. Freq shift: x(t)·e^{jω_0 t} ↔ X(ω - ω_0).',
      'Convolution: x(t) * h(t) ↔ X(ω)H(ω). Multiplication: x(t)y(t) ↔ (1/2π)[X(ω) * Y(ω)].',
      'Nyquist rate = 2 f_max. Nyquist interval = 1 / (2 f_max).'
    ],
    uploadedFiles: [
      {
        id: 'file-signals-pw',
        fileName: 'Signals_and_Systems_Notes_PW.pdf',
        fileType: 'PDF',
        size: '3.09 MB',
        subject: 'Networks, Signals and Systems',
        unit: 'Section 2: Networks, Signals and Systems',
        topic: 'Continuous-Time Signals & LTI Systems',
        subtopic: 'Complete 79-page Master Textbook',
        title: 'Physics Wallah Signals and Systems GATE Handbook',
        uploadDate: '2026-09-18',
        fileUrl: '/notes/Signals_and_Systems_Notes_PW.pdf'
      },
      {
        id: 'file-network-pw',
        fileName: 'Network_Theory_Notes_PW.pdf',
        fileType: 'PDF',
        size: '4.81 MB',
        subject: 'Networks, Signals and Systems',
        unit: 'Section 2: Circuit Analysis',
        topic: 'Network Theorems & Two-Port Parameters',
        subtopic: 'Complete 65-page Master Textbook',
        title: 'Physics Wallah Network Theory GATE Handbook',
        uploadDate: '2026-09-18',
        fileUrl: '/notes/Network_Theory_Notes_PW.pdf'
      }
    ]
  },

  // SECTION 3: Electronic Devices Note
  {
    id: 'note-edc-301',
    topicId: 'top-edc-301',
    unitId: 'unit-edc-3',
    subjectId: 'subj-edc',
    title: 'P-N Junction Electrostatics, MOSFET Physics & Scaling',
    lastUpdated: '2026-09-18',
    topicIntroduction: 'Electronic Devices (EDC) is a core scoring subject in GATE ECE. Key concepts include equilibrium carrier statistics, Fermi level position, built-in potential and depletion width in step junctions, carrier recombination dynamics, MOS capacitor electrostatics (accumulation, depletion, strong inversion), and MOSFET drain current modeling including velocity saturation and short-channel effects.',
    coreConcepts: [
      'Law of Mass Action: Under thermal equilibrium, n · p = n_i^2 holds true for both intrinsic and extrinsic semiconductors.',
      'Built-in Potential (V_bi): V_bi = V_t · ln((N_A · N_D) / n_i^2), where V_t = kT/q is the thermal voltage (approx 26 mV at 300 K).',
      'Depletion Layer Width (W): W = √((2 ε_s / q) · (1/N_A + 1/N_D) · (V_bi - V_applied)). The depletion region extends deeper into the lightly doped side.',
      'MOS Capacitor Threshold Voltage (V_th): Voltage required to bend energy bands at the oxide-semiconductor surface by 2·ϕ_B (surface potential ψ_s = 2ϕ_F), establishing strong inversion.',
      'MOSFET Drain Current: In triode region, I_D = μ_n C_ox (W/L) [(V_GS - V_th)V_DS - 0.5 V_DS^2]. In saturation region (V_DS ≥ V_GS - V_th), I_D = 0.5 μ_n C_ox (W/L)(V_GS - V_th)^2.'
    ],
    importantDefinitions: [
      {
        term: 'Einstein Relation',
        definition: 'D / μ = V_t = kT / q, relating diffusion coefficient D to carrier mobility μ.'
      },
      {
        term: 'Channel Length Modulation (CLM)',
        definition: 'Shortening of the effective inversion channel length ΔL as V_DS increases beyond saturation V_DS,sat, resulting in finite output conductance g_ds = λ·I_D.'
      }
    ],
    detailedExplanation: [
      '1. Carrier Transport Equations:\nTotal current density is the vector sum of drift and diffusion:\nJ_total = J_drift + J_diff = (q·n·μ_n + q·p·μ_p)·E + q·D_n·(dn/dx) - q·D_p·(dp/dx).',
      '2. P-N Junction Breakdown Mechanisms:\n- Zener Breakdown: Occurs in heavily doped junctions with narrow depletion regions under moderate reverse bias (< 6V) via quantum mechanical tunneling. Temperature coefficient is NEGATIVE.\n- Avalanche Breakdown: Occurs in lightly doped junctions with wide depletion regions under high reverse bias (> 6V) via impact ionization. Temperature coefficient is POSITIVE.',
      '3. MOSFET Scaling Rules (Constant Field vs Constant Voltage):\nIn constant field scaling (factor 1/α): Dimensions W, L, tox scale by 1/α; Voltages scale by 1/α; Electric field remains constant; Circuit delay reduces by 1/α; Power dissipation scales down by 1/α^2.'
    ],
    importantFormulas: [
      {
        name: 'Built-in Potential Formula',
        formula: 'V_{bi} = \\frac{kT}{q} \\ln\\left(\\frac{N_A N_D}{n_i^2}\\right)',
        explanation: 'Barrier potential developed across zero-bias equilibrium junction.'
      },
      {
        name: 'MOSFET Saturation Current',
        formula: 'I_D = \\frac{1}{2} \\mu_n C_{ox} \\frac{W}{L} (V_{GS} - V_{th})^2 (1 + \\lambda V_{DS})',
        explanation: 'Square-law model including channel length modulation factor.'
      }
    ],
    importantDiagrams: [
      {
        title: 'MOS Capacitor Energy Band Diagram',
        description: 'Band bending under Accumulation (V_G < 0 for p-substrate), Depletion, and Strong Inversion (ψ_s ≥ 2ϕ_F).',
        caption: 'Figure 3.1: Flatband to strong inversion band diagram for p-type MOS structure.'
      }
    ],
    shortcutsAndTricks: [
      'One-Sided Step Junction: If N_A >> N_D (p+n junction), depletion width is governed purely by lightly doped side: W ≈ √((2 ε_s V_bi) / (q N_D)).',
      'Transit Time Shortcut: Base transit time in BJT τ_t = W_B^2 / (2 D_B).'
    ],
    commonMistakes: [
      'Confusing temperature coefficients: Zener breakdown has negative temp coefficient, whereas Avalanche has positive temp coefficient!',
      'Assuming electron mobility equals hole mobility: In silicon, μ_n ≈ 1350 cm^2/V-s while μ_p ≈ 480 cm^2/V-s (electrons travel ~2.8x faster).'
    ],
    gateLevelPoints: [
      'GATE Trap: If temperature increases by 1°C, reverse saturation current I_0 increases by approximately 7% in Silicon and doubles every 10°C.',
      'In a solar cell, maximum power operating point satisfies dP/dV = 0, giving optimum voltage V_mp < V_oc and optimum current I_mp < I_sc.'
    ],
    quickRevisionSummary: [
      'n·p = n_i^2. D/μ = kT/q = 26 mV at 300K.',
      'V_bi = V_t ln(N_A N_D / n_i^2). W ∝ √(V_bi + V_R).',
      'MOSFET Saturation: V_DS ≥ V_GS - V_th. I_D = 0.5 μ C_ox (W/L)(V_GS - V_th)^2.'
    ],
    uploadedFiles: [
      {
        id: 'file-edc-pw',
        fileName: 'Electronic_Devices_Circuits_Notes_PW.pdf',
        fileType: 'PDF',
        size: '6.34 MB',
        subject: 'Electronic Devices (EDC)',
        unit: 'Section 3: Electronic Devices',
        topic: 'P-N Junction & MOSFET Physics',
        subtopic: 'Complete 82-page Master Textbook',
        title: 'Physics Wallah Electronic Devices and Circuits GATE Handbook',
        uploadDate: '2026-09-18',
        fileUrl: '/notes/Electronic_Devices_Circuits_Notes_PW.pdf'
      }
    ]
  },

  // SECTION 5: Digital Circuits Note
  {
    id: 'note-dig-201',
    topicId: 'top-dig-201',
    unitId: 'unit-dig-2',
    subjectId: 'subj-digital',
    title: 'Sequential Circuits, Flip-Flops & Static Timing Analysis',
    lastUpdated: '2026-09-15',
    topicIntroduction: 'Sequential logic outputs depend on both current inputs and previous history stored in flip-flops. Topics tested in GATE include characteristic equations, excitation tables, setup and hold time calculation, clock skew, asynchronous ripple counters, and synchronous FSM sequence detectors.',
    coreConcepts: [
      'Bistability: A circuit possessing two stable states (0 and 1) capable of storing 1 bit of information.',
      'Race-Around Condition: In level-triggered JK flip-flops when J=1, K=1 and clock pulse width tp > propagation delay td, output toggles uncontrollably. Cured by Master-Slave configuration.',
      'Characteristic Equations: JK: Q(t+1) = JQ\'(t) + K\'Q(t); T: Q(t+1) = T ⊕ Q(t); D: Q(t+1) = D; SR: Q(t+1) = S + R\'Q(t) with SR=0.',
      'Setup Time (t_su): Data must remain stable before active clock edge. T_clk ≥ t_cq + t_comb + t_su - t_skew.',
      'Hold Time (t_h): Data must remain stable after clock edge. t_cq + t_comb(min) ≥ t_hold + t_skew. Independent of clock period!'
    ],
    importantDefinitions: [
      {
        term: 'Setup Time Violation',
        definition: 'Occurs if data changes within t_su before clock arrival. Can be fixed by decreasing clock frequency (increasing clock period).'
      },
      {
        term: 'Hold Time Violation',
        definition: 'Occurs if fast path changes data within t_h after clock arrival. Cannot be fixed by changing clock frequency! Must add delay buffers.'
      }
    ],
    detailedExplanation: [
      '1. Flip-Flop Conversion Procedure:\nStep 1: Write characteristic table of desired flip-flop.\nStep 2: Append required inputs of available flip-flop from its excitation table.\nStep 3: Solve K-maps for available inputs in terms of desired inputs and present state Q.\nStep 4: Realize combinational circuit.',
      '2. Ring and Johnson Counters:\n- Ring Counter (n flip-flops): Modulus N = n states. Unused states = 2^n - n.\n- Johnson / Twisted Ring Counter (n flip-flops): Inverted feedback Q_n\' fed to D1. Modulus N = 2n states. Unused states = 2^n - 2n.'
    ],
    importantFormulas: [
      {
        name: 'JK Characteristic Equation',
        formula: 'Q(n+1) = J·Q\'(n) + K\'·Q(n)',
        explanation: 'Computes next state for any given J, K inputs and present state Q.'
      },
      {
        name: 'Maximum Clock Frequency',
        formula: 'T_{clk} \\ge t_{cq} + t_{comb(max)} + t_{su} - t_{skew} \\implies f_{max} = \\frac{1}{T_{clk(min)}}',
        explanation: 'Worst-case path setup timing constraint.'
      }
    ],
    importantDiagrams: [
      {
        title: 'Master-Slave JK Architecture',
        description: 'Level-isolated master and slave stages driven by complementary clock pulses to eliminate race-around.',
        caption: 'Figure 5.1: Master captures input during CLK=1; Slave delivers output when CLK falls to 0.'
      }
    ],
    shortcutsAndTricks: [
      'T Flip-Flop Frequency Divider: With T=1, f_out = f_clk / 2 with exact 50% duty cycle.',
      'Johnson Counter decoding: Needs only 2-input AND gates to decode any state.'
    ],
    commonMistakes: [
      'Confusing level-sensitive latches with edge-sensitive flip-flops.',
      'Attempting to fix hold time violations by reducing clock frequency.'
    ],
    gateLevelPoints: [
      'In ripple counters with n flip-flops, total propagation delay is n · t_pd. Clock period must satisfy T_clk ≥ n·t_pd + t_su.',
      'Static CMOS inverter sizing: (W/L)_p ≈ 2.5 (W/L)_n for symmetric rise and fall times.'
    ],
    quickRevisionSummary: [
      'JK: Q+ = JQ\' + K\'Q; T: Q+ = T ⊕ Q; D: Q+ = D.',
      'Setup: T_clk ≥ t_cq + t_comb + t_su - t_skew.',
      'Hold: t_cq + t_comb(min) ≥ t_h + t_skew.',
      'Ring: N = n; Johnson: N = 2n.'
    ],
    uploadedFiles: [
      {
        id: 'file-digital-pw',
        fileName: 'Digital_Electronics_Notes_PW.pdf',
        fileType: 'PDF',
        size: '8.25 MB',
        subject: 'Digital Circuits',
        unit: 'Section 5: Digital Circuits',
        topic: 'Combinational & Sequential Logic',
        subtopic: 'Complete 85-page Master Textbook',
        title: 'Physics Wallah Digital Electronics GATE Handbook',
        uploadDate: '2026-09-18',
        fileUrl: '/notes/Digital_Electronics_Notes_PW.pdf'
      }
    ]
  }
];
