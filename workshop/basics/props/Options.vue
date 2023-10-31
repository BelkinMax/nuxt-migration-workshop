<template>
  <ul>
    <li>Name: {{ name }}</li>
    <li>Age: {{ age }}</li>
    <template v-if="clientData">
      <li>Is registered: {{ clientData.isRegistered }}</li>
      <li>Balance: {{ clientData.balance }}</li>
    </template>
  </ul>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    age: {
      type: Number,
      required: true
    },
    clientData: {
      type: Object,
      required: false,
      default: () => null
    }
  }
}
</script>
