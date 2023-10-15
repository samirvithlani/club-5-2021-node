// //javascript --> client side...
// //nodejs --> server side...
// // const users = require("./users");
// // console.log("Hello World");
// // console.log(users);
// // console.log(users.userAge);
// // console.log(users.userName);
// // // console.log(users.sendUSerData);
// // users.sendUSerData();

// const {sendUSerData,userName,userAge} = require("./users");
// console.log("Hello World");
// console.log(userAge);
// console.log(userName);
// // console.log(users.sendUSerData);
// sendUSerData();


// //MERN --> MongoDB, Express, React, NodeJS
// //Create API --> apache tomcat --> builtin server
// //http module
// //express module

// // var http = require("http");


// // //create server using HTTP MODULE

// // var server = http.createServer((req, res) => {
// //     console.log("server created");
// // })

// // server.listen(8000,()=>{
// //     console.log("server is running 8000");
// // });
// var user = {
//     id:1,
//     name:"raj"
// }


// var users =[
//     {
//         name:"raj"
//     },
//     {
//         name:"pankaj"
//     }
// ]
// app.get("/user",(req,res)=>{
//     console.log("user api called");
//     //res.send("user api called");
//     res.status(200).json({
//         message:"user api called",
//         user:user
//     })
// })

// app.post("/employee",(req,res)=>{

//     console.log("employee api called");
//     console.log(req);
//     //form data
    
//     res.send("employee api called");

// })

// app.get("/user/:id",(req,res)=>{

//     const id = req.params.id;
//     const query = req.query;
//     console.log(query);
//     console.log("user api called");
//     res.json({
//         message:"user api called",
//         user:users,
//         id:id
//     })

// })

