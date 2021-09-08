import * as jwt from 'jsonwebtoken';
import { UserEntity, UserBodyAuthEntity, UserAuthEntity, UserBodyRegisterDB } from "../../domain/entity/user.entity";
import { UserRepoContract } from "../../domain/contracts/user.repo.contract";

const userCache = {
    id: 1,
    name: 'Alexis',
    lastname: 'Noriega',
    username: 'yilmar0309@gmail.com',
    password: '$2a$10$nL67f7RB0OwpQzSFLE6ij.N3JicqH1olJa2URBY97EWhK4pvEM./W',
    age: '28',
}

export class UserCacheRepo implements UserRepoContract {

    async getUserByKey(key: string, value: string): Promise<UserEntity> {
        if (value === userCache.username) {
            return { ...userCache };
        } else {
            return null;
        }
    }

    async authUser(body: UserBodyAuthEntity): Promise<UserAuthEntity> {
        const access_token = jwt.sign({
            id: userCache.id,
            username: userCache.username,
        }, process.env.SECRET, { expiresIn: '30d' });
        return {
            user: userCache,
            access_token,
        }
    }

    async createUser(body: UserBodyRegisterDB): Promise<UserEntity> {
        return { ...userCache }; 
    }

}