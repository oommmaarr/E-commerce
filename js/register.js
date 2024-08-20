let first = document.querySelector("#first")
let last =document.querySelector("#last")
let email= document.querySelector("#email")
let pass = document.querySelector("#pass")
let reBtn = document.querySelector("#reBtn")
let eye =document.querySelector("#eye")

reBtn.addEventListener("click" , function(e){
    e.preventDefault()
    if(first.value==="" || last.value ==="" || email.value==="" || pass.value===""){
        alert("Fill The Form ")
    }else{
        localStorage.setItem("first" , first.value)
        localStorage.setItem("last" , last.value)
        localStorage.setItem("email" , email.value)
        localStorage.setItem("pass" , pass.value)

        setTimeout( () =>{
        window.location="login.html"    
        } , 1000)
    }
})
const bar = document.getElementById("bar")
const nav =document.getElementById("navbar")

if (bar){
    bar.addEventListener("click" , ()=>{
        nav.className.add("active");
    })
}
eye.onclick =function(){
    if (pass.type == "password"){
        pass.type="text";
        eye.classList.add("fa-eye")
        eye.classList.remove("fa-eye-slash")       
    }else{
    pass.type="password"
    eye.classList.remove("fa-eye")
    eye.classList.add("fa-eye-slash")   
    }    
}
