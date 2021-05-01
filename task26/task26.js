function output(num1, num2) {
    if (num1 && num2 == 8) {
        return true;
    }
    else if (num1 + num2 == 8) {
        return true;
    }
    else {
        return false;
    }
}

console.log(output(8,8));

module.exports = output;
