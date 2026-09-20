# Complete GATE Formula Handbook: Digital Circuits
## Organized Chapter-Wise & Topic-Wise according to Official GATE Syllabus

---

### Chapter 1: Number Systems & Boolean Algebra
1. **Range of Signed Numbers ($n$ bits)**:
   * Signed Magnitude: $-(2^{n-1}-1) \le N \le +(2^{n-1}-1)$
   * 1's Complement: $-(2^{n-1}-1) \le N \le +(2^{n-1}-1)$
   * 2's Complement: $-2^{n-1} \le N \le +(2^{n-1}-1)$
2. **Consensus Theorem**:
   $$AB + A'C + BC = AB + A'C$$
   $$(A + B)(A' + C)(B + C) = (A + B)(A' + C)$$
3. **De Morgan's Laws**:
   $$(A + B)' = A' \cdot B', \quad (A \cdot B)' = A' + B'$$

---

### Chapter 2: Combinational Logic
1. **Full Adder Logic**:
   $$\text{Sum} = A \oplus B \oplus C_{in}$$
   $$C_{out} = AB + BC_{in} + AC_{in} = AB + C_{in}(A \oplus B)$$
2. **Multiplexer Equation ($2^n:1$)**:
   $$Y = \sum_{k=0}^{2^n-1} m_k(S) \cdot I_k$$
3. **Carry Look-Ahead Generation & Propagation**:
   $$G_i = A_i B_i \quad (\text{Generate}), \quad P_i = A_i \oplus B_i \quad (\text{Propagate})$$
   $$C_{i+1} = G_i + P_i C_i$$

---

### Chapter 3: Sequential Logic Circuits
1. **Characteristic Equations**:
   * JK Flip-Flop: $Q_{next} = J Q' + K' Q$
   * D Flip-Flop: $Q_{next} = D$
   * T Flip-Flop: $Q_{next} = T \oplus Q$
   * SR Flip-Flop: $Q_{next} = S + R' Q \quad (\text{with } SR = 0)$
2. **Setup Time & Max Frequency**:
   $$T_{clk} \ge t_{cq} + t_{comb(max)} + t_{su} - t_{skew}$$
   $$f_{max} = \frac{1}{T_{clk(min)}}$$
3. **Hold Time Constraint**:
   $$t_{cq(min)} + t_{comb(min)} \ge t_{hold} + t_{skew}$$
4. **Counter States**:
   * Ring Counter: Modulo $N = n$
   * Johnson Counter: Modulo $N = 2n$

---

### Chapter 4: Data Converters (ADC & DAC)
1. **DAC Output Voltage**:
   $$V_{out} = \frac{V_{ref}}{2^n - 1} \times (\text{Decimal Input})$$
2. **ADC Comparator Count**:
   * Flash ADC: $2^n - 1$ comparators
   * SAR ADC Conversion Time: $n \cdot T_{clk}$
   * Dual-Slope Conversion Time (Worst Case): $2^{n+1} \cdot T_{clk}$
3. **Quantization Step Size & SNR**:
   $$\Delta = \frac{V_{FS}}{2^n}$$
   $$\text{SNR}_{max} = 6.02 n + 1.76 \text{ dB}$$
