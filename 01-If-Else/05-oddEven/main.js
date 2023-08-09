let num = +prompt("Num");
if (num % 2 === 0) {
    console.log("Even number")
}
else if (isNaN(num)) {
    console.log("Is is not a number")
}
else {
   console.log("Odd number")
}