import mongoose from "mongoose";

const DBConnection = async () => {
  const MONGODB_URL = `mongodb://user:tanya30@cluster0-shard-00-00.r6yd8.mongodb.net:27017,cluster0-shard-00-01.r6yd8.mongodb.net:27017,cluster0-shard-00-02.r6yd8.mongodb.net:27017/?ssl=true&replicaSet=atlas-qmb2eh-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0`;

  try {
    await mongoose.connect(MONGODB_URL, { useNewUrlParser: true });
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error while connecting with the database", error.message);
  }
};
export default DBConnection;
