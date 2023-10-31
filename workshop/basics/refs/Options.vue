<template>
  <div>
    <div ref="textContainer" v-text="text" class="text-container" />
    <p>Container width: {{ width }}</p>
  </div>
</template>

<script>
const FULL_TEXT = 'Lorem ipsum dolor sit amet.'

export default {
  data () {
    return {
      text: '',
      width: ''
    }
  },
  mounted () {
    this.typing = setInterval(() => {
      this.typeText()
      this.updateSize()
    }, 300)
  },
  beforeUnmount() {
    clearInterval(this.typing)
  },
  methods: {
    typeText () {
      if (this.text.length < FULL_TEXT.length) {
        this.text += FULL_TEXT[this.text.length]
      } else {
        this.text = ''
      }
    },
    updateSize () {
      const rect = this.$refs.textContainer?.getBoundingClientRect()

      if (rect) {
        this.width = `${rect.width}px`
      }
    }
  }
}
</script>

<style scoped>
.text-container {
  width: fit-content;
  height: 1rem;
  background-color: #eee;
}
</style>
