import type { IUser } from "../domain/IUser.js";
import type { IHash } from "../../services/interfaces/IHash.js";

export class CreateUser {
    constructor(private iUser: IUser, private iHash:IHash) {}

    async run(email:string, password:string) {
        const hashedPassword = await this.iHash.hash(password);
        return await this.iUser.create(email, hashedPassword);
    }
}