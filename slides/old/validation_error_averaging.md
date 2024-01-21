## Validation Error Averaging

* Instead of a single split, we can split observations multiple times and compute
<br> $\mathrm{vMSE}_{d,\nu_1}, ..., \mathrm{vMSE}_{d,\nu_k}$
* Then we average the errors across splits (at each degree $d$):
<br> $\overline{\mathrm{vMSE}}_{d} := \frac{1}{k}\sum\limits_k{\mathrm{vMSE}_{d,\nu_k}}$

  * a better (unbiased) estimator of $\mathrm{vMSE}_{d}$, i.e. $\E~ \overline{\mathrm{vMSE}}_{d} = \mathrm{MSE}_{d}$
    * Averaging cancels out noise
  * So, every example is likely to be used in training and observation (at different splits)
* $\mathrm{vMSE}_{d}$ is improved with more splits
* More train examples reduce overfitting: $\uparrow n_\mathrm{T} \Rightarrow~ \downarrow \mathbb{V}_\nu[\mathrm{vMSE}_{d,\nu}]$