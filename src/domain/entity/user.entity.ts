export interface UserBodyAuthEntity {
    username: string;
    password: string;
}

export interface UserBodyRegister {
    name: string;
    lastname: string;
    password: string;
    email: string;
    age: string;
}

export interface UserBodyRegisterDB {
    name: string;
    lastname: string;
    password: string;
    username: string;
    age: string;
}

export interface UserEntity {
    id: number;
    username: string;
    name: string;
    lastname: string;
    password: string;
    age: string;
}

export interface UserFullEntity {
    id: number;
    username: string;
    name: string;
    lastname: string;
    age: string;
}

export interface UserAuthEntity {
    user: UserFullEntity;
    access_token: string;
}