const s = "abcdefg",
  k = 2;

var reverseStr = function (s, k) {
  s = s.split("");

  for (let x = 0; x < s.length; x = x + 2 * k) {
    let mid = k / 2;

    for (let i = 0; i < mid; i++) {
      let temp = s[x + i];
      s[x + i] = s[x + k - 1 - i];
      s[x + k - 1 - i] = temp;
    }
  }

  return s.join("");
};

console.log(reverseStr(s, k));


// Time: O(n); 
// Space: O(n) -> if string is mutable then O(1)