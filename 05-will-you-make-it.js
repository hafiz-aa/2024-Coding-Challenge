// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//   if (distanceToPump <= mpg * fuelLeft) {
//     return true;
//   } else {
//     return false;
//   }
// };

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return distanceToPump <= mpg * fuelLeft;
};

console.log(zeroFuel(50, 24, 2));
