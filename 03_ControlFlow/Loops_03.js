//filter gives you a retur value also and for each not give any return value

const nums = [2,3,4,5,6,7,8,9]

//const myNums = nums.filter((num)=>{
  //   return num>4
//})
//const newNums = []
//nums.forEach((num)=>{

   // if(num>4){
       // newNums.push(num)

//}})

//console.log(newNums)
const user = [

  {
    name:"Anjali", Age:23,class:5
  },
  {
    name:"Anmol", Age:23,class:5
  },
  {
    name:"chetan", Age:25,class:7
  },
  {
    name:"kajal", Age:23,class:6
  },
  {
    name:"khushi", Age:24,class:7
  }


]
const userage = user.filter((usr)=>{
  return usr.class===5 &&usr.Age===23
})

console.log(userage)

