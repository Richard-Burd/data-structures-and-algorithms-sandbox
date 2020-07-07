/*
https://www.youtube.com/watch?v=FAZwuNMJKDA&list=PLD_PIFu4jYOuMnFRKQbl21_jZvtxsIFuz&index=5
Classical Fizzbuzz Problem

write a program to print the screen numbers 1 to n.  For multiples of 3, print 'fizz';
for multiples of 5, print 'buzz'; for multiples of both 3 & 5 print 'fizzbuzz'

*/

((num) => {
  for(let i=1; i<=num; i++)
  {
    // check for 15
    if(i%3===0 & i%5===0)
    {
      console.log("fizzbuzz");
      ++i;
    }
    // check for 3
    if(i%3===0)
    {
      console.log("fizz");
      ++i;
    }
    // check for 5
    if(i%5===0)
    {
      console.log("buzz");
      ++i;
    }
    // check for 3 again so 6 will work
    {
      console.log("fizz");
      ++i;
    }
    // else
    if(i>=num) break;
    else console.log(i);
  }
})(215)
