$(document).ready(function() {  
	
	$.ajax({
		url: "http://htmlandcssbook.com/js/jsonp.js",
		dataType: "jsonp",
		jsonp: false, //set to false if you don't want to include callback=? in url string
		jsonpCallback: "showEvents", //this property is required only if jsonp property is set to false.
		success: function showEvents(data) {
			var $newContent = '';
			$.each( data.events, function($i) {
			  $newContent += '<div class="event">';
			  $newContent += '<img src="' + data.events[$i].map + '" ';
			  $newContent += 'alt="' + data.events[$i].location + '" />';
			  $newContent += '<p><b>' + data.events[$i].location + '</b><br>';
			  $newContent += data.events[$i].date + '</p>';
			  $newContent += '</div>';
			});
			$('#content').html($newContent);	
		},
		error: function() {
			alert("The JSONP data request could not be processed.");
		}
	});

});


