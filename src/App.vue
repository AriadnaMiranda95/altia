<template></template>

<script setup>
import { reactive, computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const films = computed(() => store.getters['FilmsStore/films'])

const getFilms = async (query) => {
  await store.dispatch('FilmsStore/getFilms', query)
}
getFilms('Batman')
</script>

<style scoped></style>
