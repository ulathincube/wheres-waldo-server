let intervalId: NodeJS.Timeout

let counter = 0
export function startTimer() {
  intervalId = setInterval(() => {
    counter += 1
    // console.log({ counter })
  }, 1000)
}

export function stopTimer() {
  clearInterval(intervalId)
}

export { counter }
