const s = "  fly  me to   the  moon   ";

// ✅ Approach - 1 (Not good for interviews)
function lengthOfLastWord(char) {
  const lastWord = char.trim().split(" ");

  const length = lastWord[lastWord.length - 1].length;

  return length;
}

/* 
    .trim() -> Time complexity is O(n);
    .split() -> Time complexity is O(n);
    .split() -> space complexity is O(n) cause it creates an array of length of string

    ⌛ Time Complexity: O(n)
    💾 Space Complexity: O(n)

*/

// ✅ Approach - 2
function lengthOfLastWord2(s) {
  let n = s.length - 1; // Last index of the string
  let count = 0;

  // Remove the extra space from the end
  while (n >= 0) {
    if(s[n] !== " ") break;

    n--
  }

  // Count the character
  while (n >= 0) {
    if(s[n] === " ") break;

    count++;
    n--
  }
  return count;
}

/* 
    ⌛ Time Complexity: O(n)
    💾 Space Complexity: O(1)
*/


// ✅ Approach - 3
function lengthOfLastWord3(s) {
    let n = s.length - 1;
    let count = 0;

    while(n >= 0) {
        if(s[n] !== " "){
            count++;
        } else if (count > 0) {
            break;
        }
        n--;
    }

    return count;
}

/* 
    ⌛ Time Complexity: O(n)
    💾 Space Complexity: O(1)
*/




console.log(lengthOfLastWord3(s));
