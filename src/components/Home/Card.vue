<template>
    <section id="container" class="flex flex-col text-start mt-5 py-4 px-10">
        <img :src="image" alt="Logo da Linguagem de Programação">
        <h2>{{ name }}</h2>
        <p>{{ description }}</p>
    </section>
</template>

<script>
export default {
    name: "Card",
    props: {
        image: String,
        name: String,
        description: String
    }
}
</script>

<style scoped>
#container {
    border: 2px solid rgb(57, 57, 255);
    width: 300px;
    height: auto;
    gap: 10px;
    border-bottom-right-radius: 50px;
    border-top-left-radius: 50px;
    font-size: large;
    font-family: Arial, Helvetica, sans-serif;
}

h2 {
    color: aqua;
    font-weight: bold;
}

img {
    width: 100px;
    height: 100px;
}
</style>