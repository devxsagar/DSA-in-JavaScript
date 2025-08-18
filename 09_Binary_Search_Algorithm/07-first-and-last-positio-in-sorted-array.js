var searchRange = function (arr, target) {
  let l = 0;
  let r = arr.length - 1;

  // Initialize answer with [-1, -1] (default if target not found)
  let ans = [-1, -1];

  // ------ Find the FIRST occurrence ------
  while (l < r) {
    let mid = l + Math.floor((r - l) / 2);

    if (arr[mid] < target) {
      l = mid + 1;
    } else {
      r = mid;
    }
  }

  // After the loop, l == r (potential first occurrence)
  if (arr[r] === target) ans[0] = r;

  //  ------ Find the LAST occurrence ------
  l = 0;
  r = arr.length - 1;
  count = 0;

  while (l < r) {
    let mid = l + Math.ceil((r - l) / 2);

    if (arr[mid] > target) {
      r = mid - 1;
    } else {
      l = mid;
    }
  }

  // After the loop, l == r (potential last occurrence)
  if (arr[l] === target) ans[1] = l;

  return ans;
};

const arr = [2, 2];
const ans = searchRange(arr, 2);
console.log(ans);
