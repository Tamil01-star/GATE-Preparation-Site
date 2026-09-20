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
  },

  // SECTION 4: Analog Circuits Note
  {
    id: 'note-ana-301',
    topicId: 'top-ana-301',
    unitId: 'unit-analog-3',
    subjectId: 'subj-analog',
    title: 'Op-Amp Linear & Non-Linear Circuits, Active Filters, Oscillators & Miller Compensation',
    lastUpdated: '2026-09-19',
    topicIntroduction: 'Analog Circuits represents one of the most critical problem-solving sections in GATE ECE. Key examination topics focus on negative and positive feedback operational amplifier circuits, virtual ground/short concepts, finite open-loop gain and input offset voltages, Schmitt triggers with hysteresis thresholds, active Butterworth filter transfer functions, Barkhausen criteria for harmonic oscillators, and Miller dominant-pole frequency compensation for closed-loop stability.',
    coreConcepts: [
      'Ideal vs Practical Op-Amp Parameters: Ideal Op-Amp has infinite open-loop gain (A_OL = ∞), infinite input impedance (R_in = ∞), zero output impedance (R_out = 0), infinite bandwidth, and infinite CMRR. Under negative feedback, V_+ ≈ V_- (virtual short).',
      'Inverting & Non-Inverting Closed-Loop Gain: Inverting configuration: A_v = -R_f / R_1; Non-inverting configuration: A_v = 1 + R_f / R_1. If open-loop gain A is finite, non-inverting gain becomes A_v = (1 + R_f/R_1) / [1 + (1 + R_f/R_1)/A].',
      'Integrator & Differentiator Limits: Ideal inverting integrator has transfer function H(s) = -1 / (s R C), acting as a low-pass filter with DC gain infinity (requires parallel shunt resistor R_f to prevent saturation). Ideal differentiator has H(s) = -s R C, acting as a high-pass filter (susceptible to high-frequency noise).',
      'Schmitt Trigger & Positive Feedback: When feedback is applied to the non-inverting terminal, the circuit exhibits hysteresis. Upper trigger point: V_UTP = [R1/(R1+R2)]·V_sat+ + [R2/(R1+R2)]·V_ref; Lower trigger point: V_LTP = [R1/(R1+R2)]·V_sat- + [R2/(R1+R2)]·V_ref. Hysteresis width V_H = V_UTP - V_LTP.',
      'Barkhausen Criteria for Oscillations: For sustained harmonic oscillations at frequency ω_0: (1) Loop gain magnitude |A·β| = 1; (2) Total loop phase shift ∠(A·β) = 0° or 360°.',
      'Miller Frequency Compensation: Inserting capacitor C_c across high-gain inverting stage creates pole splitting: dominant pole shifts to lower frequency ω_p1 ≈ 1 / (g_m2 R1 R2 C_c), while non-dominant pole moves to high frequency ω_p2 ≈ g_m2 / C_L, ensuring phase margin ≥ 45° for unity-gain stability.'
    ],
    importantDefinitions: [
      {
        term: 'Slew Rate (SR)',
        definition: 'The maximum rate of change of output voltage that an op-amp can produce: SR = max(|dv_out/dt|). To avoid distortion for sinusoidal output V_m sin(ωt), f_max = SR / (2π V_m).'
      },
      {
        term: 'Common-Mode Rejection Ratio (CMRR)',
        definition: 'CMRR = |A_d / A_cm|, usually expressed in dB as 20 log10(|A_d / A_cm|). Measures the amplifier ability to amplify difference signal while rejecting common-mode noise.'
      },
      {
        term: 'Phase Margin (PM)',
        definition: 'PM = 180° + ∠(Aβ)|_{ω = ω_gc}, evaluated at gain crossover frequency where |Aβ| = 1. System is stable if PM > 0; optimal transient response typically requires PM ≈ 60°.'
      }
    ],
    detailedExplanation: [
      '1. Precision Diode & Superdiode Circuits:\nConventional diodes fail to rectify signals below cut-in voltage V_γ (~0.7V). Placing diode in Op-Amp feedback loop reduces effective cut-in voltage to V_γ / A_OL ≈ 0.7V / 10^5 ≈ 7 μV, enabling precise rectification of millivolt signals.',
      '2. Active Filter Realizations (Sallen-Key Architecture):\nFirst-order low-pass active filter: H(s) = - (R_f / R_1) / (1 + s R_f C_f). Second-order low-pass Sallen-Key topology yields standard transfer function H(s) = K ω_0^2 / (s^2 + (ω_0/Q)s + ω_0^2), where Q = 1/√2 = 0.707 gives maximally flat Butterworth response with -40 dB/decade roll-off.',
      '3. Transistor Small-Signal Amplifier Miller Effect:\nIn Common-Emitter / Common-Source amplifiers, capacitance C_gd (or C_μ) bridging input and output is magnified at the input by factor (1 - A_v) = (1 + |A_v|): C_in,Miller = C_gd(1 + |A_v|). This severely reduces the amplifier high-frequency 3-dB cutoff bandwidth.'
    ],
    importantFormulas: [
      {
        name: 'Finite Open-Loop Gain Non-Inverting Op-Amp Formula',
        formula: 'A_{CL} = \\frac{1 + \\frac{R_f}{R_1}}{1 + \\frac{1 + R_f/R_1}{A_{OL}}}',
        explanation: 'Closed-loop gain formula when Op-Amp internal gain A_OL is finite.'
      },
      {
        name: 'Full-Power Bandwidth (Slew Rate Limit)',
        formula: 'f_{max} = \\frac{SR}{2\\pi V_{omax}}',
        explanation: 'Maximum frequency permissible for undistorted sinusoidal output of peak amplitude V_omax.'
      },
      {
        name: 'Miller Input Capacitance Formula',
        formula: 'C_{in,M} = C_{gd} \\cdot (1 - A_v) = C_{gd} \\cdot (1 + |A_v|)',
        explanation: 'Miller theorem equivalent input capacitance across high-gain inverting amplifier stage.'
      },
      {
        name: 'Wien Bridge Oscillator Frequency & Gain Condition',
        formula: 'f_0 = \\frac{1}{2\\pi R C}, \\quad \\frac{R_f}{R_1} \\ge 2',
        explanation: 'Conditions for Barkhausen loop gain Aβ = 1 at resonance for sustained sinusoidal oscillations.'
      }
    ],
    importantDiagrams: [
      {
        title: 'Inverting Schmitt Trigger Transfer Curve',
        description: 'Bistable transfer curve plotting V_out versus V_in showing upper threshold V_UTP and lower threshold V_LTP with counter-clockwise hysteresis loop.',
        caption: 'Figure 4.1: Hysteresis loop provides superior noise immunity in noisy digital-threshold detection.'
      }
    ],
    shortcutsAndTricks: [
      'Virtual Ground Rule of Thumb: Only valid when negative feedback exists AND op-amp output is not saturated (i.e. -V_EE < V_out < +V_CC). Never apply virtual ground to Schmitt triggers!',
      'Op-Amp Output Resistance with Feedback: Closed-loop output resistance R_out,CL = R_out,OL / (1 + A_OL·β), dramatically reducing practical output impedance.',
      'Offset Voltage Output Shift: Output error voltage due to input offset voltage V_os is ALWAYS V_out,error = V_os · (1 + R_f / R_1), regardless of inverting or non-inverting configuration!'
    ],
    commonMistakes: [
      'Mistake 1: Applying virtual ground V_+ = V_- to positive feedback circuits (Schmitt triggers, multivibrators). The non-inverting terminal is NOT at the same voltage as inverting terminal!',
      'Mistake 2: Forgetting that real op-amp output saturation levels V_sat+ and V_sat- are approximately 1-2V below supply rails V_CC and -V_EE in non-rail-to-rail chips.'
    ],
    gateLevelPoints: [
      'GATE Trap: When calculating bandwidth of op-amp circuits, Gain-Bandwidth Product (GBW) is constant: GBW = A_CL · BW = f_T. Increasing closed-loop gain directly shrinks circuit bandwidth.',
      'CMRR evaluation: Given CMRR in dB, first convert to linear ratio CMRR = 10^(CMRR_dB / 20) before calculating error voltage: V_out = A_d V_d + A_cm V_cm = A_d [V_d + V_cm / CMRR].'
    ],
    quickRevisionSummary: [
      'Ideal Op-Amp: Rin = ∞, Rout = 0, A_OL = ∞. Neg feedback -> V+ = V-.',
      'Inverting: -Rf/R1. Non-inverting: 1 + Rf/R1.',
      'Slew Rate: f_max = SR / (2π V_m). CMRR = |Ad / Acm|.',
      'Schmitt Trigger: V_UTP / V_LTP determined by positive feedback divider.',
      'Barkhausen: |Aβ| = 1 and ∠Aβ = 0° or 360°. Wien bridge: f0 = 1/(2πRC), Rf/R1 ≥ 2.'
    ],
    uploadedFiles: [
      {
        id: 'file-analog-pw',
        fileName: 'Analog_Electronics_Notes_PW.pdf',
        fileType: 'PDF',
        size: '3.30 MB',
        subject: 'Analog Circuits',
        unit: 'Section 4: Analog Circuits',
        topic: 'Op-Amp Circuits & Active Filters',
        subtopic: 'Complete 39-page Master Textbook',
        title: 'Physics Wallah Analog Electronics GATE Handbook',
        uploadDate: '2026-09-18',
        fileUrl: '/notes/Analog_Electronics_Notes_PW.pdf'
      }
    ]
  },

  // SECTION 6: Control Systems Note
  {
    id: 'note-ctrl-201',
    topicId: 'top-ctrl-201',
    unitId: 'unit-ctrl-2',
    subjectId: 'subj-control',
    title: 'Control System Stability Analysis: Routh-Hurwitz, Nyquist Criterion, Bode Plots & Compensators',
    lastUpdated: '2026-09-19',
    topicIntroduction: 'Control Systems is one of the highest scoring and most mathematically rigorous sections in GATE ECE. Key concepts include Mason’s gain formula for Signal Flow Graphs, time-domain transient specifications for second-order underdamped systems, steady-state error analysis and error coefficients, Routh-Hurwitz stability criterion and special cases, root-locus construction rules, Nyquist stability criterion based on Cauchy’s argument principle, Bode plots with gain/phase margins, state-space canonical forms, and phase-lead/phase-lag compensator design.',
    coreConcepts: [
      'Mason’s Gain Formula: Overall transfer function T = ∑ (P_k · Δ_k) / Δ, where P_k is forward path gain, Δ = 1 - ∑ L_1 + ∑ L_2 - ∑ L_3 + ..., and Δ_k is the cofactor of the k-th forward path.',
      'Second-Order System Dynamics: Standard char equation s^2 + 2ζω_n s + ω_n^2 = 0. Peak overshoot %M_p = e^{-πζ / √(1-ζ^2)} × 100%. Settling time t_s = 4 / (ζω_n) (2% tolerance) or 3 / (ζω_n) (5% tolerance). Peak time t_p = π / (ω_n √(1-ζ^2)).',
      'Steady-State Error: e_ss = lim_{s→0} s·R(s) / [1 + G(s)H(s)]. Position error constant K_p = lim_{s→0} G(s)H(s); Velocity error constant K_v = lim_{s→0} s G(s)H(s); Acceleration error constant K_a = lim_{s→0} s^2 G(s)H(s).',
      'Routh-Hurwitz Criterion: Number of sign changes in the first column of the Routh array equals the number of closed-loop poles in the Right Half of the s-Plane (RHP). Row of zeros indicates symmetric roots about origin (jω poles or quadrantal roots).',
      'Nyquist Stability Criterion: N = P - Z, where N is clockwise encirclements of (-1 + j0), P is number of open-loop poles in RHP, and Z is number of closed-loop poles in RHP. For closed-loop stability, Z MUST equal 0, so N = -P (or P counter-clockwise encirclements).',
      'State Space Representation: ẋ(t) = A x(t) + B u(t), y(t) = C x(t) + D u(t). Transfer function G(s) = C(sI - A)^{-1}B + D. State transition matrix Φ(t) = e^{At} = L^{-1}{(sI - A)^{-1}}.'
    ],
    importantDefinitions: [
      {
        term: 'Gain Margin (GM) & Phase Margin (PM)',
        definition: 'Gain Crossover Frequency (ω_gc): frequency where |G(jω)H(jω)| = 1. Phase Crossover Frequency (ω_pc): frequency where ∠G(jω)H(jω) = -180°. GM = 1 / |G(jω_pc)H(jω_pc)| = -20 log10|G(jω_pc)| dB. PM = 180° + ∠G(jω_gc)H(jω_gc).'
      },
      {
        term: 'Kalman Controllability & Observability',
        definition: 'System is completely state controllable if controllability matrix Q_c = [B  AB  A^2B ... A^{n-1}B] has rank n. System is completely observable if observability matrix Q_o = [C^T  A^T C^T ... (A^T)^{n-1} C^T]^T has rank n.'
      }
    ],
    detailedExplanation: [
      '1. Root Locus Construction Rules:\n- Number of branches = max(P, Z). Symmetry about real axis.\n- Real axis segments: a point lies on root locus if total number of open-loop poles and zeros to its right is ODD.\n- Asymptotes angle: θ_k = (2k + 1)·180° / (P - Z). Centroid: σ_A = (∑ Real(Poles) - ∑ Real(Zeros)) / (P - Z).\n- Breakaway points: dK/ds = 0 where K = -1 / G(s)H(s).',
      '2. Lead vs Lag Compensator Design:\n- Phase-Lead Compensator G_c(s) = (s + 1/τ) / (s + 1/(ατ)) with α < 1: Adds positive phase lead φ_max = sin^{-1}((1 - α)/(1 + α)) at ω_m = 1/(τ√α). Increases bandwidth, speeds up transient response, improves phase margin.\n- Phase-Lag Compensator G_c(s) = (s + 1/τ) / (s + 1/(βτ)) with β > 1: Increases low-frequency gain, drastically improves steady-state accuracy without altering transient response.'
    ],
    importantFormulas: [
      {
        name: 'Percentage Peak Overshoot Formula',
        formula: '\\%M_p = e^{-\\frac{\\pi \\zeta}{\\sqrt{1-\\zeta^2}}} \\times 100\\%',
        explanation: 'Directly relates damping ratio ζ to maximum transient peak overshoot.'
      },
      {
        name: 'Nyquist Encirclement Law',
        formula: 'N = P - Z \\implies Z = P - N = 0 \\quad (\\text{for stability})',
        explanation: 'Relates open-loop RHP poles P, encirclements N of (-1, j0), and closed-loop RHP poles Z.'
      },
      {
        name: 'Transfer Function from State Matrices',
        formula: 'G(s) = C(sI - A)^{-1}B + D = \\frac{C \\cdot \\text{adj}(sI - A) \\cdot B}{\\det(sI - A)} + D',
        explanation: 'Closed-form transfer function evaluation from continuous state-space matrices.'
      },
      {
        name: 'Lead Compensator Maximum Phase Lead',
        formula: '\\sin(\\phi_{max}) = \\frac{1 - \\alpha}{1 + \\alpha}, \\quad \\omega_{max} = \\frac{1}{\\tau \\sqrt{\\alpha}}',
        explanation: 'Calculates required pole-zero separation ratio α for desired phase margin boost.'
      }
    ],
    importantDiagrams: [
      {
        title: 'Bode Plot Margins & Crossover Frequencies',
        description: 'Bode magnitude and phase curves showing Gain Crossover Frequency (ω_gc), Phase Crossover Frequency (ω_pc), Gain Margin (GM) and Phase Margin (PM).',
        caption: 'Figure 6.1: For stable minimum-phase systems, ω_gc < ω_pc with positive GM (dB) and PM.'
      }
    ],
    shortcutsAndTricks: [
      'Second-Order Underdamped ζ Shortcut: If %Mp = 16.3%, ζ ≈ 0.5. If %Mp = 4.3%, ζ ≈ 0.707. If %Mp = 10%, ζ ≈ 0.6.',
      'Steady-State Error Matrix: Type 0 system has finite error for Step input; Type 1 system has zero error for Step and finite error for Ramp input; Type 2 system has zero error for Step and Ramp, finite error for Parabolic input.',
      'State Transition Matrix Invariant: Φ(0) = I (Identity matrix), and [Φ(t)]^{-1} = Φ(-t).'
    ],
    commonMistakes: [
      'Mistake 1: Confusing Nyquist encirclement direction. Standard convention: N is POSITIVE for CLOCKWISE encirclements of (-1 + j0). If Nyquist contour is traversed clockwise, N = P - Z.',
      'Mistake 2: Forgetting that a row of zeros in the Routh array means you MUST construct the auxiliary polynomial A(s) from the previous row and differentiate dA(s)/ds to continue.'
    ],
    gateLevelPoints: [
      'GATE Trap: If open-loop transfer function has pole at origin (1/s), the Nyquist contour must detour around the origin via small semicircle s = ε e^{jθ} with θ ranging from -90° to +90°, mapping to a massive semicircle at infinity.',
      'Eigenvalues of system matrix A are identically the poles of closed-loop transfer function: det(sI - A) = 0.'
    ],
    quickRevisionSummary: [
      'Mason Gain: T = ∑ P_k Δ_k / Δ. Peak overshoot: %Mp = exp(-πζ/√(1-ζ²)) * 100.',
      'Settling time (2%): ts = 4 / (ζ ωn). Steady-state error: ess = lim s R(s) / (1 + GH).',
      'Routh criterion: Sign changes in 1st column = RHP poles.',
      'Nyquist: N = P - Z. Stability requires Z = 0.',
      'Lead compensator: adds positive phase, speeds up response; Lag: increases low-freq gain, cuts steady-state error.'
    ],
    uploadedFiles: [
      {
        id: 'file-control-pw',
        fileName: 'Control_Systems_Notes_PW.pdf',
        fileType: 'PDF',
        size: '4.67 MB',
        subject: 'Control Systems',
        unit: 'Section 6: Control Systems',
        topic: 'Time & Frequency Response & Stability',
        subtopic: 'Complete 84-page Master Textbook',
        title: 'Physics Wallah Control Systems GATE Handbook',
        uploadDate: '2026-09-18',
        fileUrl: '/notes/Control_Systems_Notes_PW.pdf'
      }
    ]
  },

  // SECTION 7: Communications Note
  {
    id: 'note-comm-301',
    topicId: 'top-comm-301',
    unitId: 'unit-comm-3',
    subjectId: 'subj-comm',
    title: 'Digital Passband Modulation (BPSK/QPSK/QAM), Matched Filter Detection & Information Theory',
    lastUpdated: '2026-09-19',
    topicIntroduction: 'Communication Systems is a foundational pillar of GATE ECE, spanning both statistical analog systems and advanced digital physical layer techniques. Key tested areas include wide-sense stationary (WSS) random processes, white Gaussian noise (AWGN) filtering, analog modulation (AM, DSB-SC, SSB, FM Carson’s rule, superheterodyne receivers), information entropy and Shannon-Hartley channel capacity, pulse code modulation (PCM) quantization SNR, matched filter impulse response maximizing peak output SNR, constellation geometric representation, bit error rate (BER) derivations for BPSK/QPSK/QAM, and linear block error-correcting codes.',
    coreConcepts: [
      'Shannon Channel Capacity Theorem: C = B · log_2(1 + S/N) bits/sec, where B is channel bandwidth and S/N is signal-to-noise power ratio. As bandwidth B → ∞, channel capacity approaches finite limit: C_∞ = (S / N_0) · log_2(e) ≈ 1.442 · (S / N_0).',
      'Information Entropy: Source entropy H(X) = - ∑ P(x_i) log_2 P(x_i) bits/symbol. For M equiprobable symbols, entropy attains maximum H_max = log_2(M).',
      'Pulse Code Modulation (PCM) & Quantization: Uniform quantizer step size Δ = (V_max - V_min) / 2^n. Quantization noise power N_q = Δ^2 / 12. Output Signal-to-Quantization-Noise Ratio: (SNR)_dB = 1.76 + 6.02·n dB. Each added bit improves SNR by approx 6 dB!',
      'Matched Filter Detection: For signal s(t) corrupted by AWGN with PSD N_0/2, optimum filter impulse response maximizing output SNR at sampling instant T is h(t) = k · s*(T - t). Maximum output peak SNR is (S/N)_out,max = 2 E_s / N_0, which depends purely on signal energy E_s and noise spectral density N_0, completely independent of signal waveshape!',
      'Passband Constellation & Bit Error Probability (BER): BPSK: P_e = Q(√(2 E_b / N_0)); QPSK: Bit error rate P_b = Q(√(2 E_b / N_0)) (identical to BPSK with double the spectral efficiency!); BFSK (coherent): P_e = Q(√(E_b / N_0)) (requires 3 dB more power than BPSK).',
      'Nyquist Criterion for Zero ISI: For zero Inter-Symbol Interference (ISI), overall equivalent channel response must satisfy ∑ P(f + k/T_s) = T_s. Minimum theoretical bandwidth is B_min = R_s / 2 (Nyquist bandwidth). With raised-cosine roll-off factor α (0 ≤ α ≤ 1), required transmission bandwidth is B = (1 + α) R_s / 2.'
    ],
    importantDefinitions: [
      {
        term: 'Wide-Sense Stationary (WSS) Random Process',
        definition: 'A random process X(t) whose mean is constant for all time E[X(t)] = μ, and whose autocorrelation R_XX(t1, t2) depends solely on time difference τ = t1 - t2: R_XX(τ) = E[X(t) X(t + τ)].'
      },
      {
        term: 'Wiener-Khinchin Theorem',
        definition: 'For a WSS random process, the Power Spectral Density S_XX(f) and autocorrelation function R_XX(τ) form a Fourier transform pair: S_XX(f) = ∫ R_XX(τ) e^{-j 2π f τ} dτ.'
      },
      {
        term: 'Gaussian Q-Function',
        definition: 'The tail probability of the standard normal distribution N(0, 1): Q(x) = (1/√(2π)) ∫_x^∞ e^{-u^2 / 2} du. Useful approximation: Q(x) ≈ (1 / (x√(2π))) e^{-x^2 / 2} for large x.'
      }
    ],
    detailedExplanation: [
      '1. Superheterodyne Receiver & Image Frequency:\nLocal oscillator frequency is chosen as f_LO = f_s + 2·f_IF (high-side tuning). The image frequency is f_img = f_s + 2·f_IF. Image Rejection Ratio (IRR) is governed by RF pre-selector filter selectivity: IRR = √(1 + Q^2 ρ^2) where ρ = (f_img/f_s) - (f_s/f_img).',
      '2. FM Modulation Index & Carson’s Bandwidth:\nInstantaneous frequency f_i(t) = f_c + k_f m(t). Frequency deviation Δf = k_f · max|m(t)|. Modulation index β = Δf / f_m. Carson’s Bandwidth Rule: BW_FM = 2(Δf + f_m) = 2(β + 1)f_m. For Narrowband FM (β << 1), BW ≈ 2 f_m; For Wideband FM (β >> 1), BW ≈ 2 Δf.',
      '3. Linear Block Codes (n, k):\nGenerator matrix G (k × n) generates codewords c = m · G. Parity check matrix H ((n - k) × n) satisfies G · H^T = 0. Syndrome vector s = r · H^T detects and locates transmission errors. Minimum Hamming distance d_min detects up to (d_min - 1) errors and corrects up to ⌊(d_min - 1)/2⌋ errors.'
    ],
    importantFormulas: [
      {
        name: 'Shannon Channel Capacity Formula',
        formula: 'C = B \\log_2\\left(1 + \\frac{S}{N}\\right) = B \\log_2\\left(1 + \\frac{S}{N_0 B}\\right)',
        explanation: 'Maximum error-free information transmission rate over an AWGN channel.'
      },
      {
        name: 'PCM Quantization Signal-to-Noise Ratio',
        formula: '(\\text{SNR})_{q,\\text{dB}} = 1.76 + 6.02 \\cdot n \\quad \\text{dB}',
        explanation: 'Quantization SNR for full-scale sinusoidal input with n-bit encoding.'
      },
      {
        name: 'Matched Filter Peak Output SNR',
        formula: '(\\text{SNR})_{out,max} = \\frac{2 E_s}{N_0}',
        explanation: 'Maximum achievable output SNR at decision instant for AWGN noise PSD N0/2.'
      },
      {
        name: 'BPSK & QPSK Bit Error Rate',
        formula: 'P_b = Q\\left(\\sqrt{\\frac{2E_b}{N_0}}\\right) = \\frac{1}{2} \\text{erfc}\\left(\\sqrt{\\frac{E_b}{N_0}}\\right)',
        explanation: 'Exact bit error probability for coherent BPSK and QPSK passband transmission.'
      }
    ],
    importantDiagrams: [
      {
        title: 'QPSK Constellation & Decision Boundaries',
        description: 'Constellation diagram showing 4 signal points in 2-dimensional I-Q orthonormal basis with Gray coding (00, 01, 11, 10) and quadrant decision boundaries.',
        caption: 'Figure 7.1: QPSK transmits 2 bits per symbol while maintaining exact bit error probability of BPSK.'
      }
    ],
    shortcutsAndTricks: [
      'PCM Bandwidth Shortcut: PCM bit rate R_b = n · f_s. Minimum transmission bandwidth BW_min = R_b / 2 = n · f_s / 2. If sampled at Nyquist rate f_s = 2 f_m, then BW_min = n · f_m.',
      'AWGN Noise Power through Filter: Total noise power at output of filter H(f) is P_N = ∫_{-∞}^∞ (N_0 / 2) |H(f)|^2 df = N_0 · B_N, where B_N is noise equivalent bandwidth.',
      'DSB-SC vs Standard AM Power: Total power in standard AM is P_t = P_c (1 + μ^2 / 2). Efficiency η = μ^2 / (2 + μ^2). Maximum efficiency for 100% modulation (μ = 1) is only 33.3%!'
    ],
    commonMistakes: [
      'Mistake 1: Confusing one-sided and two-sided noise spectral density. In GATE, if noise PSD is given as N_0/2, it is TWO-SIDED. If given as N_0, it is ONE-SIDED.',
      'Mistake 2: Mixing cyclic frequency f (Hz) and angular frequency ω (rad/s) in Wiener-Khinchin theorem: S_XX(f) = ∫ R(τ) e^{-j 2π f τ} dτ requires no 1/(2π) prefactor, whereas S_XX(ω) requires careful scaling.'
    ],
    gateLevelPoints: [
      'GATE Trap: Shannon capacity limit as B → ∞ is NOT infinite! lim_{B→∞} C = (S/N_0) · log2(e) = 1.442 (S/N_0). This represents the ultimate power-limited capacity boundary.',
      'Hamming (7, 4) Code: n = 7, k = 4, parity bits = 3. Minimum distance d_min = 3, correcting exactly 1 bit error per block.'
    ],
    quickRevisionSummary: [
      'Capacity: C = B log2(1 + S/N). As B → ∞, C → 1.442 S/N0.',
      'Entropy: H(X) = -∑ p log2 p. Uniform M-ary: H = log2 M.',
      'PCM: SNR = 1.76 + 6.02n dB. Bit rate Rb = n fs.',
      'Matched Filter: h(t) = s*(T - t). Peak SNR = 2 Es / N0.',
      'BER: BPSK/QPSK Pb = Q(√(2Eb/N0)); BFSK Pb = Q(√(Eb/N0)). Carson: BW = 2(Δf + fm).'
    ],
    uploadedFiles: [
      {
        id: 'file-comm-pw',
        fileName: 'Communication_Systems_Notes_PW.pdf',
        fileType: 'PDF',
        size: '3.69 MB',
        subject: 'Communications',
        unit: 'Section 7: Communications',
        topic: 'Digital Communications & Info Theory',
        subtopic: 'Complete 89-page Master Textbook',
        title: 'Physics Wallah Communication Systems GATE Handbook',
        uploadDate: '2026-09-18',
        fileUrl: '/notes/Communication_Systems_Notes_PW.pdf'
      }
    ]
  },

  // SECTION 8: Electromagnetics Note
  {
    id: 'note-emft-101',
    topicId: 'top-emft-101',
    unitId: 'unit-emft-1',
    subjectId: 'subj-emft',
    title: 'Maxwell’s Equations, Plane Wave Propagation, Transmission Lines & Antenna Parameters',
    lastUpdated: '2026-09-19',
    topicIntroduction: 'Electromagnetics (EMFT) covers the physical wave dynamics governing high-frequency signals in modern electronics and communications. Central examination topics cover Maxwell’s four fundamental equations, dielectric and magnetic boundary conditions, uniform plane wave propagation in lossless and lossy media, wave polarization determination, skin depth and attenuation, transmission line equations with reflection coefficient Γ and VSWR, quarter-wave transformer matching, rectangular waveguide TE/TM cutoff modes, and basic antenna parameters (radiation resistance, directivity, effective aperture).',
    coreConcepts: [
      'Maxwell’s Four Equations: (1) Gauss’s Law for Electrostatics: ∇ · D = ρ_v; (2) Gauss’s Law for Magnetism: ∇ · B = 0; (3) Faraday’s Law of Induction: ∇ × E = -∂B/∂t; (4) Ampere-Maxwell Law: ∇ × H = J + ∂D/∂t (where ∂D/∂t is displacement current density).',
      'Electromagnetic Boundary Conditions: (1) Tangential E-field is continuous: E_{1t} = E_{2t}; (2) Tangential H-field discontinuity equals surface current: n̂ × (H_1 - H_2) = K (for dielectrics with K = 0, H_{1t} = H_{2t}); (3) Normal D-field discontinuity equals surface charge: D_{1n} - D_{2n} = ρ_s; (4) Normal B-field is continuous: B_{1n} = B_{2n}.',
      'Wave Propagation & Intrinsic Impedance: Propagation constant γ = α + jβ = √(jωμ(σ + jωε)). Lossless medium (σ = 0): α = 0, β = ω√(με), intrinsic impedance η = √(μ/ε) (approx 377 Ω or 120π Ω in free space). Good conductor (σ >> ωε): α = β = √(π f μ σ), skin depth δ = 1/α = 1 / √(π f μ σ).',
      'Wave Polarization: Determined by trajectory of the electric field vector E(z, t) in plane transverse to propagation: Linear (components in-phase or 180° out of phase), Circular (equal orthogonal amplitudes with ±90° phase difference), or Elliptical (general case).',
      'Transmission Line Equations & Reflection Coefficient: Characteristic impedance Z_0 = √((R + jωL)/(G + jωC)). For lossless line, Z_0 = √(L/C). Reflection coefficient at load: Γ_L = (Z_L - Z_0) / (Z_L + Z_0). Voltage Standing Wave Ratio: VSWR = (1 + |Γ|) / (1 - |Γ|), with 1 ≤ VSWR < ∞.',
      'Quarter-Wave Transformer & Impedance Inversion: Line of length l = λ/4 transforms load impedance to input impedance Z_in = Z_0^2 / Z_L. Used for impedance matching between two real impedances Z_in and Z_L by setting transformer impedance Z_0 = √(Z_in · Z_L).'
    ],
    importantDefinitions: [
      {
        term: 'Poynting Vector',
        definition: 'Represents instantaneous directional energy flux density of an electromagnetic wave: S = E × H (W/m²). Time-average power density for time-harmonic fields is P_avg = 0.5 · Re(E × H*).'
      },
      {
        term: 'Skin Depth (δ)',
        definition: 'The penetration depth at which the amplitude of an electromagnetic wave inside a conductor attenuates to 1/e (~36.8%) of its surface value: δ = 1 / √(π f μ σ).'
      },
      {
        term: 'Cutoff Frequency in Rectangular Waveguide',
        definition: 'The minimum frequency below which wave propagation cannot occur for TE_mn or TM_mn mode: f_{c,mn} = (c / 2) · √((m/a)^2 + (n/b)^2), where a and b are broad and narrow wall dimensions.'
      }
    ],
    detailedExplanation: [
      '1. Rectangular Waveguide Dominant Mode (TE_10):\nFor dimensions a > b, dominant mode with lowest cutoff frequency is TE_10: f_{c,10} = c / (2a). Guide wavelength λ_g = λ_0 / √(1 - (f_c/f)^2) > λ_0. Phase velocity v_p = c / √(1 - (f_c/f)^2) > c, while group velocity v_g = c · √(1 - (f_c/f)^2) < c, satisfying v_p · v_g = c^2.',
      '2. Antenna Radiation Properties & Directivity:\nHertzian Dipole (length dl << λ): Radiation resistance R_rad = 80π^2 (dl / λ)^2 Ω; Directivity D = 1.5 (1.76 dBi). Half-Wave Dipole (length l = λ/2): Radiation resistance R_rad ≈ 73 Ω; Directivity D = 1.64 (2.15 dBi). Effective aperture A_e = (λ^2 / 4π) · D.'
    ],
    importantFormulas: [
      {
        name: 'Maxwell’s Equations (Differential Form)',
        formula: '\\nabla \\cdot \\mathbf{D} = \\rho_v, \\quad \\nabla \\cdot \\mathbf{B} = 0, \\quad \\nabla \\times \\mathbf{E} = -\\frac{\\partial \\mathbf{B}}{\\partial t}, \\quad \\nabla \\times \\mathbf{H} = \\mathbf{J} + \\frac{\\partial \\mathbf{D}}{\\partial t}',
        explanation: 'Complete electrodynamic field equations in time-varying media.'
      },
      {
        name: 'Transmission Line Input Impedance Formula',
        formula: 'Z_{in}(l) = Z_0 \\left[\\frac{Z_L + j Z_0 \\tan(\\beta l)}{Z_0 + j Z_L \\tan(\\beta l)}\\right]',
        explanation: 'Input impedance looking into a lossless transmission line of length l terminated in Z_L.'
      },
      {
        name: 'Quarter-Wave Matching Formula',
        formula: 'Z_{0,\\text{match}} = \\sqrt{Z_{in} \\cdot Z_L}',
        explanation: 'Characteristic impedance of a λ/4 section required to match load Z_L to input Z_in.'
      },
      {
        name: 'Friis Transmission Equation',
        formula: '\\frac{P_r}{P_t} = G_t G_r \\left(\\frac{\\lambda}{4\\pi R}\\right)^2',
        explanation: 'Free-space path loss power transfer between transmitting and receiving antennas.'
      }
    ],
    importantDiagrams: [
      {
        title: 'Uniform Plane Wave E and H Field Alignment',
        description: 'Transverse Electromagnetic (TEM) wave propagating in +z direction with orthogonal E-field along x-axis and H-field along y-axis such that E × H points along z.',
        caption: 'Figure 8.1: In TEM waves, E, H, and propagation vector k form a right-handed orthogonal triad.'
      }
    ],
    shortcutsAndTricks: [
      'Short-Circuited Line (Z_L = 0): Z_in = j Z_0 tan(βl). For l < λ/4, acts purely as an inductor L_eq = (Z_0 tan(βl))/ω. For λ/4 < l < λ/2, acts as a capacitor!',
      'Open-Circuited Line (Z_L = ∞): Z_in = -j Z_0 cot(βl). For l < λ/4, acts purely as a capacitor C_eq = 1 / (ω Z_0 cot(βl)).',
      'Distance Between Voltage Maxima on Transmission Line: Separation between two adjacent V_max (or V_min) is exactly λ/2; separation between adjacent V_max and V_min is λ/4.'
    ],
    commonMistakes: [
      'Mistake 1: Confusing wave propagation velocity v_p with group velocity v_g in waveguides. Phase velocity can exceed speed of light c, but group velocity carrying information is strictly v_g ≤ c.',
      'Mistake 2: Forgetting that TM_00, TM_10, and TM_01 modes CANNOT exist in rectangular waveguides! The lowest order TM mode is TM_11.'
    ],
    gateLevelPoints: [
      'GATE Trap: Brewster Angle θ_B: Angle of incidence where reflection coefficient is ZERO. Occurs ONLY for parallel polarization: tan(θ_B) = √(ε_2 / ε_1). For perpendicular polarization, Brewster angle does not exist in non-magnetic media!',
      'Smith Chart: One complete rotation around the Smith chart (360° on chart) corresponds to a physical line length of λ/2 (180° electrical length).'
    ],
    quickRevisionSummary: [
      '∇·D = ρ, ∇·B = 0, ∇×E = -∂B/∂t, ∇×H = J + ∂D/∂t.',
      'Intrinsic impedance in vacuum η0 = 120π ≈ 377 Ω. Lossless: β = ω√(με).',
      'Skin depth δ = 1/√(π f μ σ). Good conductor: α = β = 1/δ.',
      'Reflection coeff Γ = (ZL - Z0)/(ZL + Z0). VSWR = (1 + |Γ|)/(1 - |Γ|).',
      'Quarter-wave: Zin = Z0² / ZL. TE10 cutoff: fc = c / (2a).'
    ],
    uploadedFiles: [
      {
        id: 'file-emft-pw',
        fileName: 'Electromagnetic_Field_Theory_Notes_PW.pdf',
        fileType: 'PDF',
        size: '10.41 MB',
        subject: 'Electromagnetics',
        unit: 'Section 8: Electromagnetics',
        topic: 'Maxwell’s Equations & Uniform Plane Waves',
        subtopic: 'Complete 105-page Master Textbook',
        title: 'Physics Wallah Electromagnetic Field Theory GATE Handbook',
        uploadDate: '2026-09-18',
        fileUrl: '/notes/Electromagnetic_Field_Theory_Notes_PW.pdf'
      }
    ]
  },

  // SECTION 0: General Aptitude Note
  {
    id: 'note-apt-101',
    topicId: 'top-apt-101',
    unitId: 'unit-apt-1',
    subjectId: 'subj-aptitude',
    title: 'Quantitative Aptitude, Numerical Computation, Probability & Spatial Reasoning',
    lastUpdated: '2026-09-19',
    topicIntroduction: 'General Aptitude carries 15 mandatory marks across all GATE disciplines, offering the highest return on study investment. Key question types focus on numerical computation (percentages, profit-loss, work-rate, speed-time-distance, ratios), permutations & combinations, combinatorial probability, data interpretation from multi-axis charts, English grammar/vocabulary deduction, and 2D/3D spatial reasoning (mirror reflections, pattern folding, and rotation).',
    coreConcepts: [
      'Percentages & Profit-Loss: Cost Price (CP), Selling Price (SP). Profit % = (SP - CP)/CP × 100%. Successive discounts d1 and d2 yield net discount D_net = d1 + d2 - (d1 · d2)/100%.',
      'Time, Speed and Distance (TSD): Distance = Speed × Time. Relative speed: moving in opposite directions -> S_rel = S1 + S2; moving in same direction -> S_rel = |S1 - S2|. Average speed for equal distance legs = 2·S1·S2 / (S1 + S2) (Harmonic Mean).',
      'Work and Rate: If A completes a work in D_A days and B in D_B days, their combined 1-day work is 1/D_A + 1/D_B, completing the job together in (D_A · D_B) / (D_A + D_B) days.',
      'Permutations & Combinations: Arrangements of r items from n: ^n P_r = n! / (n - r)!. Selections of r items from n: ^n C_r = n! / [r! (n - r)!]. Circular permutations of n distinct objects: (n - 1)!.',
      'Combinatorial Probability: P(A ∪ B) = P(A) + P(B) - P(A ∩ B). Conditional probability P(A|B) = P(A ∩ B) / P(B). Bayes’ Rule calculates posterior probabilities based on prior evidence.',
      'Spatial Reasoning Principles: 2D plane reflections across arbitrary mirrors, rotating cubes in 3D, unfolding cardboard nets of polyhedra, and identifying matching isometric views.'
    ],
    importantDefinitions: [
      {
        term: 'Harmonic Mean for Average Speed',
        definition: 'When equal distances are traversed at different speeds v1, v2, ..., vn, the true average speed is the Harmonic Mean of speeds, NOT the arithmetic mean: v_avg = n / (∑ 1/v_i).'
      },
      {
        term: 'Spatial Invariance',
        definition: 'Properties of shapes (angles, collinearity, side ratios) that remain invariant under rigid body translations and rotations in 2D and 3D space.'
      }
    ],
    detailedExplanation: [
      '1. Data Interpretation Mastery:\nExtracting trends from grouped bar charts, pie charts, and radar graphs. For percentage change questions: % Change = ((Final - Initial) / Initial) × 100%. When analyzing pie charts, total central angle 360° corresponds to 100% of total data value (1% = 3.6°).',
      '2. English Grammar & Critical Verbal Deductions:\nSubject-verb agreement, conditional clauses (Type 1, 2, 3), misplaced modifiers, and logical syllogisms (All A are B, Some B are C). Identifying unstated assumptions versus logically required deductions.'
    ],
    importantFormulas: [
      {
        name: 'Successive Percentage Change Formula',
        formula: '\\Delta\\% = a + b + \\frac{a \\cdot b}{100}\\%',
        explanation: 'Calculates net effect of two consecutive percentage changes a% and b%.'
      },
      {
        name: 'Average Speed for Equal Distance Segments',
        formula: 'v_{\\text{avg}} = \\frac{2 v_1 v_2}{v_1 + v_2}',
        explanation: 'Harmonic mean formula preventing arithmetic mean error on round-trip questions.'
      },
      {
        name: 'Combinations Formula',
        formula: '^n C_r = \\frac{n!}{r!(n - r)!}, \\quad ^n C_r = ^n C_{n-r}',
        explanation: 'Number of ways to choose r items out of n items without regard to order.'
      },
      {
        name: 'Bayes’ Posterior Probability Theorem',
        formula: 'P(A_i | B) = \\frac{P(B | A_i) P(A_i)}{\\sum_{j=1}^k P(B | A_j) P(A_j)}',
        explanation: 'Calculates reverse conditional probability from forward condition.'
      }
    ],
    importantDiagrams: [
      {
        title: 'Cube Unfolding Net to 3D Polyhedron',
        description: 'Standard T-shaped and cross-shaped 6-face cube unfoldings showing adjacent and opposing face relationships.',
        caption: 'Figure 0.1: Opposite faces in standard cube net are separated by exactly one intervening face.'
      }
    ],
    shortcutsAndTricks: [
      'Cube Opposite Faces Trick: In an unfolded cube net, faces situated in the same row or column separated by exactly one square are ALWAYS opposite each other in the folded 3D cube!',
      'Calendar Shortcut: Odd days count: Normal year = 1 odd day (365 = 52 weeks + 1 day); Leap year = 2 odd days. Century years are leap only if divisible by 400.',
      'Clock Angle Formula: Angle between hour hand and minute hand at H hours and M minutes is θ = |30·H - 5.5·M| degrees.'
    ],
    commonMistakes: [
      'Mistake 1: Computing average speed as (v1 + v2)/2 for a round trip. Arithmetic mean is ONLY valid if equal TIME is spent at each speed, NOT equal distance!',
      'Mistake 2: Confusing permutations (order matters) with combinations (order does not matter).'
    ],
    gateLevelPoints: [
      'GATE Aptitude Trap: In spatial reasoning paper folding questions, trace holes punched in folded corners backward step by step, reflecting about fold lines in reverse sequence.',
      'Vocabulary Questions: Look for contrast signal words (although, despite, whereas, however) to deduce opposite meanings in sentence completion.'
    ],
    quickRevisionSummary: [
      'Net % change = a + b + ab/100. Average speed = 2 v1 v2 / (v1 + v2).',
      'Work: Combined time = (A·B) / (A + B).',
      'nCr = n! / (r! (n - r)!). Clock angle = |30H - 5.5M|.',
      'Cube nets: 1 intervening square = opposite faces.',
      '15 Marks = 5 Qs of 1-mark + 5 Qs of 2-marks.'
    ],
    uploadedFiles: [
      {
        id: 'file-apt-pw',
        fileName: 'General_Aptitude_Notes_PW.pdf',
        fileType: 'PDF',
        size: '727 KB',
        subject: 'General Aptitude',
        unit: 'Section 0: General Aptitude',
        topic: 'Quantitative Aptitude & Numerical Reasoning',
        subtopic: 'Complete 28-page Master Textbook',
        title: 'Physics Wallah General Aptitude GATE Handbook',
        uploadDate: '2026-09-18',
        fileUrl: '/notes/General_Aptitude_Notes_PW.pdf'
      },
      {
        id: 'file-quant-pw',
        fileName: 'Quantitative_Aptitude_Handbook.pdf',
        fileType: 'PDF',
        size: '2.24 MB',
        subject: 'General Aptitude',
        unit: 'Section 0: General Aptitude',
        topic: 'Quantitative Aptitude & Formulas',
        subtopic: 'Complete Quantitative Formula Handbook',
        title: 'Quantitative Aptitude Comprehensive Handbook',
        uploadDate: '2026-09-18',
        fileUrl: '/notes/Quantitative_Aptitude_Handbook.pdf'
      }
    ]
  }
];
