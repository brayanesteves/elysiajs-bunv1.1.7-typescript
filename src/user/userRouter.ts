import { Elysia,}                from 'elysia';
import { createUserController, } from '../server/dependencies';
import { createUserDTO, }        from './domain/userDTO';

export const userRouter = new Elysia({ prefix:'/users' }).post('/', () => createUserController.run.bind(createUserController), createUserDTO).get('/',() => "Get all users");