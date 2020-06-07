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