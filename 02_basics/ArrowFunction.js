//this is used for understanding arrow functions in JavaScript
//this used to create current context for the function
/*const user = {
    name :"Anjali",
    age:25,
    price : 100,
    welcomemessage :function(){
        console.log(`${this.name} ,Welcome to this website`)
        //console.log(this);
    }
}

user.welcomemessage(); //undefined Welcome to this website

user.name = "Anjali Sharma";
user.welcomemessage(); //Anjali Sharma ,Welcome to this website

//console.log(this);

//Arrow functions

function one (){
    console.log(this);




}
one();

//const chai = () => {
    let username = "Anjali";
    console.log(this.username);
}

//Arrow function does not have its own this context

const addTwo = (a, b) => {
   
    return a + b;
}

//console.log(addTwo(2, 3)); //5

const addThree = (a,b,c)=>(a+b+c);
//console.log(addThree(2,3,4)); //9

//returning object in arrow function
const other = (name,age)=>({name:"Anjali", age:25});*/

//Immediately Invoked Function Expression (IIFE)
(function chai(){
    console.log("I am an IIFE function");
}) ();//named IIFE


 //I am an IIFE function

//IIFE is used when function must be invoked immediately after its definition
//IIFE is used to avoid polluting the global scope
( (name) =>{
    console.log(`I am an IIFE arrow function${name}`);
})(`Anjali`) //I am an IIFE arrow function Anjali


