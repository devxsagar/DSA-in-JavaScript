var guessNumber = function (n) {
  // left and right pointers
  let lPtr = 1;
  let rPtr = n;

  while (lPtr <= rPtr) {
    let mid = lPtr + Math.floor((rPtr - lPtr) / 2);

    // guess(mid) is a given API:
    // Returns:
    //   0 → mid is the correct number
    //   1 → my number is higher than mid
    //  -1 → my number is lower than mid
    let res = guess(mid);

    if (res === 0) {
      return mid; // found the correct number
    } else if (res === 1) { // number is greater than mid → search right half
      lPtr = mid + 1;
    } else { // number is less than mid → search left half
      rPtr = mid - 1;
    }
  }
};
