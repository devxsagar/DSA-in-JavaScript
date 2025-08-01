/**
 * @param {string[]} s
 * @return {string[][]}
 */
var solution1 = function (s) {
  let map = {};
  for (let i = 0; i < s.length; i++) {
    // This sorted string will be the key (all anagrams will have the same sorted form)
    let sort = s[i].split("").sort().join("");

    // If this sorted form doesn't exist in the map yet, create a new array
    if (!map[sort]) {
      map[sort] = [s[i]];
    } else {
      // If it already exists, push the current string into the existing array
      map[sort].push(s[i]);
    }
  }

  // Return only the values (arrays of anagrams) from the map
  return Object.values(map);
};

function solution2(s) {
  // Create a map to group words by their character frequency pattern
  let map = {};

  // Loop over each string in the array 's'

  for (let i = 0; i < s.length; i++) {
    // Create a frequency array for all 26 lowercase letters
    // Initially, all letter counts are 0
    let freqArr = Array(26).fill(0);

    // Current string
    let str = s[i];

    // Count the frequency of each character in the current string
    for (let j = 0; j < str.length; j++) {
      // Find the position of the letter (0 for 'a', 1 for 'b', etc.)
      let index = str[j].charCodeAt(0) - "a".charCodeAt(0);
      // Increment the count for this letter
      freqArr[index]++;
    }

    // Create a unique key from the frequency array
    // e.g., for "eat" -> "#1#0#0#0#1#0#0#0#0#0#1..."
    let key = "";
    for (let k = 0; k < 26; k++) {
      key = key + "#" + freqArr[k];
    }

    // If this frequency pattern has not been seen before, create a new group
    if (!map[key]) {
      map[key] = [s];
    } else {
      // If the pattern exists, add the current string to the group
      map[key].push(s);
    }
  }

  // Return all groups of anagrams as an array
  return Object.values(map);
}

const s = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(solution2(s));
