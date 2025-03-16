import NoteRepository from "../dao/note.dao";
import NoteDTO from "../dto/note.dto";

class NoteService {

    async saveNote(noteData : NoteDTO){
        return NoteRepository.save(noteData);
    }
    async updateNote(noteData : NoteDTO){
        return await NoteRepository.update(noteData);
    }
    async getAllNotes(){

    }
    async deleteNote(note_id:String){
        return await NoteRepository.delete(note_id);
    }
}
const NoteServices = new NoteService();
export default NoteServices;