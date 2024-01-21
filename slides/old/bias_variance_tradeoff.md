## Bias-Variance Trade-off

* Validation set approach, $1$CV:
  * **highly variable** fit due to a smaller training set
  * **overestimation** of true test error on the validation set
* LOOCV ($n$CV):
  * **unbiased** estimates of true test error
  * **no variability** in fit
    * **highly correlated output** (hence, averaging is not effective)
      * highly variable test error estimate
* $k$-fold CV, $1 < k < n$:
  * **Less correlated** output yields less variable averaged estimate of test error
