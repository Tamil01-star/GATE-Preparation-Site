# GATE Preparation Handbook: Signals and Systems
## Unit 2: Continuous-Time Fourier Transform (CTFT) & Properties

---

### 1. Continuous-Time Fourier Transform Pair
For an aperiodic continuous-time signal $x(t)$:
* **Analysis Equation (Forward CTFT)**:
  $$X(\omega) = \int_{-\infty}^{\infty} x(t) e^{-j\omega t} \, dt$$
* **Synthesis Equation (Inverse CTFT)**:
  $$x(t) = \frac{1}{2\pi} \int_{-\infty}^{\infty} X(\omega) e^{j\omega t} \, d\omega = \int_{-\infty}^{\infty} X(f) e^{j 2\pi f t} \, df$$

---

### 2. Dirichlet Conditions for Existence
1. $x(t)$ is absolutely integrable: $\int_{-\infty}^{\infty} |x(t)| \, dt < \infty$.
2. $x(t)$ has a finite number of maxima and minima in any finite interval.
3. $x(t)$ has a finite number of finite discontinuities in any finite interval.

---

### 3. Core Theorems & Properties

| Property | Time Domain $x(t)$ | Frequency Domain $X(\omega)$ | Frequency Domain $X(f)$ |
| :--- | :--- | :--- | :--- |
| **Linearity** | $a x_1(t) + b x_2(t)$ | $a X_1(\omega) + b X_2(\omega)$ | $a X_1(f) + b X_2(f)$ |
| **Time Shifting** | $x(t - t_0)$ | $X(\omega) e^{-j\omega t_0}$ | $X(f) e^{-j 2\pi f t_0}$ |
| **Frequency Shifting (Modulation)** | $x(t) e^{j\omega_0 t}$ | $X(\omega - \omega_0)$ | $X(f - f_0)$ |
| **Time Scaling** | $x(at)$ ($a \ne 0$) | $\frac{1}{|a|} X\left(\frac{\omega}{a}\right)$ | $\frac{1}{|a|} X\left(\frac{f}{a}\right)$ |
| **Duality** | $X(t)$ | $2\pi x(-\omega)$ | $x(-f)$ |
| **Time Differentiation** | $\frac{d^n x(t)}{dt^n}$ | $(j\omega)^n X(\omega)$ | $(j 2\pi f)^n X(f)$ |
| **Frequency Differentiation** | $(-j t)^n x(t)$ | $\frac{d^n X(\omega)}{d\omega^n}$ | $\left(\frac{1}{-j 2\pi}\right)^n \frac{d^n X(f)}{df^n}$ |
| **Convolution** | $x(t) * h(t)$ | $X(\omega) H(\omega)$ | $X(f) H(f)$ |
| **Multiplication** | $x(t) y(t)$ | $\frac{1}{2\pi} [X(\omega) * Y(\omega)]$ | $X(f) * Y(f)$ |

---

### 4. Parseval’s Energy Theorem
Total signal energy $E$ is invariant under Fourier transformation:
$$E = \int_{-\infty}^{\infty} |x(t)|^2 \, dt = \frac{1}{2\pi}\int_{-\infty}^{\infty} |X(\omega)|^2 \, d\omega = \int_{-\infty}^{\infty} |X(f)|^2 \, df$$

---

### 5. Standard GATE Transform Pairs
1. **Rectangular Pulse to Sinc**:
   $$\text{rect}\left(\frac{t}{T}\right) \xleftrightarrow{\mathcal{F}} T \cdot \text{sinc}\left(\frac{\omega T}{2\pi}\right) = T \frac{\sin(\omega T / 2)}{\omega T / 2}$$
2. **Sinc Pulse to Rectangular Spectrum (via Duality)**:
   $$2 W \cdot \text{sinc}(2 W t) \xleftrightarrow{\mathcal{F}} \text{rect}\left(\frac{f}{2W}\right) = \text{rect}\left(\frac{\omega}{4\pi W}\right)$$
3. **Dirac Delta & DC**:
   $$\delta(t) \xleftrightarrow{\mathcal{F}} 1, \quad 1 \xleftrightarrow{\mathcal{F}} 2\pi \delta(\omega) = \delta(f)$$
4. **Causal Exponential**:
   $$e^{-at} u(t) \quad (a > 0) \xleftrightarrow{\mathcal{F}} \frac{1}{a + j\omega}$$
   $$t e^{-at} u(t) \quad (a > 0) \xleftrightarrow{\mathcal{F}} \frac{1}{(a + j\omega)^2}$$
