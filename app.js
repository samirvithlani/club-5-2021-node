const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
//const dotenv = require("dotenv").config();
const config = require("./config");
const cron = require("node-cron");



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
const productRoutes = require("./routes/ProductRoutes")
const categoryRoutes = require("./routes/CategoryRoutes")
app.use("/api", employeeRoutes);
app.use("/api", departmentRoutes);
app.use("/api", userRoutes);
app.use("/api", roleRoutes);
app.use("/api", fileUploadRoutes);
app.use("/products",productRoutes)
app.use("/categories",categoryRoutes)



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


//create db entry using cron job

function createDbEntry() {
  //db logic...
  console.log("creating db entry");
}

//1 -->minute
//2 -->hour
//3 -->day of month
//4 -->month
//5 -->day of week

//for every 1 minute

cron.schedule("*/10 * * * * *", () => {
  createDbEntry();
})





//const PORT = process.env.PORT || 4000;
//creating server... using express..
const PORT = config.PORT || 4000;
app.listen(PORT, () => {
  console.log("server is running ", PORT);
});
