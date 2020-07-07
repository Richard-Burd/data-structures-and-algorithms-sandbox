// https://www.youtube.com/watch?v=6Wzj7kxfRdI

//////////////////////////////////////////////////////
var myArray = ['a', 'b', 'c', 'd']
// modifies original array
myArray.push("end")
myArray.unshift("start")

console.log(myArray)

// ES6
myArray = ["first", ...myArray, "last"]
console.log(myArray)

//////////////////////////////////////////////////////
// how do you create a private variable in JavaScript?
function secretVariable(){
  const prati = "secret code";
  return function innerFunction(){
    return prati
  }
}
// this will return: [Function: innerFunction]
console.log(secretVariable())

var getPrivateVariable = secretVariable()
// this will return "secret code"
console.log(getPrivateVariable())

//////////////////////////////////////////////////////
// what is the output of this function?
var num = 4;         // just here to throw you off...doesn't run
function outer(){    // first this runs...
  var num = 2        // just here to throw you off...doesn't run
  function inner(){  // ...then this runs...
    num++;           // can't access 'var num = 2' above
    var num = 3;     // the var 'num' is set here...
    console.log(num) // ...here the var 'num' is set
  }
  inner();           // the inner one is ran...
}
outer();             // ...but the outer one is ran first.

//////////////////////////////////////////////////////
// what will this return?
console.log(typeof typeof 1); // a string
// why? ... look at the order of operations (inner "()" goes first:
// (typeof(typeof 1)) first gives you "number"...
// ...and typeof "number" will give you a string.

//////////////////////////////////////////////////////
// Find secret identity.
var hero = {
  _name: 'John Doe',
  getSecretIdentity: function(){
    return this._name;
  }
};

var stoleSecretIdentity = hero.getSecretIdentity;

console.log(stoleSecretIdentity());
console.log(hero.getSecretIdentity());
