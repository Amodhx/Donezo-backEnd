import { Router } from "express";
import TaskControll from "../controller/task.controller";

class TaskRouter{
    router:Router

    constructor(){
        this.router = Router();
        this.initialRoutes();
    }
    initialRoutes(){
        this.router.post('/saveTask',TaskControll.saveTaskData)
        this.router.get('/getAllTasks',TaskControll.getAllTaskData)
        this.router.patch('/updateTask',TaskControll.updateTaskData)
        this.router.delete('/deleteTask',TaskControll.deleteTaskData)
    }
}

const TaskRoute = new TaskRouter();
export default TaskRoute;