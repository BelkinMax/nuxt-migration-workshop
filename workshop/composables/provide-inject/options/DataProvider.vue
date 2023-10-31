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

<script>
import DataInjector from './DataInjector'

export default {
  components: {
    DataInjector
  },
  data () {
    return {
      userData: {
        name: 'John',
        age: 30
      },
      message: 'Hello World!'
    }
  },
  provide () {
    return {
      userData: this.userData,
      message: this.message
    }
  },
  methods: {
    changeProvidedData () {
      this.userData.name = this.userData.name === 'John' ? 'Jane' : 'John'
      this.userData.age++
      this.message = this.message.split('').reverse().join('')
    }
  }
}
</script>

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
