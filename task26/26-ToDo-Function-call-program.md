# To-Do : Write a JS Program to Call functions inside other functions


Here we first create a function with name join with 2 arguments. This function is called into another function with name secondFunction which is without arguments and then we call secondFunction and print output.


- Open `practice26.js` and comment previous codes.
- Copy the below codes in that file.


```js
function join(first, last) {
  var full;
  full = first + last;
  return full;
}
function secondFunction() {
  var result;
  result = join("hello", "world");
  return result;
}

var output = secondFunction();
console.log("Output", output);
```
