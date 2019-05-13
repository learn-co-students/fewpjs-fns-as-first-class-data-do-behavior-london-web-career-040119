/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time) {
  const hour = parseInt(time, 10);
  if ( hour > 17) return "Good Evening"
  if ( hour > 12) return "Good Afternoon"
  return "Good Morning"
}
/* Write your implementation of displayMessage() */
function displayMessage(str) {
  document.getElementById("greeting").textContent = str;
}
