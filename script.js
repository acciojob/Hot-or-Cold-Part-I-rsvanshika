var randomNum;
var input;
function randomNumGenerator(){
	randomNum = Math.floor(Math.random()*41) - 20;
	document.getElementById("num").innerText = randomNum;
	
	input = parseInt(document.getElementById("guess").value);	
	

	if(Math.abs(randomNum - input) <= 5){
		document.getElementById("respond").innerText = "Hot";
	}
	else{
		document.getElementById("respond").innerText = "Cold";
	}
}


	

