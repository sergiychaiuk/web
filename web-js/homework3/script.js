function calculate(num1, num2, operation) {
    let result;

    switch (operation) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
            break;
    }

    return result;
}

let num1 = "", num2 = "", operation = "";
const regex = /^-?\d+(?:\.\d+)?$/;

do {
    num1 = prompt("Enter the first number:", num1);
} while (!regex.test(num1));

do {
    num2 = prompt("Enter the second number:", num2);
} while (!regex.test(num2));

do {
    operation = prompt("Enter a mathematical operation (+, -, *, /):", operation);
} while (operation !== "+" && operation !== "-" && operation !== "*" && operation !== "/");

console.log(calculate(parseFloat(num1), parseFloat(num2), operation));