import { Injectable } from "@angular/core";
import { FolderModel } from "../../../models/folder.model";
import { RepositoryInterface } from "../repository.interface";


@Injectable({
	providedIn: "root"
})

export class FolderRepositoryService implements RepositoryInterface {
	constructor() {

	}

	find(title: string): FolderModel {
		throw new Error("Method not implemented.");
	}

	findAll(): FolderModel[] {
		throw new Error("Method not implemented.");
	}

	save(folder: FolderModel): FolderModel {
		throw new Error("Method not implemented.");
	}

	remove(folder: FolderModel) {
		throw new Error("Method not implemented.");
	}

	update(folder: FolderModel): FolderModel {
		throw new Error("Method not implemented.");
	}
}