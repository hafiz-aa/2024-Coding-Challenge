// Reverse array [1, 2, 3, 4, 5] to [5, 4, 3, 2, 1]

// function reverseSeq(n) {
//   let arr = [];
//   for (let i = 1; i <= n; i++) {
//     arr.push(i);
//   }
//   return arr.reverse();
// }

// reverseSeq = (n) => {
//   return Array(n)
//     .fill()
//     .map((el, i) => i + 1)
//     .reverse();
// };

reverseSeq = (n) => [...Array(n)].map((el, i) => i + 1).reverse();

console.log(reverseSeq(7));
