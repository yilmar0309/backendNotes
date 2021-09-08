import { NoteRepoContract } from "../contracts/note.repo.contract";
import { NoteBodyCreate, NoteEntity } from "../entity/note.entity";

export class NoteService {
    
    constructor(private noteRepo: NoteRepoContract) {}

    async getAllNote(): Promise<NoteEntity[]> {
        try {
            return await this.noteRepo.getAllNote();
        } catch (error) {
            console.log('***** ERROR = NoteService -> getAllNote', error.message);
            throw new Error(error);
        }
    }

    async createNote(body: NoteBodyCreate): Promise<boolean> {
        try {
            return await this.noteRepo.createNote(body);
        } catch (error) {
            console.log('***** ERROR = NoteService -> createNote', error.message);
            throw new Error(error);
        }
    }

}