//register_build.js

var el = document.getElementById("register_form");
el.addEventListener('load', populate_page(), true);

function populate_page(){
	
	var elContent = "<form>";
	elContent += "<table>";
	elContent += "<tr>";
	elContent += "<td>Username:</td>";
	elContent += "<td><input type='text' id='username'></td>";
	elContent += "</tr>";
	elContent += "<tr>";
	elContent += "<td>Password:</td>"; 
	elContent += "<td><input type='password' id='password'></td>";
	elContent += "</tr>";
	elContent += "<tr>";
	elContent += "<td>Re-enter Password:</td>"; 
	elContent += "<td><input type='password' id='password1'></td>";
	elContent += "</tr>";
	elContent += "<tr>";
	elContent += "<td>Gender:</td>"; 
	elContent += "<td><input type='radio' name='gender' value='male' checked> Male";
	elContent += "<input type='radio' name='gender' value='female'> Female";
	elContent += "<input type='radio' name='gender' value='other'> Other</td>";
	elContent += "</tr>";
	elContent += "</table>";
	elContent += "<br>";
	elContent += "<button type='button' id='b1'>Register</button>";
	elContent += "</form>";
	
	el.innerHTML=elContent; //el was declared globally on line 3
}