<!DOCTYPE html>
<html>
<head>
	<title>Sessions</title>	
</head>
<body>
	<?php
	if(isset($_POST["add"])){
		if(isset($_POST['username'])){
			/* start the session. 
			Must always be included for each page requiring so it can access the session */
			session_start(); 
			$_SESSION['username'] = $_POST['username']; // Add data to the session
		}
	}
	if(isset($_POST["clear"])){
		session_start(); // start the session
		$_SESSION = array(); //reset the session array to clear the data from any variables
		session_destroy(); // then delete the session data from the server
	}
	?>
	
	<form action="storage.php" method="post">
		<input type="text" name="username">
		<input type="submit" name="add" value="Add to session">
		<input type="submit" name="clear" value="Clear session">
	</form>
	<br>
	<form action="welcome.php">
		<input type="submit" name="welcome" value="Go to welcome page">
	</form>
	
</body>
</html>
	
