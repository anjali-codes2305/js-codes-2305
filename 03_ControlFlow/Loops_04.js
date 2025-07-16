const myNums = [1,3,5,7,9,11,13,15,17]

//const numbers = myNums.map((num)=>num+10)
//console.log(numbers)


//Chaining
const newNums = myNums.map((num)=>num*10).map((num)=>num+1).filter((num)=>num>100)
console.log(newNums)

//Reduce
const Numbers =[1,2,3,4,5]
//const total =Numbers.reduce((acc,curval)=>acc+curval)
//console.log(total)

const cart = [
    {
        course :'javascript',price:2000
    },
    {
        course :'python',price:3000
    },
    {
        course :'java',price:10000
    },
    {
        course :'Dev',price:20000
    },
    

]

const totalbill = cart.reduce((acc,item)=>acc+item.price,0)
console.log(totalbill)