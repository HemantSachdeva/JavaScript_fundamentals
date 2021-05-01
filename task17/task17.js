function output(num) {
    var exists;
    if ((num >= 80 && num <= 120) || (num >= 380 && num <= 420)) {
        exists = true;
        return exists;
    }
    else {
        exists = false;
        return exists;
    }
}

console.log(output(390));

module.exports = output;
