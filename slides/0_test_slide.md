# Backpropagation

Some text about backpropagation.

<!-- <div class="grid grid-cols-[auto,1fr] gap-4">
  <ConnectionsForward v-click class="mt-4"/>
  <div v-click class="p-4">
    <ConnectionsBackward v-click class="mt-4"/>
  </div>
</div> -->

<div>
  <BackPropagation v-click class="mt-4"/>
</div>

<!-- (пусть d везде будет обозначать частную производную).
Смотрите, у нас есть x = 4, y = -3, z = 5. На самом деле, этого достаточно для решения всей задачи.
Делаем forward pass:
q = x + y = 1
f = q * z = 5

Делаем backward pass:
Здесь мы считаем частные производные справа налево (поэтому метод называется backpropagation и поэтому для вычисления градиентов правых частей нам не важно, что они были сложными функциями при forward pass'е):
df/df = 1
(вспомним, что f = q * z):
df/dz = q = 1
df/dq = z = 5

Для вычисления градиентов x и y нужно применить chain rule:
df/dx = dq/dx * df/dq = 1 * 5 = 5
У них есть соответствующие названия:
df/dx = downstream gradient
dq/dx = local gradient
df/dq = upstream gradient

Аналогично для df/dy = dq/dy * df/dq = 1 * 5 = 5

Так получется правильный ответ df/dx, df/dy, df/dz = 5, 5, 1.  И так расчитывает pytorch. -->