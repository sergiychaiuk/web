const isPrime = (num) => {
    if (num <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
};

let m, n;

do {
    m = parseFloat(prompt('Enter the first number (m):'));
    n = parseFloat(prompt('Enter the second number (n):'));
} while (m % 1 !== 0 || n % 1 !== 0 || n <= m);

let primes = [];

for (let i = m; i <= n; i++) {
    if (isPrime(i)) {
        primes.push(i);
    }
}

console.log(`Prime numbers in the range ${m} to ${n}:`, primes.join(', '));