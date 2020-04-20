/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(string){
  string.split();
  if  (parseInt(string) < 12)
  { return "Good Morning"}
  else if (parseInt(string) > 12 && parseInt(string) < (12+5))
  {return "Good Afternoon"}
  else
  {return "Good Evening"}
}

/* Write your implementation of displayMessage() */
function displayMessage(string){
let el=document.getElementById("greeting");
el.innerText=string;
}