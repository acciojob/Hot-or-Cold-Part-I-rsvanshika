var randomNum;
var input;
function randomNumGenerator(){
	 //generate random number
	randomNum = Math.floor(Math.random()*41) - 20;
	 //show random number
	document.getElementById("num").innerText = randomNum;
	
	//convert input into number
	input = parseInt(document.getElementById("guess").value);	
	
    //check differnce and print
	if(Math.abs(randomNum - input) <= 5){
		document.getElementById("respond").innerText = "Hot";
	}
	else{
		document.getElementById("respond").innerText = "Cold";
	}
}


	

