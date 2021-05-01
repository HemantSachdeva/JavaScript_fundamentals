function output(num1, num2, num3) {
    if ((num1 >= 50 && num1 <= 90) || (num2 >= 50 && num2 <= 90) || (num3 >= 50 && num3 <= 90)) {
        return true;
    }
    else {
        return false;
    }
}

console.log(output(100, 101, 100));

module.exports = output;

