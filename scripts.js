var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomNumber2 = Math.floor(Math.random()*6)+1;

var num1 = "images/dice"+randomNumber1+".png";
var num2 = "images/dice"+randomNumber2+".png";


document.addEventListener('DOMContentLoaded', function() {
    var reloadButton = document.getElementById('button');
  
    reloadButton.addEventListener('click', function() {
      location.reload(); // Reload the page
    });
  });
  
document.querySelector(".img1").setAttribute("src", num1);
document.querySelector(".img2").setAttribute("src", num2);

if (randomNumber1>randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Win!"
}else if (randomNumber1<randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 2 Win!"
}else {
    document.querySelector("h1").innerHTML = "Draw!"
}
