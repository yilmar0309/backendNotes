import * as jwt from 'jsonwebtoken';
import { Request, Response } from "express";

import { getTokenFromHeader } from "./Hash";
import { reponseJson } from "./responseJson";


/**
 * @author Alexis Noriega
 * @description Function to validate external JWT
 * @param controller Function to start service and process data
 * this function receive as paremeter usr_id (id of user that be request).
 * @param request get all parameters haders, body, queryParams, etc.
 * @param response response request
 * @version 1.0 Function version
 */
export function authMiddlewareSimple(controller: any) {
    return async (request: Request, response: Response) => {
        const token = getTokenFromHeader(request.headers['authorization'] || '');
        await jwt.verify(token, process.env.SECRET, async (error: Error) => {
            if (error) {
                console.log('*************** ERROR authMiddleware token ***************', error.message);
                await reponseJson(true, 'authMiddleware -> token', 'Not authorized token', 401, null, response);
            } else {
                try {
                    const result = await controller(request, response);
                    await reponseJson(false, result.nameFunction, 'success', 200, result.entity, response);
                } catch (error) {
                    await reponseJson(true, 'authMiddleware' + error, 'Error', 500, {}, response);
                }
            }
        });
    };
}
