/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
  this.name = name;
  this.isFlying = false;
}
Airplane.prototype.takeOff = function () {
  this.isFlying = true;
};
Airplane.prototype.land = function () {
  this.isFlying = false;
};


/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

//create a constructor function for Person
//it takes 3 properties: name, age, stomach - empty array

function Person(attributes) {

  this.name = attributes.name;
  this.age = attributes.age;
  this.stomach = [];
};

//create an eat functionthat gives the person the ability
//to eat, so it has a parameter of something that we can pass food into as an argument

//if stomach length < 10, the person can eat
// we want to push arguments to the new array

Person.prototype.eat = function(edible){
  if(this.stomach.length < 10){
  this.stomach.push(edible);
  }
};

//create a poop method that empties the stomach
Person.prototype.poop = function(){
    //can reset to just be an empty array again :) 
    //faster than .pop as you're going to empty the whole thing
    this.stomach = [];
};

// method called toString - needs to return a string with
//a name and age
Person.prototype.toString = function(){
  return `${this.name}, ${this.age}`;
};

//let's test this, so we'll create a person object

personOne = new Person({
  name: 'Tyler',
  age: 29
});

//not hoisted

console.log(personOne.toString());

personOne.eat('cabbage');
console.log(personOne.stomach);

//you need the paraenthesis to invoke it
personOne.poop();
console.log(personOne.stomach);

/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

function Car(attributes) {
  this.model = attributes.model;
  this.milesPerGallon = attributes.milesPerGallon;
  this.tank = 0;
  this.odometer = 0;

};

Car.prototype.fill = function(gallons){
  this.tank += gallons;
};

Car.prototype.drive = function(distance){
  // let fuel = 
  // for(i = 0; i <= distance - milesPerGallon; i++ )
    this.odometer += distance;
    this.tank = this.tank - (distance / this.milesPerGallon);
      // if(this.tank <= 0){
      //   return `I ran out of fuel at ${this.odometer} miles!`
      // }
};

carOne = new Car({
  model: 'Prius',
  milesPerGallon: 40,
});

console.log(carOne.model);
//you can't just console log a function that simply does formulas
//you can console.log the odometer / parameter in the scope after :)

//eg: this will return undefined, because it's just doing a formula, 
//the formua being referenced puts content into the variable
//console.log(carOne.fill(13));
//the thing above doesn't return the actual variable
//to do that, do this instead:
carOne.fill(13);
console.log(carOne.tank);

carOne.drive(400);
console.log(carOne.tank);




/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/
function Baby(attributes) {
  //use call to bind this to the person
    Person.call(this, attributes);
    this.favoriteToy = attributes.favoriteToy;
};
//Baby function doesn't know about the Person prototype yet
Baby.prototype = Object.create(Person.prototype);
//this liks Person prototype together with Baby prototype
//eventually we'll get this free with the class keyword,
// but seeing Object.create() is good because it shows how 
//class works under the hood

Baby.prototype.play = function(){
  return `Playing with ${this.favoriteToy}`;
};

const babyOne = new Baby({
  name: 'Tara',
  age: .5,
  favoriteToy: 'Blocks'
});

console.log(babyOne.play());

/* 
  TASK 4

  In your own words explain the four principles for the "this" keyword below:
  1. Window / Global binding - when in the global scope 'this' will be the value of the window / console Object
  (aka: All of JS is an object!! The browser runs it.)
  2. Implicit binding - you imply that the object to the left of the dot is what "this" is referring to
  3. Explicit binding - call, apply, and bind - these are ways to tell the function directly what it is by passing 
  it in when it's invoked. 
  .call- you pass the arguments in one by one.
  .apply - you pass in arguments as an array and it is invoked immediately. You can pass in an array.
  .bind - you pass in the argument, but it isn't invoked immediately, it creates a new function that can be called later.
  4. New Binding using the 'new' keyword creates a new object and 'this' points to the new object.
  when a function is invoked as a constructor function, the 'new' keyword 'this' points to the object that is created
   
*/


///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
if (typeof exports !== 'undefined') {
  module.exports = module.exports || {}
  if (Airplane) { module.exports.Airplane = Airplane }
  if (Person) { module.exports.Person = Person }
  if (Car) { module.exports.Car = Car }
  if (Baby) { module.exports.Baby = Baby }
}


////////MORE PROTOTYPE CHALLENGES from TK

/* ==== Prototypes Challenge

  1. Study the console.log() and object method invocations at the bottom of the page. Update the Animal and Dog constructors so that the logs and methods match the commented result next to them.
  
  2. Stretch Challenge: Create a new constructor function called Cat. Add properties and a method unique to a cat.  Make sure cat inherits from Animal so you can use all of the properties and methods found there.


You can check your work here:

https://codepen.io/lambdaschool/pen/yxjRJa

*/


function Animal(attributes) {
  this.animalCommonName = attributes.animalCommonName;
  this.weight = attributes.weight;
  this.height = attributes.height;
  this.food = attributes.food;
};

Animal.prototype.eat = function() {
  console.log(`The ${this.animalCommonName} eats ${this.food}.`);
};

function Dog(dogAttributes) {
  // Connect the attributes so we can use the this keyword
  Animal.call(this, dogAttributes);
  this.bark = dogAttributes.bark;
  this.name = dogAttributes.name;
};

// Set up our __proto__ inheritance to Animal
Dog.prototype = Object.create(Animal.prototype);


Dog.prototype.speak = function(){
  return `${this.name} says: ${this.bark}`;
};

const dog = new Dog({
  'name': 'Dr. Doggo',
  'animalCommonName': "dog",
  'weight': 40,
  'height': 12,
  'food': 'meat',
  'bark': 'Woof!'
});

console.log(dog.animalCommonName); // "dog"
console.log(dog.eat()); // "The dog eats meat"
console.log(dog.speak()); // "Dr. Doggo says: Woof!"



////////////TK Kit Prototype / Inheritance practice



function Fruit(attributes){
  this.type = attributes.type;
  this.name = attributes.name;
  this.isRipe = attributes.isRipe;
  this.calories = attributes.calories
};

Fruit.prototype.calculateCalories = function(){
  return this.calories * 100
};

Fruit.prototype.shipped = function(destination){
  //you could add === true but it's not needed here
  if(this.name.includes('ies')){
    //not console.log for this as we'll console.log in testing.
    //if we console.log 2 times then it will return undefined as 
    //the browser will try to console log a console.log that has already been (there must be a better way to explain that)
    return`The ${this.name} were shipped to ${destination}.`
    } else {
    return`The ${this.name} was shipped to ${destination}.`
  }
};

//DO NOT name the fvariable "isRipe" as when you call this, 
// later on to invoke it, it matches a variable in another scope
//which throws off the browser.
//be descriptive with the function names
//better to make them verbs and the variables are the nouns 
//at least for this case.
Fruit.prototype.checkIsRipe = function(){
  if(this.isRipe === true){
    //not perfect but for the purposes of practicing an if statement:

      if(this.name.includes('ies')){
        return `Yes, the ${this.name} are ripe!`}
      else {
        return `Yes, the ${this.name} is ripe!`
      }
  } else {
    if(this.name.includes('s')){
        return `Nope, the ${this.name} are done for.`
      } else {
        return `Yes, the ${this.name} is a gonner.`}
      }
};


const cherry = new Fruit({
  type: 'Rainier',
  name: 'Cherries',
  isRipe: true,
  calories: .77
});

const grape = new Fruit({

});

function Tropical(attributes){
  Fruit.call(this, attributes);
  this.tang = attributes.tang;
};
//for the Tropical child to inherit the Fruit's prototype we need to do this:
Tropical.prototype = Object.create(Fruit.prototype);

const pineapple = new Tropical({
  name: 'pineapple',
  tang: 'intense',
});
console.log(Tropical);
console.log(pineapple.tang);

// console.log(cherry.shipped('mexico'));



function Zimmery(attributes){
  Fruit.call(this, attributes);
  this.revenuePerItem = attributes.revenuePerItem;
  this.costPerItem = attributes.costPerItem;
};
//now you can create a method that you can invoke on objects
//adding .this enables you to not have to pass in arguments 
//as the 'this' does it for you through implicit / new binding!
//as seen in the invoking of profit on banana below.

//don't forget the .prototype! it makes Fruit become the prototype!
//Fruit becomes the parent

Zimmery.prototype = Object.create(Fruit.prototype);



Zimmery.prototype.profit = function(){
  return this.revenuePerItem - this.costPerItem;
};

const banana = new Zimmery({
  name: 'Banana',
  type: 'Big Mike (Gros Michel)',
  costPerItem: .5,
  revenuePerItem: 1,
  calories: 1
});

console.log(banana.profit());

console.log(banana.calculateCalories());
console.log(pineapple.shipped('Alaska'));

//because we have return in the function, we should console.log to test
//if the function's result would bring console.log then no need to do that here,
//we could just invoke it
console.log(cherry.shipped('Arkansas'));

console.log(cherry.checkIsRipe());











