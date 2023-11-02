<script setup>
import Navbar from "@!/Global/Navbar.vue"
import Banner from "@!/Create/Banner.vue"
</script>

<template>
  <div class="flex">
    <div class="w-1/5">
      <Navbar />
    </div>
    <section class="bg-black text-white flex flex-col justify-center items-center p-5 w-4/5">
      <Banner />
      <router-link to="/aulas/create" class="p-3 mt-4 bg-blue-500 rounded-2xl font-bold text-black">
        Registrar uma Aula
      </router-link>
    </section>
  </div>
</template>
