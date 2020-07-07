// https://www.youtube.com/watch?v=qRNB8CV3_LU
// Find the longest sequence of characters in
// the string:
// "AABCDDBBBEA" => "BBB"
function longestSequence(sequence){
  maxCount = 0;
  maxCharacter = null;
  previousCharacter = null;
  for (current in sequence) {
    if (previousCharacter == current){
      count++
    } else {
      count = 1
    }
    if (count > maxCount) {
      maxCount = count;
      maxCharacter = current;
      previousCharacter = current;
      return {maxCharacter: maxCount}
    }
  }
}

longestSequence("AABCDDBBBEA")







// https://www.youtube.com/watch?v=10WnvBk9sZc
// write a function that takes two strings,
// s1 and s2 ... and returns the longest common
// subsequence of s1 and s2

/*
"ABAZDC", "BACBAD" => "ABAD"
"AGGTAB", "GXTXAYB" => "GTAB"
"aaaa", "aa" => "aa"
*/
function longestSubSequence(s1, s2) {

}
