var deleteRes = document.getElementById("deleteRes");

$.get("https://jsonstorage.net/api/items/3ee18af8-f30e-4094-97a7-570dac704378",
function(data, textStatus, jqXHR)
{
// var ourData = JSON.parse(data);
console.log(data.restaurant);
for(var i=0; i<data.restaurant.length;i++){
  console.log("Restaurant Names:" + data.restaurant[i].name);
}
renderHTML(data.restaurant);
});

function renderHTML(data){
var htmlString = "";
for(i=0; i<data.length; i++){
htmlString += `<option name='editRestaruant' value = ${i}>${data[i].name}</br>`;
}
deleteRes.insertAdjacentHTML('beforeend', htmlString);
}

function deleteRest(){
  $.get("https://jsonstorage.net/api/items/3ee18af8-f30e-4094-97a7-570dac704378",
  function(data, textStatus, jqXHR)
  {

    data.restaurant.splice(deleteRes.value,1);
    console.log(data.restaurant);

    var newDataString = JSON.stringify(data);
    //put data
    $.ajax({
    url:"https://jsonstorage.net/api/items/3ee18af8-f30e-4094-97a7-570dac704378",
    type:"PUT",
    data: newDataString,
    contentType:"application/json; charset=utf-8",
    dataType:"json",
    success: function(data, textStatus, jqXHR){
        window.location.href = 'editRestaurant.html'
    }
});

  });
}

var restaurant_name = document.getElementById('restaurant_name');
var mon = document.getElementById('mon');
var tue = document.getElementById('tue');
var wed = document.getElementById('wed');
var thu = document.getElementById('thu');
var fri = document.getElementById('fri');
var sat = document.getElementById('sat');
var sun = document.getElementById('sun');

function editRes(){
  console.log('change');

  $.get("https://jsonstorage.net/api/items/3ee18af8-f30e-4094-97a7-570dac704378",
  function(data, textStatus, jqXHR)
  {
  restaurant_name.value = data.restaurant[deleteRes.value].name;

  mon.value =  data.restaurant[deleteRes.value].hours.Monday;
  tue.value =  data.restaurant[deleteRes.value].hours.Tuesday;
  wed.value =  data.restaurant[deleteRes.value].hours.Wednesday;
  thu.value =  data.restaurant[deleteRes.value].hours.Thursday;
  fri.value =  data.restaurant[deleteRes.value].hours.Friday;
  sat.value =  data.restaurant[deleteRes.value].hours.Saturday;
  sun.value =  data.restaurant[deleteRes.value].hours.Sunday;
  });
}

function updateRes(){
  $.get("https://jsonstorage.net/api/items/3ee18af8-f30e-4094-97a7-570dac704378",
  function(data, textStatus, jqXHR)
  {
  data.restaurant[deleteRes.value].name = restaurant_name.value;

  var newDataString = JSON.stringify(data);
  //put data
  $.ajax({
  url:"https://jsonstorage.net/api/items/3ee18af8-f30e-4094-97a7-570dac704378",
  type:"PUT",
  data: newDataString,
  contentType:"application/json; charset=utf-8",
  dataType:"json",
  success: function(data, textStatus, jqXHR){
      window.location.href = "editRestaurant.html";
  }
});
});
}
