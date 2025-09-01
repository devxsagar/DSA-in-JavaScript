// LeetCode - 2264

var largestGoodInteger = function (num) {

  let maxVal = -1;

   for (let i = 0; i < num.length - 2; i++) {
    if (num[i] === num[i + 1] && num[i] === num[i + 2]) {
      maxVal = Math.max(maxVal, Number(num[i]));
    }
  }

  if (maxVal === -1) return "";

  let ansStr = "";

  for (let i = 0; i < 3; i++) {
    ansStr += String(maxVal);
  }

  return ansStr;
};

const num = "2300019";
let ans = largestGoodInteger(num);
console.log(ans);
