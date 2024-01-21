<template>
  <footer
    v-if="
      $slidev.nav.currentLayout !== 'cover' &&
      $slidev.nav.currentPage !== 1 &&
      $slidev.nav.currentPage !== $slidev.nav.total + 1
    "
    class="absolute bottom-0 left-2 p-0 text-xs text-gray-400 w-full"
  >
    <div class="flex">
      <div>
       Alexey Boldyrev, Oleg Melnikov &nbsp; | &nbsp;Machine Learning with Python
        &nbsp;| &nbsp;HSE 2022/2023
      </div>
      <div class="flex-grow">&nbsp;</div>
      <div
        class="mr-1 border rounded-md px-1 text-xs flex items-center"
        style="
          background-color: #e9ecf1;
          border-color: #e9ecf1;
          font-family: 'Roboto Light', sans-serif;
        "
      >
        {{ $slidev.nav.currentPage }} / {{ $slidev.nav.total }}
      </div>
    </div>
  </footer>
</template>

<style>
footer {
  font-family: 'Roboto Light', sans-serif;
}
</style>
