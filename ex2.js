function main()
{
    var userInput = parseInt(prompt("Enter a number: "))
    if (userInput>=1){
    alert("positive")
    }else if (userInput<= -1){
        alert("negative")

    }else if (userInput===0){
        alert("zero")
    }else {
        alert("error")
    }
}

main();