//singleton is the object made from the constructor
//when we declare objects like literals then it do not make the singleton

//object literal

const mysym = Symbol("mySymbol");

//how to use symbol in object
/*const JsUser = {
    name:"Anjali",//name is a key and Anjali is a value
    age: 25,
    location:"Jaipur",
    Email:"anjali@gmail.com",
    isLoggedIn: false,
    lastLoggedInDays:["Monday", "Tuesday", "Wednesday"],
    [mysym]:"this is a symbol",
}
console.log(JsUser["Email"])
//accessing the value of key using dot notation
console.log(JsUser["name"])
//accessing the value of key using bracket notation
console.log(JsUser["age"])
console.log(JsUser[mysym])*/
const sym = Symbol("mySymbol");

const myId={
    name:"Anjali",
    age :30,
    Email :"anjalia@gmail.com",
    stu_id:12345,
    [sym]:"mysymbol",
}
console.log(myId[sym]) //accessing the value of key using symbol
console.log(myId["name"]) //accessing the value of key using bracket notation
console.log(myId.name) //accessing the value of key using dot notation
console.log(myId.age) //accessing the value of key using dot notation

myId.Email = "anmol@gmail.com";

//object freezing to prevent modification
//Object.freeze(myId);
myId.Email = "chetan@gmail.com";
console.log(myId.Email) //accessing the value of key using dot notation

myId.greeting = function(){
    console.log("Hello my user");
}

myId.greeting2 = function(){
    console.log(`Hello my user,${this.name}`)
}
//calling the function inside the object
console.log(myId.greeting2()); //accessing the value of key using dot notation






