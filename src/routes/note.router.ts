import { Router } from "express";
import NoteControll from "../controller/note.controller";

class NoteRouter{
    router:Router;

    constructor(){
        this.router = Router();
        this.initialRoutes();
    }
    initialRoutes(){
        this.router.post('/saveNote',NoteControll.saveNoteData)
        this.router.get('/getAllNotes',NoteControll.getAllNoteData)
        this.router.patch('/updateNote',NoteControll.updateNoteData)
        this.router.delete('/deleteNote',NoteControll.deleteNoteData)
        
    }
}

const NoteRoute = new NoteRouter();
export default NoteRoute;