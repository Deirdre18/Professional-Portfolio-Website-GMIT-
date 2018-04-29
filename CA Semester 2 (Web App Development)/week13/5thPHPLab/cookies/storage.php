<!DOCTYPE html>
<html>
<head>
	<title>Cookies</title>	
</head>
<body>
	<?php
	if(isset($_POST["add"])){
		if(isset($_POST['username'])){
			// add username from a form. Cookie expires in 1 hour (3600 seconds)
			setcookie("username",$_POST['username'], time()+3600); 
		}
	}
	if(isset($_POST["clear"])){
		unset($_COOKIE["username"]);
		setcookie("username","x",time()-1);
		/*unset the cookie, just unsets it for the current request so its not available. 
		Need to expire it, to destroy it - setcookie method needed. Any valaue will do - used x in this example*/
	}
	?>
	
	<form action="storage.php" method="post">
		<input type="text" name="username">
		<input type="submit" name="add" value="Add to cookie">
		<input type="submit" name="clear" value="Clear Cookie">
	</form>
	<br>
	<form action="welcome.php">
		<input type="submit" name="welcome" value="Go to welcome page">
	</form>
	
</body>
</html>
	
