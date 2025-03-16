import TaskDTO from "../dto/task.dto";

class TaskDAO{

    async save(task:TaskDTO){

    }
    async update(task:TaskDTO){

    }
    async delete(task_id:String){

    }
    async getAll(){
        
    }
}
const TaskRepository = new TaskDAO();
export default TaskRepository;