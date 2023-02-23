const jwt=require("jsonwebtoken")

const authenticate=(req,res,next)=>{
     const token=req.headers.authorization
     if(token){
         jwt.verify(token,"masai",(err,decoded)=>{
             if(decoded){
                console.log(decoded)
                req.body.userID=decoded.userID
                next()
             }else{
                res.send("Please Login Now")
             }
            
         })
     }else{
        res.send("Please login now")
     }
}

module.exports={authenticate}
