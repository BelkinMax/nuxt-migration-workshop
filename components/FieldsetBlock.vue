<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="block">
    <h2>{{ props.title }}</h2>
    <div class="sections">
      <fieldset>
        <legend>Options</legend>
        <slot name="options" />
      </fieldset>
      <fieldset>
        <legend>Composition</legend>
        <slot name="composition" />
      </fieldset>
    </div>
  </div>
</template>


<style scoped>
.block {
  width: 100%;
}

.sections {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  width: 100%;
}

fieldset {
  flex: 1;
}
</style>
