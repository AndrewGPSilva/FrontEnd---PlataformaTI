<script setup>
import Navbar from "../components/Global/Navbar.vue"
</script>

<template>
  <div class="flex">
    <div class="w-1/5">
      <Navbar />
    </div>
    <section class="bg-black text-white flex flex-col justify-center items-center p-5 w-4/5">
      <h1>Home Main</h1>
      <router-link to="/aulas/create" class="p-2 bg-orange-600 text-blue-900">
        Registrar uma Aula
      </router-link>
    </section>
  </div>
</template>
