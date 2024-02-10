import { UserApi } from "./modules/user/data/apis/user.api";
import { UserRepositoryImpl } from "./modules/user/data/repo-impl/user.repository-impl";
import { UserRepository } from "./modules/user/domain/repositories/user.repository";
import { GetUserUseCase } from "./modules/user/domain/usecases/get-user.usecase";
import { ServiceLocator } from "./services/service-locator.service";

export const initServices = () => {
  const sl = new ServiceLocator();

  sl.register("UserApi", new UserApi());
  sl.register(
    "UserRepository",
    new UserRepositoryImpl(sl.resolve("UserApi") as UserApi)
  );
  sl.register(
    "GetUser",
    new GetUserUseCase(
      sl.resolve("UserRepository") as UserRepository
    ) as GetUserUseCase
  );

  return sl.resolve;
};
