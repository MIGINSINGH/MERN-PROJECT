import mongoose from "mongoose";

//   ajF0AwEvNi5WS8Gx

const connectDB = async ()=>{
      try {
          const connect = await mongoose.connect(
            "mongodb+srv://cnjeyakanth:ajF0AwEvNi5WS8Gx@mern-navni.lksmd.mongodb.net/",
            {
              useNewUrlParser: true,
              useUnifiedTopology: true,
            }
          );
          console.log("MONGODB COnnected Successfuly!");
      } catch (error) {
         console.log(error)
         process.exit(1);
      }
};




    export default connectDB;