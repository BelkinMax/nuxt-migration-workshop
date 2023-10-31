<template>
  <div>
    <p>Counter: {{ counter }}</p>
    <div class="buttons">
      <button @click="increment">Increment {{ clicked.increment }}</button>
      <button @click="decrement">Decrement {{ clicked.decrement }}</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0,
      clicked: {
        increment: 0,
        decrement: 0
      }
    }
  },
  methods: {
    increment() {
      this.counter++
      this.clicked.increment++
    },
    decrement() {
      this.counter--
      this.clicked.decrement++
    }
  }
}
</script>

<style scoped>
  .buttons {
    display: flex;
    gap: 1rem;
  }
</style>
