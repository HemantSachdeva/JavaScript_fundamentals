function ly(year){

    if (year % 4 == 0 && year % 100 !== 0) {
        return 1;
    }

    else if (year % 100 == 0 && year % 400 == 0) {
        return 1;
    }

    else 
        return 0;
}

output = ly(2021);
console.log(output);

module.exports = ly;
