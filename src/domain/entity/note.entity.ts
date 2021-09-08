export interface NoteEntity {
    id: number;
    title: string;
    note: string;
}

export interface NoteBodyCreate {
    title: string;
    note: string;
}