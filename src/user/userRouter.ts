import { Elysia, t }            from 'elysia';
import { createUserController } from '../server/dependencies';

export const userRouter = new Elysia({ prefix:'/users' }).post('/', () => createUserController.run.bind(createUserController), {
    body: t.Object({
        email   :t.String(),
        password:t.String()
    })
}).get('/',() => "Get all users");