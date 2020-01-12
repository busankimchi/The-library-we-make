const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport=require("passport");


const users=require("./routes/api/users");


const app = express();
// Bodyparser middleware
// console.log(11);

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());
// DB Config
const db = require("./config/keys").mongoURI;
// const db="mongodb+srv://ruddnr:ruddnr98@cluster0-nctnk.mongodb.net/test?retryWrites=true&w=majority";
// // Connect to MongoDB
console.log(db);

mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));




  // Passport config

// require('dotenv').config;
// mongoose.connect(process.env.MONGO_URI, {
//     useMongoClient:true
// }).then(
//     (response)=>{
//         console.log('success');
//     }
// ).catch(e=>{
//     console.error(e)
// })


// Passport middleware
app.use(passport.initialize());

require("./config/passport")(passport);

// Routes
app.use("/api/users", users);

const port = process.env.PORT || 5000; // process.env.port is Heroku's port if you choose to deploy the app there

app.listen(port, () => console.log(`Server up and running on port ${port} !`));