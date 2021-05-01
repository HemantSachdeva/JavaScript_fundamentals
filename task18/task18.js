
function output(num1, num2) {
    oneInputIsNegative = true;
    if ((num1 > 0 && num2 < 0) || (num1 < 0 && num2 > 0)) {
        return oneInputIsNegative;
    }
    else {
        return !oneInputIsNegative;
    }
}

console.log(output(5,-6));

module.exports = output;
