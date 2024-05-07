import { Elysia }     from "elysia";
import { userRouter } from "../user/userRouter.js";


export class Server {
    private app: Elysia;

    constructor() {
        this.app = new Elysia();
        this.app.group('/api/v0.0.1', (app) => app.use(userRouter));
    }

    public start() {
        this.app.listen(process.env.PORT || 3000, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        });
    }
}