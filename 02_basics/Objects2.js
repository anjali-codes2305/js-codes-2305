const { useSyncExternalStore } = require("react");

//Objects as singletons and declare through objects
const tinderuser = new Object();
//console.log(tinderuser);
tinderuser.id = "12345";
tinderuser.name ="Anjali";
tinderuser.age = 25;

//console.log(tinderuser);
const user1 = {
    id : "12345",
    fullname:{
        username:{
            firstname: "Anjali",
            lastname:"Agarwal",
        }

    }

}
console.log(user1.fullname.username.firstname); //accessing the value of key using dot notation

//optional chaining
console.log(user1?.fullname?.username?.firstname); //accessing the value of key using optional chaining

const obj1={
    1: "one",
    2: "two",
    3: "three",
}

const obj2 = {
    1: "one",
    2: "two",
    3: "three",
}
//const obj3={obj1,obj2};
Object.assign(obj1,obj2); //merging two objects

//console.log(obj3);//nested object
const obj4={...obj1,...obj2}; //merging two objects using spread operator
console.log(obj4); //nested object using spread operator

//when values come from database
const user=[
    {
        id :"1",
        name: "Anjali",
        age: 25,
        isActive: true,
    },{
    
        id :"1",
        name: "Anjali",
        age: 25,
        isActive: true,
    }
]
user[1].name 
console.log(tinderuser) //updating the value of key in object
console.log(Object.keys(tinderuser)); //getting the keys of object
console.log(Object.values(tinderuser)); //getting the values of object
console.log(Object.entries(tinderuser)); //getting the key value pairs of object
//getting the key value pairs of object using for loop
console.log("tinderuser")