/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/


/* Write your implementation of greet() */
function greet(time) {
  let splitTime = time.split(':')
  let numTime = parseInt(splitTime)
  if (numTime < 12) {
    return "Good Morning"
  } else if (numTime >= 12 && numTime < 17) {
    return "Good Afternoon"
  } else {
    if (numTime > 17){
      return "Good Evening"
    }
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(msg){
  let h1 = document.getElementById('greeting')
  h1.innerText = msg
}