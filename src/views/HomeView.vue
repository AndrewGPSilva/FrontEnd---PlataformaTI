<script setup>
import Navbar from "@!/Global/Navbar.vue"
import Banner from "@!/Home/Banner.vue"
import Card from "@!/Home/Card.vue";
</script>

<template>
  <div class="flex">
    <div class="w-1/5">
      <Navbar />
    </div>
    <section class="bg-black text-white flex flex-col justify-center items-center p-5 w-4/5">
      <Banner />
      <div class="flex gap-10">
        <Card image="https://i.ibb.co/HXq4tBM/vue.png" name="Vue JS" description="Um framework Javascript muito amado pela comunidade, com boa fama de ser simples de utilizar e de aprender, Vue Js conta com diversas facilidades para seu dia a dia!" />
        <Card image="https://i.ibb.co/wJNhQc7/rails.png" name="Ruby On Rails" description="Ruby on Rails é um framework web de código aberto escrito na linguagem Ruby. Ele é conhecido por sua simplicidade, produtividade e facilidade de uso." />
        <Card image="https://i.ibb.co/f27wdz5/spring.png" name="Spring" description="Spring Framework é um framework Java de código aberto que fornece uma infraestrutura completa para o desenvolvimento de aplicações Java. Ele é conhecido por sua robustez, flexibilidade e produtividade." />
      </div>
    </section>
  </div>
</template>
