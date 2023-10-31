<script setup>
const counter = ref(0)
</script>

<template>
  <div>
    <p>Counter: {{ counter }}</p>
    <button @click="counter++">Increment</button>
  </div>
</template>
