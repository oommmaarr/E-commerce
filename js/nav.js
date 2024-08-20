
let bar = document.querySelector("#bar")
let nav=document.querySelector("#navbar")
let close = document.querySelector("#close")
 
if(bar){
    bar.addEventListener("click" , ()=>{
        nav.classList.add("active")
    })

}
if (close){
    close.addEventListener("click" , ()=>{
        nav.classList.remove("active");
    })
}

let mind =document.querySelectorAll(".mind")  // 1 row
let dell=document.querySelectorAll(".d1")  // exit icon 
    dell.forEach(function(del){
    del.addEventListener("click" , ()=>{
       del.closest(".mind").remove()
    })
    })

// let mind = document.querySelectorAll(".mind")
// let pop =document.querySelector(".d1")
// mind.forEach(function(dell){
//     pop.addEventListener("click" , ()=>{
//         dell.remove("mind")
//     })
// })