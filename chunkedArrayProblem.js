// https://www.youtube.com/watch?v=cL1HB_IC9Fc&list=PLD_PIFu4jYOuMnFRKQbl21_jZvtxsIFuz&index=6
/*
write a function, 'chunk(arr,n)', that returns chunked array of size 'n' at the least.
Given Array:  [1, 4, 12, 3, 2, 6, -9, 0] Given (n) value = 3
Return Value: [[1,4,12], [3,2,6], [-9,0]] ... first 3 grouped, second 3 grouped, then last 2 remaining.

Given Array:  [1, 4, 12, 3, 2, 6, -9, 0] Given (n) value = 4
Return Value: [[1, 4, 12, 3], [2, 6, -9, 0]] ... first 4 grouped, second 4 grouped, none are remaining.

STEPS:
1.) create an array called "chunked" = []
2.) get the last chunked array within last = "chunked"
3.) check if last exist OR size equals n.  If it does exist, push into "chunked" ELSE push into "last"
4.) return "chunked"
*/

const chunks = ((arr, n) => {
  // 1.) create an array called "chunked" = []
  const chunked = [];

  for(let elem of arr) {
    // 2.) get the last chunked array within last = "chunked"
    let last = chunked[chunked.length-1];

    // 3.) check if last exist OR size equals n.
    //     If it does exist, push into "chunked" ELSE push into "last"
    if(!last || last.length===n)
      chunked.push([elem])
    else
      last.push(elem)
  }
  return chunked;
})([1, 4, 12, 3, 2, 6, -9, 0],3)

console.log({
  chunks
});
