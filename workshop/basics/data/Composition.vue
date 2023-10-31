<script setup>
const counter = ref(0)
const clicked = reactive({
  increment: 0,
  decrement: 0
})

function increment() {
  counter.value++
  clicked.increment++
}

function decrement() {
  counter.value--
  clicked.decrement++
}
</script>

<template>
  <div>
    <p>Counter: {{ counter }}</p>
    <div class="buttons">
      <button @click="increment">Increment {{ clicked.increment }}</button>
      <button @click="decrement">Decrement {{ clicked.decrement }}</button>
    </div>
  </div>
</template>

<style scoped>
.buttons {
  display: flex;
  gap: 1rem;
}
</style>
