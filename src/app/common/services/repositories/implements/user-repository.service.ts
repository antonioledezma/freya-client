import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { RequestModel } from "src/app/common/models/request.model";
import { ResponseModel } from "src/app/common/models/response.model";
import { UserModel } from "src/app/common/models/user.model";
import { RepositoryInterface } from "../repository.interface";


@Injectable({
	providedIn: "root",
})

export class UserRepositoryService implements RepositoryInterface {
	serverUrl: string = "http://localhost:8080/users/";

	constructor(private httpClient: HttpClient) {
		
	}

	find(username: string): UserModel {
		throw new Error("Method not implemented.");
	}

	async login(username: string, password: string): Promise<boolean> {
		let request: RequestModel = {
			authenticated: undefined,
			data: {
				username: username,
				password: password
			},
		}

		let response: ResponseModel;

		await this.httpClient.post(this.serverUrl, JSON.stringify(request)).subscribe((_response) => {
			response = _response as ResponseModel;

			if(!response.status) {
				throw new Error(response.errorMessage);
			}
		});

		return false;
	}

	findAll(): UserModel[] {
		throw new Error("Method not implemented.");
	}

	async save(user: UserModel): Promise<UserModel> {
		let request: RequestModel = {
			authenticated: user,
			data: user,
		}

		let response: ResponseModel;

		await this.httpClient.post(this.serverUrl, JSON.stringify(request)).subscribe((_response) => {
			response = _response as ResponseModel;

			if(!response.status) {
				throw new Error(response.errorMessage);
			}
		});

		return user;
	}

	remove(user: UserModel) {
		throw new Error("Method not implemented.");
	}
	
	update(user: UserModel): UserModel {
		throw new Error("Method not implemented.");
	}
}