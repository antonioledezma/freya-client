import { UserModel } from "./user.model";


export interface RequestModel {
  authenticated: UserModel | undefined;
  data: any;
}