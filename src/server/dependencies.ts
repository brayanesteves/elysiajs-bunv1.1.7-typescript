import { Hash }                 from "../services/hash";
import { CreateUser }           from "../user/application/create";
import { LoginUser }            from "../user/application/login";
import { UserRepository }       from "../user/infrastructure/UserRepository.js";
import { CreateUserController } from "../user/infrastructure/controllers/createController";
import { LoginController }      from "../user/infrastructure/controllers/loginController";

       const userRepository       = new UserRepository();
       const hashService          = new Hash();
       const createUser           = new CreateUser(userRepository, hashService);
export const createUserController = new CreateUserController(createUser);
       const loginUser            = new LoginUser(userRepository, hashService);
export const loginController      = new LoginController(loginUser);