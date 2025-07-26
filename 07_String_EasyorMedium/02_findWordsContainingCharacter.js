const words = ["leet", "code", "call"],
  x = "e";

// ✅Approach - 1
function solution1(words, x) {
  const ans = [];
  words.forEach((word, idx) => {
    if (word.includes(x)) {
      ans.push(idx);
    }
  });

  return ans;
}


// ✅Approach - 2 without using the .includes()
function solution2(words, x) {
  const ans = [];

  for(let i=0; i<words.length; i++) {
      for(let j=0; j<words[i].length; j++) {
          if(words[i][j] === x) {
            ans.push(i);
            break;
          }
      }
  }

//   words.forEach((word, idx) => {
//     for (let i = 0; i < word.length; i++) {
//       if (word[i] === x) {
//         ans.push(idx)
//         break;
//       }
//     }
//   });

  return ans;
}

console.log(solution2(words,x));


/*
    m -> no of words
    n -> max length of each word
    ⌛ Time complexity: O(m * n);
    💾 Space complexity: O(1) [excluding ans array]
*/