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


// OBJECT CREATION PROTOTYPES SUMMARY
console.log('\nOBJECT CREATION PROTOTYPES SUMMARY>>>');
//LITERAL NOTATION
var person = {
  name: 'Hec',
  age: 40
};
console.log(person instanceof Object);

// NEW Object
var person = new Object();
person.name = 'Hec';
person.age = 40;

// Object.create 
var person = Object.create(null);
person.name = 'Hec';
person.age = 40;
console.log(person instanceof Object);

// CONSTRUCTOR FUNCTION
function Person() {
  this.name = 'hec';
  this.age = 40;
}
var person = new Person();


// THE THIS KEYWORD AND WHY IT MIGHT BEHAVE STRANGELY
console.log('\nTHE THIS KEYWORD AND WHY IT MIGHT BEHAVE STRANGELY>>>');
function fn(){
  console.log(this);
}
fn();

var obj = {
  obfn: fn
};
obj.obfn();
obj.obfn.bind(this)();

var person = {
  name: 'Hec'
};
obj.obfn.bind(person)();


// HANDLING THIS WITH BIND CALL APPLY
console.log('\nHANDLING THIS WITH BIND CALL APPLY>>>');
function fn(message) {
  console.log(message + this.name);
}

var obj = {
  obfn: fn
};

var person = {
  name : 'Hec'
};

obj.obfn.bind(person, 'Hello ')();
obj.obfn.call(person, 'Hello ');  // Ejecucion inmediata
obj.obfn.apply(person, ['Hello ']); // Array de argumentos


// CREATING PROPERTIES WITH DEFINEPROPERTY
console.log('\nCREATING PROPERTIES WITH DEFINEPROPERTY>>>');
var account = {
  cash: 12000,
  _name: 'Default',
  withraw: function(amount) {
    this.cash -= amount;
    console.log('Withdrew ' + amount + ', new cash reserve is: ' + this.cash);
  }
};

Object.defineProperty(account, 'deposit', {
  value: function (amount) {
    this.cash += amount;
  }  
});

account.deposit(3000);
account.withraw(1000);

Object.defineProperty(account, 'name', {
  // Definicion de ATTRIBUTE de la PROPERTY
  // value: 'Aine',
  // writable: true,

  // Cuando se define un GET y un SET
  // no se permite el ATTRIBUTE VALUE
  get: function (){
    return 'Hola ' + this._name + ', dijo el get ';
  },
  set: function (name){
    if (name == 'Hec') {
      this._name = name + '(seted)';
    }
  }
});

console.log(account.name); // Ejecucion implicita de metodo GET
account.name = 'ID000-3'; // Ejecucion implicita de metodo SET
console.log(account.name); 
console.log(account._name); 


// IMPORTANT BUILT IN METHODS AND PROPERTIES
console.log('\nIMPORTANT BUILT IN METHODS AND PROPERTIES>>>');
var person = {
  name: 'Hec',
  secondName: 'BecMe',
  age: 40,
  greet: function() {
    console.log('Hello');
  }
};

// Borra PROPERTY
delete person.name;
console.log(person.name);

// Busca PROPERTY
console.log('secondName' in person);
console.log('name' in person);

for (var field in person){
  console.log(field);
}

for (var field in person){
  console.log(field + ' = ' + person[field]);
}

console.log(person);
