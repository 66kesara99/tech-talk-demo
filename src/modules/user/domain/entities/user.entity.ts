interface Data {
  id: number;
  fullName: string;
  email: string;
}

export class UserEntity {
  id: number;
  fullName: string;
  email: string;

  constructor(data: Data) {
    this.id = data.id;
    this.fullName = data.fullName;
    this.email = data.email;
  }
}
