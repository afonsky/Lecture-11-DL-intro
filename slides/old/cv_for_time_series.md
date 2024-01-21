## CV for Time Series

<div class="grid grid-cols-2 gap-4">
<div>

* Keep observations together to avoid breaking local relationships
	* So that your suitable model can find these dependencies
* At each iteration
	* append previous test sample to previous train/validation sample, OR
	* slide training/testing set window over time

</div>
<div>
	<img src="/CV_for_time_series_SP_500_2.png" style="width: 750px;">
</div>
</div>

<div class="grid grid-cols-2 gap-4">
<div>
	<img src="/Moving_window_2.png" style="width: 330px;">
</div>
<div>
	<img src="/Moving_window_2.png" style="width: 330px;">
</div>
</div>