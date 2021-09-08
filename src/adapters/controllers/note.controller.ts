import { Request, Response } from 'express';

import { NoteService } from "../../domain/usecases/note.service";
import { NoteCacheRepo } from "../repositories/note.cache.repo";

const noteRepo = new NoteCacheRepo();
const noteService = new NoteService(noteRepo);

export class NoteController {

    async getAllNote(request: Request, response: Response) {
        try {
            const resp = await noteService.getAllNote();
            response.status(200).send({ error: false, function: 'NoteController -> getAllNote', message: 'success', data: resp });
        } catch (error) {
            console.log('***** ERROR = NoteController -> getAllNote', error.message);
            response.status(500).send({ error: true, function: 'NoteController -> getAllNote', message: `${error.message}` });
        }
    }

    async createNote(request: Request, response: Response) {
        try {
            await noteService.createNote(request.body);
            response.status(200).send({ error: false, function: 'NoteController -> createNote', message: 'success' });
        } catch (error) {
            console.log('***** ERROR = NoteController -> createNote', error.message);
            response.status(500).send({ error: true, function: 'NoteController -> createNote', message: `${error.message}` });
        }
    }

}