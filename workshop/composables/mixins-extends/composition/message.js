export function useMessage() {
  const message = ref('Hello from message composable')
  function changeMessage() {
    message.value = message.value.split('').reverse().join('')
  }

  return {
    message,
    changeMessage
  }
}
