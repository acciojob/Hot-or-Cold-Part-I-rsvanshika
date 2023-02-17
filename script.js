var randomNum;
var input;
var guesss=parseInt(document.getElementById("guess").value);
function randomNumGenerator(){
	 //generate random number
	randomNum = Math.floor(Math.random()*41) - 20;
	 //show random number
	document.getElementById("num").innerText = randomNum;
	
	//convert input into number
	input =guesss ;	
	
    //check differnce and print
	if(Math.abs(randomNum - input) <= 5){
		document.getElementById("respond").innerText = "Hot";
	}
	else{
		document.getElementById("respond").innerText = "Cold";
	}
}


	

