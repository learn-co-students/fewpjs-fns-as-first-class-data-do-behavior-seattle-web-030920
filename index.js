/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}


/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
function greet(str){
//   let greeting = ""
// const time = str.split(":")
// const h =parseInt( time[0])

// if (h < 12){
// greeting = "Good Morning"}
// else if (h-12 < 5){
//   greeting = "Good Afternoon"
// }else{
//   greeting = "Good Evening"
// }
// return greeting
const hour = parseInt(timeStr, 10);
  if ( hour < 12) return "Good Morning"
  if ( hour > 17) return "Good Evening"
  return "Good Afternoon"
}

function displayMessage(msg){
document.getElementById("greeting").innerText = msg;
}
