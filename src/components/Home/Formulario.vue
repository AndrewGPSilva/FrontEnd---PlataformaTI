<template>
    <section>
        <form @submit.prevent="submit">
            <div>
                <label for="title">Título</label>
                <input type="text" name="title" v-model="title" required placeholder="Digite o título da aula...">
            </div>
            <div>
                <label for="description">Descrição</label>
                <input type="text" name="description" v-model="description" required
                    placeholder="Digite a descrição da aula...">
            </div>
            <div>
                <label for="category">Categoria</label>
                <input type="text" name="category" v-model="category" required placeholder="Digite a categoria da aula...">
            </div>
            <div>
                <label for="link">Link</label>
                <input type="text" name="link" v-model="link" required placeholder="Digite o link da aula...">
            </div>
            <div>
                <label for="image">Imagem</label>
                <input type="text" name="image" v-model="image" required placeholder="Digite o link da imagem da aula...">
            </div>
            <div>
                <button @click="cadastrar">Cadastrar Aula</button>
            </div>
        </form>
    </section>
</template>

<script>

import axios from 'axios'

export default {
    name: "Formulario",
    data() {
        return {
            title: '',
            description: '',
            category: '',
            link: '',
            image: ''
        }
    },
    methods: {
        submit() {
            const dados = {
                title: this.title,
                description: this.description,
                category: this.category,
                link: this.link,
                image: this.image
            }

            if (this.title === '' || this.description === '' || this.category === '' || this.link === '' || this.image === '') {
                console.log("Preencha todos os campos antes de enviar o formulário.");
                return;
            }

            axios.post("http://127.0.0.1:8000/api/aulas", dados)
                .then((response) => {
                    console.log("Aula cadastrada com sucesso!", response)
                })
                .catch((error) => {
                    console.log("Ocorreu um erro", error)
                })
        }
    }
}

</script>