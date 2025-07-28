const s = "RLRRRLLRLL";

// Approach - 1
var balancedStringSplit = function (s) {
  let countR = 0;
  let countL = 0;
  let balanced = 0;

  for (let i = 0; i < s.length; i++) {
    s[i] === "R" ? countR++ : countL++;

    if (countR === countL) {
      balanced++;
      countR = 0;
      countL = 0;
    }
  }

  return balanced;
};

// Approach - 2
var balancedStringSplit2 = function (s) {
  let temp = 0;
  let balanced = 0;

  for (let i = 0; i < s.length; i++) {
    s[i] === "R" ? temp++ : temp--;

    if (temp === 0) {
      balanced++;
    }
  }

  return balanced;
};

console.log(balancedStringSplit2(s));

// Time: O(n), Space: O(1)