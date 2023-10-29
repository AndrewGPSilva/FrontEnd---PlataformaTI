<template>
    <div>
        <h1>Olá</h1>
        <ul>
            <li v-for="aula in aulas" :key="aula.id">{{ aula.title }}</li>
        </ul>
    </div>
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
    }
}
</script>