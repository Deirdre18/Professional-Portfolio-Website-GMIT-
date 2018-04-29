<?php 
	$link = mysqli_connect('localhost','root','', 'web_apps'); 
	if (!$link) { 
		die('Could not connect to MySQL: ' . mysql_error()); 
	} 
	echo 'Connection OK' . "<br>";
	mysqli_set_charset($link, 'utf8');
	$myQry="select firstname, lastname, username from users";
	$results = @mysqli_query($link, $myQry);
	
	//echo $results;
	echo '<ul id="users_list">';
	while($row = mysqli_fetch_array($results, MYSQLI_ASSOC)) {
		echo '<li>';
		echo '<b>Name: </b>' . $row['firstname'] . ' <b>Username:</b> ' . $row['username'] . '<br>';
		echo '</li>';
	}
	echo '</ul>';
	mysqli_close($link); 
?> 