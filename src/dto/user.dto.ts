class UserDTO{
    user_email:String
    password:String

    constructor(email:String,password:String){
        this.user_email = email;
        this.password = password;
    }
}

export default UserDTO;