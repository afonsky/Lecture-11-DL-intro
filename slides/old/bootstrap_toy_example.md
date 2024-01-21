## Bootstrap Toy Example

```python {2-3|4-8|9-11|12-14|15-18|all}
# numpy-only
import numpy as np 
np.random.seed(1) 
x = [1,2,3,4]     # original sample
B, n = 10, len(x) # number of bootstrap samples, size of each sample
bootstrap = lambda x, n=len(x): np.random.choice(x, n) 
z = np.array(bootstrap(x, n*B)).reshape((B,n))
# z = np.array([bootstrap(x) for i in range(B)]) # slower
z
array([[2, 4, 1, 1], [4, 2, 4, 2], [4, 1, 1, 2], [1, 4, 2, 1], [3, 2, 3, 1], \
[3, 2, 3, 1], [4, 1, 3, 1], [2, 3, 3, 1], [4, 4, 2, 2], [4, 3, 1, 3]])
mu = np.mean(z, axis=1) # compute mean on each sample (row)
mu
array([2. , 3. , 2. , 2. , 2.25, 2.25, 2.25, 2.25, 3. , 2.75])

# compute bootstrap SE, 
# i.e. an estimate of the SE of the sampling distribution of the mean
np.std(mu, ddof=1) # degrees of freedom is 1 for the sample SDev
0.395
```