import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB = async () =>
{
  try {
     await mongoose.connect(`${process.env.MONGO_URI}/${ DB_NAME}`)
     console.log(`\n MongDb connected !! DB HOST: ${connectionInstance.conncetion.host}`);
  } catch (error){
    console.log("MONGODB connection error", error)
    process.exit(1)
  }
}

export default connectDB

// const mongoose = require('mongoose');

// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log('MongoDB connected');
//   } catch (error) {
//     console.error('MONGODB connection error', error);
//     process.exit(1);
//   }
// };

// export default connectDB
