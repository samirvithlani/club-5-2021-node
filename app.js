const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
//const dotenv = require("dotenv").config();
const config = require("./config");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

bodyParser.urlencoded({ extended: true });
//enable form data

//mongodb package //mongoose..

//router

const employeeRoutes = require("./routes/EmployeeRoutes");
const departmentRoutes = require("./routes/DepartmentRoutes");
const userRoutes = require("./routes/UserRoutes");
const roleRoutes = require("./routes/RoleRoutes");
const fileUploadRoutes = require("./routes/FileUploadRoutes");

app.use("/api", employeeRoutes);
app.use("/api", departmentRoutes);
app.use("/api", userRoutes);
app.use("/api", roleRoutes);
app.use("/api", fileUploadRoutes);


console.log("DB_URL", config.DB_URL);
const db = mongoose.connect(config.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

db.then(() => {
  console.log("connected to db");
}).catch((err) => {
  console.log(err);
});

//const PORT = process.env.PORT || 4000;
//creating server... using express..
const PORT = config.PORT;
app.listen(PORT, () => {
  console.log("server is running ", PORT);
});
