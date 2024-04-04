const prompt = require('prompt-sync')();

let dayNumber = Number(prompt("Enter the Day Number"));

switch (dayNumber) {
    case 0:
        console.log("It's Sunday");
        break;
    case 1:
        console.log("It's Monday");
        break;
    case 2:
        console.log("It's Tuesday");
        break;
    case 3:
        console.log("It's Wednesday");
        break;
    case 4:
        console.log("It's Thrusday");
        break;
    case 5:
        console.log("It's Friday");
        break;
    case 6:
        console.log("It's Saturday");
        break;
    default:
        console.log("Enter range bwt 0 to 6");
        break;
}