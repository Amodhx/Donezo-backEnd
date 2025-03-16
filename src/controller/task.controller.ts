import {Request, Response} from "express";
import TaskServices from "../service/task.service";

class TaskController{

    async saveTaskData(req:Request,resp:Response){
        try{
            resp.status(201).send(await TaskServices.saveTask(req.body));
        }catch(err){
            resp.status(500).send(err);
        }
    }
    async updateTaskData(req:Request,resp:Response){
        try{
            resp.status(201).send(await TaskServices.updateTask(req.body));
        }catch(err){
            resp.status(500).send(err);
        }
    }
    async deleteTaskData(req:Request,resp:Response){
        try{
            const id = req.query['id'];
            resp.status(201).send(await TaskServices.deleteTask(id as String));
        }catch(err){
            resp.status(500).send(err);
        }
    }
    async getAllTaskData(req:Request,resp:Response){
        try{
            resp.status(201).send(await TaskServices.getAllTasks())
        }catch(err){
            resp.status(500).send(err);
        }
    }

}
const TaskControll = new TaskController();
export default TaskControll;