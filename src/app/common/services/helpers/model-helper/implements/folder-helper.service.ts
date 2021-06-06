import { Injectable } from "@angular/core";
import { FolderModel } from "../../../../models/folder.model";
import { FolderRepositoryService } from "../../../repositories/implements/folder-repository.service";
import { RepositoryInterface } from "../../../repositories/repository.interface";
import { ModelHelperInterface } from "../model-helper.interface";


@Injectable({
	providedIn: "root"
})

export class FolderHelperService implements ModelHelperInterface {
	constructor(public repositoryService: FolderHelperService) {
		
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