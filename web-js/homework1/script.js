let name = prompt("Enter your name:");
let age = parseInt(prompt("Enter your age:"));

if (age < 18) {
    alert("You are not allowed to visit this website");
}

if (age >= 18 && age <= 22) {
    let isConfirmed = confirm("Are you sure you want to continue?");

    isConfirmed ? alert(`Welcome, ${name}`) : alert("You are not allowed to visit this website");
}

if (age > 22) {
    alert(`Welcome, ${name}`);
}