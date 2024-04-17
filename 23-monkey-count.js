function monkeyCount(n) {
  // your code here
  const result = [];
  for (let i = 1; i <= n; i++) {
    result.push(i);
  }
  return result;
}

console.log(monkeyCount(5));
console.log(monkeyCount(8));
console.log(monkeyCount(7));
