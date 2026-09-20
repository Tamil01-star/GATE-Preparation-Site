# Complete GATE Formula Handbook: Engineering Mathematics
## Chapter-Wise & Topic-Wise Formula Reference

---

### Chapter 1: Linear Algebra
1. **Trace & Determinant Rules**:
   $$\sum_{i=1}^n \lambda_i = \text{Trace}(A) = \sum_{i=1}^n a_{ii}$$
   $$\prod_{i=1}^n \lambda_i = \det(A)$$
2. **2x2 Characteristic Equation Shortcut**:
   $$\lambda^2 - \text{Trace}(A)\lambda + \det(A) = 0$$
3. **Cayley-Hamilton Inverse Formula**:
   $$A^{-1} = -\frac{1}{c_0}\left[A^{n-1} + c_{n-1}A^{n-2} + \dots + c_1 I\right]$$
4. **Rank-Nullity Theorem**:
   $$\text{Rank}(A) + \text{Nullity}(A) = n \quad (\text{columns of } A)$$

---

### Chapter 2: Calculus & Vector Calculus
1. **Taylor Series Expansion around $x = a$**:
   $$f(x) = f(a) + f'(a)(x-a) + \frac{f''(a)}{2!}(x-a)^2 + \dots + \frac{f^{(n)}(a)}{n!}(x-a)^n + \dots$$
2. **Maxima & Minima for Two Variables**:
   $$r = f_{xx}, \quad s = f_{xy}, \quad t = f_{yy}, \quad \Delta = rt - s^2$$
   * If $\Delta > 0$ and $r > 0 \implies$ Local Minimum.
   * If $\Delta > 0$ and $r < 0 \implies$ Local Maximum.
   * If $\Delta < 0 \implies$ Saddle Point.
3. **Green's, Stokes' & Gauss Divergence Theorems**:
   * Gauss Divergence: $\iint_S \vec{F} \cdot \hat{n} \, dS = \iiint_V (\nabla \cdot \vec{F}) \, dV$
   * Stokes' Theorem: $\oint_C \vec{F} \cdot d\vec{r} = \iint_S (\nabla \times \vec{F}) \cdot \hat{n} \, dS$

---

### Chapter 3: Probability & Distributions
1. **Bayes' Theorem**:
   $$P(A_i | B) = \frac{P(B | A_i) P(A_i)}{\sum_{j=1}^m P(B | A_j) P(A_j)}$$
2. **Variance & Standard Deviation**:
   $$\text{Var}(X) = E[X^2] - (E[X])^2$$
3. **Poisson Distribution**:
   $$P(X = k) = \frac{\lambda^k e^{-\lambda}}{k!}, \quad E[X] = \text{Var}(X) = \lambda$$
4. **Normal (Gaussian) Distribution**:
   $$f(x) = \frac{1}{\sigma \sqrt{2\pi}} e^{-\frac{(x-\mu)^2}{2\sigma^2}}$$
