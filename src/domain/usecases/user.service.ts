import * as jwt from 'jsonwebtoken';

import { compareHash, getHash } from "../../io/Hash";

import { UserRepoContract } from '../contracts/user.repo.contract';

import { UserAuthEntity, UserBodyAuthEntity, UserBodyRegister, UserBodyRegisterDB, UserEntity } from "../entity/user.entity";

export class UserService {

    constructor(private userRepo: UserRepoContract){}

    async authUser(body: UserBodyAuthEntity): Promise<UserAuthEntity> {
        const { username, password } = body;
        try {
            const user: UserEntity = await this.userRepo.getUserByKey('username', username);
            const codeMatch = await compareHash(password, user && user.password || '');
            if (codeMatch) {
                const access_token = jwt.sign({
                    id: user.id,
                    username: user.username,
                }, process.env.SECRET, { expiresIn: '30d' });
                const { password, ...data} = user;
                return {
                    user: data,
                    access_token,
                }
            }
            throw new Error('Error in password');
        } catch (error) {
            console.log('***** ERROR = UserService -> authUser', error.message);
            throw new Error(error);
        }
    }

    async registerUser(body: UserBodyRegister): Promise<string> {
        const { email, ...data } = body;
        try {
            const userExist = await this.userRepo.getUserByKey('username', email);
            if (userExist) {
                return 'userExist';
            }
            const password = await getHash(body.password);
            const bodyToCreate: UserBodyRegisterDB = {
                ...data,
                password,
                username: email,
            }
            await this.userRepo.createUser(bodyToCreate);
            return 'success';
        } catch (error) {
            console.log('***** ERROR = UserService -> register', error.message);
            throw new Error(error);
        }
    }

}