function greet(input)
{
    const numbers = input.split(':');
    hour = parseInt(numbers[0],10);
    if(hour < 12)
    {
        return "Good Morning"
    }
    else if (hour >= 12 && hour <= 5)
    {
        return "Good Afternoon"
    }
    else
    {
        return "Good Evening"
    }

  //return numbers.reduce((result, currVal) => {return result = ``})
}

console.log(greet("18:20"))
