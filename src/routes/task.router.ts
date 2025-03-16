import { Router } from "express";

class TaskRouter{
    router:Router

    constructor(){
        this.router = Router();
        this.initialRoutes();
    }
    initialRoutes(){

    }
}

const TaskRoute = new TaskRouter();
export default TaskRoute;