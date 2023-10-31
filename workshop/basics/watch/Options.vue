<template>
  <div ref="color-box" class="color-box">
    <button @click="setRandomColor">Apply random color</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      randomColor: ''
    }
  },
  watch: {
    randomColor (newColor, oldColor) {
      if (
        this.$refs['color-box'] &&
        newColor !== oldColor
      ) {
        const color = `#${newColor}`

        this.$refs['color-box'].style.backgroundColor = color
        console.log(`%c NEW COLOR: ${color}`, `background-color: ${color};`)
      }
    }
  },
  methods: {
    setRandomColor() {
      this.randomColor = Math.floor(Math.random() * 16777215).toString(16)
    }
  }
}
</script>

<style scoped>
.color-box {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}
</style>
