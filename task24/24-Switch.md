# Switch Case 

You can also use the Switch statement for multiple cases of conditions. In switch(), the value inside () is compared with the value in each case. If there is a match, the code given in that case will be run. The default specifies the code to run if there is no match. Always put a break at the end of each case as, without break, the switch will not end and continue to the next case.


```js
switch(expression){
    //Run the case whose value matches with the expression value
    case value1:
        //Run this code
        break;
    case value2:
        .
        .
        .
    default:    //(Run default case if no value matches)
        //Run this code
}
```

## Writing Switch Statement 

In the below example, we have used prompt() to ask the user for an input. We have also used the switch statement on the input variable. In switch, we have mentioned 3 cases and a default case. When the input value matches the case value, the code of the case is run. If there is no match, the default code statement is run


- Create variable i

- Apply switch on input variable i

- Write the first case with value 0 and its code.

- Write the second case with value 1 and its code. End with break

- Write the third case with value 2 and it's code. End with break

- Write default case and it's code

```js
var i = 0;

switch (i) {
  case 0:
    console.log("You have entered 0");
  //Break not applied
  //Program continues to next case
  case 1:
    console.log("You have entered 1");
    break;
  case 2:
    console.log("You have entered 2");
    break;
  default:
    console.log("Your number is greater than 2");
}
```

**Output**

```js
You have entered 0
You have entered 1
```

## Break Statement

With switch statements, every case needs a break at the end. Without it, the switch statement would not end, and continue on to the next case. In the below example, we have not put a break in case 0. Hence, the switch continues on to case 1 and runs the code of both cases.


- Create variable i and assign value 0

- Apply switch on the input variable

- Write the first case with value 0 and its code.

- Write the second case with value 1 and its code. End with break

- Write the third case with value 2 and its code. End with break

- Write default case and it's code

```js
var i = 0;

switch (i) {
  case 0:
    console.log("You have entered 0");
    break;
  case 1:
    console.log("You have entered 1");
    break;
  case 2:
    console.log("You have entered 2");
    break;
  default:
    console.log("Your number is greater than 2");
}
```

**Output**

```js
You have entered 0
```