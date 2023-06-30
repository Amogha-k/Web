var randomNumber1=Math.floor(Math.random()*6)+1;
var randomImage="/dice"+randomNumber1+".png";
var randomImageSource="./images"+randomImage ;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource);

var randomNumber2=Math.floor(Math.random()*6)+1;
var randomsrc2="./images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomsrc2);
//player 1 wins
if(randomNumber1>randomNumber2)
{
    document.querySelector("h1").innerHTML="⛳ Player 1 wins";
}
else if(randomNumber2>randomNumber1)
{
    document.querySelector("h1").innerHTML="⛳ Player 2 wins";
}
else{
    document.querySelector("h1").innerHTML="DRAW👌";
}