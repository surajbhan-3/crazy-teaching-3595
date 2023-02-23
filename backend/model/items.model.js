const mongoose=require("mongoose")


const itemSchema= mongoose.Schema({

    name : String,
    brand:String,
    img:String,
    category:String,
    subCategory:String
     
      
})


const ItemModel= mongoose.model("item",itemSchema)

module.exports={ItemModel}