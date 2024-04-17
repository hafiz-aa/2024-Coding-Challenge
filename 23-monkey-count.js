/* function monkeyCount(n) {
    // your code here
    const result = [];
    for (let i = 1; i <= n; i++) {
      result.push(i);
    }
    return result;
  }
*/

const monkeyCount = (n) => Array.from({ length: n }, (_, i) => i + 1);

console.log(monkeyCount(5));
console.log(monkeyCount(8));
console.log(monkeyCount(7));
