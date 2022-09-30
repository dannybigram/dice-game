var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomImage = "images/dice" + randomNumber1 + ".png";
$(".img1").attr("src", randomImage);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImage2 = "images/dice" + randomNumber2 + ".png";
$(".img2").attr("src", randomImage2);

if (randomNumber1 > randomNumber2){
$("h1").html("player 1 wins");
}
else if (randomNumber1 < randomNumber2){
$("h1").html("player 2 wins");
}
else{
$("h1").html("Draw");
}
