# Variable Scope In Functions 

A scope is an area in which a variable can be used. In Javascript, there are 2 types of scopes: Local and Global. When you define a variable inside a function, you can use it only in that function or its local scope (local variable). If you define a variable outside a function, it can be used anywhere in your code and hence, are in the global scope (Global variables)


```js
var gl =10;
function fun(){
   var lo = 5;
}
```
In the above code variable gl is global variable and variable lo is local variable.
## Local and global Variables


In the below example, we have a local variable and a global variable with the name myname. A local variable is declared inside the function hello and its value is only valid within { }. The variable created outside the function can be used anywhere outside the function and its value is valid in the global scope. Check output to see the difference


- Declare global variable and assign value

- Declare a function with name hello

- Create a local variable and write code inside the function

- Call function to print the value of the local variable

- Print value of a global variable using console.log()

```js
var myname = "Rahul";

function hello(){

   var myname = "Pooja";
   console.log("Print","Hello " + myname);
 
}

hello();
//Above code prints myname as Pooja

console.log("Print" ,"My name is " + myname);
//Above code prints myname as Rahul
```
**Output**

```js
Print Hello Pooja
Print My name is Rahul
```