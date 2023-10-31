<template>
  <div class="calculator">
    <label>A</label>
    <input type="number" v-model="numA" />
    <p>+</p>
    <label>B</label>
    <input type="number" v-model="numB" />
    <p>= {{ sum }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      numA: 0,
      numB: 0
    }
  },
  computed: {
    sum() {
      return this.numA + this.numB
    }
  }
}
</script>


<style scoped>
.calculator {
  display: flex;
  align-items: center;
  gap: 1rem;
}

p {
  margin: 0;
  font-weight: bold;
}
</style>
