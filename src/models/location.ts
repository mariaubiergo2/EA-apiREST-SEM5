import { Schema, Types, model, Model } from "mongoose";
import { Location } from "../interfaces/location.interface"; 

const LocationSchema = new Schema<Location>(
    {
        latitude:{
            type: Number,
            required: true,
        },
        longitude:{
            type: Number,
            required: true,
        }
    },
    {
        timestamps: true, //For every entry in the dB the creation date and update date are created
        versionKey: false, 
    }
)

const UserModel = model('locations', LocationSchema);

export default UserModel;
