<template>
    <section class="bg-black text-white h-screen p-5 w-1/5 fixed items-center" id="navbar">
        <div class="flex justify-center mt-3">
            <router-link to="/"><img class="w-44" src="@@/logoV2.png" alt="Logo da Plataforma"></router-link>
        </div>
        <Line />
        <div>
            <ul class="mt-8">
                <h1 class="text-orange-500 text-center font-bold">Conteúdos Disponíveis</h1>
                <router-link to="/aulas">
                    <div id="icons" class="flex flex-wrap p-4">
                        <img class="w-16 h-16" src="https://i.ibb.co/drrxzN9/laravel.png" alt="Logo do Laravel">
                        <img class="w-16 h-16" src="https://i.ibb.co/Jz5XpmW/python.png" alt="Logo do Python">
                        <img class="w-16 h-16" src="https://i.ibb.co/HXq4tBM/vue.png" alt="Logo do Vue JS">
                        <img class="w-16 h-16" src="https://i.ibb.co/f27wdz5/spring.png" alt="Logo do Spring">
                        <img class="w-16 h-16" src="https://i.ibb.co/RpmyqN4/go.png" alt="Logo do Csharp">
                        <img class="w-16 h-16" src="https://i.ibb.co/Yht90fY/tailwind.png" alt="Logo do Tailwind CSS">
                    </div>
                </router-link>
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

#icons img:hover {
    background-color: #333;
    border-radius: 50%;
}
</style>