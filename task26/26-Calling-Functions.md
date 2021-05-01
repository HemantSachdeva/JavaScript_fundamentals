# Calling Functions Inside Other Functions 

In this demo, you will learn how to create a function with and without arguments. You will also learn to call functions. Here we first create a function with name join with 2 arguments. This function is called into another function with name secondFunction which is without arguments and then we call secondFunction and print output.



```js
function join(first, last) {
var full;
  full = first + last;
return full;
}
function secondFunction() {
var result;
  result = join('hello', 'world');
  return result;
}

var output = secondFunction();
console.log("Output" , output );
```

**Output**

```
Output helloworld
```