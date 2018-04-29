//add an onload event listener to the body of nameList.html
var el = document.getElementById("namesListBody");
el.addEventListener('load', populate_page, true);

function populate_page() {
	var divContent="<table border='1px solid black' id='t1'><tr><td>First Name</td><td>Surname</td><tr>";
	var i;
	for (i = 0; i < localStorage.length; i++) {
		var parsedObject = JSON.parse(localStorage.getItem("obj_"+i));
		if(i==0){
			divContent += "<tr><td class='obj'>"+"obj_"+i+"</td><td><b>"+parsedObject.firstName+"</b></td><td><b>"+parsedObject.lastName+"</b></td></tr>";
		} else{
			divContent += "<tr><td class='obj'>"+"obj_"+i+"</td><td>"+parsedObject.firstName+"</td><td>"+parsedObject.lastName+"</td></tr>";
		}		
	}	
	divContent += "</table>";
	var divEl = document.getElementById("nameList");
	divEl.innerHTML = divContent;	

	//add the following to create a reference to js/clickEvent.js within <head> tag.
	var fileref=document.createElement('script');
	fileref.setAttribute("type","text/javascript");
	fileref.setAttribute("src","js/clickEvent.js");
	document.getElementsByTagName("head")[0].appendChild(fileref);
}

