//conect node and mongoose here...
const mongoose = require('mongoose')

const DB= process.env.DATABASE
//process.env -- run cheyumbol assign akkunna value

mongoose.connect(DB,{
    // to avoid unwanted warnings....
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>{
    console.log('Mongodb is successfully connected');
}).catch((error)=>{
    console.log(error);
})