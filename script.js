//your code here
var btn=document.getElementById("btn");
var inputVal=document.getElementById("guess").value ;
var numPtag= document.getElementById("num");
var res=document.getElementById("respond");



function generateRandom( ) {
	
	var no =Math.floor(Math.random() *40)- 20;
	numPtag.textContent=no;
	     if(Math.abs(no-inputVal)<=5){ 
			 res.textContent ="Hot";
		 }
	else{
		res.textContent="cold";
	}
			 
		 
}	

	

	
	btn.addEventListener("click",generateRandom());

