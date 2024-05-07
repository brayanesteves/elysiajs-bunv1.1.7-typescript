import { CreateUser }           from "../user/application/create";
import { UserRepository }       from "../user/infrastructure/UserRepository.js";
import { CreateUserController } from "../user/infrastructure/controllers/createController";


       const userRepository       = new UserRepository();
       const createUser           = new CreateUser(userRepository);
export const createUserController = new CreateUserController(createUser);