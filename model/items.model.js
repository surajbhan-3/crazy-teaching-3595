const mongoose=require("mongoose")


const itemSchema= mongoose.Schema({

    name : String,
    brand:String,
    price:String,
    img:String,
    category:String,
    subCategory:String,
    details:Array,
    info:String
    
     
      
})


const ItemModel= mongoose.model("item",itemSchema)

module.exports={ItemModel}