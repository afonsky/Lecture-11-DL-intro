## What is Resampling?

* It is sampling from a sample (typically, multiple times, with replacement)
  * Types:
    * **Cross Validation** (CV) generates samples to
      * **select** the best model or its **hyperparameters** (HP) and then
      * **assess** the **generalization** (a.k.a. **test**) error of the best predictive models
        * Or we evaluate some measure of accuracy or explainability of variability ($R^2$, ...)
    * **Bootstrap** generates samples to
      * analyze the **distribution** of some *sample statistic*
        * Mean, median, percentiles, variance, confidence interval (CI), p-value, model parameters, etc.
* Each observation participates in model training/testing many times
  * In CV observations are used $k=5$ or $10$ times and up to $n$ times
    * We re-fit a new model or new HP set $k$ times
  * In bootstrap observations can be used $B=$ thousands of times
    * We re-compute considered statistic $B$ times on each subsample
* Resampling is computationally expensive, but can be (embarrassingly) parallelized
