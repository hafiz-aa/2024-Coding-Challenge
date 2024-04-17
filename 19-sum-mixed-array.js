function sumMix(x) {
  return x.reduce((acc, cur) => acc + +cur, 0);
}

console.log(sumMix([9, 3, "7", "3"]));
