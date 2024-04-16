<template>
  <div class="filmsDisplayerWrapper">
    <h1>Buscador pelis</h1>
    <searcher v-model="search" @search="() => getFilms(search)"/>
      <loading v-if="loading" />
    <div v-else class="cardWrapper"  >
      <template v-if="existRecords">
        <film-card  v-for="film in films" :key="film" :title="film.Title" :subtitle="film.Year" :img="film.Poster" />
      </template>
      <div class="noRecords" v-else>
        <span>Ups! Parece que no se encontaron resultados...</span>
        <span> :(</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import Loading from '@/components/Loading.vue';
import FilmCard from './FilmCard.vue';
import Searcher from './Searcher.vue';
const store = useStore()
const search = ref()

const loading = computed(() => store.getters[`FilmsStore/loading`])
const films = computed(() => store.getters['FilmsStore/films'])
const existRecords = computed(() => films.value.length > 0 )
const getFilms = async (query) => {
  await store.dispatch('FilmsStore/getFilms', query)
}



getFilms()
</script>
