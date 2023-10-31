<script setup>
const emit = defineEmits(['updateNumber'])

function emitRandomNumber() {
  emit('updateNumber', Math.random())
}
</script>

<template>
  <button @click="emitRandomNumber">Emit data</button>
</template>
