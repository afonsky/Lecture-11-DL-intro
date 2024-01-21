## Leave-One-Out Cross-Validation (LOOCV)

<div class="grid grid-cols-2">
<div>

* We create $n$ train/validation pairs of sets of obs.
  * Each train/validation pair has $n-1$ observations used in training
  * At each split only $1$ observation used for computing the validation error
* Thus, we compute LOOCV estimate:
<br> $\mathrm{CV}_{d,n} := \frac{1}{n}\sum\limits_{i=1}^{n}{\mathrm{vMSE}_{d,i}}$,
<br> where $\mathrm{MSE}_{d,i} := (y_i - \hat{y}_i)^2$
</div>
<div>
  <img src="/ISLRv2_figure_5.3.png" style="width: 500px;">
</div>
</div>

* Problems:
  * Since training sets are alike, trained models are alike
  * Fitting a model  times is expensive
    * For least squares linear and polynomial regressions, there is a single step solution:
    <br> $\mathrm{CV}_{d,n} := \frac{1}{n}\sum\limits_{i=1}^{n}{\frac{y_i - \hat{y}_i}{1-h_i}}$,
    where $h_i := \frac{1}{n} + \frac{(x_i - \bar{x})^2}{\sum_k{(x_k-\bar{x})^2}} \in [\frac{1}{n},1]$ is the leverage of the observation $i$.