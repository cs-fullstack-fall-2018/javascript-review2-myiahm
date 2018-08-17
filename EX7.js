class Dog{
    constructor(name, breed, color, gender)   //creating a constructor that sets attributes
    {
        this.name=name;
        this.breed=breed;                 //setting value to attributes
        this.color= color;
        this.gender= gender;
    }
}

function main(){
    var newDog = new Dog("Fiddo", "Lab", "brown", "male");
    alert(newDog.name);
    alert(newDog.breed);
    alert(newDog.color);
    alert(newDog.gender);
}

main();    //calling main function