### Objects in JavaScript

#### Creating Objects

```javascript
// Using object literal
const person = {
  name: 'John Doe',
  age: 30,
  occupation: 'Software Developer'
};

// Using Object constructor
const person2 = new Object({
  name: 'Jane Doe',
  age: 25,
  occupation: 'Software Engineer'
});

// Using object.create()
const person3 = Object.create({
  name: 'John Doe',
  age: 30,
  occupation: 'Software Developer'
});
```

#### Accessing Object Properties

```javascript
// Using dot notation
console.log(person.name); // Output: John Doe

// Using bracket notation
console.log(person['age']); // Output: 30
```

#### Updating Object Properties

```javascript
// Using dot notation
person.name = 'Jane Doe';
console.log(person.name); // Output: Jane Doe

// Using bracket notation
person['age'] = 25;
console.log(person.age); // Output: 25
```

#### Deleting Object Properties

```javascript
// Using delete operator
delete person.occupation;
console.log(person); // Output: { name: 'Jane Doe', age: 25 }
```

#### Object Methods

```javascript
const person = {
  name: 'John Doe',
  age: 30,
  occupation: 'Software Developer',
  greet: function() {
    console.log(`Hello, my name is ${this.name} and I am a ${this.occupation}.`);
  }
};

person.greet(); // Output: Hello, my name is John Doe and I am a Software Developer.
```

#### Object Inheritance

```javascript
const person = {
  name: 'John Doe',
  age: 30,
  occupation: 'Software Developer'
};

const employee = Object.create(person);
employee.company = 'ABC Corporation';
console.log(employee); // Output: { company: 'ABC Corporation' }
console.log(employee.name); // Output: John Doe
```

#### Object Iteration

```javascript
const person = {
  name: 'John Doe',
  age: 30,
  occupation: 'Software Developer'
};

for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}
// Output:
// name: John Doe
// age: 30
// occupation: Software Developer
```

#### Object Destructuring

```javascript
const person = {
  name: 'John Doe',
  age: 30,
  occupation: 'Software Developer'
};

const { name, age, occupation } = person;
console.log(name); // Output: John Doe
console.log(age); // Output: 30
console.log(occupation); // Output: Software Developer
```