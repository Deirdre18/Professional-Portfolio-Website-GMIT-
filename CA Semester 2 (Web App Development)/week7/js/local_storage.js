function book(name){ // book object constructor, for creating many objects
	this.name=name;
}

function add(){
	var obj_key = "obj_"+localStorage.length;
	localStorage.setItem(obj_key, JSON.stringify(new book(document.book_form.bookName.value)));
	window.location.reload(); // refreshes page so that text field is cleared.
}

function clear_storage(){
	localStorage.clear();
}

function fromStorage(){
	var i;
	for (i = 0; i < localStorage.length; i++) {
		var parsedObject = JSON.parse(localStorage["obj_"+i]);
		alert(parsedObject.name);
	}
}
