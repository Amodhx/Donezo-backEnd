import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    task_id: String,
    task: String,
    status: String,
    dueDate : String,
    time : String

})

const TaskSchema = mongoose.model('task',taskSchema);
export default TaskSchema