import { UserAuthEntity, UserBodyAuthEntity, UserBodyRegisterDB, UserEntity } from "../entity/user.entity";

export abstract class UserRepoContract {
    abstract createUser(body: UserBodyRegisterDB): Promise<UserEntity>;
    abstract getUserByKey(key: string, value: string): Promise<UserEntity>;
    abstract authUser(body: UserBodyAuthEntity): Promise<UserAuthEntity>;
}