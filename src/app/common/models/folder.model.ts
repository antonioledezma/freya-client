import { NoteModel } from "./note.model";
import { UserModel } from "./user.model";


export interface FolderModel {
	title: string;
	owner: UserModel;
  listNotes: NoteModel[];
}