# JavaScript Data Types

```javascript
let integer = 42;
let float = 3.14;
let negative = -10;
let scientific = 2.5e5; // 250000

console.log(integer + float);
console.log(scientific - negative);
console.log(integer * float);
console.log(float / integer);
console.log(5 % 2); // Modulus (remainder)

// Special number values
let infinity = Infinity;
let negativeInfinity = -Infinity;
let notANumber = NaN;

console.log(1 / 0); // Infinity
console.log(-1 / 0); // -Infinity
console.log(0 / 0); // NaN
let singleQuotes = 'Hello';
let doubleQuotes = "World";
let backticks = `JavaScript`;

// String concatenation
console.log(singleQuotes + ' ' + doubleQuotes);

// Template literals
console.log(`${singleQuotes}, ${doubleQuotes}! Welcome to ${backticks}`);

// String methods
let text = "   JavaScript is awesome!   ";
console.log(text.length);
console.log(text.trim());
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.indexOf('awesome'));
console.log(text.slice(3, 13));
console.log(text.replace('awesome', 'amazing'));
let isTrue = true;
let isFalse = false;

console.log(isTrue && isFalse); // Logical AND
console.log(isTrue || isFalse); // Logical OR
console.log(!isTrue); // Logical NOT

// Truthy and falsy values
console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean('')); // false
console.log(Boolean('hello')); // true
console.log(Boolean([])); // true
console.log(Boolean({})); // true
let undefinedVar;
console.log(undefinedVar);

function returnNothing() {}
console.log(returnNothing());

let arr = [1, 2, 3];
console.log(arr[5]); // Undefined
let nullVar = null;
console.log(nullVar);

console.log(typeof null); // "object" (this is a known JavaScript bug)
console.log(null === undefined); // false
console.log(null == undefined); // true
let sym1 = Symbol('foo');
let sym2 = Symbol('foo');

console.log(sym1 === sym2); // false
console.log(String(sym1)); // "Symbol(foo)"

let obj = {
  [sym1]: "Value for sym1"
};

console.log(obj[sym1]);
let bigInt = 1234567890123456789012345678901234567890n;
console.log(bigInt);

let result = bigInt + 1n;
console.log(result);

// console.log(bigInt + 1); // This will throw an error
let person = {
  name: "John",
  age: 30,
  isStudent: false,
  greet: function() {
    console.log(`Hello, my name is ${this.name}`);
  }
};

console.log(person.name);
console.log(person['age']);
person.greet();

// Adding and removing properties
person.country = "USA";
delete person.isStudent;

console.log(Object.keys(person));
console.log(Object.values(person));
let fruits = ['apple', 'banana', 'orange'];
console.log(fruits.length);
console.log(fruits[1]);

fruits.push('grape');
fruits.unshift('kiwi');
console.log(fruits);

let lastFruit = fruits.pop();
let firstFruit = fruits.shift();
console.log(fruits);

// Array methods
let numbers = [1, 2, 3, 4, 5];
let doubled = numbers.map(num => num * 2);
let evenNumbers = numbers.filter(num => num % 2 === 0);
let sum = numbers.reduce((acc, curr) => acc + curr, 0);

console.log(doubled);
console.log(evenNumbers);
console.log(sum);
// Explicit type conversion
console.log(Number("42"));
console.log(String(42));
console.log(Boolean(1));

// Implicit type coercion
console.log("5" + 3); // "53"
console.log("5" - 3); // 2
console.log("5" * "3"); // 15
console.log(5 + "3"); // "53"

// Equality operators
console.log(5 == "5"); // true (coercion)
console.log(5 === "5"); // false (strict equality)
// Function declaration
function greet(name) {
  return `Hello, ${name}!`;
}

// Function expression
let sayHello = function(name) {
  return `Hi, ${name}!`;
};

// Arrow function
let welcome = (name) => `Welcome, ${name}!`;

console.log(greet("Alice"));
function getType(value) {
  if (value === null) return "null";
  if (Array.isArray(value)) return "array";
  if (typeof value === "object" && value instanceof Date) return "date";
  return typeof value;
}

console.log(getType(42));
console.log(getType("hello"));
console.log(getType(true));
console.log(getType(undefined));
console.log(getType(null));
console.log(getType({}));
console.log(getType([]));
console.log(getType(new Date()));
console.log(getType(() => {}));
console.log(sayHello("Bob"));
console.log(welcome("Charlie"));

// Higher-order function
function operate(a, b, operation) {
  return operation(a, b);
}

let add = (x, y) => x + y;
let multiply = (x, y) => x * y;

console.log(operate(5, 3, add));
console.log(operate(5, 3, multiply));
function deepClone(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  if (obj instanceof Date) {
    return new Date(obj.getTime());
  }

  if (Array.isArray(obj)) {
    return obj.map(item => deepClone(item));
  }

  let clonedObj = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      clonedObj[key] = deepClone(obj[key]);
    }
  }

  return clonedObj;
}

let original = {
  a: 1,
  b: { c: 2, d: [3, 4] },
  e: new Date(),
  f: null
};

let cloned = deepClone(original);
console.log(cloned);
console.log(cloned.b === original.b); // false
function isEqual(a, b) {
  if (typeof a !== typeof b) {
    return false;
  }

  if (a === null || b === null) {
    return a === b;
  }

  if (typeof a === "object") {
    if (Array.isArray(a) && Array.isArray(b)) {
      return a.length === b.length && a.every((item, index) => isEqual(item, b[index]));
    }

    if (a instanceof Date && b instanceof Date) {
      return a.getTime() === b.getTime();
    }

    let keysA = Object.keys(a);
    let keysB = Object.keys(b);

    return keysA.length === keysB.length && keysA.every(key => isEqual(a[key], b[key]));
  }

  return a === b;
}

console.log(isEqual(5, 5));
console.log(isEqual(5, "5"));
console.log(isEqual([1, 2, 3], [1, 2, 3]));
console.log(isEqual({ a: 1, b: 2 }, { b: 2, a: 1 }));
console.log(isEqual(new Date("2023-05-20"), new Date("2023-05-20")));
