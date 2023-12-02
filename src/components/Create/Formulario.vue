<template>
    <section class="w-4/5 h-5/5 mt-3">
        <h1 class="text-2xl text-blue-500 text-center mb-2">Cadastre uma Aula:</h1>
        <form @submit.prevent="submit">
            <div class="flex flex-col p-2 justify-start">
                <label for="title" class="text-orange-500 font-bold text-xl mb-1">Título</label>
                <input type="text" name="title" v-model="title" required autocomplete="off"
                    placeholder="Digite o título da aula..."
                    class="text-white p-2 w-4/5 rounded-2xl border min-w-full border-gray-200">
            </div>
            <div class="flex flex-col p-2">
                <label for="description" class="text-orange-500 font-bold text-xl mb-1">Descrição</label>
                <input type="text" name="description" v-model="description" required autocomplete="off"
                    placeholder="Digite a descrição da aula..."
                    class="text-white p-2 w-4/5 rounded-2xl border min-w-full border-gray-200">
            </div>
            <div class="flex flex-col p-2">
                <label for="category" class="text-orange-500 font-bold text-xl mb-1">Categoria</label>
                <input type="text" name="category" v-model="category" required autocomplete="off"
                    placeholder="Digite a categoria da aula..."
                    class="text-white p-2 w-4/5 rounded-2xl border min-w-full border-gray-200">
            </div>
            <div class="flex flex-col p-2">
                <label for="link" class="text-orange-500 font-bold text-xl mb-1">Link</label>
                <input type="text" name="link" v-model="link" required autocomplete="off"
                    placeholder="Digite o link da aula..."
                    class="text-white p-2 w-4/5 rounded-2xl border min-w-full border-gray-200">
            </div>
            <div class="flex flex-col p-2">
                <label for="image" class="text-orange-500 font-bold text-xl mb-1">Imagem</label>
                <input type="text" name="image" v-model="image" required autocomplete="off"
                    placeholder="Digite o link da imagem da aula..."
                    class="text-white p-2 w-4/5 rounded-2xl border min-w-full border-gray-200">
            </div>
            <div class="flex flex-col p-2 text-center items-center">
                <button class="bg-blue-500 text-white font-bold p-2 rounded-2xl" @click="cadastrar">Cadastrar</button>
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
                    console.log("Aula cadastrada com sucesso!", response);
                    this.title = '';
                    this.description = '';
                    this.category = '';
                    this.link = '';
                    this.image = '';
                })
                .catch((error) => {
                    console.log("Ocorreu um erro", error)
                })
        }
    }
}

</script>