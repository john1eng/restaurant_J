function checkLogin(){
var user = document.getElementById('user').value;
var pass = document.getElementById('pass').value;

if(!(/admin/i.test(user)) && !(/'admin'/i.test(pass)))
{
alert("Wrong Login Info");
}
else{
  window.location.href = "admin.html";
}


}

function hint(){
  alert("user : admin\npass : admin");
}
