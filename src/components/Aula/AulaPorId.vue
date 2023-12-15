<template>
    <section>
        <h1 class="text-white" v-if="aula">
            Aula {{ aula.original.id }}
        </h1>
        <iframe :src="aula.original.link"
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen>
        </iframe>
    </section>
</template>

<script>

import axios from 'axios'

export default {
    name: "AulaPorId",
    created() {
        const aulaId = this.$route.params.id;

        const apiUrl = `http://127.0.0.1:8000/api/aulas/${aulaId}`;

        axios.get(apiUrl)
            .then(response => {
                this.aula = response.data;
            })
            .catch(error => {
                console.error('Erro ao buscar os detalhes da aula:', error);
            });
    },
    data() {
        return {
            aula: null
        };
    },
};
</script>

<style scoped>

</style>