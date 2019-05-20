
var restaurantsContainer = document.getElementById("restaurantsContainer");

$.get("https://jsonstorage.net/api/items/3ee18af8-f30e-4094-97a7-570dac704378",
function(data, textStatus, jqXHR)
{
// var ourData = JSON.parse(data);
console.log(data.restaurant);
renderHTML(data.restaurant);
});

//using XMLHTTPRequest to retrieve data
// var ourRequest = new XMLHttpRequest();
// ourRequest.open('GET', 'http://localhost:3000/restaurant');
// ourRequest.onload = function() {
//   var ourData = JSON.parse(ourRequest.responseText);
//   console.log(ourData);
//   renderHTML(ourData);
// }
// ourRequest.send();

function renderHTML(data){
  console.log("hello");
  var htmlString = "";
  console.log(data[0]);
  for(i=0; i<data.length; i++){
    let a = i+1;
    htmlString += "<div class = 'p-2 restaurantBox'>";
    htmlString += "<img class='restaurantImg' src='images/" +a+ ".jpg'>";
    htmlString += "<b class=restaurantName>" + data[i].name + "</b>";
    htmlString += `<p class=restaurantRating>RATING: <span id=stars>${getStars(data[i].rating)}</span></p>`;
    htmlString += `<a href='restaurant.html?id=${i}'><button class=detailButton>Detail</button></a>`;
    console.log(i);
    htmlString += "<a href='restaurant.html#writeReviewTitle'><button class=writeButton>Write Review</button></a>";
    htmlString += "</div>";
  }
restaurantsContainer.insertAdjacentHTML('beforeend', htmlString);

// document.getElementById("stars1").innerHTML = getStars(3.6);
// document.getElementById("stars2").innerHTML = getStars(4.0);
// document.getElementById("stars3").innerHTML = getStars(3.6);
// document.getElementById("stars4").innerHTML = getStars(3.6);
// document.getElementById("stars5").innerHTML = getStars(3.6);
// document.getElementById("stars6").innerHTML = getStars(3.6);
// document.getElementById("stars7").innerHTML = getStars(3.6);
// document.getElementById("stars8").innerHTML = getStars(3.6);
// document.getElementById("stars9").innerHTML = getStars(3.6);
}
