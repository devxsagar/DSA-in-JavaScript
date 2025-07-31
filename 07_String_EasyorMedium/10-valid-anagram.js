/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// Approach - 1
var solution = function (s, t) {
  // Initialize empty hash maps to store character frequencies of strings s and t
  let sMap = {};
  let tMap = {};

  // Count frequency of each character in string s
  for (let i = 0; i < s.length; i++) {
    if (!sMap[s[i]]) {
      sMap[s[i]] = 1; // If character not in hash, initialize with 1
    } else {
      sMap[s[i]]++; // If already present, increment its count
    }
  }

  // Count frequency of each character in string t
  for (let i = 0; i < t.length; i++) {
    if (!tMap[t[i]]) {
      tMap[t[i]] = 1;
    } else {
      tMap[t[i]]++;
    }
  }

  // Get the list of unique keys (characters) from both hash maps
  let sKeys = Object.keys(sMap); // array of keys
  let tKeys = Object.keys(tMap); // array of keys

  // If the number of unique characters is different, return false
  if (sKeys.length !== tKeys.length) return false;

  // Compare each character's frequency from sMap with tMap
  for (let key of sKeys) {
    if (!tMap.hasOwnProperty(key)) return false; // If key doesn't exist in tMap, return false
    if (sMap[key] !== tMap[key]) return false; // If frequencies don't match, return false
  }

  // All checks passed, the character frequencies match
  return true;
};

// Approach - 2
function solution2(s, t) {
 return s.split("").sort().join("") === t.split("").sort().join("")
}

// Time: O(nlogn), space: O(n)

// Approach - 3
var solution3 = function(s, t) {
    if(s.length !== t.length) return false;

    let sMap = {};

    for(let i=0; i<s.length; i++) {
        if(!sMap[s[i]]) {
            sMap[s[i]] = 1;
        } else {
            sMap[s[i]]++;
        }
    }

    for(let i=0; i<t.length; i++) {
        if(!sMap[t[i]] || sMap[t[i]] < 0) {
            return false;
        } else {
            sMap[t[i]]--
        }
    }

    return true;
};

// Time: O(n), space: O(1)

const s = "anagram", t = "nagaram";
console.log(solution2(s, t));
