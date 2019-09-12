function addRestaurant(){

var name = document.getElementById("name").value;
// var boro = document.getElementById("boro").value;
// var cruisine = document.getElementById('cruisine').value;
var mon = document.getElementById('mon').value;
var tue = document.getElementById('tue').value;
var wed = document.getElementById('wed').value;
var thu = document.getElementById('thu').value;
var fri = document.getElementById('fri').value;
var sat = document.getElementById('sat').value;
var sun = document.getElementById('sun').value;

$.get("https://jsonstorage.net/api/items/3ee18af8-f30e-4094-97a7-570dac704378",
function(data, textStatus, jqXHR)
{
  var newData = data;
  newData.restaurant.push({"name":name,"rating":"","hours":{"Monday":mon,"Tuesday":tue,"Wednesday":wed,"Thursday":thu,"Friday":fri,"Saturday":sat,"Sunday":sun}});
  console.log(newData);

var newDataString = JSON.stringify(newData);
// put addrestaurant
$.ajax({
url:"https://jsonstorage.net/api/items/3ee18af8-f30e-4094-97a7-570dac704378",
type:"PUT",
data: newDataString,
contentType:"application/json; charset=utf-8",
dataType:"json",
success: function(data, textStatus, jqXHR){
}
});

alert("Restaurant Added");
window.location.reload();
});
}
