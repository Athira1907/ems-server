// IMPORTANT
// how to handle upload files in back end servver

//use of multer -  to store offline image( unavailable files on internet ) on backend server
// it is a node js middlewaare for handling mulipart/form-data...


// Multer addds a body object and a file orr files object to  the request object.
// The body object contains the values of the text fields of the forrm ,
// the file or files object contains the files uploaded thhroughg the form


const multer= require('multer')

//storage config
const storage =multer.diskStorage({
    //  Use multer disk storage to write uploaded file
    // where to store.....
    destination:(req,file,callback)=>{
        callback(null,'./uploads')
    },
    filename:(req,file,callback)=>{
        const filename=`image-${Date.now()}.${file.originalname}`
        callback(null,filename)
    }
})

//filter file
const fileFilter=(req,file,callback)=>{
    // MIME types - Multipurpose Internet Mail Extensions.
    if(file.mimetype ==='image/png' || file.mimetype ==='image/jpeg' || file.mimetype ==='image/jpg'){
        callback(null,true)
    }
    else{
        callback(null,false)
        return callback(new Error('Only .png .jpeg .jpg formats are allowed..'))
    }
}

const upload=multer({
    storage:storage,
    fileFilter:fileFilter
})

module.exports=upload