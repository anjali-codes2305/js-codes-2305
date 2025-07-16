//formation of promises
const promise1 = new Promise((resolve,reject)=>{
    //Do and Async task
    //DB calls , cryptography , network
    setTimeout(()=>{
        console.log('Async task is completed')
    },1000)
    resolve()

})
//consumption
promise1.then(function(){
    console.log('promise consumed')
})

new Promise(function(resolve,reject){
    setTimeout(()=>{
        console.log("Async 2 is completed")
        resolve();
    },1000)
}).then(()=>{
    console.log("Async 2 resolved")

})

const promise3 =new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve({username:"Chai",email:"chai@example.com"})
    },1000)
})
 promise3.then((user)=>{
    console.log(user);

})

promise4 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error =false
        if(!error){
            resolve({username:"Chai" , password:"1245"})
        }

        else{
            reject('Error :Something went wrong')
        }
    },2000)
})
const username = promise4.then((user)=>{
    console.log(user);
    return user.username;


}).then((username)=>{
    console.log(username)

}).catch((error)=>{
    console.log(error)
}).finally(()=>{
    console.log("the promise is either resolve or rejected")
})


promise5 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error =false
        if(!error){
            resolve({username:"javascript" , password:"1245"})
        }

        else{
            reject('Error :js went wrong')
        }
    },2000)
})
async function consumepromise5(){
   try{
     const response = await promise5
    console.log(response);
   }catch(error) {
    console.log(error);
   }
}
consumepromise5();

//async function getAllUsers(){
    /*try {
        const response= await fetch('http://api.github.com/users/anjali-codes2305')
        
    const data = response.json()
    console.log(data)
    } catch (error) {
        console.log("E:",error)
        
    }
}*/
fetch('https://api.github.com/users/anjali-codes2305')
.then((response)=>{
    return response.json()

})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{

    console.log(error)
    




})


