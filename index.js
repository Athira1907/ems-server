
require('dotenv').config()
//it helps to connect .env file to process 
const express =require('express')

const cors=require('cors')

require('./db/connection')
const router=require('./routes/router')
const server =express()
const PORT= process.env.PORT || 4000

server.use(cors())
// Express.js is a routing 
//and Middleware framework for handling the different routing of the webpage 
//and it works between the request and response cycle. 
//body parser -- express.json() is a application specific middlewarre

// Middleware is software that is used to bridge the gap between applications and operating systems
server.use(express.json())
server.use(router)

server.get('/',(req,res)=>{
    res.send('EMS Server Started')
})


// It specifies the port on which we want our app to listen.
// Host (Optional): It specifies the IP Address of the host on which we want our app to listen.
server.listen(PORT,()=>{
    console.log(`EMS Server Started at port no. ${PORT}`);
})
//const mongoose=require('mongoose')
