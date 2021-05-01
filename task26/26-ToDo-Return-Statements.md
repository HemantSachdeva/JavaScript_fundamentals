# To-Do : Write a JS Program to define return statement

Here we have created a function to calculate the product of 2 parameters and send the result using the return statement. When the function is called with arguments, the return value replaces the caller function and is assigned to the output variable. Note: Any code after the return is ignored by the function so, console.log() after the return is not executed.



- Open `practice26.js` and comment previous codes.
- Copy the below codes in that file.


```js
function multiply(a, b) {
  var product = a * b;

  return product;
  //function stops after return

  console.log(a + b);
  //Above code is not executed
}

var output = multiply(10, 15);

console.log("output is", output);
```
