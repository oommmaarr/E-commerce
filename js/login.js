let user =document.querySelector("#email")
let pass = document.querySelector("#pass")
let logBtn = document.querySelector("#button")
let eye = document.querySelector("#eye")
let getUser = localStorage.getItem("email")
let getPass = localStorage.getItem("pass")

logBtn.addEventListener("click" , function(e){
   e.preventDefault()
   if(email.value==="" || pass.value==="" ){
    alert("Fill The Form")
   }else{
     if(getUser && getUser.trim() === email.value && getPass && getPass.trim() ===pass.value){
        setTimeout( () =>{
            window.location="omar.html"
        }, 1000)
     } else{
        alert("Username or password wrong")
     }
   }
})
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