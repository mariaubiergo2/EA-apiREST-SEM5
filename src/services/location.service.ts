//In charge to connect with the dB

import { Location } from "../interfaces/location.interface";
import LocationModel from "../models/location";

const insert_Location = async (Location: Location) => {
    const responseInsert = await LocationModel.create(Location)
    return responseInsert;
};

const get_Locations = async () => {
    const responseLocation = await LocationModel.find({})
    return responseLocation;
};

const get_Location = async (id: String) => {
    const responseLocation = await LocationModel.findOne({_id:id})
    return responseLocation;
};

const update_Location = async (id: String, data: Location) => {
    const responseLocation = await LocationModel.findOneAndUpdate( //By default .findOneAndUpdate return the object before the update
        {_id:id}, //Condition
        data,     //Data to update
        {
            new: true //To force .findOneAndUpdate return the updated object
        }
        );
    return responseLocation;
};

const delete_Location = async (id: String) => {
    const responseLocation = await LocationModel.findOneAndRemove({_id: id});
    return responseLocation;
};

export { insert_Location, get_Locations, get_Location, update_Location, delete_Location };
