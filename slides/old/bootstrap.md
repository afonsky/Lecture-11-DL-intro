## Bootstrap

* Used to quantify uncertainty or distribution of an estimator or model parameters
* Toy example: consider a sample $x = {1,2,3,4}$ with $\bar{x} = 2.5$ and $s_x \approx 1.29$
	* We can even compute the [standard error](https://en.wikipedia.org/wiki/Standard_error) of sample mean is $s_{\bar{x}} = \frac{s_x}{\sqrt{n}} \approx 0.65$
		* What is the distribution of $\bar{x}$?
	* We can’t estimate the distribution b/c we only have a single observation of
	* Theory states that $\bar{x}$ is approaches Gaussian with mean $\bar{x}$ and std. dev. $s_{\bar{x}}$
		* In many complex situations, theory can’t estimate the distribution of parameters and estimators
* Resampling: we can generate $B$ bootstrap samples $z^{*1}, ..., z^{*B}$
	* Compute mean, $\hat{\mu}^{*i}$, on each $z^{*i}$
	* Examine distribution of these bootstrap means