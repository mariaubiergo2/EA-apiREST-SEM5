//BLOG IS A GENERIC CONTROLLER
//Useful to refactor and reuse it
//Controller just recieves Request and sends Response
//Controller contains the CRUD functions

import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";

const getBlog = (req: Request, res: Response) => {
    try{
    } catch (e) {
        handleHttp(res, 'ERROR_GET_BLOG');
    }
}

const getBlogs = (req: Request, res: Response) => {
    try{
    } catch (e) {
        handleHttp(res, 'ERROR_GET_BLOGS');
    }
}

const postBlog = ({body}: Request, res: Response) => {
    try{
    } catch (e) {
        handleHttp(res, 'ERROR_POST_BLOG');
    }
}

const updateBlog = (req: Request, res: Response) => {
    try{
    } catch (e) {
        handleHttp(res, 'ERROR_UPDATE_BLOGS');
    }
}

const deleteBlog = (req: Request, res: Response) => {
    try{
    } catch (e) {
        handleHttp(res, 'ERROR_DELETE_BLOG');
    }
}

export {getBlog, getBlogs, postBlog, deleteBlog, updateBlog}
