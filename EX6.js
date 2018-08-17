class Book{

    constructor(bookName,rating,yearReleased) //creating the constructor with the book classes attributes
    {
    this.bookName = bookName;
    this.rating= rating;                        //setting a value to each attribute
    this.yearReleased= yearReleased;
    }
    printAllAttributes()  //creating a function
    {
        console.log("The book "+ this.bookName + " is rated at: " + this.rating + "stars"+ " and was released in: " + this.yearReleased) //log to console strings with attributes
    }

}

function main()       //creating a main function
{
var book1 = new Book("IT","5","1986");      //creating two book objects
    book1.printAllAttributes();              // calling print all attributes function to the book object

    var book2 = new Book("The Shining","5","1974");
    book2.printAllAttributes();
}

main();  //calling main function