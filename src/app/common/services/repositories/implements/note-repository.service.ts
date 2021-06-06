import { Injectable } from "@angular/core";
import { NoteModel } from "src/app/common/models/note.model";
import { RepositoryInterface } from "../repository.interface";


@Injectable({
	providedIn: "root",
})

export class NoteRepositoryService implements RepositoryInterface {
	find(title: string): NoteModel {
		throw new Error("Method not implemented.");
	}
	findAll(): NoteModel[] {
		throw new Error("Method not implemented.");
	}
	save(note: NoteModel): NoteModel {
		throw new Error("Method not implemented.");
	}
	remove(note: NoteModel) {
		throw new Error("Method not implemented.");
	}
	update(note: NoteModel): Object {
		throw new Error("Method not implemented.");
	}
}