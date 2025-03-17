import { Request, Response } from "express";
import JwtServices from "../service/jwt.service";

class AuthController{
    async signIn(req:Request,resp:Response){
        try {
            resp.status(201).send(await JwtServices.signIn(req.body))
        }catch (err){
            console.log(err)
            resp.status(500).send(err);
        }
    }
    async signUp(req:Request,resp:Response){
        try {
            resp.status(201).send(await JwtServices.signUp(req.body))
        }catch (err){
            console.log(err)
            resp.status(500).send(err);
        }
    }
}
const AuthControll = new AuthController();
export default AuthControll;