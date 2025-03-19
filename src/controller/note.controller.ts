import {Request, Response} from "express";
import NoteServices from "../service/note.service";
import NoteDTO from "../dto/note.dto";

class NoteController{

    async saveNoteData(req:Request,resp:Response){
        try{
            if (!req.file) {
                resp.status(400).json({ message: "No file uploaded" });
                return
            }
            const file = req.file;
            const base64Img = file?.buffer.toString('base64');
            const data = req.body;
            const noteDTO = new NoteDTO(
                data.note_id,
                data.note_title,
                data.note_content,
                base64Img
            )
            resp.status(201).send(await NoteServices.saveNote(noteDTO));
        }catch(err){
            resp.status(500).send(err);
        }
    }
    async updateNoteData(req:Request,resp:Response){
        try{
            // if (!req.file) {
            //     resp.status(400).json({ message: "No file uploaded" });
            //     return
            // }
            const file = req.file;
            const data = req.body;
            if(file){
                const base64Img = file?.buffer.toString('base64');
                const noteDTO = new NoteDTO(
                    data.note_id,
                    data.note_title,
                    data.note_content,
                    base64Img
                )
                resp.status(201).send(await NoteServices.updateNote(noteDTO));
            }else{
                const noteDTO = new NoteDTO(
                    data.note_id,
                    data.note_title,
                    data.note_content,
                    data.image
                )
                resp.status(201).send(await NoteServices.updateNote(noteDTO));
            }
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