import { Elysia, }                                from 'elysia';
import { createUserController, loginController, } from '../server/dependencies';
import { createUserDTO, loginUserDTO, }           from './domain/userDTO';

export const userRouter = new Elysia({ prefix:'/users' }).post('/', () => createUserController.run.bind(createUserController), createUserDTO).post('/login', loginController.run.bind(loginController), loginUserDTO).get('/',() => "Get all users");