function rentalCarCost(d) {
  // Your solution here
  let disc = 0;
  if (d < 3) disc = 0;
  if (d < 7) disc = 20;
  if (d >= 7) disc = 50;

  return d * 40 - disc;
}

console.log(rentalCarCost(1));
console.log(rentalCarCost(2));
console.log(rentalCarCost(3));
console.log(rentalCarCost(4));
console.log(rentalCarCost(5));
console.log(rentalCarCost(6));
console.log(rentalCarCost(7));
console.log(rentalCarCost(8));
