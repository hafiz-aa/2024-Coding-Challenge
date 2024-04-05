// function points(games) {
//   let totalPoints = 0;
//   for (let i = 0; i < games.length; i++) {
//     if (games[i][0] > games[i][2]) {
//       totalPoints += 3;
//     } else if (games[i][0] === games[i][2]) {
//       totalPoints += 1;
//     }
//   }

//   return totalPoints;
// }

const points = (games) => games.reduce((acc, val) => acc + (val[0] > val[2] ? 3 : val[0] === val[2] ? 1 : 0), 0);
console.log(points(["1:0", "2:2", "3:0", "4:0", "2:1", "3:1", "1:5", "3:2", "4:2", "4:3"]));
