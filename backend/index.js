
const express=require('express')
const {connection}=require("./config/db")
require("dotenv").config()
const {userRouter}=require("./routes/UsersRoutes.router")
 const {itemRouter}=require("./routes/itemRouters.routes")
const {authenticate}=require("./middleware/authenticate.middlewares")
const cors=require("cors")



const app=express()
app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
     res.send("Welcome to homepage")
})

app.use("/users",userRouter)
app.use(authenticate)
app.use("/items",itemRouter)




app.listen(process.env.port, async(req,res)=>{

    try {
      await connection
      console.log("mongodb is connected")
    } catch (error) {
      res.send(err)
    }
console.log("Server is Running")
})

