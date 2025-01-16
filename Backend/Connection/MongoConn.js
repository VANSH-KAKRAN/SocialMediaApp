import mongoose from "mongoose";

const MongoConnection = mongoose.connect(
  "mongodb+srv://vanshkakran82:jaatgodff1234@cluster-1.buada.mongodb.net/userData?retryWrites=true&w=majority&appName=Cluster-1"
).then(()=>{
    console.log("MongoDB Connected...");
}).catch(()=>{
    console.log("Failed to connect to MongoDB...");
})

export default MongoConnection ;