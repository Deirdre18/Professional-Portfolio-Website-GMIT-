var tableEl = document.getElementById("t1");
tableEl.addEventListener('click', removeItem, true);

function removeItem(){
	if(event.target.nodeName.toLowerCase() == 'td'){
		var tdEl = event.target.parentNode; // get the row
		var tableEl = tdEl.parentNode; //get the table
		tableEl.removeChild(tdEl); //remove the row
		localStorage.removeItem(tdEl.firstChild.innerHTML); //remove the data from local storage
	} else if(event.target.nodeName.toLowerCase() == 'b'){
		var bEl = event.target.parentNode; // get the row-column (<td>)
		var tdEl = bEl.parentNode; //get the row
		var tableEl = tdEl.parentNode; //get the table
		tableEl.removeChild(tdEl);	//remove the row	
		localStorage.removeItem(tdEl.firstChild.innerHTML); //remove the data from local storage
	}
	
	//stop propagation
	event.stopPropagation();	
}

