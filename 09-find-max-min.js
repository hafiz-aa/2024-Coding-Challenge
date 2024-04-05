// // TODO Find min value from array
// var min = function (list) {
//   let minValue = list[0];
//   for (let i = 1; i < list.length; i++) {
//     if (minValue > list[i]) {
//       minValue = list[i];
//     }
//   }
//   return minValue;
// };

// var max = function (list) {
//   let maxValue = list[0];
//   for (let i = 1; i < list.length; i++) {
//     if (maxValue < list[i]) {
//       maxValue = list[i];
//     }
//   }
//   return maxValue;
// };

const min = (list) => list.sort((a, b) => a - b)[0];
const max = (list) => list.sort((a, b) => b - a)[0];

console.log(min([9, 1, 2, 4, 3, -50]));
console.log(max([9, 1, 2, 4, 3, -50]));
