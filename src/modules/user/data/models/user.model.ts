import { UserEntity, UserType } from "../../domain/entities/user.entity";

interface Data {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  type: string;
}

export class UserModel {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  type: string;

  constructor(data: Data) {
    this.id = data.id;
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.email = data.email;
    this.type = data.type;
  }

  toEntity = () => {
    return new UserEntity({
      id: this.id,
      fullName: [this.firstName, this.lastName].join(" "),
      email: this.email,
      type: this.type as UserType,
    });
  };

  static fromEntity = (entity: UserEntity) => {
    return new UserModel({
      id: entity.id,
      firstName: entity.fullName.split(" ")[0],
      lastName: entity.fullName.split(" ")[1],
      email: entity.email,
      type: entity.type,
    });
  };
}
