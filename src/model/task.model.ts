import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    task_id: { type: String, required: true, unique: true },
    task: String,
    status: String,
    dueDate : String,
    time : String

})

const TaskSchema = mongoose.model('task',taskSchema);
export default TaskSchema