// https://www.youtube.com/watch?v=qr8gVl3rypc&list=PLD_PIFu4jYOuMnFRKQbl21_jZvtxsIFuz

/*
given a string, reverse it
*/
let myString = "Apple"

myString.split("").reverse() // <= [ 'e', 'l', 'p', 'p', 'A' ]

const revString = (str) => {
  const arr = str.split(""); // <= [ 'A', 'p', 'p', 'l', 'e' ]
  arr.reverse();             // <= [ 'e', 'l', 'p', 'p', 'A' ]
  str = arr.join("");
  return str
}

console.log(revString("Apple"));

// solution 2 - use IIFE
(function(string) {
  let reversed = "";
  for(let character of string)
  {
    reversed = character + reversed;
  }
  console.log({
    reversed_value: reversed
  })
})("Greetings!");
