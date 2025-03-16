import NoteRepository from "../dao/note.dao";
import NoteDTO from "../dto/note.dto";

class NoteService {

    async saveNote(noteData : NoteDTO){
        try{
            return await NoteRepository.save(noteData);
        }catch(err){
            throw err;
        }
    }
    async updateNote(noteData : NoteDTO){
        try{
            return await NoteRepository.update(noteData);
        }catch(err){
            throw err;
        }
       
    }
    async getAllNotes(){
        try{
            return await NoteRepository.getAll();
        }catch(err){
            throw err;
        }
    }
    async deleteNote(note_id:String){
        try{
            return await NoteRepository.delete(note_id);
        }catch(err){
            throw err;
        }
        
    }
}
const NoteServices = new NoteService();
export default NoteServices;