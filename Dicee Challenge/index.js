function generateRandom() {
	var a = Math.random();
	a = Math.floor(a * 6 + 1);
	return a;
}
var i = generateRandom();
var j = generateRandom();

console.log(i);
console.log(j);

var img1link = "./images/dice" + i + ".svg";
var img2link = "./images/dice" + j + ".svg";

var img1 = document.querySelector(".img1");
var img2 = document.querySelector(".img2");

console.log(img1);
console.log(img2);

img1.setAttribute("src", img1link);
img2.setAttribute("src", img2link);

console.log(img1);
console.log(img2);

if (i == j) {
	document.querySelector("h1").innerText = "draws";
} else if (i > j) {
	document.querySelector("h1").innerText = "player 1 wins";
} else if (i < j) {
	document.querySelector("h1").innerText = "player 2 wins";
}
