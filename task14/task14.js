function output(num) {
    if (num < 13) {
        return 13 - num;
    }
    else if (num >= 13) {
        return ((num - 13) * 2);
    }
}

console.log(output(14));

module.exports = output;
