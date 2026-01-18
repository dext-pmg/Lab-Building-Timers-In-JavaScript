function countdownTimer(seconds) {
  let remaining = seconds;

  const intervalId = setInterval(() => {
    console.log(remaining);
    remaining--;

    if (remaining < 0) {
      clearInterval(intervalId);
    }
  }, 1000);
}