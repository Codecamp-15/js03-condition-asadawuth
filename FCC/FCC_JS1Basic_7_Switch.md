# Switch (4ข้อ)
# Prerequisite
- function
# Content
- Selecting from Many Options with Switch Statements
- Adding a Default Option in Switch Statements
- Multiple Identical Options in Switch Statements
- Replacing If Else Chains with Switch


[1.Selecting from Many Options with Switch Statements](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/selecting-from-many-options-with-switch-statements)
```js
// Finish and Paste your solution here
function caseInSwitch(val) {
  let answer = "";
  switch (val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
      break;
  }
  return answer
}
caseInSwitch(1)



```
[2.Adding a Default Option in Switch Statements](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/adding-a-default-option-in-switch-statements)
```js
// Finish and Paste your solution here
function switchOfStuff(val) {
  let answer = "";
  switch (val) {
    case "a":
    answer = "apple"
    break;
    case "b":
    answer = "bird"
    break;
    case "c":
    answer = "cat"
    break;
     case "d":
    answer = "stuff"
    break;
    default:
    answer = "stuff"
    break;
  }
  return answer;
}

switchOfStuff(4);

////////////////////////////////////////////////////

``function switchOfStuff(val) {
  let answer = "";
  switch (val) {
    case "a":
    answer = "apple"
    break;
    case "b":
    answer = "bird"
    break;
    case "c":
    answer = "cat"
    break;
    default:
    answer = "stuff"
    break;
  }
  return answer;
}

switchOfStuff(4);`

[3.Multiple Identical Options in Switch Statements](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/multiple-identical-options-in-switch-statements)
```js
// Finish and Paste your solution here
function sequentialSizes(val) {
  let answer = "";
switch (val) {
  case 1:
  case 2:
  case 3:
   answer = "Low" 
    break;
  case 4:
  case 5:
  case 6:
   answer = "Mid" 
    break;
  case 7:
  case 8:
  case 9:
   answer = "High" 
    break;
}
 return answer
}


sequentialSizes(1);



```

[4.Replacing If Else Chains with Switch](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/replacing-if-else-chains-with-switch)
```js
// Finish and Paste your solution here
function chainToSwitch(val) {
  let answer = "";
  // Only change code below this line
 switch (val) {
   case "bob":
   answer = "Marley"
   break;
   case 42:
   answer = "The Answer"
   break;
   case 1:
   answer = "There is no #1"
   break;
   case 99:
   answer = "Missed me by this much!"
   break;
   case 7:
   answer = "Ate Nine"
   break;
 }
  return answer;
}
chainToSwitch(7);



```
