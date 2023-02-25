
console.log('hello')


// let btn=document.getElementById("furniture")
// btn.addEventListener("click", ()=>{

//      console.log('hellodsfddsfds')
// })

 fetch("https://dull-belt-colt.cyclic.app/items/furniture")
// fetch("http://localhost:4500/items/furniture")
.then((res)=>{
     return res.json()
}).then((data)=>{
     console.log(data)
}).catch((err)=>{
     console.log(err)
})