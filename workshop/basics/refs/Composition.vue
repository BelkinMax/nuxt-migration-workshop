<script setup>
const FULL_TEXT = 'Lorem ipsum dolor sit amet.'
const text = ref('')
const width = ref('')
const textContainer = ref(null)
let typing

function typeText () {
  if (text.value.length < FULL_TEXT.length) {
    text.value += FULL_TEXT[text.value.length]
  } else {
    text.value = ''
  }
}

function updateSize () {
  const rect = textContainer.value?.getBoundingClientRect()

  if (rect) {
    width.value = `${rect.width}px`
  }
}

onMounted(() => {
  typing = setInterval(() => {
    typeText()
    updateSize()
  }, 300)
})

onBeforeUnmount(() => {
  clearInterval(typing)
})
</script>

<template>
  <div>
    <div ref="textContainer" v-text="text" class="text-container" />
    <p>Container width: {{ width }}</p>
  </div>
</template>

<style scoped>
.text-container {
  width: fit-content;
  height: 1rem;
  background-color: #eee;
}
</style>
