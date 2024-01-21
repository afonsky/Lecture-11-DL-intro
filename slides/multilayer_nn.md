# Multilayer Neural Networks

<div class="grid grid-cols-[5fr,4fr]">
<div>

Consider a neural network with 2 hidden layers:
* The first hidden layer is as in single-layer NN:<br>
$A_k^{(1)} = g(w_{k0}^{(1)} + \sum\limits_{j=1}^p w_{kj}^{(1)}X_j)$
* The second hidden layer treats the activations<br>
from the first hidden layer:<br>
$A_l^{(2)} = g(w_{l0}^{(2)} + \sum\limits_{k=1}^{K_1} w_{lk}^{(2)}A_k^{(1)})$
* Output layer. For $m = 0, 1, ..., 9$ we need to build<br> 10 different linear models: $Z_m = \beta_{m0} + \sum\limits_{l=1}^{K_2} \beta_{ml} A_l^{(2)}$
* Class probability:<br>
$f_m (X) = \mathrm{Pr}(Y = m | X) = \frac{e^{Z_m}}{\sum_{l=0}^9 e^{Z_l}}$ (**softmax**)
</div>
<div>
  <figure>
    <img src="/ISLRv2_figure_10.4.png" style="width: 350px !important;">
    <figcaption style="color:#b3b3b3ff; font-size: 11px; position: absolute;"><br>NN with 2 hidden layers. Image source:
      <a href="https://hastie.su.domains/ISLR2/ISLRv2_website.pdf#page=416">ISLR Fig. 10.4</a>
    </figcaption>
  </figure>
<br>

Notation:<br> $W_i$ - **weights** (coefficients), $B$ - **bias** (intercept)
</div>
</div>