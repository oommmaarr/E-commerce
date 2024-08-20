let sign1 = document.querySelector("#sign1")
let sign2 = document.querySelector("#sign2")
let bu = document.querySelector("#bu1")
let info =document.querySelector("#info")

if(localStorage.getItem("email")){
    sign1.remove()
    sign2.remove()
    bu.remove()
   let text = "Hello " + localStorage.getItem("first") + " " + localStorage.getItem("last")
    info.innerHTML= text;
};
/////////////////////////////////////////////////////////////////////////////////////////////
// let counter = document.querySelector(".pos")  //span of counter 
// let pot =document.querySelectorAll(".pro") // 1 product
// let def =0;
// pot.forEach(function(ele){
//     ele.querySelector(".c1")
//     ele.addEventListener("click" , function(){
//         def=def+1
//         counter.style.display="block"
//         counter.innerHTML=def
//     })
// })

let counter = document.querySelector(".pos")  //span of counter 
let pot =document.querySelectorAll(".pro .c1") // 1 product
let def =0;
pot.forEach(function(ele){
    ele.addEventListener("click" , function(){
        def=def+1
        counter.style.display="block"
        counter.innerHTML=def
    })
})


    


