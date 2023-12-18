<template>
    <section class="flex flex-wrap py-8 pl-14">
        <!-- <div>
            <h1 class="text-orange-500 text-center mb-3 underline text-2xl">
                {{ titulo }}
            </h1>
        </div> -->
        <div v-for="aula in aulas" :key="aula.id" class="flex m-2 w-5/5">
            <div class="flex flex-col p-4 w-11/12">
                <div :style="`background-image: url(${aula.image}); height: 250px; width: 430px; background-size: cover; border-radius: 10%;`"
                    class="mr-2 cursor-pointer">
                    <div class="w-56"></div>
                </div>
                <div class="flex flex-col mt-2">
                    <!-- <a :href="aula.link" target="_blank">
                        <h2 class="text-blue-500">
                            {{ aula.title }}
                        </h2>
                    </a> -->
                    <div class="flex justify-center">
                        <router-link :to="'/aula/' + aula.id"
                            class="bg-blue-500 p-1 cursor-pointer rounded-lg text-black text-center items-center w-52 font-bold ">
                            Assistir Aula
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import axios from 'axios';
import Line from '@!/Global/Line.vue'

export default {
    name: "HomeAulas",
    props: {
        titulo: String,
        admin: Boolean
    },
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
            aulas: [],
            palavra: ''
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
        }
    },
    components: { Line }
}
</script>

<style scoped>
#button-delete:hover {
    background-color: red;
    color: white;
}
</style>