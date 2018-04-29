<?php # password.php
// This page lets a user change their password.

$page_title = 'Login';
include ('includes/header.html');

// Check for form submission:
if ($_SERVER['REQUEST_METHOD'] == 'POST') {

	if(isset($_POST['register'])){
	  
	  header( "Location: register.php" );
	  exit();
	}
	require ('../../../mysql/mysqli_connect.php'); // Connect to the db. Credentials in a file outside of web root. Makes it more secure. Users won't be able to see this file.
		
	$errors = array(); // Initialize an error array.
	
	// Check for a username:
	if (empty($_POST['username'])) {
		$errors[] = 'You forgot to enter your username.';
	} else {
		$e = mysqli_real_escape_string($dbc, trim($_POST['username']));
	}

	// Check for the current password:
	if (empty($_POST['pass'])) {
		$errors[] = 'You forgot to enter your current password.';
	} else {
		$p = mysqli_real_escape_string($dbc, trim($_POST['pass']));
	}
	
	if (empty($errors)) { // If everything's OK.

		// Check that they've entered the right username/password combination:
		$q = "SELECT user_id FROM users WHERE (username='$e' AND password=SHA1('$p') )";
		$r = @mysqli_query($dbc, $q);
		$num = @mysqli_num_rows($r);
		if ($num == 1) { // Match was made.
	

			mysqli_close($dbc); // Close the database connection.
			header('Location: shop.php');
			exit();
				
		} else { // Invalid username/password combination.
			echo '<h1>Error!</h1>
			<p class="error">The username and password do not match those on file.</p>';
		}
		
	} else { // Report the errors.

		echo '<h1>Error!</h1>
		<p class="error">The following error(s) occurred:<br />';
		foreach ($errors as $msg) { // Print each error.
			echo " - $msg<br />\n";
		}
		echo '</p><p>Please try again.</p><p><br /></p>';
	
	} // End of if (empty($errors)) IF.

	mysqli_close($dbc); // Close the database connection.
		
} // End of the main Submit conditional.
include ('includes/footer.html'); ?>