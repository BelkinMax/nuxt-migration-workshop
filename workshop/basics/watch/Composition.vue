<script setup>
const randomColor = ref('')
const colorBox = ref(null)

watch(randomColor, (newColor, oldColor) => {
  if (
    colorBox.value &&
    newColor !== oldColor
  ) {
    const color = `#${newColor}`

    colorBox.value.style.backgroundColor = color
    console.log(`%c NEW COLOR: ${color}`, `background-color: ${color};`)
  }
})

function setRandomColor() {
  randomColor.value = Math.floor(Math.random() * 16777215).toString(16)
}
</script>

<template>
  <div ref="colorBox" class="color-box">
    <button @click="setRandomColor">Apply random color</button>
  </div>
</template>

<style scoped>
.color-box {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}
</style>
