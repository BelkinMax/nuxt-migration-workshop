<template>
  <div class="injector-block">
    <p>Injector</p>
    <ul>
      <li>Name: {{ userData.name }}</li>
      <li>Age: {{ userData.age }}</li>
      <li>Message: {{ message }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  inject: [
    'userData',
    'message'
  ]
}
</script>

<style scoped>
.injector-block {
  color: white;
  background-color: cornflowerblue;
  padding: 1rem;
}

p {
  margin-top: 0;
}
</style>
