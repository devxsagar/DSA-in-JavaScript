var singleNonDuplicate = function (arr) {
  let l = 0;
  let r = arr.length;

  while (l <= r) {
    // Find the middle index
    let mid = l + Math.floor((r - l) / 2);

    //Mid element forms a pair with its left neighbor
    if (arr[mid] === arr[mid - 1]) {
      // Count of elements on the left side (excluding this pair)
      let leftCount = mid - 1 - l;

      // If left side count is odd, unique element lies in the left half
      if (leftCount % 2 === 1) {
        r = mid - 2;
      } else {
        l = mid + 1;
      }
    }
    // Mid element forms a pair with its right neighbor
    else if (arr[mid] === arr[mid + 1]) {
      // Count of elements on the left side
      let leftCount = mid - l;

      // If left side count is odd, unique element lies in the left half
      if (leftCount % 2 === 1) {
        r = mid - 1;
      } else {
        l = mid + 2;
      }
    }
    // Mid element does not match left or right → it's the unique one
    else {
      return arr[mid];
    }
  }
};

/**
 *  Time Complexity: O(log n)
 *  Space Complexity: O(1)
 */


const arr = [1, 1, 2, 3, 3, 4, 4, 8, 8];
console.log(singleNonDuplicate(arr));
