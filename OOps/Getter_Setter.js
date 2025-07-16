class User{
    constructor(email , password){
        this.email = email ;
        this.password =password
    }

    get password(){
        return this._password.toUpperCase()

    }
    set password(value){
        this._password = value

    }
}
const chai = new User("anjali@gmail.com" , "abc")
console.log(chai.password

)