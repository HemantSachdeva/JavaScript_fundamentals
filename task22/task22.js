function output(num1, num2, num3) {
    var lastDigit1 = num1 % 10;
    var lastDigit2 = num2 % 10;
    var lastDigit3 = num3 % 10;

    if (lastDigit1 == lastDigit2 && lastDigit2 == lastDigit3) {
        return true;
    }
    else {
        return false;
    }
}

console.log(output(103, 10333, 3));

module.exports = output;

