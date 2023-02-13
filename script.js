//your code here
var btn=document.getElement("btn");
var numPtag= document.getElementById("num");

function generateRandom( ) {
	var no =Math.floor(Math.random()*40)-20;
	numPtag.textcontent=no;
}	
	btn.addEventListener("click",generateRandom);

