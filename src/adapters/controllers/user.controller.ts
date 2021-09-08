import { Request, Response } from 'express';

import { UserService } from "../../domain/usecases/user.service";
import { UserCacheRepo } from "../repositories/user.cache.repo";

const userRepo = new UserCacheRepo();
const userService = new UserService(userRepo);

export class UserController {

    async authUser(request: Request, response: Response) {
        try {
            const resp = await userService.authUser(request.body);
            response.status(200).send({ error: false, function: 'UserController -> authUser', message: 'success', data: resp });
        } catch (error) {
            console.log('***** ERROR = UserController -> authUser', error.message);
            response.status(500).send({ error: true, function: 'UserController -> authUser', message: `${error.message}` });
        }
    }

    async registerUser(request: Request, response: Response) {
        try {
            const resp = await userService.registerUser(request.body);
            response.status(200).send({ error: false, function: 'UserController -> registerUser', message: 'success', data: resp });
        } catch (error) {
            console.log('***** ERROR = UserController -> registerUser', error.message);
            response.status(500).send({ error: true, function: 'UserController -> registerUser', message: `${error.message}` });
        }
    }

}