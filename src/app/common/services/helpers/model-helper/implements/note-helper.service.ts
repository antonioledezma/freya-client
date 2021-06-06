import { Injectable } from "@angular/core";
import { NoteRepositoryService } from "../../../repositories/implements/note-repository.service";
import { ModelHelperInterface } from "../model-helper.interface";


@Injectable({
	providedIn: "root",
})

export class NoteHelperService implements ModelHelperInterface {
	constructor(public repositoryService: NoteRepositoryService) {

	}
	
	find(key: any): Object {
		throw new Error("Method not implemented.");
	}

	findAll(): Object[] {
		throw new Error("Method not implemented.");
	}

	save(model: Object): Object {
		throw new Error("Method not implemented.");
	}

	remove(model: Object) {
		throw new Error("Method not implemented.");
	}

	update(model: Object): Object {
		throw new Error("Method not implemented.");
	}
}