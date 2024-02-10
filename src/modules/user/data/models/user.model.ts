import { UserEntity } from "../../domain/entities/user.entity";

interface Data {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

export class UserModel {
  id: number;
  firstName: string;
  lastName: string;
  email: string;

  constructor(data: Data) {
    this.id = data.id;
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.email = data.email;
  }

  toEntity = () => {
    return new UserEntity({
      id: this.id,
      fullName: [this.firstName, this.lastName].join(" "),
      email: this.email,
    });
  };

  static fromEntity = (entity: UserEntity) => {
    return new UserModel({
      id: entity.id,
      firstName: entity.fullName.split(" ")[0],
      lastName: entity.fullName.split(" ")[1],
      email: entity.email,
    });
  };
}
