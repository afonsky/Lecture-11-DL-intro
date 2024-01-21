## Stratified $k$-fold

* Works well for unbalanced classes
* After the split, each fold has the same percentage of samples for each target class
	* [StratifiedKFold](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.StratifiedKFold.html#sklearn.model_selection.StratifiedKFold) - variation of [KFold](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.KFold.html#sklearn.model_selection.KFold) that returns stratified folds. The folds are made by preserving the percentage of samples for each class.
	* [StratifiedShuffleSplit](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.StratifiedShuffleSplit.html#sklearn.model_selection.StratifiedShuffleSplit) - merge of StratifiedKFold and [ShuffleSplit](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.ShuffleSplit.html#sklearn.model_selection.ShuffleSplit), which returns stratified randomized folds. The folds are made by preserving the percentage of samples for each class.



<img src="/Stratified_k_fold.png" style="width: 950px;">
