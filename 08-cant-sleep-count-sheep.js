var countSheep = function (num) {
  let result = "";
  for (let i = 1; i <= num; i++) {
    result += `${i} sheep...`;
  }
  return result;
};

// var countSheep = function (num) {
//   //your code here
//   return [...Array(num)].map((_, i) => `${i + 1} sheep...`).join("");
// };

console.log(countSheep(5));
