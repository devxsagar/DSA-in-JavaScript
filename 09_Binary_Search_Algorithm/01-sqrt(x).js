

// Linear Search
var mySqrt1 = function (x) {
  if (x === 0 || x === 1) return x;

  for (let i = 1; i <= x; i++) {
    let sq = i * i;

    if (sq > x) {
      return i - 1;
    }
  }
};

const x = 15;

var mySqrt = function (x) {
  // if x is 0 or 1, the square root is the same as x
  if (x < 2) return x;

  // start from 2, since 0 and 1 are already handled
  let lPtr = 2;

  // the square root of x will always be <= x/2
  let rPtr = Math.floor(x / 2);

  // perform binary search
  while (lPtr <= rPtr) {
    // let mid = Math.floor((lPtr + rPtr) / 2);

    // avoid potential overflow
    let mid = lPtr + Math.floor((rPtr - lPtr) / 2);

    // if mid*mid is exactly x → we found the perfect square root
    if (mid * mid === x) {
      return mid;
    } else if (mid * mid > x) {
      // if mid*mid is greater than x, discard the right half
      rPtr = mid - 1;
    } else {
      // if mid*mid is less than x, discard the left half
      lPtr = mid + 1;
    }
  }

  // if x is not a perfect square
  // rPtr will be the integer part of sqrt(x)
  return rPtr;
};

/**
 *  Time Complexity: O(logn);
 *  Space Complexity: O(1);
 */

const ans = mySqrt(x);
console.log(ans);
