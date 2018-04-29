function names(firstName, lastName){ // names object constructor, for creating many objects
	this.firstName=firstName;
	this.lastName=lastName;
}

function add(){
	var obj_key = "obj_"+localStorage.length;
	localStorage.setItem(obj_key, JSON.stringify(new names(document.getElementById("fld1").value, document.getElementById("fld2").value)));
	window.location.reload(); // refreshes page so that text field is cleared.
}

function clear_storage(){
	localStorage.clear();
}


