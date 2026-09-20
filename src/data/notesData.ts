import { Note } from '../types';

export const INITIAL_NOTES: Note[] = [
  {
    id: 'note-dig-301',
    topicId: 'top-dig-301',
    unitId: 'unit-dig-3',
    subjectId: 'subj-digital',
    title: 'Latches, Flip-Flops & Conversions (Complete Digital Notes)',
    lastUpdated: '2026-09-15',
    topicIntroduction: 'Sequential circuits are digital circuits whose output at any instant depends not only on the present input but also on the past outputs (history/memory). The fundamental building blocks of sequential circuits are memory elements known as Latches (level-sensitive) and Flip-Flops (edge-sensitive bistable multivibrators). Understanding their characteristic equations, excitation tables, race-around phenomena, and universal conversion procedures is vital for GATE ECE/EE/CS.',
    coreConcepts: [
      'Bistability: A circuit possessing two stable states (Logic 0 and Logic 1) capable of storing 1 bit of information.',
      'Level vs Edge Triggering: Latches are transparent whenever the enable signal is active (level-sensitive), leading to potential glitches. Flip-Flops sample inputs strictly on transition edges (positive or negative clock edge).',
      'Race-Around Condition: In a level-triggered JK flip-flop, when J=1, K=1 and clock pulse width tp > propagation delay td, the output toggles uncontrollably during the clock pulse. Cured by Master-Slave configuration or Edge-Triggering.',
      'Characteristic Equations: Mathematical Boolean expressions relating the next state Q(t+1) or Q_next to the present state Q(t) and present inputs.',
      'Excitation Tables: The converse of characteristic tables—specifying the required inputs (J, K or S, R or D or T) to effect a desired state transition from Q(t) to Q(t+1).'
    ],
    importantDefinitions: [
      {
        term: 'Propagation Delay (t_pd or t_cq)',
        definition: 'The time elapsed from the active clock edge to the moment the output Q transitions to its valid stable state.'
      },
      {
        term: 'Setup Time (t_su)',
        definition: 'The minimum duration of time the data input (D, J, K, etc.) must remain steady before the arrival of the active clock edge.'
      },
      {
        term: 'Hold Time (t_h)',
        definition: 'The minimum duration of time the data input must remain steady after the arrival of the active clock edge.'
      },
      {
        term: 'Master-Slave Flip-Flop',
        definition: 'A two-stage flip-flop configuration where the Master latch responds on one clock level (e.g. High) and the Slave latch captures data on the complementary clock level (e.g. Low), isolating input transitions from the final output.'
      },
      {
        term: 'Metastability',
        definition: 'An unstable intermediate voltage state (neither valid 0 nor valid 1) occurring when setup or hold time requirements are violated, persisting for an indeterminate time.'
      }
    ],
    detailedExplanation: [
      '1. SR Latch & Flip-Flop Analysis:\nConstructed using cross-coupled NOR or NAND gates. For NOR implementation: R=1 resets Q to 0, S=1 sets Q to 1. The input combination S=1, R=1 produces Q=0 and Q_bar=0 simultaneously, violating the complementary property Q_bar = NOT(Q); upon simultaneous release, a race condition occurs. Hence S=R=1 is FORBIDDEN. Characteristic equation: Q(n+1) = S + R_bar * Q(n), with constraint S * R = 0.',
      '2. JK Flip-Flop Elimination of Invalid State:\nIn JK flip-flops, feedback paths from outputs to input AND gates eliminate the indeterminate state. When J=1, K=1, the circuit toggles: Q(n+1) = Q_bar(n). Characteristic equation: Q(n+1) = J * Q_bar(n) + K_bar * Q(n).',
      '3. D Flip-Flop (Delay / Data Storage):\nObtained by setting K = J_bar in a JK flip-flop or R = S_bar in an SR flip-flop. Whatever appears at D is transferred to output Q at the next active clock edge. Characteristic equation: Q(n+1) = D.',
      '4. T Flip-Flop (Toggle):\nObtained by tying J and K together (J = K = T). When T=0, no change (Q(n+1) = Q(n)); when T=1, toggle (Q(n+1) = Q_bar(n)). Characteristic equation: Q(n+1) = T XOR Q(n).',
      '5. Systematic Flip-Flop Conversion Algorithm:\nStep 1: Write down the characteristic table of the target (desired) flip-flop.\nStep 2: Alongside each desired transition Q(n) -> Q(n+1), write down the required inputs for the available (source) flip-flop from its excitation table.\nStep 3: Plot K-maps for the source inputs in terms of target inputs and present state Q(n).\nStep 4: Obtain simplified boolean expressions and synthesize the combinational glue logic.'
    ],
    importantFormulas: [
      {
        name: 'JK Characteristic Equation',
        formula: 'Q(n+1) = J·Q\'(n) + K\'·Q(n)',
        explanation: 'Computes next state for any given J, K inputs and present state Q.'
      },
      {
        name: 'SR Characteristic Equation',
        formula: 'Q(n+1) = S + R\'·Q(n)  [subject to S·R = 0]',
        explanation: 'Predicts SR latch state transitions with forbidden condition prevention.'
      },
      {
        name: 'D Characteristic Equation',
        formula: 'Q(n+1) = D',
        explanation: 'Transparent next state assignment for delay flip-flops.'
      },
      {
        name: 'T Characteristic Equation',
        formula: 'Q(n+1) = T ⊕ Q(n) = T·Q\'(n) + T\'·Q(n)',
        explanation: 'XOR relationship defining toggle behavior.'
      },
      {
        name: 'Maximum Clock Frequency (T_clk Constraint)',
        formula: 'T_clk ≥ t_cq + t_comb + t_su',
        explanation: 'Clock period must exceed sum of clock-to-Q delay, combinational logic delay, and destination setup time.'
      },
      {
        name: 'Hold Time Violation Condition',
        formula: 't_cq + t_comb(min) ≥ t_hold',
        explanation: 'Hold time safety margin independent of clock period. If violated, must insert delay buffers.'
      }
    ],
    importantDiagrams: [
      {
        title: 'Master-Slave JK Flip-Flop Architecture',
        description: 'Level-isolated master and slave stages driven by complementary clock pulses to eradicate race-around.',
        caption: 'Figure 3.1: Master captures input during CLK=1; Slave delivers output to pins when CLK falls to 0.'
      },
      {
        title: 'Flip-Flop Conversion Flowchart',
        description: 'Target truth table -> Source excitation requirements -> K-map logic minimization -> Hardware schematic.',
        caption: 'Figure 3.2: Universal 4-step synthesis pipeline for converting between SR, JK, D, and T flip-flops.'
      }
    ],
    shortcutsAndTricks: [
      'T Flip-Flop Frequency Divider: A T flip-flop with T=1 halves the clock frequency (f_out = f_clk / 2) with exact 50% duty cycle, irrespective of input clock duty cycle.',
      'D to T Conversion Shortcut: To make a D flip-flop behave as a T flip-flop, simply feed D = T ⊕ Q.',
      'JK to D Conversion Shortcut: Set J = D and K = D\'.',
      'SR to JK Conversion: Set S = J·Q\' and R = K·Q.',
      'Clock Period calculation tip: In GATE questions asking for maximum operating clock frequency f_max, always find critical path delay = max(t_cq) + max(t_comb) + t_su, then f_max = 1 / T_clk_min.'
    ],
    commonMistakes: [
      'Mistake 1: Confusing Level-triggered Latches with Edge-triggered Flip-Flops in timing diagrams.',
      'Mistake 2: Forgetting the forbidden condition S=1, R=1 in SR latches and mistakenly assuming Q=1.',
      'Mistake 3: Inverting the Excitation Table for JK (Don’t-care positions): Transition 0->0 requires J=0, K=X; Transition 1->1 requires J=X, K=0; Transition 0->1 requires J=1, K=X; Transition 1->0 requires J=X, K=1.',
      'Mistake 4: Overlooking hold-time violations. Notice that increasing clock period T_clk CANNOT fix a hold-time violation; hold time is solely a function of t_cq + t_comb(min) vs t_hold.'
    ],
    gateLevelPoints: [
      'GATE 2024 Trap: Setup time violation can be fixed by reducing the clock frequency (increasing clock period), but hold time violation can NEVER be fixed by changing clock frequency.',
      'GATE Standard: In asynchronous ripple counters with n flip-flops, total propagation delay is n · t_pd. For proper counting without missing states, T_clk ≥ n · t_pd + t_su.',
      'Metastability resolution time equation: t_r = τ · ln(V_0 / V_intermediate). MTBF (Mean Time Between Failures) scales exponentially with synchronization latency.'
    ],
    quickRevisionSummary: [
      'Latch = Level sensitive; Flip-Flop = Edge sensitive.',
      'Race-around occurs in JK when J=1, K=1 and t_p > t_pd. Solution: Master-Slave or Edge Trigger.',
      'Equations: JK: Q+ = JQ\' + K\'Q; T: Q+ = T ⊕ Q; D: Q+ = D; SR: Q+ = S + R\'Q (SR=0).',
      'Setup time: Data stable BEFORE clock edge; Hold time: Data stable AFTER clock edge.',
      'f_max = 1 / (t_cq + t_comb_max + t_su). Minimum contamination delay: t_cq_min + t_comb_min ≥ t_hold.'
    ],
    uploadedFiles: [
      {
        id: 'file-jk-ff-notes',
        fileName: 'JK_FlipFlop_and_Timing_Analysis.pdf',
        fileType: 'PDF',
        size: '1.8 MB',
        subject: 'Digital Circuits',
        unit: 'Unit 3: Sequential Logic Circuits',
        topic: 'Latches and Flip-Flops',
        subtopic: 'Timing Parameters & Conversions',
        title: 'Detailed Handwritten & Schematic Flip-Flop Synthesis Notes',
        uploadDate: '2026-08-20',
        fileUrl: '/notes_library/digital_circuits/unit3_sequential_circuits_flip_flops_counters.md'
      }
    ]
  },
  {
    id: 'note-math-103',
    topicId: 'top-math-103',
    unitId: 'unit-math-1',
    subjectId: 'subj-math',
    title: 'Eigenvalues, Eigenvectors & Cayley-Hamilton Theorem',
    lastUpdated: '2026-09-12',
    topicIntroduction: 'Eigenvalues and eigenvectors represent fundamental spectral invariants of linear transformations and square matrices. In GATE, 2-3 marks are almost guaranteed every year from this single topic across Linear Algebra. Key themes tested include properties of eigenvalues for special matrices (Symmetric, Skew-symmetric, Orthogonal, Unitary), trace/determinant theorems, Cayley-Hamilton application to evaluate matrix polynomials and inverses, and diagonalizability conditions.',
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
      },
      {
        name: 'Rank-Nullity Theorem',
        formula: 'Rank(A) + Nullity(A) = n',
        explanation: 'For an n x n matrix, Nullity is the number of linearly independent solutions to AX = 0.'
      }
    ],
    importantDiagrams: [
      {
        title: 'Eigenvector Invariant Axis Transformation',
        description: 'Geometric depiction showing that linear transformation A stretches vector X along its existing axis by factor λ without rotation.',
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
      'Mistake 2: Assuming every square matrix is diagonalizable. Matrices with repeated eigenvalues where Geometric Multiplicity < Algebraic Multiplicity (e.g. Jordan blocks) cannot be diagonalized.',
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
    ]
  },
  {
    id: 'note-sig-201',
    topicId: 'top-sig-201',
    unitId: 'unit-sig-2',
    subjectId: 'subj-signals',
    title: 'Continuous-Time Fourier Transform (CTFT) & Properties',
    lastUpdated: '2026-09-10',
    topicIntroduction: 'The Continuous-Time Fourier Transform (CTFT) decomposes arbitrary finite-energy continuous-time signals into a continuum of complex sinusoidal frequency components. In GATE ECE/EE, Fourier transform questions test symmetry properties, duality, convolution in time mapping to multiplication in frequency, energy computation via Parseval’s theorem, and transform pairs of standard signals like sinc, rect, and exponential pulses.',
    coreConcepts: [
      'Fourier Transform Pair: Forward transform X(ω) = ∫ x(t) e^{-jωt} dt from -∞ to +∞; Inverse transform x(t) = (1/2π) ∫ X(ω) e^{jωt} dω.',
      'Dirichlet Conditions for Existence: Absolute integrability ∫ |x(t)| dt < ∞, finite number of maxima and minima in any finite interval, finite number of discontinuities.',
      'Symmetry Relations: If x(t) is real, X(-ω) = X*(ω) (Conjugate symmetry). If real and even -> X(ω) is purely real and even. If real and odd -> X(ω) is purely imaginary and odd.',
      'Duality Theorem: If x(t) ↔ X(ω), then X(t) ↔ 2π x(-ω). Essential for finding transform of sinc pulses from rect pulses.',
      'Parseval’s Energy Theorem: Total energy E = ∫ |x(t)|^2 dt = (1/2π) ∫ |X(ω)|^2 dω = ∫ |X(f)|^2 df.'
    ],
    importantDefinitions: [
      {
        term: 'Energy Spectral Density (ESD)',
        definition: 'Defined as S_xx(ω) = |X(ω)|^2. Represents distribution of total signal energy across continuous frequency ω.'
      },
      {
        term: 'Frequency Response H(jω)',
        definition: 'The Fourier transform of the impulse response h(t) of an LTI system: H(jω) = Y(jω) / X(jω).'
      }
    ],
    detailedExplanation: [
      '1. Rectangular Pulse and Sinc Transform Pair:\nFor a gate pulse x(t) = rect(t/T) = 1 for |t| ≤ T/2, its CTFT is X(ω) = T·sinc(ωT / 2π) = T·sin(ωT/2) / (ωT/2). By duality, a sinc pulse in time corresponds to a strictly band-limited rectangular spectrum in frequency.',
      '2. Modulation (Frequency Shifting):\nx(t)·e^{jω_0 t} ↔ X(ω - ω_0). For sinusoidal carrier: x(t)·cos(ω_0 t) ↔ 0.5[X(ω - ω_0) + X(ω + ω_0)].',
      '3. Differentiation in Time:\nd^n x(t) / dt^n ↔ (jω)^n · X(ω). Multiplication by t in time corresponds to differentiation in frequency: -j·t·x(t) ↔ dX(ω)/dω.'
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
        formula: 'E = ∫_{-∞}^{∞} |x(t)|² dt = \\frac{1}{2π}∫_{-∞}^{∞} |X(ω)|² dω',
        explanation: 'Conservation of signal energy between time and frequency domains.'
      },
      {
        name: 'Convolution Property',
        formula: 'x(t) * h(t) ↔ X(ω) · H(ω)',
        explanation: 'Linear convolution in time is equivalent to algebraic multiplication in frequency.'
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
      'Mistake 2: Missing the sign flip in duality: X(t) transforms to 2π·x(-ω), not 2π·x(ω). If x(t) is not even, omitting minus sign yields wrong result.'
    ],
    gateLevelPoints: [
      'GATE Favourite: Evaluating ∫ sinc^2(kt) dt by applying Parseval theorem to a rectangular pulse. E = T.',
      'Signum function sgn(t) has CTFT 2/(jω). Unit step u(t) = 0.5 sgn(t) + 0.5 has CTFT 1/(jω) + π·δ(ω).'
    ],
    quickRevisionSummary: [
      'x(t) ↔ X(ω). Area under x(t) = X(0); Area under X(ω) = 2π·x(0).',
      'Time shift: x(t - t_0) ↔ X(ω)·e^{-jω t_0}. Freq shift: x(t)·e^{jω_0 t} ↔ X(ω - ω_0).',
      'Convolution: x(t) * h(t) ↔ X(ω)H(ω). Multiplication: x(t)y(t) ↔ (1/2π)[X(ω) * Y(ω)].',
      'Parseval: ∫ |x(t)|² dt = (1/2π) ∫ |X(ω)|² dω.'
    ]
  }
];
