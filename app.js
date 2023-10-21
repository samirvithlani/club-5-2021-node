const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

bodyParser.urlencoded({ extended: true });
//enable form data

//mongodb package //mongoose..

//router

const employeeRoutes = require("./routes/EmployeeRoutes");

app.use("/api", employeeRoutes);



const db = mongoose.connect("mongodb://127.0.0.1:27017/club5-node", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

db.then(() => {
  console.log("connected to db");
}).catch((err) => {
  console.log(err);
});

const PORT = 3001;
//creating server... using express..
app.listen(PORT, () => {
  console.log("server is running ", PORT);
});
