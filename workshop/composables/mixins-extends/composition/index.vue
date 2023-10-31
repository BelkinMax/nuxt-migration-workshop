<script setup>
import { useMessage } from './message'
import { useCounter } from './counter'

const { message, changeMessage } = useMessage()
const { counter, increment, decrement, isMounted } = useCounter()
</script>

<template>
  <div class="wrapper">
    <div class="section extended">
      <p>Message from message composable: <b>{{ message }}</b></p>
      <div class="actions">
        <button @click="changeMessage">Change message</button>
      </div>
    </div>

    <div class="section mixin">
      <p>Counter from counter composable: <b>{{ counter }}</b></p>
      <p>Is mounted? {{ isMounted }}</p>
      <div class="actions">
        <button @click="increment">Increment</button>
        <button @click="decrement">Decrement</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.section {
  padding: 1rem;
}
.section.extended {
  background-color: lightgreen;
}
.section.mixin {
  background-color: cornflowerblue;
  color: white;
}

.actions {
  display: flex;
  gap: 1rem;
}
</style>
