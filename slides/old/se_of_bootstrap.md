## Standard Error (SE) of Bootstrap Estimates
<br>

* Let $Z^{*i}$ be our bootstrap samples and $\hat{\alpha}^{*i}$ be the corresponding estimates, $i = 1:B$

<div class="grid grid-cols-2 gap-4">
<div>

* We can estimate the SE of estimand via
<br> $\mathrm{SE}_B^2(\hat{\alpha}) = \frac{1}{B-1}\sum\limits_{i=1}^B{(\hat{\alpha}^{*i} - \bar{\hat{\alpha}}^{*})^2}$,
<br> where:
<br> $\bar{\hat{\alpha}}^{*}\frac{1}{B}\sum\limits_{i=1}^B{\hat{\alpha}^{*i}}$ -- mean of bootstrapped estimates,
<br> $\hat{\alpha}$ can be a wide range of estimators or models

* In bootstrap sampling:
	* we re-sample **uniformly**
	* we assume that the original sample is drawn **uniformly** from the population

</div>
<div>
	<img src="/Bootstrap_3.png" style="width: 750px;">
</div>
</div>