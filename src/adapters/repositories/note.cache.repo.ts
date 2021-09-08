import { NoteEntity, NoteBodyCreate } from "../../domain/entity/note.entity";
import { NoteRepoContract } from "../../domain/contracts/note.repo.contract";

const notesCache = [
    {
        id: 1,
        title: 'Note1',
        note: 'Test1'
    },
    {
        id: 2,
        title: 'Note2',
        note: 'Test2'
    },
]

export class NoteCacheRepo implements NoteRepoContract {
    
    async getAllNote(): Promise<NoteEntity[]> {
        return notesCache;
    }

    async createNote(body: NoteBodyCreate): Promise<boolean> {
        return true;
    }

}