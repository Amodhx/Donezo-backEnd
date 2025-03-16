import {Router} from "express";
import {Request, Response} from "express";
import TaskRoute from "./task.router";
import NoteRoute from "./note.router";

class MainRouter {
    router:Router;

    constructor(){
        this.router = Router()
        this.initialRoutes();
    }
    initialRoutes(){
        this.router.use('/healthCheck',this.healthCheck)
        this.router.use('/task',TaskRoute.router)
        this.router.use('/note',NoteRoute.router)
    }
    healthCheck(req:Request,resp:Response){
        resp.status(201).send("Server Is Working Correctly!!!");
    }
}

const MainRoute = new MainRouter();
export default MainRoute;