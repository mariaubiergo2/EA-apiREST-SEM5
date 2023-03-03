//The routes must be aware of the controllers

import { Router, Request, Response } from "express";
import { getLocation, getLocations, postLocation, deleteLocation, updateLocation } from "../controllers/location";

const router = Router()

//Prefix now depend on the file name
//router.get("/", (req: Request, res:Response) => {
//    res.send({data:'Here are the users'})
//});

router.get("/", getLocation);
router.get("/:id", getLocations);
router.post("/", postLocation);
router.put("/:id", deleteLocation);
router.delete("/:id", updateLocation);

//When variable router is created it must be exported too
export { router };
