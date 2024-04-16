<template>
  <div class="searcherWrapper">
    <input class="inputSearcher" type="text" placeholder="Buscar..." />
    <default-button label="Buscar"/>
  </div>
</template>
<script setup>
import DefaultButton from './DefaultButton.vue';
const props = defineProps({

})

const emit = defineEmits(['update:modelValue', 'click'])
const update = event => emit('update:modelValue', event.target.value)
</script>
