<template>
    <div class="flex">
        <div class="w-1/5">
            <Navbar />
        </div>
        <section class="bg-black text-white flex flex-col justify-center items-center p-5 w-4/5">
            <Formulario />
            <Aulas titulo="Gerenciar Aulas" />
        </section>
    </div>
</template>

<script>
import Navbar from "@!/Global/Navbar.vue"
import Formulario from "@!/Create/Formulario.vue"
import Aulas from "@!/Create/Aulas.vue"
export default {
    name: "Admin",
    components: {
        Navbar,
        Formulario,
        Aulas
    }
}
</script>