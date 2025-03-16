import {Router} from "express";
import {Request, Response} from "express";

class MainRouter {
    router:Router;

    constructor(){
        this.router = Router()
        this.initialRoutes();
    }
    initialRoutes(){
        console.log("INITIALIZING MAIN ROUTES!!!");
        this.router.use('/healthCheck',this.healthCheck)
    }
    healthCheck(req:Request,resp:Response){
        resp.status(201).send("Server Is Working Correctly!!!");
    }
}

const MainRoute = new MainRouter();
export default MainRoute;