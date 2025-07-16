//// Array loops in JavaScript
//For of loops 

[{},{},{}]
const array = [1, 2, 3, 4, 5];
for (const num of array){
    console.log(num);

}

const greeting = 'Hello World';

for (const greet of greeting){
    console.log(greet);
}

//Maps
const myMap = new Map()
myMap.set('name', 'John');
myMap.set('age', 30);
myMap.set('city', 'New York');
console.log(myMap);

for(const [key,value] of myMap){
    console.log(`${key}=>${value}`);
}

const myObject = {
    name: 'John',
    age: 30,
    city: 'New York'
}
//for(const [key , value] of myObject){
 //   console.log(`${key} => ${value}`);
//
//}

for(const key in myObject){
    console.log(`${key} => ${myObject[key]}`);
}

const Array = [1, 2, 3, 4, 5];

for(const key in Array){
    console.log(`${key} => ${Array[key]}`);
}

const mySet = ["Anjali ", "Anmol","Chetan"];
for(const key in mySet){
    console.log(`${key} ==> ${mySet[key]}`)
}

//maps are not iterable so loops are not possible

//for of ==> array
//for in ==> objects


const name = ['Anjali', 'Anmol', 'Chetan', 'Aman', 'Amit'];

name.forEach(function(val){//callback function
    console.log(val);

})

name.forEach((arr)=>{
    console.log(arr);

})


const subject =[

    {name: 'Math', marks: 90},
    {name: 'Science', marks: 85},
]

subject.forEach((item) =>{
    console.log(item.name)
} )



