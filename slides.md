---
# try also 'default' to start simple
theme: seriph
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: /ship2.jpg
# attribution: Photo by <a href="https://unsplash.com/@bldjordan?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jordan Billard</a> on <a href="https://unsplash.com/s/photos/mont-blanc?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
# apply any windi css classes to the current slide
class: 'text-center'
# https://sli.dev/custom/highlighters.html
highlighter: shiki
# show line numbers in code blocks
lineNumbers: false
routerMode: hash
# some information about the slides, markdown enabled
info: |
  ## Slidev Personal Incubator
  NB: [Source code available](https://github.com/twitwi/slidev-incubation)

  Experimenting with new features for [Sli.dev](https://sli.dev)
# persist drawings in exports and build
ghPrefix: https://github.com/twitwi/slidev-incubation/blob/main/incubator/
drawings:
  persist: false
title: "Machine Learning with Python"
subtitle: Introduction to Deep Learning
date: "22/11/2022"
venue: HSE
author: Alexey Boldyrev
---

# <span v-html="$slidev.configs.title?.replaceAll(' ', '<br/>')"></span>
# <span v-html="$slidev.configs.subtitle?.replaceAll(' ', '<br/>')"></span>
<!-- <C>Non-Linear Regression</C> -->
<br/><br/><br/><br/><br/><br/>

Alexey Boldyrev, Oleg Melnikov

22 November 2022

<div>
<br>
<span style="color:#b3b3b3ff; font-size: 11px; float: right;">Image credit: ‘The Mayflower at Sea’ by Granville Perkins, 1876.<br>
Wallach Division Picture Collection, The New York Public Library.
</span>
</div>

<style>
  :deep(footer) { padding-bottom: 3em !important; }
</style>


---
src: ./slides/introduction.md
---

---
src: ./slides/single_layer_nn.md
---

---
src: ./slides/multilayer_nn.md
---

---
src: ./slides/fitting_nn.md
---

---
src: ./slides/backpropagation.md
---

---
src: ./slides/tools.md
---

... nope

# The END
