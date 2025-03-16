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
    async generateTaskId(){
        try{
            const tasks = await TaskSchema.find({});
            if(tasks.length > 0){
                let lastTaskId = tasks[tasks.length - 1].task_id;
                if(lastTaskId){
                    const number =  +lastTaskId.split('-')[1];
                    const newNumber = number +1;
                    return `TASK-${newNumber}`
                }else{
                    throw new Error("Cant generate Id");
                }
            }else{
                return "TASK-1";
            }
        }catch(err){
            throw err;
        }
    }
}
const TaskRepository = new TaskDAO();
export default TaskRepository;