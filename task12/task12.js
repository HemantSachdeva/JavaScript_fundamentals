function curr(INR) {
    var USD = INR / 75;
    return USD;
}

console.log(curr(1));

module.exports = curr;
