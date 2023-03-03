//The routes must be aware of the controllers

import { Router, Request, Response } from "express";
import { getUser, getUsers, postUser, deleteUser, updateUser} from "../controllers/user";

const router = Router()

//Prefix now depend on the file name
//router.get("/", (req: Request, res:Response) => {
//    res.send({data:'Here are the users'})
//});

router.get("/", getUsers);
router.get("/:id", getUser);
router.post("/", postUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

//When variable router is created it must be exported too
export { router };
