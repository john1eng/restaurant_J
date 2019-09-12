
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
    htmlString += `<p class=restaurantRating>RATING: <span id=stars>${getStars(averageRating(i,data))}</span></p>`;
    htmlString += `<a href='restaurant.html?id=${i}'><button class=detailButton>Detail</button></a>`;
    console.log(i);
    htmlString += `<a href='restaurant.html?id=${i}#writeReviewTitle'><button class=writeButton>Write Review</button></a>`;
    htmlString += "</div>";
  }
restaurantsContainer.insertAdjacentHTML('beforeend', htmlString);

}

//set it back to default
function setDefault(){

var newData = {
  "restaurant": [
    {
      "name": "Mission Chinese Food",
      "rating": "4.5",
      "img": "1.jpg",
      "hours": {
        "Monday": "5:30 pm - 11:00 pm",
        "Tuesday": "5:30 pm - 12:00 am",
        "Wednesday": "5:30 pm - 12:00 am",
        "Thursday": "5:30 pm - 12:00 am",
        "Friday": "5:30 pm - 12:00 am",
        "Saturday": "12:00 pm - 4:00 pm",
        "Sunday": "12:00 pm - 4:00 pm"
      },
      "reviews": [
        {
          "name": "Berry",
          "rating": "4.5",
          "review": "Mission Chinese Food has grown up from its scrappy Orchard Street days into a big, two story restaurant equipped with a pizza oven, a prime rib cart, and a much broader menu. Yes, it still has all the hits — the kung pao pastrami, the thrice cooked bacon —but chef/proprietor Danny Bowien and executive chef Angela Dimayuga have also added a raw bar, two generous family-style set menus, and showstoppers like duck baked in clay. And you can still get a lot of food      without breaking the bank.",
          "date": "January 4, 2018"
        },
        {
          "name": "Sally",
          "rating": "3.5",
          "review": "This place is a blast. Must orders: GREEN TEA NOODS, sounds gross (to me at least) but these were incredible!, Kung pao pastrami (but you already knew that), beef tartare was a fun appetizer that we decided to try, the spicy ma po tofu SUPER spicy but delicous, egg rolls and scallion pancake i could have passed on... I wish we would have gone with a larger group, so much more I would have liked to try!",
          "date": "May 4, 2018"
        }
      ]
    },
    {
      "name": "Emily",
      "rating": "4.0",
      "img": "2.jpg",
      "reviews": [
        {
          "name": "john",
          "date": "1/15/19",
          "rating": "4.0",
          "review": "testing"
        }
      ]
    },
    {
      "name": "KANG HO DONG",
      "rating": "5.0",
      "img": "3.jpg",
      "reviews": [
        {
          "name": "Harry",
          "date": "1/9/19",
          "rating": "3.5",
          "review": "testing"
        }
      ]
    },
    {
      "name": "KATZ'S DELICATESSEN",
      "rating": "5.0",
      "img": "4.jpg",
      "reviews": [
        {
          "name": "Harry",
          "date": "1/9/19",
          "rating": "3.5",
          "review": "testing"
        }
      ]
    },
    {
      "name": "ROBERTA'S PIZZA",
      "rating": "5.0",
      "img": "5.jpg",
      "reviews": [
        {
          "name": "Harry",
          "date": "1/9/19",
          "rating": "3.5",
          "review": "testing"
        }
      ]
    },
    {
      "name": "HOMETOWN BBQ",
      "rating": "5.0",
      "img": "6.jpg",
      "reviews": [
        {
          "name": "Harry",
          "date": "1/9/19",
          "rating": "3.5",
          "review": "testing"
        }
      ]
    },
    {
      "name": "SUPERIORITY BURGER",
      "rating": "5.0",
      "img": "7.jpg",
      "reviews": [
        {
          "name": "Harry",
          "date": "1/9/19",
          "rating": "3.5",
          "review": "testing"
        }
      ]
    },
    {
      "name": "THE DUTCH",
      "rating": "5.0",
      "img": "8.jpg",
      "reviews": [
        {
          "name": "Harry",
          "date": "1/9/19",
          "rating": "3.5",
          "review": "testing"
        }
      ]
    },
    {
      "name": "MU RAMEN",
      "rating": "5.0",
      "img": "9.jpg",
      "reviews": [
        {
          "name": "Harry",
          "date": "1/9/19",
          "rating": "3.5",
          "review": "testing"
        }
      ]
    }
  ]
}

var newDataString = JSON.stringify(newData);

  $.ajax({
  url:"https://jsonstorage.net/api/items/3ee18af8-f30e-4094-97a7-570dac704378",
  type:"PUT",
  data: newDataString,
  contentType:"application/json; charset=utf-8",
  dataType:"json",
  success: function(data, textStatus, jqXHR){
  }
});
}
