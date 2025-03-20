import mongoose from "mongoose";
const uri = "mongodb+srv://priyanka_kumari:<u5s7e8mz5uyxp2Fr>@cluster0.qvjgiie.mongodb.net/certify?retryWrites=true&w=majority&appName=Cluster0";
mongoose
  .connect(uri)
  .then(() => console.log("MongoDB Connected Successfully"))
  .catch((err) => console.log("MongoDB Connection Error: ", err));


