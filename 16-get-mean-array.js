function getAverage(marks) {
  const total = marks.reduce((acc, cur) => acc + cur, 0);
  return Math.floor(total / marks.length);
}

console.log(getAverage([2, 23, 21, 9]));
