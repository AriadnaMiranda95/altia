<template>
  <FilmsDisplayer />
</template>

<script setup>
import { useStore } from 'vuex'
import FilmsDisplayer from './components/FilmsDisplayer.vue'

const store = useStore()
</script>

<style scoped></style>
