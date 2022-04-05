var n1=Math.random()*6;
var n2=Math.random()*6;
num1=Math.floor(n1)+1;
num2=Math.floor(n2)+1;
if (num1>num2){
	document.querySelector("h1").textContent="Player 1 wins 🚩";
}
else if (num2>num1){
	document.querySelector("h1").textContent="Player 2 wins 🚩";
}
else if (num1===num2){
	document.querySelector("h1").textContent="Draw";
}

var pic1="dice"+num1+".png";
var pic2="dice"+num2+".png";
document.querySelector(".img1").setAttribute("src",pic1);
document.querySelector(".img2").setAttribute("src",pic2);

