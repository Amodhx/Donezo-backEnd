import NoteDTO from "../dto/note.dto";
import NoteSchema from '../model/note.model'

class NoteDAO {

    async save(note:NoteDTO){
        try{
            let noteToSave = new NoteSchema(note);
            const savedNote = noteToSave.save();
            return savedNote;
        }catch(err){
            throw err;
        }

    }
    async update(note:NoteDTO){
        try{
            const check = await NoteSchema.findOne({
                note_id : note.note_id
            })
            if(check){
                const updatedNote = await NoteSchema.findOneAndUpdate(
                    { note_id: note.note_id },
                    { $set: note }, 
                    { new: true }
                )
                return updatedNote;
            }else{
                throw new Error("Invalid Id !")
            }
        }catch(err){
            throw err;
        }

    }
    async delete(note_id:String){
        try{
            const deletedNote = await NoteSchema.findOneAndDelete(
                {note_id : note_id}
            )
            return deletedNote;
        }catch(err){
            throw err;
        }
    }
    async getAll(){
        try{
            return await NoteSchema.find({});
        }catch(err){
            throw err;
        }
    }
    async generateNoteId(){
        try{
            const notes =  await NoteSchema.find({})
            if(notes.length > 0){
                let lastNoteId = notes[notes.length - 1 ].note_id;
                const number = +lastNoteId.split('-')[1];
                const newNumber = number + 1;
                return `NOTE-${newNumber}`;
            }else{
                return "NOTE-1";
            }
            
        }catch(err){
            throw err;
        }
    }

}

const NoteRepository = new NoteDAO();
export default NoteRepository;