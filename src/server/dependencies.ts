import { Hash }                 from "../services/hash";
import { CreateUser }           from "../user/application/create";
import { UserRepository }       from "../user/infrastructure/UserRepository.js";
import { CreateUserController } from "../user/infrastructure/controllers/createController";

       const userRepository       = new UserRepository();
       const hashService          = new Hash();
       const createUser           = new CreateUser(userRepository, hashService);
export const createUserController = new CreateUserController(createUser);