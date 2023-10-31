<template>
  <p>{{ message }}</p>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      required: true
    }
  },
  beforeCreate() {
    console.log('OptionsLifecycle:', 'beforeCreate')
  },
  created() {
    console.log('OptionsLifecycle:', 'created')
  },
  beforeMount() {
    console.log('OptionsLifecycle:', 'beforeMount')
  },
  mounted() {
    console.log('OptionsLifecycle:', 'mounted')
  },
  beforeUpdate() {
    console.log('OptionsLifecycle:', 'beforeUpdate')
  },
  updated() {
    console.log('OptionsLifecycle:', 'updated')
  },
  beforeUnmount() {
    console.log('OptionsLifecycle:', 'beforeUnmount')
  },
  unmounted() {
    console.log('OptionsLifecycle:', 'unmounted')
  }
}
</script>
