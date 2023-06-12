// THIS KEYWORD

dog.humanYears = function() {
  return this.age * 7
}

// Notice that the humanYears function has a keyword of 'this'. When 'this' is used in an object's method, it always refers to the object on which the method is called. So, when we run dog.humanYears(), 'this' will always refer to the object, dog. ('this' can also be used in other places, but it gets tricky depending on its context and we won't cover it in detail here.) We'll see more examples of 'this' in coming lessons!

//==============================Literal Notation vs Constructors

  // with literal notation, you create each individual object...which can be repetative if you're making a lot of objects.
  // with constructors, you create a blueprint (called a constructor), and plug in the properties as needed. 

//============================Lesson - Constructors and Prototypes

// a constructor is a function. It creates a 'blueprint' for making new objects of a specific type. You call the constructor function by using the 'new' keyword. 

// constructors are labeled in UpperCamelCase (first letter capitalized).

// ASIDE: primitives (except 'null' and 'undefined') are implicitly turned into objects to allow more functionality (this is behind the scenes stuff).

// SOMEWHAT ASIDE: some (not all) object constructors return 'array-like objects'. These are objects that are set up with numbers as their property keys. 
//Examples: Strings are array-like objects - their characters are assigned an index so we can use bracket notation to access a specific character.
//other examples: NodeList, and HTMLCollection

// object type: the type of object created with a construction
// object instance: a specific occurence of an object type

//            creating an object with a constructor:

// this is the constructor that creates the object type
      function Dog(dogName, dogColors, dogAge) {
        this.name = dogName;
        this.colors = dogColors;
        this.age = dogAge;
      }

// now we call the constructor to create an instance of the object type 'Dog'.
      let myPuppy = new Dog("Ernie", ["brown", "black"], 3);

// we can access the object's properties with dot-notation:
      myPuppy.age;
      myPuppy.colors;
      myPuppy.name;

//              Prototypes
// prototypes contain functionality of a specific object type, and are added as a property of that object constructor.
      Dog.prototype.speak = function() {
        console.log("Woof!");
      };

      Dog.prototype.humanYears = function() {
        return this.age * 7;
      };

// NOTE the use of semicolons. This is because prototypes are written as function expressions (as opposed to function declarations, which don't require semicolons)


//========================Lesson - Constructor and Prototype Methods
  
// Creating a Contact constructor:
  function Contact(firstName, lastName, phoneNumber) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
  }

// Creating a prototype method for Contact:
  Contact.prototype.fullName = function() {
    return this.firstName + " " + this.lastName;
  };

// Example
let testContact = new Contact("Ada", "Lovelace", "503-555-1111");

testContact.fullName(); //returns "Ada Lovelace"

//==============================Lesson: Objects within Objects

let pdx = { name: "Portland" };
let sfo = { name: "San Francisco" };
let sea = { name: "Seattle" };
let cso = { name: "Aktau" };
let dzn = { name: "Zhezkazgan" };

let usa = { name: "United States of America", cities: [pdx, sfo, sea] };
let kazakhstan = { name: "Kazakhstan", cities: [cso, dzn] };
let uruguay = { name: "Uruguay", cities: [] };

// access properties of nested objects using dot-notation (or other notation if applicable)

usa.name; // returns "United States of America"
usa.cities; // returns the array named 'cities'
usa.cities[0]; // returns {name: "Portland"}
usa.cities[0].name; // returns "Portland"

// more complex nested objects
let boxOfStuff = {
  book: "Object-Oriented JavaScript",
  smallerBox: {
    stuff: ["pencils", "pens"],
    smallestBox: {
      stuff: ["paper clips", "thumbtacks"]
    }
  }
};

//===========================Address Book: Objects Within Objects

function AddressBook() {
  this.contacts = {};
}

// use bracket notation to create a new key in nested objects:

AddressBook.prototype.addContact = function(contact) {
  this.contacts[contact.firstName] = contact;
};






//===============================Introduction to the Node Object

//===============================Looping Through Objects and Prototypal Inheritance

let mathematician = {
  firstName: "Ada",
  lastName: "Lovelace",
  profession: "Mathematician",
  funFact: "Daughter of Lord Byron",
  countryOfBirth: "England",
  yearOfBirth: 1815,
  yearOfDeath: 1852
}
//Loop Through Properties with Object.keys() *THIS IS THE PREFERRED WAY*
const adaKeys = Object.keys(mathematician);
  //Object.keys() returns an array of all the keys (just keys, not values) in an object.
let adaString = "";
adaKeys.forEach(function(key) {
  adaString = adaString.concat(key + ": " + mathematician[key] + "\n"); 
});

//Loop Through Properties with for...in
for (const key in mathematician) {
  if (contact.hasOwnProperty(key)) {
    console.log(mathematician[key]);
  }
}

//=====================LOOK UP

// look up: ||=;

