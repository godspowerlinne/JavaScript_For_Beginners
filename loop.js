// ---------- from 0 to 100 ----------------

// Use for loop to iterate from 0 to 100 and print only even numbers

for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// Use while loop to iterate from 0 to 100 and print only even numbers

let j = 0;
while (j <= 100) {
    if (j % 2 === 0) {
        console.log(j);
    }
    j++;
}

// Use do-while loop to iterate from 0 to 100 and print only even numbers

let k = 0;
do {
    if (k % 2 === 0) {
        console.log(k);
    }
    k++;
} while (k <= 100);

// Use for loop to iterate from 0 to 100 and print only odd numbers 

for (let a = 0; a <= 100; a++) {
    if (a % 2 === 1){
        console.log(a);
    }
}

// Use while loop to iterate from 0 to 100 and print only odd numbers

let b = 0;
while (b <= 100) {
    if (b % 2 === 1){
        console.log(b);
    }
    b++;
}

// Use do-while loop to iterate from 0 to 100 and print only odd numbers

let c = 0;
do {
    if (c % 2 === 1){
        console.log(c);
    }
    c++;
} while (c <= 100);

// ---------- from 100 to 0 ----------------

// Use for loop to iterate from 100 to 0 and print only even numbers

for (let d = 100; d >= 0; d--) {
    if (d % 2 === 0){
        console.log(d);
    }
}

// Use while loop to iterate from 100 to 0 and print only even numbers

let e = 100;
while (e >= 0) {
    if (e % 2 === 0){
        console.log(e);
    }
    e--;
}

// Use do-while loop to iterate from 100 to 0 and print only even numbers

let f = 100;
do {
    if (f % 2 === 0){
        console.log(f);
    }
    f--;
} while (f >= 0);

// Use for loop to iterate from 100 to 0 and print only odd numbers

for (let g = 100; g >= 0; g--) {
    if (g % 2 === 1){
        console.log(g);
    }
}

// Use while loop to iterate from 100 to 0 and print only odd numbers

let h = 100;
while (h >= 0) {
    if (h % 2 === 1){
        console.log(h);
    }
    h--;
}

// Use do-while loop to iterate from 100 to 0 and print only odd numbers

let i = 100;
do {
    if (i % 2 === 1){
        console.log(i);
    }
    i--;
} while (i >= 0);

// Use for loop to iterate from 100 to 0 and print only numbers that are divisible by 3 and 5

for (let j = 100; j >= 0; j--) {
    if (j % 3 === 0 && j % 5 === 0){
        console.log(j);
    }
}

// Use while loop to iterate from 100 to 0 and print only numbers that are divisible by 3 and 5

let v = 100;
while (v >= 0) {
    if (v % 3 === 0 && k % 5 === 0){
        console.log(v);
    }
    v--;
}

// Use do-while loop to iterate from 100 to 0 and print only numbers that are divisible by 3 and 5

let l = 100;
do {
    if (l % 3 === 0 && l % 5 === 0){
        console.log(l);
    }
    l--;
} while (l >= 0);

// Use for loop to iterate from 100 to 0 and print only numbers that are divisible by 3 or 5

for (let m = 100; m >= 0; m--) {
    if (m % 3 === 0 || m % 5 === 0){
        console.log(m);
    }
}

// Use while loop to iterate from 100 to 0 and print only numbers that are divisible by 3 or 5

let n = 100;
while (n >= 0) {
    if (n % 3 === 0 || n % 5 === 0){
        console.log(n);
    }
    n--;
}

// Use do-while loop to iterate from 100 to 0 and print only numbers that are divisible by 3 or 5

let o = 100;
do {
    if (o % 3 === 0 || o % 5 === 0){
        console.log(o);
    }
    o--;
} while (o >= 0);

// Use for loop to iterate from 0 to 100 and print the sum of all numbers.

let sum = 0;
for (let p = 0; p <= 100; p++) {
    sum += p;
}
console.log(sum);

// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

let sumEven = 0;
let sumOdd = 0;

for (let q = 0; q <= 100; q++) {
    if (q % 2 === 0) {
        sumEven += q;
    } else {
        sumOdd += q;
    }
}

console.log("Sum of even numbers:", sumEven);

console.log("Sum of odd numbers:", sumOdd);

// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
sumEven1 = 0;
sumOdd1 = 0;
let result = [];

for (let r = 0; r <= 100; r++) {
    if (r % 2 === 0) {
        sumEven1 += r;
    } else {
        sumOdd1 += r;
    }
}

result.push(sumEven1);
result.push(sumOdd1);
console.log(result);

// Develop a small script which generate array of 5 random numbers

let randomNumbers = [];

for (let s = 0; s < 5; s++) {
    randomNumbers.push(Math.floor(Math.random() * 100) + 1);
}

console.log(randomNumbers);

// Develop a small script which generate array of 5 random numbers and sort them in ascending order
// Initialize an empty array to store the random numbers
let randomNumbersSorted = [];

// Use a for loop to generate 5 random numbers
for (let t = 0; t < 5; t++) {
    // Generate a random number between 1 and 100 (inclusive) using Math.random() and Math.floor()
    randomNumbersSorted.push(Math.floor(Math.random() * 100) + 1);
}

// Use the sort() method to sort the array in ascending order
// The sort() method takes a compare function as an argument
// The compare function takes two arguments (a and b) and returns a negative number, zero, or a positive number
// If the compare function returns a negative number, a comes before b in the sorted array
// If the compare function returns zero, a and b are considered equal and their order is unchanged
// If the compare function returns a positive number, b comes before a in the sorted array
// Here, we use (a, b) => a - b as the compare function to sort the numbers in ascending order
randomNumbersSorted.sort((a, b) => a - b);

// Print the sorted array of random numbers
console.log(randomNumbersSorted);

// Develop a small script which generate array of 5 random numbers and sort them in descending order
// Initialize an empty array to store the random numbers
let randomNumbersSortedDescending = [];

// Use a for loop to generate 5 random numbers
for (let i = 0; i < 5; i++) {
    // Generate a random number between 1 and 100 (inclusive) using Math.random() and Math.floor()
    randomNumbersSortedDescending.push(Math.floor(Math.random() * 100) + 1);
    // Use the sort() method with a compare function to sort the array in descending order
    // Here, we use (a, b) => b - a as the compare function to sort the numbers in descending order
    randomNumbersSortedDescending.sort((a, b) => b - a);
    // Print the sorted array of random numbers
    console.log(randomNumbersSortedDescending);
}

// Develop a small script which generate array of 5 random numbers and calculate their average
// Initialize an empty array to store the random numbers
let randomNumbersAverage = [];
// Use a for loop to generate 5 random numbers
for (let j = 0; j < 5; j++) {
    // Generate a random number between 1 and 100 (inclusive) using Math.random() and Math.floor()
    randomNumbersAverage.push(Math.floor(Math.random() * 100) + 1);
    // Calculate the sum of all the random numbers
    let sum = randomNumbersAverage.reduce((accumulator, currentValue) => accumulator + currentValue);
    // Calculate the average by dividing the sum by the number of elements
    let average = sum / randomNumbersAverage.length;
    // Print the average
    console.log("Average:", average);
}


// Develop a small script which generate array of 5 random numbers and the numbers must be unique
// Initialize an empty array to store the random numbers
let randomNumbersUnique = [];
// Use a for loop to generate 5 random numbers
for (let k = 0; k < 5; k++) {
    // Generate a random number between 1 and 100 (inclusive) using Math.random() and Math.floor()
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    // Check if the random number is already in the array
    while (randomNumbersUnique.includes(randomNumber)) {
        // If the random number is already in the array, generate a new random number
        randomNumber = Math.floor(Math.random() * 100) + 1;
    }
    // Add the random number to the array
    randomNumbersUnique.push(randomNumber);
    // Print the unique random numbers
    console.log(randomNumbersUnique);
}