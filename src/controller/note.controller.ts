import {Request, Response} from "express";
import NoteServices from "../service/note.service";

class NoteController{

    async saveNoteData(req:Request,resp:Response){
        resp.status(201).send(NoteServices.saveNote(req.body));
    }
    async updateNoteData(req:Request,resp:Response){
        resp.status(201).send(await NoteServices.updateNote(req.body));
    }
    async deleteNoteData(req:Request,resp:Response){
        const  id = req.query['id'];
        resp.status(201).send(await NoteServices.deleteNote(id as String));
    }
    async getAllNoteData(req:Request,resp:Response){

    }
}
const NoteControll = new NoteController();
export default NoteControll;