<?php
	session_start(); // start the session
	//On loading the page, check if session has a value
	if(isset($_SESSION["username"])){
		echo 'Welcome ' . $_SESSION["username"];
	}else{
		echo 'Not sure who you are ?';
	}
	
	echo '<form action="storage.php" method="post">';
	echo '<input type="submit" name="home" value="Home">';
	echo '</form>';
?>
