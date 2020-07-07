/*
https://www.youtube.com/watch?v=qaVSOrlCQtQ&list=PLD_PIFu4jYOuMnFRKQbl21_jZvtxsIFuz&index=3

How to find the maximum character in a string and how many times it appear

string1 = "32eddseew3"
string2 = "#%he3#3311#1#o"

Steps:
1.) create an object
2.) if the character of string does not exist in object,
    then set its value to 1
3.) if it does, do an increment
*/

const maxChar = (str) => {
  // 1.) create an object
  let obj = {};
  // 2.) if the character of string does not exist in object, then set its value to 1
  //     do this with a "for of" loop:
  for(let char of str)
    (!obj[char]) ? obj[char]=1 : obj[char]++; // ternary operator
    // console.log(obj); // => { '3': 1, h: 1, e: 1, L: 3, o: 2, '$': 2, p: 1 }
    let maxNum = 0;
    let maximumChar = '';

  for(let char in obj)
  {
    if(obj[char] >= maxNum)
    {
      maxNum = obj[char];
      maximumChar = char;
    }
  }
  console.log(`${maximumChar} appears ${maxNum} times`);
}
maxChar("heLLLoo$$3p"); // => L appears 3 times
