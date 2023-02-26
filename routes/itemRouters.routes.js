const express=require('express')
const {ItemModel}=require("../model/items.model")
const cors=require("cors")
const bcrypt=require("bcrypt")
const itemRouter=express.Router()
const app=express()
app.use(cors)


itemRouter.get("/furniture",async(req,res)=>{
            console.log("hello")

       try {
          const allitem= await ItemModel.find({category:"furniture"})
          res.send(allitem)
       } catch (error) {
        res.send(error)
       }
})







itemRouter.get("/item/home-deceor",async(req,res)=>{

    try {
       const allitem= await itemModel.find({userID:req.body.userID})
       res.send(allitem)
    } catch (error) {
     res.send(error)
    }
})

itemRouter.get("/item/lampsandlighting",async(req,res)=>{

    try {
       const allitem= await ItemModel.find({userID:req.body.userID})
       res.send(allitem)
    } catch (error) {
     res.send(error)
    }
})

itemRouter.get("/item/kitchen",async(req,res)=>{

    try {
       const allitem= await itemModel.find({userID:req.body.userID})
       res.send(allitem)
    } catch (error) {
     res.send(error)
    }
})



itemRouter.post("/add",async(req,res)=>{

     try {
         const payload=req.body
        console.log(payload)
         const addItem=new  ItemModel(payload)
        // console.log(createPost)
         await addItem.save()
         res.send(addItem)

     } catch (error) {
        res.send(error)
     }
})

//  itemRouter.patch("/update",async(req,res)=>{
//      const payload=req.body
//      const addData=await ItemModel.updateMany({price:"₹ 9,999"})
//      res.send(addData)
//  })

//  db.users.updateMany({gender:"Female"},{$push:{scholarship:true}})




itemRouter.patch("/update/:id",async(req,res)=>{
    const payload=req.body
    const id=req.params.id
    const post= ItemModel.findOne({"_id":id})
    const userID_in_post=post.userID
    const userID_in_making_req=req.body.userID
    try {
         if(userID_in_making_req!==userID_in_post){
            res.send("unathoriesed")
         }else{
            const payload=req.body
           const datau= await ItemModel.findByIdAndUpdate({"_id":id},payload)
            console.log(datau)
            res.send("updated")
         }
        

    } catch (error) {
       res.send(error)
    }
})






itemRouter.delete("/delete/:id",async(req,res)=>{
    const id=req.params.id
    const post= PostModel.find({"_id":id})
    const userID_in_post=post.userID
    const userID_in_making_req=req.body.userID
    try {
         if(userID_in_making_req!==userID_in_post){
            res.send("unathoriesed")
         }else{
            await PostModel.findByIdAndDelete({"_id":id})
            res.send("deleted")
         }
        

    } catch (error) {
       res.send(error)
    }
})




itemRouter.get("/top/:id",async(req,res)=>{
    console.log("helo")
    console.log(req.params.id)

    const post = await PostModel.find({"userID":req.params.id},{"no_if_comments":40})
    //{$max: {"imdb": 8}}
    let max=0;
    for(let i=0; i<=post.length-1; i++){

        max=(Math.max(post[0].no_if_comments),max)
    }
   // console.log(max)
    res.send(max)

    // const payload=req.body
    // const id=req.params.id
    // const post= PostModel.findOne({"_id":id})
    // const userID_in_post=post.userID
    // const userID_in_making_req=req.body.userID
    // try {
    //      if(userID_in_making_req!==userID_in_post){
    //         res.send("unathoriesed")
    //      }else{
    //       const maxcomment=  await PostModel.find({"no_if_comments":{max}})
    //         res.send(maxcomment)
    //      }
        

    // } catch (error) {
    //    res.send(error)
    // }

})




itemRouter.get("/search",async(req,res)=>{
   
     const q=req.query
      
    try {
      
        

    } catch (error) {
       res.send(error)
    }
})





module.exports={itemRouter}