<template>
      <div class="button-wrapper" @click="onClick">
         <input type="button" :value="label">
      </div>
</template>

<script setup>
 const emit = defineEmits(['onClick', 'onClose']);
 const props = defineProps({
    label: {type: String, required: false},
 })

function onClick() {
     emit('onClick')
 }
</script>