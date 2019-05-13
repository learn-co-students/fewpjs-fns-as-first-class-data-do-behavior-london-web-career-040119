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

function greet(timeString) {

  let hourString = timeString.substring(0,2)
  let hourInt = parseInt(hourString)

  if (hourInt < 13) return "Good Morning"
  if (hourInt < 18) return "Good Afternoon"
  return "Good Evening"
}