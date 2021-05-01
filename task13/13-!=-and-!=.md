# Usage of != And !==


In the below example, we will see how to use (!=) & (!==). (!=) is used to compare only the values of two expressions and (!==) is used to compare both the values and types (string, integer) of expressions.


```js
var s2 = 10;

// != is used to compare values only

console.log('Compare', s2!=10);
//Prints false

console.log('Compare', s2!= '10');
//Prints false

// !== compares both value and type

console.log('Compare',s2!=='10');
//Prints true

console.log('Compare', s2!==5);
//Prints true
```