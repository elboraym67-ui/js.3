
function validataData(){

var user = document.getElementById("user").value;
var email = document.getElementById("email").value;
var pass = document.getElementById("pass").value;
var confirm = document.getElementById("confirm").value;
var result = document.getElementById("result");

result.setAttribute("class","alert alert-danger text-center");

if(user==""  && email==""  && pass==""  && confirm=="" ){
    result.innerHTML="Enter Data";
    return false;
}else if(user.length<3 || user.length>15){
    result.innerHTML="Enter 3-15 character is name";
        return false;
}else if(email.indexOf("@",2)==-1 || email.indexOf(".com")==-1){
    result.innerHTML="Enter Valid Email";
     return false;
}else if(pass==""){
    result.innerHTML="Enter Password";
     return false;
}else if(pass.length<8){
    result.innerHTML="Week Password";
     return false;
}else if(pass!= confirm){
result.innerHTML="Matched Pssword";
 return false;
}







}