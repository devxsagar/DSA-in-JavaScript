function binarySearch(arr, target) {
  let lp = 0;
  let rp = arr.length - 1;

  // For loop
  // for (let i = 0; i < arr.length; i++) {
  //   let mid = Math.floor((lp + rp) / 2);

  //   if (arr[mid] === target) {
  //     return mid;
  //   } else if (target > arr[mid]) {
  //     lp = mid + 1;
  //   } else if (target < arr[mid]) {
  //     rp = mid - 1;
  //   }
  // }

  // While loop ( use this in this type of search)
  while (lp <= rp) {
    let mid = Math.floor((lp + rp) / 2);

    if (target === arr[mid]) {
      return mid;
    } else if (target > arr[mid]) {
      lp = mid + 1;
    } else if (target < arr[mid]) {
      rp = mid - 1;
    }
  }

  return -1;
}

// Time: O(n) space: O(1)

const arr = [5];
let target = 5;
const ans = binarySearch(arr, target);
console.log(ans);
