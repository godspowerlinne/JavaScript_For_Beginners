// JavaScript Data Types Exercise

// 1. Create variables of each data type (Number, String, Boolean, Null, Undefined, Object, Array)
let numberVar = 42;
let stringVar = "Hello, JavaScript!";
let booleanVar = true;
let nullVar = null;
let undefinedVar;
let objectVar = { name: "John", age: 30 };
let arrayVar = [1, 2, 3, 4, 5];

// 2. Use typeof operator to check the type of each variable
console.log("numberVar is of type:", typeof numberVar);
console.log("stringVar is of type:", typeof stringVar);
console.log("booleanVar is of type:", typeof booleanVar);
console.log("nullVar is of type:", typeof nullVar);
console.log("undefinedVar is of type:", typeof undefinedVar);
console.log("objectVar is of type:", typeof objectVar);
console.log("arrayVar is of type:", typeof arrayVar);

// 3. Perform type conversion
let stringNumber = "42";
let convertedNumber = Number(stringNumber);
console.log("Converted number:", convertedNumber, "Type:", typeof convertedNumber);

let numberBoolean = 1;
let convertedBoolean = Boolean(numberBoolean);
console.log("Converted boolean:", convertedBoolean, "Type:", typeof convertedBoolean);

// 4. Demonstrate type coercion
let coercedSum = 5 + "5";
console.log("Coerced sum:", coercedSum, "Type:", typeof coercedSum);

// 5. Create a function that takes different data types as arguments
function displayTypes(num, str, bool, obj, arr) {
    console.log("Number:", num, "Type:", typeof num);
    console.log("String:", str, "Type:", typeof str);
    console.log("Boolean:", bool, "Type:", typeof bool);
    console.log("Object:", obj, "Type:", typeof obj);
    console.log("Array:", arr, "Type:", typeof arr);
}

// Call the function with different data types
displayTypes(10, "Hello", false, { x: 1, y: 2 }, [1, 2, 3]);

// 6. Bonus: Demonstrate the difference between null and undefined
console.log("null == undefined:", null == undefined);
console.log("null === undefined:", null === undefined);