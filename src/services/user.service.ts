//In charge to connect with the dB

import { User } from "../interfaces/user.interface";
import UserModel from "../models/user";

const insert_User = async (user: User) => {
    const responseInsert = await UserModel.create(user)
    return responseInsert;
};

const get_Users = async () => {
    const responseUser = await UserModel.find({})
    return responseUser;
};

const get_User = async (id: String) => {
    const responseUser = await UserModel.findOne({_id:id})
    return responseUser;
};

const update_User = async (id: String, data: User) => {
    const responseUser = await UserModel.findOneAndUpdate( //By default .findOneAndUpdate return the object before the update
        {_id:id}, //Condition
        data,     //Data to update
        {
            new: true //To force .findOneAndUpdate return the updated object
        }
        );
    return responseUser;
};

const delete_User = async (id: String) => {
    const responseUser = await UserModel.findOneAndRemove({_id: id});
    return responseUser;
};

export { insert_User, get_Users, get_User, update_User, delete_User };
