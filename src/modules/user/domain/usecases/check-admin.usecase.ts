import { UserType } from "../entities/user.entity";

interface Params {
  type?: UserType;
}

export class GetUserTypeWelcomeString {
  call = ({ type }: Params) => {
    switch (type) {
      case UserType.admin:
        return "Hello Administrator!";
      case UserType.buyer:
        return "Welcome to our store!";
      case UserType.seller:
        return "Good day seller";
      default:
        return "Unknown type";
    }
  };
}
