import { UserRepository } from "../repositories/user.repository";

export class GetUserUseCase {
  repository: UserRepository;

  constructor(repository: UserRepository) {
    this.repository = repository;
  }

  call = () => {
    return this.repository.getUser();
  };
}
