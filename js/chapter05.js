// OBJECT BASICS LITERAL NOTATION
console.log('\nOBJECT BASICS LITERAL NOTATION>>>');
var name = 'Global Name';
var person = {  
  name: 'Hec',
  age: 40,
  detaild: {
    hobbies: ['Sports', 'Cooking'],
    location: 'Germany'
  },
  greet: function() {
    console.log('Hello, I am ' + this.name);
  },
  'first-name': 'hec-bec-me'
};

console.log(person.name);
console.log(person['name']);

var field = 'name';
console.log(person[field]);
console.log(person.detaild.hobbies);

person.greet();

console.log(typeof person);
console.log(typeof person.name);

console.log(person['first-name']);


// PROPERTIES THIS
console.log('\nPROPERTIES THIS>>>');
person.name = 'Aine';
console.log(person);


// ALTERNATIVE WAY OF CREATING OBJECTS USING THE OBJECT CONSTRUCTOR
console.log('\nALTERNATIVE WAY OF CREATING OBJECTS USING THE OBJECT CONSTRUCTOR>>>');
var anotherPerson = new Object();
anotherPerson.name = 'Hec';
anotherPerson.age = 40;
console.log(anotherPerson);


// OBJECTS ARE REFERENCE TYPES REFRESHER
console.log('\nOBJECTS ARE REFERENCE TYPES REFRESHER>>>');
console.log(anotherPerson == person);

var person1 = {  
  name: 'Hec',
  age: 40
}
console.log(person1 == person);


// OBJECT CREATE
console.log('\nOBJECT CREATE>>>');
var anotherPerson = Object.create(null);
anotherPerson.name = 'Anna';
console.log(anotherPerson);

var anotherPerson = Object.create(person);
anotherPerson.name = 'Anna';
console.log(anotherPerson);
console.log(anotherPerson.age);


