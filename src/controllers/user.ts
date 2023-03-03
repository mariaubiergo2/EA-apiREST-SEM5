import { Request, Response } from "express";
import { insert_User, get_Users, get_User, update_User, delete_User } from "../services/user.service";
import { handleHttp } from "../utils/error.handle";

const getUser = async ({params}: Request, res: Response) => {
    try{
        const {id} = params;
        const response = await get_User(id);
        const data = response ? response : "NOT_FOUND";
        res.send(data);
    } catch (e) {
        handleHttp(res, 'ERROR_GET_USER');
    }
}

const getUsers = async (req: Request, res: Response) => {
    try{
        const response = await get_Users();
        res.send(response);
    } catch (e) {
        handleHttp(res, 'ERROR_GET_USERS');
    }
}

const postUser = async ({body}: Request, res: Response) => {
    try{
        const responseUser = await insert_User(body);
        res.send(body);
    } catch (e) {
        handleHttp(res, 'ERROR_POST_USER', e);
    }
}

const updateUser = async ({params, body}: Request, res: Response) => {
    try{
        const {id} = params;
        const response = await update_User(id, body);
        res.send(response);
    } catch (e) {
        handleHttp(res, 'ERROR_POST_USER', e);
    }
}

const deleteUser = async ({params}: Request, res: Response) => {
    try{
        const {id} = params;
        const response = await delete_User(id);
        res.send(response);
    } catch (e) {
        handleHttp(res, 'ERROR_DELETE_USER');
    }
}

export {getUser, getUsers, postUser, deleteUser, updateUser}
