for(let index =0 ;index<5;index++){
    
    //if(i<3){
        //console.log("Index is less than 3");
    }
    //console.log(index);


for (let i = 0; i <=10; i++) {
    
    for (let j = 0; j < 10; j++) {
        
       // console.log(i + '*' + j +'='+ i*j);
        
    }
    
}

let myArray = [1, 2, 3, 4, 5];
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element);
    
}

//break and continue statements

for (let i = 1; i <= 20; i++) {
    
    if(i==5){
        console.log("Detecting 5, breaking the loop");
        break; // Exits the loop when i is 5

    }
    console.log(i);
}
for (let i = 1; i <= 20; i++) {
    
    if(i==5){
        console.log("Detecting 5, breaking the loop");
        continue; // Exits the loop when i is 5

    }
    console.log(i);
}
