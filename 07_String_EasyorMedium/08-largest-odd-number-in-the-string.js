var largestOddNumber = function (num) {
  for (let i=num.length-1; i>=0; i--) {
    if (Number(num[i]) % 2 !== 0) {
      return num.substring(0,i+1);
    }
  }

  return "";
};

const num = "10133890";

console.log(largestOddNumber(num));


//Time: O(n), Space: O(1)