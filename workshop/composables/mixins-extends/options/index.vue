<template>
  <div class="wrapper">
    <div class="section extended">
      <p>Message from extended component: <b>{{ message }}</b></p>
      <div class="actions">
        <button @click="changeMessage">Change message</button>
      </div>
    </div>

    <div class="section mixin">
      <p>Counter from mixin: <b>{{ counter }}</b></p>
      <p>Is mounted? {{ isMounted }}</p>
      <div class="actions">
        <button @click="increment">Increment</button>
        <button @click="decrement">Decrement</button>
      </div>
    </div>
  </div>
</template>

<script>
import MessageComponent from "./MessageComponent";
import CounterMixin from "./CounterMixin";

export default {
  extends: MessageComponent,
  mixins: [CounterMixin],
}
</script>

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
