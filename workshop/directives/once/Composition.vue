<script setup>
const counter = ref(0)
</script>

<template>
  <div>
    <div>
      <p>Regular: {{ counter }}</p>
    </div>

    <div v-once>
      <p>Once: {{ counter }}</p>
    </div>

    <button @click="counter++">Increment</button>
  </div>
</template>
