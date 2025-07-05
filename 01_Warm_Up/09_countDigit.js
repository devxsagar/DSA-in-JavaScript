function countDigit(num) {
  if (num == 0) return 1;

  // Converting -ve numbers to +ve
  num = Math.abs(num);

  let count = 0;

  while (num > 0) {
    num = Math.floor(num / 10);
    count++;
  }

  return count;
}

let num = -32;

let ans = countDigit(num);
console.log(ans);

/* Corner cases
     - num is zero(0).
     - num is a -ve number.
*/