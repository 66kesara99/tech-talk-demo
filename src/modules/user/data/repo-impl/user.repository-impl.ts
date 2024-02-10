import { UserEntity } from "../../domain/entities/user.entity";
import { UserRepository } from "../../domain/repositories/user.repository";
import { UserApi } from "../apis/user.api";
import { UserModel } from "../models/user.model";

export class UserRepositoryImpl implements UserRepository {
  api: UserApi;

  constructor(api: UserApi) {
    this.api = api;
  }

  getUser = async () => {
    const userModal = await this.api.getUserApi();
    return userModal.toEntity();
  };

  updateUser = async (user: UserEntity) => {
    const userModal = await this.api.updateUserApi(UserModel.fromEntity(user));
    return userModal.toEntity();
  };
}
