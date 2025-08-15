/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let l = 0; // left boundary (start of versions)
    let r = n; // right boundary (end of versions)

    while (l < r) {
      let mid = l + Math.floor((r - l) / 2);

      if (!isBadVersion(mid)) {
        // if mid is not bad, the first bad must be after mid
        l = mid + 1;
      } else {
        // if mid is bad, the first bad could be mid or before mid
        r = mid;
      }
    }

    // when loop ends, l == r and points to the first bad version
    return r;
  };
};

/**
 *  Time Complexity: O(logn);
 *  Space Complexity: O(1);
 */