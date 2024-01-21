---
title: Can a linear model overfit?
---

# Can a linear model overfit?

<div class="grid grid-cols-[3fr,4fr]">
<div>

* In general, a line cannot visit every point
  * So, it can’t overfit to observations in usual sense
* A line overfits (in some sense) to <br> **<span style="color:#dd55ffff">influential</span>** and **<span style="color:#7fff2aff">outlying</span>** values
* **<span style="color:#dd55ffff">Influential</span>** point is such that when deleted “significantly” changes the “results”
* **<span style="color:#7fff2aff">Outlier</span>** is a point which is highly unlikely under the null hypothesis of the distribution
  * It’s impact on a line may be small
  * Note: point $A$ appears likely in distribution of $X_3$ and $Y_3$, but it’s unlikely in distribution of $(X_3, Y_3)$
</div>
<div>
  <figure>
    <img src="/Anscombe's_quartet_3.svg" style="width: 550px !important;">
    <figcaption style="color:#b3b3b3ff; font-size: 11px; float: right;">Image source:
      <a href="url">https://en.wikipedia.org/wiki/Influential_observation</a>
    </figcaption>
  </figure>
</div>
</div>

<!--
The line is not flexible.

Look at these 4 figures. You might notice that blue line is the same line, but the points are differently spreaded.

How to distinguish outlying (green) and influential (purple) points?

Check the projections!
-->
