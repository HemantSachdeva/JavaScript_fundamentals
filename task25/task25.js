function output(num1, num2, choice) {
    switch (choice) {
        case 1:
            return num1 + num2;
            break;
        case 2:
            return num1 - num2;
            break;
        case 3:
            return num1 * num2;
            break;
        case 4:
            return num1 / num2;
            break;
        default:
            return "Wrong Input";
    }
}

console.log(output(6,9,1));

module.exports = output;
