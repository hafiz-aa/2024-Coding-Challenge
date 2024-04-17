function sumArray(array) {
  if (!array || array.length <= 2) return 0;
  const sortedArray = array.sort((a, b) => a - b);
  sortedArray.pop(); // Menghapus nilai tertinggi
  sortedArray.shift(); // Menghapus nilai terendah
  return sortedArray.reduce((acc, val) => acc + val, 0);
}

console.log(sumArray([1, 2, 3, 4, 5]));
