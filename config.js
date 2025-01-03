const dotenv = require('dotenv')
const path = require('path')

dotenv.config({
    path: path.resolve(__dirname, `${process.env.NODE_ENV}.env`)
})


module.exports = {
    NODE_ENV : process.env.NODE_ENV || 'development',
    HOST : process.env.HOST || 'localhost',
    PORT : process.env.PORT,
    DB_URL: process.env.DB_URL || 'mongodb+srv://samir:samir@cluster0.key63fx.mongodb.net/club5-node',

}