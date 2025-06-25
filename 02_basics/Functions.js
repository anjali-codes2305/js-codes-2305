//Funtions syntax

//function function name(parameters) {
//     //code to be executed
// }
function sayMyName(){
    console.log("My name is John");
}
//if during calling the function if we add ()the it is executed and if we do not add it then it is its reference
//sayMyName; //this is a reference to the function
sayMyName()

function addTwoNumbers(num1, num2)//parameters are the variables that are passed to the function
{
    return num1 + num2; //this function returns the sum of two numbers
    }
function addTwoNumbers(num1, num2)//parameters are the variables that are passed to the function
{
   //console.log(num1 + num2) ; //this function returns the sum of two numbers
    }


const result = addTwoNumbers(5, 10); //calling the function with arguments
//console.log( "Result",result); //this will print undefined because the function does not return anything

function loginUserMessage(username = "Sam"){
    if(username ===undefined){
        console.log(`please enter a username`);
        return;
    }
    return `${username}just logged in `
}
const logged = loginUserMessage("Anjali");
console.log(logged); //this will print "Anjali just logged in"

//situation used in projects 

//rest and spread operator
function caculateCartPrice(val1,val2,...num1){
    return num1;

}
console.log(caculateCartPrice(10, 20, 30, 40)); //this will print [10, 20, 30, 40] because the rest operator collects all the arguments into an array

const user = {
    username :"hitesh",
    price : 999,
}
function handleObject(anyObject){
    console.log(`username is ${anyObject.username}and price is &{anyObject.price}`);
}

handleObject(user); //this will print "username is hitesh and price is 999"
handleObject({
    username: "Anjali",
    price: 1999,

})

const myNewArray = [1, 2, 3, 4, 5];
function handleArray(getArray){
    return getArray[1];

}
console.log(handleArray(myNewArray)); //this will print 2 because the function returns the second element of the array
console.log(handleArray([10, 20, 30, 40, 50])); //this will print 20 because the function returns the second element of the array






