<script setup>
const text = ref('')
const letters = ref(0)

function calculateLetters() {
  letters.value = text.value.length
}
</script>

<template>
  <div class="calculator">
    <div class="inputs">
      <input type="text" v-model="text">
      <button @click="calculateLetters">Calculate letters</button>
    </div>
    <p>Input has {{ letters }} letters</p>
  </div>
</template>

<style scoped>
.calculator {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
}

.inputs {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
}

input {
  flex: 3;
}

button {
  flex: 1;
}

p {
  margin: 0;
}
</style>
