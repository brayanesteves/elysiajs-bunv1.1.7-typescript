import { CreateUser } from "../../application/create.js";

export class CreateUserController {

    constructor(private createUser:CreateUser) {}

    async run({ body, token }:any) {
        try {
            const user = await this.createUser.run(body.email, body.password);
            return {
                status:201,
                  data:user,
            };
        } catch(e) {
            const error = e as Error;
            return {
                status:500,                
                message:error.message,
            };
        }
    }

}