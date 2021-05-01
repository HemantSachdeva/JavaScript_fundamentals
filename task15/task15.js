function output(num1, num2) {
    var sum = num1 + num2;
    if (num1 == num2) {
        return sum * 3;
    }
    if (num1 != num2) {
        return sum;
    }
}

console.log(output(4,3));

module.exports = output;
