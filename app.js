const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

bodyParser.urlencoded({extended:true})
//enable form data



var user = {
    id:1,
    name:"raj"
}


var users =[
    {
        name:"raj"
    },
    {
        name:"pankaj"
    }
]
app.get("/user",(req,res)=>{
    console.log("user api called");
    //res.send("user api called");
    res.status(200).json({
        message:"user api called",
        user:user
    })
})

app.post("/employee",(req,res)=>{

    console.log("employee api called");
    console.log(req);
    //form data
    
    res.send("employee api called");

})

app.get("/user/:id",(req,res)=>{

    const id = req.params.id;
    const query = req.query;
    console.log(query);
    console.log("user api called");
    res.json({
        message:"user api called",
        user:users,
        id:id
    })

})





const PORT = 3001;
//creating server... using express..
app.listen(PORT,()=>{
    console.log("server is running ",PORT);
})