function main()
{
    var array = [15,23,45,78,11];                                      // creating an array that holds 5 numbers
    var askUser= prompt("How many elements to print to console?: ");   // creating a variable that holds the value of the user input after prompting them to enter how many elements to print
    if (askUser== 1)                                                     // if input is 1 log to console first number in array
    {
        console.log("15")
    }else if (askUser==2)                                             //if input is 2 log  to console first 2 numbers in array
    {
        console.log("15,23")
    }else if (askUser==3)                                               //if input is 3 log  to console first 3 numbers in array
    {
        console.log("15,23,45")
    }else if (askUser==4)                                          //if input is 4 log  to console first 4 numbers in array
    {
        console.log("15,23,45,78")
    }else if (askUser==5)                                         //if input is 5 log  to console all 5 numbers in array
    {
        console.log("15,23,45,78,11")
    }
    else                                                      //otherwise alert box error
        {
        alert("ERROR!!!!!")
    }
}

main();   //calling main function