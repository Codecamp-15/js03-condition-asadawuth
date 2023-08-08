let grade = prompt("point");
if (grade > 100) {
  alert("Guess Num again");
}
else if(grade >= 80) {
  alert("A");
}
else if(grade >= 70 ) {
  alert("B");
}
else if(grade >= 60 ) {
  alert("C");
}
else if(grade >= 50 ) {
  alert("D");
}
else if(grade <= 49 ) {
  alert("F");
}
else {
  alert("Guess Num again");
}