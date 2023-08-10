# Boolean & Conditional Statement (18ข้อ)
# Prerequisite
- Function  
# Content
- Understanding Boolean Values
- Use Conditional Logic with If Statements
- Comparison with the Equality Operator
- Comparison with the Strict Equality Operator
- Practice comparing different values
- Comparison with the Inequality Operator
- Comparison with the Strict Inequality Operator
- Comparison with the Greater Than Operator
- Comparison with the Greater Than Or Equal To Operator
- Comparison with the Less Than Operator
- Comparison with the Less Than Or Equal To Operator
- Comparisons with the Logical And Operator
- Comparisons with the Logical Or Operator
- Introducing Else Statements
- Introducing Else If Statements
- Logical Order in If Else Statements
- Chaining If Else Statements
- Golf Code  

# การเปรียบเทียบ 

[1.Understanding Boolean Values](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/understanding-boolean-values)
```js
// Finish and Paste your solution here
function welcomeToBooleans() {
  return true; 
}
//true



```
[2.Use Conditional Logic with If Statements](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/use-conditional-logic-with-if-statements)
```js
// Finish and Paste your solution here
function trueOrFalse(wasThatTrue) {
  if (wasThatTrue) {
    return "It was true";
}
    return "It was false";
}
trueOrFalse(true)
//'It was true'
trueOrFalse(false)
//'It was false'



```

## เครื่องหมาย 'เท่ากับ'
[1.Comparison with the Equality Operator](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-equality-operator)
```js
// Finish and Paste your solution here
function testEqual(val) {
  if (val === 10) { 
  return "Not Equal";
  }
  return "Equal";
  }

  testEqual(10) //Not Equal
  testEqual(12) //Equal



```

[2.Comparison with the Strict Equality Operator](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-strict-equality-operator)
```js
// Finish and Paste your solution here
function testStrict(val) {
  if (val === 10 || val === "7") {
    return "Not Equal";
  }
  else if (val === 7 ) { 
  return "Equal";
  }
}



```

[3.Practice comparing different values](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/practice-comparing-different-values)
```js
// Finish and Paste your solution here
function compareEquality(a, b) {
  if (Number(a) == Number(b) ) {
    return "Equal";
  }
}



```

## เครื่องหมาย 'ไม่เท่ากับ'
[4.Comparison with the Inequality Operator](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-inequality-operator)
```js
// Finish and Paste your solution here
function testNotEqual(val) {
  if (val != 99) {
    return "Not Equal";
  }
  return "Equal";
}



```

[5.Comparison with the Strict Inequality Operator](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-strict-inequality-operator)
```js
// Finish and Paste your solution here
function testStrictNotEqual(val) {
  if (val === 17) { 
    return "Equal";
  }
  return "Not Equal";
}



```

## มากกว่า,มากกว่าหรือเท่ากับ,น้อยกว่า,น้อยกว่าหรือเท่ากับ

[6.Comparison with the Greater Than Operator](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-greater-than-operator)
```js
// Finish and Paste your solution here
function testGreaterThan(val) {
  if (val > 100) {  // Change this line
    return "Over 100";
  }

  if (val > 10) {  // Change this line
    return "Over 10";
  }

  return "10 or Under";
}

testGreaterThan(100);



```

[7.Comparison with the Greater Than Or Equal Operator](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-greater-than-or-equal-to-operator)
```js
// Finish and Paste your solution here
function testGreaterOrEqual(val) {
  if (val >= 20 ) {  // Change this line
    return "20 or Over";
  }

  if (val >= 10 ) {  // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}

testGreaterOrEqual(10);



```

[8.Comparison with the Less Than Operator](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-less-than-operator)
```js
// Finish and Paste your solution here
function testLessThan(val) {
  if (val < 25 ) {  // Change this line
    return "Under 25";
  }

  if (val < 55 )
  {  // Change this line
    return "Under 55";
  }

  return "55 or Over";
}

testLessThan(10);



```

[9.Comparison with the Less Than Or Equal To Operator](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-less-than-or-equal-to-operator)
```js
// Finish and Paste your solution here
function testLessOrEqual(val) {
  if (val <= 12 
  ) {  // Change this line
    return "Smaller Than or Equal to 12";
  }

  if (val <= 24) {  // Change this line
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}



```

## And และ Or
[10.Comparisons with the Logical And Operator](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/comparisons-with-the-logical-and-operator)
```js
// Finish and Paste your solution here
function testLogicalAnd(val) {
  // Only change code below this line

  if (val > 5 && val < 24  ) {
    if (true) {
      return "Yes";
    }
  }

  // Only change code above this line
  return "No";
}



```

[11.Comparisons with the Logical Or Operator](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/comparisons-with-the-logical-or-operator)
```js
// Finish and Paste your solution here
function testLogicalOr(val) {
  // Only change code below this line

  if (val < 10 || val >= 21) {
    return "Outside";
  }
  return "Inside";
}

testLogicalOr(15);




```

# Else,Else if

[1.Introducing Else Statements](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/introducing-else-statements)
```js
// Finish and Paste your solution here
function testElse(val) {
  let result = "";
  // Only change code below this line

  if (val >= 11 || val >= 6 ) {
    result = "Bigger than 5";
  }
  else {
    result = "5 or Smaller";
  }
  return result;
}

testElse(10);



```

[2.Introducing Else If Statements](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/introducing-else-if-statements)
```js
// Finish and Paste your solution here
function testElseIf(num) {
    if (num < 5) {
        return "Smaller than 5";
    } else if (num >= 5 && num <= 10) {
        return "Between 5 and 10";
    } else {
        return "Greater than 10";
    }
}



```


[3.Logical Order in If Else Statements](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/logical-order-in-if-else-statements)
```js
// Finish and Paste your solution here
function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val >= 5 && val <= 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}

orderMyLogic(7);



```

[4.Chaining If Else Statements](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/chaining-if-else-statements)
```js
// Finish and Paste your solution here
function testSize(num) {
  if(num < 5) {
    return "Tiny"
  }
  else if(num <= 9) {
    return "Small"
  }
  else if(num <= 14) {
    return "Medium"
  }
  else if(num <= 19) {
    return "Large"
  }
  else {
    return "Huge";
  } 
}

testSize(1);



```

# Application
[1.Golf Code](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/golf-code)
```js
// Finish and Paste your solution here
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
 if (par === 4 && strokes === 1) {
   return "Hole-in-one!"
 }
 else if (par === 4 && strokes === 2) {
   return "Eagle"
 }
 else if (par === 5 && strokes === 2) {
   return "Eagle"
 }
  else if (par === 4 && strokes === 3) {
   return "Birdie"
 }
  else if (par === 4 && strokes === 4) {
   return "Par"
 }
 else if (par === 1 && strokes === 1) {
   return "Hole-in-one!"
 }
 else if (par === 5 && strokes === 5) {
   return "Par"
 }
 else if (par === 4 && strokes === 5) {
   return "Bogey"
 }
 else if (par === 4 && strokes === 6) {
   return "Double Bogey"
 }
 else {
  return "Go Home!"
 }
}

golfScore(4, 1);



```
