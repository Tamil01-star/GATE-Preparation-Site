# GATE Preparation Handbook: Engineering Mathematics
## Unit 1: Linear Algebra & Matrix Spectral Theory

---

### 1. Matrix Invariants & Eigenvalues
For any square matrix $A_{n \times n}$, a non-zero vector $X \in \mathbb{C}^n$ is an eigenvector with scalar eigenvalue $\lambda$ if:
$$A X = \lambda X \iff (A - \lambda I) X = 0$$

Non-trivial solutions exist if and only if the characteristic determinant vanishes:
$$P(\lambda) = \det(A - \lambda I) = 0$$

---

### 2. Spectral Properties & Shortcuts
1. **Trace Invariant**:
   $$\sum_{i=1}^n \lambda_i = \text{Trace}(A) = \sum_{i=1}^n a_{ii}$$
2. **Determinant Invariant**:
   $$\prod_{i=1}^n \lambda_i = \det(A)$$
3. **Special Matrix Eigenvalues**:
   * **Real Symmetric Matrix** ($A^T = A$): All eigenvalues are strictly **real**; eigenvectors corresponding to distinct eigenvalues are mutually orthogonal.
   * **Skew-Symmetric Matrix** ($A^T = -A$): Eigenvalues are either **purely imaginary** ($\pm i\beta$) or **zero**.
   * **Orthogonal Matrix** ($A^T A = I$) / **Unitary Matrix** ($A^H A = I$): Eigenvalues lie on the unit circle in the complex plane, $|\lambda| = 1$.
   * **Idempotent Matrix** ($A^2 = A$): Eigenvalues can ONLY be $0$ or $1$.
   * **Nilpotent Matrix** ($A^k = 0$): All eigenvalues are identically $0$.

---

### 3. Cayley-Hamilton Theorem & Applications
> **Theorem**: Every square matrix satisfies its own characteristic polynomial equation.

If $P(\lambda) = \lambda^n + c_{n-1}\lambda^{n-1} + \dots + c_1\lambda + c_0 = 0$, then:
$$A^n + c_{n-1}A^{n-1} + \dots + c_1 A + c_0 I = [0]$$

#### Practical Applications:
1. **Computing Matrix Inverse**:
   Multiplying by $A^{-1}$ (for $\det(A) \ne 0$):
   $$A^{-1} = -\frac{1}{c_0}\left[A^{n-1} + c_{n-1}A^{n-2} + \dots + c_1 I\right]$$
2. **Evaluating Higher Matrix Powers $A^m$ ($m \gg n$)**:
   Express $\lambda^m = Q(\lambda) P(\lambda) + R(\lambda)$, where $\text{deg}(R) < n$.
   Since $P(A) = [0]$, we have:
   $$A^m = R(A)$$

---

### 4. Rank-Nullity Theorem & Solvability of Linear Systems
$$AX = B$$
* If $\text{Rank}(A) = \text{Rank}(A|B) = n$ (number of variables) $\implies$ **Unique Solution**.
* If $\text{Rank}(A) = \text{Rank}(A|B) < n \implies$ **Infinitely Many Solutions** with $(n - \text{Rank})$ free variables.
* If $\text{Rank}(A) < \text{Rank}(A|B) \implies$ **Inconsistent (No Solution)**.
* Homogeneous system $AX = 0$ always has trivial solution $X = 0$. Non-trivial solutions exist iff $\det(A) = 0 \iff \text{Rank}(A) < n$.
