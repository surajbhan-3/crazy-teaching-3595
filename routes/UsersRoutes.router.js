const express=require('express')
const {UserModel}=require("../model/UserModel")
const jwt=require("jsonwebtoken")
const bcrypt=require("bcrypt")
const userRouter=express.Router()




userRouter.post("/register",async(req,res)=>{
    const { name,email,password} = req.body;
    console.log(email)

  const findemail= await UserModel.find({"email":email})
  console.log(findemail)
   if(findemail.length>0){
     
      res.send("User already exist please login")
   }else{
      
       try {
          bcrypt.hash(password,5, async(err, hash)=>{
             if(err){
                res.send({"msg":"something gone wrong",err:err.message})
             }else{
                const user= new UserModel({name,email,password:hash})
                await user.save()
                res.send("User has been registered")
             }
          })
       } catch (error) {
           res.send({"msg":"somthing went wrong",error:error.message})
       }
   
  }
})






userRouter.post("/login",async(req,res)=>{
            const {email,password}=req.body
           // console.log(email,password)
     try {
        const user =await UserModel.find({email})
            //console.log(user)
         if(user.length>0){
            bcrypt.compare(password,user[0].password,(err,result)=>{

                 if(result){
                    let token= jwt.sign({userID:user[0]._id},"masai")
                    res.send({"msg":"User Successfully Logged in",token:token})
                 }else{
                     res.send("Wrong Credentials")
                 }
            })
         }
     } catch (error) {
        
        res.send({"msg":"something went wrong",error:error.message})
     }


})


module.exports={userRouter}