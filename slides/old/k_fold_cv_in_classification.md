## $k$-fold CV in Classification Settings

* Instead of MSE, we use error indicators to compute LOOCV error rate
<br> $\mathrm{CV}_{n} = \frac{1}{n}\sum\limits_{i=1}^{n}{\boldsymbol{\mathbb{1}}_{(y_i \neq \hat{y}_i)}}$,
<br>  where $\boldsymbol{\mathbb{1}}_{()}$ is an indicator function. $k$-fold CV error rate is averaged similarly
