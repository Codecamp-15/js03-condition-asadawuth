let score = prompt("Num");
let grade = score > 100 ? 'Guess Num Again'
  : score >= 80 ? 'A'
  : score >= 70 ? 'B'
  : score >= 60 ? 'C'
  : score >= 50 ? 'D'
  : 'F'