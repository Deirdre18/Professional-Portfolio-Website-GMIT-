//rather than having to target an element by document.getElement(s)By you cn use the event object, which can be queried for element that event occurred on
//and then other elements can be targetted from this point, using nextibling, parentNode etc ....


function checkLength(e, minLength) {         // Declare function
  var el, elMsg;                             // Declare variables
  if (!e) {                                  // If event object doesn't exist
    e = window.event;                        // Use IE fallback
  }
  el = e.target || e.srcElement;             // Get target of event, which is <input type="text" id="username">
  console.log(e.target);
  elMsg = el.nextSibling;                    // Get its next sibling (<div id="feedback">Username must be 5 characters or more</div>) -- see other siblings, parent, child at http://www.w3schools.com/jsref/prop_node_nextsibling.asp and related pages 
  console.log(el.nextSibling);	
  if (el.value.length < minLength) {         // If length is too short set msg
    elMsg.innerHTML = 'Username must be ' + minLength + ' characters or more';
  } else {                                   // Otherwise
    elMsg.innerHTML = '';                    // Clear message
  }
}

var elUsername = document.getElementById('username');// Get username input
if (elUsername.addEventListener) {           // If event listener supported
  elUsername.addEventListener('blur', function(e) {  // On blur event
    // NOTE: This function is checkLength() - not checkUsername()
    checkLength(e, 5);                             // Call checkLength()
  }, false);                                       // Capture in bubble phase
} else {                                           // Otherwise
  elUsername.attachEvent('onblur', function(e) {   // IE fallback onblur
    // NOTE: This function is checkLength() - not checkUsername()
    checkLength(e, 5);                             // Call checkLength()
  });
}