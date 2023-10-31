<script setup>
const props = defineProps({
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
})
</script>

<template>
  <ul>
    <li>Name: {{ props.name }}</li>
    <li>Age: {{ props.age }}</li>
    <template v-if="props.clientData">
      <li>Is registered: {{ props.clientData.isRegistered }}</li>
      <li>Balance: {{ props.clientData.balance }}</li>
    </template>
  </ul>
</template>
