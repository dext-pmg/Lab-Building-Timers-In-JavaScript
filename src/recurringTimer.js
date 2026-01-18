
function recurringTimer(action, interval) {
  const callback = typeof action === "function" ? action : () => console.log(action);
  const intervalId = setInterval(callback, interval);
  return intervalId;
}
function stopRecurringTimer(intervalId) {
  clearInterval(intervalId);
}
module.exports = { recurringTimer, stopRecurringTimer };