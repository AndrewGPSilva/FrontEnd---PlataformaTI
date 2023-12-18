<template>
    <div class="pt-2 px-3.5 bg-black">
      <img class="mb-2 p-1 rounded-2xl" src="../../../public/banner.jpg" alt="Banner" />
      <Line />
    </div>
  </template>
  
  <script>
  import Line from "@!/Global/Line.vue"
  export default {
    name: "Banner",
    components: { Line }
  }
  </script>