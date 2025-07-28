const s = "successes";

function solution1(s) {
  const map = {};

  for (let i = 0; i < s.length; i++) {
    // if (!map[s[i]]) {
    //   map[s[i]] = 1;
    // } else {
    //   map[s[i]]++;
    // }

    !map[s[i]] ? map[s[i]] = 1 : map[s[i]]++;
  }

  const vowels = ["a", "e", "i", "o", "u"];
  let maxV = 0;
  let maxC = 0;
  let mapKeys = Object.keys(map); // [ 's', 'u', 'c', 'e' ]

  //   for (let i = 0; i < mapKeys.length; i++) {
  //     if (vowels.includes(mapKeys[i])) {
  //       maxV = Math.max(maxV, map[mapKeys[i]]);
  //     } else {
  //       maxC = Math.max(maxC, map[mapKeys[i]]);
  //     }
  //   }

  for (let char of mapKeys) {
    if (vowels.includes(char)) {
      maxV = Math.max(maxV, map[char]);
    } else {
      maxC = Math.max(maxC, map[char]);
    }
  }

  return maxV + maxC;
}

console.log(solution1(s));


// Time: O(n) , Space: O(1)     