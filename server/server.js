const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser')
// const connectDB = require("./config/mongoose.config")
const {default: mongoose} = require("mongoose")


const app = express()

const PORT = process.env.PORT || 8000;

//MIDDLEWARE

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(bodyParser.json())


// connectDB();


// mongoose.connection.once('open', () => {
//     console.log('Connected to MongoDB');
//     app.listen(PORT, ( ) => console.log(`Express server running on ${PORT}`) )
// })
app.listen(PORT, ( ) => console.log(`Express server running on ${PORT}`) )