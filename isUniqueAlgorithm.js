// https://www.youtube.com/watch?v=lFtRizkzeOQ&list=PLD_PIFu4jYOuMnFRKQbl21_jZvtxsIFuz&index=7
// Implement an algorithm to determine if a string has all unique characters

const isUnique = (str) => {
  const obj = {};
  for(let i of str)
    (!obj[i]) ? obj[i]=1 : obj[i]++; // ternary operator
  for(let i in obj)
  {
    if(obj[i] > 1)
      return false;
  }
  return true;
}

console.log({
  firstExample: isUnique("abc"),  //=> true ... each character is unique
  secondExample: isUnique("aba") //=> false ... two 'a's in the word
});
