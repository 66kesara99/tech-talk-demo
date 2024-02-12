import { FC, useEffect, useState } from "react";
import { Locate } from "../../../../services/service-locator.service";
import { UserEntity } from "../../domain/entities/user.entity";
import { GetUserTypeWelcomeString } from "../../domain/usecases/check-admin.usecase";
import { GetUserUseCase } from "../../domain/usecases/get-user.usecase";
import { UpdateUserUseCase } from "../../domain/usecases/update-user.usecase";

interface Props {
  locate: Locate;
}

export const ViewUserPage: FC<Props> = ({ locate }) => {
  const [user, setUser] = useState<UserEntity>();
  const getUser = locate("GetUser") as GetUserUseCase;
  const updateUser = locate("UpdateUser") as UpdateUserUseCase;
  const welcomeString = locate(
    "GetUserTypeWelcomeString"
  ) as GetUserTypeWelcomeString;

  useEffect(() => {
    getUser.call().then((user) => {
      setUser(user);
    });
  }, [getUser, locate]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const updatedUser = await updateUser.call({
      user,
      fullName: e.target.fullName.value,
      email: e.target.email.value,
    });
    setUser(updatedUser);
  };

  return (
    <div>
      <h1>
        {welcomeString.call({
          type: user?.type,
        })}
      </h1>
      <h2>{user?.fullName}</h2>
      <h3>{user?.email}</h3>

      <form
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "10px",
        }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="fullName">Full Name</label>
        <input type="text" id="fullName" />
        <label htmlFor="fullName">Email</label>
        <input type="text" id="email" />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};
