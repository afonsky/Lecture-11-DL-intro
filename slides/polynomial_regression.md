# Polynomial Regression

* Consider a simple linear regression (SLR) $y|x = \beta_0 + \beta_1 x + \epsilon$
* We can add **monomials** of $x$ to derive a polynomial function of degree $d$:
<br>$y|x = \beta_0 + \beta_1 x + \beta_2 x^2 + ... + \beta_d x^d + \epsilon$,

<div class="grid grid-cols-[3fr,4fr]">
<div>
<br>

where these $\beta_i$ are different from those above
<br>typically, use $d \leq 4$ to avoid overfitting

* $2\times \mathrm{SE}$ is approximately
<br> a $95\%$ confidence interval (CI)
* $99\%$ CI would be wider
* E.g. Wage (in $000) vs. Age:
<br> $\mathbb{P}[\mathrm{Wage > 250 | Age}] = \frac{e^{y|x}}{1 + e^{y|x}}$
</div>
<div>

  <figure>
    <img src="/ISLRv2_figure_7.1.png" style="width: 550px !important;">
    <figcaption style="color:#b3b3b3ff; font-size: 11px; position: relative; top: 10px; left: 350px;">Image source:
      <a href="https://hastie.su.domains/ISLR2/ISLRv2_website.pdf#page=299">ISLR Fig. 7.1</a>
    </figcaption>
  </figure>

  Linear and logistic regressions with $d=4$ with the <br> $2\times$ estimated standard error (SE) of $\hat{f}$ at every point
</div>
</div>


---

# Polynomial Regression: Pros and Cons

* **Pros**:
  * It captures a non-linear (polynomial) relation between input and output
* **Cons**:
  * A single polynomial imposes a **constraint on global structure**
    * I.e. it can’t control its flexibility on an interval in the support
    * In some situations, this can be a desirable behavior for a model
