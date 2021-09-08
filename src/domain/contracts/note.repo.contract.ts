import { NoteBodyCreate, NoteEntity } from "../entity/note.entity";

export abstract class NoteRepoContract {
    abstract getAllNote(): Promise<NoteEntity[]>;
    abstract createNote(body: NoteBodyCreate): Promise<boolean>;
}