# To-Do : Write a JS program using functions that returns the result.


In this program, we are going to define two functions sum and product.

sum() function will have two arguments : a,b

sum(a,b) will calculate and return the sum of a and b.


product() function will have two arguments : a,b

product(a,b) will calculate and return the product of a and b.


- Open `practice08.js` and comment previous codes.
- Copy the below codes in that file.


```js
function sum(a,b){
    var s = a+b;
    return s;
}
function product(a,b){
    var p = a*b;
    return p;
}

var s=sum(5,4);
console.log("Sum is ",s);
var p=product(4,10);
console.log("Product is ",p);
```

* [ ]  Checked function should return value

In the above program, we have created two functions sum and product which calculates the sum and product of provided arguments respectively and returns it. After defining the functions we call them using some values and since these functions return the result we need to store them in a variable, therefore, we have defined two variable s and p to store the results and then print them using console.log().
