<script setup lang="ts">
const props = defineProps({
  class: {
    type: String,
  },
})
</script>

<template>
  <div class="slidev-layout two-columns w-full h-full">
    <div class="col-span-2">
      <slot />
    </div>
    <div class="grid grid-cols-2">
      <div class="col-left" :class="props.class">
        <slot name="left" />
      </div>
      <div class="col-right" :class="props.class">
        <slot name="right" />
      </div>
    </div>
  </div>
</template>

<style>
.col-grid {
  display: grid;
  grid-template-columns: 1fr 3fr;
}

.left {
  width: 30%;
  background-color: red;
}

.right {
  width: 70%;
  background-color: blue;
}

</style>