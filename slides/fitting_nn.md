# Fitting a Neural Network

<div class="grid grid-cols-[5fr,2fr]">
<div>

* The model parameters $\theta$ are:<br>
$\beta = (\beta_0, \beta_1, ..., \beta_K)$ and $w_k = (w_{k0}, w_{k1}, ..., w_{kp})$<br>
* We need to solve a nonlinear least squares problem:<br>
$\underset{\{w_k\}_1^K, \beta}{\mathrm{minimize}} \frac{1}{2}\sum\limits_{i=1}^n (y_i - f(x_i))^2$,

where $f(x_i) = \beta_0 + \sum\limits_{k=1}^K \beta_k g(w_{k0} + \sum\limits_{j=1}^p w_{kj}x_{ij})$

The problem is **nonconvex** in the parameters $\leadsto$ multiple solutions.
</div>
<div>
  <figure>
    <img src="/ISLRv2_figure_10.1.png" style="width: 250px !important;">
    <figcaption style="color:#b3b3b3ff; font-size: 11px; position: absolute;"><br>Feed-forward NN. Image source:
      <a href="https://hastie.su.domains/ISLR2/ISLRv2_website.pdf#page=412">ISLR Fig. 10.1</a>
    </figcaption>
  </figure>
</div>
</div>

<div class="grid grid-cols-[3fr,5fr]">
<div>
  <figure>
    <img src="/ISLRv2_figure_10.17.png" style="width: 250px !important;">
    <figcaption style="color:#b3b3b3ff; font-size: 11px; position: absolute;"><br>Gradient descent for 1D θ. Image source:
      <a href="https://hastie.su.domains/ISLR2/ISLRv2_website.pdf#page=442">ISLR Fig. 10.17</a>
    </figcaption>
  </figure>
</div>

<div>

To overcome some of these issues we can use:
* **Slow Learning**
	* **Gradient Descent**
* **Regularization** (Ridge/Lasso)
</div>
</div>

---

# Fitting a Neural Network: Gradient Descent

<div class="grid grid-cols-[3fr,5fr]">
<div>
  <figure>
    <img src="/ISLRv2_figure_10.17.png" style="width: 250px !important;">
    <figcaption style="color:#b3b3b3ff; font-size: 11px; position: absolute;"><br>Gradient descent for 1D θ. Image source:
      <a href="https://hastie.su.domains/ISLR2/ISLRv2_website.pdf#page=442">ISLR Fig. 10.17</a>
    </figcaption>
  </figure>
<br>
<br>
<br>

  <figure>
    <img src="/Gradient_Descent.png" style="width: 350px !important;">
    <figcaption style="color:#b3b3b3ff; font-size: 11px; position: absolute;"><br>Image source:
      <a href="https://easyai.tech/en/ai-definition/gradient-descent/">https://easyai.tech/en/ai-definition/gradient-descent</a>
    </figcaption>
  </figure>
</div>

<div>

Rewriting the least squares problem as:<br>
$R(\theta) = \frac{1}{2}\sum\limits_{i=1}^n (y_i - f_\theta(x_i))^2$

We can formulate the general **gradient descent algorithm**:
1. Start with a guess $\theta^0$ for all the parameters in $\theta$, and set $t = 0$
2. Iterate until the objective $R(\theta)$ fails to decrease:
	1. Find a vector $\delta$ that reflects a small change in $\theta$, such that<br> $\theta^{t+1}$ = $\theta^t + \delta$ reduces the objective;<br> i.e. such that $R(\theta^{t+1}) < R(\theta^t)$
	2. Set $t \leftarrow t + 1$
</div>
</div>
<br>