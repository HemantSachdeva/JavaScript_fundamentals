function output(num1, num2) {
    var sum = num1 + num2;
    if (sum >= 50 && sum <= 80) {
        return 65;
    }
    else {
        return 80;
    }
}

console.log(output(50,200));

module.exports = output;

