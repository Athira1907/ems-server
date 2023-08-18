const mongoose=require('mongoose')


// to validate data on server side we reequire a node library called Validator....
const validator=require('validator')

// we create an object
const userSchema=new mongoose.Schema({
    fname:{
        type:String,
        required:true,
        // to avoid unwanted space in input textarea
        trim:true
    },
    lname:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
         required:true,
         unique:true,
         validate(value){
             if(!validator.isEmail(value)){
              throw Error("Not a valid email")
              }
                        }
    },
    mobile:{
        type:String,
        required:true,
        unique:true,
        minLength:10,
        maxLength:10
    },
    gender:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    },
    profile:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    }
})

//model    by using schema we create a model
const users=  new mongoose.model("users",userSchema)

module.exports=users