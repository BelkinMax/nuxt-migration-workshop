<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  common: {
    type: Boolean,
    default: false
  },
  actions: {
    type: Boolean,
    default: false
  },
  single: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div class="block">
    <h3>{{ props.title }}</h3>
    <fieldset v-if="common">
      <legend>Common Data</legend>
      <slot name="common" />
    </fieldset>
    <div class="sections">
      <fieldset v-if="!single">
        <legend>Options</legend>
        <slot name="options" />
      </fieldset>
      <fieldset>
        <legend>Composition</legend>
        <slot name="composition" />
      </fieldset>
    </div>
    <fieldset v-if="actions" class="actions">
      <legend>Actions</legend>
      <slot name="actions" />
    </fieldset>
  </div>
</template>


<style scoped>
h3 {
  margin: 0;
}

.block {
  display: flex;
  flex-direction: column;
  gap: 1rem;
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
  margin: 0;
  flex: 1;
}

.actions{
  display: flex;
  gap: 1rem;
}
</style>
