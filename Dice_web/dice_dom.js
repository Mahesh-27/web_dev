// alert("working");
var randomnum1=Math.floor(Math.random()*6)+1;
var randice1="dice"+randomnum1+".png";

document.querySelectorAll("img")[0].setAttribute("src",randice1);

var randomnum2=Math.floor(Math.random()*6)+1;
var randice2="dice"+randomnum2+".png";

document.querySelectorAll("img")[1].setAttribute("src",randice2);

if(randomnum1 > randomnum2){
    document.querySelector("h1").innerHTML="🚩player 1 wins";
}
else if(randomnum1 < randomnum2){
    document.querySelector("h1").innerHTML="player 2 wins 🚩";
}
else{
    document.querySelector("h1").innerHTML="🚩 Draw ! 🚩";
}