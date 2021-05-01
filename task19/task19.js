
function output(num) {
    if (num > 0 && (num % 3 == 0 || num % 7 == 0)) {
        return true;
    }
    else {
        return false;
    }
}

console.log(output(49));

module.exports = output;
