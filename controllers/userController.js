const users=require("../models/userSchema")

//register logic

exports.userRegister=async(req,res)=>{
    //to get image url
   //res.send(req.filename);
   // res.send("rregisster request served")
   //console.log(req.file);
   const file=req.file.filename
   const {fname,lname,mobile,email,gender,location,status}=req.body
   if(!fname || !lname || !mobile || !email || !gender || !location || !status || !file){
    res.status(403).json("All inputs are required")

   }
   try{
    const preuser=await users.findOne({email})
    if(preuser){
res.status(403).json("The user already exist in our database....")
    }
    else{
        const newuser=new users({
            // same order in the userSchema
            fname,lname,email,mobile,gender,status,profile:file,location
        })
        await newuser.save()
        // to data in mongo db
        res.status(200).json(newuser)
    }
   }
   catch(error){
res.status(401).json(error)
   }
}




