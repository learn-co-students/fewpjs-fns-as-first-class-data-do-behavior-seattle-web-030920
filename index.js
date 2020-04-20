/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
function greet(time) {
  let t = time.split(':');
  const hrs = parseInt(t[0])
  if (hrs < 12) {
    return "Good Morning"
  }
  else if (hrs >= 12 && hrs <= 17) {
    return "Good Afternoon"
  }
  else {
    return "Good Evening"
  }
}

function displayMessage(msg) {
  let e = document.getElementById("greeting");
  e.innerText = msg;
}