let allData=[]
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
     allData.push(data);
     // search(data)
}).catch((err)=>{
     console.log(err)
})
//console.log(allData)
let cartData=[]


function displayData(data){
     let furnitureData=document.querySelector(".furniture-container")
     furnitureData.innerHTML=null
      data.forEach((el)=>{

     //  console.log(el.subCategory)
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


// * filter

 let p = document.querySelector("#filte");

p.addEventListener("change", function (event) {
    event.preventDefault();
     let selected = event.target.value;
    if (selected == "all") {
        displayData(allData[0])
   
    }
    else {

        let filtered_data = allData[0].filter(function (el) {
            return el.subCategory == selected
        });
        displayData(filtered_data)
     
    }

});


//  select by brands

document.querySelector(".CasaCraft").addEventListener("click",()=>{
    console.log('helo')

       let selected="CasaCraft"
       console.log(selected)
       let filtered_data = allData[0].filter(function (el) {
        return el.brand == selected
    });
    displayData(filtered_data)
})

document.querySelector(".Vittoria").addEventListener("click",()=>{
    console.log('helo')

       let selected="Vittoria"
       console.log(selected)
       let filtered_data = allData[0].filter(function (el) {
        return el.brand == selected
    });
    displayData(filtered_data)
})

document.querySelector(".Vittoria").addEventListener("click",()=>{
    console.log('helo')

       let selected="Vittoria"
       console.log(selected)
       let filtered_data = allData[0].filter(function (el) {
        return el.brand == selected
    });
    displayData(filtered_data)
})


document.querySelector(".Woodsworth").addEventListener("click",()=>{
    console.log('helo')

       let selected=" Woodsworth"
       console.log(selected)
       let filtered_data = allData[0].filter(function (el) {
        return el.brand == selected
    });
    displayData(filtered_data)
})

document.querySelector(".ESTRE").addEventListener("click",()=>{
    console.log('helo')

       let selected="ESTRE"
       console.log(selected)
       let filtered_data = allData[0].filter(function (el) {
        return el.brand == selected
    });
    displayData(filtered_data)
})

document.querySelector(".Durian").addEventListener("click",()=>{
    console.log('helo')

       let selected="Durian"
       console.log(selected)
       let filtered_data = allData[0].filter(function (el) {
        return el.brand == selected
    });
    displayData(filtered_data)
})


document.querySelector(".home").addEventListener("click",()=>{
    console.log('helo')

       let selected="@home"
       console.log(selected)
       let filtered_data = allData[0].filter(function (el) {
        return el.brand == selected
    });
    displayData(filtered_data)
})

document.querySelector(".Sleepyhead").addEventListener("click",()=>{
    console.log('helo')

       let selected="Sleepyhead"
       console.log(selected)
       let filtered_data = allData[0].filter(function (el) {
        return el.brand == selected
    });
    displayData(filtered_data)
})


document.querySelector(".Star-India").addEventListener("click",()=>{
    console.log('helo')

       let selected="Star India"
       console.log(selected)
       let filtered_data = allData[0].filter(function (el) {
        return el.brand == selected
    });
    displayData(filtered_data)
})


// sorting

let sorting = document.querySelector("#sort");

sorting.addEventListener("change", function (event) {

    let val = document.querySelector("#sort").value;
    //console.log(val)

    if (val == "LTH") {
        let data1 = allData[0].sort(function (a, b) {
            return a.Price - b.Price;

        })
       
        displayData(data1)

        


    } else if (val == "HTL") {
        let sorteddata = allData[0].sort(function (a, b) {
            return b.Price - a.Price;

        })
        displayData(sorteddata)
    

    } else {
        displayData(allData[0])
     
        
    }
})

function search() {
    console.log("hleo")
    let q = document.querySelector("#fin").value;
    console.log(q)
   
    let newData = allData[0].filter(function (el) {
        return el.name.toLowerCase().includes(q.toLowerCase());
    });

   // console.log(newData)
    displayData(newData);
}