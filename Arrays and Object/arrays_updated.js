// Array Declaration
let colors = ['red', 'green', 'blue'];

// Array Indexing
console.log(colors[0]); // Output: red

// Array Methods
colors.push('yellow'); // Add an element to the end of the array
console.log(colors); // Output: ['red', 'green', 'blue', 'yellow']

colors.pop(); // Remove the last element from the array
console.log(colors); // Output: ['red', 'green', 'blue']

colors.unshift('purple'); // Add an element to the beginning of the array
console.log(colors); // Output: ['purple', 'red', 'green', 'blue']

colors.shift(); // Remove the first element from the array
console.log(colors); // Output: ['red', 'green', 'blue']

// Array Slicing
let slicedColors = colors.slice(1, 3);
console.log(slicedColors); // Output: ['green', 'blue']

// Array Splicing
colors.splice(1, 1, 'orange');
console.log(colors); // Output: ['red', 'orange', 'blue']

// Array Iteration
for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

// Array Map
let mappedColors = colors.map(color => color.toUpperCase());
console.log(mappedColors); // Output: ['RED', 'ORANGE', 'BLUE']

// Array Filter
let filteredColors = colors.filter(color => color.length > 4);
console.log(filteredColors); // Output: ['orange', 'purple']

// Array Reduce
let reducedColors = colors.reduce((acc, color) => acc + color.length, 0);
console.log(reducedColors); // Output: 15

// Array Destructuring
let fruits = ['apple', 'banana', 'cherry'];
let [firstFruit, secondFruit] = fruits;
console.log(firstFruit); // Output: apple
console.log(secondFruit); // Output: banana

// Finding Elements
let foundFruit = fruits.find(fruit => fruit.startsWith('b'));
console.log(foundFruit); // Output: banana

// Sorting Arrays
let sortedColors = [...colors].sort();
console.log(sortedColors); // Output: ['blue', 'orange', 'red']

// Combining Arrays
let moreColors = ['pink', 'purple'];
let allColors = colors.concat(moreColors);
console.log(allColors); // Output: ['red', 'orange', 'blue', 'pink', 'purple']

// Creating a New Array
let nestedArray = [[1, 2], [3, 4]];
let flatArray = nestedArray.flatMap(arr => arr);
console.log(flatArray); // Output: [1, 2, 3, 4]
