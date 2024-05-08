import type { IUser } from "../domain/IUser.js";
import type { IHash } from "../../services/interfaces/IHash.js";

export class LoginUser {

    constructor(private iUser:IUser, private iHash:IHash) {  }

    async run(email:string, password:string) {
        const user = await this.iUser.find(email);
        if(!user) {
            throw new Error('User not found.');
        }

        const isValid = await this.iHash.compare(password, user.password);
        if(!isValid) {
            throw new Error('Invalid password.');
        }

        return user;
    }

}