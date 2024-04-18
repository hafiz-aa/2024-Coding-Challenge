function setAlarm(employed, vacation) {
  return employed && !vacation;
}

console.log(setAlarm(true, false));
console.log(setAlarm(false, false));
console.log(setAlarm(true, true));
console.log(setAlarm(false, true));
