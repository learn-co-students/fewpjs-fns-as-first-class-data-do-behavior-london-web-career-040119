/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}


function greet(timeString) {
  let time = parseInt(timeString, 10)

  if (time < 12) {
    return "Good Morning";
  } else if (time > 17) {
    return "Good Evening";
  } else {
    return "Good Afternoon";
  }
}


function displayMessage(message) {
  document.getElementById("greeting").innerHTML = message
} 