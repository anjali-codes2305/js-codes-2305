class User{
    constructor(username){
        this.username = username;


    }

    logMe(){
        console.log(`Username:${this.username}`)
    }

    static createId(){
        return `123`;
    }
}

const Anjali = new User("Anjali")
console.log(Anjali.createId())

class Teacher extends User{

    constructor(email ,username){
        this.email = email
        super(username);
    }

}

const iphone = new Teacher("anjali@gmail.com" ,"iphone")
console.log(iphone.createId())
