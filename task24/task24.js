function output(choice) {
    switch (choice) {
        case 1:
            return "East";
            break;
        case 2:
            return "West";
            break;
        case 3:
            return "North";
            break;
        case 4:
            return "South";
            break;
        default:
            return "Wrong Input";
    }
}

console.log(output(2));

module.exports = output;
