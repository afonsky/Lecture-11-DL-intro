## Bootstrap Toy Example. More Bootstrap Samples

* $\mathrm{Std.Dev.}(Z^{*} | B = 1000) \approx 0.5532$
* $\mathrm{Std.Dev.}(Z^{*} | B = 10000) \approx 0.5608$
* $\mathrm{Std.Dev.}(Z^{*} | B = 100000) \approx 0.5585$

```python {2-3|all}
# pandas-only
import pandas as pd 
df = pd.DataFrame(mu) 
df.plot(kind='hist', grid=True, title='Histogram of Bootstrap Means'); 
df.describe().round(2).T
```

<div class="mt-12 min-h-1"></div>

<div class="flex">
  <div class="flex-grow">
  	<img src="/Bootstrap_1.png" style="width: 300px;">
  </div>
  <div class="flex-grow">
	<img src="/Bootstrap_2.png" style="width: 320px;">
  </div>
</div>