const { use } = require("react");

//global scope
var c =10;

//local scope

if (true){
    let a = 10;
    const b =20;
     var d = 30;}

//console.log(c); // 10 20 30


//Nestd scope
function one(){
    const username = "Anjali";

    function two(){
        const website = "www.anjali.com";
        console.log(username); // Anjali
    }
    //console.log(website); // ReferenceError: website is not defined
    //two();
}

//
// one();
if (true) {
    const username = "Anjali";
    if(username === "Anjali"){
        const website = "www.anjali.com";
        //console.log(username + website); // Anjali
    }
    //console.log(website);
}
//console.log(username);

//**************interesting******************************** 
console.log(addone(10));

function addone(value){
    return value++;

}
//const result = addone(10);

console.log(addTwo(10));


const addTwo = function(value){//declare function like variable
    return value + 2;
}

