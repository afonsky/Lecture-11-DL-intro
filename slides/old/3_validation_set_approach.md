## Validation Set Approach

* We **split** original sample of size $n$ into 2 subsamples:
  * **Training set** of size $n_\tau$ used for training a model
    * We want the model to find true relationships between inputs and outputs (I/O)
  * **Validation** or **hold out set**: used for estimating model's performance on test set
      * "**test error**" is a theoretical concept that is known only if
        * we know the **full population** of observations
        * we **simulated** the observations and known the underlying distribution

* The split can be $80/20$, $70/30$, $60/40$, $50/50$, etc.

<br>
<br>

<InlineSvg src="/Lecture_5_train_val.svg" height="40px"/>