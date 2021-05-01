
function output(num1, num2, num3) {
    if (num1 > num2) {
        if (num1 > num3) {
            return num1;
        }
    }
    else if (num2 > num3) {
        if (num2 > num1) {
            return num2;
        }
    }
    else {
        return num3;
    }
}

console.log(output(103, 104, 102));

module.exports = output;
