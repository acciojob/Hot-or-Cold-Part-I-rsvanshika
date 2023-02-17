
var input=parseInt(document.getElementById("guess").value);
 var numP=document.getElementById("num");
var res=document.getElementById("respond");
function randomNumGen(){
	 //generate random number
var	randomNum = Math.floor(Math.random()*41) - 20;
	 //show random number
	numP.innerText = randomNum;
	
  //check differnce and print
	if(Math.abs(randomNum - input) <= 5){
		res.innerText = "Hot";
	}
	else{
		res.innerText = "Cold";
	}
}


	

