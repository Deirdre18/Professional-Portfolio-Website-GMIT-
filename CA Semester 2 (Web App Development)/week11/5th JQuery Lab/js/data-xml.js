$(document).ready(function() {  
	var $newContent="";
	
	$.ajax({
		type: "GET",
		url: "data/data.xml",
		dataType: "xml",
		success: function(xml) {
			
			$(xml).find('event').each(function(){
				
				$newContent += '<div class="event">';
				$newContent += '<img src="' + $(this).find('map').text() + '" ';
				$newContent += 'alt="' + $(this).find('location').text() + '" />';
				$newContent += '<p><b>' + $(this).find('location').text() + '</b><br>';
				$newContent += $(this).find('date').text() + '</p>';
				$newContent += '</div>';
			})
			$("#content").html($newContent);
		},
		error: function() {
			alert("The XML File could not be accessed.");
		} 
	});

});


