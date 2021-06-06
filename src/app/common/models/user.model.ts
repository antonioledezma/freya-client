import { FolderModel } from "./folder.model";
import { NoteModel } from "./note.model";


export interface UserModel {
  username: string;
  password: string;

  email: string;

  firstname: string;
  lastname: string;
  about: string;
  
  listFolder: FolderModel[];
  listNotes: NoteModel[];
}