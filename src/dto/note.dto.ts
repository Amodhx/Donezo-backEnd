class NoteDTO{
    note_id:String
    note_title :String
    note_content :String
    image:String

    constructor(note_id:String,note_title:String,note_content:String,image:String){
        this.note_id = note_id;
        this.note_content = note_content
        this.note_title = note_title 
        this.image = image
    }
}
export default NoteDTO;