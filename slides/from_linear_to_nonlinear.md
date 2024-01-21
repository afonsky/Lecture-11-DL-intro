---
title: From Linear to Nonlinear
---

# From Linear to Nonlinear

* A linear model is simple, easy to explain, easy to fit, easy to evaluate
* It can still capture **linearized** non-linear effect with:
  * **Polynomial regression**: adds monomials to the model: $x, x^2, x^3, ..., x^d$
  * **Piecewise constant regression** on $K+1$ intervals with $K$ cutpoints
  * **Regression splines**: piecewise polynomials on $K+1$ intervals 
  * **Smoothing splines**: splines with a smoothness penalty on  intervals 
  * **Local regression**: overlapping splines
  * **Generalized additive models (GAM)**: any of the above for multiple predictors

<!--
* Poly. Reg is in fact the change of the representation of the predictor's space
* PCR is composed from constant segments
-->
