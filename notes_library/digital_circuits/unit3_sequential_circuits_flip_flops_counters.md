# GATE Preparation Handbook: Digital Circuits
## Unit 3: Sequential Logic Circuits & Timing Analysis

---

### 1. Topic Introduction
Sequential circuits form the backbone of modern digital processors and state machines. Unlike combinational circuits where outputs are purely memoryless instantaneous functions of present inputs, sequential logic outputs depend simultaneously on:
1. Current primary inputs
2. History of past events stored within internal memory cells (Latches & Flip-Flops).

Understanding excitation tables, characteristic equations, timing constraints (Setup & Hold times), metastability, and synchronous counter synthesis is essential for GATE ECE/EE/CS.

---

### 2. Core Concepts
* **Bistable Multivibrator**: A cross-coupled circuit exhibiting two distinct stable states (Logic 0 and Logic 1) capable of storing 1 bit of information indefinitely while powered.
* **Level-Triggering vs. Edge-Triggering**:
  * *Latches* respond continuously during the active level (transparent while ENABLE = 1).
  * *Flip-Flops* capture data strictly on instantaneous voltage transitions (rising or falling clock edges).
* **Race-Around Condition**:
  * In a level-triggered JK flip-flop with $J = 1, K = 1$, if clock pulse width $t_p > t_{pd}$ (propagation delay), the output toggles repeatedly and unpredictably during the high clock interval.
  * *Cure*: Master-Slave JK architecture or Edge-Triggered propagation control.

---

### 3. Characteristic Equations & Truth Tables

| Flip-Flop | Characteristic Equation | Next State $Q_{n+1}$ Function |
| :--- | :--- | :--- |
| **SR** | $Q_{n+1} = S + R'Q_n$ | Valid only when $S \cdot R = 0$ |
| **JK** | $Q_{n+1} = JQ'_n + K'Q_n$ | Toggles at $J = K = 1$ |
| **D** | $Q_{n+1} = D$ | Delay / Storage element |
| **T** | $Q_{n+1} = T \oplus Q_n$ | Toggles when $T = 1$; Holds when $T = 0$ |

---

### 4. Excitation Tables (Crucial for Counter & State Machine Design)

| Transition $Q_n \to Q_{n+1}$ | S | R | J | K | D | T |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| $0 \to 0$ | 0 | X | 0 | X | 0 | 0 |
| $0 \to 1$ | 1 | 0 | 1 | X | 1 | 1 |
| $1 \to 0$ | 0 | 1 | X | 1 | 0 | 1 |
| $1 \to 1$ | X | 0 | X | 0 | 1 | 0 |

---

### 5. Static Timing Constraints & Maximum Clock Frequency

In synchronous register-to-register paths:
1. **Setup Time Requirement ($t_{su}$)**:
   Data input must stabilize before the active capturing clock edge:
   $$T_{clk} + t_{skew} \ge t_{cq} + t_{comb(max)} + t_{su}$$
   $$\implies f_{max} = \frac{1}{T_{clk(min)}} = \frac{1}{t_{cq} + t_{comb(max)} + t_{su} - t_{skew}}$$

2. **Hold Time Requirement ($t_{hold}$)**:
   Data input must remain stable after the active capturing clock edge:
   $$t_{cq(min)} + t_{comb(min)} \ge t_{hold} + t_{skew}$$
   *Notice: Hold time is completely independent of the clock frequency $f_{clk}$! Slowing down the clock CANNOT fix a hold-time violation.*

---

### 6. Counters & Modulus Formulas
* **Asynchronous (Ripple) Counter**:
  * Overall delay across $n$ stages: $t_{delay} = n \cdot t_{pd}$
  * Maximum counting frequency: $f_{max} \le \frac{1}{n \cdot t_{pd}}$
* **Ring Counter**:
  * Uses $n$ flip-flops with one-hot circulation.
  * Modulus $N = n$ valid states; Unused states = $2^n - n$.
* **Johnson (Twisted Ring) Counter**:
  * Inverted feedback $D_1 = Q_n'$.
  * Modulus $N = 2n$ valid states; Unused states = $2^n - 2n$.

---

### 7. Common Exam Pitfalls
1. Forgetting that positive clock skew ($t_{skew} > 0$) helps setup timing but severely harms hold timing.
2. Interchanging $J$ and $K$ don't-care conditions during counter synthesis.
3. Overlooking glitch states in asynchronous reset lines (e.g. Mod-6 counter resetting at 0110).
