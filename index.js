/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function displayMessage(msg) {
  document.getElementById("greeting").textContent = msg;
}

function greet(timeStr) {
  /* It would be a good idea to make sure hour isn't less than 0 or greater
   * than 24...perhaps "throwing an Error" if one of these impossible cases
   * happens.
   *
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#Throwing_a_generic_error
   *
   */
  const hour = parseInt(timeStr, 10);
  if ( hour < 12) return "Good Morning"
  if ( hour > 17) return "Good Evening"
  return "Good Afternoon"
}
