function showElement() {
  alert(this.innerHTML);
}

el = document.getElementById("link");
el.addEventListener('click', showElement, false);

el = document.getElementById("item");   
el.addEventListener('click', showElement, false);

/* Bubble: Add event listeners for parent nodes of <a> all the way up to <div> */

el = document.getElementById("list");
el.addEventListener('click', showElement, false);

el = document.getElementById("page");   
el.addEventListener('click', showElement, false);