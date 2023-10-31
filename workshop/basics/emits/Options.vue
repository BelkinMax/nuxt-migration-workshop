<template>
  <button @click="emitRandomNumber">Emit data</button>
</template>

<script>
export default {
  methods: {
    emitRandomNumber() {
      this.$emit('updateNumber', Math.random())
    },
  },
}
</script>
