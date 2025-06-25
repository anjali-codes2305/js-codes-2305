//Arrays
const myArray = [1, 2, 3, 4, 5];
const myheros = ["Shaktiman", "Batman", "Superman", "Spiderman"];
const myArray2 = new Array(1, 2, 3, 4, 5);
console.log(myArray[2]); // Output: [1, 2, 3, 4, 5]

//Array methods
console.log(myArray.length); // Output: 5
console.log(myArray.toString()); // Output: "1,2,3,4,5"
myArray.push(6); // Add an element to the end
console.log(myArray); // Output: [1, 2, 3, 4, 5, 6]
myArray.pop(); // Remove the last element
console.log(myArray); // Output: [1, 2, 3, 4, 5]
console.log(myArray.join(" - ")); // Output: "1 - 2 - 3 - 4 - 5"
myArray.unshift(0); // Add an element to the beginning
console.log(myArray); // Output: [0, 1, 2, 3, 4, 5]
myArray.shift(); // Remove the first element
console.log(myArray); // Output: [1, 2, 3, 4, 5]
console.log(myArray.indexOf(3)); // Output: 2 (index of element 3)
console.log(myArray.includes(3)); // Output: true (check if element 3 is present)


//Slice and splice
console.log("A ",myArray);
console.log(myArray.slice(1, 3)); // Output: [2, 3] (slice from index 1 to 3)
console.log("B" , myArray); // Output: [1, 2, 3, 4, 5] (original array remains unchanged)
console.log(myArray.splice(1, 3)); // Remove 2 elements from index 1 and add 6, 7
console.log( "C",myArray); // Output: [1, 5, 6, 7] (elements removed and added)


//some more basics related to arrays(video part-2)
const marvelHeros = ["Shaktiman", "Batman", "Superman", "Spiderman"];
const dcHeros = ["Shaktiman", "Batman", "Superman", "Spiderman"];
marvelHeros.push(dcHeros);
console.log(marvelHeros); // Output: ["Shaktiman", "Batman", "Superman", "Spiderman", ["Shaktiman", "Batman", "Superman", "Spiderman"]]

const allHeros= marvelHeros.concat(dcHeros);
console.log(allHeros); // Output: ["Shaktiman", "Batman",

//Spread operator

const allnewHeros = [...marvelHeros, ...dcHeros];
console.log(allnewHeros); // Output: ["Shaktiman", "Batman", "Superman", "Spiderman", "Shaktiman", "Batman", "Superman", "Spiderman"]

const newArray = [1, 2, [3, 4], 5,6,[7,8 ,9]];
const anotherArray = newArray.flat(Infinity); // Flatten the array
console.log(anotherArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]

Array.isArray(newArray); // Check if newArray is an array
console.log(Array.isArray(newArray)); // Output: true

// Array.from() to create an array from a string
console.log(Array.from("Hello")); // Output: ["H", "e", "l", "l", "o"]
console.log(Array.from({name:"John", age: 30})); // Output: ["name", "age"] (keys of the object)

let score = 12;
let score2 = 13;
let score3 = 14;
console.log(Array.of(score, score2, score3)); // Output: [12, 13, 14] (creates an array with the given elements)