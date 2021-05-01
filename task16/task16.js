function output(num1, num2) {
    var result;
    if (num1 == 50 || num2 == 50) {
        result = true;
        return result;
    }
    else if (num1 + num2 == 50) {
        result = true;
        return result;
    }
    else {
        result = false;
        return result;
    }
}

console.log(output(25, 25));

module.exports = output;
