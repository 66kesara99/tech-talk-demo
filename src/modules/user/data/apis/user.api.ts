import { callApi } from "../../../../utils/fake-api.utils";
import { UserModel } from "../models/user.model";

// Implementation related to API
export class UserApi {
  user = new UserModel({
    id: 1,
    firstName: "Kesara",
    lastName: "Gamlath",
    email: "kesara@gmail.com",
  });

  getUserApi = async (): Promise<UserModel> => {
    return (await callApi(this.user)) as UserModel;
  };

  updateUserApi = async (user: UserModel): Promise<UserModel> => {
    this.user = user;
    return (await callApi(this.user)) as UserModel;
  };
}
