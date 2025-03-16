class TaskDTO{
    task_id: String
    task: String
    status: String
    dueDate : String
    time : String

    constructor(task_id:String,task:String,status:String,dueDate:String,time:String){
        this.task_id  = task_id;
        this.task = task;
        this.status = status;
        this.dueDate = dueDate;
        this.time = time;
    }
}

export default TaskDTO;