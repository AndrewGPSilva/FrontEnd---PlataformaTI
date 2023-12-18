<template>
    <div class="flex">
        <div class="w-1/5">
            <Navbar />
        </div>
        <section class="bg-black text-white flex flex-col justify-center items-center p-5 w-4/5">
            <AulaPorId />
        </section>
    </div>
</template>

<script>
import Navbar from '@!/Global/Navbar.vue'
import AulaPorId from '@!/Aula/AulaPorId.vue';
export default {
    name: "Aula",
    components: {
        Navbar,
        AulaPorId
    }
}
</script>