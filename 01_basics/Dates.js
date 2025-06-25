//Dates
let mydate = new Date();
console.log(mydate); // Current date and time

console.log(mydate.toString()); // String representation of the 
// date
console.log(mydate.toDateString()); // Date in a human-readable format
console.log(mydate.toLocaleString()); // ISO format of the date
console.log(typeof mydate); // Type of the variable

let mydate2 = new Date(2023,0,23 , 5,30,0); // Year, Month, Day, Hour, Minute, Second
console.log(mydate2.toLocaleString()); // Specific date

//in javaScript, months are 0-indexed, so January is 0, February is 1, etc.
let mydate3 = new Date("2023-01-23"); // ISO format
console.log(mydate3.toLocaleString()); // Specific date in ISO format

let mytimestamp = Date.now(); // Get the timestamp in milliseconds
console.log(mytimestamp); // Current timestamp in milliseconds

console.log(mydate3.getTime()); // Get the timestamp of a specific date
console.log(Math.floor(Date.now()/1000)); // Get the timestamp in seconds
let mydate4 = new Date(); // Convert timestamp to date
console.log(mydate4)
console.log(mydate4.toLocaleString('default',{
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZoneName: 'short'
})); // Convert timestamp to date in human-readable format