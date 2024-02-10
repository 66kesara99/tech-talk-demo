import { FC, useEffect, useState } from "react";
import { Locate } from "../../../../services/service-locator.service";
import { GetUserUseCase } from "../../domain/usecases/get-user.usecase";

interface Props {
  locate: Locate;
}

export const ViewUserPage: FC<Props> = ({ locate }) => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const getUser = locate("GetUser") as GetUserUseCase;
    getUser.call().then((user) => {
      setUserName(user.fullName);
    });
  }, [locate]);

  return <div>{userName}</div>;
};
