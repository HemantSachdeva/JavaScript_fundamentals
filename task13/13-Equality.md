# Equality

As you have learned earlier that ‘=’ is an assignment operator used to assign values to a variable. In Javascript, equality between two variable is established by both ‘==’ and ‘===’. The difference is that a === b returns true if a and b are equal in value and are of the same type and false otherwise. while a == b returns true if a and b have the same value (maybe different type)

## Comparing with (==)

In the below example, we will see how Javascript differentiates between (=) and (==) . We will use (=) to assign value to a variable and (==) to compare only the values with other variables of the same and different types.

```js
var s1 = 5;
var s2 = "World";
// == is used to compare values only

console.log("Compare", s1==46);
// Prints false

console.log("Compare", s1==5);
// Prints true

console.log("Compare", s1=="5");
// Prints true

console.log("Compare", s2=="apples");
// Prints false

console.log("Compare", s2=="World");
// Prints true
```

## Comparing With (===)

In the below example, we will see how Javascript differentiates between (==) and (===). We will use (=) to assign value to a variable and (===) to compare both the values and types (string, integer) with other expressions of the same and different types.

```js
var s1 = 5, s2 = "World";

/* === is used to compare both values
and type*/

console.log("Compare", s1==="5");
//Prints false

console.log("Compare", s1===46);
//Prints false

console.log("Compare", s1===5);
//Prints true

console.log("compare", s2==="apples");
//Prints false

console.log("compare", s2==="World");
//Prints true

```

## Comparing With (!=) And (!==)

!== test whether two expressions are not equal in value and type. != test whether 2 expressions are not equal in values only. If a is equal to b and both are of the same type, a === b returns true and a !== b returns false. If a is NOT equal to b, a === b returns false and a !== b returns true. You can use these operators to compare strings and integers.

```js
a===b; // returns true if left and right are of equal value and type
a!==b; // returns true if left and right are of different value and type
```

## Using != And !==
In the below example, we will see how to compare strings and integers using (!=) and (!==). (!=) is used to compare only the values of two expressions and (!==) is used to compare both the values and types (string, integer) of expressions.

```js
var s2 = 10;

// != is used to compare values only

console.log("Compare", s2!=10);
//Prints false

console.log("Compare", s2!= "10");
//Prints false

// !== compares both value and type

console.log("Compare",s2!=="10");
//Prints true

console.log("Compare", s2!==5);
//Prints true
```

## More Comparison Operators
There are more comparison operators! a < b returns true if a is less than b. a <= b returns true is a is less than or equal to b. Similarly, a > b returns true if a is greater than b and a >= b returns true if a is greater than or equal to b

```js
var s2 = 10;

console.log("Compare", s2 > 10);
//Prints false

console.log("Compare", s2 >= 10);
//Prints true

console.log("Compare", s2 <= 20);
//Prints true

console.log("Compare", s2 < 5);
//Prints false
```

## Logical And (&&) Operators
You can use logical operators to combine conditions. We will start with the && (logical AND) operator. Logical AND operator (&&) is used to combine 2 or more conditions and it will return true if and only if all the conditions are true and false otherwise.

```js
var s2 = 10;

console.log("Return", s2 > 5 && s2 < 35);
//Prints true if both true

console.log("Return", s2>= 10 && s2 >35);
//Prints false if one is false

console.log("Return", s2 >= 20 && s2 < 5);
//Prints false if both false

console.log("Return", s2 < 15 && s2 < 35 && s2==10);
//Prints true if all true
```

## Logical OR ( || ) Operator
Another logical operator is the ( || ) Logical OR operator. Logical OR Operator (||) returns true if at least one of the given conditions is true and false otherwise

```js
var s2 = 10;
console.log("Return", s2 > 5 || s2 < 35);
//Prints true if both true

console.log("Return", s2>= 10 || s2 >35);
//Prints true if one is true

console.log("Return", s2 >= 20 || s2 < 5);
//Prints false if both false

console.log("Return", s2 > 15 || s2 > 35 || s2!=10);
//Prints false if all false
```