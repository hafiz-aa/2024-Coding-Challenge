// const quarterOf = (month) => {
//   if (month <= 3) return 1;
//   if (month <= 6) return 2;
//   if (month <= 9) return 3;
//   return 4;
// };

const quarterOf = (month) => Math.ceil(month / 3);

console.log(quarterOf(3));
console.log(quarterOf(8));
console.log(quarterOf(11));
console.log(quarterOf(12));
