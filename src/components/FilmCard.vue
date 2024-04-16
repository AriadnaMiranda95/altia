<template>
    <section class="filmCard">
        <h3><span>{{ title }}</span></h3>
        <span>{{ subtitle }}</span>
        <figure>
            <img :src="img" alt="">
        </figure>
    </section>
</template>
<script setup>
 const props = defineProps({
    title: {type: String, required: false},
    subtitle: {type: String, required: false},
    img: {type: String, required: false},
 })

</script>