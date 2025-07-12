// LeetCode Problem No: 231

function powerOfTwo(n) {
  // base condition
  if (n === 1) return true;

  // n < 1 or n is odd then returning false
  if (n < 1 || n % 2 !== 0) return false;

  // recursive condition
  return powerOfTwo(n / 2);
}

const ans = powerOfTwo(8);
console.log(ans);
