const express = require("express");
const routerUrls = require("./routes/routes");
const mongoose = require("mongoose");
//const Users = require("./schema");
const cors = require("cors");


async function saveData() {
  mongoose.set("strictQuery", false);
  mongoose.connect("mongodb://localhost/UserDetails");
  //Users.collection.insertOne({ username: "Harshit", password: "password" });
  //const user = await Users.find({username:"Harshit"});
  //console.log(user);
}
saveData();


const app = express();
app.use(express.json());
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
app.use("/app", routerUrls);
app.listen(4000, ()=>{console.log("server is running")});