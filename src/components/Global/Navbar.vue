<template>
    <section class="bg-black text-white h-screen p-5" id="navbar">
        <div class="flex justify-center">
            <img class="w-44" src="@@/logoV2.png" alt="Logo da Plataforma">
        </div>
        <Line />
        <div>
            <ul class="mt-8">
                <h1 class="text-orange-500 font-bold">Conteúdos Disponíveis</h1>
                <li class="mt-4 text-2xl text-gray-400">Java</li>
                <li class="text-2xl text-gray-400">PHP</li>
                <li class="text-2xl text-gray-400">Spring</li>
                <li class="text-2xl text-gray-400">Vue Js</li>
                <li class="text-2xl text-gray-400">Laravel</li>
                <li class="text-2xl text-gray-400">Python</li>
            </ul>
        </div>
        <Line />
        <Networks />
    </section>
</template>

<script>
import Networks from './Networks.vue';
import Line from './Line.vue'

export default {
    name: "Navbar",
    components: {
        Networks,
        Line
    }
}
</script>

<style scoped>
#navbar {
    border-right: 3px solid #333;
    height: 100%;
}
</style>