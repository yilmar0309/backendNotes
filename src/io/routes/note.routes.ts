import { NoteController } from "../../adapters/controllers/note.controller";
import { authMiddlewareSimple } from "../authorization";

const noteController = new NoteController();

export default [
    {
        path: '/get_all_note',
        method: 'get',
        action: authMiddlewareSimple(noteController.getAllNote),
    },
    {
        path: '/create_note',
        method: 'post',
        action: authMiddlewareSimple(noteController.createNote),
    },
]