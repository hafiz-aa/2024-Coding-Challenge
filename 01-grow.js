// function grow(x) {
//   let result = x[0];
//   for (let i = 1; i < x.length; i++) {
//     result *= x[i];
//   }
//   return result;
// }

// function grow(x) {
//   return x.reduce((a, b) => a * b);
// }

const grow = (x) => x.reduce((a, b) => a * b);

console.log(grow([2, 3, 9]));
