

function greet(timeStr){
  let hour = parseInt(timeStr, 10)
  if (hour < 12)
  return "Good Morning"
  if (hour > 12 && hour < 17)
  return "Good Afternoon"
  else
  return "Good Evening"
}

function displayMessage(msg){
  document.getElementById("greeting").innerText = msg;
}

