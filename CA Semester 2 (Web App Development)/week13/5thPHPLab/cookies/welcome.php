<?php
	//On loading the page, check if cookie has a value
	if(isset($_COOKIE["username"])){
		echo 'Welcome ' . $_COOKIE["username"];
	}else{
		echo 'Not sure who you are ?';
	}
	
	echo '<form action="storage.php" method="post">';
	echo '<input type="submit" name="home" value="Home">';
	echo '</form>';
?>
