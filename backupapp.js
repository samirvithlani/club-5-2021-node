//javascript --> client side...
//nodejs --> server side...
// const users = require("./users");
// console.log("Hello World");
// console.log(users);
// console.log(users.userAge);
// console.log(users.userName);
// // console.log(users.sendUSerData);
// users.sendUSerData();

const {sendUSerData,userName,userAge} = require("./users");
console.log("Hello World");
console.log(userAge);
console.log(userName);
// console.log(users.sendUSerData);
sendUSerData();


//MERN --> MongoDB, Express, React, NodeJS
//Create API --> apache tomcat --> builtin server
//http module
//express module

// var http = require("http");


// //create server using HTTP MODULE

// var server = http.createServer((req, res) => {
//     console.log("server created");
// })

// server.listen(8000,()=>{
//     console.log("server is running 8000");
// });