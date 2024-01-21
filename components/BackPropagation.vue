<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { autoResetRef } from '@vueuse/core'

const a = ref(4)
const b = ref(-3)
const d = ref(5)
const de = ref(1)

const a2 = computed(() => a.value ** 2)
const b2 = computed(() => b.value ** 3)

const c = computed(() => a.value + b.value)
const e = computed(() => c.value * d.value)

const dd = computed(() => c.value)
const dc = computed(() => d.value)

const da = computed(() => 1 * e.value)
const db = computed(() => 1 * e.value)

const a2c = autoResetRef(false, 100)
const b2c = autoResetRef(false, 100)
const cc = autoResetRef(false, 100)

watch(a, () => a2c.value = true)
watch(b, () => b2c.value = true)
watch([a2, b2], () => cc.value = true)
</script>

<template>
  <div>
    <div class="px-6 pt-4 text-xl">
      <b>𝒒=𝒙+𝒚</b>={{ a }}+{{ b }}={{ c }}
    </div>
    <div class="px-6 pt-4 text-xl">
      <b>f=𝒒*𝒛</b>={{ c }}*{{ d }}={{ e }}
    </div>
    <div class="relative w-100 h-100">
      <NumBox
        v-model:value="a"
        label="𝒙"
        class="absolute left-5 top-5 from-green-400 to-cyan-500"
        :controls="true"
      />
      <NumBox
        v-model:value="b"
        label="𝒚"
        class="absolute left-5 top-30 from-green-400 to-cyan-500"
        :controls="true"
      />
      <NumBox
        v-model:value="d"
        label="𝒛"
        class="absolute left-5 top-55 from-green-400 to-cyan-500"
        :controls="true"
      />
      <NumBox
        :value="c"
        label="𝒒"
        class="absolute left-35 top-17.5 from-blue-400 to-purple-400"
        :active="a2c"
      />
      <NumBox
        :value="e"
        label="𝒇"
        class="absolute left-75 top-30 from-blue-400 to-purple-400"
        :active="cc"
      />
      <!--Arc1-->
      <svg
        class="absolute left-20 top-10 -z-1"
        width="62"
        height="61"
        viewBox="0 0 62 61"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 0.5C27.5 0.5 39.5 59 61.5 60" stroke="#888888" stroke-dasharray="5 2" />
      </svg>
      <!--Arc2-->
      <svg
        class="absolute left-20 top-25 -z-1"
        width="62"
        height="61"
        viewBox="0 0 62 61"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 60.5C27.5 60.5 39.5 2 61.5 1" stroke="#888888" stroke-dasharray="5 2" />
      </svg>
      <!--Arc3-->
      <svg
        class="absolute left-50 top-25 -z-1"
        width="221px"
        height="103px"
        viewBox="-0.5 -0.5 271 123"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M 0 0 Q 20 0 55 30 Q 90 60 120 60" stroke="#888888" stroke-dasharray="5 2" stroke-width="1.2" />
      </svg>
      <!--Arc4-->
      <svg
        class="absolute left-20 top-37.7 -z-1"
        width="221px"
        height="103px"
        viewBox="-0.5 -0.5 271 123"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
      <defs/>
        <path d="M 0 120 Q 110 130 160 65 Q 210 0 270 0" stroke="#888888" stroke-dasharray="5 2" stroke-width="1.2" />
      </svg>




      <NumBox
        v-model:value="da"
        label="d𝒇/d𝒙"
        class="absolute left-125 top-5 from-blue-400 to-purple-400"
        :active="a2c"
      />
      <NumBox
        v-model:value="db"
        label="d𝒇/d𝒚"
        class="absolute left-125 top-30 from-blue-400 to-purple-400"
        :active="a2c"
      />
      <NumBox
        v-model:value="dd"
        label="d𝒇/d𝒛"
        class="absolute left-125 top-55 from-blue-400 to-purple-400"
        :active="a2c"
      />
      <NumBox
        :value="dc"
        label="d𝒇/d𝒒"
        class="absolute left-155 top-17.5 from-blue-400 to-purple-400"
        :active="a2c"
      />
      <NumBox
        :value="de"
        label="d𝒇/d𝒇"
        class="absolute left-195 top-30 from-green-400 to-cyan-500"
        :active="cc"
      />
      <!--Arc1-->
      <svg
        class="absolute left-140 top-10 -z-1"
        width="62"
        height="61"
        viewBox="0 0 62 61"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 0.5C27.5 0.5 39.5 59 61.5 60" stroke="#888888" stroke-dasharray="5 2" />
      </svg>
      <!--Arc2-->
      <svg
        class="absolute left-140 top-25 -z-1"
        width="62"
        height="61"
        viewBox="0 0 62 61"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 60.5C27.5 60.5 39.5 2 61.5 1" stroke="#888888" stroke-dasharray="5 2" />
      </svg>
      <!--Arc3-->
      <svg
        class="absolute left-170 top-25 -z-1"
        width="221px"
        height="103px"
        viewBox="-0.5 -0.5 271 123"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M 0 0 Q 20 0 55 30 Q 90 60 120 60" stroke="#888888" stroke-dasharray="5 2" stroke-width="1.2" />
      </svg>
      <!--Arc4-->
      <svg
        class="absolute left-140 top-37.7 -z-1"
        width="221px"
        height="103px"
        viewBox="-0.5 -0.5 271 123"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
      <defs/>
        <path d="M 0 120 Q 110 130 160 65 Q 210 0 270 0" stroke="#888888" stroke-dasharray="5 2" stroke-width="1.2" />
      </svg>
    </div>
  </div>
</template>
