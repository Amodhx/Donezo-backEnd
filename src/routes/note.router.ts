import { Router } from "express";
import NoteControll from "../controller/note.controller";
import multer from "multer";

const storage = multer.memoryStorage(); // Store files in memory (you can change it to disk storage)
const upload = multer({ storage });

class NoteRouter{
    router:Router;

    constructor(){
        this.router = Router();
        this.initialRoutes();
    }
    initialRoutes(){
        this.router.post('/saveNote',upload.single("image"),NoteControll.saveNoteData)
        this.router.get('/getAllNotes',NoteControll.getAllNoteData)
        this.router.patch('/updateNote',upload.single("image"),NoteControll.updateNoteData)
        this.router.delete('/deleteNote',NoteControll.deleteNoteData)
        
    }
}

const NoteRoute = new NoteRouter();
export default NoteRoute;