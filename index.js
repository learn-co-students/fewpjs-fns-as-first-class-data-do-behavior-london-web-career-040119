/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(time)
{
  const timeArray = time.split(':')
  const timeHour = parseInt(timeArray[0], 10)

  if (timeHour > 0 && timeHour < 12){
    return "Good Morning"
  } else if (timeHour > 12 && timeHour < 17){
    return "Good Afternoon"
  } else {
    return "Good Evening"
  }
}

/* Write your implementation of displayMessage() */

function displayMessage(message){
  document.querySelector("#greeting").innerHTML = "TEST"
}