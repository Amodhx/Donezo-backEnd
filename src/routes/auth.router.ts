import { Router } from "express";
import AuthControll from "../controller/auth.controller";

class AuthRouter{
    router:Router

    constructor(){
        this.router = Router();
        this.initialRoutes();
    }
    initialRoutes(){
        this.router.post('/signIn',AuthControll.signIn)
        this.router.post('/signUp',AuthControll.signUp)
    }
}
const AuthRoute = new AuthRouter();
export default AuthRoute;