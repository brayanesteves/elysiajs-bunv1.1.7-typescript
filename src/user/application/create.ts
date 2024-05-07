import type { IUser } from "../domain/IUser.js";

export class CreateUser {
    constructor(private iUser: IUser) {}

    async run(email:string, password:string) {
        return await this.iUser.create(email, password);
    }
}