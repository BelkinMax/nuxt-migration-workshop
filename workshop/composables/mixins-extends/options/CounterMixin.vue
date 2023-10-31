<script>
export default {
  data() {
    return {
      counter: 0,
      isMounted: false,
    }
  },
  mounted() {
    this.isMounted = true
  },
  methods: {
    increment() {
      this.counter++
    },
    decrement() {
      this.counter--
    },
  },
}
</script>
