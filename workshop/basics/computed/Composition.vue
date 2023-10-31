<script setup>
const numA = ref(0)
const numB = ref(0)

const sum = computed(() => numA.value + numB.value)
</script>

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
