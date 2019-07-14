/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function greet(t) {
  const time = parseInt(t);
  if (time < 12)
    return "Good Morning"
  if (time > 17)
    return "Good Evening"
  return "Good Afternoon"
}

function displayMessage(m) {
  document.getElementById("greeting").textContent = m;
}

// function displayMessage(msg) {
//   document.getElementById("greeting").textContent = msg;
// }