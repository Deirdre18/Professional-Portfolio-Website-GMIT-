
function Add(){
    var fn, ln; 
    fn = document.getElementById("num1").value; 
    ln = document.getElementById("num2").value; 
	if(parseInt(fn) > 10){
		alert("Number 1 must be less than 10");
		return;
	}
    result =  (parseInt(fn)+parseInt(ln)); 
	alert("Result is: "+result);
}
