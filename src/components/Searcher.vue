<template>
  <div class="searcherWrapper">
    <input class="inputSearcher" type="text" placeholder="Buscar..." @keyup="searchChange" />
    <default-button label="Buscar" @onClick="search"/>
  </div>
</template>
<script setup>
import DefaultButton from './DefaultButton.vue';
const props = defineProps({

})

const searchChange =  (e) => {
  const contentToSearch = e.target.value;
  emit('update:modelValue', contentToSearch);
}

const emit = defineEmits(['update:modelValue', 'search'])
const search = () => emit('search')
</script>
 