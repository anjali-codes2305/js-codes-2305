function setusername(username){
    this.username = username

}
function createuser(username , email , password){
    setusername.call(this,username);

    this.email = email 
    this.password = password
}

const chai = new createuser("chai " , "chai@gmail.com","123")
console.log(chai)

