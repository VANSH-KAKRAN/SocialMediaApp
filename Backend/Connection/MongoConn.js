import mongoose from "mongoose";

const MongoConnection = mongoose.connect(
  "mongodb+srv://username:password@clusterName.buada.mongodb.net/CollectionName?retryWrites=true&w=majority&appName=Cluster-1"
).then(()=>{
    console.log("MongoDB Connected...");
}).catch(()=>{
    console.log("Failed to connect to MongoDB...");
})

export default MongoConnection ;
