const name = "Anjali";
const age = 25;
//console.log(name + age + " years old");

//String interpolation using template literals
console.log(`my name is ${name} and I am ${age} years old`);

//different ways to create strings
const gamename = new String("Call of Duty");

//different methods or functions of string

console.log(gamename[0]); // C
console.log(gamename.length); // 13
console.log(gamename.toUpperCase()); // CALL OF DUTY
console.log(gamename.toLowerCase()); // call of duty
console.log(gamename.__proto__); // 8
console.log(gamename.charAt(0)); // C
console.log(gamename.indexOf("Duty")); // 8
console.log(gamename.lastIndexOf("o")); // 10
console.log(gamename.slice(-8 , 4)); // Call
console.log(gamename.substring(0, 4)); // Call
console.log(gamename.replace("Call", "Battle")); // Battle of Duty
console.log(gamename.trim()); // [ 'Call', 'of', 'Duty' ]
const url = "http://www.example.com/hitesh%20choudhary"
console.log(url.replace("%20", " ")); // http://www.example.com/hitesh choudhary
console.log(url.includes("hitesh")); // true
console.log(url.startsWith("http")); // true
console.log(url.endsWith("choudhary")); // true
console.log(gamename.split(" ")); // [ 'Call', 'of', 'Duty' ]
console.log(gamename.split("o")); // [ 'Call ', 'f Duty' ]


