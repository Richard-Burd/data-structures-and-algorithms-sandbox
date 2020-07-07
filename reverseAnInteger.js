// https://www.youtube.com/watch?v=MMztCtbhtd4&list=PLD_PIFu4jYOuMnFRKQbl21_jZvtxsIFuz&index=4
// Algorithm to reverse an integer
// e.g. take "15" and make it "51" or "137" and make it "731" et. al.

/*
STEPS:
1.) convert to a string first.
2.) turn into array
3.) reverse method (JS)
4.) back to string
5.) back to int
*/
const reverseInt = (n) => {
  return parseInt(n.toString().split('').reverse().join(''))
}
console.log({
  testcase1: reverseInt(51) //=> { testcase1: 15 }
})
