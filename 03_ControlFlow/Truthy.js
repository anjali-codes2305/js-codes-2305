const userEmail = {};
if(Object.keys(userEmail).length > 0){
   // console.log("Email is present");
}
else{
    console.log("Email is not present");
}




// Truthy and Falsy values in JavaScript
// Falsy values: false, 0, "", null, undefined, NaN,BigInt0n
// Truthy values: All other values that are not falsy
//"0" , 'false'," ", {},function(){},[],Infinity,BigInt(1),Symbol("symbol")


//Nulish Coalescing Operator (??)
// It returns the right-hand side value if the left-hand side value is null or undefined
let val1;
val1=5??10;
console.log(val1); // 5

val1 =null??10;
console.log(val1); // 10

val1 =undefined??10;
console.log(val1); // 10

val1 =null ?? 15 ?? 10;
console.log(val1); // 15

//Ternary operator
const iceprice =100;
iceprice>50 ? console.log("Ice cream is expensive") : console.log("Ice cream is cheap");