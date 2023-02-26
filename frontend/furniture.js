console.log("hello") 
 fetch("https://dull-belt-colt.cyclic.app/items/furniture",{
    method:"GET",
    headers:{
        
        "Content-Type":"application/json"
    }
 })
// fetch("http://localhost:4500/items/furniture")
.then((res)=>{
     return res.json()
}).then((data)=>{
     console.log(data)
     displayData(data)
}).catch((err)=>{
     console.log(err)
})



function displayData(data){
     let furnitureData=document.querySelector(".furniture-container")
   console.log(data)
      data.forEach((el)=>{


          let div = document.createElement("div")
 
          let image = document.createElement("img")
          image.setAttribute("src", el.img)
        
  
          let names = document.createElement("h3")
          names.textContent = el.name;
          let brand=document.createElement("h4")
          brand.textContent=el.brand
          brand.style.color="grey"
  
          let price = document.createElement("p")
          price.textContent =  el.price
  
          // let desc = document.createElement("p")
          // desc.textContent = el.info
  
          let buynow = document.createElement("button")
          buynow.textContent = "Add To Cart"
           buynow.style.color="orange"
           buynow.style.fontSize="16px"
           buynow.style.fontWeight="bold"
           buynow.style.border="none"

           buynow.style.backgroundColor="white"



          div.append(image,names,brand,price,buynow)

          furnitureData.append(div)

      
      })
}
 
 
        