import {Request, Response} from "express";
import NoteServices from "../service/note.service";

class NoteController{

    async saveNoteData(req:Request,resp:Response){
        try{
            resp.status(201).send(await NoteServices.saveNote(req.body));
        }catch(err){
            resp.status(500).send(err);
        }
    }
    async updateNoteData(req:Request,resp:Response){
        try{
            resp.status(201).send(await NoteServices.updateNote(req.body));
        }catch(err){
            resp.status(500).send(err);
        }
    }
    async deleteNoteData(req:Request,resp:Response){
        try{
            const  id = req.query['id'];
            resp.status(201).send(await NoteServices.deleteNote(id as String));
        }catch(err){
            resp.status(500).send(err);
        }
    }
    async getAllNoteData(req:Request,resp:Response){
        try{
            resp.status(201).send(await NoteServices.getAllNotes())
        }catch(err){
            resp.status(500).send(err);
        }
    }
}
const NoteControll = new NoteController();
export default NoteControll;