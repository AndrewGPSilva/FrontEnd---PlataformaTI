<template>
    <section class="w-4/5 h-5/5 mt-3">
        <h1 class="text-2xl text-blue-500 text-center mb-2">Cadastre uma Aula:</h1>
        <form @submit.prevent="submit">
            <div class="flex flex-col p-2 justify-start">
                <label for="email" class="text-orange-500 font-bold text-xl mb-1">Email</label>
                <input type="text" name="email" v-model="email" required autocomplete="off"
                    placeholder="Digite seu email..." class="text-white p-2 w-4/5 rounded-2xl border min-w-full border-gray-200">
            </div>
            <div class="flex flex-col p-2">
                <label for="password" class="text-orange-500 font-bold text-xl mb-1">Descrição</label>
                <input type="text" name="password" v-model="password" required autocomplete="off"
                    placeholder="Digite sua senha..." class="text-white p-2 w-4/5 rounded-2xl border min-w-full border-gray-200">
            </div>
            <div class="flex flex-col p-2 text-center items-center">
                <button class="bg-blue-500 text-white font-bold p-2 rounded-2xl" @click="cadastrar">Login</button>
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
            email: '',
            password: ''
        }
    },
    methods: {
        submit() {
            const dados = {
                email: this.email,
                password: this.password
            }

            if (this.email === '' || this.password === '') {
                console.log("Preencha todos os campos antes de enviar o formulário.");
                return;
            }

            axios.post("http://127.0.0.1:8000/api/login", dados)
                .then((response) => {
                    console.log("Login feito com sucesso!", response);
                    this.email = ''
                    this.password = ''
                })
                .catch((error) => {
                    console.log("Ocorreu um erro", error)
                })
        }
    }
}

</script>