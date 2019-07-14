/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

function greet(timeString){
  let time = timeString[0]+timeString[1]
  if (time <= 12) {
    return 'Good Morning'
  }
  if (time > 12 && time <= 17) {
    return 'Good Afternoon'
  }
  if (time > 17 && time <= 24) {
    return 'Good Evening'
  }

}

function displayMessage(string) {
  document.getElementById('greeting').innerHTML = string
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
