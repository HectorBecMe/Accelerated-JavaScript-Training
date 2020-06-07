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
};
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


// PROTOTYPES INTRODUCTION
console.log('\nPROTOTYPES INTRODUCTION>>>');
var personP = {
  name: 'Moshi',
  age: 3
};
console.log(personP.__proto__);
console.log(personP.toString());

Object.prototype.greet = function(){
  console.log('Hello there, I am !' + this.name + '!');
};

personP.greet();


// PROTOTYPES IN ACTION
console.log('\nPROTOTYPES IN ACTION>>>');
var personHec = Object.create(personP);
console.log(personHec.name); 
personHec.greet();

var personAnna = Object.create(personP);
personAnna.greet();

personAnna.name = 'Anna';
personAnna.greet();


// PROTOTYPES SUMMARY
console.log('\nPROTOTYPES SUMMARY>>>');
console.log(personAnna.__proto__ == personP);
console.log(personAnna.__proto__.__proto__ == Object.prototype);

console.log(Object.getPrototypeOf(personAnna));
console.log(Object.getPrototypeOf(personP));
console.log(Object.getPrototypeOf(personAnna) == personP);


// CONSTRUCTOR FUNCTIONS
console.log('\nCONSTRUCTOR FUNCTIONS>>>');
function PersonC() {
  this.name = 'Hec';
  this.greet = function (){
    console.log('Hello, I am ' + this.name);
  };
}


// Las definiciones de propiedades y las funciones
// inicializadas en la funcion contructora
// predominan, por sobre las  definicones
// agregadas al prototype de la funcion constructora
PersonC.prototype.name = 'Banana';
PersonC.prototype.greet = function () {
  console.log('Hello!');
};

var person = new PersonC();
console.log(person.name);
person.greet();

person.name = 'Aine';
console.log(person.name);
person.greet();

PersonC.prototype.name = 'Melon';
PersonC.prototype.greetGeneral = function (){
  console.log('Hello!');
};

var anotherPerson = new PersonC();
anotherPerson.greet();
anotherPerson.greetGeneral();

console.log(person instanceof PersonC);


// CONSTRUCTOR FUNCTIONS ARGUMENTS
console.log('\nCONSTRUCTOR FUNCTIONS ARGUMENTS>>>');
function Person(name, age) {
  this.name = name;
  this.age = age;
}

var hec = new Person('Hec', 40);
var moshi = new Person('Aine', 4);

console.log(hec);
console.log(moshi);


