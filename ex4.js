function main()
{
    var userInput = prompt("Enter your favorite number!:   ");   //setting user input as a variable after it prompts them to enter their favorite number


    function aboveOrBelow100()   //creating function inside of main function
    {
        if (userInput>100)       //if they enter anything over 100 alert box above
        {
            alert("above");
        }else if (userInput<100)  //if they enter anything below 100 alert box below
        {
            alert("below");
        }else if (userInput===100) //if they enter 100 alert box equal
        {
        alert("equal");
        }
        else                        //otherwise alert box error
            {
            alert("error")
        }
    }
}

main();   //calling main function