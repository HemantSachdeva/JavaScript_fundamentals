function output(num1, num2, num3) {
    if (num1 == num2 && num2 == num3) {
        return 30;
    }
    else if (((num1 == num2) && num1 != num3) || ((num1 == num3) && num1 != num2) || ((num2 == num3) && num2 != num1)) {
        return 20;
    }
    else {
        return 40;
    }
}

console.log(output(2,2,3));

module.exports = output;
