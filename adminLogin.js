function checkLogin(){
var user = document.getElementById('user').value;
var pass = document.getElementById('pass').value;

console.log(/admin$/i.test(user));
console.log(/admin$/i.test(pass));

if(!(/admin$/i.test(user)) || !(/admin$/i.test(pass)))
{
alert("Wrong Login Info");
}
else{
  window.location.href = "addRestaurant.html";
}


}

function hint(){
  alert("user : admin\npass : admin");
}
