# To-Do : Write a JS program to show Comparison With (===)


In the below example, we will see how Javascript differentiates between (==) and (===). We will use (=) to assign value to a variable and (===) to compare both the values and types (string, integer) with other expressions of the same and different types.



- Open `practice13.js` and comment previous codes.
- Copy the below codes in that file.


```js
var s1 = 5, s2 = "World";

/* === is used to compare both values
and type*/

console.log('Compare', s1==='5');
//Prints false

console.log('Compare', s1===46);
//Prints false

console.log('Compare', s1===5);
//Prints true

console.log('compare', s2==='apples');
//Prints false

console.log('compare', s2==='World');
```
