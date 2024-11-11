import mongoose from "mongoose";

const connectDB = async () => {
 
     mongoose.connection.on('connected', () => console.log("Database connected"))

     await mongoose.connect(`${process.env.MONOGODB_URI}/doconcall`)
}

export default connectDB