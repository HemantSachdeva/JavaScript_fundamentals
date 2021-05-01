# Variables

In programming, we often use what is called a Variable. 

- A variable is a container with a name. 
- It is used to store values that belong to a type like integer or strings.
- You can assign a value to a variable using `var` keywords like:- `var VariableName = Value`.
- Here, ‘=’ does not mean equal to but it is an operator used to assign values to a variable.

Using variables is easy!

Three types of keywords can be used to create variables:

- `var`
- `let`
- `const`

You will learn the difference between the above three in later modules. 

In the below example, we have created a variable using `var` with the variable name as `name` and assigned it a string value 'Mayank'.

```js
//Assigning value to variable name

var name = "Mayank";

// name is a variable
// Mayank is value of variable name
```

```js
var myname = "Krishna murti";
var myage = 23;
console.log("My Name is ", myname);
console.log("My age is ", myage);
// Never put your variable name inside double quotes "".
// It will not evaluate your variable's value if puted inside double quotes.
console.log("My Name is ", "myname");
```
`Note :` *Have you noticed the abrupt behaviour of variable if used within double quotes ""*
```js
//Output
My Name is Krishna murti
My age is 23
My Name is myname
```
