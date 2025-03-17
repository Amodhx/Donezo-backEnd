import UserDTO from "../dto/user.dto";
import UserSchema from "../model/user.model";
const jwt = require('jsonwebtoken');

class JwtService{
    async signIn(userObj:UserDTO){
        let jwtSecretKey = process.env.JWT_SECRET_KEY;
        const userMail = userObj.user_email;
        const userData = await UserSchema.findOne({
            user_email : userMail
        })
        if (!userData){
            throw new Error("INVALID USER")
        }
        if (userObj.password != userData.passoword){
            throw new Error("INVALID PASSWORD")
        }
        return jwt.sign({userId: userObj.user_email}, jwtSecretKey, {
            expiresIn: '1h'
        })
    }
    async signUp(userObj:UserDTO){
        try {
            const existingUser = await UserSchema.findOne({
                user_email : userObj.user_email
            })
            if (existingUser){
                throw new Error("USER ID IS INVALID")
            }
            
            const userToSave = new UserSchema(userObj);
            const savedUser = userToSave.save();
            if(savedUser){
                return savedUser;
            }else{
                throw new Error("Cant Sign Up ")
            }
        }catch (err){
            throw err;
        }
    }
}
const JwtServices = new JwtService();
export default JwtServices;