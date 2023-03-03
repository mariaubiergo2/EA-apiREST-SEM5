import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";

const getLocation = (req: Request, res: Response) => {
    try{
    } catch (e) {
        handleHttp(res, 'ERROR_GET_LOCATION');
    }
}

const getLocations = (req: Request, res: Response) => {
    try{
    } catch (e) {
        handleHttp(res, 'ERROR_GET_LOCATIONS');
    }
}

const postLocation = ({body}: Request, res: Response) => {
    try{
    } catch (e) {
        handleHttp(res, 'ERROR_POST_LOCATION');
    }
}

const updateLocation = (req: Request, res: Response) => {
    try{
    } catch (e) {
        handleHttp(res, 'ERROR_UPDATE_LOCATIONS');
    }
}

const deleteLocation = (req: Request, res: Response) => {
    try{
    } catch (e) {
        handleHttp(res, 'ERROR_DELETE_LOCATION');
    }
}

export {getLocation, getLocations, postLocation, deleteLocation, updateLocation }
