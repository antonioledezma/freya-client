import { FolderModel } from "./folder.model";
import { UserModel } from "./user.model";


export interface NoteModel {
  title: string;
  text: string;
  owner: UserModel | undefined;
  folder: FolderModel | undefined;
}