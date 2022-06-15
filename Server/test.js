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
 

/* login api */
app.post("/login", (req, res) => {
  try {
    console.log("aaa",req.body.username);
    if (req.body && req.body.username && req.body.password) {
      user.find({ username: req.body.username }, (err, data) => {
        if (data.length > 0) {

          // if (bcrypt.compareSync(data[0].password, req.body.password)) {
          //   checkUserAndGenerateToken(data[0], req, res);
          // } 
          res.status(200).json({
            status: true,
            title: 'sign in Successfully.'
          });
        } else {
          res.status(400).json({
            errorMessage: 'Username or password is incorrect!',
            status: false
          });
        }
      })
    } else {
      res.status(400).json({
        errorMessage: 'Add proper parameter first!',
        status: false
      });
    }
  } catch (e) {
    res.status(400).json({
      errorMessage: 'Something went wrong!',
      status: false
    });
  }

});

// get user data
  

  app.get("/details", (req, res) => {
res.send(api);
      // user.find({}, (err, result) => {
      //   console.log("customer ",result);
      //   res.send(result);
      // })
  });

  // get username only

  app.get('/username/:id',(req, res) =>{
    const id = req.params.id;
    user.findOne({username: id}, function(err, result) {
    if (err) {
      console.log(err);
    } else {
      // const response =[result].map((data) => {
        return res.json(result);
        // return {username: data.username};})[0];
      // return res.json(response);
    }
  
  });
});


  app.get('/details/:id',(req, res) =>{
    let id = req.params.id;
console.log(id);
  user.findOne({username: id}, function(err, result) {
    if (err) {
      console.log(err);
    } else {
      return res.json(result);

      // Do Something 
    }
  });
  });


  
/* register api */
app.post("/reg", (req, res) => {

    
     try {
          console.log("jkjk",req.body.username);
          if (req.body && req.body.username && req.body.password) {
  
        user.find({ username: req.body.username }, (err, data) => {
  
          if (data.length == 0) {
  
            let User = new user({
              username: req.body.username,
              lname: req.body.lname,
              fname: req.body.fname,
              password: req.body.password
            });
  
            User.save((err, data) => {
              if (err) {
                res.status(400).json({
                  errorMessage: err,
                  status: false
                });
              } else {
                res.status(200).json({
                  status: true,
                  title: 'Registered Successfully.'
                });
              }
            });
  
          } else {
            res.status(400).json({
              errorMessage: `UserName ${req.body.username} Already Exist!`,
              status: false
            });
          }
  
        });
  
      } 
    } catch (e) {
      res.status(400).json({
        errorMessage: 'Something went wrong!',
        status: false
      });
    }
});

app.listen(PORT, function() {
  console.log("Server is running on Port: " + PORT);
});

