console.log('And we\'re off');

try{
	someVar; //For steps 8 and 9 of exercise 2, modify this line of code to: var someVar;	
}catch(e) {
	document.getElementById("error_details").innerHTML = "There was an error: "+e+".";
}finally {
	alert("Code in finally block, which is always executed");
}
