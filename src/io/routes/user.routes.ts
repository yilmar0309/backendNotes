import { UserController } from "../../adapters/controllers/user.controller";

const userController = new UserController();

export default [
    {
        path: '/auth_user',
        method: 'post',
        action: userController.authUser,
    },
    {
        path: '/register_user',
        method: 'post',
        action: userController.registerUser,
    },
]