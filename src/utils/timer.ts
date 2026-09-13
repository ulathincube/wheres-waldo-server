let intervalId: any = null

export function startTimer() {
  let counter = 0
  intervalId = setInterval(() => {
    counter += 1
    console.log({ counter })
  }, 1000)
}

export function stopTimer() {
  clearInterval(intervalId)
}
