# Piecewise Constant Regression

* It is a constant linear on **disjoint** intervals, but not overall linear
* It allows us to adopt a different constant function on disjoint intervals
	* Intervals are built from cutting the support into $K+1$ **bins** with $K$ **cutpoints**
* Consider predictor $X$ with range in $\R$ and cutpoints $c_1,...,c_K \in \R$
* $C_i(X) = I(c_i \leq X \leq c_{i+1})$, for $c_0 := -\infty, c_{K+1} := \infty$, $I()$  is an indicator function
	* For any $X$, only one of $C_0,...,C_K$ can be non-zero constant function
	* $\sum_i C_i(X) = 1$, i.e. a constant function $1$
* We use least squares to fit
<br>$y|x = \beta_0 + \beta_1 C_1(x) + ... + \beta_k C_k(x) + \epsilon$,

* Note:  $\beta_0 = \mathbb{E}[Y|C_0(X)]$; $C_0(x)$ is redundant because it is a linear combination of $C_1, ..., C_K$.

---

# Ex. Wage vs Age

* We identify cutpoints $c_1 = 35$, $c_2 = 50$, $c_3 = 65$ years of age
* Typically, we want cutpoints which mark change in distribution

<div class="grid grid-cols-[3fr,4fr]">
<div>
<br>

* At age $65$, many people go into retirement and have a change in income

* This is also noted from fewer observations after age $65$
* $c_1 = 35$ is difficult to justify and $C_0$ shows a poor fit to age $< 35$
* University graduates are likely to be spread out in the range $20-35$, so we might need several cutpoints in that range
</div>
<div>

  <figure>
    <img src="/ISLRv2_figure_7.2.png" style="width: 550px !important;">
    <figcaption style="color:#b3b3b3ff; font-size: 11px; position: relative; top: 10px; left: 350px;">Image source:
      <a href="https://hastie.su.domains/ISLR2/ISLRv2_website.pdf#page=301">ISLR Fig. 7.2</a>
    </figcaption>
  </figure>
</div>
</div>

---

# Ex. Wage $y$ vs Age $x$

* We fit **linear regression** by minimizing least squares (see <a href="https://hastie.su.domains/ISLR2/ISLRv2_website.pdf#page=71">ISLR p.61</a>):
<br> $\hat{\beta} := (\beta_0, \beta_1) := \mathrm{argmin}_b(y_i - \hat{y}(x_i |  b))^2$,
<br>
<br> where $\hat{y}(x | \beta) := \beta_0 + \sum\limits_{j=1:3}\beta_j C_j(x) = \beta_0 + \sum\limits_{j=1:4}\beta_j I(c_j \leq x \leq c_{j+1})$
	* Then the trained model is $\hat{y}(\cdot | \hat{\beta})$

* We fit **logistic regression** by maximizing the likelihood function (see <a href="https://hastie.su.domains/ISLR2/ISLRv2_website.pdf#page=145">ISLR p.135</a>):
<br> $\hat{\beta} := \mathrm{argmax}_\beta \ell(\beta | x)$
<br>
<br> $\ell(\beta | x) := \prod\limits_{i:y_i=1} p(x_i) \prod\limits_{j:y_j=0} (1 - p(x_j))$
<br>
<br> where $p(x | \beta) := \mathbb{P}[\mathrm{Wage} > 250 | \mathrm{Age} x, \beta] := \frac{e^{y(x | \beta)}}{1 + e^{y(x | \beta)}}$
<br>

* Then the trained model is $\hat{p}(\cdot | \hat{\beta})$