// function countBy(x, n) {
//   let z = [];
//   for (let i = 1; i <= n; i++) z.push(x * i);
//   return z;
// }

function countBy(x, n) {
  return [...Array(n)].map((_, i) => x * (i + 1));
}

console.log(countBy(3, 3));
