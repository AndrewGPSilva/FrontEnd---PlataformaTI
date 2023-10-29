<template>
    <section class="flex">
        <header class="w-1/5">
            <Navbar />
        </header>
        <div class="flex flex-col w-4/5">
            <main class="bg-black text-white flex flex-col justify-center items-center h-4/4 p-4 pt-11">
                <h1 class="text-orange-500 text-2xl">Aulas Disponíveis:</h1>
                <div v-for="aula in aulas" :key="aula.id" class="flex p-3 w-4/5">
                    <div class="flex items-center">
                        <img :src="aula.image" alt="Thumbnail do vídeo" class="h-3/4 mr-5">
                        <div class="flex flex-col">
                            <p class="text-blue-500">{{ aula.title }}</p>
                            <p>{{ limitarDescricao(aula.description, 100) }}</p>
                            <Line />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </section>
</template>

<script>
import axios from 'axios';

export default {
    name: "HomeAulas",
    created() {
        axios.get("http://localhost:8000/api/aulas")
            .then((response) => {
                this.aulas = response.data;
            })
            .catch((error) => {
                console.log(error);
            })
    },
    data() {
        return {
            aulas: []
        }
    },
    methods: {
        limitarDescricao(descricao, limite) {
            if (descricao.length > limite) {
                return descricao.substring(0, limite) + "...";
            } else {
                return descricao;
            }

        }
    }
}
</script>