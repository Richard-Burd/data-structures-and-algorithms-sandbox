// https://www.youtube.com/watch?v=MY0UBGX2FtA
/*
1.) Explain event delegation.
    A:  JS event listeners fire not only on a single DOM element, but on all its descendents.

2.) Describe event bubbling.
    A:  Inverse of this.  Also known as propogation, events on an element will "bubble up" and also fire on all parents.

3.) What's the difference between "target" and "currentTarget"?
    A:  The latter is the element with the listener attached, the former is the actual element that triggered it.

4.) Explain why the following doesn't work as an Immediately Invoked Function Expression (IIFE):
*/
//function firstFoo(){
//  // i pitty this code
//}();

function secondFoo(){
  // i am known as a definition or statement
};

var thirdFoo = function(){
  // i am an expression
  // i resolve to a value, even if just "undefined"
};
// so to properly make firstFoo an IIFE, it must be in brackets:
( function firstFoo(){return "I'm firstFoo & I'm firing!"})();
// IIFE's are used to control variable scope b.c. if you do this:
// console.log(firstFoo); <= ReferenceError: firstFoo is not defined
// ...you will not be able to access stuff in those brackets "()"

/*
5.) Undeclared
*/
