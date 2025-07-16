//ES6

class User {
    constructor(username , email , password){
        this.username = username;
        this.email =email;
        this.password = password;
    }

    encryptPassword(){
    return `${this.password}abc`;
}

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }

}


const newuser =new User("chai" ,"chai@gmail.com","123")
console.log(newuser.encryptPassword())
console.log(newuser.changeUsername())


function User1(username , email , password){
    this.username=username;
    this.email = email;
    this.password = password;
}

User1.prototype.encryptPassword = function(){
    return `${this.password}abc`;
}

const tea = new User1("Anjali " , "annjali@gmail.com" , "1234")
console.log(tea.encryptPassword());



//inheritance

class User2{
    constructor(username){
        this.username = username;

    }
    
    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User2{
    constructor(username , email , password){
        super(username);
        this.email =email;
        this.password = password;

    }

    addcourse(){
        console.log(`A new course was add by ${this.username}`)
    }
}

const chai = new Teacher ("anjali","anjali@gmail.com" , "1234")
chai.addcourse()
const masalaChai = new User2("masalaChai")
masalaChai.logMe()

console.log(chai instanceof User2)

