# Complete GATE Formula Handbook: Signals and Systems
## Chapter-Wise & Topic-Wise Formula Reference

---

### Chapter 1: Continuous & Discrete-Time LTI Systems
1. **Continuous-Time Convolution Integral**:
   $$y(t) = x(t) * h(t) = \int_{-\infty}^{\infty} x(\tau) h(t - \tau) \, d\tau$$
2. **Discrete-Time Convolution Sum**:
   $$y[n] = x[n] * h[n] = \sum_{k=-\infty}^{\infty} x[k] h[n - k]$$
3. **LTI System Stability**:
   * Continuous-Time: $\int_{-\infty}^{\infty} |h(t)| \, dt < \infty$ (BIBO Stable)
   * Discrete-Time: $\sum_{n=-\infty}^{\infty} |h[n]| < \infty$ (BIBO Stable)

---

### Chapter 2: Continuous-Time Fourier Transform (CTFT)
1. **Synthesis and Analysis**:
   $$X(\omega) = \int_{-\infty}^{\infty} x(t) e^{-j\omega t} \, dt, \quad x(t) = \frac{1}{2\pi}\int_{-\infty}^{\infty} X(\omega) e^{j\omega t} \, d\omega$$
2. **Parseval's Relation**:
   $$E = \int_{-\infty}^{\infty} |x(t)|^2 \, dt = \frac{1}{2\pi} \int_{-\infty}^{\infty} |X(\omega)|^2 \, d\omega = \int_{-\infty}^{\infty} |X(f)|^2 \, df$$
3. **Duality Theorem**:
   $$x(t) \xleftrightarrow{\mathcal{F}} X(\omega) \implies X(t) \xleftrightarrow{\mathcal{F}} 2\pi x(-\omega)$$

---

### Chapter 3: Laplace and Z-Transforms
1. **Unilateral & Bilateral Laplace Transform**:
   $$X(s) = \int_{-\infty}^{\infty} x(t) e^{-st} \, dt, \quad s = \sigma + j\omega$$
   * For causal signal $x(t) = e^{-at}u(t)$: $X(s) = \frac{1}{s+a}$, ROC: $\text{Re}(s) > -a$
   * For anti-causal signal $x(t) = -e^{-at}u(-t)$: $X(s) = \frac{1}{s+a}$, ROC: $\text{Re}(s) < -a$
2. **Z-Transform**:
   $$X(z) = \sum_{n=-\infty}^{\infty} x[n] z^{-n}, \quad z = r e^{j\omega}$$
   * For $a^n u[n]$: $X(z) = \frac{1}{1 - a z^{-1}} = \frac{z}{z - a}$, ROC: $|z| > |a|$
   * For $-a^n u[-n-1]$: $X(z) = \frac{z}{z - a}$, ROC: $|z| < |a|$
3. **Initial and Final Value Theorems (Causal Signals)**:
   * Laplace: $x(0^+) = \lim_{s \to \infty} s X(s)$, $\lim_{t \to \infty} x(t) = \lim_{s \to 0} s X(s)$ (poles in LHS of $s$-plane)
   * Z-Transform: $x[0] = \lim_{z \to \infty} X(z)$, $\lim_{n \to \infty} x[n] = \lim_{z \to 1} (z-1) X(z)$ (poles inside unit circle)
