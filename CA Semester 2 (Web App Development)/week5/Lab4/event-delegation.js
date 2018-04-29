
function itemDone() {                           // Declare function
  // Remove item from the list
  var target;           						 // Declare variables
  target = event.target;                         // Get the item clicked link
 
  elListItem = target.parentNode;                // Get its li element
  elList = elListItem.parentNode;                // Get the ul element
  elList.removeChild(elListItem);                // Remove list item from list
 
  // Prevent the link from taking you elsewhere
    event.preventDefault();                          // Use preventDefault() 
}

var el = document.getElementById('shoppingList');// Get shopping list
el.addEventListener('click', itemDone, false);                                 
 