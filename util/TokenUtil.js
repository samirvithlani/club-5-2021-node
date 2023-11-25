const jwt = require('jsonwebtoken');
const secret = "secretkey";

//user payload..
const generateToken = (user) => {

    const token = jwt.sign(user,secret,{
        expiresIn:"1h",
        algorithm:"HS512"
    })
    return token;

}

//req.header --> token -->
//res -->send....
//next() --> middleware
const validateToken = (token) => {


    try{
        const user = jwt.verify(token,secret);
        return user;
    }
    catch(err){
        console.log(err);
        return null;
    }

}

// var x = generateToken({name:"sachin",age:23})
// console.log(x);

// var y = validateToken("eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoic2FjaGluIiwiYWdlIjoyMywiaWF0IjoxNzAwMzcwNzc0LCJleHAiOjE3MDAzNzA4MDR9.UA0zO_J_Ud3pmW0vrFU9dy62QeLrCiowzXMYfKbI9AtiWSYuO-cTGJ9sMEn-l-skPtRmi8jL3229xhG-O6XhPA");
// console.log(y);

module.exports = {
    generateToken,
    validateToken
}