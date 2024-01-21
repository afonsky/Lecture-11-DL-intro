---
title: Basis Functions
---

# Basis Functions

* Polynomials and piecewise constant functions generalize as **basis functions**, 
<br> $y | x = \beta_0 + \sum\limits_{j=1}^{K}\textcolor{red}{\beta_j} b_j(x) + \epsilon$
	* Disadvantage: $b_j$ are specified in advance (supplied by scientist), not learned
  * Advantage: least squares estimation (i.e. minimizing MSE) still works
    * So, we can still use $p$-values for coefficients, $\mathrm{F}$-test for model’s significance, residual evaluation, etc.
* Polynomial regression: $b_j(x) := x^j$
  * It’s a sum of monomial functions
* Piecewise constant regression: $b_j(x) = I(c_j \leq X \leq c_{j+1})$
* **Regression splines**: 
	* Bases are interactions of polynomials with indicator functions

