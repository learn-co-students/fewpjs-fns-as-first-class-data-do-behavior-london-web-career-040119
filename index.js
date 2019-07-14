/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(timeString) {
  let time = timeString[0] + timeString[1]
  if (time <=12) {
    return "Good Morning"
  } else if (time > 17) {
    return "Good Evening"
  } else {
    return "Good Afternoon"
  }
}

function displayMessage(string) {
  document.getElementById("greeting").innerHTML = string
}
