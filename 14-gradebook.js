function getGrade(...s) {
  // Code here
  const score = s.reduce((acc, cur) => acc + cur, 0) / s.length;
  if (score < 60) return "F";
  if (score < 70) return "D";
  if (score < 80) return "C";
  if (score < 90) return "B";
  return "A";
}
console.log(getGrade(5, 9, 93));
