import { UserEntity } from "../entities/user.entity";
import { UserRepository } from "../repositories/user.repository";

interface Params {
  user?: UserEntity;
  fullName?: string;
  email?: string;
}
export class UpdateUserUseCase {
  repository: UserRepository;

  constructor(repository: UserRepository) {
    this.repository = repository;
  }

  call = ({ user, fullName, email }: Params) => {
    if (!user) return;
    if (!fullName && !email) return user;
    return this.repository.updateUser(
      new UserEntity({
        id: user.id,
        fullName: fullName ? fullName : user.fullName,
        email: email ? email : user.email,
        type: user.type,
      })
    );
  };
}
