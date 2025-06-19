//Types of Datatypes
//primitive and Non Primitive


//#Primitive

//7 types - String, Number , Boolean , Null , Undefined , Symbol(to make the unique ) , BigInt

//#Reference Type or Non primitive = Its reference is directly is allocated to you in the memory

//Arrays  , Object , Functions

//The question asked in this is javascript is the dynamically typed language or static type language

//Static are those where datatype of variables are determine at the compile time while in dynamic the datatype of the variable is determine at run time 
//so Javascript is a dynamically typed language


const id = Symbol('123')
const anotherid = Symbol('123')
    console.log(id == anotherid)
    console.log(anotherid)

    const bigNumber = 345678909876543211n
    console.log(bigNumber)

    //Arrays , Onjects , Functions

    //#Arrays
    //const Subject = [maths ,physics , chemistry]
    //#objects
    //let myobj={
        //name="Anjali",
       // age=12,
    

    //#functions
    let myfunction = function(){
        console.log("Hello world")
    }

    //datatypes of non- primitive datatypes is always object 




    //***************Memory************************
    //two types of memory 
    //1.Stack (Primitive)   2. Heap(inNon Primitive used )

    //In stack we get the duplicate copy of the  variable while in the heap we get the reference of original copy
    let score = 10
    let score2 = score //copy of the value is created in stack
    score2 = 20 //this will not change the value of score as it
    console.log(score) //10
    console.log(score2) //20

    let user = {
        name: "Anjali",
        age: 12
    }
let user2 = user //reference of the original object is created in heap
user2.name = "Anu" //this will change the value of user as it is reference
console.log(user.name) //Anu
console.log(user2.name) //Anu











