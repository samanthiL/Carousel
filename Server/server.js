const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 3600;
app.use(cors());
app.use("/",router);
app.use(express.json())
var api = require("./Api.json");

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/users");

const connection = mongoose.connection;

connection.once("open", function() {
    console.log("Connection with MongoDB was successful");
  });
 
// get user data
  
  app.get("/details", (req, res) => {
res.send(api);
     
  });

app.listen(PORT, function() {
  console.log("Server is running on Port: " + PORT);
});

