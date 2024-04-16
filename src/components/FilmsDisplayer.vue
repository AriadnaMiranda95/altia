<template>
  <div class="filmsDisplayerWrapper">
    <h1>Buscador pelis</h1>
    <searcher v-model="search" @search="() => getFilms(search)"/>
    <div class="cardWrapper" >
      <film-card v-for="film in films" :key="film" :title="film.Title" :subtitle="film.Year" :img="film.Poster" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import Searcher from './Searcher.vue';
import FilmCard from './FilmCard.vue';
const store = useStore()
const search = ref()

const films = computed(() => store.getters['FilmsStore/films'])

const getFilms = async (query) => {
  await store.dispatch('FilmsStore/getFilms', query)
}



getFilms('Superman')
</script>
