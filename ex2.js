function main()
{
    var userInput = parseInt(prompt("Enter a number: "));//setting the variable userInput to prompt the user to enter a number
    if (userInput>=1)
    {                           //if statement that says if user enters anything greater than or equal to 1 alert box with the word positive
    alert("positive")
    }else if (userInput<= -1)
    {                          //if they enter anything less than or equal to -1 alert box negative
        alert("negative")

    }else if (userInput===0)
    {                               //if they enter 0 alert box zero
        alert("zero")
    }else
        {                         //otherwise alert box zero
        alert("error")
    }
}

main();   //calling main function