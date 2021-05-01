# Fundamentals-of-JS
## Task22
### write a JS program to check if the last digit of the three given positive integers is the same.

 Return true if they are the same and false otherwise. Your output code should return the resulting variable.

Take input variables (number1, number2, number3) as the parameter of your function.

Steps:

- Define variable to store true or false
- Use if to check if the 3 numbers are positive
- Use if inside if to check if the last digit of the 3 numbers are the same
  - Use `%` to get the last digit from a number.
  - For more you can refer to [**this wiki file**](https://workspace.konfinity.com/wiki/fundamental-of-javascript-wiki/-/wikis/21-operators)
- Use else to return false if the last digits are not the same
- Use else to return false if the given numbers are not positive
- Create an output variable and store the result in it
- Return the output variable
- Assign the function to `module.exports` using `=` . For now, just use the below code:

```js
module.exports = YourfunctionName ;
```

