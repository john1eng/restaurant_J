// 
// document.getElementById("stars1").innerHTML = getStars(3.6);
// document.getElementById("stars2").innerHTML = getStars(4.0);
// document.getElementById("stars3").innerHTML = getStars(3.6);
// document.getElementById("stars4").innerHTML = getStars(3.6);
// document.getElementById("stars5").innerHTML = getStars(3.6);
// document.getElementById("stars6").innerHTML = getStars(3.6);
// document.getElementById("stars7").innerHTML = getStars(3.6);
// document.getElementById("stars8").innerHTML = getStars(3.6);
// document.getElementById("stars9").innerHTML = getStars(3.6);


function getStars(rating) {

  // Round to nearest half
  rating = Math.round(rating * 2) / 2;
  let output = [];

  // Append all the filled whole stars
  for (var i = rating; i >= 1; i--)
    output.push('<i class="fa fa-star" aria-hidden="true" style="color: gold;"></i>&nbsp;');

  // If there is a half a star, append it
  if (i == .5) output.push('<i class="fa fa-star-half-o" aria-hidden="true" style="color: gold;"></i>&nbsp;');

  // Fill the empty stars
  for (let i = (5 - rating); i >= 1; i--)
    output.push('<i class="fa fa-star-o" aria-hidden="true" style="color: gold;"></i>&nbsp;');

  return output.join('');
}
