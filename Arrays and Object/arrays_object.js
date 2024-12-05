// Basic Object Creation
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    email: "john@example.com"
};

// Accessing Object Properties
console.log(person.firstName); // Dot notation
console.log(person["lastName"]); // Bracket notation

// Adding and Modifying Properties
person.phone = "123-456-7890"; // Adding new property
person.age = 31; // Modifying existing property

// Object Methods
const calculator = {
    add: function(a, b) {
        return a + b;
    },
    subtract(a, b) { // Shorthand method syntax
        return a - b;
    }
};

// Exercise 1: Create a Student Object
const student = {
    name: "Alice Smith",
    grades: [85, 90, 92, 88],
    calculateAverage() {
        return this.grades.reduce((sum, grade) => sum + grade, 0) / this.grades.length;
    }
};
console.log("Student's average grade:", student.calculateAverage());

// Exercise 2: Object Property Manipulation
const car = {
    brand: "Toyota",
    model: "Camry",
    year: 2020
};

// Add a method to display car info
car.getInfo = function() {
    return `${this.year} ${this.brand} ${this.model}`;
};
console.log("Car info:", car.getInfo());

// Exercise 3: Nested Objects
const library = {
    books: [
        {
            title: "JavaScript Basics",
            author: {
                name: "Jane Smith",
                country: "USA"
            },
            year: 2022
        },
        {
            title: "Web Development",
            author: {
                name: "Bob Johnson",
                country: "Canada"
            },
            year: 2021
        }
    ],
    findBooksByYear(year) {
        return this.books.filter(book => book.year === year);
    }
};
console.log("Books from 2022:", library.findBooksByYear(2022));

// Exercise 4: Object Destructuring
const {title, author: {name: authorName}} = library.books[0];
console.log("First book title:", title);
console.log("First book author:", authorName);

// Exercise 5: Object Methods and this Keyword
const bankAccount = {
    balance: 1000,
    transactions: [],
    deposit(amount) {
        this.balance += amount;
        this.transactions.push({type: "deposit", amount});
        return this.balance;
    },
    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            this.transactions.push({type: "withdrawal", amount});
            return this.balance;
        }
        return "Insufficient funds";
    },
    getTransactionHistory() {
        return this.transactions;
    }
};

// Test the bank account
console.log("Initial balance:", bankAccount.balance);
console.log("After deposit:", bankAccount.deposit(500));
console.log("After withdrawal:", bankAccount.withdraw(200));
console.log("Transaction history:", bankAccount.getTransactionHistory());

// Practice Exercises:
// 1. Add a method to the student object to add new grades
// 2. Create a method in the library object to search books by author name
// 3. Add a method to calculate interest in the bankAccount object
// 4. Create an inventory object with methods to add/remove items and check stock

// Example solution for practice exercise 1:
student.addGrade = function(grade) {
    this.grades.push(grade);
    return this.calculateAverage();
};
console.log("After adding new grade:", student.addGrade(95));