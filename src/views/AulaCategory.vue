<template>
    <section>
        <h1 v-for="aula in aulas" :key="aula.id" class="text-white">
            Olá {{ aula.category }}
        </h1>
    </section>
</template>

<script>
import axios from 'axios';

export default {
    name: "AulaCategory",
    data(){
        return {
            aulas: []
        }
    },
    created() {
        const category = this.$route.params.category
        axios.get(`http://127.0.0.1:8000/api/aulas/category/${category}` )
            .then((response) => {
                this.aulas = response.data;
            })
            .catch((error) => {
                console.log(error);
            })
    }
}
</script>