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

let cartData=[]

function displayData(data){
     let furnitureData=document.querySelector(".furniture-container")
   console.log(data)
      data.forEach((el)=>{

          //  console.log(el.details[0].Primarymaterial)
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
            
             buynow.addEventListener("click", ()=>{
                cartData = JSON.parse(localStorage.getItem("Addtocart"))||[] ;

            let datapresent = false;
            for (let i = 0; i < cartData.length; i++) {

                if (cartData[i]._id == el._id) {
                    datapresent = true;
                    break;
                }
            }

            console.log(datapresent)
            if (datapresent == true) {
                alert("Product Already in Cart❌");

            } else {
                cartData.push({ ...el, quantity: 1 });
                localStorage.setItem("Addtocart", JSON.stringify(cartData));
                alert("Product Added To Cart ✔");

            }
             
          
          
          
          })


          div.append(image,names,brand,price,buynow)

          furnitureData.append(div)

      
      })
}


 
 
        