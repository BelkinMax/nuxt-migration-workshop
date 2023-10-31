<script>
export default {
  data() {
    return {
      message: 'Hello from extended component',
    }
  },
  methods: {
    changeMessage() {
      this.message = this.message.split('').reverse().join('')
    },
  },
}
</script>
