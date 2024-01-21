## Train, Validate, Test

* A **large** sample can be split into
  * **Training** set: to fit our models or a single model with varying hyperparameters
  * **Validation** set: to select the best model
    * We evaluate among model families (regression, KNN, …), HPs, features, transformations,…
  * **Test** set: to assess the generalization (test) error of the final error
    * Use of validation set is OK, but biased, since we already know that best model did well there
* The split is case-specific, but can be $50\%$/$25\%$/$25\%$
* Model can be:
  * Family
    * Gaussian, NN
  * Fixed architecture or # parameters (element of a family)
    * E.g.: NN with 1 layer, 100 neurons; logistic regression with 100 features and a bias
  * Trained model
    * E.g. Gaussian(2,3)