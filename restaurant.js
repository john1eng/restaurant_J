//convert url to object to locate the id from index.html
function getJsonFromUrl(url) {
  if(!url) url = location.search;
  var query = url.substr(1);
  var result = {};
  query.split("&").forEach(function(part) {
    var item = part.split("=");
    result[item[0]] = decodeURIComponent(item[1]);
  });
  console.log(result);
  return result;

}
//where to manipulate data
var restaurantName = document.getElementById("restName");
var restaurantImg = document.getElementById("restaurantImg");
var restaurantHours = document.getElementById("hoursP");
var rating = document.getElementById("stars");
var testingReview = document.getElementById("infoRev");


$.get("https://jsonstorage.net/api/items/3ee18af8-f30e-4094-97a7-570dac704378",
function(data, textStatus, jqXHR)
{
// var ourData = JSON.parse(data);
console.log(data);
renderHTML(data.restaurant);
});




//get data from the server
// var ourRequest = new XMLHttpRequest();
// ourRequest.open('GET', 'http://localhost:3000/restaurant');
// ourRequest.onload = function() {
//   var ourData = JSON.parse(ourRequest.responseText);
//   renderHTML(ourData);
//
// }
// ourRequest.send();



//generate data from the json server
function renderHTML(data){

  var i = getJsonFromUrl();
  var hourString = "";
  var reviewString = "";
  console.log(i);
  restaurantName.insertAdjacentHTML('beforeend', data[i.id].name);
  restaurantImg.setAttribute("src",`images/${data[i.id].img}`);
  rating.insertAdjacentHTML('beforeend', getStars(averageRating(i.id,data)));

  //object method to convert object to an array
  console.log(data[i.id].hours);
  if(data[i.id].hours != undefined){

  const entries = Object.entries(data[i.id].hours);

  // console.log(entries);

  //for loop to generate the hours of each week
  for(let i=0; i<entries.length; i++){
  hourString += `<label style="width:100px;font-size:15px">${entries[i][0]}:</label>    ${entries[i][1]}<br>`;
  }
  restaurantHours.insertAdjacentHTML('beforeend', hourString);
}

  //testingReview
  for(let ii=data[i.id].reviews.length-1; ii>=0; ii--){
  console.log(data[i.id].reviews[ii].name);
  console.log(ii);
  let reviewString = "";
  reviewString += '<div class="d-flex flex-row revcon">';
  reviewString += `<div class="userInfo"><b>${data[i.id].reviews[ii].name}</b><br><br>`;
  reviewString += `<img width="100%" src='images/user${ii+1}.jpg' >`;
  reviewString += "</div>";
  reviewString += "<div class='revInfo'>";
  reviewString += `<span id=stars${ii}></span><br><br>`;
  reviewString += `${data[i.id].reviews[ii].date}<br><br>`;
  reviewString += `${data[i.id].reviews[ii].review}<br><br>`;
  reviewString += "</div></div><hr>";
  console.log(reviewString);
  testingReview.insertAdjacentHTML('afterbegin', reviewString);
  let ratingrev = document.getElementById(`stars${ii}`);
  console.log(ratingrev);
  ratingrev.insertAdjacentHTML('beforeend', getStars(data[i.id].reviews[ii].rating));
}

}
//access data from submit form
function review(){
  var name = document.getElementById('name').value;
  var date = document.getElementById('date').value;
  var rating = document.getElementById('selectRat').value;
  var review = document.getElementById('comment').value;
  console.log("reveiw function");
  $.get("https://jsonstorage.net/api/items/3ee18af8-f30e-4094-97a7-570dac704378",
  function(data, textStatus, jqXHR)
  {
    var newData = data.restaurant;
    //get the restaurant id
    var i = getJsonFromUrl();
    //if restaurant do not have reviews, it will create a review array
    console.log(newData[i.id].reviews);
    if(newData[i.id].reviews == undefined){
    newData[i.id].reviews = [];
    console.log(newData);
    }
//find the length of the review
    var ii = newData[i.id].reviews.length;
    console.log(i);
    console.log(ii);


//filld the reviews
   newData[i.id].reviews[ii]= {'name' : name, 'date' : date, 'rating' : rating, 'review' : review};

//delete the last review
//    newData[i.id].reviews.pop();

    //method to remove array
    // var testing = newData[0].reviews.slice(0,4)
    // newData[0].reviews = testing;
    // console.log(newData);

    //convert newData back to restaurant as the key
    newData = {'restaurant':newData};
    var newDataString = JSON.stringify(newData);
    console.log(data);
    console.log(newData);

    //put data
    $.ajax({
    url:"https://jsonstorage.net/api/items/3ee18af8-f30e-4094-97a7-570dac704378",
    type:"PUT",
    data: newDataString,
    contentType:"application/json; charset=utf-8",
    dataType:"json",
    success: function(data, textStatus, jqXHR){
        window.location.href = `thankyouRev.html?id=${getJsonFromUrl().id}`
    }
});


    console.log(newData[0]);
  });

}
