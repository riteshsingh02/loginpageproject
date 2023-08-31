

const pass=document.getElementById("pass");
const checkBox=document.getElementById("checkBox");

const logbtn=document.getElementById("logbtn");
const user=document.getElementById("user");
logbtn.addEventListener('click',()=>{
    document.getElementById("nameinp").style.display="none";
    document.getElementById("heads").innerHTML="Log In"; 
    document.getElementById("logbtn").innerHTML="Log In";
})
user.addEventListener('click',(e)=>{
    e.preventDefault()
    document.getElementById("nameinp").style.display="block";
    document.getElementById("heads").innerHTML="Sign UP";
    document.getElementById("logbtn").innerHTML="Sign UP";

})
checkBox.addEventListener('click', ()=> {
    var x = document.getElementById("pass");
    if (x.type === "password") {
      x.type = "text";
    }  else {
        x.type = "password";
      }
  })
  
   
   
    
    

