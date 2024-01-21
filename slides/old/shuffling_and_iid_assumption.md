## Shuffling & i.i.d. Assumption

* Most models in this course assume i.i.d. observations, but not i.i.d. features!!!
* If observations are *truly* independent, we can split a sample however we like
  * However, most real-world observation do have some dependency
    * E.g. collected over time, accidentally ordered by some column, grouped by category, etc.
  * To avoid model overfitting to local distributions, **shuffle observations before split**!
    * This helps **break dependency between adjacent observations**, which might be related
  * Some models are well suited for exploiting this local effects
    * E.g. time series models focus on utilizing auto-correlation and seasonal effects

<img src="/Shuffling_iid.png" style="width: 650px;">
<!-- <table-lite
  :is-static-mode="true"
  :columns="table.columns"
  :rows="table.rows"
  :total="table.totalRecordCount"
  :sortable="table.sortable"
></table-lite> -->