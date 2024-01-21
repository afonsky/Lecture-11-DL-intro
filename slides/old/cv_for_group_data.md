## CV for Group Data

* If your observations have related groups, you may want to keep all grouped observations **together** in either the train or the validation set.
	* If you split a group of related observations, this may result in "**leakage**" of information about the group from testing into training. So, your model will **overfit** to the testing set.
* E.g. You are building cat-dog classifier
	* You have different images of the same cat – keep these together as a group
	* Your model should learn cat’s common features, not single cat’s stripes
* [scikit-learn](https://scikit-learn.org/stable/modules/cross_validation.html#group-k-fold) has convenient realisation `GroupKFold()`


<div class="grid grid-cols-2 gap-2">
<div>
	<img src="/CV_for_group_data_1.png" style="width: 450px;">
</div>
<div>
	<img src="/CV_for_group_data_2.png" style="width: 230px;">
</div>
</div>