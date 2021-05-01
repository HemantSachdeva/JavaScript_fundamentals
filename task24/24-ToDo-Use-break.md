# To-Do : Write a JS program to show Usage of Break Statement


With switch statements, every case needs a break at the end. Without it, the switch statement would not end, and continue to the next case. In the below example, we have not put a break in case 0. Hence, the switch continues to case 1 and runs the code of both cases.


- Open `practice24.js` and comment previous codes.
- Copy the below codes in that file.


```js
var i = 0;

switch(i){
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
