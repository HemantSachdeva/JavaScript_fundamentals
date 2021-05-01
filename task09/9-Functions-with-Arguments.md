# Functions With Arguments


You can pass values to a function. These values are called arguments. To receive arguments, the function has variables called parameters. You can pass an argument by calling a function like functionName(arguments). When the function is called, the passed arguments are assigned to the parameters and used inside the function



```js
function add(num1,num2){
  var res =num1+num2;
  return res;
}
var r = add(7,8)
console.log(r);
```

In the above code, num1 and num2 are parameters. 7 and 8 are arguments.

**Output**

```
15
```


## Functions With Arguments

You can pass an argument by calling a function like functionName (arguments). When the function is called, the passed arguments are assigned to the parameters and used inside the function. In the below example, "Rahul" is a string argument which is assigned to myname parameter in the function with name intro. This function joins the parameter to other strings given inside the function.

- Declare a function with name intro and parameter myname

- Write code inside the function to execute

- Call function with an argument

```js
function intro(myname){
   
  console.log("Print","Hello " + myname + ", Welcome to Konfinity!");

}

intro("Rahul");

```
**Output**

```
Print Hello Rahul, Welcome to Konfinity!
```


## Multiple Arguments


You can add multiple parameters to a function by separating them with a comma (,). You can pass multiple arguments in a function, also by separating them with a comma (,). The order of the arguments must match with the order of the parameters so that arguments can be passed to correct parameters inside the function


```js
function multiple_arg(par1,par2,par3){
  //code to be executed
}
var output = multiple_arg(arg1,arg2,arg3);

```
