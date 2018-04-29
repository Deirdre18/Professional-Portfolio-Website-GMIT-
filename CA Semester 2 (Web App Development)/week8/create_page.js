var name = "kevin";
document.write('<h1>Page Created by '+name+'</h1>');
document.write('<p>Use document.write() function to write to the page instead of using DOM methods</p>');
document.write('<p>Click the button to alert the result of 4 + 2</p>');
document.write('<br>');
document.write('<button id="b1" onclick="add()">Add</button>');

function add(){
	alert("4 + 2 = "+(4+2));
}


