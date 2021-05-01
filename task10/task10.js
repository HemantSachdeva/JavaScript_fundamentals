function triangle(base, height) {
    var area = 0.5 * base * height;
    return area;
}

console.log("Area of right triangle is ", triangle(10, 10));

module.exports = triangle;
