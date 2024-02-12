export enum UserType {
  admin = "admin",
  seller = "seller",
  buyer = "buyer",
}

interface Data {
  id: number;
  fullName: string;
  email: string;
  type: UserType;
}

export class UserEntity {
  id: number;
  fullName: string;
  email: string;
  type: UserType;

  constructor(data: Data) {
    this.id = data.id;
    this.fullName = data.fullName;
    this.email = data.email;
    this.type = data.type;
  }
}
