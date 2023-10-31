<script setup>
const props = defineProps({
  message: {
    type: String,
    required: true
  }
})

console.log('CompositionLifecycle:', 'beforeCreate and created')

onBeforeMount(() => {
  console.log('CompositionLifecycle:', 'beforeMount')
})

onMounted(() => {
  console.log('CompositionLifecycle:', 'mounted')
})

onBeforeUpdate(() => {
  console.log('CompositionLifecycle:', 'beforeUpdate')
})

onUpdated(() => {
  console.log('CompositionLifecycle:', 'updated')
})

onBeforeUnmount(() => {
  console.log('CompositionLifecycle:', 'beforeUnmount')
})

onUnmounted(() => {
  console.log('CompositionLifecycle:', 'unmounted')
})
</script>

<template>
  <p>{{ props.message }}</p>
</template>
