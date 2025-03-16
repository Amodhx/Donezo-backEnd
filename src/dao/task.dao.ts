import TaskDTO from "../dto/task.dto";
import TaskSchema from "../model/task.model";

class TaskDAO{

    async save(task:TaskDTO){
        try{
            let taskToSave = new TaskSchema(task);
            const savedTask = taskToSave.save();
            return savedTask;
        }catch(err){
            throw err;
        }
    }
    async update(task:TaskDTO){
        try{
            const check = await TaskSchema.findOne({
                task_id : task.task_id
            })
            if (check){
                const updatedTask = await TaskSchema.findOneAndUpdate(
                    { task_id : task.task_id },
                    { $set : task },
                    { new : true }
                )
                return updatedTask;
            }else{
                throw new Error("Invalid Id!!")
            }
        }catch(err){
            throw err;
        }
    }
    async delete(task_id:String){
        try{
            const deletedTask = await TaskSchema.findOneAndDelete(
                {task_id : task_id}
            )
            return deletedTask;
        }catch(err){
            throw err;
        }
    }
    async getAll(){
        try{
            return await TaskSchema.find({});
        }catch(err){
            throw err;
        }
    }
}
const TaskRepository = new TaskDAO();
export default TaskRepository;