

export interface RepositoryInterface {
	find(key: any): Object;
	findAll(): Object[];
	save(model: Object): Object;
	remove(model: Object): any;
	update(model: Object): Object;
}