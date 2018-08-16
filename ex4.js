function main()
{
    var userInput = prompt("Enter your favorite number!:   ");


    function aboveOrBelow100()
    {
        if (userInput>100)
        {
            alert("above");
        }else if (userInput<100)
        {
            alert("below");
        }else if (userInput===100)
        {
        alert("equal");
        }
        else
            {
            alert("error")
        }
    }
}

main();