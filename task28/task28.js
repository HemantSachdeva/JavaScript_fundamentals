function output(base, perpendicular) {
    var triangle = 0.5 * base * perpendicular;
    var square = base * base;
    if (triangle > square) {
        return triangle;
    }
    else {
        return square;
    }
}

console.log(output(10, 10));

module.exports = output;
