import TaskRepository from "../dao/task.dao";
import TaskDTO from "../dto/task.dto";

class TaskService{
    async saveTask(taskData:TaskDTO){
        try{
            taskData.task_id = await TaskRepository.generateTaskId();
            return await TaskRepository.save(taskData);
        }catch(err){
            throw err;
        }
    }
    async updateTask(taskData:TaskDTO){
        try{
            return await TaskRepository.update(taskData);
        }catch(err){
            throw err;
        }
    }
    async deleteTask(task_id:String){
        try{
            return await TaskRepository.delete(task_id);
        }catch(err){
            throw err;
        }
    }
    async getAllTasks(){
        try{
            return await TaskRepository.getAll();
        }catch(err){
            throw err;
        }
    }
}
const TaskServices = new TaskService();
export default TaskServices;