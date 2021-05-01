# What are the conditional statements?

Conditional statements are used to decide the flow of execution based on different conditions. If a condition is true, you can perform one action and if the condition is false, you can perform another action.
In this lesson, we will explore how programs make decisions by evaluating conditions and introduce logic into our code! We’ll be covering the following concepts:

- if, else if, and else statements.
- comparison operators.
- logical operators.
- truthy vs falsy values.
- ternary operators.
- the switch statement.

## If Statement

From here, we will learn about the if statement. With the if statement, you can specify a block of Javascript code to be executed only if a condition is true

### Writing If Statement

Using an if statement makes it possible to apply a condition in your logic. If you put a condition in (), the code inside {} will be executed only if the condition is true. Below is an example of an if statement. The score variable is 70, which meets the condition (score >= 60). Therefore, the code inside {} will be executed.

```js
var score = 70; // declaring and intializing a variable score

// if condition to check the value of score
if (score >= 60) {
  console.log("Print", "Score is good"); //it gets executed if if-condition gets satisfied.
}
```

```js
//Output
Print Score is good
```

### Writing If - Else statements

Using an if statement makes it possible to apply a condition in your logic. If you put a condition in (), the code inside {} will be executed only if the condition is true and if the condition is false then code inside _else {}_ will get executed. Below is an example of an if statement. The score variable is 50, which does not meet the condition (score >= 60). Therefore, the code inside _else {}_ will be executed.

```js
var score = 50; // declaring and intializing a variable score

// if condition to check the value of score
if (score >= 60) {
  console.log("Print", "Score is good"); //it gets executed if if-condition gets satisfied but not in this case.
} else {
  cosnole.log("Print", "Score is bad"); // if condition is not satisfied.
}
```

```js
//Output
Print Score is bad
```

## Writing Else If Statement

In addition to the `if-else statements`, there is another useful conditional statement called the `else if statement`.
It is used to add more than one condition in `if-else statements`. You can add as many `else if statements` as you want.

```js
if(condition 1){
    //some code
    //Run this if condition 1 is true
}else if(condition 2){
    //some code
    //Run this if condition 1 is false but condition 2 is true
}else{
    //some code
    //Run this if all the condition are false
}
```

```js
var score = 60; // declaring a variable score
if (score > 80) {
  // checking value of score is greater than 80 or not
  console.log("Print", "score is good"); // is printed if value of score is greater than 80
} else if (score > 50) {
  // checking else the value of score is greater than 50 or not
  console.log("Print", "Need some improvement"); // is printed if condition in else is satisfied.
} else {
  console.log("Print", "Need major improvement");
}
```

```js
//output
Print Need some improvement
```
### Writing conditional statements using ternary operator

The **conditional (ternary) operator** is the only JavaScript operator that takes three operands: a condition followed by a question mark (`?`), then an expression to execute if the condition `satisfies` followed by a colon (`:`), and finally the expression to execute if the condition `doesn't satisfy`. This operator is frequently used as a shortcut for the if statement.

```js
var score = 50; // declaring and intializing a variable score

(score >= 60) ? console.log("Print", "Score is good") : console.log("Print", "Score is bad"); // Since condition doesn't gets satisfied, so expression from right side of : will execute

```

```js
//Output
Print Score is bad
```
```js
var score = 80; // declaring and intializing a variable score

const status = (score >= 60) ? "Score is good" : "Score is bad"; // Since condition gets satisfied, so data from left side of : will be store inside status
console.log(status)
```

```js
//Output
Score is good
```
