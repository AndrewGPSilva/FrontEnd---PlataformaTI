<template>
    <div class="flex">
        <div class="w-1/5">
            <Navbar />
        </div>
        <section class="text-white flex flex-col justify-center items-center w-4/5 bg-black">
            <Aulas />
        </section>
    </div>
</template>

<script>
import Aulas from '@!/HomeAulas/Aulas.vue'
import Navbar from '@!/Global/Navbar.vue'
export default {
    name: "HomeAulas",
    components: {
        Navbar,
        Aulas,
    }
}
</script>