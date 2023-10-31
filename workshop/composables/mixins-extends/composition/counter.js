export function useCounter() {
  const counter = ref(0)
  const isMounted = ref(false)

  function increment() {
    counter.value++
  }

  function decrement() {
    counter.value--
  }

  onMounted(() => {
    isMounted.value = true
  })

  return {
    counter,
    isMounted,
    increment,
    decrement,
  }
}
