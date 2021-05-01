function perc() {
    var sub1 = 50;
    var sub2 = 40;
    var sub3 = 60;
    var sub4 = 90;
    var sub5 = 10;
    var sum = sub1 + sub2 + sub3 + sub4 + sub5;
    var percentage = (sum/500) * 100;
    return percentage;
}
console.log("Your percentage is ", perc());
module.exports = perc;
