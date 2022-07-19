// Write a class called Unicorn
// it should have a dynamic name property
// it should have a color property, that is silver by default
// it should have a method called "say" that returns whatever string is passed in, with "*~*" at the beginning and end of the string

class Unicorn {
  constructor(name){
  this.name = name;
  this.color = "silver"; 
  this.sentence = "Hi";
  }
  changeSentence(newSentence){
    this.sentence = newSentence;
  }
}
var horse1 = new Unicorn("Friday");
console.log(horse1);

horse1.changeSentence(`*~* ${horse1.sentence} *~*`);
  console.log(horse1);  

// Write a class called Vampire
// it should have a dynamic name property
// it should have a pet property, that is a bat, by default BUT it could be dynamic if info is passed in initially
// it should have a thirsty property, that is true by default
// it should have a drink method. When called, the thirsty property changes to false

class Vampire {
  constructor(name){
    this.name = name;
    this.animal = "Bat";
    this.thirst = "True";
  }   
  changeThirst(newThirst){
    this.thirst = newThirst;
  }
}
  var bat1 = new Vampire("Dracula");
 console.log(bat1);

bat1.changeThirst("False");
console.log(bat1);

//  Write a Dragon class
// it should have a dynamic name property (string)
//  it should have a dynamic rider property (string)
//  it should have a dynamic color property (string)
//  it should have a isHungry property that is true by default
//  it should have a eat method. If the dragon eats 4 times, it is no longer hungry
  // HINT: This requires you to use your knowledge from the conditionals lesson

class Dragon{
  constructor(name, rider, color){
    this.name = name;
    this.rider = rider;
    this.color = color;
    this.isHungry = "True";
  }

  changeIsHungry(newisHungry){
    this.isHungry = newisHungry;
  }
  
}
var eats = 4;
var dragon1 = new Dragon("Henry", "Jack", "Blue");
console.log(dragon1);
if (eats === 4){
 dragon1.changeIsHungry("False");
console.log(dragon1); 
}

//  BIG CHALLNEGE: Write a Hobbit class
//  it should have a dynamic name property (string)
//  it should have a dynamic disposition property (string)
//  it should have an age property that defaults to 0
//  it should have a celebrateBirthday method. When called, the age increases by 1
//  it should have an isAdult property (boolean) that is false by default. once a Hobbit is 33, it should be an adult
//  it should have an isOld property that defaults to false. once a Hobbit is 101, it is old.
//  it should have a hasRing property. If the Hobbit's name is "Frodo", true, if not, false.
class Hobbit{
  constructor(name, disposition){
    this.name = name;
    this.disposition = disposition;
    this.age = 0;
    this.isAdult = "False";
    this.isOld = "False";
  }
  changeAge(newAge){
    this.age = newAge;
  }
  changeisAdult(newIsAdult){
    this.isAdult = newIsAdult;
  }
  changeIsOld(newIsOld){
    this.isOld = newIsOld;
  }
}
var hobbitsAge = 50
var hobbit1 = new Hobbit("Gary", "Happy");
console.log(hobbit1);
if (hobbitsAge >= 33 && hobbitsAge <= 100){
  hobbit1.changeisAdult("True")
} else if (hobbitsAge >= 101) {
  hobbit1.changeIsOld("True"); 
  console.log(hobbit1);
}

  
hobbit1.changeAge(hobbit1.age + 1);
console.log(hobbit1);
