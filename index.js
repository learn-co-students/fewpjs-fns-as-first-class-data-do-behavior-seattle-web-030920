/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

function greet(time) {
  let timeArray = time.split(":");
  let timeIndicator = 0
  if (parseInt(timeArray[1]) > 0) {
    timeIndicator = parseInt(timeArray[0]) + 1
  } else {
    timeIndicator = parseInt(timeArray[0])
  };
  if (timeIndicator < 12) {
    return "Good Morning";
  } else if (timeIndicator <= 17) {
    return "Good Afternoon";
  } else {
    return "Good Evening";
  };
  debugger
}

function displayMessage(greeting) {
  document.querySelector("#greeting").innerText = greeting;
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
