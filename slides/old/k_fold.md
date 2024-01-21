## $k$-Fold Cross-Validation ($k$CV or $k$-fold)

* In $k$CV we partition set of observations in to $k$ folds
  * Each fold results in $\mathrm{vMSE}_{d,i}$, while the other $k-1$ folds are used in training
  * Each training set contains $n_k \approx (k-1)/k$ observations
* $k=5$ and up to $10$ is a reasonable balance between $1$CV and $n$CV
  * We can think of validation set approach as $1$CV and LOOCV as $n$CV

<div class="grid grid-cols-2">
<div>

* The $k$-fold CV estimate is
<br> $\mathrm{CV}_{d,k} := \frac{1}{k}\sum\limits_{i=1}^{k}{\mathrm{vMSE}_{d,i}}$
</div>
<div>
  <img src="/ISLRv2_figure_5.5.png" style="width: 550px;">
</div>
</div>