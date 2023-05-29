let number = parseInt(prompt("Enter a number:"));

let result = [];

for (let i = 0; i <= number; i++) {
    if (i % 5 === 0) {
        result.push(i);
    }
}

result.length === 0 ? console.log("Sorry, no numbers") : console.log(result.join(', '));