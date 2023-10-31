<script setup>
import DataInjector from './DataInjector'

const userData = reactive({
  name: 'John',
  age: 30
})
const message = ref('Hello World!')

function changeProvidedData () {
  userData.name = userData.name === 'John' ? 'Jane' : 'John'
  userData.age++
  message.value = message.value.split('').reverse().join('')
}

provide('userData', userData)
provide('message', message)
</script>

<template>
  <div class="provider-block">
    <p>Provider</p>
    <ul>
      <li>Name: {{ userData.name }}</li>
      <li>Age: {{ userData.age }}</li>
      <li>Message: {{ message }}</li>
    </ul>
    <button @click="changeProvidedData">Change provided data</button>
    <DataInjector />
  </div>
</template>

<style scoped>
.provider-block {
  background-color: lightgreen;
  padding: 1rem;
}

p {
  margin-top: 0;
  margin-bottom: 1rem;
}

button {
  margin-bottom: 1rem;
}
</style>
