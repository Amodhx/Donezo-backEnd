import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
    note_id:String,
    note_title :String,
    note_content :String,
    image:String
})

const NoteSchema = mongoose.model('note',noteSchema)
export default NoteSchema