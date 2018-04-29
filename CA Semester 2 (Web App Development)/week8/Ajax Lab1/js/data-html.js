// NOTE: If you run this file locally
// You will not get a server status
// You can comment out lines 11 and 14 to make it work locally
// Have commented out for the lab as student may opt to run locally
// and won't affect solution if run on a server.

var xhr = new XMLHttpRequest();                 // Create XMLHttpRequest object

xhr.onload = function() {                       // When response has loaded
  // The following conditional check will not work locally - only on a server
  //if(xhr.status === 200) {                       // If server status was ok
  //if(true) {                       // If server status was ok
    document.getElementById('content').innerHTML = xhr.responseText; // Update
  //}
};

xhr.open('GET', 'data/data.html', true);        // Prepare the request
xhr.send(null);                                 // Send the request

// NOTE: If you run this file locally
// You will not get a server status
// You can set the conditional statement to true as shown on commente out code on line 12