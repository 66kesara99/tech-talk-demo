import { UserEntity } from "../entities/user.entity";
import { UserRepository } from "../repositories/user.repository";

interface Params {
  user: UserEntity;
}

export class GetUserUseCase {
  repository: UserRepository;

  constructor(repository: UserRepository) {
    this.repository = repository;
  }

  call = (params: Params) => {
    return this.repository.updateUser(params.user);
  };
}
