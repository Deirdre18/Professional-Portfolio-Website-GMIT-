<?php 
	//page title for header file
	$page_title = 'PHP Form Handler';
	include('header.html');
	
	// Print the submitted information:
	if ( !empty($_GET['name']) && !empty($_GET['comments']) && !empty($_GET['email']) ) {
		echo "<p>Thank you, <b>{$_GET['name']}</b>, for the following comments:<br /><tt>{$_GET['comments']}</tt></p>
				<p>We will reply to you at <i>{$_GET['email']}</i>.</p>\n";
		$interests_sel="";

		if(isset($_GET['interests'])){
			foreach ($_GET['interests'] as $val) {
				$interests_sel .= $val."<br>";
			}				
			echo "Your interests are: <br>".$interests_sel;
		} else{
			echo "You have no interests";
		}
	} else { // Missing form value.
		echo '<p>Please go back and fill out the form again.</p>';
		echo '<button onclick="history.go(-1);">Back</button>';
	}
	
	include('footer.html');
?>
