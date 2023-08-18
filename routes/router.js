const express =require('express')
//const upload=require('upload')
const router= new express.Router()

const userController=require('../controllers/userController')
const upload=require('../multerConfig/storageConfig')
//register
// post("path",logic)
router.post('/employee/register',upload.single('user_profile'),userController.userRegister)

module.exports=router