var names = ['name1', 'name2', 'name3'];

// normal forEach method
names.forEach(function (name) {
  console.log('forEach', name);
});

// arrow function
// it is good to use in replace of anonymous function
// curly braces are there to put more than 1 statement
names.forEach((name) => {
  console.log('arrowFunc', name);
});

names.forEach((name) => console.log('arrowFunc without Curly braces', name));

var returnMe = (name) => name + '!';
console.log(returnMe('name4'));

var person = {
  name: 'name5',
  greet: function () {
    names.forEach((name) => {
      console.log(this.name + ' says hi to ' + name)
      // arrow function helps to use the 'this' binding
      // it allows this.name as compare to anonymous function
    });
  }
}

person.greet();

// challenge
function add (a, b) {
  return a + b;
}

console.log(add(1,3));

// addStatement
var addStatement = (a, b) => {
  return a + b;
}
console.log(addStatement(4,7));

// addExpression
var addExpression = (a, b) => a + b;
console.log(addExpression(7,-7));
