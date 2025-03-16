import { Router } from "express";

class NoteRouter{
    router:Router;

    constructor(){
        this.router = Router();
        this.initialRoutes();
    }
    initialRoutes(){
        
    }
}

const NoteRoute = new NoteRouter();
export default NoteRoute;