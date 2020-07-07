// https://www.youtube.com/watch?v=uxzDuDd5T_I&list=PLD_PIFu4jYOuMnFRKQbl21_jZvtxsIFuz&index=2
// Find a palindrome; a word that is the same fron & back

/*
1.) reverse the string
2.) check w/original string
*/

const Palindrome = (str) => {
  // change to array ".split('')",
  // then reverse array with ".reverse()",
  // then convert to string with ".join('')"
  const isPalindrome = str.split('').reverse().join('');
  console.log(str === isPalindrome);
}
Palindrome("abba") // <= true
Palindrome("zabba") // <= false

/////////////// now with an IIFE:
(function(string){
  let reversed = '';
  for (let x of string)
  {
    reversed = x + reversed;
  }
  console.log(string === reversed);
})("david")
