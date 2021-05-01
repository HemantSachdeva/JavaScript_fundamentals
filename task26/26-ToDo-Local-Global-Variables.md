# To-Do : Write a JS Program to define Local and Global Scope

Here, we have a local variable and a global variable with the name myname. A local variable is declared inside the function hello and its value is only valid within { }. The variable created outside the function can be used anywhere outside the function and its value is valid in the global scope. Check output to see the difference


- Open `practice26.js` and comment previous codes.
- Copy the below codes in that file.


```js
var myname = "Anubhav";

function hello() {
  var myname = "Pooja";
  console.log("Print", "Hello " + myname);
}

hello();
//Above code prints myname as Pooja

console.log("Print", "My name is " + myname);
```
