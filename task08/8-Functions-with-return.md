# Function with return

You can send the output value of a function to the place where the function is called using the return statement. In addition to sending the function output to the function caller, return statement also stops the function immediately so anything that comes after the return is not executed


```js
function ret(var a,var b,var c){
   return(a+b);
}
```

## Return Statement In Functions


In the below example, we have created a function to calculate the product of 2 parameters and send the result using the return statement. When the function is called with arguments, the return value replaces the caller function and is assigned to the output variable. Note: Any code after the return is ignored by the function so, console.log() after the return is not executed.

- Declare a function and provide parameters

- Write code inside the function to execute

- Use the return statement to stop function and provide result

- Use console.log after the return

- Call the function with arguments and assign the value to the output variable

- Print output using console.log()

```js
function multiply(a,b){
 
    var product = a*b;
    return product;
   //function stops after return

    console.log(a+b);
	//Above code is not executed

}

var output = multiply(10,15);

console.log("output is", output);
```
**Output**

```
output is 150.00
```