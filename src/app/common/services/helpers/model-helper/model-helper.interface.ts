import { RepositoryInterface } from "../../repositories/repository.interface";


export interface ModelHelperInterface {
	repositoryService: RepositoryInterface;
	find(key: any): Object;
	findAll(): Object[];
	save(model: Object): Object;
	remove(model: Object): any;
	update(model: Object): Object;
}