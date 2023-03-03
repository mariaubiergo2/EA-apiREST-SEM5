import "dotenv/config"; //Implements variables
import { connect } from "mongoose";

// To connect to MongoDB
async function dbConnect(): Promise<void> {
    const DB_URI = <string>process.env.DB_URI;
    await connect(DB_URI);
}

//Connection exported
export default dbConnect;
