<template>
    <section class="flex flex-col py-8 pl-14">
        <div>
            <h1 class="text-orange-500 text-center mb-1 underline text-2xl">
                Aulas Dísponiveis:
            </h1>
        </div>
        <div v-for="aula in aulas" :key="aula.id" class="flex flex-col m-2 w-5/5">
            <div class="flex w-11/12">
                <div
                    :style="`background-image: url(${aula.image}); height: 120px; background-size: cover; border-radius: 30%;`" class="mr-2">
                    <div class="w-56"></div>
                </div>
                <div class="flex flex-col mt-2">
                    <a :href="aula.link" target="_blank">
                        <h2 class="text-blue-500">
                            {{ aula.title }}
                        </h2>
                    </a>
                    <p class="text-gray-300 mb-1 min-w-full">
                        {{ limitarDescricao(aula.description, 82) }}
                    </p>
                    <div class="flex justify-between">
                        <p
                            class="bg-yellow-500 p-1 cursor-pointer rounded-lg text-black text-center items-center w-52 font-bold">
                            Categoria: {{ aula.category }}
                        </p>
                        <button class="bg-red-800 p-1 w-40 font-bold rounded-lg text-white" @click="excluirAula(aula.id)">
                            Excluir Aula
                        </button>
                    </div>
                </div>
            </div>
            <Line />
        </div>
    </section>
</template>

<script>
import axios from 'axios';
import Line from '@!/Global/Line.vue'

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
        excluirAula(id) {
            if (confirm("Tem certeza de que deseja excluir esta aula?")) {
                axios.post(`http://localhost:8000/api/aulas/${id}`, { _method: 'DELETE' })
                    .then(response => {
                        console.log(response.data.message);
                        this.aulas = this.aulas.filter(aula => aula.id !== id);
                    })
                    .catch(error => {
                        console.error(error);
                    });
            }
        },
        limitarDescricao(descricao, limite) {
            if (descricao.length > limite) {
                return descricao.substring(0, limite) + "...";
            } else {
                return descricao;
            }
        }
    },
    components: { Line }
}
</script>

<style scoped>
main {}
</style>